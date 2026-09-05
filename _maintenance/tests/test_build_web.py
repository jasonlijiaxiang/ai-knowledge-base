#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""build.py 的 rows()/inject() 与 --check 的构建日接管。"""
import os
import sys
import unittest

HERE = os.path.dirname(os.path.abspath(__file__))
WEB = os.path.join(os.path.dirname(HERE), "..", "Web-version")
sys.path.insert(0, WEB)

import build  # noqa: E402

TEXT = """## 章节清单
| 章节 ID | 现编号 | 标题 | 状态 | 最后核实 |
| --- | --- | --- | --- | --- |
| t-ch1 | 第 1 章 | 测试章 | ✅ | 2026-01-01 |

## 另一节
正文
"""


class BuildTest(unittest.TestCase):
    def test_rows_returns_only_data_rows(self):
        rows = build.rows("章节清单", TEXT)
        self.assertEqual(rows, [["t-ch1", "第 1 章", "测试章", "✅", "2026-01-01"]])

    def test_rows_missing_section_is_empty(self):
        self.assertEqual(build.rows("不存在的段", TEXT), [])

    def test_inject_is_idempotent(self):
        html = "前<!-- A:BEGIN -->旧<!-- A:END -->后"
        once = build.inject(html, "<!-- A:BEGIN -->", "<!-- A:END -->", "新", "A")
        twice = build.inject(once, "<!-- A:BEGIN -->", "<!-- A:END -->", "新", "A")
        self.assertEqual(once, twice)
        self.assertIn("新", once)
        self.assertNotIn("旧", once)

    def test_adopt_stamped_date_reads_product_date(self):
        build.adopt_stamped_date(["--check"])
        import datetime
        stamped = datetime.date(*(int(x) for x in build.BUILD_DATE.split("-")))
        self.assertLessEqual(stamped, datetime.date.today())


if __name__ == "__main__":
    unittest.main()
