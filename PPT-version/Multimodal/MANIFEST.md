# Multimodal · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | multimodal |
| 所在层 | 应用模式层 |
| 建立日期 | 2026-07-09 |
| 最后更新 | 2026-07-12（B 类：延迟页「预填充（prefill）」中英对照语序统一，内容无改动）；07-13 两件套吸收：增生成资产状态机/五层输入合同两页深潜 + 多模态验收页，96→99 页；2026-07-14 呈现回刷：封面章节条补「8·语音实时」「9·速查」、核实日期更新，无内容变更；2026-07-15（呈现修复：删配图替代型残留源文字页 2 页，配图后 106→104 页）；2026-07-17 呈现完善：全册末新增「来源与核实」页（关键信源一览 + 核实窗口，补齐收尾四件套），104→105 页；2026-07-17（B 类增章：新增第 9 章「视频生成」10 页——四家旗舰格局、三大难、按秒计价成本账、四步工作流、标识合规，售前速查顺延第 10 章；封面章节条与导览「十章一条线」同步回刷；联网核实笔记 raw-data/2026-07-17；105→115 页）；2026-07-17 呈现统一：全册章眉统一为青色加粗（#128199，对齐配图页样式；用户发现正文页与配图页眉题两套字体并存），无内容变更；2026-07-20 呈现完善：按新语言策略（缩写型术语首次出现展开英文全称，全角逗号格式，译名视语境）存量回刷，补 18 处、零增删页，清单见 raw-data/2026-07-20-术语全称回刷清单.md，audit PASS；2026-07-21 网页版落地（第七批，与 Solution-Patterns、AI-Ops 同批）：`Web-version/multimodal/index.html`，覆盖与缺口矩阵存 raw-data/2026-07-21；网页版新增「多模态方案分诊器」（交互件，五问决策树出方案骨架+部署形态+上线必修，判据全部来自第 3/6/7/10 章），未引入新事实——事实级 0、缺口级 0，无回流欠账；2026-07-23 网页版增补（生成四坑与即梦口径补文、OCRBench≈888 归属改回 Qwen2.5-VL-72B、选型章增「五层输入合同」；两面事实同源，PPTX 未改，PPT 侧回流待办见 _maintenance/2026-07-23-知识点对照与串联-设计.md）；2026-07-23 内容打磨（网页版·客户交锋视角，批一）：新立 4 题（识别率承诺与能否省人/已有 OCR 的增量价值/生成物法务三件/量大后成本失控）+ 3 处机制（已有 OCR 是拼管线打底层、三招省钱幅度不同、人审抽到点上）+ 纠 1 处（「五层输入合同」标题下只列 3 行，已点名五层并说明并段）。**零新增事实**（数字均本册既有，经 check_new_numbers.py 扫描确认）。判据与八战场见 _maintenance/2026-07-23-全库内容打磨-执行口径.md。PPTX 未改；2026-08-01 巡检刷新（B 类，四个章面两面同批）：①第 4 章旗舰格局与散布提法换代（GPT-5→GPT-5.5、Gemini 2.5 Pro→3.1 Pro、Claude 4.5→Opus 5，共 6 页）②开源 VLM 段换代（InternVL3-78B→InternVL3.5、Qwen3-VL Thinking，MMMU/OCRBench 分数因官方无公布改定性，共 5 页）③第 9 章撤 Sora 旗舰位、登记官方关停时间线、34 倍价差作废改 Veo 官方十倍档差（共 8 页）④第 8 章 gpt-realtime→2.1 家族、Qwen3-Omni 语种口径纠错、端到端每分钟成本作废改官方 token 单价（共 5 页）；另回刷封面日期、来源与核实页信源与核实窗口、总收束页。**零增删页（115 页不变）**，audit PASS，网页版同批同步；来源笔记见 raw-data/2026-08-01-巡检刷新-来源笔记.md；**2026-08-02 网页版增补「上云怎么落地」（Codex 对照库借鉴第 3 步·回流批）**：新增 `#cloud` 小节（结构性小节，与 qa/related/sources 同类，不进章节清单），4 组 / 19 行，取材讲义 p10、p11、p42、p54、p55、p57、p58、p69。**零新增事实**——服务清单与「给客户一句话」全部来自讲义已有的上云页，check_new_numbers.py 确认无 ⚠。**新增的是两格讲义没有的内容**：每组后写「顺着追问什么」与「云替你做不了什么」，即对照库 cloudHooks 五要素里我方缺的「发现问题」与「责任边界」。其后小节编号统一 +1，本页目录同步。**PPT 侧回流待办**：讲义云页只有「环节 / 服务 / 给客户一句话」三格，追问与责任边界两格尚未回流。PPTX 未改 |
| 产出 skill 版本 | v3.0 |

