export const meta = {
  name: 'timgabe-corpus',
  description: 'Turn 30 Tim Gabe videos into agent-ready knowledge notes enriched with on-screen visual context',
  phases: [
    { title: 'Enrich', detail: 'one agent per video: extract key frames, read them, write structured note' },
    { title: 'Verify', detail: 'check each note for missing visual context and unresolved references' },
    { title: 'Synthesize', detail: 'build topic reference files + SKILL.md from all 30 notes' },
  ],
}

// Corpus path is passed in at launch — Workflow scripts have no fs/env access:
//   Workflow({ scriptPath: '<repo>/pipeline/4-enrich.workflow.js', args: { corpus: '/abs/path/to/corpus' } })
const BASE = (typeof args === 'object' && args && args.corpus) || '/ABSOLUTE/PATH/TO/corpus'

const VIDEOS = [
  ['01', 'nQKWYmrixCU', 'The Twisted Psychology Behind Top 1% Apps'],
  ['02', 'HA4yB_sd62Q', 'The Weird Design Playbook of 6 App Outliers'],
  ['03', 'BxhsCu9hNpY', 'Why Leaderboards Kill App Retention (How To Fix It)'],
  ['04', 'MAvKHToGiVY', 'How Top 1% Indie Apps Beats Giants'],
  ['05', 'Aa89MC8jX2c', 'How To Solve The App Onboarding Paradox'],
  ['06', 'sYRhXB_ZcLI', 'I Studied 10,000 Paywall Screens (THIS Makes People Pay)'],
  ['07', 'LXX_qOA5D8E', "I Studied 500+ Gamified Apps (Here's What Actually Works)"],
  ['08', '7dCZrtH15zc', 'How a Chinese Unicorn App Out-Addicts Netflix'],
  ['09', 'yBpv5rZoBjA', 'How To Scientifically Design Addictive Apps'],
  ['10', 'uoLpH_20qKw', 'The 3-Stage Trick Behind Every Addictive App'],
  ['11', 'ZXWUg1e1PAs', 'Why Most SaaS Companies Will Die in 2026'],
  ['12', 'wmTkiF23GRQ', 'Our World Class App Design Formula'],
  ['13', 'yYs7iv81Ppk', 'The New Way Apps Dominate in 2026'],
  ['14', 'AnL49w4yIOw', 'How Addictive Apps Are Made'],
  ['15', 'v1f9iYZ2GhQ', "Give Me 13 Minutes & I'll Grow Your App"],
  ['16', 'hIm3d3JAsPw', 'How Netflix Made Us All Binge (Design Breakdown)'],
  ['17', 'Tpg0pxKHrCA', 'Viral Design Tricks from Spotify (Founder Playbook)'],
  ['18', 'doiaMtD80p8', "What Founders Can Learn From Apple's Design Domination"],
  ['19', '11h4H3TAGkM', 'The Tiny Design Rule Behind Top 1% Apps'],
  ['20', 'zRUoPIwCxfw', 'The Future of App Design is Invisible'],
  ['21', '4yKtlOWClhA', "How Tinder's Design Hacked Society"],
  ['22', '55hDj88zKa8', 'The Hidden App Growth Killer (How To Avoid It)'],
  ['23', 'puldme__Ckk', "Copy These SaaS Growth Tricks (It'll Blow Up Your Business)"],
  ['24', 'D9SXaj6qQIQ', 'How Top 1% Apps Keep You Hooked'],
  ['25', 'bOm9GDv96Tk', 'Do Companies Really Need Designers Anymore?'],
  ['26', 'Du2lkZ_cux8', 'The Secret Behind Weirdly Addictive Apps'],
  ['27', 'TIfiy1fodDs', "Give Me 10 Minutes & I'll Boost Your Website Conversions"],
  ['28', 'eWGNjTLK84c', 'How Raycast Reached a $100M+ Valuation (As a Small Startup)'],
  ['29', 'qmJVN2158Mk', '5 Tools I Wish I Found Sooner (For Designers)'],
  ['30', '86PGRyQjdzQ', '4 levels of UI/UX design (and BIG mistakes to avoid)'],
]

