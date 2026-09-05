# Predictive-AI-MLOps · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | predictive-ai-mlops |
| 所在层 | 工程保障层 |
| 主导关系 | 预测式模型的生命周期账——读者带着「我们已经有一堆传统模型了，你们这套跟它什么关系」来，这一册把数据、特征、训练、发布、监控、再训练连成一条能追溯、能比较、能回滚的线。 |
| 建立日期 | 2026-08-02 |
| 最后更新 | 2026-08-02 A 类新增（Codex 对照库借鉴第 5 步）：方案见 `_maintenance/2026-08-02-两个新模块-方案.md`，逐章内容联网核实后写入；……；讲义 122 页；完整更新记录见 [raw-data/更新记录.md](raw-data/更新记录.md) |
| 讲义生成方式 | 生成器 kb_deck_build.py（源 JSON 在 raw-data/讲义源.json，由 check_deck_source 看住） |
| 产出 skill 版本 | v8.7 |
| 状态 | ✅ 已完成（书单 10 项；讲义 122 页，放映序实测）|

## 章节清单
| 章节 ID | 现编号 | 标题 | 状态 | 最后核实 |
| --- | --- | --- | --- | --- |
| pam-what-why | 第 1 章 | 「我们已经有一堆模型了」：两种 AI 各管什么 | ✅ | 2026-08-02 |
| pam-model-choice | 第 2 章 | 算法取舍地图：表格、时序、排序、异常 | ✅ | 2026-08-02 |
| pam-problem-framing | 第 3 章 | 把业务问题切成可学的题：预测时点、标签窗口、样本单元 | ✅ | 2026-08-02 |
| pam-features-time | 第 4 章 | 特征的时间语义：point-in-time 正确性、穿越与训练服务偏差 | ✅ | 2026-08-02 |
| pam-feature-store | 第 5 章 | 特征平台：Feature Store 什么时候才真需要 | ✅ | 2026-08-02 |
| pam-lifecycle | 第 6 章 | 从实验到生产：实验记录、模型注册表与发布门 | ✅ | 2026-08-02 |
| pam-monitoring | 第 7 章 | 上线之后：七类信号、七种动作与再训练触发 | ✅ | 2026-08-02 |
| pam-governance | 第 8 章 | 可解释、公平与模型风险管理 | ✅ | 2026-08-02 |
| pam-platform | 第 9 章 | 一套平台装得下生成式和预测式吗 | ✅ | 2026-08-02 |
| pam-cheatsheet | 第 10 章 | 售前速查 | ✅ | 2026-08-02 |

