# LLM 原理 · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | llm |
| 所在层 | 基础层 |
| 主导关系 | 架构与账单的对应——读者带着客户的四句抱怨来：又贵又慢、并发上不去、知识过时、都 1M 窗口了还要不要 RAG。 |
| 建立日期 | 2026-07-08 |
| 最后更新 | 2026-08-02 上云落点覆盖判定（Codex 对照库借鉴第 3 步）：本册讲 Transformer、注意力、KV 缓存等模型原理，与具体云服务无强关联；……；讲义 91 页；完整更新记录见 [raw-data/更新记录.md](raw-data/更新记录.md) |
| 产出 skill 版本 | v2.0 |

## 章节清单
| 章节 ID | 现编号 | 标题 | 状态 | 最后核实 |
| --- | --- | --- | --- | --- |
| llm-why-transformer | 第 1 章 | 从序列问题到 Transformer | ✅ | 2026-07-08 |
| llm-attention-qkv | 第 2 章 | 注意力机制：QKV 拆解 | ✅ | 2026-07-08 |
| llm-architecture | 第 3 章 | Transformer 全解剖 | ✅ | 2026-07-08 |
| llm-inference-kv | 第 4 章 | 从架构到推理：上下文窗口与 KV 缓存 | ✅ | 2026-07-08 |
| llm-attention-zoo | 第 5 章 | 注意力的工程进化 | ✅ | 2026-08-01 |
| llm-presales-map | 第 6 章 | 售前视角收拢 | ✅ | 2026-07-08 |

## 时效性事实（巡检盘查对象）
| 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GQA 8:1 是生产默认（生态支持最全）；MLA 把 KV 缓存压到同级 GQA 的约 1/10，DeepSeek 全系与 GLM-5 在用；Kimi 旗舰已转 KDA 混合——K3 的 93 层 = 69 层 KDA + 24 层 Gated MLA，即每 4 层留 1 层 MLA 兜全局注意力 | llm-attention-zoo | 2026-08-01 | huggingface.co/moonshotai/Kimi-K3 模型卡；K3 技术报告 arXiv 2607.24653（建议复查日 2026-11-01） | — | B | 90 | 旗舰当季采用快照，不能推及中小模型或下一代 |
| DeepSeek V3.2 的 DSA 稀疏注意力（lightning indexer + top-k，O(L²)→O(Lk)）已生产化，GLM-5 跟进；DeepSeek-V4 用混合压缩注意力冲百万上下文 | llm-attention-zoo | 2026-07-08 | arXiv 2512.02556、arXiv 2512.12087 | — | B | 90 | 复杂度降不等于端到端提速，V4 口径随发布可变 |
| 线性混合格局是「效率 ↔ 精度」的钟摆：Qwen3-Next 的 3:1 Gated DeltaNet 混合被 Qwen3.5 旗舰转正；Kimi Linear 的通道级门控进化为 KDA，随 Kimi K3（总参 2.8T / 激活 104B / 1M 上下文）进旗舰；MiniMax 则 M1 押线性 → M2 退回全注意力 → M3（2026-06-01）改用 MSA 稀疏注意力——「线性未进旗舰」已翻篇，「纯线性扛不住复杂推理」仍成立 | llm-attention-zoo | 2026-08-01 | huggingface.co/moonshotai/Kimi-K3 模型卡 + arXiv 2607.24653；minimax.io/blog/minimax-m3 + MSA 论文 arXiv 2606.13392（建议复查日 2026-11-01） | — | B | 90 | 各家路线的钟摆是厂商个体选择，不能外推全行业 |
| FlashAttention-4：2026-03-05 论文（arXiv 2603.05451），2026-07-01 PyPI 发包，面向 Blackwell 非对称硬件 | llm-attention-zoo | 2026-07-08 | together.ai 博客、pypi.org/project/flash-attn-4 | — | A | 90 | 论文与发包不等于生产可用，非 Blackwell 硬件不适用 |
| 托管商用模型 13 家提供 ≥1M 上下文窗口（Gemini 3.1 Pro 2M；开源 Llama 4 Scout 标称 10M）；RULER/MRCR v2/NoLiMa 显示多事实检索过 200K 普遍掉 30–60 分 | llm-inference-kv | 2026-07-08 | morphllm.com、ofox.ai 长上下文基准汇总 | — | B | 30 | 跨模型汇总的掉分区间，单模型有效长度看当期基准 |
| 视频 token 量级：Gemini 官方口径默认分辨率约 300 token/秒（258/帧 @1fps + 音频 32/秒），1 小时视频 ≈ 108 万 token（建议复查日 2026-10-31，随 Multimodal 巡检顺带） | llm-inference-kv | 2026-07-20 | ai.google.dev/gemini-api/docs/video-understanding（raw-data/2026-07-20-联网核实笔记-视频token.md） | — | B | 90 | Gemini 单家换算口径，其他厂商与非默认分辨率不适用 |
| RoPE 是主流开源模型位置编码的事实标准；超长上下文靠插值/YaRN 等扩展 | llm-architecture | 2026-07-08 | 开源架构对比综述（Raschka） | — | B | 180 | 综述口径，不代表每个新架构都用 RoPE |
| MoE 为 2026 主流旗舰标配（DeepSeek-V3 总 671B/激活 37B；Qwen3.5、Kimi K2 同路线） | llm-architecture | 2026-07-08 | DeepSeek-V3 论文、架构对比综述 | — | B | 90 | 旗舰格局判断，不能推及中小尺寸与私有部署选型 |

## 串联出边
| 本模块章节 | 指向 | 关系 |
| --- | --- | --- |
| llm-inference-kv | pe#pe-anatomy | 提示词为什么有效的「物理学」基础：上下文窗口 / 注意力决定能放多少、放多准；讲义已加「与 Prompt Engineering 的关系」页回指 |
| llm-inference-kv | rag#rag-what-why | 「1M 窗口不是 RAG 终结者」：本模块给架构论据（成本/有效性/权限），RAG 第 1 章为应用视角，双向互为弹药 |
| llm-inference-kv | agent#agent-context | 上下文工程的物理学解释：O(n²) 成本 + 有效窗口约束是 Agent 第 5 章那套做法的根源 |
| llm-architecture | llm-training#llmtrain-pretrain | 本模块讲 MoE/参数账的架构视角，训练侧故事（Scaling Laws、MoE 训练、FP8）在 LLM-Training 第 3 章展开；对方以 llmtrain-overview/pretrain → llm#llm-why-transformer 回指，互为前置 |
| llm-inference-kv | llm-inference#llminf-kv-budget | 本章讲 KV 缓存「为什么存在」（机制），LLM-Inference 第 2 章讲「怎么管好」（服务系统），互为前后篇；对方讲义有承上启下页回指本章（2026-07-09 补）；2026-07-20 对话沉淀拆分互指：本章新增「窗口由什么决定／四堵墙」2 页（原理面）↔ 对方第 2 章新增「资源账」3 页（系统面） |
| llm-attention-qkv | multimodal#mm-encoder | ViT = 注意力吃图像：patch 即 token、QKV 原样复用、O(n²) 对图像同样成立；第 2 章已加「承上启下 · 与 Multimodal」页回指（2026-07-10） |
