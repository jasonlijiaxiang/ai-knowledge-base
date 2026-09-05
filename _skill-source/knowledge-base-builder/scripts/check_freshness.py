#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""保鲜门禁：把「事实会过期」从看板变成门（knowledge-base-builder，零第三方依赖）。

**为什么要有它**（2026-08-02 对照 Codex 库后立项）：库里 224 条时效性事实一直只有
「核实日期 + 来源」两个字段，靠 KB-CONFIG 一个统一的「巡检阈值 90 天」兜底。三处失守：

  ① **价格和架构原理共用一个阈值**——模型报价一个月就废，Transformer 原理一年不变，
     同一个 90 天既拦不住前者、又白扰后者；
  ② **`fresh.html` 是报表，不是门**——保鲜看板可以一直红着，八道门禁照样全绿，
     没有任何机制强迫人去看它；
  ③ **「已公告未生效」全靠人记着**——MCP 规范 2026-07-28 翻篇那一轮，是靠记忆里挂了
     一条待办做的。人记得住一次，记不住第十次。

本脚本把三件事变成可执行判据：每条事实必须自报**证据等级**与**复核节奏**，
到期即 FAIL；已知的将来节点写进「复查日」，到日子不处理同样 FAIL。

事实表列契约（`PPT-version/<模块>/MANIFEST.md` 的 `## 时效性事实（巡检盘查对象）`）：

    | 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |

前四列是原有的，位置不动（`Web-version/build.py` 按下标解析，追加式扩列不破坏它）。
第 5 列复用原「建议复查日」的位置。三条新列的判据：

  · **等级** `A` = 一手权威（官方文档／规范／标准／论文原文／官方定价页）;
             `B` = 可信二手（第三方评测、综述、社区统计、**厂商自称的性能或排名**）;
             `C` = 待核线索——**C 不许进成品**，故本脚本判 FAIL。只有 C 级支撑的说法
             要么补到 B 以上，要么按「数字要么有核实日期与信源，要么不写」删掉。
  · **节奏** 只能是 `30` / `90` / `180`（天），按事实的变化速度取：
             30 = 价格、配额、模型目录与版本快照、榜单、路线图与量产进度、财务与促销口径;
             90 = 协议版本、API 与平台能力、安全清单、评测基准、SDK 版本线，
                  以及**已发布产品的固定技术规格与官方计量口径**（带宽、容量、标称算力、
                  token 计量、配置文件格式）;
             180 = 原理、方法论、稳定架构模式、已定稿标准。
             它是**最长间隔**，不是等待时间——出了公告、标准换版、来源失效、客户现场反证，
             立刻复核并重算。
             **「已发布规格」与「路线图／报价」要分开**（2026-08-02 首刷的教训）：首刷把
             NVLink 带宽、TPU v7 GA 规格、Gemini 视频 token 计量这类**已经定死的数**
             和报价、产能预测一起塞进 30 天档，71 条里有 22 条属于误判，一周内集中到期。
             这类过热恰恰会喂出「狼来了」——巡检制度就是这么死的。
  · **不能外推** 一句话写清「这条**不能**证明什么」。空着即 FAIL：一条没有边界的数字
             在客户现场就是一句过度承诺。

三条轴：

  轴一 · **列契约（FAIL）**——表头与每个数据行都必须是约定的 8 列。回刷漏掉某一册时，
        这一轴第一个拦住；靠人肉核对 19 份清单是不可能持续的。
  轴二 · **字段合法（FAIL）**——日期格式、不许未来日期、节奏与等级取值、边界非空、
        复查日不得早于核实日期、章节 ID 必须能在该模块「章节清单」里解析到。
        最后这条顺带拦「串行」：回刷时整列错位一格，前面几轴都发现不了。
  轴三 · **到期（两层：清单 / FAIL）**——有效复查日 = min(复查日, 核实日期 + 节奏天)。
        已过期但未超「超期宽限」（KB-CONFIG 字段，缺省 45 天）→ 打印「到期待复核」清单、
        退出 0（默认模式）；超过宽限 → FAIL。`--strict`（每周一 freshness workflow 用）：
        任何到期即 FAIL。14 天内到期 WARN（提示，不影响退出码）。
        取 min 而不是「写了复查日就用它」：**「复查日」是把复核往前钉的钉子，不是把常规
        节奏往后推的豁免**。否则给一条 30 天档的报价写个明年的复查日，就能合法地让它
        躺一年——那正是本门禁要防的事。写得比常规节奏晚的复查日仍留在表里、仍出现在
        保鲜看板上，作为「这个日子有个已知节点」的提醒。