## 章节清单
| 章节 ID | 现编号 | 标题 | 状态 | 最后核实 |
| --- | --- | --- | --- | --- |
| mm-what-why | 第 1 章 | 是什么 / 为什么（感知面全景、理解 vs 生成） | ✅ | 2026-07-09 |
| mm-encoder | 第 2 章 | 机器怎么「看」（ViT / CLIP / 编码器选型） | ✅ | 2026-07-09 |
| mm-fusion | 第 3 章 | 模态怎么「拼」（三路线 + 原生 vs 拼管线） | ✅ | 2026-07-09 |
| mm-understanding | 第 4 章 | 理解侧能力盘点（图 / 文档 / 视频 / 语音 + 格局） | ✅ | 2026-08-01 |
| mm-generation | 第 5 章 | 生成侧能力盘点（扩散 vs 自回归 / 视频 / 语音） | ✅ | 2026-07-09 |
| mm-selection | 第 6 章 | 选型与动手做（成本 / 延迟 / 精度、调用、部署） | ✅ | 2026-07-09 |
| mm-production | 第 7 章 | 生产落地与坑（成本 / 幻觉 / 评估 / 安全） | ✅ | 2026-07-09 |
| mm-voice-realtime | 第 8 章 | 语音与实时交互（延迟预算 / 级联 vs 端到端 / 打断 / RTC 框架） | ✅ | 2026-08-01 |
| mm-video-generation | 第 9 章 | 视频生成（在位三家格局、按秒计价成本账、工作流与标识合规） | ✅ | 2026-08-01 |
| mm-cheatsheet | 第 10 章 | 售前速查（术语 / 决策树 / 串联地图） | ✅ | 2026-07-09 |

