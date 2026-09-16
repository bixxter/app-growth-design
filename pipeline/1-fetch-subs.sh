#!/bin/bash
# Stage 1 — pull auto-captions for every video in the manifest.
# Captions only: no video is downloaded here, so this is fast and cheap.
# Usage: ./1-fetch-subs.sh          (writes to ../corpus/raw_vtt)
#        CORPUS_DIR=/some/dir ./1-fetch-subs.sh
set -uo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CORPUS_DIR="${CORPUS_DIR:-$ROOT/corpus}"
MANIFEST="${MANIFEST:-$ROOT/pipeline/manifest.tsv}"

mkdir -p "$CORPUS_DIR/raw_vtt" "$CORPUS_DIR/logs"
export CORPUS_DIR

fetch_sub() {
  num=$1; vid=$2
  # --write-subs AND --write-auto-subs: prefer a human track, fall back to ASR.
  yt-dlp --skip-download --write-auto-subs --write-subs --sub-langs "en.*,en" --sub-format vtt \
    -o "$CORPUS_DIR/raw_vtt/${num}_${vid}.%(ext)s" "https://www.youtube.com/watch?v=${vid}" \
    >> "$CORPUS_DIR/logs/subs.log" 2>&1
  if ls "$CORPUS_DIR/raw_vtt/${num}_${vid}"*.vtt >/dev/null 2>&1; then
    echo "OK   $num $vid"
  else
    echo "FAIL $num $vid"
  fi
}
export -f fetch_sub

# 6-wide. Captions are small; YouTube tolerates this without rate-limiting.
awk -F'\t' '{print $1"\n"$2}' "$MANIFEST" | xargs -P 6 -n 2 bash -c 'fetch_sub "$0" "$1"'

echo "SUBS: $(ls "$CORPUS_DIR"/raw_vtt/*.vtt 2>/dev/null | wc -l | tr -d ' ') files"
