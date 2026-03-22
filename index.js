#!/usr/bin/env node
/**
 * Love Skill - Bilingual AI Relationship Counseling Framework
 * Supports English (en) and Chinese (zh) markets.
 * Delegates to evolver-engine for evolution cycles.
 */
const fs = require('fs');
const path = require('path');

try { require('dotenv').config({ path: path.join(__dirname, '.env') }); } catch (e) { /* dotenv optional */ }

const args = process.argv.slice(2);
const command = args[0];

// Language detection: --lang=zh, --zh, or LOVE_SKILL_LANG env var
const langFlag = args.find(a => a.startsWith('--lang='));
const lang = langFlag ? langFlag.split('=')[1]
  : args.includes('--zh') ? 'zh'
  : args.includes('--en') ? 'en'
  : process.env.LOVE_SKILL_LANG || 'en';

function contentDir() {
  if (lang === 'zh') return path.join(__dirname, 'zh');
  return __dirname;
}

function loadSkill() {
  const skillPath = path.join(contentDir(), 'SKILL.md');
  if (!fs.existsSync(skillPath)) {
    console.error(`[love-skill] SKILL.md not found for lang=${lang}.`);
    process.exit(1);
  }
  return fs.readFileSync(skillPath, 'utf8');
}

function loadDir(dirName) {
  const dir = path.join(contentDir(), dirName);
  if (!fs.existsSync(dir)) return {};
  const result = {};
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  for (const file of files) {
    result[path.basename(file, '.md')] = fs.readFileSync(path.join(dir, file), 'utf8');
  }
  return result;
}

function loadFrameworks() { return loadDir('frameworks'); }
function loadProtocols() { return loadDir('protocols'); }

if (command === 'show' || command === 'load') {
  console.log(loadSkill());
} else if (command === 'frameworks') {
  for (const [name, content] of Object.entries(loadFrameworks())) {
    console.log(`\n${'='.repeat(60)}\n${name}\n${'='.repeat(60)}`);
    console.log(content);
  }
} else if (command === 'protocols') {
  for (const [name, content] of Object.entries(loadProtocols())) {
    console.log(`\n${'='.repeat(60)}\n${name}\n${'='.repeat(60)}`);
    console.log(content);
  }
} else if (command === 'analyze') {
  const frameworks = loadFrameworks();
  const protocols = loadProtocols();
  console.log(JSON.stringify({
    skill_name: 'love-skill',
    version: '2.0.0',
    language: lang,
    languages_available: ['en', 'zh'],
    skill_content: loadSkill(),
    frameworks: Object.keys(frameworks),
    protocols: Object.keys(protocols),
    available_commands: ['show', 'frameworks', 'protocols', 'analyze', 'evolve'],
  }, null, 2));
} else if (command === 'evolve') {
  const evolverPath = path.join(__dirname, 'evolver-engine', 'index.js');
  if (!fs.existsSync(evolverPath)) {
    console.error('[love-skill] evolver-engine not found. Run: git submodule update --init');
    process.exit(1);
  }
  const evolverArgs = ['--loop', ...args.slice(1).filter(a => !a.startsWith('--lang') && a !== '--zh' && a !== '--en')];
  const { spawn } = require('child_process');
  const env = Object.assign({}, process.env, {
    EVOLVE_STRATEGY: process.env.EVOLVE_STRATEGY || 'innovate',
  });
  const child = spawn(process.execPath, [evolverPath, ...evolverArgs], {
    stdio: 'inherit',
    env,
    cwd: __dirname,
  });
  child.on('exit', code => process.exit(code || 0));
} else {
  console.log(`Love Skill - AI-Powered Relationship Counseling Framework
  Bilingual: English + Chinese / 双语支持：英文 + 中文

Usage / 用法:
  node index.js show              Load SKILL.md (English)
  node index.js show --zh         加载 SKILL.md（中文）
  node index.js frameworks        Display all frameworks (EN)
  node index.js frameworks --zh   显示所有框架（中文）
  node index.js protocols         Display all protocols (EN)
  node index.js protocols --zh    显示所有协议（中文）
  node index.js analyze           JSON output for agents (EN)
  node index.js analyze --zh      JSON输出（中文）
  node index.js evolve            Start evolver --loop

Language flags / 语言选项:
  --en                            English (default)
  --zh                            中文
  --lang=zh                       中文
  LOVE_SKILL_LANG=zh              Environment variable / 环境变量

Evolution / 进化:
  npm run evolve                  Run evolver in continuous loop
  npm run evolve:innovate         Run with EVOLVE_STRATEGY=innovate
`);
}