## 时效性事实（巡检盘查对象）
| 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 闭源旗舰原生多模态：GPT-5.5（1.05M 上下文，收文本与图）/ Gemini 3.1 Pro（原生图音视频 + 1M 上下文 + 64K 输出）/ Claude Opus 5（视觉 + 1M，adaptive thinking）；三家中仅 Gemini 原生收音视频，thinking 档已成主流。旧口径 GPT-5 / Gemini 2.5 Pro / Claude 4.5 作废 | mm-understanding | 2026-08-01 | developers.openai.com 模型页（gpt-5.5）；deepmind.google Gemini 3.1 Pro 模型卡；platform.claude.com 模型总览 + anthropic.com/news/claude-opus-5（2026-07-24） | 2026-09-05 | A | 30 | 官方规格页只证型号与上下文，不含跨家实测能力排名 |
| 开源 VLM 换代：Qwen3-VL（Apache-2.0，Instruct / Thinking 双档，2B–235B-A22B）与 InternVL3.5（Apache-2.0，官方称开源 MLLM 综合 SOTA）为当期主角；**官方仓库与模型卡均未公布 MMMU 数值，本册只写定性排位**，旧值 InternVL3-78B≈72.2% / Qwen2.5-VL-72B≈70.2% / OCRBench≈888 一并作废 | mm-understanding | 2026-08-01 | github.com/QwenLM/Qwen3-VL；github.com/OpenGVLab/InternVL 与 huggingface.co/OpenGVLab/InternVL3_5-241B-A28B | 2026-09-05 | B | 30 | 官方无公布分数，定性排位不能当作分数对比引用 |
| 原生图像生成两大流派：扩散（FLUX.2 / Midjourney）vs 自回归（GPT Image 2〔2026-04〕、Nano Banana 2 = Gemini 3.1 Flash Image〔2026-02〕、Luma） | mm-generation | 2026-08-01 | Modelize / DualView / Curify 2026；08-01 巡检以 ropewalk / buildmvpfast 2026-07 横评复核 | 2026-09-05 | B | 30 | 二手盘点只给流派归属，不证各家出图质量高下 |
| GPT Image 2 全新自回归架构，比前代快 3–5×，多约束指令≈98% 准确、文字渲染近字符级 | mm-generation | 2026-08-01 | nanobananafree / Picsart 2026；08-01 巡检以 pixverse / ropewalk 2026-07 横评复核 | 2026-09-05 | B | 30 | 横评口径的倍数与准确率，自家提示与素材需复测 |
| 开源 VLM 可用 vLLM / SGLang 在 GPU 云自部署（Qwen3-VL / Llama 4 Scout / InternVL3.5） | mm-selection | 2026-08-01 | Spheron 部署指南 2026；08-01 巡检按 QwenLM / OpenGVLab 仓库回写型号版本 | — | B | 90 | 能部署不等于开箱达标，显存与吞吐要在目标卡上实测 |
| 理解侧主基准：MMMU（多学科理解）、OCRBench / DocVQA（文档）、Video-MME（视频） | mm-production | 2026-07-09 | 2026 VLM 评测综述 | — | B | 90 | 只是基准名单，不含分数，也不代表你的文档版式 |
| 语音延迟口径：人类换话空隙 300–500ms；级联生产目标 P50 <1.5s；端到端标杆 <800ms（gpt-realtime-2.1 家族量级）；>1.5s 用户判定「坏了」 | mm-voice-realtime | 2026-07-10 | softcery / telnyx 2026 横评（延迟量级未复核，08-01 只随换代回写型号名） | — | B | 90 | 横评量级，自身网络与并发下的 P95 仍要实测 |
| 级联时延拆帐：ASR 100–300ms + LLM 350–1000ms + TTS 90–200ms + 网络 50–200ms；2026 企业生产以级联为主（可审计 / 可换供应商） | mm-voice-realtime | 2026-07-10 | softcery / speko.ai / modulate | — | B | 90 | 外部拆账区间，自家地域与供应商组合要重新测 |
| 端到端 S2S 格局：OpenAI **gpt-realtime-2.1 / 2.1-mini**（2026-07-06 发布；128K 上下文、32K 输出、文本/音频/图像入、p95 时延再降 ≥25%；前代 GPT-Realtime-2 为 2026-05-07，同批还有 Realtime-Translate $0.034/分钟、Realtime-Whisper $0.017/分钟）/ Gemini 3.1 Flash Live（2026-03-26，~200ms 首响、200+ 语言）/ Qwen3-Omni（Apache-2.0，119 文本 / 19 语音输入 / 10 语音输出语种，可自部署；Qwen3.5-Omni 技术报告 2026-04-20、256K 上下文，**未见开放权重故不进成品**）/ Kyutai Moshi（全双工先驱） | mm-voice-realtime | 2026-08-01 | developers.openai.com/api/docs/models/gpt-realtime-2.1；community.openai.com 官方公告（2026-05-07 / 07-06）；github.com/QwenLM/Qwen3-Omni；huggingface.co/papers/2604.15804 | 2026-09-05 | B | 30 | 官方公告的 p95 降幅，自家话务下未必复现 |
| 语音成本：级联 $0.01–0.17/分钟（组件各自计价，可预测）；端到端厂商只公布 token 单价——gpt-realtime-2.1 音频进 $32 / 出 $64 每百万 token、缓存命中输入 $0.4，2.1-mini 音频出 $20。**旧行「gpt-realtime 未缓存实测 $0.18–0.46/分钟、开缓存 $0.05–0.10、mini 便宜约 60%」随两轮换代作废**，端到端的分钟成本须按自身话务实测折算，不再登记外部实测值 | mm-voice-realtime | 2026-08-01 | developers.openai.com 模型与定价页；community.openai.com 2026-05-07 / 07-06 官方公告 | 2026-09-05 | B | 30 | 官方只给 token 价，每分钟成本要按自身话务折算 |
| 语音框架：Pipecat v1.0（2026-04，帧管线）/ LiveKit Agents（房间模型）；实测端到端 750–950ms 同量级；Vapi / Retell 为托管层 | mm-voice-realtime | 2026-07-10 | webrtc.ventures 2026-03 / cekura / f22labs | — | B | 90 | 第三方实测量级，不代表你的机房与并发下同样成绩 |

> 说明：融合三路线（投影层 / 交叉注意力 / Q-Former）、ViT patch 化、CLIP 图文对齐属稳定原理，不会半年过期，未登记。2026-08-01 巡检已兑现「8 月上旬旗舰复查」这条定点提醒：闭源三家与开源 VLM 双双换代、Sora 退场、语音端到端两轮换代，均已回写，复查日顺延 2026-09-05。**本册的教训：分数类数字（MMMU / OCRBench / 每分钟成本 / 跨厂商价差倍数）此前全部引自横评二手源，换代后无一可核——此后只登记厂商官方页能直接查到的数，查不到就写定性。**

