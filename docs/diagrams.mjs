// Regenerates the README diagrams as hand-drawn SVG, light + dark.
//
//   node docs/diagrams.mjs          -> docs/{flow,volume}-{light,dark}.svg
//
// No dependencies. Deterministic: the line wobble comes from a seeded sine, not
// Math.random, so a re-run is byte-identical and the diffs stay readable.
// GitHub will not load a webfont inside an SVG, so only the strokes are drawn by
// hand — labels fall back to the system sans, figures to the system mono.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const SANS = "ui-sans-serif,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif"
const MONO = "ui-monospace,SFMono-Regular,'SF Mono',Menlo,Consolas,'Liberation Mono',monospace"

const THEMES = {
  light: { bg: '#FCFBF9', ink: '#2A2E35', muted: '#868C97', faint: '#DCD7D0',
           text: '#2F6E7E', vision: '#B06A27', fillOp: 0.09 },
  dark:  { bg: '#15171B', ink: '#D5D9E0', muted: '#848A95', faint: '#30343B',
           text: '#72B6C7', vision: '#DFA25E', fillOp: 0.13 },
}

const wob = (x, seed, amp = 1.3) =>
  amp * (0.62 * Math.sin(x / 31 + seed * 2.7) + 0.38 * Math.sin(x / 11.3 + seed * 5.1))
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const f1 = n => n.toFixed(1)

function rline(x1, y1, x2, y2, seed, { stroke, w = 1.6, amp = 1.3, passes = 2, op = 1 } = {}) {
  let out = ''
  for (let p = 0; p < passes; p++) {
    const s = seed + p * 13.7
    const dx = x2 - x1, dy = y2 - y1
    const c1x = x1 + dx * 0.33 + wob(x1 + 40, s, amp), c1y = y1 + dy * 0.33 + wob(y1 + 90, s + 1, amp)
    const c2x = x1 + dx * 0.68 + wob(x2 + 20, s + 2, amp), c2y = y1 + dy * 0.68 + wob(y2 + 60, s + 3, amp)
    const sx = x1 + wob(x1, s + 4, amp * .5), sy = y1 + wob(y1, s + 5, amp * .5)
    const ex = x2 + wob(x2, s + 6, amp * .5), ey = y2 + wob(y2, s + 7, amp * .5)
    out += `<path d="M${f1(sx)},${f1(sy)} C${f1(c1x)},${f1(c1y)} ${f1(c2x)},${f1(c2y)} ${f1(ex)},${f1(ey)}" fill="none" stroke="${stroke}" stroke-width="${w}" stroke-linecap="round" opacity="${p === 0 ? op : op * 0.5}"/>`
  }
  return out
}

const rrect = (x, y, w, h, seed, o = {}) =>
  rline(x, y, x + w, y, seed, o) + rline(x + w, y, x + w, y + h, seed + 3, o)
  + rline(x + w, y + h, x, y + h, seed + 6, o) + rline(x, y + h, x, y, seed + 9, o)

const txt = (x, y, s, { size = 12, fill, font = SANS, weight = 400, anchor = 'start', ls = 0, op = 1 } = {}) =>
  `<text x="${x}" y="${y}" font-family="${font}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}"${ls ? ` letter-spacing="${ls}"` : ''}${op !== 1 ? ` opacity="${op}"` : ''}>${esc(s)}</text>`

