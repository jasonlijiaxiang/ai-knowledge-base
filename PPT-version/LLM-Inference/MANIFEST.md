# LLM-Inference · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | llm-inference |
| 所在层 | 基础层 |
| 主导关系 | 两阶段的相反脾气——读者要当场回答的是「你们能承诺多少并发」「为什么又贵又慢」「别家报价便宜一半是不是你们黑」。 |
| 建立日期 | 2026-07-09 |
| 最后更新 | 2026-08-02 上云落点覆盖判定（Codex 对照库借鉴第 3 步）：讲义只有三处零散提及（Bedrock / Vertex AI / Azure AI Foundry 及各模型厂 API、云厂商托管服务 SLA、……；讲义 94 页；完整更新记录见 [raw-data/更新记录.md](raw-data/更新记录.md) |
| 产出 skill 版本 | v2.0（2026-07-12 增补由 v3.3 执行） |
| 讲义页数 | 94 |

## 章节清单
| 章节 ID | 现编号 | 标题 | 状态 | 最后核实 |
| --- | --- | --- | --- | --- |
| llminf-anatomy | 第 1 章 | 推理是怎么跑起来的 | ✅ | 2026-07-09 |
| llminf-kv-budget | 第 2 章 | KV Cache 与显存账 | ✅ | 2026-07-09 |
| llminf-batching | 第 3 章 | 把 GPU 喂饱：批处理与调度 | ✅ | 2026-07-09 |
| llminf-engines | 第 4 章 | 推理框架图鉴 | ✅ | 2026-07-09 |
| llminf-quant | 第 5 章 | 让模型变小：量化 | ✅ | 2026-07-09 |
| llminf-speculative | 第 6 章 | 让模型变快：投机解码与算法加速 | ✅ | 2026-07-09 |
| llminf-disagg | 第 7 章 | 集群级：P/D 分离与分布式推理 | ✅ | 2026-07-09 |
| llminf-production | 第 8 章 | 生产化与售前速查 | ✅ | 2026-07-09 |

## 时效性事实（巡检盘查对象）
| 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| vLLM 当前 v0.26.0（2026-07-27），事实上的默认推理引擎（硬件覆盖最广、NVIDIA NGC 收编）（建议复查日随月度巡检，版本号周级漂移） | llminf-engines | 2026-08-01 | github.com/vllm-project/vllm/releases（版本号）；格局定性另见 2026 对比评测（raw-data 核实笔记） | — | B | 90 | 版本号周级过期；默认地位不等于你的负载上最优 |
| SGLang 当前 v0.5.16（2026-07-25）；v0.5.13 起投机解码 Spec V2 默认开启；DeepSeek 系 day-0 支持（建议复查日随月度巡检，版本号周级漂移） | llminf-engines | 2026-08-01 | github.com/sgl-project/sglang/releases | — | A | 90 | 默认开启不等于你的模型有收益，版本周级漂 |
| TensorRT-LLM 进入 1.x（1.0 起 PyTorch 架构转正）；稳定版 v1.2.1，1.3.0 处于 RC（rc20 为最后支持 TensorRT backend 的 RC，下版移除）；商业包装为 NIM | llminf-engines | 2026-08-01 | GitHub releases（github.com/NVIDIA/TensorRT-LLM/releases） | — | A | 90 | RC 不是稳定版；backend 移除的具体版本与时点未定 |
| FP8 为生产推理默认精度（校准后损失约 0.5–2%）；NVFP4 面向 Blackwell、工具链成熟中、尚未大规模生产 | llminf-quant | 2026-07-09 | vrlatech/sesamedisk 2026 量化综述 | — | B | 90 | 通用损失量级，具体任务要用业务评测集实测 |
| 投机解码已生产标配：EAGLE-3 主流、vLLM 报告最高 ~2.5x、接受率>80% 时 2–4x | llminf-speculative | 2026-07-09 | spheron/sesamedisk 2026 实测综述 | — | B | 90 | 加速比不能脱离并发与文本类型外推 |
| 行业预测 2030 推理算力占 AI 总算力 ~75%（与 LLM-Training llmtrain-overview 同源事实） | llminf-speculative | 2026-07-09 | 行业分析综述 | — | B | 180 | 是预测不是现状统计，不能当算力采购依据 |
| NVIDIA Dynamo 1.0 于 2026-03-16 GTC GA，当前稳定版 v1.3.0（2026-07-22，第 16 个特性版）：P/D 分离编排 + KV 感知路由 + NIXL；官方宣称 DeepSeek-R1/Blackwell 最高 7x 吞吐（建议复查日随月度巡检，版本号月级漂移） | llminf-disagg | 2026-08-01 | NVIDIA 官方博客、GitHub releases（github.com/ai-dynamo/dynamo） | — | B | 90 | 厂商基准下的 7×，不能当生产环境承诺 |
| 压测工具换代：NVIDIA AIPerf v0.11.0（2026-07-08）接棒 GenAI-Perf（官方提供迁移指南），配合 vllm bench serve 为 token 级压测主力 | llminf-production | 2026-07-12 | pypi.org/project/aiperf、github.com/ai-dynamo/aiperf | — | A | 90 | 只说工具换代，不含任何容量或性能结论 |
| P/D 分离成大规模服务共识：Mooncake（FAST'25 最佳论文）、DistServe（OSDI'24）、开源 llm-d（K8s 系） | llminf-disagg | 2026-07-09 | arXiv 2407.00079 等 | — | A | 180 | 论文负载下的收益，换负载要重测，只作量级参考 |
| 成本量级参考：H100 级时租 $2–3/卡、70B FP8 双卡 ~3000 token/s、自建盈亏线利用率 ~40–50%、托管 API $2–5/百万输出 token | llminf-production | 2026-07-09 | 2026 年中多方评测量级归纳（讲义中已标注"参考"口径） | — | B | 30 | 量级直觉不能当报价，各云与机型差异大 |

