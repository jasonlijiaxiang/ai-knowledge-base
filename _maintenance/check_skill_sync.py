#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""技能包与技能源目录一致性门禁（零第三方依赖）。

**为什么要有它**（2026-07-29 GitHub 化改造时补）：库里同时躺着技能的两种形态——
可 diff 的源目录 `_skill-source/knowledge-base-builder/` 与拿来分发的压缩包
`_skill-source/knowledge-base-builder.skill`。源目录改了、包忘了重打，库里就会出现
一个**看起来是最新版、实际停在旧版**的分发包；而 `check_skill_package.py` 只验包的
**结构**合不合格（能不能装），一个内容过期但结构完好的包它照样放行。

这正是本库反复吃过的那类亏：搬运没错 ≠ 产物是对的（v4.8「这个包用不了」、
2026-07-15 页数账四面漂移，都是同一个形状）。改造后「只下载技能」成了对外承诺的一条路，
包一旦过期就是直接发错东西给别人，所以补成常设门禁。

判据：包内条目集合与源目录逐文件内容**完全一致**（忽略目录条目与 macOS 杂物）。

用法: python3 check_skill_sync.py [包.skill] [源目录]   # 缺省取库内那一对
退出码: 0 = 包与源一致, 1 = 不一致或读取失败。
"""
import os
import sys
import zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
DEFAULT_PKG = os.path.join(ROOT, "_skill-source", "knowledge-base-builder.skill")
DEFAULT_SRC = os.path.join(ROOT, "_skill-source", "knowledge-base-builder")
JUNK = (".DS_Store", "__MACOSX")


def junk(name):
    return any(j in name for j in JUNK)


def read_pkg(path):
    """包内 {相对路径: 字节}。目录条目与杂物不计。"""
    out = {}
    with zipfile.ZipFile(path) as z:
        if z.testzip() is not None:
            raise OSError("压缩包 CRC 校验失败（内容已损坏）")
        for n in z.namelist():
            if n.endswith("/") or junk(n):
                continue
            out[n] = z.read(n)
    return out


def read_src(root):
    """源目录 {相对路径: 字节}。杂物不计。"""
    out = {}
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if not junk(d)]
        for f in filenames:
            if junk(f):
                continue
            full = os.path.join(dirpath, f)
            rel = os.path.relpath(full, root).replace(os.sep, "/")
            with open(full, "rb") as fh:
                out[rel] = fh.read()
    return out


def main(argv):
    pkg = argv[1] if len(argv) > 1 else DEFAULT_PKG
    src = argv[2] if len(argv) > 2 else DEFAULT_SRC
    # 分享包按设计只带 `.skill` 本体、不带解包源目录（make_share 的 SKIP_SLIM_PREFIX）。
    # 那种拷贝里这道无从比起——明说跳过，不要报成「不一致」（2026-08-03：解压自检
    # 改成跑全套门禁后，这是唯一一道在分享包里天然缺料的）。
    if not os.path.exists(src) and len(argv) <= 2:
        print("本库不带技能源目录（分享包只带 .skill 本体），这道无从比起，跳过。")
        return 0
    for p, what in ((pkg, "技能包"), (src, "技能源目录")):
        if not os.path.exists(p):
            print("%s 不存在：%s" % (what, p))
            return 1
    try:
        inpkg, insrc = read_pkg(pkg), read_src(src)
    except (OSError, zipfile.BadZipFile) as e:
        print("读取失败：%s" % e)
        return 1

    only_pkg = sorted(set(inpkg) - set(insrc))
    only_src = sorted(set(insrc) - set(inpkg))
    differs = sorted(k for k in set(inpkg) & set(insrc) if inpkg[k] != insrc[k])

    if not (only_pkg or only_src or differs):
        print("技能包与源目录一致（%d 个文件）。" % len(insrc))
        return 0

    print("技能包与源目录不一致——源目录是真源，请重新打包并提交：")
    print("  cd %s && zip -rX ../knowledge-base-builder.skill . -x '*.DS_Store'"
          % os.path.relpath(src, os.getcwd()))
    for title, items in (("只在包里（源已删）", only_pkg),
                         ("只在源里（包未含）", only_src),
                         ("内容不同（包已过期）", differs)):
        if items:
            print("\n  %s，%d 个：" % (title, len(items)))
            for k in items[:20]:
                print("    %s" % k)
            if len(items) > 20:
                print("    …… 另有 %d 个" % (len(items) - 20))
    return 1


if __name__ == "__main__":
    sys.exit(main(sys.argv))
