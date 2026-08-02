# Prompt Engineering · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | pe |
| 所在层 | 基础层 |
| 主导关系 | 一次对与每次都对——读者是带着客户那句「效果不好是不是模型不行」和「不就是写几句话，凭什么单收这笔钱」进来的。 |
| 建立日期 | 2026-07-09 |
| 最后更新 | 2026-07-12（B 类：字体白名单合规重制，Arial→Cambria/Calibri，内容无改动）；07-13 两件套吸收：增五层结构/预算四分区两页深潜 + 生产验收页，71→74 页，50 处页脚页码已重排；2026-07-15 账实回刷：07-14 配图增页此前漏记账，实测 80 页（放映序）；2026-07-17 呈现完善：全册末新增「来源与核实」页（关键信源一览 + 核实窗口，补齐收尾四件套），80→81 页；2026-07-17 内容增补：速查章增「数字弹药」页 1 页（本册及跨模块已核实数字的集中速查，每条带用法与源指针），81→83 页；2026-07-17 呈现统一：全册章眉统一为青色加粗（#128199，对齐配图页样式；用户发现正文页与配图页眉题两套字体并存），无内容变更；2026-07-20 内容勘误：缓存折扣方向修正——"打 9 折"实为"约 1 折（0.1×，省约 90%）"，改讲义 6 页 7 处（放映序 p56/60/61/73/74/76）+ 本表 1 行，双口径并写（skill v3.13 换算陷阱规则首用），页数不变，旧版存 history/2026-07-20；2026-07-20 呈现完善：按新语言策略（缩写型术语首次出现展开英文全称，全角逗号格式，译名视语境）存量回刷，补 5 处、零增删页，清单见 raw-data/2026-07-20-术语全称回刷清单.md，audit PASS；2026-07-20b 呈现修复：v4.3 撤电子书馆藏后残留的馆藏指向改为指向书单条目，1 处（放映序 p82），讲义不再指向已不存在的 ebooks/ 目录，零增删页，audit PASS、渲染目检通过，旧版存 history/2026-07-20b；2026-07-21 网页版落地（第五批，与 LLM、Fine-tuning 同批）：`Web-version/prompt-engineering/index.html`，覆盖与缺口矩阵存 raw-data/2026-07-21；网页版新增「提示词处方器」（交互件，症状 × 模型类型 → 技巧组合），未引入新事实——事实级 0、缺口级 0，无回流欠账；2026-07-23 网页版增补（预算四分区补「位置规则」，售前章增「上线验收四条线」；两面事实同源，PPTX 未改，PPT 侧回流待办见 _maintenance/2026-07-23-知识点对照与串联-设计.md）；2026-07-23 内容打磨（网页版·客户交锋视角，批三·基础层）：新立 3 题（不就是写几句话凭什么收钱·收的是「每次都对」/换模型提示词是否全废·骨架不废写法重调接口重接/能否交业务同事写·分层放权 + 改哪层审哪层）+ 2 处机制（工作量不在措辞上、换模型的迁移账）+ 纠 1 处（baseline 图例写「07-13 来自五层结构深潜」但全页无题标该日，那轮加的是正文）。**零新增事实**（经 check_new_numbers.py 确认无 ⚠）。判据见 _maintenance/2026-07-23-全库内容打磨-执行口径.md。PPTX 未改；2026-07-30 打磨：①修全册页脚页码错位 62 页（历次插页后未重排，新增门禁 check_footer_pagenum.py 与修复工具 fix_footer_pagenum.py，此前八道门禁与 audit 17 项均查不出）；②第 4 章 p46 模型阵容对齐本库 Model-Landscape 册并补 effort 口径；③p47 换承载——由「推理模型 vs 通用模型」二分改为「三个旋钮的现状」（temperature/top_p 与 prefill 在当前主力模型上已移除，effort 成为主控）；④p56 缓存章补前缀匹配机制与最小可缓存前缀门槛。零增删页（83 页不变），audit PASS、渲染目检通过，旧版存 history/2026-07-30；**2026-08-01 巡检刷新（B 类·DSPy 版本框架）**：讲义第 5 章（放映序 p55）「DSPy（2.x）」改「DSPy（3.x，当前 3.2.1）」，同页核实标记改「（核实 2026-07-09；版本 2026-08-01）」——MIPROv2/GEPA 两个数字本次未重核，故两个日期分开写；来源与核实页核实窗口延至 2026-08-01；网页版同段补版本线、ev 行与 src-dspy 信源、页头徽标同步。零增删页（83 页不变），audit PASS、页脚页码门禁通过，旧版存 raw-data/history。**待定（未改，留给下一批拍板）**：官方 optimizers 文档现把 BootstrapFewShot 列为「安全的第一次尝试」、MIPROv2 定位为「指令与示例要一起调时的 state of the art」，「默认优化器 MIPROv2」这个说法与官方现口径已有出入；另 GEPA 论文摘要的「35× fewer rollouts」基线是 GRPO 不是 MIPROv2，库内「较 MIPROv2 再 +13%、rollout 少 35×」把两个基线并成了一句，且摘要写的是「over 10%（AIME-2025 上 +12%）」而非 +13%——详见 raw-data/2026-08-01-巡检刷新-来源笔记.md；**2026-08-02 网页版增补「上云怎么落地」（Codex 对照库借鉴第 3 步·回流批）**：新增 `#cloud` 小节（结构性小节，与 qa/related/sources 同类，不进章节清单），3 组 / 7 行，取材讲义 p53、p54、p56、p58、p60、p68、p70、p76。**零新增事实**——服务清单与「给客户一句话」全部来自讲义已有的上云页，check_new_numbers.py 确认无 ⚠。**新增的是两格讲义没有的内容**：每组后写「顺着追问什么」与「云替你做不了什么」，即对照库 cloudHooks 五要素里我方缺的「发现问题」与「责任边界」。其后小节编号统一 +1，本页目录同步。**PPT 侧回流待办**：讲义云页只有「环节 / 服务 / 给客户一句话」三格，追问与责任边界两格尚未回流。PPTX 未改；2026-08-02（同日晚）云落点两格回流：正文末章之后追加 1 页「上云追问卡」（顺着追问什么／云替你做不了什么，逐条压缩自网页版云落点，零新增事实），讲义 83 页 |
| 产出 skill 版本 | v3.0 |
| 状态 | ✅ 已完成（书单 10 项 / 5 份落地；讲义页数见页数账） |

