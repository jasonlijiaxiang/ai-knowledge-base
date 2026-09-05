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
# 它把两份清单抽成脚本集合做逐字比对（2026-09-05 起，取代数步数），对不上直接 FAIL。

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
# data.js 是 check_prep_coverage / check_web_chapters 的账本，先对产物再让它们读账
# （2026-09-05 B4 提序：此前它们拿可能漂移的 data.js 当账本，漂移被误判成契约违约）。
gate "网页产物与 MANIFEST 一致" python3 Web-version/build.py --check
gate "门户坏链"                 python3 _maintenance/check_html_links.py
gate "页数账实"                 python3 _maintenance/check_page_ledger.py
gate "书单账实"                 python3 _maintenance/check_ebook_ledger.py
gate "_prep 取用文档同步"       python3 _maintenance/check_prep_coverage.py
gate "保鲜（节奏与不可外推）"   python3 _maintenance/check_freshness.py
gate "网页章节契约"             python3 _maintenance/check_web_chapters.py

# ---- 读者面用语 ----
gate "内部工作用语"             python3 _maintenance/check_internal_terms.py

# ---- 呈现契约 ----
gate "样式契约"                 python3 _maintenance/check_css_classes.py
gate "正文标签配平"             python3 _maintenance/check_html_wellformed.py
gate "讲义排版契约（全库 audit）" bash -c 'python3 _maintenance/audit_pptx.py PPT-version/*/*-讲义.pptx'
gate "页脚页码账实"             python3 _maintenance/check_footer_pagenum.py

# ---- 脚本自测 ----
# 零第三方依赖的 unittest；门禁脚本自己也得有回归防线（2026-09-05 补）。
gate "脚本自测（unittest）"      python3 -m unittest discover -s _maintenance/tests -p 'test_*.py'

# ---- 生成物无漂移 ----
gate "信源清单与 MANIFEST 一致" python3 _maintenance/gen_source_list.py --check
gate "整库版本戳与 KB-CONFIG"   python3 _maintenance/stamp_kb_version.py --check
gate "生成器册的源 JSON 在位"   python3 _maintenance/check_deck_source.py

# ---- 技能分发 ----
gate "技能包结构合格"           python3 _maintenance/check_skill_package.py _skill-source/knowledge-base-builder.skill
gate "技能包与源目录一致"       python3 _maintenance/check_skill_sync.py
gate "库内脚本与技能源一致"     python3 _maintenance/check_scripts_sync.py

# ---- Portable 铁律 ----
gate "无本机绝对路径"           python3 _maintenance/check_no_abspath.py

# ---- 语义账（可派生的数目不许过期）----
gate "可派生数目账实"           python3 _maintenance/check_derived_counts.py

# 这两道是报告型：退出码不参与判定，只把尾巴打进汇总。
# 有意不设 pipefail——`| tail` 会吃掉报告脚本自己的退出码，但那本来就不是门的判据。
printf '\n\033[1m[报告型 · 不拦]\033[0m 数目声明体检\n'
python3 _maintenance/check_count_claims.py | tail -3
printf '\n\033[1m[报告型 · 不拦]\033[0m 技能版本 vs 已发布标签\n'
python3 _maintenance/check_version_tag.py | sed 's/^/  /'

# ---- 自检：本文件与 gates.yml 是不是同一批脚本（集合比对，不是数数） ----
# 数步数只能防「少抄一道」——两处各删一道照样数得平（2026-08-03 前四份清单两两漂移，
# 数数从未拦住过）。改成集合比对：gates.yml 每个非报告型 step 的 run 引用的脚本集合，
# 与本文件 gate 行引用的脚本集合必须逐字相等，不等计入 FAILED 并非零退出。
# 库不带 CI 时（技能初始化出来的新库就是这样）没有 gates.yml，跳过自检而不是报警。
extract_scripts() {   # $1=文件  $2=local|yaml
  if [ "$2" = local ]; then
    grep -E '^gate ' "$1" | grep -oE '_maintenance/[A-Za-z_]+\.(py|sh)|Web-version/build\.py'
  else
    # yaml：只取 step 的 run 行；「报告」型与本自检步不参与集合（本地也不把它们算 gate）。
    awk '/^      - name: /{rep=($0 ~ /报告|清单集合比对/)} /^        run: /{if(!rep) print}' "$1" \
      | grep -oE '_maintenance/[A-Za-z_]+\.(py|sh)|Web-version/build\.py'
  fi
}
compare_lists() {
  GY=.github/workflows/gates.yml
  if [ ! -f "$GY" ]; then
    printf '库不带 CI（无 gates.yml），跳过清单集合比对。\n'
    return 0
  fi
  local_tmp=$(mktemp); yaml_tmp=$(mktemp)
  extract_scripts "$0" local | sort -u > "$local_tmp"
  extract_scripts "$GY" yaml  | sort -u > "$yaml_tmp"
  printf '\n────────────────────────────────────────\n'
  if diff -q "$local_tmp" "$yaml_tmp" >/dev/null 2>&1; then
    printf '清单集合一致（本地 %d 个脚本 vs gates.yml %d 个脚本）。\n' \
      "$(wc -l < "$local_tmp" | tr -d ' ')" "$(wc -l < "$yaml_tmp" | tr -d ' ')"
    rm -f "$local_tmp" "$yaml_tmp"
    return 0
  fi
  printf '\033[31mFAIL：两份清单的脚本集合不一致\033[0m——\n'
  printf '  只在本地：%s\n' "$(comm -23 "$local_tmp" "$yaml_tmp" | tr '\n' ' ')"
  printf '  只在 yaml：%s\n' "$(comm -13 "$local_tmp" "$yaml_tmp" | tr '\n' ' ')"
  rm -f "$local_tmp" "$yaml_tmp"
  return 1
}
if [ "${1:-}" = "--list-only" ]; then
  compare_lists
  exit $?
fi
compare_lists || FAILED+=("清单集合比对")

if [ ${#FAILED[@]} -eq 0 ]; then
  printf '\033[32m%d 道门禁全绿。\033[0m\n' "$N"
  exit 0
fi
printf '\033[31m%d 道挂了：\033[0m %s\n' "${#FAILED[@]}" "${FAILED[*]}"
printf 'CI 红了先修，不要往上叠提交。\n'
exit 1