const NOTE_SCHEMA = {
  type: 'object',
  properties: {
    num: { type: 'string' },
    written: { type: 'boolean' },
    frames_extracted: { type: 'integer' },
    frames_read: { type: 'integer' },
    topics: { type: 'array', items: { type: 'string' } },
    apps_cited: { type: 'array', items: { type: 'string' } },
    frameworks: { type: 'array', items: { type: 'string' } },
    visual_gaps_resolved: { type: 'integer' },
    notes: { type: 'string' },
  },
  required: ['num', 'written', 'frames_extracted', 'frames_read', 'topics', 'apps_cited'],
}

const enrichPrompt = (num, vid, title) => `You are building an agent-ready knowledge note from one YouTube video by Tim Gabe (a product-design/app-growth YouTuber). This is a research/notes corpus for the user's own AI agents — so the note must be DENSE STRUCTURED KNOWLEDGE, not a verbatim transcript reproduction. Extract the ideas, frameworks, examples, numbers and on-screen visuals; do not copy long verbatim passages of his narration. Short quoted phrases (a sentence at most, for a memorable rule) are fine and should be marked with quotes.

VIDEO ${num}: "${title}"
- Working transcript (auto-captions, timestamped): ${BASE}/working/${num}.txt
- Video file (480p, for frames):                   ${BASE}/video/${num}.mp4
- Frames output dir:                               ${BASE}/frames/${num}/
- WRITE YOUR NOTE TO:                              ${BASE}/notes/${num}.md
- Source URL: https://www.youtube.com/watch?v=${vid}

STEP 1 — Read the transcript in full: Read ${BASE}/working/${num}.txt

STEP 2 — Find the VISUAL GAPS. This is the most valuable part of your job. He is a designer; much of his meaning lives on screen and the captions lose it. Hunt for moments where the text alone is incomplete:
  - deictic references: "this screen", "look at this", "notice how", "right here", "like that", "as you can see", "this example"
  - named app/product walkthroughs where he is clearly showing a UI (Duolingo, Granola, Cal AI, Netflix, Spotify, Tinder, Raycast, etc.)
  - diagrams, frameworks, charts, before/after comparisons, side-by-side layouts
  - any list/model he presents where the on-screen text is the actual content
Pick 8-14 timestamps that carry the most non-verbal information.

STEP 3 — Extract those frames. Use ffmpeg, one call per timestamp (fast seek):
  mkdir -p ${BASE}/frames/${num}
  ffmpeg -ss <SECONDS> -i ${BASE}/video/${num}.mp4 -frames:v 1 -q:v 3 -y ${BASE}/frames/${num}/<MMSS>.jpg -loglevel error
Convert [HH:MM:SS] from the transcript into seconds. Name files by timestamp, e.g. 0231.jpg for 02:31.
If ${BASE}/video/${num}.mp4 does not exist, skip to STEP 5 and set frames_extracted: 0 — still write the note.
TIP: captions lag what's on screen by a beat; prefer a timestamp 2-4s AFTER he starts describing something.

STEP 4 — Read the frames you extracted (use the Read tool on each .jpg — it renders images). Look at what is ACTUALLY on screen: UI layouts, app names, on-screen text, numbers, chart shapes, before/after. If a frame is a talking-head shot or a transition with no information, extract a replacement a few seconds later. Aim for at least 8 informative frames.

STEP 5 — Write ${BASE}/notes/${num}.md in EXACTLY this structure:

---
title: "${title.replace(/"/g, "'")}"
source: Tim Gabe (YouTube)
url: https://www.youtube.com/watch?v=${vid}
video_id: ${vid}
index: ${num}
topics: [pick 2-5 from: onboarding, paywalls, monetization, pricing, retention, gamification, behavioral-psychology, growth, marketing, positioning, design-craft, ui-patterns, ux-principles, case-study, ai-products, saas, tools, career]
apps_cited: [list every named product]
---

# ${title}

## Thesis
Two or three sentences: the central argument of the video, stated so an agent could act on it.

## Key Frameworks
For each model/framework/step-system he presents:
### <Framework name> \`[MM:SS]\`
Explain it in your own words. If it has steps or stages, list them. If it appeared on screen as a diagram, describe the diagram's structure.

## Case Studies
For each real product he dissects:
### <App name> \`[MM:SS]\`
- **What they do:** the specific design/growth mechanic
- **Why it works:** the underlying principle
- **On screen:** what the UI actually looked like (FROM YOUR FRAMES — be concrete: layout, copy, colors, button placement, what's emphasized)
- **Numbers:** any figures he cites

## Actionable Rules
Bulleted, imperative, each with \`[MM:SS]\`. These are the things a founder/designer would actually DO. Be specific — "make the paywall show X before Y" not "improve your paywall".

## Anti-patterns
What he explicitly says NOT to do, and why it backfires.

## Numbers & Claims
| Claim | Figure | \`[MM:SS]\` |
Every statistic, valuation, revenue figure, percentage, study size.

## Visual Notes
For each informative frame:
### \`[MM:SS]\` — <short label>
What is on screen and why it matters. This section exists because the captions cannot capture it. Reference the frame file: \`frames/${num}/<MMSS>.jpg\`

## Open Questions
Anything ambiguous, unsupported, or where he asserts without evidence. Also note if any claim seems dubious or is a sales pitch for his agency (Zipsa) — flag promotional segments so downstream agents can discount them.

## Timestamp Map
- \`[MM:SS]\` — section label (one line per major beat, 8-15 lines)

QUALITY BAR: a downstream agent that reads ONLY your note, never the video, should be able to apply his advice correctly and cite specific examples with numbers. Be concrete and specific. Preserve every named app, every number, every framework. Do NOT pad with generic product-design wisdom he didn't say. Do NOT reproduce his narration verbatim at length — synthesize.

Return the structured summary of what you did.`

