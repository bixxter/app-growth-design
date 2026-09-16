export const meta = {
  name: 'timgabe-skill',
  description: 'Synthesize 30 knowledge notes into 6 topic playbooks + a Claude Code skill entry point',
  phases: [
    { title: 'Playbooks', detail: 'six topic reference files, one agent each' },
    { title: 'Skill', detail: 'SKILL.md router over the playbooks' },
  ],
}

// Corpus path is passed in at launch — Workflow scripts have no fs/env access:
//   Workflow({ scriptPath: '<repo>/pipeline/5-synthesize.workflow.js', args: { corpus: '/abs/path/to/corpus' } })
const BASE = (typeof args === 'object' && args && args.corpus) || '/ABSOLUTE/PATH/TO/corpus'

const TRACKS = [
  { key: 'behavioral-psychology', title: 'Behavioral Psychology & Addictive Design',
    scope: 'habit formation, hooks, dopamine, variable rewards, streaks, loss aversion, identity, social proof — the "why humans do this" layer' },
  { key: 'onboarding-activation', title: 'Onboarding & Activation',
    scope: 'first-run experience, time-to-value, short vs. long onboarding trade-offs, permission requests, aha moments, personalization quizzes, activation' },
  { key: 'monetization-paywalls', title: 'Monetization, Paywalls & Pricing',
    scope: 'paywall design and copy, pricing psychology, trials, conversion, willingness to pay, subscription strategy' },
  { key: 'retention-gamification', title: 'Retention & Gamification',
    scope: 'streaks, leaderboards, progress mechanics, notifications, what gamification works vs. backfires, churn, stakes and loss framing' },
  { key: 'growth-marketing', title: 'Growth, Marketing & Positioning',
    scope: 'distribution, growth loops, positioning against incumbents, indie vs. giants, landing-page and website conversion, SaaS strategy' },
  { key: 'design-craft', title: 'Design Craft & UI/UX Principles',
    scope: 'visual and interaction craft, UI patterns, levels of design maturity and common mistakes, invisible design, the design formula, tooling' },
]

phase('Playbooks')

const tracks = await parallel(TRACKS.map(t => () =>
  agent(
    `Write ONE reference file for a Claude Code skill built from 30 knowledge notes about app design, growth and marketing (distilled from Tim Gabe's YouTube channel).

YOUR TRACK: **${t.title}** — ${t.scope}

SOURCES: ${BASE}/notes/01.md .. 30.md. Each has YAML frontmatter with \`topics:\` and \`apps_cited:\`. Start by grepping frontmatter to find your relevant notes, then read those in full. Relevant material is scattered — skim broadly, don't rely on titles alone.

WRITE TO: ${BASE}/skill/references/${t.key}.md

Structure:

# ${t.title}

## Core principles
The durable ideas, each stated as a usable rule, with the supporting evidence/examples underneath.

## Playbooks
Concrete step-by-step procedures an agent can execute or advise on.

## Case bank
Named products, the specific mechanic, why it works, the numbers. One compact entry each. This is the highest-value section — an agent citing "Granola's two-screen onboarding" or "Cal AI's 20-step quiz, \\$35M first-year revenue" is far more persuasive than generic advice.

## Anti-patterns
What backfires, and why.

## Decision guide
IF/THEN form. e.g. "IF your product depends on heavy personalization THEN a long onboarding is justified — it earns the personalized first run AND filters for high-intent buyers."

## Sources
\`[NN] Title — url\` for every note you drew from.

RULES:
- Every non-obvious claim carries a source marker \`[NN]\`.
- Preserve specific numbers and product names — they are the value.
- Synthesize across videos: merge repeated ideas into one strong statement rather than repeating them.
- Note contradictions between videos explicitly where you find them.
- Do not invent material absent from the notes; do not pad with generic advice.
- The notes flag promo segments for his agency (Zipsa) under Open Questions — exclude that material.
Return a one-paragraph summary: what you wrote, how many notes you drew from.`,
    { label: `track:${t.key}`, phase: 'Playbooks' }
  )
))

log(`Playbooks written: ${tracks.filter(Boolean).length}/6`)

phase('Skill')

const skill = await agent(
  `Write the entry point for a Claude Code skill built from 30 knowledge notes on app design, growth and marketing.

WRITE TO: ${BASE}/skill/SKILL.md

First read the 6 playbooks in ${BASE}/skill/references/ and grep the frontmatter of ${BASE}/notes/*.md for coverage (title + index + topics).

Format — YAML frontmatter, then body:
---
name: app-growth-design
description: <one sentence, third person, stating WHEN to use this skill. Must name concrete trigger situations: designing app onboarding, paywalls, retention/gamification mechanics, pricing, or planning app growth and positioning. This string is what the model matches against — make it concrete and keyword-rich.>
---

# App Growth & Design Playbook

Body must contain:
- **What this is** — a knowledge base distilled from the 30 most recent videos on Tim Gabe's channel (https://www.youtube.com/@TimGabe), covering app psychology, onboarding, paywalls, retention, growth and design craft. State plainly that it is one practitioner's opinionated view, not settled fact, and that notes flag his agency promos so they can be discounted.
- **How to use** — a real markdown table routing a user's situation to the right reference file.
- **Highest-leverage rules** — the 10-15 rules across the whole corpus that would actually change a founder's decision, each with a source marker \`[NN]\`.
- **Case index** — compact table of named products in the corpus and what each exemplifies, so an agent can find a citation fast.
- **Reference files** — all 6, one line each on what's inside.
- **Source index** — all 30 as \`[NN] Title — https://www.youtube.com/watch?v=<id>\`. Link the video, not the local note: the skill ships without the notes, so \`[NN]\` must resolve to something a reader can actually open.

Keep SKILL.md under ~200 lines — it is a router; depth lives in references/. Return a summary of what you wrote.`,
  { label: 'skill:SKILL.md', phase: 'Skill' }
)

return { tracks: tracks.filter(Boolean).length, skill: typeof skill === 'string' ? skill.slice(0, 300) : skill }
