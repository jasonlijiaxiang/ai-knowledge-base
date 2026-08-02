# AI-Ops · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | ai-ops |
| 所在层 | 工程保障层 |
| 建立日期 | 2026-07-10 |
| 最后更新 | 2026-07-15（呈现修复：配图曾插入 5 张信息图但未删被替代的纯文字源页，形成 5 对同题「文字版+信息图版」重复，本次删源页保留信息图版，配图后 75→70 页；同类缺陷波及全库多册）；2026-07-12（B 类：引用 _reference/Codex 对照库,澄清 Phoenix 许可、补 OTLP 分轨与平台版本锚点；07-13 两件套吸收：增四层版本键深潜 + 观测体系验收页，67→69 页）；2026-07-17 呈现完善：全册末新增「来源与核实」页（关键信源一览 + 核实窗口，补齐收尾四件套），70→71 页；2026-07-17 呈现统一：全册章眉统一为青色加粗（#128199，对齐配图页样式；用户发现正文页与配图页眉题两套字体并存），无内容变更；2026-07-20 呈现完善：按新语言策略（缩写型术语首次出现展开英文全称，全角逗号格式，译名视语境）存量回刷，补 10 处、零增删页，清单见 raw-data/2026-07-20-术语全称回刷清单.md，audit PASS；2026-07-20 书单订正：撤馆藏回写出处时填错的链接已逐条重新核实（详见 _maintenance/2026-07-20-原电子书馆藏出处存档.md 订正说明）；2026-07-21 网页版落地（第七批，与 Multimodal、Solution-Patterns 同批）：`Web-version/ai-ops/index.html`，覆盖与缺口矩阵存 raw-data/2026-07-21；网页版新增「观测成本与采样规划器」（交互件，五输入出月遥测量/评估条数/存量与采样保留建议，系数全部来自第 1/2/3 章），未引入新事实——事实级 0、缺口级 0，无回流欠账；2026-07-23 网页版增补（发布章增「金丝雀 vs A/B vs 环境隔离」、工具章增「云内置评估分界」；两面事实同源，PPTX 未改，PPT 侧回流待办见 _maintenance/2026-07-23-知识点对照与串联-设计.md）；2026-07-23 内容打磨（网页版·客户交锋视角，批二）：新立 3 题（能承诺什么 SLO·可用性轴照签质量轴签「不跌破/发现得了/止得住」/换模型或换观测平台是否重做·埋点是客户资产/「观测做到位」怎么验收·签一次回放不签截图）+ 3 处机制（能签与不能签先分清、换后端那天什么带得走、当场验收怎么演）+ 纠 1 处（「六个可」发布顺序写成影子→金丝雀→门禁，与本页第 5 章「不过线没有金丝雀资格」及流水线图自相矛盾，已改为门禁在前）。**零新增事实**（数字均本册既有，经 check_new_numbers.py 确认无 ⚠）。判据与八战场见 _maintenance/2026-07-23-全库内容打磨-执行口径.md。PPTX 未改；2026-08-01 巡检刷新（B 类，两面同批）：OTel GenAI 口径反转——「gen_ai.client 已稳定（2026 年初出实验期）」与现状相反，改为「2026-06-12（semconv v1.42.0）起全部 gen_ai.* 迁入独立仓 semantic-conventions-genai、整体仍 Development、无一 Stable、新仓未发正式版」，「封装一层再用」升为硬要求；讲义改 5 页（放映序 p2 导览 / p12 学习目标 / p13 span 四类表与要点 / p17 对练 / p18 小结，zip 级文字手术、零增删页、audit PASS），网页版第 2 章导语、qa-next、核实窗口徽标与来源表同批改；版本锚点回写 Langfuse v3.212.0→v4 线（v4.2.0 2026-07-31；core MIT + ee/ 除外结构在 v4 原样，ClickHouse 归属与开源线承诺复核成立）、MLflow v3.14.0→v3.15.0（2026-07-31）——版本号仅记 MANIFEST，两面正文不带；来源笔记 raw-data/2026-08-01-巡检刷新-来源笔记.md，旧版存 history/2026-08-01 |
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
| ops-online-eval | evaluation#eval-build / evaluation#eval-judge | 全库最强新搭档：离线建集与判官方法在那边，在线采样运营在本模块——共享判分器定义（双向） |
| ops-what-why / ops-tracing | ai-gateway#gw-observe | 网关是数据源与统一采集层，本模块是消费与行动层；trace id 两层贯通（双向） |
| ops-incident | security#sec-defense / security#sec-agentic | 「被攻破了怎么办」的防护弹药在 Security；注入检测与工具权限急冻同源 |
| ops-release | pe#pe-engineering | 提示词版本化在 PE 第 5 章点过，本模块升级为发布工程（注册表/门禁/金丝雀） |
| ops-cheatsheet | solution-patterns#sp-method | 运营包五件套 = SP「人力账」的展开：那边说要卖，这边说卖什么、怎么定 SLA（双向） |
| ops-drift | model-landscape#ml-selection | 换模型/供应商静默更新的回归验证是「保持可换」的运维面 |
| ops-what-why | ai-infra-platform#aip-observability | 边界声明：GPU/集群层可观测归 Infra-Platform，应用与质量层归本模块 |
