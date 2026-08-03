# 库账本与对外面（library-ledgers）· 派生账 · 知识地图 · 打包交接

**收尾时读这一份**（流程第 5 步；A 类新增模块、改 README 与知识地图、
重打技能包、打分享包时必读）。动手前该读的目录布局、模块模板、留痕与命名，
在同层的 `library-layout.md`。

拆分理由见 `library-layout.md` 开头。

## 派生账登记表（v3.13 · 全库唯一出处，各回刷清单引用它）

库里有一批"同一事实写在多处"的**派生账**：一处是真源，其余全是派生。历史上最高发的失败类
就是"动了真源、漏刷派生"（实战包停 18 模块、封面停旧章数、四面页数账打架、_skill-source
停旧版……至少 6 起独立事故）。各任务分支的回刷清单（ppt-rules 增补回刷、illustration-rules
§八、prep-rules 口径回刷、patrol-rules 账实轴）都是下表的**任务视角切片**——账目全集以本表
为准；发现本表缺账先补表，再改分支清单（同一账目散写多处必漂移）。

| 派生账 | 真源（唯一） | 派生位置 | 哪些任务会动真源 | 核对手段 |
| --- | --- | --- | --- | --- |
| 讲义页数 | 放映序实测（`ppt/slides/slide[0-9]+.xml` 计数） | 模块 MANIFEST／模块 README／顶层 README／`_prep` 一页纸+全库总数 | 增章、配图、删页 | `check_page_ledger.py` |
| 章数口径 | 正文眉题「第 N 章」最大值 | 封面章节条/分组条、导览「X 章一条主线」、总收束行数、速查章编号 | 增章、并章 | audit 检查项 10/13 |
| 全库口径（模块数/层数/题数） | 顶层 README 知识地图 | `_prep` 三件套正文与 `_prep/MANIFEST.md` | A 类新增模块、新设层 | prep-rules 回刷清单（人工） |
| 电子书账 | 各条资料的正规渠道链接 | `电子书书单.md` 的「获取方式」列、**讲义正文里指向资料的说法**（「已入库…」「见 ebooks/…」「书单 #N」） | 书单增删、链接失效、**契约变更（撤馆藏/换源）** | `check_ebook_ledger.py`（轴 1–4 查书单、轴 5 扫讲义 XML 与库内 HTML） |
| 时效性事实 | 各模块 MANIFEST 时效表（含核实笔记） | `_prep` 实战包题目/一页纸看板、讲义数字弹药页/速查页 | B 类刷新、巡检回写 | `_prep` 引用映射（巡检） |
| 视觉令牌 | `_assets/kb.css` 的 `:root` | 各页面的 class 用法（**页面里不写颜色字面量**） | 改配色、新建页面 | 全库 grep 颜色字面量与 `<style>`／行内 `style=` |
| 样式契约 | `kb.css` 的类定义与页面 class 用法**互为契约** | 全部页面／生成器／site.js 的 class；每页 `kb.css?v=` 缓存戳与可见构建号 | 换肤、组件重构、改类名 | `check_css_classes.py`（孤儿类＋全站版本戳一致；扫描看不见的类按三类记进脚本白名单）；**改了 kb.css 必跑 `bump_style_version.py --apply` 升一档戳**（不齐戳＝用户端"改了但看不见"，门禁只校验一致、升档靠这个脚本） |
| 内部链接 | 实际文件路径 | 全库 HTML 相对链接、MANIFEST 串联边 | 改名、挪位、删模块 | `check_html_links.py` |
| skill 版本 | SKILL.md frontmatter | 各模块 MANIFEST「产出 skill 版本」、CHANGELOG、.skill 包、安装目录 | 技能升级 | 打包后三处 diff/md5 + `check_skill_package.py`；**md5 一致只证明搬运没错，能不能装要真装一次** |

用法两条：**收尾时**，本次任务动了哪行真源，就把该行派生位置全部回刷（操作细节看对应分支
切片）；**巡检时**，账实类脚本逐行兜底，兜出不一致按分支切片修。

## 知识地图（顶层 README 的一部分）

模块多了以后，平铺的模块列表看不出知识结构，点对点串联也会失控（10 个模块两两串联是
45 条边）。所以顶层 README.html 在"模块列表"之上放一张**分层知识地图**。层定义以
`KB-CONFIG.md` 为准（初始化时按领域定制，设计原则见 init-rules.md）；下表是默认书架（AI 领域）：