## 时效性事实（巡检盘查对象）
| 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Google《Rules of Machine Learning》第 1 条为「Don't be afraid to launch a product without machine learning」，并写明「若你认为机器学习能带来 100% 的提升，启发式规则能带你走完其中一半」；第 4 条为「Keep the first model simple and get the infrastructure right」 | pam-what-why | 2026-08-02 | Google Developers 官方文档《Rules of Machine Learning: Best Practices for ML Engineering》 https://developers.google.com/machine-learning/guides/rules-of-ml | — | A | 180 | 经验法则，那「一半」不是任何具体项目的实测值 |
| Sculley 等《Hidden Technical Debt in Machine Learning Systems》（NeurIPS 2015）的核心论断：真实世界的机器学习系统普遍会背上巨大的持续维护成本，风险因子包括边界侵蚀、纠缠、隐藏反馈回路、未申报的消费方、数据依赖与外部世界变化 | pam-what-why | 2026-08-02 | NeurIPS 2015 论文页（摘要原文） https://papers.nips.cc/paper_files/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html | — | A | 180 | 2015 年的定性论述，不含任何成本比例或金额 |
| TabArena 活体基准（NeurIPS 2025 D&B Spotlight，arXiv:2506.16791 v4 2025-11-03）结论：梯度提升树在实用表格数据上仍是强对手；深度学习方法在更大时间预算下配合集成才追上；基础模型在小数据集上表现突出；跨模型集成才是当前表格机器学习的最好成绩 | pam-model-choice | 2026-08-02 | arXiv:2506.16791《TabArena: A Living Benchmark for Machine Learning on Tabular Data》摘要 https://arxiv.org/abs/2506.16791 | — | A | 90 | 公开精选数据集上的排名，不代表客户数据上的名次 |
| TabPFN 官方模型规模上限（Prior Labs 文档 Models 页）：TabPFNv2 为 1 万样本 / 500 特征 / 10 类；TabPFN-2.6 为 10 万样本 / 2000 特征；TabPFN-3 与 TabPFN-3-Plus 为 100 万行 × 200 特征（可换成 10 万 ×2000 或 1000×2 万）、160 类 | pam-model-choice | 2026-08-02 | Prior Labs 官方文档 Models 页 https://docs.priorlabs.ai/models | — | A | 90 | 规模上限不代表在该规模上压得过树，也不含耗时与显存 |
| M5 零售销量预测竞赛官方结论：这是第一次所有顶尖方法都是「纯」机器学习方法、且显著优于全部统计基准及其组合；前 50 名几乎全部采用按门店/品类训练的 LightGBM 模型，且全部使用跨序列共学；获奖方案在 WRMSSE 上平均比 24 个基准好 20% 以上；冠军是 6 个模型的等权平均 | pam-model-choice | 2026-08-02 | Makridakis / Spiliotis / Assimakopoulos《The M5 Accuracy competition: Results, findings and conclusions》（International Journal of Forecasting，预印本 PDF 第 22–24 页 Key findings 节） https://statmodeling.stat.columbia.edu/wp-content/uploads/2021/10/M5_accuracy_competition.pdf | — | A | 180 | 零售销量单场竞赛的结论，不能外推到所有时序场景 |
| ADBench 异常检测基准（30 个算法 × 57 个数据集，NeurIPS 2022）三条结论：被测无监督算法之间统计上谁也不比谁强；只要 1% 的标注异常，多数半监督方法就能超过最好的无监督方法；在受控环境下针对特定异常类型的最佳无监督方法可反超半监督与全监督 | pam-model-choice | 2026-08-02 | arXiv:2206.09426《ADBench: Anomaly Detection Benchmark》论文原文（NeurIPS 2022 Datasets & Benchmarks Track）摘要 https://arxiv.org/abs/2206.09426 | — | A | 180 | 公开数据集上的平均结论，1% 这个门槛不是保证 |
| 谷歌《Rules of Machine Learning》第 29 条：把服务时用过的那组特征打进日志、再拿去训练，是保证「训得像服务」最稳的办法；同文给出训练服务偏差（training-serving skew）的三类成因——训练与服务管线处理数据的方式不同、训练与服务之间数据变了、模型与算法之间存在反馈回路 | pam-features-time | 2026-08-02 | Google for Developers《Rules of Machine Learning: Best Practices for ML Engineering》Rule #29 与 Training-Serving Skew 节，https://developers.google.com/machine-learning/guides/rules-of-ml | — | A | 180 | 是工程原则不含阈值，不代表日志回流适合所有新特征 |
| SageMaker Feature Store 离线库自动给每条记录附加三列：api_invocation_time（服务收到写入调用的时间）、write_time（真正落到离线库的时间，官方注明可用于构造时间旅行类查询）、is_deleted；事件时间由用户自建的时间列提供 | pam-features-time | 2026-08-02 | AWS 官方文档《Amazon SageMaker Feature Store offline store data format》，https://docs.aws.amazon.com/sagemaker/latest/dg/feature-store-offline.html | — | A | 90 | 是 AWS 一家的字段设计，别家命名与语义不同 |
| SageMaker Feature Store 调用 PutRecord 后数据先缓冲、批量，在 15 分钟内写入 S3 离线库；离线库只支持 Parquet 文件格式，表格式可选 AWS Glue（默认）或 Apache Iceberg | pam-feature-store | 2026-08-02 | AWS 官方文档《Amazon SageMaker Feature Store offline store data format》，https://docs.aws.amazon.com/sagemaker/latest/dg/feature-store-offline.html | — | A | 90 | 15 分钟是离线库写入窗口，不是在线库读延迟 |
| Feast 官方文档明列它「不是什么」：不是通用数据管线系统、不管理或编排复杂工作流 DAG、不是数据仓库也不是组织内加工数据的权威存放地、不是数据库；它是数仓下游的一层轻量服务层。其核心卖点之一是生成时点正确（point-in-time correct）的特征集以避免数据泄漏 | pam-feature-store | 2026-08-02 | Feast 官方文档 Introduction 页与 FAQ，https://docs.feast.dev/ | — | A | 180 | 是 Feast 的定位声明，不代表所有特征平台边界相同 |
| Vertex AI Feature Store（Legacy）已弃用：官方通告写明自 2026-05-17 起不再新增功能、只提供关键补丁，2027-02-17 完全退役且 API 下线；去处是 Vertex AI Feature Store（V2，2023-11-17 推出）或按官方迁移指南迁到 Bigtable。该产品线的当前文档挂在「Gemini Enterprise Agent Platform」名下 | pam-feature-store | 2026-08-02 | Google Cloud 官方文档 Vertex AI Feature Store 概述页弃用通告，https://docs.cloud.google.com/vertex-ai/docs/featurestore/overview；配套《Migrate from Vertex AI Feature Store (Legacy) to Bigtable》 | — | A | 90 | 只说 Legacy 版有退役表，V2 能力配额另算，别家不同期 |
| 阿里云 PAI-FeatureStore 自动完成在线表与离线表的构建并保证两侧一致：离线存储对接 MaxCompute，在线可经 Flink 处理后写入 Hologres、Tablestore 或自研的 FeatureDB | pam-feature-store | 2026-08-02 | 阿里云帮助中心《FeatureStore 概述》（人工智能平台 PAI），https://help.aliyun.com/zh/pai/featurestore | — | A | 90 | 是平台形态描述不含延迟与配额，选型仍需实测 |
| Azure Machine Learning 托管特征库的特征取回支持时点连接（point-in-time join，官方也称 time travel）以避免数据泄漏，走 SDK 的 get_offline_features() 或内置特征取回流水线组件；Databricks 侧对应能力靠在特征表上声明 timeseries_columns（Unity Catalog 版）或 timestamp_keys（工作区版），且时序特征表须恰有一个时间键、不能带分区列 | pam-feature-store | 2026-08-02 | Microsoft Learn《Feature retrieval specification and usage in training and inference》；Databricks 官方文档《Point-in-time feature joins》 | — | A | 90 | 只证明能力存在，不代表默认开启或性能达标 |
| MLflow 自 2.9.0 起把模型注册表的四阶段（None / Staging / Production / Archived）标为弃用、将在未来某个大版本移除，官方替代是模型版本别名（alias）与标签（tag）；官方理由是阶段这套状态机对 MLOps 流程「过于死板」，而别名允许同一版本挂多个、可随时改指 | pam-lifecycle | 2026-08-02 | MLflow 官方文档《Model Registry Workflows》弃用说明，https://mlflow.org/docs/latest/ml/model-registry/workflow/ | — | A | 90 | 弃用不等于已移除，旧接口在当前版本仍可用 |
| SageMaker 模型注册表的批准状态为 PendingManualApproval / Approved / Rejected 三态，可由 SDK、Studio 或流水线中的条件步骤更新；官方列出的合法迁移含 PendingManualApproval→Approved（触发 CI/CD 部署）、→Rejected、Rejected→Approved、Approved→Rejected | pam-lifecycle | 2026-08-02 | AWS 官方文档《Update the Approval Status of a Model》，https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry-approve.html | — | A | 90 | 状态字段只记流程，不代表模型质量已被验证 |
| SageMaker 影子测试：影子变体接收从生产变体复制来的一定比例请求但不返回任何响应；一个端点最多一个影子变体，且此时最多一个生产变体；时长默认 7 天、最短 1 小时、最长 30 天，测试结束端点自动恢复原状；Serverless 推理、异步推理、多模型端点、多容器端点、Marketplace 容器与 Inf1 实例的端点不支持 | pam-lifecycle | 2026-08-02 | AWS 官方文档《Create a shadow test》，https://docs.aws.amazon.com/sagemaker/latest/dg/shadow-tests-create.html | — | A | 90 | 是 AWS 一家的字段与配额限制，别家流量镜像规格不同 |
| 阿里云 PAI 在同一工作空间内提供两件对应能力：「AI 资产管理 > 模型」支持把训练好的模型注册进来、按版本持续更新并直接部署至 EAS（部署配置自动透传）；Model Gallery 创建微调训练任务时可关联新建或已有实验，任务的超参等元数据、TensorBoard 指标与输出模型统一落在实验输出路径下 | pam-lifecycle | 2026-08-02 | 阿里云帮助中心《如何注册模型、部署模型及管理模型》，https://help.aliyun.com/zh/pai/user-guide/register-and-manage-models；《在 Model Gallery 中使用实验管理》，https://help.aliyun.com/zh/pai/experiment-management | — | A | 90 | 只说有注册与实验关联两件，不等于完整跟踪与发布门禁 |
| Evidently 的漂移检测默认规则按参考集大小切换：参考集 ≤1000 行用 KS 检验（数值型）与卡方检验（类别型），p≤0.05 判漂移；>1000 行改用 Wasserstein 距离与 Jensen-Shannon 散度，阈值均为 ≥0.1 | pam-monitoring | 2026-08-02 | Evidently 官方文档 Data drift（docs.evidentlyai.com/metrics/explainer_drift） | — | A | 90 | 是该工具的默认值，不是业界统一阈值标准 |
| PSI（群体稳定性指数）的 0.1 / 0.25 分档最早出自 Lewis 1994 的信用评分实务，是与样本量无关的经验常数；近年学术综述批评它在小样本上频繁误报、在大样本上该报不报 | pam-monitoring | 2026-08-02 | 《A critical review of existing and new population stability testing procedures in credit risk scoring》arXiv 2303.01227；Yurdakul & Naranjo 2020《Statistical properties of the population stability index》 | — | B | 180 | 是对阈值来历与统计缺陷的评述，不是替代阈值的推荐值 |
| 无真值期性能估计（NannyML 的 CBPE，Confidence-Based Performance Estimation）以概率校准良好与样本量充足为前提；官方明确写「CBPE 在概念漂移（P(Y／X) 改变）下不成立」，且在训练时未覆盖的特征空间区域会失效；回归任务对应方法为 DLE | pam-monitoring | 2026-08-02 | NannyML 官方文档 how_it_works/performance_estimation（nannyml.readthedocs.io/en/stable） | — | A | 180 | 只能当预警，不能当验收依据或替代真值 |
| Azure Machine Learning 表格数据内建监控信号五类：数据漂移、预测漂移、数据质量、特征归因漂移、模型性能；其中特征归因漂移必须有训练数据、模型性能必须有回灌真值，且两者当日均标 preview | pam-monitoring | 2026-08-02 | Microsoft Learn《Model monitoring in production - Azure Machine Learning》（文档标注日期 2026-01-27） | — | A | 90 | preview 状态与信号清单会变，不代表三家云能力对等 |
| AWS 文档标明 Amazon SageMaker Model Monitor 已不再向新客户开放，现有客户照常使用但不再新增功能；官方改荐用开源方案（SageMaker MLflow Apps + Evidently）配合 QuickSight 与 CloudWatch 自建替代 | pam-monitoring | 2026-08-02 | AWS 文档 sagemaker/latest/dg/model-monitor.html 与 model-monitor-availability-change.html | — | A | 90 | 未给停服日期，也不代表其他云的托管监控会同样退场 |
| 美联储、OCC、FDIC 于 2026-04-17 发布 SR 26-2《Revised Guidance on Model Risk Management》，取代 SR 11-7（2011-04-04）与 SR 21-8，主要适用于总资产超 300 亿美元的美国银行；保留概念稳健性／持续监测／结果分析三件验证与「有效挑战」及独立性要求；全文未出现 AI 或机器学习字样，模型被定义为把输入变成定量估计的复杂定量方法，排除纯算术与确定性规则 | pam-governance | 2026-08-02 | 美联储 SR 26-2 通知页与所附指引全文（federalreserve.gov/supervisionreg/srletters/sr2602.htm 与 SR2602.pdf） | — | A | 90 | 美国大型银行监管口径，不是通用企业合规要求 |
| Kleinberg、Mullainathan、Raghavan 2016 证明：校准性与两类错误率均等这三个公平条件，除非各群基础率相同或预测完美，否则不可同时满足 | pam-governance | 2026-08-02 | 《Inherent Trade-Offs in the Fair Determination of Risk Scores》arXiv 1609.05807 | — | A | 180 | 是数学不可能性结论，不指示哪个定义在具体业务中更合适 |
| Shapley 型归因在特征相关时会把同一份贡献在相关特征间任意分配，并可能采样出现实中不存在的特征组合；它衡量的是与模型输出的统计关联，不含因果结构 | pam-governance | 2026-08-02 | Molnar《Interpretable Machine Learning》Shapley 章；《Causal Analysis of Shapley Values: Conditional vs. Marginal》arXiv 2409.06157 | — | B | 180 | 是方法固有局限，不代表所有归因实现都同等失真 |
| 模型卡（Model Card）格式出自 Mitchell 等 2019 年论文，要求写明预期用途与不适用场景、评估过程，以及按人群分组和交叉分组的表现 | pam-governance | 2026-08-02 | 《Model Cards for Model Reporting》arXiv 1810.03993（Mitchell 等，FAT* 2019） | — | A | 180 | 是文档格式建议，不是任何监管强制模板 |
| 同一套实验追踪与模型注册表可以同时装传统预测式模型与生成式应用：MLflow 官方表述为同一套工具既管 transformer 训练管线，也管多智能体 RAG 系统 | pam-platform | 2026-08-02 | MLflow 官方博客与文档（mlflow.org，2026-08-02 查见） | — | A | 90 | 只说登记与追踪层可共用，算力与服务层另算 |
| Azure 侧两种 AI 分属两个门面：Azure Machine Learning 主管自训练的预测式模型与 MLOps，Microsoft Foundry 主管生成式应用；两处都能接大模型，微软官方为此专门提供「该用哪个工作室」的选择指引 | pam-platform | 2026-08-02 | Microsoft Learn《What is Azure Machine Learning?》（页面 updated 2026-03-30） | — | A | 90 | 只反映微软当前产品划分，不代表另两家云同样切分 |
| 预测式监控的云上落点（服务名快照）：Azure ML 表格数据内建监控信号、Gemini Enterprise Agent Platform（原 Vertex AI）模型监控、AWS SageMaker Model Monitor（已不再向新客户开放，官方改荐开源自建）；开源侧代表为 Evidently（漂移检测）与 NannyML（无真值期性能估计） | pam-monitoring | 2026-09-05 | Microsoft Learn《Model monitoring in production》；AWS model-monitor.html 与 availability-change；cloud.google.com 官方博客（2026-04-22 更名）（2026-09-05 逐字核对） | — | A | 90 | 是当日的服务名快照，不代表三家云能力对等；服务名会改名，改名不改本质；服务名可能改名，改名不改本质 |
| 两种 AI 的云上门面（服务名快照）：注册与实验为 SageMaker 托管 MLflow、Gemini Enterprise Agent Platform Model Registry（原 Vertex AI 模型注册表）、Azure ML 注册表；生成式侧另有 Bedrock、Agent Studio（原 Vertex AI Studio，隶属 Gemini Enterprise Agent Platform）、Microsoft Foundry；在线服务为 SageMaker 端点、Gemini Enterprise Agent Platform 端点（原 Vertex 端点）、Azure ML 在线端点 | pam-platform | 2026-09-05 | Microsoft Learn《What is Azure Machine Learning?》；AWS SageMaker mlflow 页；cloud.google.com 官方博客（2026-09-05 逐字核对） | — | A | 90 | 是当日的服务名快照，产品名与形态月级变动；服务名会改名，改名不改本质；服务名可能改名，改名不改本质 |