章节 ID 允许的例外只有 `书单`——LLM-Training 有两条事实登记的是电子书书单的状态
（RLHF Book 章节重组、CS336 课程公开），它们确实不属于任何讲义章节，但同样会过期，
不能因为「归不进章节」就不登记。白名单是显式的，不是默认放行。

用法:
    python3 check_freshness.py [知识库根目录] [--asof YYYY-MM-DD] [--strict]

`--asof` 用于复现与自测（不传则用系统当天）。CI 不传，按真实时间判——
事实是真的会随挂钟过期的，这一点不该被参数糊弄过去。
`--strict` 给每周定时任务用：任何到期即 FAIL（默认模式到期先按宽限进清单、不拦）。

退出码: 0 = 字段合法且无超宽限到期（默认）或全部在保鲜期内（--strict）,
        1 = 存在超宽限到期（默认）／任何到期（--strict）或字段问题, 2 = 读取失败。
"""
import datetime
import glob
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))

SECTION = "时效性事实（巡检盘查对象）"
SECTION_ALT = "时效性事实"
HEADER = ["事实", "章节 ID", "核实日期", "来源", "复查日", "等级", "节奏", "不能外推"]
NCOL = len(HEADER)

GRADES_OK = {"A", "B"}
CADENCES_OK = {30, 90, 180}
CHAPTER_ALLOW = {"书单"}          # 显式白名单，见文件头说明
EMPTY = {"", "—", "-", "–"}
DATE_RE = re.compile(r"^\d{4}-\d{2}-\d{2}$")
NEAR_DAYS = 14                    # 临期提醒窗口
GRACE_DEFAULT = 45                # 超期宽限缺省（天）；真源在 KB-CONFIG「超期宽限」字段
BOUNDARY_MAX = 40                 # 「不能外推」建议字数上限（超出只告警）


def die(msg):
    print("[读取失败] %s" % msg, file=sys.stderr)
    sys.exit(2)


def parse_date(s):
    if not DATE_RE.match(s):
        return None
    try:
        return datetime.date(*(int(x) for x in s.split("-")))
    except ValueError:
        return None


def table(section, text):
    """取某个 ## 段落下的表格：返回 (表头行, [数据行])，行是已 strip 的单元格列表。"""
    m = re.search(r"^## %s.*?$(.*?)(?=^## |\Z)" % re.escape(section), text, re.S | re.M)
    if not m:
        return None, []
    head, body = None, []
    for line in m.group(1).split("\n"):
        line = line.strip()
        if not line.startswith("|"):
            continue
        cells = [c.strip() for c in line.strip("|").split("|")]
        if not cells or set(cells[0]) <= set("- :"):     # |---| 分隔行
            continue
        if head is None:
            head = cells
            continue
        body.append(cells)
    return head, body


def chapter_ids(text):
    _, body = table("章节清单", text)
    return {c[0] for c in body if c}


