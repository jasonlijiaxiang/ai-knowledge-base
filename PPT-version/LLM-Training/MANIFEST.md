# LLM-Training · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | llm-training |
| 所在层 | 基础层 |
| 主导关系 | 你要走到哪一档——读者带来的问题是「我们要不要训一个自己的大模型」「要多少钱多少卡」「只有几千条数据够微调吗」——都是分档问题，不是工序问题。 |
| 建立日期 | 2026-07-08 |
| 最后更新 | 2026-07-12（B 类：全景图「基座模型（Base Model）」中英对照语序统一，内容无改动；07-13 两件套吸收：增省显存转移/恢复状态机两页深潜 + 生产验收清单，78→81 页）；2026-07-14 呈现回刷：封面眉题统一为「AI 知识库 · 讲义式 PPT」，无内容变更；2026-07-15（呈现修复：删配图替代型残留源文字页 6 页，配图后 89→83 页）；2026-07-17 呈现完善：全册末新增「来源与核实」页（关键信源一览 + 核实窗口，补齐收尾四件套），83→84 页；2026-07-17 呈现统一：全册章眉统一为青色加粗（#128199，对齐配图页样式；用户发现正文页与配图页眉题两套字体并存），无内容变更；2026-07-20 呈现完善：按新语言策略（缩写型术语首次出现展开英文全称，全角逗号格式，译名视语境）存量回刷，补 20 处、零增删页，清单见 raw-data/2026-07-20-术语全称回刷清单.md，audit PASS；2026-07-20b 反 AI 腔（v3.15）文案打磨：1 处「抓手」改「切入点」（放映序 p81），零增删页，audit PASS、渲染目检通过，旧版存 history/2026-07-20b（注：本次存留痕时误用 2026-07-20 同名覆盖了当日 v3.13 回刷前快照，已改用 b 后缀；原快照丢失，改动可依 raw-data/2026-07-20-术语全称回刷清单.md 重建）；2026-07-20 书单订正：撤馆藏回写出处时填错的链接已逐条重新核实（详见 _maintenance/2026-07-20-原电子书馆藏出处存档.md 订正说明）；2026-07-20c 呈现修复：v4.3 撤电子书馆藏后残留的馆藏指向改为指向书单条目，1 处（放映序 p31），讲义不再指向已不存在的 ebooks/ 目录，零增删页，audit PASS、渲染目检通过，旧版存 history/2026-07-20c；2026-07-21 网页版落地（第六批，与 Security、A2A 同批）：`Web-version/llm-training/index.html`，覆盖与缺口矩阵存 raw-data/2026-07-21；网页版新增「6ND 训练成本速算器」（交互件，参数量/token 数/卡数/MFU 五输入出总算力/天数/显存账，公式与系数全部来自第 7 章），未引入新事实——事实级 0、缺口级 0，无回流欠账；2026-07-23 网页版增补（基础设施章增「省显存四杠杆」与「训练验收四组八项」，集群三大件表补全；两面事实同源，PPTX 未改，PPT 侧回流待办见 _maintenance/2026-07-23-知识点对照与串联-设计.md）；2026-07-23 内容打磨（网页版·客户交锋视角，批三·基础层）：新立 2 题（要不要训自己的大模型·先问出这句话背后要的是微调/RAG/私有化哪一件/「支持分布式训练吗」怎么算验收通过·落到版本规模边界 + 四组证据）+ 1 处机制（选型梯子补上「从头训」那一档的三条门槛）+ 纠 1 处（MoE 类比「只动用 2% 的医生」与同句三个模型的激活比 3.1%/4.25%/4.28% 全对不上、MANIFEST 亦无此数，改为定性表述）。**本册对客场景本就窄，只补 2 题**；实读推翻预设：国产卡与开源许可证的事实主场在别册，在此立题只会造重复。**零新增事实**（经 check_new_numbers.py 确认无 ⚠）。判据见 _maintenance/2026-07-23-全库内容打磨-执行口径.md。PPTX 未改；2026-08-01 巡检刷新（B 类·两面同批）：第 3 章 MoE 名录把「Kimi K2 系列约 1T」换成 Kimi K3 总参 2.8T / 激活 104B（HF 模型卡 + 技术报告核实）；第 8 章许可格局页由「已清晰」改叙成「在分叉」——补 Qwen 3.7-Max 只出 API、Kimi K3 自有许可带商用阈值两条限定（阿里云百炼官方模型页 + K3 仓 LICENSE 原文核实），并核实 Qwen 3.5 397B/17B 仍是最大的开源 Qwen（3.6 开源线只到 35B-A3B）故名录不改；来源与核实页同步 2 行 + 核实窗口；网页版第 3/8 节同段同改；零增删页，audit PASS，来源笔记见 raw-data/2026-08-01-巡检刷新-来源笔记.md，旧版存 raw-data/history；**2026-08-02 网页版增补「上云怎么落地」（Codex 对照库借鉴第 3 步·回流批二）**：新增 `#cloud` 小节（结构性小节，不进章节清单），3 组 / 11 行，取材讲义 p16、p17、p39、p41、p42、p68、p69、p71、p78 等页。本册首轮被漏掉——讲义页题写作「上云落地」而非「上云怎么落地」，识别正则没匹配上，补查全库时发现。**零新增事实**（check_new_numbers.py 无 ⚠）。每组后新增「顺着追问什么」与「云替你做不了什么」两格（讲义没有的售前视角）。其后小节编号统一 +1，本页目录同步。**PPT 侧回流待办**：追问与责任边界两格尚未回流。PPTX 未改 |
| 产出 skill 版本 | v2.0 |

