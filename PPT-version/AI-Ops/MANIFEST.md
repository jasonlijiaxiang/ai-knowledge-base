# AI-Ops · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | ai-ops |
| 所在层 | 工程保障层 |
| 主导关系 | 静默退化的闭环——读者带着「我怎么证明这套 AI 应用还在好好干活、这钱花得值」来。 |
| 建立日期 | 2026-07-10 |
| 最后更新 | 2026-08-02 上云落点覆盖判定（Codex 对照库借鉴第 3 步）：本册不设 `#cloud` 小节——网页版第 7 节「工具格局与选型」里已有同一张云能力表（h3「云上都有了，为什么还要你？——讲清那条分界」，……；讲义 71 页；完整更新记录见 [raw-data/更新记录.md](raw-data/更新记录.md) |
| 产出 skill 版本 | v3.0 |

> 边界纪律（模块设计约束）：网关计量引 ai-gateway#gw-observe、离线评估方法引 evaluation、
> GPU 利用率引 ai-infra-platform#aip-observability——本模块只讲三片之间的「生命周期线」。

## 章节清单
| 章节 ID | 现编号 | 标题 | 状态 | 最后核实 |
| --- | --- | --- | --- | --- |
| ops-what-why | 第 1 章 | 为什么 LLM 应用的 Ops 是新学科（两根新轴 / 静默退化 / 边界地图 / 观测成本） | ✅ | 2026-07-10 |
| ops-tracing | 第 2 章 | Tracing 与 OTel GenAI 深潜（span 四类 / trace 旅程 / PII 三开关） | ✅ | 2026-08-01 |
| ops-online-eval | 第 3 章 | 在线评估与反馈回流（采样异步打分 / 评估漏斗 / 闭环三件套） | ✅ | 2026-07-10 |
| ops-drift | 第 4 章 | 漂移与静默退化监测（三类漂移 / 检测组合拳 / 巡检节奏） | ✅ | 2026-07-10 |
| ops-release | 第 5 章 | 发布管理（版本注册表 / 评估门禁 / 金丝雀 / 回滚 / 环境与 A/B） | ✅ | 2026-07-10 |
| ops-incident | 第 6 章 | 事故响应（AI runbook 四问 / 急停 / HITL 分级 / 事故分级 SLA） | ✅ | 2026-07-10 |
| ops-tooling | 第 7 章 | 工具格局与选型（六平台 / Braintrust · AgentOps / APM vs 专用 / 上云） | ✅ | 2026-08-01 |
| ops-cheatsheet | 第 8 章 | 售前速查（运营包五件套 / 指标速查 / 选型卡 / 串联地图） | ✅ | 2026-07-10 |

