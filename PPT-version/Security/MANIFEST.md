# Security · MANIFEST(模块清单)

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | security |
| 所在层 | 工程保障层 |
| 主导关系 | 中招后的爆炸半径——读者带着「AI 到底安不安全、客户问起我怎么答」来。 |
| 建立日期 | 2026-07-09 |
| 最后更新 | 2026-08-02 网页版增补「上云怎么落地」（Codex 对照库借鉴第 3 步·回流批）：新增 `#cloud` 小节（结构性小节，与 qa/related/sources 同类，不进章节清单）……；讲义 90 页；完整更新记录见 [raw-data/更新记录.md](raw-data/更新记录.md) |
| 产出 skill 版本 | v3.0 |

## 章节清单
| 章节 ID | 现编号 | 标题 | 状态 | 最后核实 |
| --- | --- | --- | --- | --- |
| sec-landscape | 第 1 章 | 为什么 AI 安全是新问题(威胁全景) | ✅ | 2026-07-09 |
| sec-prompt-injection | 第 2 章 | 提示注入与越狱 | ✅ | 2026-07-09 |
| sec-data-privacy | 第 3 章 | 数据与隐私安全 | ✅ | 2026-07-09 |
| sec-supply-chain | 第 4 章 | 供应链与模型来源 | ✅ | 2026-07-09 |
| sec-agentic | 第 5 章 | Agent 与工具安全 | ✅ | 2026-07-09 |
| sec-defense | 第 6 章 | 防护工程:护栏·模式·红队 | ✅ | 2026-07-09 |
| sec-governance | 第 7 章 | 治理与合规框架 | ✅ | 2026-07-09 |
| sec-china | 第 8 章 | 中国监管合规 | ✅ | 2026-07-17 |
| sec-cheatsheet | 第 9 章 | 售前速查 | ✅ | 2026-07-09 |

## 时效性事实(巡检盘查对象)
| 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| OWASP LLM Top 10 现行版为 2025 版;新增 LLM07 系统提示词泄露、LLM08 向量与嵌入弱点,敏感信息泄露升至第 2 | sec-landscape | 2026-07-09 | genai.owasp.org/llm-top-10 | — | A | 90 | 清单会换代，条目编号次序不是长期口径 |
| OWASP 另有《Agentic AI Threats & Mitigations》(2025-02)与《Top 10 for Agentic Applications 2026》 | sec-agentic | 2026-07-09 | genai.owasp.org(ASI) | — | A | 90 | 两份 Agentic 清单仍在迭代，不是已定稿终版 |
| EchoLeak(CVE-2025-32711):M365 Copilot 首个零点击间接注入,CVSS 9.3 | sec-prompt-injection | 2026-07-09 | arXiv 2509.10540 / Sentra | — | A | 180 | 已公开披露的单个案例，不代表该产品当前的风险面 |
| 在野间接注入 2026 起规模化:Unit42 2026-03 记录 22 种载荷手法;CrowdStrike 报 2025 影响 90+ 组织 | sec-prompt-injection | 2026-07-09 | unit42 / helpnetsecurity 2026-04 | — | B | 90 | 厂商情报统计口径，不是全网攻击规模的普查 |
| OpenAI/Anthropic/Google DeepMind 均公开承认:现有架构下提示注入无法彻底根治,需模型外确定性策略兜底 | sec-prompt-injection | 2026-07-09 | 三厂 2025 研究 | — | A | 180 | 说的是模型内无解，不代表模型外工程兜底也无效 |
| 护栏格局:开源 Llama Guard/NeMo Guardrails/Guardrails AI/LLM Guard;商业 Lakera;云托管 Bedrock Guardrails/Azure AI Content Safety(Prompt Shields) | sec-defense | 2026-07-09 | generalanalysis / galileo 2026 对比 | — | B | 90 | 同列一张表不代表各家能力对等、可直接互换 |
| CaMeL(Google DeepMind,arXiv 2503.18813)Dual-LLM 工程化,AgentDojo 约 77% 任务可证安全 | sec-defense | 2026-07-09 | arXiv 2503.18813 | — | B | 90 | AgentDojo 基准上的成绩，换任务集与真实业务不复现 |
| 架构级防注入六类模式(action-selector/plan-then-execute/dual LLM/code-then-execute/context-minimization/map-reduce) | sec-defense | 2026-07-09 | arXiv 2506.08837 | — | A | 180 | 是设计取舍框架，不等于任一模式能挡住注入 |
| NIST AI 600-1(GenAI Profile)2024-07-26 发布,12 类风险 +200 行动项;RMF 下一大版本预计 2026–2027 | sec-governance | 2026-07-09 | nist.gov / nvlpubs | — | A | 90 | 自愿性框架，不等于强制合规要求；下一版尚未发布 |
| EU AI Act:GPAI 三时点不变(义务 2025-08-02 生效 / 2026-08-02 执法罚款,GPAI 最高 €15M 或营收 3%、广义最高 €35M 或 7% / 2027-08-02 存量截止);高风险义务经 Digital Omnibus(Regulation (EU) 2026/1744,2026-07-24 刊《官方公报》、07-27 生效)延期:Annex III 独立系统→2027-12-02、Annex I 嵌入式→2028-08-02,透明度义务(Art. 50)仍 2026-08-02;建议复查日 2026-12-01 | sec-governance | 2026-08-01 | EUR-Lex(Reg (EU) 2026/1744)/ Gibson Dunn / Jones Walker 两家法务分析一致 | 2026-12-01 | A | 90 | 延期后的高风险时点仍可能再改，别当终局 |
| MITRE ATLAS v5.x(2025 末–2026):约 16 战术/84 技术,2025-11 v5.1.0 加 C2 战术,2025 起大量 GenAI/Agent 技术 | sec-landscape | 2026-07-09 | atlas.mitre.org | — | B | 90 | 活知识库持续增长，战术技术数只是某次快照 |
| 上云 AI 安全服务名:AWS Bedrock Guardrails/Macie/GuardDuty+SecurityHub;Azure AI Content Safety/Purview/Defender for Cloud AI-SPM;GCP Model Armor/DLP/Security Command Center | sec-cheatsheet | 2026-07-09 | 三云 2025–2026 文档 | — | A | 30 | 只是产品名对照，不代表三家能力对等或一一对应 |
| 备案现状:截至 2026-06-30 累计 988 款生成式 AI 服务备案、598 款应用/功能登记;双备案全流程 5–8 个月(北京 8–10),算法备案审核 30 个工作日、大模型备案 3–6 个月 | sec-china | 2026-07-17 | 网信办公告(cac.gov.cn)+备案实务多方一致口径 | — | B | 30 | 累计量月月增长，5–8 个月是实务口径不是官方承诺 |
| 《AI 生成合成内容标识办法》2025-09-01 施行(四部门),显式+隐式双轨,配套强标 GB 45438-2025;已有 App 因标识违规被约谈/下架 | sec-china | 2026-07-17 | cac.gov.cn / 央视新闻 / samr openstd | — | A | 90 | 办法与强标已定，执法尺度与案例仍在变 |
| GB/T 45654-2025《生成式 AI 服务安全基本要求》2025-11-01 实施(TC260 归口),训练数据/模型/安全措施三方面,五大类 31 小类风险;配套 GB/T 45674 数据标注安全 | sec-china | 2026-07-17 | tc260.org.cn / samr / 火山引擎备案实务 | — | A | 180 | 标准条款是评估基线，不等于按它做就通过备案 |
| 立法风向(易过期):网安法修订 2026-01-01 施行新增 AI 专条(第 20 条);国务院 2026 立法计划部署 AI 综合性立法;《人工智能拟人化互动服务管理暂行办法》2026-04-10 五部门公布、2026-07-15 施行;同日网信办公布首批 7 款手机端侧生成式 AI 服务备案(新品类首次单开清单);建议复查日 2026-11-01 | sec-china | 2026-08-01 | cac.gov.cn 原文(办法发布页 c_1777558395023172 + 端侧备案公告 c_1785861480767004) | 2026-11-01 | A | 90 | 立法在动，已公布办法不代表配套细则与执法口径已定 |
| 数据出境:三通道(安全评估/标准合同/认证)+《促进和规范数据跨境流动规定》(2024-03)六类豁免+自贸区负面清单;官方口径《政策问答(2025-10)》 | sec-china | 2026-07-17 | cac.gov.cn | — | A | 90 | 框架稳定，各自贸区负面清单与豁免适用逐地不同 |
| ISO/IEC 42001 为首个 AI 管理体系(AIMS)国际标准 | sec-governance | 2026-07-09 | ISO 官方 | — | A | 180 | 讲的是标准首创地位，不代表已成客户采购硬门槛 |