## 章节清单
| 章节 ID | 现编号 | 标题 | 状态 | 最后核实 |
| --- | --- | --- | --- | --- |
| llmtrain-overview | 第 1 章 | 全景总览：从随机权重到可用助手 | ✅ | 2026-07-08 |
| llmtrain-data | 第 2 章 | 数据：模型的粮食 | ✅ | 2026-07-08 |
| llmtrain-pretrain | 第 3 章 | 预训练：压缩互联网 | ✅ | 2026-08-01 |
| llmtrain-sft | 第 4 章 | 后训练 I · SFT：教会听话 | ✅ | 2026-07-08 |
| llmtrain-alignment | 第 5 章 | 后训练 II · 对齐：教会分寸 | ✅ | 2026-07-08 |
| llmtrain-reasoning | 第 6 章 | 后训练 III · RLVR 与推理模型：教会思考 | ✅ | 2026-07-08 |
| llmtrain-infra | 第 7 章 | 训练基础设施与算力账 | ✅ | 2026-07-08 |
| llmtrain-eval | 第 8 章 | 评估与发布：怎么知道练成了 | ✅ | 2026-08-01 |

## 时效性事实（巡检盘查对象）
| 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 后训练主流栈为 SFT →（可选 DPO）→ RLVR，GRPO/DAPO 一族为主力算法 | llmtrain-reasoning | 2026-07-08 | llm-stats.com 2026 后训练综述；arXiv 2407.16216 | — | B | 90 | 算法族迭代快，主流栈不等于你的数据规模适用 |
| 旗舰开源模型几乎全是稀疏 MoE：Kimi K3 总参 2.8T / 激活 104B（1M 上下文，93 层 = 69 KDA + 24 Gated MLA），DeepSeek V4-Pro 1.6T/49B、Llama 4 Maverick 400B/17B、Qwen 3.5 397B/17B；Qwen3.6 开源线只放到 35B-A3B 与 27B dense，最大的开源 Qwen 仍是 3.5 这一代 | llmtrain-pretrain | 2026-08-01 | huggingface.co/moonshotai/Kimi-K3 模型卡 + K3 技术报告 arXiv 2607.24653；HF Qwen3.6 合集与 Qwen/Qwen3.5-397B-A17B 模型卡；其余型号沿用 OpenRouter 2026-06 盘点（建议复查日 2026-11-01） | — | B | 30 | 型号快照，旗舰配方季度级换代，不能当长期格局 |
| FP8 混合精度训练进入主流实践（如 MiMo-V2.5-Pro 27T token FP8） | llmtrain-pretrain | 2026-07-08 | OpenRouter 盘点、厂商技术报告 | — | B | 90 | 旗舰厂的训练实践，小规模训练不必照搬 |
| Muon/MuonClip：Kimi K2 15.5T token 零 spike；PyTorch 2.9 原生内置 torch.optim.Muon | llmtrain-pretrain | 2026-07-08 | PyTorch 官方博客；arXiv 2507.20534 | — | A | 90 | 单次大规模训练的稳定性结论，换配方要重验 |
| 数据墙：互联网高质量文本存量约 10–50 万亿 token | llmtrain-data | 2026-07-08 | 多方分析（aimultiple、lifearchitect 等） | — | B | 180 | 估算区间宽达五倍，只作量级参考不能拿来算账 |
| 预测 2030 年推理算力占 AI 总算力约 75% | llmtrain-overview | 2026-07-08 | 行业分析（aibarcelona 等综述引用） | — | B | 180 | 预测值非现状统计，不能当算力规划依据 |
| 开源许可格局在分叉：Apache 2.0 仍是主流（Qwen 开源线 27B / 35B-A3B、Mistral、Gemma），DeepSeek 用 MIT；但旗舰另走一路——Qwen 3.7-Max 只出 API 不放权重，Kimi K3 用自有「Kimi K3 License」（MIT 式条款 + 商用阈值：做 Model as a Service 且连续 12 个月合计营收超 2000 万美元，须与月之暗面另签协议），**不是 Modified MIT** | llmtrain-eval | 2026-08-01 | huggingface.co/moonshotai/Kimi-K3 仓 LICENSE 原文；alibabacloud.com/help/en/model-studio/qwen3-7-max 官方模型页（只有 API 定价、无权重下载）；HF Qwen/Qwen3.6-35B-A3B 模型卡标 apache-2.0（建议复查日 2026-11-01） | — | B | 90 | 许可以各模型 LICENSE 原文为准，商用阈值不能跨型号套用 |
| RLHF Book 2026-01 完成章节重组（对齐 Manning 印刷版），免费在线 | 书单 | 2026-07-08 | rlhfbook.com | — | A | 90 | 在线免费是当期状态，印刷版发行后可能变 |
| Stanford CS336 Spring 2026 视频与作业全部公开 | 书单 | 2026-07-08 | cs336.stanford.edu | — | A | 90 | 本学期的开放状态，新学期页面可能替换或撤下 |