## 串联出边
| 本模块章节 | 指向 | 关系 |
| --- | --- | --- |
| pam-what-why | solution-patterns#sp-method | 「我们已经有 X 了」的通用答法（增量价值三问）在 SP 与实战包已成型，本册补预测式这一格的具体内容：存量模型是资产不是竞品，切入点在运维、生成式能力、数据与特征底座三条（双向） |
| pam-monitoring | ai-ops#ops-drift | 同名不同物，最需要互指的一条：那边的漂移发生在没有客观真值的生成式应用上（供应商静默换权重、输出漂移），本册的漂移有真值但有标签延迟，七类信号对七种动作；两章各自声明「这里说的漂移指哪一种」（双向） |
| pam-lifecycle | ai-ops#ops-release | 发布门的骨架（门禁在前、影子、金丝雀、回滚是切指针）两边共用，不重讲；本册只补预测式独有的两点——可以双跑逐条对账，以及标签没成熟前判不出胜负 |
| pam-features-time | data-engineering#de-pipeline | 上下游：数据怎么进来、怎么增量同步归 DE，本册接手的是同一份数据被当成特征时的时间语义与点时取数 |
| pam-monitoring | data-engineering#de-quality | 七类信号里第一类「数据质量故障」的检查项与责任面在 DE 第 5 章，本册只讲怎么把它和漂移信号分开——分不开就会去重训一个其实没坏的模型（双向） |
| pam-model-choice | model-landscape#ml-selection | 边界声明：客户问「用什么模型」要先分清问的是哪一类——大模型选型（榜单、价格带、许可证）在 Model-Landscape，表格与时序模型的算法取舍在本册 |
| pam-problem-framing | evaluation#eval-build | 对照关系：Evaluation 讲没有客观真值时怎么建集、怎么判分，本册讲有客观真值时指标怎么挑、离线指标涨了业务没涨怎么办；两边共用「签字的验收线」这套交付语言 |
| pam-lifecycle | fine-tuning#ft-eval-deploy | 「训练」这个词两边指的不是一回事：那边是拿自己数据改 LLM 权重、产物是 adapter，本册是从头拟合一个预测式模型、产物多数走批量打分；售前要能当场分清客户说的是哪一种 |
| pam-platform | ai-infra-platform#aip-overview | 共用得了的那半截（K8s+GPU、队列与配额、存储、容错）全在 AIP，本册不重讲，只讲上层为什么合并不了 |
| pam-governance | security#sec-china | 备案范围与合规数字在 Security 第 8 章，本册不复制；只讲预测式独有的落点——拒绝理由要说得出、模型卡、独立验证与持续监控记录 |
