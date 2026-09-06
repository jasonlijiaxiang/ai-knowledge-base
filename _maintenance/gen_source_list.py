#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""信源清单生成器（零第三方依赖）：把全库事实按**信源**重排，供复核批处理。

**为什么要有它**（2026-08-03 工程审视时补）：保鲜升成硬门禁之后，稳态复核负荷是
每月约 144 条（30 天档 × 全量 + 90 天档 ÷ 3 + 180 天档 ÷ 6）。而账本是**按模块**组织的
——复核时要一册一册翻，同一个 OpenAI 价格页上挂着的几条事实散在三个模块里，
就得把那一页打开三次。这是负荷里纯属浪费的那一部分。

按信源重排之后，复核变成：打开一个页面，把挂在它上面的事实一次核完。
清单是**纯派生产物**，真源仍是各模块 MANIFEST，别手改这份文件。

顺带它还暴露一件账本自己看不见的事：**哪些事实的「来源」根本不是一个能打开的地址**。
2026-08-03 那轮定点复核里，被对抗复核推翻的三条，两条的问题就是「来源只写了站名，
复核者只能重新搜一遍，搜到的未必是当初那一页」。清单末尾把这些单列出来。

**为什么不进门禁**：`--check` 有，但没挂上 CI。这份清单唯一的读者就是巡检本身，
而巡检第 2 步先重建它再读——过期的中间态不会误导任何人。把它挂成门禁，代价是
每次改一条事实日期都要顺手重跑一遍，收益只有「仓库里那份是新的」，不划算。
（对比 `build.py --check` 必须挂：网页产物是读者直接看的东西。）

用法: python3 gen_source_list.py [--check]
      --check 只校验现存清单与 MANIFEST 一致（口径同 build.py --check），有漂移退出码 1。