| 层 | 放什么 | 现有/预留示例 |
| --- | --- | --- |
| 应用模式层 | 用模型解决问题的模式 | RAG、Agent |
| 协议层 | 生态互操作标准 | MCP、（预留 A2A） |
| 工程保障层 | 让系统可靠的工程手段 | （预留 Evaluation、Fine-tuning、Security） |
| 基础层 | 模型与提示词原理 | （预留 LLM 原理、Prompt Engineering） |

用法两条：

- **A 类新增模块先落位**：路由（第 1 步）时判断新模块属于哪一层，拿不准就问用户；
  在地图上登记后再开始生产。层可以新增，但要慎重——层是"书架"，不轻易改。
- **串联沿地图找**：出"建议串联"（第 3 步）时，优先看同层与相邻层的模块；
  跨层强扯的关联宁可不建。

## 为什么 README 用 HTML

README（顶层索引和每个模块索引）**一律用 HTML 写，不用 Markdown**。原因：HTML 能承载更丰富的
排版——彩色状态标签、卡片、可点击的内部链接、内嵌小图/表格样式，比纯 Markdown 表格信息量更大、
更好看，也更适合当"门户页"长期维护。

**样式一律外链库级共享样式表 `_assets/kb.css`，禁止各页内联 `<style>`（2026-07-20 定版）。**
早先的规则写的是"保持轻量：内联 `<style>`，不依赖外部 CSS"——**那句话把"无外部依赖"和
"不共享文件"混为一谈了**。`file://` 下相对路径的样式表是能加载的，浏览器拦的只有 `fetch()`
与 ES module（Portable 铁律的准确含义见 `web/web-design-system.md` §一）。照那句话执行的结果：
**52152 字符的 CSS 散在 28 个页面里各自演化**，加上写死在 markup 里的行内颜色，一个库长出了
三套配色，用户一眼就看出来了。改法与代价：
- 新建任何页面都写 `<link rel="stylesheet" href="<相对路径>/_assets/kb.css">`，不写 `<style>`；
- **markup 里不许出现写死颜色的 `style=` 属性**——它比内联 `<style>` 更难发现，扫描时容易漏；
- 代价是页面不再"单文件自带样式"：单独拷走一个 HTML 会掉样式。这是有意的取舍——
  本库的分享单元是**整个库目录**，不是单页（Portable 铁律同样是按整库定义的）。

### 全库 HTML 视觉令牌（唯一出处，2026-07-21 换向定版）

**库内所有 HTML——根总纲、面总览、模块 README、`_prep/` 取用页、网页版——共用同一套令牌**，
定义在 `_assets/kb.css` 顶部的 `:root`。方向＝**清爽导航站 / 工作台**（参照用户给的
shentoushi.top 类工具导航）：白底卡片矩阵、高信息密度、蓝色点缀、系统黑体、卡片描边+浅投影。
**上一版「技术档案/编辑部」（宋体+墨金+纸感）已废弃**——用户实测不喜欢：知识库门户的读法是
"快速取用"，不是"慢读杂志"，方向要跟读法走。

| 角色 | 令牌 | 值 |
| --- | --- | --- |
| 页面底 / 卡片 | `--bg` `--card` | `#F4F6F9` `#FFFFFF` |
| 描边 | `--line` `--line-2` | `#E2E8F0` `#EEF2F7` |
| 文字 | `--ink-900/700/500/400` | `#0F172A` `#334155` `#5B6B7F` `#8494A7` |
| 主强调 · 蓝 | `--blue` `--blue-d` `--blue-bg` `--blue-ln` | `#2563EB` `#1D4ED8` `#EFF6FF` `#BFDBFE` |
| 通过 / 提醒 / 危险 | `--ok*` `--warn*` `--red*` | 绿 `#16803D`、琥珀 `#B45309`、红 `#B91C1C` 各带 bg/边 |
| 字族 | `--sans` / `--mono` | 系统黑体族 / 等宽族（**全部系统内置**，不用衬线） |
| 层级色相 | `.hue-0…6` 的 `--hue`/`--hue-bg` | 紫 `#7C3AED`、蓝 `#2563EB`、青 `#0891B2`、橙 `#EA580C`、绿 `#16A34A`、靛 `#6366F1`、琥珀 `#D97706`——知识地图七层各一色，用于模块字标块、层标点、侧栏色点（导航站的视觉节奏来源） |

