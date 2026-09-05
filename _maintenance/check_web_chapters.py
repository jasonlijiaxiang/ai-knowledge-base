#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""网页章节契约：重组网页版时，深链不许断、讲义内容不许丢（零第三方依赖）。

**为什么要有它**（2026-08-02 立，先于任何重组落地）：在此之前，模块 `MANIFEST.md` 的
章节 ID 身兼两职——既是讲义章节，也是网页锚点，`Web-version/build.py` 据此生成
`data.js`、问答落点、链接图与串联出边。网页版一旦按读者的判断链重组，两面就不再 1:1，
这套 ID 会同时丢掉两个身份中的一个，而**现有门禁一道都发现不了**：

  · `check_html_links` 只查链接指向的文件在不在，不查锚点语义换没换；
  · `check_page_ledger` 只对页数，不管章节；
  · `check_prep_coverage` 查的是 `_prep` 的深潜指针能不能落到锚点——**它拿 `data.js` 当账本，
    而 `data.js` 是从讲义章节生成的**，网页锚点改名后它反而查不出来。

于是本脚本立两条契约，并给重组留一条安全通道。

## 契约一 · 默认态（没重组的册）

模块 `MANIFEST.md` 里**没有**「网页章节」一节时，网页版的每个内容小节 id 必须是该模块的
讲义章节 ID。这就是 2026-08-02 之前全库的实际状态，所以这道门上线即绿。

结构性小节不在此列，它们不是讲义的某一章，白名单是显式的：

    qa · related · sources · cloud · boundary

**反向契约（2026-09-05 补）**：章节表里状态 ✅ 的每个章节 ID，网页上必须有同名小节。
原来只查「网页小节 ⊆ 讲义章节」这一个方向，幽灵章节（MANIFEST 登记 ✅、讲义里有、
网页没有）反向查不出来——生成器还亲手写死过两条指向它们的死链。

## 契约二 · 重组态（有「网页章节」一节的册）

MANIFEST 增一节，讲义章节清单**照旧不动**（它仍是讲义面的出处）：

    ## 网页章节
    | 网页章节 ID | 标题 | 承载的讲义章节 |
    | --- | --- | --- |
    | sec-threat-path | 威胁怎么进来 | sec-prompt-injection / sec-agentic |

三条判据：

  1. **表与页面互相对得上**——页面里的内容小节 id 与表中的 id 一一对应，多一个少一个都算错；
  2. **讲义章节一个都不许丢**——每个讲义章节至少被一个网页章节承载。**重组可以打散顺序，
     不能丢内容**，这是重组与"顺手删一章"的分界线；
  3. **旧锚点必须还在**——凡是不再作为网页小节 id 的讲义章节 ID，页面里必须留一个隐藏别名
     （`<span id="旧ID" hidden></span>` 或等价形式）。已经发出去的深链不会因为我们改版而失效。

用法:
    python3 check_web_chapters.py [知识库根目录]   # 缺省为脚本上级目录

