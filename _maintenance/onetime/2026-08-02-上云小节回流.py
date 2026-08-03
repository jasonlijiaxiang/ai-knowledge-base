#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""一次性回流：把讲义已有的「上云怎么落地」内容渲染进各册网页版。

背景（2026-08-02 诊断）：讲义面一直在执行 ppt-rules 那条「每章检查一次云服务落地」，
**网页版建设时把这批内容整个漏了**——RAG 讲义 12 页云内容、71 处命中，网页面 0；
Agent 43→1，AI-Infra-Compute 19→1，Multimodal 12→0。这是回流欠账，不是内容空白，
所以本脚本只搬运不创作：表格内容全部来自讲义，**零新增事实**。

输入 JSON 形如：

    {"agent": {"lead": "…", "source_pages": ["p10","p24"],
               "stages": [{"title": "…", "rows": [{"stage","services","oneliner"}…],
                           "ask": "…", "boundary": "…"}]}}

对每册做四件事（顺序固定，缺一处就会出现「小节在、目录没有」这类半截状态）：

  1. 在 `qa` / `related`（谁先出现取谁）之前插入 `<section class="sec" id="cloud">`；
  2. 新小节编号 = 当前最大内容小节号 + 1；
  3. 其后所有小节的 `<span class="num">` 统一 +1；
  4. 本页目录同位置插一条 `<li>`。

`cloud` 是**结构性小节**，与 `qa`/`related`/`sources` 同类，不进 MANIFEST 章节清单——
它不是讲义的某一章，而是把散在各章的云落点按管线阶段重新排了一遍。

用法:
    python3 2026-08-02-上云小节回流.py <内容.json>            # 试跑
    python3 2026-08-02-上云小节回流.py <内容.json> --apply     # 落盘

