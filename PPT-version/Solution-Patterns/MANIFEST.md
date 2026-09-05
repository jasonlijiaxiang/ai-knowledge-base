# Solution-Patterns · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | solution-patterns |
| 所在层 | 解决方案层（2026-07-10 层调整：自应用模式层迁入，与 Model-Landscape 同层） |
| 主导关系 | 场景配积木——读者是售前，客户开口永远是业务话（「我的客服能不能少雇十个人」），他要的是把这句话当场翻成一张积木清单、一个成本量级和一句口径提醒。 |
| 建立日期 | 2026-07-10 |
| 最后更新 | 2026-08-02 网页版增补「上云怎么落地」（Codex 对照库借鉴第 3 步·回流批）：新增 `#cloud` 小节（结构性小节，与 qa/related/sources 同类，不进章节清单）……；讲义 101 页；完整更新记录见 [raw-data/更新记录.md](raw-data/更新记录.md) |
| 产出 skill 版本 | v3.0 |

## 章节清单
| 章节 ID | 现编号 | 标题 | 状态 | 最后核实 |
| --- | --- | --- | --- | --- |
| sp-what-why | 第 1 章 | 从技术轴到场景轴（方案 = 场景 × 积木） | ✅ | 2026-07-10 |
| sp-method | 第 2 章 | 方案共性方法（五层架构 / POC 三要素 / 三本账 / 口径鉴别） | ✅ | 2026-07-10 |
| sp-customer-service | 第 3 章 | 智能客服（三层漏斗 / 解决率口径 / 语音客服） | ✅ | 2026-07-10 |
| sp-knowledge-search | 第 4 章 | 企业知识库与 AI 搜索（权限命门 / Glean 模式） | ✅ | 2026-07-10 |
| sp-content-gen | 第 5 章 | 营销与内容生成（品牌工程 / 商业安全 / 人审） | ✅ | 2026-07-10 |
| sp-ai-coding | 第 6 章 | AI Coding 与研发提效（双层格局 / 企业三关注） | ✅ | 2026-08-01 |
| sp-digital-human | 第 7 章 | 数字人（离线 vs 实时 / 合规红线） | ✅ | 2026-07-10 |
| sp-chatbi | 第 8 章 | ChatBI 与数据分析（语义层口径战场 / 三道闸 / 产品格局） | ✅ | 2026-07-11 |
| sp-meeting | 第 9 章 | 会议与办公助手（记忆库资产 / 三层口径 / 合规红线） | ✅ | 2026-07-11 |
| sp-cheatsheet | 第 10 章 | 售前速查（七场景→积木总表 / 分诊树 / 成本卡） | ✅ | 2026-07-11 |

