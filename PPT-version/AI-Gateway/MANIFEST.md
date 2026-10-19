# AI-Gateway · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | ai-gateway |
| 所在层 | 工程保障层 |
| 主导关系 | 请求的必经路径——读者要判断的是「该不该在应用和模型之间多插一层、插了之后能把哪些事收上来」。 |
| 建立日期 | 2026-07-09 |
| 最后更新 | 2026-10-20 到期事实复核：成立 9 条回写日期、已变 6 条三处同步（要点：Envoy AI Gateway 更名 Agent Router 并转入 Agentic AI Foundation，讲义与网页现役称呼改为「Agent Router（原 Envoy AI Gateway）」；MCP 授权/后端安全策略/OIDC token 交换由路线图改为已发布；Portkey 开源版不含语义缓存与提示词管理、Gateway 2.0 仍预发布；APISIX 3.17.0→3.19.0；Cloudflare 统一端点单模型调用弃用；RFC 8693+OBO 的主体由 Azure APIM 更正为 MuleSoft Flex Gateway）；2026-08-02 网页版增补「上云怎么落地」（Codex 对照库借鉴第 3 步·回流批二）：新增 `#cloud` 小节（结构性小节，不进章节清单）……；讲义 86 页；完整更新记录见 [raw-data/更新记录.md](raw-data/更新记录.md) |
| 产出 skill 版本 | v3.0 |

## 章节清单
| 章节 ID | 现编号 | 标题 | 状态 | 最后核实 |
| --- | --- | --- | --- | --- |
| gw-what-why | 第 1 章 | 是什么·为什么(从 API 网关到 AI 网关) | ✅ | 2026-07-09 |
| gw-unify | 第 2 章 | 统一接入与协议转换 | ✅ | 2026-07-09 |
| gw-route | 第 3 章 | 路由·负载·容灾 | ✅ | 2026-07-09 |
| gw-cost | 第 4 章 | 流量与成本治理 | ✅ | 2026-07-09 |
| gw-guardrail | 第 5 章 | 安全·合规·护栏(挂载点) | ✅ | 2026-07-09 |
| gw-observe | 第 6 章 | 可观测 | ✅ | 2026-07-09 |
| gw-mcp | 第 7 章 | AI 网关 + MCP 网关(展开章,含授权时序深潜) | ✅ | 2026-07-10 |
| gw-cheatsheet | 第 8 章 | 选型与上云·售前速查 | ✅ | 2026-07-09 |

