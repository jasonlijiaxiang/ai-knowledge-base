# Model-Landscape · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | model-landscape |
| 所在层 | 解决方案层（2026-07-10 层调整：自基础层迁入，与 Solution-Patterns 同层） |
| 主导关系 | 配一组不选一个——读者带着「客户问我们用哪个模型」来，心里预设是选一个。 |
| 建立日期 | 2026-07-10 |
| 最后更新 | 2026-08-02 上云落点覆盖判定（Codex 对照库借鉴第 3 步）：本册第 9 章「国内平台格局」（方舟／百炼／千帆／腾讯）与全册的模型货架、价格锚点本身就是云平台内容，网页版已覆盖；显式决定不另设上云小节——再开一节只会与正文重复。；讲义 99 页；完整更新记录见 [raw-data/更新记录.md](raw-data/更新记录.md) |
| 产出 skill 版本 | v3.0 |

> **巡检特别标注：本模块是全库事实密度最高、最易过期的模块**——价格与版本号赏味期 1–3 个月，
> 榜单排名数周，份额半年。巡检时本模块优先核；讲义第 9 章有面向读者的保鲜声明页。

## 章节清单
| 章节 ID | 现编号 | 标题 | 状态 | 最后核实 |
| --- | --- | --- | --- | --- |
| ml-map | 第 1 章 | 全景地图（三大阵营 / 两个市场 / 一年三变局） | ✅ | 2026-07-10 |
| ml-closed | 第 2 章 | 闭源旗舰家族图谱（五张名片 + 对比总表） | ✅ | 2026-07-10 |
| ml-open | 第 3 章 | 开放权重格局（中国四强榜首 / 西方线 / 追平叙事） | ✅ | 2026-07-10 |
| ml-china | 第 4 章 | 中国格局与豆包定位（四强横评 / 豆包家族 / 场景口径） | ✅ | 2026-07-10 |
| ml-license | 第 5 章 | 许可证与合规边界（open weight vs open source / 三级分类） | ✅ | 2026-07-10 |
| ml-price | 第 6 章 | 价格带与成本工程（光谱 / 三档制 / 缓存经济学） | ✅ | 2026-07-10 |
| ml-capability | 第 7 章 | 能力矩阵与推理模型（窗口 / 模态 / 思考预算 / overthinking） | ✅ | 2026-07-10 |
| ml-selection | 第 8 章 | 选型方法论（多模型默认解 / 三层路由 / 两道防线） | ✅ | 2026-07-10 |
| ml-platforms | 第 9 章 | 国内平台格局（方舟/百炼/千帆/腾讯四平台画像、货架哲学、价格锚点、选型三问） | ✅ | 2026-07-17 |
| ml-cheatsheet | 第 10 章 | 售前速查（总表 / 价格卡 / 许可证卡 / 保鲜声明 / 串联） | ✅ | 2026-07-10 |

