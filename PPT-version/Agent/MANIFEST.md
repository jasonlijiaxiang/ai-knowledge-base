# Agent · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | agent |
| 所在层 | 应用模式层 |
| 主导关系 | 自主性与代价——读者是要去见客户的人，客户问的是「要不要上、贵不贵、出事算谁的」。 |
| 建立日期 | 2026-07-07 |
| 最后更新 | 2026-08-02 网页版增补「上云怎么落地」（Codex 对照库借鉴第 3 步·回流批）：新增 `#cloud` 小节（结构性小节，与 qa/related/sources 同类，不进章节清单）……；讲义 123 页；完整更新记录见 [raw-data/更新记录.md](raw-data/更新记录.md) |
| 产出 skill 版本 | v1.0（清单由 v2.0 回填） |

## 章节清单
| 章节 ID | 现编号 | 标题 | 状态 | 最后核实 |
| --- | --- | --- | --- | --- |
| agent-what-why | 第 1 章 | 是什么/为什么 | ✅ | 2026-07-07 |
| agent-components | 第 2 章 | 核心组件 | ✅ | 2026-07-07 |
| agent-orchestration | 第 3 章 | 编排模式 | ✅ | 2026-07-07 |
| agent-tools-mcp | 第 4 章 | 工具接入与 MCP | ✅ | 2026-07-07 |
| agent-context | 第 5 章 | 上下文工程 | ✅ | 2026-07-07 |
| agent-eval-guardrails | 第 6 章 | 评估与护栏 | ✅ | 2026-07-07 |
| agent-lowcode | 第 7 章 | 低代码 Agent 平台（Coze/Dify/n8n/HiAgent 与 code-first 边界） | ✅ | 2026-07-10 |
| agent-memory | 第 8 章 | 记忆系统（四种记忆分层 / 框架四强 / 记忆投毒 ASI06） | ✅ | 2026-07-11 |
| agent-computer-use | 第 9 章 | Computer Use 与 GUI Agent（三路线 / 基准两口径 / RPA 混合 / 安全四件） | ✅ | 2026-07-11 |
| agent-subagent | 第 10 章 | 多智能体 / Sub-agent 编排（三层框架 / 三性质 / CC·Codex 实操 / 四层触发 / 决策账） | ✅ | 2026-07-17 |
| agent-cheatsheet | 第 11 章 | 售前速查（高频问题 / 启用条件决策树 / 串联地图；替代原全书串联页） | ✅ | 2026-07-11 |

