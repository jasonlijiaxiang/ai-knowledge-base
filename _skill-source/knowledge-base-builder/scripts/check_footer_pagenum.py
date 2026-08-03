#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""页脚页码账实核对（零第三方依赖）。

**为什么要有它**（2026-07-30 补）：ppt-design-system 写死了「插页后页码必须重排」——
在讲义中部插入或删除页后，其后所有页的页脚页码都要按新页位重写。但这条规则此前
**没有任何机器检查**：八道门禁查坏链、查配平、查 CSS，audit 的 17 项查令牌、字号、
画布越界、XML 良构，没有一项看页脚上那个数字对不对。

结果是 Prompt-Engineering 册 66 个带页码的页里 62 页错位，最大差 6 页（放映第 46 页的
页脚写着 p.41），历时数个批次无人发现——只有人翻到那一页才看得出来。对读者的杀伤很具体：
按页码找页会找错，打印出来对不上，客户当场翻页会乱。

判据：页脚里形如 `p.NN` 的页码必须等于该页的**放映序**位置（与 audit、MANIFEST 同口径）。
**不带页脚页码的册子跳过**——大多数册的页脚只有模块名与章名，给它们加页码只会多一份要维护的账。

**跳过要出现在总结行里**（2026-08-03 补）：此前跳过只在明细里打一行 `[跳过]`，
总结是干净的 `ok`——一道实际只覆盖 3/21 册的门禁，看起来像全库通过。
带不带页码本身是**整册**的口径选择（生成器由 `page_numbers` 开关控制，v9.0 起默认关），
所以总结行要把「几册带、几册跳过」摆出来，让覆盖面是可见的。

用法: python3 check_footer_pagenum.py [讲义.pptx ...]   # 缺省扫全库
退出码: 0 = 全部一致（或不带页码）, 1 = 有错位。
"""
import glob
import os
import re
import sys
import zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
PAGENUM_RE = re.compile(r"^\s*p\.\s*(\d+)\s*$")


def show_order(z):
    """放映序的 slide 部件列表（口径同 audit_pptx / check_page_ledger）。"""
    pres = z.read("ppt/presentation.xml").decode("utf-8", "replace")
    rels = z.read("ppt/_rels/presentation.xml.rels").decode("utf-8", "replace")
    rid2t = dict(re.findall(r'Id="(rId\d+)"[^>]*Target="([^"]+)"', rels))
    out = []
    for rid in re.findall(r'<p:sldId\b[^>]*\br:id="([^"]+)"', pres):
        m = re.search(r"slide(\d+)\.xml", rid2t.get(rid, ""))
        if m:
            out.append("ppt/slides/slide%s.xml" % m.group(1))
    return out


def check(path):
    """返回 (带页码页数, [(放映位, 页脚写的数), ...])。"""
    try:
        z = zipfile.ZipFile(path)
    except (zipfile.BadZipFile, FileNotFoundError) as e:
        print("  无法读取：%s" % e)
        return None, None
    has, bad = 0, []
    for i, part in enumerate(show_order(z), 1):
        runs = re.findall(r"<a:t>(.*?)</a:t>", z.read(part).decode("utf-8", "replace"), re.S)
        hits = [m.group(1) for m in (PAGENUM_RE.match(r) for r in runs) if m]
        if not hits:
            continue
        has += 1
        if int(hits[0]) != i:
            bad.append((i, int(hits[0])))
    return has, bad


def main(argv):
    decks = argv[1:] or sorted(glob.glob(os.path.join(ROOT, "PPT-version", "*", "*-讲义.pptx")))
    if not decks:
        print("没找到讲义。")
        return 1
    failed = 0
    skipped, withpn = [], []
    for path in decks:
        name = os.path.basename(path)
        has, bad = check(path)
        if has is None:
            failed = 1
            continue
        if not has:
            skipped.append(name.replace("-讲义.pptx", ""))
            print("  [跳过] %s：页脚不带页码" % name)
            continue
        withpn.append(name.replace("-讲义.pptx", ""))
        if bad:
            failed = 1
            print("  [错位] %s：%d/%d 页页码与放映位不符" % (name, len(bad), has))
            for i, n in bad[:10]:
                print("         放映 p%d 的页脚写着 p.%d" % (i, n))
            if len(bad) > 10:
                print("         …… 另有 %d 页" % (len(bad) - 10))
            print("         修法：插页后页脚页码要按新页位重排"
                  "（ppt-design-system §七）。")
        else:
            print("  [通过] %s：%d 页页码与放映位一致" % (name, has))

    total = len(withpn) + len(skipped)
    print("\n本道覆盖 %d/%d 册：带页码 %s；另 %d 册页脚不带页码，本道对它们无从判起。"
          % (len(withpn), total, "、".join(withpn) or "无", len(skipped)))
    if withpn and skipped:
        print("  （两种口径并存是历史遗留：生成器曾无条件写页码，v9.0 起默认关。"
              "口径以整册为单位，不要逐页开关。）")
    return failed


if __name__ == "__main__":
    sys.exit(main(sys.argv))
