#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""从各模块 MANIFEST.md 生成网页面注册表 data.js（零第三方依赖）。

真源唯一：模块结构、章节、时效性事实、串联关系的唯一出处是 `PPT-version/<模块>/MANIFEST.md`
（core-rules §一）。网页需要的机器可读注册表一律由本脚本生成，**禁止手工双写第二份**。

产物 `data.js` 用 `<script>` 引入而不是 fetch——浏览器在 file:// 下会拦截 fetch 与 ES module
加载，而整库必须双击即开（web-design-system Portable 铁律）。

用法:
  python3 build.py            # 重新生成 data.js
  python3 build.py --check    # 只校验：重算一遍与现存 data.js 比对，有漂移则退出码 1
退出码: 0 = 成功 / 已同步, 1 = 生成失败或检出漂移。
"""
import datetime
import json
import os
import re
import sys as _sys
_maintenance = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "_maintenance")
if _maintenance not in _sys.path:
    _sys.path.insert(0, _maintenance)
import _lib
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
PPT = os.path.join(ROOT, "PPT-version")
OUT = os.path.join(HERE, "data.js")
INDEX = os.path.join(HERE, "index.html")
ROOT_INDEX = os.path.join(ROOT, "README.html")
MAPR_BEGIN = "<!-- MAPR:BEGIN 由 build.py 从各模块 MANIFEST.md 生成，请勿手工编辑 -->"
MAPR_END = "<!-- MAPR:END -->"
NET_BEGIN = "<!-- NET:BEGIN 由 build.py 从 MANIFEST 串联出边生成，请勿手工编辑 -->"
NET_END = "<!-- NET:END -->"
FRESH_BEGIN = "<!-- FRESH:BEGIN 由 build.py 从 MANIFEST 时效性事实生成，请勿手工编辑 -->"
FRESH_END = "<!-- FRESH:END -->"
FRESHPAGE = os.path.join(HERE, "fresh.html")
MOD_BEGIN = "<!-- UPDATED:BEGIN 由 build.py 从 MANIFEST 取，请勿手工编辑 -->"
MOD_END = "<!-- UPDATED:END -->"
QAPAGE = os.path.join(HERE, "qa", "index.html")
QA_BEGIN = "<!-- QA:BEGIN 由 build.py 从各模块页与实战包抽取，请勿手工编辑 -->"
QA_END = "<!-- QA:END -->"
PREPQA = os.path.join(ROOT, "_prep", "实战包.html")
GLOSSPAGE = os.path.join(HERE, "glossary", "index.html")
GLOSS_BEGIN = "<!-- GLOSSARY:BEGIN 由 build.py 从 _prep/术语表.md 生成，请勿手工编辑 -->"
GLOSS_END = "<!-- GLOSSARY:END -->"
GLOSSSRC = os.path.join(ROOT, "_prep", "术语表.md")
# 库根 README.md 的模块表：GitHub 仓库首页是这个库在线的第一入口，而它此前是**手写**的
# ——2026-07-29 GitHub 化改造时发现它还停在「Web-version 待建」，实际 19/19 早已建成。
# 手写的账迟早会停在旧阶段（这库反复吃过的「语义过期」），所以按 core-rules §一
# 收进生成区：真源仍是各模块 MANIFEST，README.md 只是又一个派生面，`--check` 一并盯。
# 缺文件或缺标记都跳过——这条链对本库是新增，不该成为别的库跑 build.py 的前置条件。
README_MD = os.path.join(ROOT, "README.md")
RDME_BEGIN = "<!-- MODULES:BEGIN 由 Web-version/build.py 从各模块 MANIFEST.md 生成，请勿手工编辑 -->"
RDME_END = "<!-- MODULES:END -->"

# 保鲜看板的"今天"：写死在产物里会一天就过期，故取构建日。
# 这是生成期快照，页面上会显式标注截止日，不冒充实时。
BUILD_DATE = datetime.date.today().isoformat()

# 书架顺序以 KB-CONFIG.md「知识地图层定义」为准；这里只固定展示次序，层名本身仍从 MANIFEST 读。
LAYER_ORDER = ["解决方案层", "应用模式层", "协议层", "工程保障层", "基础层",
               "算力底座层", "数据底座层"]

# 模块字标（卡片左侧的色块缩写，导航站的"favicon 位"）；缺省取前两个字母大写。
MONO = {"A2A": "A2", "AI-Gateway": "GW", "AI-Infra-Compute": "IC",
        "AI-Infra-Platform": "IP", "AI-Ops": "OP", "Agent": "AG",
        "Data-Engineering": "DE", "Evaluation": "EV", "Fine-tuning": "FT",
        "LLM": "LM", "LLM-Inference": "LI", "LLM-Training": "LT",
        "MCP": "MC", "Model-Landscape": "ML", "Multimodal": "MM",
        "Prompt-Engineering": "PE", "RAG": "RA", "Security": "SE",
        "Solution-Patterns": "SP"}


def mono(dirname):
    if dirname in MONO:
        return MONO[dirname]
    letters = [c for c in dirname if c.isalnum()]
    return "".join(letters[:2]).upper() or "KB"


# 已建网页版的模块——**单一来源**：键=模块 ID（与 MANIFEST 一致），值=站内目录名。
# 页面路径与页脚注入路径都从这里派生，不再各写一份（曾因两份格式不同，
# 批量注册脚本直接产出语法错误，返工一轮）。新增一册只改这一处。
# 不在表内的模块在知识地图显示为「仅 PPT」。
WEB_DIRS = {
    "mcp": "mcp",
    "model-landscape": "model-landscape",
    "llm-inference": "llm-inference",
    "agent": "agent",
    "evaluation": "evaluation",
    "ai-gateway": "ai-gateway",
    "rag": "rag",
    "llm": "llm",
    "fine-tuning": "fine-tuning",
    "pe": "prompt-engineering",
    "llm-training": "llm-training",
    "security": "security",
    "a2a": "a2a",
    "multimodal": "multimodal",
    "solution-patterns": "solution-patterns",
    "ai-ops": "ai-ops",
    "data-engineering": "data-engineering",
    "ai-infra-compute": "ai-infra-compute",
    "ai-infra-platform": "ai-infra-platform",
    "predictive-ai-mlops": "predictive-ai-mlops",
    "ai-governance": "ai-governance",
}

# 派生一：站内相对路径。必须指到文件——file:// 下目录链接不会自动打开 index.html。
WEB_PAGES = {mid: "./%s/index.html" % d for mid, d in WEB_DIRS.items()}

def mod_href(mid, by_id, prefix="./"):
    """模块链接：有网页版就指网页版，只有讲义的回落到讲义 README。

    库的分批扩建纪律允许模块先只有讲义（全库各册当年都是这么过来的），
    但生成器一度假设「每个模块都在 WEB_DIRS 里」——新模块一进来就 KeyError。
    这里统一出口，别在四处各写一遍。
    """
    if mid in WEB_DIRS:
        return "%s%s/index.html" % (prefix, WEB_DIRS[mid])
    return "%s../PPT-version/%s/README.html" % (prefix, by_id[mid]["dir"])

# 派生二：模块页绝对路径，用于注入页脚「本册最近改动」（从 MANIFEST 取，手写会漂）。
MOD_PAGES = {mid: os.path.join(HERE, d, "index.html") for mid, d in WEB_DIRS.items()}

# ============ 知识点串联（章末串联条 + 关键词索引）============
# 每个内容章的末尾生成一条「串联」行：这一章牵出的其他主题，点了就到它在库内的落点。
# 两路数据源，都不新造事实：
# ① MANIFEST「串联出边」——章节级、带关系说明，唯一账本（core-rules §一）；
# ② CONCEPTS 关键词索引——关键词 → 它在库内的主归属落点（web-rules §五
#    「同一概念只有一个主要归属模块」的机器可读形态）。只存「词 → 去处」，
#    零释义、零事实——与 MONO / LAYER_ORDER 同地位：导航配置，不是第二份内容账。
# 正文提到某个关键技术、而它的主场在别的册时，串联条给一条链接；
# 该章已有手写链接指向那一册的不重复给。落点在生成时校验，对不上直接报错。
CONCEPTS = {
    # 关键词: "模块ID#章节ID"（由 2026-07-23 十九册知识点对账盘出，见
    # _maintenance/2026-07-23-知识点对照与串联-设计.md）。
    # 只收「关键技术」——一个词在库内有唯一明确的主场章节，且常在别的册被顺带提到。
    # 不收模块名（RAG/Agent/MCP 这类）：那是引用不是术语，会把串联条变成词云。
    # 落点在生成时校验（resolve_concepts），对不上直接报错。
    # —— 微调 / 训练 ——
    "LoRA": "fine-tuning#ft-methods",
    "QLoRA": "fine-tuning#ft-methods",
    "灾难性遗忘": "fine-tuning#ft-eval-deploy",
    "RLHF": "llm-training#llmtrain-alignment",
    "DPO": "llm-training#llmtrain-alignment",
    "GRPO": "llm-training#llmtrain-reasoning",
    "RLVR": "llm-training#llmtrain-reasoning",
    "Chinchilla": "llm-training#llmtrain-pretrain",
    # —— 模型原理 ——
    "RoPE": "llm#llm-architecture",
    "MoE": "llm#llm-architecture",
    "GQA": "llm#llm-attention-zoo",
    "MLA": "llm#llm-attention-zoo",
    "FlashAttention": "llm#llm-attention-zoo",
    # —— 检索 / RAG ——
    "RRF": "rag#rag-hybrid",
    "BM25": "rag#rag-hybrid",
    "混合检索": "rag#rag-hybrid",
    "重排序": "rag#rag-reranking",
    "GraphRAG": "rag#rag-graphrag",
    "Agentic RAG": "rag#rag-agentic",
    "ColPali": "rag#rag-multimodal",
    "上下文检索": "rag#rag-chunking",
    "语义层": "rag#rag-structured",
    # —— 数据底座 ——
    "文档智能解析": "data-engineering#de-parsing",
    "向量库迁移": "data-engineering#de-vectordb",
    # —— Agent / 协议 ——
    "Sub-agent": "agent#agent-subagent",
    "Computer Use": "agent#agent-computer-use",
    "上下文工程": "agent#agent-context",
    "记忆投毒": "agent#agent-memory",
    "Streamable HTTP": "mcp#mcp-transport",
    "Agent Card": "a2a#a2a-protocol",
    "AP2": "a2a#a2a-production",
    # —— 推理服务 ——
    "KV Cache": "llm-inference#llminf-kv-budget",
    "KV 缓存": "llm-inference#llminf-kv-budget",
    "PagedAttention": "llm-inference#llminf-batching",
    "Continuous Batching": "llm-inference#llminf-batching",
    "投机解码": "llm-inference#llminf-speculative",
    "goodput": "llm-inference#llminf-production",
    "vLLM": "llm-inference#llminf-engines",
    "SGLang": "llm-inference#llminf-engines",
    # —— 算力硬件 / 平台 ——
    "HBM": "ai-infra-compute#aic-hbm",
    "NVLink": "ai-infra-compute#aic-scaleup",
    "NVL72": "ai-infra-compute#aic-scaleup",
    "RDMA": "ai-infra-compute#aic-scaleout",
    "InfiniBand": "ai-infra-compute#aic-scaleout",
    "MIG": "ai-infra-platform#aip-sharing",
    "gang scheduling": "ai-infra-platform#aip-scheduling",
    "KServe": "ai-infra-platform#aip-serving",
    # —— 评估 ——
    "LLM-as-a-Judge": "evaluation#eval-judge",
    "判官校准": "evaluation#eval-judge",
    "黄金集": "evaluation#eval-build",
    "MMLU": "evaluation#eval-benchmarks",
    "SWE-bench": "evaluation#eval-benchmarks",
    # —— 安全 / 合规 ——
    "提示注入": "security#sec-prompt-injection",
    "间接注入": "security#sec-prompt-injection",
    "MITRE ATLAS": "security#sec-landscape",
    "EU AI Act": "security#sec-governance",
    # —— 提示词 ——
    "思维链": "pe#pe-core-techniques",
    "DSPy": "pe#pe-engineering",
    "提示词缓存": "pe#pe-engineering",
    # —— 多模态 / 格局 ——
    "ViT": "multimodal#mm-encoder",
    "开放权重": "model-landscape#ml-open",
}


def resolve_concepts(by_id):
    """校验 CONCEPTS 的落点真实存在，返回 词 → (模块ID, 章节ID)。"""
    out = {}
    for term, home in CONCEPTS.items():
        tmod, _, tch = home.partition("#")
        m = by_id.get(tmod)
        if not m or tmod not in WEB_DIRS:
            raise SystemExit("CONCEPTS「%s」指向未知或未建网页版的模块：%s" % (term, home))
        if tch not in {c["id"] for c in m["chapters"]}:
            raise SystemExit("CONCEPTS「%s」指向不存在的章节：%s" % (term, home))
        out[term] = (tmod, tch)
    return out


SEC_RE = re.compile(
    r'(<section class="sec" id="(?P<sid>[^"]+)">)(?P<body>.*?)(</section>)', re.S)
XLINKS_OLD_RE = re.compile(r'\n?[ \t]*<div class="xlinks">.*?</div>\n?', re.S)
TAG_RE = re.compile(r"<[^>]+>")
_WORDY = re.compile(r"[A-Za-z0-9-]")


def _ascii_hit(text, term):
    """英文词按词边界找：避免「MoE」命中「MoEngage」这类半截词。"""
    start = 0
    while True:
        i = text.find(term, start)
        if i < 0:
            return -1
        before = text[i - 1] if i else ""
        after = text[i + len(term)] if i + len(term) < len(text) else ""
        if not (_WORDY.match(before) or _WORDY.match(after)):
            return i
        start = i + 1


def parse_edge_targets(e):
    """拆「串联出边」的复合写法：from 可能「a / b」（两章共用一条边），
    to 可能「mod#c1 / c2」（后半截沿用前面的模块）或不带锚点的裸模块名。"""
    froms = [f.strip() for f in e["from"].split("/") if f.strip()]
    outs, tmod = [], ""
    for part in (p.strip() for p in e["to"].split("/")):
        if not part:
            continue
        if "#" in part:
            tmod, tch = (x.strip() for x in part.split("#", 1))
        elif tmod:
            tch = part
        else:
            tmod, tch = part, ""
        outs.append((tmod, tch))
    return froms, outs