## 串联出边
| 本模块章节 | 指向 | 关系 |
| --- | --- | --- |
| sec-china | predictive-ai-mlops#pam-governance | 反向回指（2026-08-02 新模块建立）：备案范围与合规数字在 Security 第 8 章，本册不复制；只讲预测式独有的落点——拒绝理由要说得出、模型卡 |
| sec-governance | ai-governance#gov-frameworks | 反向回指（2026-08-02 新模块建立）：Security 第 7 章把 NIST／ISO／欧盟法案摆在威胁防护的收尾位置，给的是方位与时间线；本章接着讲 |
| sec-china | ai-governance#gov-china-interface | 反向回指（2026-08-02 新模块建立）：备案、登记、标识、国标、数据出境的条目与时点全在 Security 第 8 章；本章只讲分诊结论怎么变成用途登记 |
| sec-supply-chain | ai-governance#gov-registry | 反向回指（2026-08-02 新模块建立）：AI-BOM 记「系统里有哪些模型与组件」，用途登记记「有哪些 AI 用途、谁批的」，一条用途对应多条 AI-B |
| sec-defense | ai-governance#gov-evidence | 反向回指（2026-08-02 新模块建立）：红队报告是高风险用途证据包的必备件；怎么打、打什么在 Security 第 6 章，本册管这件证据在不在包里、有 |
| sec-defense | evaluation#eval-scenarios | 红队产出的攻破率/有害内容率/注入抵抗率汇入 Evaluation 安全维度验收,兑现其 `eval-scenarios → security(候选)` 边 |
| sec-agentic | agent#(护栏章) | Agent「评估与护栏」提出要防,本模块给系统性威胁与控权(最小权限/爆炸半径) |
| sec-agentic | mcp#(安全章) | MCP 工具描述投毒与供应链安全,本模块第 4/5 章深化 |
| sec-data-privacy | rag#(向量检索/数据) | 向量库投毒、跨租户泄露、带权限检索,对应 RAG 检索质量与数据面 |
| sec-supply-chain | fine-tuning# / llm-training# | 微调数据泄露、模型投毒与来源验证,是这两个模块的安全侧 |