## 时效性事实（巡检盘查对象）
| 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 客服解决率口径：厂商自报 Fin 51–67% / Sierra ~70%（WeightWatchers）/ Decagon 80%（deflection）；独立口径 Zendesk 企业中位 41.2%、top quartile 58.7%；宣传与实测差 30–40pp | sp-customer-service / sp-method | 2026-07-10 | fin.ai 对比页 / digitalapplied 2026 统计 | — | B | 90 | 各家口径不一，厂商自报与独立中位不可并列比较 |
| 客服 AI 采用度：Salesforce 报 66% 服务组织已跑 AI agent（2025 年 39%）；Gartner 91% CX 负责人有部署压力 | sp-customer-service | 2026-07-10 | digitalapplied 2026 统计 | — | B | 90 | 调研样本的采用率，不等于你面前这家已经在用 |
| Glean：ARR $300M（2026-05，+89% YoY）、估值 $7.2B（2025-06 Series F）；Glean Agents 年化 1 亿+ actions | sp-knowledge-search | 2026-09-05 | TechCrunch 2026-05-28（ARR 与估值原文核对）；sacra.com/c/glean/（+89% 与 actions 原文核对） | — | B | 30 | 营收估值是时点快照，不能推产品力或市场份额 |
| AI Coding 格局：SpaceX $60B 全股票收购 Cursor 母公司 Anysphere（2026-06-16 宣布、2026-08-14 已交割——SEC Form 8-K 确认 Anysphere 成 SpaceX 全资子公司）；Cursor ARR $4B 年化（2026-06 初，2 月 $2B 四个月翻倍，收入第一）；Copilot 4.7M 付费 +75% YoY（微软 FY26 Q2 财报 2026-01-28 披露，仍为最新付费数——FY26 Q4 财报 07-29 只披露总用户 5000 万未更新付费口径，用户量第一）、Claude Code 46% most-loved（JetBrains 2026-04 满意度第一）；市场 2026 年 $12.8B、85% 开发者在用；采用率 29%/18%/18%；70% 工程师同时用 2–4 个工具 | sp-ai-coding | 2026-09-05 | investing.com（Reuters，2026-08-14，引 SEC 8-K spcx-20260814）/ 01net.it 交叉确认交割；TechCrunch/Forbes 2026-06-16 / 微软 FY26 Q2·Q4 财报 / JetBrains 2026 调查 | — | B | 30 | 交割已定局；三个第一各自口径也不同源 |
| 数字人：HeyGen Avatar V（2026-04-08，15 秒素材建分身、10 分钟身份不漂移）；LiveAvatar 为 WebRTC 实时交互数字人独立平台 | sp-digital-human | 2026-07-10 | HeyGen 官方 blog / help center | — | B | 90 | 官方宣传的建分身时长与不漂移时长，实拍条件要复测 |
| 内容生成格局：Jasper（品牌一致性：风格指南/禁用词全局生效）、Canva Magic Studio（模板驱动）、Adobe Firefly Enterprise（商业安全定位：授权数据训练 + 企业 IP 赔付 + 可训品牌定制模型） | sp-content-gen | 2026-07-10 | Adobe 官方 / genesysgrowth 2026 对比 | — | B | 90 | 三家的定位差异，赔付与授权条款细节要看合同 |
| 语音客服成本：级联 $0.01–0.17/分钟（组件各自计价，可预测）；端到端厂商只公布 token 单价——gpt-realtime-2.1 音频进 $32 / 出 $64 每百万 token、缓存命中输入 $0.4，2.1-mini 音频出 $20（与 multimodal#mm-voice-realtime 同源口径，2026-09-05 随源回刷；旧分钟价 $0.18–0.46/$0.05–0.10 已随两轮换代作废） | sp-customer-service / sp-cheatsheet | 2026-09-05 | 沿用 multimodal#mm-voice-realtime 同源（源行 2026-09-05 核实） | — | B | 30 | 官方只给 token 价，每分钟成本要按自身话务折算 |
| 成本速查卡量级：文本客服 $0.01–0.05/会话、文案 $0.001–0.01/条、图 $0.02–0.1/张、AI Coding $19–40/人/月 + 用量 | sp-cheatsheet | 2026-07-10 | 各厂商定价页综合量级（2026-07 口径） | — | B | 30 | 量级直觉不是报价，出单前按当期定价逐项重算 |
| Text-to-SQL 准确率口径（分档，与 RAG 册对齐）：裸 LLM 随基准真实度分档——学术单轮 80–90% / 中等企业化基准 50–70% / 最难企业基准（Spider 2.0 类）10–21%，对客讲最低那档；语义模型加持后 Snowflake 内部 150 题基准 51%→90%+、dbt 语义层基准 98–100% | sp-chatbi | 2026-07-23 | promethium 2026 企业对比 / Snowflake 工程博客 / Spider 2.0 / colrows（与 rag#rag-structured 同源口径，2026-09-05 两册分档对齐） | — | B | 90 | 基准库口径，自家库 schema 更复杂，必须实测 |
| ChatBI 产品格局：垂直一体派 Cortex Analyst（YAML 语义模型）/ Databricks AI/BI Genie（Unity Catalog）/ Fabric Copilot；独立派 ThoughtSpot / dbt / Cube；Snowflake 2026 推 Semantic View Autopilot（ML 自动发现指标定义，天级→分钟级） | sp-chatbi | 2026-07-11 | promethium 语义层十强 / colrows | — | B | 90 | 厂商清单是格局快照，各家绑各自数据栈，不证明适配你的仓 |
| 会议助手格局：两分野（笔记器 vs agentic 平台）；原生派 Zoom AI Companion / Teams Copilot（M365 +$30/人/月）/ 飞书妙记；独立派 Otter / Fireflies / Granola（2026-03 融资 $125M、估值 $1.5B、bot-free 代表）；bot 疲劳为 2026 趋势 | sp-meeting | 2026-09-05 | techcrunch.com 2026-03-25；microsoft.com Copilot 企业页；news.zoom.us（2026-09-05 逐字核对） | — | B | 30 | 横评快照且含席位价，格局与报价都会月级变 |