def check_module(mod, path, asof):
    """返回 (fail 列表, warn 列表, 参与到期判定的事实统计, 表中数据行数)。

    行数单独回传：字段非法的行进不了统计，若拿统计长度当行数，模块摘要会少报，
    看上去像「这册事实变少了」。
    """
    try:
        text = open(path, encoding="utf-8").read()
    except OSError as e:
        die("%s：%s" % (path, e))

    fails, warns, stats, nrow = [], [], [], 0
    head, body = table(SECTION, text)
    if head is None:
        head, body = table(SECTION_ALT, text)
    if head is None:
        fails.append("缺少「%s」一节" % SECTION)
        return fails, warns, stats, nrow

    # ---- 轴一 · 列契约 ----
    if head != HEADER:
        fails.append("表头不符合列契约\n        应为 | %s |\n        实为 | %s |"
                     % (" | ".join(HEADER), " | ".join(head)))
        return fails, warns, stats, nrow    # 表头都不对，逐行判没有意义

    chaps = chapter_ids(text)
    for i, c in enumerate(body, 1):
        nrow += 1
        where = "第 %d 行「%s…」" % (i, c[0][:18] if c else "")
        if len(c) != NCOL:
            fails.append("%s：应有 %d 列，实为 %d 列" % (where, NCOL, len(c)))
            continue
        fact, chapter, verified, source, recheck, grade, cadence, boundary = c

        # ---- 轴二 · 字段合法 ----
        if not fact:
            fails.append("%s：事实为空" % where)

        for part in re.split(r"[/、,，]", chapter):
            part = part.strip()
            if not part:
                continue
            if part not in chaps and part not in CHAPTER_ALLOW:
                fails.append("%s：章节 ID「%s」不在本模块章节清单里" % (where, part))

        vd = parse_date(verified)
        if vd is None:
            fails.append("%s：核实日期「%s」不是 YYYY-MM-DD" % (where, verified[:40]))
        elif vd > asof:
            fails.append("%s：核实日期 %s 在未来（判定日 %s）" % (where, verified, asof))

        if not source or source in EMPTY:
            fails.append("%s：来源为空" % where)

        if grade not in GRADES_OK:
            if grade == "C":
                fails.append("%s：等级 C（待核线索）不得进成品——补到 B 以上，或按"
                             "「数字要么有核实日期与信源，要么不写」删掉" % where)
            else:
                fails.append("%s：等级「%s」非法，只能是 A 或 B" % (where, grade))

        cd = None
        if cadence.isdigit() and int(cadence) in CADENCES_OK:
            cd = int(cadence)
        else:
            fails.append("%s：节奏「%s」非法，只能是 30 / 90 / 180" % (where, cadence))

        if boundary in EMPTY:
            fails.append("%s：「不能外推」为空——没有边界的数字在客户现场就是过度承诺" % where)
        elif len(boundary) > BOUNDARY_MAX:
            warns.append("%s：「不能外推」%d 字，建议压到 %d 字内"
                         % (where, len(boundary), BOUNDARY_MAX))

        rd = None
        if recheck not in EMPTY:
            rd = parse_date(recheck)
            if rd is None:
                fails.append("%s：复查日「%s」不是 YYYY-MM-DD（留空请写 —）"
                             % (where, recheck[:40]))
            elif vd and rd < vd:
                fails.append("%s：复查日 %s 早于核实日期 %s" % (where, recheck, verified))
                rd = None       # 已判非法，不拿它去算到期，免得同一处再报一条假超期

        # ---- 轴三 · 到期 ----
        if vd is None or cd is None:
            continue
        derived = vd + datetime.timedelta(days=cd)
        due = min(rd, derived) if rd else derived     # 复查日只能提前，不能延后
        left = (due - asof).days
        stats.append((mod, i, fact, grade, cd, vd, due, left, bool(rd)))
        if 0 <= left <= NEAR_DAYS:
            warns.append("%s：%d 天后到期（%s）" % (where, left, due))
        # left < 0 的到期项不进 fails：默认模式按宽限分层、--strict 才一律 FAIL，
        # 由 main() 从 stats 里取 left < 0 的条目统一处置。

    return fails, warns, stats, nrow


def read_grace(root):
    """从 KB-CONFIG.md 读「超期宽限」天数；缺字段或缺文件时用 GRACE_DEFAULT。"""
    try:
        text = open(os.path.join(root, "KB-CONFIG.md"), encoding="utf-8").read()
    except OSError:
        return GRACE_DEFAULT
    m = re.search(r"^\|\s*超期宽限\s*\|(.+?)\|", text, re.M)
    if not m:
        return GRACE_DEFAULT
    n = re.search(r"\d+", m.group(1))
    return int(n.group(0)) if n else GRACE_DEFAULT


def overdue_line(x):
    """到期条目的可读描述（供清单与 FAIL 两处共用）。"""
    mod, i, fact, g, cd, vd, due, left, _ = x
    return "第 %d 行「%s…」已超期 %d 天（应复核于 %s，节奏 %d 天，上次核实 %s）" \
           % (i, fact[:26], -left, due, cd, vd)