// tip at (x,y); `dir` is the direction of travel
function head(x, y, dir, seed, stroke, len = 8) {
  const a = dir + Math.PI
  return rline(x, y, x + Math.cos(a + .42) * len, y + Math.sin(a + .42) * len, seed, { stroke, w: 1.5, amp: .5, passes: 1 })
       + rline(x, y, x + Math.cos(a - .42) * len, y + Math.sin(a - .42) * len, seed + 2, { stroke, w: 1.5, amp: .5, passes: 1 })
}
function arrow(x1, y1, x2, y2, seed, stroke, o = {}) {
  return rline(x1, y1, x2, y2, seed, { stroke, w: 1.4, amp: 1, passes: 1, ...o })
       + head(x2, y2, Math.atan2(y2 - y1, x2 - x1), seed + 5, stroke)
}
const eyebrow = (x, y, s, t) => txt(x, y, s, { size: 10, fill: t.muted, weight: 700, ls: 1.4 })
const svg = (W, H, t, body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img">`
  + `<rect width="${W}" height="${H}" fill="${t.bg}"/>${body}</svg>\n`

// ── A: the full flow, four movements ───────────────────────────────────────
function flow(t) {
  const W = 1000, H = 430
  let g = ''

  // 1 — source: 30 tiles
  g += eyebrow(36, 44, 'SOURCE', t)
  for (let i = 0; i < 30; i++)
    g += rrect(36 + (i % 6) * 23, 60 + Math.floor(i / 6) * 21, 18, 14, i * 4.3,
               { stroke: t.ink, w: 1.2, amp: .7, passes: 1, op: .75 })
  g += txt(36, 186, '30 videos', { size: 13.5, fill: t.ink, weight: 600 })
  g += txt(36, 202, 'Tim Gabe · 5.7 hours', { size: 10.5, fill: t.muted })

  // 2 — two streams
  const laneY = 118, visY = 268
  g += arrow(178, laneY, 246, laneY, 30, t.text)
  g += txt(250, 100, 'CAPTIONS', { size: 10, fill: t.text, weight: 700, ls: 1.3 })
  g += txt(250, 122, '220,498', { size: 19, fill: t.ink, font: MONO, weight: 500 })
  g += txt(250, 137, 'words of rolling-window repeats', { size: 10, fill: t.muted })
  g += arrow(250, 152, 250, 172, 34, t.muted)
  g += txt(262, 168, 'dedupe + timestamp', { size: 10.5, fill: t.muted })
  g += txt(250, 196, '49,629', { size: 19, fill: t.ink, font: MONO, weight: 500 })
  g += txt(250, 211, 'words, in ~30s blocks', { size: 10, fill: t.muted })
  g += arrow(348, 196, 452, 196, 38, t.text)

  g += arrow(100, 216, 100, 290, 42, t.vision)
  g += txt(36, 314, '480p VIDEO', { size: 10, fill: t.vision, weight: 700, ls: 1.3 })
  g += txt(36, 338, '510 MB', { size: 19, fill: t.ink, font: MONO, weight: 500 })
  g += txt(36, 353, 'kept only to cut frames from,', { size: 10, fill: t.muted })
  g += txt(36, 367, 'deleted once the notes are written', { size: 10, fill: t.muted })
  g += arrow(150, 332, 452, 254, 46, t.vision)

  // 3 — the enrich box, ghosted ×30
  const bx = 460, by = 92, bw = 250, bh = 178
  for (let i = 3; i > 0; i--)
    g += rrect(bx + i * 5, by - i * 5, bw, bh, 60 + i * 9, { stroke: t.faint, w: 1.3, amp: .8, passes: 1 })
  g += `<rect x="${bx}" y="${by}" width="${bw}" height="${bh}" fill="${t.ink}" fill-opacity="${t.fillOp * 0.55}"/>`
  g += rrect(bx, by, bw, bh, 70, { stroke: t.ink, w: 1.9, amp: 1.1 })
  g += txt(bx + 16, by + 26, 'ENRICH', { size: 13, fill: t.ink, weight: 700, font: MONO })
  g += txt(bx + 82, by + 26, '× 30', { size: 13, fill: t.muted, font: MONO })
  g += txt(bx + 16, by + 48, 'one agent per video:', { size: 11, fill: t.muted })
  const steps = ['read the transcript', 'find where meaning is on screen', 'cut those frames — and LOOK', 'write a structured note']
  steps.forEach((s, i) => {
    g += txt(bx + 16, by + 68 + i * 17, '·', { size: 12, fill: t.vision, weight: 700 })
    g += txt(bx + 26, by + 68 + i * 17, s, { size: 11.5, fill: t.ink })
  })
  g += `<rect x="${bx}" y="${by + 143}" width="${bw}" height="${bh - 143}" fill="${t.vision}" fill-opacity="${t.fillOp * 0.7}"/>`
  g += rline(bx, by + 143, bx + bw, by + 143, 78, { stroke: t.faint, w: 1.3, amp: .5, passes: 1 })
  g += txt(bx + 16, by + 162, 'VERIFY × 30', { size: 11, fill: t.vision, weight: 700, font: MONO })
  g += txt(bx + 104, by + 162, 'five named defects, fixed', { size: 10.5, fill: t.muted })

  // 3′ — what came out
  g += txt(bx, 300, '30 notes · 118,660 words · 1,161 frames', { size: 11.5, fill: t.ink, weight: 600 })
  g += txt(bx, 320, 'more than twice the volume of the speech — the', { size: 10.5, fill: t.muted })
  g += txt(bx, 335, 'screenshots put back what the captions never had', { size: 10.5, fill: t.muted })
  g += rline(bx - 8, 296, bx - 8, by + bh + 4, 84, { stroke: t.faint, w: 1.3, amp: .6, passes: 1 })

  // 4 — six playbooks, then the router
  const tx = 752, tw = 212
  g += eyebrow(tx, 44, 'SIX PLAYBOOKS', t)
  const themes = ['behavioral psychology', 'onboarding & activation', 'monetization & paywalls',
                  'retention & gamification', 'growth & positioning', 'design craft']
  themes.forEach((name, i) => {
    const y = 60 + i * 30
    g += rrect(tx, y, tw, 23, 110 + i * 7, { stroke: t.text, w: 1.4, amp: .9 })
    g += txt(tx + 11, y + 16, name, { size: 11.5, fill: t.ink })
    g += arrow(716, 181, tx - 6, y + 11, 130 + i * 6, t.muted)
  })
  g += txt(tx, 258, 'each agent reads across all 30 notes', { size: 10.5, fill: t.muted })
  g += arrow(tx + tw / 2, 268, tx + tw / 2, 296, 150, t.muted)
  g += `<rect x="${tx}" y="${304}" width="${tw}" height="42" fill="${t.vision}" fill-opacity="${t.fillOp}"/>`
  g += rrect(tx, 304, tw, 42, 160, { stroke: t.vision, w: 1.9, amp: 1.1 })
  g += txt(tx + 14, 324, 'SKILL.md', { size: 14, fill: t.ink, weight: 700, font: MONO })
  g += txt(tx + 14, 339, '2,378 words — a router', { size: 10.5, fill: t.muted })
  g += txt(tx, 372, 'npx app-growth-design', { size: 11, fill: t.text, weight: 600, font: MONO })

  return svg(W, H, t, g)
}

// ── B: words at each stage, linear bars ──────────────────────────────────
function volume(t) {
  const W = 1000, H = 296
  const rows = [
    { k: 'raw captions', n: 220498, note: 'rolling-window repeats' },
    { k: 'deduped + timestamped', n: 49629, note: '4.4x smaller' },
    { k: '30 notes', n: 118660, note: '1,161 screenshots enter here', hot: true },
    { k: '6 playbooks', n: 55241, note: 'merged across all 30 notes' },
    { k: 'SKILL.md', n: 2378, note: 'a router, under 200 lines' },
  ]
  const x0 = 214, maxW = 430, y0 = 58, rh = 34
  let g = txt(36, 32, 'WORDS AT EACH STAGE', { size: 10, fill: t.muted, weight: 700, ls: 1.4 })
  rows.forEach((r, i) => {
    const y = y0 + i * rh, w = Math.max(3, (r.n / 220498) * maxW)
    const c = r.hot ? t.vision : t.ink
    g += txt(202, y + 13, r.k, { size: 12, fill: t.ink, anchor: 'end', weight: r.hot ? 600 : 400 })
    g += `<rect x="${x0}" y="${y}" width="${f1(w)}" height="18" fill="${c}" fill-opacity="${r.hot ? t.fillOp * 2.2 : t.fillOp * 1.4}"/>`
    g += rline(x0, y, x0 + w, y, 300 + i * 9, { stroke: c, w: 1.5, amp: .8 })
    g += rline(x0, y + 18, x0 + w, y + 18, 340 + i * 9, { stroke: c, w: 1.5, amp: .8 })
    g += rline(x0 + w, y, x0 + w, y + 18, 380 + i * 9, { stroke: c, w: 1.5, amp: .6 })
    g += txt(712, y + 13, r.n.toLocaleString('en-US'), { size: 13, fill: t.ink, font: MONO, anchor: 'end', weight: r.hot ? 600 : 400 })
    g += txt(728, y + 13, r.note, { size: 10.5, fill: r.hot ? t.vision : t.muted, op: r.hot ? 1 : .85 })
  })
  g += rline(x0, y0 - 9, x0, y0 + 4 * rh + 27, 420, { stroke: t.faint, w: 1.3, amp: .6, passes: 1 })
  g += txt(36, 252, 'The only stage where the volume goes up.', { size: 12.5, fill: t.ink, weight: 600 })
  g += txt(36, 270, 'A design channel keeps its meaning on screen — the notes end up bigger than the speech because the frames put it back.', { size: 11, fill: t.muted })
  return svg(W, H, t, g)
}

const out = process.argv[2] || path.dirname(fileURLToPath(import.meta.url))
for (const [name, fn] of [['flow', flow], ['volume', volume]])
  for (const [mode, t] of Object.entries(THEMES)) {
    const p = `${out}/${name}-${mode}.svg`
    fs.writeFileSync(p, fn(t))
    console.log(p, (fs.statSync(p).size / 1024).toFixed(1) + 'KB')
  }
