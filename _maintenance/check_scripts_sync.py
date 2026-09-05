#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""库内门禁脚本与技能源目录一致性（零第三方依赖）。

**为什么要有它**（2026-08-03 工程审视时补）：库里同一批脚本躺着两份——技能源目录
`_skill-source/<技能名>/scripts/` 与库内 `_maintenance/`。规矩是「技能是上游，
随库复制进 `_maintenance/`」，但**从来没有任何门禁看住这条**：

  · `check_skill_package.py` 只验分发包的**结构**；
  · `check_skill_sync.py` 只比分发包 ↔ 技能源目录。

两者都够不到 `_maintenance/`。审视当天实测：28 个同名脚本里 27 个字节相同，
**`check_css_classes.py` 已经漂了 12 天**——库内那份 07-23 加了 8 行动态 class 白名单，
技能那份停在 07-22。后果具体：走「只下载技能」这条对外承诺路径的人，跑那道门禁会在
动态 class 上收到假 FAIL。

反向的洞更大：库里下游写的门禁**从没回流技能**（审视时是 4 道 + `run_all_gates.sh`），
用技能初始化一个新库只能拿到残缺的一套。所以本门禁查两件事：

  1. **交集不许漂**：两处都有的同名文件，字节必须相同；
  2. **下游不许私藏**：`_maintenance/` **顶层**的每个脚本都必须在技能里有对应。

判「哪个是一次性脚本」靠**目录**，不靠文件名正则：一次性件放 `_maintenance/onetime/`，
本道不看那一层。正则曾经是判据（日期前缀、`*_figs.py`），但它认不出
`agent_ch10_build.py` 这种没有特征名的一次性件——**让目录承担分类，比让正则去猜可靠**
（2026-08-03 分层时改的）。确有该留在本库的常设件，写进 LOCAL_ONLY 并注明理由。

用法: python3 check_scripts_sync.py            # 只查
      python3 check_scripts_sync.py --sync     # 把库内那份**复制到**技能源目录
退出码: 0 = 一致, 1 = 有漂移或有门禁没回流。

`--sync` 的方向是**库 → 技能**，只此一个方向：日常修脚本都是在库里跑着修的，
技能那份是要发出去的拷贝。反过来同步的场合（从技能装一个新库）由 init 流程负责。
"""
import glob
import os
import shutil
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)

# 库特有、**刻意不进技能**的常设件，逐条写清理由——空着一个名字就等于给漂移开后门。
LOCAL_ONLY = {
    # 无
}

# 反向白名单：技能 scripts/ 里有、库 _maintenance/ 里刻意不设的件，逐条写清理由。
SKILL_ONLY = {
    # 无
}


def find_skill_scripts():
    """技能源目录下的 scripts/。库不托管技能源时返回 None——那不是错误。"""
    for d in sorted(glob.glob(os.path.join(ROOT, "_skill-source", "*", "scripts"))):
        if os.path.isdir(d):
            return d
    return None


def main(argv):
    do_sync = "--sync" in argv
    SKILL_SCRIPTS = find_skill_scripts()
    if SKILL_SCRIPTS is None:
        print("本库不托管技能源目录（_skill-source/*/scripts/ 不存在），跳过。")
        return 0

    drift, missing, only_in_skill = [], [], []
    skill = {os.path.basename(p): p for p in glob.glob(os.path.join(SKILL_SCRIPTS, "*"))
             if os.path.isfile(p)}
    local = {os.path.basename(p): p for p in
             glob.glob(os.path.join(HERE, "*.py")) + glob.glob(os.path.join(HERE, "*.sh"))}
    for name in sorted(skill):
        if name in SKILL_ONLY or name.startswith("."):
            continue
        if name not in local and name != "tests":
            only_in_skill.append(name)
    # tests/ 一起同步：脚本自测的门禁步跑的是库内测试，技能发出去的包里也得有这份回归
    # 防线（2026-09-05 补，B3）。
    tests_dir = os.path.join(HERE, "tests")
    local_tests = {os.path.join("tests", os.path.relpath(p, tests_dir)): p
                   for p in glob.glob(os.path.join(tests_dir, "*.py"))}

    for name, lp in sorted(local.items()):
        if name in LOCAL_ONLY:
            continue
        sp = skill.get(name)
        if sp is None:
            missing.append(name)
            continue
        with open(lp, "rb") as a, open(sp, "rb") as b:
            if a.read() != b.read():
                drift.append(name)

    skill_tests = os.path.join(SKILL_SCRIPTS, "tests")
    for rel, lp in sorted(local_tests.items()):
        sp = os.path.join(SKILL_SCRIPTS, rel)
        if not os.path.isfile(sp):
            missing.append(rel)
            continue
        with open(lp, "rb") as a, open(sp, "rb") as b:
            if a.read() != b.read():
                drift.append(rel)

    n = len([k for k in local if k not in LOCAL_ONLY])

    if only_in_skill:
        print("\n技能源目录里有、库 _maintenance/ 里没有（%d 个）——上游的新件要进库，"
              "否则两边各修各的：\n  %s" % (len(only_in_skill), "、".join(only_in_skill)))
        print("（手动复制进 _maintenance/，或写进 SKILL_ONLY 并注明理由。）")
        if not do_sync:
            return 1

    if do_sync and (drift or missing):
        for name in drift + missing:
            if name in local_tests:
                src = local_tests[name]
                dst = os.path.join(SKILL_SCRIPTS, name)
                os.makedirs(os.path.dirname(dst), exist_ok=True)
            else:
                src, dst = local[name], os.path.join(SKILL_SCRIPTS, name)
            shutil.copy2(src, dst)
            print("  同步 %s → 技能源目录" % name)
        print("\n已把 %d 个文件从库内复制到技能源目录。"
              "**别忘了重打 .skill 包**，否则 check_skill_sync 会挂。" % (len(drift) + len(missing)))
        return 0

    if drift:
        print("与技能源目录不一致（%d 个）：" % len(drift))
        for d in drift:
            print("  - %s" % d)
            print("      diff _skill-source/knowledge-base-builder/scripts/%s _maintenance/%s"
                  % (d, d))
    if missing:
        print("\n库内有、技能里没有（%d 个）——下游写的工具要回流上游，"
              "否则用技能初始化的新库拿到的是残缺的一套：" % len(missing))
        for m in missing:
            print("  - %s" % m)
        print("\n三条出路：回流技能源目录 / 挪进 `_maintenance/onetime/`（一次性件）/ "
              "写进本脚本的 LOCAL_ONLY 并注明理由。")
    if drift or missing:
        print("\n一键同步（方向：库 → 技能）：python3 _maintenance/check_scripts_sync.py --sync")
        return 1
    print("库内 %d 个常设脚本与技能源目录逐字节一致。" % n)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