## 时效性事实（巡检盘查对象）
| 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Envoy AI Gateway v1.0 于 2026-06-23 发布（维护者含 Tetrate、Bloomberg，基于 Envoy Gateway）；2026-09-10 起更名 Agent Router、脱离 CNCF 成为 Agentic AI Foundation 独立项目（CRD/API 组 aigateway.envoyproxy.io、aigw CLI、Apache 2.0 均不变，v1.2.0 于 2026-10-06 为改名后首版）；token 限流 + OpenInference/OTel GenAI 观测，语义缓存与按美元成本治理在路线图 | gw-cheatsheet | 2026-10-20 | theagentrouter.ai/blog/envoy-ai-gateway-is-now-agent-router（2026-10-20 逐字核对）；Tetrate v1.0 博客 / github.com/envoyproxy/ai-gateway releases（已重定向新仓） | — | A | 90 | 路线图上的语义缓存与成本治理不等于 v1.0 已可用 |
| Portkey 开源网关（MIT）主线仍为 v1.15.x（最新 v1.15.2，2026-01-12）；「企业版核心并入开源」的 Gateway 2.0 截至 2026-10-20 仍是 Pre-Release 分支；开源版带护栏，语义缓存与提示词管理在 README 中标注仅 hosted/enterprise 版提供 | gw-cheatsheet | 2026-10-20 | github.com/Portkey-AI/gateway（2026-10-20 逐字核对） | — | B | 90 | Gateway 2.0 预发布不等于已开源发布；收购后开源线去向要另核 |
| **Portkey 归属已变**:Palo Alto Networks 于 2026-04-30 宣布收购、2026-05-29 完成交割,Portkey 作为 Prisma AIRS 的 AI 网关控制面(官方定位「监控、路由并保护每一笔 AI 交易」)。开源仓 Portkey-AI/gateway 截至 2026-08-01 仍是 MIT、未归档——收购未公布对开源版的处置,不能据此说开源停更 | gw-cheatsheet | 2026-10-20 | www.paloaltonetworks.com/company/press/2026/palo-alto-networks-completes-acquisition-of-portkey-to-secure-ai-agents（2026-10-20 逐字核对）；开源状态见 github.com/Portkey-AI/gateway；建议复查日 2026-11-30 | — | A | 90 | 收购未公布开源仓处置，不能据此说开源停更或改协议 |
| LiteLLM 为最广泛采用的开源 LLM 网关(Python,100+ provider);虚拟密钥、按项目预算/花费追踪、复杂度自动路由(7 维打分)、实时护栏;**版本迭代极快,本表刻意不登记小版本号**——2026-08-01 当天仓库上同时挂着 v1.95.0-rc.3(08-01)与 v1.96.0-dev.2(07-31),按日发版,写死小版本号注定常年过期(原登记的 v1.81.x 即已落后十几个小版本);要报版本请当天查 releases | gw-unify | 2026-10-20 | docs.litellm.ai/docs/proxy/auto_routing（2026-10-20 逐字核对）；github.com/BerriAI/litellm releases；建议复查日＝不设，按需当天查 | — | B | 90 | 按日发版，本表不登版本号，报版本前当天查 releases |
| Azure API Management 原生内置按 token 限流（llm-token-limit 策略族）+ LLM 专属策略，并有统一模型 API（Unified Model API，preview：单一 OpenAI 兼容端点接多后端；后端格式现仅 OpenAI Chat Completions 与 Anthropic Messages 两种）与语义缓存（llm-semantic-cache + Azure Managed Redis）；「唯一原生」不成立——Google Apigee 原生自带 PromptTokenLimit / LLMTokenQuota LLM token 策略与语义缓存、Model Armor、动态模型路由，官方文档设专门「AI gateway capabilities」页（2026-07-13 更新） | gw-cost | 2026-10-20 | learn.microsoft.com/en-us/azure/api-management/unified-model-api（2026-10-20 逐字核对）；learn.microsoft.com genai-gateway-capabilities；docs.cloud.google.com/apigee ai-capabilities | — | B | 30 | 排他断言（「唯一」）必须逐云核对官方策略清单；三家月级演进 |
| Azure APIM 于 Build 2026 起提供 MCP 内容安全,把 MCP 纳入统一治理 | gw-mcp | 2026-10-20 | learn.microsoft.com/en-us/azure/api-management/llm-content-safety-policy（2026-10-20 逐字核对）；InfoQ 2026-06 | — | B | 90 | 大会公布口径，未逐条对官方文档核实策略清单 |
| Higress(阿里,AI-Native,Istio+Envoy+Wasm):多模型统一路由 + 协议转换(100+ 模型)、语义缓存、token 限流、提示注入检测、模型级 Fallback;托管 MCP Server、openapi-to-mcp、自建 MCP Marketplace | gw-guardrail | 2026-10-20 | github.com/higress-group/higress（2026-10-20 逐字核对）；higress.ai | — | A | 90 | 官方自述能力清单，随版本演进，非实测覆盖 |
| AI 网关正与 MCP 网关融合（统一代理 LLM API + MCP Server + Agent）；Envoy AI Gateway（2026-09 起更名 Agent Router）已发布 MCP 授权（MCPRoute 授权规则）、后端安全策略（BackendSecurityPolicy，v1beta1）与 AWS/Azure OIDC token 交换，不再只是路线图 | gw-mcp | 2026-10-20 | theagentrouter.ai/docs/api/（2026-10-20 逐字核对）；Agent Router release notes | — | B | 90 | 「融合」是趋势判断非产品承诺；已发布能力以当期 release notes 为准 |
| 可观测正收敛到 OpenTelemetry GenAI 语义约定 / OpenInference | gw-observe | 2026-10-20 | github.com/open-telemetry/semantic-conventions-genai（2026-10-20 逐字核对）；Agent Router v1.0/v1.1 release notes | — | B | 90 | 约定仍在演进，字段名不能照本页写死 |
| 云厂商格局（2026-10-20 复核）：Cloudflare AI Gateway 已不止「花费上限+缓存」——支持 20+ 家 provider，统一 OpenAI 兼容端点 /chat/completions（页内列 14 家）单模型调用已标弃用、改推 REST API；另有 rate limiting、Guardrails(Beta)、DLP(Beta)、动态路由(Beta)、Spend limits(Beta)、统一计费；Google Apigee 官方设专门「AI gateway capabilities」文档页（Model Armor、语义缓存、LLM token 策略、动态模型路由、MCP 工具化），「有部分能力」低估；AWS 以 Bedrock 为主，Bedrock 已提供 OpenAI 兼容 API 族（Chat Completions / Responses）并上架 OpenAI GPT-6 系列、GPT-5.6/5.5/5.4 等第三方模型 | gw-cheatsheet | 2026-10-20 | developers.cloudflare.com/ai-gateway/usage/chat-completion/（2026-10-20 逐字核对）；docs.cloud.google.com/apigee ai-capabilities；docs.aws.amazon.com/bedrock models-api-compatibility | — | B | 30 | 格局快照月级演进，引用前重开官方 features/capabilities 页；否定式能力判断抓到反证即作废 |
| MCP 授权现行规范为 2026-07-28(授权模型自 2025-06-18 起以 OAuth 2.1 为底座):MCP Server=资源服务器,RFC 8707 audience 校验与 RFC 9728 资源元数据为 MUST,PKCE 强制,token 透传明令禁止;2026-07-28 新增签发方(iss)校验、注册声明 application_type、凭据绑签发方,并要求 Mcp-Method/Mcp-Name 请求头(网关不解 JSON 体即可路由) | gw-mcp | 2026-10-20 | modelcontextprotocol.io/specification/2026-07-28/changelog（2026-10-20 逐字核对） | — | A | 90 | 规范条款不等于各家实现已合规，落地度另核 |
| 网关身份传递主流做法:RFC 8693 Token 交换铸造 audience 限定窄凭证,act 委派链可验证"用户→Agent→本次调用";MuleSoft Flex Gateway 出站策略同时支持 RFC 8693 与 Entra On-Behalf-Of,Red Hat/Maverics 均已落地;Azure APIM 官方文档未见原生 RFC 8693 交换策略 | gw-mcp | 2026-10-20 | docs.mulesoft.com/gateway/latest/policies-outbound-oauth-obo（2026-10-20 逐字核对）；Red Hat Developer 2025-12 / Uber Eng | — | B | 90 | 厂商工程博客的落地宣称，非各产品当期版本实测 |
| Kong AI Gateway 高级插件（AI Proxy Advanced / Semantic Cache 等）标注 tier: ai_gateway_enterprise,需企业订阅;开源版仅基础 AI Proxy | gw-cheatsheet | 2026-09-05 | developer.konghq.com/plugins/ai-proxy-advanced/reference.md（frontmatter 逐字；2026-09-05） | — | A | 90 | 授权层级随版本调整，不能据此推断开源版长期缺口；服务名可能改名，改名不改本质 |
| Apache APISIX 当前正式版 3.19.0(2026-09-28),支持 MCP 与 Agent 流量治理(3.19.0 新增 openapi-to-mcp 插件) | gw-cheatsheet | 2026-10-20 | apisix.apache.org/downloads/（2026-10-20 逐字核对） | — | A | 90 | 版本随时翻页，报版本前重新核当天 downloads |
| AWS Multi-Provider Generative AI Gateway 为 AWS Solutions Library 官方 Guidance（GitHub: aws-solutions-library-samples/guidance-for-multi-provider-generative-ai-gateway-on-aws）：LiteLLM + ECS/EKS 的 Terraform 自部署参考架构，非托管网关产品；AWS 托管侧统一多模型 API 现状见上行（Bedrock 提供 OpenAI 兼容 API 族） | gw-cheatsheet | 2026-10-20 | github.com/aws-solutions-library-samples/guidance-for-multi-provider-generative-ai-gateway-on-aws（2026-10-20 逐字核对） | — | B | 30 | Guidance 状态以官方仓为准；「AWS 无托管统一多模型网关」这类否定式观察不登记 |
| Envoy AI Gateway 核心 CRD 已 v1beta1,QuotaPolicy 仍 v1alpha1(不能与核心一并描述为稳定) | gw-cheatsheet | 2026-10-20 | theagentrouter.ai/docs/api/（2026-10-20 逐字核对） | — | A | 90 | v1alpha1 会改签名，不能据此写长期兼容承诺 |

