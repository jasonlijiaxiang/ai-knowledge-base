#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""技能版本号与已发布标签的对账（报告型，零第三方依赖）。

**为什么要有它**（2026-08-03 工程审视时补）：发布线本身设计得挺严——推 `skill-vX.Y`
标签即从源现场打包、版本号对账、结构与内容双自检、从 CHANGELOG 取发布说明。
缺的只是**「升了版本号就推标签」这一步没有任何提醒**。实测：SKILL.md 已到 v8.9，
最新标签停在 `skill-v8.1`，中间 8 个版本一个 Release 都没有，而 README 对外承诺
「历次版本：Releases 里的 `skill-v*`，每条带该版改了什么」。

发不发版是人的决定，所以**只报不拦**——机器负责别让人忘了。

用法: python3 check_version_tag.py
退出码: 恒为 0。
"""
import os
import re
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)


def skill_version():
    for d in sorted(os.listdir(os.path.join(ROOT, "_skill-source"))):
        p = os.path.join(ROOT, "_skill-source", d, "SKILL.md")
        if os.path.exists(p):
            m = re.search(r'^\s*version:\s*"?([\d.]+)"?', open(p, encoding="utf-8").read(),
                          re.M)
            if m:
                return d, m.group(1)
    return None, None


def latest_tag():
    try:
        r = subprocess.run(["git", "tag", "-l", "skill-v*"], cwd=ROOT,
                           capture_output=True, text=True)
    except OSError:
        return None
    if r.returncode != 0:
        return None
    tags = [t.strip()[len("skill-v"):] for t in r.stdout.split("\n") if t.strip()]
    if not tags:
        return None
    return sorted(tags, key=lambda v: [int(x) for x in v.split(".") if x.isdigit()])[-1]


def main():
    name, ver = skill_version()
    if not ver:
        print("读不到技能版本号，跳过。")
        return 0
    tag = latest_tag()
    if tag is None:
        print("拿不到 git 标签（不是 git 库，或还没打过 skill-v* 标签），跳过。")
        return 0
    if tag == ver:
        print("技能 %s v%s 与最新标签 skill-v%s 一致。" % (name, ver, tag))
        return 0
    print("技能 %s 已到 v%s，最新标签却是 skill-v%s——中间这几版没有 Release。" % (name, ver, tag))
    print("  README 对外承诺「历次版本去 Releases 找」，包过期等于对外说的话不算数。")
    print("  补发：git tag skill-v%s && git push origin skill-v%s" % (ver, ver))
    return 0


if __name__ == "__main__":
    sys.exit(main())
