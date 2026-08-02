# AI-Infra-Compute · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | ai-infra-compute |
| 所在层 | 算力底座层 |
| 主导关系 | 瓶颈在哪一层——读者带着「客户说要自建/要买卡，这方案成不成、钱该花在哪」来。 |
| 建立日期 | 2026-07-09 |
| 最后更新 | 2026-07-13（B 类·两件套吸收：增拓扑四层对齐/容量四证据两页深潜 + 生产验收清单，79→82 页）；2026-07-14 呈现回刷：封面眉题统一为「AI 知识库 · 讲义式 PPT」，无内容变更；2026-07-15（呈现修复：删配图替代型残留源文字页 7 页，配图后 91→84 页）；2026-07-17 呈现完善：新增「总收束」页（每章一句话）+ 全册末「来源与核实」页，84→86 页；2026-07-17 呈现统一：全册章眉统一为青色加粗（#128199，对齐配图页样式；用户发现正文页与配图页眉题两套字体并存），无内容变更；2026-07-20 呈现完善：按新语言策略（缩写型术语首次出现展开英文全称，全角逗号格式，译名视语境）存量回刷，补 22 处、零增删页，清单见 raw-data/2026-07-20-术语全称回刷清单.md，audit PASS；2026-07-20 书单订正：撤馆藏回写出处时填错的链接已逐条重新核实（详见 _maintenance/2026-07-20-原电子书馆藏出处存档.md 订正说明）；2026-07-21 网页版落地（第八批收官，与 Data-Engineering、AI-Infra-Platform 同批）：`Web-version/ai-infra-compute/index.html`，覆盖与缺口矩阵存 raw-data/2026-07-21；网页版新增「建 vs 租盈亏速算器」（交互件，八输入出自建/云租多年总成本与盈亏利用率，模型与盈亏线口径全部来自第 8 章，单价可编辑非报价），未引入新事实——事实级 0、缺口级 0，无回流欠账；2026-07-23 网页版增补（Scale-out 增「四层对齐诊断」、经济学增「容量四层证据」；两面事实同源，PPTX 未改，PPT 侧回流待办见 _maintenance/2026-07-23-知识点对照与串联-设计.md）；2026-07-23 内容打磨（网页版·客户交锋视角，批四·推理与底座）：新立 3 题（报的容量凭什么证明跑分能不能信·四层证据互相解释 + MLPerf 只做校准不替代业务流量验收／卡坏了谁修修的那几天算力算谁的·拆铁-作业-人三笔账／同样一批卡别家报价低凭什么·对比口径从每卡时价换成每 token 成本）+ 2 处机制（运维人力拆成合同问题与平台问题并深链 aip-faulttol、报价对比口径）+ 0 纠错。8→11 题。**零新增事实**（新增文字里阿拉伯数字 0 个，量化口径一律文字引用页内既有内容，别册数字走深链未复制）。PPT 侧登记 1 项（「三个数量级」措辞在 slide11/12/84/92 四处，字面易读成 1000×，属 PPT 侧统一措辞问题，改网页单面会造成两面漂移，故不动）。PPTX 未改；**2026-08-01 巡检刷新（B 类·AMD 翻页）**：①讲义五处改写——第 4 章 AMD 页（放映序 p37）「官方口径 2H 2026…TSMC 2nm」改「Advancing AI 2026 宣布投产：72 × MI455X（432GB HBM4/卡、整柜 31TB）」，同页案例行补「预计 Q4 起上线 Helios」；上云落地表（p40）「MI400 2H26」改「MI400 已投产」；第 5 章 UALink 页（p49）「AMD Helios 首代用 UALink over Ethernet 过渡」改「AMD Helios 已投产但走 UALink over Ethernet 过渡」；速查表 1（p79）「MI400 + Helios 机柜，2H 2026（HBM4）」改「已投产（432GB HBM4）」。网页版 AMD 行同改并补整柜规格与 OpenAI Q4 口径。②昇腾 910D 按巡检拿不准条目的处置维持「预计」措辞不动成品，只在事实表登记 2026-09 定点复查。③撤下核不到官方源的「TSMC 2nm」；「Q3 出货」因只有分析机构口径未写进成品。零增删页（86 页不变），audit PASS，旧版存 raw-data/history，来源笔记见 raw-data/2026-08-01-巡检刷新-来源笔记.md；**2026-08-02 网页版增补「上云怎么落地」（Codex 对照库借鉴第 3 步·回流批）**：新增 `#cloud` 小节（结构性小节，与 qa/related/sources 同类，不进章节清单），3 组 / 14 行，取材讲义 p11、p39、p40、p41、p51、p70、p71、p75。**零新增事实**——服务清单与「给客户一句话」全部来自讲义已有的上云页，check_new_numbers.py 确认无 ⚠。**新增的是两格讲义没有的内容**：每组后写「顺着追问什么」与「云替你做不了什么」，即对照库 cloudHooks 五要素里我方缺的「发现问题」与「责任边界」。其后小节编号统一 +1，本页目录同步。**PPT 侧回流待办**：讲义云页只有「环节 / 服务 / 给客户一句话」三格，追问与责任边界两格尚未回流。PPTX 未改 |
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
| HBM4 时代开启：Samsung 2026-02-12 全球首家量产（1c DRAM+4nm、11.7Gbps）、4 个月营收破 $10 亿；SK hynix 2026 商用、有意放缓爬坡、预计供 NVIDIA HBM4 约 2/3；在役主流 HBM3e（192-288GB/卡） | aic-hbm | 2026-07-09 | TrendForce、DigiTimes、TechTimes、DCD | — | B | 30 | 供货份额是机构预估非签约产能，报供货前须重核 |
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