"""
import datetime
import glob
import os
import re
import sys

import _lib

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
OUT = os.path.join(HERE, "信源清单.md")

URL_RE = re.compile(r"(?:https?://)?((?:[\w-]+\.)+[a-z]{2,})(?:/\S*)?", re.I)
DERIVED_RE = re.compile(r"沿用\s*([\w-]+)#?([\w-]*)")


def parse_date(s):
    try:
        y, m, d = s.split("-")
        return datetime.date(int(y), int(m), int(d))
    except ValueError:
        return None


def source_key(raw):
    """把「来源」一栏归一成一个可分组的键。

    优先取域名——同一家的价格页写法五花八门（带不带 https、带不带路径），
    按域名归组才归得拢。取不到域名的算「无地址」，单列。
    """
    if DERIVED_RE.search(raw):
        return "（派生：沿用其它模块口径）", False
    m = URL_RE.search(raw)
    if m:
        return m.group(1).lower(), True
    return raw.strip()[:40] or "（未填）", False


def collect(today=None):
    today = today or datetime.date.today()
    rows = []
    for man in sorted(glob.glob(os.path.join(ROOT, "PPT-version", "*", "MANIFEST.md"))):
        mod = os.path.basename(os.path.dirname(man))
        text = _lib.read_text(man)
        _, body = _lib.md_table("时效性事实（巡检盘查对象）", text)
        if body is None:
            _, body = _lib.md_table("时效性事实", text)
        for c in body:
            if len(c) < 8:
                continue
            vd = parse_date(c[2])
            if vd is None or not c[6].isdigit():
                continue
            eff = vd + datetime.timedelta(days=int(c[6]))
            rd = parse_date(c[4])
            if rd:
                eff = min(eff, rd)
            key, has_url = source_key(c[3])
            rows.append({"mod": mod, "fact": c[0], "src": c[3], "key": key,
                         "has_url": has_url, "verified": c[2], "grade": c[5],
                         "cadence": c[6], "due": eff, "days": (eff - today).days})
    return rows


def render(rows, today=None):
    today = today or datetime.date.today()
    groups = {}
    for r in rows:
        groups.setdefault(r["key"], []).append(r)
    # 最早到期的信源排前面——复核就从上往下做
    order = sorted(groups.items(), key=lambda kv: (min(x["due"] for x in kv[1]),
                                                   -len(kv[1])))
    load30 = sum(1 for r in rows if r["cadence"] == "30")
    load90 = sum(1 for r in rows if r["cadence"] == "90")
    load180 = sum(1 for r in rows if r["cadence"] == "180")
    monthly = load30 + load90 / 3.0 + load180 / 6.0

    o = []
    o.append("# 信源清单（派生产物，别手改）\n")
    o.append("> 由 `_maintenance/gen_source_list.py` 从各模块 `MANIFEST.md` 的"
             "「时效性事实」表生成。真源是 MANIFEST，这里只是**换一个轴**看同一批账：\n"
             "> 复核时按信源批处理——打开一个页面，把挂在它上面的事实一次核完，"
             "不必为同一页翻三个模块。\n")
    o.append("\n生成日期 %s ｜ 全库 %d 条时效性事实、%d 个信源。\n"
             % (today.isoformat(), len(rows), len(groups)))
    o.append("\n## 复核负荷\n")
    o.append("\n| 节奏 | 条数 | 每月摊到 |\n| --- | --- | --- |\n")
    o.append("| 30 天 | %d | %.0f |\n" % (load30, load30))
    o.append("| 90 天 | %d | %.0f |\n" % (load90, load90 / 3.0))
    o.append("| 180 天 | %d | %.0f |\n" % (load180, load180 / 6.0))
    o.append("| **合计** | **%d** | **约 %.0f 条/月（≈ %.1f 条/天）** |\n"
             % (len(rows), monthly, monthly / 30.0))
    o.append("\n这个数是**设计出来的负荷，不是意外**——每往表里加一条 30 天档的事实，"
             "就是给自己每月多派一次联网核实。加之前先问一句：这条真的每月都会变吗？\n")

    o.append("\n## 按信源（最早到期的排前面）\n")
    for key, items in order:
        items.sort(key=lambda x: x["due"])
        first = min(x["due"] for x in items)
        d = (first - today).days
        when = "**已过期 %d 天**" % -d if d < 0 else ("**%d 天后**" % d if d <= 30
                                                    else "%d 天后" % d)
        o.append("\n### %s　·　%d 条　·　最早到期 %s（%s）\n\n"
                 % (key, len(items), first.isoformat(), when))
        o.append("| 模块 | 事实 | 等级 | 节奏 | 核实于 | 到期 |\n")
        o.append("| --- | --- | --- | --- | --- | --- |\n")
        for x in items:
            o.append("| %s | %s | %s | %s | %s | %s |\n"
                     % (x["mod"], x["fact"][:58].replace("|", "／"), x["grade"],
                        x["cadence"], x["verified"], x["due"].isoformat()))

    noaddr = [r for r in rows if not r["has_url"] and "派生" not in r["key"]]
    o.append("\n## 来源里没有可打开地址的（%d 条）\n\n" % len(noaddr))
    o.append("复核这些要先重新搜一遍，而**搜到的未必是当初那一页**——"
             "2026-08-03 定点复核里被对抗复核推翻的三条，两条栽在这上面。"
             "下次动到它们时顺手把 URL 补上。\n\n")
    if noaddr:
        o.append("| 模块 | 事实 | 来源现写 |\n| --- | --- | --- |\n")
        for r in sorted(noaddr, key=lambda x: x["due"]):
            o.append("| %s | %s | %s |\n" % (r["mod"], r["fact"][:46].replace("|", "／"),
                                             r["src"][:46].replace("|", "／")))
    return "".join(o)


def main(argv):
    if "--check" in argv:
        if not os.path.exists(OUT):
            print("信源清单还没生成过：python3 _maintenance/gen_source_list.py")
            return 1
        cur = open(OUT, encoding="utf-8").read()
        # 产物里的「已过期 N 天／N 天后」是相对生成日算的：比对时采用产物自己刻的那个生成日，
        # 否则生成后第二天起这道门必红（2026-09-06 验收时抓到，口径同 build.py 的 adopt_stamped_date）。
        # 生成日放旧了另起一行报告型提醒、不拦——刷新它是巡检的活，不是提交的活。
        m = re.search(r"^生成日期 (\d{4}-\d{2}-\d{2})", cur, flags=re.M)
        stamp = parse_date(m.group(1)) if m else None
        if stamp is None:
            print("信源清单缺「生成日期」行，无法比对——重跑 gen_source_list.py。")
            return 1
        body = render(collect(today=stamp), today=stamp)
        age = (datetime.date.today() - stamp).days
        if age > 30:
            print("提醒（不拦）：信源清单生成日 %s 距今 %d 天，「已过期／N 天后」按生成日算；"
                  "重跑 gen_source_list.py 刷新。" % (stamp.isoformat(), age))
        if cur != body:
            print("信源清单与 MANIFEST 不一致——重跑 gen_source_list.py。")
            return 1
        print("信源清单与 MANIFEST 一致（按生成日 %s 比对）。" % stamp.isoformat())
        return 0
    rows = collect()
    body = render(rows)
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(body)
    print("已生成 %s：%d 条事实 / %d 个信源"
          % (os.path.relpath(OUT, ROOT), len(rows), len({r["key"] for r in rows})))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