def main(argv):
    root, asof, strict = None, None, False
    args = argv[1:]
    i = 0
    while i < len(args):
        if args[i] == "--asof":
            if i + 1 >= len(args):
                die("--asof 后面要跟 YYYY-MM-DD")
            asof = parse_date(args[i + 1])
            if asof is None:
                die("--asof「%s」不是 YYYY-MM-DD" % args[i + 1])
            i += 2
        elif args[i] == "--strict":
            strict = True
            i += 1
        else:
            root = args[i]
            i += 1
    if root is None:
        root = os.path.dirname(HERE)
    if asof is None:
        asof = datetime.date.today()
    grace = read_grace(root)

    pv = os.path.join(root, "PPT-version")
    base = pv if os.path.isdir(pv) else root
    paths = sorted(glob.glob(os.path.join(base, "*", "MANIFEST.md")))
    if not paths:
        die("%s 下没找到任何模块的 MANIFEST.md" % base)

    mode = "（--strict：到期即 FAIL）" if strict else "（超期宽限 %d 天）" % grace
    print("===== 保鲜门禁 · 判定日 %s %s =====" % (asof, mode))
    all_fail, all_warn, all_stats = [], [], []
    for p in paths:
        mod = os.path.basename(os.path.dirname(p))
        f, w, s, nrow = check_module(mod, p, asof)
        all_stats.extend(s)
        for x in f:
            all_fail.append((mod, x))
        for x in w:
            all_warn.append((mod, x))
        n_overdue = sum(1 for x in s if x[7] < 0)
        flag = "FAIL" if f else ("到期%d" % n_overdue if n_overdue else ("warn" if w else "ok"))
        print("  %-22s %3d 条事实   %s" % (mod, nrow, flag))

    if all_stats:
        print("\n----- 分档 -----")
        for cd in sorted(CADENCES_OK):
            n = sum(1 for x in all_stats if x[4] == cd)
            print("  %3d 天档：%3d 条" % (cd, n))
        for g in sorted(GRADES_OK):
            n = sum(1 for x in all_stats if x[3] == g)
            print("  %s 级证据：%3d 条" % (g, n))
        pinned = sum(1 for x in all_stats if x[8])
        print("  显式复查日：%3d 条（已公告未生效等已知节点）" % pinned)

        soon = sorted((x for x in all_stats if x[7] >= 0), key=lambda x: x[7])[:6]
        if soon:
            print("\n----- 最近到期的几条 -----")
            for mod, i, fact, g, cd, vd, due, left, _ in soon:
                print("  %s  %-20s %s… （%d 天后）"
                      % (due, mod, fact[:34], left))

    if all_warn:
        print("\n----- 告警（不影响退出码）-----")
        for mod, x in all_warn:
            print("  [%s] %s" % (mod, x))

    overdue = sorted((x for x in all_stats if x[7] < 0), key=lambda x: x[7])
    if overdue:
        print("\n----- 到期待复核（%d 条）-----" % len(overdue))
        for x in overdue:
            print("  [%s] %s" % (x[0], overdue_line(x)))

    fail_list = list(all_fail)
    if strict:
        fail_list += [(x[0], overdue_line(x)) for x in overdue]
    else:
        over_grace = [x for x in overdue if -x[7] > grace]
        fail_list += [(x[0], overdue_line(x)) for x in over_grace]

    if fail_list:
        print("\n===== FAIL：%d 处 =====" % len(fail_list))
        for mod, x in fail_list:
            print("  [%s] %s" % (mod, x))
        print("\n超期的处理顺序见 tasks/patrol-rules：先离线筛出变化项，只对变化项联网核实，"
              "\n再回写事实、核实日期与受影响的两面内容——不做无差别重查。")
        return 1

    if overdue:
        print("\n%d 条到期未超宽限，只进「到期待复核」清单、不拦门禁；"
              "每周一 freshness workflow 用 --strict 到期即报 issue。" % len(overdue))
        return 0

    print("\n全部 %d 条事实在保鲜期内，字段合法。" % len(all_stats))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
