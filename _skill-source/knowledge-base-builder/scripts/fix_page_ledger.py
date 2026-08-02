#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""页数账四面回刷器（零第三方依赖）。

`check_page_ledger.py` 只报账实不符，**修还得人一处一处改**——模块 README、PPT 面总览、
`_prep/` 一页纸、模块 MANIFEST 四面，加上全库总页数的四处声明。2026-08-03 一天里
手写了三遍同样的回刷（两册网页版、11 册追问卡、DE 云落点），按 core-rules §三·3
「全库范围的排查一次就写成脚本」固化成这个。

**它只认门禁认的那几个格子**——直接 import `check_page_ledger` 的定位正则，不另写一套。
第一版图省事，用「任何 `NN 页`」当判据，预演立刻把 MANIFEST「最后更新」里的历史叙述
（「56→58 页」「1666 页」）也算成待修的账——那是历史记录，改了就是伪造。
两份定位规则必然漂，共用同一份才不会。

**它不动三样**：MANIFEST 的「最后更新」叙述（这次为什么变页数只有人知道）、
顶层「更新日期」（呈现回刷不是内容更新，v3.9 原话）、以及任何不在门禁账内的数字。

用法:
    python3 _maintenance/fix_page_ledger.py             # 预演
    python3 _maintenance/fix_page_ledger.py --apply     # 落盘
退出码: 0 = 已一致或已修好, 1 = 有格子没找到（列出来，需要人看）。
"""
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE)

import check_page_ledger as G          # noqa: E402  —— 定位规则的唯一出处


def replace_group(text, m, gi, new):
    """把 match 的第 gi 个分组换成 new，其余字节不动。"""
    return text[:m.start(gi)] + str(new) + text[m.end(gi):]


def fix_file(path, finder, actual, label, edits, stuck):
    """finder(text) -> (match, group_index) 或 None。"""
    if not os.path.exists(path):
        return
    s = open(path, encoding="utf-8").read()
    changed = False
    while True:
        found = finder(s)
        if not found:
            break
        m, gi = found
        if int(m.group(gi)) == actual:
            break
        edits.append((label, int(m.group(gi)), actual))
        s = replace_group(s, m, gi, actual)
        changed = True
    if changed:
        fix_file.pending[path] = s


fix_file.pending = {}


def main(argv):
    apply_it = "--apply" in argv
    fix_file.pending = {}
    edits, stuck = [], []
    mod_root = G.resolve_module_root(ROOT)
    mods = G.find_modules(mod_root)
    total = 0

    rollup_paths = [os.path.join(ROOT, "PPT-version", "README.html"),
                    os.path.join(ROOT, "README.html")]
    rollup = next((p for p in rollup_paths if os.path.exists(p)), None)
    prep = os.path.join(ROOT, "_prep", "全库一页纸.html")

    for mod in mods:
        pptx = os.path.join(mod_root, mod, "%s-讲义.pptx" % mod)
        actual = G.actual_pages(pptx)
        total += actual

        # ① 模块 README「主力成品，…NN 页」
        fix_file(os.path.join(mod_root, mod, "README.html"),
                 lambda s: (lambda m: (m, 1) if m else None)(G.MODULE_README_RE.search(s)),
                 actual, "%s · 模块 README" % mod, edits, stuck)

        # ② MANIFEST 的「讲义页数」字段（叙述文字一律不碰）
        fix_file(os.path.join(mod_root, mod, "MANIFEST.md"),
                 lambda s: (lambda m: (m, 1) if m else None)(G.MANIFEST_FIELD_RE.search(s)),
                 actual, "%s · MANIFEST 讲义页数" % mod, edits, stuck)

        # ③ 面总览模块表 ✅（NN 页）——限定在该模块那一行内找
        if rollup:
            rx = re.compile(r'%s/README\.html.{0,600}?✅[^0-9]{0,8}(\d+)\s*页'
                            % re.escape(mod), re.S)
            before = len(edits)
            fix_file(rollup, lambda s: (lambda m: (m, 1) if m else None)(rx.search(s)),
                     actual, "面总览 · %s" % mod, edits, stuck)
            if len(edits) == before:
                s = fix_file.pending.get(rollup) or open(rollup, encoding="utf-8").read()
                if not rx.search(s):
                    stuck.append("%s：面总览里没找到它的 ✅（NN 页）格" % mod)

        # ④ 一页纸的 .pg 徽标
        rx4 = re.compile(G.PREP_SPAN_TMPL.format(mod=re.escape(mod)))

        def find4(s, rx4=rx4):
            m = rx4.search(s)
            if not m:
                return None
            return (m, 1 if m.group(1) else 2)
        before = len(edits)
        fix_file(prep, find4, actual, "一页纸 · %s" % mod, edits, stuck)
        if len(edits) == before:
            s = fix_file.pending.get(prep) or open(prep, encoding="utf-8").read()
            if not rx4.search(s):
                stuck.append("%s：一页纸里没找到它的页数徽标" % mod)

    # ⑤ 全库总页数：只认门禁认的三种措辞
    for rel, required in G.TOTAL_LEDGER_FILES:
        path = os.path.join(ROOT, rel)
        if not os.path.exists(path):
            if required:
                stuck.append("%s 缺失（应载全库总页数声明）" % rel)
            continue
        s = fix_file.pending.get(path) or open(path, encoding="utf-8").read()
        hit = False
        for rx in G.TOTAL_DECL_RES:
            # 一处一处改：改完偏移就变了，每轮重新扫，别拿旧 match 的坐标去切字符串
            while True:
                m = next((x for x in rx.finditer(s) if int(x.group(1)) != total), None)
                if not m:
                    break
                edits.append(("%s · 全库总数" % rel, int(m.group(1)), total))
                s = replace_group(s, m, 1, total)
            if rx.search(s):
                hit = True
        if not hit:
            stuck.append("%s 未找到全库总页数声明" % rel)
        fix_file.pending[path] = s

    if not edits:
        print("四面页数账已经一致，全库 %d 页，无需回刷。" % total)
    else:
        print("要回刷 %d 处（全库实测 %d 页）：" % (len(edits), total))
        for label, old, new in edits:
            print("  %-44s %s → %s" % (label, old, new))
        if apply_it:
            for path, text in fix_file.pending.items():
                open(path, "w", encoding="utf-8").write(text)
            print("\n已落盘。")
        else:
            print("\n预演，未落盘。加 --apply 落盘。")
        print("提醒：**MANIFEST 的「最后更新」叙述本脚本不动**——这次为什么变页数，"
              "只有你知道，去那一行补一句；顶层「更新日期」不要动。")
    if stuck:
        print("\n没找到的格子 %d 处，需要人看：" % len(stuck))
        for x in stuck:
            print("  %s" % x)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
