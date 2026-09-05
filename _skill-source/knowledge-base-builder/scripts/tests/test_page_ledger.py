#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""检查器报的页码位置 = 修复器改的位置（两者共享同一批正则）。"""
import os
import sys
import unittest

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.dirname(HERE))

import check_page_ledger as G          # noqa: E402
import fix_page_ledger as FIX          # noqa: E402


class LedgerTest(unittest.TestCase):
    def test_readme_declared_value_is_exactly_what_fixer_corrects(self):
        fake = "<p>主力成品，共 5 页。</p>"
        m = G.MODULE_README_RE.search(fake)
        self.assertIsNotNone(m)
        declared = int(m.group(1))          # 检查器按这个位置读数
        FIX.fix_file.pending = {}
        path = os.path.join(HERE, "fixtures", "_tmp_readme.html")
        with open(path, "w", encoding="utf-8") as f:
            f.write(fake)
        edits = []
        FIX.fix_file(path,
                     lambda s: (lambda mm: (mm, 1) if mm else None)(G.MODULE_README_RE.search(s)),
                     6, "测试 · 模块 README", edits, [])
        self.assertEqual(declared, 5)       # 检查器看到 5
        self.assertEqual(edits[0][1:], (5, 6))   # 修复器把 5 改成 6——同一位置
        self.assertIn("6 页", FIX.fix_file.pending[path])
        os.remove(path)

    def test_manifest_field_uses_shared_regex(self):
        fake = "| 讲义页数 | 70 |"
        m = G.MANIFEST_FIELD_RE.search(fake)
        self.assertIsNotNone(m)
        self.assertEqual(m.group(1), "70")


if __name__ == "__main__":
    unittest.main()
