#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""生成器册的源 JSON 账实核对（零第三方依赖）。

**为什么要有它**（2026-08-03 工程审视时补）：`kb_deck_build.py` 立的是「产物从源现场
生成」，与库里对技能包（`check_skill_sync`）、网页产物（`build.py --check`）一以贯之。
但生成器自己没有这道绑定——2026-08-02 生成的两册，整册内容 JSON 既没进版本库也没留在
磁盘上，**全库唯一能兑现「改令牌就重渲染」的地方恰恰兑现不了**，而当时 15 道门禁一片绿。

判据两条：

1. MANIFEST 的**「讲义生成方式」字段**里出现 `kb_deck_build` 的册，必须有
   `raw-data/讲义源.json`；

   （原来靠在「最后更新」长散文里 grep 这个词——2026-08-03 把那格的历史外置之后，
   词被截走了，这道门当场变成静默跳过。**用 grep 一段会变的散文当判据，本身就是隐患**：
   散文一改，判据就没了，而且不报错。改成一个显式字段。）
2. 该 JSON 的 `pages` 条数必须等于讲义的**放映序**页数（口径同 `audit_pptx` /
   `check_page_ledger`）——页数对不上说明源与成品已经分家，重渲染出来就不是这一册了。

**它不查什么**：JSON 的内容对不对、重渲染出来是不是逐页相同。那个更强的判据在
`deck_to_json.py --verify` 里（往返比对），跑一次要重渲染整册，不适合放进秒级门禁；
改完生成器册之后手动跑一次。

用法: python3 check_deck_source.py
退出码: 0 = 全部就位, 1 = 有册缺源或页数对不上。
"""
import glob
import json
import os
import re
import sys
import zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)


def show_pages(path):
    """放映序页数（口径同 audit_pptx / check_page_ledger）。"""
    with zipfile.ZipFile(path) as z:
        pres = z.read("ppt/presentation.xml").decode("utf-8", "replace")
    return len(re.findall(r"<p:sldId\b", pres))


def main():
    problems, checked = [], []
    for man in sorted(glob.glob(os.path.join(ROOT, "PPT-version", "*", "MANIFEST.md"))):
        mod = os.path.basename(os.path.dirname(man))
        text = open(man, encoding="utf-8").read()
        m = re.search(r"^\|\s*讲义生成方式\s*\|(.*?)\|\s*$", text, re.M)
        declared = bool(m and "kb_deck_build" in m.group(1))
        has_src = os.path.exists(os.path.join(ROOT, "PPT-version", mod,
                                              "raw-data", "讲义源.json"))
        if not declared and not has_src:
            continue
        checked.append(mod)
        src = os.path.join(ROOT, "PPT-version", mod, "raw-data", "讲义源.json")
        deck = os.path.join(ROOT, "PPT-version", mod, "%s-讲义.pptx" % mod)
        if not os.path.exists(src):
            problems.append("%s：MANIFEST 声明由生成器渲染，但缺 raw-data/讲义源.json"
                            "（用 deck_to_json.py 从讲义反解一份）" % mod)
            continue
        if not declared:
            problems.append("%s：有 raw-data/讲义源.json，但 MANIFEST 缺「讲义生成方式」"
                            "字段或未含 kb_deck_build——判据不靠文件存在性，要靠显式声明" % mod)
        if not os.path.exists(deck):
            problems.append("%s：缺讲义 %s-讲义.pptx" % (mod, mod))
            continue
        try:
            spec = json.load(open(src, encoding="utf-8"))
        except ValueError as e:
            problems.append("%s：讲义源.json 不是合法 JSON（%s）" % (mod, e))
            continue
        n_src, n_deck = len(spec.get("pages", [])), show_pages(deck)
        if n_src != n_deck:
            problems.append("%s：讲义源.json %d 页 ≠ 讲义放映序 %d 页"
                            "——源与成品已分家，重渲染出来不是这一册" % (mod, n_src, n_deck))
        else:
            print("  [通过] %s：源 %d 页 = 讲义 %d 页" % (mod, n_src, n_deck))

    if not checked:
        print("库内没有声明由生成器渲染的册，跳过。")
        return 0
    if problems:
        print("\n生成器册源账不实：")
        for p in problems:
            print("  - %s" % p)
        return 1
    print("\n%d 册生成器册的源 JSON 全部就位、页数一致。" % len(checked))
    return 0


if __name__ == "__main__":
    sys.exit(main())
