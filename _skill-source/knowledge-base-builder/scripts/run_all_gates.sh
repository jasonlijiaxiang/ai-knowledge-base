#!/bin/bash
# 本地跑一遍 CI 会跑的**全部**门禁，顺序与 .github/workflows/gates.yml 一致。
#
# 为什么要有它（2026-08-02 立）：同一天两次「本地绿 / CI 红」，根因都是同一个——
# 提交前只挑了几道跑，漏掉的那道恰好是坏的。人靠记忆挑门禁必然漏，
# 错题本里那一问「你提交前跑的那几道，是 CI 会跑的全部吗？」需要一个能回答「是」的东西。
#
# 2026-08-03 起它是**唯一的门禁清单入口**：`make_share.py` 的解压自检与整库 Release
# 说明都改成跑这个脚本，不再各自维护一份挑好的名单（此前四份清单里有两份在静默漂移，
# 分享包的自检实际只覆盖 15 道里的 9 道，对外却说「门禁全跑了一遍」）。
#
# 用法：bash _maintenance/run_all_gates.sh
# 退出码：0 = 全绿（可以提交），1 = 有门禁挂了（先修，别叠提交）。
#
# 改了 gates.yml 就要同步改这里——两份清单会漂，末尾那道自检就是防漂的：
# 它数 gates.yml 里的 run: 步数，与本文件跑的道数对不上就报警。

cd "$(dirname "$0")/.." || exit 2
FAILED=()
N=0

gate() {   # gate "名字" 命令...
  local name="$1"; shift
  N=$((N + 1))
  printf '\n\033[1m[%02d] %s\033[0m\n' "$N" "$name"
  if "$@"; then
    printf '     \033[32mok\033[0m\n'
  else
    printf '     \033[31mFAIL\033[0m\n'
    FAILED+=("$name")
  fi
}

# ---- 结构与账本 ----
gate "布局就位"                 python3 _maintenance/check_kb_layout.py
gate "门户坏链"                 python3 _maintenance/check_html_links.py
gate "页数账实"                 python3 _maintenance/check_page_ledger.py
gate "书单账实"                 python3 _maintenance/check_ebook_ledger.py
gate "_prep 取用文档同步"       python3 _maintenance/check_prep_coverage.py
gate "保鲜（节奏与不可外推）"   python3 _maintenance/check_freshness.py
gate "网页章节契约"             python3 _maintenance/check_web_chapters.py

# ---- 呈现契约 ----
gate "样式契约"                 python3 _maintenance/check_css_classes.py
gate "正文标签配平"             python3 _maintenance/check_html_wellformed.py
gate "讲义排版契约（全库 audit）" bash -c 'python3 _maintenance/audit_pptx.py PPT-version/*/*-讲义.pptx'
gate "页脚页码账实"             python3 _maintenance/check_footer_pagenum.py

# ---- 生成物无漂移 ----
gate "网页产物与 MANIFEST 一致" python3 Web-version/build.py --check
gate "生成器册的源 JSON 在位"   python3 _maintenance/check_deck_source.py

# ---- 技能分发 ----
gate "技能包结构合格"           python3 _maintenance/check_skill_package.py _skill-source/knowledge-base-builder.skill
gate "技能包与源目录一致"       python3 _maintenance/check_skill_sync.py
gate "库内脚本与技能源一致"     python3 _maintenance/check_scripts_sync.py

# ---- Portable 铁律 ----
gate "无本机绝对路径"           python3 _maintenance/check_no_abspath.py

# ---- 语义账（可派生的数目不许过期）----
gate "可派生数目账实"           python3 _maintenance/check_derived_counts.py

printf '\n\033[1m[报告型 · 不拦]\033[0m 数目声明体检\n'
python3 _maintenance/check_count_claims.py | tail -3
printf '\n\033[1m[报告型 · 不拦]\033[0m 技能版本 vs 已发布标签\n'
python3 _maintenance/check_version_tag.py | sed 's/^/  /'

# ---- 自检：本文件与 gates.yml 的道数对不对得上 ----
# 库不带 CI 时（技能初始化出来的新库就是这样）没有 gates.yml，跳过自检而不是报警。
GY=.github/workflows/gates.yml
if [ -f "$GY" ]; then
  YAML_STEPS=$(grep -c '^      - name: ' "$GY")
  EXPECT=$((N + 2))   # +2 = 末尾两道报告型
  printf '\n────────────────────────────────────────\n'
  if [ "$YAML_STEPS" -ne "$EXPECT" ]; then
    printf '\033[33m注意\033[0m gates.yml 有 %d 道、本脚本跑了 %d 道——两份清单漂了，去对一下。\n' \
      "$YAML_STEPS" "$EXPECT"
  fi
else
  printf '\n────────────────────────────────────────\n'
fi

if [ ${#FAILED[@]} -eq 0 ]; then
  printf '\033[32m%d 道门禁全绿。\033[0m\n' "$N"
  exit 0
fi
printf '\033[31m%d 道挂了：\033[0m %s\n' "${#FAILED[@]}" "${FAILED[*]}"
printf 'CI 红了先修，不要往上叠提交。\n'
exit 1
