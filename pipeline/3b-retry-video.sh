#!/bin/bash
# Stage 3b — sweep for whatever stage 3 failed to get.
# Three serial passes, slower and gentler than stage 3, with format 18 (360p mp4)
# added at the end of the ladder as a last resort. Run until it prints ALL PRESENT.
set -uo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CORPUS_DIR="${CORPUS_DIR:-$ROOT/corpus}"
MANIFEST="${MANIFEST:-$ROOT/pipeline/manifest.tsv}"
TOTAL="$(wc -l < "$MANIFEST" | tr -d ' ')"

mkdir -p "$CORPUS_DIR/video" "$CORPUS_DIR/logs"
rm -f "$CORPUS_DIR"/video/*.part "$CORPUS_DIR"/video/*.ytdl 2>/dev/null

for pass in 1 2 3; do
  missing=""
  while IFS=$'\t' read -r num vid title dur; do
    [ -f "$CORPUS_DIR/video/${num}.mp4" ] || missing="$missing $num:$vid"
  done < "$MANIFEST"
  [ -z "$missing" ] && { echo "ALL PRESENT"; break; }
  echo "PASS $pass missing:$(echo $missing | wc -w | tr -d ' ')"
  for pair in $missing; do
    num="${pair%%:*}"; vid="${pair##*:}"
    yt-dlp -f "397/135/396/134/395/133/18" --retries 8 --fragment-retries 8 \
      --sleep-requests 2 --sleep-interval 3 --max-sleep-interval 8 \
      -o "$CORPUS_DIR/video/${num}.%(ext)s" \
      "https://www.youtube.com/watch?v=${vid}" >> "$CORPUS_DIR/logs/video.log" 2>&1
    if [ -f "$CORPUS_DIR/video/${num}.mp4" ]; then echo "  OK $num"; else echo "  still-missing $num"; fi
  done
done

echo "FINAL: $(ls "$CORPUS_DIR"/video/*.mp4 2>/dev/null | wc -l | tr -d ' ')/$TOTAL"
