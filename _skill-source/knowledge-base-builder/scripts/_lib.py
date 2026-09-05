#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""门禁脚本共享底座（knowledge-base-builder，零第三方依赖）。

2026-09-05 立项：42 个常设脚本此前零共享——「模块」定义三套、Markdown 表解析四份、
`parse_date` 两份宽严不一、库根推导三种写法（其中两个脚本默认拿当前目录当库根，
换个 cwd 跑就判错地方）。本文件只放五个函数，把这几类漂移收进一份：

  kb_root()     —— 唯一库根推导：从本文件位置往上推，不信任调用方 cwd
  modules(root) —— 唯一模块定义：同时有 MANIFEST.md 与 <名>-讲义.pptx 的一级子目录
  md_table()    —— 唯一 Markdown 表解析：## 段落下取 (表头行, [数据行])
  parse_date()  —— 唯一严格 YYYY-MM-DD 解析
  read_text()   —— 唯一读取口径：utf-8 + errors="replace"

合并口径取各副本中最严的一版；调用方不要再在本地留第二份拷贝。
例外：`check_kb_layout.py` 的模块探测故意只看 <名>-讲义.pptx——它的职责就是
把「缺 MANIFEST 的残缺模块」报出来，用 modules() 会把这种模块从视野里抹掉。
"""
import datetime
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
DATE_RE = re.compile(r"^\d{4}-\d{2}-\d{2}$")


def kb_root():
    """知识库根目录 = 本文件上一级（检查脚本都住在 _maintenance/）。"""
    return os.path.dirname(HERE)


def modules(root):
    """模块目录名：root 下同时有 MANIFEST.md 与 <名>-讲义.pptx 的一级子目录。"""
    out = []
    if not os.path.isdir(root):
        return out
    for name in sorted(os.listdir(root)):
        sub = os.path.join(root, name)
        if name.startswith((".", "_")) or not os.path.isdir(sub):
            continue
        if os.path.isfile(os.path.join(sub, "MANIFEST.md")) and \
           os.path.isfile(os.path.join(sub, "%s-讲义.pptx" % name)):
            out.append(name)
    return out


def md_table(section, text):
    """取某个 ## 段落下的表格：返回 (表头行, [数据行])，行是已 strip 的单元格列表。"""
    m = re.search(r"^## %s.*?$(.*?)(?=^## |\Z)" % re.escape(section), text, re.S | re.M)
    if not m:
        return None, []
    head, body = None, []
    for line in m.group(1).split("\n"):
        line = line.strip()
        if not line.startswith("|"):
            continue
        cells = [c.strip() for c in line.strip("|").split("|")]
        if not cells or set(cells[0]) <= set("- :"):
            continue
        if head is None:
            head = cells
            continue
        body.append(cells)
    return head, body


def parse_date(s):
    """严格 YYYY-MM-DD；格式非法或日期不存在（如 02-31）返回 None。"""
    if not DATE_RE.match(s):
        return None
    try:
        return datetime.date(*(int(x) for x in s.split("-")))
    except ValueError:
        return None


def read_text(path):
    return open(path, encoding="utf-8", errors="replace").read()