## 章节清单
| 章节 ID | 现编号 | 标题 | 状态 | 最后核实 |
| --- | --- | --- | --- | --- |
| pe-what-why | 第 1 章 | 是什么 / 为什么 | ✅ | 2026-07-09 |
| pe-anatomy | 第 2 章 | 提示词解剖（角色/四要素/分隔符） | ✅ | 2026-07-09 |
| pe-core-techniques | 第 3 章 | 核心技巧（zero/few-shot、CoT、结构化输出、清晰指令） | ✅ | 2026-07-09 |
| pe-advanced-reasoning | 第 4 章 | 进阶推理与编排（自洽性、ReAct、提示词链、推理模型时代） | ✅ | 2026-07-09 |
| pe-engineering | 第 5 章 | 工程化与自动优化（版本化、评估驱动、DSPy、缓存） | ✅ | 2026-07-09 |
| pe-security | 第 6 章 | 安全与风险（提示词注入、越狱、OWASP、纵深防御） | ✅ | 2026-07-09 |
| pe-presales-map | 第 7 章 | 售前视角收拢（问题速查、选型树、上云全景、串联） | ✅ | 2026-07-09 |

## 时效性事实（巡检盘查对象）
| 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 推理模型阵容（GPT-5.6、Claude 5、Gemini 3.1 Pro、Grok 4.3、DeepSeek V4）已把 CoT 内建，不再需手写「一步步思考」；控制点从「思考预算 token 数」换成 effort（low/medium/high/xhigh/max，默认 high）；思考 token 照常计费但原始思维链不返回，最多给摘要 | pe-advanced-reasoning | 2026-07-30 | Claude API 参考（模型与 effort 口径）；阵容与本库 Model-Landscape 册同源 | 2026-10-31 | B | 30 | 档位名与默认值按家不同，别把一家参数照搬另一家 |
| 两个经典提示词旋钮在 Claude 当前主力模型上已移除：temperature/top_p/top_k（Opus 5、Fable 5、Opus 4.8·4.7 传了返回 400）与助手预填充 prefill（4.6 及以后返回 400，改用结构化输出） | pe-advanced-reasoning | 2026-07-30 | Claude API 参考（迁移指南 breaking changes） | 2026-10-31 | A | 90 | Claude 一家的接口变更，不能推给其它厂商同名参数 |
| DSPy 已到 3.x 线（当前稳定版 3.2.1，2026-05-05；3.3.0b1 为预发布，2026-05-28）——库内原写「2.x」是版本框架错，2026-08-01 更正；默认优化器 MIPROv2（贝叶斯联合优化指令+示例，结构化任务较手写 +10~40%）；GEPA 反射式进化优化器较 MIPROv2 +13%、rollout 少 35×，ICLR 2026 oral | pe-engineering | 2026-07-09 | 版本＝github.com/stanfordnlp/dspy releases（版本口径 2026-08-01 重核）；优化器数字＝futureagi（DSPy optimizers 2026）、morphllm（GEPA，2026-07-09 后未重核） | 2026-11-30 | B | 90 | 基线口径已存疑，提升幅度不能当自家任务的预期值 |
| 提示词缓存：截至 2026-06 三大厂缓存读取价约为基础输入价 0.1×（约 1 折，省约 90%）；OpenAI 自动（≥1024 token）、Anthropic 手动 cache_control 且写入加价（5min 1.25×/1h 2×）、Gemini 显式+按小时存储计费 | pe-engineering | 2026-07-20 | leanlm、prompthub、ofox.ai、artificialanalysis；2026-07-20 对照 Anthropic 官方定价文档修正折扣方向（原核实笔记为"省约 90%"，成品曾误写成"打 9 折"）；缓存按前缀匹配（前缀改一字节则其后全失效）；最小可缓存前缀随模型不同（512–4096 token，且不随代际单调），低于门槛静默不缓存不报错 | 2026-10-31 | B | 30 | 折扣与最小前缀按厂按模型不同，报价前逐家重核 |
| 各云提示词服务：AWS Bedrock Prompt Management + Advanced Prompt Optimization（改写/迁移+评估环）；Vertex AI / Gemini Enterprise Prompt Optimizer；Azure AI Foundry Prompt Flow | pe-engineering / pe-presales-map | 2026-07-09 | aws.amazon.com/bedrock/prompt-management、AWS News Blog、InfoWorld | 2027-01-31 | B | 90 | 只说服务存在，不代表三家能力对等或目标区域可用 |
| OWASP Top 10 for LLM Applications 2025：LLM01 提示词注入连续两版第一；RAG 与微调都不能根治注入，只能纵深防御 | pe-security | 2026-07-09 | OWASP GenAI（https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/）、mend/aembit/promptfoo 解读 | 2027-01-31 | A | 180 | 风险目录不是防护方案，也不能当合规验收清单 |
| 云护栏：AWS Bedrock Guardrails、Azure AI Content Safety、Google Vertex 安全过滤 / Model Armor | pe-security | 2026-07-09 | 各云官方文档 | 2027-01-31 | A | 90 | 护栏是通用兜底，拦截率与中文场景效果须自行实测 |

