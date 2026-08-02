#!/bin/bash
# 本地跑一遍 CI 会跑的**全部**门禁，顺序与 .github/workflows/gates.yml 一致。
#
# 为什么要有它（2026-08-02 立）：同一天两次「本地绿 / CI 红」，根因都是同一个——
# 提交前只挑了几道跑，漏掉的那道恰好是坏的。人靠记忆挑门禁必然漏，
# 错题本里那一问「你提交前跑的那几道，是 CI 会跑的全部吗？」需要一个能回答「是」的东西。
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

# ---- 技能分发 ----
gate "技能包结构合格"           python3 _maintenance/check_skill_package.py _skill-source/knowledge-base-builder.skill
gate "技能包与源目录一致"       python3 _maintenance/check_skill_sync.py

# ---- Portable 铁律 ----
gate "无本机绝对路径"           python3 _maintenance/check_no_abspath.py

printf '\n\033[1m[报告型 · 不拦]\033[0m 数目声明体检\n'
python3 _maintenance/check_count_claims.py | tail -5

# ---- 自检：本文件与 gates.yml 的道数对不对得上 ----
YAML_STEPS=$(grep -c '^      - name: ' .github/workflows/gates.yml)
EXPECT=$((N + 1))   # +1 = 末尾那道报告型
printf '\n────────────────────────────────────────\n'
if [ "$YAML_STEPS" -ne "$EXPECT" ]; then
  printf '\033[33m注意\033[0m gates.yml 有 %d 道、本脚本跑了 %d 道——两份清单漂了，去对一下。\n' \
    "$YAML_STEPS" "$EXPECT"
fi

if [ ${#FAILED[@]} -eq 0 ]; then
  printf '\033[32m%d 道门禁全绿。\033[0m\n' "$N"
  exit 0
fi
printf '\033[31m%d 道挂了：\033[0m %s\n' "${#FAILED[@]}" "${FAILED[*]}"
printf 'CI 红了先修，不要往上叠提交。\n'
exit 1