**样式表引用必须带版本参数**（2026-07-21 入规）：所有页面写
`href=".../_assets/kb.css?v=YYYYMMDD[x]"`，**每次改 kb.css 同批把 28 页的版本号一起换**
（一条 sed 的事）。原因：Chrome 对 `file://` 的 CSS 有缓存，用户开着的旧标签页在样式更新后
仍吃旧 CSS——2026-07-21 字阶收档后用户回看三个旧标签页，反馈"没任何变化"，磁盘上明明已经
是新版。**改了样式但用户看不到，等于没改**；版本参数让每次变更强制生效，不依赖用户会不会硬刷新。
**并且顶栏右端放一个可见构建号**（`.ver`，如 `v0721c`，与版本参数同步换）——哪个标签页在
渲染旧样式，肉眼可判，不用再对着截图猜（2026-07-21 靠比对截图里"标题:顶栏"字号比例才确认
三个标签页跑着两套 CSS，排查了两轮；有构建号一眼的事）。排查用户端样式不一致的顺序（2026-07-21 二次修订）：
**①先查缩放**——地址栏有放大镜图标 = 该标签页缩放 ≠100%，让用户逐页 ⌘0（缩放差能同时
伪造字号差与位置差，CSS 怎么改都追不平）→ ②看构建号是否一致 → ③同一标签页内用顶栏
切换再比 → ④关掉重开标签页。

三条纪律不变：**只有 `_assets/kb.css` 能定义令牌**，页面里不写颜色字面量；**讲义 PPT 是另一套
识别色**（`ppt/ppt-design-system.md`，主强调青 `#128199`），两套互不串门；**不得出现第三套**
（规则挡不住结构，令牌收进一个文件才治本——2026-07-20 教训）。

**换向的操作教训（2026-07-21）**：整站换肤之所以一次收口，全靠此前把 26 个页面收进一份样式表
——换向＝重写一个文件+重跑生成器；若样式仍散在各页，这次换向就是 26 处手术。**方向可以换，
"单一样式表"这个结构不许回退。**另有一处连带修复：页面行内引用了从未存在的令牌
`var(--bg-2)`（首版 site.css 遗物，实际渲染为透明底）——**行内 style 引令牌同样是漂移源**，
一律改类。

### 根总纲 README.html 骨架（面中立）

两页都外链 `_assets/kb.css`，不写 `<style>`（见上「样式一律外链」）。

```html
<!doctype html><html lang="zh"><head><meta charset="utf-8">
<title>我的 AI 知识库</title>
<style>
 body{font-family:-apple-system,"PingFang SC",sans-serif;max-width:940px;margin:2rem auto;padding:0 1rem;color:#1a2733}
 h1{text-align:center} .sub{color:#556575;text-align:center}
 h2{margin:2.2rem 0 .8rem;padding-left:.6rem;border-left:5px solid #2b6cb0}
 table{border-collapse:collapse;width:100%;margin:1rem 0}
 th,td{border:1px solid #dde6ee;padding:.6rem .8rem;text-align:left;vertical-align:top}
 th{background:#0e4d64;color:#fff}
 .ok{color:#2f855a;font-weight:600} .todo{color:#c05621;font-weight:600}
 .future{background:#fffbea;border:1px dashed #d6b656;padding:.8rem 1rem;border-radius:8px}
 .daily{background:#eef6ff;border:1.5px solid #9ec5e8;border-radius:14px;padding:1rem 1.2rem}
 .faces{display:grid;grid-template-columns:1fr 1fr;gap:.9rem}
 .face{display:flex;flex-direction:column;gap:.35rem;padding:1rem 1.1rem;border:1.5px solid #9ec5e8;border-radius:14px;text-decoration:none;color:inherit}
 .face.soon{border-color:#d9a62d;border-style:dashed;background:#fdf8e8}
 @media(max-width:680px){.faces{grid-template-columns:1fr}}
</style></head><body>
<h1>我的 AI 知识库</h1>
<p class="sub">一套知识、两面呈现：PPT 面是内容真源，Web 面是网页延伸。</p>

<div class="daily">每日取用：<a href="./_prep/实战包.html">实战包</a> …</div>

<h2>两面入口</h2>
<div class="faces">
 <a class="face" href="./PPT-version/README.html"><b>PPT 面 · 讲义总览</b><span>内容真源：N 个模块…</span></a>
 <a class="face soon" href="./Web-version/"><b>Web 面 · 网页版</b><span>试点建设中…</span></a>
</div>

<h2>知识地图</h2>
<!-- 层 × 模块卡片，卡片链到 ./PPT-version/<模块>/README.html -->

<p class="plumb">库目录约定（v4.0 一源两面）：PPT-version/ 是内容真源…</p>
</body></html>
```

### 面总览 README.html 骨架（`PPT-version/README.html`）

