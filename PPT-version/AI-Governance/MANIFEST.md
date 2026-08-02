# AI-Governance · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | ai-governance |
| 所在层 | 工程保障层 |
| 主导关系 | 谁凭什么证据批准——治理不是一份文档，是一套一直在跑的决定系统：某个 AI 用途由谁、依据什么证据作出批准／限制／暂停／退役，以及什么变化必须触发重新决定。 |
| 建立日期 | 2026-08-02 |
| 最后更新 | 2026-08-02 A 类新增（Codex 对照库借鉴第 5 步）：方案见 `_maintenance/2026-08-02-两个新模块-方案.md`，逐章内容联网核实后写入；讲义 117 页（生成器 kb_deck_build.py 渲染，audit 十七项 PASS、LibreOffice 转 PDF 无错、逐页渲染目检抽验封面/导览/章节过渡/学习目标/流程页/五列云落点表）；时效性事实 43 条均为本次联网核实 |
| 产出 skill 版本 | v8.7 |
| 状态 | ✅ 已完成（书单 10 项；讲义 117 页，放映序实测）|

## 章节清单
| 章节 ID | 现编号 | 标题 | 状态 | 最后核实 |
| --- | --- | --- | --- | --- |
| gov-what-why | 第 1 章 | 治理是一套决定系统，不是一份文档 | ✅ | 2026-08-02 |
| gov-registry | 第 2 章 | 按用途登记，不按模型登记 | ✅ | 2026-08-02 |
| gov-risk-tiering | 第 3 章 | 组织风险分层与法律分类是两把尺子 | ✅ | 2026-08-02 |
| gov-impact | 第 4 章 | 影响评估在架构冻结前做 | ✅ | 2026-08-02 |
| gov-decision | 第 5 章 | 五种决定：批准、条件批准、例外、暂停、退役 | ✅ | 2026-08-02 |
| gov-evidence | 第 6 章 | 证据包怎么组装 | ✅ | 2026-08-02 |
| gov-change-triggers | 第 7 章 | 什么变化让原来的批准失效 | ✅ | 2026-08-02 |
| gov-frameworks | 第 8 章 | 各框架分别能证明什么、不能证明什么 | ✅ | 2026-08-02 |
| gov-china-interface | 第 9 章 | 用途登记与中国备案要求怎么对接 | ✅ | 2026-08-02 |
| gov-operating | 第 10 章 | 跑起来需要的角色、节奏与工具 | ✅ | 2026-08-02 |
| gov-cheatsheet | 第 11 章 | 售前速查 | ✅ | 2026-08-02 |