## 时效性事实（巡检盘查对象）
| 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GPT-5.6 家族（2026-07-09 GA，07-30 降价，Sol 再降至促销价）：Sol $4/$20（官方注明至少持续到 2026-11-21；长上下文档 $8/$30）、Terra $2/$12、Luna $0.20/$1.20；缓存读 0.1×、写 1.25×；新旗舰 gpt-6-astra 已上架（$10/$50） | ml-closed / ml-price | 2026-09-05 | developers.openai.com/api/docs/pricing（2026-09-05 逐字核对） | 2026-11-21 | A | 30 | 官方牌价当日快照；Sol 是促销价、有截止日，不含商务折扣与实际结算价 |
| Claude 5 家族：Fable 5.1（Mythos 级、1M 上下文/128K 输出、$10/$50，Fable 5 降 legacy）、Mythos 5.1 限量、Opus 5（$5/$25，上位现役旗舰）、Sonnet 5 $2/$10（尝鲜价已转标准价，原定 2026-09-01 涨 $3/$15 不执行）；Fable/Mythos 出口管制 2026-06-30 解除、2026-07-01 恢复 | ml-closed | 2026-09-05 | platform.claude.com/docs/en/about-claude/pricing；anthropic.com/news/redeploying-fable-5（2026-09-05 逐字核对） | — | A | 30 | 官方牌价当日快照；限量档位与商用条款另谈，别拿限量价算长期单位成本 |
| 企业 LLM 支出份额（Menlo）：Anthropic 40% / OpenAI 27% / Google 21%；ChatGPT 消费份额约 74%、日 25 亿+ prompts；企业支出 $8.4B、年底看 $15B；Claude Code 年化 $1B、企业编码 54% | ml-map | 2026-07-10 | Menlo 报告 / officechai / aimultiple | — | B | 90 | 支出份额不等于调用量份额；年底 $15B 是预测不是已发生 |
| Gemini 3.1 Pro（推理旗舰，仍挂 Preview 未 GA、1M 上下文）；Gemini 3.8 Flash（2026-09 GA，尝鲜价 $0.75/$3.75 至 2026-12-31，2027-01-01 起标准价 $1.50/$7.50）；「旗舰中 API 最低价」已不成立（GPT-5.6 Luna $0.20/$1.20、Grok 4.3 $1.25/$2.50 更低）；「Flash-Lite $0.10/$0.40 最低闭源档」已不成立（gpt-5-nano $0.05/$0.40 更低，且 $0.10/$0.40 是上一代 2.5 Flash-Lite 的价，现役 3.1/3.5 Flash-Lite 更贵） | ml-closed / ml-price | 2026-09-05 | ai.google.dev Gemini 3.1 Pro 模型页与 latest-model 页；developers.openai.com/api/docs/pricing；docs.x.ai/developers/models（2026-09-05 逐字核对） | 2026-12-31 | A | 30 | 官方牌价快照；3.8 Flash 尝鲜价有截止日；横比只比官方牌价、不含商务折扣 |
| Grok 4.3：$1.25/$2.50、缓存输入 $0.20（<200k 档；≥200k 档翻倍为 $2.50/$0.40/$5.00）；2026-06-17 上 Amazon Bedrock（xAI 官方公告）；Grok 4.6（$2/$0.50/$6）已成 xAI 当前旗舰 | ml-closed | 2026-09-05 | docs.x.ai/developers/models；x.ai/news/grok-amazon-bedrock（2026-09-05 逐字核对） | — | B | 30 | 官方牌价当日快照；「AA 智能指数」「SOC2/HIPAA」等旧子断言本轮无官方原文，已删 |
| Meta 转向：Behemoth（2T/288B 激活）未发布（官方 2025-04 口径「still training」，此后无下文）；Muse Spark 2026-04-08 发布（首个闭源 API-only）、Muse Spark 1.1 2026-07-09 迭代；Llama 4 Scout（109B/17B 激活、10M ctx）与 Maverick（400B/17B、1M）成最后开放版本 | ml-closed / ml-open | 2026-09-05 | ai.meta.com/blog/introducing-muse-spark-meta-model-api/；ai.meta.com/blog/llama-4-multimodal-intelligence/（2026-09-05 逐字核对） | — | B | 90 | 「实质搁置」是媒体判断、非官方路线终止；Muse Spark 1.0 发布日为一手博客已 404、二手报道口径 |
| 开源榜首（2026-09 快照）：DeepSeek V4 Pro 1.6T/49B 激活（SWE-bench Verified 80.6 追平闭源；MIT）、GLM-5.2 753B MoE（HF 权重口径；论文口径 744B/40B 激活）/ 1M 上下文（MIT；继任 GLM-5.3 同底座、改自有许可）、Kimi K3 2.8T MoE（激活 104B、原生视觉、1M 上下文；自有许可带商用阈值——不是 Modified MIT）、Qwen3.5 系 397B-A17B 与 122B-A10B（Apache-2.0） | ml-open | 2026-09-05 | huggingface.co/moonshotai/Kimi-K3；huggingface.co/zai-org/GLM-5.2（HF API 权重口径）；huggingface.co/Qwen/Qwen3.5（2026-09-05 逐字核对） | — | B | 30 | 「综合 87」等第三方榜位本轮未从官方页复读；GLM 的 744/753 是论文与权重两种口径，引用必须带口径 |
| GLM-5 为首个完全用华为昇腾训练的前沿模型（零英伟达） | ml-open / ml-china | 2026-07-10 | 国产四强横评（qiniu 2026-06） | — | B | 90 | 横评口径的「首个」，非官方披露的训练算力细节 |
| 国产四强（2026-09 快照，与「开源榜首」行口径并齐）：GLM-5.2（753B 权重口径 / 论文口径 744B、40B 激活）/ Kimi K3 / Qwen3.5（397B-A17B）/ DeepSeek V4 Pro（1.6T/49B 激活）——各至少一个主流基准超国际闭源（2026-06 横评结论，版本已滚动） | ml-china | 2026-09-05 | huggingface.co/moonshotai/Kimi-K3；huggingface.co/zai-org/GLM-5.2；huggingface.co/Qwen/Qwen3.5（2026-09-05 逐字核对） | — | B | 30 | 2026-06 横评的「超越时刻」结论；「Kimi K2 agent swarm 百级并行」「DeepSeek API 便宜 20–50 倍」两个旧说法本轮无权威页，已删 |
| 豆包：2.1 Pro 2026-06-23 发布（¥6/¥30、缓存命中 ¥1.2）；2.1 Turbo 半价；Seed-Evolving 月更 2–4 次；Seed-2.0-lite（2026-05，家族首个原生统一全模态）；日均 Token 调用量突破 180 万亿（截至 2026-06，过去一年增长超 10 倍） | ml-china | 2026-09-05 | 新华网 news.cn/tech/20260623/...（2026-09-05 逐字核对） | — | B | 30 | 180 万亿是「日均」不是「累计」——口径方向相反、量级差三档；官网牌价与厂商披露不含商务折扣 |
| 许可证格局：OSAID v1.0（2024-10）口径下主流"开源"模型均为 open weight；DeepSeek/GLM-5.2 = MIT、Qwen3 主系 = Apache 2.0、Kimi K3 = 自有许可（MIT 式 + 商用阈值）、Mistral Large 3/Small 4 转 Apache 2.0；Llama 社区证含 700M MAU 帽 + 欧盟条款 | ml-license | 2026-07-10 | qubittool / HF blog / LICENSE 原文 | — | A | 90 | 条款随版本换，不替代法务对具体用途的核定 |
| 价格光谱：地板 gpt-5-nano $0.05/$0.40、DeepSeek V4 Flash 缓存命中 $0.007/$0.014（未命中 $0.22/$0.44、输出 $0.66/$1.32，2026-08-16 起峰谷双价）、Gemini 2.5 Flash-Lite $0.10/$0.40（上一代，现役 3.1/3.5 Flash-Lite 更贵）；GPT-5.6 Luna $0.20/$1.20 已入地板档；天花板 o1-pro $150/$600（GPT-5.4 Pro $30/$180 之上）；整体对比 2025 降 30–60% | ml-price | 2026-09-05 | api-docs.deepseek.com/quick_start/pricing；developers.openai.com/api/docs/pricing；docs.x.ai/developers/models（2026-09-05 逐字核对） | — | A | 30 | 官方牌价快照；DeepSeek 峰谷双价按 UTC 时段，「整体降 30–60%」无权威一手源、沿用历史口径 |
| 小模型：Phi-4 / Gemma 4（26B MoE 激活 3.8B；E2B 2.3B 有效参数，32k 上下文 + int8 KV 口径 bf16 约 4.6GB / 量化后约 0.8GB）/ SmolLM-3 为三大部署家族；sub-10B 常规超 2024 版 GPT-4 | ml-map / ml-capability | 2026-09-05 | Gemma 4 技术报告 arxiv.org/html/2607.02770v1（2026-09-05 逐字核对） | — | B | 30 | 内存数是 32k+int8 KV 口径；「三大部署家族」「超 GPT-4」两个归纳无权威一手源，实机按量化配置复测 |
| 推理模型：思考预算两旋钮（Anthropic budget_tokens / Gemini thinkingBudget）；L1 可控 vs L2 自适应（arXiv 2507.02076）；overthinking 实证——超临界预算准确率下降（arXiv 2506.04210） | ml-capability | 2026-07-10 | arXiv 两篇（书单列官方链接） | — | A | 90 | 论文实验环境的临界点，自家任务要自测预算 |
| 选型实践：Walmart Code Puppy 跨 GPT/Claude/Gemini 动态路由；ServiceNow 2026-01 同签 OpenAI+Anthropic；Gartner 预计 2028 年 70% 多模型组织用 AI 网关（2024 <5%） | ml-selection | 2026-07-10 | chatgptaihub / datatobiz / Gartner 转引 | — | B | 180 | Gartner 是预测值非现状；个案不等于行业普遍做法 |
| 榜单防线：Leaderboard Illusion（私测多变体择优，arXiv 2504.20879）；MMLU 类饱和 88%+ 无区分度（与 evaluation 模块同源口径） | ml-selection | 2026-07-10 | arXiv（书单列官方链接）/ evaluation 模块 | — | A | 90 | 基准饱和不代表所有榜失效，终审仍靠自建评估集 |
| 火山方舟：Doubao-Seed-2.1 Pro（06-23）¥6/¥30、缓存命中 ¥1.2（在线推理 [0,256] 单档计价；批量推理 ¥3/¥15）；Coding Plan 订阅 Lite ¥40/月（¥120/季）、Pro ¥200/月（¥600/季），含 Seed-2.0-Code/DeepSeek V3.2/Kimi K2.5/GLM-4.7；企业版支持私有化接入 | ml-platforms | 2026-09-05 | 火山方舟官方价格文档 PDF（docs.volcengine.com/docs/82379/1544106 导出件）；volcengine.com/article/37536（2026-09-05） | — | A | 30 | 订阅价与活动价易变；企业版私有化接入本轮未能复核官方静态页 |
| 阿里百炼：Qwen 全系+DeepSeek/GLM/Kimi/MiniMax（Llama 已不在官方模型列表；「150+」为社区口径）；Qwen3-Max（≤32K）¥2.5/¥10、Qwen3.5-Plus（≤128K）¥0.8/¥4.8；Batch 批量一律 5 折；2026-05 大版本上架 Qwen3.7 全系与百万上下文模型 | ml-platforms | 2026-09-05 | help.aliyun.com/zh/model-studio/model-pricing、/models（2026-09-05 逐字核对） | — | A | 30 | 货架随上架下架变动；分段计价的档内价，超上下文档位另算 |
| 百度千帆：文心 5.0 正式版 2026-01-22（2.4 万亿参数原生全模态）、5.1（2026-05-09 发布，厂商称搜索登顶国内/预训练成本 6%——厂商口径）；150+ SOTA 统一纳管；平台 130 万 Agents、工具日调用超千万次 | ml-platforms | 2026-09-05 | cloud.baidu.com 官方新闻页；qbitai.com/2026/05/414496.html（2026-09-05 逐字核对） | — | B | 30 | 厂商自称的搜索登顶与成本降幅，无第三方复现 |
| 腾讯：混元 2.0（Tencent HY2.0 Instruct/Think）2026-03-13 起 ¥4.505/¥11.13 每百万 tokens（此前 ¥0.8/¥2，官方涨价公告）；现行刊例价表已无混元 2.0 与 Hunyuan Standard（计费迁 TokenHub，现有 Hunyuan-a13b ¥0.5/¥2 等）；ADP 订阅制（Skill Plan ¥88/月、专业版 ¥188/月、企业版 ¥4880/月）；三方模型可切换（DeepSeek-V4 系/GLM-5.1/Kimi K2.5/MiniMax 2.5） | ml-platforms | 2026-09-05 | cloud.tencent.com/announce/detail/2227；混元生文计费概述；ADP 计费概述（2026-09-05 逐字核对） | — | A | 30 | 涨价是官方公告事实；货架与订阅档位月级变，别写进方案承诺 |

