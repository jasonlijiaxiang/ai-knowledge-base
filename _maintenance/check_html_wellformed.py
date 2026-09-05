#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""正文标签配平检查：用真 XML 解析器验每页 <article> 的良构性（零第三方依赖）。

**为什么要有它**：库里已有一条血的教训——2026-07-17 章眉统一那次，字节级正则手术把
1105 处 `</a:rPr>` 弄成非良构 XML，**纯正则的 audit 照样 PASS**，最后靠渲染目检才抓住；
当时的结论写成铁律：「字节级 XML 手术后必须过真 XML 解析器」。但那条铁律只落在 PPT 面，
**网页面一直没有对应的门禁**。

2026-07-23 内容打磨时临时跑了一次真解析器，当场在 RAG 册 `#rag-pipeline` 抓出一个
**多出来的 `</div>`**（`<div class="lead">` 开一次关两次）——它比本轮打磨更早就存在，
八道门禁一道都查不出：浏览器容错照常渲染，坏链/CSS/CJK 三道门禁各管各的，谁也不看配平。
于是按 core-rules §五「错误转化为系统能力」把这一层补成常设门禁。

2026-09-05 扩扫描面（B4）：原来只扫 `Web-version/*/index.html`，`_prep/`、库根与
`PPT-version/README.html` 这些手写高频区不过良构。现在扫描面与 `check_css_classes.pages()`
相同；**没有 `<article>` 的页面按整份文件判**（此前是静默跳过）。`<script>`/`<style>`
块先空掉再判——里面的 JS 比较符不是标签结构，留着全是假阳性。

**HTML5 合法但 XML 不合法的两类要先归一化**，否则全是假阳性（首次跑就被它淹过）：
  ① 自闭合标签 `<br>` `<img>` 等；② 布尔属性 `selected` `open` 等。

用法: python3 _maintenance/check_html_wellformed.py
退出码: 0 = 全部良构, 1 = 有页面标签不配平。
"""
import glob
import os
import re
import sys
import xml.etree.ElementTree as ET

import _lib
import check_css_classes as CC   # 扫描面唯一出处（B4）

ROOT = _lib.kb_root()
VOID = r"<(br|img|input|hr|meta|link|source|area|col)\b([^>]*?)/?>"
BOOL = r"\b(selected|checked|disabled|open|multiple|readonly|required|autofocus)(?=[\s>])"


def _normalize(html):
    html = re.sub(r"<!doctype[^>]*>", "", html, flags=re.S | re.I)
    html = re.sub(r"<script\b.*?</script>", "", html, flags=re.S | re.I)
    html = re.sub(r"<style\b.*?</style>", "", html, flags=re.S | re.I)
    html = re.sub(r"<!--.*?-->", "", html, flags=re.S)
    return html


def check(path):
    src = _lib.read_text(path)
    norm = _normalize(src)
    m = re.search(r"<article>(.*?)</article>", norm, re.S)
    body = m.group(1) if m else norm   # 无 article 的页面按整份文件判（B4）
    # 顺序要紧：先补布尔属性、再补自闭合斜杠。反过来 `<input … checked>` 会先变成
    # `checked/>`，布尔属性的前瞻 `(?=[\s>])` 就匹配不到，留下裸属性→假阳性
    # （2026-07-23 首次跑本脚本即被这一条误报 llm-inference）。
    body = re.sub(BOOL, r'\1="\1"', body)
    body = re.sub(VOID, r"<\1\2/>", body)
    try:
        ET.fromstring("<root>" + body + "</root>")
        return None, bool(m)
    except ET.ParseError as e:
        # 行号换算回文件行号方便定位
        line = int(re.search(r"line (\d+)", str(e)).group(1))
        off = norm[:m.start(1)].count("\n") + line if m else line
        return "%s（文件第 %d 行附近）" % (e, off), bool(m)


def main():
    pages = CC.pages()
    bad, n_article = [], 0
    for p in pages:
        r, has_article = check(p)
        if has_article:
            n_article += 1
        if r:
            bad.append((os.path.relpath(p, ROOT), r))
    for f, e in bad:
        print("[不配平] %s：%s" % (f, e))
    if bad:
        print("\n正文标签配平检查不通过——浏览器会容错渲染，但结构已经错位，"
              "后续任何字节级改动都可能在这里塌掉。")
        return 1
    print("正文标签配平检查通过：%d 页（其中 %d 页带 <article>）均良构。" % (len(pages), n_article))
    return 0


if __name__ == "__main__":
    sys.exit(main())