def _short(title):
    """串联条标签用短章题：去掉「（五锚点 / 按规模演进…）」这类目录式括注。"""
    return re.split(r"[（(]", title, maxsplit=1)[0].strip()


def _clip(s, n=88):
    return s if len(s) <= n else s[:n] + "…"


def module_xlinks(m, by_id):
    """账本出边 → 每章的串联条目（人工判定的边排在前，关系说明进 title）。"""
    chap_ids = {c["id"] for c in m["chapters"]}
    per = {}
    for e in m["edges"]:
        if not e.get("resolved"):
            continue
        froms, outs = parse_edge_targets(e)
        for sid in froms:
            if sid not in chap_ids:
                continue
            for tmod, tch in outs:
                t = by_id.get(tmod)
                if not t:
                    continue
                titles = {c["id"]: c["title"] for c in t["chapters"]}
                anchor = ("#" + tch) if tch in titles else ""
                if tmod == m["id"]:
                    if not anchor or tch == sid:
                        continue        # 指回本章或没有可用锚点，无导航价值
                    href, label, sub = anchor, _short(titles[tch]), "本页"
                elif tmod in WEB_DIRS:
                    href = "../%s/index.html%s" % (WEB_DIRS[tmod], anchor)
                    label = _short(titles.get(tch, "")) or t["dir"]
                    sub = t["dir"] if label != t["dir"] else ""
                else:
                    continue
                per.setdefault(sid, []).append({
                    "href": href, "label": label, "sub": sub,
                    "title": _clip(e["why"]), "mod": tmod,
                })
    return per


def inject_xlinks(html_text, m, by_id, concepts):
    """向每个内容章 </section> 前注入串联条；qa/相关模块/来源三节不注入。
    幂等：先摘掉上一轮生成的块再插，重跑结果一致（--check 依赖这一点）。"""
    html_text = XLINKS_OLD_RE.sub("\n", html_text)
    per = module_xlinks(m, by_id)
    chap_ids = {c["id"] for c in m["chapters"]}

    def repl(match):
        sid = match.group("sid")
        if sid not in chap_ids:
            return match.group(0)
        body = match.group("body")
        items = list(per.get(sid, []))
        # 关键词命中：查纯文本（去掉标签与脚本），别把 href/title 里的词也算上
        text = TAG_RE.sub(" ", re.sub(r"<script\b.*?</script>", " ", body, flags=re.S))
        linked = {d.lower() for d in
                  re.findall(r'href="\.\./([a-z0-9-]+)/index\.html', body)}
        linked |= {d.lower() for d in
                   re.findall(r'href="\.\./\.\./PPT-version/([^/"]+)/', body)}
        used = {it["mod"] for it in items}
        hits = []
        for term, (tmod, tch) in concepts.items():
            if tmod == m["id"] or tmod in used:
                continue
            if WEB_DIRS[tmod] in linked or by_id[tmod]["dir"].lower() in linked:
                continue                # 本章正文已手写链接指向那一册，不重复给
            pos = _ascii_hit(text, term) if term.isascii() else text.find(term)
            if pos >= 0:
                hits.append((pos, term, tmod, tch))
        hits.sort()
        seen_mod = set()
        for pos, term, tmod, tch in hits:
            if tmod in seen_mod:        # 关键词路一册只给一条，防止串联条变词云
                continue
            seen_mod.add(tmod)
            t = by_id[tmod]
            titles = {c["id"]: c["title"] for c in t["chapters"]}
            items.append({
                "href": "../%s/index.html#%s" % (WEB_DIRS[tmod], tch),
                "label": term, "sub": t["dir"],
                "title": "这个词的主场：%s · %s" % (t["dir"], _short(titles.get(tch, ""))),
                "mod": tmod,
            })
        if not items:
            return match.group(0)
        seen_href, links = set(), []
        for it in items:
            if it["href"] in seen_href:
                continue
            seen_href.add(it["href"])
            sub = ('<span class="xm">%s</span>' % esc(it["sub"])) if it["sub"] else ""
            links.append('<a href="%s" title="%s">%s%s</a>'
                         % (esc(it["href"]), esc(it["title"]), esc(it["label"]), sub))
        block = ('\n\n  <div class="xlinks"><span class="xk">串联</span>%s</div>\n'
                 % "".join(links))
        return match.group(1) + body.rstrip() + block + match.group(4)

    return SEC_RE.sub(repl, html_text)


def rows(section, text):
    """取某个 ## 段落下的表格数据行（跳过表头与 |---| 分隔行）。"""
    _, body = _lib.md_table(section, text)
    return [c for c in body
            if c and c[0] not in ("字段", "章节 ID", "事实", "本模块章节", "词条")]



def field(text, name):
    for cells in rows("模块信息", text):
        if len(cells) >= 2 and cells[0] == name:
            return cells[1]
    return ""


def clean_layer(raw):
    """所在层可能带括注（如「解决方案层（2026-07-10 层调整：…）」），只取层名。"""
    return re.split(r"[（(]", raw, maxsplit=1)[0].strip()


def fact_due(f):
    """事实的有效复查日 = min(复查日, 核实日期 + 节奏天)。

    与 `_maintenance/check_freshness.py` 轴三同口径：「复查日」是把复核往前钉的钉子，
    不能用来把常规节奏往后推。两处必须一致，否则看板绿着而门禁红着。
    """
    v = re.match(r"^(\d{4}-\d{2}-\d{2})$", f["verified"].strip())
    cad = f["cadence"].strip()
    derived = ""
    if v and cad.isdigit():
        d = datetime.date(*(int(x) for x in v.group(1).split("-")))
        derived = (d + datetime.timedelta(days=int(cad))).isoformat()
    pin = f["recheck"].strip()
    if not re.match(r"^\d{4}-\d{2}-\d{2}$", pin):
        pin = ""
    if pin and derived:
        return min(pin, derived)
    return pin or derived


def read_module(dirname):
    path = os.path.join(PPT, dirname, "MANIFEST.md")
    text = open(path, encoding="utf-8").read()
    mid = field(text, "模块 ID")
    if not mid:
        raise SystemExit("%s：MANIFEST 缺「模块 ID」" % dirname)

    chapters = []
    for c in rows("章节清单", text):
        if len(c) < 3:
            continue
        chapters.append({"id": c[0], "no": c[1], "title": c[2],
                         "verified": c[4] if len(c) > 4 else ""})

    facts = []
    for c in rows("时效性事实（巡检盘查对象）", text) or rows("时效性事实", text):
        if len(c) < 4:
            continue
        f = {"text": c[0], "chapter": c[1], "verified": c[2],
             "source": c[3], "recheck": c[4] if len(c) > 4 else "—",
             "grade": c[5] if len(c) > 5 else "", "cadence": c[6] if len(c) > 6 else ""}
        f["due"] = fact_due(f)
        facts.append(f)

    edges = []
    for c in rows("串联出边", text):
        if len(c) < 3:
            continue
        edges.append({"from": c[0], "to": c[1], "why": c[2]})

    # 「最后更新」是长散文，里面混着两类日期：改动日与内容里提到的日期
    # （如"2026-07-28 新版规范"）。取**不晚于构建日的最大值**——
    # 取第一个会拿到最早那次改动（19 个模块曾全显示成 2026-07-12），
    # 取最大值会拿到未来的内容日期。
    _dates = [d for d in re.findall(r"\d{4}-\d{2}-\d{2}", field(text, "最后更新"))
              if d <= BUILD_DATE]
    m = max(_dates) if _dates else ""
    return {
        "id": mid,
        "dir": dirname,
        "layer": clean_layer(field(text, "所在层")),
        "created": field(text, "建立日期"),
        "updated": m,
        "chapters": chapters,
        "facts": facts,
        "edges": edges,
        "web": WEB_PAGES.get(mid, ""),
    }


# ============ 问答抽取（跨册问答库的数据源）============
# 为什么从页面抽而不是从 MANIFEST 抽：问答是页面内容，账本里本来就没有这一项。
# 同 load_blurbs() 读 PPT 总览取一句话简介——都是「读现成的成品」，不是另建第二份。
DETAILS_RE = re.compile(
    r"<details(?P<attrs>[^>]*)>\s*<summary>(?P<sum>.*?)</summary>(?P<body>.*?)</details>", re.S)
ADDED_RE = re.compile(r'<span class="added">([^<]*)</span>')
# 实战包的题：.qa 卡片 + .num 徽标（兜底话术的 num 是「兜底」，四条重名，另按序号编）
PREP_Q_RE = re.compile(
    r'<div class="qa"(?P<attrs>[^>]*)>\s*<div class="q"><span class="num">(?P<num>[^<]+)</span>'
    r'(?P<sum>.*?)</div>\s*<div class="a">(?P<body>.*?)</div>', re.S)


def plain(raw):
    """去标签 + 反转义 + 压空白。"""
    return re.sub(r"\s+", " ", html_unescape(re.sub(r"<[^>]+>", "", raw))).strip()


def html_unescape(s):
    for a, b in (("&amp;", "&"), ("&lt;", "<"), ("&gt;", ">"),
                 ("&quot;", '"'), ("&#39;", "'"), ("&nbsp;", " ")):
        s = s.replace(a, b)
    return s


def read_questions(dirname, mid):
    """抽一册模块页的「现场高频追问」，并回写稳定锚点 id。

    锚点用位序（`q-<模块ID>-<n>`）而不是文本哈希：本库的问答是**追加式**的
    （新章带来的新题都排在该册末尾，看 `.added` 日期即可确认），位序因此稳定；
    而哈希会在改一个错别字时静默失效，把已经分享出去的链接变成死链。
    """
    path = os.path.join(HERE, dirname, "index.html")
    if not os.path.exists(path):
        return [], None, None
    cur = open(path, encoding="utf-8").read()
    qs, pieces, last = [], [], 0
    for n, m in enumerate(DETAILS_RE.finditer(cur), 1):
        qid = "q-%s-%d" % (mid, n)
        added = ADDED_RE.search(m.group("sum"))
        qs.append({
            "id": qid,
            "q": plain(ADDED_RE.sub("", m.group("sum"))),
            "added": added.group(1).strip() if added else "",
            # 每题末尾「依据」行指向本册章节——问答与章节的关系是现成的，不用另猜
            "chapters": re.findall(r'href="#([a-z0-9\-]+)"', m.group("body")),
        })
        pieces.append(cur[last:m.start()])
        pieces.append('<details id="%s">' % qid)
        last = m.start() + len("<details") + len(m.group("attrs")) + 1
    pieces.append(cur[last:])
    return qs, cur, "".join(pieces)


