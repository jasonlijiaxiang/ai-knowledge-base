#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""可派生数目的账实核对（零第三方依赖）。

**为什么要有它**（2026-08-03 工程审视时补）：库里有一类数目是**能从真源直接算出来的**
——模块数、网页版覆盖、门禁道数。它们同时被写在十几处门面与配置里，而且**每长一个模块
就全线过期**。2026-08-03 一次审视扫出 10 处活口径过期，当时 15 道门禁一片绿：

  · `CLAUDE.md` 开篇「19 模块」，库已 21；
  · `README.md` 目录表上一行写「21 个模块」，下一行写「19/19 已建成」；
  · `gates.yml` 的 job 名「十四道门禁」、步名「19 册 audit」；
  · `_prep/MANIFEST.md` 两处 19；`release-kb.yml` 的 Release 说明「19 册讲义」。

既有的 `check_count_claims.py` 管不到这一类：它查的是「标题说三条、底下列了四条」这种
**声明 vs 紧跟结构**，判据是 HTML 结构，而且是报告型。这一类不同——真值唯一、可计算、
过期即错，所以做成**硬门禁**。

判据全部从既有真源派生，不新立账本：

  · 模块数   = `PPT-version/*/MANIFEST.md` 的个数
  · 网页覆盖 = `Web-version/<模块小写名>/index.html` 存在的个数
  · 门禁道数 = `.github/workflows/gates.yml` 里非报告型的 step 数

**历史叙述豁免**：「分八批扩建到全部 19 册（2026-07-22 收官）」讲的是过去，改了反而
是伪造历史。这类逐条登记在 `_maintenance/count-exemptions.txt`（一行一条，
`文件相对路径|行内出现的片段`，`#` 开头为注释），口径同 `audit-exemptions.txt`。
**生成区块（BEGIN/END）内的行一律跳过**——那些由 `build.py --check` 看着。

用法: python3 check_derived_counts.py
退出码: 0 = 全部对得上, 1 = 有声明与真源不符。
"""
import glob
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
EXEMPT = os.path.join(HERE, "count-exemptions.txt")

CN = {"一": 1, "二": 2, "两": 2, "三": 3, "四": 4, "五": 5, "六": 6, "七": 7,
      "八": 8, "九": 9, "十": 10, "十一": 11, "十二": 12, "十三": 13,
      "十四": 14, "十五": 15, "十六": 16, "十七": 17, "十八": 18, "十九": 19,
      "二十": 20, "二十一": 21}

# 要扫的「活面」：读者看得见的门面 + 机器读的配置。
# 刻意**不扫** `_skill-source/`（技能是通用的，不该知道本库有几个模块；
# 它文档里的数字多是事故叙述）与 `_maintenance/` 的历史报告（只增不改）。
SURFACES = [
    "README.md", "README.html", "CLAUDE.md", "开始使用.html", "index.html",
    "KB-CONFIG.md",
    "PPT-version/README.html", "Web-version/index.html",
    "_prep/MANIFEST.md", "_prep/全库一页纸.html", "_prep/学习路径.html",
    "_prep/实战包.html",
    ".github/workflows/gates.yml", ".github/workflows/release-kb.yml",
    ".github/workflows/release-skill.yml",
    # 2026-09-05 起：维护手册不再手抄门禁清单，但「跑全部道数」这类措辞仍会提道数，
    # 同样要跟真源对账。
    "_maintenance/维护手册.md",
]

GEN_BLOCK = re.compile(r"<!--\s*[A-Z]+:BEGIN\b.*?<!--\s*[A-Z]+:END\s*-->", re.S)


def truths():
    mods = sorted(os.path.basename(os.path.dirname(p)) for p in
                  glob.glob(os.path.join(ROOT, "PPT-version", "*", "MANIFEST.md")))
    web = [m for m in mods if os.path.exists(
        os.path.join(ROOT, "Web-version", m.lower(), "index.html"))]
    gates = 0
    gy = os.path.join(ROOT, ".github", "workflows", "gates.yml")
    if os.path.exists(gy):
        for ln in open(gy, encoding="utf-8"):
            m = re.match(r"^      - name: (.+)$", ln)
            if m and "报告" not in m.group(1):
                gates += 1
    return {"模块数": len(mods), "网页覆盖": len(web), "门禁道数": gates}


def load_exemptions():
    out = []
    if os.path.exists(EXEMPT):
        for ln in open(EXEMPT, encoding="utf-8"):
            ln = ln.strip()
            if not ln or ln.startswith("#") or "|" not in ln:
                continue
            path, frag = ln.split("|", 1)
            out.append((path.strip(), frag.strip()))
    return out


def claims(line, t):
    """返回 [(声明值, 应为, 说的是什么)]。"""
    found = []
    for m in re.finditer(r"(\d+)\s*(?:个)?模块", line):
        found.append((int(m.group(1)), t["模块数"], "模块数"))
    for m in re.finditer(r"(\d+)\s*册", line):
        found.append((int(m.group(1)), t["模块数"], "册数"))
    # 「N/N 全覆盖」形态：两边相等才是覆盖声明，不等的多半是日期或比分
    for m in re.finditer(r"(?<![\d/.])(\d+)/(\d+)(?![\d/.])", line):
        a, b = int(m.group(1)), int(m.group(2))
        if a == b and a > 1:
            found.append((a, t["网页覆盖"], "网页覆盖 N/N"))
    for m in re.finditer(r"([一二三四五六七八九十]{1,3}|\d+)\s*道门禁", line):
        v = m.group(1)
        n = int(v) if v.isdigit() else CN.get(v)
        # 「一道门禁盯着它」「八道门禁一道都查不出」——小数目是「其中若干道」的口语，
        # 不是全库道数声明。库从来没少于四道，取 4 作下界。
        if n and n >= 4:
            found.append((n, t["门禁道数"], "门禁道数"))
    return found


def main():
    t = truths()
    print("真源：模块 %d 册 · 网页覆盖 %d · 门禁 %d 道"
          % (t["模块数"], t["网页覆盖"], t["门禁道数"]))
    ex = load_exemptions()
    bad = []
    for rel in SURFACES:
        path = os.path.join(ROOT, rel)
        if not os.path.exists(path):
            continue
        src = open(path, encoding="utf-8").read()
        # 生成区块整段挖掉（保留换行，行号才对得上）
        src = GEN_BLOCK.sub(lambda m: "\n" * m.group(0).count("\n"), src)
        for i, line in enumerate(src.split("\n"), 1):
            # MANIFEST 的「最后更新」单元格按定义就是只增不减的变更日志，
            # 里面每一句都是过去时。整行跳过，不必逐条登记豁免。
            if line.startswith("| 最后更新"):
                continue
            if any(rel == p and f in line for p, f in ex):
                continue
            for got, want, what in claims(line, t):
                if got != want:
                    bad.append((rel, i, what, got, want, line.strip()[:96]))

    if bad:
        print("\n可派生数目对不上（%d 处）：" % len(bad))
        for rel, i, what, got, want, txt in bad:
            print("  %s:%d  %s 写 %d，应为 %d" % (rel, i, what, got, want))
            print("      %s" % txt)
        print("\n改数字，或者——若它讲的确实是过去——把这一行登记进 "
              "_maintenance/count-exemptions.txt。")
        return 1
    print("\n%d 个活面上的可派生数目全部与真源一致。" % len(SURFACES))
    return 0


if __name__ == "__main__":
    sys.exit(main())
