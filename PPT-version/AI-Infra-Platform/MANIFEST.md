# AI-Infra-Platform · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | ai-infra-platform |
| 所在层 | 算力底座层 |
| 主导关系 | 利用率的账——读者要回答的是「客户卡都买了，凭什么再向他卖一层平台」。 |
| 建立日期 | 2026-07-09 |
| 最后更新 | 2026-07-12（B 类：引用 _reference/Codex 对照库,补 K8s 推理服务化与队列组件锚点；同日中英对照语序统一；07-13 两件套吸收：增四条控制链/可追溯发布图两页深潜 + 平台验收清单，74→77 页）；2026-07-14 呈现回刷：封面眉题统一为「AI 知识库 · 讲义式 PPT」，无内容变更；2026-07-15（呈现修复：删配图替代型残留源文字页 6 页，配图后 85→79 页）；2026-07-17 呈现完善：新增「总收束」页（每章一句话）+ 全册末「来源与核实」页，79→81 页；2026-07-17 呈现统一：全册章眉统一为青色加粗（#128199，对齐配图页样式；用户发现正文页与配图页眉题两套字体并存），无内容变更；2026-07-20 呈现完善：按新语言策略（缩写型术语首次出现展开英文全称，全角逗号格式，译名视语境）存量回刷，补 18 处、零增删页，清单见 raw-data/2026-07-20-术语全称回刷清单.md，audit PASS；2026-07-21 网页版落地（第八批收官，与 Data-Engineering、AI-Infra-Compute 同批）：`Web-version/ai-infra-platform/index.html`，覆盖与缺口矩阵存 raw-data/2026-07-21；网页版新增「云上算力形态定档器」（交互件，三问定档出形态+自建隐藏工作量四列+验收口径，判据全部来自第 8 章），未引入新事实——事实级 0、缺口级 0，无回流欠账；2026-07-23 网页版增补（平台全景增「四条控制链」，定档器交互件改用公共渲染件（去本地遮蔽 card）；两面事实同源，PPTX 未改，PPT 侧回流待办见 _maintenance/2026-07-23-知识点对照与串联-设计.md）；2026-07-23 内容打磨（网页版·客户交锋视角，批四·推理与底座）：新立 3 题（利用率翻倍敢不敢写进合同·签口径/基线/动作而非绝对数字，本页 10–20%→50%+ 是量级区间不是承诺值／平台搭起来多久要几个人·拆「搭起来」一次性与「管得住」长期两段／平台交付怎么算验收·签演练加记录，当场拔一个节点掐表看检测→驱逐→替换→续训）+ 2 处机制（「把利用率写成能签的话」四行表、自建四列活分一次性与长期）+ 纠 1 处（Q1「把利用率从个位数拉到 50%+」与同题 qa-why「无管理集群常年 10–20%」自相矛盾，且「个位数」在网页面无出处，改为定性表述、数字与条件交回 qa-why 承担）+ 呈现修 1 处（责任递交线图内文字「越往下越省心」与本页正文及 PPT 面 slide70/71/76 一律「往上＝托管」方向相反，图内 ①②③④ 已在行首，去方位词改为「① → ④ 越省心」）。7→10 题。**零新增事实**（check_new_numbers.py 无 ⚠）。PPT 侧登记 1 项（slide12 同页并写「从个位数拉到 50%+」与「无管理集群常年 10–20%」，两句张力与网页面同源）。PPTX 未改；2026-08-01 巡检刷新（B 类·P2 版本号回写 + 结构小修）：KServe v0.18.0→**v0.19.0**（2026-06-14）、Kueue v0.18.3→**v0.19.0**（2026-07-22），均核到 GitHub releases；LLMInferenceService 经官方文档复核仍是 alpha（serving.kserve.io/v1alpha2），措辞维持。**结构小修**：这一行原躺在「稳定事实（不会过期，无需巡检）」表里——带版本号的事实天然会漂，放进免巡检表等于每轮都要靠补审兜底（2026-08-01 巡检报告七·3 提出），本次挪回「时效性事实」表并补齐核实日期与信源列（它在旧表里本就多出两列，格式也不合）。**本册 PPTX 与网页版零改动**：讲义与 `Web-version/ai-infra-platform/index.html` 通篇只写「KServe / llm-d / Dynamo」组件名，不带版本号（已 grep 全 81 个 slide XML 与整页 HTML 确认），无锚点可改；Dynamo 同理只有定位描述、无版本号，与 LLM-Inference 册的 v1.3.0 回写无需拉齐。来源笔记见 raw-data/2026-08-01-巡检刷新-来源笔记.md |
| 产出 skill 版本 | v3.0 |

## 章节清单
| 章节 ID | 现编号 | 标题 | 状态 | 最后核实 |
| --- | --- | --- | --- | --- |
| aip-overview | 第 1 章 | 平台全景：从「一堆卡」到「一个平台」 | ✅ | 2026-07-09 |
| aip-k8s-gpu | 第 2 章 | K8s + GPU 基础：从数卡到懂卡 | ✅ | 2026-07-09 |
| aip-scheduling | 第 3 章 | 作业调度：让最贵的卡不空转 | ✅ | 2026-07-09 |
| aip-sharing | 第 4 章 | GPU 切分与多租户 | ✅ | 2026-07-09 |
| aip-faulttol | 第 5 章 | 训练容错工程：万卡集群故障是常态 | ✅ | 2026-07-09 |
| aip-observability | 第 6 章 | 可观测性与利用率运营 | ✅ | 2026-07-09 |
| aip-serving | 第 7 章 | 推理服务平台化 | ✅ | 2026-07-09 |
| aip-cloud | 第 8 章 | 云上算力形态与售前速查 | ✅ | 2026-07-09 |

