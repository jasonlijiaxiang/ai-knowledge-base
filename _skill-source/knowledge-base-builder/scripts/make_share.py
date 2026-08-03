#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""打分享包：把整库打成一个拷走即用的 zip，并解压自检（零第三方依赖）。

分享单元是**整个库目录**（Portable 铁律按整库定义：网页样式在 `_assets/`、门禁在
`_maintenance/`，只拷单页会掉样式、只拷讲义会丢账本）。默认瘦身：

  带走：讲义与书单、网页版、_assets、_prep、_maintenance 工具与门禁、KB-CONFIG、
        各索引页、raw-data 的输入与核实笔记（事实溯源要随库走）、
        当前技能包 _skill-source/knowledge-base-builder.skill（同事装它接着建自己的库）。
  不带：.git、raw-data/history/（旧版成品留痕，49M，是作者的回滚保险不是读者的内容）、
        _skill-source/history/ 与 _skill-source/knowledge-base-builder/（旧包与解包源）、
        _maintenance/history/、_reference/（作者的外部输入档案）、.DS_Store。
  `--full` 全量（仍排除 .git 与 .DS_Store）。

打完必自检：解压到临时目录，在解出来的那份里跑 `run_all_gates.sh`（**与本地、CI 同一份
清单**）——**打包这条链的"真装一次"**：zip 建成功只证明压缩没错，不证明拆开还是一个
能用的库（同款教训见技能包 v4.8）。

用法: python3 _maintenance/make_share.py [输出目录] [--full]
退出码: 0 = 打包且自检通过, 1 = 失败（zip 保留，便于排查）。
"""
import datetime
import os
import re
import shutil
import subprocess
import sys
import tempfile
import zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SKIP_ALWAYS = {".git"}
# `.claude/settings.local.json` 是**本机**的权限白名单，里面全是这台机器的绝对路径
# （/Users/<用户名>/…、/private/tmp/…）。它已被 .gitignore 排除在版本库外，分享包同理
# ——否则拷给别人的是一份指向你的机器的配置。同目录的 settings.json / launch.json 是
# 项目级配置，可移植，照带。
SKIP_FILES = {".DS_Store", "settings.local.json"}
# 相对库根的前缀；命中即整棵不带（瘦身模式）
SKIP_SLIM_PREFIX = (
    "_skill-source/history",
    "_skill-source/knowledge-base-builder/",   # 解包源目录；分享只带 .skill 包本体
    "_maintenance/history",
    "_reference",
)
SKIP_SLIM_DIRNAME = "history"                  # raw-data/history/


def kb_name():
    try:
        t = open(os.path.join(ROOT, "KB-CONFIG.md"), encoding="utf-8").read()
        m = re.search(r"\|\s*知识库显示名\s*\|\s*([^|（(]+)", t)
        if m:
            return re.sub(r"\s+", "", m.group(1))
    except OSError:
        pass
    return "知识库"


def want(rel, full):
    parts = rel.split(os.sep)
    if parts[0] in SKIP_ALWAYS or os.path.basename(rel) in SKIP_FILES:
        return False
    if full:
        return True
    posix = rel.replace(os.sep, "/")
    for pre in SKIP_SLIM_PREFIX:
        if posix == pre.rstrip("/") or posix.startswith(pre):
            return False
    # <模块>/raw-data/history/：留痕不入分享包
    if SKIP_SLIM_DIRNAME in parts and "raw-data" in parts:
        if parts.index(SKIP_SLIM_DIRNAME) == parts.index("raw-data") + 1:
            return False
    return True


def build(outdir, full):
    date = datetime.date.today().isoformat()
    top = "%s-%s" % (kb_name(), date)
    path = os.path.join(outdir, top + (".full.zip" if full else ".zip"))
    # 输出目录在库内时（`make_share.py dist`），走查会碰到**正在写的这个 zip 自己**：
    # 读一段就把它压进去、文件随之变长，永远读不到 EOF——死循环 + 撑爆磁盘，不是慢。
    # 2026-07-29 在 CI 上首次踩到（本机一直往库外或库根写，从没触发过）。
    out_abs = os.path.abspath(path)
    n = 0
    with zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as z:
        for dirpath, dirnames, filenames in os.walk(ROOT):
            rel_dir = os.path.relpath(dirpath, ROOT)
            dirnames[:] = sorted(
                d for d in dirnames
                if want(os.path.normpath(os.path.join(rel_dir, d)), full))
            for fn in sorted(filenames):
                rel = os.path.normpath(os.path.join(rel_dir, fn))
                if not want(rel, full):
                    continue
                src = os.path.join(dirpath, fn)
                if os.path.abspath(src) == out_abs:
                    continue
                z.write(src, os.path.join(top, rel))
                n += 1
        if not full:
            # 布局契约要求 _reference/ 目录存在（check_kb_layout 会验）；瘦身包排除的是
            # 作者的参考档案内容，目录本身要留着——接收者自己的参考资料以后放这。
            z.writestr(zipfile.ZipInfo(top + "/_reference/"), b"")
    return path, n


# 换机第一杀手：脚本写死本机绝对路径——本机跑得通，换台机器全废，且门禁一道都查不出。
LOCAL_PATH_RE = re.compile(r"""["'](?:/Users/|/home/|[A-Za-z]:\\)""")


