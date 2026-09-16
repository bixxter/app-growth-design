#!/usr/bin/env node
// Installs the app-growth-design skill into a Claude Code skills directory.
// Zero dependencies, Node 18+. Copies files; it never writes outside the chosen target.
import { createInterface } from 'node:readline/promises'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import process from 'node:process'

const SKILL = 'app-growth-design'
const PKG_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SRC = path.join(PKG_ROOT, 'skill')

const tty = process.stdout.isTTY && !process.env.NO_COLOR
const c = (code, s) => (tty ? `\x1b[${code}m${s}\x1b[0m` : s)
const bold = s => c('1', s)
const dim = s => c('2', s)
const green = s => c('32', s)
const cyan = s => c('36', s)
const red = s => c('31', s)

const HELP = `
${bold('app-growth-design')} — install the skill into Claude Code

  ${cyan('npx app-growth-design')}            pick a target interactively
  ${cyan('npx app-growth-design --user')}     ~/.claude/skills/${SKILL}
  ${cyan('npx app-growth-design --project')}  ./.claude/skills/${SKILL}

Options
  --user, --global   install for every project on this machine (default)
  --project          install into the current project only
  --dir <path>       install into a specific skills directory
  --force            overwrite an existing install without asking
  --yes, -y          never prompt; take the defaults
  --uninstall        remove a previously installed copy
  -h, --help         this text
`

function parseArgs(argv) {
  const o = { target: null, dir: null, force: false, yes: false, uninstall: false, help: false }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--user' || a === '--global') o.target = 'user'
    else if (a === '--project' || a === '--local') o.target = 'project'
    else if (a === '--dir') { o.dir = argv[++i]; o.target = 'custom' }
    else if (a === '--force' || a === '-f') o.force = true
    else if (a === '--yes' || a === '-y') o.yes = true
    else if (a === '--uninstall' || a === '--remove') o.uninstall = true
    else if (a === '--help' || a === '-h') o.help = true
    else if (a.startsWith('-')) { console.error(red(`Unknown option: ${a}`)); process.exit(2) }
  }
  if (o.dir && !o.dir.trim()) { console.error(red('--dir needs a path')); process.exit(2) }
  return o
}

const exists = async p => !!(await fs.stat(p).catch(() => null))

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true })
  let files = 0
  for (const entry of await fs.readdir(src, { withFileTypes: true })) {
    if (entry.name === '.DS_Store') continue
    const from = path.join(src, entry.name)
    const to = path.join(dest, entry.name)
    if (entry.isDirectory()) files += await copyDir(from, to)
    else { await fs.copyFile(from, to); files++ }
  }
  return files
}

async function ask(question, fallback) {
  if (!process.stdin.isTTY) return fallback
  const rl = createInterface({ input: process.stdin, output: process.stdout })
  try { return (await rl.question(question)).trim() } finally { rl.close() }
}

async function resolveTarget(opts) {
  const userDir = path.join(os.homedir(), '.claude', 'skills')
  const projectDir = path.join(process.cwd(), '.claude', 'skills')
  if (opts.target === 'custom') return path.resolve(opts.dir)
  if (opts.target === 'user') return userDir
  if (opts.target === 'project') return projectDir
  if (opts.yes || !process.stdin.isTTY) return userDir

  console.log(`\n  Where should ${bold(SKILL)} go?\n`)
  console.log(`    ${bold('1')}  ${userDir}   ${dim('(all projects — default)')}`)
  console.log(`    ${bold('2')}  ${projectDir}   ${dim('(this project only)')}\n`)
  const answer = await ask('  1 or 2: ', '1')
  return answer === '2' ? projectDir : userDir
}

async function main() {
  const opts = parseArgs(process.argv.slice(2))
  if (opts.help) { console.log(HELP); return }

  if (!(await exists(SRC))) {
    console.error(red(`Cannot find the skill source at ${SRC}`))
    process.exit(1)
  }

  const skillsDir = await resolveTarget(opts)
  const dest = path.join(skillsDir, SKILL)

  if (opts.uninstall) {
    if (!(await exists(dest))) { console.log(dim(`\n  Nothing at ${dest}\n`)); return }
    await fs.rm(dest, { recursive: true, force: true })
    console.log(`\n  ${green('Removed')} ${dest}\n`)
    return
  }

  if (await exists(dest)) {
    if (!opts.force && !opts.yes) {
      const answer = await ask(`\n  ${dest} already exists. Overwrite? ${dim('[Y/n]')} `, 'y')
      if (answer && !/^y(es)?$/i.test(answer)) { console.log(dim('\n  Cancelled.\n')); return }
    }
    await fs.rm(dest, { recursive: true, force: true })
  }

  const files = await copyDir(SRC, dest)

  console.log(`
  ${green('Installed')} ${bold(SKILL)} ${dim(`(${files} files)`)}
  ${dim('→')} ${dest}

  ${bold('Use it')} — restart Claude Code, then just describe the problem:

    ${cyan('"audit my onboarding flow"')}
    ${cyan('"my paywall converts at 2%, what should I test first?"')}
    ${cyan('"design a streak that does not backfire"')}

  The skill loads itself when the topic matches. To force it: ${cyan(`/${SKILL}`)}
  ${dim(`Uninstall: npx ${SKILL} --uninstall`)}
`)
}

main().catch(err => {
  console.error(red(`\n  Install failed: ${err.message}\n`))
  process.exit(1)
})
