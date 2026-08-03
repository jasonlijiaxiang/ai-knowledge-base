# RAG · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | rag |
| 所在层 | 应用模式层 |
| 主导关系 | 答案丢在哪一环——读者带来的问题几乎都是「答得准不准、答不准怪谁」。 |
| 建立日期 | 2026-07-07 |
| 最后更新 | 2026-08-02 网页版增补「上云怎么落地」（Codex 对照库借鉴第 3 步·样板册）：新增 `#cloud` 小节（结构性小节，与 qa/related/sources 同类，不进章节清单）……；讲义 129 页；完整更新记录见 [raw-data/更新记录.md](raw-data/更新记录.md) |
| 产出 skill 版本 | v1.0（清单由 v2.0 回填） |

## 章节清单
| 章节 ID | 现编号 | 标题 | 状态 | 最后核实 |
| --- | --- | --- | --- | --- |
| rag-what-why | 第 1 章 | 是什么/为什么 | ✅ | 2026-07-07 |
| rag-embedding | 第 2 章 | 向量检索与 Embedding | ✅ | 2026-07-07 |
| rag-chunking | 第 3 章 | 切分策略 Chunking | ✅ | 2026-07-07 |
| rag-reranking | 第 4 章 | 重排序 Reranking | ✅ | 2026-07-07 |
| rag-evaluation | 第 5 章 | 常见评估方法 | ✅ | 2026-07-07 |
| rag-pipeline | 第 6 章 | 最小 RAG 管线 | ✅ | 2026-07-08 |
| rag-hybrid | 第 7 章 | 混合检索 | ✅ | 2026-07-08 |
| rag-agentic | 第 8 章 | Agentic RAG | ✅ | 2026-07-08 |
| rag-production | 第 9 章 | 生产化与常见坑 | ✅ | 2026-07-08 |
| rag-graphrag | 第 10 章 | GraphRAG：图谱增强检索 | ✅ | 2026-07-09 |
| rag-multimodal | 第 11 章 | 多模态 RAG | ✅ | 2026-07-09 |
| rag-structured | 第 12 章 | 结构化数据 RAG（Text-to-SQL 与语义层） | ✅ | 2026-07-09 |

## 时效性事实（巡检盘查对象）
| 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cohere Rerank 当前主线 v4.0（pro 重质量 / fast 低延迟高吞吐，多语言+半结构化），v3.5 与 v3.0 系仍在服务线 | rag-reranking | 2026-07-12 | docs.cohere.com/docs/rerank | — | A | 90 | 模型目录快照，排序效果仍要用自家评估集实测 |
| 混合检索为生产最低标配，RRF k≈60 为主流引擎原生支持 | rag-hybrid | 2026-07-08 | Elasticsearch / Qdrant 官方文档 | — | A | 90 | k≈60 是默认值不是最优值，各引擎参数细节不同 |
| Agentic RAG 五大生产模式（Router/ReAct/Plan-Execute/Multi-Agent/Self-RAG）+ CRAG | rag-agentic | 2026-07-08 | arXiv 2501.09136、LangGraph 官方教程 | — | A | 180 | 是模式分类不是选型建议，落地效果要各自验证 |
| 生产组合主流：LlamaIndex + LangGraph + Langfuse/LangSmith | rag-production | 2026-07-08 | 2026-07 框架对比评测 | — | B | 90 | 评测期的流行组合，不等于你的场景最优栈 |
| 朴素 RAG 检索环节失败率约四成 | rag-production | 2026-07-08 | raw-data/2026-07-08 核实笔记 | — | B | 180 | 生产统计口径非普适常数，不能当自家系统预期 |
| Contextual Retrieval 实测降检索失败率 49%~67% | rag-chunking | 2026-07-07 | Anthropic Cookbook | — | A | 180 | 官方实验语料的降幅，自家语料要复测 |
| BGE M3 为开源多语言 embedding 代表方案 | rag-embedding | 2026-07-07 | arXiv 2402.03216 | — | B | 90 | 代表性不等于最优，检索质量要用自家评估集实测 |
| 全量 GraphRAG 索引成本 6–8 倍；LazyGraphRAG 压至 0.1%、全局查询省约 700 倍 | rag-graphrag | 2026-07-09 | Microsoft GraphRAG 文档、2026 实践者评测 | — | B | 90 | 倍数随语料形态浮动，量级参考不能当预算 |
| 多模态三路线：Caption / 统一嵌入（Cohere Embed 4、voyage-multimodal）/ ColPali 系晚交互 | rag-multimodal | 2026-07-09 | arXiv 2407.01449、BigData Boutique 2026 | — | B | 90 | 路线分类稳定，但点名的模型月级演进，选型前重核 |
| 裸 Text-to-SQL 准确率随基准真实度分档（学术单轮 80–90% / 中等企业化基准 50–70% / 最难企业基准 Spider 2.0 类约 20%），语义层抬至 85–95%（覆盖查询近 100%）；对客讲最低那档 | rag-structured | 2026-07-23 | dbt 2026 基准 + Spider 2.0 / BEAVER / Spider-Ent（2026-07-23 复核；分档口径与 SP 对齐——原 07-09 只登 50–70%，与 SP 的 10–21% 打架，已按基准真实度合成一套） | — | B | 90 | 基准库口径，自家库 schema 更复杂，要实测 |

## 串联出边
| 本模块章节 | 指向 | 关系 |
| --- | --- | --- |
| rag-what-why | pe#pe-what-why | 「提示词 vs RAG」选型两面 + 检索内容要塞进提示词才生效；讲义已加「与 Prompt Engineering 的关系」页回指 |
| rag-agentic | agent#agent-context | RAG 第 8 章串联页 ↔ Agent 第 5 章"与 RAG 的握手"，双向互引 |
| rag-evaluation | evaluation | 检索质量指标（忠实度、上下文精确率/召回率）↔ Evaluation 模块指标体系（2026-07-09 转正） |
| rag-what-why | fine-tuning | "改知识用 RAG vs 改行为用微调"的取舍，与 Fine-tuning 模块互为参照（2026-07-09 转正） |
| rag-what-why | llm#llm-inference-kv | "长上下文 vs RAG"的架构论据（成本/有效性/权限）在 LLM 原理第 4 章，双向互为弹药 |
| rag-graphrag | rag#rag-agentic | 向量+图谱"按问题类型路由"是第 8 章 Router 模式的应用（章内承接） |
| rag-structured | agent#agent-components | SQL 查数包成 agent 工具，与文档检索并列路由，指向 Agent 模块工具使用章 |
| rag-multimodal | multimodal#mm-fusion | 本章讲「多模态内容怎么检索」，Multimodal 模块讲「模型怎么看懂图」，互为上下游；第 11 章已加「与 Multimodal 模块的关系」页（2026-07-10），双向互指 |
| rag-structured | solution-patterns#sp-chatbi | 本章讲 Text-to-SQL 与语义层的机制，SP 第 8 章是其场景视角（口径战场/三道闸/产品格局）——双向互指（2026-07-11） |
| rag-chunking / rag-embedding | data-engineering#de-parsing / de-vectordb | 上游供给：解析产物进切分（解析质量决定切分质量）；向量库规模化选型与迁移在 Data-Engineering 第 4 章——双向互指（2026-07-11） |