def selfcheck(path):
    """解压 → 在解压出的库里跑 `run_all_gates.sh`（打包这条链的「真装一次」）。

    **2026-08-03 起不再在这里维护第二份门禁名单。** 此前这里写着一个 6 道的 `GATES`
    元组，注释还说「全套，不是挑两道」——那句话在只有 8 道门禁的时候是真的，
    后来库长到 15 道，这里一道都没跟上：保鲜、网页章节契约、正文标签配平、讲义 audit、
    页脚页码、技能包与源一致全在名单外，而 Release 说明对外写的是「门禁全跑了一遍」。
    库里当时有四份门禁清单，只有 `gates.yml` ↔ `run_all_gates.sh` 那一对有防漂自检。

    现在全部塌到 `run_all_gates.sh` 一份上。分享包天然缺料的那一道
    （`check_skill_sync`，瘦身包不带技能源目录）由它自己明说跳过，不静默放行。
    """
    tmp = tempfile.mkdtemp(prefix="kbshare-")
    try:
        with zipfile.ZipFile(path) as z:
            z.extractall(tmp)
        inner = os.path.join(tmp, os.listdir(tmp)[0])
        state = {"ok": True}

        runner = os.path.join(inner, "_maintenance", "run_all_gates.sh")
        if os.path.exists(runner):
            r = subprocess.run(["bash", runner], cwd=inner, capture_output=True, text=True)
            state["ok"] = r.returncode == 0
            # 只回显每道的名字与结果行，别把整套门禁的正文刷屏。
            # 先剥 ANSI 颜色码——run_all_gates.sh 的 ok/FAIL 是带色的，
            # 不剥就什么都匹配不上（首跑时自检挂了却看不出挂在哪，就是这个原因）。
            plain = re.sub(r"\x1b\[[0-9;]*m", "", r.stdout or "")
            pend = None
            for ln in plain.split("\n"):
                s = ln.strip()
                if re.match(r"^\[\d\d\] ", s):
                    pend = s
                elif s in ("ok", "FAIL") and pend:
                    if s == "FAIL" or not state["ok"]:
                        print("  [%s] %s" % ("不通过" if s == "FAIL" else "通过", pend))
                    pend = None
                elif "道门禁全绿" in s or "道挂了" in s:
                    print("  %s" % s)
            if not state["ok"]:
                print("  ——解压出来的这份库跑不过门禁，包不可用。")
        else:
            print("  [不通过] 包里没有 _maintenance/run_all_gates.sh，无法自检")
            state["ok"] = False

        # 死路径扫描曾经在这里内联再实现一遍——那是第五份重复。
        # `run_all_gates.sh` 里的 `check_no_abspath.py` 跑的是同一条判据，已经覆盖。
        return state["ok"]
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


def main(argv):
    full = "--full" in argv
    args = [a for a in argv[1:] if not a.startswith("--")]
    outdir = args[0] if args else ROOT
    path, n = build(outdir, full)
    size = os.path.getsize(path) / 1024 / 1024
    print("已打包 %s（%d 个文件，%.1f MB，%s）"
          % (os.path.relpath(path, ROOT), n, size, "全量" if full else "瘦身"))
    print("解压自检：")
    if not selfcheck(path):
        print("自检不通过——zip 已保留，修完重打。")
        return 1
    print("自检通过：拆开就是一个能用的库。拿去分享吧。")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
