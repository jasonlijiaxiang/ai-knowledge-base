# 本项目的工作约定

这是个人 AI 知识库（21 模块、PPT 面 + 网页版两面），由自建技能 `knowledge-base-builder`
维护。内容规范、目录布局、门禁纪律全部在技能里，本文件只写**怎么开工**。

**整库可以整包拷走**：换一台机器怎么拉起、怎么让 Claude Code 接着维护，见
[开始使用](开始使用.html)「换一台机器」一节。读和验证零第三方依赖（Python 3.7+ 标准库即可），
只有改讲义 PPTX 才需要 `python-pptx`。

## 零、前置：三样东西（换机接手先补齐）

这三样都**不在库里**，装在机器上；缺了不会报错，只会静悄悄地少一层保障：

| 要装的 | 从哪来 | 缺了会怎样 |
| --- | --- | --- |
| 技能 `knowledge-base-builder` | 库内 `_skill-source/knowledge-base-builder.skill` | 内容规范、目录布局、门禁纪律全失效——这是最要紧的一个 |
| 插件 `superpowers` | marketplace `https://github.com/obra/superpowers.git` | 下面第一节的 brainstorming 硬门没有工具支撑 |
| 插件 `andrej-karpathy-skills` | marketplace `https://github.com/forrestchang/andrej-karpathy-skills.git` | 第二节的四条写码纪律没有工具支撑 |

两个插件按 marketplace 添加后以 **project 作用域**装到本库目录。
**装不上也不要跳过纪律**——插件只是把下面两节变得顺手，规矩本身写在这里，手工照做一样算数。

## 一、改动前先走 brainstorming（用户 2026-07-22 定）

**任何创作性改动动手前，先用 `superpowers:brainstorming`**——新增模块、增补章节、改网页版、
改技能规则、改门禁脚本都算。它的硬门是：**先给设计并拿到批准，才能写第一行**。
（没装插件时，这条按人工执行：先出设计文档、拿到批准，再动第一行。）

本库的两处本地化（覆盖 skill 默认）：

- **设计文档存 `_maintenance/YYYY-MM-DD-<主题>-设计.md`**，不用 skill 默认的
  `docs/superpowers/specs/`——本库所有过程性文档都归 `_maintenance/`，多开一个 docs/ 树
  会分叉。
- **`writing-plans` 之后接的是知识库技能的工作流**，不是通用编码流程：A 类（新模块）／
  B 类（增补）／C 类（巡检）的步骤以 `knowledge-base-builder` 为准。

**什么时候可以跳过**：纯执行、无设计空间的动作——跑门禁、跑生成器、提交推送、按已批准
的设计做机械回刷、回答问题。判据是「有没有需要拍板的取舍」，没有就直接做。

## 二、写代码/改脚本时守 Karpathy Guidelines（用户 2026-07-22 定）

`karpathy-guidelines` 的四条，对本库尤其对味：

1. **先想再写**——假设要说出口，多解释的地方别默默选一个。
2. **最简优先**——不写没要求的功能、不为一次性代码造抽象。
3. **外科手术式改动**——只碰该碰的；顺手"改进"周边代码是本库明令禁止的
   （改成品 PPTX 只做 zip 级最小手术，见技能 ppt-design-system）。
4. **目标驱动**——把任务变成可验证的目标，循环到验证通过。本库的验证面是现成的：
   二十道门禁、渲染目检、脚手架 + 已知答案对照。

**脚本里不许出现本机绝对路径**（2026-07-22 portable 审计定）：路径一律从 `__file__` 往上推。
整库要能拷到别的机器上接着用，写死 `/Users/<用户名>/…` 的脚本换机即废，且二十道门禁一道
都查不出——`make_share.py` 的解压自检会拦住它。

## 三、本库自己的硬纪律（技能里的，这里只列最常踩的）

