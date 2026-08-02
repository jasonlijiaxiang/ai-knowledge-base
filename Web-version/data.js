// 本文件由 Web-version/build.py 从各模块 MANIFEST.md 生成，请勿手工编辑。
// 改内容请改 MANIFEST，然后重跑 build.py。
window.KB = {
 "generated_from": "PPT-version/*/MANIFEST.md（结构）+ Web-version/*/index.html（问答）+ build.py CONCEPTS/CHKW（关键词落点与联想）",
 "layers": [
  "解决方案层",
  "应用模式层",
  "协议层",
  "工程保障层",
  "基础层",
  "算力底座层",
  "数据底座层"
 ],
 "modules": [
  {
   "id": "a2a",
   "dir": "A2A",
   "layer": "协议层",
   "created": "2026-07-09",
   "updated": "2026-08-02",
   "chapters": [
    {
     "id": "a2a-what-why",
     "no": "第 1 章",
     "title": "是什么/为什么（与 MCP 分工）",
     "verified": "2026-07-09"
    },
    {
     "id": "a2a-protocol",
     "no": "第 2 章",
     "title": "协议解剖（五大对象与生命周期）",
     "verified": "2026-07-09"
    },
    {
     "id": "a2a-transport",
     "no": "第 3 章",
     "title": "发现与传输（Agent Card 发现·三绑定·流式）",
     "verified": "2026-07-09"
    },
    {
     "id": "a2a-handson",
     "no": "第 4 章",
     "title": "动手做：跑通一次 A2A 协作",
     "verified": "2026-07-09"
    },
    {
     "id": "a2a-orchestration",
     "no": "第 5 章",
     "title": "多智能体协作（opaque agents·任务委派）",
     "verified": "2026-07-09"
    },
    {
     "id": "a2a-production",
     "no": "第 6 章",
     "title": "生产落地·上云",
     "verified": "2026-07-09"
    },
    {
     "id": "a2a-security",
     "no": "第 7 章",
     "title": "安全 · 售前速查",
     "verified": "2026-07-09"
    }
   ],
   "facts": [
    {
     "text": "规范稳定线 1.0（正文 Latest Released 1.0.0）；项目 release 当前 v1.0.1（2026-05-28 补丁；v1.0.0 于 2026-03-12 发布）；历史 0.1.0→0.2.6→0.3.0→1.0.0；以 Protocol Buffers 为唯一权威规范定义",
     "chapter": "a2a-protocol",
     "verified": "2026-07-12",
     "source": "a2a-protocol.org 规范页、github.com/a2aproject/A2A/releases",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-10"
    },
    {
     "text": "v1.0 头号新特性 Signed Agent Cards（签名版 Agent Card，密码学验证签发方）",
     "chapter": "a2a-security",
     "verified": "2026-07-09",
     "source": "LF 一周年 press",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "治理：Google 2025-04 发布并开源，2025-06 捐赠 Linux Foundation 成立中立的 A2A Project",
     "chapter": "a2a-what-why",
     "verified": "2026-07-09",
     "source": "LF 项目成立公告",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-05"
    },
    {
     "text": "采用度 150+ 组织、核心仓库 22,000+ stars；5 官方 SDK（Python/JS/Java/Go/.NET），Python SDK 实现 1.0 并提供 0.3 兼容模式、三种传输绑定 Client/Server 全覆盖",
     "chapter": "a2a-production",
     "verified": "2026-07-12",
     "source": "LF 一周年 press、github.com/a2aproject/a2a-python",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-10"
    },
    {
     "text": "官方配套工具：Inspector（联调）与 TCK（协议一致性测试）提供一致性证据，不替代安全与业务评测",
     "chapter": "a2a-handson",
     "verified": "2026-07-12",
     "source": "github.com/a2aproject/a2a-inspector、github.com/a2aproject/a2a-tck",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-10"
    },
    {
     "text": "云支持：Azure AI Foundry / Copilot Studio、AWS Bedrock AgentCore Runtime、Google Cloud（Vertex AI Agent Engine）",
     "chapter": "a2a-production",
     "verified": "2026-07-09",
     "source": "LF 一周年 press",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "三种传输绑定：JSON-RPC 2.0 / gRPC / HTTP+JSON-REST；流式走 SSE，长任务用推送通知回调",
     "chapter": "a2a-transport",
     "verified": "2026-07-09",
     "source": "a2a-protocol.org 规范页",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "AP2（Agent Payments Protocol）为 A2A 之上支付扩展，60+ 组织",
     "chapter": "a2a-production",
     "verified": "2026-07-09",
     "source": "LF 一周年 press",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "Task 状态机共九种状态（进行中 2 + 中断 2 + 终态 4 + 兜底 unspecified），终态不可回跳、重试建新 Task",
     "chapter": "a2a-protocol",
     "verified": "2026-07-12",
     "source": "a2a-protocol.org 规范 TaskState 枚举",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-10"
    }
   ],
   "edges": [
    {
     "from": "a2a-what-why",
     "to": "mcp#mcp-what-why",
     "why": "协议层两兄弟：MCP 接工具（纵向）/ A2A 接 Agent（横向），双向互引分工",
     "resolved": true
    },
    {
     "from": "a2a-orchestration",
     "to": "agent#agent-orchestration",
     "why": "多 Agent 协作 ↔ Agent 编排模式；A2A 是跨 Agent 协作的标准化通道",
     "resolved": true
    },
    {
     "from": "a2a-orchestration",
     "to": "agent#agent-tools-mcp",
     "why": "Agent 第 4 章已登记 A2A fact，本模块为其深入入口（Agent 侧应回指本模块）",
     "resolved": true
    },
    {
     "from": "a2a-security",
     "to": "mcp#mcp-security",
     "why": "安全共识对照：签名/最小权限/鉴权/opaque 边界",
     "resolved": true
    },
    {
     "from": "a2a-production",
     "to": "（候选）evaluation",
     "why": "多 Agent 协作的评估验收，留待后续补",
     "resolved": false
    }
   ],
   "web": "./a2a/index.html",
   "questions": [
    {
     "id": "q-a2a-1",
     "q": "A2A 和 MCP 到底啥区别，是不是二选一？",
     "added": "2026-07-09",
     "chapters": [
      "a2a-what-why"
     ]
    },
    {
     "id": "q-a2a-2",
     "q": "能不能只用一个 Agent，别搞这么复杂？",
     "added": "2026-07-09",
     "chapters": [
      "picker",
      "a2a-what-why"
     ]
    },
    {
     "id": "q-a2a-3",
     "q": "这是不是 Google 的私有协议，用了会被锁定吗？",
     "added": "2026-07-09",
     "chapters": [
      "a2a-production"
     ]
    },
    {
     "id": "q-a2a-4",
     "q": "接 A2A 要不要换我现在的 Agent 框架？",
     "added": "2026-07-09",
     "chapters": [
      "a2a-handson"
     ]
    },
    {
     "id": "q-a2a-5",
     "q": "Task 有状态，服务端要一直存着？会不会很重？",
     "added": "2026-07-09",
     "chapters": [
      "a2a-protocol"
     ]
    },
    {
     "id": "q-a2a-6",
     "q": "长任务客户端断了怎么办？",
     "added": "2026-07-12",
     "chapters": [
      "a2a-transport"
     ]
    },
    {
     "id": "q-a2a-7",
     "q": "怎么防止别人伪造一个 Agent 冒充我们？",
     "added": "2026-07-09",
     "chapters": [
      "a2a-security"
     ]
    },
    {
     "id": "q-a2a-8",
     "q": "跨多个 Agent，出错了怎么定位？",
     "added": "2026-07-09",
     "chapters": [
      "a2a-production"
     ]
    },
    {
     "id": "q-a2a-9",
     "q": "现在上是不是太早了？你说 150 家在用，真跑在生产上的有几家？",
     "added": "2026-07-23",
     "chapters": [
      "a2a-production",
      "a2a-handson"
     ]
    },
    {
     "id": "q-a2a-10",
     "q": "我们几个 Agent 都是自己开发的，还需要上标准协议吗？",
     "added": "2026-07-23",
     "chapters": [
      "a2a-orchestration",
      "picker"
     ]
    },
    {
     "id": "q-a2a-11",
     "q": "跨厂商协作，对方那个 Agent 给错了结果，算谁的？",
     "added": "2026-07-23",
     "chapters": [
      "a2a-orchestration",
      "a2a-protocol",
      "a2a-production"
     ]
    },
    {
     "id": "q-a2a-12",
     "q": "非得现在就定协议吗？万一它没成主流，这笔投入不打水漂了？",
     "added": "2026-07-23",
     "chapters": [
      "a2a-handson",
      "a2a-transport"
     ]
    }
   ]
  },
  {
   "id": "ai-gateway",
   "dir": "AI-Gateway",
   "layer": "工程保障层",
   "created": "2026-07-09",
   "updated": "2026-08-02",
   "chapters": [
    {
     "id": "gw-what-why",
     "no": "第 1 章",
     "title": "是什么·为什么(从 API 网关到 AI 网关)",
     "verified": "2026-07-09"
    },
    {
     "id": "gw-unify",
     "no": "第 2 章",
     "title": "统一接入与协议转换",
     "verified": "2026-07-09"
    },
    {
     "id": "gw-route",
     "no": "第 3 章",
     "title": "路由·负载·容灾",
     "verified": "2026-07-09"
    },
    {
     "id": "gw-cost",
     "no": "第 4 章",
     "title": "流量与成本治理",
     "verified": "2026-07-09"
    },
    {
     "id": "gw-guardrail",
     "no": "第 5 章",
     "title": "安全·合规·护栏(挂载点)",
     "verified": "2026-07-09"
    },
    {
     "id": "gw-observe",
     "no": "第 6 章",
     "title": "可观测",
     "verified": "2026-07-09"
    },
    {
     "id": "gw-mcp",
     "no": "第 7 章",
     "title": "AI 网关 + MCP 网关(展开章,含授权时序深潜)",
     "verified": "2026-07-10"
    },
    {
     "id": "gw-cheatsheet",
     "no": "第 8 章",
     "title": "选型与上云·售前速查",
     "verified": "2026-07-09"
    }
   ],
   "facts": [
    {
     "text": "Envoy AI Gateway v1.0 于 2026-06-23 发布(Tetrate+Bloomberg,基于 CNCF Envoy Gateway);token 限流 + OpenInference/OTel GenAI 观测,语义缓存与按美元成本治理在路线图",
     "chapter": "gw-cheatsheet",
     "verified": "2026-07-09",
     "source": "PRNewswire / Tetrate v1.0 博客 / aigateway.envoyproxy.io",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "Portkey 完整开源发布于 2026-03,主打护栏 + 语义缓存 + 提示词管理",
     "chapter": "gw-cheatsheet",
     "verified": "2026-07-09",
     "source": "techsy / openziti 2026 横评",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "**Portkey 归属已变**:Palo Alto Networks 于 2026-04-30 宣布收购、2026-05-29 完成交割,Portkey 作为 Prisma AIRS 的 AI 网关控制面(官方定位「监控、路由并保护每一笔 AI 交易」)。开源仓 Portkey-AI/gateway 截至 2026-08-01 仍是 MIT、未归档——收购未公布对开源版的处置,不能据此说开源停更",
     "chapter": "gw-cheatsheet",
     "verified": "2026-08-01",
     "source": "paloaltonetworks.com 新闻室两篇(2026-04-30 宣布 / 2026-05-29 完成);开源状态见 github.com/Portkey-AI/gateway;建议复查日 2026-11-30",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-30"
    },
    {
     "text": "LiteLLM 为最广泛采用的开源 LLM 网关(Python,100+ provider);虚拟密钥、按项目预算/花费追踪、复杂度自动路由(7 维打分)、实时护栏;**版本迭代极快,本表刻意不登记小版本号**——2026-08-01 当天仓库上同时挂着 v1.95.0-rc.3(08-01)与 v1.96.0-dev.2(07-31),按日发版,写死小版本号注定常年过期(原登记的 v1.81.x 即已落后十几个小版本);要报版本请当天查 releases",
     "chapter": "gw-unify",
     "verified": "2026-08-01",
     "source": "docs.litellm.ai / github.com/BerriAI/litellm releases;建议复查日＝不设,按需当天查",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-30"
    },
    {
     "text": "Azure API Management 是唯一原生内置\"按 token 限流 + LLM 专属策略\"的云厂商网关;Unified Model API(含 Bedrock 后端)、语义缓存(llm-semantic-cache + Managed Redis)",
     "chapter": "gw-cost",
     "verified": "2026-07-09",
     "source": "learn.microsoft.com genai-gateway-capabilities",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-08"
    },
    {
     "text": "Azure APIM 于 Build 2026 起提供 MCP 内容安全,把 MCP 纳入统一治理",
     "chapter": "gw-mcp",
     "verified": "2026-07-09",
     "source": "InfoQ 2026-06 / sjwiggers",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "Higress(阿里,AI-Native,Istio+Envoy+Wasm):多模型统一路由 + 协议转换(100+ 模型)、语义缓存、token 限流、提示注入检测、模型级 Fallback;托管 MCP Server、openapi-to-mcp、自建 MCP Marketplace",
     "chapter": "gw-guardrail",
     "verified": "2026-07-09",
     "source": "github.com/higress-group/higress / higress.ai",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "AI 网关正与 MCP 网关融合(统一代理 LLM API + MCP Server + Agent);Envoy 路线图含 MCP 授权、后端安全策略、OIDC token 交换",
     "chapter": "gw-mcp",
     "verified": "2026-07-09",
     "source": "Envoy release-notes / Apache APISIX",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "可观测正收敛到 OpenTelemetry GenAI 语义约定 / OpenInference",
     "chapter": "gw-observe",
     "verified": "2026-07-09",
     "source": "opentelemetry.io semconv/gen-ai / Envoy v1.0",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "云厂商格局:Cloudflare AI Gateway 主打花费上限与缓存;AWS 以 Bedrock 为主,无 APIM 式统一多模型 API;Google Apigee 有部分 AI 网关能力",
     "chapter": "gw-cheatsheet",
     "verified": "2026-07-09",
     "source": "zuplo / truefoundry 2026 横评",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-08"
    },
    {
     "text": "MCP 授权现行规范为 2026-07-28(授权模型自 2025-06-18 起以 OAuth 2.1 为底座):MCP Server=资源服务器,RFC 8707 audience 校验与 RFC 9728 资源元数据为 MUST,PKCE 强制,token 透传明令禁止;2026-07-28 新增签发方(iss)校验、注册声明 application_type、凭据绑签发方,并要求 Mcp-Method/Mcp-Name 请求头(网关不解 JSON 体即可路由)",
     "chapter": "gw-mcp",
     "verified": "2026-07-30",
     "source": "modelcontextprotocol.io/specification/2026-07-28/changelog / solo.io / kane.mx",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-28"
    },
    {
     "text": "网关身份传递主流做法:RFC 8693 Token 交换铸造 audience 限定窄凭证,act 委派链可验证\"用户→Agent→本次调用\";Azure APIM 策略同时支持 RFC 8693 与 Entra On-Behalf-Of,Red Hat/MuleSoft/Maverics 均已落地",
     "chapter": "gw-mcp",
     "verified": "2026-07-10",
     "source": "Red Hat Developer 2025-12 / Salesforce Architect / Uber Eng",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-08"
    },
    {
     "text": "Kong AI Gateway 高级插件（AI Proxy Advanced / Semantic Cache 等）标注 tier: ai_gateway_enterprise,需企业订阅;开源版仅基础 AI Proxy",
     "chapter": "gw-cheatsheet",
     "verified": "2026-07-12",
     "source": "developer.konghq.com/plugins/ai-proxy-advanced/",
     "recheck": "—",
     "grade": "A",
     "cadence": "30",
     "due": "2026-08-11"
    },
    {
     "text": "Apache APISIX 当前正式版 3.17.0(2026-06-15),支持 MCP 与 Agent 流量治理",
     "chapter": "gw-cheatsheet",
     "verified": "2026-07-12",
     "source": "apisix.apache.org/downloads/",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-10"
    },
    {
     "text": "AWS Multi-Provider Generative AI Gateway 为官方 Guidance(LiteLLM+ECS/EKS 自部署方案),非托管网关产品——AWS 侧仍无 APIM 式托管统一多模型网关",
     "chapter": "gw-cheatsheet",
     "verified": "2026-07-12",
     "source": "docs.aws.amazon.com/solutions/multi-provider-generative-ai-gateway-on-aws/",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-11"
    },
    {
     "text": "Envoy AI Gateway 核心 CRD 已 v1beta1,QuotaPolicy 仍 v1alpha1(不能与核心一并描述为稳定)",
     "chapter": "gw-cheatsheet",
     "verified": "2026-07-12",
     "source": "aigateway.envoyproxy.io/docs/api/",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-10"
    }
   ],
   "edges": [
    {
     "from": "gw-guardrail",
     "to": "security#sec-defense",
     "why": "网关是护栏/审计/内容安全的统一落地位;Security 出\"要防什么\",网关做\"能集中执行的那部分\"",
     "resolved": true
    },
    {
     "from": "gw-guardrail",
     "to": "security#sec-agentic",
     "why": "虚拟密钥落地\"最小权限/爆炸半径\";数据驻留/脱敏在路由与护栏里强制",
     "resolved": true
    },
    {
     "from": "gw-mcp",
     "to": "mcp#(全模块)",
     "why": "把 MCP 流量统一代理、发现、鉴权、限流、审计的运营层(MCP 讲协议,网关讲治理)",
     "resolved": true
    },
    {
     "from": "gw-mcp",
     "to": "a2a#(全模块)",
     "why": "Agent↔Agent 流量经网关做统一身份传递与可观测",
     "resolved": true
    },
    {
     "from": "gw-mcp",
     "to": "agent#(全模块)",
     "why": "给 Agent 的多模型/多工具调用提供统一入口与护栏",
     "resolved": true
    },
    {
     "from": "gw-route",
     "to": "evaluation#eval-scenarios",
     "why": "路由降级后的质量靠 Evaluation 持续打分验收",
     "resolved": true
    },
    {
     "from": "gw-observe",
     "to": "evaluation#(全模块)",
     "why": "可观测的\"质量维度\"接 Evaluation(快不快贵不贵 vs 好不好)",
     "resolved": true
    },
    {
     "from": "gw-cost",
     "to": "llm-inference#(全模块)",
     "why": "网关在推理服务之上:单模型加速(Inference) vs 多模型统一治理(网关),互补分工",
     "resolved": true
    },
    {
     "from": "gw-route / gw-cost",
     "to": "model-landscape#ml-selection",
     "why": "\"选哪些模型进路由池\"的格局与方法在 Model-Landscape(三层路由/五约束决策树),网关是其工程落地件——双向互指(2026-07-10)",
     "resolved": true
    },
    {
     "from": "gw-observe",
     "to": "ai-ops#ops-tracing",
     "why": "网关是数据源与统一采集层,AI-Ops 是消费与行动层(在线评估/漂移/告警);trace id 两层贯通——双向互指(2026-07-10)",
     "resolved": true
    }
   ],
   "web": "./ai-gateway/index.html",
   "questions": [
    {
     "id": "q-ai-gateway-1",
     "q": "我已经有 API 网关了，为什么还要 AI 网关？",
     "added": "2026-07-09",
     "chapters": [
      "gw-what-why"
     ]
    },
    {
     "id": "q-ai-gateway-2",
     "q": "上网关到底能省多少钱？",
     "added": "2026-07-09",
     "chapters": [
      "saver",
      "gw-route",
      "gw-cost"
     ]
    },
    {
     "id": "q-ai-gateway-3",
     "q": "自动路由到便宜模型，质量掉了怎么办？",
     "added": "2026-07-09",
     "chapters": [
      "gw-route"
     ]
    },
    {
     "id": "q-ai-gateway-4",
     "q": "语义缓存会不会给不同用户串答、泄露数据？",
     "added": "2026-07-09",
     "chapters": [
      "gw-cost"
     ]
    },
    {
     "id": "q-ai-gateway-5",
     "q": "护栏能 100% 挡住提示注入吗？",
     "added": "2026-07-09",
     "chapters": [
      "gw-guardrail"
     ]
    },
    {
     "id": "q-ai-gateway-6",
     "q": "合规审计具体能提供什么证据？",
     "added": "2026-07-09",
     "chapters": [
      "gw-guardrail",
      "gw-observe"
     ]
    },
    {
     "id": "q-ai-gateway-7",
     "q": "我们有几百个内部 API，要让 Agent 用，是不是要一个个改造？",
     "added": "2026-07-10",
     "chapters": [
      "gw-mcp"
     ]
    },
    {
     "id": "q-ai-gateway-8",
     "q": "Agent 替用户调工具，权限会不会被放大、被滥用？",
     "added": "2026-07-10",
     "chapters": [
      "gw-mcp",
      "src-mcp-auth"
     ]
    },
    {
     "id": "q-ai-gateway-9",
     "q": "我们该自建还是买托管？",
     "added": "2026-07-12",
     "chapters": [
      "gw-cheatsheet"
     ]
    },
    {
     "id": "q-ai-gateway-10",
     "q": "一句话，AI 网关到底给我带来什么？",
     "added": "2026-07-09",
     "chapters": [
      "gw-what-why",
      "gw-mcp"
     ]
    },
    {
     "id": "q-ai-gateway-11",
     "q": "网关是所有流量的必经之路，它自己挂了，全公司的 AI 不就一起停？",
     "added": "2026-07-23",
     "chapters": [
      "gw-route",
      "gw-unify",
      "gw-cheatsheet"
     ]
    },
    {
     "id": "q-ai-gateway-12",
     "q": "网关上线，怎么算「上得好」？验收看什么？",
     "added": "2026-07-23",
     "chapters": [
      "gw-cheatsheet",
      "gw-observe"
     ]
    },
    {
     "id": "q-ai-gateway-13",
     "q": "把所有 AI 流量都收到这一层，以后想换掉网关是不是特别难？",
     "added": "2026-07-23",
     "chapters": [
      "gw-unify",
      "gw-cheatsheet",
      "gw-observe"
     ]
    }
   ]
  },
  {
   "id": "ai-governance",
   "dir": "AI-Governance",
   "layer": "工程保障层",
   "created": "2026-08-02",
   "updated": "2026-08-02",
   "chapters": [
    {
     "id": "gov-what-why",
     "no": "第 1 章",
     "title": "治理是一套决定系统，不是一份文档",
     "verified": "2026-08-02"
    },
    {
     "id": "gov-registry",
     "no": "第 2 章",
     "title": "按用途登记，不按模型登记",
     "verified": "2026-08-02"
    },
    {
     "id": "gov-risk-tiering",
     "no": "第 3 章",
     "title": "组织风险分层与法律分类是两把尺子",
     "verified": "2026-08-02"
    },
    {
     "id": "gov-impact",
     "no": "第 4 章",
     "title": "影响评估在架构冻结前做",
     "verified": "2026-08-02"
    },
    {
     "id": "gov-decision",
     "no": "第 5 章",
     "title": "五种决定：批准、条件批准、例外、暂停、退役",
     "verified": "2026-08-02"
    },
    {
     "id": "gov-evidence",
     "no": "第 6 章",
     "title": "证据包怎么组装",
     "verified": "2026-08-02"
    },
    {
     "id": "gov-change-triggers",
     "no": "第 7 章",
     "title": "什么变化让原来的批准失效",
     "verified": "2026-08-02"
    },
    {
     "id": "gov-frameworks",
     "no": "第 8 章",
     "title": "各框架分别能证明什么、不能证明什么",
     "verified": "2026-08-02"
    },
    {
     "id": "gov-china-interface",
     "no": "第 9 章",
     "title": "用途登记与中国备案要求怎么对接",
     "verified": "2026-08-02"
    },
    {
     "id": "gov-operating",
     "no": "第 10 章",
     "title": "跑起来需要的角色、节奏与工具",
     "verified": "2026-08-02"
    },
    {
     "id": "gov-cheatsheet",
     "no": "第 11 章",
     "title": "售前速查",
     "verified": "2026-08-02"
    }
   ],
   "facts": [
    {
     "text": "欧盟《人工智能法》分类规则：附件三所列系统推定为高风险（第 6 条第 2 款）；第 6 条第 3 款给四个出口——窄程序任务、改进已完成的人工结果、只检测与既往决策的偏差且不替代人的判断、为后续评估做准备性工作；但对自然人做画像的一律仍为高风险；用了出口的提供方须在上市前记录判定依据，并按第 49 条第 2 款在欧盟数据库登记。与企业最相关的附件三类别：第 4 类就业（招聘或遴选，特别是定向投放职位广告、分析筛选求职申请、评估候选人；以及晋升终止、任务分配、绩效与行为监测），第 5 类(b)信用评估与信用评分（欺诈检测除外）、(c)人寿与健康保险的风险评估与定价",
     "chapter": "gov-risk-tiering",
     "verified": "2026-08-02",
     "source": "欧盟《人工智能法》(Regulation (EU) 2024/1689) 第 6 条、附件三，2026-08-02 读自 https://artificialintelligenceact.eu/article/6/ 与 https://artificialintelligenceact.eu/annex/3/（该站转录 2024 年原始刊登文本，页面未标注修正版次）",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "欧盟《人工智能法》的三份清单：附件三共 8 个高风险领域——①生物识别 ②关键基础设施 ③教育与职业培训（入学与录取、学习成果评估、教育层级判定、考试作弊监测）④就业与劳动者管理 ⑤基本公私服务与福利的可及性（含 (b) 信用评估与信用评分、(c) 人寿与健康保险的风险评估与定价）⑥执法 ⑦移民庇护与边控 ⑧司法与民主程序；第 5 条第 1 款禁止清单 (a)–(h) 含社会评分（(c)）与职场及教育机构的情绪推断（(f)，医疗或安全用途除外）；第 50 条透明度义务：第 1 款直接与自然人交互的系统要告知，第 2 款合成音频图像视频文本要做机器可读标记，第 3 款情绪识别与生物特征分类要告知被作用的人，第 4 款深度伪造与公共议题的 AI 生成文本要披露",
     "chapter": "gov-risk-tiering",
     "verified": "2026-08-02",
     "source": "欧盟《人工智能法》(Regulation (EU) 2024/1689) 附件三、第 5 条、第 50 条，2026-08-02 读自 https://artificialintelligenceact.eu/annex/3/、/article/5/、/article/50/（该站转录 2024 年原始刊登文本，页面未标注修正版次）",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "欧盟《人工智能法》角色与登记义务：第 25 条第 1 款——贴上自己的名称或商标、做出重大修改、或改变预期用途使系统变成高风险，这三种情形下分销商、进口商、部署方或第三方即被视为该高风险系统的提供方；第 49 条——提供方在投放市场前须登记自身与系统，自行判定为不高风险的（第 6 条第 3 款）同样要登记，公共机构类部署方还须登记其使用；第 26 条第 7 款——雇主在职场投用高风险系统前须告知工会代表与受影响员工",
     "chapter": "gov-registry",
     "verified": "2026-08-02",
     "source": "欧盟《人工智能法》(Regulation (EU) 2024/1689) 第 25、26、49 条，2026-08-02 读自 https://artificialintelligenceact.eu/article/25/、/article/26/、/article/49/（该站转录 2024 年原始刊登文本，页面未标注修正版次）",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "欧盟《人工智能法》第 26 条第 6 款：高风险 AI 系统的部署方保存系统自动生成日志的期限，须与该系统的预期用途相称，且至少 6 个月",
     "chapter": "gov-what-why",
     "verified": "2026-08-02",
     "source": "欧盟《人工智能法》(Regulation (EU) 2024/1689) 第 26 条，2026-08-02 读自 https://artificialintelligenceact.eu/article/26/（该站转录 2024 年原始刊登文本，页面未标注修正版次）",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "欧盟《人工智能法》第 27 条基本权利影响评估（FRIA）：适用主体是受公法管辖的机构、提供公共服务的私营主体，以及附件三第 5 类(b)(c)（信用评分、人寿与健康保险风险评估定价）的部署方；内容须含 (a) 使用该系统的流程描述、(b) 使用时段与频率、(c) 可能受影响的自然人与群体类别、(d) 具体伤害风险、(e) 人工监督措施如何落实、(f) 风险发生时的措施含内部治理安排与投诉机制；第 3 款要求把评估连同模板通知市场监管机构（第 46 条第 1 款情形除外）；第 4 款明确若相关义务已通过 GDPR 第 35 条的数据保护影响评估完成，FRIA 是对其的补充而非替代",
     "chapter": "gov-impact",
     "verified": "2026-08-02",
     "source": "欧盟《人工智能法》(Regulation (EU) 2024/1689) 第 27 条，2026-08-02 读自 https://artificialintelligenceact.eu/article/27/（该站转录 2024 年原始刊登文本，页面未标注修正版次）",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "ISO/IEC 42005:2025《信息技术—人工智能—AI 系统影响评估》为第 1 版，2025-05-28 发布（ISO/IEC JTC 1/SC 42 归口），给出组织如何为受 AI 系统及其可预见应用影响的个人与社会做影响评估的指南，涵盖何时做、在生命周期哪些阶段做以及评估文档要求，并说明如何并入既有 AI 风险管理与管理体系；它是 ISO/IEC 42001 的配套指南",
     "chapter": "gov-impact",
     "verified": "2026-08-02",
     "source": "IEC Webstore，ISO/IEC 42005:2025 出版物页 https://webstore.iec.ch/en/publication/107659",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-29"
    },
    {
     "text": "美国 OMB M-25-21 备忘录（2025-04-03 发布，取代 M-24-10）要求各机构维护并每年公开更新「AI 用途清单」（AI Use Case Inventory），登记与报送单位是「用途（use case）」而非模型；国防部与情报体系另有安排",
     "chapter": "gov-registry",
     "verified": "2026-08-02",
     "source": "美国管理和预算办公室 OMB Memorandum M-25-21《Accelerating Federal Use of AI through Innovation, Governance, and Public Trust》原文 PDF（whitehouse.gov）第 3(b)(v) 节与附表",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "OMB M-25-21 对「高影响 AI（high-impact AI）」的判据是：其输出成为对权利或安全具有法律、实质、约束或重大影响的决定或行动的「主要依据（principal basis）」；有没有人工监督不改变这一判定。备忘录第 6 节另列 15 类推定为高影响的用途（含关键基础设施安全功能、医疗诊断与治疗、执法风险评估、公共场所一对多生物识别、联邦福利与贷款审批、以及联邦雇佣条件的确定含录用前筛查、薪酬晋升、绩效管理、招聘解雇）；机构若认定某个落在推定清单内的用途实际不属高影响，须书面报首席 AI 官（CAIO）备案",
     "chapter": "gov-risk-tiering",
     "verified": "2026-08-02",
     "source": "美国管理和预算办公室 OMB Memorandum M-25-21 原文 PDF（whitehouse.gov）第 4(a) 节与第 6 节",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "OMB M-25-21 对高影响 AI 规定七条最低风险管理实践：上线前测试、完成 AI 影响评估、持续监测性能与不利影响、确保操作人员培训与考核、额外的人工监督与问责（含 fail-safe）、提供一致的救济或申诉渠道、征询并吸收终端用户与公众反馈。其中影响评估须在部署前完成、并在生命周期内定期更新，文档至少含预期目的与收益指标、数据与模型能力的适配性、对隐私与公民权利的潜在影响、重评时间表与触发条件、成本分析、由未参与开发的独立复核人出具意见（意见须原样留档并交给风险接受人）、以及风险接受人签名",
     "chapter": "gov-impact",
     "verified": "2026-08-02",
     "source": "美国管理和预算办公室 OMB Memorandum M-25-21 原文 PDF（whitehouse.gov）第 4(a)(i)–(iv)、4(b)(i)–(vii) 节",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "OMB M-25-21 的停用与豁免机制：某个高影响 AI 用途若无法满足七条最低风险管理实践，机构必须安全停用该 AI 功能；首席 AI 官（CAIO，Chief AI Officer）可基于书面的系统与情境风险评估豁免个别要求，豁免须每年重新确认有效性、可随时撤销、并在批准或撤销后 30 天内报 OMB，该职责不得下放",
     "chapter": "gov-what-why",
     "verified": "2026-08-02",
     "source": "美国管理和预算办公室 OMB Memorandum M-25-21 原文 PDF（whitehouse.gov）第 4(a) 节豁免与停用条款",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "NIST AI RMF 1.0 的 GOVERN 1.6 类目原文为「Mechanisms are in place to inventory AI systems and are resourced according to organizational risk priorities」；配套 Playbook 建议：以政策定义清单的建立与维护流程、指定专人或专队负责、范围优先覆盖全部模型或至少高风险与高风险场景中的系统、清单属性含文档、源码链接、事故响应计划、数据字典与相关责任人联系方式",
     "chapter": "gov-registry",
     "verified": "2026-08-02",
     "source": "NIST AI RMF Playbook（GOVERN 部分），美国国家标准与技术研究院 AI 资源中心 https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook/Govern",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "美国科罗拉多州 SB26-189《Automated Decision-Making Technology》2026-05-01 提出、05-07 参议院通过、05-09 众议院通过、2026-05-14 州长签署成法，生效日 2027-01-01，取代 2024 年的 SB24-205（原定 2026-06-30 生效）。新法把原来针对「高风险 AI 系统」的框架换成针对「自动化决策技术（ADMT）」在「重大决定」中的使用，要求开发方向部署方提供技术文档（预期用途、训练数据类别、已知局限、使用与人工复核说明）、部署方在交互点告知并在不利决定后 30 天内给出通俗解释，消费者有权访问与更正个人数据、有权要求有实质意义的人工复核；原法中部署方的风险管理程序与影响评估义务、以及部分向州总检察长报告的义务被删除。由州总检察长按州消费者保护法作为欺骗性商业行为执法，至 2030 年前执法须提前 60 天告知",
     "chapter": "gov-risk-tiering",
     "verified": "2026-08-02",
     "source": "科罗拉多州议会法案页 https://leg.colorado.gov/bills/sb26-189 ；变更要点另经 Hunton 隐私与网络安全法律博客交叉核对",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "纽约市第 144 号地方法（Local Law 144，自动化雇佣决策工具 AEDT）要求：使用前一年内须由独立审计方完成偏见审计、审计结果摘要须公开发布；在职位公告或使用前至少提前 10 个工作日告知候选人与员工，并说明所评估的资质与特征；违规每次最高 500 美元且按日累计。2026 年纽约市审计长的一份审计报告指出主管部门 DCWP 在投诉受理、合规检查与专业力量使用上执行不力",
     "chapter": "gov-risk-tiering",
     "verified": "2026-08-02",
     "source": "纽约市 Local Law 144-21 实务解读（Deloitte、DCI Consulting）与 DLA Piper 对 2026 年市审计长报告的报道",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "三云的 AI 资产发现能力现状：Google Cloud Security Command Center 的 AI Protection 可在 Assets 页 AI resources 标签盘点模型、数据源、端点、Agent 与 MCP 服务器（需 Premium 或 Enterprise 层级；MCP 服务器发现另需各项目启用 App Hub API），官方文档明确写明「影子 AI 资源在 Google Cloud 控制台的 Security Command Center 中不受支持」；Microsoft 侧覆盖第三方 AI 站点的 Purview DSPM for AI 需要启用按量计费，且多数能力依赖 Purview 浏览器扩展与设备接入，影子 AI 发现通常要与 Defender for Cloud Apps 的云发现组合使用",
     "chapter": "gov-registry",
     "verified": "2026-08-02",
     "source": "Google Cloud 官方文档 https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview ；Microsoft Learn 官方文档 https://learn.microsoft.com/en-us/purview/ai-other-apps",
     "recheck": "—",
     "grade": "A",
     "cadence": "30",
     "due": "2026-09-01"
    },
    {
     "text": "AWS Audit Manager 的「AWS Generative AI Best Practices Framework v2」（2024-06-11 升级到 v2）含 72 项自动控制 + 38 项手动控制、共 8 个控制集，按 responsible / safe / fair / sustainable / privacy / resilience / accuracy / secure 八项原则组织，覆盖 Amazon Bedrock 与 Amazon SageMaker AI；官方文档同时声明这些控制不用于验证系统是否合规、也不保证通过审计。该文档页顶已公告 AWS Audit Manager 不再向新客户开放，现有客户可继续使用",
     "chapter": "gov-registry",
     "verified": "2026-08-02",
     "source": "AWS 官方文档 https://docs.aws.amazon.com/audit-manager/latest/userguide/aws-generative-ai-best-practices.html",
     "recheck": "—",
     "grade": "A",
     "cadence": "30",
     "due": "2026-09-01"
    },
    {
     "text": "NIST AI 风险管理框架 MANAGE 2.4 要求：事先建好机制并指定责任人，用于替换、脱离或停用表现与预期用途不符的 AI 系统",
     "chapter": "gov-decision",
     "verified": "2026-08-02",
     "source": "NIST AI RMF Playbook（MANAGE 函数），airc.nist.gov/airmf-resources/playbook/manage/",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-29"
    },
    {
     "text": "欧盟人工智能法案第 26(5) 条：高风险系统的部署方发现使用可能带来风险时，须立即通知提供方、分销方与市场监管机构，并暂停使用",
     "chapter": "gov-decision",
     "verified": "2026-08-02",
     "source": "EUR-Lex 官方文本 Regulation (EU) 2024/1689 第 26(5) 条，eur-lex.europa.eu/eli/reg/2024/1689/oj；条文导航副本 artificialintelligenceact.eu/article/26/",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "纽约市 Local Law 144 实施细则 §5-303(c)：偏见审计摘要与分发日期，须在该工具最后一次用于雇佣决定之后继续公示至少 6 个月；审计须在使用前一年内完成，§5-304 要求提前 10 个工作日通知候选人",
     "chapter": "gov-decision",
     "verified": "2026-08-02",
     "source": "NYC DCWP 最终规则原文 PDF，rules.cityofnewyork.us/wp-content/uploads/2023/04/DCWP-NOA-for-Use-of-Automated-Employment-Decisionmaking-Tools-2.pdf",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "美联储 SR 11-7（2011）与 SR 21-8 已被 2026-04-17 发布的 SR 26-2 取代；SR 26-2 脚注明确「生成式 AI 与 agentic AI 模型不在本指引范围内」，其原则适用于传统统计模型与非生成式、非 agentic 的 AI 模型；重要性由模型用途与暴露共同决定；指引称最相关于总资产超 300 亿美元的受监管银行机构",
     "chapter": "gov-decision",
     "verified": "2026-08-02",
     "source": "美联储 SR 26-2 letter 页与 PDF 全文，federalreserve.gov/supervisionreg/srletters/SR2602.htm",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "欧盟人工智能法案第 18 条：高风险系统的技术文档、质量管理体系文件、变更批准记录与欧盟符合性声明等，须自投放市场或投入使用起保存 10 年，并能应主管机关要求提供",
     "chapter": "gov-evidence",
     "verified": "2026-08-02",
     "source": "EUR-Lex 官方文本 Regulation (EU) 2024/1689 第 18 条，eur-lex.europa.eu/eli/reg/2024/1689/oj；条文导航副本 artificialintelligenceact.eu/article/18/",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "欧盟人工智能法案第 19 条（提供方）与第 26(6) 条（部署方）：在自己控制范围内的自动生成日志，须按与预期用途相称的期限保存，至少 6 个月，除非欧盟或成员国法另有规定",
     "chapter": "gov-evidence",
     "verified": "2026-08-02",
     "source": "EUR-Lex 官方文本 Regulation (EU) 2024/1689 第 19 条与第 26(6) 条，eur-lex.europa.eu/eli/reg/2024/1689/oj；条文导航副本 artificialintelligenceact.eu/article/19/",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "Google Cloud Logging：_Required 日志桶固定保存 400 天且不可配置，_Default 日志桶默认保存 30 天，_Default 与自定义桶可配置为 1 至 3650 天",
     "chapter": "gov-evidence",
     "verified": "2026-08-02",
     "source": "Google Cloud 官方文档 docs.cloud.google.com/logging/quotas",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "Amazon Bedrock 的模型调用日志默认关闭，需手动开启并指定 CloudWatch Logs 或 S3 目的地；Google Cloud 的数据访问审计日志默认关闭（BigQuery 除外），管理活动审计日志则始终开启且不可关闭",
     "chapter": "gov-evidence",
     "verified": "2026-08-02",
     "source": "docs.aws.amazon.com/bedrock/latest/userguide/model-invocation-logging.html；docs.cloud.google.com/logging/docs/audit",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "AWS Audit Manager 已转入维护模式：自 2026-04-30 起不再支持在新账号中启用；其 Generative AI Best Practices Framework v2 含 72 项自动控制与 38 项手动控制、8 个控制组，文档明确写明该框架不用于验证系统是否合规、也不保证通过审计；停用服务后已收集的证据保留 2 年",
     "chapter": "gov-evidence",
     "verified": "2026-08-02",
     "source": "AWS 官方文档 docs.aws.amazon.com/audit-manager/latest/userguide/audit-manager-availability-change.html 与 /aws-generative-ai-best-practices.html",
     "recheck": "—",
     "grade": "A",
     "cadence": "30",
     "due": "2026-09-01"
    },
    {
     "text": "欧盟人工智能法案第 3(23) 条定义「实质性修改」：投放市场或投入使用后发生、初次符合性评估未预见或未计划、并因此影响第三章第二节要求的合规性或改变已评估的预期用途；第 43(4) 条另规定，提供方在初次符合性评估时已预先确定并写入技术文档的变化，不构成实质性修改",
     "chapter": "gov-change-triggers",
     "verified": "2026-08-02",
     "source": "EUR-Lex 官方文本 Regulation (EU) 2024/1689 第 3(23) 条与第 43(4) 条，eur-lex.europa.eu/eli/reg/2024/1689/oj；条文导航副本 artificialintelligenceact.eu/article/3/",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "欧盟人工智能法案第 25(1) 条：分销方、进口方、部署方或第三方在三种情形下被视为高风险系统的提供方——(a) 在已上市系统上贴自己的名称或商标；(b) 对已上市系统作实质性修改且其仍为高风险；(c) 改变系统的预期用途使其成为高风险。第 25(2) 条规定原提供方此时不再被视为该系统的提供方，但须配合并提供必要信息与技术接入",
     "chapter": "gov-change-triggers",
     "verified": "2026-08-02",
     "source": "EUR-Lex 官方文本 Regulation (EU) 2024/1689 第 25 条，eur-lex.europa.eu/eli/reg/2024/1689/oj；条文导航副本 artificialintelligenceact.eu/article/25/",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "美联储 SR 26-2 原文：把模型用于其预期用途之外会带来额外的不确定性与风险；将模型使用扩展到原应用之外时，稳妥做法是对新用法及其局限补做分析，并复核现有控制",
     "chapter": "gov-change-triggers",
     "verified": "2026-08-02",
     "source": "美联储 SR 26-2 全文 PDF（Model Use 一节），federalreserve.gov/supervisionreg/srletters/SR2602.pdf",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-29"
    },
    {
     "text": "科罗拉多 AI 法（SB 24-205）延期后于 2026-06-30 生效，但在 X.AI 于 2026-04 提起诉讼后，州总检察长同意在其初步禁令动议及法律修订解决前暂缓执法；替代法 SB 26-189 已于 2026-05-14 签署，自 2027-01-01 起取代原法，框架从算法歧视与注意义务转为披露与权利型",
     "chapter": "gov-change-triggers",
     "verified": "2026-08-02",
     "source": "Skadden 法律分析《Colorado Repeals and Replaces Its AI Act》(2026-06)；Norton Rose Fulbright 同题分析",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "ISO/IEC 42005:2025《AI 系统影响评估》2025-05-28 发布，属指导文件（guidance），不用于认证、不需要外部审核",
     "chapter": "gov-frameworks",
     "verified": "2026-08-02",
     "source": "IEC Webstore 官方条目 ISO/IEC 42005:2025 https://webstore.iec.ch/en/publication/107659",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "ISO/IEC 42006:2025 2025-07-07 发布，规定审核与认证 AI 管理体系的机构（认证机构）应满足的要求，基于 ISO/IEC 17021-1，含审核员能力与审核工时",
     "chapter": "gov-frameworks",
     "verified": "2026-08-02",
     "source": "IEC Webstore 官方条目 ISO/IEC 42006:2025 https://webstore.iec.ch/en/publication/108460",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "欧盟人工智能法案留存期：提供者的技术文档等文件保存至投放市场或投入使用后 10 年（第 18 条）；自动生成日志按用途适当期限保存、至少 6 个月（第 19 条，部署者同为至少 6 个月，第 26 条）",
     "chapter": "gov-frameworks",
     "verified": "2026-08-02",
     "source": "欧盟人工智能法案第 18、19、26 条全文页 https://artificialintelligenceact.eu/article/18/",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "第 27 条 FRIA 适用主体：部署高风险系统的公法机构、提供公共服务的私营主体，以及附件三 5(b) 信贷评估与 5(c) 人寿健康保险定价的全部部署者；附件三第 2 点除外",
     "chapter": "gov-frameworks",
     "verified": "2026-08-02",
     "source": "欧盟人工智能法案第 27 条全文页 https://artificialintelligenceact.eu/article/27/",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "第 25 条：贴上自己名称或商标、对已上市高风险系统做实质性修改、或把非高风险系统的预期用途改成高风险，部署者或第三方即被视为提供者",
     "chapter": "gov-frameworks",
     "verified": "2026-08-02",
     "source": "欧盟人工智能法案第 25 条全文页 https://artificialintelligenceact.eu/article/25/",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "附件三第 4 点(a)把「招聘或选拔，特别是定向投放招聘广告、分析筛选求职申请、评估候选人」并列点名为高风险",
     "chapter": "gov-frameworks",
     "verified": "2026-08-02",
     "source": "欧盟人工智能法案附件三全文页 https://artificialintelligenceact.eu/annex/3/",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "SR 11-7（2011）与 SR 21-8（2021）已于 2026-04-17 被 SR 26-2《Revised Guidance on Model Risk Management》与 OCC Bulletin 2026-13 取代",
     "chapter": "gov-frameworks",
     "verified": "2026-08-02",
     "source": "美联储 SR 26-2 官方页 https://www.federalreserve.gov/supervisionreg/srletters/sr2602.htm",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "SR 26-2 修订版把生成式 AI 与代理式 AI 以「新颖且快速演进」为由排除在适用范围外，三家机构另计划就银行使用 AI 发布问询（RFI）",
     "chapter": "gov-frameworks",
     "verified": "2026-08-02",
     "source": "Sullivan & Cromwell 2026-04 客户备忘录（转述 SR 26-2／OCC 2026-13 原文）https://www.sullcrom.com/insights/memo/2026/April/OCC-Fed-FDIC-Issue-Revised-Guidance-Model-Risk-Management",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "纽约市 Local Law 144：使用自动化雇佣决策工具须做年度独立偏见审计并公开摘要，使用前至少提前 10 个工作日告知候选人，由 DCWP 执法",
     "chapter": "gov-frameworks",
     "verified": "2026-08-02",
     "source": "纽约市 DCWP 规则与多家实务解读一致口径（warden-ai、verifywise 等 2026 版汇总）",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "《互联网信息服务算法推荐管理规定》第 24、25 条：提供服务之日起 10 个工作日内填报备案；备案信息变更之日起 10 个工作日内办变更；终止服务之日起 20 个工作日内办注销；主管部门收到完整材料后 30 个工作日内予以备案并发放编号",
     "chapter": "gov-china-interface",
     "verified": "2026-08-02",
     "source": "中央网信办官网原文 https://www.cac.gov.cn/2022-01/04/c_1642894606364259.htm",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "《生成式人工智能服务管理暂行办法》第 2 条：未向境内公众提供服务的研发应用不适用本办法；第 17 条：有舆论属性或社会动员能力的服务须开展安全评估并履行算法备案及变更、注销手续",
     "chapter": "gov-china-interface",
     "verified": "2026-08-02",
     "source": "中央网信办官网原文 https://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "《人工智能安全治理框架》2.0 于 2025-09-15 国家网络安全宣传周发布，为全国网安标委技术文件，非强制性法规",
     "chapter": "gov-china-interface",
     "verified": "2026-08-02",
     "source": "中央网信办官网发布稿 https://www.cac.gov.cn/2025-09/15/c_1759653448369123.htm",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "AWS Audit Manager 转入维护模式：2026-04-30 起新账号无法启用，存量账号可继续使用；停用后证据保留两年；官方指向 AWS Config Conformance Packs 作为替代，但 SOC2、GDPR 无对应模板",
     "chapter": "gov-operating",
     "verified": "2026-08-02",
     "source": "AWS 官方文档「AWS Audit Manager availability change」https://docs.aws.amazon.com/audit-manager/latest/userguide/audit-manager-availability-change.html",
     "recheck": "—",
     "grade": "A",
     "cadence": "30",
     "due": "2026-09-01"
    },
    {
     "text": "治理与证据类云服务名：Microsoft Purview DSPM for AI 与 Microsoft Foundry（原 Azure AI Foundry，2025-11-18 Ignite 更名）／Google Cloud Dataplex 已同步 Vertex AI 模型与数据集／Vertex AI Model Registry／SageMaker Model Registry 与 Model Cards／ServiceNow AI Control Tower（2026-06 起把 MCP 服务器纳入受管资产）",
     "chapter": "gov-operating",
     "verified": "2026-08-02",
     "source": "各厂商官方文档与发布说明（Microsoft Learn、Google Cloud Blog、ServiceNow Community 2026-06 release notes）",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-09-01"
    },
    {
     "text": "欧盟人工智能法案第 4 条 AI 素养义务自 2025-02-02 适用，由成员国市场监管机构自 2026-08-02 起监督执行；欧委会明确未规定「足够」的具体水平，也不要求任何证书",
     "chapter": "gov-operating",
     "verified": "2026-08-02",
     "source": "欧盟委员会官方 Q&A「AI literacy – questions & answers」https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    }
   ],
   "edges": [
    {
     "from": "gov-frameworks",
     "to": "security#sec-governance",
     "why": "Security 第 7 章把 NIST／ISO／欧盟法案摆在威胁防护的收尾位置，给的是方位与时间线；本章接着讲每张纸能证明什么、不能证明什么，以及义务落到提供者还是部署者。时间线数字只在 Security 登记一次，本册引用不复制（双向互指）",
     "resolved": true
    },
    {
     "from": "gov-china-interface",
     "to": "security#sec-china",
     "why": "备案、登记、标识、国标、数据出境的条目与时点全在 Security 第 8 章；本章只讲分诊结论怎么变成用途登记表的字段、备案材料从证据包取哪几件、周期怎么倒排评审启动时间",
     "resolved": true
    },
    {
     "from": "gov-registry",
     "to": "security#sec-supply-chain",
     "why": "AI-BOM 记「系统里有哪些模型与组件」，用途登记记「有哪些 AI 用途、谁批的」，一条用途对应多条 AI-BOM 项，两张表用同一个用途 ID 串；准入门禁的技术检查项归 Security，本册管这道门是谁的门、不过怎么办",
     "resolved": true
    },
    {
     "from": "gov-evidence",
     "to": "evaluation#eval-build",
     "why": "证据包里「测过什么、结果多少」由 Evaluation 产出；本册只规定哪一档用途必须附哪几类测量证据、证据绑到哪个版本、失效期多长，不重讲任何指标定义",
     "resolved": true
    },
    {
     "from": "gov-evidence",
     "to": "security#sec-defense",
     "why": "红队报告是高风险用途证据包的必备件；怎么打、打什么在 Security 第 6 章，本册管这件证据在不在包里、有没有过期、结论有没有转成上线条件",
     "resolved": true
    },
    {
     "from": "gov-change-triggers",
     "to": "ai-ops#ops-drift",
     "why": "供应商静默换 checkpoint 与三类漂移由 AI-Ops 监测；本册把这些告警接成「重新决定」的触发口，规定哪类漂移触发重审哪一步",
     "resolved": true
    },
    {
     "from": "gov-decision",
     "to": "ai-ops#ops-incident",
     "why": "暂停一个用途的技术动作（急停、回滚指针）在 AI-Ops 第 6 章；本册管谁有权按下、按下之后走什么复核路径、多久必须给出结论",
     "resolved": true
    },
    {
     "from": "gov-impact",
     "to": "data-engineering#de-governance",
     "why": "影响评估产出的数据约束（哪些特征不许进、必须留哪种记录、最小化到什么程度）由数据侧执行；执行点、权限与越权测试在 DE 第 7 章，本册只出约束与验收点",
     "resolved": true
    },
    {
     "from": "gov-risk-tiering",
     "to": "agent#agent-eval-guardrails",
     "why": "自主度是组织风险分层的一根轴；自主度的技术形态与控权手段在 Agent 与 Security，本册只规定从「给建议」升到「自动执行」跨档必须重新过决定门",
     "resolved": true
    },
    {
     "from": "gov-decision",
     "to": "solution-patterns#sp-method",
     "why": "SP 第 2 章讲对客交付里的责任落点与合同话术（乙方视角），本册讲客户内部的决定权归属与证据链（甲方视角），两边在「谁签字」这一点接上（双向）",
     "resolved": true
    }
   ],
   "web": "",
   "questions": []
  },
  {
   "id": "ai-infra-compute",
   "dir": "AI-Infra-Compute",
   "layer": "算力底座层",
   "created": "2026-07-09",
   "updated": "2026-08-02",
   "chapters": [
    {
     "id": "aic-overview",
     "no": "第 1 章",
     "title": "全景总览：从一张卡到一座 AI 工厂",
     "verified": "2026-07-09"
    },
    {
     "id": "aic-gpu",
     "no": "第 2 章",
     "title": "GPU 解剖：为什么 AI 计算长在 GPU 上",
     "verified": "2026-07-09"
    },
    {
     "id": "aic-hbm",
     "no": "第 3 章",
     "title": "显存与 HBM：AI 时代最贵的房地产",
     "verified": "2026-07-09"
    },
    {
     "id": "aic-chips",
     "no": "第 4 章",
     "title": "芯片格局与选型：NVIDIA 之内与之外",
     "verified": "2026-07-09"
    },
    {
     "id": "aic-scaleup",
     "no": "第 5 章",
     "title": "Scale-up 互联：把 72 张卡焊成一张大卡",
     "verified": "2026-07-09"
    },
    {
     "id": "aic-scaleout",
     "no": "第 6 章",
     "title": "Scale-out 网络：把一万张卡连成集群",
     "verified": "2026-07-09"
    },
    {
     "id": "aic-storage",
     "no": "第 7 章",
     "title": "存储与数据管线：别让 GPU 等数据",
     "verified": "2026-07-09"
    },
    {
     "id": "aic-econ",
     "no": "第 8 章",
     "title": "算力经济学与售前速查",
     "verified": "2026-07-09"
    }
   ],
   "facts": [
    {
     "text": "NVIDIA 年更：Blackwell/GB200 在役、GB300 2026 放量（出货约翻倍）、Rubin H2 2026（HBM4+NVLink 6）、Rubin Ultra 2027（GTC 2026 展示 Kyber）、Feynman 2028",
     "chapter": "aic-chips",
     "verified": "2026-07-09",
     "source": "CNBC、wccftech、vrlatech、tech-insider（GTC 2026）",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-08"
    },
    {
     "text": "VR200 NVL72 官方口径推理性能约为 GB300 NVL72 的 3.3 倍",
     "chapter": "aic-chips",
     "verified": "2026-07-09",
     "source": "NVIDIA GTC 2026",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "**AMD Helios 已从「承诺」翻页为「投产」**：MI350X/MI355X 早已量产（288GB HBM3e）；MI400 + Helios 在 Advancing AI 2026（2026-07-22/23，旧金山）正式发布，AMD 官方措辞是「now in production to be deployed by leading AI companies at gigawatt scale」。整柜规格：72 × MI455X + 18 颗第六代 EPYC「Venice」，31TB HBM4，峰值 2.9 EF FP4 / 1.4 EF FP8；单卡 MI455X 432GB HBM4、23.3TB/s、最高 40 PFLOPS FP4。首代仍走 UALink over Ethernet 过渡。已点名的部署方：OpenAI、Anthropic、Meta、Microsoft、Oracle、HUMAIN、Tensorwave、Vultr、Cirrascale；OpenAI 官方口径「预计 2026 Q4 起上线、2027 加速铺开」，Anthropic 合作规模「至多 2GW」。**「Q3 出货」核不到 AMD 一等源**（只见分析机构口径），故成品只写「已投产 + OpenAI Q4 起上线」；**原登记的「TSMC 2nm」在 amd.com 产品页查无实据，本次从成品中撤下**",
     "chapter": "aic-chips",
     "verified": "2026-08-01",
     "source": "newsroom.amd.com 三篇（aai-2026-full-stack-compute-agentic-ai / aai-2026-helios-update / aai-2026-mi400-instinct-update，均 2026-07-23）；amd.com/en/products/accelerators/instinct/mi400.html（432GB HBM4 / 23.3TB/s / 40 PFLOPS FP4 官方规格）；建议复查日 2026-11-30",
     "recheck": "—",
     "grade": "A",
     "cadence": "30",
     "due": "2026-08-31"
    },
    {
     "text": "Google TPU v7 Ironwood 2025-11 GA（192GB HBM3e、7.37TB/s、4614 FP8 TFLOPS、9216 芯 42.5EFLOPS）；AWS Trainium3 已出货（3nm、2.52PF FP8、144GB HBM3e）；两家下一代排 2027",
     "chapter": "aic-chips",
     "verified": "2026-07-09",
     "source": "Google Cloud 官方、SemiAnalysis、Spheron 2026 盘点",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "昇腾 910C 2025 量产、2026 计划约 60 万颗、算力约 H100 的 60-80%、国产化率 90%+；910D 支持 FP8 预计 2026 Q2-Q3 量产；SMIC N+2 良率约 40-50%。**2026-08-01 复核：预测窗口已过半，仍查不到量产落地的一等信源**（华为无官宣、无一等源报道），故措辞维持「预计」不改成品；**登记 2026-09 定点复查**——届时若仍无落地，应把「预计 2026 Q2-Q3」改成定性（如「已多次延后、以 920/950 系列为后续重心」），不再挂具体窗口",
     "chapter": "aic-chips",
     "verified": "2026-08-01",
     "source": "原始口径：新浪科技/36氪/EDN China 2025-12 综述、ESM China；本次复核未见新一等源；建议复查日 2026-09-30",
     "recheck": "2026-09-30",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-31"
    },
    {
     "text": "NVLink 5 单卡 1.8TB/s（18 端口）、NVL72 域内 NVLink Switch 总带宽 130TB/s",
     "chapter": "aic-scaleup",
     "verified": "2026-07-09",
     "source": "NVIDIA 官方 GB200 NVL72 页",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "UALink 1.0（2025-04 定稿，单层交换/至多 1024 端点）与 Broadcom SUE 竞争；原生硬件平台看 2027",
     "chapter": "aic-scaleup",
     "verified": "2026-07-09",
     "source": "SemiAnalysis \"The New AI Networks\"",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "InfiniBand Quantum-X800 XDR 800Gb/s；2025 年中起新机柜配 ConnectX-8 支持 XDR（此前 NDR 400Gb/s）；Spectrum-X800 多租户以太",
     "chapter": "aic-scaleout",
     "verified": "2026-07-09",
     "source": "NVIDIA、NADDOD 架构分析",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "Ultra Ethernet UEC 1.0 规范 2025-06 发布（现 1.0.2，官网免费 PDF），100+ 成员；2026 年中全栈 UET 硬件刚出货、多数设备仅\"兼容\"、采纳早期",
     "chapter": "aic-scaleout",
     "verified": "2026-07-09",
     "source": "UEC 官网、Arista/WWT/SemiAnalysis",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "HBM4 时代开启：Samsung 2026-02-12 全球首家量产（1c DRAM+4nm、11.7Gbps）、4 个月营收破 $10 亿；SK hynix 2026 商用、有意放缓爬坡、预计供 NVIDIA HBM4 约 2/3；在役主流 HBM3e（192-288GB/卡）",
     "chapter": "aic-hbm",
     "verified": "2026-07-09",
     "source": "TrendForce、DigiTimes、TechTimes、DCD",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-08"
    },
    {
     "text": "DeepSeek 3FS（Fire-Flyer File System）开源：随机读优先、放弃读缓存，自报集群聚合读 6.6-7.3TB/s，支持训练加载/checkpoint/KVCache 查询",
     "chapter": "aic-storage",
     "verified": "2026-07-09",
     "source": "Tom's Hardware、GitHub deepseek-ai/3FS",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "FP8 为生产推理默认精度、训练主流实践；NVFP4 面向 Blackwell、工具链成熟中",
     "chapter": "aic-gpu",
     "verified": "2026-07-09",
     "source": "沿用 llm-inference#llminf-quant 同源口径",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "成本量级：H100 级时租 $2-3/卡·时、自建盈亏线利用率约 40-50%、托管 API $2-5/百万输出 token",
     "chapter": "aic-econ",
     "verified": "2026-07-09",
     "source": "沿用 llm-inference#llminf-production 同源口径",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-08"
    },
    {
     "text": "行业预测 2030 推理算力占 AI 总算力约 75%",
     "chapter": "aic-overview",
     "verified": "2026-07-09",
     "source": "沿用 llm-training/llm-inference 同源口径",
     "recheck": "—",
     "grade": "B",
     "cadence": "180",
     "due": "2027-01-05"
    }
   ],
   "edges": [
    {
     "from": "aic-overview / 全书",
     "to": "ai-infra-platform",
     "why": "姊妹模块：本模块讲硬件（卡/网/存储/电），对方讲平台（调度/切分/容错/观测/云形态）；两模块封面/总览页互指",
     "resolved": true
    },
    {
     "from": "aic-hbm",
     "to": "llm-inference#llminf-kv-budget",
     "why": "显存账的推理下半本：机制账（KV Cache）在对方第 2 章，硬件地基（HBM 贵）在本章，互为前后篇",
     "resolved": true
    },
    {
     "from": "aic-gpu",
     "to": "llm-inference#llminf-quant",
     "why": "精度阶梯 FP8/FP4 是量化落地的硬件前提",
     "resolved": true
    },
    {
     "from": "aic-hbm",
     "to": "llm-training#llmtrain-infra",
     "why": "训练显存账（×16 字节）↔ ZeRO/FSDP 切分方案：本章讲账、对方讲怎么把账切开分摊",
     "resolved": true
    },
    {
     "from": "aic-scaleup / aic-scaleout",
     "to": "llm-training#llmtrain-infra",
     "why": "并行策略（TP/PP/EP）产生的通信量决定网络怎么建；本模块讲网络、对方讲并行",
     "resolved": true
    },
    {
     "from": "aic-storage",
     "to": "llm-inference#llminf-disagg",
     "why": "KV Cache 外置 ↔ P/D 分离/Mooncake/Dynamo KV 路由：存储升级为推理性能部件",
     "resolved": true
    },
    {
     "from": "aic-econ",
     "to": "llm-inference#llminf-production",
     "why": "建 vs 租 vs API 盈亏线口径同源引用",
     "resolved": true
    },
    {
     "from": "aic-overview",
     "to": "llm-training#llmtrain-overview",
     "why": "训练一次性重投入 vs 推理持续账单、2030 推理 75% 预测同源",
     "resolved": true
    }
   ],
   "web": "./ai-infra-compute/index.html",
   "questions": [
    {
     "id": "q-ai-infra-compute-1",
     "q": "我们已经有机房，直接买卡装进去行不行？",
     "added": "2026-07-09",
     "chapters": [
      "aic-overview"
     ]
    },
    {
     "id": "q-ai-infra-compute-2",
     "q": "标称几千 TFLOPS，为什么我们实测差那么远？",
     "added": "2026-07-09",
     "chapters": [
      "aic-gpu"
     ]
    },
    {
     "id": "q-ai-infra-compute-3",
     "q": "70B 模型到底要几张卡？",
     "added": "2026-07-09",
     "chapters": [
      "aic-hbm"
     ]
    },
    {
     "id": "q-ai-infra-compute-4",
     "q": "不用 NVIDIA 到底行不行？",
     "added": "2026-07-09",
     "chapters": [
      "aic-chips"
     ]
    },
    {
     "id": "q-ai-infra-compute-5",
     "q": "NVLink 和 InfiniBand 到底什么关系？",
     "added": "2026-07-09",
     "chapters": [
      "aic-scaleup"
     ]
    },
    {
     "id": "q-ai-infra-compute-6",
     "q": "存储要配多少才够？直接用对象存储训练行不行？",
     "added": "2026-07-09",
     "chapters": [
      "aic-storage"
     ]
    },
    {
     "id": "q-ai-infra-compute-7",
     "q": "自建和上云到底哪个便宜？",
     "added": "2026-07-09",
     "chapters": [
      "tco",
      "aic-econ"
     ]
    },
    {
     "id": "q-ai-infra-compute-8",
     "q": "现在下单还是等下一代卡？",
     "added": "2026-07-09",
     "chapters": [
      "aic-chips"
     ]
    },
    {
     "id": "q-ai-infra-compute-9",
     "q": "你们报的这个容量，凭什么证明？跑分能不能信？",
     "added": "2026-07-23",
     "chapters": [
      "aic-econ",
      "aic-gpu"
     ]
    },
    {
     "id": "q-ai-infra-compute-10",
     "q": "卡坏了谁修？修的那几天算力算谁的？",
     "added": "2026-07-23",
     "chapters": [
      "aic-overview",
      "aic-econ"
     ]
    },
    {
     "id": "q-ai-infra-compute-11",
     "q": "同样一批卡，别家报价低不少，凭什么？",
     "added": "2026-07-23",
     "chapters": [
      "aic-chips",
      "aic-gpu",
      "aic-scaleout"
     ]
    }
   ]
  },
  {
   "id": "ai-infra-platform",
   "dir": "AI-Infra-Platform",
   "layer": "算力底座层",
   "created": "2026-07-09",
   "updated": "2026-08-01",
   "chapters": [
    {
     "id": "aip-overview",
     "no": "第 1 章",
     "title": "平台全景：从「一堆卡」到「一个平台」",
     "verified": "2026-07-09"
    },
    {
     "id": "aip-k8s-gpu",
     "no": "第 2 章",
     "title": "K8s + GPU 基础：从数卡到懂卡",
     "verified": "2026-07-09"
    },
    {
     "id": "aip-scheduling",
     "no": "第 3 章",
     "title": "作业调度：让最贵的卡不空转",
     "verified": "2026-07-09"
    },
    {
     "id": "aip-sharing",
     "no": "第 4 章",
     "title": "GPU 切分与多租户",
     "verified": "2026-07-09"
    },
    {
     "id": "aip-faulttol",
     "no": "第 5 章",
     "title": "训练容错工程：万卡集群故障是常态",
     "verified": "2026-07-09"
    },
    {
     "id": "aip-observability",
     "no": "第 6 章",
     "title": "可观测性与利用率运营",
     "verified": "2026-07-09"
    },
    {
     "id": "aip-serving",
     "no": "第 7 章",
     "title": "推理服务平台化",
     "verified": "2026-07-09"
    },
    {
     "id": "aip-cloud",
     "no": "第 8 章",
     "title": "云上算力形态与售前速查",
     "verified": "2026-07-09"
    }
   ],
   "facts": [
    {
     "text": "DRA（Dynamic Resource Allocation）K8s v1.34（2025-08）GA 并默认启用，取代 device plugin 的\"只数卡\"模式；GKE/AKS/OpenShift 4.21 等托管发行版已跟进",
     "chapter": "aip-k8s-gpu",
     "verified": "2026-07-09",
     "source": "kubernetes.io 官方博客、Red Hat、Google Cloud、AKS 工程博客",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "KubeCon EU 2026 上 NVIDIA 把 NVIDIA DRA Driver for GPUs 捐给 CNCF；DRA 成 GPU 调度社区主线",
     "chapter": "aip-k8s-gpu",
     "verified": "2026-07-09",
     "source": "KubeCon EU 2026 报道、AKS 博客 2026-03",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "KAI Scheduler：NVIDIA 2025-04 开源（Apache 2.0），与商业版 Run:ai 同一调度核（gang/拓扑感知/bin-packing/DRA 集成）；Run:ai 差异=UI/多集群/SLA/fractional GPU",
     "chapter": "aip-scheduling",
     "verified": "2026-07-09",
     "source": "zenml/cloudoptimo/rack2cloud 2026 对比综述",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "调度分层共识：Kueue 管准入配额、Volcano/KAI 管 gang 与放置，生产常两层叠用；小集群（<16 卡）单用 Kueue 或 KAI 够用；Slurm 在 HPC 与托管服务中仍主力",
     "chapter": "aip-scheduling",
     "verified": "2026-07-09",
     "source": "cloudoptimo/zenml 2026 综述",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "GPU 切分三板斧口径：MIG（硬件隔离、最多 7 实例）、时间片（高密度无隔离、不宜生产多租户）、MPS；HAMi（CNCF）任意 NVIDIA 卡细粒度配额；MIG 正与 DRA 打通",
     "chapter": "aip-sharing",
     "verified": "2026-07-09",
     "source": "NVIDIA GPU Operator 文档、scaleops/collabnix/rafay 2026 教程",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "SageMaker HyperPod：EKS/Slurm 双编排 + 弹性容错（自动检测-替换-续训）；2026 上新一键建集群、Slurm continuous provisioning（2026-03）、G7e 实例（2026-04）",
     "chapter": "aip-faulttol",
     "verified": "2026-07-09",
     "source": "AWS 官方文档/What's New",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "llm-d（K8s 系 P/D 分离）、NVIDIA Dynamo 1.0（2026-03 GTC GA，P/D 编排+KV 感知路由+NIXL）为推理平台化承载",
     "chapter": "aip-serving",
     "verified": "2026-07-09",
     "source": "沿用 llm-inference#llminf-disagg 同源口径",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "自建盈亏线利用率约 40-50%、托管 API $2-5/百万输出 token",
     "chapter": "aip-cloud",
     "verified": "2026-07-09",
     "source": "沿用 llm-inference#llminf-production 同源口径",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-08"
    },
    {
     "text": "K8s 推理服务化新抽象：KServe 当前 v0.19.0（2026-06-14）；LLMInferenceService CRD 自 v0.18.0（2026-04-29）引入、至今仍是 alpha（serving.kserve.io/v1alpha2）；队列侧 Kueue 当前 v0.19.0（2026-07-22）（建议复查日随季度巡检，版本号周级漂移）",
     "chapter": "aip-serving",
     "verified": "2026-08-01",
     "source": "github.com/kserve/kserve/releases、kserve.github.io 文档（LLMInferenceService 概览 / CRD API）、github.com/kubernetes-sigs/kueue/releases",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-30"
    }
   ],
   "edges": [
    {
     "from": "aip-overview",
     "to": "predictive-ai-mlops#pam-platform",
     "why": "反向回指（2026-08-02 新模块建立）：共用得了的那半截（K8s+GPU、队列与配额、存储、容错）全在 AIP，本册不重讲，只讲上层为什么合并不了",
     "resolved": true
    },
    {
     "from": "aip-overview / 全书",
     "to": "ai-infra-compute",
     "why": "姊妹模块：本模块讲平台（调度/切分/容错/观测/云形态），对方讲硬件（卡/网/存储/电）；两模块封面/总览页互指",
     "resolved": true
    },
    {
     "from": "aip-scheduling / aip-faulttol",
     "to": "llm-training#llmtrain-infra",
     "why": "训练作业是集群调度与容错的头号负载；那边讲并行怎么切模型，本模块讲作业怎么被调度、崩了怎么续",
     "resolved": true
    },
    {
     "from": "aip-serving",
     "to": "llm-inference#llminf-disagg",
     "why": "推理引擎（vLLM/SGLang）与 P/D 分离（Dynamo/llm-d）机制在对方讲，本章讲平台承载：怎么被编排、部署、扩缩、路由",
     "resolved": true
    },
    {
     "from": "aip-observability",
     "to": "llm-inference#llminf-production",
     "why": "利用率/MFU/goodput/SLO 运营两侧互指；推理压测那条线待未来 Evaluation 收编",
     "resolved": true
    },
    {
     "from": "aip-cloud",
     "to": "fine-tuning#ft-cloud",
     "why": "云上托管训练形态（HyperPod/Vertex/PAI 类）两边互指",
     "resolved": true
    },
    {
     "from": "aip-sharing",
     "to": "ai-infra-compute#aic-gpu",
     "why": "切分建立在 GPU 内部组织（SM/Tensor Core）之上，硬件概念见姊妹模块第 2 章",
     "resolved": true
    }
   ],
   "web": "./ai-infra-platform/index.html",
   "questions": [
    {
     "id": "q-ai-infra-platform-1",
     "q": "我们卡不多，直接 SSH 上去跑不行吗？",
     "added": "2026-07-09",
     "chapters": [
      "aip-overview"
     ]
    },
    {
     "id": "q-ai-infra-platform-2",
     "q": "K8s 自带调度器不能跑训练吗？",
     "added": "2026-07-09",
     "chapters": [
      "aip-scheduling"
     ]
    },
    {
     "id": "q-ai-infra-platform-3",
     "q": "一张卡到底能给几个团队用？",
     "added": "2026-07-09",
     "chapters": [
      "aip-sharing"
     ]
    },
    {
     "id": "q-ai-infra-platform-4",
     "q": "故障真有那么频繁吗？感觉有点夸张。",
     "added": "2026-07-09",
     "chapters": [
      "aip-faulttol"
     ]
    },
    {
     "id": "q-ai-infra-platform-5",
     "q": "nvidia-smi 利用率一直 90%+，还有优化空间吗？",
     "added": "2026-07-09",
     "chapters": [
      "aip-observability"
     ]
    },
    {
     "id": "q-ai-infra-platform-6",
     "q": "有了 vLLM 这些引擎，为什么还要推理平台？",
     "added": "2026-07-09",
     "chapters": [
      "aip-serving"
     ]
    },
    {
     "id": "q-ai-infra-platform-7",
     "q": "我们到底该自建平台还是用托管？",
     "added": "2026-07-09",
     "chapters": [
      "tierpicker",
      "aip-cloud"
     ]
    },
    {
     "id": "q-ai-infra-platform-8",
     "q": "你们说利用率能翻一倍，这个敢写进合同吗？",
     "added": "2026-07-23",
     "chapters": [
      "aip-observability",
      "aip-observability",
      "aip-overview"
     ]
    },
    {
     "id": "q-ai-infra-platform-9",
     "q": "这套平台搭起来要多久？要配几个人？",
     "added": "2026-07-23",
     "chapters": [
      "aip-k8s-gpu",
      "tierpicker",
      "aip-cloud",
      "aip-faulttol"
     ]
    },
    {
     "id": "q-ai-infra-platform-10",
     "q": "平台交付了怎么算验收？拿什么证明它建好了？",
     "added": "2026-07-23",
     "chapters": [
      "aip-overview",
      "aip-serving",
      "aip-faulttol",
      "aip-overview",
      "aip-serving"
     ]
    }
   ]
  },
  {
   "id": "ai-ops",
   "dir": "AI-Ops",
   "layer": "工程保障层",
   "created": "2026-07-10",
   "updated": "2026-08-02",
   "chapters": [
    {
     "id": "ops-what-why",
     "no": "第 1 章",
     "title": "为什么 LLM 应用的 Ops 是新学科（两根新轴 / 静默退化 / 边界地图 / 观测成本）",
     "verified": "2026-07-10"
    },
    {
     "id": "ops-tracing",
     "no": "第 2 章",
     "title": "Tracing 与 OTel GenAI 深潜（span 四类 / trace 旅程 / PII 三开关）",
     "verified": "2026-08-01"
    },
    {
     "id": "ops-online-eval",
     "no": "第 3 章",
     "title": "在线评估与反馈回流（采样异步打分 / 评估漏斗 / 闭环三件套）",
     "verified": "2026-07-10"
    },
    {
     "id": "ops-drift",
     "no": "第 4 章",
     "title": "漂移与静默退化监测（三类漂移 / 检测组合拳 / 巡检节奏）",
     "verified": "2026-07-10"
    },
    {
     "id": "ops-release",
     "no": "第 5 章",
     "title": "发布管理（版本注册表 / 评估门禁 / 金丝雀 / 回滚 / 环境与 A/B）",
     "verified": "2026-07-10"
    },
    {
     "id": "ops-incident",
     "no": "第 6 章",
     "title": "事故响应（AI runbook 四问 / 急停 / HITL 分级 / 事故分级 SLA）",
     "verified": "2026-07-10"
    },
    {
     "id": "ops-tooling",
     "no": "第 7 章",
     "title": "工具格局与选型（六平台 / Braintrust · AgentOps / APM vs 专用 / 上云）",
     "verified": "2026-08-01"
    },
    {
     "id": "ops-cheatsheet",
     "no": "第 8 章",
     "title": "售前速查（运营包五件套 / 指标速查 / 选型卡 / 串联地图）",
     "verified": "2026-07-10"
    }
   ],
   "facts": [
    {
     "text": "OTel GenAI 语义约定 2026-06-12（semconv v1.42.0）起全部 gen_ai.* span/指标/事件迁入独立仓 semantic-conventions-genai，主仓对应定义弃用；整体仍 Development、无一 Stable，新仓尚未发正式版；四类 span（agent/workflow/tool/model）实践已稳但命名仍可能变——「封装一层再用」升为硬要求（建议复查日 2026-10-31，随季度巡检）",
     "chapter": "ops-tracing",
     "verified": "2026-08-01",
     "source": "github.com/open-telemetry/semantic-conventions v1.42.0 release notes / github.com/open-telemetry/semantic-conventions-genai（docs/gen-ai 状态徽标均 Development、releases 页为空）",
     "recheck": "2026-10-31",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-30"
    },
    {
     "text": "OTLP 规范 1.10.0：Trace/Metric/Log 三信号 Stable（profiles 仍开发中）——与 GenAI 语义约定的 Development 状态是两条轨，售前别混谈",
     "chapter": "ops-tracing",
     "verified": "2026-07-12",
     "source": "opentelemetry.io/docs/specs/otlp/",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-10"
    },
    {
     "text": "平台许可证与版本锚点：Phoenix 主仓 ELv2（限托管转售，沿 07-12 核实）；Langfuse 已切 v4 大版本线（v4.0.0 2026-07-29 破坏性升级，最新 v4.2.0 2026-07-31；core MIT、ee/ 目录除外的许可结构在 v4 原样保留）；MLflow v3.15.0（2026-07-31，Apache-2.0）",
     "chapter": "ops-tooling",
     "verified": "2026-08-01",
     "source": "GitHub releases（langfuse/langfuse、mlflow/mlflow）+ langfuse README 许可节；Phoenix 未复核沿旧记录",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-30"
    },
    {
     "text": "六平台锚定：LangSmith（LangChain 原生）/ Langfuse（开源领袖，2026-01 被 ClickHouse 收购、开源线维护不变——v4 后 core 仍 MIT、README 明写归属 ClickHouse 且在持续招聘，2026-08-01 复核成立）/ Arize Phoenix（漂移与嵌入分析）/ Helicone（drop-in 代理）/ Datadog LLM Obs / Honeycomb",
     "chapter": "ops-tooling",
     "verified": "2026-07-10",
     "source": "digitalapplied / latitude / laminar 2026 横评；github.com/langfuse/langfuse README（Langfuse 行 2026-08-01 复核）",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-08"
    },
    {
     "text": "Braintrust（观测评估一体，免费档 1M span/月 + 10K eval）；AgentOps（会话回放 time-travel debugging、无限循环检测）",
     "chapter": "ops-tooling",
     "verified": "2026-07-10",
     "source": "braintrust.dev / github.com/agentops-ai",
     "recheck": "—",
     "grade": "A",
     "cadence": "30",
     "due": "2026-08-09"
    },
    {
     "text": "APM 系 vs 专用系分工共识：Datadog 类管 token 成本与延迟够用；输出质量评估/漂移/评审队列需专用工具",
     "chapter": "ops-tooling",
     "verified": "2026-07-10",
     "source": "confident-ai / techsy 2026 对比",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-08"
    },
    {
     "text": "观测成本：RAG 管线遥测量为等价传统 API 的 10–50 倍；接入 AI 负载后 APM 账单普遍 +40–200%",
     "chapter": "ops-what-why",
     "verified": "2026-07-10",
     "source": "oneuptime 2026-04",
     "recheck": "—",
     "grade": "B",
     "cadence": "180",
     "due": "2027-01-06"
    },
    {
     "text": "在线评估实践口径：采样 5–10% 真实流量、异步打分零应用时延；低分 trace 标注失败模式→晋升进回归集（dataset promotion）；闭环三件套 = 告警/评审队列/数据集晋升",
     "chapter": "ops-online-eval",
     "verified": "2026-07-10",
     "source": "braintrust.dev / towardsai 2026-04",
     "recheck": "—",
     "grade": "B",
     "cadence": "180",
     "due": "2027-01-06"
    },
    {
     "text": "漂移三类：供应商静默换 checkpoint（上月测的≠这月答的）/ 输出漂移 / 性能漂移；检测靠嵌入距离 + judge 持续打分 + 回归集重跑",
     "chapter": "ops-drift",
     "verified": "2026-07-10",
     "source": "stackpulsar / galileo 2026",
     "recheck": "—",
     "grade": "B",
     "cadence": "180",
     "due": "2027-01-06"
    },
    {
     "text": "发布管理成熟形态：版本注册表 + 评估门禁 + 金丝雀 5–10% 流量；LLM 金丝雀与传统的关键差异 = 必须在金丝雀流量上跑自动评估；回滚 = 改配置指针非重部署",
     "chapter": "ops-release",
     "verified": "2026-07-10",
     "source": "tianpan.co 2026-03 / arthur.ai / calmops",
     "recheck": "—",
     "grade": "B",
     "cadence": "180",
     "due": "2027-01-06"
    },
    {
     "text": "事故响应：成本尖峰常是第一信号（死循环/注入先表现为 token 暴涨）；急停开关（停任务不砸状态）；HITL 三分级（in/on/out-of-the-loop）",
     "chapter": "ops-incident",
     "verified": "2026-07-10",
     "source": "zylos 2026-03 SRE-AI / deepinspect",
     "recheck": "—",
     "grade": "B",
     "cadence": "180",
     "due": "2027-01-06"
    }
   ],
   "edges": [
    {
     "from": "ops-drift",
     "to": "predictive-ai-mlops#pam-monitoring",
     "why": "反向回指（2026-08-02 新模块建立）：同名不同物，最需要互指的一条：那边的漂移发生在没有客观真值的生成式应用上（供应商静默换权重、输出漂移），本册的漂",
     "resolved": true
    },
    {
     "from": "ops-release",
     "to": "predictive-ai-mlops#pam-lifecycle",
     "why": "反向回指（2026-08-02 新模块建立）：发布门的骨架（门禁在前、影子、金丝雀、回滚是切指针）两边共用，不重讲；本册只补预测式独有的两点——可以双跑逐条对",
     "resolved": true
    },
    {
     "from": "ops-drift",
     "to": "ai-governance#gov-change-triggers",
     "why": "反向回指（2026-08-02 新模块建立）：供应商静默换 checkpoint 与三类漂移由 AI-Ops 监测；本册把这些告警接成「重新决定」的触发口，规",
     "resolved": true
    },
    {
     "from": "ops-incident",
     "to": "ai-governance#gov-decision",
     "why": "反向回指（2026-08-02 新模块建立）：暂停一个用途的技术动作（急停、回滚指针）在 AI-Ops 第 6 章；本册管谁有权按下、按下之后走什么复核路径、",
     "resolved": true
    },
    {
     "from": "ops-online-eval",
     "to": "evaluation#eval-build / evaluation#eval-judge",
     "why": "全库最强新搭档：离线建集与判官方法在那边，在线采样运营在本模块——共享判分器定义（双向）",
     "resolved": true
    },
    {
     "from": "ops-what-why / ops-tracing",
     "to": "ai-gateway#gw-observe",
     "why": "网关是数据源与统一采集层，本模块是消费与行动层；trace id 两层贯通（双向）",
     "resolved": true
    },
    {
     "from": "ops-incident",
     "to": "security#sec-defense / security#sec-agentic",
     "why": "「被攻破了怎么办」的防护弹药在 Security；注入检测与工具权限急冻同源",
     "resolved": true
    },
    {
     "from": "ops-release",
     "to": "pe#pe-engineering",
     "why": "提示词版本化在 PE 第 5 章点过，本模块升级为发布工程（注册表/门禁/金丝雀）",
     "resolved": true
    },
    {
     "from": "ops-cheatsheet",
     "to": "solution-patterns#sp-method",
     "why": "运营包五件套 = SP「人力账」的展开：那边说要卖，这边说卖什么、怎么定 SLA（双向）",
     "resolved": true
    },
    {
     "from": "ops-drift",
     "to": "model-landscape#ml-selection",
     "why": "换模型/供应商静默更新的回归验证是「保持可换」的运维面",
     "resolved": true
    },
    {
     "from": "ops-what-why",
     "to": "ai-infra-platform#aip-observability",
     "why": "边界声明：GPU/集群层可观测归 Infra-Platform，应用与质量层归本模块",
     "resolved": true
    }
   ],
   "web": "./ai-ops/index.html",
   "questions": [
    {
     "id": "q-ai-ops-1",
     "q": "我们已经有 Datadog 了，为什么还要一套 AI 观测？",
     "added": "2026-07-10",
     "chapters": [
      "ops-tooling"
     ]
    },
    {
     "id": "q-ai-ops-2",
     "q": "系统没报错，但用户说 AI 变笨了，怎么排查？",
     "added": "2026-07-10",
     "chapters": [
      "ops-drift"
     ]
    },
    {
     "id": "q-ai-ops-3",
     "q": "大厂的模型还能悄悄变吗？",
     "added": "2026-07-10",
     "chapters": [
      "ops-drift"
     ]
    },
    {
     "id": "q-ai-ops-4",
     "q": "线上打分会不会拖慢用户请求？LLM 判官可信吗？",
     "added": "2026-07-10",
     "chapters": [
      "ops-online-eval"
     ]
    },
    {
     "id": "q-ai-ops-5",
     "q": "改个提示词而已，为什么要走发布流程？",
     "added": "2026-07-10",
     "chapters": [
      "ops-release"
     ]
    },
    {
     "id": "q-ai-ops-6",
     "q": "你们的 AI 有没有「刹车」？",
     "added": "2026-07-10",
     "chapters": [
      "ops-incident"
     ]
    },
    {
     "id": "q-ai-ops-7",
     "q": "trace 里有客户的对话内容，安全吗？",
     "added": "2026-07-10",
     "chapters": [
      "ops-tracing"
     ]
    },
    {
     "id": "q-ai-ops-8",
     "q": "上线之后你们还管吗？管什么、怎么收费？",
     "added": "2026-07-12",
     "chapters": [
      "ops-cheatsheet"
     ]
    },
    {
     "id": "q-ai-ops-9",
     "q": "这套上了之后，你们能承诺什么？给个 SLO。",
     "added": "2026-07-23",
     "chapters": [
      "ops-incident",
      "ops-drift"
     ]
    },
    {
     "id": "q-ai-ops-10",
     "q": "以后换了模型供应商、或者不用这家观测平台了，这套是不是重做？",
     "added": "2026-07-23",
     "chapters": [
      "ops-tooling",
      "ops-release"
     ]
    },
    {
     "id": "q-ai-ops-11",
     "q": "「观测做到位了」怎么算数？验收拿什么签？",
     "added": "2026-07-23",
     "chapters": [
      "ops-cheatsheet",
      "ops-release"
     ]
    }
   ]
  },
  {
   "id": "agent",
   "dir": "Agent",
   "layer": "应用模式层",
   "created": "2026-07-07",
   "updated": "2026-08-02",
   "chapters": [
    {
     "id": "agent-what-why",
     "no": "第 1 章",
     "title": "是什么/为什么",
     "verified": "2026-07-07"
    },
    {
     "id": "agent-components",
     "no": "第 2 章",
     "title": "核心组件",
     "verified": "2026-07-07"
    },
    {
     "id": "agent-orchestration",
     "no": "第 3 章",
     "title": "编排模式",
     "verified": "2026-07-07"
    },
    {
     "id": "agent-tools-mcp",
     "no": "第 4 章",
     "title": "工具接入与 MCP",
     "verified": "2026-07-07"
    },
    {
     "id": "agent-context",
     "no": "第 5 章",
     "title": "上下文工程",
     "verified": "2026-07-07"
    },
    {
     "id": "agent-eval-guardrails",
     "no": "第 6 章",
     "title": "评估与护栏",
     "verified": "2026-07-07"
    },
    {
     "id": "agent-lowcode",
     "no": "第 7 章",
     "title": "低代码 Agent 平台（Coze/Dify/n8n/HiAgent 与 code-first 边界）",
     "verified": "2026-07-10"
    },
    {
     "id": "agent-memory",
     "no": "第 8 章",
     "title": "记忆系统（四种记忆分层 / 框架四强 / 记忆投毒 ASI06）",
     "verified": "2026-07-11"
    },
    {
     "id": "agent-computer-use",
     "no": "第 9 章",
     "title": "Computer Use 与 GUI Agent（三路线 / 基准两口径 / RPA 混合 / 安全四件）",
     "verified": "2026-07-11"
    },
    {
     "id": "agent-subagent",
     "no": "第 10 章",
     "title": "多智能体 / Sub-agent 编排（三层框架 / 三性质 / CC·Codex 实操 / 四层触发 / 决策账）",
     "verified": "2026-07-17"
    },
    {
     "id": "agent-cheatsheet",
     "no": "第 11 章",
     "title": "售前速查（高频问题 / 启用条件决策树 / 串联地图；替代原全书串联页）",
     "verified": "2026-07-11"
    }
   ],
   "facts": [
    {
     "text": "MCP 现行规范 2026-07-28（无状态核心，server 可像普通无状态 Web 服务扩容）；2025-11-25 进入兼容期，弃用到移除至少十二个月",
     "chapter": "agent-tools-mcp",
     "verified": "2026-07-30",
     "source": "modelcontextprotocol.io/specification/2026-07-28/changelog",
     "recheck": "2027-01-31",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-28"
    },
    {
     "text": "A2A v1.0 于 2026-03-12 发布（当前补丁 v1.0.1，2026-05-28），150+ 组织采用",
     "chapter": "agent-tools-mcp",
     "verified": "2026-07-12",
     "source": "github.com/a2aproject/A2A/releases、Linux Foundation 公告",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-10"
    },
    {
     "text": "Microsoft Agent Framework 1.0 GA（2026-04-03，.NET/Python 生产可用；Go 版仍 public preview），合并 AutoGen 与 Semantic Kernel",
     "chapter": "agent-orchestration",
     "verified": "2026-07-12",
     "source": "微软官方公告、learn.microsoft.com/agent-framework",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-10"
    },
    {
     "text": "生产可用框架短名单：LangGraph、Claude Agent SDK、OpenAI Agents SDK、Google ADK、MS Agent Framework",
     "chapter": "agent-orchestration",
     "verified": "2026-07-07",
     "source": "2026 多方对比评测",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-05"
    },
    {
     "text": "框架成熟度锚点：OpenAI Agents SDK 仍 0.x（Python v0.18.2，2026-07-11）；LangGraph 已过 1.0（v1.2.9，2026-07-10）——「短名单都能用，但 API 稳定性承诺不同」",
     "chapter": "agent-orchestration",
     "verified": "2026-07-12",
     "source": "GitHub releases（openai-agents-python、langgraph）",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-10"
    },
    {
     "text": "OWASP Top 10 for Agentic Applications 2026 为 agent 安全行业标准清单",
     "chapter": "agent-eval-guardrails",
     "verified": "2026-07-07",
     "source": "genai.owasp.org",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-05"
    },
    {
     "text": "评估/可观测平台格局：LangSmith、Langfuse、Arize Phoenix、W&B Weave；τ-bench 用 pass^k",
     "chapter": "agent-eval-guardrails",
     "verified": "2026-07-07",
     "source": "各官方文档",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-05"
    },
    {
     "text": "Coze Studio 开源（2025-07，Apache 2.0）：21.1k stars、V0.5.1（2026-02）；SaaS 扣子 3.0（2026-06）多人多 Agent 协作",
     "chapter": "agent-lowcode",
     "verified": "2026-07-10",
     "source": "github.com/coze-dev/coze-studio / 36kr",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-08"
    },
    {
     "text": "Dify：151k stars、v1.16.1（2026-07-28）；v1.16.0（2026-07-17）起 Dify Agent 进入 Open Beta（内置代码沙箱 + 技能系统，默认对全员启用，产品定位从 LLM 应用底座向 agent 运行时延伸）；许可证 = Apache 2.0 + 附加条款（多租户 SaaS / 去 logo 需商业授权）",
     "chapter": "agent-lowcode",
     "verified": "2026-08-01",
     "source": "github.com/langgenius/dify/releases（v1.16.0/v1.16.1 发布说明）、GitHub API stars 实查",
     "recheck": "2026-10-31",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-30"
    },
    {
     "text": "n8n：~127k stars；Sustainable Use License（fair-code，不得转售）；2025-10 融资 $180M（Accel/NVIDIA 参投），估值 ~$2.5B",
     "chapter": "agent-lowcode",
     "verified": "2026-07-10",
     "source": "docs.n8n.io / 融资报道",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-08"
    },
    {
     "text": "HiAgent 2.0 主打数字员工治理；火山引擎居中国智能体开发平台私有化 17.8% / 公有云 19.3% 双第一（IDC 口径）",
     "chapter": "agent-lowcode",
     "verified": "2026-07-10",
     "source": "volcengine.com / IDC 报道",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-09"
    },
    {
     "text": "低代码选型共识：问答→Dify、集成→n8n、对话 bot→Coze、私有化+治理→HiAgent 类；生产范式 = 平台做壳、复杂节点下沉代码",
     "chapter": "agent-lowcode",
     "verified": "2026-07-10",
     "source": "jimmysong.io / meterra 2026 横评",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-08"
    },
    {
     "text": "记忆框架四强：Mem0（托管最快、47K+ stars、向量+图+KV）/ Letta 前 MemGPT（OS 式内存块）/ Zep（时序知识图谱，自报 LoCoMo 94.7%）/ LangMem（LangGraph 原生）；生产模式 = 小核心常驻 + 检索层 + 遗忘策略",
     "chapter": "agent-memory",
     "verified": "2026-07-11",
     "source": "vectorize / evermind / jobsbyculture 2026 横评",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-09"
    },
    {
     "text": "记忆投毒：OWASP Agentic Top 10 于 2026 新增 ASI06；MINJA 注入成功率 >95%、多研究报 80–99.8%；防线 = 写入过滤/任务间清理/鉴权审计",
     "chapter": "agent-memory",
     "verified": "2026-07-11",
     "source": "arXiv 2601.05504 / 2607.06595 / beyondscale",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-09"
    },
    {
     "text": "Computer Use 三路线：Claude（截图+鼠键全桌面）/ Gemini（DOM 感知浏览器）/ OpenAI Codex Background CU（2026-04-16，macOS 并行）；开源代表 Browser Use；Claude Cowork 2026-03-23 上线",
     "chapter": "agent-computer-use",
     "verified": "2026-07-11",
     "source": "digitalapplied 2026 对比矩阵 / particula",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-09"
    },
    {
     "text": "CU 基准两口径：Opus 4.8 OSWorld-Verified 83.5%（2024 年起步 14.9%）；OSWorld 2.0 长程仅 20.6%；OpenAI CUA WebVoyager 87% / OSWorld 38.1%——基准 ≠ 生产就绪",
     "chapter": "agent-computer-use",
     "verified": "2026-07-11",
     "source": "coasty 榜 / arXiv 2606.29537",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-09"
    },
    {
     "text": "Claude Code sub-agent 机制：`.claude/agents/*.md`（name/description 必填，tools/model 等可选）；内置 Explore / Plan / general-purpose；嵌套深度默认 3 层、环境变量 `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH` 可配（v2.1.219 起；曾在 v2.1.172–216 固定 5 层不可配，v2.1.217–218 默认 1 层）；v2.1.198 起默认后台运行、`/agents` 交互向导移除；skill 可绑 `context: fork` 强制在 sub-agent 里跑",
     "chapter": "agent-subagent",
     "verified": "2026-08-01",
     "source": "code.claude.com/docs/en/sub-agents（Let subagents spawn their own subagents 节）",
     "recheck": "2026-10-31",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-30"
    },
    {
     "text": "Codex sub-agent：当前版本默认启用；内置 explorer / worker / default；`.codex/agents/*.toml`（name/description/developer_instructions 必填）；agents.max_threads 默认 6、agents.max_depth 默认 1；spawn_agents_on_csv（CSV 一行一工人）为实验特性",
     "chapter": "agent-subagent",
     "verified": "2026-07-17",
     "source": "developers.openai.com/codex/subagents",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-15"
    },
    {
     "text": "Anthropic 多 agent 研究系统：比单 agent Opus 4 高 90.2%；agent ≈ 4×、multi-agent ≈ 15× token；token 用量单因素解释 80% 性能方差（BrowseComp）；复杂查询典型并行 3–5 个子 agent，研究时长最多压缩 90%",
     "chapter": "agent-subagent",
     "verified": "2026-07-17",
     "source": "anthropic.com/engineering/built-multi-agent-research-system",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-15"
    }
   ],
   "edges": [
    {
     "from": "agent-eval-guardrails",
     "to": "ai-governance#gov-risk-tiering",
     "why": "反向回指（2026-08-02 新模块建立）：自主度是组织风险分层的一根轴；自主度的技术形态与控权手段在 Agent 与 Security，本册只规定从「给建",
     "resolved": true
    },
    {
     "from": "agent-context",
     "to": "pe#pe-advanced-reasoning",
     "why": "上下文工程 / ReAct 是提示词技巧在工具循环里的应用；讲义已加「与 Prompt Engineering 的关系」页回指",
     "resolved": true
    },
    {
     "from": "agent-tools-mcp",
     "to": "mcp#mcp-what-why",
     "why": "Agent 第 4 章讲 MCP 概览，协议细节深入见 MCP 模块",
     "resolved": true
    },
    {
     "from": "agent-context",
     "to": "rag#rag-agentic",
     "why": "Agent 第 5 章\"与 RAG 的握手\" ↔ RAG 第 8 章，双向互引",
     "resolved": true
    },
    {
     "from": "agent-eval-guardrails",
     "to": "evaluation#eval-scenarios",
     "why": "agent 评估（turn/milestone/trajectory）已在 Evaluation 第 6 章场景验收展开（原「候选」于 2026-07-10 补实）",
     "resolved": true
    },
    {
     "from": "agent-tools-mcp",
     "to": "a2a#a2a-what-why",
     "why": "Agent 第 4 章提及 A2A（v1.0）；跨厂商 Agent 协作的协议细节深入见 A2A 模块",
     "resolved": true
    },
    {
     "from": "agent-context",
     "to": "llm#llm-inference-kv",
     "why": "上下文工程的架构根源（O(n²) 成本 + KV 缓存 + 有效窗口）见 LLM 原理第 4 章",
     "resolved": true
    },
    {
     "from": "agent-components",
     "to": "multimodal#mm-what-why",
     "why": "多模态感知让 agent「能看」屏幕 / 图表，是 computer use 的前提；第 2 章已加「多模态感知」串联页回指（2026-07-10），护栏侧接 multimodal#mm-production",
     "resolved": true
    },
    {
     "from": "agent-lowcode",
     "to": "mcp#mcp-what-why",
     "why": "四平台都在补 MCP 支持（工具接入标准化），协议细节见 MCP 模块",
     "resolved": true
    },
    {
     "from": "agent-lowcode",
     "to": "rag#rag-pipeline",
     "why": "Dify 内置 RAG = RAG 第 6 章最小管线的产品化，配知识库即建库",
     "resolved": true
    },
    {
     "from": "agent-lowcode",
     "to": "multimodal#mm-voice-realtime",
     "why": "平台搭的客服 bot 要上语音时，实时链路工程（延迟/打断/RTC）见 Multimodal 第 8 章",
     "resolved": true
    },
    {
     "from": "agent-lowcode",
     "to": "solution-patterns#sp-cheatsheet",
     "why": "平台是各场景方案的落地工具层；「有没有平台」在 Solution-Patterns 分诊树中指回本章（模块 2026-07-10 建成，原「候选」补实）",
     "resolved": true
    },
    {
     "from": "agent-memory",
     "to": "security#sec-agentic / rag#rag-what-why",
     "why": "记忆投毒防线与 Security 第 5 章「记忆投毒」同源展开；记忆 vs RAG 边界 = 用户交互史 vs 组织知识",
     "resolved": true
    },
    {
     "from": "agent-computer-use",
     "to": "multimodal#mm-what-why / security#sec-prompt-injection",
     "why": "视觉感知是 CU 前提（第 2 章串联页已埋\"computer use 前提\"）；屏幕内容 = 新注入面",
     "resolved": true
    },
    {
     "from": "agent-subagent",
     "to": "agent#agent-orchestration",
     "why": "模块内串联：orchestrator-workers 是模式（蓝图），sub-agent 是 coding agent 产品里的机制（车间）；两章互指",
     "resolved": true
    },
    {
     "from": "agent-subagent",
     "to": "agent#agent-context",
     "why": "模块内串联：上下文隔离是第 5 章「子 agent」板斧的机制展开；任务书自包含 = 上下文工程纪律",
     "resolved": true
    },
    {
     "from": "agent-cheatsheet",
     "to": "（全库）",
     "why": "启用条件决策树与串联地图；替代 v1.0 全书串联页（旧页随 2026-07-11 历史版本存档）",
     "resolved": false
    }
   ],
   "web": "./agent/index.html",
   "questions": [
    {
     "id": "q-agent-1",
     "q": "Agent 和普通的对话机器人到底有什么区别？",
     "added": "2026-07-07",
     "chapters": [
      "agent-what-why"
     ]
    },
    {
     "id": "q-agent-2",
     "q": "是不是所有场景都该升级成 agent？",
     "added": "2026-07-07",
     "chapters": [
      "advisor",
      "agent-what-why",
      "agent-cheatsheet"
     ]
    },
    {
     "id": "q-agent-3",
     "q": "模型会不会直接操作我们的生产系统？",
     "added": "2026-07-07",
     "chapters": [
      "agent-components",
      "agent-tools-mcp"
     ]
    },
    {
     "id": "q-agent-4",
     "q": "多个 agent 是不是一定比一个强？",
     "added": "2026-07-07",
     "chapters": [
      "agent-orchestration",
      "agent-subagent"
     ]
    },
    {
     "id": "q-agent-5",
     "q": "现在模型上下文都百万级了，还需要上下文工程吗？",
     "added": "2026-07-07",
     "chapters": [
      "agent-context"
     ]
    },
    {
     "id": "q-agent-6",
     "q": "怎么证明 agent 上线后不会出乱子？",
     "added": "2026-07-07",
     "chapters": [
      "agent-eval-guardrails",
      "agent-cheatsheet"
     ]
    },
    {
     "id": "q-agent-7",
     "q": "Dify 是开源的，我们为什么要付钱？",
     "added": "2026-07-10",
     "chapters": [
      "agent-lowcode"
     ]
    },
    {
     "id": "q-agent-8",
     "q": "Agent 的记忆会不会被人「教坏」？",
     "added": "2026-07-11",
     "chapters": [
      "agent-memory"
     ]
    },
    {
     "id": "q-agent-9",
     "q": "Computer Use 和 RPA 有什么区别？我们已经买了 RPA。",
     "added": "2026-07-11",
     "chapters": [
      "agent-computer-use"
     ]
    },
    {
     "id": "q-agent-10",
     "q": "Sub-agent 会不会把费用跑爆？",
     "added": "2026-07-17",
     "chapters": [
      "agent-subagent"
     ]
    },
    {
     "id": "q-agent-11",
     "q": "怎么保证某个 sub-agent 每次都被调用？",
     "added": "2026-07-17",
     "chapters": [
      "agent-subagent",
      "src-subagent"
     ]
    },
    {
     "id": "q-agent-12",
     "q": "万一它自己干错了事，谁负责？出了问题怎么查？",
     "added": "2026-07-23",
     "chapters": [
      "agent-eval-guardrails",
      "agent-cheatsheet"
     ]
    },
    {
     "id": "q-agent-13",
     "q": "这套跑起来一个月要花多少钱？",
     "added": "2026-07-23",
     "chapters": [
      "agent-subagent",
      "agent-subagent",
      "agent-computer-use",
      "agent-context"
     ]
    },
    {
     "id": "q-agent-14",
     "q": "以后换模型、换平台，是不是整套都要重做？",
     "added": "2026-07-23",
     "chapters": [
      "agent-lowcode",
      "agent-tools-mcp",
      "agent-orchestration"
     ]
    },
    {
     "id": "q-agent-15",
     "q": "能不能就交给它自己干，不用人盯着？",
     "added": "2026-07-23",
     "chapters": [
      "agent-what-why",
      "agent-eval-guardrails"
     ]
    }
   ]
  },
  {
   "id": "data-engineering",
   "dir": "Data-Engineering",
   "layer": "数据底座层",
   "created": "2026-07-11",
   "updated": "2026-08-02",
   "chapters": [
    {
     "id": "de-what-why",
     "no": "第 1 章",
     "title": "数据就绪度是第一风险（四问 / 管线总图 / 报价项）",
     "verified": "2026-07-11"
    },
    {
     "id": "de-parsing",
     "no": "第 2 章",
     "title": "文档解析管线（四强格局 / 基准口径 / 选型分水岭）",
     "verified": "2026-07-11"
    },
    {
     "id": "de-pipeline",
     "no": "第 3 章",
     "title": "连接器与增量同步（五件事 / 增量三模式 / 去重失效）",
     "verified": "2026-07-11"
    },
    {
     "id": "de-vectordb",
     "no": "第 4 章",
     "title": "向量库选型深潜（五锚点 / 按规模演进 / 迁移纪律）",
     "verified": "2026-07-11"
    },
    {
     "id": "de-quality",
     "no": "第 5 章",
     "title": "数据质量与覆盖率（四指标 / 坏答案回流 / 运营节奏）",
     "verified": "2026-07-11"
    },
    {
     "id": "de-labeling",
     "no": "第 6 章",
     "title": "标注与合成数据运营（预算三去向 / 双线运营 / 分流口诀）",
     "verified": "2026-07-11"
    },
    {
     "id": "de-governance",
     "no": "第 7 章",
     "title": "治理与权限衔接（三执行点 / 越权测试 / 向量化≠匿名化）",
     "verified": "2026-07-11"
    },
    {
     "id": "de-cheatsheet",
     "no": "第 8 章",
     "title": "售前速查（管线总图 / 工具速查 / 八坑清单 / 串联）",
     "verified": "2026-07-11"
    }
   ],
   "facts": [
    {
     "text": "解析四强：LlamaParse（VLM 托管、agentic OCR、<1000 页/天甜区）/ Docling（IBM 开源、AI 版面检测）/ MinerU（OpenDataLab，**2.5 起改走 1.2B 视觉语言模型路线**，当前主力模型 MinerU2.5-Pro-2605-1.2B；**3.1.0 起许可由 AGPLv3 改为基于 Apache 2.0 的自有开源许可**，商用门槛明显降低）/ Unstructured；云文档智能三家为企业默认起点",
     "chapter": "de-parsing",
     "verified": "2026-08-01",
     "source": "github.com/opendatalab/MinerU README「Changelog」：3.1.0（2026-04-18 许可变更 + 换 2604 模型）、3.3（2026-06-11 换 2605 模型）、3.4（2026-06-18 OCR 换 PP-OCRv6）；建议复查日 2026-11-30",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-30"
    },
    {
     "text": "**基准要看两榜、不能用单一排序下结论**：OmniDocBench v1.6 端到端 Overall——MinerU2.5-Pro 95.75、MinerU 管线后端 86.47、Marker 78.44（榜首是 PaddleOCR-VL-1.6 的 96.34，Docling 未列入该版榜）；olmOCR-bench——Marker 2（balanced）76.0 > MinerU 管线后端 72.7 > Docling 50.3。两榜排序不一致的原因有二：**维护方各是当事人**（OmniDocBench 由 MinerU 同门的 OpenDataLab 维护；olmOCR-bench 题库虽是 Ai2 第三方，但这组分数由 Marker 作者 Datalab 自跑），**测的后端也不同**（Datalab 自己注明比的是「文本层管线」这一档，MinerU 的视觉语言模型后端分数更高）。旧登记的「opendataloader-bench 上 Docling 0.877 居首」已作废",
     "chapter": "de-parsing",
     "verified": "2026-08-01",
     "source": "github.com/opendatalab/OmniDocBench README 端到端榜（v1.6，2026-04-10 更新）；github.com/datalab-to/marker README 基准表（olmOCR-bench 自跑，附可复现 harness）；建议复查日 2026-11-30",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-30"
    },
    {
     "text": "向量库口径：pgvector 生产上限约 50–100M 向量（HNSW 重建成瓶颈）；Qdrant p50 4ms/p99 25ms、过滤最强开源；Milvus/Zilliz 十亿级；Weaviate/ES 原生混合最成熟；Pinecone 等托管按量",
     "chapter": "de-vectordb",
     "verified": "2026-07-11",
     "source": "firecrawl / layerbase / encore 2026 对比",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-09"
    },
    {
     "text": "选型共识：已有 Postgres→pgvector、有 ES→就地升级、重过滤→Qdrant、十亿级→Milvus、免运维→托管",
     "chapter": "de-vectordb",
     "verified": "2026-07-11",
     "source": "同上（\"100+ 企业部署决策指南\"口径）",
     "recheck": "—",
     "grade": "B",
     "cadence": "180",
     "due": "2027-01-07"
    },
    {
     "text": "增量同步三模式（轮询/webhook/CDC）与连接器五件事（认证/拉取/解析/ACL/增量）为工程量估算框架；成熟源参照 Airbyte 模式",
     "chapter": "de-pipeline",
     "verified": "2026-07-11",
     "source": "dbt/Airbyte 文档模式（稳定工程共识）",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-07"
    },
    {
     "text": "治理工具锚点：OpenLineage 1.52.0（2026-07-23，Run/Job/Dataset 三实体 + facets）、OPA v1.19.0（2026-07-30）；注意血缘解释「数据怎么来」≠ 访问控制。**本行 2026-08-01 从「稳定事实」表挪回本表**——带版本号的行天然会漂，放在免巡检表里每轮都要靠补审兜底（2026-08-01 巡检结构小修，两处同批：另一处是 AIP 的 KServe/Kueue 行）",
     "chapter": "de-governance",
     "verified": "2026-08-01",
     "source": "github.com/OpenLineage/OpenLineage releases、github.com/open-policy-agent/opa releases；建议复查日随季度巡检（版本号周级漂移，讲义与网页均未写版本号，只有本表登记）",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-30"
    }
   ],
   "edges": [
    {
     "from": "de-pipeline",
     "to": "predictive-ai-mlops#pam-features-time",
     "why": "反向回指（2026-08-02 新模块建立）：上下游：数据怎么进来、怎么增量同步归 DE，本册接手的是同一份数据被当成特征时的时间语义与点时取数",
     "resolved": true
    },
    {
     "from": "de-quality",
     "to": "predictive-ai-mlops#pam-monitoring",
     "why": "反向回指（2026-08-02 新模块建立）：七类信号里第一类「数据质量故障」的检查项与责任面在 DE 第 5 章，本册只讲怎么把它和漂移信号分开——分不开就",
     "resolved": true
    },
    {
     "from": "de-governance",
     "to": "ai-governance#gov-impact",
     "why": "反向回指（2026-08-02 新模块建立）：影响评估产出的数据约束（哪些特征不许进、必须留哪种记录、最小化到什么程度）由数据侧执行；执行点、权限与越权测试在",
     "resolved": true
    },
    {
     "from": "de-what-why",
     "to": "solution-patterns#sp-method",
     "why": "SP 说「数据坑是第一风险」，本模块把它变成显性工程件与报价项（双向）",
     "resolved": true
    },
    {
     "from": "de-parsing",
     "to": "rag#rag-chunking",
     "why": "解析产物交给 RAG 切分：解析质量决定切分质量——上游下游（双向）",
     "resolved": true
    },
    {
     "from": "de-pipeline",
     "to": "solution-patterns#sp-knowledge-search",
     "why": "SP 说「连接器是报价大头」，本章给五件事工程清单（双向）",
     "resolved": true
    },
    {
     "from": "de-vectordb",
     "to": "rag#rag-embedding",
     "why": "RAG 第 2 章讲原理与起步，本章讲规模化选型与迁移",
     "resolved": true
    },
    {
     "from": "de-quality",
     "to": "ai-ops#ops-online-eval",
     "why": "坏答案由 AI-Ops 在线评估抓到，归因到数据层由本章接住；运营节奏合并交付",
     "resolved": true
    },
    {
     "from": "de-labeling",
     "to": "fine-tuning#ft-data / evaluation#eval-build",
     "why": "配方在 Fine-tuning、评估集方法在 Evaluation；本章管预算与双线运营",
     "resolved": true
    },
    {
     "from": "de-governance",
     "to": "security#sec-data-privacy",
     "why": "Security 定规则，本章是数据管线上的三个执行点；越权测试集同 SP 第 4 章验收",
     "resolved": true
    }
   ],
   "web": "./data-engineering/index.html",
   "questions": [
    {
     "id": "q-data-engineering-1",
     "q": "我们数据很乱，AI 项目是不是做不了？",
     "added": "2026-07-11",
     "chapters": [
      "readiness",
      "de-what-why"
     ]
    },
    {
     "id": "q-data-engineering-2",
     "q": "我们全是扫描件和图纸，能处理吗？",
     "added": "2026-07-11",
     "chapters": [
      "de-parsing"
     ]
    },
    {
     "id": "q-data-engineering-3",
     "q": "接一个系统要多久？数据多久能同步一次？",
     "added": "2026-07-11",
     "chapters": [
      "de-pipeline"
     ]
    },
    {
     "id": "q-data-engineering-4",
     "q": "要不要专门买一套向量数据库？",
     "added": "2026-07-11",
     "chapters": [
      "de-vectordb"
     ]
    },
    {
     "id": "q-data-engineering-5",
     "q": "AI 老答错，是不是模型不行？",
     "added": "2026-07-11",
     "chapters": [
      "de-quality"
     ]
    },
    {
     "id": "q-data-engineering-6",
     "q": "标注要雇多少人？合成数据可靠吗？",
     "added": "2026-07-11",
     "chapters": [
      "de-labeling"
     ]
    },
    {
     "id": "q-data-engineering-7",
     "q": "数据向量化之后是不是就安全了？删除能真删干净吗？",
     "added": "2026-07-11",
     "chapters": [
      "de-governance"
     ]
    },
    {
     "id": "q-data-engineering-8",
     "q": "先做个 POC——数据这块怎么算做完了？拿什么验收？",
     "added": "2026-07-23",
     "chapters": [
      "de-governance",
      "de-quality"
     ]
    },
    {
     "id": "q-data-engineering-9",
     "q": "覆盖率、准确率你们能承诺到多少？先给个数。",
     "added": "2026-07-23",
     "chapters": [
      "de-quality"
     ]
    },
    {
     "id": "q-data-engineering-10",
     "q": "上线之后这套谁来维护？每个月还要养几个人？",
     "added": "2026-07-23",
     "chapters": [
      "de-quality",
      "de-pipeline"
     ]
    }
   ]
  },
  {
   "id": "evaluation",
   "dir": "Evaluation",
   "layer": "工程保障层",
   "created": "2026-07-09",
   "updated": "2026-08-02",
   "chapters": [
    {
     "id": "eval-why-hard",
     "no": "第 1 章",
     "title": "为什么评估这么难",
     "verified": "2026-07-09"
    },
    {
     "id": "eval-benchmarks",
     "no": "第 2 章",
     "title": "模型基准测试全景",
     "verified": "2026-07-09"
    },
    {
     "id": "eval-methods",
     "no": "第 3 章",
     "title": "评估方法谱系",
     "verified": "2026-07-09"
    },
    {
     "id": "eval-judge",
     "no": "第 4 章",
     "title": "LLM-as-a-Judge 深潜",
     "verified": "2026-07-09"
    },
    {
     "id": "eval-build",
     "no": "第 5 章",
     "title": "自建评估:数据集与指标设计",
     "verified": "2026-07-09"
    },
    {
     "id": "eval-scenarios",
     "no": "第 6 章",
     "title": "场景验收:RAG / Agent / 微调",
     "verified": "2026-07-09"
    },
    {
     "id": "eval-tooling",
     "no": "第 7 章",
     "title": "评估工具链与生产闭环",
     "verified": "2026-07-09"
    },
    {
     "id": "eval-cheatsheet",
     "no": "第 8 章",
     "title": "售前速查",
     "verified": "2026-07-09"
    }
   ],
   "facts": [
    {
     "text": "MMLU / MMLU-Pro 已功能性饱和,前沿模型普遍 88%+,顶部无区分度",
     "chapter": "eval-benchmarks",
     "verified": "2026-07-09",
     "source": "techjacksolutions / kili-technology 2026 基准综述",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "GPQA Diamond 头部分数:Sakana Fugu-Ultra 95.5 / GPT-5.6 Sol 94.6 / Gemini 3.1 Pro 94.3 / Claude Opus 4.7 94.2,前十差距仅 2.7 分、区分度收窄(BenchLM 2026-07-31 榜口径;各榜互差约 1 分)",
     "chapter": "eval-benchmarks",
     "verified": "2026-08-01",
     "source": "benchlm.ai/benchmarks/gpqaDiamond;建议复查 2026-09-05",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-31"
    },
    {
     "text": "HLE 前沿模型约 45~65%(带工具/纯文本各榜口径不一:llm-stats 2026-07-27 榜首 53.3,BenchLM 带工具口径 64.5),人类专家约 90%,仍是区分度最好的知识型基准之一",
     "chapter": "eval-benchmarks",
     "verified": "2026-08-01",
     "source": "llm-stats.com / benchlm.ai/benchmarks/hle;建议复查 2026-09-05",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-31"
    },
    {
     "text": "Agent 基准主战场:SWE-bench Verified / Terminal-Bench 2.1(2026-05-06 发布的修订版,沿用 89 任务、修复 28 题并引入持续校验)/ τ²-bench / OSWorld;BFCL v4(2026-04)改 Agentic 加权 40%",
     "chapter": "eval-benchmarks",
     "verified": "2026-08-01",
     "source": "tbench.ai/news + tbench.ai/registry(2.1 官方发布);arXiv 2601.11868;建议复查 2026-11-01",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-30"
    },
    {
     "text": "2026-08 头部格局:Claude Opus 5(2026-07-24 发布)以 96% 领跑 SWE-bench Verified(BenchLM 2026-07-31 榜);GPT-5.6(2026-07-09 公开,Sol/Terra/Luna 三档)与 Gemini 3.5 家族(2026-07-21 发 3.6 Flash / 3.5 Flash-Lite / 3.5 Flash Cyber,无 3.5 Pro)已上线,GPT-5.5 仍现役;OpenAI 2026-02-23 以污染为由停报 SWE-bench Verified、改推 SWE-bench Pro,又于 2026-07-08 官方撤回该推荐(约 30% 任务损坏)",
     "chapter": "eval-benchmarks",
     "verified": "2026-08-01",
     "source": "anthropic.com/news/claude-opus-5 / benchlm.ai/benchmarks/sweVerified / openai.com/index/gpt-5-6 / openai.com/index/why-we-no-longer-evaluate-swe-bench-verified / OpenAI 官方 X(2026-07-08 撤荐声明);建议复查 2026-09-05",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-31"
    },
    {
     "text": "Chatbot Arena → LMArena → Arena(2026-01 更名),累计 600 万+ 投票,估值 17 亿美元",
     "chapter": "eval-benchmarks",
     "verified": "2026-07-09",
     "source": "openlm.ai / news.lmarena.ai",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "《The Leaderboard Illusion》(2025):厂商私测多变体择优公开,曾有厂商私测 27 变体只公开最优",
     "chapter": "eval-benchmarks",
     "verified": "2026-07-09",
     "source": "arXiv 2504.20879 / openreview",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-05"
    },
    {
     "text": "判官三大偏差:位置(换序判决漂移 >10%)、冗长(无新信息加长版被偏好 >90%)、自我偏好(与困惑度相关)",
     "chapter": "eval-judge",
     "verified": "2026-07-09",
     "source": "arXiv 2306.05685 / 2410.21819 / 2410.02736",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-05"
    },
    {
     "text": "Judge Reliability Harness(2026-03 开源)结论:无判官全面可靠,可靠性是逐任务属性",
     "chapter": "eval-judge",
     "verified": "2026-07-09",
     "source": "adaline / emergentmind 2026",
     "recheck": "—",
     "grade": "B",
     "cadence": "180",
     "due": "2027-01-05"
    },
    {
     "text": "开发期开源框架格局:Ragas(RAG 专项)/ DeepEval(50+ 指标, pytest CI)/ promptfoo(矩阵+红队 40+ 插件)",
     "chapter": "eval-tooling",
     "verified": "2026-07-09",
     "source": "confident-ai / genai.qa / aiml.qa 2026 对比",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "OpenAI 平台内置 Evals:2026-10-31 起只读,2026-11-30 关停",
     "chapter": "eval-tooling",
     "verified": "2026-07-09",
     "source": "developers.openai.com 官方文档",
     "recheck": "2026-10-31",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "三大云托管评估服务:AWS Bedrock 模型评估作业 / Azure AI Foundry 评估器 / Vertex AI Gen AI 评估服务",
     "chapter": "eval-tooling",
     "verified": "2026-07-09",
     "source": "internative / bitslovers / epcgroup 2026 平台对比",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    }
   ],
   "edges": [
    {
     "from": "eval-build",
     "to": "predictive-ai-mlops#pam-problem-framing",
     "why": "反向回指（2026-08-02 新模块建立）：对照关系：Evaluation 讲没有客观真值时怎么建集、怎么判分，本册讲有客观真值时指标怎么挑、离线指标涨了业",
     "resolved": true
    },
    {
     "from": "eval-build",
     "to": "ai-governance#gov-evidence",
     "why": "反向回指（2026-08-02 新模块建立）：证据包里「测过什么、结果多少」由 Evaluation 产出；本册只规定哪一档用途必须附哪几类测量证据、证据绑到",
     "resolved": true
    },
    {
     "from": "eval-methods",
     "to": "pe#pe-engineering",
     "why": "提示词的评估驱动优化用本模块判分四法 / LLM-as-a-Judge；讲义已加「与 Prompt Engineering 的关系」页回指",
     "resolved": true
    },
    {
     "from": "eval-scenarios",
     "to": "rag#rag-eval",
     "why": "RAG 检索质量指标在本模块收编为「场景验收」并补全端到端方法",
     "resolved": true
    },
    {
     "from": "eval-scenarios",
     "to": "agent#agent-eval",
     "why": "Agent「评估与护栏」提出「要评」,本模块给出轨迹/结果分层的「怎么评」",
     "resolved": true
    },
    {
     "from": "eval-scenarios",
     "to": "fine-tuning#ft-eval-deploy",
     "why": "微调验收四层与回归门禁在本模块展开成完整验收方案",
     "resolved": true
    },
    {
     "from": "eval-benchmarks",
     "to": "llm-training#评估章",
     "why": "模型厂「炼模型时评什么」vs 应用方「选模型时评什么」,视角互补",
     "resolved": true
    },
    {
     "from": "eval-why-hard",
     "to": "llm-inference#性能指标",
     "why": "边界声明:质量归本模块,延迟/吞吐归 LLM-Inference",
     "resolved": true
    },
    {
     "from": "eval-scenarios",
     "to": "security#sec-defense",
     "why": "安全维度验收(注入抵抗率、有害内容率)由 Security 模块第 6 章红队产出并回流,候选边已兑现(2026-07-09)",
     "resolved": true
    },
    {
     "from": "eval-benchmarks",
     "to": "model-landscape#ml-selection",
     "why": "本模块讲\"榜单怎么骗人/怎么自建评估\",Model-Landscape 第 8 章把它用作选型两道防线——双向互指(2026-07-10)",
     "resolved": true
    },
    {
     "from": "eval-build / eval-judge",
     "to": "ai-ops#ops-online-eval",
     "why": "全库最强新搭档:本模块给离线建集与判官方法,AI-Ops 第 3 章做在线采样运营(共享判分器定义)——双向互指(2026-07-10)",
     "resolved": true
    }
   ],
   "web": "./evaluation/index.html",
   "questions": [
    {
     "id": "q-evaluation-1",
     "q": "你们模型在榜单上分数很高，是不是拿来就好用？",
     "added": "2026-07-09",
     "chapters": [
      "eval-why-hard",
      "eval-cheatsheet"
     ]
    },
    {
     "id": "q-evaluation-2",
     "q": "让 AI 评 AI，靠谱吗？",
     "added": "2026-07-09",
     "chapters": [
      "eval-judge",
      "src-jrh"
     ]
    },
    {
     "id": "q-evaluation-3",
     "q": "判官会不会偏向你们自家模型？",
     "added": "2026-07-09",
     "chapters": [
      "eval-judge"
     ]
    },
    {
     "id": "q-evaluation-4",
     "q": "我们没数据、没标注团队，评估怎么起步？",
     "added": "2026-07-09",
     "chapters": [
      "eval-build"
     ]
    },
    {
     "id": "q-evaluation-5",
     "q": "RAG 答错了，怎么知道是检索还是生成的锅？",
     "added": "2026-07-09",
     "chapters": [
      "eval-scenarios"
     ]
    },
    {
     "id": "q-evaluation-6",
     "q": "Agent 这种多步任务怎么验收？",
     "added": "2026-07-12",
     "chapters": [
      "eval-scenarios"
     ]
    },
    {
     "id": "q-evaluation-7",
     "q": "微调完的模型，怎么证明没有「变笨」？",
     "added": "2026-07-09",
     "chapters": [
      "eval-scenarios"
     ]
    },
    {
     "id": "q-evaluation-8",
     "q": "万一评估平台以后停服了怎么办？",
     "added": "2026-07-09",
     "chapters": [
      "eval-tooling",
      "src-openai-evals"
     ]
    },
    {
     "id": "q-evaluation-9",
     "q": "评估体系建起来要多久、多少钱？",
     "added": "2026-07-09",
     "chapters": [
      "eval-build",
      "eval-tooling"
     ]
    },
    {
     "id": "q-evaluation-10",
     "q": "有了护栏是不是就不用评估了？",
     "added": "2026-07-09",
     "chapters": [
      "eval-scenarios",
      "eval-tooling"
     ]
    },
    {
     "id": "q-evaluation-11",
     "q": "我们已经有测试团队和 QA 流程了，为什么还要单建一套？",
     "added": "2026-07-23",
     "chapters": [
      "eval-why-hard",
      "eval-build"
     ]
    },
    {
     "id": "q-evaluation-12",
     "q": "评估都做了，线上还是出问题——那这套评估有什么用？",
     "added": "2026-07-23",
     "chapters": [
      "eval-why-hard",
      "eval-tooling"
     ]
    }
   ]
  },
  {
   "id": "fine-tuning",
   "dir": "Fine-tuning",
   "layer": "工程保障层",
   "created": "2026-07-09",
   "updated": "2026-08-01",
   "chapters": [
    {
     "id": "ft-when",
     "no": "第 1 章",
     "title": "什么时候该微调",
     "verified": "2026-07-09"
    },
    {
     "id": "ft-methods",
     "no": "第 2 章",
     "title": "微调方法谱系（全参 / LoRA / QLoRA）",
     "verified": "2026-07-09"
    },
    {
     "id": "ft-data",
     "no": "第 3 章",
     "title": "数据准备：微调成败在此",
     "verified": "2026-07-09"
    },
    {
     "id": "ft-training",
     "no": "第 4 章",
     "title": "训练实操与框架图鉴",
     "verified": "2026-08-01"
    },
    {
     "id": "ft-alignment",
     "no": "第 5 章",
     "title": "偏好对齐落地（DPO / RFT）",
     "verified": "2026-07-09"
    },
    {
     "id": "ft-cloud",
     "no": "第 6 章",
     "title": "托管微调服务与上云落地",
     "verified": "2026-08-01"
    },
    {
     "id": "ft-eval-deploy",
     "no": "第 7 章",
     "title": "评估与部署",
     "verified": "2026-07-09"
    },
    {
     "id": "ft-field-guide",
     "no": "第 8 章",
     "title": "售前速查",
     "verified": "2026-07-09"
    }
   ],
   "facts": [
    {
     "text": "OpenAI 微调平台收摊（官方挂「winding down」告示）：新组织 2026-05-07 起不能创建微调任务、60 天内未跑微调推理的组织 2026-07-02 起停止新建、存量活跃客户 2027-01-06 后停止新建；存量微调模型推理保留到对应底座退役（建议复查日 2026-10-31，收摊推进随官方页滚动）",
     "chapter": "ft-cloud",
     "verified": "2026-08-01",
     "source": "developers.openai.com/api/docs/deprecations、model-optimization 指南",
     "recheck": "2026-10-31",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-30"
    },
    {
     "text": "Claude 微调唯一托管路径：Amazon Bedrock 上 Claude 3 Haiku SFT（us-west-2）；官方建议 50–10,000 条样本",
     "chapter": "ft-cloud",
     "verified": "2026-07-09",
     "source": "AWS 官方博客、Claude Cookbook",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "三大云格局：Vertex 微调形态最灵活（全参/LoRA/adapter）；Azure AI Foundry 蒸馏 GA（GPT-4o→Phi-4）；AWS Bedrock 托管 + SageMaker 兜底",
     "chapter": "ft-cloud",
     "verified": "2026-07-09",
     "source": "平台官方与 2026 对比评测",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "开源框架四强功能趋同，stars（2026-07）：LLaMA-Factory ~68K、Unsloth ~54K、TRL ~18K、Axolotl ~11K",
     "chapter": "ft-training",
     "verified": "2026-07-09",
     "source": "GitHub、框架对比评测",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "PEFT 稳定版 v0.20.0（2026-07-28，一次新增 9 种 PEFT 方法）；0.18.0+ 起才兼容 Transformers v5、要求 Python 3.10+（老环境升级边界）（建议复查日随季度巡检，版本号周级漂移）",
     "chapter": "ft-training",
     "verified": "2026-08-01",
     "source": "github.com/huggingface/peft/releases",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-30"
    },
    {
     "text": "TRL v1.9.2（2026-07-28）；KTO 自 v1.8.0（2026-07-09）起转正为顶层 API（旧导入路径 v2.0 前发 FutureWarning）（建议复查日随季度巡检，版本号周级漂移）",
     "chapter": "ft-training",
     "verified": "2026-08-01",
     "source": "github.com/huggingface/trl/releases",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-30"
    },
    {
     "text": "vLLM 动态加载 LoRA adapter 有官方安全警告：仅限隔离、完全受信环境（需显式开 VLLM_ALLOW_RUNTIME_LORA_UPDATING）",
     "chapter": "ft-eval-deploy",
     "verified": "2026-07-12",
     "source": "docs.vllm.ai/en/stable/features/lora/",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-10"
    },
    {
     "text": "Unsloth 宣称较 HF+FA2 快 2×、省 70% 显存；3GB 显存可玩，Colab/Kaggle 免费笔记本生态",
     "chapter": "ft-training",
     "verified": "2026-07-09",
     "source": "Unsloth 官方文档",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "RFT（可验证奖励微调）为 2026 年微调新风向；开源侧主力算法 GRPO",
     "chapter": "ft-alignment",
     "verified": "2026-07-09",
     "source": "OpenAI RFT 文档、行业综述",
     "recheck": "—",
     "grade": "B",
     "cadence": "180",
     "due": "2027-01-05"
    },
    {
     "text": "显存量级：7B 全参约 110GB（多卡）；QLoRA 后 6–8GB 单张消费卡可跑，70B 可入单张 48GB 卡",
     "chapter": "ft-methods",
     "verified": "2026-07-09",
     "source": "QLoRA 论文、2026 实践指南",
     "recheck": "—",
     "grade": "B",
     "cadence": "180",
     "due": "2027-01-05"
    },
    {
     "text": "合成数据 + 蒸馏为微调数据主流来源（种子→扩展→judge 过滤）；DeepSeek-R1/Qwen 蒸馏系小模型涌现",
     "chapter": "ft-data",
     "verified": "2026-07-09",
     "source": "行业综述、Azure/厂商公告",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    }
   ],
   "edges": [
    {
     "from": "ft-eval-deploy",
     "to": "predictive-ai-mlops#pam-lifecycle",
     "why": "反向回指（2026-08-02 新模块建立）：「训练」这个词两边指的不是一回事：那边是拿自己数据改 LLM 权重、产物是 adapter，本册是从头拟合一个预",
     "resolved": true
    },
    {
     "from": "ft-when",
     "to": "pe#pe-what-why",
     "why": "选型链两端：提示词到头才微调；讲义已加「与 Prompt Engineering 的关系」页回指",
     "resolved": true
    },
    {
     "from": "ft-when",
     "to": "rag#rag-what-why",
     "why": "「微调 vs RAG」互为镜像：RAG 从应用侧答，本章从微调侧收口（讲义第 1 章有专页）",
     "resolved": true
    },
    {
     "from": "ft-methods",
     "to": "llm-training#llmtrain-sft",
     "why": "SFT 原理在那边，「拿自己数据落地」的方法选择在这边",
     "resolved": true
    },
    {
     "from": "ft-alignment",
     "to": "llm-training#llmtrain-alignment",
     "why": "对齐原理（奖励模型/RLHF）↔ 落地选择（DPO/RFT 决策表）",
     "resolved": true
    },
    {
     "from": "ft-alignment",
     "to": "llm-training#llmtrain-reasoning",
     "why": "RFT/GRPO 的训练侧原理与推理模型脉络在那边",
     "resolved": true
    },
    {
     "from": "ft-data",
     "to": "llm-training#llmtrain-data",
     "why": "合成数据两侧互参：那边讲预训练/后训练语料，这边讲微调数据流水线",
     "resolved": true
    },
    {
     "from": "ft-eval-deploy",
     "to": "llm-inference#llminf-engines",
     "why": "微调产物经 vLLM 多 LoRA adapter 部署进推理服务（讲义第 7 章有承接页）",
     "resolved": true
    },
    {
     "from": "ft-eval-deploy",
     "to": "llm-inference#llminf-quant",
     "why": "微调后部署常配量化，质量门禁两边口径一致",
     "resolved": true
    },
    {
     "from": "ft-eval-deploy",
     "to": "（候选）Evaluation",
     "why": "微调验收这条评估线，与 RAG/Agent/LLM-Training 三条共同待 Evaluation 模块收编",
     "resolved": false
    },
    {
     "from": "ft-cloud",
     "to": "ai-infra-platform#aip-cloud",
     "why": "云上托管训练/微调形态（HyperPod/Vertex/PAI 类）两边互指：本章从微调视角、对方从平台形态视角（2026-07-09 补）",
     "resolved": true
    }
   ],
   "web": "./fine-tuning/index.html",
   "questions": [
    {
     "id": "q-fine-tuning-1",
     "q": "30 秒说清：提示词、RAG、微调怎么选？",
     "added": "2026-07-09",
     "chapters": [
      "advisor",
      "ft-when"
     ]
    },
    {
     "id": "q-fine-tuning-2",
     "q": "要多少数据、多少钱、多久见效？",
     "added": "2026-07-09",
     "chapters": [
      "ft-data",
      "ft-training"
     ]
    },
    {
     "id": "q-fine-tuning-3",
     "q": "微调会不会把模型调笨？",
     "added": "2026-07-09",
     "chapters": [
      "ft-methods",
      "ft-eval-deploy"
     ]
    },
    {
     "id": "q-fine-tuning-4",
     "q": "GPT / Claude / 开源，微调路径分别是什么？",
     "added": "2026-07-09",
     "chapters": [
      "ft-cloud",
      "src-cloud-ft"
     ]
    },
    {
     "id": "q-fine-tuning-5",
     "q": "SFT 和 DPO 我们都要做吗？",
     "added": "2026-07-09",
     "chapters": [
      "ft-alignment"
     ]
    },
    {
     "id": "q-fine-tuning-6",
     "q": "怎么证明微调真的有效？",
     "added": "2026-07-09",
     "chapters": [
      "ft-eval-deploy"
     ]
    },
    {
     "id": "q-fine-tuning-7",
     "q": "怎么灰度？出问题怎么回滚？",
     "added": "2026-07-13",
     "chapters": [
      "ft-eval-deploy"
     ]
    },
    {
     "id": "q-fine-tuning-8",
     "q": "用 GPT 生成的数据训我们的模型，合规吗？",
     "added": "2026-07-09",
     "chapters": [
      "ft-data"
     ]
    },
    {
     "id": "q-fine-tuning-9",
     "q": "我们想微调一个自己的模型。",
     "added": "2026-07-23",
     "chapters": [
      "advisor",
      "ft-when"
     ]
    },
    {
     "id": "q-fine-tuning-10",
     "q": "数据交给你们训练，会不会泄露？会不会拿去喂别人的模型？",
     "added": "2026-07-23",
     "chapters": [
      "ft-data",
      "ft-cloud"
     ]
    },
    {
     "id": "q-fine-tuning-11",
     "q": "过两个月基座模型升级了，我这次微调是不是白做了？",
     "added": "2026-07-23",
     "chapters": [
      "ft-eval-deploy",
      "ft-methods"
     ]
    }
   ]
  },
  {
   "id": "llm",
   "dir": "LLM",
   "layer": "基础层",
   "created": "2026-07-08",
   "updated": "2026-08-02",
   "chapters": [
    {
     "id": "llm-why-transformer",
     "no": "第 1 章",
     "title": "从序列问题到 Transformer",
     "verified": "2026-07-08"
    },
    {
     "id": "llm-attention-qkv",
     "no": "第 2 章",
     "title": "注意力机制：QKV 拆解",
     "verified": "2026-07-08"
    },
    {
     "id": "llm-architecture",
     "no": "第 3 章",
     "title": "Transformer 全解剖",
     "verified": "2026-07-08"
    },
    {
     "id": "llm-inference-kv",
     "no": "第 4 章",
     "title": "从架构到推理：上下文窗口与 KV 缓存",
     "verified": "2026-07-08"
    },
    {
     "id": "llm-attention-zoo",
     "no": "第 5 章",
     "title": "注意力的工程进化",
     "verified": "2026-08-01"
    },
    {
     "id": "llm-presales-map",
     "no": "第 6 章",
     "title": "售前视角收拢",
     "verified": "2026-07-08"
    }
   ],
   "facts": [
    {
     "text": "GQA 8:1 是生产默认（生态支持最全）；MLA 把 KV 缓存压到同级 GQA 的约 1/10，DeepSeek 全系与 GLM-5 在用；Kimi 旗舰已转 KDA 混合——K3 的 93 层 = 69 层 KDA + 24 层 Gated MLA，即每 4 层留 1 层 MLA 兜全局注意力",
     "chapter": "llm-attention-zoo",
     "verified": "2026-08-01",
     "source": "huggingface.co/moonshotai/Kimi-K3 模型卡；K3 技术报告 arXiv 2607.24653（建议复查日 2026-11-01）",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-30"
    },
    {
     "text": "DeepSeek V3.2 的 DSA 稀疏注意力（lightning indexer + top-k，O(L²)→O(Lk)）已生产化，GLM-5 跟进；DeepSeek-V4 用混合压缩注意力冲百万上下文",
     "chapter": "llm-attention-zoo",
     "verified": "2026-07-08",
     "source": "arXiv 2512.02556、arXiv 2512.12087",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-06"
    },
    {
     "text": "线性混合格局是「效率 ↔ 精度」的钟摆：Qwen3-Next 的 3:1 Gated DeltaNet 混合被 Qwen3.5 旗舰转正；Kimi Linear 的通道级门控进化为 KDA，随 Kimi K3（总参 2.8T / 激活 104B / 1M 上下文）进旗舰；MiniMax 则 M1 押线性 → M2 退回全注意力 → M3（2026-06-01）改用 MSA 稀疏注意力——「线性未进旗舰」已翻篇，「纯线性扛不住复杂推理」仍成立",
     "chapter": "llm-attention-zoo",
     "verified": "2026-08-01",
     "source": "huggingface.co/moonshotai/Kimi-K3 模型卡 + arXiv 2607.24653；minimax.io/blog/minimax-m3 + MSA 论文 arXiv 2606.13392（建议复查日 2026-11-01）",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-30"
    },
    {
     "text": "FlashAttention-4：2026-03-05 论文（arXiv 2603.05451），2026-07-01 PyPI 发包，面向 Blackwell 非对称硬件",
     "chapter": "llm-attention-zoo",
     "verified": "2026-07-08",
     "source": "together.ai 博客、pypi.org/project/flash-attn-4",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-06"
    },
    {
     "text": "托管商用模型 13 家提供 ≥1M 上下文窗口（Gemini 3.1 Pro 2M；开源 Llama 4 Scout 标称 10M）；RULER/MRCR v2/NoLiMa 显示多事实检索过 200K 普遍掉 30–60 分",
     "chapter": "llm-inference-kv",
     "verified": "2026-07-08",
     "source": "morphllm.com、ofox.ai 长上下文基准汇总",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-07"
    },
    {
     "text": "视频 token 量级：Gemini 官方口径默认分辨率约 300 token/秒（258/帧 @1fps + 音频 32/秒），1 小时视频 ≈ 108 万 token（建议复查日 2026-10-31，随 Multimodal 巡检顺带）",
     "chapter": "llm-inference-kv",
     "verified": "2026-07-20",
     "source": "ai.google.dev/gemini-api/docs/video-understanding（raw-data/2026-07-20-联网核实笔记-视频token.md）",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-18"
    },
    {
     "text": "RoPE 是主流开源模型位置编码的事实标准；超长上下文靠插值/YaRN 等扩展",
     "chapter": "llm-architecture",
     "verified": "2026-07-08",
     "source": "开源架构对比综述（Raschka）",
     "recheck": "—",
     "grade": "B",
     "cadence": "180",
     "due": "2027-01-04"
    },
    {
     "text": "MoE 为 2026 主流旗舰标配（DeepSeek-V3 总 671B/激活 37B；Qwen3.5、Kimi K2 同路线）",
     "chapter": "llm-architecture",
     "verified": "2026-07-08",
     "source": "DeepSeek-V3 论文、架构对比综述",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-06"
    }
   ],
   "edges": [
    {
     "from": "llm-inference-kv",
     "to": "pe#pe-anatomy",
     "why": "提示词为什么有效的「物理学」基础：上下文窗口 / 注意力决定能放多少、放多准；讲义已加「与 Prompt Engineering 的关系」页回指",
     "resolved": true
    },
    {
     "from": "llm-inference-kv",
     "to": "rag#rag-what-why",
     "why": "「1M 窗口不是 RAG 终结者」：本模块给架构论据（成本/有效性/权限），RAG 第 1 章为应用视角，双向互为弹药",
     "resolved": true
    },
    {
     "from": "llm-inference-kv",
     "to": "agent#agent-context",
     "why": "上下文工程的物理学解释：O(n²) 成本 + 有效窗口约束是 Agent 第 5 章那套做法的根源",
     "resolved": true
    },
    {
     "from": "llm-architecture",
     "to": "llm-training#llmtrain-pretrain",
     "why": "本模块讲 MoE/参数账的架构视角，训练侧故事（Scaling Laws、MoE 训练、FP8）在 LLM-Training 第 3 章展开；对方以 llmtrain-overview/pretrain → llm#llm-why-transformer 回指，互为前置",
     "resolved": true
    },
    {
     "from": "llm-inference-kv",
     "to": "llm-inference#llminf-kv-budget",
     "why": "本章讲 KV 缓存「为什么存在」（机制），LLM-Inference 第 2 章讲「怎么管好」（服务系统），互为前后篇；对方讲义有承上启下页回指本章（2026-07-09 补）；2026-07-20 对话沉淀拆分互指：本章新增「窗口由什么决定／四堵墙」2 页（原理面）↔ 对方第 2 章新增「资源账」3 页（系统面）",
     "resolved": true
    },
    {
     "from": "llm-attention-qkv",
     "to": "multimodal#mm-encoder",
     "why": "ViT = 注意力吃图像：patch 即 token、QKV 原样复用、O(n²) 对图像同样成立；第 2 章已加「承上启下 · 与 Multimodal」页回指（2026-07-10）",
     "resolved": true
    }
   ],
   "web": "./llm/index.html",
   "questions": [
    {
     "id": "q-llm-1",
     "q": "为什么现在的大模型清一色 Transformer？",
     "added": "2026-07-08",
     "chapters": [
      "llm-why-transformer"
     ]
    },
    {
     "id": "q-llm-2",
     "q": "参数量 7B、70B 到底意味着什么？",
     "added": "2026-07-08",
     "chapters": [
      "kvcalc",
      "llm-architecture",
      "llm-inference-kv"
     ]
    },
    {
     "id": "q-llm-3",
     "q": "都有 1M 上下文了，还要 RAG 吗？",
     "added": "2026-07-08",
     "chapters": [
      "llm-inference-kv"
     ]
    },
    {
     "id": "q-llm-4",
     "q": "私有化部署为什么并发上不去？",
     "added": "2026-07-08",
     "chapters": [
      "llm-inference-kv"
     ]
    },
    {
     "id": "q-llm-5",
     "q": "DeepSeek 为什么那么便宜？",
     "added": "2026-07-08",
     "chapters": [
      "llm-attention-zoo"
     ]
    },
    {
     "id": "q-llm-6",
     "q": "被问到完全没听过的架构名词怎么办？",
     "added": "2026-07-08",
     "chapters": [
      "llm-attention-zoo",
      "llm-presales-map"
     ]
    },
    {
     "id": "q-llm-7",
     "q": "模型知识为什么会过时？能打补丁吗？",
     "added": "2026-07-08",
     "chapters": [
      "llm-architecture"
     ]
    },
    {
     "id": "q-llm-8",
     "q": "客户抱怨「AI 又胡说」，怎么系统性接住？",
     "added": "2026-07-13",
     "chapters": [
      "llm-presales-map"
     ]
    },
    {
     "id": "q-llm-9",
     "q": "你们这东西为什么又贵又慢？",
     "added": "2026-07-23",
     "chapters": [
      "llm-inference-kv",
      "llm-presales-map"
     ]
    },
    {
     "id": "q-llm-10",
     "q": "同一个问题问两次，答案不一样——这不是 bug 吗？",
     "added": "2026-07-23",
     "chapters": [
      "llm-inference-kv"
     ]
    },
    {
     "id": "q-llm-11",
     "q": "为什么答一半就停？",
     "added": "2026-07-23",
     "chapters": [
      "llm-inference-kv",
      "llm-presales-map"
     ]
    }
   ]
  },
  {
   "id": "llm-inference",
   "dir": "LLM-Inference",
   "layer": "基础层",
   "created": "2026-07-09",
   "updated": "2026-08-02",
   "chapters": [
    {
     "id": "llminf-anatomy",
     "no": "第 1 章",
     "title": "推理是怎么跑起来的",
     "verified": "2026-07-09"
    },
    {
     "id": "llminf-kv-budget",
     "no": "第 2 章",
     "title": "KV Cache 与显存账",
     "verified": "2026-07-09"
    },
    {
     "id": "llminf-batching",
     "no": "第 3 章",
     "title": "把 GPU 喂饱：批处理与调度",
     "verified": "2026-07-09"
    },
    {
     "id": "llminf-engines",
     "no": "第 4 章",
     "title": "推理框架图鉴",
     "verified": "2026-07-09"
    },
    {
     "id": "llminf-quant",
     "no": "第 5 章",
     "title": "让模型变小：量化",
     "verified": "2026-07-09"
    },
    {
     "id": "llminf-speculative",
     "no": "第 6 章",
     "title": "让模型变快：投机解码与算法加速",
     "verified": "2026-07-09"
    },
    {
     "id": "llminf-disagg",
     "no": "第 7 章",
     "title": "集群级：P/D 分离与分布式推理",
     "verified": "2026-07-09"
    },
    {
     "id": "llminf-production",
     "no": "第 8 章",
     "title": "生产化与售前速查",
     "verified": "2026-07-09"
    }
   ],
   "facts": [
    {
     "text": "vLLM 当前 v0.26.0（2026-07-27），事实上的默认推理引擎（硬件覆盖最广、NVIDIA NGC 收编）（建议复查日随季度巡检，版本号周级漂移）",
     "chapter": "llminf-engines",
     "verified": "2026-08-01",
     "source": "github.com/vllm-project/vllm/releases（版本号）；格局定性另见 2026 对比评测（raw-data 核实笔记）",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-30"
    },
    {
     "text": "SGLang 当前 v0.5.16（2026-07-25）；v0.5.13 起投机解码 Spec V2 默认开启；DeepSeek 系 day-0 支持（建议复查日随季度巡检，版本号周级漂移）",
     "chapter": "llminf-engines",
     "verified": "2026-08-01",
     "source": "github.com/sgl-project/sglang/releases",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-30"
    },
    {
     "text": "TensorRT-LLM 进入 1.x（1.0 起 PyTorch 架构转正）；稳定版 v1.2.1，1.3.0 处于 RC（rc20 为最后支持 TensorRT backend 的 RC，下版移除）；商业包装为 NIM",
     "chapter": "llminf-engines",
     "verified": "2026-08-01",
     "source": "GitHub releases（github.com/NVIDIA/TensorRT-LLM/releases）",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-30"
    },
    {
     "text": "FP8 为生产推理默认精度（校准后损失约 0.5–2%）；NVFP4 面向 Blackwell、工具链成熟中、尚未大规模生产",
     "chapter": "llminf-quant",
     "verified": "2026-07-09",
     "source": "vrlatech/sesamedisk 2026 量化综述",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "投机解码已生产标配：EAGLE-3 主流、vLLM 报告最高 ~2.5x、接受率>80% 时 2–4x",
     "chapter": "llminf-speculative",
     "verified": "2026-07-09",
     "source": "spheron/sesamedisk 2026 实测综述",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "行业预测 2030 推理算力占 AI 总算力 ~75%（与 LLM-Training llmtrain-overview 同源事实）",
     "chapter": "llminf-speculative",
     "verified": "2026-07-09",
     "source": "行业分析综述",
     "recheck": "—",
     "grade": "B",
     "cadence": "180",
     "due": "2027-01-05"
    },
    {
     "text": "NVIDIA Dynamo 1.0 于 2026-03-16 GTC GA，当前稳定版 v1.3.0（2026-07-22，第 16 个特性版）：P/D 分离编排 + KV 感知路由 + NIXL；官方宣称 DeepSeek-R1/Blackwell 最高 7x 吞吐（建议复查日随季度巡检，版本号月级漂移）",
     "chapter": "llminf-disagg",
     "verified": "2026-08-01",
     "source": "NVIDIA 官方博客、GitHub releases（github.com/ai-dynamo/dynamo）",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-30"
    },
    {
     "text": "压测工具换代：NVIDIA AIPerf v0.11.0（2026-07-08）接棒 GenAI-Perf（官方提供迁移指南），配合 vllm bench serve 为 token 级压测主力",
     "chapter": "llminf-production",
     "verified": "2026-07-12",
     "source": "pypi.org/project/aiperf、github.com/ai-dynamo/aiperf",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-10"
    },
    {
     "text": "P/D 分离成大规模服务共识：Mooncake（FAST'25 最佳论文）、DistServe（OSDI'24）、开源 llm-d（K8s 系）",
     "chapter": "llminf-disagg",
     "verified": "2026-07-09",
     "source": "arXiv 2407.00079 等",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-05"
    },
    {
     "text": "成本量级参考：H100 级时租 $2–3/卡、70B FP8 双卡 ~3000 token/s、自建盈亏线利用率 ~40–50%、托管 API $2–5/百万输出 token",
     "chapter": "llminf-production",
     "verified": "2026-07-09",
     "source": "2026 年中多方评测量级归纳（讲义中已标注\"参考\"口径）",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-08"
    }
   ],
   "edges": [
    {
     "from": "llminf-kv-budget",
     "to": "llm#llm-inference-kv",
     "why": "KV Cache「为什么存在」（机制）在 LLM 原理第 4 章，「怎么管好」（系统）在本章——互为前后篇，讲义内有承上启下页；2026-07-20 对话沉淀拆分互指：本章新增「资源账」3 页（系统面）↔ 对方第 4 章新增「窗口由什么决定／四堵墙」2 页（原理面）",
     "resolved": true
    },
    {
     "from": "llminf-anatomy",
     "to": "llm-training#llmtrain-overview",
     "why": "「训练一次性重投入 vs 推理持续账单」同一事实两侧；2030 推理算力 75% 预测两边同源引用",
     "resolved": true
    },
    {
     "from": "llminf-speculative",
     "to": "llm-training#llmtrain-reasoning",
     "why": "推理模型（RLVR）让 decode 负载暴涨十几倍，是推理优化 2026 成为刚需的直接原因",
     "resolved": true
    },
    {
     "from": "llminf-batching",
     "to": "agent#agent-context",
     "why": "Prefix Caching/RadixAttention 的最大受益者是多轮 Agent——上下文工程在推理侧的回报",
     "resolved": true
    },
    {
     "from": "llminf-kv-budget",
     "to": "rag#rag-what-why",
     "why": "长上下文 prefill 平方级+KV 线性级两头吃钱，是「1M 窗口不是 RAG 终结者」的推理侧论据",
     "resolved": true
    },
    {
     "from": "llminf-production",
     "to": "（候选）Evaluation",
     "why": "推理压测/SLO/goodput 这条线待未来 Evaluation 模块收编",
     "resolved": false
    },
    {
     "from": "llminf-kv-budget",
     "to": "ai-infra-compute#aic-hbm",
     "why": "KV Cache 显存账（机制）↔ HBM 硬件账（地基）：互为前后篇，2026-07-09 建 AI-Infra-Compute 时补",
     "resolved": true
    },
    {
     "from": "llminf-quant",
     "to": "ai-infra-compute#aic-gpu",
     "why": "量化落地 ↔ FP8/FP4 精度阶梯硬件前提，同源口径（2026-07-09 补）",
     "resolved": true
    },
    {
     "from": "llminf-disagg",
     "to": "ai-infra-compute#aic-storage",
     "why": "P/D 分离/KV 路由 ↔ KV Cache 外置存储：存储升级为推理性能部件（2026-07-09 补）",
     "resolved": true
    },
    {
     "from": "llminf-disagg",
     "to": "ai-infra-platform#aip-serving",
     "why": "P/D 分离/Dynamo/llm-d 机制在本模块，平台承载（编排/扩缩/路由）在 AI-Infra-Platform 第 7 章（2026-07-09 补）",
     "resolved": true
    },
    {
     "from": "llminf-production",
     "to": "ai-infra-platform#aip-observability",
     "why": "利用率/goodput/SLO 运营两侧互指（2026-07-09 补）",
     "resolved": true
    }
   ],
   "web": "./llm-inference/index.html",
   "questions": [
    {
     "id": "q-llm-inference-1",
     "q": "为什么模型回答是一个字一个字往外蹦？能不能一次出全文？",
     "added": "2026-07-09",
     "chapters": [
      "llminf-anatomy"
     ]
    },
    {
     "id": "q-llm-inference-2",
     "q": "我买了 8 张卡，为什么并发一高就排队？显存明明够装模型。",
     "added": "2026-07-09",
     "chapters": [
      "calc",
      "llminf-kv-budget"
     ]
    },
    {
     "id": "q-llm-inference-3",
     "q": "128K 长上下文这么好，为什么按输入收费还这么贵？",
     "added": "2026-07-09",
     "chapters": [
      "llminf-kv-budget"
     ]
    },
    {
     "id": "q-llm-inference-4",
     "q": "1000 个用户都开 1M 窗口，要备多少张卡？",
     "added": "2026-07-20",
     "chapters": [
      "llminf-kv-budget"
     ]
    },
    {
     "id": "q-llm-inference-5",
     "q": "vLLM 和 SGLang 到底选哪个？给句准话。",
     "added": "2026-07-12",
     "chapters": [
      "llminf-engines",
      "src-engines"
     ]
    },
    {
     "id": "q-llm-inference-6",
     "q": "量化会不会把模型「变笨」？我们业务敢用吗？",
     "added": "2026-07-09",
     "chapters": [
      "llminf-quant"
     ]
    },
    {
     "id": "q-llm-inference-7",
     "q": "投机解码听着像「猜答案」，会不会导致质量下降？",
     "added": "2026-07-09",
     "chapters": [
      "llminf-speculative"
     ]
    },
    {
     "id": "q-llm-inference-8",
     "q": "我们要支撑几千并发，直接堆卡行不行？",
     "added": "2026-07-09",
     "chapters": [
      "llminf-disagg",
      "llminf-production"
     ]
    },
    {
     "id": "q-llm-inference-9",
     "q": "你们能承诺多少并发？",
     "added": "2026-07-09",
     "chapters": [
      "llminf-production"
     ]
    },
    {
     "id": "q-llm-inference-10",
     "q": "别家报价比你们便宜一半，是不是你们黑？",
     "added": "2026-07-09",
     "chapters": [
      "llminf-production"
     ]
    },
    {
     "id": "q-llm-inference-11",
     "q": "你们说的性能，拿什么证明？这个 POC 怎么算通过？",
     "added": "2026-07-23",
     "chapters": [
      "llminf-production",
      "llminf-batching"
     ]
    },
    {
     "id": "q-llm-inference-12",
     "q": "高峰期扛不住了会怎样？会不会整个服务瘫掉？",
     "added": "2026-07-23",
     "chapters": [
      "llminf-production",
      "llminf-batching",
      "llminf-disagg"
     ]
    },
    {
     "id": "q-llm-inference-13",
     "q": "我们自己用 Ollama 已经跑起来了，为什么还要再上一套？",
     "added": "2026-07-23",
     "chapters": [
      "llminf-engines",
      "llminf-batching"
     ]
    }
   ]
  },
  {
   "id": "llm-training",
   "dir": "LLM-Training",
   "layer": "基础层",
   "created": "2026-07-08",
   "updated": "2026-08-02",
   "chapters": [
    {
     "id": "llmtrain-overview",
     "no": "第 1 章",
     "title": "全景总览：从随机权重到可用助手",
     "verified": "2026-07-08"
    },
    {
     "id": "llmtrain-data",
     "no": "第 2 章",
     "title": "数据：模型的粮食",
     "verified": "2026-07-08"
    },
    {
     "id": "llmtrain-pretrain",
     "no": "第 3 章",
     "title": "预训练：压缩互联网",
     "verified": "2026-08-01"
    },
    {
     "id": "llmtrain-sft",
     "no": "第 4 章",
     "title": "后训练 I · SFT：教会听话",
     "verified": "2026-07-08"
    },
    {
     "id": "llmtrain-alignment",
     "no": "第 5 章",
     "title": "后训练 II · 对齐：教会分寸",
     "verified": "2026-07-08"
    },
    {
     "id": "llmtrain-reasoning",
     "no": "第 6 章",
     "title": "后训练 III · RLVR 与推理模型：教会思考",
     "verified": "2026-07-08"
    },
    {
     "id": "llmtrain-infra",
     "no": "第 7 章",
     "title": "训练基础设施与算力账",
     "verified": "2026-07-08"
    },
    {
     "id": "llmtrain-eval",
     "no": "第 8 章",
     "title": "评估与发布：怎么知道练成了",
     "verified": "2026-08-01"
    }
   ],
   "facts": [
    {
     "text": "后训练主流栈为 SFT →（可选 DPO）→ RLVR，GRPO/DAPO 一族为主力算法",
     "chapter": "llmtrain-reasoning",
     "verified": "2026-07-08",
     "source": "llm-stats.com 2026 后训练综述；arXiv 2407.16216",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-06"
    },
    {
     "text": "旗舰开源模型几乎全是稀疏 MoE：Kimi K3 总参 2.8T / 激活 104B（1M 上下文，93 层 = 69 KDA + 24 Gated MLA），DeepSeek V4-Pro 1.6T/49B、Llama 4 Maverick 400B/17B、Qwen 3.5 397B/17B；Qwen3.6 开源线只放到 35B-A3B 与 27B dense，最大的开源 Qwen 仍是 3.5 这一代",
     "chapter": "llmtrain-pretrain",
     "verified": "2026-08-01",
     "source": "huggingface.co/moonshotai/Kimi-K3 模型卡 + K3 技术报告 arXiv 2607.24653；HF Qwen3.6 合集与 Qwen/Qwen3.5-397B-A17B 模型卡；其余型号沿用 OpenRouter 2026-06 盘点（建议复查日 2026-11-01）",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-31"
    },
    {
     "text": "FP8 混合精度训练进入主流实践（如 MiMo-V2.5-Pro 27T token FP8）",
     "chapter": "llmtrain-pretrain",
     "verified": "2026-07-08",
     "source": "OpenRouter 盘点、厂商技术报告",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-06"
    },
    {
     "text": "Muon/MuonClip：Kimi K2 15.5T token 零 spike；PyTorch 2.9 原生内置 torch.optim.Muon",
     "chapter": "llmtrain-pretrain",
     "verified": "2026-07-08",
     "source": "PyTorch 官方博客；arXiv 2507.20534",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-06"
    },
    {
     "text": "数据墙：互联网高质量文本存量约 10–50 万亿 token",
     "chapter": "llmtrain-data",
     "verified": "2026-07-08",
     "source": "多方分析（aimultiple、lifearchitect 等）",
     "recheck": "—",
     "grade": "B",
     "cadence": "180",
     "due": "2027-01-04"
    },
    {
     "text": "预测 2030 年推理算力占 AI 总算力约 75%",
     "chapter": "llmtrain-overview",
     "verified": "2026-07-08",
     "source": "行业分析（aibarcelona 等综述引用）",
     "recheck": "—",
     "grade": "B",
     "cadence": "180",
     "due": "2027-01-04"
    },
    {
     "text": "开源许可格局在分叉：Apache 2.0 仍是主流（Qwen 开源线 27B / 35B-A3B、Mistral、Gemma），DeepSeek 用 MIT；但旗舰另走一路——Qwen 3.7-Max 只出 API 不放权重，Kimi K3 用自有「Kimi K3 License」（MIT 式条款 + 商用阈值：做 Model as a Service 且连续 12 个月合计营收超 2000 万美元，须与月之暗面另签协议），**不是 Modified MIT**",
     "chapter": "llmtrain-eval",
     "verified": "2026-08-01",
     "source": "huggingface.co/moonshotai/Kimi-K3 仓 LICENSE 原文；alibabacloud.com/help/en/model-studio/qwen3-7-max 官方模型页（只有 API 定价、无权重下载）；HF Qwen/Qwen3.6-35B-A3B 模型卡标 apache-2.0（建议复查日 2026-11-01）",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-30"
    },
    {
     "text": "RLHF Book 2026-01 完成章节重组（对齐 Manning 印刷版），免费在线",
     "chapter": "书单",
     "verified": "2026-07-08",
     "source": "rlhfbook.com",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-06"
    },
    {
     "text": "Stanford CS336 Spring 2026 视频与作业全部公开",
     "chapter": "书单",
     "verified": "2026-07-08",
     "source": "cs336.stanford.edu",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-06"
    }
   ],
   "edges": [
    {
     "from": "llmtrain-overview / llmtrain-pretrain",
     "to": "llm#llm-why-transformer",
     "why": "LLM 原理讲架构（发动机舱），本模块讲训练（流水线），互为前置；第 3 章「可并行」一页对应其第 1 章",
     "resolved": true
    },
    {
     "from": "llmtrain-sft",
     "to": "rag#rag-what-why",
     "why": "「微调 vs RAG」互为镜像：RAG 从应用侧答，本章从训练侧补全",
     "resolved": true
    },
    {
     "from": "llmtrain-reasoning",
     "to": "agent#agent-what-why",
     "why": "推理模型/RLVR 是「agent 为什么现在能成」的模型侧原因",
     "resolved": true
    },
    {
     "from": "llmtrain-eval",
     "to": "rag#rag-evaluation",
     "why": "模型本体评估 ↔ 检索质量评估，两条评估线互参",
     "resolved": true
    },
    {
     "from": "llmtrain-eval",
     "to": "agent#agent-eval-guardrails",
     "why": "模型本体评估 ↔ 智能体评估与护栏",
     "resolved": true
    },
    {
     "from": "llmtrain-eval",
     "to": "（候选）Evaluation",
     "why": "三条评估线待未来 Evaluation 模块收编成总纲",
     "resolved": false
    },
    {
     "from": "llmtrain-sft / llmtrain-alignment",
     "to": "fine-tuning#ft-methods / fine-tuning#ft-alignment",
     "why": "本模块讲原理，Fine-tuning 模块讲「拿自己数据落地」的工程实践（2026-07-09 建成，候选转正）",
     "resolved": true
    },
    {
     "from": "llmtrain-overview",
     "to": "llm-inference#llminf-anatomy",
     "why": "「训练一次性重投入 vs 推理持续账单」两侧互指；2030 推理算力 75% 预测两边同源引用（2026-07-09 补）",
     "resolved": true
    },
    {
     "from": "llmtrain-reasoning",
     "to": "llm-inference#llminf-speculative",
     "why": "RLVR 推理模型让 decode 负载暴涨，是推理优化成为刚需的原因；对方第 6 章以承上页回指本章（2026-07-09 补）",
     "resolved": true
    },
    {
     "from": "llmtrain-infra",
     "to": "ai-infra-compute#aic-scaleup / aic-scaleout",
     "why": "并行策略（TP/PP/EP）产生的通信量决定网络怎么建；本模块讲并行、AI-Infra-Compute 讲承载它的两级互联（2026-07-09 补）",
     "resolved": true
    },
    {
     "from": "llmtrain-infra",
     "to": "ai-infra-compute#aic-hbm",
     "why": "训练显存账（ZeRO/FSDP 切分）↔ HBM 硬件账；本模块讲切分、对方讲硬件地基（2026-07-09 补）",
     "resolved": true
    },
    {
     "from": "llmtrain-infra",
     "to": "ai-infra-platform#aip-scheduling / aip-faulttol",
     "why": "训练作业是集群调度与容错的头号负载；本模块讲并行怎么切，AI-Infra-Platform 讲作业怎么被调度、崩了怎么续（2026-07-09 补）",
     "resolved": true
    }
   ],
   "web": "./llm-training/index.html",
   "questions": [
    {
     "id": "q-llm-training-1",
     "q": "你们的模型到底是怎么训出来的？",
     "added": "2026-07-08",
     "chapters": [
      "llmtrain-overview"
     ]
    },
    {
     "id": "q-llm-training-2",
     "q": "训练一个大模型到底要多少钱多少卡？",
     "added": "2026-07-08",
     "chapters": [
      "calc6nd",
      "llmtrain-infra"
     ]
    },
    {
     "id": "q-llm-training-3",
     "q": "为什么 DeepSeek 能把训练成本压那么低？",
     "added": "2026-07-08",
     "chapters": [
      "llmtrain-pretrain"
     ]
    },
    {
     "id": "q-llm-training-4",
     "q": "MoE 模型报的 400B 参数，跟稠密 70B 怎么比？",
     "added": "2026-07-08",
     "chapters": [
      "llmtrain-pretrain"
     ]
    },
    {
     "id": "q-llm-training-5",
     "q": "我们只有几千条数据，够微调吗？",
     "added": "2026-07-08",
     "chapters": [
      "llmtrain-sft"
     ]
    },
    {
     "id": "q-llm-training-6",
     "q": "对齐会不会把模型调笨？",
     "added": "2026-07-08",
     "chapters": [
      "llmtrain-alignment"
     ]
    },
    {
     "id": "q-llm-training-7",
     "q": "推理模型和普通模型到底差在哪？",
     "added": "2026-07-08",
     "chapters": [
      "llmtrain-reasoning"
     ]
    },
    {
     "id": "q-llm-training-8",
     "q": "榜单分数能信吗？",
     "added": "2026-07-08",
     "chapters": [
      "llmtrain-eval"
     ]
    },
    {
     "id": "q-llm-training-9",
     "q": "我们该自建集群还是用云？",
     "added": "2026-07-13",
     "chapters": [
      "llmtrain-infra"
     ]
    },
    {
     "id": "q-llm-training-10",
     "q": "我们要不要训一个自己的大模型？",
     "added": "2026-07-23",
     "chapters": [
      "llmtrain-sft",
      "calc6nd",
      "llmtrain-sft",
      "llmtrain-infra"
     ]
    },
    {
     "id": "q-llm-training-11",
     "q": "你们支持分布式训练吗？那这个训练项目怎么算验收通过？",
     "added": "2026-07-23",
     "chapters": [
      "llmtrain-infra"
     ]
    }
   ]
  },
  {
   "id": "mcp",
   "dir": "MCP",
   "layer": "协议层",
   "created": "2026-07-08",
   "updated": "2026-08-02",
   "chapters": [
    {
     "id": "mcp-what-why",
     "no": "第 1 章",
     "title": "是什么/为什么",
     "verified": "2026-07-08"
    },
    {
     "id": "mcp-protocol",
     "no": "第 2 章",
     "title": "协议解剖",
     "verified": "2026-07-08"
    },
    {
     "id": "mcp-transport",
     "no": "第 3 章",
     "title": "传输与演进",
     "verified": "2026-07-08"
    },
    {
     "id": "mcp-server",
     "no": "第 4 章",
     "title": "动手写 server",
     "verified": "2026-07-08"
    },
    {
     "id": "mcp-production",
     "no": "第 5 章",
     "title": "生产落地",
     "verified": "2026-07-08"
    },
    {
     "id": "mcp-security",
     "no": "第 6 章",
     "title": "安全",
     "verified": "2026-07-08"
    },
    {
     "id": "mcp-cheatsheet",
     "no": "第 7 章",
     "title": "售前速查（高频问题 / 上手排错 / 版本口径与串联；2026-07-11 补齐全库速查惯例）",
     "verified": "2026-07-11"
    }
   ],
   "facts": [
    {
     "text": "现行规范 2026-07-28（2026-07-28 正式发布）：无状态协议核心、MRTR 多轮请求、Mcp-Method/Mcp-Name 头路由、列表结果可缓存（ttlMs/cacheScope）、扩展框架；上一版 2025-11-25 进入兼容期",
     "chapter": "mcp-protocol",
     "verified": "2026-07-30",
     "source": "modelcontextprotocol.io/specification/2026-07-28/changelog",
     "recheck": "2027-01-31",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-28"
    },
    {
     "text": "2026-07-28 九项主变更：删会话与 Mcp-Session-Id（SEP-2567）、删 initialize 握手改每请求自带版本与能力（SEP-2575）、新增 server/discover、订阅收口为 subscriptions/listen、删 ping 与 logging/setLevel、Tasks 转官方扩展（SEP-2663）、MRTR 取代服务端发起请求（SEP-2322）、结果必带 resultType、取消 SSE 断流续传",
     "chapter": "mcp-transport",
     "verified": "2026-07-30",
     "source": "MCP 官方 changelog 2026-07-28",
     "recheck": "2027-01-31",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-28"
    },
    {
     "text": "首个正式弃用政策：Active/Deprecated/Removed 三态，弃用到最早可移除之间**至少十二个月**；首批弃用 Roots、Sampling、Logging（SEP-2577）与 HTTP+SSE 传输（SEP-2596），OAuth 动态客户端注册转 CIMD",
     "chapter": "mcp-transport",
     "verified": "2026-07-30",
     "source": "modelcontextprotocol.io/community/feature-lifecycle",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-28"
    },
    {
     "text": "授权加固三条：授权响应带 iss 且客户端 MUST 校验（RFC 9207，SEP-2468）；动态注册须声明 application_type（SEP-837）；凭据按签发方绑定、不得跨授权服务器复用（SEP-2352）",
     "chapter": "mcp-security",
     "verified": "2026-07-30",
     "source": "MCP 官方 changelog 2026-07-28",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-28"
    },
    {
     "text": "官方 SDK Tier 1 为 TypeScript、Python、C#、Go（Tier 是支持等级承诺，不是安全认证）；四者均已出 2026-07-28 支持版本，Rust 为 beta",
     "chapter": "mcp-server",
     "verified": "2026-07-30",
     "source": "modelcontextprotocol.io/docs/sdk；MCP 官方 2026-07-28 发布文",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-28"
    },
    {
     "text": "SDK 正式版已发（beta 阶段结束）：Python SDK v2.0.0 于 2026-07-28 发布（与规范同日；FastMCP 更名 MCPServer，装饰器 API 不变）、TypeScript SDK 2.0.0 于 2026-07-27 发布并拆包（@modelcontextprotocol/core / client / server / node / express / hono / fastify 等一组）；v1 线转维护、只收安全修复（当前 v1.29.0，2026-07-28），暂不升级的把依赖钉上限 `mcp>=1.28,<2`",
     "chapter": "mcp-server",
     "verified": "2026-08-01",
     "source": "github.com/modelcontextprotocol/python-sdk releases（v2.0.0 / v1.29.0）；github.com/modelcontextprotocol/typescript-sdk releases（@modelcontextprotocol/core@2.0.0 等）",
     "recheck": "2026-11-30",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-30"
    },
    {
     "text": "官方 Registry 仍 preview 未 GA，不支持私有 server（企业需自建）",
     "chapter": "mcp-production",
     "verified": "2026-07-08",
     "source": "registry 官方页",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-06"
    },
    {
     "text": "2026 年 1–4 月披露 40+ CVE；CVE-2025-6514（mcp-remote RCE）；MCPTox 工具投毒成功率 84.2%",
     "chapter": "mcp-security",
     "verified": "2026-07-08",
     "source": "dev.to 汇总、arXiv 2508.14925",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-06"
    },
    {
     "text": "治理归 AAIF（2025-12 捐赠，Linux Foundation 旗下），变更走 SEP 机制",
     "chapter": "mcp-what-why",
     "verified": "2026-07-08",
     "source": "aaif.io 官方博客",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-04"
    },
    {
     "text": "MCP 工具定义随每条消息进上下文（非每会话一次）；GitHub 官方 server 94 工具 ≈ 17,600 tokens，描述压缩后可降至约 3,900（低压缩）／约 500（最激进）",
     "chapter": "mcp-production",
     "verified": "2026-07-20",
     "source": "Atlassian 工程博客《MCP Compression》2026-03-29（未公布模型与计数方法）",
     "recheck": "2026-10-31",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-18"
    },
    {
     "text": "MCP 流量经网关一跳的额外延迟：加密迭代调至约 100 次后 1–2ms／会话；默认 10 万次 KDF 迭代下为数十毫秒",
     "chapter": "mcp-production",
     "verified": "2026-07-20",
     "source": "Envoy AI Gateway 官方基准 2025-12-08（MacBook Pro M1 八核、echo 工具、按会话计）",
     "recheck": "2026-10-31",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-18"
    }
   ],
   "edges": [
    {
     "from": "mcp-what-why",
     "to": "agent#agent-tools-mcp",
     "why": "MCP 是 Agent 工具接入的标准化层，Agent 第 4 章为入口视角",
     "resolved": true
    },
    {
     "from": "mcp-security",
     "to": "agent#agent-eval-guardrails",
     "why": "防护共识一致：最小权限、人工审批、持续监控",
     "resolved": true
    },
    {
     "from": "mcp-what-why",
     "to": "a2a#a2a-what-why",
     "why": "协议层双子：MCP 接工具（纵向）/ A2A 接 Agent（横向），双向互引「分工」",
     "resolved": true
    },
    {
     "from": "mcp-production",
     "to": "ai-gateway#gw-mcp",
     "why": "生产落地的治理面：MCP 流量的统一代理/发现/鉴权/限流/审计由网关承接（协议归本模块、治理归网关，双向互引）",
     "resolved": true
    },
    {
     "from": "mcp-security",
     "to": "security#sec-agentic",
     "why": "工具描述投毒与 MCP 供应链风险在 Security 第 4/5 章深化（本章讲协议侧防线，双向互引）",
     "resolved": true
    },
    {
     "from": "mcp-security",
     "to": "a2a#a2a-security",
     "why": "两协议安全共识对照：签名/最小权限/鉴权/opaque 边界（A2A 侧已有入边，此为回边）",
     "resolved": true
    }
   ],
   "web": "./mcp/index.html",
   "questions": [
    {
     "id": "q-mcp-1",
     "q": "MCP 和 Function Calling 到底什么关系，是不是替代？",
     "added": "2026-07-08",
     "chapters": [
      "mcp-what-why"
     ]
    },
    {
     "id": "q-mcp-2",
     "q": "这是不是 Anthropic 的私有协议，用了会被锁定吗？",
     "added": "2026-07-08",
     "chapters": [
      "mcp-what-why",
      "src-aaif"
     ]
    },
    {
     "id": "q-mcp-3",
     "q": "我们已经在用 Function Calling 了，还有必要上 MCP 吗？",
     "added": "2026-07-08",
     "chapters": [
      "boundary"
     ]
    },
    {
     "id": "q-mcp-4",
     "q": "能不能不让模型自己决定调用？我们不放心。",
     "added": "2026-07-20",
     "chapters": [
      "mcp-protocol"
     ]
    },
    {
     "id": "q-mcp-5",
     "q": "月底新版发布，我现在的 server 要立刻改代码吗？",
     "added": "2026-07-08",
     "chapters": [
      "mcp-transport",
      "src-rc"
     ]
    },
    {
     "id": "q-mcp-6",
     "q": "开发一个 MCP server 到底要多少工作量？",
     "added": "2026-07-08",
     "chapters": [
      "mcp-server"
     ]
    },
    {
     "id": "q-mcp-7",
     "q": "员工乱接外面的 server 怎么治？",
     "added": "2026-07-08",
     "chapters": [
      "mcp-production",
      "mcp-security"
     ]
    },
    {
     "id": "q-mcp-8",
     "q": "我们内部系统的 server 能放到官方 Registry 吗？",
     "added": "2026-07-08",
     "chapters": [
      "mcp-production",
      "src-registry"
     ]
    },
    {
     "id": "q-mcp-9",
     "q": "MCP 出了这么多 CVE，还能用吗？",
     "added": "2026-07-08",
     "chapters": [
      "mcp-security",
      "src-cve",
      "src-mcptox"
     ]
    },
    {
     "id": "q-mcp-10",
     "q": "上线之后出了问题，怎么定位是谁的责任？",
     "added": "2026-07-20",
     "chapters": [
      "mcp-production",
      "wire"
     ]
    },
    {
     "id": "q-mcp-11",
     "q": "我们有几百个内部 API，是不是要全改造成 MCP server？",
     "added": "2026-07-23",
     "chapters": [
      "mcp-server",
      "boundary"
     ]
    },
    {
     "id": "q-mcp-12",
     "q": "让模型自己调工具，它是拿谁的权限在干活？出事怎么办？",
     "added": "2026-07-23",
     "chapters": [
      "mcp-production",
      "mcp-security"
     ]
    },
    {
     "id": "q-mcp-13",
     "q": "我们已经有 API 网关和集成平台了，这不是重复建设吗？",
     "added": "2026-07-23",
     "chapters": [
      "mcp-production",
      "boundary"
     ]
    },
    {
     "id": "q-mcp-14",
     "q": "加了这一层，成本和延迟要增加多少？",
     "added": "2026-07-23",
     "chapters": [
      "mcp-production"
     ]
    }
   ]
  },
  {
   "id": "model-landscape",
   "dir": "Model-Landscape",
   "layer": "解决方案层",
   "created": "2026-07-10",
   "updated": "2026-08-02",
   "chapters": [
    {
     "id": "ml-map",
     "no": "第 1 章",
     "title": "全景地图（三大阵营 / 两个市场 / 一年三变局）",
     "verified": "2026-07-10"
    },
    {
     "id": "ml-closed",
     "no": "第 2 章",
     "title": "闭源旗舰家族图谱（五张名片 + 对比总表）",
     "verified": "2026-07-10"
    },
    {
     "id": "ml-open",
     "no": "第 3 章",
     "title": "开放权重格局（中国四强榜首 / 西方线 / 追平叙事）",
     "verified": "2026-07-10"
    },
    {
     "id": "ml-china",
     "no": "第 4 章",
     "title": "中国格局与豆包定位（四强横评 / 豆包家族 / 场景口径）",
     "verified": "2026-07-10"
    },
    {
     "id": "ml-license",
     "no": "第 5 章",
     "title": "许可证与合规边界（open weight vs open source / 三级分类）",
     "verified": "2026-07-10"
    },
    {
     "id": "ml-price",
     "no": "第 6 章",
     "title": "价格带与成本工程（光谱 / 三档制 / 缓存经济学）",
     "verified": "2026-07-10"
    },
    {
     "id": "ml-capability",
     "no": "第 7 章",
     "title": "能力矩阵与推理模型（窗口 / 模态 / 思考预算 / overthinking）",
     "verified": "2026-07-10"
    },
    {
     "id": "ml-selection",
     "no": "第 8 章",
     "title": "选型方法论（多模型默认解 / 三层路由 / 两道防线）",
     "verified": "2026-07-10"
    },
    {
     "id": "ml-platforms",
     "no": "第 9 章",
     "title": "国内平台格局（方舟/百炼/千帆/腾讯四平台画像、货架哲学、价格锚点、选型三问）",
     "verified": "2026-07-17"
    },
    {
     "id": "ml-cheatsheet",
     "no": "第 10 章",
     "title": "售前速查（总表 / 价格卡 / 许可证卡 / 保鲜声明 / 串联）",
     "verified": "2026-07-10"
    }
   ],
   "facts": [
    {
     "text": "GPT-5.6 家族（2026-07-09 GA，07-30 官方降价）：Sol $5/$30 不变、Terra $2.50/$15 → $2/$12（-20%）、Luna $1/$6 → $0.20/$1.20（-80%，跌进地板档）；缓存读 -90%、写 1.25×",
     "chapter": "ml-closed / ml-price",
     "verified": "2026-08-01",
     "source": "OpenAI 官方价格页 developers.openai.com/api/docs/pricing（三档逐条核对）；降价公告 openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/",
     "recheck": "2026-08-31",
     "grade": "A",
     "cadence": "30",
     "due": "2026-08-31"
    },
    {
     "text": "Claude 5 家族：Fable 5（Mythos 级、1M 上下文/128K 输出）、Mythos 5 限量、Opus 4.8、Sonnet 5 尝鲜价 $2/$10（至 2026-08-31，后 $3/$15）；Fable/Mythos 出口管制风波后 2026-07-01 恢复",
     "chapter": "ml-closed",
     "verified": "2026-07-10",
     "source": "Anthropic 官方 docs / ghacks",
     "recheck": "2026-08-31",
     "grade": "A",
     "cadence": "30",
     "due": "2026-08-09"
    },
    {
     "text": "企业 LLM 支出份额（Menlo）：Anthropic 40% / OpenAI 27% / Google 21%；ChatGPT 消费份额约 74%、日 25 亿+ prompts；企业支出 $8.4B、年底看 $15B；Claude Code 年化 $1B、企业编码 54%",
     "chapter": "ml-map",
     "verified": "2026-07-10",
     "source": "Menlo 报告 / officechai / aimultiple",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-08"
    },
    {
     "text": "Gemini 3.1 Pro（推理/长视频旗舰、旗舰中 API 最低价）；Flash-Lite $0.10/$0.40 为最低闭源档",
     "chapter": "ml-closed / ml-price",
     "verified": "2026-07-10",
     "source": "benchlm / cloudzero 价格页",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-09"
    },
    {
     "text": "Grok 4.3：$1.25/$2.50、缓存输入 $0.20（比上代降 40–60%）；AA 智能指数 53；2026-06-15 上 Bedrock（第三家独立实验室）；SOC2/HIPAA",
     "chapter": "ml-closed",
     "verified": "2026-07-10",
     "source": "VentureBeat / digitalapplied",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-09"
    },
    {
     "text": "Meta 转向：Behemoth（2T）实质搁置；Muse Spark 2026-04-08 发布（首个闭源 API-only）；Llama 4 Scout（109B/17B 激活、10M ctx）与 Maverick（400B/17B、1M）成最后开放版本",
     "chapter": "ml-closed / ml-open",
     "verified": "2026-07-10",
     "source": "digitimes / serenitiesai / ai.meta.com",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-09"
    },
    {
     "text": "开源榜首（2026-08 快照）：DeepSeek V4 Pro 综合 87（SWE-bench Verified 80.6% 追平闭源；MIT）、GLM-5.2 753B MoE / 1M 上下文（MIT，2026-06-17）、Kimi K3 2.8T MoE（激活 104B、原生视觉、1M 上下文，2026-07-16 发布 07-27 放权重；**自有许可，MIT 式但带商用阈值——不是 Modified MIT**）、Qwen3.5 397B（122B/激活 10B）",
     "chapter": "ml-open",
     "verified": "2026-08-01",
     "source": "huggingface.co/moonshotai/Kimi-K3（含 LICENSE 原文）、huggingface.co/zai-org/GLM-5.2",
     "recheck": "2026-09-30",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-31"
    },
    {
     "text": "GLM-5 为首个完全用华为昇腾训练的前沿模型（零英伟达）",
     "chapter": "ml-open / ml-china",
     "verified": "2026-07-10",
     "source": "国产四强横评（qiniu 2026-06）",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-08"
    },
    {
     "text": "国产四强（2026-06 横评口径）：GLM 5.2 / Kimi K2（agent swarm 百级并行）/ Qwen3（0.6B–397B 谱系）/ DeepSeek V4（API 便宜 20–50 倍）——各至少一个主流基准超国际闭源",
     "chapter": "ml-china",
     "verified": "2026-07-10",
     "source": "qiniu 横评 / aitoolcn",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-09"
    },
    {
     "text": "豆包：2.1 Pro 2026-06-23 发布（¥6/¥30、缓存命中 ¥1.2）；2.1 Turbo 半价；Seed-Evolving 月更 2–4 次；Seed-2.0-lite（2026-05，家族首个原生统一全模态）；累计 tokens 180 万亿+",
     "chapter": "ml-china",
     "verified": "2026-07-10",
     "source": "新华网 / 火山方舟价格页 / 网易",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-09"
    },
    {
     "text": "许可证格局：OSAID v1.0（2024-10）口径下主流\"开源\"模型均为 open weight；DeepSeek/GLM-5.2 = MIT、Qwen3 主系 = Apache 2.0、Kimi K3 = 自有许可（MIT 式 + 商用阈值）、Mistral Large 3/Small 4 转 Apache 2.0；Llama 社区证含 700M MAU 帽 + 欧盟条款",
     "chapter": "ml-license",
     "verified": "2026-07-10",
     "source": "qubittool / HF blog / LICENSE 原文",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-08"
    },
    {
     "text": "价格光谱：地板 DeepSeek V4 Flash $0.14/$0.28、Gemini Flash-Lite $0.10/$0.40；超旗舰 GPT-5.4 Pro $30/$180；整体对比 2025 降 30–60%",
     "chapter": "ml-price",
     "verified": "2026-07-10",
     "source": "pricepertoken / cloudzero / tldl",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-09"
    },
    {
     "text": "小模型：Phi-4 / Gemma 4（26B MoE 激活 ~4B；E2B 2.3B 有效参数 4GB 内存）/ SmolLM-3 为三大部署家族；sub-10B 常规超 2024 版 GPT-4",
     "chapter": "ml-map / ml-capability",
     "verified": "2026-07-10",
     "source": "bentoml / callsphere 2026",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-09"
    },
    {
     "text": "推理模型：思考预算两旋钮（Anthropic budget_tokens / Gemini thinkingBudget）；L1 可控 vs L2 自适应（arXiv 2507.02076）；overthinking 实证——超临界预算准确率下降（arXiv 2506.04210）",
     "chapter": "ml-capability",
     "verified": "2026-07-10",
     "source": "arXiv 两篇（书单列官方链接）",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-08"
    },
    {
     "text": "选型实践：Walmart Code Puppy 跨 GPT/Claude/Gemini 动态路由；ServiceNow 2026-01 同签 OpenAI+Anthropic；Gartner 预计 2028 年 70% 多模型组织用 AI 网关（2024 <5%）",
     "chapter": "ml-selection",
     "verified": "2026-07-10",
     "source": "chatgptaihub / datatobiz / Gartner 转引",
     "recheck": "—",
     "grade": "B",
     "cadence": "180",
     "due": "2027-01-06"
    },
    {
     "text": "榜单防线：Leaderboard Illusion（私测多变体择优，arXiv 2504.20879）；MMLU 类饱和 88%+ 无区分度（与 evaluation 模块同源口径）",
     "chapter": "ml-selection",
     "verified": "2026-07-10",
     "source": "arXiv（书单列官方链接）/ evaluation 模块",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-08"
    },
    {
     "text": "火山方舟：Doubao-Seed-2.1 Pro（06-23）¥6/¥30、缓存 ¥1.2，按输入长度分段计价；Coding Plan 订阅 Pro 首月 ¥44.91 续费 5 折（含 Seed-2.0-Code/DeepSeek V3.2/Kimi K2.5/GLM-4.7）；企业版支持私有化接入",
     "chapter": "ml-platforms",
     "verified": "2026-07-17",
     "source": "火山方舟官网/计费文档",
     "recheck": "2026-08-31",
     "grade": "A",
     "cadence": "30",
     "due": "2026-08-16"
    },
    {
     "text": "阿里百炼：150+ 模型（Qwen 全系+DeepSeek/GLM/Kimi/MiniMax/Llama）；Qwen3-Max（≤32K）¥2.5/¥10、Qwen3.5-Plus（≤128K）¥0.8/¥4.8；Batch 批量一律 5 折；2026-05 大版本上架 Qwen3.7 全系与百万上下文模型",
     "chapter": "ml-platforms",
     "verified": "2026-07-17",
     "source": "help.aliyun.com 模型价格/百炼平台页",
     "recheck": "2026-08-31",
     "grade": "A",
     "cadence": "30",
     "due": "2026-08-16"
    },
    {
     "text": "百度千帆：文心 5.0 正式版 2026-01-22（2.4 万亿参数原生全模态）、5.1（2026-05，厂商称搜索登顶国内/预训练成本 6%——厂商口径）；150+ SOTA 统一纳管；平台 130 万 Agents、工具日调用超千万次",
     "chapter": "ml-platforms",
     "verified": "2026-07-17",
     "source": "新华网/量子位/cloud.baidu.com",
     "recheck": "2026-08-31",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-16"
    },
    {
     "text": "腾讯：混元 2.0 API ¥0.8/¥2、Hunyuan Standard 输入 ¥0.3；智能体开发平台 ADP 订阅制；三方模型可切换（MiniMax-M2.x/Kimi-K2.5/GLM-5 系/DeepSeek-V4 系）",
     "chapter": "ml-platforms",
     "verified": "2026-07-17",
     "source": "腾讯云计费与产品文档",
     "recheck": "2026-08-31",
     "grade": "A",
     "cadence": "30",
     "due": "2026-08-16"
    }
   ],
   "edges": [
    {
     "from": "ml-selection",
     "to": "predictive-ai-mlops#pam-model-choice",
     "why": "反向回指（2026-08-02 新模块建立）：边界声明：客户问「用什么模型」要先分清问的是哪一类——大模型选型（榜单、价格带、许可证）在 Model-Land",
     "resolved": true
    },
    {
     "from": "ml-selection",
     "to": "evaluation#eval-benchmarks",
     "why": "榜单饱和与 Leaderboard Illusion 的完整弹药在 Evaluation 第 2 章；自建评估集方法在其第 5 章——选型终审依赖它（双向）",
     "resolved": true
    },
    {
     "from": "ml-selection / ml-price",
     "to": "ai-gateway#gw-route / ai-gateway#gw-cost",
     "why": "三层路由与成本治理的工程落地件；Gartner 网关趋势同源（双向）",
     "resolved": true
    },
    {
     "from": "ml-map / ml-open",
     "to": "llm#llm-architecture",
     "why": "MoE 稀疏激活是「开源追平」与三档定价的架构根源",
     "resolved": true
    },
    {
     "from": "ml-capability",
     "to": "llm-inference#llminf-batching",
     "why": "思考预算烧的是 decode；长上下文成本机制在 LLM-Inference",
     "resolved": true
    },
    {
     "from": "ml-capability",
     "to": "rag#rag-what-why",
     "why": "「1M 窗口 vs RAG」：窗口≠有效窗口，权限/新鲜度/成本三关——与 RAG 第 1 章互为弹药",
     "resolved": true
    },
    {
     "from": "ml-open / ml-license",
     "to": "fine-tuning#ft-cloud",
     "why": "开放权重 + 宽松许可证是私有化微调的前提",
     "resolved": true
    },
    {
     "from": "ml-platforms",
     "to": "security#sec-china",
     "why": "平台合规配套（备案材料/护栏）与「私有化不免合规」口径在 Security 第 8 章中国监管合规展开（讲义内已互引）",
     "resolved": true
    },
    {
     "from": "ml-platforms",
     "to": "ai-gateway#gw-unify",
     "why": "「平台锁定」的解法=兼容层/网关保切换能力，机制在 AI-Gateway 统一接入章",
     "resolved": true
    },
    {
     "from": "ml-platforms",
     "to": "multimodal#mm-fusion",
     "why": "文心 5.0 原生全模态 vs 拼管线之争的机制展开在 Multimodal 第 3 章",
     "resolved": true
    },
    {
     "from": "ml-cheatsheet",
     "to": "solution-patterns#sp-method",
     "why": "「模型是可替换件」的方案叙事在 SP 第 2 章；各场景章的模型选型格子引用本模块",
     "resolved": true
    },
    {
     "from": "ml-china",
     "to": "（候选）中国合规章",
     "why": "国内商用备案与内容合规——Security 增章待用户决策",
     "resolved": false
    }
   ],
   "web": "./model-landscape/index.html",
   "questions": [
    {
     "id": "q-model-landscape-1",
     "q": "现在到底谁家模型最强？",
     "added": "2026-07-10",
     "chapters": [
      "ml-map"
     ]
    },
    {
     "id": "q-model-landscape-2",
     "q": "GPT 和 Claude 到底该选哪个？",
     "added": "2026-07-10",
     "chapters": [
      "ml-closed",
      "ml-selection"
     ]
    },
    {
     "id": "q-model-landscape-3",
     "q": "开源模型和 GPT 们到底还差多少？",
     "added": "2026-07-10",
     "chapters": [
      "ml-open"
     ]
    },
    {
     "id": "q-model-landscape-4",
     "q": "Llama 不是开源吗，为什么法务不让我们用？",
     "added": "2026-07-10",
     "chapters": [
      "ml-license"
     ]
    },
    {
     "id": "q-model-landscape-5",
     "q": "用开源模型微调出来的模型算谁的？",
     "added": "2026-07-10",
     "chapters": [
      "ml-license"
     ]
    },
    {
     "id": "q-model-landscape-6",
     "q": "为什么不全用最便宜的 DeepSeek？",
     "added": "2026-07-10",
     "chapters": [
      "ml-price",
      "ml-selection"
     ]
    },
    {
     "id": "q-model-landscape-7",
     "q": "现在签一年合同，明年价格跌了怎么办？",
     "added": "2026-07-10",
     "chapters": [
      "ml-price"
     ]
    },
    {
     "id": "q-model-landscape-8",
     "q": "上下文窗口越大越好吗？",
     "added": "2026-07-10",
     "chapters": [
      "ml-capability"
     ]
    },
    {
     "id": "q-model-landscape-9",
     "q": "评测榜单第一的模型，为什么你们不推荐？",
     "added": "2026-07-10",
     "chapters": [
      "ml-selection",
      "src-arxiv"
     ]
    },
    {
     "id": "q-model-landscape-10",
     "q": "国内这几个平台，到底选哪个？",
     "added": "2026-07-17",
     "chapters": [
      "ml-platforms"
     ]
    },
    {
     "id": "q-model-landscape-11",
     "q": "平台会不会把我们锁死？",
     "added": "2026-07-17",
     "chapters": [
      "ml-platforms",
      "ml-selection"
     ]
    },
    {
     "id": "q-model-landscape-12",
     "q": "我们全公司已经统一用一家了，为什么还要再引一家？",
     "added": "2026-07-23",
     "chapters": [
      "ml-selection",
      "ml-platforms"
     ]
    },
    {
     "id": "q-model-landscape-13",
     "q": "你凭什么说这家适合我们？选型怎么验？",
     "added": "2026-07-23",
     "chapters": [
      "ml-selection"
     ]
    },
    {
     "id": "q-model-landscape-14",
     "q": "我们押的这个模型，厂商说停就停怎么办？",
     "added": "2026-07-23",
     "chapters": [
      "ml-selection"
     ]
    }
   ]
  },
  {
   "id": "multimodal",
   "dir": "Multimodal",
   "layer": "应用模式层",
   "created": "2026-07-09",
   "updated": "2026-08-02",
   "chapters": [
    {
     "id": "mm-what-why",
     "no": "第 1 章",
     "title": "是什么 / 为什么（感知面全景、理解 vs 生成）",
     "verified": "2026-07-09"
    },
    {
     "id": "mm-encoder",
     "no": "第 2 章",
     "title": "机器怎么「看」（ViT / CLIP / 编码器选型）",
     "verified": "2026-07-09"
    },
    {
     "id": "mm-fusion",
     "no": "第 3 章",
     "title": "模态怎么「拼」（三路线 + 原生 vs 拼管线）",
     "verified": "2026-07-09"
    },
    {
     "id": "mm-understanding",
     "no": "第 4 章",
     "title": "理解侧能力盘点（图 / 文档 / 视频 / 语音 + 格局）",
     "verified": "2026-08-01"
    },
    {
     "id": "mm-generation",
     "no": "第 5 章",
     "title": "生成侧能力盘点（扩散 vs 自回归 / 视频 / 语音）",
     "verified": "2026-07-09"
    },
    {
     "id": "mm-selection",
     "no": "第 6 章",
     "title": "选型与动手做（成本 / 延迟 / 精度、调用、部署）",
     "verified": "2026-07-09"
    },
    {
     "id": "mm-production",
     "no": "第 7 章",
     "title": "生产落地与坑（成本 / 幻觉 / 评估 / 安全）",
     "verified": "2026-07-09"
    },
    {
     "id": "mm-voice-realtime",
     "no": "第 8 章",
     "title": "语音与实时交互（延迟预算 / 级联 vs 端到端 / 打断 / RTC 框架）",
     "verified": "2026-08-01"
    },
    {
     "id": "mm-video-generation",
     "no": "第 9 章",
     "title": "视频生成（在位三家格局、按秒计价成本账、工作流与标识合规）",
     "verified": "2026-08-01"
    },
    {
     "id": "mm-cheatsheet",
     "no": "第 10 章",
     "title": "售前速查（术语 / 决策树 / 串联地图）",
     "verified": "2026-07-09"
    }
   ],
   "facts": [
    {
     "text": "闭源旗舰原生多模态：GPT-5.5（1.05M 上下文，收文本与图）/ Gemini 3.1 Pro（原生图音视频 + 1M 上下文 + 64K 输出）/ Claude Opus 5（视觉 + 1M，adaptive thinking）；三家中仅 Gemini 原生收音视频，thinking 档已成主流。旧口径 GPT-5 / Gemini 2.5 Pro / Claude 4.5 作废",
     "chapter": "mm-understanding",
     "verified": "2026-08-01",
     "source": "developers.openai.com 模型页（gpt-5.5）；deepmind.google Gemini 3.1 Pro 模型卡；platform.claude.com 模型总览 + anthropic.com/news/claude-opus-5（2026-07-24）",
     "recheck": "2026-09-05",
     "grade": "A",
     "cadence": "30",
     "due": "2026-08-31"
    },
    {
     "text": "开源 VLM 换代：Qwen3-VL（Apache-2.0，Instruct / Thinking 双档，2B–235B-A22B）与 InternVL3.5（Apache-2.0，官方称开源 MLLM 综合 SOTA）为当期主角；**官方仓库与模型卡均未公布 MMMU 数值，本册只写定性排位**，旧值 InternVL3-78B≈72.2% / Qwen2.5-VL-72B≈70.2% / OCRBench≈888 一并作废",
     "chapter": "mm-understanding",
     "verified": "2026-08-01",
     "source": "github.com/QwenLM/Qwen3-VL；github.com/OpenGVLab/InternVL 与 huggingface.co/OpenGVLab/InternVL3_5-241B-A28B",
     "recheck": "2026-09-05",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-31"
    },
    {
     "text": "原生图像生成两大流派：扩散（FLUX.2 / Midjourney）vs 自回归（GPT Image 2〔2026-04〕、Nano Banana 2 = Gemini 3.1 Flash Image〔2026-02〕、Luma）",
     "chapter": "mm-generation",
     "verified": "2026-08-01",
     "source": "Modelize / DualView / Curify 2026；08-01 巡检以 ropewalk / buildmvpfast 2026-07 横评复核",
     "recheck": "2026-09-05",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-31"
    },
    {
     "text": "GPT Image 2 全新自回归架构，比前代快 3–5×，多约束指令≈98% 准确、文字渲染近字符级",
     "chapter": "mm-generation",
     "verified": "2026-08-01",
     "source": "nanobananafree / Picsart 2026；08-01 巡检以 pixverse / ropewalk 2026-07 横评复核",
     "recheck": "2026-09-05",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-31"
    },
    {
     "text": "开源 VLM 可用 vLLM / SGLang 在 GPU 云自部署（Qwen3-VL / Llama 4 Scout / InternVL3.5）",
     "chapter": "mm-selection",
     "verified": "2026-08-01",
     "source": "Spheron 部署指南 2026；08-01 巡检按 QwenLM / OpenGVLab 仓库回写型号版本",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-30"
    },
    {
     "text": "理解侧主基准：MMMU（多学科理解）、OCRBench / DocVQA（文档）、Video-MME（视频）",
     "chapter": "mm-production",
     "verified": "2026-07-09",
     "source": "2026 VLM 评测综述",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "语音延迟口径：人类换话空隙 300–500ms；级联生产目标 P50 <1.5s；端到端标杆 <800ms（gpt-realtime-2.1 家族量级）；>1.5s 用户判定「坏了」",
     "chapter": "mm-voice-realtime",
     "verified": "2026-07-10",
     "source": "softcery / telnyx 2026 横评（延迟量级未复核，08-01 只随换代回写型号名）",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-08"
    },
    {
     "text": "级联时延拆帐：ASR 100–300ms + LLM 350–1000ms + TTS 90–200ms + 网络 50–200ms；2026 企业生产以级联为主（可审计 / 可换供应商）",
     "chapter": "mm-voice-realtime",
     "verified": "2026-07-10",
     "source": "softcery / speko.ai / modulate",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-08"
    },
    {
     "text": "端到端 S2S 格局：OpenAI **gpt-realtime-2.1 / 2.1-mini**（2026-07-06 发布；128K 上下文、32K 输出、文本/音频/图像入、p95 时延再降 ≥25%；前代 GPT-Realtime-2 为 2026-05-07，同批还有 Realtime-Translate $0.034/分钟、Realtime-Whisper $0.017/分钟）/ Gemini 3.1 Flash Live（2026-03-26，~200ms 首响、200+ 语言）/ Qwen3-Omni（Apache-2.0，119 文本 / 19 语音输入 / 10 语音输出语种，可自部署；Qwen3.5-Omni 技术报告 2026-04-20、256K 上下文，**未见开放权重故不进成品**）/ Kyutai Moshi（全双工先驱）",
     "chapter": "mm-voice-realtime",
     "verified": "2026-08-01",
     "source": "developers.openai.com/api/docs/models/gpt-realtime-2.1；community.openai.com 官方公告（2026-05-07 / 07-06）；github.com/QwenLM/Qwen3-Omni；huggingface.co/papers/2604.15804",
     "recheck": "2026-09-05",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-31"
    },
    {
     "text": "语音成本：级联 $0.01–0.17/分钟（组件各自计价，可预测）；端到端厂商只公布 token 单价——gpt-realtime-2.1 音频进 $32 / 出 $64 每百万 token、缓存命中输入 $0.4，2.1-mini 音频出 $20。**旧行「gpt-realtime 未缓存实测 $0.18–0.46/分钟、开缓存 $0.05–0.10、mini 便宜约 60%」随两轮换代作废**，端到端的分钟成本须按自身话务实测折算，不再登记外部实测值",
     "chapter": "mm-voice-realtime",
     "verified": "2026-08-01",
     "source": "developers.openai.com 模型与定价页；community.openai.com 2026-05-07 / 07-06 官方公告",
     "recheck": "2026-09-05",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-31"
    },
    {
     "text": "语音框架：Pipecat v1.0（2026-04，帧管线）/ LiveKit Agents（房间模型）；实测端到端 750–950ms 同量级；Vapi / Retell 为托管层",
     "chapter": "mm-voice-realtime",
     "verified": "2026-07-10",
     "source": "webrtc.ventures 2026-03 / cekura / f22labs",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-08"
    },
    {
     "text": "视频生成格局重组：**Sora 已退场**——OpenAI 消费端 2026-04-26 停服、Videos API 与 sora-2 / sora-2-pro 快照 2026-09-24 下线（2026-03-24 公告）。在位三家：Seedance 2.0（字节，创意控制 + 参考输入 12 文件）/ 可灵 3.0（快手，2026-04-23 起原生 4K 直出、06-17 出 3.0 Turbo）/ Veo 3.1（Google，官方每秒价：标准 $0.40 (720p/1080p)、$0.60 (4K)；Fast $0.10–0.30；Lite $0.05 (720p)、$0.08 (1080p)，均含音频）。补位候选 Runway Gen-4.5、阿里万相（Wan）。**原「34 倍价差（$0.022–$0.75）」作废**——Seedance / 可灵按积分或包月计、无官方每秒价，跨厂商倍数不可核，成品改用 Veo 同族十倍档差",
     "chapter": "mm-video-generation",
     "verified": "2026-08-01",
     "source": "developers.openai.com/api/docs/deprecations 与 help.openai.com Sora discontinuation；ai.google.dev/gemini-api/docs/pricing；klingai.com 更新日志；runway.com/research（Gen-4.5）",
     "recheck": "2026-09-05",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-31"
    },
    {
     "text": "即梦消费端口径：注册送 260 积分、5 秒视频约 20 积分（新用户约 13 次免费生成）",
     "chapter": "mm-video-generation",
     "verified": "2026-07-17",
     "source": "即梦平台/评测转述",
     "recheck": "2026-08-31",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-16"
    }
   ],
   "edges": [
    {
     "from": "mm-understanding",
     "to": "rag#rag-multimodal",
     "why": "本模块讲「模型多模态能力」↔ RAG 第 11 章讲「多模态内容怎么检索」，互为上下游；RAG 第 11 章已加回指页（2026-07-10），双向互指",
     "resolved": true
    },
    {
     "from": "mm-fusion",
     "to": "rag#rag-multimodal",
     "why": "「原生 vs 拼管线」的模型侧取舍 ↔ 多模态 RAG 的三条检索路线，同一取舍两个视角",
     "resolved": true
    },
    {
     "from": "mm-what-why",
     "to": "agent#agent-components",
     "why": "多模态感知（能看屏幕 / 图表）是 Agent computer use 的前提，视觉作为 Agent 的新「工具输入」；Agent 第 2 章已加回指页（2026-07-10），双向互指",
     "resolved": true
    },
    {
     "from": "mm-encoder",
     "to": "llm#llm-attention-qkv",
     "why": "ViT 与 Transformer 同源、注意力机制复用；视觉编码器 = Transformer 用在图像 patch 上；LLM 第 2 章已加「承上启下」回指页（2026-07-10），双向互指",
     "resolved": true
    },
    {
     "from": "mm-production",
     "to": "evaluation",
     "why": "多模态评估基准（MMMU / OCRBench / DocVQA / Video-MME）↔ Evaluation 模块判分方法与自建评估集",
     "resolved": true
    },
    {
     "from": "mm-production",
     "to": "security",
     "why": "跨模态提示注入（图 / 文档里藏指令）↔ Security 模块提示注入防护，注入入口从文本扩展到图像",
     "resolved": true
    },
    {
     "from": "mm-selection",
     "to": "llm-inference",
     "why": "视觉 token 膨胀让 prefill 变重、显存占用增大 ↔ LLM-Inference 的 prefill/decode 与 KV Cache",
     "resolved": true
    },
    {
     "from": "mm-voice-realtime",
     "to": "llm-inference#llminf-batching",
     "why": "语音链路延迟大头 = LLM 首 token；首 token 优化（批处理 / KV 缓存 / 流式）机制在 LLM-Inference 展开",
     "resolved": true
    },
    {
     "from": "mm-voice-realtime",
     "to": "agent#agent-components",
     "why": "语音是 Agent 的「耳与嘴」：实时链路为语音 Agent 提供交互层，Agent 侧编排与工具调用不变",
     "resolved": true
    },
    {
     "from": "mm-voice-realtime",
     "to": "solution-patterns#sp-customer-service",
     "why": "语音客服场景的方案视角（分流漏斗 / 解决率口径）在 Solution-Patterns 第 3 章展开（模块 2026-07-10 建成，原「候选」补实）；数字人场景另接 sp-digital-human",
     "resolved": true
    },
    {
     "from": "mm-video-generation",
     "to": "security#sec-china",
     "why": "AI 生成视频的标识义务与执法口径在 Security 第 8 章中国监管合规（讲义内已互引）",
     "resolved": true
    },
    {
     "from": "mm-video-generation",
     "to": "solution-patterns#sp-content-gen",
     "why": "营销素材工厂场景图纸在 SP 第 5 章；本章供「视频积木」的能力与成本口径",
     "resolved": true
    }
   ],
   "web": "./multimodal/index.html",
   "questions": [
    {
     "id": "q-multimodal-1",
     "q": "我的场景到底要不要上多模态？",
     "added": "2026-07-09",
     "chapters": [
      "triage",
      "mm-what-why"
     ]
    },
    {
     "id": "q-multimodal-2",
     "q": "该用原生多模态，还是自己拼 OCR + LLM？",
     "added": "2026-07-09",
     "chapters": [
      "mm-fusion"
     ]
    },
    {
     "id": "q-multimodal-3",
     "q": "传一张图到底要多少钱？为什么比文本慢？",
     "added": "2026-07-09",
     "chapters": [
      "mm-selection"
     ]
    },
    {
     "id": "q-multimodal-4",
     "q": "开源 VLM 能打过闭源旗舰吗？",
     "added": "2026-07-09",
     "chapters": [
      "mm-understanding"
     ]
    },
    {
     "id": "q-multimodal-5",
     "q": "模型看图会不会瞎编、看错？",
     "added": "2026-07-09",
     "chapters": [
      "mm-production"
     ]
    },
    {
     "id": "q-multimodal-6",
     "q": "生成图片用扩散还是自回归？",
     "added": "2026-07-09",
     "chapters": [
      "mm-generation"
     ]
    },
    {
     "id": "q-multimodal-7",
     "q": "端到端语音又快又自然，为什么还推级联？",
     "added": "2026-07-10",
     "chapters": [
      "mm-voice-realtime"
     ]
    },
    {
     "id": "q-multimodal-8",
     "q": "语音客服的延迟能压到多少？",
     "added": "2026-07-10",
     "chapters": [
      "mm-voice-realtime"
     ]
    },
    {
     "id": "q-multimodal-9",
     "q": "视频生成到底能不能商用了？",
     "added": "2026-07-17",
     "chapters": [
      "mm-video-generation"
     ]
    },
    {
     "id": "q-multimodal-10",
     "q": "识别准确率能做到多少？能不能把录入的人省了？",
     "added": "2026-07-23",
     "chapters": [
      "mm-understanding",
      "mm-production"
     ]
    },
    {
     "id": "q-multimodal-11",
     "q": "我们早就买了 OCR / 影像系统，凭什么再上一套？",
     "added": "2026-07-23",
     "chapters": [
      "mm-what-why",
      "mm-fusion"
     ]
    },
    {
     "id": "q-multimodal-12",
     "q": "生成的图和视频，法务能不能过？版权算谁的、必须打标识吗？",
     "added": "2026-07-23",
     "chapters": [
      "mm-generation",
      "mm-video-generation"
     ]
    },
    {
     "id": "q-multimodal-13",
     "q": "量真上来以后，成本会不会失控？",
     "added": "2026-07-23",
     "chapters": [
      "mm-selection",
      "mm-encoder"
     ]
    }
   ]
  },
  {
   "id": "predictive-ai-mlops",
   "dir": "Predictive-AI-MLOps",
   "layer": "工程保障层",
   "created": "2026-08-02",
   "updated": "2026-08-02",
   "chapters": [
    {
     "id": "pam-what-why",
     "no": "第 1 章",
     "title": "「我们已经有一堆模型了」：两种 AI 各管什么",
     "verified": "2026-08-02"
    },
    {
     "id": "pam-model-choice",
     "no": "第 2 章",
     "title": "算法取舍地图：表格、时序、排序、异常",
     "verified": "2026-08-02"
    },
    {
     "id": "pam-problem-framing",
     "no": "第 3 章",
     "title": "把业务问题切成可学的题：预测时点、标签窗口、样本单元",
     "verified": "2026-08-02"
    },
    {
     "id": "pam-features-time",
     "no": "第 4 章",
     "title": "特征的时间语义：point-in-time 正确性、穿越与训练服务偏差",
     "verified": "2026-08-02"
    },
    {
     "id": "pam-feature-store",
     "no": "第 5 章",
     "title": "特征平台：Feature Store 什么时候才真需要",
     "verified": "2026-08-02"
    },
    {
     "id": "pam-lifecycle",
     "no": "第 6 章",
     "title": "从实验到生产：实验记录、模型注册表与发布门",
     "verified": "2026-08-02"
    },
    {
     "id": "pam-monitoring",
     "no": "第 7 章",
     "title": "上线之后：七类信号、七种动作与再训练触发",
     "verified": "2026-08-02"
    },
    {
     "id": "pam-governance",
     "no": "第 8 章",
     "title": "可解释、公平与模型风险管理",
     "verified": "2026-08-02"
    },
    {
     "id": "pam-platform",
     "no": "第 9 章",
     "title": "一套平台装得下生成式和预测式吗",
     "verified": "2026-08-02"
    },
    {
     "id": "pam-cheatsheet",
     "no": "第 10 章",
     "title": "售前速查",
     "verified": "2026-08-02"
    }
   ],
   "facts": [
    {
     "text": "Google《Rules of Machine Learning》第 1 条为「Don't be afraid to launch a product without machine learning」，并写明「若你认为机器学习能带来 100% 的提升，启发式规则能带你走完其中一半」；第 4 条为「Keep the first model simple and get the infrastructure right」",
     "chapter": "pam-what-why",
     "verified": "2026-08-02",
     "source": "Google Developers 官方文档《Rules of Machine Learning: Best Practices for ML Engineering》 https://developers.google.com/machine-learning/guides/rules-of-ml",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-29"
    },
    {
     "text": "Sculley 等《Hidden Technical Debt in Machine Learning Systems》（NeurIPS 2015）的核心论断：真实世界的机器学习系统普遍会背上巨大的持续维护成本，风险因子包括边界侵蚀、纠缠、隐藏反馈回路、未申报的消费方、数据依赖与外部世界变化",
     "chapter": "pam-what-why",
     "verified": "2026-08-02",
     "source": "NeurIPS 2015 论文页（摘要原文） https://papers.nips.cc/paper_files/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-29"
    },
    {
     "text": "TabArena 活体基准（NeurIPS 2025 D&B Spotlight，arXiv:2506.16791 v4 2025-11-03）结论：梯度提升树在实用表格数据上仍是强对手；深度学习方法在更大时间预算下配合集成才追上；基础模型在小数据集上表现突出；跨模型集成才是当前表格机器学习的最好成绩",
     "chapter": "pam-model-choice",
     "verified": "2026-08-02",
     "source": "arXiv:2506.16791《TabArena: A Living Benchmark for Machine Learning on Tabular Data》摘要 https://arxiv.org/abs/2506.16791",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "TabPFN 官方模型规模上限（Prior Labs 文档 Models 页）：TabPFNv2 为 1 万样本 / 500 特征 / 10 类；TabPFN-2.6 为 10 万样本 / 2000 特征；TabPFN-3 与 TabPFN-3-Plus 为 100 万行 × 200 特征（可换成 10 万 ×2000 或 1000×2 万）、160 类",
     "chapter": "pam-model-choice",
     "verified": "2026-08-02",
     "source": "Prior Labs 官方文档 Models 页 https://docs.priorlabs.ai/models",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "M5 零售销量预测竞赛官方结论：这是第一次所有顶尖方法都是「纯」机器学习方法、且显著优于全部统计基准及其组合；前 50 名几乎全部采用按门店/品类训练的 LightGBM 模型，且全部使用跨序列共学；获奖方案在 WRMSSE 上平均比 24 个基准好 20% 以上；冠军是 6 个模型的等权平均",
     "chapter": "pam-model-choice",
     "verified": "2026-08-02",
     "source": "Makridakis / Spiliotis / Assimakopoulos《The M5 Accuracy competition: Results, findings and conclusions》（International Journal of Forecasting，预印本 PDF 第 22–24 页 Key findings 节） https://statmodeling.stat.columbia.edu/wp-content/uploads/2021/10/M5_accuracy_competition.pdf",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-29"
    },
    {
     "text": "ADBench 异常检测基准（30 个算法 × 57 个数据集，NeurIPS 2022）三条结论：被测无监督算法之间统计上谁也不比谁强；只要 1% 的标注异常，多数半监督方法就能超过最好的无监督方法；在受控环境下针对特定异常类型的最佳无监督方法可反超半监督与全监督",
     "chapter": "pam-model-choice",
     "verified": "2026-08-02",
     "source": "arXiv:2206.09426《ADBench: Anomaly Detection Benchmark》论文原文（NeurIPS 2022 Datasets & Benchmarks Track）摘要 https://arxiv.org/abs/2206.09426",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-29"
    },
    {
     "text": "谷歌《Rules of Machine Learning》第 29 条：把服务时用过的那组特征打进日志、再拿去训练，是保证「训得像服务」最稳的办法；同文给出训练服务偏差（training-serving skew）的三类成因——训练与服务管线处理数据的方式不同、训练与服务之间数据变了、模型与算法之间存在反馈回路",
     "chapter": "pam-features-time",
     "verified": "2026-08-02",
     "source": "Google for Developers《Rules of Machine Learning: Best Practices for ML Engineering》Rule #29 与 Training-Serving Skew 节，https://developers.google.com/machine-learning/guides/rules-of-ml",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-29"
    },
    {
     "text": "SageMaker Feature Store 离线库自动给每条记录附加三列：api_invocation_time（服务收到写入调用的时间）、write_time（真正落到离线库的时间，官方注明可用于构造时间旅行类查询）、is_deleted；事件时间由用户自建的时间列提供",
     "chapter": "pam-features-time",
     "verified": "2026-08-02",
     "source": "AWS 官方文档《Amazon SageMaker Feature Store offline store data format》，https://docs.aws.amazon.com/sagemaker/latest/dg/feature-store-offline.html",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "SageMaker Feature Store 调用 PutRecord 后数据先缓冲、批量，在 15 分钟内写入 S3 离线库；离线库只支持 Parquet 文件格式，表格式可选 AWS Glue（默认）或 Apache Iceberg",
     "chapter": "pam-feature-store",
     "verified": "2026-08-02",
     "source": "AWS 官方文档《Amazon SageMaker Feature Store offline store data format》，https://docs.aws.amazon.com/sagemaker/latest/dg/feature-store-offline.html",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "Feast 官方文档明列它「不是什么」：不是通用数据管线系统、不管理或编排复杂工作流 DAG、不是数据仓库也不是组织内加工数据的权威存放地、不是数据库；它是数仓下游的一层轻量服务层。其核心卖点之一是生成时点正确（point-in-time correct）的特征集以避免数据泄漏",
     "chapter": "pam-feature-store",
     "verified": "2026-08-02",
     "source": "Feast 官方文档 Introduction 页与 FAQ，https://docs.feast.dev/",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-29"
    },
    {
     "text": "Vertex AI Feature Store（Legacy）已弃用：官方通告写明自 2026-05-17 起不再新增功能、只提供关键补丁，2027-02-17 完全退役且 API 下线；去处是 Vertex AI Feature Store（V2，2023-11-17 推出）或按官方迁移指南迁到 Bigtable。该产品线的当前文档挂在「Gemini Enterprise Agent Platform」名下",
     "chapter": "pam-feature-store",
     "verified": "2026-08-02",
     "source": "Google Cloud 官方文档 Vertex AI Feature Store 概述页弃用通告，https://docs.cloud.google.com/vertex-ai/docs/featurestore/overview；配套《Migrate from Vertex AI Feature Store (Legacy) to Bigtable》",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "阿里云 PAI-FeatureStore 自动完成在线表与离线表的构建并保证两侧一致：离线存储对接 MaxCompute，在线可经 Flink 处理后写入 Hologres、Tablestore 或自研的 FeatureDB",
     "chapter": "pam-feature-store",
     "verified": "2026-08-02",
     "source": "阿里云帮助中心《FeatureStore 概述》（人工智能平台 PAI），https://help.aliyun.com/zh/pai/featurestore",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "Azure Machine Learning 托管特征库的特征取回支持时点连接（point-in-time join，官方也称 time travel）以避免数据泄漏，走 SDK 的 get_offline_features() 或内置特征取回流水线组件；Databricks 侧对应能力靠在特征表上声明 timeseries_columns（Unity Catalog 版）或 timestamp_keys（工作区版），且时序特征表须恰有一个时间键、不能带分区列",
     "chapter": "pam-feature-store",
     "verified": "2026-08-02",
     "source": "Microsoft Learn《Feature retrieval specification and usage in training and inference》；Databricks 官方文档《Point-in-time feature joins》",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "MLflow 自 2.9.0 起把模型注册表的四阶段（None / Staging / Production / Archived）标为弃用、将在未来某个大版本移除，官方替代是模型版本别名（alias）与标签（tag）；官方理由是阶段这套状态机对 MLOps 流程「过于死板」，而别名允许同一版本挂多个、可随时改指",
     "chapter": "pam-lifecycle",
     "verified": "2026-08-02",
     "source": "MLflow 官方文档《Model Registry Workflows》弃用说明，https://mlflow.org/docs/latest/ml/model-registry/workflow/",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "SageMaker 模型注册表的批准状态为 PendingManualApproval / Approved / Rejected 三态，可由 SDK、Studio 或流水线中的条件步骤更新；官方列出的合法迁移含 PendingManualApproval→Approved（触发 CI/CD 部署）、→Rejected、Rejected→Approved、Approved→Rejected",
     "chapter": "pam-lifecycle",
     "verified": "2026-08-02",
     "source": "AWS 官方文档《Update the Approval Status of a Model》，https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry-approve.html",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "SageMaker 影子测试：影子变体接收从生产变体复制来的一定比例请求但不返回任何响应；一个端点最多一个影子变体，且此时最多一个生产变体；时长默认 7 天、最短 1 小时、最长 30 天，测试结束端点自动恢复原状；Serverless 推理、异步推理、多模型端点、多容器端点、Marketplace 容器与 Inf1 实例的端点不支持",
     "chapter": "pam-lifecycle",
     "verified": "2026-08-02",
     "source": "AWS 官方文档《Create a shadow test》，https://docs.aws.amazon.com/sagemaker/latest/dg/shadow-tests-create.html",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "阿里云 PAI 在同一工作空间内提供两件对应能力：「AI 资产管理 > 模型」支持把训练好的模型注册进来、按版本持续更新并直接部署至 EAS（部署配置自动透传）；Model Gallery 创建微调训练任务时可关联新建或已有实验，任务的超参等元数据、TensorBoard 指标与输出模型统一落在实验输出路径下",
     "chapter": "pam-lifecycle",
     "verified": "2026-08-02",
     "source": "阿里云帮助中心《如何注册模型、部署模型及管理模型》，https://help.aliyun.com/zh/pai/user-guide/register-and-manage-models；《在 Model Gallery 中使用实验管理》，https://help.aliyun.com/zh/pai/experiment-management",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "Evidently 的漂移检测默认规则按参考集大小切换：参考集 ≤1000 行用 KS 检验（数值型）与卡方检验（类别型），p≤0.05 判漂移；>1000 行改用 Wasserstein 距离与 Jensen-Shannon 散度，阈值均为 ≥0.1",
     "chapter": "pam-monitoring",
     "verified": "2026-08-02",
     "source": "Evidently 官方文档 Data drift（docs.evidentlyai.com/metrics/explainer_drift）",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "PSI（群体稳定性指数）的 0.1 / 0.25 分档最早出自 Lewis 1994 的信用评分实务，是与样本量无关的经验常数；近年学术综述批评它在小样本上频繁误报、在大样本上该报不报",
     "chapter": "pam-monitoring",
     "verified": "2026-08-02",
     "source": "《A critical review of existing and new population stability testing procedures in credit risk scoring》arXiv 2303.01227；Yurdakul & Naranjo 2020《Statistical properties of the population stability index》",
     "recheck": "—",
     "grade": "B",
     "cadence": "180",
     "due": "2027-01-29"
    },
    {
     "text": "无真值期性能估计（NannyML 的 CBPE，Confidence-Based Performance Estimation）以概率校准良好与样本量充足为前提；官方明确写「CBPE 在概念漂移（P(Y／X) 改变）下不成立」，且在训练时未覆盖的特征空间区域会失效；回归任务对应方法为 DLE",
     "chapter": "pam-monitoring",
     "verified": "2026-08-02",
     "source": "NannyML 官方文档 how_it_works/performance_estimation（nannyml.readthedocs.io/en/stable）",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-29"
    },
    {
     "text": "Azure Machine Learning 表格数据内建监控信号五类：数据漂移、预测漂移、数据质量、特征归因漂移、模型性能；其中特征归因漂移必须有训练数据、模型性能必须有回灌真值，且两者当日均标 preview",
     "chapter": "pam-monitoring",
     "verified": "2026-08-02",
     "source": "Microsoft Learn《Model monitoring in production - Azure Machine Learning》（文档标注日期 2026-01-27）",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "AWS 文档标明 Amazon SageMaker Model Monitor 已不再向新客户开放，现有客户照常使用但不再新增功能；官方改荐用开源方案（SageMaker MLflow Apps + Evidently）配合 QuickSight 与 CloudWatch 自建替代",
     "chapter": "pam-monitoring",
     "verified": "2026-08-02",
     "source": "AWS 文档 sagemaker/latest/dg/model-monitor.html 与 model-monitor-availability-change.html",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "美联储、OCC、FDIC 于 2026-04-17 发布 SR 26-2《Revised Guidance on Model Risk Management》，取代 SR 11-7（2011-04-04）与 SR 21-8，主要适用于总资产超 300 亿美元的美国银行；保留概念稳健性／持续监测／结果分析三件验证与「有效挑战」及独立性要求；全文未出现 AI 或机器学习字样，模型被定义为把输入变成定量估计的复杂定量方法，排除纯算术与确定性规则",
     "chapter": "pam-governance",
     "verified": "2026-08-02",
     "source": "美联储 SR 26-2 通知页与所附指引全文（federalreserve.gov/supervisionreg/srletters/sr2602.htm 与 SR2602.pdf）",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "Kleinberg、Mullainathan、Raghavan 2016 证明：校准性与两类错误率均等这三个公平条件，除非各群基础率相同或预测完美，否则不可同时满足",
     "chapter": "pam-governance",
     "verified": "2026-08-02",
     "source": "《Inherent Trade-Offs in the Fair Determination of Risk Scores》arXiv 1609.05807",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-29"
    },
    {
     "text": "Shapley 型归因在特征相关时会把同一份贡献在相关特征间任意分配，并可能采样出现实中不存在的特征组合；它衡量的是与模型输出的统计关联，不含因果结构",
     "chapter": "pam-governance",
     "verified": "2026-08-02",
     "source": "Molnar《Interpretable Machine Learning》Shapley 章；《Causal Analysis of Shapley Values: Conditional vs. Marginal》arXiv 2409.06157",
     "recheck": "—",
     "grade": "B",
     "cadence": "180",
     "due": "2027-01-29"
    },
    {
     "text": "模型卡（Model Card）格式出自 Mitchell 等 2019 年论文，要求写明预期用途与不适用场景、评估过程，以及按人群分组和交叉分组的表现",
     "chapter": "pam-governance",
     "verified": "2026-08-02",
     "source": "《Model Cards for Model Reporting》arXiv 1810.03993（Mitchell 等，FAT* 2019）",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-29"
    },
    {
     "text": "同一套实验追踪与模型注册表可以同时装传统预测式模型与生成式应用：MLflow 官方表述为同一套工具既管 transformer 训练管线，也管多智能体 RAG 系统",
     "chapter": "pam-platform",
     "verified": "2026-08-02",
     "source": "MLflow 官方博客与文档（mlflow.org，2026-08-02 查见）",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "Azure 侧两种 AI 分属两个门面：Azure Machine Learning 主管自训练的预测式模型与 MLOps，Microsoft Foundry 主管生成式应用；两处都能接大模型，微软官方为此专门提供「该用哪个工作室」的选择指引",
     "chapter": "pam-platform",
     "verified": "2026-08-02",
     "source": "Microsoft Learn《What is Azure Machine Learning?》（页面 updated 2026-03-30）",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-31"
    },
    {
     "text": "预测式监控的云上落点（服务名快照）：Azure ML 表格数据内建监控信号、Vertex AI 模型监控、AWS SageMaker Model Monitor（已不再向新客户开放，官方改荐开源自建）；开源侧代表为 Evidently（漂移检测）与 NannyML（无真值期性能估计）",
     "chapter": "pam-monitoring",
     "verified": "2026-08-02",
     "source": "Microsoft Learn《Model monitoring in production - Azure Machine Learning》；AWS 文档 sagemaker/latest/dg/model-monitor.html 与 model-monitor-availability-change.html；Google Cloud Vertex AI 模型监控文档；Evidently 与 NannyML 官方文档（均 2026-08-02 查见）",
     "recheck": "—",
     "grade": "A",
     "cadence": "30",
     "due": "2026-09-01"
    },
    {
     "text": "两种 AI 的云上门面（服务名快照）：注册与实验为 SageMaker 托管 MLflow、Vertex AI 模型注册表、Azure ML 注册表；生成式侧另有 Bedrock、Vertex AI Studio、Microsoft Foundry；在线服务为 SageMaker 端点、Vertex 端点、Azure ML 在线端点",
     "chapter": "pam-platform",
     "verified": "2026-08-02",
     "source": "Microsoft Learn《What is Azure Machine Learning?》（页面 updated 2026-03-30）；AWS SageMaker 与 Bedrock 产品文档；Google Cloud Vertex AI 产品文档（均 2026-08-02 查见）",
     "recheck": "—",
     "grade": "A",
     "cadence": "30",
     "due": "2026-09-01"
    }
   ],
   "edges": [
    {
     "from": "pam-what-why",
     "to": "solution-patterns#sp-method",
     "why": "「我们已经有 X 了」的通用答法（增量价值三问）在 SP 与实战包已成型，本册补预测式这一格的具体内容：存量模型是资产不是竞品，切入点在运维、生成式能力、数据与特征底座三条（双向）",
     "resolved": true
    },
    {
     "from": "pam-monitoring",
     "to": "ai-ops#ops-drift",
     "why": "同名不同物，最需要互指的一条：那边的漂移发生在没有客观真值的生成式应用上（供应商静默换权重、输出漂移），本册的漂移有真值但有标签延迟，七类信号对七种动作；两章各自声明「这里说的漂移指哪一种」（双向）",
     "resolved": true
    },
    {
     "from": "pam-lifecycle",
     "to": "ai-ops#ops-release",
     "why": "发布门的骨架（门禁在前、影子、金丝雀、回滚是切指针）两边共用，不重讲；本册只补预测式独有的两点——可以双跑逐条对账，以及标签没成熟前判不出胜负",
     "resolved": true
    },
    {
     "from": "pam-features-time",
     "to": "data-engineering#de-pipeline",
     "why": "上下游：数据怎么进来、怎么增量同步归 DE，本册接手的是同一份数据被当成特征时的时间语义与点时取数",
     "resolved": true
    },
    {
     "from": "pam-monitoring",
     "to": "data-engineering#de-quality",
     "why": "七类信号里第一类「数据质量故障」的检查项与责任面在 DE 第 5 章，本册只讲怎么把它和漂移信号分开——分不开就会去重训一个其实没坏的模型（双向）",
     "resolved": true
    },
    {
     "from": "pam-model-choice",
     "to": "model-landscape#ml-selection",
     "why": "边界声明：客户问「用什么模型」要先分清问的是哪一类——大模型选型（榜单、价格带、许可证）在 Model-Landscape，表格与时序模型的算法取舍在本册",
     "resolved": true
    },
    {
     "from": "pam-problem-framing",
     "to": "evaluation#eval-build",
     "why": "对照关系：Evaluation 讲没有客观真值时怎么建集、怎么判分，本册讲有客观真值时指标怎么挑、离线指标涨了业务没涨怎么办；两边共用「签字的验收线」这套交付语言",
     "resolved": true
    },
    {
     "from": "pam-lifecycle",
     "to": "fine-tuning#ft-eval-deploy",
     "why": "「训练」这个词两边指的不是一回事：那边是拿自己数据改 LLM 权重、产物是 adapter，本册是从头拟合一个预测式模型、产物多数走批量打分；售前要能当场分清客户说的是哪一种",
     "resolved": true
    },
    {
     "from": "pam-platform",
     "to": "ai-infra-platform#aip-overview",
     "why": "共用得了的那半截（K8s+GPU、队列与配额、存储、容错）全在 AIP，本册不重讲，只讲上层为什么合并不了",
     "resolved": true
    },
    {
     "from": "pam-governance",
     "to": "security#sec-china",
     "why": "备案范围与合规数字在 Security 第 8 章，本册不复制；只讲预测式独有的落点——拒绝理由要说得出、模型卡、独立验证与持续监控记录",
     "resolved": true
    }
   ],
   "web": "",
   "questions": []
  },
  {
   "id": "pe",
   "dir": "Prompt-Engineering",
   "layer": "基础层",
   "created": "2026-07-09",
   "updated": "2026-08-02",
   "chapters": [
    {
     "id": "pe-what-why",
     "no": "第 1 章",
     "title": "是什么 / 为什么",
     "verified": "2026-07-09"
    },
    {
     "id": "pe-anatomy",
     "no": "第 2 章",
     "title": "提示词解剖（角色/四要素/分隔符）",
     "verified": "2026-07-09"
    },
    {
     "id": "pe-core-techniques",
     "no": "第 3 章",
     "title": "核心技巧（zero/few-shot、CoT、结构化输出、清晰指令）",
     "verified": "2026-07-09"
    },
    {
     "id": "pe-advanced-reasoning",
     "no": "第 4 章",
     "title": "进阶推理与编排（自洽性、ReAct、提示词链、推理模型时代）",
     "verified": "2026-07-09"
    },
    {
     "id": "pe-engineering",
     "no": "第 5 章",
     "title": "工程化与自动优化（版本化、评估驱动、DSPy、缓存）",
     "verified": "2026-07-09"
    },
    {
     "id": "pe-security",
     "no": "第 6 章",
     "title": "安全与风险（提示词注入、越狱、OWASP、纵深防御）",
     "verified": "2026-07-09"
    },
    {
     "id": "pe-presales-map",
     "no": "第 7 章",
     "title": "售前视角收拢（问题速查、选型树、上云全景、串联）",
     "verified": "2026-07-09"
    }
   ],
   "facts": [
    {
     "text": "推理模型阵容（GPT-5.6、Claude 5、Gemini 3.1 Pro、Grok 4.3、DeepSeek V4）已把 CoT 内建，不再需手写「一步步思考」；控制点从「思考预算 token 数」换成 effort（low/medium/high/xhigh/max，默认 high）；思考 token 照常计费但原始思维链不返回，最多给摘要",
     "chapter": "pe-advanced-reasoning",
     "verified": "2026-07-30",
     "source": "Claude API 参考（模型与 effort 口径）；阵容与本库 Model-Landscape 册同源",
     "recheck": "2026-10-31",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-29"
    },
    {
     "text": "两个经典提示词旋钮在 Claude 当前主力模型上已移除：temperature/top_p/top_k（Opus 5、Fable 5、Opus 4.8·4.7 传了返回 400）与助手预填充 prefill（4.6 及以后返回 400，改用结构化输出）",
     "chapter": "pe-advanced-reasoning",
     "verified": "2026-07-30",
     "source": "Claude API 参考（迁移指南 breaking changes）",
     "recheck": "2026-10-31",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-28"
    },
    {
     "text": "DSPy 已到 3.x 线（当前稳定版 3.2.1，2026-05-05；3.3.0b1 为预发布，2026-05-28）——库内原写「2.x」是版本框架错，2026-08-01 更正；默认优化器 MIPROv2（贝叶斯联合优化指令+示例，结构化任务较手写 +10~40%）；GEPA 反射式进化优化器较 MIPROv2 +13%、rollout 少 35×，ICLR 2026 oral",
     "chapter": "pe-engineering",
     "verified": "2026-07-09",
     "source": "版本＝github.com/stanfordnlp/dspy releases（版本口径 2026-08-01 重核）；优化器数字＝futureagi（DSPy optimizers 2026）、morphllm（GEPA，2026-07-09 后未重核）",
     "recheck": "2026-11-30",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "提示词缓存：截至 2026-06 三大厂缓存读取价约为基础输入价 0.1×（约 1 折，省约 90%）；OpenAI 自动（≥1024 token）、Anthropic 手动 cache_control 且写入加价（5min 1.25×/1h 2×）、Gemini 显式+按小时存储计费",
     "chapter": "pe-engineering",
     "verified": "2026-07-20",
     "source": "leanlm、prompthub、ofox.ai、artificialanalysis；2026-07-20 对照 Anthropic 官方定价文档修正折扣方向（原核实笔记为\"省约 90%\"，成品曾误写成\"打 9 折\"）；缓存按前缀匹配（前缀改一字节则其后全失效）；最小可缓存前缀随模型不同（512–4096 token，且不随代际单调），低于门槛静默不缓存不报错",
     "recheck": "2026-10-31",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-19"
    },
    {
     "text": "各云提示词服务：AWS Bedrock Prompt Management + Advanced Prompt Optimization（改写/迁移+评估环）；Vertex AI / Gemini Enterprise Prompt Optimizer；Azure AI Foundry Prompt Flow",
     "chapter": "pe-engineering / pe-presales-map",
     "verified": "2026-07-09",
     "source": "aws.amazon.com/bedrock/prompt-management、AWS News Blog、InfoWorld",
     "recheck": "2027-01-31",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "OWASP Top 10 for LLM Applications 2025：LLM01 提示词注入连续两版第一；RAG 与微调都不能根治注入，只能纵深防御",
     "chapter": "pe-security",
     "verified": "2026-07-09",
     "source": "OWASP GenAI（https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/）、mend/aembit/promptfoo 解读",
     "recheck": "2027-01-31",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-05"
    },
    {
     "text": "云护栏：AWS Bedrock Guardrails、Azure AI Content Safety、Google Vertex 安全过滤 / Model Armor",
     "chapter": "pe-security",
     "verified": "2026-07-09",
     "source": "各云官方文档",
     "recheck": "2027-01-31",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-07"
    }
   ],
   "edges": [
    {
     "from": "pe-what-why",
     "to": "fine-tuning#ft-when",
     "why": "选型边界：提示词到头了、才上微调；对方第 1 章讲「何时微调 vs 提示词/RAG」，互为参照",
     "resolved": true
    },
    {
     "from": "pe-what-why",
     "to": "rag#rag-what-why",
     "why": "「提示词 vs RAG」的选型边界：补知识用 RAG，改行为用提示词",
     "resolved": true
    },
    {
     "from": "pe-anatomy",
     "to": "llm#llm-inference-kv",
     "why": "提示词为什么有效，根子在上下文窗口与注意力——上下文工程的「物理学」（讲义第 2/4 章埋点）",
     "resolved": true
    },
    {
     "from": "pe-advanced-reasoning",
     "to": "agent#agent-context",
     "why": "ReAct、上下文工程就是提示词技巧在「工具循环」里的应用；Agent 第 5 章为工程化展开",
     "resolved": true
    },
    {
     "from": "pe-engineering",
     "to": "evaluation#eval-methods",
     "why": "评估驱动的提示词优化直接用 Evaluation 的判分四法 / LLM-as-a-Judge（eval-judge）",
     "resolved": true
    },
    {
     "from": "pe-security",
     "to": "security（候选）",
     "why": "提示词注入是未来 Security 模块的一块",
     "resolved": false
    }
   ],
   "web": "./prompt-engineering/index.html",
   "questions": [
    {
     "id": "q-pe-1",
     "q": "提示词工程会不会很快就没用了？",
     "added": "2026-07-09",
     "chapters": [
      "pe-what-why",
      "pe-advanced-reasoning"
     ]
    },
    {
     "id": "q-pe-2",
     "q": "怎么保证输出永远是合法 JSON？",
     "added": "2026-07-09",
     "chapters": [
      "pe-core-techniques"
     ]
    },
    {
     "id": "q-pe-3",
     "q": "推理模型还需要写思维链提示吗？",
     "added": "2026-07-09",
     "chapters": [
      "pe-advanced-reasoning"
     ]
    },
    {
     "id": "q-pe-4",
     "q": "怎么降低我们的 API 成本？",
     "added": "2026-07-09",
     "chapters": [
      "pe-engineering",
      "src-cache"
     ]
    },
    {
     "id": "q-pe-5",
     "q": "提示词能自动优化吗？",
     "added": "2026-07-09",
     "chapters": [
      "pe-engineering",
      "src-dspy"
     ]
    },
    {
     "id": "q-pe-6",
     "q": "提示词注入能彻底防住吗？",
     "added": "2026-07-09",
     "chapters": [
      "pe-security",
      "src-owasp"
     ]
    },
    {
     "id": "q-pe-7",
     "q": "提示词也要版本管理？至于吗？",
     "added": "2026-07-09",
     "chapters": [
      "pe-engineering",
      "pe-anatomy"
     ]
    },
    {
     "id": "q-pe-8",
     "q": "为什么我说「不要 X」它还是做了？",
     "added": "2026-07-09",
     "chapters": [
      "pe-core-techniques"
     ]
    },
    {
     "id": "q-pe-9",
     "q": "不就是写几句话吗，凭什么单收这笔钱？",
     "added": "2026-07-23",
     "chapters": [
      "pe-what-why",
      "pe-engineering"
     ]
    },
    {
     "id": "q-pe-10",
     "q": "以后换个模型，提示词是不是全废了？",
     "added": "2026-07-23",
     "chapters": [
      "pe-anatomy",
      "pe-advanced-reasoning",
      "pe-engineering"
     ]
    },
    {
     "id": "q-pe-11",
     "q": "提示词能不能交给业务同事自己写？改坏了算谁的？",
     "added": "2026-07-23",
     "chapters": [
      "pe-anatomy",
      "pe-engineering",
      "pe-presales-map"
     ]
    }
   ]
  },
  {
   "id": "rag",
   "dir": "RAG",
   "layer": "应用模式层",
   "created": "2026-07-07",
   "updated": "2026-08-02",
   "chapters": [
    {
     "id": "rag-what-why",
     "no": "第 1 章",
     "title": "是什么/为什么",
     "verified": "2026-07-07"
    },
    {
     "id": "rag-embedding",
     "no": "第 2 章",
     "title": "向量检索与 Embedding",
     "verified": "2026-07-07"
    },
    {
     "id": "rag-chunking",
     "no": "第 3 章",
     "title": "切分策略 Chunking",
     "verified": "2026-07-07"
    },
    {
     "id": "rag-reranking",
     "no": "第 4 章",
     "title": "重排序 Reranking",
     "verified": "2026-07-07"
    },
    {
     "id": "rag-evaluation",
     "no": "第 5 章",
     "title": "常见评估方法",
     "verified": "2026-07-07"
    },
    {
     "id": "rag-pipeline",
     "no": "第 6 章",
     "title": "最小 RAG 管线",
     "verified": "2026-07-08"
    },
    {
     "id": "rag-hybrid",
     "no": "第 7 章",
     "title": "混合检索",
     "verified": "2026-07-08"
    },
    {
     "id": "rag-agentic",
     "no": "第 8 章",
     "title": "Agentic RAG",
     "verified": "2026-07-08"
    },
    {
     "id": "rag-production",
     "no": "第 9 章",
     "title": "生产化与常见坑",
     "verified": "2026-07-08"
    },
    {
     "id": "rag-graphrag",
     "no": "第 10 章",
     "title": "GraphRAG：图谱增强检索",
     "verified": "2026-07-09"
    },
    {
     "id": "rag-multimodal",
     "no": "第 11 章",
     "title": "多模态 RAG",
     "verified": "2026-07-09"
    },
    {
     "id": "rag-structured",
     "no": "第 12 章",
     "title": "结构化数据 RAG（Text-to-SQL 与语义层）",
     "verified": "2026-07-09"
    }
   ],
   "facts": [
    {
     "text": "Cohere Rerank 当前主线 v4.0（pro 重质量 / fast 低延迟高吞吐，多语言+半结构化），v3.5 与 v3.0 系仍在服务线",
     "chapter": "rag-reranking",
     "verified": "2026-07-12",
     "source": "docs.cohere.com/docs/rerank",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-10"
    },
    {
     "text": "混合检索为生产最低标配，RRF k≈60 为主流引擎原生支持",
     "chapter": "rag-hybrid",
     "verified": "2026-07-08",
     "source": "Elasticsearch / Qdrant 官方文档",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-06"
    },
    {
     "text": "Agentic RAG 五大生产模式（Router/ReAct/Plan-Execute/Multi-Agent/Self-RAG）+ CRAG",
     "chapter": "rag-agentic",
     "verified": "2026-07-08",
     "source": "arXiv 2501.09136、LangGraph 官方教程",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-04"
    },
    {
     "text": "生产组合主流：LlamaIndex + LangGraph + Langfuse/LangSmith",
     "chapter": "rag-production",
     "verified": "2026-07-08",
     "source": "2026-07 框架对比评测",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-06"
    },
    {
     "text": "朴素 RAG 检索环节失败率约四成",
     "chapter": "rag-production",
     "verified": "2026-07-08",
     "source": "raw-data/2026-07-08 核实笔记",
     "recheck": "—",
     "grade": "B",
     "cadence": "180",
     "due": "2027-01-04"
    },
    {
     "text": "Contextual Retrieval 实测降检索失败率 49%~67%",
     "chapter": "rag-chunking",
     "verified": "2026-07-07",
     "source": "Anthropic Cookbook",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-03"
    },
    {
     "text": "BGE M3 为开源多语言 embedding 代表方案",
     "chapter": "rag-embedding",
     "verified": "2026-07-07",
     "source": "arXiv 2402.03216",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-05"
    },
    {
     "text": "全量 GraphRAG 索引成本 6–8 倍；LazyGraphRAG 压至 0.1%、全局查询省约 700 倍",
     "chapter": "rag-graphrag",
     "verified": "2026-07-09",
     "source": "Microsoft GraphRAG 文档、2026 实践者评测",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "多模态三路线：Caption / 统一嵌入（Cohere Embed 4、voyage-multimodal）/ ColPali 系晚交互",
     "chapter": "rag-multimodal",
     "verified": "2026-07-09",
     "source": "arXiv 2407.01449、BigData Boutique 2026",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "裸 Text-to-SQL 准确率随基准真实度分档（学术单轮 80–90% / 中等企业化基准 50–70% / 最难企业基准 Spider 2.0 类约 20%），语义层抬至 85–95%（覆盖查询近 100%）；对客讲最低那档",
     "chapter": "rag-structured",
     "verified": "2026-07-23",
     "source": "dbt 2026 基准 + Spider 2.0 / BEAVER / Spider-Ent（2026-07-23 复核；分档口径与 SP 对齐——原 07-09 只登 50–70%，与 SP 的 10–21% 打架，已按基准真实度合成一套）",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-21"
    }
   ],
   "edges": [
    {
     "from": "rag-what-why",
     "to": "pe#pe-what-why",
     "why": "「提示词 vs RAG」选型两面 + 检索内容要塞进提示词才生效；讲义已加「与 Prompt Engineering 的关系」页回指",
     "resolved": true
    },
    {
     "from": "rag-agentic",
     "to": "agent#agent-context",
     "why": "RAG 第 8 章串联页 ↔ Agent 第 5 章\"与 RAG 的握手\"，双向互引",
     "resolved": true
    },
    {
     "from": "rag-evaluation",
     "to": "evaluation",
     "why": "检索质量指标（忠实度、上下文精确率/召回率）↔ Evaluation 模块指标体系（2026-07-09 转正）",
     "resolved": true
    },
    {
     "from": "rag-what-why",
     "to": "fine-tuning",
     "why": "\"改知识用 RAG vs 改行为用微调\"的取舍，与 Fine-tuning 模块互为参照（2026-07-09 转正）",
     "resolved": true
    },
    {
     "from": "rag-what-why",
     "to": "llm#llm-inference-kv",
     "why": "\"长上下文 vs RAG\"的架构论据（成本/有效性/权限）在 LLM 原理第 4 章，双向互为弹药",
     "resolved": true
    },
    {
     "from": "rag-graphrag",
     "to": "rag#rag-agentic",
     "why": "向量+图谱\"按问题类型路由\"是第 8 章 Router 模式的应用（章内承接）",
     "resolved": true
    },
    {
     "from": "rag-structured",
     "to": "agent#agent-components",
     "why": "SQL 查数包成 agent 工具，与文档检索并列路由，指向 Agent 模块工具使用章",
     "resolved": true
    },
    {
     "from": "rag-multimodal",
     "to": "multimodal#mm-fusion",
     "why": "本章讲「多模态内容怎么检索」，Multimodal 模块讲「模型怎么看懂图」，互为上下游；第 11 章已加「与 Multimodal 模块的关系」页（2026-07-10），双向互指",
     "resolved": true
    },
    {
     "from": "rag-structured",
     "to": "solution-patterns#sp-chatbi",
     "why": "本章讲 Text-to-SQL 与语义层的机制，SP 第 8 章是其场景视角（口径战场/三道闸/产品格局）——双向互指（2026-07-11）",
     "resolved": true
    },
    {
     "from": "rag-chunking / rag-embedding",
     "to": "data-engineering#de-parsing / de-vectordb",
     "why": "上游供给：解析产物进切分（解析质量决定切分质量）；向量库规模化选型与迁移在 Data-Engineering 第 4 章——双向互指（2026-07-11）",
     "resolved": true
    }
   ],
   "web": "./rag/index.html",
   "questions": [
    {
     "id": "q-rag-1",
     "q": "RAG 和直接微调模型，我到底该选哪个？",
     "added": "2026-07-07",
     "chapters": [
      "rag-what-why"
     ]
    },
    {
     "id": "q-rag-2",
     "q": "块到底该切多大？有没有标准答案？",
     "added": "2026-07-07",
     "chapters": [
      "rag-chunking"
     ]
    },
    {
     "id": "q-rag-3",
     "q": "已经有向量检索了，为什么还要单独加重排序？",
     "added": "2026-07-07",
     "chapters": [
      "rag-reranking"
     ]
    },
    {
     "id": "q-rag-4",
     "q": "回答不准，到底是检索的锅还是模型的锅？",
     "added": "2026-07-07",
     "chapters": [
      "doctor",
      "rag-evaluation"
     ]
    },
    {
     "id": "q-rag-5",
     "q": "向量检索不是更先进吗，为什么还要「老古董」BM25？",
     "added": "2026-07-08",
     "chapters": [
      "rag-hybrid"
     ]
    },
    {
     "id": "q-rag-6",
     "q": "Agentic RAG 比普通 RAG 贵多少、慢多少？",
     "added": "2026-07-08",
     "chapters": [
      "rag-agentic"
     ]
    },
    {
     "id": "q-rag-7",
     "q": "上线后效果越来越差，怎么排查？",
     "added": "2026-07-08",
     "chapters": [
      "rag-production"
     ]
    },
    {
     "id": "q-rag-8",
     "q": "数据安全怎么保证？会不会泄露？",
     "added": "2026-07-08",
     "chapters": [
      "rag-production"
     ]
    },
    {
     "id": "q-rag-9",
     "q": "GraphRAG 是不是智商税？听说索引贵好几倍。",
     "added": "2026-07-09",
     "chapters": [
      "rag-graphrag"
     ]
    },
    {
     "id": "q-rag-10",
     "q": "我们的资料全是扫描件 PDF，怎么办？",
     "added": "2026-07-09",
     "chapters": [
      "rag-multimodal"
     ]
    },
    {
     "id": "q-rag-11",
     "q": "问数这块，这不就是 BI 吗？会不会替代我们 BI 团队？",
     "added": "2026-07-09",
     "chapters": [
      "rag-structured"
     ]
    },
    {
     "id": "q-rag-12",
     "q": "准确率能做到多少？给个数。",
     "added": "2026-07-23",
     "chapters": [
      "rag-evaluation"
     ]
    },
    {
     "id": "q-rag-13",
     "q": "我们已经有搜索/知识库了，凭什么再上一套？",
     "added": "2026-07-23",
     "chapters": [
      "rag-hybrid",
      "rag-what-why"
     ]
    },
    {
     "id": "q-rag-14",
     "q": "以后模型更新了，是不是整套都要重做？",
     "added": "2026-07-23",
     "chapters": [
      "rag-embedding"
     ]
    },
    {
     "id": "q-rag-15",
     "q": "先做个 POC 吧——那怎么算成功？",
     "added": "2026-07-23",
     "chapters": [
      "rag-pipeline",
      "rag-evaluation"
     ]
    }
   ]
  },
  {
   "id": "security",
   "dir": "Security",
   "layer": "工程保障层",
   "created": "2026-07-09",
   "updated": "2026-08-02",
   "chapters": [
    {
     "id": "sec-landscape",
     "no": "第 1 章",
     "title": "为什么 AI 安全是新问题(威胁全景)",
     "verified": "2026-07-09"
    },
    {
     "id": "sec-prompt-injection",
     "no": "第 2 章",
     "title": "提示注入与越狱",
     "verified": "2026-07-09"
    },
    {
     "id": "sec-data-privacy",
     "no": "第 3 章",
     "title": "数据与隐私安全",
     "verified": "2026-07-09"
    },
    {
     "id": "sec-supply-chain",
     "no": "第 4 章",
     "title": "供应链与模型来源",
     "verified": "2026-07-09"
    },
    {
     "id": "sec-agentic",
     "no": "第 5 章",
     "title": "Agent 与工具安全",
     "verified": "2026-07-09"
    },
    {
     "id": "sec-defense",
     "no": "第 6 章",
     "title": "防护工程:护栏·模式·红队",
     "verified": "2026-07-09"
    },
    {
     "id": "sec-governance",
     "no": "第 7 章",
     "title": "治理与合规框架",
     "verified": "2026-07-09"
    },
    {
     "id": "sec-china",
     "no": "第 8 章",
     "title": "中国监管合规",
     "verified": "2026-07-17"
    },
    {
     "id": "sec-cheatsheet",
     "no": "第 9 章",
     "title": "售前速查",
     "verified": "2026-07-09"
    }
   ],
   "facts": [
    {
     "text": "OWASP LLM Top 10 现行版为 2025 版;新增 LLM07 系统提示词泄露、LLM08 向量与嵌入弱点,敏感信息泄露升至第 2",
     "chapter": "sec-landscape",
     "verified": "2026-07-09",
     "source": "genai.owasp.org/llm-top-10",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "OWASP 另有《Agentic AI Threats & Mitigations》(2025-02)与《Top 10 for Agentic Applications 2026》",
     "chapter": "sec-agentic",
     "verified": "2026-07-09",
     "source": "genai.owasp.org(ASI)",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "EchoLeak(CVE-2025-32711):M365 Copilot 首个零点击间接注入,CVSS 9.3",
     "chapter": "sec-prompt-injection",
     "verified": "2026-07-09",
     "source": "arXiv 2509.10540 / Sentra",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-05"
    },
    {
     "text": "在野间接注入 2026 起规模化:Unit42 2026-03 记录 22 种载荷手法;CrowdStrike 报 2025 影响 90+ 组织",
     "chapter": "sec-prompt-injection",
     "verified": "2026-07-09",
     "source": "unit42 / helpnetsecurity 2026-04",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "OpenAI/Anthropic/Google DeepMind 均公开承认:现有架构下提示注入无法彻底根治,需模型外确定性策略兜底",
     "chapter": "sec-prompt-injection",
     "verified": "2026-07-09",
     "source": "三厂 2025 研究",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-05"
    },
    {
     "text": "护栏格局:开源 Llama Guard/NeMo Guardrails/Guardrails AI/LLM Guard;商业 Lakera;云托管 Bedrock Guardrails/Azure AI Content Safety(Prompt Shields)",
     "chapter": "sec-defense",
     "verified": "2026-07-09",
     "source": "generalanalysis / galileo 2026 对比",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "CaMeL(Google DeepMind,arXiv 2503.18813)Dual-LLM 工程化,AgentDojo 约 77% 任务可证安全",
     "chapter": "sec-defense",
     "verified": "2026-07-09",
     "source": "arXiv 2503.18813",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "架构级防注入六类模式(action-selector/plan-then-execute/dual LLM/code-then-execute/context-minimization/map-reduce)",
     "chapter": "sec-defense",
     "verified": "2026-07-09",
     "source": "arXiv 2506.08837",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-05"
    },
    {
     "text": "NIST AI 600-1(GenAI Profile)2024-07-26 发布,12 类风险 +200 行动项;RMF 下一大版本预计 2026–2027",
     "chapter": "sec-governance",
     "verified": "2026-07-09",
     "source": "nist.gov / nvlpubs",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "EU AI Act:GPAI 三时点不变(义务 2025-08-02 生效 / 2026-08-02 执法罚款,GPAI 最高 €15M 或营收 3%、广义最高 €35M 或 7% / 2027-08-02 存量截止);高风险义务经 Digital Omnibus(Regulation (EU) 2026/1744,2026-07-24 刊《官方公报》、07-27 生效)延期:Annex III 独立系统→2027-12-02、Annex I 嵌入式→2028-08-02,透明度义务(Art. 50)仍 2026-08-02;建议复查日 2026-12-01",
     "chapter": "sec-governance",
     "verified": "2026-08-01",
     "source": "EUR-Lex(Reg (EU) 2026/1744)/ Gibson Dunn / Jones Walker 两家法务分析一致",
     "recheck": "2026-12-01",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-30"
    },
    {
     "text": "MITRE ATLAS v5.x(2025 末–2026):约 16 战术/84 技术,2025-11 v5.1.0 加 C2 战术,2025 起大量 GenAI/Agent 技术",
     "chapter": "sec-landscape",
     "verified": "2026-07-09",
     "source": "atlas.mitre.org",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-07"
    },
    {
     "text": "上云 AI 安全服务名:AWS Bedrock Guardrails/Macie/GuardDuty+SecurityHub;Azure AI Content Safety/Purview/Defender for Cloud AI-SPM;GCP Model Armor/DLP/Security Command Center",
     "chapter": "sec-cheatsheet",
     "verified": "2026-07-09",
     "source": "三云 2025–2026 文档",
     "recheck": "—",
     "grade": "A",
     "cadence": "30",
     "due": "2026-08-08"
    },
    {
     "text": "备案现状:截至 2026-06-30 累计 988 款生成式 AI 服务备案、598 款应用/功能登记;双备案全流程 5–8 个月(北京 8–10),算法备案审核 30 个工作日、大模型备案 3–6 个月",
     "chapter": "sec-china",
     "verified": "2026-07-17",
     "source": "网信办公告(cac.gov.cn)+备案实务多方一致口径",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-16"
    },
    {
     "text": "《AI 生成合成内容标识办法》2025-09-01 施行(四部门),显式+隐式双轨,配套强标 GB 45438-2025;已有 App 因标识违规被约谈/下架",
     "chapter": "sec-china",
     "verified": "2026-07-17",
     "source": "cac.gov.cn / 央视新闻 / samr openstd",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-15"
    },
    {
     "text": "GB/T 45654-2025《生成式 AI 服务安全基本要求》2025-11-01 实施(TC260 归口),训练数据/模型/安全措施三方面,五大类 31 小类风险;配套 GB/T 45674 数据标注安全",
     "chapter": "sec-china",
     "verified": "2026-07-17",
     "source": "tc260.org.cn / samr / 火山引擎备案实务",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-13"
    },
    {
     "text": "立法风向(易过期):网安法修订 2026-01-01 施行新增 AI 专条(第 20 条);国务院 2026 立法计划部署 AI 综合性立法;《人工智能拟人化互动服务管理暂行办法》2026-04-10 五部门公布、2026-07-15 施行;同日网信办公布首批 7 款手机端侧生成式 AI 服务备案(新品类首次单开清单);建议复查日 2026-11-01",
     "chapter": "sec-china",
     "verified": "2026-08-01",
     "source": "cac.gov.cn 原文(办法发布页 c_1777558395023172 + 端侧备案公告 c_1785861480767004)",
     "recheck": "2026-11-01",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-30"
    },
    {
     "text": "数据出境:三通道(安全评估/标准合同/认证)+《促进和规范数据跨境流动规定》(2024-03)六类豁免+自贸区负面清单;官方口径《政策问答(2025-10)》",
     "chapter": "sec-china",
     "verified": "2026-07-17",
     "source": "cac.gov.cn",
     "recheck": "—",
     "grade": "A",
     "cadence": "90",
     "due": "2026-10-15"
    },
    {
     "text": "ISO/IEC 42001 为首个 AI 管理体系(AIMS)国际标准",
     "chapter": "sec-governance",
     "verified": "2026-07-09",
     "source": "ISO 官方",
     "recheck": "—",
     "grade": "A",
     "cadence": "180",
     "due": "2027-01-05"
    }
   ],
   "edges": [
    {
     "from": "sec-china",
     "to": "predictive-ai-mlops#pam-governance",
     "why": "反向回指（2026-08-02 新模块建立）：备案范围与合规数字在 Security 第 8 章，本册不复制；只讲预测式独有的落点——拒绝理由要说得出、模型卡",
     "resolved": true
    },
    {
     "from": "sec-governance",
     "to": "ai-governance#gov-frameworks",
     "why": "反向回指（2026-08-02 新模块建立）：Security 第 7 章把 NIST／ISO／欧盟法案摆在威胁防护的收尾位置，给的是方位与时间线；本章接着讲",
     "resolved": true
    },
    {
     "from": "sec-china",
     "to": "ai-governance#gov-china-interface",
     "why": "反向回指（2026-08-02 新模块建立）：备案、登记、标识、国标、数据出境的条目与时点全在 Security 第 8 章；本章只讲分诊结论怎么变成用途登记",
     "resolved": true
    },
    {
     "from": "sec-supply-chain",
     "to": "ai-governance#gov-registry",
     "why": "反向回指（2026-08-02 新模块建立）：AI-BOM 记「系统里有哪些模型与组件」，用途登记记「有哪些 AI 用途、谁批的」，一条用途对应多条 AI-B",
     "resolved": true
    },
    {
     "from": "sec-defense",
     "to": "ai-governance#gov-evidence",
     "why": "反向回指（2026-08-02 新模块建立）：红队报告是高风险用途证据包的必备件；怎么打、打什么在 Security 第 6 章，本册管这件证据在不在包里、有",
     "resolved": true
    },
    {
     "from": "sec-defense",
     "to": "evaluation#eval-scenarios",
     "why": "红队产出的攻破率/有害内容率/注入抵抗率汇入 Evaluation 安全维度验收,兑现其 `eval-scenarios → security(候选)` 边",
     "resolved": true
    },
    {
     "from": "sec-agentic",
     "to": "agent#(护栏章)",
     "why": "Agent「评估与护栏」提出要防,本模块给系统性威胁与控权(最小权限/爆炸半径)",
     "resolved": true
    },
    {
     "from": "sec-agentic",
     "to": "mcp#(安全章)",
     "why": "MCP 工具描述投毒与供应链安全,本模块第 4/5 章深化",
     "resolved": true
    },
    {
     "from": "sec-data-privacy",
     "to": "rag#(向量检索/数据)",
     "why": "向量库投毒、跨租户泄露、带权限检索,对应 RAG 检索质量与数据面",
     "resolved": true
    },
    {
     "from": "sec-supply-chain",
     "to": "fine-tuning# / llm-training#",
     "why": "微调数据泄露、模型投毒与来源验证,是这两个模块的安全侧",
     "resolved": true
    }
   ],
   "web": "./security/index.html",
   "questions": [
    {
     "id": "q-security-1",
     "q": "大模型不就是个聊天框，能有多大安全风险？",
     "added": "2026-07-09",
     "chapters": [
      "riskcheck",
      "sec-landscape"
     ]
    },
    {
     "id": "q-security-2",
     "q": "提示注入到底能不能彻底解决？",
     "added": "2026-07-09",
     "chapters": [
      "sec-prompt-injection"
     ]
    },
    {
     "id": "q-security-3",
     "q": "我们的数据会不会被模型学走、被别人问出来？",
     "added": "2026-07-09",
     "chapters": [
      "sec-data-privacy"
     ]
    },
    {
     "id": "q-security-4",
     "q": "从开源社区下模型很方便，有什么风险？",
     "added": "2026-07-09",
     "chapters": [
      "sec-supply-chain"
     ]
    },
    {
     "id": "q-security-5",
     "q": "给 Agent 放权自动干活，出了事谁负责、怎么控？",
     "added": "2026-07-09",
     "chapters": [
      "sec-agentic"
     ]
    },
    {
     "id": "q-security-6",
     "q": "买一个 AI 护栏产品，是不是就安全了？",
     "added": "2026-07-09",
     "chapters": [
      "sec-defense"
     ]
    },
    {
     "id": "q-security-7",
     "q": "我们要过 EU AI Act，具体要做什么、什么时候？",
     "added": "2026-07-09",
     "chapters": [
      "sec-governance"
     ]
    },
    {
     "id": "q-security-8",
     "q": "我们私有化部署、只给内部员工用，要备案吗？",
     "added": "2026-07-17",
     "chapters": [
      "sec-china"
     ]
    },
    {
     "id": "q-security-9",
     "q": "不打 AI 标识会怎样？",
     "added": "2026-07-17",
     "chapters": [
      "sec-china"
     ]
    },
    {
     "id": "q-security-10",
     "q": "你们能保证上线之后不出安全事故吗？",
     "added": "2026-07-23",
     "chapters": [
      "riskcheck",
      "sec-cheatsheet",
      "sec-defense",
      "sec-prompt-injection"
     ]
    },
    {
     "id": "q-security-11",
     "q": "我们安全体系和团队都齐，为什么还要再上一套 AI 安全？",
     "added": "2026-07-23",
     "chapters": [
      "sec-landscape",
      "sec-defense",
      "sec-governance"
     ]
    },
    {
     "id": "q-security-12",
     "q": "安全这块怎么验收？总不能等出事了才知道没做好。",
     "added": "2026-07-23",
     "chapters": [
      "sec-cheatsheet",
      "sec-defense"
     ]
    }
   ]
  },
  {
   "id": "solution-patterns",
   "dir": "Solution-Patterns",
   "layer": "解决方案层",
   "created": "2026-07-10",
   "updated": "2026-08-02",
   "chapters": [
    {
     "id": "sp-what-why",
     "no": "第 1 章",
     "title": "从技术轴到场景轴（方案 = 场景 × 积木）",
     "verified": "2026-07-10"
    },
    {
     "id": "sp-method",
     "no": "第 2 章",
     "title": "方案共性方法（五层架构 / POC 三要素 / 三本账 / 口径鉴别）",
     "verified": "2026-07-10"
    },
    {
     "id": "sp-customer-service",
     "no": "第 3 章",
     "title": "智能客服（三层漏斗 / 解决率口径 / 语音客服）",
     "verified": "2026-07-10"
    },
    {
     "id": "sp-knowledge-search",
     "no": "第 4 章",
     "title": "企业知识库与 AI 搜索（权限命门 / Glean 模式）",
     "verified": "2026-07-10"
    },
    {
     "id": "sp-content-gen",
     "no": "第 5 章",
     "title": "营销与内容生成（品牌工程 / 商业安全 / 人审）",
     "verified": "2026-07-10"
    },
    {
     "id": "sp-ai-coding",
     "no": "第 6 章",
     "title": "AI Coding 与研发提效（双层格局 / 企业三关注）",
     "verified": "2026-08-01"
    },
    {
     "id": "sp-digital-human",
     "no": "第 7 章",
     "title": "数字人（离线 vs 实时 / 合规红线）",
     "verified": "2026-07-10"
    },
    {
     "id": "sp-chatbi",
     "no": "第 8 章",
     "title": "ChatBI 与数据分析（语义层口径战场 / 三道闸 / 产品格局）",
     "verified": "2026-07-11"
    },
    {
     "id": "sp-meeting",
     "no": "第 9 章",
     "title": "会议与办公助手（记忆库资产 / 三层口径 / 合规红线）",
     "verified": "2026-07-11"
    },
    {
     "id": "sp-cheatsheet",
     "no": "第 10 章",
     "title": "售前速查（七场景→积木总表 / 分诊树 / 成本卡）",
     "verified": "2026-07-11"
    }
   ],
   "facts": [
    {
     "text": "客服解决率口径：厂商自报 Fin 51–67% / Sierra ~70%（WeightWatchers）/ Decagon 80%（deflection）；独立口径 Zendesk 企业中位 41.2%、top quartile 58.7%；宣传与实测差 30–40pp",
     "chapter": "sp-customer-service / sp-method",
     "verified": "2026-07-10",
     "source": "fin.ai 对比页 / digitalapplied 2026 统计",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-08"
    },
    {
     "text": "客服 AI 采用度：Salesforce 报 66% 服务组织已跑 AI agent（2025 年 39%）；Gartner 91% CX 负责人有部署压力",
     "chapter": "sp-customer-service",
     "verified": "2026-07-10",
     "source": "digitalapplied 2026 统计",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-08"
    },
    {
     "text": "Glean：ARR $300M（2026-05，+89% YoY）、估值 $7.2B（2025-06 Series F）；Glean Agents 年化 1 亿+ actions",
     "chapter": "sp-knowledge-search",
     "verified": "2026-07-10",
     "source": "TechCrunch 2026-05-28 / Glean press",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-09"
    },
    {
     "text": "AI Coding 格局：SpaceX $60B 全股票收购 Cursor 母公司 Anysphere（2026-06-16 宣布、预计 Q3 交割，建议复查 2026-10-01 确认交割）；Cursor ARR $4B 年化（2026-06 初，2 月 $2B 四个月翻倍，收入第一）；Copilot 4.7M 付费 +75% YoY（微软 FY26 Q2 财报 2026-01-28 披露，仍为最新付费数——FY26 Q4 财报 07-29 只披露总用户 5000 万未更新付费口径，用户量第一）、Claude Code 46% most-loved（JetBrains 2026-04 满意度第一）；市场 2026 年 $12.8B、85% 开发者在用；采用率 29%/18%/18%；70% 工程师同时用 2–4 个工具",
     "chapter": "sp-ai-coding",
     "verified": "2026-08-01",
     "source": "TechCrunch 2026-06-16 / Forbes 2026-06-16 / 微软 FY26 Q2·Q4 财报 / ideaplan / JetBrains 2026 调查（收购与 ARR 为本次新写入；4.7M 与 $12.8B 复核仍成立）",
     "recheck": "2026-10-01",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-31"
    },
    {
     "text": "数字人：HeyGen Avatar V（2026-04-08，15 秒素材建分身、10 分钟身份不漂移）；LiveAvatar 为 WebRTC 实时交互数字人独立平台",
     "chapter": "sp-digital-human",
     "verified": "2026-07-10",
     "source": "HeyGen 官方 blog / help center",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-08"
    },
    {
     "text": "内容生成格局：Jasper（品牌一致性：风格指南/禁用词全局生效）、Canva Magic Studio（模板驱动）、Adobe Firefly Enterprise（商业安全定位：授权数据训练 + 企业 IP 赔付 + 可训品牌定制模型）",
     "chapter": "sp-content-gen",
     "verified": "2026-07-10",
     "source": "Adobe 官方 / genesysgrowth 2026 对比",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-08"
    },
    {
     "text": "语音客服成本：级联 $0.01–0.17/分钟；gpt-realtime 未缓存 $0.18–0.46/分钟、优化后 $0.05–0.10（与 multimodal#mm-voice-realtime 同源口径）",
     "chapter": "sp-customer-service / sp-cheatsheet",
     "verified": "2026-07-10",
     "source": "沿用 mm-voice-realtime 同源",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-09"
    },
    {
     "text": "成本速查卡量级：文本客服 $0.01–0.05/会话、文案 $0.001–0.01/条、图 $0.02–0.1/张、AI Coding $19–40/人/月 + 用量",
     "chapter": "sp-cheatsheet",
     "verified": "2026-07-10",
     "source": "各厂商定价页综合量级（2026-07 口径）",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-09"
    },
    {
     "text": "Text-to-SQL 准确率口径（分档，与 RAG 册对齐）：裸 LLM 随基准真实度分档——学术单轮 80–90% / 较干净企业化基准五六成 / 最难企业基准（Spider 2.0 类）10–21%，对客讲最低那档；语义模型加持后 Snowflake 内部 150 题基准 51%→90%+、dbt 语义层基准 98–100%",
     "chapter": "sp-chatbi",
     "verified": "2026-07-23",
     "source": "promethium 2026 企业对比 / Snowflake 工程博客 / Spider 2.0 / colrows（原「学术基准五六成」与 RAG「学术 80–90%」冲突，已合成分档口径两册一致）",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-21"
    },
    {
     "text": "ChatBI 产品格局：垂直一体派 Cortex Analyst（YAML 语义模型）/ Databricks AI/BI Genie（Unity Catalog）/ Fabric Copilot；独立派 ThoughtSpot / dbt / Cube；Snowflake 2026 推 Semantic View Autopilot（ML 自动发现指标定义，天级→分钟级）",
     "chapter": "sp-chatbi",
     "verified": "2026-07-11",
     "source": "promethium 语义层十强 / colrows",
     "recheck": "—",
     "grade": "B",
     "cadence": "90",
     "due": "2026-10-09"
    },
    {
     "text": "会议助手格局：两分野（笔记器 vs agentic 平台）；原生派 Zoom AI Companion / Teams Copilot（M365 +$30/人/月）/ 飞书妙记；独立派 Otter / Fireflies / Granola（2026-03 融资 $125M、估值 $1.5B、bot-free 代表）；bot 疲劳为 2026 趋势",
     "chapter": "sp-meeting",
     "verified": "2026-07-11",
     "source": "read.ai / zapier / tana / meetily 2026 横评",
     "recheck": "—",
     "grade": "B",
     "cadence": "30",
     "due": "2026-08-10"
    }
   ],
   "edges": [
    {
     "from": "sp-method",
     "to": "predictive-ai-mlops#pam-what-why",
     "why": "反向回指（2026-08-02 新模块建立）：「我们已经有 X 了」的通用答法（增量价值三问）在 SP 与实战包已成型，本册补预测式这一格的具体内容：存量模型",
     "resolved": true
    },
    {
     "from": "sp-method",
     "to": "ai-governance#gov-decision",
     "why": "反向回指（2026-08-02 新模块建立）：SP 第 2 章讲对客交付里的责任落点与合同话术（乙方视角），本册讲客户内部的决定权归属与证据链（甲方视角），两",
     "resolved": true
    },
    {
     "from": "sp-what-why",
     "to": "（全库）",
     "why": "本模块是场景索引层：单向引用所有技术模块，技术模块无需反向依赖",
     "resolved": false
    },
    {
     "from": "sp-method",
     "to": "ai-gateway#gw-cost",
     "why": "三本账的 token/并发治理在网关落地；成本治理机制见 AI-Gateway 第 4 章",
     "resolved": true
    },
    {
     "from": "sp-method",
     "to": "evaluation#eval-build",
     "why": "POC 三要素中「签字的指标」= 自建评估集方法，见 Evaluation 第 5 章",
     "resolved": true
    },
    {
     "from": "sp-method",
     "to": "ai-ops#ops-cheatsheet",
     "why": "三本账的「人力账/运营包」在 AI-Ops 第 8 章展开为五件套清单与 SLA 报价口径——双向互指（2026-07-10）",
     "resolved": true
    },
    {
     "from": "sp-method / sp-knowledge-search",
     "to": "data-engineering#de-what-why / de-pipeline",
     "why": "「数据坑是第一风险」「连接器是报价大头」在 Data-Engineering 展开为工程清单与报价明细——双向互指（2026-07-11）",
     "resolved": true
    },
    {
     "from": "sp-customer-service",
     "to": "rag#rag-hybrid / agent#agent-orchestration",
     "why": "客服主料：知识兜底 + 业务办理",
     "resolved": true
    },
    {
     "from": "sp-customer-service",
     "to": "multimodal#mm-voice-realtime",
     "why": "语音客服链路（级联/延迟/SIP）深潜入口",
     "resolved": true
    },
    {
     "from": "sp-knowledge-search",
     "to": "rag#rag-hybrid / rag#rag-graphrag / rag#rag-structured",
     "why": "按知识形态选检索路线",
     "resolved": true
    },
    {
     "from": "sp-knowledge-search",
     "to": "security#sec-data-privacy",
     "why": "权限感知检索 / ACL / 越权测试的安全侧依据",
     "resolved": true
    },
    {
     "from": "sp-content-gen",
     "to": "multimodal#mm-generation / pe#pe-anatomy",
     "why": "生成能力 + 风格注入两大主料",
     "resolved": true
    },
    {
     "from": "sp-ai-coding",
     "to": "agent#agent-lowcode / ai-gateway#gw-cost",
     "why": "工具组合与统一预算治理",
     "resolved": true
    },
    {
     "from": "sp-digital-human",
     "to": "multimodal#mm-voice-realtime / multimodal#mm-generation",
     "why": "数字人 = 语音链路 + 生成的脸",
     "resolved": true
    },
    {
     "from": "sp-cheatsheet",
     "to": "agent#agent-lowcode",
     "why": "「有没有平台」的分诊去向",
     "resolved": true
    },
    {
     "from": "sp-chatbi",
     "to": "rag#rag-structured",
     "why": "技术底座：Text-to-SQL 与语义层机制在 RAG 第 12 章，本章是其场景视角（双向）",
     "resolved": true
    },
    {
     "from": "sp-chatbi",
     "to": "security#sec-data-privacy / evaluation#eval-build",
     "why": "行级权限与只读闸；高频指标验收集 + 越权测试",
     "resolved": true
    },
    {
     "from": "sp-meeting",
     "to": "multimodal#mm-understanding / multimodal#mm-voice-realtime",
     "why": "ASR 与说话人分离能力底座；实时字幕走语音链路",
     "resolved": true
    },
    {
     "from": "sp-meeting",
     "to": "rag#rag-hybrid / agent#agent-eval-guardrails",
     "why": "会议记忆库 = 权限感知检索；行动项自动执行的审批边界",
     "resolved": true
    }
   ],
   "web": "./solution-patterns/index.html",
   "questions": [
    {
     "id": "q-solution-patterns-1",
     "q": "POC 成功了，为什么上生产还要再收一笔钱？",
     "added": "2026-07-10",
     "chapters": [
      "sp-method"
     ]
    },
    {
     "id": "q-solution-patterns-2",
     "q": "你们报价比竞品贵 30%，贵在哪？",
     "added": "2026-07-10",
     "chapters": [
      "sp-method"
     ]
    },
    {
     "id": "q-solution-patterns-3",
     "q": "客服解决率能承诺多少？",
     "added": "2026-07-10",
     "chapters": [
      "sp-customer-service"
     ]
    },
    {
     "id": "q-solution-patterns-4",
     "q": "员工会不会搜到不该看的东西？",
     "added": "2026-07-10",
     "chapters": [
      "sp-knowledge-search"
     ]
    },
    {
     "id": "q-solution-patterns-5",
     "q": "生成的内容侵权了算谁的？",
     "added": "2026-07-10",
     "chapters": [
      "sp-content-gen"
     ]
    },
    {
     "id": "q-solution-patterns-6",
     "q": "AI Coding 该买 Copilot 还是 Cursor 还是 Claude Code？",
     "added": "2026-07-10",
     "chapters": [
      "sp-ai-coding"
     ]
    },
    {
     "id": "q-solution-patterns-7",
     "q": "数字人会不会有法律风险？",
     "added": "2026-07-10",
     "chapters": [
      "sp-digital-human"
     ]
    },
    {
     "id": "q-solution-patterns-8",
     "q": "ChatBI 准确率能到多少？算错数怎么办？",
     "added": "2026-07-11",
     "chapters": [
      "sp-chatbi"
     ]
    },
    {
     "id": "q-solution-patterns-9",
     "q": "会议助手和 Teams/Zoom 自带的 AI 比，强在哪？",
     "added": "2026-07-11",
     "chapters": [
      "sp-meeting"
     ]
    },
    {
     "id": "q-solution-patterns-10",
     "q": "这个项目多久能上线？我们这边要出几个人配合？",
     "added": "2026-07-23",
     "chapters": [
      "sp-method",
      "sp-knowledge-search"
     ]
    },
    {
     "id": "q-solution-patterns-11",
     "q": "AI 答错了、办错了事，造成损失算谁的？",
     "added": "2026-07-23",
     "chapters": [
      "sp-method",
      "sp-content-gen"
     ]
    },
    {
     "id": "q-solution-patterns-12",
     "q": "这套做完，是我们的资产还是绑死在你们身上？换一家能接手吗？",
     "added": "2026-07-23",
     "chapters": [
      "sp-method",
      "sp-method"
     ]
    }
   ]
  }
 ],
 "concepts": [
  {
   "t": "AP2",
   "m": "A2A",
   "u": "./a2a/index.html#a2a-production"
  },
  {
   "t": "Agent Card",
   "m": "A2A",
   "u": "./a2a/index.html#a2a-protocol"
  },
  {
   "t": "Agentic RAG",
   "m": "RAG",
   "u": "./rag/index.html#rag-agentic"
  },
  {
   "t": "BM25",
   "m": "RAG",
   "u": "./rag/index.html#rag-hybrid"
  },
  {
   "t": "Chinchilla",
   "m": "LLM-Training",
   "u": "./llm-training/index.html#llmtrain-pretrain"
  },
  {
   "t": "ColPali",
   "m": "RAG",
   "u": "./rag/index.html#rag-multimodal"
  },
  {
   "t": "Computer Use",
   "m": "Agent",
   "u": "./agent/index.html#agent-computer-use"
  },
  {
   "t": "Continuous Batching",
   "m": "LLM-Inference",
   "u": "./llm-inference/index.html#llminf-batching"
  },
  {
   "t": "DPO",
   "m": "LLM-Training",
   "u": "./llm-training/index.html#llmtrain-alignment"
  },
  {
   "t": "DSPy",
   "m": "Prompt-Engineering",
   "u": "./prompt-engineering/index.html#pe-engineering"
  },
  {
   "t": "EU AI Act",
   "m": "Security",
   "u": "./security/index.html#sec-governance"
  },
  {
   "t": "FlashAttention",
   "m": "LLM",
   "u": "./llm/index.html#llm-attention-zoo"
  },
  {
   "t": "GQA",
   "m": "LLM",
   "u": "./llm/index.html#llm-attention-zoo"
  },
  {
   "t": "GRPO",
   "m": "LLM-Training",
   "u": "./llm-training/index.html#llmtrain-reasoning"
  },
  {
   "t": "GraphRAG",
   "m": "RAG",
   "u": "./rag/index.html#rag-graphrag"
  },
  {
   "t": "HBM",
   "m": "AI-Infra-Compute",
   "u": "./ai-infra-compute/index.html#aic-hbm"
  },
  {
   "t": "InfiniBand",
   "m": "AI-Infra-Compute",
   "u": "./ai-infra-compute/index.html#aic-scaleout"
  },
  {
   "t": "KServe",
   "m": "AI-Infra-Platform",
   "u": "./ai-infra-platform/index.html#aip-serving"
  },
  {
   "t": "KV Cache",
   "m": "LLM-Inference",
   "u": "./llm-inference/index.html#llminf-kv-budget"
  },
  {
   "t": "KV 缓存",
   "m": "LLM-Inference",
   "u": "./llm-inference/index.html#llminf-kv-budget"
  },
  {
   "t": "LLM-as-a-Judge",
   "m": "Evaluation",
   "u": "./evaluation/index.html#eval-judge"
  },
  {
   "t": "LoRA",
   "m": "Fine-tuning",
   "u": "./fine-tuning/index.html#ft-methods"
  },
  {
   "t": "MIG",
   "m": "AI-Infra-Platform",
   "u": "./ai-infra-platform/index.html#aip-sharing"
  },
  {
   "t": "MITRE ATLAS",
   "m": "Security",
   "u": "./security/index.html#sec-landscape"
  },
  {
   "t": "MLA",
   "m": "LLM",
   "u": "./llm/index.html#llm-attention-zoo"
  },
  {
   "t": "MMLU",
   "m": "Evaluation",
   "u": "./evaluation/index.html#eval-benchmarks"
  },
  {
   "t": "MoE",
   "m": "LLM",
   "u": "./llm/index.html#llm-architecture"
  },
  {
   "t": "NVL72",
   "m": "AI-Infra-Compute",
   "u": "./ai-infra-compute/index.html#aic-scaleup"
  },
  {
   "t": "NVLink",
   "m": "AI-Infra-Compute",
   "u": "./ai-infra-compute/index.html#aic-scaleup"
  },
  {
   "t": "PagedAttention",
   "m": "LLM-Inference",
   "u": "./llm-inference/index.html#llminf-batching"
  },
  {
   "t": "QLoRA",
   "m": "Fine-tuning",
   "u": "./fine-tuning/index.html#ft-methods"
  },
  {
   "t": "RDMA",
   "m": "AI-Infra-Compute",
   "u": "./ai-infra-compute/index.html#aic-scaleout"
  },
  {
   "t": "RLHF",
   "m": "LLM-Training",
   "u": "./llm-training/index.html#llmtrain-alignment"
  },
  {
   "t": "RLVR",
   "m": "LLM-Training",
   "u": "./llm-training/index.html#llmtrain-reasoning"
  },
  {
   "t": "RRF",
   "m": "RAG",
   "u": "./rag/index.html#rag-hybrid"
  },
  {
   "t": "RoPE",
   "m": "LLM",
   "u": "./llm/index.html#llm-architecture"
  },
  {
   "t": "SGLang",
   "m": "LLM-Inference",
   "u": "./llm-inference/index.html#llminf-engines"
  },
  {
   "t": "SWE-bench",
   "m": "Evaluation",
   "u": "./evaluation/index.html#eval-benchmarks"
  },
  {
   "t": "Streamable HTTP",
   "m": "MCP",
   "u": "./mcp/index.html#mcp-transport"
  },
  {
   "t": "Sub-agent",
   "m": "Agent",
   "u": "./agent/index.html#agent-subagent"
  },
  {
   "t": "ViT",
   "m": "Multimodal",
   "u": "./multimodal/index.html#mm-encoder"
  },
  {
   "t": "gang scheduling",
   "m": "AI-Infra-Platform",
   "u": "./ai-infra-platform/index.html#aip-scheduling"
  },
  {
   "t": "goodput",
   "m": "LLM-Inference",
   "u": "./llm-inference/index.html#llminf-production"
  },
  {
   "t": "vLLM",
   "m": "LLM-Inference",
   "u": "./llm-inference/index.html#llminf-engines"
  },
  {
   "t": "上下文工程",
   "m": "Agent",
   "u": "./agent/index.html#agent-context"
  },
  {
   "t": "上下文检索",
   "m": "RAG",
   "u": "./rag/index.html#rag-chunking"
  },
  {
   "t": "判官校准",
   "m": "Evaluation",
   "u": "./evaluation/index.html#eval-judge"
  },
  {
   "t": "向量库迁移",
   "m": "Data-Engineering",
   "u": "./data-engineering/index.html#de-vectordb"
  },
  {
   "t": "开放权重",
   "m": "Model-Landscape",
   "u": "./model-landscape/index.html#ml-open"
  },
  {
   "t": "思维链",
   "m": "Prompt-Engineering",
   "u": "./prompt-engineering/index.html#pe-core-techniques"
  },
  {
   "t": "投机解码",
   "m": "LLM-Inference",
   "u": "./llm-inference/index.html#llminf-speculative"
  },
  {
   "t": "提示注入",
   "m": "Security",
   "u": "./security/index.html#sec-prompt-injection"
  },
  {
   "t": "提示词缓存",
   "m": "Prompt-Engineering",
   "u": "./prompt-engineering/index.html#pe-engineering"
  },
  {
   "t": "文档智能解析",
   "m": "Data-Engineering",
   "u": "./data-engineering/index.html#de-parsing"
  },
  {
   "t": "混合检索",
   "m": "RAG",
   "u": "./rag/index.html#rag-hybrid"
  },
  {
   "t": "灾难性遗忘",
   "m": "Fine-tuning",
   "u": "./fine-tuning/index.html#ft-eval-deploy"
  },
  {
   "t": "记忆投毒",
   "m": "Agent",
   "u": "./agent/index.html#agent-memory"
  },
  {
   "t": "语义层",
   "m": "RAG",
   "u": "./rag/index.html#rag-structured"
  },
  {
   "t": "重排序",
   "m": "RAG",
   "u": "./rag/index.html#rag-reranking"
  },
  {
   "t": "间接注入",
   "m": "Security",
   "u": "./security/index.html#sec-prompt-injection"
  },
  {
   "t": "黄金集",
   "m": "Evaluation",
   "u": "./evaluation/index.html#eval-build"
  }
 ],
 "kw": {
  "ch": {
   "mcp-what-why": [
    "MCP",
    "Function Calling",
    "M×N→M+N",
    "AAIF",
    "SEP"
   ],
   "mcp-protocol": [
    "Host/Client/Server",
    "JSON-RPC 2.0",
    "Tools/Resources/Prompts",
    "控制面",
    "tools/call 报文"
   ],
   "mcp-transport": [
    "stdio",
    "Streamable HTTP",
    "无状态核心",
    "Extensions/Tasks",
    "弃用政策"
   ],
   "mcp-server": [
    "FastMCP",
    "MCP Inspector",
    "工具描述",
    "REST 包装"
   ],
   "mcp-production": [
    "OAuth 2.1",
    "MCP 网关",
    "MCP Registry",
    "私有 registry",
    "token 透传禁令"
   ],
   "mcp-security": [
    "工具投毒",
    "rug pull",
    "confused deputy",
    "MCPTox",
    "NSA/CISA 指引"
   ],
   "mcp-cheatsheet": [
    "上手四步",
    "排错三板斧",
    "Inspector 分层定位"
   ],
   "a2a-what-why": [
    "A2A",
    "MCP/A2A 分工",
    "Linux Foundation",
    "多专精 Agent 协作"
   ],
   "a2a-protocol": [
    "Agent Card",
    "Task 状态机",
    "Message/Part",
    "Artifact",
    "Protocol Buffers"
   ],
   "a2a-transport": [
    "well-known URI",
    "三绑定",
    "SSE",
    "推送通知 webhook",
    "四种交付"
   ],
   "a2a-handson": [
    "官方 SDK",
    "message/send",
    "a2a-inspector",
    "TCK"
   ],
   "a2a-orchestration": [
    "opaque agents",
    "编排者—执行者",
    "链式流水线",
    "并行汇聚"
   ],
   "a2a-production": [
    "多租户",
    "Bedrock AgentCore",
    "Vertex Agent Engine",
    "AP2",
    "采用度"
   ],
   "a2a-security": [
    "Signed Agent Cards",
    "OAuth2/mTLS",
    "授权范围 scope",
    "五个信任边界",
    "跨 Agent 提示注入"
   ],
   "gw-what-why": [
    "AI 网关",
    "LLM 专属六件套",
    "M×N 收敛",
    "边界辨析"
   ],
   "gw-unify": [
    "OpenAI 兼容层",
    "虚拟密钥",
    "十步请求链",
    "五层策略栈",
    "优雅降级"
   ],
   "gw-route": [
    "路由五策略",
    "复杂度路由",
    "语义路由",
    "fallback/熔断",
    "RouteLLM/FrugalGPT"
   ],
   "gw-cost": [
    "按 token 限流",
    "花费归集 FinOps",
    "语义缓存",
    "相似度阈值"
   ],
   "gw-guardrail": [
    "pre/post 护栏",
    "统一执行点",
    "审计证据链",
    "PII 脱敏",
    "注入检测"
   ],
   "gw-observe": [
    "OpenTelemetry GenAI",
    "OpenInference",
    "日志/指标/追踪"
   ],
   "gw-mcp": [
    "MCP 网关",
    "openapi-to-mcp",
    "RFC 8693 token 交换",
    "token 透传禁令",
    "三大授权反模式"
   ],
   "gw-cheatsheet": [
    "自托管 vs 托管",
    "LiteLLM",
    "Higress",
    "Envoy AI Gateway",
    "Azure APIM"
   ],
   "sec-landscape": [
    "指令数据不分离",
    "三层攻击面",
    "OWASP LLM Top 10",
    "MITRE ATLAS"
   ],
   "sec-prompt-injection": [
    "提示注入",
    "间接注入",
    "越狱",
    "EchoLeak 零点击",
    "模型外兜底"
   ],
   "sec-data-privacy": [
    "系统提示词泄露",
    "成员推断",
    "投毒三时机",
    "嵌入反演",
    "RAG 优于微调"
   ],
   "sec-supply-chain": [
    "pickle RCE",
    "后门模型",
    "safetensors",
    "模型签名",
    "AI-BOM"
   ],
   "sec-agentic": [
    "过度自主",
    "爆炸半径",
    "工具描述投毒",
    "记忆投毒",
    "HITL"
   ],
   "sec-defense": [
    "纵深防御四道闸",
    "Llama Guard",
    "NeMo Guardrails",
    "双 LLM/CaMeL",
    "PyRIT 红队"
   ],
   "sec-governance": [
    "NIST AI RMF",
    "EU AI Act",
    "ISO/IEC 42001",
    "AI-SPM"
   ],
   "sec-china": [
    "双备案",
    "内容标识办法",
    "GB/T 45654",
    "数据出境三通道",
    "988 款备案"
   ],
   "sec-cheatsheet": [
    "威胁→防护映射",
    "风险与合规自查",
    "爆炸半径分级"
   ],
   "eval-why-hard": [
    "非确定性",
    "三层分工",
    "评估集护城河",
    "隐性回归"
   ],
   "eval-benchmarks": [
    "MMLU 饱和",
    "GPQA",
    "HLE",
    "SWE-bench",
    "Arena/Elo",
    "数据污染"
   ],
   "eval-methods": [
    "判分四法",
    "代码判分",
    "人工评估",
    "BLEU/ROUGE 失灵"
   ],
   "eval-judge": [
    "LLM-as-a-Judge",
    "位置偏差",
    "冗长偏差",
    "自我偏好",
    "判官校准"
   ],
   "eval-build": [
    "黄金集",
    "错误分析",
    "冷启动三路",
    "CI 门禁",
    "保留集"
   ],
   "eval-scenarios": [
    "RAG 三角",
    "轨迹评估",
    "pass^k",
    "回归门禁",
    "幻觉率"
   ],
   "eval-tooling": [
    "Ragas",
    "DeepEval",
    "promptfoo",
    "LangSmith/Phoenix",
    "四道发布门"
   ],
   "eval-cheatsheet": [
    "POC 验收四件套",
    "应答三步",
    "误区总表"
   ],
   "ft-when": [
    "微调时机",
    "定制光谱",
    "知识 vs 行为",
    "劝退清单"
   ],
   "ft-methods": [
    "全参微调",
    "LoRA",
    "QLoRA",
    "显存心算",
    "学得少忘得少"
   ],
   "ft-data": [
    "聊天模板",
    "JSONL",
    "LIMA",
    "合成数据",
    "蒸馏",
    "PII 治理三问"
   ],
   "ft-training": [
    "Unsloth",
    "LLaMA-Factory",
    "Axolotl",
    "TRL",
    "eval loss/过拟合"
   ],
   "ft-alignment": [
    "SFT",
    "DPO",
    "RFT",
    "GRPO",
    "偏好对",
    "reward hacking"
   ],
   "ft-cloud": [
    "托管微调",
    "OpenAI 微调 API",
    "Bedrock Haiku",
    "数据出域"
   ],
   "ft-eval-deploy": [
    "验收四层",
    "灾难性遗忘",
    "回归门禁",
    "adapter 热插拔",
    "多 LoRA"
   ],
   "ft-field-guide": [
    "误区总表",
    "成本心算",
    "决策树"
   ],
   "ops-what-why": [
    "质量轴",
    "token 成本轴",
    "静默退化",
    "观测成本",
    "采样率"
   ],
   "ops-tracing": [
    "OTel GenAI",
    "span 四类",
    "trace 旅程",
    "PII 脱敏",
    "保留期分级"
   ],
   "ops-online-eval": [
    "在线评估",
    "评估漏斗",
    "判官采样打分",
    "评审队列",
    "数据集晋升"
   ],
   "ops-drift": [
    "漂移监测",
    "静默换 checkpoint",
    "嵌入距离",
    "回归集重跑"
   ],
   "ops-release": [
    "版本注册表",
    "评估门禁",
    "金丝雀",
    "秒级回滚",
    "四层版本键"
   ],
   "ops-incident": [
    "AI runbook 四问",
    "成本尖峰",
    "急停开关",
    "HITL 分级",
    "事故 SLA"
   ],
   "ops-tooling": [
    "LangSmith",
    "Langfuse",
    "Arize Phoenix",
    "Braintrust",
    "AgentOps"
   ],
   "ops-cheatsheet": [
    "运营包五件套",
    "月度质量报告",
    "观测验收六个可"
   ],
   "rag-what-why": [
    "RAG 三步流程",
    "RAG vs 微调",
    "幻觉"
   ],
   "rag-embedding": [
    "Embedding",
    "余弦相似度",
    "ANN",
    "HNSW",
    "pgvector",
    "向量库选型"
   ],
   "rag-chunking": [
    "Chunking",
    "块大小/重叠",
    "Contextual Retrieval",
    "语义切分"
   ],
   "rag-reranking": [
    "两阶段检索",
    "交叉编码器",
    "Bi-Encoder",
    "Cohere Rerank",
    "BGE-reranker"
   ],
   "rag-evaluation": [
    "Ragas",
    "Faithfulness",
    "上下文精确率/召回率",
    "六段诊断",
    "DeepEval"
   ],
   "rag-pipeline": [
    "离线建库/在线查询",
    "最小 RAG 管线",
    "LlamaIndex",
    "LangGraph"
   ],
   "rag-hybrid": [
    "BM25",
    "混合检索",
    "RRF",
    "k≈60"
   ],
   "rag-agentic": [
    "Agentic RAG",
    "CRAG",
    "Self-RAG",
    "Router",
    "ReAct"
   ],
   "rag-production": [
    "质量漂移",
    "语义缓存",
    "检索层 ACL",
    "Trace",
    "四层证明"
   ],
   "rag-graphrag": [
    "GraphRAG",
    "Leiden 社区检测",
    "LazyGraphRAG",
    "LightRAG",
    "全局查询"
   ],
   "rag-multimodal": [
    "多模态 RAG",
    "ColPali",
    "MaxSim 晚交互",
    "转述索引",
    "统一多模态嵌入"
   ],
   "rag-structured": [
    "Text-to-SQL",
    "语义层",
    "静默错误",
    "查文/查数路由"
   ],
   "agent-what-why": [
    "Agent 循环",
    "Chatbot/Workflow/Agent 光谱",
    "停机条件"
   ],
   "agent-components": [
    "ReAct",
    "Function Calling",
    "工具设计",
    "短期/长期记忆"
   ],
   "agent-orchestration": [
    "编排五模式",
    "Orchestrator-Workers",
    "A2A",
    "Agent Card"
   ],
   "agent-tools-mcp": [
    "MCP",
    "M×N 问题",
    "六层工具契约",
    "Resources vs Tools"
   ],
   "agent-context": [
    "上下文工程",
    "context rot",
    "Compaction",
    "Just-in-time 检索",
    "子 agent 隔离"
   ],
   "agent-eval-guardrails": [
    "pass^k",
    "轨迹级评估",
    "LLM-as-judge",
    "OWASP Agentic Top 10",
    "提示注入"
   ],
   "agent-lowcode": [
    "Coze",
    "Dify",
    "n8n",
    "HiAgent",
    "fair-code 许可证"
   ],
   "agent-memory": [
    "Mem0",
    "Letta (MemGPT)",
    "Zep",
    "LangMem",
    "记忆投毒 MINJA"
   ],
   "agent-computer-use": [
    "Computer Use",
    "GUI Agent",
    "OSWorld",
    "Browser Use",
    "RPA 混合"
   ],
   "agent-subagent": [
    "Sub-agent",
    "扇出/扇入",
    "任务书",
    "context: fork",
    "15× token 账"
   ],
   "agent-cheatsheet": [
    "启用条件决策树",
    "六条验收线",
    "按症状导航"
   ],
   "mm-what-why": [
    "理解侧 vs 生成侧",
    "能力谱系",
    "OCR 分工",
    "方案分诊"
   ],
   "mm-encoder": [
    "ViT",
    "patch",
    "CLIP",
    "SigLIP",
    "视觉 token"
   ],
   "mm-fusion": [
    "投影层 LLaVA",
    "交叉注意力 Flamingo",
    "Q-Former BLIP-2",
    "原生 vs 拼管线"
   ],
   "mm-understanding": [
    "MMMU",
    "OCRBench",
    "InternVL3",
    "Qwen3-VL",
    "能力边界"
   ],
   "mm-generation": [
    "扩散 vs 自回归",
    "GPT Image 2",
    "Nano Banana 2",
    "音色克隆",
    "any-to-any"
   ],
   "mm-selection": [
    "成本/延迟/精度铁三角",
    "视觉 token 成本",
    "vLLM 自部署",
    "五层输入合同"
   ],
   "mm-production": [
    "视觉幻觉",
    "跨模态提示注入",
    "评估四把尺",
    "分辨率上限"
   ],
   "mm-voice-realtime": [
    "级联管线",
    "端到端 S2S",
    "gpt-realtime",
    "VAD",
    "打断 barge-in",
    "WebRTC"
   ],
   "mm-video-generation": [
    "Seedance",
    "Sora 2",
    "可灵 Kling",
    "Veo",
    "按秒计价",
    "内容标识"
   ],
   "sp-what-why": [
    "场景×积木",
    "需求分诊",
    "一物三用"
   ],
   "sp-method": [
    "五层参考架构",
    "POC 三要素",
    "三本账",
    "口径鉴别术",
    "方案验收六条线"
   ],
   "sp-customer-service": [
    "三层漏斗",
    "deflection vs resolution",
    "解决率口径",
    "语音客服"
   ],
   "sp-knowledge-search": [
    "权限感知检索",
    "连接器",
    "Glean",
    "越权测试集"
   ],
   "sp-content-gen": [
    "品牌一致性",
    "禁用词护栏",
    "Firefly 商业安全",
    "人审分级"
   ],
   "sp-ai-coding": [
    "Copilot",
    "Cursor",
    "Claude Code",
    "双层格局",
    "DORA 指标"
   ],
   "sp-digital-human": [
    "数字人",
    "HeyGen",
    "离线 vs 实时",
    "深度合成标识"
   ],
   "sp-chatbi": [
    "ChatBI",
    "语义层",
    "Cortex Analyst",
    "三道闸",
    "Semantic View Autopilot"
   ],
   "sp-meeting": [
    "会议助手",
    "WER",
    "说话人分离",
    "会议记忆库",
    "bot 疲劳"
   ],
   "llm-why-transformer": [
    "Transformer",
    "RNN",
    "长距离依赖",
    "Attention Is All You Need",
    "可扩展性"
   ],
   "llm-attention-qkv": [
    "QKV",
    "缩放点积注意力",
    "Softmax",
    "因果掩码",
    "多头注意力"
   ],
   "llm-architecture": [
    "Embedding",
    "RoPE",
    "FFN",
    "残差连接/LayerNorm",
    "Decoder-only",
    "MoE"
   ],
   "llm-inference-kv": [
    "KV 缓存",
    "prefill/decode",
    "TTFT/TPOT",
    "上下文窗口",
    "有效窗口 RULER"
   ],
   "llm-attention-zoo": [
    "GQA",
    "MLA",
    "稀疏注意力 DSA",
    "滑动窗口 SWA",
    "线性混合",
    "FlashAttention"
   ],
   "llm-presales-map": [
    "架构选型七问",
    "四类失败分诊",
    "Mamba/SSM"
   ],
   "pe-what-why": [
    "提示词工程",
    "能力杠杆",
    "提示词→RAG→微调"
   ],
   "pe-anatomy": [
    "system prompt",
    "消息角色",
    "四要素",
    "分隔符",
    "五层结构"
   ],
   "pe-core-techniques": [
    "zero-shot/few-shot",
    "CoT 思维链",
    "结构化输出",
    "正向表述"
   ],
   "pe-advanced-reasoning": [
    "自洽性",
    "ReAct",
    "提示词链",
    "ToT",
    "推理预算"
   ],
   "pe-engineering": [
    "提示词版本化",
    "评估驱动",
    "DSPy MIPROv2/GEPA",
    "提示词缓存",
    "上下文预算四分区"
   ],
   "pe-security": [
    "提示词注入",
    "间接注入",
    "越狱",
    "OWASP LLM01",
    "纵深防御",
    "护栏"
   ],
   "pe-presales-map": [
    "选型判断树",
    "六步白板演练",
    "上线验收四条线"
   ],
   "llminf-anatomy": [
    "自回归",
    "prefill/decode 两阶段",
    "TTFT",
    "TPOT",
    "带宽墙"
   ],
   "llminf-kv-budget": [
    "KV Cache 心算",
    "GQA/MLA",
    "显存账本",
    "长上下文成本",
    "容量规划"
   ],
   "llminf-batching": [
    "Continuous Batching",
    "PagedAttention",
    "Prefix Caching",
    "RadixAttention",
    "Chunked Prefill"
   ],
   "llminf-engines": [
    "vLLM",
    "SGLang",
    "TensorRT-LLM/NIM",
    "llama.cpp/Ollama",
    "OpenAI 兼容 API"
   ],
   "llminf-quant": [
    "FP8",
    "INT4",
    "AWQ/GPTQ",
    "NVFP4",
    "GGUF",
    "校准"
   ],
   "llminf-speculative": [
    "投机解码",
    "EAGLE-3",
    "MTP",
    "接受率",
    "Test-time Scaling"
   ],
   "llminf-disagg": [
    "P/D 分离",
    "Mooncake",
    "Dynamo",
    "llm-d",
    "TP/PP/EP",
    "KV 分层存储"
   ],
   "llminf-production": [
    "SLO",
    "goodput",
    "压测",
    "成本心算",
    "盈亏线利用率"
   ],
   "llmtrain-overview": [
    "训练流水线六道工序",
    "base/instruct/reasoning",
    "训练 vs 推理成本"
   ],
   "llmtrain-data": [
    "清洗去重",
    "FineWeb",
    "分词/BPE",
    "数据墙",
    "模型坍缩"
   ],
   "llmtrain-pretrain": [
    "下一词预测",
    "Scaling Laws/Chinchilla",
    "稀疏 MoE",
    "FP8 训练",
    "Muon"
   ],
   "llmtrain-sft": [
    "SFT",
    "LIMA 质量>数量",
    "蒸馏造数据",
    "Chat Template"
   ],
   "llmtrain-alignment": [
    "RLHF",
    "奖励模型",
    "Reward Hacking",
    "DPO",
    "对齐税"
   ],
   "llmtrain-reasoning": [
    "RLVR",
    "GRPO",
    "DeepSeek-R1",
    "思维链",
    "推理蒸馏",
    "推理时扩展"
   ],
   "llmtrain-infra": [
    "16 字节/参数显存账",
    "DP/TP/PP/EP",
    "ZeRO",
    "6ND 法则",
    "MFU",
    "checkpoint 容错"
   ],
   "llmtrain-eval": [
    "benchmark 三层",
    "数据污染/刷榜",
    "Arena",
    "模型卡五盯点",
    "开源许可"
   ],
   "aic-overview": [
    "五层栈",
    "功率密度/液冷",
    "东西向流量",
    "训练 vs 推理曲线"
   ],
   "aic-gpu": [
    "Tensor Core",
    "精度阶梯 FP8/FP4",
    "Roofline",
    "MFU"
   ],
   "aic-hbm": [
    "HBM 堆叠",
    "HBM4",
    "16 字节/参数训练账",
    "权重+KV 推理账"
   ],
   "aic-chips": [
    "NVIDIA Rubin",
    "CUDA 护城河",
    "AMD MI400",
    "TPU Ironwood",
    "昇腾 910C"
   ],
   "aic-scaleup": [
    "NVLink 5",
    "NVSwitch",
    "NVL72",
    "带宽阶梯",
    "UALink"
   ],
   "aic-scaleout": [
    "RDMA/GPUDirect",
    "NCCL",
    "AllReduce/AllToAll",
    "InfiniBand vs RoCE",
    "Ultra Ethernet",
    "轨道优化"
   ],
   "aic-storage": [
    "并行文件系统",
    "checkpoint 洪峰写",
    "对象存储分层",
    "KV Cache 外置"
   ],
   "aic-econ": [
    "TCO",
    "PUE/液冷",
    "建 vs 租 vs API",
    "盈亏线利用率"
   ],
   "aip-overview": [
    "平台四大职责",
    "裸机之痛",
    "利用率翻倍 ROI",
    "K8s + 插件",
    "四条控制链"
   ],
   "aip-k8s-gpu": [
    "Device Plugin",
    "DRA",
    "GPU Operator",
    "拓扑感知申请"
   ],
   "aip-scheduling": [
    "gang scheduling",
    "碎片/bin-packing",
    "Kueue",
    "Volcano",
    "KAI/Run:ai"
   ],
   "aip-sharing": [
    "MIG",
    "时间片",
    "MPS",
    "HAMi",
    "多租户隔离"
   ],
   "aip-faulttol": [
    "checkpoint 异步/分级",
    "自愈循环",
    "466 次中断",
    "HyperPod"
   ],
   "aip-observability": [
    "利用率三层口径",
    "MFU",
    "goodput",
    "四大黑洞",
    "DCGM",
    "chargeback"
   ],
   "aip-serving": [
    "训练 vs 推理调度",
    "KServe",
    "llm-d/Dynamo",
    "扩缩信号",
    "冷启动"
   ],
   "aip-cloud": [
    "云上四形态",
    "责任递交线",
    "三问定档",
    "自建隐藏工作量"
   ],
   "ml-map": [
    "三大阵营",
    "企业/消费份额分裂",
    "Menlo 口径",
    "模型贬值资产"
   ],
   "ml-closed": [
    "闭源旗舰家族",
    "GPT-5.6 三档",
    "Claude 5",
    "Gemini 3.1",
    "Grok 4.3"
   ],
   "ml-open": [
    "开放权重",
    "开源追平",
    "SWE-bench",
    "MoE 稀疏激活",
    "Llama 4"
   ],
   "ml-china": [
    "国产四强",
    "豆包家族",
    "昇腾全国产训练",
    "模型即入口"
   ],
   "ml-platforms": [
    "火山方舟",
    "阿里百炼",
    "百度千帆",
    "腾讯混元",
    "模型货架哲学"
   ],
   "ml-license": [
    "open weight",
    "OSAID",
    "MIT/Apache 2.0",
    "社区许可证",
    "蒸馏条款继承"
   ],
   "ml-price": [
    "价格光谱",
    "三档家族制",
    "缓存经济学",
    "报价纪律",
    "降价传导"
   ],
   "ml-capability": [
    "上下文窗口",
    "有效窗口",
    "多模态矩阵",
    "思考预算",
    "overthinking"
   ],
   "ml-selection": [
    "多模型组合",
    "三层路由",
    "五约束决策树",
    "Leaderboard Illusion",
    "评估集终审"
   ],
   "ml-cheatsheet": [
    "赏味期限",
    "保鲜声明",
    "定点复查"
   ],
   "de-what-why": [
    "数据就绪度",
    "四问评估",
    "显性工程件",
    "数据工程报价"
   ],
   "de-parsing": [
    "文档智能解析",
    "LlamaParse",
    "Docling",
    "MinerU",
    "表格保真",
    "CJK 版面"
   ],
   "de-pipeline": [
    "连接器五件事",
    "增量同步",
    "webhook/CDC",
    "内容指纹去重",
    "失效下架"
   ],
   "de-vectordb": [
    "向量库选型",
    "pgvector",
    "Qdrant",
    "Milvus",
    "混合检索",
    "向量库迁移"
   ],
   "de-quality": [
    "质量四指标",
    "覆盖率仪表盘",
    "坏答案回流",
    "修数据不改提示词"
   ],
   "de-labeling": [
    "标注预算三去向",
    "合成数据",
    "种子样本",
    "坏例分流",
    "保留集防应试"
   ],
   "de-governance": [
    "ACL 映射",
    "采集点脱敏",
    "越权测试集",
    "向量化≠匿名化",
    "遗忘权",
    "血缘"
   ]
  },
  "meta": {
   "mcp-what-why": {
    "mod": "MCP",
    "modId": "mcp",
    "title": "是什么/为什么",
    "web": "./mcp/index.html",
    "hue": 2
   },
   "mcp-protocol": {
    "mod": "MCP",
    "modId": "mcp",
    "title": "协议解剖",
    "web": "./mcp/index.html",
    "hue": 2
   },
   "mcp-transport": {
    "mod": "MCP",
    "modId": "mcp",
    "title": "传输与演进",
    "web": "./mcp/index.html",
    "hue": 2
   },
   "mcp-server": {
    "mod": "MCP",
    "modId": "mcp",
    "title": "动手写 server",
    "web": "./mcp/index.html",
    "hue": 2
   },
   "mcp-production": {
    "mod": "MCP",
    "modId": "mcp",
    "title": "生产落地",
    "web": "./mcp/index.html",
    "hue": 2
   },
   "mcp-security": {
    "mod": "MCP",
    "modId": "mcp",
    "title": "安全",
    "web": "./mcp/index.html",
    "hue": 2
   },
   "mcp-cheatsheet": {
    "mod": "MCP",
    "modId": "mcp",
    "title": "售前速查（高频问题 / 上手排错 / 版本口径与串联；2026-07-11 补齐全库速查惯例）",
    "web": "./mcp/index.html",
    "hue": 2
   },
   "a2a-what-why": {
    "mod": "A2A",
    "modId": "a2a",
    "title": "是什么/为什么（与 MCP 分工）",
    "web": "./a2a/index.html",
    "hue": 2
   },
   "a2a-protocol": {
    "mod": "A2A",
    "modId": "a2a",
    "title": "协议解剖（五大对象与生命周期）",
    "web": "./a2a/index.html",
    "hue": 2
   },
   "a2a-transport": {
    "mod": "A2A",
    "modId": "a2a",
    "title": "发现与传输（Agent Card 发现·三绑定·流式）",
    "web": "./a2a/index.html",
    "hue": 2
   },
   "a2a-handson": {
    "mod": "A2A",
    "modId": "a2a",
    "title": "动手做：跑通一次 A2A 协作",
    "web": "./a2a/index.html",
    "hue": 2
   },
   "a2a-orchestration": {
    "mod": "A2A",
    "modId": "a2a",
    "title": "多智能体协作（opaque agents·任务委派）",
    "web": "./a2a/index.html",
    "hue": 2
   },
   "a2a-production": {
    "mod": "A2A",
    "modId": "a2a",
    "title": "生产落地·上云",
    "web": "./a2a/index.html",
    "hue": 2
   },
   "a2a-security": {
    "mod": "A2A",
    "modId": "a2a",
    "title": "安全 · 售前速查",
    "web": "./a2a/index.html",
    "hue": 2
   },
   "gw-what-why": {
    "mod": "AI-Gateway",
    "modId": "ai-gateway",
    "title": "是什么·为什么(从 API 网关到 AI 网关)",
    "web": "./ai-gateway/index.html",
    "hue": 3
   },
   "gw-unify": {
    "mod": "AI-Gateway",
    "modId": "ai-gateway",
    "title": "统一接入与协议转换",
    "web": "./ai-gateway/index.html",
    "hue": 3
   },
   "gw-route": {
    "mod": "AI-Gateway",
    "modId": "ai-gateway",
    "title": "路由·负载·容灾",
    "web": "./ai-gateway/index.html",
    "hue": 3
   },
   "gw-cost": {
    "mod": "AI-Gateway",
    "modId": "ai-gateway",
    "title": "流量与成本治理",
    "web": "./ai-gateway/index.html",
    "hue": 3
   },
   "gw-guardrail": {
    "mod": "AI-Gateway",
    "modId": "ai-gateway",
    "title": "安全·合规·护栏(挂载点)",
    "web": "./ai-gateway/index.html",
    "hue": 3
   },
   "gw-observe": {
    "mod": "AI-Gateway",
    "modId": "ai-gateway",
    "title": "可观测",
    "web": "./ai-gateway/index.html",
    "hue": 3
   },
   "gw-mcp": {
    "mod": "AI-Gateway",
    "modId": "ai-gateway",
    "title": "AI 网关 + MCP 网关(展开章,含授权时序深潜)",
    "web": "./ai-gateway/index.html",
    "hue": 3
   },
   "gw-cheatsheet": {
    "mod": "AI-Gateway",
    "modId": "ai-gateway",
    "title": "选型与上云·售前速查",
    "web": "./ai-gateway/index.html",
    "hue": 3
   },
   "sec-landscape": {
    "mod": "Security",
    "modId": "security",
    "title": "为什么 AI 安全是新问题(威胁全景)",
    "web": "./security/index.html",
    "hue": 3
   },
   "sec-prompt-injection": {
    "mod": "Security",
    "modId": "security",
    "title": "提示注入与越狱",
    "web": "./security/index.html",
    "hue": 3
   },
   "sec-data-privacy": {
    "mod": "Security",
    "modId": "security",
    "title": "数据与隐私安全",
    "web": "./security/index.html",
    "hue": 3
   },
   "sec-supply-chain": {
    "mod": "Security",
    "modId": "security",
    "title": "供应链与模型来源",
    "web": "./security/index.html",
    "hue": 3
   },
   "sec-agentic": {
    "mod": "Security",
    "modId": "security",
    "title": "Agent 与工具安全",
    "web": "./security/index.html",
    "hue": 3
   },
   "sec-defense": {
    "mod": "Security",
    "modId": "security",
    "title": "防护工程:护栏·模式·红队",
    "web": "./security/index.html",
    "hue": 3
   },
   "sec-governance": {
    "mod": "Security",
    "modId": "security",
    "title": "治理与合规框架",
    "web": "./security/index.html",
    "hue": 3
   },
   "sec-china": {
    "mod": "Security",
    "modId": "security",
    "title": "中国监管合规",
    "web": "./security/index.html",
    "hue": 3
   },
   "sec-cheatsheet": {
    "mod": "Security",
    "modId": "security",
    "title": "售前速查",
    "web": "./security/index.html",
    "hue": 3
   },
   "eval-why-hard": {
    "mod": "Evaluation",
    "modId": "evaluation",
    "title": "为什么评估这么难",
    "web": "./evaluation/index.html",
    "hue": 3
   },
   "eval-benchmarks": {
    "mod": "Evaluation",
    "modId": "evaluation",
    "title": "模型基准测试全景",
    "web": "./evaluation/index.html",
    "hue": 3
   },
   "eval-methods": {
    "mod": "Evaluation",
    "modId": "evaluation",
    "title": "评估方法谱系",
    "web": "./evaluation/index.html",
    "hue": 3
   },
   "eval-judge": {
    "mod": "Evaluation",
    "modId": "evaluation",
    "title": "LLM-as-a-Judge 深潜",
    "web": "./evaluation/index.html",
    "hue": 3
   },
   "eval-build": {
    "mod": "Evaluation",
    "modId": "evaluation",
    "title": "自建评估:数据集与指标设计",
    "web": "./evaluation/index.html",
    "hue": 3
   },
   "eval-scenarios": {
    "mod": "Evaluation",
    "modId": "evaluation",
    "title": "场景验收:RAG / Agent / 微调",
    "web": "./evaluation/index.html",
    "hue": 3
   },
   "eval-tooling": {
    "mod": "Evaluation",
    "modId": "evaluation",
    "title": "评估工具链与生产闭环",
    "web": "./evaluation/index.html",
    "hue": 3
   },
   "eval-cheatsheet": {
    "mod": "Evaluation",
    "modId": "evaluation",
    "title": "售前速查",
    "web": "./evaluation/index.html",
    "hue": 3
   },
   "ft-when": {
    "mod": "Fine-tuning",
    "modId": "fine-tuning",
    "title": "什么时候该微调",
    "web": "./fine-tuning/index.html",
    "hue": 3
   },
   "ft-methods": {
    "mod": "Fine-tuning",
    "modId": "fine-tuning",
    "title": "微调方法谱系（全参 / LoRA / QLoRA）",
    "web": "./fine-tuning/index.html",
    "hue": 3
   },
   "ft-data": {
    "mod": "Fine-tuning",
    "modId": "fine-tuning",
    "title": "数据准备：微调成败在此",
    "web": "./fine-tuning/index.html",
    "hue": 3
   },
   "ft-training": {
    "mod": "Fine-tuning",
    "modId": "fine-tuning",
    "title": "训练实操与框架图鉴",
    "web": "./fine-tuning/index.html",
    "hue": 3
   },
   "ft-alignment": {
    "mod": "Fine-tuning",
    "modId": "fine-tuning",
    "title": "偏好对齐落地（DPO / RFT）",
    "web": "./fine-tuning/index.html",
    "hue": 3
   },
   "ft-cloud": {
    "mod": "Fine-tuning",
    "modId": "fine-tuning",
    "title": "托管微调服务与上云落地",
    "web": "./fine-tuning/index.html",
    "hue": 3
   },
   "ft-eval-deploy": {
    "mod": "Fine-tuning",
    "modId": "fine-tuning",
    "title": "评估与部署",
    "web": "./fine-tuning/index.html",
    "hue": 3
   },
   "ft-field-guide": {
    "mod": "Fine-tuning",
    "modId": "fine-tuning",
    "title": "售前速查",
    "web": "./fine-tuning/index.html",
    "hue": 3
   },
   "ops-what-why": {
    "mod": "AI-Ops",
    "modId": "ai-ops",
    "title": "为什么 LLM 应用的 Ops 是新学科（两根新轴 / 静默退化 / 边界地图 / 观测成本）",
    "web": "./ai-ops/index.html",
    "hue": 3
   },
   "ops-tracing": {
    "mod": "AI-Ops",
    "modId": "ai-ops",
    "title": "Tracing 与 OTel GenAI 深潜（span 四类 / trace 旅程 / PII 三开关）",
    "web": "./ai-ops/index.html",
    "hue": 3
   },
   "ops-online-eval": {
    "mod": "AI-Ops",
    "modId": "ai-ops",
    "title": "在线评估与反馈回流（采样异步打分 / 评估漏斗 / 闭环三件套）",
    "web": "./ai-ops/index.html",
    "hue": 3
   },
   "ops-drift": {
    "mod": "AI-Ops",
    "modId": "ai-ops",
    "title": "漂移与静默退化监测（三类漂移 / 检测组合拳 / 巡检节奏）",
    "web": "./ai-ops/index.html",
    "hue": 3
   },
   "ops-release": {
    "mod": "AI-Ops",
    "modId": "ai-ops",
    "title": "发布管理（版本注册表 / 评估门禁 / 金丝雀 / 回滚 / 环境与 A/B）",
    "web": "./ai-ops/index.html",
    "hue": 3
   },
   "ops-incident": {
    "mod": "AI-Ops",
    "modId": "ai-ops",
    "title": "事故响应（AI runbook 四问 / 急停 / HITL 分级 / 事故分级 SLA）",
    "web": "./ai-ops/index.html",
    "hue": 3
   },
   "ops-tooling": {
    "mod": "AI-Ops",
    "modId": "ai-ops",
    "title": "工具格局与选型（六平台 / Braintrust · AgentOps / APM vs 专用 / 上云）",
    "web": "./ai-ops/index.html",
    "hue": 3
   },
   "ops-cheatsheet": {
    "mod": "AI-Ops",
    "modId": "ai-ops",
    "title": "售前速查（运营包五件套 / 指标速查 / 选型卡 / 串联地图）",
    "web": "./ai-ops/index.html",
    "hue": 3
   },
   "rag-what-why": {
    "mod": "RAG",
    "modId": "rag",
    "title": "是什么/为什么",
    "web": "./rag/index.html",
    "hue": 1
   },
   "rag-embedding": {
    "mod": "RAG",
    "modId": "rag",
    "title": "向量检索与 Embedding",
    "web": "./rag/index.html",
    "hue": 1
   },
   "rag-chunking": {
    "mod": "RAG",
    "modId": "rag",
    "title": "切分策略 Chunking",
    "web": "./rag/index.html",
    "hue": 1
   },
   "rag-reranking": {
    "mod": "RAG",
    "modId": "rag",
    "title": "重排序 Reranking",
    "web": "./rag/index.html",
    "hue": 1
   },
   "rag-evaluation": {
    "mod": "RAG",
    "modId": "rag",
    "title": "常见评估方法",
    "web": "./rag/index.html",
    "hue": 1
   },
   "rag-pipeline": {
    "mod": "RAG",
    "modId": "rag",
    "title": "最小 RAG 管线",
    "web": "./rag/index.html",
    "hue": 1
   },
   "rag-hybrid": {
    "mod": "RAG",
    "modId": "rag",
    "title": "混合检索",
    "web": "./rag/index.html",
    "hue": 1
   },
   "rag-agentic": {
    "mod": "RAG",
    "modId": "rag",
    "title": "Agentic RAG",
    "web": "./rag/index.html",
    "hue": 1
   },
   "rag-production": {
    "mod": "RAG",
    "modId": "rag",
    "title": "生产化与常见坑",
    "web": "./rag/index.html",
    "hue": 1
   },
   "rag-graphrag": {
    "mod": "RAG",
    "modId": "rag",
    "title": "GraphRAG：图谱增强检索",
    "web": "./rag/index.html",
    "hue": 1
   },
   "rag-multimodal": {
    "mod": "RAG",
    "modId": "rag",
    "title": "多模态 RAG",
    "web": "./rag/index.html",
    "hue": 1
   },
   "rag-structured": {
    "mod": "RAG",
    "modId": "rag",
    "title": "结构化数据 RAG（Text-to-SQL 与语义层）",
    "web": "./rag/index.html",
    "hue": 1
   },
   "agent-what-why": {
    "mod": "Agent",
    "modId": "agent",
    "title": "是什么/为什么",
    "web": "./agent/index.html",
    "hue": 1
   },
   "agent-components": {
    "mod": "Agent",
    "modId": "agent",
    "title": "核心组件",
    "web": "./agent/index.html",
    "hue": 1
   },
   "agent-orchestration": {
    "mod": "Agent",
    "modId": "agent",
    "title": "编排模式",
    "web": "./agent/index.html",
    "hue": 1
   },
   "agent-tools-mcp": {
    "mod": "Agent",
    "modId": "agent",
    "title": "工具接入与 MCP",
    "web": "./agent/index.html",
    "hue": 1
   },
   "agent-context": {
    "mod": "Agent",
    "modId": "agent",
    "title": "上下文工程",
    "web": "./agent/index.html",
    "hue": 1
   },
   "agent-eval-guardrails": {
    "mod": "Agent",
    "modId": "agent",
    "title": "评估与护栏",
    "web": "./agent/index.html",
    "hue": 1
   },
   "agent-lowcode": {
    "mod": "Agent",
    "modId": "agent",
    "title": "低代码 Agent 平台（Coze/Dify/n8n/HiAgent 与 code-first 边界）",
    "web": "./agent/index.html",
    "hue": 1
   },
   "agent-memory": {
    "mod": "Agent",
    "modId": "agent",
    "title": "记忆系统（四种记忆分层 / 框架四强 / 记忆投毒 ASI06）",
    "web": "./agent/index.html",
    "hue": 1
   },
   "agent-computer-use": {
    "mod": "Agent",
    "modId": "agent",
    "title": "Computer Use 与 GUI Agent（三路线 / 基准两口径 / RPA 混合 / 安全四件）",
    "web": "./agent/index.html",
    "hue": 1
   },
   "agent-subagent": {
    "mod": "Agent",
    "modId": "agent",
    "title": "多智能体 / Sub-agent 编排（三层框架 / 三性质 / CC·Codex 实操 / 四层触发 / 决策账）",
    "web": "./agent/index.html",
    "hue": 1
   },
   "agent-cheatsheet": {
    "mod": "Agent",
    "modId": "agent",
    "title": "售前速查（高频问题 / 启用条件决策树 / 串联地图；替代原全书串联页）",
    "web": "./agent/index.html",
    "hue": 1
   },
   "mm-what-why": {
    "mod": "Multimodal",
    "modId": "multimodal",
    "title": "是什么 / 为什么（感知面全景、理解 vs 生成）",
    "web": "./multimodal/index.html",
    "hue": 1
   },
   "mm-encoder": {
    "mod": "Multimodal",
    "modId": "multimodal",
    "title": "机器怎么「看」（ViT / CLIP / 编码器选型）",
    "web": "./multimodal/index.html",
    "hue": 1
   },
   "mm-fusion": {
    "mod": "Multimodal",
    "modId": "multimodal",
    "title": "模态怎么「拼」（三路线 + 原生 vs 拼管线）",
    "web": "./multimodal/index.html",
    "hue": 1
   },
   "mm-understanding": {
    "mod": "Multimodal",
    "modId": "multimodal",
    "title": "理解侧能力盘点（图 / 文档 / 视频 / 语音 + 格局）",
    "web": "./multimodal/index.html",
    "hue": 1
   },
   "mm-generation": {
    "mod": "Multimodal",
    "modId": "multimodal",
    "title": "生成侧能力盘点（扩散 vs 自回归 / 视频 / 语音）",
    "web": "./multimodal/index.html",
    "hue": 1
   },
   "mm-selection": {
    "mod": "Multimodal",
    "modId": "multimodal",
    "title": "选型与动手做（成本 / 延迟 / 精度、调用、部署）",
    "web": "./multimodal/index.html",
    "hue": 1
   },
   "mm-production": {
    "mod": "Multimodal",
    "modId": "multimodal",
    "title": "生产落地与坑（成本 / 幻觉 / 评估 / 安全）",
    "web": "./multimodal/index.html",
    "hue": 1
   },
   "mm-voice-realtime": {
    "mod": "Multimodal",
    "modId": "multimodal",
    "title": "语音与实时交互（延迟预算 / 级联 vs 端到端 / 打断 / RTC 框架）",
    "web": "./multimodal/index.html",
    "hue": 1
   },
   "mm-video-generation": {
    "mod": "Multimodal",
    "modId": "multimodal",
    "title": "视频生成（在位三家格局、按秒计价成本账、工作流与标识合规）",
    "web": "./multimodal/index.html",
    "hue": 1
   },
   "sp-what-why": {
    "mod": "Solution-Patterns",
    "modId": "solution-patterns",
    "title": "从技术轴到场景轴（方案 = 场景 × 积木）",
    "web": "./solution-patterns/index.html",
    "hue": 0
   },
   "sp-method": {
    "mod": "Solution-Patterns",
    "modId": "solution-patterns",
    "title": "方案共性方法（五层架构 / POC 三要素 / 三本账 / 口径鉴别）",
    "web": "./solution-patterns/index.html",
    "hue": 0
   },
   "sp-customer-service": {
    "mod": "Solution-Patterns",
    "modId": "solution-patterns",
    "title": "智能客服（三层漏斗 / 解决率口径 / 语音客服）",
    "web": "./solution-patterns/index.html",
    "hue": 0
   },
   "sp-knowledge-search": {
    "mod": "Solution-Patterns",
    "modId": "solution-patterns",
    "title": "企业知识库与 AI 搜索（权限命门 / Glean 模式）",
    "web": "./solution-patterns/index.html",
    "hue": 0
   },
   "sp-content-gen": {
    "mod": "Solution-Patterns",
    "modId": "solution-patterns",
    "title": "营销与内容生成（品牌工程 / 商业安全 / 人审）",
    "web": "./solution-patterns/index.html",
    "hue": 0
   },
   "sp-ai-coding": {
    "mod": "Solution-Patterns",
    "modId": "solution-patterns",
    "title": "AI Coding 与研发提效（双层格局 / 企业三关注）",
    "web": "./solution-patterns/index.html",
    "hue": 0
   },
   "sp-digital-human": {
    "mod": "Solution-Patterns",
    "modId": "solution-patterns",
    "title": "数字人（离线 vs 实时 / 合规红线）",
    "web": "./solution-patterns/index.html",
    "hue": 0
   },
   "sp-chatbi": {
    "mod": "Solution-Patterns",
    "modId": "solution-patterns",
    "title": "ChatBI 与数据分析（语义层口径战场 / 三道闸 / 产品格局）",
    "web": "./solution-patterns/index.html",
    "hue": 0
   },
   "sp-meeting": {
    "mod": "Solution-Patterns",
    "modId": "solution-patterns",
    "title": "会议与办公助手（记忆库资产 / 三层口径 / 合规红线）",
    "web": "./solution-patterns/index.html",
    "hue": 0
   },
   "llm-why-transformer": {
    "mod": "LLM",
    "modId": "llm",
    "title": "从序列问题到 Transformer",
    "web": "./llm/index.html",
    "hue": 4
   },
   "llm-attention-qkv": {
    "mod": "LLM",
    "modId": "llm",
    "title": "注意力机制：QKV 拆解",
    "web": "./llm/index.html",
    "hue": 4
   },
   "llm-architecture": {
    "mod": "LLM",
    "modId": "llm",
    "title": "Transformer 全解剖",
    "web": "./llm/index.html",
    "hue": 4
   },
   "llm-inference-kv": {
    "mod": "LLM",
    "modId": "llm",
    "title": "从架构到推理：上下文窗口与 KV 缓存",
    "web": "./llm/index.html",
    "hue": 4
   },
   "llm-attention-zoo": {
    "mod": "LLM",
    "modId": "llm",
    "title": "注意力的工程进化",
    "web": "./llm/index.html",
    "hue": 4
   },
   "llm-presales-map": {
    "mod": "LLM",
    "modId": "llm",
    "title": "售前视角收拢",
    "web": "./llm/index.html",
    "hue": 4
   },
   "pe-what-why": {
    "mod": "Prompt-Engineering",
    "modId": "pe",
    "title": "是什么 / 为什么",
    "web": "./prompt-engineering/index.html",
    "hue": 4
   },
   "pe-anatomy": {
    "mod": "Prompt-Engineering",
    "modId": "pe",
    "title": "提示词解剖（角色/四要素/分隔符）",
    "web": "./prompt-engineering/index.html",
    "hue": 4
   },
   "pe-core-techniques": {
    "mod": "Prompt-Engineering",
    "modId": "pe",
    "title": "核心技巧（zero/few-shot、CoT、结构化输出、清晰指令）",
    "web": "./prompt-engineering/index.html",
    "hue": 4
   },
   "pe-advanced-reasoning": {
    "mod": "Prompt-Engineering",
    "modId": "pe",
    "title": "进阶推理与编排（自洽性、ReAct、提示词链、推理模型时代）",
    "web": "./prompt-engineering/index.html",
    "hue": 4
   },
   "pe-engineering": {
    "mod": "Prompt-Engineering",
    "modId": "pe",
    "title": "工程化与自动优化（版本化、评估驱动、DSPy、缓存）",
    "web": "./prompt-engineering/index.html",
    "hue": 4
   },
   "pe-security": {
    "mod": "Prompt-Engineering",
    "modId": "pe",
    "title": "安全与风险（提示词注入、越狱、OWASP、纵深防御）",
    "web": "./prompt-engineering/index.html",
    "hue": 4
   },
   "pe-presales-map": {
    "mod": "Prompt-Engineering",
    "modId": "pe",
    "title": "售前视角收拢（问题速查、选型树、上云全景、串联）",
    "web": "./prompt-engineering/index.html",
    "hue": 4
   },
   "llminf-anatomy": {
    "mod": "LLM-Inference",
    "modId": "llm-inference",
    "title": "推理是怎么跑起来的",
    "web": "./llm-inference/index.html",
    "hue": 4
   },
   "llminf-kv-budget": {
    "mod": "LLM-Inference",
    "modId": "llm-inference",
    "title": "KV Cache 与显存账",
    "web": "./llm-inference/index.html",
    "hue": 4
   },
   "llminf-batching": {
    "mod": "LLM-Inference",
    "modId": "llm-inference",
    "title": "把 GPU 喂饱：批处理与调度",
    "web": "./llm-inference/index.html",
    "hue": 4
   },
   "llminf-engines": {
    "mod": "LLM-Inference",
    "modId": "llm-inference",
    "title": "推理框架图鉴",
    "web": "./llm-inference/index.html",
    "hue": 4
   },
   "llminf-quant": {
    "mod": "LLM-Inference",
    "modId": "llm-inference",
    "title": "让模型变小：量化",
    "web": "./llm-inference/index.html",
    "hue": 4
   },
   "llminf-speculative": {
    "mod": "LLM-Inference",
    "modId": "llm-inference",
    "title": "让模型变快：投机解码与算法加速",
    "web": "./llm-inference/index.html",
    "hue": 4
   },
   "llminf-disagg": {
    "mod": "LLM-Inference",
    "modId": "llm-inference",
    "title": "集群级：P/D 分离与分布式推理",
    "web": "./llm-inference/index.html",
    "hue": 4
   },
   "llminf-production": {
    "mod": "LLM-Inference",
    "modId": "llm-inference",
    "title": "生产化与售前速查",
    "web": "./llm-inference/index.html",
    "hue": 4
   },
   "llmtrain-overview": {
    "mod": "LLM-Training",
    "modId": "llm-training",
    "title": "全景总览：从随机权重到可用助手",
    "web": "./llm-training/index.html",
    "hue": 4
   },
   "llmtrain-data": {
    "mod": "LLM-Training",
    "modId": "llm-training",
    "title": "数据：模型的粮食",
    "web": "./llm-training/index.html",
    "hue": 4
   },
   "llmtrain-pretrain": {
    "mod": "LLM-Training",
    "modId": "llm-training",
    "title": "预训练：压缩互联网",
    "web": "./llm-training/index.html",
    "hue": 4
   },
   "llmtrain-sft": {
    "mod": "LLM-Training",
    "modId": "llm-training",
    "title": "后训练 I · SFT：教会听话",
    "web": "./llm-training/index.html",
    "hue": 4
   },
   "llmtrain-alignment": {
    "mod": "LLM-Training",
    "modId": "llm-training",
    "title": "后训练 II · 对齐：教会分寸",
    "web": "./llm-training/index.html",
    "hue": 4
   },
   "llmtrain-reasoning": {
    "mod": "LLM-Training",
    "modId": "llm-training",
    "title": "后训练 III · RLVR 与推理模型：教会思考",
    "web": "./llm-training/index.html",
    "hue": 4
   },
   "llmtrain-infra": {
    "mod": "LLM-Training",
    "modId": "llm-training",
    "title": "训练基础设施与算力账",
    "web": "./llm-training/index.html",
    "hue": 4
   },
   "llmtrain-eval": {
    "mod": "LLM-Training",
    "modId": "llm-training",
    "title": "评估与发布：怎么知道练成了",
    "web": "./llm-training/index.html",
    "hue": 4
   },
   "aic-overview": {
    "mod": "AI-Infra-Compute",
    "modId": "ai-infra-compute",
    "title": "全景总览：从一张卡到一座 AI 工厂",
    "web": "./ai-infra-compute/index.html",
    "hue": 5
   },
   "aic-gpu": {
    "mod": "AI-Infra-Compute",
    "modId": "ai-infra-compute",
    "title": "GPU 解剖：为什么 AI 计算长在 GPU 上",
    "web": "./ai-infra-compute/index.html",
    "hue": 5
   },
   "aic-hbm": {
    "mod": "AI-Infra-Compute",
    "modId": "ai-infra-compute",
    "title": "显存与 HBM：AI 时代最贵的房地产",
    "web": "./ai-infra-compute/index.html",
    "hue": 5
   },
   "aic-chips": {
    "mod": "AI-Infra-Compute",
    "modId": "ai-infra-compute",
    "title": "芯片格局与选型：NVIDIA 之内与之外",
    "web": "./ai-infra-compute/index.html",
    "hue": 5
   },
   "aic-scaleup": {
    "mod": "AI-Infra-Compute",
    "modId": "ai-infra-compute",
    "title": "Scale-up 互联：把 72 张卡焊成一张大卡",
    "web": "./ai-infra-compute/index.html",
    "hue": 5
   },
   "aic-scaleout": {
    "mod": "AI-Infra-Compute",
    "modId": "ai-infra-compute",
    "title": "Scale-out 网络：把一万张卡连成集群",
    "web": "./ai-infra-compute/index.html",
    "hue": 5
   },
   "aic-storage": {
    "mod": "AI-Infra-Compute",
    "modId": "ai-infra-compute",
    "title": "存储与数据管线：别让 GPU 等数据",
    "web": "./ai-infra-compute/index.html",
    "hue": 5
   },
   "aic-econ": {
    "mod": "AI-Infra-Compute",
    "modId": "ai-infra-compute",
    "title": "算力经济学与售前速查",
    "web": "./ai-infra-compute/index.html",
    "hue": 5
   },
   "aip-overview": {
    "mod": "AI-Infra-Platform",
    "modId": "ai-infra-platform",
    "title": "平台全景：从「一堆卡」到「一个平台」",
    "web": "./ai-infra-platform/index.html",
    "hue": 5
   },
   "aip-k8s-gpu": {
    "mod": "AI-Infra-Platform",
    "modId": "ai-infra-platform",
    "title": "K8s + GPU 基础：从数卡到懂卡",
    "web": "./ai-infra-platform/index.html",
    "hue": 5
   },
   "aip-scheduling": {
    "mod": "AI-Infra-Platform",
    "modId": "ai-infra-platform",
    "title": "作业调度：让最贵的卡不空转",
    "web": "./ai-infra-platform/index.html",
    "hue": 5
   },
   "aip-sharing": {
    "mod": "AI-Infra-Platform",
    "modId": "ai-infra-platform",
    "title": "GPU 切分与多租户",
    "web": "./ai-infra-platform/index.html",
    "hue": 5
   },
   "aip-faulttol": {
    "mod": "AI-Infra-Platform",
    "modId": "ai-infra-platform",
    "title": "训练容错工程：万卡集群故障是常态",
    "web": "./ai-infra-platform/index.html",
    "hue": 5
   },
   "aip-observability": {
    "mod": "AI-Infra-Platform",
    "modId": "ai-infra-platform",
    "title": "可观测性与利用率运营",
    "web": "./ai-infra-platform/index.html",
    "hue": 5
   },
   "aip-serving": {
    "mod": "AI-Infra-Platform",
    "modId": "ai-infra-platform",
    "title": "推理服务平台化",
    "web": "./ai-infra-platform/index.html",
    "hue": 5
   },
   "aip-cloud": {
    "mod": "AI-Infra-Platform",
    "modId": "ai-infra-platform",
    "title": "云上算力形态与售前速查",
    "web": "./ai-infra-platform/index.html",
    "hue": 5
   },
   "ml-map": {
    "mod": "Model-Landscape",
    "modId": "model-landscape",
    "title": "全景地图（三大阵营 / 两个市场 / 一年三变局）",
    "web": "./model-landscape/index.html",
    "hue": 0
   },
   "ml-closed": {
    "mod": "Model-Landscape",
    "modId": "model-landscape",
    "title": "闭源旗舰家族图谱（五张名片 + 对比总表）",
    "web": "./model-landscape/index.html",
    "hue": 0
   },
   "ml-open": {
    "mod": "Model-Landscape",
    "modId": "model-landscape",
    "title": "开放权重格局（中国四强榜首 / 西方线 / 追平叙事）",
    "web": "./model-landscape/index.html",
    "hue": 0
   },
   "ml-china": {
    "mod": "Model-Landscape",
    "modId": "model-landscape",
    "title": "中国格局与豆包定位（四强横评 / 豆包家族 / 场景口径）",
    "web": "./model-landscape/index.html",
    "hue": 0
   },
   "ml-platforms": {
    "mod": "Model-Landscape",
    "modId": "model-landscape",
    "title": "国内平台格局（方舟/百炼/千帆/腾讯四平台画像、货架哲学、价格锚点、选型三问）",
    "web": "./model-landscape/index.html",
    "hue": 0
   },
   "ml-license": {
    "mod": "Model-Landscape",
    "modId": "model-landscape",
    "title": "许可证与合规边界（open weight vs open source / 三级分类）",
    "web": "./model-landscape/index.html",
    "hue": 0
   },
   "ml-price": {
    "mod": "Model-Landscape",
    "modId": "model-landscape",
    "title": "价格带与成本工程（光谱 / 三档制 / 缓存经济学）",
    "web": "./model-landscape/index.html",
    "hue": 0
   },
   "ml-capability": {
    "mod": "Model-Landscape",
    "modId": "model-landscape",
    "title": "能力矩阵与推理模型（窗口 / 模态 / 思考预算 / overthinking）",
    "web": "./model-landscape/index.html",
    "hue": 0
   },
   "ml-selection": {
    "mod": "Model-Landscape",
    "modId": "model-landscape",
    "title": "选型方法论（多模型默认解 / 三层路由 / 两道防线）",
    "web": "./model-landscape/index.html",
    "hue": 0
   },
   "ml-cheatsheet": {
    "mod": "Model-Landscape",
    "modId": "model-landscape",
    "title": "售前速查（总表 / 价格卡 / 许可证卡 / 保鲜声明 / 串联）",
    "web": "./model-landscape/index.html",
    "hue": 0
   },
   "de-what-why": {
    "mod": "Data-Engineering",
    "modId": "data-engineering",
    "title": "数据就绪度是第一风险（四问 / 管线总图 / 报价项）",
    "web": "./data-engineering/index.html",
    "hue": 6
   },
   "de-parsing": {
    "mod": "Data-Engineering",
    "modId": "data-engineering",
    "title": "文档解析管线（四强格局 / 基准口径 / 选型分水岭）",
    "web": "./data-engineering/index.html",
    "hue": 6
   },
   "de-pipeline": {
    "mod": "Data-Engineering",
    "modId": "data-engineering",
    "title": "连接器与增量同步（五件事 / 增量三模式 / 去重失效）",
    "web": "./data-engineering/index.html",
    "hue": 6
   },
   "de-vectordb": {
    "mod": "Data-Engineering",
    "modId": "data-engineering",
    "title": "向量库选型深潜（五锚点 / 按规模演进 / 迁移纪律）",
    "web": "./data-engineering/index.html",
    "hue": 6
   },
   "de-quality": {
    "mod": "Data-Engineering",
    "modId": "data-engineering",
    "title": "数据质量与覆盖率（四指标 / 坏答案回流 / 运营节奏）",
    "web": "./data-engineering/index.html",
    "hue": 6
   },
   "de-labeling": {
    "mod": "Data-Engineering",
    "modId": "data-engineering",
    "title": "标注与合成数据运营（预算三去向 / 双线运营 / 分流口诀）",
    "web": "./data-engineering/index.html",
    "hue": 6
   },
   "de-governance": {
    "mod": "Data-Engineering",
    "modId": "data-engineering",
    "title": "治理与权限衔接（三执行点 / 越权测试 / 向量化≠匿名化）",
    "web": "./data-engineering/index.html",
    "hue": 6
   }
  }
 }
};