```html
<!-- 同一份 <style> -->
<a class="back" href="../README.html">← 返回知识库首页</a>
<h1>PPT 面 · 讲义总览</h1>
<p class="sub">本面是知识库的内容真源：N 个模块各自一份讲义式 PPT 与一份精选书单。
书单只列正规渠道的官方链接，不落地文件。</p>
<h2>模块列表</h2>
<table>
 <tr><th>模块</th><th>主题一句话</th><th>电子书</th><th>讲义 PPT</th><th>更新日期</th></tr>
 <tr><td><a href="./RAG/README.html">RAG</a></td><td>检索增强生成的原理与实践</td>
     <td class="ok">✅ 书单已建（N 份）</td><td class="ok">✅（NN 页）</td><td>2026-07-07</td></tr>
</table>
<div class="future"><b>预留扩充位：</b>下一步可加 MCP、Agent …（想到就往这里记）</div>
```

**「讲义 PPT」列必须写成 `✅（NN 页）`**：`check_page_ledger.py` 靠这个格式取"模块表账"，
写成别的形状它匹配不到就跳过，账实检查会少一账。

### 模块内 README.html 骨架

同样外链共享样式表，列出本模块章节表 + 每节状态（用 `.ok`/`.todo` 上色），并回链**根总纲**
（`<a href="../../README.html">← 返回知识库首页</a>`——模块在 `PPT-version/<模块>/` 下，
爬两级到库根；指的是库的家而不是本面清单页）。B 类更新时只改对应章节那一行的状态。

## 分享与交接（2026-07-21 入规：portable 的最后一公里）

Portable 铁律定义了"库可分享"，但分享还差两件：**怎么打包**、**接收者拿到后怎么接着建**。

