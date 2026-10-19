# Evaluation · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | evaluation |
| 所在层 | 工程保障层 |
| 主导关系 | 三层评估的分工——读者带来的问题几乎总是同一句：「哪个模型最好」「这套系统到底好不好用」。 |
| 建立日期 | 2026-07-09 |
| 最后更新 | 2026-10-20 到期事实复核：成立 2 条回写日期、已变 7 条三处同步（要点：MMLU-Pro 前十 86.7–89.6%；GPQA 前十差 2.5 分；Terminal-Bench 迭代至 4.0；SWE-bench 头部格局换代；Arena 累计 6200 万票、B 轮估值 31 亿美元；promptfoo 红队 157 插件、Ragas 扩为通用评估；云服务改名 Microsoft Foundry／Gemini Enterprise Agent Platform）；另按官方原文改正 OpenAI Evals 行边界（看板与 API 一并关停）；2026-08-02 网页版增补「上云怎么落地」（Codex 对照库借鉴第 3 步·回流批）：新增 `#cloud` 小节（结构性小节，与 qa/related/sources 同类，不进章节清单）……；讲义 100 页；完整更新记录见 [raw-data/更新记录.md](raw-data/更新记录.md) |
| 产出 skill 版本 | v3.0 |

## 章节清单
| 章节 ID | 现编号 | 标题 | 状态 | 最后核实 |
| --- | --- | --- | --- | --- |
| eval-why-hard | 第 1 章 | 为什么评估这么难 | ✅ | 2026-07-09 |
| eval-benchmarks | 第 2 章 | 模型基准测试全景 | ✅ | 2026-07-09 |
| eval-methods | 第 3 章 | 评估方法谱系 | ✅ | 2026-07-09 |
| eval-judge | 第 4 章 | LLM-as-a-Judge 深潜 | ✅ | 2026-07-09 |
| eval-build | 第 5 章 | 自建评估:数据集与指标设计 | ✅ | 2026-07-09 |
| eval-scenarios | 第 6 章 | 场景验收:RAG / Agent / 微调 | ✅ | 2026-07-09 |
| eval-tooling | 第 7 章 | 评估工具链与生产闭环 | ✅ | 2026-07-09 |
| eval-cheatsheet | 第 8 章 | 售前速查 | ✅ | 2026-07-09 |

