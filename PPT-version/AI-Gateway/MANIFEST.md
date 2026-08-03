# AI-Gateway · MANIFEST(模块清单)

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | ai-gateway |
| 所在层 | 工程保障层 |
| 主导关系 | 请求的必经路径——读者要判断的是「该不该在应用和模型之间多插一层、插了之后能把哪些事收上来」。 |
| 建立日期 | 2026-07-09 |
| 最后更新 | 2026-08-02 网页版增补「上云怎么落地」（Codex 对照库借鉴第 3 步·回流批二）：新增 `#cloud` 小节（结构性小节，不进章节清单）……；讲义 86 页；完整更新记录见 [raw-data/更新记录.md](raw-data/更新记录.md) |
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

## 时效性事实(巡检盘查对象)
| 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Envoy AI Gateway v1.0 于 2026-06-23 发布(Tetrate+Bloomberg,基于 CNCF Envoy Gateway);token 限流 + OpenInference/OTel GenAI 观测,语义缓存与按美元成本治理在路线图 | gw-cheatsheet | 2026-07-09 | PRNewswire / Tetrate v1.0 博客 / aigateway.envoyproxy.io | — | A | 90 | 路线图上的语义缓存与成本治理不等于 v1.0 已可用 |
| Portkey 完整开源发布于 2026-03,主打护栏 + 语义缓存 + 提示词管理 | gw-cheatsheet | 2026-07-09 | techsy / openziti 2026 横评 | — | B | 90 | 2026-03 的开源状态，收购之后是否延续要另核 |
| **Portkey 归属已变**:Palo Alto Networks 于 2026-04-30 宣布收购、2026-05-29 完成交割,Portkey 作为 Prisma AIRS 的 AI 网关控制面(官方定位「监控、路由并保护每一笔 AI 交易」)。开源仓 Portkey-AI/gateway 截至 2026-08-01 仍是 MIT、未归档——收购未公布对开源版的处置,不能据此说开源停更 | gw-cheatsheet | 2026-08-01 | paloaltonetworks.com 新闻室两篇(2026-04-30 宣布 / 2026-05-29 完成);开源状态见 github.com/Portkey-AI/gateway;建议复查日 2026-11-30 | — | A | 90 | 收购未公布开源仓处置，不能据此说开源停更或改协议 |
| LiteLLM 为最广泛采用的开源 LLM 网关(Python,100+ provider);虚拟密钥、按项目预算/花费追踪、复杂度自动路由(7 维打分)、实时护栏;**版本迭代极快,本表刻意不登记小版本号**——2026-08-01 当天仓库上同时挂着 v1.95.0-rc.3(08-01)与 v1.96.0-dev.2(07-31),按日发版,写死小版本号注定常年过期(原登记的 v1.81.x 即已落后十几个小版本);要报版本请当天查 releases | gw-unify | 2026-08-01 | docs.litellm.ai / github.com/BerriAI/litellm releases;建议复查日＝不设,按需当天查 | — | B | 90 | 按日发版，本表不登版本号，报版本前当天查 releases |
| Azure API Management 是唯一原生内置"按 token 限流 + LLM 专属策略"的云厂商网关;Unified Model API(含 Bedrock 后端)、语义缓存(llm-semantic-cache + Managed Redis) | gw-cost | 2026-07-09 | learn.microsoft.com genai-gateway-capabilities | — | B | 30 | 「唯一原生」是 2026-07 横向口径，各云月级演进 |
| Azure APIM 于 Build 2026 起提供 MCP 内容安全,把 MCP 纳入统一治理 | gw-mcp | 2026-07-09 | InfoQ 2026-06 / sjwiggers | — | B | 90 | 大会公布口径，未逐条对官方文档核实策略清单 |
| Higress(阿里,AI-Native,Istio+Envoy+Wasm):多模型统一路由 + 协议转换(100+ 模型)、语义缓存、token 限流、提示注入检测、模型级 Fallback;托管 MCP Server、openapi-to-mcp、自建 MCP Marketplace | gw-guardrail | 2026-07-09 | github.com/higress-group/higress / higress.ai | — | A | 90 | 官方自述能力清单，随版本演进，非实测覆盖 |
| AI 网关正与 MCP 网关融合(统一代理 LLM API + MCP Server + Agent);Envoy 路线图含 MCP 授权、后端安全策略、OIDC token 交换 | gw-mcp | 2026-07-09 | Envoy release-notes / Apache APISIX | — | B | 90 | 路线图≠已发布能力，「融合」是趋势判断非产品承诺 |
| 可观测正收敛到 OpenTelemetry GenAI 语义约定 / OpenInference | gw-observe | 2026-07-09 | opentelemetry.io semconv/gen-ai / Envoy v1.0 | — | B | 90 | 约定仍在演进，字段名不能照本页写死 |
| 云厂商格局:Cloudflare AI Gateway 主打花费上限与缓存;AWS 以 Bedrock 为主,无 APIM 式统一多模型 API;Google Apigee 有部分 AI 网关能力 | gw-cheatsheet | 2026-07-09 | zuplo / truefoundry 2026 横评 | — | B | 30 | 横评快照，各家能力未逐条对官方文档核 |
| MCP 授权现行规范为 2026-07-28(授权模型自 2025-06-18 起以 OAuth 2.1 为底座):MCP Server=资源服务器,RFC 8707 audience 校验与 RFC 9728 资源元数据为 MUST,PKCE 强制,token 透传明令禁止;2026-07-28 新增签发方(iss)校验、注册声明 application_type、凭据绑签发方,并要求 Mcp-Method/Mcp-Name 请求头(网关不解 JSON 体即可路由) | gw-mcp | 2026-07-30 | modelcontextprotocol.io/specification/2026-07-28/changelog / solo.io / kane.mx | — | A | 90 | 规范条款不等于各家实现已合规，落地度另核 |
| 网关身份传递主流做法:RFC 8693 Token 交换铸造 audience 限定窄凭证,act 委派链可验证"用户→Agent→本次调用";Azure APIM 策略同时支持 RFC 8693 与 Entra On-Behalf-Of,Red Hat/MuleSoft/Maverics 均已落地 | gw-mcp | 2026-07-10 | Red Hat Developer 2025-12 / Salesforce Architect / Uber Eng | — | B | 90 | 厂商工程博客的落地宣称，非各产品当期版本实测 |
| Kong AI Gateway 高级插件（AI Proxy Advanced / Semantic Cache 等）标注 tier: ai_gateway_enterprise,需企业订阅;开源版仅基础 AI Proxy | gw-cheatsheet | 2026-07-12 | developer.konghq.com/plugins/ai-proxy-advanced/ | — | A | 30 | 授权层级随版本调整，不能据此推断开源版长期缺口 |
| Apache APISIX 当前正式版 3.17.0(2026-06-15),支持 MCP 与 Agent 流量治理 | gw-cheatsheet | 2026-07-12 | apisix.apache.org/downloads/ | — | A | 90 | 版本随时翻页，报版本前重新核当天 downloads |
| AWS Multi-Provider Generative AI Gateway 为官方 Guidance(LiteLLM+ECS/EKS 自部署方案),非托管网关产品——AWS 侧仍无 APIM 式托管统一多模型网关 | gw-cheatsheet | 2026-07-12 | docs.aws.amazon.com/solutions/multi-provider-generative-ai-gateway-on-aws/ | — | B | 30 | 「AWS 仍无托管网关」是当期缺席观察，新品可随时发布 |
| Envoy AI Gateway 核心 CRD 已 v1beta1,QuotaPolicy 仍 v1alpha1(不能与核心一并描述为稳定) | gw-cheatsheet | 2026-07-12 | aigateway.envoyproxy.io/docs/api/ | — | A | 90 | v1alpha1 会改签名，不能据此写长期兼容承诺 |

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