## 时效性事实（巡检盘查对象）
| 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| OTel GenAI 语义约定 2026-06-12（semconv v1.42.0）起全部 gen_ai.* span/指标/事件迁入独立仓 semantic-conventions-genai，主仓对应定义弃用；整体仍 Development、无一 Stable，新仓尚未发正式版；四类 span（agent/workflow/tool/model）实践已稳但命名仍可能变——「封装一层再用」升为硬要求（建议复查日 2026-10-31，随季度巡检） | ops-tracing | 2026-08-01 | github.com/open-telemetry/semantic-conventions v1.42.0 release notes / github.com/open-telemetry/semantic-conventions-genai（docs/gen-ai 状态徽标均 Development、releases 页为空） | 2026-10-31 | A | 90 | 整体仍 Development，属性命名可能再变，不能当稳定字段直接落库 |
| OTLP 规范 1.10.0：Trace/Metric/Log 三信号 Stable（profiles 仍开发中）——与 GenAI 语义约定的 Development 状态是两条轨，售前别混谈 | ops-tracing | 2026-07-12 | opentelemetry.io/docs/specs/otlp/ | — | A | 90 | OTLP 稳定不等于 GenAI 语义约定稳定，profiles 仍在开发 |
| 平台许可证与版本锚点：Phoenix 主仓 ELv2（限托管转售，沿 07-12 核实）；Langfuse 已切 v4 大版本线（v4.0.0 2026-07-29 破坏性升级，最新 v4.2.0 2026-07-31；core MIT、ee/ 目录除外的许可结构在 v4 原样保留）；MLflow v3.15.0（2026-07-31，Apache-2.0） | ops-tooling | 2026-08-01 | GitHub releases（langfuse/langfuse、mlflow/mlflow）+ langfuse README 许可节；Phoenix 未复核沿旧记录 | — | A | 90 | Phoenix 一行沿旧记录未复核，版本号周级跳，引用前重核 |
| 六平台锚定：LangSmith（LangChain 原生）/ Langfuse（开源领袖，2026-01 被 ClickHouse 收购、开源线维护不变——v4 后 core 仍 MIT、README 明写归属 ClickHouse 且在持续招聘，2026-08-01 复核成立）/ Arize Phoenix（漂移与嵌入分析）/ Helicone（drop-in 代理）/ Datadog LLM Obs / Honeycomb | ops-tooling | 2026-07-10 | digitalapplied / latitude / laminar 2026 横评；github.com/langfuse/langfuse README（Langfuse 行 2026-08-01 复核） | — | B | 90 | 第三方横评的格局排位，并购整合快，不代表当下归属与能力 |
| Braintrust（观测评估一体，免费档 1M span/月 + 10K eval）；AgentOps（会话回放 time-travel debugging、无限循环检测） | ops-tooling | 2026-07-10 | braintrust.dev / github.com/agentops-ai | — | A | 30 | 免费档配额是官网当日口径，不能当长期承诺或容量规划依据 |
| APM 系 vs 专用系分工共识：Datadog 类管 token 成本与延迟够用；输出质量评估/漂移/评审队列需专用工具 | ops-tooling | 2026-07-10 | confident-ai / techsy 2026 对比 | — | B | 90 | 分工共识按当前产品能力划线，不代表 APM 侧永远补不上质量评估 |
| 观测成本：RAG 管线遥测量为等价传统 API 的 10–50 倍；接入 AI 负载后 APM 账单普遍 +40–200% | ops-what-why | 2026-07-10 | oneuptime 2026-04 | — | B | 180 | 区间是行业经验值，自家账单要按真实 span 量与计费口径实测 |
| 在线评估实践口径：采样 5–10% 真实流量、异步打分零应用时延；低分 trace 标注失败模式→晋升进回归集（dataset promotion）；闭环三件套 = 告警/评审队列/数据集晋升 | ops-online-eval | 2026-07-10 | braintrust.dev / towardsai 2026-04 | — | B | 180 | 实践区间不是各家默认配置，采样率要按流量与预算自校 |
| 漂移三类：供应商静默换 checkpoint（上月测的≠这月答的）/ 输出漂移 / 性能漂移；检测靠嵌入距离 + judge 持续打分 + 回归集重跑 | ops-drift | 2026-07-10 | stackpulsar / galileo 2026 | — | B | 180 | 只给分类法与检测思路，不含阈值，阈值要按自家基线定 |
| 发布管理成熟形态：版本注册表 + 评估门禁 + 金丝雀 5–10% 流量；LLM 金丝雀与传统的关键差异 = 必须在金丝雀流量上跑自动评估；回滚 = 改配置指针非重部署 | ops-release | 2026-07-10 | tianpan.co 2026-03 / arthur.ai / calmops | — | B | 180 | 5–10% 金丝雀比例是惯例不是硬标准，按风险与流量规模调 |
| 事故响应：成本尖峰常是第一信号（死循环/注入先表现为 token 暴涨）；急停开关（停任务不砸状态）；HITL 三分级（in/on/out-of-the-loop） | ops-incident | 2026-07-10 | zylos 2026-03 SRE-AI / deepinspect | — | B | 180 | 经验法则，不代表所有 LLM 事故都先表现为 token 暴涨 |

## 稳定事实（不会过期，无需巡检）
| 事实 | 章节 ID | 说明 |
| --- | --- | --- |
| 两根新轴（质量/token 成本）、评估漏斗四级、运营包五件套框架、AI runbook 四问 | 各章 | 方法论骨架，比工具名保值 |

## 串联出边
| 本模块章节 | 指向 | 关系 |
| --- | --- | --- |
| ops-drift | predictive-ai-mlops#pam-monitoring | 反向回指（2026-08-02 新模块建立）：同名不同物，最需要互指的一条：那边的漂移发生在没有客观真值的生成式应用上（供应商静默换权重、输出漂移），本册的漂 |
| ops-release | predictive-ai-mlops#pam-lifecycle | 反向回指（2026-08-02 新模块建立）：发布门的骨架（门禁在前、影子、金丝雀、回滚是切指针）两边共用，不重讲；本册只补预测式独有的两点——可以双跑逐条对 |
| ops-drift | ai-governance#gov-change-triggers | 反向回指（2026-08-02 新模块建立）：供应商静默换 checkpoint 与三类漂移由 AI-Ops 监测；本册把这些告警接成「重新决定」的触发口，规 |
| ops-incident | ai-governance#gov-decision | 反向回指（2026-08-02 新模块建立）：暂停一个用途的技术动作（急停、回滚指针）在 AI-Ops 第 6 章；本册管谁有权按下、按下之后走什么复核路径、 |
| ops-online-eval | evaluation#eval-build / evaluation#eval-judge | 全库最强新搭档：离线建集与判官方法在那边，在线采样运营在本模块——共享判分器定义（双向） |
| ops-what-why / ops-tracing | ai-gateway#gw-observe | 网关是数据源与统一采集层，本模块是消费与行动层；trace id 两层贯通（双向） |
| ops-incident | security#sec-defense / security#sec-agentic | 「被攻破了怎么办」的防护弹药在 Security；注入检测与工具权限急冻同源 |
| ops-release | pe#pe-engineering | 提示词版本化在 PE 第 5 章点过，本模块升级为发布工程（注册表/门禁/金丝雀） |
| ops-cheatsheet | solution-patterns#sp-method | 运营包五件套 = SP「人力账」的展开：那边说要卖，这边说卖什么、怎么定 SLA（双向） |
| ops-drift | model-landscape#ml-selection | 换模型/供应商静默更新的回归验证是「保持可换」的运维面 |
| ops-what-why | ai-infra-platform#aip-observability | 边界声明：GPU/集群层可观测归 Infra-Platform，应用与质量层归本模块 |
