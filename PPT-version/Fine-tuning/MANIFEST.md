# Fine-tuning · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | fine-tuning |
| 所在层 | 工程保障层 |
| 主导关系 | 症状决定处方——读者带着「客户点名要微调，这单接不接、怎么答」来。 |
| 建立日期 | 2026-07-09 |
| 最后更新 | 2026-08-01 巡检刷新（B 类）：OpenAI 微调平台收摊（官方 deprecations 页时间表）——第 6 章 OpenAI 矩阵页从「三种方法并存」改「平台收摊时间表倒排」（放映序 p62）……；讲义 89 页；完整更新记录见 [raw-data/更新记录.md](raw-data/更新记录.md) |
| 产出 skill 版本 | v2.0 |

## 章节清单
| 章节 ID | 现编号 | 标题 | 状态 | 最后核实 |
| --- | --- | --- | --- | --- |
| ft-when | 第 1 章 | 什么时候该微调 | ✅ | 2026-07-09 |
| ft-methods | 第 2 章 | 微调方法谱系（全参 / LoRA / QLoRA） | ✅ | 2026-07-09 |
| ft-data | 第 3 章 | 数据准备：微调成败在此 | ✅ | 2026-07-09 |
| ft-training | 第 4 章 | 训练实操与框架图鉴 | ✅ | 2026-08-01 |
| ft-alignment | 第 5 章 | 偏好对齐落地（DPO / RFT） | ✅ | 2026-07-09 |
| ft-cloud | 第 6 章 | 托管微调服务与上云落地 | ✅ | 2026-08-01 |
| ft-eval-deploy | 第 7 章 | 评估与部署 | ✅ | 2026-07-09 |
| ft-field-guide | 第 8 章 | 售前速查 | ✅ | 2026-07-09 |

## 时效性事实（巡检盘查对象）
| 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| OpenAI 微调平台收摊（官方挂「winding down」告示）：新组织 2026-05-07 起不能创建微调任务、60 天内未跑微调推理的组织 2026-07-02 起停止新建、存量活跃客户 2027-01-06 后停止新建；存量微调模型推理保留到对应底座退役（建议复查日 2026-10-31，收摊推进随官方页滚动） | ft-cloud | 2026-08-01 | developers.openai.com/api/docs/deprecations、model-optimization 指南 | 2026-10-31 | A | 90 | 时间表随官方页滚动，对客承诺前必须查当日事实 |
| Claude 微调唯一托管路径：Amazon Bedrock 上 Claude 3 Haiku SFT（us-west-2）；官方建议 50–10,000 条样本 | ft-cloud | 2026-07-09 | AWS 官方博客、Claude Cookbook | — | A | 90 | 区域与可调模型清单月级变化，样本区间是建议不是效果保证 |
| 三大云格局：Vertex 微调形态最灵活（全参/LoRA/adapter）；Azure AI Foundry 蒸馏 GA（GPT-4o→Phi-4）；AWS Bedrock 托管 + SageMaker 兜底 | ft-cloud | 2026-07-09 | 平台官方与 2026 对比评测 | — | B | 90 | 三家形态对比是当日快照，GA 范围月级变，不能当长期能力差 |
| 开源框架四强功能趋同，stars（2026-07）：LLaMA-Factory ~68K、Unsloth ~54K、TRL ~18K、Axolotl ~11K | ft-training | 2026-07-09 | GitHub、框架对比评测 | — | B | 90 | stars 周级漂移，星数不等于生产可用度，功能趋同是评测口径 |
| PEFT 稳定版 v0.20.0（2026-07-28，一次新增 9 种 PEFT 方法）；0.18.0+ 起才兼容 Transformers v5、要求 Python 3.10+（老环境升级边界）（建议复查日随季度巡检，版本号周级漂移） | ft-training | 2026-08-01 | github.com/huggingface/peft/releases | — | A | 90 | 版本号周级漂移，兼容边界只对这条版本线，老环境要实测 |
| TRL v1.9.2（2026-07-28）；KTO 自 v1.8.0（2026-07-09）起转正为顶层 API（旧导入路径 v2.0 前发 FutureWarning）（建议复查日随季度巡检，版本号周级漂移） | ft-training | 2026-08-01 | github.com/huggingface/trl/releases | — | A | 90 | 版本号周级漂移，v2.0 前的告警期以仓库当日公告为准 |
| vLLM 动态加载 LoRA adapter 有官方安全警告：仅限隔离、完全受信环境（需显式开 VLLM_ALLOW_RUNTIME_LORA_UPDATING） | ft-eval-deploy | 2026-07-12 | docs.vllm.ai/en/stable/features/lora/ | — | A | 90 | 针对运行时动态加载的警告，不能外推到静态加载的部署形态 |
| Unsloth 宣称较 HF+FA2 快 2×、省 70% 显存；3GB 显存可玩，Colab/Kaggle 免费笔记本生态 | ft-training | 2026-07-09 | Unsloth 官方文档 | — | B | 90 | 厂商自称口径，非第三方复现，换模型换硬件需复测 |
| RFT（可验证奖励微调）为 2026 年微调新风向；开源侧主力算法 GRPO | ft-alignment | 2026-07-09 | OpenAI RFT 文档、行业综述 | — | B | 180 | 方法定位可用，可调模型清单与效果案例要另行核实 |
| 显存量级：7B 全参约 110GB（多卡）；QLoRA 后 6–8GB 单张消费卡可跑，70B 可入单张 48GB 卡 | ft-methods | 2026-07-09 | QLoRA 论文、2026 实践指南 | — | B | 180 | 量级心算值，随序列长度与批大小浮动，精确数留给 POC 实测 |
| 合成数据 + 蒸馏为微调数据主流来源（种子→扩展→judge 过滤）；DeepSeek-R1/Qwen 蒸馏系小模型涌现 | ft-data | 2026-07-09 | 行业综述、Azure/厂商公告 | — | B | 90 | 数据造法可复用，蒸馏系小模型举例随模型迭代过期 |

