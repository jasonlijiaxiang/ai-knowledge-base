#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把网页版云落点里的「顺着追问什么／云替你做不了什么」两格回流讲义侧。

**为什么回流**（web-rules §六·五 三道闸的「缺口级」）：讲义的云落点页停在
「这个环节有哪些服务」，没有「该顺着问什么」与「哪些事云替你做不了」。
前者是服务名地图，后者才是售前站在客户面前当场说出口的话——它改变读者的动作。

**落在哪**：每册**正文末章之后、收尾四件套之前**追加「上云追问卡」页。它不带「第 N 章」页题，
所以不受「每章固定元素」约束；这本来就是速查形态——一张对客时抽出来的卡；插在正文末尾，页码重排波及最小。

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
    "model-landscape": "Model-Landscape",
}

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


def metrics(k):
    """这一册画布下的表格版式度量。切页与绘制共用同一份，免得两边各算一套。"""
    wid = K.W - 2 * K.MARGIN
    cw = [wid * 0.20, wid * 0.40, wid * 0.40]
    y0 = K.BODY_TOP + 0.06 * k + 0.34 * k + 0.05 * k      # 表头之下
    avail = K.FOOT_Y - 0.18 * k - y0
    lh = K.FS["note"] / 72.0 * 1.18                        # 一行文字高（英寸）
    cpl = max(8, int((cw[1] - 0.18 * k) / (K.FS["note"] / 72.0)))   # 一行放几个中文字
    return cw, y0, avail, lh, cpl