phase('Enrich')

const results = await pipeline(
  VIDEOS,
  ([num, vid, title]) =>
    agent(enrichPrompt(num, vid, title), {
      label: `note:${num}`,
      phase: 'Enrich',
      schema: NOTE_SCHEMA,
    }),
  (note, [num, vid, title]) =>
    agent(
      `Quality-check the knowledge note at ${BASE}/notes/${num}.md against its source transcript ${BASE}/working/${num}.txt.

Check for these specific defects and FIX them by editing the note directly:
1. UNRESOLVED VISUAL REFERENCES — the note still says things like "this screen" / "the example shown" without describing what was actually there. If found, extract the frame yourself:
   ffmpeg -ss <SEC> -i ${BASE}/video/${num}.mp4 -frames:v 1 -q:v 3 -y ${BASE}/frames/${num}/<MMSS>.jpg -loglevel error
   then Read it and write the real description in.
2. MISSING CONTENT — a framework, named app, or number present in the transcript but absent from the note. Add it.
3. VERBATIM BLOAT — long passages copied word-for-word from the narration. Condense into synthesized knowledge.
4. VAGUE RULES — "improve onboarding" style filler. Replace with the specific thing he actually said, or delete.
5. STRUCTURE — all required sections present with correct frontmatter.

Verify at least 3 frames exist in ${BASE}/frames/${num}/ and that the Visual Notes section describes real on-screen content, not guesses.

Report what you fixed.`,
      { label: `verify:${num}`, phase: 'Verify', schema: {
        type: 'object',
        properties: {
          num: { type: 'string' },
          defects_found: { type: 'array', items: { type: 'string' } },
          fixes_applied: { type: 'array', items: { type: 'string' } },
          frames_present: { type: 'integer' },
          final_quality: { type: 'string', enum: ['good', 'acceptable', 'poor'] },
        },
        required: ['num', 'defects_found', 'fixes_applied', 'frames_present', 'final_quality'],
      } }
    )
)

const ok = results.filter(Boolean)
log(`Enriched + verified ${ok.length}/30 notes`)

phase('Synthesize')

const TRACKS = [
  { key: 'behavioral-psychology', title: 'Behavioral Psychology & Addictive Design',
    scope: 'the psychology of habit formation, hooks, dopamine, variable rewards, streaks, identity, social proof — the "why humans do this" layer' },
  { key: 'onboarding-activation', title: 'Onboarding & Activation',
    scope: 'first-run experience, time-to-value, onboarding length trade-offs, permission requests, aha moments, activation metrics' },
  { key: 'monetization-paywalls', title: 'Monetization, Paywalls & Pricing',
    scope: 'paywall design, pricing psychology, trial mechanics, conversion, willingness to pay, subscription strategy' },
  { key: 'retention-gamification', title: 'Retention & Gamification',
    scope: 'streaks, leaderboards, progress mechanics, notifications, what gamification works vs. backfires, churn' },
  { key: 'growth-marketing', title: 'Growth, Marketing & Positioning',
    scope: 'distribution, growth loops, positioning against incumbents, indie vs. giants, website/landing conversion, SaaS strategy' },
  { key: 'design-craft', title: 'Design Craft & UI/UX Principles',
    scope: 'concrete visual/interaction craft, UI patterns, design levels and common mistakes, invisible design, design systems, the design formula' },
]

