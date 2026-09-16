# How this skill was built

A method for turning a practitioner's video channel into knowledge an agent can actually use — written up in enough detail that you can point it at a different channel and get a different skill.

Everything here describes what was actually run, including the two stages that failed and what fixed them.

---

## 1. What "good" had to mean

The target was not a summary. The bar was:

> An agent that reads only the distilled files — never the videos — should give advice a founder can act on, cite a specific named product, and quote the real number.

That bar rules out most of what people do with transcripts. "Summarize this video" produces something that reads well and is useless the moment you ask it a decision question, because the specifics — the app name, the percentage, the exact mechanic — are the first things a summarizer drops as noise. They are not noise. They are the entire value. Generic product-design advice is free and everywhere; *"Blinkist added a trial-timeline screen with an absolute charge date: +23% conversion, −55% complaints"* is not.

So every stage was designed around one rule: **compress structure, never compress specifics.**

---

## 2. The two ways the naive approach fails

**Failure one: raw captions are 4× bigger than the speech in them.**

YouTube auto-captions are a rolling two-line window. Each cue repeats most of the previous cue, plus per-word `<c>` timing tags. 30 videos came to 2.6 MB of VTT, 220,498 words — for 49,629 words of actual speech. Feed that to a model and you pay 4× the tokens for a text that reads like a stutter.

**Failure two — the real one: a design channel's content is not in the audio.**

This is a man pointing at screens. The load-bearing sentence is *"look at what they did here"* — and the captions carry the word "here" and nothing else. Every framework arrives as an on-screen diagram. Every teardown is a UI walkthrough. A transcript-only pipeline produces notes full of dangling references: "the example shown", "this layout", "as you can see". A downstream agent can't cite a dangling reference, so it invents one.

That failure is the reason the pipeline downloads 510 MB of video for a text product.

---

## 3. The pipeline

Six stages. 1–3 are plumbing you can run unattended; 4–5 are where the work happens.

```
manifest.tsv ─┬─► 1 captions ──► 2 clean ─┐
              └─► 3 video ────────────────┴─► 4 enrich + verify ──► 5 synthesize ──► skill/
```

### Stage 0 — the manifest

One tab-separated file, four columns: `num`, `video_id`, `title`, `duration_s`. Everything downstream keys off the two-digit `num`, which becomes the `[NN]` source marker that survives all the way into the published skill. Pick the videos deliberately — 30 substantive ones beat 200 including shorts and announcements.

```
01	nQKWYmrixCU	The Twisted Psychology Behind Top 1% Apps	718
02	HA4yB_sd62Q	The Weird Design Playbook of 6 App Outliers	706
```

### Stage 1 — captions first, video later

`yt-dlp --skip-download --write-auto-subs --write-subs`, six in parallel. Captions are tiny and YouTube doesn't throttle them, so this finishes in under a minute and tells you immediately which videos are usable. No point downloading half a gigabyte for a video with no caption track.

Both `--write-subs` (human) and `--write-auto-subs` (ASR) are requested, and stage 2 prefers `en-orig` over `en`: the plain `en` track can be a translation rather than the original audio.

### Stage 2 — dedupe, then make it addressable

Three transforms, in [`2-clean-vtt.py`](../pipeline/2-clean-vtt.py):

1. strip tags and headers,
2. exact-text dedupe (case-insensitive) to kill the rolling window,
3. regroup into ~30-second paragraphs, each with one leading timestamp.

Step 3 is the one that's easy to skip and shouldn't be. A wall of text is cheaper to read but nothing downstream can point into it. With a timestamp every 30 seconds, an agent can read "he starts describing the Granola onboarding at `[04:12]`" and convert that straight into an `ffmpeg -ss 252` call. **The timestamps are what let the text stage drive the image stage.**

```
220,498 words  →  49,629 words   (4.4×)
```

### Stage 3 — 480p, and delete it afterwards

`-f 397/135/396/134/395/133` — a descending ladder, AV1 480p first, H.264 480p next, smaller below. The frames get read by a model, not a human; 480p is legible for UI screenshots and keeps 30 videos at 510 MB instead of several GB.

Video pulls run **3-wide, not 6** — unlike captions, they get throttled. They still failed. See §5.

The `video/` directory is disposable: once stage 4 has cut its frames, delete it. Only the ~29 MB of extracted JPEGs matter, and they aren't published either.

### Stage 4 — one agent per video (the core)

[`4-enrich.workflow.js`](../pipeline/4-enrich.workflow.js). Thirty independent agents, each owning exactly one video, each running five steps:

