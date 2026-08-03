# LLM-Training · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | llm-training |
| 所在层 | 基础层 |
| 主导关系 | 你要走到哪一档——读者带来的问题是「我们要不要训一个自己的大模型」「要多少钱多少卡」「只有几千条数据够微调吗」——都是分档问题，不是工序问题。 |
| 建立日期 | 2026-07-08 |
| 最后更新 | 2026-08-02 网页版增补「上云怎么落地」（Codex 对照库借鉴第 3 步·回流批二）：新增 `#cloud` 小节（结构性小节，不进章节清单）……；讲义 85 页；完整更新记录见 [raw-data/更新记录.md](raw-data/更新记录.md) |
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