退出码: 0 = 全部模块符合契约, 1 = 存在违约, 2 = 读取失败。
"""
import glob
import json
import os
import re
import sys

import _lib

HERE = os.path.dirname(os.path.abspath(__file__))

STRUCTURAL = {"qa", "related", "sources", "cloud", "boundary"}
SEC_RE = re.compile(r'<section class="sec" id="([^"]+)">')
WEB_SECTION = "网页章节"


def die(msg):
    print("[读取失败] %s" % msg, file=sys.stderr)
    sys.exit(2)


def rows(section, text):
    """取某个 ## 段落下的表格数据行（跳过表头与 |---| 分隔行）。

    没有该段时返回 None（不是空表）——调用方拿 None 判「默认态 vs 重组态」。"""
    head, body = _lib.md_table(section, text)
    if head is None:
        return None
    return [c for c in body if c and c[0] not in ("章节 ID", "网页章节 ID")]



def chapter_rows(mpath):
    """MANIFEST 章节清单里状态 ✅ 的章节 ID（反向契约的真源是 MANIFEST，不是 data.js）。"""
    table = rows("章节清单", open(mpath, encoding="utf-8").read())
    if table is None:
        return []
    return [c[0] for c in table if len(c) >= 4 and c[3].strip() == "✅"]


def has_alias(html, anchor):
    """旧锚点是否以隐藏元素形式留在页面里。不限定标签，只要带这个 id 且标了 hidden。"""
    pat = re.compile(r'<[a-z]+[^>]*\bid="%s"[^>]*>' % re.escape(anchor))
    for m in pat.finditer(html):
        tag = m.group(0)
        if "hidden" in tag or 'style="display:none' in tag.replace(" ", ""):
            return True
    return False


def load_ledger(root):
    path = os.path.join(root, "Web-version", "data.js")
    try:
        raw = open(path, encoding="utf-8").read()
    except OSError as e:
        die("%s：%s" % (path, e))
    data = json.loads(raw[raw.index("{"):raw.rindex("}") + 1])
    out = {}
    for m in data["modules"]:
        web = m.get("web") or ""
        out[m["dir"]] = {
            "id": m["id"],
            "web": web.split("/")[-2] if web else None,
            "chapters": [c["id"] for c in m["chapters"]],
        }
    return out


def check(mod, info, root):
    fails = []
    if not info["web"]:
        return fails, "无网页版"
    page = os.path.join(root, "Web-version", info["web"], "index.html")
    try:
        html = open(page, encoding="utf-8").read()
    except OSError as e:
        die("%s：%s" % (page, e))

    secs = [i for i in SEC_RE.findall(html) if i not in STRUCTURAL]
    chapters = info["chapters"]

    mpath = os.path.join(root, "PPT-version", mod, "MANIFEST.md")
    table = rows(WEB_SECTION, open(mpath, encoding="utf-8").read())

    if table is None:
        # ---- 契约一 · 默认态 ----
        for sid in secs:
            if sid not in chapters:
                fails.append("网页小节「%s」既不是讲义章节，也不在结构性白名单里；"
                             "若这是重组，MANIFEST 要加「## %s」一节登记映射"
                             % (sid, WEB_SECTION))
        # 反向契约：MANIFEST 章节表里状态 ✅ 的章节，网页必须有同名小节
        for sid in chapter_rows(mpath):
            if sid not in secs:
                fails.append("章节清单里「%s」状态 ✅，网页却没有同名小节——"
                             "要么补回网页，要么把状态改回进行中" % sid)
        return fails, "默认态（%d 节）" % len(secs)

    # ---- 契约二 · 重组态 ----
    tids, carried = [], set()
    for c in table:
        if len(c) < 3:
            fails.append("「%s」表某行不足 3 列：%s" % (WEB_SECTION, " | ".join(c)))
            continue
        tids.append(c[0])
        for part in re.split(r"[/、,，]", c[2]):
            part = part.strip()
            if not part:
                continue
            if part not in chapters:
                fails.append("「%s」行「%s」承载的讲义章节「%s」不在章节清单里"
                             % (WEB_SECTION, c[0], part))
            carried.add(part)

    dup = {x for x in tids if tids.count(x) > 1}
    if dup:
        fails.append("「%s」表里 id 重复：%s" % (WEB_SECTION, "、".join(sorted(dup))))

    only_page = [x for x in secs if x not in tids]
    only_table = [x for x in tids if x not in secs]
    if only_page:
        fails.append("页面上有、表里没有的小节：%s" % "、".join(only_page))
    if only_table:
        fails.append("表里有、页面上没有的小节：%s" % "、".join(only_table))

    lost = [c for c in chapters if c not in carried]
    if lost:
        fails.append("讲义章节没有任何网页章节承载：%s"
                     "\n        （重组可以打散顺序，不能丢内容）" % "、".join(lost))

    for old in chapters:
        if old not in secs and not has_alias(html, old):
            fails.append("旧锚点「%s」不再是网页小节，页面里也没有隐藏别名——"
                         "已发出去的深链会断" % old)

    return fails, "重组态（%d 节 / 承载 %d 章）" % (len(secs), len(carried))


def main(argv):
    root = argv[1] if len(argv) > 1 else os.path.dirname(HERE)
    ledger = load_ledger(root)
    if not ledger:
        die("data.js 里没有模块")

    print("===== 网页章节契约 =====")
    allfail = []
    for mod in sorted(ledger):
        f, note = check(mod, ledger[mod], root)
        flag = "FAIL" if f else "ok"
        print("  %-22s %-22s %s" % (mod, note, flag))
        for x in f:
            allfail.append((mod, x))

    if allfail:
        print("\n===== FAIL：%d 处 =====" % len(allfail))
        for mod, x in allfail:
            print("  [%s] %s" % (mod, x))
        return 1
    print("\n%d 个模块全部符合契约。" % len(ledger))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