## 时效性事实（巡检盘查对象）
| 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MCP 现行规范 2026-07-28（无状态核心，server 可像普通无状态 Web 服务扩容）；2025-11-25 进入兼容期，弃用到移除至少十二个月 | agent-tools-mcp | 2026-07-30 | modelcontextprotocol.io/specification/2026-07-28/changelog | 2027-01-31 | A | 90 | 规范版本口径，不代表各家 SDK 与服务端已跟上新版 |
| A2A v1.0 于 2026-03-12 发布（当前补丁 v1.0.1，2026-05-28），150+ 组织采用 | agent-tools-mcp | 2026-07-12 | github.com/a2aproject/A2A/releases、Linux Foundation 公告 | — | A | 90 | 采用规模为公告口径，不等于已生产落地的数量 |
| Microsoft Agent Framework 1.0 GA（2026-04-03，.NET/Python 生产可用；Go 版仍 public preview），合并 AutoGen 与 Semantic Kernel | agent-orchestration | 2026-07-12 | 微软官方公告、learn.microsoft.com/agent-framework | — | A | 90 | GA 只覆盖 .NET/Python，Go 版能力别照搬 |
| 生产可用框架短名单：LangGraph、Claude Agent SDK、OpenAI Agents SDK、Google ADK、MS Agent Framework | agent-orchestration | 2026-07-07 | 2026 多方对比评测 | — | B | 90 | 评测汇总的短名单，不等于你的场景已验证可用 |
| 框架成熟度锚点：OpenAI Agents SDK 仍 0.x（Python v0.18.2，2026-07-11）；LangGraph 已过 1.0（v1.2.9，2026-07-10）——「短名单都能用，但 API 稳定性承诺不同」 | agent-orchestration | 2026-07-12 | GitHub releases（openai-agents-python、langgraph） | — | A | 90 | 版本号按周漂，报稳定性承诺前重新核；0.x 不等于不可用 |
| OWASP Top 10 for Agentic Applications 2026 为 agent 安全行业标准清单 | agent-eval-guardrails | 2026-07-07 | genai.owasp.org | — | A | 90 | 清单是风险目录，不是完整防护方案或合规认证 |
| 评估/可观测平台格局：LangSmith、Langfuse、Arize Phoenix、W&B Weave；τ-bench 用 pass^k | agent-eval-guardrails | 2026-07-07 | 各官方文档 | — | A | 90 | 工具格局清单，不代表四家能力等价或适配你的栈 |
| Coze Studio 开源（2025-07，Apache 2.0）：21.1k stars、V0.5.1（2026-02）；SaaS 扣子 3.0（2026-06）多人多 Agent 协作 | agent-lowcode | 2026-07-10 | github.com/coze-dev/coze-studio / 36kr | — | B | 90 | 开源版画像不等于 SaaS 扣子能力；stars 与版本会漂 |
| Dify：151k stars、v1.16.1（2026-07-28）；v1.16.0（2026-07-17）起 Dify Agent 进入 Open Beta（内置代码沙箱 + 技能系统，默认对全员启用，产品定位从 LLM 应用底座向 agent 运行时延伸）；许可证 = Apache 2.0 + 附加条款（多租户 SaaS / 去 logo 需商业授权） | agent-lowcode | 2026-08-01 | github.com/langgenius/dify/releases（v1.16.0/v1.16.1 发布说明）、GitHub API stars 实查 | 2026-10-31 | A | 90 | Open Beta 不是正式版能力承诺；stars 与版本按周漂 |
| n8n：~127k stars；Sustainable Use License（fair-code，不得转售）；2025-10 融资 $180M（Accel/NVIDIA 参投），估值 ~$2.5B | agent-lowcode | 2026-07-10 | docs.n8n.io / 融资报道 | — | B | 90 | fair-code 转售受限但非 OSI 开源；估值为报道口径 |
| HiAgent 2.0 主打数字员工治理；火山引擎居中国智能体开发平台私有化 17.8% / 公有云 19.3% 双第一（IDC 口径） | agent-lowcode | 2026-07-10 | volcengine.com / IDC 报道 | — | B | 30 | 份额为 IDC 口径快照，不等于产品能力或长期领先 |
| 低代码选型共识：问答→Dify、集成→n8n、对话 bot→Coze、私有化+治理→HiAgent 类；生产范式 = 平台做壳、复杂节点下沉代码 | agent-lowcode | 2026-07-10 | jimmysong.io / meterra 2026 横评 | — | B | 90 | 横评共识是起点不是硬边界，平台能力会互相补齐 |
| 记忆框架四强：Mem0（托管最快、47K+ stars、向量+图+KV）/ Letta 前 MemGPT（OS 式内存块）/ Zep（时序知识图谱，自报 LoCoMo 94.7%）/ LangMem（LangGraph 原生）；生产模式 = 小核心常驻 + 检索层 + 遗忘策略 | agent-memory | 2026-07-11 | vectorize / evermind / jobsbyculture 2026 横评 | — | B | 90 | Zep 94.7% 为自报口径，非第三方复现的可比分 |
| 记忆投毒：OWASP Agentic Top 10 于 2026 新增 ASI06；MINJA 注入成功率 >95%、多研究报 80–99.8%；防线 = 写入过滤/任务间清理/鉴权审计 | agent-memory | 2026-07-11 | arXiv 2601.05504 / 2607.06595 / beyondscale | — | B | 90 | 研究环境成功率，不等于带三道防线后的生产命中率 |
| Computer Use 三路线：Claude（截图+鼠键全桌面）/ Gemini（DOM 感知浏览器）/ OpenAI Codex Background CU（2026-04-16，macOS 并行）；开源代表 Browser Use；Claude Cowork 2026-03-23 上线 | agent-computer-use | 2026-07-11 | digitalapplied 2026 对比矩阵 / particula | — | B | 90 | 路线划分不代表三家能力可互换或都覆盖你的场景 |
| CU 基准两口径：Opus 4.8 OSWorld-Verified 83.5%（2024 年起步 14.9%）；OSWorld 2.0 长程仅 20.6%；OpenAI CUA WebVoyager 87% / OSWorld 38.1%——基准 ≠ 生产就绪 | agent-computer-use | 2026-07-11 | coasty 榜 / arXiv 2606.29537 | — | B | 90 | 受控任务集分数，不等于你的桌面流程能跑通 |
| Claude Code sub-agent 机制：`.claude/agents/*.md`（name/description 必填，tools/model 等可选）；内置 Explore / Plan / general-purpose；嵌套深度默认 3 层、环境变量 `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH` 可配（v2.1.219 起；曾在 v2.1.172–216 固定 5 层不可配，v2.1.217–218 默认 1 层）；v2.1.198 起默认后台运行、`/agents` 交互向导移除；skill 可绑 `context: fork` 强制在 sub-agent 里跑 | agent-subagent | 2026-08-01 | code.claude.com/docs/en/sub-agents（Let subagents spawn their own subagents 节） | 2026-10-31 | A | 90 | 默认值随版本变（曾固定 5 层），旧版行为别照搬 |
| Codex sub-agent：当前版本默认启用；内置 explorer / worker / default；`.codex/agents/*.toml`（name/description/developer_instructions 必填）；agents.max_threads 默认 6、agents.max_depth 默认 1；spawn_agents_on_csv（CSV 一行一工人）为实验特性 | agent-subagent | 2026-07-17 | developers.openai.com/codex/subagents | — | A | 90 | 默认值与实验特性随版本变，配置前核当日文档 |
| Anthropic 多 agent 研究系统：比单 agent Opus 4 高 90.2%；agent ≈ 4×、multi-agent ≈ 15× token；token 用量单因素解释 80% 性能方差（BrowseComp）；复杂查询典型并行 3–5 个子 agent，研究时长最多压缩 90% | agent-subagent | 2026-07-17 | anthropic.com/engineering/built-multi-agent-research-system | — | B | 90 | 内部评测口径，不能外推为任意任务的收益承诺 |

