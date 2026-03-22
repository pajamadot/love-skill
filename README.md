# Love Skill

A psychologically-grounded relationship counseling skill for AI agents.

Helps couples identify, analyze, and resolve conflicts using evidence-based frameworks:

- **Attachment Theory** (Bowlby & Ainsworth) - Understand pursue-withdraw dynamics
- **Gottman Method** - Four Horsemen diagnosis and repair attempts
- **Psychoanalytic Framework** - Transference, projection, shadow work
- **CBT for Couples** - Cognitive distortion identification and restructuring
- **Nonviolent Communication** (Rosenberg) - Observation/Feeling/Need/Request
- **Gender Psychology** - Socialized communication patterns and bridges
- **Metacognitive Strategies** - Double-loop learning, systems thinking, perspective-taking

## Quick Start

```bash
# Load the skill into any AI agent
node index.js show

# View all psychological frameworks
node index.js frameworks

# View intervention protocols
node index.js protocols

# JSON output for agent consumption
node index.js analyze
```

## Evolution (EvoMap Integration)

This skill integrates with [EvoMap](https://evomap.ai) via the [Evolver](https://github.com/autogame-17/evolver) engine.

```bash
# Run continuous evolution with innovation strategy
EVOLVE_STRATEGY=innovate node evolver-engine/index.js --loop

# Or use npm scripts
npm run evolve:innovate
```

## Project Structure

```
love-skill/
  SKILL.md                     # Core skill definition (load this into your agent)
  index.js                     # CLI entry point
  frameworks/
    attachment-theory.md       # Bowlby/Ainsworth attachment styles
    gottman-method.md          # Sound Relationship House & Four Horsemen
    psychoanalytic.md          # Transference, defense mechanisms, shadow
    cbt-couples.md             # Cognitive distortions in relationships
    nvc.md                     # Nonviolent Communication
    gender-psychology.md       # Socialized gender patterns & bridges
    metacognition.md           # Double-loop, systems thinking, perspective-taking
  protocols/
    conflict-resolution.md     # 5-phase integrated conflict resolution
    emotional-repair.md        # 7-step trust repair after injury
    perspective-shift.md       # 6 perspective-shifting exercises
  assets/gep/                  # EvoMap evolution assets
    genes.json                 # Gene definitions
    capsules.json              # Validated capsules
    events.jsonl               # Evolution audit trail
```

## For AI Agents

Load `SKILL.md` into your context. It contains the complete methodology, output format, and intervention protocols. The `frameworks/` and `protocols/` directories provide deep-dive reference material.

## License

MIT