def read_prep_questions():
    """抽实战包的题，并回写稳定锚点 id（题号本身就是稳定标识，直接用）。"""
    if not os.path.exists(PREPQA):
        return [], None, None
    cur = open(PREPQA, encoding="utf-8").read()
    dims = dict(re.findall(r'<h2 id="sec-([A-Z])">([^<]*?)(?:<span|</h2>)', cur))
    qs, pieces, last, nfb = [], [], 0, 0
    for m in PREP_Q_RE.finditer(cur):
        num = m.group("num").strip()
        if num == "兜底":
            nfb += 1
            qid = "q-prep-fallback-%d" % nfb
        else:
            qid = "q-prep-%s" % num
        fresh = re.search(r'<span class="fresh">⏳ 口径 ([\d-]+)</span>', m.group("sum"))
        qs.append({
            "id": qid, "num": num,
            "q": plain(re.sub(r'<span class="(?:fresh|must)">.*?</span>', "", m.group("sum"))),
            "dim": dims.get(num[0], "附 · 兜底话术") if num != "兜底" else "附 · 兜底话术",
            "fresh": fresh.group(1) if fresh else "",
            "must": '<span class="must">' in m.group("sum"),
        })
        pieces.append(cur[last:m.start()])
        pieces.append('<div class="qa" id="%s">' % qid)
        last = m.start() + len('<div class="qa"') + len(m.group("attrs")) + 1
    pieces.append(cur[last:])
    return qs, cur, "".join(pieces)


def render_qa(data, prep_qs):
    """跨册问答库：各册的现场高频追问 + 实战包的电梯版题，汇到一处可搜可筛。

    **它是索引不是副本**——只登记题目、出处与深链，答案留在原处。
    同一段答案文本全库只有一份，改答案不用记得改第二个地方
    （web-rules §一「账本唯一」在问答这条轴上的落法）。
    """
    mods = [m for m in data["modules"] if m.get("questions")]
    total_m = sum(len(m["questions"]) for m in mods)
    n_prep = sum(1 for q in prep_qs if q["num"] != "兜底")
    n_fb = len(prep_qs) - n_prep
    n_must = sum(1 for q in prep_qs if q["must"])
    o = ['  <p class="net-lead">全库 <b>%d 道</b>现场高频追问（分散在 %d 册里）'
         '＋实战包 <b>%d 道</b>电梯版交锋题，这一页把它们汇到一处。'
         '客户问了一句话，就搜那句话。</p>' % (total_m, len(mods), n_prep)]
    o.append('  <p class="net-lead">这里只放题目与去处——<b>答案留在原处</b>，'
             '点进去读。这样同一段答案全库只有一份，不会两处各说一套。</p>')

    o.append('  <div class="qa-tools">')
    o.append('   <input id="qf" type="search" placeholder="搜题目里的词（如：备案、注入、显存、并发）" '
             'autocomplete="off">')
    o.append('   <div class="qa-chips" id="qc"><button class="chip on" data-g="">全部</button>'
             '<button class="chip" data-g="prep">实战包</button>'
             '<button class="chip" data-g="mod">模块追问</button></div>')
    o.append('   <p class="qa-count" id="qn"></p>')
    o.append("  </div>")

    o.append('  <div class="qa-group" data-g="prep">')
    o.append('   <h3>实战包 · 对客交锋 %d 题 + %d 条兜底话术<span class="n">'
             '每题 15–30 秒的电梯版；★ 是必背，共 %d 道</span></h3>'
             % (n_prep, n_fb, n_must))
    cur_dim = None
    for q in prep_qs:
        if q["dim"] != cur_dim:
            cur_dim = q["dim"]
            o.append('   <p class="qa-dim">%s</p>' % esc(cur_dim))
        badge = '<span class="fresh">⏳ %s</span>' % esc(q["fresh"]) if q["fresh"] else ""
        star = '<span class="must">★</span>' if q["must"] else ""
        o.append('   <a class="qrow" href="../../_prep/实战包.html#%s">'
                 '<span class="qn">%s</span>%s%s%s</a>'
                 % (esc(q["id"]), esc(q["num"]), star, esc(q["q"]), badge))
    o.append("  </div>")

    o.append('  <div class="qa-group" data-g="mod">')
    o.append('   <h3>模块现场高频追问 %d 道<span class="n">'
             '每题给结论、机制或权衡、下一步与依据</span></h3>' % total_m)
    for m in mods:
        o.append('   <p class="qa-dim">%s<span class="n">%d 道</span></p>'
                 % (esc(m["dir"]), len(m["questions"])))
        for q in m["questions"]:
            badge = ('<span class="added">%s</span>' % esc(q["added"])) if q["added"] else ""
            o.append('   <a class="qrow" href="../%s/index.html#%s">'
                     '<span class="qn">%s</span>%s%s</a>'
                     % (esc(WEB_DIRS[m["id"]]), esc(q["id"]), esc(mono(m["dir"])),
                        esc(q["q"]), badge))
    o.append("  </div>")
    return "\n".join(o)


GLOSS_KINDS = [
    ("甲", "同一个词，两册指两件事",
     "问「有没有做漂移监控」的客户，说的可能是两种完全不同的漂移。这一组最值钱："
     "认错了，两边的人会以为谈的是同一件事，一直谈到验收才发现不是。"),
    ("乙", "两个词，常被当成一件事",
     "它们答的不是同一个问题。混着用不会当场报错，会在方案里留一个说不清的洞。"),
    ("丙", "客户当场会问，答偏要付代价",
     "不是难词，是答错成本高的词——口径先对齐，再谈方案。"),
]


def read_glossary():
    """读 `_prep/术语表.md` 的「## 术语」表。真源是那份 .md，页面只是它的一个派生面。"""
    if not os.path.exists(GLOSSSRC):
        return []
    text = open(GLOSSSRC, encoding="utf-8").read()
    out = []
    for cells in rows("术语", text):
        if len(cells) < 5:
            raise SystemExit("术语表某行不足 5 列：%s" % " | ".join(cells))
        term, kind, gloss, confuse, where = cells[:5]
        if kind not in ("甲", "乙", "丙"):
            raise SystemExit("术语「%s」的类是「%s」，只能是甲/乙/丙" % (term, kind))
        if "#" not in where:
            raise SystemExit("术语「%s」的去处「%s」不是 模块ID#章节ID" % (term, where))
        out.append({"term": term, "kind": kind, "gloss": gloss,
                    "confuse": "" if confuse in ("—", "-", "") else confuse,
                    "mod": where.split("#")[0], "chap": where.split("#")[1]})
    return out


def render_glossary(terms, by_id):
    """全库术语表：词 → 一句话 → 它容易被认成什么 → 去哪一章读。

    **索引不是副本**（同 `render_qa`）：完整解释留在主场那一章，这里只给一句话和去处，
    所以改内容不用记得改第二个地方。筛选件复用问答库那一套（`#qf`/`#qc`/`#qn` + `.qrow`），
    量词由页面上的 `data-unit` 给——同一套件服务两页，写死量词术语表会读成「共 99 道题」。
    """
    if not terms:
        return "  <p class=\"net-lead\">术语表源文件不在，本页暂空。</p>"
    for t in terms:                       # 落点必须真能落——断的去处比没有更糟
        if t["mod"] not in by_id:
            raise SystemExit("术语「%s」的模块 %s 不在账本里" % (t["term"], t["mod"]))
        if t["chap"] not in {c["id"] for c in by_id[t["mod"]]["chapters"]}:
            raise SystemExit("术语「%s」的章节 %s 不属于 %s"
                             % (t["term"], t["chap"], t["mod"]))
    n = {k: sum(1 for t in terms if t["kind"] == k) for k, _, _ in GLOSS_KINDS}
    o = ['  <p class="net-lead">共 <b>%d 条</b>，覆盖 %d 册。'
         '收录判据只有一条：<b>这个词读者理解偏了，会做出不同的决定</b>——'
         '所以这里没有面面俱到的词典条目。</p>'
         % (len(terms), len({t["mod"] for t in terms}))]
    o.append('  <div class="qa-tools">')
    o.append('   <input id="qf" type="search" data-unit="条" data-unit-all="条"'
             ' placeholder="搜词条或释义里的字（如：漂移、备案、缓存、金丝雀）" autocomplete="off">')
    o.append('   <div class="qa-chips" id="qc"><button class="chip on" data-g="">全部</button>'
             + "".join('<button class="chip" data-g="%s">%s（%d）</button>' % (k, d, n[k])
                       for k, d, _ in GLOSS_KINDS)
             + "</div>")
    o.append('   <p class="qa-count" id="qn"></p>')
    o.append("  </div>")
    for kind, title, why in GLOSS_KINDS:
        picked = [t for t in terms if t["kind"] == kind]
        if not picked:
            continue
        o.append('  <div class="qa-group" data-g="%s">' % kind)
        o.append('   <h3>%s<span class="n">%d 条</span></h3>' % (esc(title), len(picked)))
        o.append('   <p class="qa-dim">%s</p>' % esc(why))
        for t in picked:
            tail = ('<span class="n">　容易认成：%s</span>' % esc(t["confuse"])) if t["confuse"] else ""
            o.append('   <a class="qrow" href="%s#%s"><span class="qn">%s</span>%s%s</a>'
                     % (esc(mod_href(t["mod"], by_id, "../")), esc(t["chap"]),
                        esc(t["term"]), esc(t["gloss"]), tail))
        o.append("  </div>")
    return "\n".join(o)


def shelf_order(data):
    """七层书架顺序里的模块序列——前后册导航按它走。

    此前模块页只有语义跳转的「相关模块」，没有线性读法的入口：想按书架从头读一遍，
    每翻一册都得回首页。顺序取 LAYER_ORDER × 层内 MANIFEST 目录序，与首页知识地图一致。
    """
    out = []
    for layer in data["layers"]:
        for m in data["modules"]:
            if m["layer"] == layer and m["id"] in WEB_DIRS:
                out.append(m)
    return out


def prevnext(shelf, mid):
    ids = [m["id"] for m in shelf]
    if mid not in ids:
        return ""
    i = ids.index(mid)
    parts = ['\n  <nav class="prevnext" aria-label="书架前后册">']
    if i > 0:
        p = shelf[i - 1]
        parts.append('   <a href="../%s/index.html"><span class="k">上一册 · %s</span>'
                     "<b>%s</b></a>" % (esc(WEB_DIRS[p["id"]]), esc(p["layer"]), esc(p["dir"])))
    if i < len(shelf) - 1:
        n = shelf[i + 1]
        parts.append('   <a class="nx" href="../%s/index.html"><span class="k">下一册 · %s</span>'
                     "<b>%s</b></a>" % (esc(WEB_DIRS[n["id"]]), esc(n["layer"]), esc(n["dir"])))
    parts.append("  </nav>")
    return "\n".join(parts) if len(parts) > 2 else ""


def load_blurbs():
    """模块一句话简介，解析自 PPT 总览的模块表——那是「主题一句话」的账面位置
    （library-rules 索引两层），这里是读账，不是另建第二份。"""
    path = os.path.join(PPT, "README.html")
    try:
        text = open(path, encoding="utf-8").read()
    except OSError:
        return {}
    out = {}
    for d, raw in re.findall(
            r'<td><a href="\./([^/]+)/README\.html">[^<]*</a></td>\s*<td>(.*?)</td>',
            text, re.S):
        txt = re.sub(r"<[^>]+>", "", raw)
        out[d] = re.sub(r"\s+", " ", txt).strip()
    return out