## 时效性事实（巡检盘查对象）
| 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| DRA（Dynamic Resource Allocation）K8s v1.34（2025-08）GA 并默认启用，取代 device plugin 的"只数卡"模式；GKE/AKS/OpenShift 4.21 等托管发行版已跟进 | aip-k8s-gpu | 2026-07-09 | kubernetes.io 官方博客、Red Hat、Google Cloud、AKS 工程博客 | — | A | 90 | 上游 GA 不等于各托管发行版默认开，落地版本逐云核 |
| KubeCon EU 2026 上 NVIDIA 把 NVIDIA DRA Driver for GPUs 捐给 CNCF；DRA 成 GPU 调度社区主线 | aip-k8s-gpu | 2026-07-09 | KubeCon EU 2026 报道、AKS 博客 2026-03 | — | B | 90 | 捐赠只是治理归属变化，不代表已毕业或生产就绪 |
| KAI Scheduler：NVIDIA 2025-04 开源（Apache 2.0），与商业版 Run:ai 同一调度核（gang/拓扑感知/bin-packing/DRA 集成）；Run:ai 差异=UI/多集群/SLA/fractional GPU | aip-scheduling | 2026-07-09 | zenml/cloudoptimo/rack2cloud 2026 对比综述 | — | B | 90 | 三方综述的商开差异，签单前按当期官方功能表核 |
| 调度分层共识：Kueue 管准入配额、Volcano/KAI 管 gang 与放置，生产常两层叠用；小集群（<16 卡）单用 Kueue 或 KAI 够用；Slurm 在 HPC 与托管服务中仍主力 | aip-scheduling | 2026-07-09 | cloudoptimo/zenml 2026 综述 | — | B | 90 | 分层是社区共识与经验阈值，不是某客户集群的选型结论 |
| GPU 切分三板斧口径：MIG（硬件隔离、最多 7 实例）、时间片（高密度无隔离、不宜生产多租户）、MPS；HAMi（CNCF）任意 NVIDIA 卡细粒度配额；MIG 正与 DRA 打通 | aip-sharing | 2026-07-09 | NVIDIA GPU Operator 文档、scaleops/collabnix/rafay 2026 教程 | — | B | 90 | 切分能力随卡型不同，隔离强度不能按一款卡外推 |
| SageMaker HyperPod：EKS/Slurm 双编排 + 弹性容错（自动检测-替换-续训）；2026 上新一键建集群、Slurm continuous provisioning（2026-03）、G7e 实例（2026-04） | aip-faulttol | 2026-07-09 | AWS 官方文档/What's New | — | A | 90 | 云厂能力月级上新，实例型号与区域可用性要按当期核 |
| llm-d（K8s 系 P/D 分离）、NVIDIA Dynamo 1.0（2026-03 GTC GA，P/D 编排+KV 感知路由+NIXL）为推理平台化承载 | aip-serving | 2026-07-09 | 沿用 llm-inference#llminf-disagg 同源口径 | — | B | 90 | GA 只说明可用，P/D 分离收益需按自家流量形态实测 |
| 自建盈亏线利用率约 40-50%、托管 API $2-5/百万输出 token | aip-cloud | 2026-07-09 | 沿用 llm-inference#llminf-production 同源口径 | — | B | 30 | 量级参考不是报价，盈亏线随卡价电价与合同期变 |
| K8s 推理服务化新抽象：KServe 当前 v0.19.0（2026-06-14）；LLMInferenceService CRD 自 v0.18.0（2026-04-29）引入、至今仍是 alpha（serving.kserve.io/v1alpha2）；队列侧 Kueue 当前 v0.19.0（2026-07-22）（建议复查日随季度巡检，版本号周级漂移） | aip-serving | 2026-08-01 | github.com/kserve/kserve/releases、kserve.github.io 文档（LLMInferenceService 概览 / CRD API）、github.com/kubernetes-sigs/kueue/releases | — | A | 90 | 版本号周级漂移；alpha CRD 不能按稳定 API 承诺 |

## 稳定事实（不会过期，无需巡检）
| 事实 | 章节 ID | 说明 |
| --- | --- | --- |
| Llama 3：16k H100 集群 54 天预训练经历 466 次作业中断（约 78% 硬件相关） | aip-faulttol | 已发表论文数字，作容错章锚点案例 |

## 串联出边
| 本模块章节 | 指向 | 关系 |
| --- | --- | --- |
| aip-overview | predictive-ai-mlops#pam-platform | 反向回指（2026-08-02 新模块建立）：共用得了的那半截（K8s+GPU、队列与配额、存储、容错）全在 AIP，本册不重讲，只讲上层为什么合并不了 |
| aip-overview / 全书 | ai-infra-compute | 姊妹模块：本模块讲平台（调度/切分/容错/观测/云形态），对方讲硬件（卡/网/存储/电）；两模块封面/总览页互指 |
| aip-scheduling / aip-faulttol | llm-training#llmtrain-infra | 训练作业是集群调度与容错的头号负载；那边讲并行怎么切模型，本模块讲作业怎么被调度、崩了怎么续 |
| aip-serving | llm-inference#llminf-disagg | 推理引擎（vLLM/SGLang）与 P/D 分离（Dynamo/llm-d）机制在对方讲，本章讲平台承载：怎么被编排、部署、扩缩、路由 |
| aip-observability | llm-inference#llminf-production | 利用率/MFU/goodput/SLO 运营两侧互指；推理压测那条线待未来 Evaluation 收编 |
| aip-cloud | fine-tuning#ft-cloud | 云上托管训练形态（HyperPod/Vertex/PAI 类）两边互指 |
| aip-sharing | ai-infra-compute#aic-gpu | 切分建立在 GPU 内部组织（SM/Tensor Core）之上，硬件概念见姊妹模块第 2 章 |