> 说明：五层参考架构、POC 三要素、三本账、口径鉴别术属方法论，不会过期，未登记。成本速查卡整卡是全库最易过期的一页，巡检时优先核。

## 串联出边
| 本模块章节 | 指向 | 关系 |
| --- | --- | --- |
| sp-method | predictive-ai-mlops#pam-what-why | 反向回指（2026-08-02 新模块建立）：「我们已经有 X 了」的通用答法（增量价值三问）在 SP 与实战包已成型，本册补预测式这一格的具体内容：存量模型 |
| sp-method | ai-governance#gov-decision | 反向回指（2026-08-02 新模块建立）：SP 第 2 章讲对客交付里的责任落点与合同话术（乙方视角），本册讲客户内部的决定权归属与证据链（甲方视角），两 |
| sp-what-why | （全库） | 本模块是场景索引层：单向引用所有技术模块，技术模块无需反向依赖 |
| sp-method | ai-gateway#gw-cost | 三本账的 token/并发治理在网关落地；成本治理机制见 AI-Gateway 第 4 章 |
| sp-method | evaluation#eval-build | POC 三要素中「签字的指标」= 自建评估集方法，见 Evaluation 第 5 章 |
| sp-method | ai-ops#ops-cheatsheet | 三本账的「人力账/运营包」在 AI-Ops 第 8 章展开为五件套清单与 SLA 报价口径——双向互指（2026-07-10） |
| sp-method / sp-knowledge-search | data-engineering#de-what-why / de-pipeline | 「数据坑是第一风险」「连接器是报价大头」在 Data-Engineering 展开为工程清单与报价明细——双向互指（2026-07-11） |
| sp-customer-service | rag#rag-hybrid / agent#agent-orchestration | 客服主料：知识兜底 + 业务办理 |
| sp-customer-service | multimodal#mm-voice-realtime | 语音客服链路（级联/延迟/SIP）深潜入口 |
| sp-knowledge-search | rag#rag-hybrid / rag#rag-graphrag / rag#rag-structured | 按知识形态选检索路线 |
| sp-knowledge-search | security#sec-data-privacy | 权限感知检索 / ACL / 越权测试的安全侧依据 |
| sp-content-gen | multimodal#mm-generation / pe#pe-anatomy | 生成能力 + 风格注入两大主料 |
| sp-ai-coding | agent#agent-lowcode / ai-gateway#gw-cost | 工具组合与统一预算治理 |
| sp-digital-human | multimodal#mm-voice-realtime / multimodal#mm-generation | 数字人 = 语音链路 + 生成的脸 |
| sp-cheatsheet | agent#agent-lowcode | 「有没有平台」的分诊去向 |
| sp-chatbi | rag#rag-structured | 技术底座：Text-to-SQL 与语义层机制在 RAG 第 12 章，本章是其场景视角（双向） |
| sp-chatbi | security#sec-data-privacy / evaluation#eval-build | 行级权限与只读闸；高频指标验收集 + 越权测试 |
| sp-meeting | multimodal#mm-understanding / multimodal#mm-voice-realtime | ASR 与说话人分离能力底座；实时字幕走语音链路 |
| sp-meeting | rag#rag-hybrid / agent#agent-eval-guardrails | 会议记忆库 = 权限感知检索；行动项自动执行的审批边界 |