## 串联出边
| 本模块章节 | 指向 | 关系 |
| --- | --- | --- |
| agent-eval-guardrails | ai-governance#gov-risk-tiering | 反向回指（2026-08-02 新模块建立）：自主度是组织风险分层的一根轴；自主度的技术形态与控权手段在 Agent 与 Security，本册只规定从「给建 |
| agent-context | pe#pe-advanced-reasoning | 上下文工程 / ReAct 是提示词技巧在工具循环里的应用；讲义已加「与 Prompt Engineering 的关系」页回指 |
| agent-tools-mcp | mcp#mcp-what-why | Agent 第 4 章讲 MCP 概览，协议细节深入见 MCP 模块 |
| agent-context | rag#rag-agentic | Agent 第 5 章"与 RAG 的握手" ↔ RAG 第 8 章，双向互引 |
| agent-eval-guardrails | evaluation#eval-scenarios | agent 评估（turn/milestone/trajectory）已在 Evaluation 第 6 章场景验收展开（原「候选」于 2026-07-10 补实） |
| agent-tools-mcp | a2a#a2a-what-why | Agent 第 4 章提及 A2A（v1.0）；跨厂商 Agent 协作的协议细节深入见 A2A 模块 |
| agent-context | llm#llm-inference-kv | 上下文工程的架构根源（O(n²) 成本 + KV 缓存 + 有效窗口）见 LLM 原理第 4 章 |
| agent-components | multimodal#mm-what-why | 多模态感知让 agent「能看」屏幕 / 图表，是 computer use 的前提；第 2 章已加「多模态感知」串联页回指（2026-07-10），护栏侧接 multimodal#mm-production |
| agent-lowcode | mcp#mcp-what-why | 四平台都在补 MCP 支持（工具接入标准化），协议细节见 MCP 模块 |
| agent-lowcode | rag#rag-pipeline | Dify 内置 RAG = RAG 第 6 章最小管线的产品化，配知识库即建库 |
| agent-lowcode | multimodal#mm-voice-realtime | 平台搭的客服 bot 要上语音时，实时链路工程（延迟/打断/RTC）见 Multimodal 第 8 章 |
| agent-lowcode | solution-patterns#sp-cheatsheet | 平台是各场景方案的落地工具层；「有没有平台」在 Solution-Patterns 分诊树中指回本章（模块 2026-07-10 建成，原「候选」补实） |
| agent-memory | security#sec-agentic / rag#rag-what-why | 记忆投毒防线与 Security 第 5 章「记忆投毒」同源展开；记忆 vs RAG 边界 = 用户交互史 vs 组织知识 |
| agent-computer-use | multimodal#mm-what-why / security#sec-prompt-injection | 视觉感知是 CU 前提（第 2 章串联页已埋"computer use 前提"）；屏幕内容 = 新注入面 |
| agent-subagent | agent#agent-orchestration | 模块内串联：orchestrator-workers 是模式（蓝图），sub-agent 是 coding agent 产品里的机制（车间）；两章互指 |
| agent-subagent | agent#agent-context | 模块内串联：上下文隔离是第 5 章「子 agent」板斧的机制展开；任务书自包含 = 上下文工程纪律 |
| agent-cheatsheet | （全库） | 启用条件决策树与串联地图；替代 v1.0 全书串联页（旧页随 2026-07-11 历史版本存档） |
