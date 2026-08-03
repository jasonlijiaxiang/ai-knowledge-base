#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Portable 铁律：脚本里不许写死本机绝对路径（零第三方依赖）。

整库要能拷到别的机器上接着用。写死 `/Users/<用户名>/…` 的脚本换机即废，
而其余门禁一道都查不出——只有这条正则拦得住（口径同 `make_share.py` 的解压自检）。

2026-08-02 从 `.github/workflows/gates.yml` 的内联 heredoc 提出来单独成文：
本地要跑同一道门禁，否则两份实现必然漂。CI 现在调用本脚本，不再内联。

用法: python3 _maintenance/check_no_abspath.py [知识库根目录]
退出码: 0 = 干净, 1 = 有写死路径。
"""
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))

# 只认字符串字面量里的绝对路径——注释和文档里提一嘴路径是正常的。
RX = re.compile(r"""["'](?:/Users/|/home/|[A-Za-z]:\\)""")
SKIP = {".git", "raw-data", "_reference"}


def main(argv):
    root = argv[1] if len(argv) > 1 else os.path.dirname(HERE)
    bad = []
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in SKIP]
        for f in filenames:
            if not f.endswith(".py"):
                continue
            p = os.path.join(dirpath, f)
            with open(p, encoding="utf-8", errors="replace") as fh:
                for i, line in enumerate(fh, 1):
                    if RX.search(line):
                        rel = os.path.relpath(p, root)
                        bad.append("%s:%d %s" % (rel, i, line.strip()[:100]))
    if bad:
        print("发现写死的本机绝对路径——路径一律从 __file__ 往上推：")
        print("\n".join(bad))
        return 1
    print("无本机绝对路径。")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
