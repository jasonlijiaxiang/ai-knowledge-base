#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""audit_pptx.py 对合规小样张 PASS、对越界小样张 FAIL。"""
import os
import subprocess
import sys
import unittest

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
AUDIT = os.path.join(ROOT, "audit_pptx.py")
MINI = os.path.join(HERE, "fixtures", "mini.pptx")
BAD = os.path.join(HERE, "fixtures", "mini-bad.pptx")


class AuditTest(unittest.TestCase):
    def test_mini_deck_passes(self):
        r = subprocess.run([sys.executable, AUDIT, MINI],
                           capture_output=True, text=True)
        self.assertEqual(r.returncode, 0, r.stdout[-500:])
        self.assertIn("PASS", r.stdout)

    def test_undersized_font_deck_fails(self):
        r = subprocess.run([sys.executable, AUDIT, BAD],
                           capture_output=True, text=True)
        self.assertEqual(r.returncode, 1, r.stdout[-500:])
        self.assertIn("FAIL", r.stdout)
        self.assertIn("8pt", r.stdout)


if __name__ == "__main__":
    unittest.main()