1. **Read the cleaned transcript** in full.
2. **Hunt for visual gaps.** This is the instruction the whole pipeline exists to deliver:

   > *He is a designer; much of his meaning lives on screen and the captions lose it. Hunt for moments where the text alone is incomplete: deictic references — "this screen", "look at this", "notice how", "right here", "as you can see"; named app walkthroughs where he is clearly showing a UI; diagrams, frameworks, charts, before/after comparisons; any list where the on-screen text is the actual content.*

   Pick the 8–14 timestamps carrying the most non-verbal information.
3. **Cut those frames** — one `ffmpeg -ss <sec> -i video.mp4 -frames:v 1` per timestamp, fast-seek, named by timestamp (`0412.jpg` = 04:12). With the hint that **captions lag the screen by a beat, so seek 2–4 seconds after he starts describing something.** Get this wrong and you screenshot the previous slide.
4. **Actually look at the frames.** Read each JPEG. If it's a talking-head shot or a transition, re-cut a few seconds later. This is the step that cannot be faked and the step that produces all the value.
5. **Write the note** into a fixed schema: `Thesis`, `Key Frameworks`, `Case Studies` (each with *What they do / Why it works / **On screen** / Numbers*), `Actionable Rules`, `Anti-patterns`, `Numbers & Claims` (a table), `Visual Notes`, `Open Questions`, `Timestamp Map`.

Two constraints in the prompt did a lot of work:

- **"Synthesize, don't transcribe."** Explicitly: capture ideas, frameworks, examples and numbers in your own words; short quoted phrases only, for a memorable rule. This keeps the output a research artifact rather than a republished transcript.
- **"Flag the promos."** The channel host runs a design agency and pitches it repeatedly; several case studies are his own unaudited client work. Every note carries an `Open Questions` block calling those segments out by timestamp — so the final skill can say *use the mechanic, never the implied result.*

Then a **second agent re-reads every note against its source transcript** and fixes, by editing the note directly, five specific defects:

| Defect | Fix |
|---|---|
| Unresolved visual reference — "the example shown" | Re-cut the frame, look at it, write what was actually there |
| Missing content — a framework or number in the transcript, absent from the note | Add it |
| Verbatim bloat — long passages copied from narration | Condense into synthesized knowledge |
| Vague rule — "improve your onboarding" | Replace with the specific thing he said, or delete |
| Broken structure / frontmatter | Repair |

Naming the defects beats asking for "a quality check". A generic review prompt returns generic praise. This one returns edits.

The two stages run as a **pipeline, not a barrier** — video 07's verification starts the moment video 07's note is written, while video 23 is still cutting frames. No agent waits for a slow sibling.

**Result: 30 notes, 118,660 words — more than twice the volume of the speech.** That inversion is the proof the approach worked: 1,161 screenshots, 476 of them described in-line, put back what the captions never had.

### Stage 5 — six agents, one per theme

[`5-synthesize.workflow.js`](../pipeline/5-synthesize.workflow.js). The notes are per-video, but nobody has a per-video problem. They have a paywall problem. So six agents each read *across all 30 notes* along one axis — behavioral psychology, onboarding, monetization, retention, growth, craft — and write one playbook in a fixed shape:

**Core principles** (each stated as a usable rule, evidence underneath) → **Playbooks** (executable procedures) → **Case bank** → **Anti-patterns** → **Decision guide** (IF/THEN) → **Sources**.

The rules that made these files worth reading:

- **Every non-obvious claim carries `[NN]`.** Non-negotiable. It's what makes the skill checkable instead of oracular.
- **The case bank is the point.** "Granola's two-screen onboarding, $1.5B" is persuasive; "keep onboarding short" is wallpaper.
- **Merge across videos, don't repeat.** Same idea in four videos → one strong statement, four markers.
- **Surface contradictions explicitly.** The corpus disagrees with itself on short-vs-long onboarding and on whether friction is a bug or an amplifier. Each playbook ends with a `Contradictions` section. A knowledge base that hides its internal disagreement will confidently give you the wrong half of it.
- **Don't pad.** No generic product wisdom that isn't in the notes.

Then one final agent writes `SKILL.md` as a **router, under 200 lines**: what this is, a real routing table, the 10–15 highest-leverage rules, a case index of named products, and the source index. Depth lives in `references/`; the router only has to get the model to the right file.

The `description:` field in the frontmatter matters more than anything else in that file — it is the only thing the model matches against when deciding whether to load the skill at all. Concrete and keyword-rich ("paywalls and free-trial structure, streaks, leaderboards, badges, reward ceremonies, share and referral loops") beats elegant ("helps with app growth").

---

## 4. The numbers

