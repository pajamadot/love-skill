# Love Skill / 爱之技能

**AI-Powered Bilingual Relationship Counseling Skill**
**AI驱动的双语情侣关系咨询技能**

Helps couples identify, analyze, and resolve conflicts using 13 evidence-based psychological frameworks and 4 intervention protocols. Supports English and Chinese.

帮助情侣识别、分析和解决冲突，融合13个循证心理学框架和4个干预协议。支持英文和中文。

---

## Frameworks / 理论框架

### Core / 核心框架
| # | Framework / 框架 | Author / 作者 | Focus / 核心 |
|---|---|---|---|
| 1 | Attachment Theory / 依恋理论 | Bowlby & Ainsworth / 鲍尔比 & 安斯沃斯 | Pursue-withdraw dynamics / 追逐-退缩动态 |
| 2 | Gottman Method / 戈特曼方法 | John Gottman / 约翰·戈特曼 | Four Horsemen & repair / 四骑士与修复 |
| 3 | Psychoanalytic / 精神分析 | Freud, Jung / 弗洛伊德, 荣格 | Transference, projection, shadow / 移情、投射、阴影 |
| 4 | CBT for Couples / 认知行为疗法 | Beck / 贝克 | Cognitive distortions / 认知歪曲 |
| 5 | NVC / 非暴力沟通 | Rosenberg / 罗森伯格 | Observation/Feeling/Need/Request / 观察/感受/需要/请求 |
| 6 | Gender Psychology / 性别心理学 | Tannen / 坦宁 | Communication pattern bridges / 沟通模式桥接 |
| 7 | Metacognition / 元认知 | - | Double-loop learning, systems thinking / 双环学习、系统思维 |

### Deep / 深层框架
| # | Framework / 框架 | Author / 作者 | Focus / 核心 |
|---|---|---|---|
| 8 | EFT / 情绪聚焦疗法 | Sue Johnson / 苏·约翰逊 | Bonding events, A.R.E. / 联结事件 |
| 9 | DBT Skills / 辩证行为疗法 | Marsha Linehan / 莱恩汉 | Distress tolerance, TIPP / 痛苦承受 |
| 10 | Polyvagal Theory / 多迷走神经理论 | Stephen Porges / 波吉斯 | Nervous system states, co-regulation / 神经系统状态、共同调节 |
| 11 | IFS / 内在家庭系统 | Richard Schwartz / 施瓦茨 | Parts work, Self-energy / 部分工作、自我能量 |
| 12 | Imago Therapy / 意象关系疗法 | Harville Hendrix / 亨德里克斯 | Mirror/Validate/Empathize dialogue / 镜映/验证/共情对话 |
| 13 | Somatic Awareness / 躯体感知 | - | Body-based regulation / 基于身体的调节 |

### Protocols / 干预协议
| # | Protocol / 协议 | Description / 描述 |
|---|---|---|
| 1 | Conflict Resolution / 冲突解决 | 5-phase: Pause/Listen/Analyze/Bridge/Repair / 五阶段整合法 |
| 2 | Emotional Repair / 情感修复 | 7-step trust rebuilding / 七步信任重建 |
| 3 | Perspective Shift / 视角转换 | 6 exercises: Iceberg, Letter Exchange, Time Machine / 冰山图、书信交换、时间机器 |
| 4 | Advanced Metacognition / 高级元认知 | 6-layer reasoning, 7-lens protocol / 六层推理、七镜头协议 |

---

## Quick Start / 快速开始

```bash
# English / 英文
node index.js show                # Load full SKILL.md
node index.js frameworks          # Display all frameworks
node index.js protocols           # Display all protocols
node index.js analyze             # JSON output for agents

# Chinese / 中文
node index.js show --zh           # 加载完整 SKILL.md
node index.js frameworks --zh     # 显示所有框架
node index.js protocols --zh      # 显示所有协议
node index.js analyze --zh        # JSON输出供AI使用

# Environment variable / 环境变量
LOVE_SKILL_LANG=zh node index.js show
```

