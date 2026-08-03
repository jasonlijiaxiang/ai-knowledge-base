#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""给 Data-Engineering 讲义补上「上云怎么落地」——21 册里唯一真缺这块的一册。

**为什么是真缺口**：2026-08-02 用页题与页脚两轴重测 21 册，只有 Data-Engineering
与 Model-Landscape 是 0 页云落点；后者内容其实齐全（第 9 章四平台）、只是没框成落点，
本册则是实打实没有。数据管线恰恰是云服务最密的一层，所以按 B 类补：先联网核实
（笔记存 raw-data，22 条事实已按八列登记进 MANIFEST），再落两面。

**页形**：按管线五阶段排——接进来 / 看得懂 / 加工与编排 / 存得住查得清 / 质量与标注。
每页一张三列表（技术环节 → 代表性云服务 → 给客户一句话），末尾一页「上云追问卡」
收五个阶段的两格。表格行高按内容估、按高度装页，与
`2026-08-02-上云追问卡回流.py` 共用同一套度量。

用法:
    python3 _maintenance/2026-08-03-DE云落点建页.py            # 预演
    python3 _maintenance/2026-08-03-DE云落点建页.py --apply    # 落盘
"""
import json
import os
import shutil
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE)

import kb_deck_build as K            # noqa: E402
import kb_insert                     # noqa: E402

backflow = __import__("2026-08-02-上云追问卡回流")   # 复用度量、切页与卡片绘制

DATA = os.path.join(HERE, "2026-08-03-DE云落点.json")
PPTX = os.path.join(ROOT, "PPT-version", "Data-Engineering", "Data-Engineering-讲义.pptx")
DISPLAY = "Data-Engineering 讲义"


def landing_metrics(k):
    """三列表的列宽：服务名那栏最长，给它一半。"""
    wid = K.W - 2 * K.MARGIN
    cw = [wid * 0.19, wid * 0.50, wid * 0.31]
    y0 = K.BODY_TOP + 0.06 * k + 0.34 * k + 0.05 * k
    avail = K.FOOT_Y - 0.18 * k - y0
    lh = K.FS["note"] / 72.0 * 1.18
    cpl = max(8, int((cw[1] - 0.18 * k) / (K.FS["note"] / 72.0)))
    return cw, avail, lh, cpl


def row_h(r, lh, cpl, k, cw):
    """行高取三栏里最高的那栏——服务名栏最宽但也最长，只看它会低估右边那栏。"""
    n_svc = -(-len(r["services"]) // cpl)
    cpl3 = max(6, int((cw[2] - 0.18 * k) / (K.FS["note"] / 72.0)))
    n_line = -(-len(r["line"]) // cpl3)
    return max(n_svc, n_line, 1) * lh + 0.30 * k


def make_landing(stage, rows, foot, k, suffix=""):
    # 阶段名形如「看得懂：把 PDF、扫描件、表格变成结构化文本」——冒号前当页题，
    # 冒号后并进副行。整句进页题会长到挤掉「· 续N」，而续号是 audit 标题查重要看的。
    head, _, tail = stage.partition("：")

    def draw(s):
        K.head(s, "上云怎么落地 · %s%s" % (head, suffix), eyebrow="数据底座 · 云落点")
        K.box(s, K.MARGIN, K.BODY_TOP - 0.42 * k, K.W - 2 * K.MARGIN, 0.34 * k,
              "%s同一环节给多厂商代表，不绑死一家；带 preview／停售标注的，选型当天必须复核。"
              % ((tail + "。") if tail else ""),
              K.FS["note"], "ink2")
        cw, avail, lh, cpl = landing_metrics(k)
        x0, y = K.MARGIN, K.BODY_TOP + 0.06 * k
        hh = 0.34 * k
        for i, t in enumerate(("技术环节", "代表性云服务（多厂商，不绑一家）", "给客户一句话")):
            K.rect(s, x0 + sum(cw[:i]), y, cw[i], hh, "cyan", None)
            K.box(s, x0 + sum(cw[:i]) + 0.08 * k, y + 0.04 * k, cw[i] - 0.16 * k,
                  hh, t, K.FS["table"], "white", bold=True)
        y += hh + 0.05 * k
        need = [row_h(r, lh, cpl, k, cw) for r in rows]
        if sum(need) > avail:
            need = [h * avail / sum(need) for h in need]
        for j, r in enumerate(rows):
            rh = need[j]
            fill = "card" if j % 2 == 0 else "card2"
            for i, t in enumerate((r["env"], r["services"], r["line"])):
                K.rect(s, x0 + sum(cw[:i]), y, cw[i], rh - 0.06 * k, fill, "rule")
                sh = K.box(s, x0 + sum(cw[:i]) + 0.09 * k, y + 0.07 * k,
                           cw[i] - 0.18 * k, rh - 0.20 * k, t,
                           K.FS["table"] if i == 0 else K.FS["note"],
                           "cyan_dk" if i == 0 else "ink",
                           bold=(i == 0), spacing=1.18)
                sh.text_frame.word_wrap = True
            y += rh
        K.box(s, K.MARGIN, K.FOOT_Y, 8.0 * k, 0.3 * k, foot, K.FS["foot"], "ink2")
    return draw


def paginate(rows, lh, cpl, k, avail, cw):
    pages, cur, used = [], [], 0.0
    for r in rows:
        h = row_h(r, lh, cpl, k, cw)
        if cur and used + h > avail:
            pages.append(cur)
            cur, used = [], 0.0
        cur.append(r)
        used += h
    if cur:
        pages.append(cur)
    return pages


def main(argv):
    apply_it = "--apply" in argv
    stages = json.load(open(DATA, encoding="utf-8"))["stages"]

    w, h = backflow.canvas_of(PPTX)
    k = backflow.set_canvas(w, h)
    pages = backflow.deck_pages(PPTX)
    after, how = backflow.find_body_tail(pages)
    numbered = backflow.has_pagenum(PPTX)

    cw, avail, lh, cpl = landing_metrics(k)
    specs = []
    for st in stages:
        chunks = paginate(st["rows"], lh, cpl, k, avail, cw)
        for i, rows in enumerate(chunks):
            suffix = "" if len(chunks) == 1 else " · 续%d" % (i + 1)
            foot = "%s · 云落点 · %s%s" % (DISPLAY, st["short"], suffix)
            specs.append((make_landing(st["stage"], rows, foot, k, suffix),
                          "上云怎么落地 · %s%s" % (st["stage"].split("：")[0], suffix)))

    # 末尾一页追问卡：五个阶段的两格收在一起
    card_rows = [{"stage": st["short"], "ask": st["ask"], "cant": st["cant"]}
                 for st in stages]
    ccw, cy0, cavail, clh, ccpl = backflow.metrics(k)
    for i, rows in enumerate(backflow.paginate(card_rows, clh, ccpl, k, cavail)):
        suffix = "" if i == 0 else " · 续%d" % (i + 1)
        foot = "%s · 售前速查 · 上云追问卡%s" % (DISPLAY, suffix)
        specs.append((backflow.make_drawer(DISPLAY, foot, rows, k, suffix=suffix),
                      "上云追问卡%s" % suffix))

    print("Data-Engineering  画布 %.3f×%.3f  %d 阶段 → %d 页，插在 p%d 之后（%s）"
          % (w, h, len(stages), len(specs), after, how))
    for _, t in specs:
        print("    · %s" % t)
    if not apply_it:
        print("\n预演，未落盘。")
        return 0

    # 同一插入点插多页：全部用同一个 after 并逆序传参（after 按原始放映序算）
    ins = [(after, fn, t) for fn, t in reversed(specs)]
    if numbered:
        ins = [(after, fn, t) for fn, t in reversed(specs)]
    tmp = PPTX + ".tmp"
    kb_insert.insert_figures(PPTX, tmp, ins)
    shutil.move(tmp, PPTX)
    print("\n已落盘 %d 页。" % len(specs))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