| Stage | Output | Volume |
|---|---|---|
| Source | 30 videos | 5.7 hours |
| 1 — captions | raw VTT | 2.6 MB / 220,498 words |
| 2 — cleaned | timestamped blocks | 49,629 words (4.4× smaller) |
| 3 — video | 480p mp4 | 510 MB (deleted after stage 4) |
| 4 — notes | 30 structured notes | 118,660 words |
| 4 — frames | extracted screenshots | 1,161 cut / 476 described |
| 5 — playbooks | 6 reference files | 55,241 words |
| 5 — router | SKILL.md | 2,378 words |
| — | unique named products indexed | 243 |

Three usable depths fall out of it: `SKILL.md` alone (~3k tokens) routes an agent; `references/` (~75k tokens) is the working knowledge base; the notes (~160k tokens) are the archive.

---

## 5. What went wrong

**The first enrichment run burned itself out.** Stage 4 gives each agent a genuinely open-ended job — pick timestamps, cut frames, look, re-cut if bad. Eleven agents finished. Nineteen kept going: re-extracting frames looking for a better one, deleting and redoing, re-reading files they'd already read, hunting for the perfect screenshot. An open-ended loop with a quality goal and no stopping rule doesn't stop.

The fix was [`recover.workflow.js`](../pipeline/recover.workflow.js) — the same task, re-scoped for agents that no longer need to *find* frames, because the dead run had already cut 1,161 of them. The prompt leads with a hard budget:

> *A previous run of this task died by over-working. Obey exactly: (1) Read the transcript ONCE. (2) `ls` the frames dir; if more than 12, choose 12 spread across the timeline. (3) Read those frames ONCE each. Do NOT re-extract, do NOT delete, do NOT run ffmpeg, do NOT hunt for better frames. If a frame is a talking-head shot, note "no informative content" and move on. (4) Write the note and finish.*

All 19 completed.

**Lesson:** when an agent's task contains a subjective quality judgment (*is this frame good enough?*), the prompt must supply the stopping rule, because the task itself has none. Bound the iterations explicitly: read once, choose N, don't redo.

**YouTube throttled the video pulls.** Stage 3 runs 3-wide with a 4-attempt exponential backoff and still came up short. [`3b-retry-video.sh`](../pipeline/3b-retry-video.sh) exists for that: three serial passes, slower, gentler, with 360p added to the bottom of the format ladder as a last resort. Run it until it prints `ALL PRESENT`. Stage 4 is also written to degrade gracefully — if a video file is missing it writes the note from the transcript alone and reports `frames_extracted: 0` rather than failing.

**The published skill pointed at files that don't ship.** The generated `SKILL.md` indexed all 30 notes as local paths — correct in the working directory, dead links for anyone installing the skill on its own. Fixed at publish time by rewriting the index to link the YouTube sources instead, which is the better citation anyway; the stage-5 prompts now say so, so a re-run gets it right.

---

## 6. What I'd change next time

- **Cut the frames in stage 3, not stage 4.** Extracting every N seconds up front is cheap, and it removes the tool-loop that killed the first run — the agents that worked best were the ones in the recovery run, which only had to *choose* from existing frames.
- **Add a cross-note contradiction pass.** The contradictions got caught because the synthesis agents were told to look; a dedicated pass over all 30 notes would find more.
- **Test the `description:` field.** It decides whether the skill ever loads. It deserves an eval — a set of realistic prompts, checking whether the skill fires — not a single careful draft.
- **Track claims that carry no number.** The corpus is survivorship-selected storytelling. A `confidence:` field per claim (measured / cited / asserted) would let downstream agents weight them.

---

## 7. Pointing it at a different channel

Nothing here is specific to this channel except `manifest.tsv` and the six theme names in stage 5. To rebuild for another expert:

1. Build a new `manifest.tsv` (`yt-dlp --flat-playlist --print "%(id)s\t%(title)s\t%(duration)s"`, then number the ones worth keeping).
2. Run stages 1–3 unchanged.
3. In stage 4, rewrite one paragraph — the **visual gaps** instruction. It is domain-specific: for a design channel it's UI walkthroughs and diagrams; for a finance channel it's charts and tables; for a coding channel it's the editor. If the channel is genuinely audio-only, skip stages 3–4's frame work entirely and the pipeline still runs.
4. In stage 5, replace the six `TRACKS` with the axes your domain actually splits along, and rewrite the `description:` in the router.

The parts worth keeping wholesale: the dedupe-and-timestamp cleaning, the note schema, the named-defect verification pass, the `[NN]` marker discipline, and the hard iteration budget on any agent doing open-ended tool work.

See [pipeline/README.md](../pipeline/README.md) for the commands.