## 串联出边
| 本模块章节 | 指向 | 关系 |
| --- | --- | --- |
| pe-what-why | fine-tuning#ft-when | 选型边界：提示词到头了、才上微调；对方第 1 章讲「何时微调 vs 提示词/RAG」，互为参照 |
| pe-what-why | rag#rag-what-why | 「提示词 vs RAG」的选型边界：补知识用 RAG，改行为用提示词 |
| pe-anatomy | llm#llm-inference-kv | 提示词为什么有效，根子在上下文窗口与注意力——上下文工程的「物理学」（讲义第 2/4 章埋点） |
| pe-advanced-reasoning | agent#agent-context | ReAct、上下文工程就是提示词技巧在「工具循环」里的应用；Agent 第 5 章为工程化展开 |
| pe-engineering | evaluation#eval-methods | 评估驱动的提示词优化直接用 Evaluation 的判分四法 / LLM-as-a-Judge（eval-judge） |
| pe-security | security（候选） | 提示词注入是未来 Security 模块的一块 |

> 备注：以上为本模块的出边（本次讲义已在第 1/4/7 章埋入串联点）。**反向回指已双向落账（2026-07-09）**：LLM / Agent / RAG / Evaluation / Fine-tuning 五个模块的讲义各已追加一页「附 · 与 Prompt Engineering 的关系」，各模块 MANIFEST 亦新增对应回指行（llm-inference-kv / agent-context / rag-what-why / eval-methods / ft-when → pe#…）。security 边仍为候选（模块待建）。