def site_base():
    """在线站点根地址，取自 KB-CONFIG「在线站点」；没配就返回空串。

    为什么要有它：README.md 是给 **github.com** 看的，那里点 `Web-version/mcp/index.html`
    只会看到 HTML 源码，读者要的是 Pages 上渲染好的那一份，只能写绝对地址。
    地址属于「这个库的个性」，写死在脚本里换个库就废——所以搁 KB-CONFIG，与根目录、
    显示名同级。没配（别人的库、还没开 Pages）就退回相对链接，照样能用。"""
    try:
        text = open(os.path.join(ROOT, "KB-CONFIG.md"), encoding="utf-8").read()
    except OSError:
        return ""
    m = re.search(r"\|\s*在线站点\s*\|\s*([^|]+?)\s*\|", text)
    if not m:
        return ""
    # 与 make_share.kb_name() 同口径：值后面允许跟「（…）」注解，取值时切掉。
    v = m.group(1).split("（")[0].split("(")[0].strip()
    return "" if v in ("", "—", "无") else v.rstrip("/") + "/"


def blurb_short(s):
    """把 PPT 总览那句长简介压成一行能读完的定位。

    规则只两刀，都靠标点、不靠人工维护第二份短简介：先砍掉括号补充，再取第一小句。
    还是过长就截断——表格里读不完的一句等于没有。"""
    s = s.split("（")[0].split("，")[0].strip("：:；;、 ")
    return s if len(s) <= 46 else s[:45] + "…"


def render_readme_modules(data, blurbs):
    """README.md 的模块表（markdown）：层 / 模块 / 一句话 / 两个入口。

    **不放页数**——单模块页数已经挂在四处派生账上（模块 README、面总览、一页纸、
    MANIFEST），由 check_page_ledger 看死；在这里再抄一份就是第五本账，而门禁不查它。
    全库总页数是另一根轴，README.md 上那一处**已在** check_page_ledger 覆盖内，故保留。"""
    base = site_base()
    out = ["| 层 | 模块 | 一句话 | 在线读 | 源文件 |",
           "|---|---|---|---|---|"]
    for layer in data["layers"]:
        for m in data["modules"]:
            if m["layer"] != layer:
                continue
            d = m["dir"]
            web = WEB_DIRS.get(m["id"], "")
            if not web:
                read = "—"
            elif base:
                read = "[网页版](%sWeb-version/%s/)" % (base, web)
            else:
                read = "[网页版](Web-version/%s/index.html)" % web
            out.append("| %s | **%s** | %s | %s | [讲义](PPT-version/%s/%s-讲义.pptx) · "
                       "[清单](PPT-version/%s/MANIFEST.md) · [书单](PPT-version/%s/电子书书单.md) |"
                       % (layer, d, blurb_short(blurbs.get(d, "")), read, d, d, d, d))
    return "\n".join(out)


def build():
    dirs = sorted(d for d in os.listdir(PPT)
                  if os.path.isfile(os.path.join(PPT, d, "MANIFEST.md")))
    mods = [read_module(d) for d in dirs]

    seen = {}
    for m in mods:
        if m["id"] in seen:
            raise SystemExit("模块 ID 重复：%s（%s / %s）"
                             % (m["id"], seen[m["id"]], m["dir"]))
        seen[m["id"]] = m["dir"]

    known = {m["id"] for m in mods}
    layers = [l for l in LAYER_ORDER if any(m["layer"] == l for m in mods)]
    for m in mods:                      # 层出现在模块里却不在书架顺序表 → 显式报错而非静默丢失
        if m["layer"] not in layers:
            raise SystemExit("%s 的所在层「%s」不在 LAYER_ORDER，"
                             "请同步 KB-CONFIG 知识地图层定义" % (m["dir"], m["layer"]))

    # 串联出边指向「模块#章节ID」；指向未建模块的写法（如「（候选）X」）标为待建，不算坏边。
    for m in mods:
        for e in m["edges"]:
            tgt = e["to"].split("#")[0].strip()
            e["resolved"] = tgt in known

    # 问答：结构与事实来自 MANIFEST，问答文本来自各模块页——两个来源各管各的，不重叠。
    page_edits = {}
    for m in mods:
        if m["id"] not in WEB_DIRS:
            m["questions"] = []
            continue
        qs, cur, new = read_questions(WEB_DIRS[m["id"]], m["id"])
        m["questions"] = qs
        if cur is not None and cur != new:
            page_edits[os.path.join(HERE, WEB_DIRS[m["id"]], "index.html")] = (cur, new)

    by_id = {m["id"]: m for m in mods}
    concepts = resolve_concepts(by_id)

    # 关键词联想数据：章节 → 关键技术词。校验 CHKW 的章节 ID 都是真实章节（对不上就丢弃并告警），
    # 附章节所属模块 / 标题 / 层色，供网页端「点模块散关键词、点关键词跳章 + 散相关词」用。
    chmeta = {}
    for m in mods:
        if m["id"] not in WEB_DIRS:
            continue
        hue = layers.index(m["layer"])
        for c in m["chapters"]:
            chmeta[c["id"]] = {"mod": m["dir"], "modId": m["id"], "title": c["title"],
                               "web": WEB_PAGES[m["id"]], "hue": hue}
    kw_ch, dropped = {}, []
    for ch, words in CHKW.items():
        if ch in chmeta and words:
            kw_ch[ch] = words
        else:
            dropped.append(ch)
    if dropped:
        print("提示：CHKW 有 %d 个章节 ID 不在 MANIFEST 章节清单里，已丢弃：%s"
              % (len(dropped), "、".join(sorted(dropped))))

    data = {"generated_from": "PPT-version/*/MANIFEST.md（结构）+ Web-version/*/index.html（问答）"
                              "+ build.py CONCEPTS/CHKW（关键词落点与联想）",
            "layers": layers, "modules": mods,
            "concepts": [{"t": t, "m": by_id[tm]["dir"],
                          "u": "./%s/index.html#%s" % (WEB_DIRS[tm], tc)}
                         for t, (tm, tc) in sorted(concepts.items())],
            "kw": {"ch": kw_ch, "meta": {c: chmeta[c] for c in kw_ch}}}
    text = ("// 本文件由 Web-version/build.py 从各模块 MANIFEST.md 生成，请勿手工编辑。\n"
            "// 改内容请改 MANIFEST，然后重跑 build.py。\n"
            "window.KB = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n")
    return text, data, page_edits


def esc(s):
    return (s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
             .replace('"', "&quot;"))


def render_map(data, blurbs):
    """知识地图 → 卡片矩阵，只注入根首页（生成期静态注入，无 JS 时仍完整可读）。

    知识地图全站只有一份、住首页——曾同时放在网页版首页与首页，用户指出重复
    （2026-07-21 定版：同一内容不在两页重复铺开，跨页导航靠全站顶栏）。"""
    ppt_fmt = "./PPT-version/%s/README.html"
    out = []
    for i, layer in enumerate(data["layers"]):
        mods = [m for m in data["modules"] if m["layer"] == layer]
        if not mods:
            continue
        out.append('  <section class="layer hue-%d" id="lay-%d">' % (i, i))
        out.append('   <h3>%s<span class="n">%d 个模块</span></h3>'
                   % (esc(layer), len(mods)))
        out.append('   <div class="cards">')
        for m in mods:
            web_href = m["web"]
            if web_href:
                web_href = "./Web-version/" + web_href[2:]
            href = web_href or (ppt_fmt % m["dir"])
            tag = ("web", "网页版") if m["web"] else ("ppt", "仅 PPT")
            blurb = blurbs.get(m["dir"], "")
            out.append('    <a class="card" href="%s"%s>'
                       % (esc(href), (' title="%s"' % esc(blurb)) if blurb else ""))
            out.append('     <div class="chead"><span class="tile">%s</span>'
                       '<span class="cname">%s</span><span class="tag %s">%s</span></div>'
                       % (esc(mono(m["dir"])), esc(m["dir"]), tag[0], tag[1]))
            if blurb:
                out.append('     <div class="blurb">%s</div>' % esc(blurb))
            out.append('     <div class="meta">%d 章 · 更新 %s</div>'
                       % (len(m["chapters"]), esc(m["updated"] or "—")))
            out.append("    </a>")
        out.append("   </div>")
        out.append("  </section>")
    return "\n".join(out)


# 每条连线的「关联词」：桥接两个模块的关键技术名词/核心概念，供「关联学习」模式的
# 连线标签用（读者顺着这个词深挖）。键＝两个模块 ID 字典序排序后 "|" 连；由 2026-07-23
# 十九册 MANIFEST 串联出边的关系文字提炼。没登记的边不显标签（不强求每条都有）。
EDGE_TERMS = {
    "a2a|agent": "跨 Agent 协作", "a2a|ai-gateway": "统一身份传递",
    "a2a|mcp": "纵向 vs 横向", "a2a|security": "签名 · 最小权限",
    "agent|ai-gateway": "统一入口 · 护栏", "agent|evaluation": "轨迹评估",
    "agent|llm": "上下文工程根源", "agent|llm-inference": "Prefix Caching",
    "agent|llm-training": "推理模型 · RLVR", "agent|mcp": "工具接入 · MCP",
    "agent|multimodal": "多模态感知 · CU", "agent|pe": "上下文工程 · ReAct",
    "agent|rag": "Agentic RAG", "agent|security": "记忆投毒 · 控权",
    "agent|solution-patterns": "低代码平台",
    "ai-gateway|ai-ops": "trace 贯通", "ai-gateway|evaluation": "路由质量验收",
    "ai-gateway|llm-inference": "网关 vs 引擎", "ai-gateway|mcp": "MCP 网关治理",
    "ai-gateway|model-landscape": "路由 · 防锁定", "ai-gateway|security": "护栏 · 爆炸半径",
    "ai-gateway|solution-patterns": "token · 并发治理",
    "ai-infra-compute|ai-infra-platform": "硬件 vs 平台",
    "ai-infra-compute|llm-inference": "KV Cache · HBM",
    "ai-infra-compute|llm-training": "并行 · 显存切分",
    "ai-infra-platform|fine-tuning": "云上托管训练",
    "ai-infra-platform|llm-inference": "P/D 分离 · 承载",
    "ai-infra-platform|llm-training": "调度 · 容错",
    "ai-ops|data-engineering": "坏答案回流", "ai-ops|evaluation": "离线 vs 在线评估",
    "ai-ops|model-landscape": "换模型回归", "ai-ops|pe": "提示词发布工程",
    "ai-ops|security": "急停 · 事故响应", "ai-ops|solution-patterns": "运营包 · SLA",
    "ai-infra-platform|ai-ops": "集群可观测边界",
    "data-engineering|evaluation": "评估集方法", "data-engineering|fine-tuning": "数据配方",
    "data-engineering|rag": "解析 · 向量库", "data-engineering|security": "ACL · 越权测试",
    "data-engineering|solution-patterns": "数据就绪 · 报价",
    "evaluation|fine-tuning": "微调验收门禁", "evaluation|llm-inference": "质量 vs 延迟",
    "evaluation|llm-training": "选 vs 炼模型", "evaluation|model-landscape": "榜单幻觉 · 自建集",
    "evaluation|multimodal": "MMMU · OCRBench", "evaluation|pe": "评估驱动优化",
    "evaluation|rag": "RAG 三角验收", "evaluation|security": "红队 · 注入抵抗",
    "evaluation|solution-patterns": "POC 签字指标",
    "fine-tuning|llm-inference": "多 LoRA 部署", "fine-tuning|llm-training": "SFT · DPO 落地",
    "fine-tuning|model-landscape": "开放权重 · 许可证", "fine-tuning|pe": "选型链 · 到头才微调",
    "fine-tuning|rag": "改知识 vs 改行为", "fine-tuning|security": "投毒 · 来源验证",
    "llm|llm-inference": "KV Cache 机制↔系统", "llm|llm-training": "架构 vs 训练",
    "llm|model-landscape": "MoE 稀疏激活", "llm|multimodal": "ViT · 注意力复用",
    "llm|pe": "窗口 · 注意力",
    "llm-inference|llm-training": "训练 vs 推理账", "llm-inference|model-landscape": "思考预算 · decode",
    "llm-inference|multimodal": "视觉 token 膨胀", "llm-inference|rag": "1M 窗口不是终结者",
    "llm-training|rag": "微调 vs RAG", "llm-training|security": "投毒 · 来源验证",
    "mcp|security": "工具投毒 · 供应链",
    "model-landscape|multimodal": "原生 vs 拼管线", "model-landscape|rag": "1M 窗口 vs RAG",
    "model-landscape|security": "平台合规 · 备案", "model-landscape|solution-patterns": "模型可替换件",
    "multimodal|rag": "多模态检索", "multimodal|security": "跨模态注入",
    "multimodal|solution-patterns": "语音客服 · 数字人",
    "pe|rag": "提示词 vs RAG", "pe|security": "提示注入", "pe|solution-patterns": "风格注入",
    "rag|security": "向量库投毒 · ACL", "rag|solution-patterns": "检索路线选型",
    "security|solution-patterns": "权限感知检索",
}


