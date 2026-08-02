# AI-Governance · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | ai-governance |
| 所在层 | 工程保障层 |
| 主导关系 | 谁凭什么证据批准——治理不是一份文档，是一套一直在跑的决定系统：某个 AI 用途由谁、依据什么证据作出批准／限制／暂停／退役，以及什么变化必须触发重新决定。 |
| 建立日期 | 2026-08-02 |
| 最后更新 | 2026-08-02 A 类新增（Codex 对照库借鉴第 5 步）：方案见 `_maintenance/2026-08-02-两个新模块-方案.md`，逐章内容联网核实后写入 |
| 产出 skill 版本 | v8.7 |
| 状态 | 🚧 建设中 |

## 章节清单
| 章节 ID | 现编号 | 标题 | 状态 | 最后核实 |
| --- | --- | --- | --- | --- |
| gov-what-why | 第 1 章 | 治理是一套决定系统，不是一份文档 | 🚧 建设中 | — |
| gov-registry | 第 2 章 | 按用途登记，不按模型登记 | 🚧 建设中 | — |
| gov-risk-tiering | 第 3 章 | 组织风险分层与法律分类是两把尺子 | 🚧 建设中 | — |
| gov-impact | 第 4 章 | 影响评估在架构冻结前做 | 🚧 建设中 | — |
| gov-decision | 第 5 章 | 五种决定：批准、条件批准、例外、暂停、退役 | 🚧 建设中 | — |
| gov-evidence | 第 6 章 | 证据包怎么组装 | 🚧 建设中 | — |
| gov-change-triggers | 第 7 章 | 什么变化让原来的批准失效 | 🚧 建设中 | — |
| gov-frameworks | 第 8 章 | 各框架分别能证明什么、不能证明什么 | 🚧 建设中 | — |
| gov-china-interface | 第 9 章 | 用途登记与中国备案要求怎么对接 | 🚧 建设中 | — |
| gov-operating | 第 10 章 | 跑起来需要的角色、节奏与工具 | 🚧 建设中 | — |
| gov-cheatsheet | 第 11 章 | 售前速查 | 🚧 建设中 | — |

## 时效性事实（巡检盘查对象）
| 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |
| --- | --- | --- | --- | --- | --- | --- | --- |

## 串联出边
| 本模块章节 | 指向 | 关系 |
| --- | --- | --- |
| gov-frameworks | security#sec-governance | Security 第 7 章把 NIST／ISO／欧盟法案摆在威胁防护的收尾位置，给的是方位与时间线；本章接着讲每张纸能证明什么、不能证明什么，以及义务落到提供者还是部署者。时间线数字只在 Security 登记一次，本册引用不复制（双向互指） |
| gov-china-interface | security#sec-china | 备案、登记、标识、国标、数据出境的条目与时点全在 Security 第 8 章；本章只讲分诊结论怎么变成用途登记表的字段、备案材料从证据包取哪几件、周期怎么倒排评审启动时间 |
| gov-registry | security#sec-supply-chain | AI-BOM 记「系统里有哪些模型与组件」，用途登记记「有哪些 AI 用途、谁批的」，一条用途对应多条 AI-BOM 项，两张表用同一个用途 ID 串；准入门禁的技术检查项归 Security，本册管这道门是谁的门、不过怎么办 |
| gov-evidence | evaluation#eval-build | 证据包里「测过什么、结果多少」由 Evaluation 产出；本册只规定哪一档用途必须附哪几类测量证据、证据绑到哪个版本、失效期多长，不重讲任何指标定义 |
| gov-evidence | security#sec-defense | 红队报告是高风险用途证据包的必备件；怎么打、打什么在 Security 第 6 章，本册管这件证据在不在包里、有没有过期、结论有没有转成上线条件 |
| gov-change-triggers | ai-ops#ops-drift | 供应商静默换 checkpoint 与三类漂移由 AI-Ops 监测；本册把这些告警接成「重新决定」的触发口，规定哪类漂移触发重审哪一步 |
| gov-decision | ai-ops#ops-incident | 暂停一个用途的技术动作（急停、回滚指针）在 AI-Ops 第 6 章；本册管谁有权按下、按下之后走什么复核路径、多久必须给出结论 |
| gov-impact | data-engineering#de-governance | 影响评估产出的数据约束（哪些特征不许进、必须留哪种记录、最小化到什么程度）由数据侧执行；执行点、权限与越权测试在 DE 第 7 章，本册只出约束与验收点 |
| gov-risk-tiering | agent#agent-eval-guardrails | 自主度是组织风险分层的一根轴；自主度的技术形态与控权手段在 Agent 与 Security，本册只规定从「给建议」升到「自动执行」跨档必须重新过决定门 |
| gov-decision | solution-patterns#sp-method | SP 第 2 章讲对客交付里的责任落点与合同话术（乙方视角），本册讲客户内部的决定权归属与证据链（甲方视角），两边在「谁签字」这一点接上（双向） |
