#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""内部工作用语扫描：技能架构词汇不许出现在读者页面（零第三方依赖）。

**为什么要有它**（2026-09-05 立，B5）：「一源两面」「回刷」这类词在规则文件里天天用，
写成品的人已经脱敏——2026-07-20 网页版首批带出 46 处，2026-09 巡检又抓到 9 处「已回刷」
和 3 处「web-rules §九」条款号，全凭人肉 grep。把它变成门禁：词表取
`references/shared/writing-rules.md`「内部说法」列，扫描面与 check_css_classes.pages()
一致，外加 README.md 与各模块页（pages() 已含后者）。

**「门禁」不进词表**：它在技术内容里是正当术语（质量门禁、CI 门禁），只有指本库自己的
检查脚本时才要换说法——机械替换会误伤，这一条靠人审，不靠正则。

豁免：读者页确有合法用法的词（如「两面」的日常义），登记在
`_maintenance/terms-exemptions.txt`，一行一条 `<文件相对路径>|<命中片段>`，理由必须写。

用法: python3 _maintenance/check_internal_terms.py
退出码: 0 = 读者面干净, 1 = 有内部用语泄漏。
"""
import glob
import os
import re
import sys

import _lib
import check_css_classes as CC   # 扫描面唯一出处

ROOT = _lib.kb_root()
EXEMPT = os.path.join(ROOT, "_maintenance", "terms-exemptions.txt")

# 与 writing-rules.md「内部术语 → 成品说法」表的「内部说法」列同源。
TERMS = [
    "一源两面", "两面入口", "PPT 面", "Web 面", "网页面", "面总览", "本面",
    "真源", "派生账", "回刷", "稳定章节 ID", "覆盖与缺口矩阵", "请运行",
]


def load_exemptions():
    out = []
    if os.path.exists(EXEMPT):
        for ln in _lib.read_text(EXEMPT).split("\n"):
            ln = ln.strip()
            if not ln or ln.startswith("#") or "|" not in ln:
                continue
            path, frag = ln.split("|", 1)
            out.append((path.strip(), frag.strip()))
    return out


def main():
    files = sorted(CC.pages()) + [os.path.join(ROOT, "README.md")]
    ex = load_exemptions()
    hits = []
    for f in files:
        rel = os.path.relpath(f, ROOT)
        text = _lib.read_text(f)
        for term in TERMS:
            for m in re.finditer(re.escape(term), text):
                frag = text[max(0, m.start() - 12):m.end() + 12].replace("\n", " ")
                if any(rel == p and fr in frag for p, fr in ex):
                    continue
                hits.append((rel, term, frag))
    if hits:
        print("读者面还有 %d 处内部工作用语：" % len(hits))
        for rel, term, frag in hits:
            print("  [%s] 「%s」：…%s…" % (rel, term, frag))
        print("\n改法见 writing-rules「内部术语 → 成品说法」表；确有合法用法的词，"
              "登记进 _maintenance/terms-exemptions.txt 并写理由。")
        return 1
    print("读者面没有内部工作用语（%d 个词 × %d 个文件）。" % (len(TERMS), len(files)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
