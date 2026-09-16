export const meta = {
  name: 'timgabe-recover',
  description: 'Write the 19 missing knowledge notes from pre-extracted frames (lean, no ffmpeg loops)',
  phases: [{ title: 'Notes', detail: 'one lean agent per missing video' }],
}

// Corpus path is passed in at launch — Workflow scripts have no fs/env access:
//   Workflow({ scriptPath: '<repo>/pipeline/recover.workflow.js', args: { corpus: '/abs/path/to/corpus' } })
const BASE = (typeof args === 'object' && args && args.corpus) || '/ABSOLUTE/PATH/TO/corpus'

const MISSING = [
  ['09', 'yBpv5rZoBjA', 'How To Scientifically Design Addictive Apps'],
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

const SCHEMA = {
  type: 'object',
  properties: {
    num: { type: 'string' },
    written: { type: 'boolean' },
    frames_read: { type: 'integer' },
    apps_cited: { type: 'array', items: { type: 'string' } },
    words: { type: 'integer' },
  },
  required: ['num', 'written', 'frames_read'],
}

const prompt = (num, vid, title) => `Write ONE agent-ready knowledge note from a YouTube video by Tim Gabe (product design / app growth). This is a research-notes corpus: capture the IDEAS, frameworks, named examples, numbers and on-screen visuals in YOUR OWN WORDS. Do not reproduce his narration verbatim at length — synthesize. Short quoted phrases (one sentence max, for a memorable rule) are fine in quotes.

VIDEO ${num}: "${title}"
- Transcript:  ${BASE}/working/${num}.txt
- Frames dir:  ${BASE}/frames/${num}/   (ALREADY EXTRACTED — filenames are MMSS, e.g. 0231.jpg = 02:31)
- WRITE TO:    ${BASE}/notes/${num}.md
- Source: https://www.youtube.com/watch?v=${vid}

CRITICAL EFFICIENCY RULES — a previous run of this task died by over-working. Obey exactly:
1. Read the transcript ONCE.
2. \`ls ${BASE}/frames/${num}/\` to see available frames. If there are more than 12, choose 12 spread evenly across the timeline (prefer ones whose timestamps land where the transcript discusses a product, UI, framework or diagram). If 12 or fewer, use them all.
3. Read those frames — ONCE each. Do NOT re-extract, do NOT delete, do NOT run ffmpeg, do NOT hunt for better frames. If a frame is a talking-head shot or a transition, just note "no informative content" and move on.
4. Immediately write the note and finish. Do not re-read files you already read.

NOTE STRUCTURE (write exactly this):

---
title: "${title.replace(/"/g, "'")}"
source: Tim Gabe (YouTube)
url: https://www.youtube.com/watch?v=${vid}
video_id: ${vid}
index: ${num}
topics: [2-5 of: onboarding, paywalls, monetization, pricing, retention, gamification, behavioral-psychology, growth, marketing, positioning, design-craft, ui-patterns, ux-principles, case-study, ai-products, saas, tools, career]
apps_cited: [every named product]
---

# ${title}

## Thesis
2-3 sentences: the central argument, stated so an agent could act on it.

## Key Frameworks
### <name> \`[MM:SS]\`
In your own words. List steps/stages if it has them. Describe the diagram's structure if it appeared on screen.

## Case Studies
### <App name> \`[MM:SS]\`
- **What they do:** the specific mechanic
- **Why it works:** the underlying principle
- **On screen:** what the UI actually looked like, from your frames — layout, copy, hierarchy, what's emphasized. Concrete.
- **Numbers:** figures he cites

## Actionable Rules
Imperative bullets with \`[MM:SS]\`. Specific ("show the trial-end date on the paywall"), never vague ("improve your paywall").

## Anti-patterns
What he says NOT to do, and why it backfires.

## Numbers & Claims
| Claim | Figure | \`[MM:SS]\` |

## Visual Notes
### \`[MM:SS]\` — <label>
What's on screen and why it matters. Reference \`frames/${num}/<MMSS>.jpg\`. One entry per informative frame you read.

## Open Questions
Ambiguities, unsupported assertions, and — importantly — flag any segment that is a promo for his own agency (Zipsa) so downstream agents discount it.

## Timestamp Map
- \`[MM:SS]\` — section label (8-15 lines)

QUALITY BAR: an agent reading only your note, never the video, should be able to apply the advice and cite specific examples with numbers. Preserve every named app, number and framework. Do not pad with generic design wisdom he didn't say.`

phase('Notes')

const results = await parallel(MISSING.map(([num, vid, title]) => () =>
  agent(prompt(num, vid, title), { label: `note:${num}`, phase: 'Notes', schema: SCHEMA })
))

const ok = results.filter(Boolean)
log(`Wrote ${ok.length}/${MISSING.length} recovery notes`)

return {
  written: ok.filter(r => r.written).map(r => r.num),
  failed: MISSING.map(m => m[0]).filter(n => !ok.some(r => r.num === n && r.written)),
}
