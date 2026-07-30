"""通用 zip 级移动页：只改放映次序，页本身字节一律不动（kb_insert / kb_delete 的同族）。

为什么要单独有它：B 类重排常见「这页放错章了」——用「删掉再重画」会丢掉原页的版式与
微调，且要有对应的绘制函数才行。移动只需改两处登记：
  ① `ppt/presentation.xml` 的 `<p:sldIdLst>` 次序；
  ② `docProps/app.xml` 的 `TitlesOfParts` 标题向量次序（只有 PowerPoint 校验它，
     不同步就弹「需要修复」——2026-07-13 插页批次的同款教训）。
slide 部件、rels、[Content_Types].xml 全部不动。

  kb_move_pages(src, dst, moves)   moves = [(要移动的放映页, 移动到哪一页之后), ...]
                                   页号均按**移动前**的放映序；after=0 表示移到最前面。
退出：返回 (页数, 新放映序对应的原页号列表)。
"""
import re
import zipfile
import xml.etree.ElementTree as ET
from xml.sax.saxutils import escape

from kb_delete import TITLE_NAMES, _big_title


def kb_move_pages(src, dst, moves):
    z = zipfile.ZipFile(src)
    rid2t = {r.get("Id"): r.get("Target")
             for r in ET.fromstring(z.read("ppt/_rels/presentation.xml.rels"))}
    pres = z.read("ppt/presentation.xml").decode()
    sld_tags = re.findall(r'<p:sldId\b[^>]*/>', pres)
    show_rids = [re.search(r'\br:id="([^"]+)"', t).group(1) for t in sld_tags]
    N = len(show_rids)

    # 用「原页号」当身份做重排：先整体摘出要移动的，再按锚点逐个插回。
    order = list(range(1, N + 1))
    for page, after in moves:
        if page not in order:
            raise ValueError("页 %d 不存在或已被移动" % page)
        order.remove(page)
        if after == 0:
            order.insert(0, page)
        else:
            if after not in order:
                raise ValueError("锚点页 %d 不在当前序列里（它也被移动了？）" % after)
            order.insert(order.index(after) + 1, page)

    tag_by_page = {i: t for i, t in enumerate(sld_tags, 1)}
    lst = re.search(r'<p:sldIdLst>.*?</p:sldIdLst>', pres, re.S).group(0)
    lst2 = "<p:sldIdLst>" + "".join(tag_by_page[p] for p in order) + "</p:sldIdLst>"
    pres2 = pres.replace(lst, lst2)

    # app.xml 标题向量必须跟着换序，否则 PowerPoint 弹修复
    titles = [_big_title(z, rid2t[show_rids[p - 1]]) for p in order]
    app = z.read("docProps/app.xml").decode()
    hp = re.search(r'<HeadingPairs>.*?</HeadingPairs>', app, re.S).group(0)
    variants = re.findall(r'<vt:variant><vt:lpstr>(.*?)</vt:lpstr></vt:variant>'
                          r'<vt:variant><vt:i4>(\d+)</vt:i4></vt:variant>', hp)
    other_sum = sum(int(n) for nm, n in variants if nm not in TITLE_NAMES)
    tp = re.search(r'<TitlesOfParts><vt:vector size="\d+" baseType="lpstr">(.*?)</vt:vector>'
                   r'</TitlesOfParts>', app, re.S).group(1)
    head_lp = re.findall(r'<vt:lpstr>(.*?)</vt:lpstr>', tp)[:other_sum]
    lpxml = "".join('<vt:lpstr>%s</vt:lpstr>' % escape(t) for t in head_lp + titles)
    app2 = re.sub(r'<TitlesOfParts><vt:vector size="\d+" baseType="lpstr">.*?</vt:vector>'
                  r'</TitlesOfParts>',
                  '<TitlesOfParts><vt:vector size="%d" baseType="lpstr">%s</vt:vector>'
                  '</TitlesOfParts>' % (other_sum + N, lpxml), app, flags=re.S)

    changed = {"ppt/presentation.xml": pres2.encode(), "docProps/app.xml": app2.encode()}
    zo = zipfile.ZipFile(dst, "w", zipfile.ZIP_DEFLATED)
    for it in z.infolist():
        zi = zipfile.ZipInfo(it.filename, date_time=it.date_time)
        zi.compress_type = it.compress_type
        zi.external_attr = it.external_attr
        zi.internal_attr = it.internal_attr
        zi.create_system = it.create_system
        zo.writestr(zi, changed.get(it.filename, z.read(it.filename)))
    zo.close()
    return N, order