# 每章的关键技术词（供「关键词联想」：点模块散开它的技术词，点技术词跳到讲它的那一章、
# 并散开同章相关词，一路顺着术语深挖）。键＝章节 ID（须与 MANIFEST 章节清单一致，构建时校验、
# 对不上就丢弃并告警）；由 2026-07-23 十九册逐章盘点。同章的词互为「相关词」。
CHKW = {
    # —— 协议层 ——
    "mcp-what-why": ["MCP", "Function Calling", "M×N→M+N", "AAIF", "SEP"],
    "mcp-protocol": ["Host/Client/Server", "JSON-RPC 2.0", "Tools/Resources/Prompts", "控制面", "tools/call 报文"],
    "mcp-transport": ["stdio", "Streamable HTTP", "无状态核心", "Extensions/Tasks", "弃用政策"],
    "mcp-server": ["FastMCP", "MCP Inspector", "工具描述", "REST 包装"],
    "mcp-production": ["OAuth 2.1", "MCP 网关", "MCP Registry", "私有 registry", "token 透传禁令"],
    "mcp-security": ["工具投毒", "rug pull", "confused deputy", "MCPTox", "NSA/CISA 指引"],
    "mcp-cheatsheet": ["上手四步", "排错三板斧", "Inspector 分层定位"],
    "a2a-what-why": ["A2A", "MCP/A2A 分工", "Linux Foundation", "多专精 Agent 协作"],
    "a2a-protocol": ["Agent Card", "Task 状态机", "Message/Part", "Artifact", "Protocol Buffers"],
    "a2a-transport": ["well-known URI", "三绑定", "SSE", "推送通知 webhook", "四种交付"],
    "a2a-handson": ["官方 SDK", "message/send", "a2a-inspector", "TCK"],
    "a2a-orchestration": ["opaque agents", "编排者—执行者", "链式流水线", "并行汇聚"],
    "a2a-production": ["多租户", "Bedrock AgentCore", "Vertex Agent Engine", "AP2", "采用度"],
    "a2a-security": ["Signed Agent Cards", "OAuth2/mTLS", "授权范围 scope", "五个信任边界", "跨 Agent 提示注入"],
    # —— 工程保障层 ——
    "gw-what-why": ["AI 网关", "LLM 专属六件套", "M×N 收敛", "边界辨析"],
    "gw-unify": ["OpenAI 兼容层", "虚拟密钥", "十步请求链", "五层策略栈", "优雅降级"],
    "gw-route": ["路由五策略", "复杂度路由", "语义路由", "fallback/熔断", "RouteLLM/FrugalGPT"],
    "gw-cost": ["按 token 限流", "花费归集 FinOps", "语义缓存", "相似度阈值"],
    "gw-guardrail": ["pre/post 护栏", "统一执行点", "审计证据链", "PII 脱敏", "注入检测"],
    "gw-observe": ["OpenTelemetry GenAI", "OpenInference", "日志/指标/追踪"],
    "gw-mcp": ["MCP 网关", "openapi-to-mcp", "RFC 8693 token 交换", "token 透传禁令", "三大授权反模式"],
    "gw-cheatsheet": ["自托管 vs 托管", "LiteLLM", "Higress", "Envoy AI Gateway", "Azure APIM"],
    "sec-landscape": ["指令数据不分离", "三层攻击面", "OWASP LLM Top 10", "MITRE ATLAS"],
    "sec-prompt-injection": ["提示注入", "间接注入", "越狱", "EchoLeak 零点击", "模型外兜底"],
    "sec-data-privacy": ["系统提示词泄露", "成员推断", "投毒三时机", "嵌入反演", "RAG 优于微调"],
    "sec-supply-chain": ["pickle RCE", "后门模型", "safetensors", "模型签名", "AI-BOM"],
    "sec-agentic": ["过度自主", "爆炸半径", "工具描述投毒", "记忆投毒", "HITL"],
    "sec-defense": ["纵深防御四道闸", "Llama Guard", "NeMo Guardrails", "双 LLM/CaMeL", "PyRIT 红队"],
    "sec-governance": ["NIST AI RMF", "EU AI Act", "ISO/IEC 42001", "AI-SPM"],
    "sec-china": ["双备案", "内容标识办法", "GB/T 45654", "数据出境三通道", "988 款备案"],
    "sec-cheatsheet": ["威胁→防护映射", "风险与合规自查", "爆炸半径分级"],
    "eval-why-hard": ["非确定性", "三层分工", "评估集护城河", "隐性回归"],
    "eval-benchmarks": ["MMLU 饱和", "GPQA", "HLE", "SWE-bench", "Arena/Elo", "数据污染"],
    "eval-methods": ["判分四法", "代码判分", "人工评估", "BLEU/ROUGE 失灵"],
    "eval-judge": ["LLM-as-a-Judge", "位置偏差", "冗长偏差", "自我偏好", "判官校准"],
    "eval-build": ["黄金集", "错误分析", "冷启动三路", "CI 门禁", "保留集"],
    "eval-scenarios": ["RAG 三角", "轨迹评估", "pass^k", "回归门禁", "幻觉率"],
    "eval-tooling": ["Ragas", "DeepEval", "promptfoo", "LangSmith/Phoenix", "四道发布门"],
    "eval-cheatsheet": ["POC 验收四件套", "应答三步", "误区总表"],
    "ft-when": ["微调时机", "定制光谱", "知识 vs 行为", "劝退清单"],
    "ft-methods": ["全参微调", "LoRA", "QLoRA", "显存心算", "学得少忘得少"],
    "ft-data": ["聊天模板", "JSONL", "LIMA", "合成数据", "蒸馏", "PII 治理三问"],
    "ft-training": ["Unsloth", "LLaMA-Factory", "Axolotl", "TRL", "eval loss/过拟合"],
    "ft-alignment": ["SFT", "DPO", "RFT", "GRPO", "偏好对", "reward hacking"],
    "ft-cloud": ["托管微调", "OpenAI 微调 API", "Bedrock Haiku", "数据出域"],
    "ft-eval-deploy": ["验收四层", "灾难性遗忘", "回归门禁", "adapter 热插拔", "多 LoRA"],
    "ft-field-guide": ["误区总表", "成本心算", "决策树"],
    "ops-what-why": ["质量轴", "token 成本轴", "静默退化", "观测成本", "采样率"],
    "ops-tracing": ["OTel GenAI", "span 四类", "trace 旅程", "PII 脱敏", "保留期分级"],
    "ops-online-eval": ["在线评估", "评估漏斗", "判官采样打分", "评审队列", "数据集晋升"],
    "ops-drift": ["漂移监测", "静默换 checkpoint", "嵌入距离", "回归集重跑"],
    "ops-release": ["版本注册表", "评估门禁", "金丝雀", "秒级回滚", "四层版本键"],
    "ops-incident": ["AI runbook 四问", "成本尖峰", "急停开关", "HITL 分级", "事故 SLA"],
    "ops-tooling": ["LangSmith", "Langfuse", "Arize Phoenix", "Braintrust", "AgentOps"],
    "ops-cheatsheet": ["运营包五件套", "月度质量报告", "观测验收六个可"],
    # —— 应用模式层 ——
    "rag-what-why": ["RAG 三步流程", "RAG vs 微调", "幻觉"],
    "rag-embedding": ["Embedding", "余弦相似度", "ANN", "HNSW", "pgvector", "向量库选型"],
    "rag-chunking": ["Chunking", "块大小/重叠", "Contextual Retrieval", "语义切分"],
    "rag-reranking": ["两阶段检索", "交叉编码器", "Bi-Encoder", "Cohere Rerank", "BGE-reranker"],
    "rag-evaluation": ["Ragas", "Faithfulness", "上下文精确率/召回率", "六段诊断", "DeepEval"],
    "rag-pipeline": ["离线建库/在线查询", "最小 RAG 管线", "LlamaIndex", "LangGraph"],
    "rag-hybrid": ["BM25", "混合检索", "RRF", "k≈60"],
    "rag-agentic": ["Agentic RAG", "CRAG", "Self-RAG", "Router", "ReAct"],
    "rag-production": ["质量漂移", "语义缓存", "检索层 ACL", "Trace", "四层证明"],
    "rag-graphrag": ["GraphRAG", "Leiden 社区检测", "LazyGraphRAG", "LightRAG", "全局查询"],
    "rag-multimodal": ["多模态 RAG", "ColPali", "MaxSim 晚交互", "转述索引", "统一多模态嵌入"],
    "rag-structured": ["Text-to-SQL", "语义层", "静默错误", "查文/查数路由"],
    "agent-what-why": ["Agent 循环", "Chatbot/Workflow/Agent 光谱", "停机条件"],
    "agent-components": ["ReAct", "Function Calling", "工具设计", "短期/长期记忆"],
    "agent-orchestration": ["编排五模式", "Orchestrator-Workers", "A2A", "Agent Card"],
    "agent-tools-mcp": ["MCP", "M×N 问题", "六层工具契约", "Resources vs Tools"],
    "agent-context": ["上下文工程", "context rot", "Compaction", "Just-in-time 检索", "子 agent 隔离"],
    "agent-eval-guardrails": ["pass^k", "轨迹级评估", "LLM-as-judge", "OWASP Agentic Top 10", "提示注入"],
    "agent-lowcode": ["Coze", "Dify", "n8n", "HiAgent", "fair-code 许可证"],
    "agent-memory": ["Mem0", "Letta (MemGPT)", "Zep", "LangMem", "记忆投毒 MINJA"],
    "agent-computer-use": ["Computer Use", "GUI Agent", "OSWorld", "Browser Use", "RPA 混合"],
    "agent-subagent": ["Sub-agent", "扇出/扇入", "任务书", "context: fork", "15× token 账"],
    "agent-cheatsheet": ["启用条件决策树", "六条验收线", "按症状导航"],
    "mm-what-why": ["理解侧 vs 生成侧", "能力谱系", "OCR 分工", "方案分诊"],
    "mm-encoder": ["ViT", "patch", "CLIP", "SigLIP", "视觉 token"],
    "mm-fusion": ["投影层 LLaVA", "交叉注意力 Flamingo", "Q-Former BLIP-2", "原生 vs 拼管线"],
    "mm-understanding": ["MMMU", "OCRBench", "InternVL3", "Qwen3-VL", "能力边界"],
    "mm-generation": ["扩散 vs 自回归", "GPT Image 2", "Nano Banana 2", "音色克隆", "any-to-any"],
    "mm-selection": ["成本/延迟/精度铁三角", "视觉 token 成本", "vLLM 自部署", "五层输入合同"],
    "mm-production": ["视觉幻觉", "跨模态提示注入", "评估四把尺", "分辨率上限"],
    "mm-voice-realtime": ["级联管线", "端到端 S2S", "gpt-realtime", "VAD", "打断 barge-in", "WebRTC"],
    "mm-video-generation": ["Seedance", "Sora 2", "可灵 Kling", "Veo", "按秒计价", "内容标识"],
    "sp-what-why": ["场景×积木", "需求分诊", "一物三用"],
    "sp-method": ["五层参考架构", "POC 三要素", "三本账", "口径鉴别术", "方案验收六条线"],
    "sp-customer-service": ["三层漏斗", "deflection vs resolution", "解决率口径", "语音客服"],
    "sp-knowledge-search": ["权限感知检索", "连接器", "Glean", "越权测试集"],
    "sp-content-gen": ["品牌一致性", "禁用词护栏", "Firefly 商业安全", "人审分级"],
    "sp-ai-coding": ["Copilot", "Cursor", "Claude Code", "双层格局", "DORA 指标"],
    "sp-digital-human": ["数字人", "HeyGen", "离线 vs 实时", "深度合成标识"],
    "sp-chatbi": ["ChatBI", "语义层", "Cortex Analyst", "三道闸", "Semantic View Autopilot"],
    "sp-meeting": ["会议助手", "WER", "说话人分离", "会议记忆库", "bot 疲劳"],
    # —— 基础层 ——
    "llm-why-transformer": ["Transformer", "RNN", "长距离依赖", "Attention Is All You Need", "可扩展性"],
    "llm-attention-qkv": ["QKV", "缩放点积注意力", "Softmax", "因果掩码", "多头注意力"],
    "llm-architecture": ["Embedding", "RoPE", "FFN", "残差连接/LayerNorm", "Decoder-only", "MoE"],
    "llm-inference-kv": ["KV 缓存", "prefill/decode", "TTFT/TPOT", "上下文窗口", "有效窗口 RULER"],
    "llm-attention-zoo": ["GQA", "MLA", "稀疏注意力 DSA", "滑动窗口 SWA", "线性混合", "FlashAttention"],
    "llm-presales-map": ["架构选型七问", "四类失败分诊", "Mamba/SSM"],
    "pe-what-why": ["提示词工程", "能力杠杆", "提示词→RAG→微调"],
    "pe-anatomy": ["system prompt", "消息角色", "四要素", "分隔符", "五层结构"],
    "pe-core-techniques": ["zero-shot/few-shot", "CoT 思维链", "结构化输出", "正向表述"],
    "pe-advanced-reasoning": ["自洽性", "ReAct", "提示词链", "ToT", "推理预算"],
    "pe-engineering": ["提示词版本化", "评估驱动", "DSPy MIPROv2/GEPA", "提示词缓存", "上下文预算四分区"],
    "pe-security": ["提示词注入", "间接注入", "越狱", "OWASP LLM01", "纵深防御", "护栏"],
    "pe-presales-map": ["选型判断树", "六步白板演练", "上线验收四条线"],
    "llminf-anatomy": ["自回归", "prefill/decode 两阶段", "TTFT", "TPOT", "带宽墙"],
    "llminf-kv-budget": ["KV Cache 心算", "GQA/MLA", "显存账本", "长上下文成本", "容量规划"],
    "llminf-batching": ["Continuous Batching", "PagedAttention", "Prefix Caching", "RadixAttention", "Chunked Prefill"],
    "llminf-engines": ["vLLM", "SGLang", "TensorRT-LLM/NIM", "llama.cpp/Ollama", "OpenAI 兼容 API"],
    "llminf-quant": ["FP8", "INT4", "AWQ/GPTQ", "NVFP4", "GGUF", "校准"],
    "llminf-speculative": ["投机解码", "EAGLE-3", "MTP", "接受率", "Test-time Scaling"],
    "llminf-disagg": ["P/D 分离", "Mooncake", "Dynamo", "llm-d", "TP/PP/EP", "KV 分层存储"],
    "llminf-production": ["SLO", "goodput", "压测", "成本心算", "盈亏线利用率"],
    "llmtrain-overview": ["训练流水线六道工序", "base/instruct/reasoning", "训练 vs 推理成本"],
    "llmtrain-data": ["清洗去重", "FineWeb", "分词/BPE", "数据墙", "模型坍缩"],
    "llmtrain-pretrain": ["下一词预测", "Scaling Laws/Chinchilla", "稀疏 MoE", "FP8 训练", "Muon"],
    "llmtrain-sft": ["SFT", "LIMA 质量>数量", "蒸馏造数据", "Chat Template"],
    "llmtrain-alignment": ["RLHF", "奖励模型", "Reward Hacking", "DPO", "对齐税"],
    "llmtrain-reasoning": ["RLVR", "GRPO", "DeepSeek-R1", "思维链", "推理蒸馏", "推理时扩展"],
    "llmtrain-infra": ["16 字节/参数显存账", "DP/TP/PP/EP", "ZeRO", "6ND 法则", "MFU", "checkpoint 容错"],
    "llmtrain-eval": ["benchmark 三层", "数据污染/刷榜", "Arena", "模型卡五盯点", "开源许可"],
    # —— 算力底座层 ——
    "aic-overview": ["五层栈", "功率密度/液冷", "东西向流量", "训练 vs 推理曲线"],
    "aic-gpu": ["Tensor Core", "精度阶梯 FP8/FP4", "Roofline", "MFU"],
    "aic-hbm": ["HBM 堆叠", "HBM4", "16 字节/参数训练账", "权重+KV 推理账"],
    "aic-chips": ["NVIDIA Rubin", "CUDA 护城河", "AMD MI400", "TPU Ironwood", "昇腾 910C"],
    "aic-scaleup": ["NVLink 5", "NVSwitch", "NVL72", "带宽阶梯", "UALink"],
    "aic-scaleout": ["RDMA/GPUDirect", "NCCL", "AllReduce/AllToAll", "InfiniBand vs RoCE", "Ultra Ethernet", "轨道优化"],
    "aic-storage": ["并行文件系统", "checkpoint 洪峰写", "对象存储分层", "KV Cache 外置"],
    "aic-econ": ["TCO", "PUE/液冷", "建 vs 租 vs API", "盈亏线利用率"],
    "aip-overview": ["平台四大职责", "裸机之痛", "利用率翻倍 ROI", "K8s + 插件", "四条控制链"],
    "aip-k8s-gpu": ["Device Plugin", "DRA", "GPU Operator", "拓扑感知申请"],
    "aip-scheduling": ["gang scheduling", "碎片/bin-packing", "Kueue", "Volcano", "KAI/Run:ai"],
    "aip-sharing": ["MIG", "时间片", "MPS", "HAMi", "多租户隔离"],
    "aip-faulttol": ["checkpoint 异步/分级", "自愈循环", "466 次中断", "HyperPod"],
    "aip-observability": ["利用率三层口径", "MFU", "goodput", "四大黑洞", "DCGM", "chargeback"],
    "aip-serving": ["训练 vs 推理调度", "KServe", "llm-d/Dynamo", "扩缩信号", "冷启动"],
    "aip-cloud": ["云上四形态", "责任递交线", "三问定档", "自建隐藏工作量"],
    # —— 解决方案 · 数据底座 ——
    "ml-map": ["三大阵营", "企业/消费份额分裂", "Menlo 口径", "模型贬值资产"],
    "ml-closed": ["闭源旗舰家族", "GPT-5.6 三档", "Claude 5", "Gemini 3.1", "Grok 4.3"],
    "ml-open": ["开放权重", "开源追平", "SWE-bench", "MoE 稀疏激活", "Llama 4"],
    "ml-china": ["国产四强", "豆包家族", "昇腾全国产训练", "模型即入口"],
    "ml-platforms": ["火山方舟", "阿里百炼", "百度千帆", "腾讯混元", "模型货架哲学"],
    "ml-license": ["open weight", "OSAID", "MIT/Apache 2.0", "社区许可证", "蒸馏条款继承"],
    "ml-price": ["价格光谱", "三档家族制", "缓存经济学", "报价纪律", "降价传导"],
    "ml-capability": ["上下文窗口", "有效窗口", "多模态矩阵", "思考预算", "overthinking"],
    "ml-selection": ["多模型组合", "三层路由", "五约束决策树", "Leaderboard Illusion", "评估集终审"],
    "ml-cheatsheet": ["赏味期限", "保鲜声明", "定点复查"],
    "de-what-why": ["数据就绪度", "四问评估", "显性工程件", "数据工程报价"],
    "de-parsing": ["文档智能解析", "LlamaParse", "Docling", "MinerU", "表格保真", "CJK 版面"],
    "de-pipeline": ["连接器五件事", "增量同步", "webhook/CDC", "内容指纹去重", "失效下架"],
    "de-vectordb": ["向量库选型", "pgvector", "Qdrant", "Milvus", "混合检索", "向量库迁移"],
    "de-quality": ["质量四指标", "覆盖率仪表盘", "坏答案回流", "修数据不改提示词"],
    "de-labeling": ["标注预算三去向", "合成数据", "种子样本", "坏例分流", "保留集防应试"],
    "de-governance": ["ACL 映射", "采集点脱敏", "越权测试集", "向量化≠匿名化", "遗忘权", "血缘"],
}