- **门禁全绿 + CI 绿再算完**，改完就 commit + push（站着的授权，破坏性 git 操作仍需先问）。
  跑门禁只有一条命令：`bash _maintenance/run_all_gates.sh`——**不要挑着跑**，
  它按 CI 的顺序跑完全部二十道，末尾还会数 gates.yml 的步数防两份清单漂。
- **门禁全绿 ≠ 对**：语义过期（表述停在旧阶段）门禁查不出，收尾按 web-rules §九·五
  第 8 步核对门户三处表述。
- **时效性事实必须自报节奏与边界**（2026-08-02 起）：每条登记在 MANIFEST 的事实都要写
  等级（A 一手 / B 二手，C 不进成品）、节奏（30/90/180 天）与「不能外推」一句话；
  到期先进「到期待复核」清单，超过 KB-CONFIG「超期宽限」（45 天）才 FAIL；
  每周一 `freshness.yml` 用 `--strict` 到期即自动报 issue「到期事实清单」（2026-09-05 起）。
- **内部工作用语不进成品**：「一源两面」「PPT 面／Web 面」「真源」「派生账」这些是工作
  语言，出现在读者面前就是黑话。
- **改 `_assets/kb.css` 必跑 `bump_style_version.py --apply`**；改成品 PPTX 禁整包
  round-trip。
- 数字要么有核实日期与信源，要么不写。

## 四、GitHub 维护面（用户 2026-07-29 定）

这个库**只在 GitHub 上维护**：所有版本存 GitHub，技能单独打包放同一个仓库下。
仓库 `jasonlijiaxiang/ai-knowledge-base`（public），站点
`https://jasonlijiaxiang.github.io/ai-knowledge-base/`。操作细节见
[`_maintenance/维护手册.md`](_maintenance/维护手册.md)，这里只列改动时必须记住的：

- **CI 是第二道防线，不是替代品**：本地那套门禁照跑，push 之后 Actions 再无条件跑一遍。
  **两边跑的是同一份清单**（`run_all_gates.sh` ↔ `gates.yml`，互相数步数防漂），
  分享包的解压自检、整库 Release 说明也都指向它——2026-08-03 前库里有四份门禁清单，
  两份静默漂到「对外说全跑了一遍、实际只覆盖一半」。**CI 红了先修，不要往上叠提交**
  ——首页徽章红着就等于对外说这份库现在是坏的。
- **产物不手写、不双写**：库根 `README.md` 的模块表由 `Web-version/build.py` 从各模块
  MANIFEST 生成（`<!-- MODULES:BEGIN -->` 区块），`--check` 一并盯。改模块别去手改那张表。
  README.md 里**不放单模块页数**——那已有四处派生账由 `check_page_ledger` 看死，
  再抄一份就是门禁查不到的第五本账。
- **两个文件撑着 Pages，别删**：`.nojekyll`（没它 Jekyll 会吞掉 `_assets/`、`_prep/`
  这些下划线开头的目录，线上立刻掉样式）、库根 `index.html`（Pages 首页只认它，
  本库门户叫 `README.html`）。
- **发版靠标签，不再往库里堆 zip**：技能 `skill-vX.Y`、整库 `kb-vYYYY.MM.DD`，
  推标签即自动打包 + 自检 + 建 Release。`_skill-source/history/` 与 `_maintenance/history/`
  **已冻结**（.gitignore 挡住新增），历史版本去 Releases 与 git tag 找。
- **改了技能源目录就要重打库内那份 `.skill`**——`check_skill_sync.py` 会拦下不一致；
  「只下载技能」是对外承诺的一条路，包过期等于直接发错东西给别人。
- **发技能版之前先补 CHANGELOG 速查表那一行**，发布说明从它取。升了版本号就推标签
  ——`check_version_tag.py` 会在 CI 里提醒（报告型，不拦）。
- **改了 `_maintenance/` 里的常设脚本，跟着同步技能源目录**：
  `python3 _maintenance/check_scripts_sync.py --sync`（方向：库 → 技能），然后重打 `.skill`。
  一次性脚本（配图脚本、日期前缀的回流件）放 `_maintenance/onetime/`，那一层不受这道门管。
