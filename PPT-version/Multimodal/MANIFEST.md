# Multimodal · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | multimodal |
| 所在层 | 应用模式层 |
| 主导关系 | 管线与原生的分工——读者带着「客户要个多模态，我该怎么搭、贵不贵」来。 |
| 建立日期 | 2026-07-09 |
| 最后更新 | 2026-08-02 网页版增补「上云怎么落地」（Codex 对照库借鉴第 3 步·回流批）：新增 `#cloud` 小节（结构性小节，与 qa/related/sources 同类，不进章节清单）……；讲义 116 页；完整更新记录见 [raw-data/更新记录.md](raw-data/更新记录.md) |
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