## 稳定事实（不会过期，无需巡检）
| 事实 | 章节 ID | 说明 |
| --- | --- | --- |
| 三大阵营结构（闭源旗舰/开放权重/端侧小模型）与三档家族定价制、三层路由框架、五约束决策树 | ml-map / ml-price / ml-selection | 方法论骨架，比数字保值 |

## 串联出边
| 本模块章节 | 指向 | 关系 |
| --- | --- | --- |
| ml-selection | predictive-ai-mlops#pam-model-choice | 反向回指（2026-08-02 新模块建立）：边界声明：客户问「用什么模型」要先分清问的是哪一类——大模型选型（榜单、价格带、许可证）在 Model-Land |
| ml-selection | evaluation#eval-benchmarks | 榜单饱和与 Leaderboard Illusion 的完整弹药在 Evaluation 第 2 章；自建评估集方法在其第 5 章——选型终审依赖它（双向） |
| ml-selection / ml-price | ai-gateway#gw-route / ai-gateway#gw-cost | 三层路由与成本治理的工程落地件；Gartner 网关趋势同源（双向） |
| ml-map / ml-open | llm#llm-architecture | MoE 稀疏激活是「开源追平」与三档定价的架构根源 |
| ml-capability | llm-inference#llminf-batching | 思考预算烧的是 decode；长上下文成本机制在 LLM-Inference |
| ml-capability | rag#rag-what-why | 「1M 窗口 vs RAG」：窗口≠有效窗口，权限/新鲜度/成本三关——与 RAG 第 1 章互为弹药 |
| ml-open / ml-license | fine-tuning#ft-cloud | 开放权重 + 宽松许可证是私有化微调的前提 |
| ml-platforms | security#sec-china | 平台合规配套（备案材料/护栏）与「私有化不免合规」口径在 Security 第 8 章中国监管合规展开（讲义内已互引） |
| ml-platforms | ai-gateway#gw-unify | 「平台锁定」的解法=兼容层/网关保切换能力，机制在 AI-Gateway 统一接入章 |
| ml-platforms | multimodal#mm-fusion | 文心 5.0 原生全模态 vs 拼管线之争的机制展开在 Multimodal 第 3 章 |
| ml-cheatsheet | solution-patterns#sp-method | 「模型是可替换件」的方案叙事在 SP 第 2 章；各场景章的模型选型格子引用本模块 |
| ml-china | （候选）中国合规章 | 国内商用备案与内容合规——Security 增章待用户决策 |
