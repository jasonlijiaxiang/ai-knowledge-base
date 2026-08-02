# A2A · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | a2a |
| 所在层 | 协议层 |
| 主导关系 | 一单活儿的委派链——读者面对的场景是把一件活儿交给别人家的 Agent。 |
| 建立日期 | 2026-07-09 |
| 最后更新 | 2026-07-12（B 类：引用 _reference/Codex 对照库,补 v1.0.1 口径、SDK 兼容模式、Inspector/TCK；同日两件套吸收：增 3 页框架深潜（Task 状态机/四种交付/五边界五控制）+ 1 页生产验收清单，71→75 页）；2026-07-15（呈现修复：删配图替代型残留源文字页 1 页，配图后 82→81 页）；2026-07-17 呈现完善：全册末新增「来源与核实」页（关键信源一览 + 核实窗口，补齐收尾四件套），81→82 页；2026-07-17 内容增补：速查章增「数字弹药」页 1 页（本册及跨模块已核实数字的集中速查，每条带用法与源指针），82→83 页；2026-07-17 呈现统一：全册章眉统一为青色加粗（#128199，对齐配图页样式；用户发现正文页与配图页眉题两套字体并存），无内容变更；2026-07-20 呈现完善：按新语言策略（缩写型术语首次出现展开英文全称，全角逗号格式，译名视语境）存量回刷，补 6 处、零增删页，清单见 raw-data/2026-07-20-术语全称回刷清单.md，audit PASS；2026-07-20b 错字修正：第 3 章对练页（放映序 p39）「持续推进展」补字为「持续推送进展」，零增删页，audit PASS、渲染目检通过，旧版存 history/2026-07-20b（注：本次存留痕时误用 2026-07-20 同名覆盖了当日 v3.13 回刷前快照，已改用 b 后缀；原快照丢失，改动可依 raw-data/2026-07-20-术语全称回刷清单.md 重建）；2026-07-21 网页版落地（第六批，与 LLM-Training、Security 同批）：`Web-version/a2a/index.html`，覆盖与缺口矩阵存 raw-data/2026-07-21；网页版新增「A2A 接入选型器」（交互件，协作/任务/基建三输入出协议层结论+传输绑定+交付方式，判据全部来自第 1/3/5/7 章选型口诀），未引入新事实——事实级 0、缺口级 0，无回流欠账；2026-07-23 网页版增补（生产验收六条线三空卡补文；两面事实同源，PPTX 未改，PPT 侧回流待办见 _maintenance/2026-07-23-知识点对照与串联-设计.md）；2026-07-23 内容打磨（网页版·客户交锋视角，批一）：新立 4 题（现在上是否太早·采纳数字是自报口径/自研 Agent 要不要标准协议/跨厂商出错算谁的/押错协议沉没多少）+ 3 处机制（三个异常终态分「卡在谁那儿」、opaque 的责任边界、包壳的可换性）。**零新增事实**（数字均本册既有，经 check_new_numbers.py 扫描确认）。判据与八战场见 _maintenance/2026-07-23-全库内容打磨-执行口径.md。PPTX 未改；**2026-08-02 网页版增补「上云怎么落地」（Codex 对照库借鉴第 3 步·回流批）**：新增 `#cloud` 小节（结构性小节，与 qa/related/sources 同类，不进章节清单），1 组 / 3 行，取材讲义 p58、p61、p62、p66、p69。**零新增事实**——服务清单与「给客户一句话」全部来自讲义已有的上云页，check_new_numbers.py 确认无 ⚠。**新增的是两格讲义没有的内容**：每组后写「顺着追问什么」与「云替你做不了什么」，即对照库 cloudHooks 五要素里我方缺的「发现问题」与「责任边界」。其后小节编号统一 +1，本页目录同步。**PPT 侧回流待办**：讲义云页只有「环节 / 服务 / 给客户一句话」三格，追问与责任边界两格尚未回流。PPTX 未改；**2026-08-02 撤回上云小节（同日自纠）**：当日新增的 `#cloud` 小节三行（Azure AI Foundry / AWS Bedrock AgentCore / Vertex AI Agent Engine）与第 6 章「生产落地与上云」页内已有的「三大云都已托管」表**是同一批内容**，属重复回流；且第 6 与第 8 两节同题、被第 7 章安全隔开。已撤销该小节，把它多出来的两段有价值内容（「顺着追问什么」「云替你做不了什么」）并入第 6 章末尾。其后小节编号回落，目录同步。判据同 AI-Ops：**网页版已有同一张表就不另立一节** |
| 产出 skill 版本 | v3.0 |

