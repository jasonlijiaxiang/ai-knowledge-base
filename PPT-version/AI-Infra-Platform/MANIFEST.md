# AI-Infra-Platform · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | ai-infra-platform |
| 所在层 | 算力底座层 |
| 主导关系 | 利用率的账——读者要回答的是「客户卡都买了，凭什么再向他卖一层平台」。 |
| 建立日期 | 2026-07-09 |
| 最后更新 | 2026-08-01 巡检刷新（B 类·P2 版本号回写 + 结构小修）：KServe v0.18.0→v0.19.0（2026-06-14）、Kueue v0.18.3→v0.19.0（2026-07-22）……；讲义 81 页；完整更新记录见 [raw-data/更新记录.md](raw-data/更新记录.md) |
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
| 自建盈亏线利用率随当期卡价与 API 价重算、托管 API 分两档（开源 70B 级约 $1、前沿旗舰 $12–50/百万输出 token） | aip-cloud | 2026-09-05 | 沿用 llm-inference#llminf-production 同源口径（源行 2026-09-05 更新） | — | B | 30 | 量级参考不是报价，盈亏线随卡价电价与合同期变 |
| K8s 推理服务化新抽象：KServe 当前 v0.19.0（2026-06-14）；LLMInferenceService CRD 自 v0.18.0（2026-04-29）引入、至今仍是 alpha（serving.kserve.io/v1alpha2）；队列侧 Kueue 当前 v0.19.0（2026-07-22）（建议复查日随月度巡检，版本号周级漂移） | aip-serving | 2026-08-01 | github.com/kserve/kserve/releases、kserve.github.io 文档（LLMInferenceService 概览 / CRD API）、github.com/kubernetes-sigs/kueue/releases | — | A | 90 | 版本号周级漂移；alpha CRD 不能按稳定 API 承诺 |

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