## 时效性事实（巡检盘查对象）
| 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MMLU / MMLU-Pro 已功能性饱和，前沿模型集中在约 87–90%（BenchLM 2026-10-19 榜 MMLU-Pro 前十 86.7–89.6%），顶部区分度很低 | eval-benchmarks | 2026-10-20 | benchlm.ai/benchmarks/mmluPro（2026-10-20 逐字核对） | — | B | 90 | 顶部饱和不代表中小模型或垂直任务上也无区分度 |
| GPQA Diamond 头部：GPT-6 Astra 96.0 居首；其后 Sakana Fugu-Ultra 与 Fugu 并列 95.5 / GPT-5.6 Sol 94.6 / Gemini 3.1 Pro 94.3 / Claude Opus 4.7 94.2，前十差距 2.5 分、区分度收窄（BenchLM 2026-10-19 榜口径；各榜互差约 1 分） | eval-benchmarks | 2026-10-20 | benchlm.ai/benchmarks/gpqa-diamond（2026-10-20 逐字核对） | — | B | 30 | 单榜快照，2.5 分不足以判优劣；榜首月级换血 |
| HLE 前沿模型约 45~65%（llm-stats 与 BenchLM 2026-09 榜首同为 65.0/65，均为 Claude Fable 5.1；带工具/纯文本各榜口径不一）；「人类专家约 90%」在 HLE 论文正文查无此数，已删；仍是区分度最好的知识型基准之一 | eval-benchmarks | 2026-10-20 | llm-stats.com/benchmarks/humanity's-last-exam（2026-10-20 逐字核对）；benchlm.ai/benchmarks/hle | — | B | 30 | 带工具与纯文本口径不同，两组数字不可直接相比 |
| Agent 基准主战场：SWE-bench Verified / Terminal-Bench（2026-05-06 的 2.1 修订版修复 28 题；2026-07-30 出 3.0、2026-08-28 出 4.0，已转为持续维护、语义化版本）/ τ²-bench / OSWorld；BFCL v4（2026-04）改 Agentic 加权 40% | eval-benchmarks | 2026-10-20 | www.tbench.ai/news（2026-10-20 逐字核对）；arXiv 2601.11868；建议复查 2026-11-01 | — | A | 90 | 基准清单不含分数，也不代表覆盖你的业务任务面 |
| 2026-10 头部格局：Claude Opus 5（2026-07-24 发布）仍以 96% 领跑 SWE-bench Verified（BenchLM 2026-10-19 榜；该榜已把此基准移出加权总分、仅作参考）；此后各家已再换代——Anthropic 出 Opus 5.5 / Fable 5.1，OpenAI 出 GPT-6 Astra / GPT-6.1 Sol，Google 出 Gemini 4 Argon / 3.8 Flash，GPT-5.6、GPT-5.5 仍现役；OpenAI 2026-02-23 以污染为由停报 SWE-bench Verified、改推 SWE-bench Pro，又于 2026-07-08 官方撤回该推荐（约 30% 任务损坏） | eval-benchmarks | 2026-10-20 | benchlm.ai/benchmarks/sweVerified（2026-10-20 逐字核对）；anthropic.com/news/claude-opus-5；openai.com/index/why-we-no-longer-evaluate-swe-bench-verified / OpenAI 官方 X（2026-07-08 撤荐声明） | — | B | 30 | 第三方榜快照，且该榜有污染争议，不等于工程实力 |
| Chatbot Arena → LMArena → Arena（2026-01 更名），累计 6200 万票（覆盖文本/视觉/代码/搜索/视频/图像），2026-10-08 B 轮融资 2 亿美元、估值 31 亿美元 | eval-benchmarks | 2026-10-20 | arena.ai/blog/series-b（2026-10-20 逐字核对） | — | B | 90 | 累计票数与估值是平台自报，不证榜单结果的统计效力 |
| 《The Leaderboard Illusion》(2025):厂商私测多变体择优公开,曾有厂商私测 27 变体只公开最优 | eval-benchmarks | 2026-07-09 | arXiv 2504.20879 / openreview | — | A | 180 | 不等于榜单造假，只是应试优化成分的证据 |
| 判官三大偏差:位置(换序判决漂移 >10%)、冗长(无新信息加长版被偏好 >90%)、自我偏好(与困惑度相关) | eval-judge | 2026-07-09 | arXiv 2306.05685 / 2410.21819 / 2410.02736 | — | A | 180 | 漂移幅度随任务与模型而异，不能照搬到自家判官 |
| Judge Reliability Harness(2026-03 开源)结论:无判官全面可靠,可靠性是逐任务属性 | eval-judge | 2026-07-09 | adaline / emergentmind 2026 | — | B | 180 | 不给出你任务上的判官一致率，仍要自测校准 |
| 开发期开源框架格局：Ragas（RAG 起家，现自称通用 LLM 应用评估）/ DeepEval（50+ 指标，pytest CI）/ promptfoo（矩阵+红队 150+ 插件） | eval-tooling | 2026-10-20 | www.promptfoo.dev/docs/red-team/plugins/（2026-10-20 逐字核对）；deepeval.com/docs/metrics-introduction；github.com/vibrantlabsai/ragas | — | B | 90 | 指标与插件条数随版本变，选型前按官方文档点数 |
| OpenAI 平台内置 Evals:2026-10-31 起只读,2026-11-30 关停 | eval-tooling | 2026-10-20 | developers.openai.com/api/docs/deprecations（2026-10-20 逐字核对） | 2026-10-31 | A | 90 | 官方写明 Evals 看板与 API 一并关停，不能推及其他 API |
| 三大云托管评估服务：AWS Bedrock 模型评估作业 / Microsoft Foundry（原 Azure AI Foundry）内置评估器 / Google Gen AI 评估服务（归属 Gemini Enterprise Agent Platform，原 Vertex AI） | eval-tooling | 2026-10-20 | learn.microsoft.com/en-us/azure/ai-foundry/concepts/observability（2026-10-20 逐字核对）；docs.aws.amazon.com/bedrock/latest/userguide/evaluation.html；docs.cloud.google.com/vertex-ai/generative-ai/docs/models/evaluation-overview | — | B | 90 | 只证三家都有该服务，能力与配额不可互相套用 |

## 串联出边
| 本模块章节 | 指向 | 关系 |
| --- | --- | --- |
| eval-build | predictive-ai-mlops#pam-problem-framing | 反向回指（2026-08-02 新模块建立）：对照关系：Evaluation 讲没有客观真值时怎么建集、怎么判分，本册讲有客观真值时指标怎么挑、离线指标涨了业 |
| eval-build | ai-governance#gov-evidence | 反向回指（2026-08-02 新模块建立）：证据包里「测过什么、结果多少」由 Evaluation 产出；本册只规定哪一档用途必须附哪几类测量证据、证据绑到 |
| eval-methods | pe#pe-engineering | 提示词的评估驱动优化用本模块判分四法 / LLM-as-a-Judge；讲义已加「与 Prompt Engineering 的关系」页回指 |
| eval-scenarios | rag#rag-eval | RAG 检索质量指标在本模块收编为「场景验收」并补全端到端方法 |
| eval-scenarios | agent#agent-eval | Agent「评估与护栏」提出「要评」,本模块给出轨迹/结果分层的「怎么评」 |
| eval-scenarios | fine-tuning#ft-eval-deploy | 微调验收四层与回归门禁在本模块展开成完整验收方案 |
| eval-benchmarks | llm-training#评估章 | 模型厂「炼模型时评什么」vs 应用方「选模型时评什么」,视角互补 |
| eval-why-hard | llm-inference#性能指标 | 边界声明:质量归本模块,延迟/吞吐归 LLM-Inference |
| eval-scenarios | security#sec-defense | 安全维度验收(注入抵抗率、有害内容率)由 Security 模块第 6 章红队产出并回流,候选边已兑现(2026-07-09) |
| eval-benchmarks | model-landscape#ml-selection | 本模块讲"榜单怎么骗人/怎么自建评估",Model-Landscape 第 8 章把它用作选型两道防线——双向互指(2026-07-10) |
| eval-build / eval-judge | ai-ops#ops-online-eval | 全库最强新搭档:本模块给离线建集与判官方法,AI-Ops 第 3 章做在线采样运营(共享判分器定义)——双向互指(2026-07-10) |
