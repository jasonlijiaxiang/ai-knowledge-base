#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""一次性组装：把各组写好的章节页拼成整册讲义 JSON，交 kb_deck_build.py 渲染。

各组 agent 只写自己那几章的页；**模块级的四类页面必须整册视角写**，所以留在这里手工填：
封面（章节概览要列全，禁止只列前几章）、导览、以及收尾四件套里的串联页与总收束页。
生产验收清单与来源页由本脚本从 MANIFEST 串联出边与事实登记**派生**，避免两处各写一份。

用法:
    python3 2026-08-02-新模块组装.py <模块目录名> <各组页 JSON> <整册 JSON 输出>

跑完接 kb_deck_build.py 渲染，再 audit_pptx + 逐页渲染目检。
"""
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)

# 封面与导览的整册视角文案（模块级，逐字手写）
DECK = {
    "Predictive-AI-MLOps": {
        "title": "预测式 AI 与 MLOps · 把老模型接住，把新账算清",
        "subtitle": "Predictive AI & MLOps — 从切题、特征时间语义到七类信号",
        "groups": [
            {"label": "定位篇 · 第 1–2 章", "desc": "两种 AI 分工与算法取舍"},
            {"label": "切题篇 · 第 3–5 章", "desc": "预测时点、时间语义、特征平台"},
            {"label": "生产篇 · 第 6–7 章", "desc": "发布门与七类信号"},
            {"label": "对客篇 · 第 8–10 章", "desc": "解释公平、平台边界、速查"},
        ],
        "audience": "读者：AI 平台售前技术（有 Python/API 基础，重概念与取舍）",
        "toc_note": "客户已有的预测式模型是资产不是竞品——这一册讲怎么接住它，以及它周边真正缺的那几格。",
        "links_lead": "同一个概念在库里只有一个主要归属，这里只标关系与去处。",
        "recap_title": "一句话记住每一章",
    },
    "AI-Governance": {
        "title": "AI 治理 · 谁凭什么证据批准这个用途",
        "subtitle": "AI Governance — 用途登记、风险分层、五种决定与证据包",
        "groups": [
            {"label": "定位篇 · 第 1–2 章", "desc": "决定系统与用途登记"},
            {"label": "判定篇 · 第 3–4 章", "desc": "两把尺子与影响评估"},
            {"label": "运行篇 · 第 5–7 章", "desc": "五种决定、证据包、变化触发"},
            {"label": "对接篇 · 第 8–11 章", "desc": "框架边界、中国面、跑起来、速查"},
        ],
        "audience": "读者：AI 平台售前技术（有 Python/API 基础，重概念与取舍）",
        "toc_note": "治理不是一份文档，是一套一直在跑的决定系统——用招聘筛选 AI 走完整条链。",
        "links_lead": "同一个概念在库里只有一个主要归属，这里只标关系与去处。",
        "recap_title": "一句话记住每一章",
    },
}


def rows(section, text):
    m = re.search(r"^## %s.*?$(.*?)(?=^## |\Z)" % re.escape(section), text, re.S | re.M)
    if not m:
        return []
    out = []
    for line in m.group(1).split("\n"):
        line = line.strip()
        if not line.startswith("|"):
            continue
        c = [x.strip() for x in line.strip("|").split("|")]
        if not c or set(c[0]) <= set("- :") or c[0] in ("章节 ID", "本模块章节", "事实"):
            continue
        out.append(c)
    return out


def assemble(mod, groups, verified):
    man = open(os.path.join(ROOT, "PPT-version", mod, "MANIFEST.md"), encoding="utf-8").read()
    chapters = rows("章节清单", man)
    edges = rows("串联出边", man)
    d = DECK[mod]

    modfoot = "%s 讲义" % mod
    pages = [{
        "kind": "cover", "title": d["title"], "subtitle": d["subtitle"],
        "groups": d["groups"], "audience": d["audience"], "verified": verified,
    }]

    # 导览：章号 + 标题 + 一句话，取自各章过渡页的 question
    q = {}
    for g in groups:
        for p in g["pages"]:
            if p.get("kind") == "chapter":
                q[p["chapter_id"]] = p.get("question", "").replace("本章回答：", "")
    pages.append({
        "foot": modfoot, "kind": "toc", "title": "导览",
        "items": [{"no": c[1].replace("第 ", "").replace(" 章", "").zfill(2),
                   "title": c[2].split("：")[0][:18],
                   "gist": q.get(c[0], "")[:30]} for c in chapters],
        "note": d["toc_note"],
    })

    # 页脚上下文：既有 19 册写作「第 N 章 · 章标题 · 元素名」，audit 靠它把
    # 学习目标/动手做/对练/小结归到章；只写「模块 · 章节 ID」会误报固定元素缺失。
    ELEM = {"chapter": "", "goals": "学习目标", "handson": "动手做",
            "qa": "客户会怎么问", "summary": "本章小结"}
    meta = {c[0]: (c[1], c[2].split("：")[0]) for c in chapters}
    for g in groups:
        seen_qa = {}
        for p in g["pages"]:
            cid = p.get("chapter_id", "")
            if cid in meta:
                no, ttl = meta[cid]
                elem = ELEM.get(p["kind"], p.get("title", "")[:14])
                p["foot"] = "%s · %s%s" % (no, ttl, " · " + elem if elem else "")
                # 一章的对练拆多页时，第二页起标题加「续」——否则同题同上下文，
                # audit 检查项「标题重名」会判 FAIL（ppt-rules 允许拆页，但题要能分辨）
                if p["kind"] == "qa":
                    seen_qa[cid] = seen_qa.get(cid, 0) + 1
                    if seen_qa[cid] > 1:
                        p["title"] = "客户会怎么问（面试题）· 续%d" % (seen_qa[cid] - 1)
            pages.append(p)

    # 收尾四件套 ①串联
    pages.append({
        "foot": modfoot, "kind": "table", "chapter_id": "", "title": "串联：这一册接在库里哪几处",
        "lead": d["links_lead"],
        "cols": ["本册章节", "指向", "关系"], "widths": [2.6, 3.0, 6.4],
        "rows": [[e[0], e[1], e[2][:26]] for e in edges[:6]],
        "note": "完整出边见本模块 MANIFEST；跨模块引用一律写「模块#章节 ID」，「第 N 章」只作展示。",
    })
    # ②总收束（深色）
    pages.append({
        "foot": modfoot, "kind": "recap", "chapter_id": "", "title": d["recap_title"],
        "lines": ["%s %s" % (c[1], c[2].split("：")[0]) for c in chapters],
    })
    # ③生产验收清单
    pages.append({
        "foot": modfoot, "kind": "table", "chapter_id": "", "title": "生产验收清单：每一面要能出示什么",
        "lead": "答不出证据，就还没到生产。",
        "cols": ["验收面", "必须能出示的证据"], "widths": [3.4, 8.6],
        "rows": ACCEPT[mod],
        "note": "这张表按方案评审与交付对照用；每一行的展开在对应章节。",
    })
    # ④来源
    facts = [f for g in groups for f in g["facts"]]
    seen, items = set(), []
    for f in facts:
        s = f["source"]
        if s in seen:
            continue
        seen.add(s)
        items.append("%s（%s 核实）" % (s[:96], f["verified_at"]))
    pages.append({
        "foot": modfoot, "kind": "sources", "chapter_id": "", "title": "来源与核实",
        "lead": "本册时效性数字均经联网核实后写入，完整登记（事实 × 核实日期 × 信源 × 等级 × 节奏 × 不能外推）见本模块 MANIFEST。引用任何数字前先核日期。",
        "groups": [{"h": "本册引用的信源（%d 项）" % len(items), "items": items[:20]}],
    })
    return {"module": mod, "display": "AI 知识库", "pages": pages}


ACCEPT = {
    "Predictive-AI-MLOps": [
        ["题切对了", "预测时点、观察窗、标签窗、样本单元四样写在一页上，业务方签过字"],
        ["没有穿越", "按时间切分的回测记录；特征取数用的是预测时点当时可见的值"],
        ["两边一致", "同一实体同一时点，线上打分与离线重算逐字段比对的结果"],
        ["有基线", "不用模型的规则版成绩，与模型版同口径同切分"],
        ["可复现", "从一次生产打分能追到模型、数据快照、代码提交与审批"],
        ["会响也知道怎么办", "七类信号各自的检测方式、责任人，以及什么门槛才动模型"],
    ],
    "AI-Governance": [
        ["按用途登记", "同一模型的不同用途分条登记，每条带人群、决定、数据、地区、供应商"],
        ["分层有据", "组织风险层级的判定依据，以及它与法律分类分开写的说明"],
        ["影响评估在前", "架构与数据冻结之前完成的评估记录，含不可接受结果清单"],
        ["决定有主", "谁批准、批准的范围与条件、失效日期、到期怎么自动撤销"],
        ["证据可追", "从政策追到当前生产配置的一条完整链路，抽三项验证"],
        ["变化会触发", "哪些变更自动暂停该用途，以及恢复要补哪些证据"],
    ],
}


def main(argv):
    if len(argv) < 4:
        print(__doc__)
        return 2
    mod = argv[1]
    groups = json.load(open(argv[2], encoding="utf-8"))
    spec = assemble(mod, groups, "2026-08-02")
    json.dump(spec, open(argv[3], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("%s：%d 页（含封面、导览与收尾四件套）" % (mod, len(spec["pages"])))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