## 串联出边
| 本模块章节 | 指向 | 关系 |
| --- | --- | --- |
| llmtrain-overview / llmtrain-pretrain | llm#llm-why-transformer | LLM 原理讲架构（发动机舱），本模块讲训练（流水线），互为前置；第 3 章「可并行」一页对应其第 1 章 |
| llmtrain-sft | rag#rag-what-why | 「微调 vs RAG」互为镜像：RAG 从应用侧答，本章从训练侧补全 |
| llmtrain-reasoning | agent#agent-what-why | 推理模型/RLVR 是「agent 为什么现在能成」的模型侧原因 |
| llmtrain-eval | rag#rag-evaluation | 模型本体评估 ↔ 检索质量评估，两条评估线互参 |
| llmtrain-eval | agent#agent-eval-guardrails | 模型本体评估 ↔ 智能体评估与护栏 |
| llmtrain-eval | （候选）Evaluation | 三条评估线待未来 Evaluation 模块收编成总纲 |
| llmtrain-sft / llmtrain-alignment | fine-tuning#ft-methods / fine-tuning#ft-alignment | 本模块讲原理，Fine-tuning 模块讲「拿自己数据落地」的工程实践（2026-07-09 建成，候选转正） |
| llmtrain-overview | llm-inference#llminf-anatomy | 「训练一次性重投入 vs 推理持续账单」两侧互指；2030 推理算力 75% 预测两边同源引用（2026-07-09 补） |
| llmtrain-reasoning | llm-inference#llminf-speculative | RLVR 推理模型让 decode 负载暴涨，是推理优化成为刚需的原因；对方第 6 章以承上页回指本章（2026-07-09 补） |
| llmtrain-infra | ai-infra-compute#aic-scaleup / aic-scaleout | 并行策略（TP/PP/EP）产生的通信量决定网络怎么建；本模块讲并行、AI-Infra-Compute 讲承载它的两级互联（2026-07-09 补） |
| llmtrain-infra | ai-infra-compute#aic-hbm | 训练显存账（ZeRO/FSDP 切分）↔ HBM 硬件账；本模块讲切分、对方讲硬件地基（2026-07-09 补） |
| llmtrain-infra | ai-infra-platform#aip-scheduling / aip-faulttol | 训练作业是集群调度与容错的头号负载；本模块讲并行怎么切，AI-Infra-Platform 讲作业怎么被调度、崩了怎么续（2026-07-09 补） |