def render_graph(data):
    """分层链接图：各模块按 7 层排布 + 串联出边画成图（替代原来的表格）。

    节点＝模块（按 KB-CONFIG 层级从上到下分带，就是 PPT 总览那套层级），
    边＝各模块 MANIFEST「串联出边」的无向去重关系。默认边极淡、悬停高亮一个模块的邻接。
    布局用重心排序（barycenter）减少交叉，确定性无随机——出静态 SVG，file:// 与无 JS 都完整可读；
    无 JS 的文字路径由随后的 `<details>` 表格兜底（复用 render_network，故 table.net 类不失联）。
    """
    mods = data["modules"]
    by_id = {m["id"]: m for m in mods}
    layers = data["layers"]
    layer_i = {l: i for i, l in enumerate(layers)}

    adj = {m["id"]: {} for m in mods}      # 无向邻接：id -> {邻居id: 关系说明}
    for m in mods:
        for e in m["edges"]:
            tgt = e["to"].split("#")[0].strip()
            if not e.get("resolved") or tgt == m["id"] or tgt not in by_id:
                continue
            adj[m["id"]].setdefault(tgt, e["why"])
            adj[tgt].setdefault(m["id"], e["why"])

    lay_nodes = {l: [m["id"] for m in mods if m["layer"] == l] for l in layers}

    # 几何：viewBox 1000 宽，每层一条带（带高按该层排几行算，不再全库统一）
    W, padTop, bandH, areaL, areaR, nh = 1000, 16, 98, 172, 980, 40
    chip = 26
    GAP, ROWGAP = 14, 12          # 胶囊横向间距 / 行间距

    # 节点宽度按名字长短算，不写死——否则 Solution-Patterns / Prompt-Engineering
    # 这类长名会撑出胶囊框（用户实测「框比字短」）。字面量：左内边距 7 + 字标 26 +
    # 间距 8 + 名字宽（每字符约 7.0px，加宽估避免裁字）+ 右内边距 16，最短兜底 100。
    NW = {m["id"]: max(100, int(7 + chip + 8 + len(m["dir"]) * 7.0 + 16)) for m in mods}

    def pack(ids):
        """把一层的胶囊排成若干行——**一行装不下就换行**。

        原来是按个数均分槽位（`areaL + (j+0.5)*area/n`），**完全不看胶囊有多宽**。
        层里模块少时碰巧不出事；21 册时工程保障层 7 个胶囊合计 939px，而可用宽度只有
        808px——于是相邻胶囊互相压住、长名字被裁掉半截（用户实测「全部挤到一起」）。
        这类缺陷没有门禁拦得住：坏链、配平、样式契约各管各的，重叠是几何。
        """
        area = areaR - areaL

        def fits(row):
            return sum(NW[m] for m in row) + GAP * (len(row) - 1) <= area

        rows, cur = [], []                          # ① 贪心：先定出要几行
        for mid in ids:
            if cur and not fits(cur + [mid]):
                rows.append(cur)
                cur = []
            cur.append(mid)
        if cur:
            rows.append(cur)
        if len(rows) < 2:
            return rows

        # ② 按**个数**重新均分（7 个排两行 → 4+3，而不是贪心的 5+2 头重脚轻）；
        #    均分后有任一行装不下就退回贪心——好看让位于不压字。
        k, n = len(rows), len(ids)
        even, i = [], 0
        for r in range(k):
            take = n // k + (1 if r < n % k else 0)
            even.append(ids[i:i + take])
            i += take
        return even if all(fits(r) for r in even) else rows

    pos = {}

    def layout():
        """按各层当前顺序摆位，返回 ({层: (带顶, 带高)}, 总高)。

        单行层的带高与旧版一致（98），多行层才长高——**只有挤不下的那一层变形**。
        """
        geo, y = {}, padTop
        for l in layers:
            rows = pack(lay_nodes[l])
            content = len(rows) * nh + (len(rows) - 1) * ROWGAP
            bh = max(bandH, content + 44)
            top = y + bh / 2 - content / 2 + nh / 2
            for r, row in enumerate(rows):
                ry = top + r * (nh + ROWGAP)
                n = len(row)
                # 先按旧口径（个数均分槽位）算一遍——**装得下就照旧**，
                # 不为了修一行去改全库七层的观感。均分会压字时才换成两端对齐等间距，
                # 换行已保证这一行装得下，摊出来的间距必 ≥ GAP。
                even = [areaL + (j + 0.5) * (areaR - areaL) / n for j in range(n)]
                fits = n == 1 or all(
                    even[j + 1] - even[j] >= (NW[row[j]] + NW[row[j + 1]]) / 2 + GAP
                    for j in range(n - 1))
                if fits and n > 1:
                    for j, mid in enumerate(row):
                        pos[mid] = (even[j], ry)
                    continue
                gap = ((areaR - areaL) - sum(NW[m] for m in row)) / (n - 1) if n > 1 else 0
                x = areaL if n > 1 else (areaL + areaR) / 2 - NW[row[0]] / 2
                for mid in row:
                    pos[mid] = (x + NW[mid] / 2, ry)
                    x += NW[mid] + gap
            geo[l] = (y, bh)
            y += bh
        return geo, y + padTop

    layout()
    # 重心排序：每层内按「邻居平均 x」重排，上下交替扫，收敛到较少交叉
    for p in range(6):
        seq = layers if p % 2 == 0 else list(reversed(layers))
        for l in seq:
            lay_nodes[l] = sorted(
                lay_nodes[l],
                key=lambda mid: (sum(pos[k][0] for k in adj[mid]) / len(adj[mid]))
                if adj[mid] else pos[mid][0])
            layout()
    band_geo, H = layout()

    # 出口点分散：一个节点的每条边从它「上沿 / 下沿」的不同 x 出发，避免多条边挤成一束
    # （悬停枢纽节点时最明显——12 条边若共用一个出口点会糊成乱线）。
    pairs = sorted(set(tuple(sorted((m["id"], k))) for m in mods for k in adj[m["id"]]))
    inc = {m["id"]: [] for m in mods}
    for a, b in pairs:
        inc[a].append(b)
        inc[b].append(a)
    exitpt = {}
    for mid, others in inc.items():
        x0, y0 = pos[mid]
        top = sorted((o for o in others if pos[o][1] < y0 - 1), key=lambda o: pos[o][0])
        bot = sorted((o for o in others if pos[o][1] >= y0 - 1), key=lambda o: pos[o][0])
        for grp, ey in ((top, y0 - nh / 2), (bot, y0 + nh / 2)):
            n = len(grp)
            for i, o in enumerate(grp):
                ex = x0 + NW[mid] * 0.72 * ((i + 1.0) / (n + 1) - 0.5)
                exitpt[(mid, o)] = (ex, ey)

    def edge_path(a, b):
        ax, ay = exitpt[(a, b)]
        bx, by = exitpt[(b, a)]
        if abs(ay - by) < 1:                       # 同层：下凸弧
            cy = ay + 28
            return "M%.1f %.1fC%.1f %.1f %.1f %.1f %.1f %.1f" % (ax, ay, ax, cy, bx, cy, bx, by)
        my = (ay + by) / 2                          # 跨层：竖向 S 曲线（两端出口已错开）
        return "M%.1f %.1fC%.1f %.1f %.1f %.1f %.1f %.1f" % (ax, ay, ax, my, bx, my, bx, by)

    # 边按「上端所在层」着色（hue-N 类携带该层色令牌，深浅色自动跟随）——
    # 于是每层的连线像一束该层色的流线往下淌，比统一灰线有生气；悬停时再统一压成蓝色。
    def edge_hue(a, b):
        up = a if pos[a][1] <= pos[b][1] else b
        return layer_i[by_id[up]["layer"]]
    edges = ['    <path class="kedge hue-%d" data-a="%s" data-b="%s" data-term="%s" d="%s">'
             '<title>%s ↔ %s%s</title></path>'
             % (edge_hue(a, b), esc(a), esc(b),
                esc(EDGE_TERMS.get(a + "|" + b, "")), edge_path(a, b),
                esc(by_id[a]["dir"]), esc(by_id[b]["dir"]),
                ("　·　" + esc(EDGE_TERMS[a + "|" + b])) if (a + "|" + b) in EDGE_TERMS else "")
             for a, b in pairs]

    # 三遍分层画，顺序决定层叠——① 层带背景（最底）② 边（中间，连续不被挡）③ 节点（最上，压住出口）
    # 模块数从数据来，不写死：曾把「19 个模块」刻进生成器，库长到 21 册后
    # 三个生成区块同时说错数，而 --check 只比对生成器自己的输出，永远自洽（2026-08-02 修）
    o = ['  <svg class="kgraph" viewBox="0 0 %d %d" role="img" '
         'aria-label="全库 %d 个模块按七层排布的关系图，边表示讲一块时该带上的另一块">'
         % (W, H, len(mods))]

    o.append('   <g class="kbands">')
    for l in layers:                                # ① 层带背景 + 层标签
        i = layer_i[l]
        btop, bh = band_geo[l]
        yc = btop + bh / 2
        o.append('    <g class="hue-%d">' % i)
        o.append('     <rect class="kband" x="8" y="%.1f" width="%d" height="%.1f" rx="12"/>'
                 % (btop + 4, W - 16, bh - 8))
        o.append('     <circle cx="26" cy="%.1f" r="5" fill="var(--hue)"/>' % yc)
        o.append('     <text class="klabel" x="38" y="%.1f" font-size="12.5">%s</text>'
                 % (yc + 4, esc(l)))
        o.append("    </g>")
    o.append("   </g>")

    o.append('   <g class="kedges">')               # ② 边
    o.extend(edges)
    o.append("   </g>")

    # ③ 节点（压在边之上）。用 transform 定位、子元素相对中心画——点选聚焦时 JS 靠
    #    改 translate 平滑挪动节点；hue-N 类给胶囊上层色（深浅色自动跟随）。
    o.append('   <g class="knodes">')
    for l in layers:
        i = layer_i[l]
        for mid in lay_nodes[l]:
            m = by_id[mid]
            xc, yc = pos[mid]
            w = NW[mid]
            deg = len(adj[mid])
            adjids = ",".join(sorted(adj[mid]))
            o.append('    <a class="knode hue-%d" href="%s" data-m="%s" '
                     'data-adj="%s" transform="translate(%.1f,%.1f)" tabindex="0">'
                     % (i, esc(mod_href(mid, by_id)), esc(mid), esc(adjids), xc, yc))
            o.append('     <title>%s · 关联 %d 个模块</title>' % (esc(m["dir"]), deg))
            o.append('     <rect class="kbox" x="%.1f" y="%.1f" width="%d" height="%d" rx="10"/>'
                     % (-w / 2, -nh / 2, w, nh))
            o.append('     <rect class="kchip" x="%.1f" y="%.1f" width="%d" height="%d" rx="7"/>'
                     % (-w / 2 + 7, -chip / 2, chip, chip))
            o.append('     <text class="kmono" x="%.1f" y="4" font-size="11" text-anchor="middle">%s</text>'
                     % (-w / 2 + 7 + chip / 2, esc(mono(m["dir"]))))
            o.append('     <text class="knm" x="%.1f" y="4" font-size="12.5">%s</text>'
                     % (-w / 2 + 7 + chip + 8, esc(m["dir"])))
            o.append("    </a>")
    o.append("   </g>")
    o.append("  </svg>")

    deg_all = sorted(mods, key=lambda m: -len(adj[m["id"]]))
    hubs = "、".join("%s（%d）" % (m["dir"], len(adj[m["id"]])) for m in deg_all[:3])
    lead = ('  <p class="net-lead">按 7 层排布的全库 %d 个模块。<b>两种学法</b>——' % len(mods)
            + '<b>单点学习</b>：直接点模块进那一册；<b>关联学习</b>：点一个模块，它滑到中间、'
            '散开它的<b>关键技术词</b>；点一个词就跳到讲它的那一章去读，同时散开相关的词，'
            '顺着技术名词一步步深挖。</p>')
    toggle = ('  <div class="kg-modes" role="tablist">'
              '<button type="button" class="kg-mode on" data-mode="link">关联学习</button>'
              '<button type="button" class="kg-mode" data-mode="solo">单点学习</button>'
              '<span class="kg-modenote">关联＝点模块散关键词、顺着技术名词深挖；单点＝直接进册</span></div>')
    graph = (lead + '\n' + toggle
             + '\n  <div class="kgraph-wrap"><div class="kgraph-scroll">\n'
             + "\n".join(o) + "\n  </div>\n"
             '  <p class="kgraph-hint">「单点学习」点模块直接进册；「关联学习」下点模块散开它的'
             '关键技术词，点一个词跳到讲它的那一章、并散开相关词，最多联想 3 步；'
             '点中心可读该册，按返回全景 / Esc 回总图。需要逐条读关系，展开下面的文字表。</p></div>')

    alt = ('  <details class="kgraph-alt"><summary>换成文字表看（逐模块列出边）</summary>\n'
           + render_network(data) + "\n  </details>")
    return graph + "\n" + alt


