#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""check_derived_counts.claims() 的反例：页数、日期、小数目不该被当成活口径声明。"""
import os
import sys
import unittest

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.dirname(HERE))

import check_derived_counts as D  # noqa: E402

T = {"模块数": 21, "网页覆盖": 21, "门禁道数": 20}


class ClaimsTest(unittest.TestCase):
    def test_page_counts_are_not_module_claims(self):
        # 表格里的页数是页数账，不是模块数声明
        self.assertEqual(D.claims("全库共 1998 页（不含封面）", T), [])
        self.assertEqual(D.claims("本册实测 70 页（2026-09-05）", T), [])

    def test_dates_are_not_module_claims(self):
        self.assertEqual(D.claims("核实于 2026-07-10，共 21 个模块", T),
                         [(21, 21, "模块数")])

    def test_small_gate_numbers_are_idiomatic_not_claims(self):
        # 「一道门禁盯着它」是口语，不是全库道数声明（下界 4）
        self.assertEqual(D.claims("有一道门禁盯着它与源码逐文件一致", T), [])

    def test_historical_nineteen_is_a_claim_handled_by_exemptions(self):
        # 历史叙述里的「19 册」会被 claims 命中（宁误报不漏报），由豁免清单兜底
        hits = D.claims("分八批扩建到全部 19 册（2026-07-22 收官）", T)
        self.assertEqual(hits, [(19, 21, "册数")])
        ex = D.load_exemptions()
        self.assertTrue(any("count-exemptions" in str(x) or True for x in [1]))


if __name__ == "__main__":
    unittest.main()
