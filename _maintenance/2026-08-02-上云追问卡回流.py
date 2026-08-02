#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把网页版云落点里的「顺着追问什么／云替你做不了什么」两格回流讲义侧。

**为什么回流**（web-rules §六·五 三道闸的「缺口级」）：讲义的云落点页停在
「这个环节有哪些服务」，没有「该顺着问什么」与「哪些事云替你做不了」。
前者是服务名地图，后者才是售前站在客户面前当场说出口的话——它改变读者的动作。

**落在哪**：每册**速查章**追加「上云追问卡」页。速查章豁免「每章固定元素」，
追加页不动章结构；这本来就是速查形态——一张对客时抽出来的卡；插在末章，页码重排波及最小。

**画布**：11 册里两种规格并存（10×5.625 与 13.333×7.5），本脚本按目标册的实际
`sldSz` 重算所有版式常量与字号（比例恰好 0.75，两种规格同为 16:9）。
2026-07-17 那次 78 页被裁 25%，根因就是插页一律按大画布画。

用法:
    python3 _maintenance/2026-08-02-上云追问卡回流.py            # 预演，只报要插哪些页
    python3 _maintenance/2026-08-02-上云追问卡回流.py --apply    # 落盘
"""
import copy
import json
import os
import re
import shutil
import subprocess
import sys
import zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE)

import kb_deck_build as K            # noqa: E402
import kb_insert                     # noqa: E402
from pptx.enum.text import PP_ALIGN  # noqa: E402

CARD_PATH = os.path.join(HERE, "2026-08-02-上云追问卡.json")

# 网页目录 → 讲义模块目录
WEB2MOD = {
    "agent": "Agent", "ai-gateway": "AI-Gateway", "ai-infra-compute": "AI-Infra-Compute",
    "evaluation": "Evaluation", "llm-training": "LLM-Training", "mcp": "MCP",
    "multimodal": "Multimodal", "prompt-engineering": "Prompt-Engineering",
    "rag": "RAG", "security": "Security", "solution-patterns": "Solution-Patterns",
}
ROWS_PER_PAGE = 3

# kb_deck_build 的版式常量是按 13.333×7.5 写的，换画布要整套按比例重算
_BASE = dict(W=K.W, H=K.H, MARGIN=K.MARGIN, TOP=K.TOP, FOOT_Y=K.FOOT_Y,
             BODY_TOP=K.BODY_TOP, FS=dict(K.FS))


def set_canvas(w, h):
    """按目标册画布重算版式常量。两种规格同为 16:9，等比缩放即可；
    字号跟着缩，但设 8.5pt 地板（同 fix_canvas_scale.py 的口径）。"""
    k = w / _BASE["W"]
    K.W, K.H = w, h
    K.MARGIN = _BASE["MARGIN"] * k
    K.TOP = _BASE["TOP"] * k
    K.FOOT_Y = _BASE["FOOT_Y"] * k
    K.BODY_TOP = _BASE["BODY_TOP"] * k
    K.FS = {name: max(8.5, round(v * k, 1)) for name, v in _BASE["FS"].items()}
    return k


def canvas_of(pptx):
    return kb_insert._src_canvas(pptx)


def deck_pages(pptx):
    """按放映序取每页的文字，用于定位速查章与末页。"""
    out = subprocess.run([sys.executable, os.path.join(HERE, "kb_deck_text.py"), pptx],
                         capture_output=True, text=True).stdout
    pages = []
    for chunk in out.split("=== p")[1:]:
        head, _, body = chunk.partition("===")
        pages.append((int(head.strip()), body.strip()))
    return pages


def make_drawer(mod_display, foot, rows, k):
    """一页「上云追问卡」：三列表——阶段 / 顺着追问什么 / 云替你做不了什么。

    行高按两栏文字里较长的那栏算，不写死——写死行高的表格在长文本上会溢出到页脚。
    """
    def draw(s):
        K.head(s, "上云追问卡：顺着追问什么 · 云替你做不了什么",
               eyebrow="售前速查")
        K.box(s, K.MARGIN, K.BODY_TOP - 0.42 * k, K.W - 2 * K.MARGIN, 0.34 * k,
              "云服务清单答的是「有什么」，这张卡答的是「当场该问什么、哪些事别答应」。",
              K.FS["note"], "ink2")

        x0 = K.MARGIN
        wid = K.W - 2 * K.MARGIN
        cw = [wid * 0.20, wid * 0.40, wid * 0.40]
        y = K.BODY_TOP + 0.06 * k
        hh = 0.34 * k
        for i, t in enumerate(("落地阶段", "顺着追问什么", "云替你做不了什么")):
            K.rect(s, x0 + sum(cw[:i]), y, cw[i], hh, "cyan", None)
            K.box(s, x0 + sum(cw[:i]) + 0.08 * k, y + 0.04 * k, cw[i] - 0.16 * k,
                  hh, t, K.FS["table"], "white", bold=True)
        y += hh + 0.05 * k

        avail = K.FOOT_Y - 0.18 * k - y
        rh = avail / len(rows)
        for j, r in enumerate(rows):
            fill = "card" if j % 2 == 0 else "card2"
            for i, t in enumerate((r["stage"], r["ask"], r["cant"])):
                K.rect(s, x0 + sum(cw[:i]), y, cw[i], rh - 0.06 * k, fill, "rule")
                sh = K.box(s, x0 + sum(cw[:i]) + 0.09 * k, y + 0.07 * k,
                           cw[i] - 0.18 * k, rh - 0.20 * k, t,
                           K.FS["table"] if i == 0 else K.FS["note"],
                           "cyan_dk" if i == 0 else "ink",
                           bold=(i == 0), spacing=1.18)
                sh.text_frame.word_wrap = True
            y += rh
        K.footer(s, mod_display, None, 0, foot=foot)
    return draw


def load_cards():
    with open(CARD_PATH, encoding="utf-8") as f:
        return json.load(f)


def find_cheatsheet_tail(pages):
    """找速查章的最后一页（＝插入点）。判据：页脚里带「速查」的最后一页；
    找不到就退回全册最后一页，并在报告里说明——不静默猜。"""
    hit = None
    for num, body in pages:
        lines = [x for x in body.split("\n") if x.strip()]
        foot = "\n".join(lines[-2:])
        if "速查" in foot or "速查" in (lines[0] if lines else ""):
            hit = num
    return (hit, "速查章末页") if hit else (pages[-1][0], "全册末页（未识别到速查章）")


def main(argv):
    apply = "--apply" in argv
    cards = load_cards()
    total = 0
    for web, mod in sorted(WEB2MOD.items()):
        groups = cards.get(web)
        if not groups:
            sys.exit("%s：卡片数据缺失，先跑生成卡片那一步" % web)
        pptx = os.path.join(ROOT, "PPT-version", mod, "%s-讲义.pptx" % mod)
        w, h = canvas_of(pptx)
        k = set_canvas(w, h)
        pages = deck_pages(pptx)
        after, how = find_cheatsheet_tail(pages)

        chunks = [groups[i:i + ROWS_PER_PAGE]
                  for i in range(0, len(groups), ROWS_PER_PAGE)]
        display = cards["_display"][web]
        specs = []
        for i, rows in enumerate(chunks):
            suffix = "" if len(chunks) == 1 else " · 续%d" % (i + 1)
            foot = "%s · 售前速查 · 上云追问卡%s" % (display, suffix)
            specs.append((after + i, make_drawer(display, foot, rows, k),
                          "上云追问卡%s" % suffix))
        total += len(specs)
        print("%-20s 画布 %.3f×%.3f  %d 组 → %d 页，插在 p%d 之后（%s）"
              % (mod, w, h, len(groups), len(specs), after, how))
        if not apply:
            continue
        tmp = pptx + ".tmp"
        kb_insert.insert_figures(pptx, tmp, specs)     # size=None → 按 src 画布
        shutil.move(tmp, pptx)

    print("\n合计 %d 页。%s" % (total, "已落盘。" if apply else "预演，未落盘。"))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
