# AI-Infra-Compute · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | ai-infra-compute |
| 所在层 | 算力底座层 |
| 主导关系 | 瓶颈在哪一层——读者带着「客户说要自建/要买卡，这方案成不成、钱该花在哪」来。 |
| 建立日期 | 2026-07-09 |
| 最后更新 | 2026-08-02 网页版增补「上云怎么落地」（Codex 对照库借鉴第 3 步·回流批）：新增 `#cloud` 小节（结构性小节，与 qa/related/sources 同类，不进章节清单）……；讲义 87 页；完整更新记录见 [raw-data/更新记录.md](raw-data/更新记录.md) |
| 产出 skill 版本 | v3.0 |

## 章节清单
| 章节 ID | 现编号 | 标题 | 状态 | 最后核实 |
| --- | --- | --- | --- | --- |
| aic-overview | 第 1 章 | 全景总览：从一张卡到一座 AI 工厂 | ✅ | 2026-07-09 |
| aic-gpu | 第 2 章 | GPU 解剖：为什么 AI 计算长在 GPU 上 | ✅ | 2026-07-09 |
| aic-hbm | 第 3 章 | 显存与 HBM：AI 时代最贵的房地产 | ✅ | 2026-07-09 |
| aic-chips | 第 4 章 | 芯片格局与选型：NVIDIA 之内与之外 | ✅ | 2026-07-09 |
| aic-scaleup | 第 5 章 | Scale-up 互联：把 72 张卡焊成一张大卡 | ✅ | 2026-07-09 |
| aic-scaleout | 第 6 章 | Scale-out 网络：把一万张卡连成集群 | ✅ | 2026-07-09 |
| aic-storage | 第 7 章 | 存储与数据管线：别让 GPU 等数据 | ✅ | 2026-07-09 |
| aic-econ | 第 8 章 | 算力经济学与售前速查 | ✅ | 2026-07-09 |