## 时效性事实（巡检盘查对象）
| 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 欧盟《人工智能法》分类规则：附件三所列系统推定为高风险（第 6 条第 2 款）；第 6 条第 3 款给四个出口——窄程序任务、改进已完成的人工结果、只检测与既往决策的偏差且不替代人的判断、为后续评估做准备性工作；但对自然人做画像的一律仍为高风险；用了出口的提供方须在上市前记录判定依据，并按第 49 条第 2 款在欧盟数据库登记。与企业最相关的附件三类别：第 4 类就业（招聘或遴选，特别是定向投放职位广告、分析筛选求职申请、评估候选人；以及晋升终止、任务分配、绩效与行为监测），第 5 类(b)信用评估与信用评分（欺诈检测除外）、(c)人寿与健康保险的风险评估与定价 | gov-risk-tiering | 2026-08-02 | 欧盟《人工智能法》(Regulation (EU) 2024/1689) 第 6 条、附件三，2026-08-02 读自 https://artificialintelligenceact.eu/article/6/ 与 https://artificialintelligenceact.eu/annex/3/（该站转录 2024 年原始刊登文本，页面未标注修正版次） | — | B | 90 | 分类规则不等于某产品的合规结论；读的是原始文本，修正版与时点见 Security |
| 欧盟《人工智能法》的三份清单：附件三共 8 个高风险领域——①生物识别 ②关键基础设施 ③教育与职业培训（入学与录取、学习成果评估、教育层级判定、考试作弊监测）④就业与劳动者管理 ⑤基本公私服务与福利的可及性（含 (b) 信用评估与信用评分、(c) 人寿与健康保险的风险评估与定价）⑥执法 ⑦移民庇护与边控 ⑧司法与民主程序；第 5 条第 1 款禁止清单 (a)–(h) 含社会评分（(c)）与职场及教育机构的情绪推断（(f)，医疗或安全用途除外）；第 50 条透明度义务：第 1 款直接与自然人交互的系统要告知，第 2 款合成音频图像视频文本要做机器可读标记，第 3 款情绪识别与生物特征分类要告知被作用的人，第 4 款深度伪造与公共议题的 AI 生成文本要披露 | gov-risk-tiering | 2026-08-02 | 欧盟《人工智能法》(Regulation (EU) 2024/1689) 附件三、第 5 条、第 50 条，2026-08-02 读自 https://artificialintelligenceact.eu/annex/3/、/article/5/、/article/50/（该站转录 2024 年原始刊登文本，页面未标注修正版次） | — | B | 90 | 只是条目清单，不含门槛、例外与生效时点；修正版与时点见 Security |
| 欧盟《人工智能法》角色与登记义务：第 25 条第 1 款——贴上自己的名称或商标、做出重大修改、或改变预期用途使系统变成高风险，这三种情形下分销商、进口商、部署方或第三方即被视为该高风险系统的提供方；第 49 条——提供方在投放市场前须登记自身与系统，自行判定为不高风险的（第 6 条第 3 款）同样要登记，公共机构类部署方还须登记其使用；第 26 条第 7 款——雇主在职场投用高风险系统前须告知工会代表与受影响员工 | gov-registry | 2026-08-02 | 欧盟《人工智能法》(Regulation (EU) 2024/1689) 第 25、26、49 条，2026-08-02 读自 https://artificialintelligenceact.eu/article/25/、/article/26/、/article/49/（该站转录 2024 年原始刊登文本，页面未标注修正版次） | — | B | 90 | 只讲义务落到谁头上，不含生效时点；修正版与时点见 Security |
| 欧盟《人工智能法》第 26 条第 6 款：高风险 AI 系统的部署方保存系统自动生成日志的期限，须与该系统的预期用途相称，且至少 6 个月 | gov-what-why | 2026-08-02 | 欧盟《人工智能法》(Regulation (EU) 2024/1689) 第 26 条，2026-08-02 读自 https://artificialintelligenceact.eu/article/26/（该站转录 2024 年原始刊登文本，页面未标注修正版次） | — | B | 90 | 只讲留存下限，不含日志内容、格式与调取；时点见 Security |
| 欧盟《人工智能法》第 27 条基本权利影响评估（FRIA）：适用主体是受公法管辖的机构、提供公共服务的私营主体，以及附件三第 5 类(b)(c)（信用评分、人寿与健康保险风险评估定价）的部署方；内容须含 (a) 使用该系统的流程描述、(b) 使用时段与频率、(c) 可能受影响的自然人与群体类别、(d) 具体伤害风险、(e) 人工监督措施如何落实、(f) 风险发生时的措施含内部治理安排与投诉机制；第 3 款要求把评估连同模板通知市场监管机构（第 46 条第 1 款情形除外）；第 4 款明确若相关义务已通过 GDPR 第 35 条的数据保护影响评估完成，FRIA 是对其的补充而非替代 | gov-impact | 2026-08-02 | 欧盟《人工智能法》(Regulation (EU) 2024/1689) 第 27 条，2026-08-02 读自 https://artificialintelligenceact.eu/article/27/（该站转录 2024 年原始刊登文本，页面未标注修正版次） | — | B | 90 | 适用主体与内容清单，不含起算时点；时点见 Security |
| ISO/IEC 42005:2025《信息技术—人工智能—AI 系统影响评估》为第 1 版，2025-05-28 发布（ISO/IEC JTC 1/SC 42 归口），给出组织如何为受 AI 系统及其可预见应用影响的个人与社会做影响评估的指南，涵盖何时做、在生命周期哪些阶段做以及评估文档要求，并说明如何并入既有 AI 风险管理与管理体系；它是 ISO/IEC 42001 的配套指南 | gov-impact | 2026-08-02 | IEC Webstore，ISO/IEC 42005:2025 出版物页 https://webstore.iec.ch/en/publication/107659 | — | A | 180 | 指南性标准，不产生合规资格或认证；复查只看有无新版 |
| 美国 OMB M-25-21 备忘录（2025-04-03 发布，取代 M-24-10）要求各机构维护并每年公开更新「AI 用途清单」（AI Use Case Inventory），登记与报送单位是「用途（use case）」而非模型；国防部与情报体系另有安排 | gov-registry | 2026-08-02 | 美国管理和预算办公室 OMB Memorandum M-25-21《Accelerating Federal Use of AI through Innovation, Governance, and Public Trust》原文 PDF（whitehouse.gov）第 3(b)(v) 节与附表 | — | A | 90 | 是美国联邦机构自用规则，不适用于企业 |
| OMB M-25-21 对「高影响 AI（high-impact AI）」的判据是：其输出成为对权利或安全具有法律、实质、约束或重大影响的决定或行动的「主要依据（principal basis）」；有没有人工监督不改变这一判定。备忘录第 6 节另列 15 类推定为高影响的用途（含关键基础设施安全功能、医疗诊断与治疗、执法风险评估、公共场所一对多生物识别、联邦福利与贷款审批、以及联邦雇佣条件的确定含录用前筛查、薪酬晋升、绩效管理、招聘解雇）；机构若认定某个落在推定清单内的用途实际不属高影响，须书面报首席 AI 官（CAIO）备案 | gov-risk-tiering | 2026-08-02 | 美国管理和预算办公室 OMB Memorandum M-25-21 原文 PDF（whitehouse.gov）第 4(a) 节与第 6 节 | — | A | 90 | 是美国联邦口径，不能直接套到企业或他国分档 |
| OMB M-25-21 对高影响 AI 规定七条最低风险管理实践：上线前测试、完成 AI 影响评估、持续监测性能与不利影响、确保操作人员培训与考核、额外的人工监督与问责（含 fail-safe）、提供一致的救济或申诉渠道、征询并吸收终端用户与公众反馈。其中影响评估须在部署前完成、并在生命周期内定期更新，文档至少含预期目的与收益指标、数据与模型能力的适配性、对隐私与公民权利的潜在影响、重评时间表与触发条件、成本分析、由未参与开发的独立复核人出具意见（意见须原样留档并交给风险接受人）、以及风险接受人签名 | gov-impact | 2026-08-02 | 美国管理和预算办公室 OMB Memorandum M-25-21 原文 PDF（whitehouse.gov）第 4(a)(i)–(iv)、4(b)(i)–(vii) 节 | — | A | 90 | 是联邦机构义务，企业照抄前须按自身法域裁剪 |
| OMB M-25-21 的停用与豁免机制：某个高影响 AI 用途若无法满足七条最低风险管理实践，机构必须安全停用该 AI 功能；首席 AI 官（CAIO，Chief AI Officer）可基于书面的系统与情境风险评估豁免个别要求，豁免须每年重新确认有效性、可随时撤销、并在批准或撤销后 30 天内报 OMB，该职责不得下放 | gov-what-why | 2026-08-02 | 美国管理和预算办公室 OMB Memorandum M-25-21 原文 PDF（whitehouse.gov）第 4(a) 节豁免与停用条款 | — | A | 90 | 联邦机构义务，企业照抄前按自身法域裁剪；不构成合同责任 |
| NIST AI RMF 1.0 的 GOVERN 1.6 类目原文为「Mechanisms are in place to inventory AI systems and are resourced according to organizational risk priorities」；配套 Playbook 建议：以政策定义清单的建立与维护流程、指定专人或专队负责、范围优先覆盖全部模型或至少高风险与高风险场景中的系统、清单属性含文档、源码链接、事故响应计划、数据字典与相关责任人联系方式 | gov-registry | 2026-08-02 | NIST AI RMF Playbook（GOVERN 部分），美国国家标准与技术研究院 AI 资源中心 https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook/Govern | — | A | 90 | 是自愿性方法论建议，不是强制清单字段要求 |
| 美国科罗拉多州 SB26-189《Automated Decision-Making Technology》2026-05-01 提出、05-07 参议院通过、05-09 众议院通过、2026-05-14 州长签署成法，生效日 2027-01-01，取代 2024 年的 SB24-205（原定 2026-06-30 生效）。新法把原来针对「高风险 AI 系统」的框架换成针对「自动化决策技术（ADMT）」在「重大决定」中的使用，要求开发方向部署方提供技术文档（预期用途、训练数据类别、已知局限、使用与人工复核说明）、部署方在交互点告知并在不利决定后 30 天内给出通俗解释，消费者有权访问与更正个人数据、有权要求有实质意义的人工复核；原法中部署方的风险管理程序与影响评估义务、以及部分向州总检察长报告的义务被删除。由州总检察长按州消费者保护法作为欺骗性商业行为执法，至 2030 年前执法须提前 60 天告知 | gov-risk-tiering | 2026-08-02 | 科罗拉多州议会法案页 https://leg.colorado.gov/bills/sb26-189 ；变更要点另经 Hunton 隐私与网络安全法律博客交叉核对 | — | A | 90 | 只管科罗拉多州；删掉的是法定义务，不是风险本身 |
| 纽约市第 144 号地方法（Local Law 144，自动化雇佣决策工具 AEDT）要求：使用前一年内须由独立审计方完成偏见审计、审计结果摘要须公开发布；在职位公告或使用前至少提前 10 个工作日告知候选人与员工，并说明所评估的资质与特征；违规每次最高 500 美元且按日累计。2026 年纽约市审计长的一份审计报告指出主管部门 DCWP 在投诉受理、合规检查与专业力量使用上执行不力 | gov-risk-tiering | 2026-08-02 | 纽约市 Local Law 144-21 实务解读（Deloitte、DCI Consulting）与 DLA Piper 对 2026 年市审计长报告的报道 | — | B | 90 | 只覆盖纽约市岗位；执法不力不等于义务可以不做 |
| 三云的 AI 资产发现能力现状：Google Cloud Security Command Center 的 AI Protection 可在 Assets 页 AI resources 标签盘点模型、数据源、端点、Agent 与 MCP 服务器（需 Premium 或 Enterprise 层级；MCP 服务器发现另需各项目启用 App Hub API），官方文档明确写明「影子 AI 资源在 Google Cloud 控制台的 Security Command Center 中不受支持」；Microsoft 侧覆盖第三方 AI 站点的 Purview DSPM for AI 需要启用按量计费，且多数能力依赖 Purview 浏览器扩展与设备接入，影子 AI 发现通常要与 Defender for Cloud Apps 的云发现组合使用 | gov-registry | 2026-08-02 | Google Cloud 官方文档 https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview ；Microsoft Learn 官方文档 https://learn.microsoft.com/en-us/purview/ai-other-apps | — | A | 30 | 是各云当期能力，不代表三家覆盖面对等或可互换 |
| AWS Audit Manager 的「AWS Generative AI Best Practices Framework v2」（2024-06-11 升级到 v2）含 72 项自动控制 + 38 项手动控制、共 8 个控制集，按 responsible / safe / fair / sustainable / privacy / resilience / accuracy / secure 八项原则组织，覆盖 Amazon Bedrock 与 Amazon SageMaker AI；官方文档同时声明这些控制不用于验证系统是否合规、也不保证通过审计。该文档页顶已公告 AWS Audit Manager 不再向新客户开放，现有客户可继续使用 | gov-registry | 2026-08-02 | AWS 官方文档 https://docs.aws.amazon.com/audit-manager/latest/userguide/aws-generative-ai-best-practices.html | — | A | 30 | 控制项只收证据，不代表合规成立或能通过审计 |
| NIST AI 风险管理框架 MANAGE 2.4 要求：事先建好机制并指定责任人，用于替换、脱离或停用表现与预期用途不符的 AI 系统 | gov-decision | 2026-08-02 | NIST AI RMF Playbook（MANAGE 函数），airc.nist.gov/airmf-resources/playbook/manage/ | — | A | 180 | 自愿性框架条目，不等于法定停用义务 |
| 欧盟人工智能法案第 26(5) 条：高风险系统的部署方发现使用可能带来风险时，须立即通知提供方、分销方与市场监管机构，并暂停使用 | gov-decision | 2026-08-02 | EUR-Lex 官方文本 Regulation (EU) 2024/1689 第 26(5) 条，eur-lex.europa.eu/eli/reg/2024/1689/oj；条文导航副本 artificialintelligenceact.eu/article/26/ | — | A | 90 | 只约束高风险系统的部署方，不覆盖全部 AI 应用 |
| 纽约市 Local Law 144 实施细则 §5-303(c)：偏见审计摘要与分发日期，须在该工具最后一次用于雇佣决定之后继续公示至少 6 个月；审计须在使用前一年内完成，§5-304 要求提前 10 个工作日通知候选人 | gov-decision | 2026-08-02 | NYC DCWP 最终规则原文 PDF，rules.cityofnewyork.us/wp-content/uploads/2023/04/DCWP-NOA-for-Use-of-Automated-Employment-Decisionmaking-Tools-2.pdf | — | A | 90 | 只管纽约市的自动化雇佣决策工具，不是通用年限 |
| 美联储 SR 11-7（2011）与 SR 21-8 已被 2026-04-17 发布的 SR 26-2 取代；SR 26-2 脚注明确「生成式 AI 与 agentic AI 模型不在本指引范围内」，其原则适用于传统统计模型与非生成式、非 agentic 的 AI 模型；重要性由模型用途与暴露共同决定；指引称最相关于总资产超 300 亿美元的受监管银行机构 | gov-decision | 2026-08-02 | 美联储 SR 26-2 letter 页与 PDF 全文，federalreserve.gov/supervisionreg/srletters/SR2602.htm | — | A | 90 | 美国银行监管口径，不适用于非受监管企业 |
| 欧盟人工智能法案第 18 条：高风险系统的技术文档、质量管理体系文件、变更批准记录与欧盟符合性声明等，须自投放市场或投入使用起保存 10 年，并能应主管机关要求提供 | gov-evidence | 2026-08-02 | EUR-Lex 官方文本 Regulation (EU) 2024/1689 第 18 条，eur-lex.europa.eu/eli/reg/2024/1689/oj；条文导航副本 artificialintelligenceact.eu/article/18/ | — | A | 90 | 只覆盖高风险系统的文档，不是全部证据的年限 |
| 欧盟人工智能法案第 19 条（提供方）与第 26(6) 条（部署方）：在自己控制范围内的自动生成日志，须按与预期用途相称的期限保存，至少 6 个月，除非欧盟或成员国法另有规定 | gov-evidence | 2026-08-02 | EUR-Lex 官方文本 Regulation (EU) 2024/1689 第 19 条与第 26(6) 条，eur-lex.europa.eu/eli/reg/2024/1689/oj；条文导航副本 artificialintelligenceact.eu/article/19/ | — | A | 90 | 是下限不是上限；个人数据保护法可能要求更长 |
| Google Cloud Logging：_Required 日志桶固定保存 400 天且不可配置，_Default 日志桶默认保存 30 天，_Default 与自定义桶可配置为 1 至 3650 天 | gov-evidence | 2026-08-02 | Google Cloud 官方文档 docs.cloud.google.com/logging/quotas | — | A | 90 | 是默认与可配范围，不代表当前项目的实际设置 |
| Amazon Bedrock 的模型调用日志默认关闭，需手动开启并指定 CloudWatch Logs 或 S3 目的地；Google Cloud 的数据访问审计日志默认关闭（BigQuery 除外），管理活动审计日志则始终开启且不可关闭 | gov-evidence | 2026-08-02 | docs.aws.amazon.com/bedrock/latest/userguide/model-invocation-logging.html；docs.cloud.google.com/logging/docs/audit | — | A | 90 | 说的是默认开关，不代表这两家日志内容等价 |
| AWS Audit Manager 已转入维护模式：自 2026-04-30 起不再支持在新账号中启用；其 Generative AI Best Practices Framework v2 含 72 项自动控制与 38 项手动控制、8 个控制组，文档明确写明该框架不用于验证系统是否合规、也不保证通过审计；停用服务后已收集的证据保留 2 年 | gov-evidence | 2026-08-02 | AWS 官方文档 docs.aws.amazon.com/audit-manager/latest/userguide/audit-manager-availability-change.html 与 /aws-generative-ai-best-practices.html | — | A | 30 | 是该服务的生命周期状态，别外推到其他云的合规工具 |
| 欧盟人工智能法案第 3(23) 条定义「实质性修改」：投放市场或投入使用后发生、初次符合性评估未预见或未计划、并因此影响第三章第二节要求的合规性或改变已评估的预期用途；第 43(4) 条另规定，提供方在初次符合性评估时已预先确定并写入技术文档的变化，不构成实质性修改 | gov-change-triggers | 2026-08-02 | EUR-Lex 官方文本 Regulation (EU) 2024/1689 第 3(23) 条与第 43(4) 条，eur-lex.europa.eu/eli/reg/2024/1689/oj；条文导航副本 artificialintelligenceact.eu/article/3/ | — | A | 90 | 只适用高风险系统那条线，不覆盖一般 AI 应用 |
| 欧盟人工智能法案第 25(1) 条：分销方、进口方、部署方或第三方在三种情形下被视为高风险系统的提供方——(a) 在已上市系统上贴自己的名称或商标；(b) 对已上市系统作实质性修改且其仍为高风险；(c) 改变系统的预期用途使其成为高风险。第 25(2) 条规定原提供方此时不再被视为该系统的提供方，但须配合并提供必要信息与技术接入 | gov-change-triggers | 2026-08-02 | EUR-Lex 官方文本 Regulation (EU) 2024/1689 第 25 条，eur-lex.europa.eu/eli/reg/2024/1689/oj；条文导航副本 artificialintelligenceact.eu/article/25/ | — | A | 90 | 是角色认定规则，不等于具体义务清单已履行完 |
| 美联储 SR 26-2 原文：把模型用于其预期用途之外会带来额外的不确定性与风险；将模型使用扩展到原应用之外时，稳妥做法是对新用法及其局限补做分析，并复核现有控制 | gov-change-triggers | 2026-08-02 | 美联储 SR 26-2 全文 PDF（Model Use 一节），federalreserve.gov/supervisionreg/srletters/SR2602.pdf | — | A | 180 | 是银行业稳妥做法表述，不是强制条款 |
| 科罗拉多 AI 法（SB 24-205）延期后于 2026-06-30 生效，但在 X.AI 于 2026-04 提起诉讼后，州总检察长同意在其初步禁令动议及法律修订解决前暂缓执法；替代法 SB 26-189 已于 2026-05-14 签署，自 2027-01-01 起取代原法，框架从算法歧视与注意义务转为披露与权利型 | gov-change-triggers | 2026-08-02 | Skadden 法律分析《Colorado Repeals and Replaces Its AI Act》(2026-06)；Norton Rose Fulbright 同题分析 | — | B | 90 | 美国单州立法动态，还在变，别当终局 |
| ISO/IEC 42005:2025《AI 系统影响评估》2025-05-28 发布，属指导文件（guidance），不用于认证、不需要外部审核 | gov-frameworks | 2026-08-02 | IEC Webstore 官方条目 ISO/IEC 42005:2025 https://webstore.iec.ch/en/publication/107659 | — | A | 90 | 指导文件，不能当认证依据或合规证明 |
| ISO/IEC 42006:2025 2025-07-07 发布，规定审核与认证 AI 管理体系的机构（认证机构）应满足的要求，基于 ISO/IEC 17021-1，含审核员能力与审核工时 | gov-frameworks | 2026-08-02 | IEC Webstore 官方条目 ISO/IEC 42006:2025 https://webstore.iec.ch/en/publication/108460 | — | A | 90 | 约束发证机构，不直接落到用户组织头上 |
| 欧盟人工智能法案留存期：提供者的技术文档等文件保存至投放市场或投入使用后 10 年（第 18 条）；自动生成日志按用途适当期限保存、至少 6 个月（第 19 条，部署者同为至少 6 个月，第 26 条） | gov-frameworks | 2026-08-02 | 欧盟人工智能法案第 18、19、26 条全文页 https://artificialintelligenceact.eu/article/18/ | — | B | 90 | 只对高风险系统；适用起点经修正已延期，时点以 Security 登记为准 |
| 第 27 条 FRIA 适用主体：部署高风险系统的公法机构、提供公共服务的私营主体，以及附件三 5(b) 信贷评估与 5(c) 人寿健康保险定价的全部部署者；附件三第 2 点除外 | gov-frameworks | 2026-08-02 | 欧盟人工智能法案第 27 条全文页 https://artificialintelligenceact.eu/article/27/ | — | B | 90 | 适用主体范围，不代表其他部署者免做；起算时点见 Security |
| 第 25 条：贴上自己名称或商标、对已上市高风险系统做实质性修改、或把非高风险系统的预期用途改成高风险，部署者或第三方即被视为提供者 | gov-frameworks | 2026-08-02 | 欧盟人工智能法案第 25 条全文页 https://artificialintelligenceact.eu/article/25/ | — | B | 90 | 身份认定自动发生，但不代表原提供者立即完全免责 |
| 附件三第 4 点(a)把「招聘或选拔，特别是定向投放招聘广告、分析筛选求职申请、评估候选人」并列点名为高风险 | gov-frameworks | 2026-08-02 | 欧盟人工智能法案附件三全文页 https://artificialintelligenceact.eu/annex/3/ | — | B | 90 | 清单条目，是否落入取决于实际预期用途；时点见 Security |
| SR 11-7（2011）与 SR 21-8（2021）已于 2026-04-17 被 SR 26-2《Revised Guidance on Model Risk Management》与 OCC Bulletin 2026-13 取代 | gov-frameworks | 2026-08-02 | 美联储 SR 26-2 官方页 https://www.federalreserve.gov/supervisionreg/srletters/sr2602.htm | — | A | 90 | 只适用美国银行业监管对象，非通用治理标准 |
| SR 26-2 修订版把生成式 AI 与代理式 AI 以「新颖且快速演进」为由排除在适用范围外，三家机构另计划就银行使用 AI 发布问询（RFI） | gov-frameworks | 2026-08-02 | Sullivan & Cromwell 2026-04 客户备忘录（转述 SR 26-2／OCC 2026-13 原文）https://www.sullcrom.com/insights/memo/2026/April/OCC-Fed-FDIC-Issue-Revised-Guidance-Model-Risk-Management | — | B | 90 | 排除出范围不等于没有治理期望，仍按一般风险管理办 |
| 纽约市 Local Law 144：使用自动化雇佣决策工具须做年度独立偏见审计并公开摘要，使用前至少提前 10 个工作日告知候选人，由 DCWP 执法 | gov-frameworks | 2026-08-02 | 纽约市 DCWP 规则与多家实务解读一致口径（warden-ai、verifywise 等 2026 版汇总） | — | B | 90 | 只覆盖纽约市用工场景的自动化决策工具，不是通用公平性证明 |
| 《互联网信息服务算法推荐管理规定》第 24、25 条：提供服务之日起 10 个工作日内填报备案；备案信息变更之日起 10 个工作日内办变更；终止服务之日起 20 个工作日内办注销；主管部门收到完整材料后 30 个工作日内予以备案并发放编号 | gov-china-interface | 2026-08-02 | 中央网信办官网原文 https://www.cac.gov.cn/2022-01/04/c_1642894606364259.htm | — | A | 90 | 管的是算法备案信息，不覆盖大模型备案另一套材料与周期 |
| 《生成式人工智能服务管理暂行办法》第 2 条：未向境内公众提供服务的研发应用不适用本办法；第 17 条：有舆论属性或社会动员能力的服务须开展安全评估并履行算法备案及变更、注销手续 | gov-china-interface | 2026-08-02 | 中央网信办官网原文 https://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm | — | A | 90 | 不适用本办法不等于免除数据安全与个人信息义务 |
| 《人工智能安全治理框架》2.0 于 2025-09-15 国家网络安全宣传周发布，为全国网安标委技术文件，非强制性法规 | gov-china-interface | 2026-08-02 | 中央网信办官网发布稿 https://www.cac.gov.cn/2025-09/15/c_1759653448369123.htm | — | A | 90 | 技术文件、自愿采纳，不是备案审核的评分依据 |
| AWS Audit Manager 转入维护模式：2026-04-30 起新账号无法启用，存量账号可继续使用；停用后证据保留两年；官方指向 AWS Config Conformance Packs 作为替代，但 SOC2、GDPR 无对应模板 | gov-operating | 2026-08-02 | AWS 官方文档「AWS Audit Manager availability change」https://docs.aws.amazon.com/audit-manager/latest/userguide/audit-manager-availability-change.html | — | A | 30 | 是维护模式不是下线，存量账号仍可用 |
| 治理与证据类云服务名：Microsoft Purview DSPM for AI 与 Microsoft Foundry（原 Azure AI Foundry，2025-11-18 Ignite 更名）／Google Cloud Dataplex 已同步 Vertex AI 模型与数据集／Vertex AI Model Registry／SageMaker Model Registry 与 Model Cards／ServiceNow AI Control Tower（2026-06 起把 MCP 服务器纳入受管资产） | gov-operating | 2026-08-02 | 各厂商官方文档与发布说明（Microsoft Learn、Google Cloud Blog、ServiceNow Community 2026-06 release notes） | — | B | 30 | 只是产品名对照，不代表几家能力对等或可一一互换 |
| 欧盟人工智能法案第 4 条 AI 素养义务自 2025-02-02 适用，由成员国市场监管机构自 2026-08-02 起监督执行；欧委会明确未规定「足够」的具体水平，也不要求任何证书 | gov-operating | 2026-08-02 | 欧盟委员会官方 Q&A「AI literacy – questions & answers」https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers | — | A | 90 | 没有法定合格线，培训记录不能当合规证明 |

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
