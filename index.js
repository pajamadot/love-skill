#!/usr/bin/env node
/**
 * Love Skill - Entry point
 * Delegates to evolver-engine for evolution cycles.
 * Standalone usage: loads SKILL.md and frameworks for AI agent consumption.
 */
const fs = require('fs');
const path = require('path');

try { require('dotenv').config({ path: path.join(__dirname, '.env') }); } catch (e) { /* dotenv optional */ }

const args = process.argv.slice(2);
const command = args[0];

function loadSkill() {
  const skillPath = path.join(__dirname, 'SKILL.md');
  if (!fs.existsSync(skillPath)) {
    console.error('[love-skill] SKILL.md not found.');
    process.exit(1);
  }
  return fs.readFileSync(skillPath, 'utf8');
}

function loadFrameworks() {
  const frameworkDir = path.join(__dirname, 'frameworks');
  if (!fs.existsSync(frameworkDir)) return {};
  const frameworks = {};
  const files = fs.readdirSync(frameworkDir).filter(f => f.endsWith('.md'));
  for (const file of files) {
    const name = path.basename(file, '.md');
    frameworks[name] = fs.readFileSync(path.join(frameworkDir, file), 'utf8');
  }
  return frameworks;
}

function loadProtocols() {
  const protocolDir = path.join(__dirname, 'protocols');
  if (!fs.existsSync(protocolDir)) return {};
  const protocols = {};
  const files = fs.readdirSync(protocolDir).filter(f => f.endsWith('.md'));
  for (const file of files) {
    const name = path.basename(file, '.md');
    protocols[name] = fs.readFileSync(path.join(protocolDir, file), 'utf8');
  }
  return protocols;
}

if (command === 'show' || command === 'load') {
  const skill = loadSkill();
  console.log(skill);
} else if (command === 'frameworks') {
  const fw = loadFrameworks();
  for (const [name, content] of Object.entries(fw)) {
    console.log(`\n${'='.repeat(60)}\n${name}\n${'='.repeat(60)}`);
    console.log(content);
  }
} else if (command === 'protocols') {
  const pr = loadProtocols();
  for (const [name, content] of Object.entries(pr)) {
    console.log(`\n${'='.repeat(60)}\n${name}\n${'='.repeat(60)}`);
    console.log(content);
  }
} else if (command === 'analyze') {
  // Output structured JSON for agent consumption
  const skill = loadSkill();
  const frameworks = loadFrameworks();
  const protocols = loadProtocols();
  console.log(JSON.stringify({
    skill_name: 'love-skill',
    version: '1.0.0',
    skill_content: skill,
    frameworks: Object.keys(frameworks),
    protocols: Object.keys(protocols),
    available_commands: ['show', 'frameworks', 'protocols', 'analyze', 'evolve'],
  }, null, 2));
} else if (command === 'evolve') {
  // Delegate to evolver-engine
  const evolverPath = path.join(__dirname, 'evolver-engine', 'index.js');
  if (!fs.existsSync(evolverPath)) {
    console.error('[love-skill] evolver-engine not found. Run: git submodule update --init');
    process.exit(1);
  }
  const evolverArgs = ['--loop', ...args.slice(1)];
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

Usage:
  node index.js show          Load and display the full SKILL.md
  node index.js frameworks    Display all psychological frameworks
  node index.js protocols     Display all intervention protocols
  node index.js analyze       Output structured JSON for agent consumption
  node index.js evolve        Start evolver in --loop mode with innovate strategy

Evolution:
  npm run evolve              Run evolver in continuous loop mode
  npm run evolve:innovate     Run with EVOLVE_STRATEGY=innovate
  npm run evolve:review       Review pending evolution changes
  npm run evolve:solidify     Solidify approved changes
`);
}
