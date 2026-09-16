# app-growth-design

[![npm](https://img.shields.io/npm/v/app-growth-design)](https://www.npmjs.com/package/app-growth-design)
[![license](https://img.shields.io/npm/l/app-growth-design)](LICENSE)

A Claude Code skill for the decisions that actually move an app: **onboarding, paywalls, pricing, retention, gamification, growth loops and screen-level craft.**

It is not another "be a helpful product expert" prompt. It is a knowledge base — 5.7 hours of teardowns from [Tim Gabe's YouTube channel](https://www.youtube.com/@TimGabe) compressed into six playbooks where every non-obvious claim carries a `[NN]` marker back to the video it came from, and every case study keeps its numbers.

```bash
npx app-growth-design
```

That's it. Pick user-wide or project-only, restart Claude Code, and the skill loads itself whenever you're working on one of those problems.

---

## tl;dv

*Too long; didn't view — which is rather the point.*

- **What.** 30 app teardowns → six playbooks your agent reads instead of guessing: onboarding, paywalls, retention, psychology, growth, craft.
- **Why it's not slop.** Every non-obvious claim carries a `[NN]` marker back to the video. 243 named products with their real numbers. Where the source contradicts itself, the playbooks say so instead of picking a side.
- **The trick.** A design channel keeps its meaning *on screen* — "look at what they did here" and the captions carry `here` and nothing else. So the pipeline reads 1,161 screenshots too, and the notes come out **2.4× bigger than the speech**.
- **Install.** `npx app-growth-design` → restart Claude Code → describe your problem. It loads itself.
- **Credit.** All the insight is [Tim Gabe's](https://www.youtube.com/@TimGabe). This repo ships synthesized notes and the pipeline — no captions, no video, no screenshots.
- **Caveat.** One practitioner's opinionated view, not settled fact. Cases with real numbers are evidence; the rest are hypotheses to test.

---

## What changes when it's installed

Without it, ask Claude *"my paywall converts at 2%, what do I test first?"* and you get sensible, generic advice: try annual vs monthly, test your copy, add social proof.

With it, the same question routes into `monetization-paywalls.md` and comes back with an ordering that has evidence attached:

> Structure out-tests price, always. Ranked LTV uplift across the corpus: locale 62.3% > trial structure 59.6% > plan duration 58.7% > plan count 57.1% > **price 45.5%** > visuals 34.6%. Adding a free trial to a *weekly* plan took 12-month LTV from $7.40 to $54.50 (+636%) — no price test does that. `[06]`
>
> But first check which layer you're on: 57.7% of new apps never cross $1,000 in revenue. Below the top decile this isn't a monetization problem. `[06]`

Same for the rest:

| You're working on | It routes to | Sample of what's in there |
|---|---|---|
| First-run flow, quiz vs. short flow, time-to-value, activation | `onboarding-activation.md` | Granola ships value in 2 screens ($1.5B); Cal AI runs a 20+ step quiz ($35M year one); Noom runs 113 screens. Length is only justified if it buys visible personalization or a buyer filter. |
| Paywall layout, trials, plan count, price tiers | `monetization-paywalls.md` | Weekly plans convert 1.7–7.4× better than annual at every price tier. 82–89% of trial starts happen on install day. |
| Streaks, leaderboards, badges, churn, reward ceremonies | `retention-gamification.md` | A 35-intervention meta-analysis: gamification lifts autonomy (g=0.638) and relatedness (g=1.776) but barely touches competence (g=0.277). Depth is non-monotonic — past a point the fix is cutting. |
| *Why* users behave this way — identity, dopamine, loss aversion | `behavioral-psychology.md` | Build Mirror → Label → Flex. Exit question: if a user left today, what would they rebuild from scratch? "Nothing much" = no moat. |
| Positioning vs. an incumbent, moats, share loops, landing pages | `growth-marketing.md` | Design the share *artifact*, not the share button. Fuse share with invite at a 1-friend threshold. Attachment before virality. |
| Type scale, spacing, color budget, motion, microcopy | `design-craft.md` | The countable craft checklist, the subtraction pass, the five-criterion screen audit. |

**243 named products** are indexed with what each one exemplifies, so the model can reach for a real citation instead of inventing a plausible one.

---

## Install

```bash
# interactive — asks user-wide or project-only
npx app-growth-design

# non-interactive
npx app-growth-design --user      # ~/.claude/skills/app-growth-design
npx app-growth-design --project   # ./.claude/skills/app-growth-design
npx app-growth-design --dir ~/some/skills

# later
npx app-growth-design --force       # update in place
npx app-growth-design --uninstall
```

Straight from the repo works too, if you'd rather skip the registry:
`npx github:bixxter/app-growth-design`

Node 18+. No dependencies — the installer is one file that copies `skill/` into your skills directory and nothing else.

Prefer to do it by hand? `cp -r skill ~/.claude/skills/app-growth-design`. It works in anything that reads the [Agent Skills](https://code.claude.com/docs/en/skills) format.

---

## How it was built

The short version. The long version — every decision and the two things that went wrong — is in **[docs/PROCESS.md](docs/PROCESS.md)**.

The problem with turning a YouTube channel into agent knowledge is that the naive path fails twice. Dumping raw captions gives you 220k words of rolling-window duplicates, most of it filler. And a design channel is the worst possible case for captions alone: the man is *pointing at a screen*. "Look at how they did this" is the entire claim, and the audio carries none of it.

So the pipeline is built around one idea: **the frames are not decoration, they are the missing half of the content.**

<!-- generated — edit docs/diagrams.mjs and run `node docs/diagrams.mjs`, don't hand-edit the SVG -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/bixxter/app-growth-design/main/docs/flow-dark.svg">
  <img alt="Two streams enter: captions, deduped from 220,498 to 49,629 words, and 510 MB of 480p video. Both feed an enrich agent that runs once per video — read the transcript, find where meaning is on screen, cut those frames and look at them, write a structured note — followed by a verify agent. Out come 30 notes, 118,660 words and 1,161 frames, which six theme agents turn into six playbooks and a SKILL.md router." src="https://raw.githubusercontent.com/bixxter/app-growth-design/main/docs/flow-light.svg">
</picture>

Note what happens to the word count in the middle: the notes come out **more than twice the size of the speech**. That's the whole point — 1,161 screenshots put back what the captions lost.

Three details that turned out to matter more than expected:

- **Captions lag the screen by a beat.** Frames get extracted 2–4 seconds *after* he starts describing something, or you capture the previous slide.
- **The verify pass is where quality comes from.** The single most common defect was a note that still said "the example shown here" — a reference the downstream agent can't use. Verification agents re-extract the frame, look at it, and write in what was actually there.
- **`[NN]` markers everywhere.** Every claim in the playbooks points back at a source video. That's what makes the skill arguable rather than oracular — you can check it, and so can the model.

---

## Rebuild it for a different channel

Everything needed is in [`pipeline/`](pipeline/), and the whole thing is channel-agnostic — swap `pipeline/manifest.tsv` for your own list of videos and re-run. See [pipeline/README.md](pipeline/README.md) for the exact commands.

```
pipeline/
├── manifest.tsv               num ⇥ video_id ⇥ title ⇥ duration_s — the only input you change
├── 1-fetch-subs.sh            captions, 6 parallel
├── 2-clean-vtt.py             dedupe + regroup into ~30s timestamped blocks
├── 3-fetch-video.sh           480p, 3 parallel
├── 3b-retry-video.sh          sweep for what YouTube throttled
├── 4-enrich.workflow.js       one agent per video: frames + note, then verify
├── 5-synthesize.workflow.js   six agents: notes → playbooks → SKILL.md
└── recover.workflow.js        the lean rewrite of stage 4, after the first run
                               burned itself out (see docs/PROCESS.md)
```

Stages 4–5 are [Claude Code Workflow](https://code.claude.com/docs/en/claude-code) scripts — deterministic orchestration over parallel subagents. Stages 1–3 need `yt-dlp` and `ffmpeg`.

---

## Honesty section

**This is one practitioner's opinionated view, not settled fact.** Nearly every mechanic in the corpus is asserted from survivorship-selected case studies. There are essentially no before/after deltas attributable to a specific change. Treat the cases that carry real numbers as evidence and the rest as hypotheses worth testing.

**The corpus contradicts itself**, and the playbooks say so rather than papering over it — short vs. long onboarding, friction-removal vs. friction-as-amplifier, design-as-moat vs. design-is-not-the-moat. Each reference file ends with **Anti-patterns**, **Contradictions** and **Caveats**. Read them before advising anyone.

**Agency promos are flagged.** Tim runs a design agency and pitches it 2–4 times per video; several case studies are his own unaudited client work. Those segments are marked as promotional. Use the mechanics, never the implied results.

---

## Attribution & licensing

All the underlying insight belongs to **[Tim Gabe](https://www.youtube.com/@TimGabe)** — if this is useful to you, go watch the source videos. Every `[NN]` marker in the skill links to one.

This repo ships **structured, synthesized notes, not republished transcripts.** No captions, no video, no screenshots are included here; the pipeline that produces them from public YouTube content is included so you can reproduce the work yourself.

The pipeline code is MIT ([LICENSE](LICENSE)). The distilled playbooks in `skill/` are commentary on publicly published material — use them, and keep the attribution.

Not affiliated with, endorsed by, or reviewed by Tim Gabe.
