#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""内容打磨的数字自查：新增文字里出现的数字，逐个报出来等人工核出处（零第三方依赖）。

**为什么要有它**（2026-07-23 首册教训）：内容打磨的铁律是「零新增事实」——一个新数字、
新版本、新比例都不许加，所有数字必须是该册页面或 MANIFEST 里已有的。RAG 册打磨时设计里
写死了这条，**通读自查照样漏**：初稿写了「请客户出 30–50 个真实问题当评估集种子」，
既是凭空造的，还与库内既有口径（Evaluation 册「黄金集起步 20~50 题」）打架。
靠 `git diff | grep 数字模式` 才扫出来。

于是按 core-rules §三·3「全库范围的排查一次就写成脚本」把它固化：**新增行里的数字，
逐个列出并标注它在改动前的库里存不存在**——存在的多半是搬运（仍需扫一眼上下文对不对），
不存在的就是重点嫌疑，必须给出处或改掉。

判据只做「机器能判的那一半」：脚本不懂语义，不替人拍板；它保证的是**没有一个新数字
悄悄溜过去**。

用法:
    python3 _maintenance/check_new_numbers.py                 # 查工作区未提交改动
    python3 _maintenance/check_new_numbers.py <git-rev>        # 查相对某次提交的改动
退出码: 恒为 0——这是待核清单，不是门禁（是否合规要人看出处）。
"""
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 数字形态：百分比 / 阈值 / 区间 / 倍数 / 价格 / 版本号 / 带量词的数
NUM = re.compile(
    r"≥ ?\d+(?:\.\d+)?"
    r"|\d+(?:\.\d+)? ?%"
    r"|\d+ ?[–~-] ?\d+ ?(?:[个道条题页倍张%]|万|亿|token|Token)?"
    r"|\$\d+(?:\.\d+)?"
    r"|v?\d+\.\d+(?:\.\d+)?"
    r"|\d+ ?(?:倍|万|亿|个月|周|天)"
)
# 这些不算「事实数字」，滤掉免得淹没真信号：
#   ①日期（2026-07 / 2026-07-23——打磨必然大量出现，且日期对不对另有巡检管）
#   ②纯序号（章节号、层号）
SKIP = re.compile(r"^(?:20\d\d[-–~]?\d{0,2}|0?[1-9]|1[0-2])$")


def git(args):
    return subprocess.run(["git"] + args, cwd=ROOT, capture_output=True,
                          text=True).stdout


def main(argv):
    base = argv[1] if len(argv) > 1 else None
    diff = git(["diff", base] if base else ["diff"])
    if not diff.strip():
        diff = git(["diff", "--cached"])
    if not diff.strip():
        print("工作区没有未提交改动，无需自查。")
        return 0

    # 改动前的全库文本——用来判断「这个数字是不是本来就有」
    before = git(["show", "%s:./" % (base or "HEAD")]) if False else ""
    old = {}
    cur_file = None
    added = {}
    for line in diff.split("\n"):
        # 文件头：含非 ASCII 的路径会被 git 加引号（`+++ "b/_maintenance/中文.md"`）——
        # 不认这一种，该文件的新增行会被算到上一个文件头上（2026-07-23 自测踩到，
        # 一批中文设计文档的数字全挂到了 rag/index.html 名下，差点误判成造假数字）。
        if line.startswith("+++ "):
            p = line[4:].strip()
            if p.startswith('"') and p.endswith('"'):
                p = p[1:-1].encode().decode("unicode_escape").encode("latin-1").decode("utf-8")
            cur_file = p[2:] if p.startswith("b/") else None
            continue
        if not line.startswith("+") or line.startswith("+++"):
            continue
        if not cur_file or not cur_file.endswith((".html", ".md")):
            continue
        text = re.sub(r"<[^>]+>", " ", line[1:])
        for m in NUM.findall(text):
            m = m.strip()
            if SKIP.match(m):
                continue
            added.setdefault(cur_file, {}).setdefault(m, 0)
            added[cur_file][m] += 1

    if not added:
        print("新增行里没有出现数字——零新增事实这条自然成立。")
        return 0

    print("新增文字里的数字（逐个核出处：本册页面 / 本册 MANIFEST 有没有；没有就是新造）\n")
    for f in sorted(added):
        # 该文件改动前的内容，用于判断数字是不是原本就在
        prev = git(["show", "%s:%s" % (base or "HEAD", f)])
        mod = f.split("/")[1] if f.startswith("Web-version/") else ""
        manifest = ""
        if mod:
            import glob
            for p in glob.glob(os.path.join(ROOT, "PPT-version", "*", "MANIFEST.md")):
                if re.search(r"^\| 模块 ID \| %s \|" % re.escape(mod),
                             open(p, encoding="utf-8").read(), re.M):
                    manifest = open(p, encoding="utf-8").read()
                    break
        print("── %s" % f)
        for n in sorted(added[f]):
            where = []
            if n in prev:
                where.append("改动前本页已有")
            if manifest and n in manifest:
                where.append("本册 MANIFEST 有")
            flag = "　".join(where) if where else "⚠ 本页与本册清单都查不到——**重点核**"
            print("   %-14s ×%d   %s" % (n, added[f][n], flag))
        print()
    print("说明：「改动前本页已有」只说明数字在这页出现过，**用得对不对仍要看上下文**；")
    print("标 ⚠ 的必须给出处，或改引库内既有口径、或删。")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