## 串联出边
| 本模块章节 | 指向 | 关系 |
| --- | --- | --- |
| ft-eval-deploy | predictive-ai-mlops#pam-lifecycle | 反向回指（2026-08-02 新模块建立）：「训练」这个词两边指的不是一回事：那边是拿自己数据改 LLM 权重、产物是 adapter，本册是从头拟合一个预 |
| ft-when | pe#pe-what-why | 选型链两端：提示词到头才微调；讲义已加「与 Prompt Engineering 的关系」页回指 |
| ft-when | rag#rag-what-why | 「微调 vs RAG」互为镜像：RAG 从应用侧答，本章从微调侧收口（讲义第 1 章有专页） |
| ft-methods | llm-training#llmtrain-sft | SFT 原理在那边，「拿自己数据落地」的方法选择在这边 |
| ft-alignment | llm-training#llmtrain-alignment | 对齐原理（奖励模型/RLHF）↔ 落地选择（DPO/RFT 决策表） |
| ft-alignment | llm-training#llmtrain-reasoning | RFT/GRPO 的训练侧原理与推理模型脉络在那边 |
| ft-data | llm-training#llmtrain-data | 合成数据两侧互参：那边讲预训练/后训练语料，这边讲微调数据流水线 |
| ft-eval-deploy | llm-inference#llminf-engines | 微调产物经 vLLM 多 LoRA adapter 部署进推理服务（讲义第 7 章有承接页） |
| ft-eval-deploy | llm-inference#llminf-quant | 微调后部署常配量化，质量门禁两边口径一致 |
| ft-eval-deploy | （候选）Evaluation | 微调验收这条评估线，与 RAG/Agent/LLM-Training 三条共同待 Evaluation 模块收编 |
| ft-cloud | ai-infra-platform#aip-cloud | 云上托管训练/微调形态（HyperPod/Vertex/PAI 类）两边互指：本章从微调视角、对方从平台形态视角（2026-07-09 补） |