const tracks = await parallel(TRACKS.map(t => () =>
  agent(
    `You are writing ONE reference file for a Claude Code skill built from 30 Tim Gabe videos about app design, growth and marketing.

YOUR TRACK: **${t.title}** — ${t.scope}

SOURCE: all note files in ${BASE}/notes/*.md (30 files, 01.md..30.md). Read the ones relevant to your track — check frontmatter \`topics:\` and titles to decide, but skim broadly; relevant material is scattered.

WRITE TO: ${BASE}/skill/references/${t.key}.md

Structure:
# ${t.title}

## Core principles
The durable ideas, each stated as a usable rule. Under each, the evidence/examples that support it.

## Playbooks
Concrete step-by-step procedures an agent can execute or advise on.

## Case bank
Named products with the specific mechanic, why it works, and the numbers. One compact entry each. This is the most valuable section — an agent citing "Granola's 2-screen onboarding" or "Cal AI's 20-step quiz, $35M first-year revenue" is far more persuasive than generic advice.

## Anti-patterns
What backfires and why.

## Decision guide
When to apply what. Use if/then form — e.g. "IF your product needs heavy personalization THEN a long onboarding is justified because it earns the personalized first run AND filters for buyers."

## Sources
Which videos this draws from: \`[NN] Title — url\`

RULES:
- Every non-obvious claim carries a source marker \`[NN]\` pointing at the note index.
- Preserve all specific numbers and product names — they are the value.
- Synthesize across videos; merge repeated ideas into one strong statement rather than repeating.
- Note contradictions between videos explicitly if you find them.
- Do not invent material that isn't in the notes. Do not pad with generic advice.
- Flag anything that was a promo for his agency rather than substance.
Return a one-paragraph summary of what you wrote and how many notes you drew from.`,
    { label: `track:${t.key}`, phase: 'Synthesize' }
  )
))

const skill = await agent(
  `Write the entry point for a Claude Code skill built from 30 Tim Gabe videos on app design, growth and marketing.

WRITE TO: ${BASE}/skill/SKILL.md

First read ${BASE}/skill/references/ (6 track files) and skim ${BASE}/notes/ frontmatter for coverage.

Format — YAML frontmatter then body:
---
name: app-growth-design
description: <one sentence, third person, describing WHEN to use this skill — must include trigger situations like designing an app onboarding, paywall, retention mechanic, or planning app growth/positioning. This is what the model matches against, so make it concrete and keyword-rich.>
---

# App Growth & Design Playbook

Body must include:
- **What this is**: a knowledge base distilled from 30 Tim Gabe videos (link the channel: https://www.youtube.com/@TimGabe), covering app psychology, onboarding, paywalls, retention, growth and design craft. Note it is one practitioner's opinionated view, not universal law.
- **How to use**: routing table mapping a user's situation to the right reference file. Make it a real table.
- **The 10-15 highest-leverage rules** across the whole corpus, each with a source marker \`[NN]\`. These should be the things that would change a founder's decision.
- **Case index**: a compact table of the named products in the corpus and what each is an example of, so an agent can find a citation fast.
- **Reference files**: list all 6 with one line each on what's inside.
- **Source index**: all 30 as \`[NN] Title — https://www.youtube.com/watch?v=<id>\`. Link the video, not the local note — the skill ships without the notes, so \`[NN]\` must resolve to something a reader can actually open.

Keep SKILL.md under ~200 lines — it is a router, the depth lives in references/. Return a summary.`,
  { label: 'skill:SKILL.md', phase: 'Synthesize' }
)

return {
  notes: ok.length,
  poor: ok.filter(r => r.final_quality === 'poor').map(r => r.num),
  tracks: tracks.filter(Boolean).length,
  skill: typeof skill === 'string' ? skill.slice(0, 400) : skill,
}