### For AI Agents / 给AI代理

Load `SKILL.md` (English) or `zh/SKILL.md` (Chinese) into your agent's context. It contains the complete methodology, dual-perspective analysis format, and all intervention protocols.

将 `SKILL.md`（英文）或 `zh/SKILL.md`（中文）加载到你的AI代理上下文中。它包含完整的方法论、双视角分析格式和所有干预协议。

---

## Project Structure / 项目结构

```
love-skill/
  SKILL.md                          # English skill definition / 英文技能定义
  zh/
    SKILL.md                        # Chinese skill definition / 中文技能定义
    frameworks/                     # Chinese frameworks / 中文框架
    protocols/                      # Chinese protocols / 中文协议
  index.js                          # Bilingual CLI / 双语命令行
  frameworks/                       # English frameworks (13 files) / 英文框架
    attachment-theory.md
    gottman-method.md
    psychoanalytic.md
    cbt-couples.md
    nvc.md
    gender-psychology.md
    metacognition.md
    eft-emotionally-focused.md
    dbt-skills.md
    polyvagal-theory.md
    ifs-internal-family-systems.md
    imago-therapy.md
    somatic-awareness.md
  protocols/                        # English protocols (4 files) / 英文协议
    conflict-resolution.md
    emotional-repair.md
    perspective-shift.md
    advanced-metacognition.md
  assets/gep/                       # EvoMap evolution assets / 进化资产
    genes.json                      # 12 Gene definitions / 基因定义
    capsules.json                   # Validated capsules / 已验证胶囊
    events.jsonl                    # Evolution audit trail / 进化审计轨迹
  evolver-engine/                   # EvoMap evolver (gitignored) / 进化引擎
```

---

## Evolution / 进化

This skill was evolved through 300+ GEP (Genome Evolution Protocol) cycles using [EvoMap](https://evomap.ai) and the [Evolver](https://github.com/autogame-17/evolver) engine.

本技能通过300多个GEP（基因组进化协议）周期进化而来，使用 [EvoMap](https://evomap.ai) 和 [Evolver](https://github.com/autogame-17/evolver) 引擎。

```bash
# Run continuous evolution / 运行持续进化
npm run evolve:innovate

# Review pending changes / 审查待处理的变更
npm run evolve:review

# Solidify approved changes / 固化已批准的变更
npm run evolve:solidify
```

### EvoMap Skill Store

Published as `skill_love_relationship_counseling` on [EvoMap](https://evomap.ai).

已发布为 `skill_love_relationship_counseling`，可在 [EvoMap](https://evomap.ai) 上获取。

```bash
# Download via evolver / 通过evolver下载
node evolver-engine/index.js fetch --skill=skill_love_relationship_counseling
```

---

## How It Works / 工作原理

When a couple presents an issue, the skill: / 当情侣提出问题时，技能会：

1. **Dual-Perspective Analysis / 双视角分析** - Maps each partner's stated position, underlying needs (NVC), attachment signals, cognitive patterns (CBT), defense mechanisms, and gender-informed lens / 映射每位伴侣的表面立场、底层需求、依恋信号、认知模式、防御机制和性别视角

2. **Systemic Pattern Detection / 系统模式检测** - Identifies Gottman Four Horsemen, attachment dance, circular dynamics, and psychoanalytic themes / 识别戈特曼四骑士、依恋之舞、循环动态和精神分析主题

3. **Multi-Framework Intervention / 多框架干预** - Selects the best-fit framework(s) using the meta-framework selection matrix / 使用元框架选择矩阵选择最佳匹配的框架

4. **Actionable Guidance / 可操作建议** - Provides specific, behavioral recommendations for each partner and the relationship / 为每位伴侣和关系提供具体的行为建议

5. **Metacognitive Reflection / 元认知反思** - Helps the couple see deeper patterns and develop self-resolution capacity / 帮助情侣看到更深层模式，发展自我解决能力

---

## License / 许可证

MIT
