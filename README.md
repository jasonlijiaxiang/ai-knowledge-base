# AI 知识库

[![门禁](https://github.com/jasonlijiaxiang/ai-knowledge-base/actions/workflows/gates.yml/badge.svg)](https://github.com/jasonlijiaxiang/ai-knowledge-base/actions/workflows/gates.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

面向"售前技术"角色的 AI 知识库，持续扩充、持续更新。同一套知识做了两个版本：**PPT** 是内容出处
（讲义 + 精选书单），**网页版**是可搜索、可串联的延伸。当前 **21 个模块 / 1989 页讲义**，七层书架。

**维护它的那套方法本身也在库里**——技能 `knowledge-base-builder` 单独打包，装上就能在这份内容的
基础上继续建你自己的库。

## 📖 在线阅读

> **[https://jasonlijiaxiang.github.io/ai-knowledge-base/](https://jasonlijiaxiang.github.io/ai-knowledge-base/)**
> 不用 clone，点开就读。（GitHub 上直接点 `.html` 文件只会看到源码，走上面这个地址。）

常用的三个入口：

| 入口 | 用来干嘛 |
| --- | --- |
| **[实战包](https://jasonlijiaxiang.github.io/ai-knowledge-base/_prep/实战包.html)** | 对客交锋 95 题，每题 15–30 秒的电梯版。时间紧只刷标 ★ 的 27 道 |
| **[网页版](https://jasonlijiaxiang.github.io/ai-knowledge-base/Web-version/)** | 21 册每册一页读完，可搜索、按层浏览；带关系网与保鲜看板 |
| **[PPT 总览](https://jasonlijiaxiang.github.io/ai-knowledge-base/PPT-version/README.html)** | 21 册讲义与精选书单，内容出处。要投屏、要逐页讲用这边 |

另有[全库一页纸](https://jasonlijiaxiang.github.io/ai-knowledge-base/_prep/全库一页纸.html)、
[学习路径](https://jasonlijiaxiang.github.io/ai-knowledge-base/_prep/学习路径.html)、
[跨册问答库](https://jasonlijiaxiang.github.io/ai-knowledge-base/Web-version/qa/)。

## 📦 两条下载路径

**① 要整个库**（讲义 + 书单 + 网页版 + 工具，断网可用）

```bash
git clone https://github.com/jasonlijiaxiang/ai-knowledge-base.git
```

不装 git 也行：[Releases](https://github.com/jasonlijiaxiang/ai-knowledge-base/releases) 里
`kb-v*` 那一条带一个开箱即用的 zip（打包时已解压自检过：在解出来的那份里把门禁全跑了一遍）。
拿到之后双击 `README.html` 就能读，不用装任何软件。

**② 只要技能**（不要这些内容，只要维护知识库的那套方法）

- **下载**：[**knowledge-base-builder.skill**](https://github.com/jasonlijiaxiang/ai-knowledge-base/raw/main/_skill-source/knowledge-base-builder.skill)
  ——单个文件，永远是最新版（有一道门禁盯着它与源码逐文件一致，不会悄悄过期）
- **安装**：claude.ai → 设置 → Capabilities → Skills 上传；用 Claude Code 就解压到 `~/.claude/skills/knowledge-base-builder/`
- **源码**：[`_skill-source/knowledge-base-builder/`](_skill-source/knowledge-base-builder/)（可逐文件读、可 diff）
- **历次版本**：[Releases](https://github.com/jasonlijiaxiang/ai-knowledge-base/releases) 里的 `skill-v*`，每条带该版改了什么

技能是**通用**的——不绑定这份内容。装上之后改一下 [`KB-CONFIG.md`](KB-CONFIG.md) 的
「读者画像」「知识领域」，对 Claude 说一句「把 ×× 整理进知识库」，它就会按同一套结构、
同一套风格建你自己的库，做完自动跑门禁。

## 🗂 21 个模块

<!-- MODULES:BEGIN 由 Web-version/build.py 从各模块 MANIFEST.md 生成，请勿手工编辑 -->
| 层 | 模块 | 一句话 | 在线读 | 源文件 |
|---|---|---|---|---|
| 解决方案层 | **Model-Landscape** | 模型格局与选型 | [网页版](https://jasonlijiaxiang.github.io/ai-knowledge-base/Web-version/model-landscape/) | [讲义](PPT-version/Model-Landscape/Model-Landscape-讲义.pptx) · [清单](PPT-version/Model-Landscape/MANIFEST.md) · [书单](PPT-version/Model-Landscape/电子书书单.md) |
| 解决方案层 | **Solution-Patterns** | 场景解决方案库 | [网页版](https://jasonlijiaxiang.github.io/ai-knowledge-base/Web-version/solution-patterns/) | [讲义](PPT-version/Solution-Patterns/Solution-Patterns-讲义.pptx) · [清单](PPT-version/Solution-Patterns/MANIFEST.md) · [书单](PPT-version/Solution-Patterns/电子书书单.md) |
| 应用模式层 | **Agent** | 智能体与编排：十一章覆盖 agent vs workflow、核心组件、编排模式、MCP、… | [网页版](https://jasonlijiaxiang.github.io/ai-knowledge-base/Web-version/agent/) | [讲义](PPT-version/Agent/Agent-讲义.pptx) · [清单](PPT-version/Agent/MANIFEST.md) · [书单](PPT-version/Agent/电子书书单.md) |
| 应用模式层 | **Multimodal** | 多模态：让模型看图 / 听声 / 读文档 / 看视频并能生成 | [网页版](https://jasonlijiaxiang.github.io/ai-knowledge-base/Web-version/multimodal/) | [讲义](PPT-version/Multimodal/Multimodal-讲义.pptx) · [清单](PPT-version/Multimodal/MANIFEST.md) · [书单](PPT-version/Multimodal/电子书书单.md) |
| 应用模式层 | **RAG** | 检索增强生成的原理与实践：原理五章 | [网页版](https://jasonlijiaxiang.github.io/ai-knowledge-base/Web-version/rag/) | [讲义](PPT-version/RAG/RAG-讲义.pptx) · [清单](PPT-version/RAG/MANIFEST.md) · [书单](PPT-version/RAG/电子书书单.md) |
| 协议层 | **A2A** | 智能体间协议：让不同厂商/框架的 Agent 互相发现、委派、协作 | [网页版](https://jasonlijiaxiang.github.io/ai-knowledge-base/Web-version/a2a/) | [讲义](PPT-version/A2A/A2A-讲义.pptx) · [清单](PPT-version/A2A/MANIFEST.md) · [书单](PPT-version/A2A/电子书书单.md) |
| 协议层 | **MCP** | 模型上下文协议：M×N→M+N 的标准插座 | [网页版](https://jasonlijiaxiang.github.io/ai-knowledge-base/Web-version/mcp/) | [讲义](PPT-version/MCP/MCP-讲义.pptx) · [清单](PPT-version/MCP/MANIFEST.md) · [书单](PPT-version/MCP/电子书书单.md) |
| 工程保障层 | **AI-Gateway** | AI 网关：多模型系统的统一入口与运营管控层 | [网页版](https://jasonlijiaxiang.github.io/ai-knowledge-base/Web-version/ai-gateway/) | [讲义](PPT-version/AI-Gateway/AI-Gateway-讲义.pptx) · [清单](PPT-version/AI-Gateway/MANIFEST.md) · [书单](PPT-version/AI-Gateway/电子书书单.md) |
| 工程保障层 | **AI-Governance** | AI 治理、风险与合规：治理是一套一直在跑的决定系统而非一份文档 | [网页版](https://jasonlijiaxiang.github.io/ai-knowledge-base/Web-version/ai-governance/) | [讲义](PPT-version/AI-Governance/AI-Governance-讲义.pptx) · [清单](PPT-version/AI-Governance/MANIFEST.md) · [书单](PPT-version/AI-Governance/电子书书单.md) |
| 工程保障层 | **AI-Ops** | LLM 可观测与运维 | [网页版](https://jasonlijiaxiang.github.io/ai-knowledge-base/Web-version/ai-ops/) | [讲义](PPT-version/AI-Ops/AI-Ops-讲义.pptx) · [清单](PPT-version/AI-Ops/MANIFEST.md) · [书单](PPT-version/AI-Ops/电子书书单.md) |
| 工程保障层 | **Evaluation** | LLM 评估体系：八章覆盖为什么评估难、模型基准全景 | [网页版](https://jasonlijiaxiang.github.io/ai-knowledge-base/Web-version/evaluation/) | [讲义](PPT-version/Evaluation/Evaluation-讲义.pptx) · [清单](PPT-version/Evaluation/MANIFEST.md) · [书单](PPT-version/Evaluation/电子书书单.md) |
| 工程保障层 | **Fine-tuning** | 微调工程实践：拿自己的数据定制模型 | [网页版](https://jasonlijiaxiang.github.io/ai-knowledge-base/Web-version/fine-tuning/) | [讲义](PPT-version/Fine-tuning/Fine-tuning-讲义.pptx) · [清单](PPT-version/Fine-tuning/MANIFEST.md) · [书单](PPT-version/Fine-tuning/电子书书单.md) |
| 工程保障层 | **Predictive-AI-MLOps** | 预测式 AI 与 MLOps：接住客户已有的那批传统模型 | [网页版](https://jasonlijiaxiang.github.io/ai-knowledge-base/Web-version/predictive-ai-mlops/) | [讲义](PPT-version/Predictive-AI-MLOps/Predictive-AI-MLOps-讲义.pptx) · [清单](PPT-version/Predictive-AI-MLOps/MANIFEST.md) · [书单](PPT-version/Predictive-AI-MLOps/电子书书单.md) |
| 工程保障层 | **Security** | AI 安全：九章覆盖威胁全景 | [网页版](https://jasonlijiaxiang.github.io/ai-knowledge-base/Web-version/security/) | [讲义](PPT-version/Security/Security-讲义.pptx) · [清单](PPT-version/Security/MANIFEST.md) · [书单](PPT-version/Security/电子书书单.md) |
| 基础层 | **LLM** | 大模型的发动机舱：原理三章 | [网页版](https://jasonlijiaxiang.github.io/ai-knowledge-base/Web-version/llm/) | [讲义](PPT-version/LLM/LLM-讲义.pptx) · [清单](PPT-version/LLM/MANIFEST.md) · [书单](PPT-version/LLM/电子书书单.md) |
| 基础层 | **LLM-Inference** | LLM 推理服务：训练好的模型怎么又快又省地跑起来 | [网页版](https://jasonlijiaxiang.github.io/ai-knowledge-base/Web-version/llm-inference/) | [讲义](PPT-version/LLM-Inference/LLM-Inference-讲义.pptx) · [清单](PPT-version/LLM-Inference/MANIFEST.md) · [书单](PPT-version/LLM-Inference/电子书书单.md) |
| 基础层 | **LLM-Training** | LLM 训练全景：从随机权重到可用助手的完整流水线 | [网页版](https://jasonlijiaxiang.github.io/ai-knowledge-base/Web-version/llm-training/) | [讲义](PPT-version/LLM-Training/LLM-Training-讲义.pptx) · [清单](PPT-version/LLM-Training/MANIFEST.md) · [书单](PPT-version/LLM-Training/电子书书单.md) |
| 基础层 | **Prompt-Engineering** | 和大模型对话的接口层：最便宜、最快见效的能力杠杆——不改权重、不搭检索就能把模型能力调出来 | [网页版](https://jasonlijiaxiang.github.io/ai-knowledge-base/Web-version/prompt-engineering/) | [讲义](PPT-version/Prompt-Engineering/Prompt-Engineering-讲义.pptx) · [清单](PPT-version/Prompt-Engineering/MANIFEST.md) · [书单](PPT-version/Prompt-Engineering/电子书书单.md) |
| 算力底座层 | **AI-Infra-Compute** | 算力硬件与网络：八章覆盖五层栈全景、GPU 解剖 | [网页版](https://jasonlijiaxiang.github.io/ai-knowledge-base/Web-version/ai-infra-compute/) | [讲义](PPT-version/AI-Infra-Compute/AI-Infra-Compute-讲义.pptx) · [清单](PPT-version/AI-Infra-Compute/MANIFEST.md) · [书单](PPT-version/AI-Infra-Compute/电子书书单.md) |
| 算力底座层 | **AI-Infra-Platform** | 集群平台与调度：八章覆盖平台四大职责、K8s+GPU | [网页版](https://jasonlijiaxiang.github.io/ai-knowledge-base/Web-version/ai-infra-platform/) | [讲义](PPT-version/AI-Infra-Platform/AI-Infra-Platform-讲义.pptx) · [清单](PPT-version/AI-Infra-Platform/MANIFEST.md) · [书单](PPT-version/AI-Infra-Platform/电子书书单.md) |
| 数据底座层 | **Data-Engineering** | AI 数据工程 | [网页版](https://jasonlijiaxiang.github.io/ai-knowledge-base/Web-version/data-engineering/) | [讲义](PPT-version/Data-Engineering/Data-Engineering-讲义.pptx) · [清单](PPT-version/Data-Engineering/MANIFEST.md) · [书单](PPT-version/Data-Engineering/电子书书单.md) |
  <!-- MODULES:END -->

## 📁 目录约定

| 目录 | 作用 |
| --- | --- |
| `PPT-version/` | **内容出处**，21 个模块整体在此（讲义 pptx + README + MANIFEST + 电子书书单 + raw-data 留痕） |
| `Web-version/` | 网页派生站点，由 `build.py` 从各模块 MANIFEST 生成，19/19 已建成 |
| `_prep/` | 库级取用产物（全库一页纸、学习路径、实战包） |
| `_reference/` | 库级参考材料（吸收清单与外部对照材料） |
| `_maintenance/` | 门禁脚本、巡检报告、设计文档 |
| `_skill-source/` | 知识库构建技能的源码与分发包 |

每个模块的 `MANIFEST.md` 是该模块的**唯一账本**——章节、会过期的事实（带核实日期与建议复查日）、
模块间串联关系都登记在这，网页版由它生成。`_prep/MANIFEST.md` 以「引用映射」挂靠各源模块。

## ✅ 门禁

内容对不对没法自动判，但**账对不对、链接通不通、契约破没破**可以。每次 push 与 PR
由 [GitHub Actions](.github/workflows/gates.yml) 无条件跑一遍，全部零第三方依赖（Python 标准库）：

| 门禁 | 看住什么 |
| --- | --- |
| `check_kb_layout` | 目录布局就位 |
| `check_html_links` | 门户页坏链（含"指向目录"这种 file:// 下点不进去的写法） |
| `check_page_ledger` | 页数账实：单册页数在四处的登记 + 全库总页数各处声明 |
| `check_ebook_ledger` | 书单账实 |
| `check_css_classes` | 样式契约：孤儿类与全站缓存版本戳 |
| `check_prep_coverage` | `_prep/` 三份取用文档与源模块同步 |
| `check_count_claims` | 「共 N 章」「N 道题」这类数目声明与实际相符 |
| `check_html_wellformed` | 正文标签配平（真 XML 解析器验，浏览器容错掩盖不了） |
| `audit_pptx` | 21 册讲义的排版契约（17 项检查，含画布越界与 XML 良构） |
| `build.py --check` | 网页产物与 MANIFEST 无漂移 |
| `check_skill_package` | 技能分发包结构合格（能装） |
| `check_skill_sync` | 库内 `.skill` 与技能源目录逐文件一致（防包悄悄过期） |

本地跑法见 [`_maintenance/维护手册.md`](_maintenance/维护手册.md)。

## 📚 书单口径：只列链接，不存文件

各模块《电子书书单.md》**只列正规渠道的官方链接，库内不存放电子书文件**（2026-07-20 起）。

早先库内有一份 302M 的本地馆藏，已撤除：那些是第三方版权材料，既不能随库分享、也不能进版本库，
还要随版本更新重下；而链接三样都行。撤除时 71 份资料的出处已全部回写进对应书单条目，
完整快照留在 [`_maintenance/2026-07-20-原电子书馆藏出处存档.md`](_maintenance/2026-07-20-原电子书馆藏出处存档.md)。

## 🚫 未纳入版本库的内容

**`PPT-version/*/raw-data/history/`（49M，约 170 份历史 pptx）**——讲义的历史快照留在作者本地，
不同步（见 [`.gitignore`](.gitignore)）：pptx 为二进制不可 diff，每次提交都会存整份副本，
**版本历史交由 git 本身承担**——要取回某一天的讲义，见
[`_maintenance/从-git-取回历史讲义.md`](_maintenance/从-git-取回历史讲义.md)。
各模块 `raw-data/` 下的建设笔记（markdown）**予以保留**，那是每册讲义的来龙去脉。

## 📄 许可

[MIT](LICENSE)。代码、技能、讲义内容一律适用。

讲义中引用的第三方事实、数字与图表均在页面上标注来源，其著作权归各自权利人所有，
不在本许可覆盖范围内；书单只列官方渠道链接，不含任何第三方文件。
