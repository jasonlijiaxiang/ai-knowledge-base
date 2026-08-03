#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""整库版本戳：把 KB-CONFIG 的「库版本」写到全站页面右上角（零第三方依赖）。

**为什么要有它**（2026-08-03 用户提）：页面右上角那个 `<span class="ver">` 原本显示的是
**样式版本戳**（`v0723n`），与 `kb.css?v=20260723n` 绑定。它对读者没有意义——
读者想知道的是「我在看这个库的哪一版」，不是样式表改到第几轮了。
改成显示整库 Release 号（`kb-v*` 那条线）。

**与缓存击穿解耦**：`kb.css?v=` / `site.js?v=` / `data.js?v=` 那套戳照旧，由
`bump_style_version.py` 推、`check_css_classes.py` 校验全站一致。可见标记从来只是那套戳的
镜子，镜子挪走不影响缓存击穿——真正干活的是 URL 上的查询参数。

**真源是 KB-CONFIG.md 的「库版本」字段**，不另立文件：KB-CONFIG 已经是「库的个性」
唯一出处（`make_share.py` 就在读它取显示名）。发版时改那一格，跑本脚本落到全站，
`release-kb.yml` 再对账「标签 == 库版本」——三处扣起来，显示出去的号一定发布过。

**站点会领先于它显示的号**：Pages 服务的是 `main` 不是标签，两次发版之间站点必然更新。
这是这个号的正常状态，不是缺陷——它回答的是「这份内容对应哪个可下载的快照」。

用法:
    python3 stamp_kb_version.py            # 预演
    python3 stamp_kb_version.py --apply    # 落盘
    python3 stamp_kb_version.py --check    # 门禁：全站一致且等于 KB-CONFIG
退出码: 0 正常, 1 不一致 / 读不到配置。
"""
import glob
import io
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VER_RE = re.compile(r'(<span class="ver">)([^<]*)(</span>)')


def pages():
    """与 check_css_classes.py 同一份页面清单——两边必须看同一批文件。"""
    return ([os.path.join(ROOT, p) for p in
             ("README.html", "开始使用.html", "PPT-version/README.html",
              "Web-version/index.html", "Web-version/fresh.html")]
            + sorted(glob.glob(os.path.join(ROOT, "Web-version/*/index.html")))
            + sorted(glob.glob(os.path.join(ROOT, "PPT-version/*/README.html")))
            + sorted(glob.glob(os.path.join(ROOT, "_prep/*.html"))))


def config_version():
    """KB-CONFIG「库版本」那一格，取第一个 X.Y.Z 形态的 token。"""
    p = os.path.join(ROOT, "KB-CONFIG.md")
    if not os.path.exists(p):
        return None
    m = re.search(r"^\|\s*库版本\s*\|(.*?)\|\s*$",
                  io.open(p, encoding="utf-8").read(), re.M)
    if not m:
        return None
    v = re.search(r"(\d{4}\.\d{2}\.\d{2}|\d+(?:\.\d+)+)", m.group(1))
    return v.group(1) if v else None


def main(argv):
    want = config_version()
    if not want:
        print("KB-CONFIG.md 里读不到「库版本」字段——先加一行：")
        print("  | 库版本 | 2026.08.03（对应整库 Release 标签 kb-v2026.08.03）|")
        return 1
    target = "v" + want

    found, missing = {}, []
    for f in pages():
        rel = os.path.relpath(f, ROOT)
        t = io.open(f, encoding="utf-8").read()
        m = VER_RE.search(t)
        if not m:
            missing.append(rel)
        else:
            found.setdefault(m.group(2), []).append(rel)

    if "--check" in argv:
        bad = missing or list(found) != [target]
        if bad:
            print("整库版本戳不齐（KB-CONFIG 库版本 = %s）：" % want)
            for v, fs in sorted(found.items()):
                mark = "✓" if v == target else "✗"
                print("  [%s] %s —— %d 页（%s%s）"
                      % (mark, v or "空", len(fs), "、".join(fs[:3]),
                         "…" if len(fs) > 3 else ""))
            for f in missing[:5]:
                print("  [缺] %s 没有 <span class=\"ver\">" % f)
            print("\n落戳：python3 _maintenance/stamp_kb_version.py --apply")
            return 1
        print("整库版本戳 %s 全站一致（%d 页）。" % (target, sum(map(len, found.values()))))
        return 0

    stale = {v: fs for v, fs in found.items() if v != target}
    if not stale and not missing:
        print("已经是 %s，无需改动。" % target)
        return 0
    print("落戳 %s（现状：%s）" % (target, "、".join(sorted(stale)) or "无"))
    n = 0
    for f in pages():
        t = io.open(f, encoding="utf-8").read()
        new = VER_RE.sub(lambda m: m.group(1) + target + m.group(3), t)
        if new != t:
            n += 1
            if "--apply" in argv:
                io.open(f, "w", encoding="utf-8").write(new)
    print(("已改 %d 个文件。" if "--apply" in argv
           else "预演：将改 %d 个文件（加 --apply 落盘）。") % n)
    if missing:
        print("另有 %d 页没有 .ver 标记，脚本不会凭空插入：%s"
              % (len(missing), "、".join(missing[:5])))
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