| 视频生成格局重组：**Sora 已退场**——OpenAI 消费端 2026-04-26 停服、Videos API 与 sora-2 / sora-2-pro 快照 2026-09-24 下线（2026-03-24 公告）。在位三家：Seedance 2.0（字节，创意控制 + 参考输入 12 文件）/ 可灵 3.0（快手，2026-04-23 起原生 4K 直出、06-17 出 3.0 Turbo）/ Veo 3.1（Google，官方每秒价：标准 $0.40 (720p/1080p)、$0.60 (4K)；Fast $0.10–0.30；Lite $0.05 (720p)、$0.08 (1080p)，均含音频）。补位候选 Runway Gen-4.5、阿里万相（Wan）。**原「34 倍价差（$0.022–$0.75）」作废**——Seedance / 可灵按积分或包月计、无官方每秒价，跨厂商倍数不可核，成品改用 Veo 同族十倍档差 | mm-video-generation | 2026-08-01 | developers.openai.com/api/docs/deprecations 与 help.openai.com Sora discontinuation；ai.google.dev/gemini-api/docs/pricing；klingai.com 更新日志；runway.com/research（Gen-4.5） | 2026-09-05 | B | 30 | Seedance 与可灵无官方每秒价，跨厂商价差倍数不可引 |
| 即梦消费端口径：注册送 260 积分、5 秒视频约 20 积分（新用户约 13 次免费生成） | mm-video-generation | 2026-07-17 | 即梦平台/评测转述 | 2026-08-31 | B | 30 | 消费端促销积分随活动变，不能作为对客报价依据 |

## 串联出边
| 本模块章节 | 指向 | 关系 |
| --- | --- | --- |
| mm-understanding | rag#rag-multimodal | 本模块讲「模型多模态能力」↔ RAG 第 11 章讲「多模态内容怎么检索」，互为上下游；RAG 第 11 章已加回指页（2026-07-10），双向互指 |
| mm-fusion | rag#rag-multimodal | 「原生 vs 拼管线」的模型侧取舍 ↔ 多模态 RAG 的三条检索路线，同一取舍两个视角 |
| mm-what-why | agent#agent-components | 多模态感知（能看屏幕 / 图表）是 Agent computer use 的前提，视觉作为 Agent 的新「工具输入」；Agent 第 2 章已加回指页（2026-07-10），双向互指 |
| mm-encoder | llm#llm-attention-qkv | ViT 与 Transformer 同源、注意力机制复用；视觉编码器 = Transformer 用在图像 patch 上；LLM 第 2 章已加「承上启下」回指页（2026-07-10），双向互指 |
| mm-production | evaluation | 多模态评估基准（MMMU / OCRBench / DocVQA / Video-MME）↔ Evaluation 模块判分方法与自建评估集 |
| mm-production | security | 跨模态提示注入（图 / 文档里藏指令）↔ Security 模块提示注入防护，注入入口从文本扩展到图像 |
| mm-selection | llm-inference | 视觉 token 膨胀让 prefill 变重、显存占用增大 ↔ LLM-Inference 的 prefill/decode 与 KV Cache |
| mm-voice-realtime | llm-inference#llminf-batching | 语音链路延迟大头 = LLM 首 token；首 token 优化（批处理 / KV 缓存 / 流式）机制在 LLM-Inference 展开 |
| mm-voice-realtime | agent#agent-components | 语音是 Agent 的「耳与嘴」：实时链路为语音 Agent 提供交互层，Agent 侧编排与工具调用不变 |
| mm-voice-realtime | solution-patterns#sp-customer-service | 语音客服场景的方案视角（分流漏斗 / 解决率口径）在 Solution-Patterns 第 3 章展开（模块 2026-07-10 建成，原「候选」补实）；数字人场景另接 sp-digital-human |
| mm-video-generation | security#sec-china | AI 生成视频的标识义务与执法口径在 Security 第 8 章中国监管合规（讲义内已互引） |
| mm-video-generation | solution-patterns#sp-content-gen | 营销素材工厂场景图纸在 SP 第 5 章；本章供「视频积木」的能力与成本口径 |