## 串联出边
| 本模块章节 | 指向 | 关系 |
| --- | --- | --- |
| llminf-kv-budget | llm#llm-inference-kv | KV Cache「为什么存在」（机制）在 LLM 原理第 4 章，「怎么管好」（系统）在本章——互为前后篇，讲义内有承上启下页；2026-07-20 对话沉淀拆分互指：本章新增「资源账」3 页（系统面）↔ 对方第 4 章新增「窗口由什么决定／四堵墙」2 页（原理面） |
| llminf-anatomy | llm-training#llmtrain-overview | 「训练一次性重投入 vs 推理持续账单」同一事实两侧；2030 推理算力 75% 预测两边同源引用 |
| llminf-speculative | llm-training#llmtrain-reasoning | 推理模型（RLVR）让 decode 负载暴涨十几倍，是推理优化 2026 成为刚需的直接原因 |
| llminf-batching | agent#agent-context | Prefix Caching/RadixAttention 的最大受益者是多轮 Agent——上下文工程在推理侧的回报 |
| llminf-kv-budget | rag#rag-what-why | 长上下文 prefill 平方级+KV 线性级两头吃钱，是「1M 窗口不是 RAG 终结者」的推理侧论据 |
| llminf-production | （候选）Evaluation | 推理压测/SLO/goodput 这条线待未来 Evaluation 模块收编 |
| llminf-kv-budget | ai-infra-compute#aic-hbm | KV Cache 显存账（机制）↔ HBM 硬件账（地基）：互为前后篇，2026-07-09 建 AI-Infra-Compute 时补 |
| llminf-quant | ai-infra-compute#aic-gpu | 量化落地 ↔ FP8/FP4 精度阶梯硬件前提，同源口径（2026-07-09 补） |
| llminf-disagg | ai-infra-compute#aic-storage | P/D 分离/KV 路由 ↔ KV Cache 外置存储：存储升级为推理性能部件（2026-07-09 补） |
| llminf-disagg | ai-infra-platform#aip-serving | P/D 分离/Dynamo/llm-d 机制在本模块，平台承载（编排/扩缩/路由）在 AI-Infra-Platform 第 7 章（2026-07-09 补） |
| llminf-production | ai-infra-platform#aip-observability | 利用率/goodput/SLO 运营两侧互指（2026-07-09 补） |
