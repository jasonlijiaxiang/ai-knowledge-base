#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""check_freshness.py 的两层门禁语义：未到期 / 到期未超宽限 / 超宽限 / --strict / 字段非法。"""
import os
import shutil
import sys
import tempfile
import unittest

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.dirname(HERE))

import check_freshness as F  # noqa: E402

MANIFEST = """# TestMod · MANIFEST（模块清单）

## 章节清单
| 章节 ID | 现编号 | 标题 | 状态 | 最后核实 |
| --- | --- | --- | --- | --- |
| t-ch1 | 第 1 章 | 测试章 | ✅ | 2026-01-01 |

## 时效性事实（巡检盘查对象）
| 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| {fact} | {chapter} | {verified} | https://example.com | {recheck} | {grade} | {cadence} | {boundary} |
"""


def write_lib(fact="价格事实", chapter="t-ch1", verified="2026-07-01", recheck="—",
              grade="A", cadence="30", boundary="当日快照"):
    root = tempfile.mkdtemp(prefix="kbfresh-")
    os.makedirs(os.path.join(root, "PPT-version", "TestMod"))
    with open(os.path.join(root, "PPT-version", "TestMod", "MANIFEST.md"),
              "w", encoding="utf-8") as f:
        f.write(MANIFEST.format(fact=fact, chapter=chapter, verified=verified,
                                recheck=recheck, grade=grade, cadence=cadence,
                                boundary=boundary))
    with open(os.path.join(root, "KB-CONFIG.md"), "w", encoding="utf-8") as f:
        f.write("| 字段 | 值 |\n| --- | --- |\n| 超期宽限 | 45 |\n")
    return root


def run(root, *args):
    import contextlib
    import io
    buf = io.StringIO()
    with contextlib.redirect_stdout(buf):
        code = F.main(["check_freshness.py", root] + list(args))
    return code, buf.getvalue()


class FreshnessTierTest(unittest.TestCase):
    def tearDown(self):
        for d in list(getattr(self, "_dirs", [])):
            shutil.rmtree(d, ignore_errors=True)

    def keep(self, root):
        if not hasattr(self, "_dirs"):
            self._dirs = []
        self._dirs.append(root)

    def test_fresh_fact_passes(self):
        root = write_lib(); self.keep(root)
        code, out = run(root, "--asof", "2026-07-10")
        self.assertEqual(code, 0)
        self.assertIn("全部", out)

    def test_overdue_within_grace_lists_but_does_not_fail(self):
        root = write_lib(); self.keep(root)
        code, out = run(root, "--asof", "2026-09-05")   # 到期 36 天 ≤ 宽限 45
        self.assertEqual(code, 0)
        self.assertIn("到期待复核", out)

    def test_overdue_beyond_grace_fails(self):
        root = write_lib(); self.keep(root)
        code, out = run(root, "--asof", "2026-10-01")   # 到期 62 天 > 45
        self.assertEqual(code, 1)
        self.assertIn("FAIL", out)

    def test_strict_fails_on_any_overdue(self):
        root = write_lib(); self.keep(root)
        code, _ = run(root, "--asof", "2026-09-05", "--strict")
        self.assertEqual(code, 1)

    def test_recheck_date_pins_forward_failure(self):
        # 复查日把复核往前钉：复查日 2026-07-20 早于常规到期 07-31，应更早到期
        root = write_lib(recheck="2026-07-20"); self.keep(root)
        code, out = run(root, "--asof", "2026-08-01", "--strict")
        self.assertEqual(code, 1)
        self.assertIn("已超期", out)

    def test_grade_c_is_rejected(self):
        root = write_lib(grade="C"); self.keep(root)
        code, _ = run(root, "--asof", "2026-07-10")
        self.assertEqual(code, 1)

    def test_empty_boundary_is_rejected(self):
        root = write_lib(boundary="—"); self.keep(root)
        code, _ = run(root, "--asof", "2026-07-10")
        self.assertEqual(code, 1)

    def test_recheck_before_verified_is_rejected(self):
        root = write_lib(recheck="2026-06-01"); self.keep(root)
        code, _ = run(root, "--asof", "2026-07-10")
        self.assertEqual(code, 1)


if __name__ == "__main__":
    unittest.main()
