#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""页脚页码重排（零第三方依赖，零语义）：把每页页脚的 `p.NN` 改成该页真实放映位。

配套门禁是 `check_footer_pagenum.py`；两者同口径（放映序，与 audit / MANIFEST 一致）。
插页/删页后跑一次即可。

字节级 str.replace（ppt-design-system v3.16 铁律）：只改页脚那一个数字 run，
定位串在该部件内命中数必须恰好 1；改完只 ET.fromstring 校验良构，绝不 ET.tostring 回写。

用法: python3 fix_footer_pagenum.py <讲义.pptx> [--apply]   # 缺省预演
退出码: 0 = 成功（或无需改）, 1 = 失败。
"""
import re
import shutil
import sys
import zipfile
import xml.etree.ElementTree as ET

PAGENUM_RE = re.compile(r"^\s*p\.\s*(\d+)\s*$")


def show_order(z):
    pres = z.read("ppt/presentation.xml").decode("utf-8", "replace")
    rels = z.read("ppt/_rels/presentation.xml.rels").decode("utf-8", "replace")
    rid2t = dict(re.findall(r'Id="(rId\d+)"[^>]*Target="([^"]+)"', rels))
    out = []
    for rid in re.findall(r'<p:sldId\b[^>]*\br:id="([^"]+)"', pres):
        m = re.search(r"slide(\d+)\.xml", rid2t.get(rid, ""))
        if m:
            out.append("ppt/slides/slide%s.xml" % m.group(1))
    return out


def main(argv):
    if len(argv) < 2:
        print(__doc__)
        return 1
    src = argv[1]
    apply_it = "--apply" in argv

    z = zipfile.ZipFile(src)
    names = z.namelist()
    parts = {n: z.read(n) for n in names}
    order = show_order(z)
    z.close()

    changes = []
    for i, part in enumerate(order, 1):
        text = parts[part].decode("utf-8")
        runs = re.findall(r"<a:t>(.*?)</a:t>", text, re.S)
        hits = [r for r in runs if PAGENUM_RE.match(r)]
        if not hits:
            continue
        old_run, cur = hits[0], int(PAGENUM_RE.match(hits[0]).group(1))
        if cur == i:
            continue
        old_tag, new_tag = "<a:t>%s</a:t>" % old_run, "<a:t>p.%d</a:t>" % i
        c = text.count(old_tag)
        if c != 1:
            print("定位不唯一（命中 %d 次），中止：%s 的 %s" % (c, part, old_tag))
            return 1
        text = text.replace(old_tag, new_tag)
        try:
            ET.fromstring(text)                      # 只校验良构，不回写
        except ET.ParseError as e:
            print("改完非良构：%s —— %s" % (part, e))
            return 1
        parts[part] = text.encode("utf-8")
        changes.append((i, cur))

    if not changes:
        print("页码全部与放映位一致，无需改。")
        return 0

    print("需重排 %d 页（放映位 ← 原页脚）：%s%s" % (
        len(changes),
        "、".join("p%d←p.%d" % (i, c) for i, c in changes[:8]),
        " ……" if len(changes) > 8 else ""))
    if not apply_it:
        print("（预演，未落盘。加 --apply 执行。）")
        return 0

    tmp = src + ".tmp"
    with zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED) as o:
        for n in names:                              # 其余部件字节不动
            o.writestr(n, parts[n])
    shutil.move(tmp, src)
    print("已重排 %d 页。" % len(changes))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
