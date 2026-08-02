#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""一次性回刷：给 19 册 MANIFEST 的时效性事实表补上「等级 / 节奏 / 不能外推」三列。

列契约与判据见 `check_freshness.py` 文件头。本脚本只做机械回写，判定结果由外部
JSON 提供（`{"模块目录名": {"行号": {grade, cadence, recheck, no_extrapolate}}}`，
行号是该模块事实表里从 1 开始的数据行序号）。

回写规则：

  · 前四列（事实 / 章节 ID / 核实日期 / 来源）**一个字都不动**——本次不改内容，只补账；
  · 第 5 列「复查日」：原本就有「建议复查日」的 5 册保留原值（人工钉的节点优先），
    原值为空或该册原本只有 4 列时，用 JSON 里的 recheck，仍为空则写 `—`;
  · 第 6~8 列按 JSON 写入。

用法:
    python3 2026-08-02-事实表扩列回刷.py <判定.json>            # 试跑，只打印将要写什么
    python3 2026-08-02-事实表扩列回刷.py <判定.json> --apply     # 落盘

跑完必须接 `python3 _maintenance/check_freshness.py`——本脚本只保证格式，
不保证判定对不对。
"""
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SECTION_RE = re.compile(r"^(## 时效性事实[^\n]*\n)(.*?)(?=^## |\Z)", re.S | re.M)
HEADER = ["事实", "章节 ID", "核实日期", "来源", "复查日", "等级", "节奏", "不能外推"]
EMPTY = {"", "—", "-", "–"}


def split_row(line):
    return [c.strip() for c in line.strip().strip("|").split("|")]


def rebuild(mod, path, judged, problems):
    text = open(path, encoding="utf-8").read()
    m = SECTION_RE.search(text)
    if not m:
        problems.append("%s：找不到「## 时效性事实」一节" % mod)
        return text, 0

    title, body = m.group(1), m.group(2)
    out_lines, idx, n = [], 0, 0
    seen_header = False
    for line in body.split("\n"):
        s = line.strip()
        if not s.startswith("|"):
            out_lines.append(line)
            continue
        cells = split_row(s)
        if set(cells[0]) <= set("- :"):                      # |---| 分隔行
            out_lines.append("| " + " | ".join(["---"] * len(HEADER)) + " |")
            continue
        if not seen_header:                                  # 表头
            seen_header = True
            out_lines.append("| " + " | ".join(HEADER) + " |")
            continue

        idx += 1
        j = judged.get(str(idx))
        if j is None:
            problems.append("%s：第 %d 行没有判定结果（事实「%s…」）" % (mod, idx, cells[0][:20]))
            out_lines.append(line)
            continue

        old_recheck = cells[4] if len(cells) > 4 else ""
        recheck = old_recheck if old_recheck not in EMPTY else (j.get("recheck") or "")
        if recheck in EMPTY:
            recheck = "—"
        boundary = (j.get("no_extrapolate") or "").strip()
        for label, val in (("不能外推", boundary), ("复查日", recheck)):
            if "|" in val:
                problems.append("%s：第 %d 行「%s」含竖线，会撑破表格：%s" % (mod, idx, label, val))
        if not boundary:
            problems.append("%s：第 %d 行「不能外推」为空" % (mod, idx))

        row = [cells[0], cells[1], cells[2], cells[3],
               recheck, str(j.get("grade", "")), str(j.get("cadence", "")), boundary]
        out_lines.append("| " + " | ".join(row) + " |")
        n += 1

    extra = [k for k in judged if k.isdigit() and int(k) > idx]
    if extra:
        problems.append("%s：判定结果里有表中不存在的行号 %s（表共 %d 行）"
                        % (mod, "、".join(sorted(extra, key=int)), idx))
    return text[:m.start()] + title + "\n".join(out_lines) + text[m.end():], n


def main(argv):
    if len(argv) < 2:
        print(__doc__)
        return 2
    apply = "--apply" in argv
    judged_all = json.load(open(argv[1], encoding="utf-8"))

    # 先全部算完再落盘：中途某册出问题就整批放弃，不留半套改了一半的清单。
    problems, total, pending = [], 0, []
    for mod in sorted(judged_all):
        path = os.path.join(ROOT, "PPT-version", mod, "MANIFEST.md")
        if not os.path.isfile(path):
            problems.append("%s：找不到 %s" % (mod, path))
            continue
        new, n = rebuild(mod, path, judged_all[mod], problems)
        total += n
        pending.append((path, new))
        print("  %-22s 回写 %2d 行" % (mod, n))

    print("\n共 %d 行。" % total)
    if problems:
        print("\n===== 有问题，未落盘 =====")
        for p in problems:
            print("  " + p)
        return 1
    if not apply:
        print("（试跑，未落盘；确认无误后加 --apply）")
        return 0
    for path, new in pending:
        with open(path, "w", encoding="utf-8") as f:
            f.write(new)
    print("已落盘 %d 册。接着跑 check_freshness.py。" % len(pending))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
