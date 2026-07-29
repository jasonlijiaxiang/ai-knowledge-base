#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""数目声明体检：标题说「三大偏差」，底下却列了四条——把这类对不上的地方报出来（零依赖）。

**为什么要有它**（2026-07-23 一天之内撞见三次，同一类缺陷）：
  · MCP 册：「一个 server 吃掉窗口近 9%，**接三个就可能过半**」——9%×3≈27%，算术不成立；
  · Multimodal 册：小标题「**五层**输入合同」，其下表格只有 3 行，读者数不出五层；
  · Evaluation 册：小标题「三种判法与**三大**偏差」，其下表格列了 4 行。

共同点是**「声明的数目」与「实际列出的条目」脱节**——多半是内容增删时改了列表没改标题
（或反过来）。它对读者的杀伤很具体：客户当场跟着数，数不上就显得材料不严谨。
八道门禁没有一道管这个：坏链、CSS、CJK、配平各管各的，数目是语义。

**报告型，不是门禁**：脚本不懂语义，无法判断「三步流程」后面那张表是不是在讲那三步。
它只负责把**候选**摆出来，由人扫一眼。误报是可接受的成本，漏报才是要命的。

用法: python3 _maintenance/check_count_claims.py [模块名…]   # 缺省全库
退出码: 恒为 0——体检报告。
"""
import glob
import html
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CN = {"一": 1, "两": 2, "二": 2, "三": 3, "四": 4, "五": 5, "六": 6,
      "七": 7, "八": 8, "九": 9, "十": 10}
# 「三大偏差」「四个坑」「五层合同」「六条验收线」——数词 + 量词
CLAIM = re.compile(r"([一二三四五六七八九十两])\s*([大个层条种道步件把面轮])")
# 声明之后紧跟的可数结构：表格行 / 卡片 / 列表项 / 要点行
BLOCKS = [
    (re.compile(r"<table\b.*?</table>", re.S),
     lambda b: len(re.findall(r"<tr\b", b)) - len(re.findall(r"<thead\b", b))),
    (re.compile(r'<div class="grid">.*?</div>\s*</div>', re.S),
     lambda b: len(re.findall(r'class="box', b))),
    # keypoints 的条目是 `<div><b>标题</b><span>…</span></div>`；块尾用非贪婪的
    # `</div></div>` 去截会把最后一条切掉（实测稳定少数 1），所以直接数条目特征。
    (re.compile(r'<div class="keypoints">.*?(?=<(?:p|h[234]|div class="(?:tw|grid|box))\b|</section>)', re.S),
     lambda b: len(re.findall(r"<div><b>", b))),
    (re.compile(r"<[ou]l\b.*?</[ou]l>", re.S),
     lambda b: len(re.findall(r"<li\b", b))),
]
# 承载文本：小标题与加粗短语最常出现数目声明
HOST = re.compile(r"<(h2|h3|h4)[^>]*>(.*?)</\1>|<b>([^<]{2,40})</b>")


def plain(s):
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", "", s))).strip()


def scan(path):
    src = open(path, encoding="utf-8").read()
    m = re.search(r"<article>(.*?)</article>", src, re.S)
    if not m:
        return []
    body = m.group(1)
    hits = []
    for h in HOST.finditer(body):
        text = plain(h.group(2) or h.group(3) or "")
        if not text or len(text) > 46:
            continue
        c = CLAIM.search(text)
        if not c:
            continue
        want = CN[c.group(1)]
        if want < 2:                       # 「一条」这类不值得核
            continue
        after = body[h.end():h.end() + 2600]
        # 取**起点最靠前**的那个结构，而不是按 BLOCKS 的排列顺序取——否则声明后面
        # 紧跟 keypoints、再往后有个属于下一话题的 grid 时，会拿错后者来数
        # （2026-07-23 实测：llm-training「三种出厂形态」被隔壁 grid 数成 2）。
        cands = []
        for rx, count in BLOCKS:
            b = rx.search(after)
            if b and b.start() < 700:          # 隔太远就不是它在列举
                cands.append((b.start(), count(b.group(0)), rx.pattern[:14]))
        got, kind = (None, "")
        if cands:
            cands.sort()
            _, got, kind = cands[0]
        if got is None or got == want:
            continue
        hits.append((text, want, got, kind))
    return hits


def main(argv):
    want = [a for a in argv[1:] if not a.startswith("-")]
    dirs = sorted(os.path.dirname(p) for p in
                  glob.glob(os.path.join(ROOT, "Web-version", "*", "index.html")))
    dirs = [d for d in dirs if os.path.basename(d) != "qa"]
    dirs = [d for d in dirs if not want or os.path.basename(d) in want]
    total = 0
    for d in dirs:
        hits = scan(os.path.join(d, "index.html"))
        if not hits:
            continue
        total += len(hits)
        print("\n%s" % os.path.basename(d))
        for text, w, g, kind in hits:
            print("   声明 %d，紧跟的结构里数到 %d　「%s」" % (w, g, text))
    print("\n" + "=" * 60)
    print("候选 %d 处。**报告不是判决**：紧跟的结构未必就是它要列举的东西，"
          "逐条扫一眼即可；真对不上的，改标题或补条目。" % total)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