## 时效性事实（巡检盘查对象）
| 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| NVIDIA 年更：Blackwell/GB200 在役、GB300 2026 放量（出货约翻倍）、Rubin H2 2026（HBM4+NVLink 6）、Rubin Ultra 2027（GTC 2026 展示 Kyber）、Feynman 2028 | aic-chips | 2026-07-09 | CNBC、wccftech、vrlatech、tech-insider（GTC 2026） | — | B | 30 | 路线图按季度改口径，不能当出货承诺写进方案 |
| VR200 NVL72 官方口径推理性能约为 GB300 NVL72 的 3.3 倍 | aic-chips | 2026-07-09 | NVIDIA GTC 2026 | — | B | 90 | 厂商自测倍数，非第三方复现，也非业务流量实测 |
| **AMD Helios 已从「承诺」翻页为「投产」**：MI350X/MI355X 早已量产（288GB HBM3e）；MI400 + Helios 在 Advancing AI 2026（2026-07-22/23，旧金山）正式发布，AMD 官方措辞是「now in production to be deployed by leading AI companies at gigawatt scale」。整柜规格：72 × MI455X + 18 颗第六代 EPYC「Venice」，31TB HBM4，峰值 2.9 EF FP4 / 1.4 EF FP8；单卡 MI455X 432GB HBM4、23.3TB/s、最高 40 PFLOPS FP4。首代仍走 UALink over Ethernet 过渡。已点名的部署方：OpenAI、Anthropic、Meta、Microsoft、Oracle、HUMAIN、Tensorwave、Vultr、Cirrascale；OpenAI 官方口径「预计 2026 Q4 起上线、2027 加速铺开」，Anthropic 合作规模「至多 2GW」。**「Q3 出货」核不到 AMD 一等源**（只见分析机构口径），故成品只写「已投产 + OpenAI Q4 起上线」；**原登记的「TSMC 2nm」在 amd.com 产品页查无实据，本次从成品中撤下** | aic-chips | 2026-08-01 | newsroom.amd.com 三篇（aai-2026-full-stack-compute-agentic-ai / aai-2026-helios-update / aai-2026-mi400-instinct-update，均 2026-07-23）；amd.com/en/products/accelerators/instinct/mi400.html（432GB HBM4 / 23.3TB/s / 40 PFLOPS FP4 官方规格）；建议复查日 2026-11-30 | — | A | 30 | 投产与点名部署方不等于已交付，上线时间是计划口径 |
| Google TPU v7 Ironwood 2025-11 GA（192GB HBM3e、7.37TB/s、4614 FP8 TFLOPS、9216 芯 42.5EFLOPS）；AWS Trainium3 已出货（3nm、2.52PF FP8、144GB HBM3e）；两家下一代排 2027 | aic-chips | 2026-07-09 | Google Cloud 官方、SemiAnalysis、Spheron 2026 盘点 | — | B | 90 | 峰值标称规格，不代表可买到的配额与实际可用产能 |
| 昇腾 910C 2025 量产、2026 计划约 60 万颗、算力约 H100 的 60-80%、国产化率 90%+；910D 支持 FP8 预计 2026 Q2-Q3 量产；SMIC N+2 良率约 40-50%。**2026-08-01 复核：预测窗口已过半，仍查不到量产落地的一等信源**（华为无官宣、无一等源报道），故措辞维持「预计」不改成品；**登记 2026-09 定点复查**——届时若仍无落地，应把「预计 2026 Q2-Q3」改成定性（如「已多次延后、以 920/950 系列为后续重心」），不再挂具体窗口 | aic-chips | 2026-08-01 | 原始口径：新浪科技/36氪/EDN China 2025-12 综述、ESM China；本次复核未见新一等源；建议复查日 2026-09-30 | 2026-09-30 | B | 30 | 二手媒体的量产预测，不能当已落地产能与算力对比 |
| NVLink 5 单卡 1.8TB/s（18 端口）、NVL72 域内 NVLink Switch 总带宽 130TB/s | aic-scaleup | 2026-07-09 | NVIDIA 官方 GB200 NVL72 页 | — | A | 90 | 官方标称聚合带宽，非应用可达的有效带宽 |
| UALink 1.0（2025-04 定稿，单层交换/至多 1024 端点）与 Broadcom SUE 竞争；原生硬件平台看 2027 | aic-scaleup | 2026-07-09 | SemiAnalysis "The New AI Networks" | — | B | 90 | 规范定稿不等于有货可买，2027 硬件时点是分析口径 |
| InfiniBand Quantum-X800 XDR 800Gb/s；2025 年中起新机柜配 ConnectX-8 支持 XDR（此前 NDR 400Gb/s）；Spectrum-X800 多租户以太 | aic-scaleout | 2026-07-09 | NVIDIA、NADDOD 架构分析 | — | B | 90 | 线速标称非实测集群吞吐；机柜网卡配置随批次变 |
| Ultra Ethernet UEC 1.0 规范 2025-06 发布（现 1.0.2，官网免费 PDF），100+ 成员；2026 年中全栈 UET 硬件刚出货、多数设备仅"兼容"、采纳早期 | aic-scaleout | 2026-07-09 | UEC 官网、Arista/WWT/SemiAnalysis | — | B | 90 | 标称兼容不等于全栈可用，采纳早期非实测部署规模 |
| HBM4 时代开启：Samsung 2026-02-12 全球首家量产（1c DRAM+4nm、11.7Gbps）、4 个月营收破 $10 亿；SK hynix 2026 商用、有意放缓爬坡、预计供 NVIDIA HBM4 约 2/3；在役主流 HBM3e（192-288GB/卡） | aic-hbm | 2026-08-03 | 三星官方新闻 semiconductor.samsung.com …samsung-ships-industry-first-commercial-hbm4…（量产与 11.7Gbps 原文核对） | — | B | 30 | 供货份额是机构预估非签约产能，报供货前须重核 |
| DeepSeek 3FS（Fire-Flyer File System）开源：随机读优先、放弃读缓存，自报集群聚合读 6.6-7.3TB/s，支持训练加载/checkpoint/KVCache 查询 | aic-storage | 2026-07-09 | Tom's Hardware、GitHub deepseek-ai/3FS | — | B | 90 | 自报聚合带宽未经第三方复测，别当客户环境预期 |
| FP8 为生产推理默认精度、训练主流实践；NVFP4 面向 Blackwell、工具链成熟中 | aic-gpu | 2026-07-09 | 沿用 llm-inference#llminf-quant 同源口径 | — | B | 90 | 主流实践不代表任一模型任一任务掉点可接受，须实测 |
| 成本量级：H100 级时租 $2-3/卡·时、自建盈亏线利用率约 40-50%、托管 API $2-5/百万输出 token | aic-econ | 2026-07-09 | 沿用 llm-inference#llminf-production 同源口径 | — | B | 30 | 量级参考不是报价，盈亏线随卡价电价与合同期变 |
| 行业预测 2030 推理算力占 AI 总算力约 75% | aic-overview | 2026-07-09 | 沿用 llm-training/llm-inference 同源口径 | — | B | 180 | 机构长期预测，不能当客户容量规划的采购依据 |

## 串联出边
| 本模块章节 | 指向 | 关系 |
| --- | --- | --- |
| aic-overview / 全书 | ai-infra-platform | 姊妹模块：本模块讲硬件（卡/网/存储/电），对方讲平台（调度/切分/容错/观测/云形态）；两模块封面/总览页互指 |
| aic-hbm | llm-inference#llminf-kv-budget | 显存账的推理下半本：机制账（KV Cache）在对方第 2 章，硬件地基（HBM 贵）在本章，互为前后篇 |
| aic-gpu | llm-inference#llminf-quant | 精度阶梯 FP8/FP4 是量化落地的硬件前提 |
| aic-hbm | llm-training#llmtrain-infra | 训练显存账（×16 字节）↔ ZeRO/FSDP 切分方案：本章讲账、对方讲怎么把账切开分摊 |
| aic-scaleup / aic-scaleout | llm-training#llmtrain-infra | 并行策略（TP/PP/EP）产生的通信量决定网络怎么建；本模块讲网络、对方讲并行 |
| aic-storage | llm-inference#llminf-disagg | KV Cache 外置 ↔ P/D 分离/Mooncake/Dynamo KV 路由：存储升级为推理性能部件 |
| aic-econ | llm-inference#llminf-production | 建 vs 租 vs API 盈亏线口径同源引用 |
| aic-overview | llm-training#llmtrain-overview | 训练一次性重投入 vs 推理持续账单、2030 推理 75% 预测同源 |
