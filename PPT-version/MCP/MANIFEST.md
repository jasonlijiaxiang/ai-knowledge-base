# MCP · MANIFEST（模块清单）

## 模块信息
| 字段 | 值 |
| --- | --- |
| 模块 ID | mcp |
| 所在层 | 协议层 |
| 主导关系 | 复用面的成本账——读者要判断的是「这层标准该不该加」。 |
| 建立日期 | 2026-07-08 |
| 最后更新 | 2026-08-02 网页版增补「上云怎么落地」（Codex 对照库借鉴第 3 步·回流批）：新增 `#cloud` 小节（结构性小节，与 qa/related/sources 同类，不进章节清单）……；讲义 81 页；完整更新记录见 [raw-data/更新记录.md](raw-data/更新记录.md) |
| 产出 skill 版本 | v1.0（清单由 v2.0 回填） |

## 章节清单
| 章节 ID | 现编号 | 标题 | 状态 | 最后核实 |
| --- | --- | --- | --- | --- |
| mcp-what-why | 第 1 章 | 是什么/为什么 | ✅ | 2026-07-08 |
| mcp-protocol | 第 2 章 | 协议解剖 | ✅ | 2026-07-08 |
| mcp-transport | 第 3 章 | 传输与演进 | ✅ | 2026-07-08 |
| mcp-server | 第 4 章 | 动手写 server | ✅ | 2026-07-08 |
| mcp-production | 第 5 章 | 生产落地 | ✅ | 2026-07-08 |
| mcp-security | 第 6 章 | 安全 | ✅ | 2026-07-08 |
| mcp-cheatsheet | 第 7 章 | 售前速查（高频问题 / 上手排错 / 版本口径与串联；2026-07-11 补齐全库速查惯例） | ✅ | 2026-07-11 |