def render_network(data):
    """跨模块关系网：讲一个模块时还该带上哪几块。

    这是网页版相对 PPT 的结构性优势——各册讲义各印各的，纸面上无法互相指；
    而串联关系本来就登记在各模块 MANIFEST 的「串联出边」里，这里只是把它们汇到一处。
    窄屏另给一个「相关模块」合并列：出边与入边对读者是同一个用途，
    三列硬撑到手机上一行会高到 400px（2026-07-20 实测），故窄屏合并（CSS 切换）。"""
    mods = data["modules"]
    by_id = {m["id"]: m for m in mods}
    out_map, in_map = {}, {}
    for m in mods:
        for e in m["edges"]:
            tgt = e["to"].split("#")[0].strip()
            if not e.get("resolved") or tgt == m["id"]:
                continue
            out_map.setdefault(m["id"], {}).setdefault(tgt, e["why"])
            in_map.setdefault(tgt, {}).setdefault(m["id"], e["why"])

    def name(mid):
        return by_id[mid]["dir"] if mid in by_id else mid

    def href(mid):
        m = by_id.get(mid)
        if not m:
            return ""
        return m["web"] or ("../PPT-version/%s/README.html" % m["dir"])

    deg = sorted(mods, key=lambda m: -(len(out_map.get(m["id"], {}))
                                       + len(in_map.get(m["id"], {}))))
    hubs = "、".join("%s（%d）" % (m["dir"],
                                 len(out_map.get(m["id"], {})) + len(in_map.get(m["id"], {})))
                    for m in deg[:3])

    o = ['  <p class="net-lead">关联最密的三块：<b>%s</b>——括号是它连出与连入的模块数。'
         '讲这几块时最容易牵出别的话题，也最值得先吃透。</p>' % esc(hubs)]
    o.append('  <div class="tw">')
    o.append('  <table class="net">')
    o.append('   <thead><tr><th>模块</th><th class="c-out">讲它时还该带上</th>'
             '<th class="c-in">谁会引到它</th><th class="c-all">相关模块</th></tr></thead>')
    o.append("   <tbody>")

    def links(d):
        if not d:
            return '<span class="none">—</span>'
        return "、".join('<a href="%s" title="%s">%s</a>'
                        % (esc(href(k)), esc(v[:60]), esc(name(k)))
                        for k, v in sorted(d.items()))

    for m in mods:
        outs = out_map.get(m["id"], {})
        ins = in_map.get(m["id"], {})
        merged = dict(ins)
        merged.update(outs)          # 出边的关系说明优先
        o.append('    <tr><td><b>%s</b></td><td class="c-out">%s</td>'
                 '<td class="c-in">%s</td><td class="c-all">%s</td></tr>'
                 % (esc(m["dir"]), links(outs), links(ins), links(merged)))
    o.append("   </tbody></table></div>")
    return "\n".join(o)


def _fresh_rows(data):
    """全部事实按有效复查日排开。

    2026-08-02 前每条事实只有「核实日期」，复查日是选填的（224 条里只有 30 条写了），
    所以看板分两块：写了复查日的排期表 + 没写的按核实日期挑最久的几条兜底。
    现在每条事实都自带节奏、都算得出到期日，兜底那块就没有存在理由了——
    留着只会给出两套互相矛盾的优先级。
    """
    rows_ = [(m, f) for m in data["modules"] for f in m["facts"]]
    due = [(m, f) for m, f in rows_ if f.get("due")]
    due.sort(key=lambda x: x[1]["due"])
    return rows_, due