## 章节清单
| 章节 ID | 现编号 | 标题 | 状态 | 最后核实 |
| --- | --- | --- | --- | --- |
| a2a-what-why | 第 1 章 | 是什么/为什么（与 MCP 分工） | ✅ | 2026-07-09 |
| a2a-protocol | 第 2 章 | 协议解剖（五大对象与生命周期） | ✅ | 2026-07-09 |
| a2a-transport | 第 3 章 | 发现与传输（Agent Card 发现·三绑定·流式） | ✅ | 2026-07-09 |
| a2a-handson | 第 4 章 | 动手做：跑通一次 A2A 协作 | ✅ | 2026-07-09 |
| a2a-orchestration | 第 5 章 | 多智能体协作（opaque agents·任务委派） | ✅ | 2026-07-09 |
| a2a-production | 第 6 章 | 生产落地·上云 | ✅ | 2026-07-09 |
| a2a-security | 第 7 章 | 安全 · 售前速查 | ✅ | 2026-07-09 |

## 时效性事实（巡检盘查对象）
| 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 规范稳定线 1.0（正文 Latest Released 1.0.0）；项目 release 当前 v1.0.1（2026-05-28 补丁；v1.0.0 于 2026-03-12 发布）；历史 0.1.0→0.2.6→0.3.0→1.0.0；以 Protocol Buffers 为唯一权威规范定义 | a2a-protocol | 2026-07-12 | a2a-protocol.org 规范页、github.com/a2aproject/A2A/releases | — | A | 90 | 补丁号月级变动，写方案前重新核 release |
| v1.0 头号新特性 Signed Agent Cards（签名版 Agent Card，密码学验证签发方） | a2a-security | 2026-07-09 | LF 一周年 press | — | A | 90 | 规范提供签名能力，不等于对端已启用并验签 |
| 治理：Google 2025-04 发布并开源，2025-06 捐赠 Linux Foundation 成立中立的 A2A Project | a2a-what-why | 2026-07-09 | LF 项目成立公告 | — | A | 180 | 中立治理不代表各家实现之间互通已被验证 |
| 采用度 150+ 组织、核心仓库 22,000+ stars；5 官方 SDK（Python/JS/Java/Go/.NET），Python SDK 实现 1.0 并提供 0.3 兼容模式、三种传输绑定 Client/Server 全覆盖 | a2a-production | 2026-07-12 | LF 一周年 press、github.com/a2aproject/a2a-python | — | B | 90 | 组织数与 star 是通稿自报口径，不等于已上生产家数 |
| 官方配套工具：Inspector（联调）与 TCK（协议一致性测试）提供一致性证据，不替代安全与业务评测 | a2a-handson | 2026-07-12 | github.com/a2aproject/a2a-inspector、github.com/a2aproject/a2a-tck | — | A | 90 | 工具随规范版本走，旧版跑过不等于新版仍一致 |
| 云支持：Azure AI Foundry / Copilot Studio、AWS Bedrock AgentCore Runtime、Google Cloud（Vertex AI Agent Engine） | a2a-production | 2026-07-09 | LF 一周年 press | — | B | 90 | 只说明产品名在列，绑定深度与可用区不可外推 |
| 三种传输绑定：JSON-RPC 2.0 / gRPC / HTTP+JSON-REST；流式走 SSE，长任务用推送通知回调 | a2a-transport | 2026-07-09 | a2a-protocol.org 规范页 | — | A | 90 | 规范列三种绑定，不代表各家 SDK 与对端都实现 |
| AP2（Agent Payments Protocol）为 A2A 之上支付扩展，60+ 组织 | a2a-production | 2026-07-09 | LF 一周年 press | — | B | 90 | 参与组织数为通稿口径，扩展仍在早期不等于可用 |

| Task 状态机共九种状态（进行中 2 + 中断 2 + 终态 4 + 兜底 unspecified），终态不可回跳、重试建新 Task | a2a-protocol | 2026-07-12 | a2a-protocol.org 规范 TaskState 枚举 | — | A | 90 | 九态是 1.0 枚举，实现方可能不全用或自加语义 |
## 串联出边
| 本模块章节 | 指向 | 关系 |
| --- | --- | --- |
| a2a-what-why | mcp#mcp-what-why | 协议层两兄弟：MCP 接工具（纵向）/ A2A 接 Agent（横向），双向互引分工 |
| a2a-orchestration | agent#agent-orchestration | 多 Agent 协作 ↔ Agent 编排模式；A2A 是跨 Agent 协作的标准化通道 |
| a2a-orchestration | agent#agent-tools-mcp | Agent 第 4 章已登记 A2A fact，本模块为其深入入口（Agent 侧应回指本模块） |
| a2a-security | mcp#mcp-security | 安全共识对照：签名/最小权限/鉴权/opaque 边界 |
| a2a-production | （候选）evaluation | 多 Agent 协作的评估验收，留待后续补 |