## 时效性事实（巡检盘查对象）
| 事实 | 章节 ID | 核实日期 | 来源 | 复查日 | 等级 | 节奏 | 不能外推 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 现行规范 2026-07-28（2026-07-28 正式发布）：无状态协议核心、MRTR 多轮请求、Mcp-Method/Mcp-Name 头路由、列表结果可缓存（ttlMs/cacheScope）、扩展框架；上一版 2025-11-25 进入兼容期 | mcp-protocol | 2026-07-30 | modelcontextprotocol.io/specification/2026-07-28/changelog | 2027-01-31 | A | 90 | 现行版口径，不代表兼容期内旧版实现或未发布新版的行为 |
| 2026-07-28 九项主变更：删会话与 Mcp-Session-Id（SEP-2567）、删 initialize 握手改每请求自带版本与能力（SEP-2575）、新增 server/discover、订阅收口为 subscriptions/listen、删 ping 与 logging/setLevel、Tasks 转官方扩展（SEP-2663）、MRTR 取代服务端发起请求（SEP-2322）、结果必带 resultType、取消 SSE 断流续传 | mcp-transport | 2026-07-30 | MCP 官方 changelog 2026-07-28 | 2027-01-31 | A | 90 | 规范条款清单，不代表各家实现与 SDK 已跟进落地 |
| 首个正式弃用政策：Active/Deprecated/Removed 三态，弃用到最早可移除之间**至少十二个月**；首批弃用 Roots、Sampling、Logging（SEP-2577）与 HTTP+SSE 传输（SEP-2596），OAuth 动态客户端注册转 CIMD | mcp-transport | 2026-07-30 | modelcontextprotocol.io/community/feature-lifecycle | — | A | 90 | 十二个月是最早可移除下限，不等于实现方会同步保留那么久 |
| 授权加固三条：授权响应带 iss 且客户端 MUST 校验（RFC 9207，SEP-2468）；动态注册须声明 application_type（SEP-837）；凭据按签发方绑定、不得跨授权服务器复用（SEP-2352） | mcp-security | 2026-07-30 | MCP 官方 changelog 2026-07-28 | — | A | 90 | 规范的 MUST 条款，不代表现网服务端与授权服务器已合规 |
| 官方 SDK Tier 1 为 TypeScript、Python、C#、Go（Tier 是支持等级承诺，不是安全认证）；四者均已出 2026-07-28 支持版本，Rust 为 beta | mcp-server | 2026-07-30 | modelcontextprotocol.io/docs/sdk；MCP 官方 2026-07-28 发布文 | — | A | 90 | Tier 是支持承诺不是安全认证，各语言发布节奏并不同步 |
| SDK 正式版已发（beta 阶段结束）：Python SDK v2.0.0 于 2026-07-28 发布（与规范同日；FastMCP 更名 MCPServer，装饰器 API 不变）、TypeScript SDK 2.0.0 于 2026-07-27 发布并拆包（@modelcontextprotocol/core / client / server / node / express / hono / fastify 等一组）；v1 线转维护、只收安全修复（当前 v1.29.0，2026-07-28），暂不升级的把依赖钉上限 `mcp>=1.28,<2` | mcp-server | 2026-08-01 | github.com/modelcontextprotocol/python-sdk releases（v2.0.0 / v1.29.0）；github.com/modelcontextprotocol/typescript-sdk releases（@modelcontextprotocol/core@2.0.0 等） | 2026-11-30 | A | 90 | 发布日与版本号是当日快照，锁版上限前要按仓库重核 |
| 官方 Registry 仍 preview 未 GA，不支持私有 server（企业需自建） | mcp-production | 2026-07-08 | registry 官方页 | — | A | 90 | preview 状态是当日快照，不能当企业级目录方案的依据 |
| 2026 年 1–4 月披露 40+ CVE；CVE-2025-6514（mcp-remote RCE）；MCPTox 工具投毒成功率 84.2% | mcp-security | 2026-07-08 | dev.to 汇总、arXiv 2508.14925 | — | B | 90 | 84.2% 是自动批准基准环境结论，不可外推到人工审批部署 |
| 治理归 AAIF（2025-12 捐赠，Linux Foundation 旗下），变更走 SEP 机制 | mcp-what-why | 2026-07-08 | aaif.io 官方博客 | — | A | 180 | 治理归属与变更流程，不涉协议技术细节与路线时间表 |
| MCP 工具定义随每条消息进上下文（非每会话一次）；GitHub 官方 server 94 工具 ≈ 17,600 tokens，描述压缩后可降至约 3,900（低压缩）／约 500（最激进） | mcp-production | 2026-07-20 | Atlassian 工程博客《MCP Compression》2026-03-29（未公布模型与计数方法） | 2026-10-31 | B | 90 | 未公布模型与计数方法，量级参考，不能拿来精确报价 |
| MCP 流量经网关一跳的额外延迟：加密迭代调至约 100 次后 1–2ms／会话；默认 10 万次 KDF 迭代下为数十毫秒 | mcp-production | 2026-07-20 | Envoy AI Gateway 官方基准 2025-12-08（MacBook Pro M1 八核、echo 工具、按会话计） | 2026-10-31 | B | 90 | 单机 echo 基准按会话计，真实负载与迭代数不同差异很大 |

## 串联出边
| 本模块章节 | 指向 | 关系 |
| --- | --- | --- |
| mcp-what-why | agent#agent-tools-mcp | MCP 是 Agent 工具接入的标准化层，Agent 第 4 章为入口视角 |
| mcp-security | agent#agent-eval-guardrails | 防护共识一致：最小权限、人工审批、持续监控 |
| mcp-what-why | a2a#a2a-what-why | 协议层双子：MCP 接工具（纵向）/ A2A 接 Agent（横向），双向互引「分工」 |
| mcp-production | ai-gateway#gw-mcp | 生产落地的治理面：MCP 流量的统一代理/发现/鉴权/限流/审计由网关承接（协议归本模块、治理归网关，双向互引） |
| mcp-security | security#sec-agentic | 工具描述投毒与 MCP 供应链风险在 Security 第 4/5 章深化（本章讲协议侧防线，双向互引） |
| mcp-security | a2a#a2a-security | 两协议安全共识对照：签名/最小权限/鉴权/opaque 边界（A2A 侧已有入边，此为回边） |