## 串联出边
| 本模块章节 | 指向 | 关系 |
| --- | --- | --- |
| gw-guardrail | security#sec-defense | 网关是护栏/审计/内容安全的统一落地位;Security 出"要防什么",网关做"能集中执行的那部分" |
| gw-guardrail | security#sec-agentic | 虚拟密钥落地"最小权限/爆炸半径";数据驻留/脱敏在路由与护栏里强制 |
| gw-mcp | mcp#(全模块) | 把 MCP 流量统一代理、发现、鉴权、限流、审计的运营层(MCP 讲协议,网关讲治理) |
| gw-mcp | a2a#(全模块) | Agent↔Agent 流量经网关做统一身份传递与可观测 |
| gw-mcp | agent#(全模块) | 给 Agent 的多模型/多工具调用提供统一入口与护栏 |
| gw-route | evaluation#eval-scenarios | 路由降级后的质量靠 Evaluation 持续打分验收 |
| gw-observe | evaluation#(全模块) | 可观测的"质量维度"接 Evaluation(快不快贵不贵 vs 好不好) |
| gw-cost | llm-inference#(全模块) | 网关在推理服务之上:单模型加速(Inference) vs 多模型统一治理(网关),互补分工 |
| gw-route / gw-cost | model-landscape#ml-selection | "选哪些模型进路由池"的格局与方法在 Model-Landscape(三层路由/五约束决策树),网关是其工程落地件——双向互指(2026-07-10) |
| gw-observe | ai-ops#ops-tracing | 网关是数据源与统一采集层,AI-Ops 是消费与行动层(在线评估/漂移/告警);trace id 两层贯通——双向互指(2026-07-10) |
