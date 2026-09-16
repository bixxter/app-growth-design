# Pipeline

The six stages that turn a list of YouTube videos into the skill in [`../skill/`](../skill/). Read [../docs/PROCESS.md](../docs/PROCESS.md) for *why* each stage looks like this; this file is just the commands.

## Requirements

| | |
|---|---|
| `yt-dlp` | stages 1, 3, 3b — `brew install yt-dlp` |
| `ffmpeg` | stage 4 (the agents call it) — `brew install ffmpeg` |
| `python3` | stage 2 — stdlib only |
| Claude Code | stages 4, 5 — run as Workflow scripts |

Disk: ~550 MB at peak, ~30 MB after you delete `corpus/video/`.

## Run it

```bash
git clone https://github.com/bixxter/app-growth-design
cd app-growth-design/pipeline
chmod +x 1-fetch-subs.sh 2-clean-vtt.py 3-fetch-video.sh 3b-retry-video.sh

./1-fetch-subs.sh        # captions, 6-wide   → corpus/raw_vtt/
./2-clean-vtt.py         # dedupe + regroup   → corpus/working/
./3-fetch-video.sh       # 480p, 3-wide       → corpus/video/
./3b-retry-video.sh      # run until it prints ALL PRESENT
```

Everything lands in `../corpus/` by default. Override with `CORPUS_DIR=/somewhere ./1-fetch-subs.sh`, and point at a different video list with `MANIFEST=/path/to/other.tsv`.

Stages 4 and 5 are Workflow scripts — ask Claude Code to run them, passing the absolute corpus path (Workflow scripts have no filesystem or env access, so the path has to come in through `args`):

```
Run the workflow at pipeline/4-enrich.workflow.js with
args { "corpus": "/abs/path/to/app-growth-design/corpus" }
```

Then the same for `5-synthesize.workflow.js`. Stage 4 writes `corpus/notes/NN.md` and `corpus/frames/NN/*.jpg`; stage 5 writes `corpus/skill/SKILL.md` and `corpus/skill/references/*.md`. Copy that `skill/` over the repo's when you're happy with it.

If stage 4 dies partway — it did, see PROCESS.md §5 — edit the `MISSING` list in `recover.workflow.js` to the notes that never got written and run that instead. It reuses the frames stage 4 already cut, under a hard iteration budget.

## Files

| File | Stage | What |
|---|---|---|
| `manifest.tsv` | 0 | `num ⇥ video_id ⇥ title ⇥ duration_s`. The only input you change for a different channel. |
| `1-fetch-subs.sh` | 1 | Captions only, 6 parallel. Both human and ASR tracks. |
| `2-clean-vtt.py` | 2 | Strips tags, kills rolling-caption duplicates, regroups into ~30s timestamped blocks. |
| `3-fetch-video.sh` | 3 | 480p via a descending format ladder, 3 parallel, 4 attempts with backoff. |
| `3b-retry-video.sh` | 3b | Serial sweep for whatever YouTube throttled. Adds 360p as a last resort. |
| `4-enrich.workflow.js` | 4 | One agent per video: find visual gaps → cut frames → read them → write a structured note. Then a verify agent per note, fixing five named defects. |
| `5-synthesize.workflow.js` | 5 | Six agents read across all notes, one per theme → playbooks. One more writes the `SKILL.md` router. |
| `recover.workflow.js` | 4′ | Stage 4 re-scoped for existing frames, with a hard "read once, don't re-extract" budget. |

## Retargeting to another channel

1. Build a new `manifest.tsv`:
   ```bash
   yt-dlp --flat-playlist --print "%(id)s\t%(title)s\t%(duration)s" \
     "https://www.youtube.com/@SomeChannel/videos" | head -40
   ```
   Keep the substantive ones, number them `01`..`NN`, tab-separated.
2. Stages 1–3 need no changes.
3. In `4-enrich.workflow.js`, rewrite the **STEP 2 — visual gaps** paragraph for your domain (UI walkthroughs and diagrams for design; charts and tables for finance; the editor for coding). Also update the `VIDEOS` array and the `topics:` vocabulary in the note frontmatter.
4. In `5-synthesize.workflow.js`, replace the six `TRACKS` with the axes your domain splits along, and rewrite the skill `description:` — that field decides whether the skill ever loads.