**打包 = `scripts/make_share.py`**（随库复制进 `_maintenance/`）。分享单元是整库目录，默认瘦身：
带讲义/书单/网页版/`_assets`/`_prep`/`_maintenance` 工具/KB-CONFIG/raw-data 输入与核实笔记
（事实溯源随库走）/**当前技能包 `.skill`**（接收者装它接着建自己的库）；不带 `.git`、
`raw-data/history/`（作者的回滚保险，实测占库 49M/76M）、`_skill-source/history/` 与解包源、
`_maintenance/history/`、`_reference/` 内容。两条实现要点：

- **`_reference/` 排除内容但保留空目录**——布局契约要求它存在（`check_kb_layout` 会验），
  接收者自己的参考资料以后放这。首跑就是被这条卡住的：瘦身包解压后布局检查判残缺。
- **打完必解压自检**——打包链的"真装一次"：zip 建成功只证明压缩没错，不证明拆开还是一个
  能用的库（技能包 v4.8 同款教训，这里直接做成了自动层）。**自检跑全套门禁，不是挑两道**
  （v7.2 起）：只跑布局与坏链，证明的是"目录在、链接通"，证不出账本一致、样式契约、
  生成物没漂、库级产物指针有效——而这几样正是整包换机后最容易出事的面。
- **排除本机权限配置**：`.claude/settings.local.json` 里全是这台机器的绝对路径，
  已被 `.gitignore` 挡在版本库外，分享包同理要挡；同目录的 `settings.json`／`launch.json`
  是项目级配置，可移植，照带。

### 换机可用的三条硬约束（v7.2 增，portable 审计的产出）

「能打包」不等于「换台机器能用」。三条各有各的失效方式，且**八道门禁一道都查不出**：

1. **脚本不许写本机绝对路径**——一律从 `__file__` 往上推。取证：某库 `_maintenance/` 里
   21 个一次性脚本写死 `/Users/<用户名>/…`，本机跑得通、换机全废。
   `make_share.py` 自检已加这道扫描（命中即打包失败）。
2. **KB-CONFIG「知识库根目录」不写绝对路径**——技能第 0 步本就按当前目录定位，
   这个字段不参与定位，写死只会变成每次任务都读到的一个死值（详见 `init-rules.md`）。
3. **库外依赖要在库里登记**——`CLAUDE.md` 若引用了 marketplace 插件、外部工具，
   必须写清名字、来源与"缺了会怎样"。它们装在机器上、不在库里，换机后静默缺席：
   不报错，只是少一层保障。登记的位置就是 `CLAUDE.md` 自己（每次会话都加载）。

交接页要写清**前置**（Python 版本、哪些能力是零依赖、哪些工具才需要装包）与**自检命令**，
让接收者拿到就能自己验一遍，而不是等出问题才发现少了东西。

### 库托管在 GitHub 时（v7.7 增）

库放上 GitHub 之后，**仓库首页取代文件夹成为第一入口**，多出五条纪律。它们不改 Portable
铁律——本地双击 `README.html` 的体验一字不变，全站相对链接让 file:// 与在线两种打开方式同时成立。

1. **`.nojekyll` 是 Pages 能不能用的开关**。GitHub Pages 默认走 Jekyll，而 Jekyll
   **跳过所有下划线开头的目录**——本规范的 `_assets/`（全站 CSS）、`_prep/`（取用页）
   正好全中。少这个空文件，站点上线即掉样式、取用页全 404。同时库根要有 `index.html`
   （Pages 首页只认它，而本规范的门户叫 `README.html`），做成跳转页即可。
2. **门禁搬上 CI**。本规范的门禁与生成器全部零第三方依赖，搬到 Actions 上是纯收益：
   不装包、几十秒跑完。每道门禁单独一个 step，红的时候一眼看得出是哪一道。
   **CI 是第二道防线不是替代品**——本地照跑，因为本地能看到详情、能立刻修。
3. **库根 `README.md` 是门面，不是备忘**，且必须**进生成区**。它天然容易停在旧阶段
   （某库改造时发现它还写着「网页版待建」，实际 19/19 早已建成）。模块表由 `build.py`
   从各模块 MANIFEST 生成、`--check` 一并盯。**表里不放单模块页数**——那已有四处派生账
   由 `check_page_ledger` 看死，再抄一份就是门禁查不到的第五本账；全库总页数那一处
   本就在门禁覆盖内，可以留。
4. **版本历史交给 git，不再堆 zip 副本**。`raw-data/history/`、`_skill-source/history/`
   这些"每版一份副本"的目录，做的正是 git 该做的事。托管之后：`raw-data/history/`
   不进版本库（git 每个提交本就存了整份 pptx），技能版本改用 tag + Release。
   同时**必须给出"怎么取回某一天的成品"的操作说明**——不写清楚，删历史目录就是在赌。
5. **分发包与源必须有门禁绑住**。库内那份 `.skill` 是给人"只下载技能"用的单文件入口，
   而 `check_skill_package.py` 只验结构（能不能装），**验不出内容过期**。补一道
   `check_skill_sync.py`（包内条目与源目录逐文件比对）挂进 CI，否则迟早发一个
   "看起来是最新版、实际停在旧版"的包给别人——同一个形状的亏，这套规范已经吃过两次。

**交接 = 库根 `开始使用.html`**（成品，挂根总纲入口卡）。三段固定内容：每天怎么看（三个
常用入口）、整库怎么分享（分享单元=整个文件夹 + 打包命令）、**接收者三步把它变成自己的库**
（装 `.skill` → 改 KB-CONFIG → 直接对 Claude 说话），外加一张"库的约定"表（账本/门禁/留痕/
生成器各在哪）。接收者的库与原库各自演化，互不影响——这正是 v3.0 把个性外置进 KB-CONFIG
的设计初衷，交接页是它面向接收者的说明书。

## 技能包打包与验收（2026-07-20 入规）

分发用的 `.skill` 就是一个 zip，但**结构错了装不上**：

- **`SKILL.md` 必须在压缩包根层**，不能把整个技能目录多套一层。正确做法是**进到技能目录内**
  打包：`cd <技能目录> && zip -qr ../<名>.skill . -x '*.DS_Store'`；
  在父目录执行 `zip -r <名>.skill <技能目录>` 会多套一层，包就废了。
- `references/`、`scripts/` 同样在根层；不带 `.DS_Store` / `__MACOSX` 杂物。
- `description` ≤1024 字符（claude.ai 上传硬门槛，超限直接拒收）。

**归档口径（2026-07-22 定版）**：技能包旧版落 `_skill-source/history/`，文件名带版本后缀——
`kb_archive.py <包> --dest _skill-source/history --stem-suffix -vN.N`，得到
`YYYY-MM-DD-knowledge-base-builder-vN.N.skill`。工具此前只会往 `<模块>/raw-data/history/`
落且不带版本号，手工挪过一次；`--dest` / `--stem-suffix` 两个参数就是为这条口径补的。

**验收分两层，缺一不可**（core-rules §三）：

1. `scripts/check_skill_package.py <包>` 查结构；
2. **真装一次**。这一层无法自动化，交用户抽验。

**教训（2026-07-20）**：此前每次升级都报告"已重打包、四处副本 md5 一致"，用户拿去装才发现
"这个包用不了"。**md5 一致只证明文件搬运没出错，完全不证明产物可用**——打包这条链上一直
缺最后一层防线，而报告的措辞让它听起来已经验过了。凡是"产出一个供别处消费的产物"的动作，
都要问一句：我验的是搬运，还是验的是能用？