跑完必须接：check_html_wellformed / check_html_links / check_css_classes /
check_new_numbers（零新增事实这条只有它证得了）+ 渲染目检。
"""
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)

WEB = {
    "agent": "agent", "evaluation": "evaluation", "mcp": "mcp", "security": "security",
    "a2a": "a2a", "multimodal": "multimodal", "ai-infra-compute": "ai-infra-compute",
    "prompt-engineering": "prompt-engineering", "solution-patterns": "solution-patterns",
    "ai-ops": "ai-ops", "rag": "rag", "fine-tuning": "fine-tuning",
    "ai-infra-platform": "ai-infra-platform", "data-engineering": "data-engineering",
    "llm": "llm", "llm-inference": "llm-inference", "llm-training": "llm-training",
    "model-landscape": "model-landscape", "ai-gateway": "ai-gateway",
}

SEC_RE = re.compile(r'<section class="sec" id="([^"]+)">\s*\n\s*<h2><span class="num">(\d+)</span>')
# 内容按纯文本对待：出现裸 < 或裸 & 一律报错不落盘。静默转义会把 <b> 变成可见字符、
# 静默放行又会让 check_html_wellformed 在下一步才炸，届时已分不清是哪一册带进来的。
BAD_CHAR = re.compile(r'<|&(?!(?:amp|lt|gt|quot|#\d+|nbsp);)')


def render(mod, spec, num):
    """渲染整个 <section>。行内不带任何本机路径，所有链接都是页内锚点。"""
    o = ['<!-- ============ 上云 ============ -->',
         '<section class="sec" id="cloud">',
         '  <h2><span class="num">%02d</span>上云怎么落地<a class="anchor" href="#cloud">#cloud</a></h2>',
         '',
         '  <div class="lead">',
         '    <p>%s</p>' % spec["lead"],
         '    <p>同一环节给多厂商代表选项，<b>不绑死单一供应商</b>；只列有真实云关联的环节，'
         '没有就不硬凑。服务能力以各云 2026 年现状为准，报方案前按当期文档复核。</p>',
         '  </div>', '']
    o[2] = o[2] % num
    for st in spec["stages"]:
        o.append('  <h3>%s</h3>' % st["title"])
        o.append('  <div class="tw">')
        o.append('  <table>')
        o.append('    <thead><tr><th>技术环节</th><th>代表性云服务（多厂商，非绑定）</th>'
                 '<th>给客户一句话</th></tr></thead>')
        o.append('    <tbody>')
        for r in st["rows"]:
            o.append('      <tr><td>%s</td><td>%s</td><td>%s</td></tr>'
                     % (r["stage"], r["services"], r["oneliner"]))
        o.append('    </tbody>')
        o.append('  </table>')
        o.append('  </div>')
        o.append('  <p><b>顺着追问什么</b>：%s</p>' % st["ask"])
        o.append('  <p><b>云替你做不了什么</b>：%s</p>' % st["boundary"])
        o.append('')
    o.append('  <p class="ev">本节服务清单与「给客户一句话」与讲义各章的「上云怎么落地」页同源，'
             '<b>未引入新事实</b>；「顺着追问什么」与「云替你做不了什么」两格是网页版补的售前视角。'
             '<b>不可外推边界</b>：这是「哪个环节有云服务可用」的地图，不是选型结论——'
             '具体产品的地域可用性、配额、计价单位与生命周期状态会月级变动，'
             '出方案前按当期官方文档逐项复核。</p>')
    o.append('</section>')
    o.append('')
    return "\n".join(o)


def sanity(mod, spec, problems):
    def scan(where, val):
        if BAD_CHAR.search(val):
            problems.append("%s：%s 含裸 < 或裸 &，会撑破 HTML：%s" % (mod, where, val[:60]))
    scan("lead", spec["lead"])
    for st in spec["stages"]:
        scan("小节标题", st["title"])
        scan("ask", st["ask"])
        scan("boundary", st["boundary"])
        for r in st["rows"]:
            for k in ("stage", "services", "oneliner"):
                scan("行「%s」的 %s" % (r["stage"][:12], k), r[k])


def process(mod, spec, problems):
    sanity(mod, spec, problems)
    web = WEB.get(mod)
    if not web:
        problems.append("%s：不认识的模块 ID" % mod)
        return None
    path = os.path.join(ROOT, "Web-version", web, "index.html")
    s = open(path, encoding="utf-8").read()
    if 'id="cloud"' in s:
        problems.append("%s：已经有 cloud 小节了，不重复插" % mod)
        return None

    secs = SEC_RE.findall(s)
    if not secs:
        problems.append("%s：找不到带编号的小节" % mod)
        return None
    ids = [i for i, _ in secs]
    anchor = "qa" if "qa" in ids else ("related" if "related" in ids else None)
    if anchor is None:
        problems.append("%s：既没有 qa 也没有 related，不知道插哪儿" % mod)
        return None
    num = int(dict(secs)[anchor])          # 新小节顶替它的编号，其后统一 +1

    # 1) 插小节
    marker = '<section class="sec" id="%s">' % anchor
    idx = s.find(marker)
    # 把紧挨在前面的 <!-- ==== 注释 ==== --> 也算进插入点之后
    pre = s.rfind("<!--", 0, idx)
    if pre != -1 and s.find("-->", pre) < idx and idx - pre < 120:
        idx = pre
    s = s[:idx] + render(mod, spec, num) + "\n" + s[idx:]

    # 2) 其后小节编号 +1（从 anchor 起，含 anchor）
    def bump(m):
        sid, raw = m.group(1), m.group(2)
        n = int(raw)
        if n >= num and sid != "cloud":
            # 用捕获到的原串替换，不要拿 %d 重新拼——页面里是零填充的 "09"，
            # "%d" % 9 得到 "9"，匹配不上，只有两位数的才碰巧对得上（试跑时 related
            # 停在 09 而 sources 正常 +1，就是这个）。
            return m.group(0).replace('<span class="num">%s</span>' % raw,
                                      '<span class="num">%02d</span>' % (n + 1))
        return m.group(0)
    s = SEC_RE.sub(bump, s)

    # 3) 目录插一条
    li = re.search(r'([ \t]*)<li><a href="#%s">' % anchor, s)
    if not li:
        problems.append("%s：目录里找不到 #%s 那一条" % (mod, anchor))
        return None
    ind = li.group(1)
    s = (s[:li.start()] + '%s<li><a href="#cloud">%d · 上云怎么落地</a></li>\n' % (ind, num)
         + s[li.start():])
    return path, s, num, sum(len(st["rows"]) for st in spec["stages"])


def main(argv):
    if len(argv) < 2:
        print(__doc__)
        return 2
    apply = "--apply" in argv
    data = json.load(open(argv[1], encoding="utf-8"))

    problems, pending = [], []
    for mod in sorted(data):
        r = process(mod, data[mod], problems)
        if r:
            path, new, num, nrow = r
            pending.append((path, new))
            print("  %-22s 插为第 %d 节，%d 行" % (mod, num, nrow))

    if problems:
        print("\n===== 有问题，未落盘 =====")
        for p in problems:
            print("  " + p)
        return 1
    if not apply:
        print("\n（试跑，未落盘；确认无误后加 --apply）")
        return 0
    for path, new in pending:
        with open(path, "w", encoding="utf-8") as f:
            f.write(new)
    print("\n已落盘 %d 册。接着跑 check_html_wellformed / check_html_links / "
          "check_css_classes / check_new_numbers，再渲染目检。" % len(pending))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
