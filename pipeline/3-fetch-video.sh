#!/bin/bash
# Stage 3 — download 480p video, used ONLY as a source for frame extraction.
# Format ladder 397/135/396/134/395/133 = AV1 480p -> H.264 480p -> smaller, in
# descending preference. Quality beyond 480p is wasted: frames are read by a model,
# not a human, and 480p keeps 30 videos at ~500 MB instead of several GB.
# Usage: ./3-fetch-video.sh    |    CORPUS_DIR=/some/dir ./3-fetch-video.sh
set -uo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CORPUS_DIR="${CORPUS_DIR:-$ROOT/corpus}"
MANIFEST="${MANIFEST:-$ROOT/pipeline/manifest.tsv}"

mkdir -p "$CORPUS_DIR/video" "$CORPUS_DIR/logs"
export CORPUS_DIR

get_vid() {
  num=$1; vid=$2
  [ -f "$CORPUS_DIR/video/${num}.mp4" ] && { echo "SKIP $num"; return; }
  for attempt in 1 2 3 4; do
    rm -f "$CORPUS_DIR/video/${num}".*.part "$CORPUS_DIR/video/${num}.part" 2>/dev/null
    yt-dlp -f "397/135/396/134/395/133" --retries 10 --fragment-retries 10 \
      --sleep-requests 1 --extractor-args "youtube:player_client=web_safari,web" \
      -o "$CORPUS_DIR/video/${num}.%(ext)s" \
      "https://www.youtube.com/watch?v=${vid}" >> "$CORPUS_DIR/logs/video.log" 2>&1
    if [ -f "$CORPUS_DIR/video/${num}.mp4" ]; then echo "OK   $num (try $attempt)"; return; fi
    sleep $((attempt * 5))   # backoff: throttling is the usual failure, not a dead video
  done
  echo "FAIL $num $vid"
}
export -f get_vid

# 3-wide, not 6. Video pulls get throttled where caption pulls don't.
awk -F'\t' '{print $1"\n"$2}' "$MANIFEST" | xargs -P 3 -n 2 bash -c 'get_vid "$0" "$1"'

echo "DOWNLOADS_DONE $(ls "$CORPUS_DIR"/video/*.mp4 2>/dev/null | wc -l | tr -d ' ')"
