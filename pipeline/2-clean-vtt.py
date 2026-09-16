#!/usr/bin/env python3
"""Stage 2 — VTT -> clean timestamped working text.

Raw YouTube auto-captions are unusable as model input: they are a rolling two-line
window, so every line repeats in the next cue, and they carry inline <c> word-timing
tags. A 12-minute video arrives as ~90 KB of VTT for ~10 KB of actual speech.

This does three things:
  1. strips tags and headers,
  2. drops the rolling duplicates (exact-text dedupe, case-insensitive),
  3. regroups the surviving lines into ~30s paragraphs, each with one leading
     timestamp — dense enough to read, still addressable so a downstream agent can
     say "extract the frame at 04:12".

Usage: ./2-clean-vtt.py    |    CORPUS_DIR=/some/dir ./2-clean-vtt.py
"""
import os
import re
import sys

TAG = re.compile(r'<[^>]+>')
CUE = re.compile(r'^(\d{2}:\d{2}:\d{2})\.\d{3}\s+-->\s+\d{2}:\d{2}:\d{2}\.\d{3}')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CORPUS = os.environ.get('CORPUS_DIR', os.path.join(ROOT, 'corpus'))
MANIFEST = os.environ.get('MANIFEST', os.path.join(ROOT, 'pipeline', 'manifest.tsv'))


def clean(path):
    """VTT file -> [(timestamp, text)] with rolling-caption repeats removed."""
    lines = open(path, encoding='utf-8').read().splitlines()
    out, seen, cur_ts = [], set(), "00:00:00"
    for ln in lines:
        m = CUE.match(ln)
        if m:
            cur_ts = m.group(1)
            continue
        if not ln.strip() or ln.startswith(('WEBVTT', 'Kind:', 'Language:', 'NOTE')):
            continue
        txt = TAG.sub('', ln).strip()
        txt = re.sub(r'\s+', ' ', txt)
        if not txt or txt in ('[Music]', '[music]', '[Applause]'):
            continue
        key = txt.lower()
        if key in seen:
            continue
        seen.add(key)
        out.append((cur_ts, txt))
    return out


def to_paragraphs(rows, window=30):
    """Group into ~30s blocks with a leading timestamp."""
    blocks, buf, start = [], [], None

    def secs(t):
        h, m, s = map(int, t.split(':'))
        return h * 3600 + m * 60 + s

    for ts, txt in rows:
        if start is None:
            start = ts
        if secs(ts) - secs(start) >= window and buf:
            blocks.append((start, ' '.join(buf)))
            buf, start = [], ts
        buf.append(txt)
    if buf:
        blocks.append((start, ' '.join(buf)))
    return blocks


def main():
    manifest = {}
    for line in open(MANIFEST, encoding='utf-8'):
        if not line.strip():
            continue
        num, vid, title, dur = line.rstrip('\n').split('\t')
        manifest[num] = (vid, title, dur)

    os.makedirs(f'{CORPUS}/working', exist_ok=True)
    missing = 0
    for num in sorted(manifest):
        vid, title, dur = manifest[num]
        # prefer en-orig (original ASR) over en — the plain `en` track can be a
        # translation rather than the original audio.
        cands = [f'{CORPUS}/raw_vtt/{num}_{vid}.en-orig.vtt',
                 f'{CORPUS}/raw_vtt/{num}_{vid}.en.vtt']
        src = next((c for c in cands if os.path.exists(c)), None)
        if not src:
            print(f'MISSING {num}')
            missing += 1
            continue
        rows = clean(src)
        blocks = to_paragraphs(rows)
        words = sum(len(t.split()) for _, t in rows)
        with open(f'{CORPUS}/working/{num}.txt', 'w', encoding='utf-8') as f:
            f.write(f'# {title}\nvideo_id: {vid}\n'
                    f'url: https://www.youtube.com/watch?v={vid}\nduration_s: {dur}\n\n')
            for ts, txt in blocks:
                f.write(f'[{ts}] {txt}\n\n')
        print(f'{num}  {words:5d} words  {len(blocks):3d} blocks  {title[:50]}')
    return 1 if missing else 0


if __name__ == '__main__':
    sys.exit(main())
