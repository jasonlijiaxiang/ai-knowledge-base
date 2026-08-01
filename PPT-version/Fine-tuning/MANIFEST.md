# Fine-tuning · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | fine-tuning |
| 所在层 | 工程保障层 |
| 建立日期 | 2026-07-09 |
| 最后更新 | 2026-07-12（B 类：引用 _reference/Codex 对照库,补 PEFT/TRL 版本边界、vLLM 动态 LoRA 安全警告；同日字体白名单合规重制；07-13 两件套吸收：增实验失真/五层发布两页深潜 + 生产验收清单，83→86 页）；2026-07-14 呈现回刷：封面眉题统一为「AI 知识库 · 讲义式 PPT」，无内容变更；2026-07-15（呈现修复：删配图替代型残留源文字页 5 页，配图后 93→88 页）；2026-07-17 呈现完善：全册末新增「来源与核实」页（关键信源一览 + 核实窗口，补齐收尾四件套），88→89 页；2026-07-17 呈现统一：全册章眉统一为青色加粗（#128199，对齐配图页样式；用户发现正文页与配图页眉题两套字体并存），无内容变更；2026-07-20 呈现完善：按新语言策略（缩写型术语首次出现展开英文全称，全角逗号格式，译名视语境）存量回刷，补 13 处、零增删页，清单见 raw-data/2026-07-20-术语全称回刷清单.md，audit PASS；2026-07-20 书单订正：撤馆藏回写出处时填错的链接已逐条重新核实（详见 _maintenance/2026-07-20-原电子书馆藏出处存档.md 订正说明）；2026-07-21 网页版落地（第五批，与 LLM、Prompt-Engineering 同批）：`Web-version/fine-tuning/index.html`，覆盖与缺口矩阵存 raw-data/2026-07-21；网页版新增「该不该微调决策器」（交互件，第 1 章分界线 + 第 5 章对齐三级 + 第 2 章显存账合成），未引入新事实——事实级 0、缺口级 0，无回流欠账；2026-07-23 内容打磨（网页版·客户交锋视角，批三·基础层）：新立 3 题（客户张口就要微调怎么劝还不显推脱·先问「它现在哪儿不对」再算调用量账/数据交给你们训会不会泄露·数据去哪+产物归谁+凭什么信/基座升级微调是否白做·作废的只有权重、数据与评估集才是资产）+ 2 处机制（托管服务的三分归属、底座换代什么留得住）+ 纠 1 处（开篇比喻列了发手册/培训/养人三样，结论却跳过 RAG 直说「只需要培训」，与本册劝退立场和梯子顺序自相矛盾）。**零新增事实**（经 check_new_numbers.py 确认无 ⚠）。判据见 _maintenance/2026-07-23-全库内容打磨-执行口径.md。PPTX 未改；2026-08-01 巡检刷新（B 类）：OpenAI 微调平台收摊（官方 deprecations 页时间表）——第 6 章 OpenAI 矩阵页从「三种方法并存」改「平台收摊时间表倒排」（放映序 p62），第 1/5/6/8 章相关口径同改（p13/52/53/59/60/67/68/85，zip 级文字手术、零增删页）；网页版第 6 章托管表与三问、速查问答、决策器交互件同步；PEFT v0.19.1→v0.20.0、TRL v1.8.0→v1.9.2 版本回写（MANIFEST 与网页，讲义内无版本号硬写）；来源笔记见 raw-data/2026-08-01-巡检刷新-来源笔记.md |
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
| 事实 | 章节 ID | 核实日期 | 来源 |
| --- | --- | --- | --- |
| OpenAI 微调平台收摊（官方挂「winding down」告示）：新组织 2026-05-07 起不能创建微调任务、60 天内未跑微调推理的组织 2026-07-02 起停止新建、存量活跃客户 2027-01-06 后停止新建；存量微调模型推理保留到对应底座退役（建议复查日 2026-10-31，收摊推进随官方页滚动） | ft-cloud | 2026-08-01 | developers.openai.com/api/docs/deprecations、model-optimization 指南 |
| Claude 微调唯一托管路径：Amazon Bedrock 上 Claude 3 Haiku SFT（us-west-2）；官方建议 50–10,000 条样本 | ft-cloud | 2026-07-09 | AWS 官方博客、Claude Cookbook |
| 三大云格局：Vertex 微调形态最灵活（全参/LoRA/adapter）；Azure AI Foundry 蒸馏 GA（GPT-4o→Phi-4）；AWS Bedrock 托管 + SageMaker 兜底 | ft-cloud | 2026-07-09 | 平台官方与 2026 对比评测 |
| 开源框架四强功能趋同，stars（2026-07）：LLaMA-Factory ~68K、Unsloth ~54K、TRL ~18K、Axolotl ~11K | ft-training | 2026-07-09 | GitHub、框架对比评测 |
| PEFT 稳定版 v0.20.0（2026-07-28，一次新增 9 种 PEFT 方法）；0.18.0+ 起才兼容 Transformers v5、要求 Python 3.10+（老环境升级边界）（建议复查日随季度巡检，版本号周级漂移） | ft-training | 2026-08-01 | github.com/huggingface/peft/releases |
| TRL v1.9.2（2026-07-28）；KTO 自 v1.8.0（2026-07-09）起转正为顶层 API（旧导入路径 v2.0 前发 FutureWarning）（建议复查日随季度巡检，版本号周级漂移） | ft-training | 2026-08-01 | github.com/huggingface/trl/releases |
| vLLM 动态加载 LoRA adapter 有官方安全警告：仅限隔离、完全受信环境（需显式开 VLLM_ALLOW_RUNTIME_LORA_UPDATING） | ft-eval-deploy | 2026-07-12 | docs.vllm.ai/en/stable/features/lora/ |
| Unsloth 宣称较 HF+FA2 快 2×、省 70% 显存；3GB 显存可玩，Colab/Kaggle 免费笔记本生态 | ft-training | 2026-07-09 | Unsloth 官方文档 |
| RFT（可验证奖励微调）为 2026 年微调新风向；开源侧主力算法 GRPO | ft-alignment | 2026-07-09 | OpenAI RFT 文档、行业综述 |
| 显存量级：7B 全参约 110GB（多卡）；QLoRA 后 6–8GB 单张消费卡可跑，70B 可入单张 48GB 卡 | ft-methods | 2026-07-09 | QLoRA 论文、2026 实践指南 |
| 合成数据 + 蒸馏为微调数据主流来源（种子→扩展→judge 过滤）；DeepSeek-R1/Qwen 蒸馏系小模型涌现 | ft-data | 2026-07-09 | 行业综述、Azure/厂商公告 |

## 串联出边
| 本模块章节 | 指向 | 关系 |
| --- | --- | --- |
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