def row_height(r, lh, cpl, k):
    """一行需要多高：按两个文本栏里较长的那栏折行数算，加上下内边距。"""
    n = max(-(-len(r["ask"]) // cpl), -(-len(r["cant"]) // cpl), 1)
    return n * lh + 0.30 * k


def paginate(groups, lh, cpl, k, avail):
    """按**高度**装页，不按固定行数。

    先按固定 3 行切，出来两种难看：4 组切成 3+1，第二页孤零零一行；
    行高改成按内容估之后，一页其实装得下四五行，再按 3 行切就是半页空白。
    现在让内容决定页数——装得下就不翻页。
    """
    pages, cur, used = [], [], 0.0
    for g in groups:
        h = row_height(g, lh, cpl, k)
        if cur and used + h > avail:
            pages.append(cur)
            cur, used = [], 0.0
        cur.append(g)
        used += h
    if cur:
        pages.append(cur)
    return pages


def make_drawer(mod_display, foot, rows, k, pagenum=None, suffix=""):
    """一页「上云追问卡」：三列表——阶段 / 顺着追问什么 / 云替你做不了什么。

    行高按两栏文字里较长的那栏算，不写死——写死行高的表格在长文本上会溢出到页脚。
    """
    def draw(s):
        # 多页时标题必须带「· 续N」——audit 有一道「标题重名」硬门禁（防的是配图批次
        # 留下的残留源页），只在页脚区分两页它照样报错。
        K.head(s, "上云追问卡：顺着追问什么 · 云替你做不了什么%s" % suffix,
               eyebrow="售前速查")
        K.box(s, K.MARGIN, K.BODY_TOP - 0.42 * k, K.W - 2 * K.MARGIN, 0.34 * k,
              "云服务清单答的是「有什么」，这张卡答的是「当场该问什么、哪些事别答应」。",
              K.FS["note"], "ink2")

        x0 = K.MARGIN
        cw, _, avail, lh, cpl = metrics(k)
        y = K.BODY_TOP + 0.06 * k
        hh = 0.34 * k
        for i, t in enumerate(("落地阶段", "顺着追问什么", "云替你做不了什么")):
            K.rect(s, x0 + sum(cw[:i]), y, cw[i], hh, "cyan", None)
            K.box(s, x0 + sum(cw[:i]) + 0.08 * k, y + 0.04 * k, cw[i] - 0.16 * k,
                  hh, t, K.FS["table"], "white", bold=True)
        y += hh + 0.05 * k

        need = [row_height(r, lh, cpl, k) for r in rows]
        total_need = sum(need)
        if total_need > avail:                            # 装不下就整体压缩，不裁字
            need = [h * avail / total_need for h in need]
        for j, r in enumerate(rows):
            rh = need[j]
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
        # 页码只在本来就带页码的册上写：全库 21 册里只有两册用页脚页码，
        # 给不带页码的册凭空加一个「p.124」，翻页时会突兀得像另一份文件。
        if pagenum is None:
            K.box(s, K.MARGIN, K.FOOT_Y, 8.0 * k, 0.3 * k, foot, K.FS["foot"], "ink2")
        else:
            K.footer(s, mod_display, None, pagenum, foot=foot)
    return draw


def load_cards():
    with open(CARD_PATH, encoding="utf-8") as f:
        return json.load(f)


CHAP_TITLE = re.compile(r"^第 \d+ 章")
PAGENUM = re.compile(r"<a:t>\s*p\.\s*\d+\s*</a:t>")


def has_pagenum(pptx):
    """这一册的页脚用不用页码。21 册里只有两册用——给不用的册凭空加一个「p.124」，
    翻到那页会突兀得像另一份文件混进来了。"""
    with zipfile.ZipFile(pptx) as z:
        for n in z.namelist():
            if re.match(r"ppt/slides/slide\d+\.xml$", n) and PAGENUM.search(
                    z.read(n).decode("utf-8", "replace")):
                return True
    return False


def find_body_tail(pages):
    """插入点＝**正文最后一章的最后一页**，也就是收尾四件套之前。

    第一版按「页脚带速查」找，两册踩空（LLM-Training、RAG 落到了「来源与核实」之后，
    Solution-Patterns 被正文里一句「第 10 章速查」骗到了总收束页）。
    改用页题判据：章内页的页题一律以「第 N 章」开头，而总收束／全书串联／生产验收／
    来源与核实／「· 完」这些收尾页都不带章号——从后往前找第一个带章号的页题即可。
    注意必须带空格：某册「来源与核实」页正文里出现过「第10章」，宽松匹配会把它当成章内页。
    """
    for num, body in reversed(pages):
        lines = [x for x in body.split("\n") if x.strip()]
        if lines and CHAP_TITLE.match(lines[0].strip()):
            return num, "正文末章末页（%s）" % lines[0].strip()[:22]
    raise SystemExit("找不到任何带「第 N 章」页题的页——这册的页题写法与其余册不同，去看一眼")


def main(argv):
    apply = "--apply" in argv
    cards = load_cards()
    total = 0
    only = [a for a in argv[1:] if not a.startswith("--")]
    for web, mod in sorted(WEB2MOD.items()):
        if only and web not in only:
            continue
        groups = cards.get(web)
        if not groups:
            sys.exit("%s：卡片数据缺失，先跑生成卡片那一步" % web)
        pptx = os.path.join(ROOT, "PPT-version", mod, "%s-讲义.pptx" % mod)
        w, h = canvas_of(pptx)
        k = set_canvas(w, h)
        pages = deck_pages(pptx)
        after, how = find_body_tail(pages)
        numbered = has_pagenum(pptx)

        _, _, avail, lh, cpl = metrics(k)
        chunks = paginate(groups, lh, cpl, k, avail)
        display = cards["_display"][web]
        # 同一个插入点插多页：kb_insert 的 `after` 一律按**原始**放映序算，
        # 所以不能写 after+i（第二页会落到原 p(after+1) 之后，中间夹进总收束——实测踩过）；
        # 正确用法是全部用同一个 after，并**逆序**传参，插完自然是正序。
        specs = []
        for i, rows in reversed(list(enumerate(chunks))):
            suffix = "" if len(chunks) == 1 else " · 续%d" % (i + 1)
            foot = "%s · 售前速查 · 上云追问卡%s" % (display, suffix)
            specs.append((after, make_drawer(display, foot, rows, k,
                                             pagenum=after + i + 1 if numbered else None,
                                             suffix=suffix),
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