def _href(m):
    return m["web"] or ("../PPT-version/%s/README.html" % m["dir"])


def _fact_table(rows):
    """按有效复查日排开；档位与等级同列显示，一眼看得出「这条为什么这么快到期」。"""
    o = ['  <div class="tw"><table class="fresh">',
         "   <thead><tr><th>复查日</th><th>档 / 级</th><th>模块</th><th>事实</th>"
         "</tr></thead><tbody>"]
    for m, f in rows:
        txt = esc(f["text"][:78] + ("…" if len(f["text"]) > 78 else ""))
        overdue = f["due"] < BUILD_DATE
        cad = f.get("cadence", "")
        tier = ("%s 天" % cad) if cad else "—"
        pinned = " 📌" if f["recheck"] == f["due"] and f["recheck"] != "—" else ""
        o.append('    <tr%s data-due="%s"><td><span class="badge %s">%s%s</span></td>'
                 '<td>%s / %s%s</td><td><a href="%s">%s</a></td><td>%s</td></tr>'
                 % (' class="over"' if overdue else "", esc(f["due"]),
                    "over" if overdue else "recheck",
                    "已过期 " if overdue else "", esc(f["due"]),
                    esc(tier), esc(f.get("grade", "") or "—"), pinned,
                    esc(_href(m)), esc(m["dir"]), txt))
    o.append("   </tbody></table></div>")
    return "\n".join(o)


def render_fresh(data):
    """首页只放「该管的」：已过期 + 30 天内到期。长尾去 fresh.html。

    理由：首页是学习入口，不是维护看板。真到期的该在首页拦住人，
    「最久未核实」这类长尾是巡检时才翻的（2026-07-20 用户裁决）。
    这里算的是构建日的静态挑行（无 JS 的兜底）；带 JS 打开时 site.js
    按浏览器当天重标过期行、重写汇总句（2026-09-05 起，构建期断言不再露面）。
    """
    rows_, due = _fresh_rows(data)
    bd = datetime.date(*(int(x) for x in BUILD_DATE.split("-")))
    horizon = (bd + datetime.timedelta(days=30)).isoformat()   # 30 天视界，跨月不再手算
    near = [(m, f) for m, f in due if f["due"] <= horizon]
    later = len(due) - len(near)

    o = []
    if near:
        o.append('  <p class="net-lead" id="fresh-sum">截至构建日 <b>%s</b>，'
                 '<b>%d 条</b>已到期或将在一个月内到期。</p>' % (BUILD_DATE, len(near)))
        o.append(_fact_table(near))
    else:
        o.append('  <p class="net-lead" id="fresh-sum">截至构建日 <b>%s</b>，'
                 '一个月内没有需要复查的事实。</p>' % BUILD_DATE)
    o.append('  <p class="net-lead">全库共 %d 条时效性事实；另有 %d 条排在一个月之后，'
             '见 <a href="./fresh.html">完整保鲜看板</a>。</p>'
             % (len(rows_), later))
    return "\n".join(o)


def _tier_summary(due):
    n = {}
    for _, f in due:
        n[f.get("cadence", "")] = n.get(f.get("cadence", ""), 0) + 1
    parts = ["%s 天档 %d 条" % (k, n[k]) for k in ("30", "90", "180") if n.get(k)]
    return "、".join(parts)


def render_fresh_full(data):
    rows_, due = _fresh_rows(data)
    o = ['  <p class="net-lead" id="fresh-sum">截至构建日 <b>%s</b>。全库 %d 条时效性事实'
         '各自带着复核节奏——%s；报价与榜单一个月一查，协议与平台能力三个月，'
         '原理与方法论半年。引用任何数字前先核日期。</p>' % (BUILD_DATE, len(rows_), _tier_summary(due))]
    o.append('  <p class="net-lead">下表按<b>有效复查日</b>排开：复查日取「核实日期 + 节奏」'
             '与人工钉的日期中<b>更早</b>的那个——📌 是人工钉的（多半是已公告未生效的节点）。'
             '浏览器打开时按当天重标过期行（超宽限的单独计数），行上日期就是应复核日。</p>')
    o.append("  <h2>按到期日排开</h2>")
    o.append(_fact_table(due))
    return "\n".join(o)


def inject(html, begin, end, block, what):
    i = html.find(begin)
    j = html.find(end)
    if i < 0 or j < 0 or j < i:
        raise SystemExit("index.html 缺少 %s 标记" % what)
    return html[:i + len(begin)] + "\n" + block + "\n  " + html[j:]


def adopt_stamped_date(argv):
    """`--check` 专用：把 BUILD_DATE 换成**产物里已经刻着的那个构建日**。

    保鲜看板不只是显示构建日，它还按「今天」挑行（已过期 / 30 天内到期），
    所以产物 = f(MANIFEST, 今天)。而提交发生在本地、校验发生在 CI，
    两边的「今天」跨天必然对不上——本机 UTC+8 已是次日、CI 还在 UTC 当日时，
    `--check` 就把时钟差报成「与 MANIFEST 已漂移」，红的却不是内容
    （2026-08-01 首次踩到：本地全绿、CI 红在这一道）。改用 UTC 只把窗口
    从 8 小时缩到 0 点前后，不治本。

    所以校验的口径是：**产物是否与 MANIFEST 在它自称的那个日期上自洽**——
    这才是这道门禁要防的漂移。构建日本身有没有放旧，交给巡检看，不归门禁。
    """
    if "--check" not in argv or not os.path.exists(FRESHPAGE):
        return
    m = re.search(r'截至构建日 <b>(\d{4}-\d{2}-\d{2})</b>',
                  open(FRESHPAGE, encoding="utf-8").read())
    if m:
        globals()["BUILD_DATE"] = m.group(1)


def main(argv):
    try:
        adopt_stamped_date(argv)
        text, data, page_edits = build()
        prep_qs, prep_cur, prep_new = read_prep_questions()
        if prep_cur is not None and prep_cur != prep_new:
            page_edits[PREPQA] = (prep_cur, prep_new)
        qa_cur = open(QAPAGE, encoding="utf-8").read()
        qa_new = inject(qa_cur, QA_BEGIN, QA_END, render_qa(data, prep_qs), "QA")
        gl_cur = gl_new = None
        if os.path.exists(GLOSSPAGE):
            gl_cur = open(GLOSSPAGE, encoding="utf-8").read()
            gl_new = inject(gl_cur, GLOSS_BEGIN, GLOSS_END,
                            render_glossary(read_glossary(),
                                            {m["id"]: m for m in data["modules"]}),
                            "GLOSSARY")
        blurbs = load_blurbs()
        # 库根 README.md 的模块表：没这文件、或文件里没埋标记，就当这个库不走这条链。
        rdme_cur = rdme_new = None
        if os.path.exists(README_MD):
            rdme_cur = open(README_MD, encoding="utf-8").read()
            if RDME_BEGIN in rdme_cur and RDME_END in rdme_cur:
                rdme_new = inject(rdme_cur, RDME_BEGIN, RDME_END,
                                  render_readme_modules(data, blurbs), "MODULES")
        html_cur = open(INDEX, encoding="utf-8").read()
        root_cur = open(ROOT_INDEX, encoding="utf-8").read()
        root_new = inject(root_cur, MAPR_BEGIN, MAPR_END,
                          render_map(data, blurbs), "MAPR")
        html_new = inject(html_cur, NET_BEGIN, NET_END, render_graph(data), "NET")
        html_new = inject(html_new, FRESH_BEGIN, FRESH_END, render_fresh(data), "FRESH")
        fp_cur = open(FRESHPAGE, encoding="utf-8").read()
        fp_new = inject(fp_cur, FRESH_BEGIN, FRESH_END, render_fresh_full(data), "FRESH@full")

        mod_cur, mod_new, anchored = {}, {}, 0
        by_id = {m["id"]: m for m in data["modules"]}
        concepts = resolve_concepts(by_id)
        shelf = shelf_order(data)
        for mid, path in MOD_PAGES.items():
            if not os.path.exists(path) or mid not in by_id:
                continue
            # 底稿要取**回写过问答锚点的那一版**——两处都写同一个文件，
            # 后写的会把先写的盖掉（第一版就踩了：锚点写进去又被页脚注入抹平）。
            cur = open(path, encoding="utf-8").read()
            base = page_edits[path][1] if path in page_edits else cur
            base = inject_xlinks(base, by_id[mid], by_id, concepts)
            block = ('  <p class="updated">本册最近改动 <b>%s</b>'
                     '（以模块清单 MANIFEST 为准）。</p>' % esc(by_id[mid]["updated"])
                     + prevnext(shelf, mid))
            mod_cur[path] = cur
            mod_new[path] = inject(base, MOD_BEGIN, MOD_END, block, "UPDATED@" + mid)
            if page_edits.pop(path, None):  # 已并进 mod_new，别再单独写一遍
                anchored += 1
    except SystemExit as e:
        print("生成失败：%s" % e)
        return 1

    if "--check" in argv:
        if not os.path.exists(OUT):
            print("data.js 不存在，请先跑 build.py")
            return 1
        bad = []
        if open(OUT, encoding="utf-8").read() != text:
            bad.append("data.js")
        if html_cur != html_new:
            bad.append("index.html 的生成区块（知识地图/关系网/保鲜看板）")
        if fp_cur != fp_new:
            bad.append("fresh.html")
        if root_cur != root_new:
            bad.append("库根 README.html 的知识地图")
        if rdme_new is not None and rdme_cur != rdme_new:
            bad.append("库根 README.md 的模块表")
        if qa_cur != qa_new:
            bad.append("qa/index.html 的问答库")
        if gl_new is not None and gl_cur != gl_new:
            bad.append("glossary/index.html 的术语表")
        for path in mod_new:
            if mod_cur[path] != mod_new[path]:
                bad.append("%s 的最近改动" % os.path.relpath(path, ROOT))
        for path in page_edits:
            bad.append("%s 的问答锚点" % os.path.relpath(path, ROOT))
        if bad:
            print("与 MANIFEST 已漂移：%s——请重跑 build.py 并提交产物。" % "、".join(bad))
            return 1
        print("data.js 与 index.html 生成区块均与 MANIFEST 一致。")
        try:
            stamped = datetime.date(*(int(x) for x in BUILD_DATE.split("-")))
            age = (datetime.date.today() - stamped).days
            if age > 30:
                print("提醒（报告型，不拦）：产物刻的构建日是 %s，距今 %d 天——"
                      "保鲜看板的静态挑行按构建日算，太久没重建会让看板失真，"
                      "改过 MANIFEST 就重跑 build.py。" % (BUILD_DATE, age))
        except ValueError:
            pass
        return 0

    # 锚点回写要先落盘：qa 页里的链接指向它们，反过来就会指到还不存在的锚点。
    for path, (_, new) in page_edits.items():
        open(path, "w", encoding="utf-8").write(new)
    open(OUT, "w", encoding="utf-8").write(text)
    open(INDEX, "w", encoding="utf-8").write(html_new)
    open(FRESHPAGE, "w", encoding="utf-8").write(fp_new)
    open(ROOT_INDEX, "w", encoding="utf-8").write(root_new)
    open(QAPAGE, "w", encoding="utf-8").write(qa_new)
    if gl_new is not None:
        open(GLOSSPAGE, "w", encoding="utf-8").write(gl_new)
    if rdme_new is not None:
        open(README_MD, "w", encoding="utf-8").write(rdme_new)
    for path, content in mod_new.items():
        open(path, "w", encoding="utf-8").write(content)
    nq = sum(len(m.get("questions", [])) for m in data["modules"])
    nx = sum(v.count('<div class="xlinks">') for v in mod_new.values())
    print("已生成 %s、index.html 的三个区块（知识地图/关系网/保鲜看板，%d 个模块）"
          "与 qa/index.html（%d 道模块追问 + %d 道实战题），"
          "补写问答锚点 %d 个文件，章末串联条 %d 处（关键词 %d 个）"
          % (os.path.relpath(OUT, ROOT), len(data["modules"]),
             nq, len(prep_qs), anchored + len(page_edits), nx, len(CONCEPTS)))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
