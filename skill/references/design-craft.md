# Design Craft & UI/UX Principles

Distilled from 24 Tim Gabe teardowns. Every non-obvious claim carries a `[NN]` source marker; see **Sources** at the bottom. Agency-promo segments are excluded.

---

## Core principles

### 1. Craft is arithmetic before it is taste — most "bad design" is a countable problem
The same client screen redesigned at four skill levels differs on five countable checkpoints, evaluated in this order: **copywriting → visuals → colors → fonts → spacing/structure** [30]. The measurable deltas:

| | Beginner | Junior | Mid | Senior |
|---|---|---|---|---|
| Font sizes / weights | 6 / 4 | still failing | improving | **4 / 2** (+ monospace numerals) |
| Measured spacing | 25px / 11px | 53px / 17px | 32px / 16px (first on-grid) | on-grid throughout |
| Score | 0/5 (6 fails) | 2/5 half-passes | 5/5 half-passes | 5/5 full passes |

The fixes are numeric, not aesthetic: subtract ≥2 from your font-size count and ≥2 from your weight count; make every spacing value divisible by 8 (or 4) — 25 becomes 24, 11 becomes 12; budget color **60% neutral / 30% complementary / 10% brand** [30]. Nested corners get their own formula: **outer radius = inner radius + padding** (24px outer, 16px inner, 8px padding) — setting outer = inner produces non-concentric arcs, the classic amateur artifact [12].

### 2. The progression is add → over-correct → over-work → subtract
Beginners reach for gradients, blurs and glows they can't control; juniors over-correct into colorless timidity and 45-layer skeuomorphic shadows; mids can execute anything so they over-decorate; **seniors subtract until only the meaningful elements remain** [30]. Senior-level moves are all deletions: delete any word a nearby heading already established ("Last 10 votes" under a "Voting" heading), shrink labels to one word ("Uncommitted"), flatten gradient bars to flat fills [30]. Same instinct at Apple: **remove everything, then add back strategically**, revealing complexity progressively and hiding secondary actions rather than deleting the capability [18].

### 3. Reserve the brand color for the few things that must be found
Over-saturating with the brand color is self-defeating: everything screams, so nothing gets attention — including what you actually wanted highlighted [30]. The senior version reserves red for exactly three elements (the graph, the rewards icon, the commit dot) and makes the primary button **black** — because a red primary CTA reads as an error state [30]. The same restraint recurs everywhere the note set praises a screen: SolCard's fold has exactly one bright element (the CTA) [12]; Apple Fitness+'s home screen has one saturated color, a lime "Let's Begin" pill [24]; Kraftful's hero has one blue CTA with the Google-auth alternative deliberately quieter [27]; Waze's report sheet uses cyan for "Send" and gray for "Later" [24]. Build palettes from shades and tints of one hue rather than adding new ones (he cites Eric D. Kennedy's article) [30].

### 4. Attention is a budget; every visible choice spends it
High contrast belongs only on elements that drive revenue directly or indirectly; lower contrast on unimportant content deliberately to create breathing room [14]. Hick's Law is the mechanism — more visible choices, slower decisions — so the activation screen deserves more subtraction than any other screen in the product [24]. On the web the effect is measured: across 18,000+ landing pages, **1 CTA converted at 13.5%, 2 at 11.9%, 3 at 10.5%** [27]. Every extra visible option adds decision paralysis [18].

### 5. Design the movie, not the frames
Static UI craft is now table stakes — a senior designer can already produce a good-looking, well-functioning interface, and AI is about to flood the market with more of them. The remaining cheap differentiator is a **memorable experience**: how screens connect, transition and feel in motion. "Treat UI design more like a movie" [30]. Apple's version of this is spatial continuity: it rarely hard-cuts between screens, so the user is *carried* from place to place and builds a mental map of where things live [18].

### 6. Usability is the floor, not the moat — but design alone is not the moat either
Building is commoditized: APIs, no-code and AI mean "useful" is table stakes, so differentiation moves from *what it does* to *how it feels when opened* [26]. Nearly every competitor stops at usability, which is why emotional integration is the stage almost no team does [12]. **But the notes contradict themselves on how far this goes** — see *Contradictions* below. Tim himself concedes winners still need business model, timing and community [26], and elsewhere argues features/UI/aesthetics are *not* why sticky products stick [24], and that Ramp and Brex both had great design and strong engagement — only Ramp's accumulating-intelligence layer made the exit door heavier, and Brex sold to Capital One in Jan 2026 for less than half its peak valuation [13].

### 7. Feedback must resolve emotion, not just state
A green checkmark is information; a character cheering is feedback you *feel* [26]. The four moves: instant emotional feedback, celebrate small wins, use character expressions, add progress animations [26]. Animate **idle** states too, not just event states, so the product feels alive when nothing is happening [26]. Confirm every action with something the user can feel or hear — a tap, a click, a shutter — so the system always signals "registered" [18]. Elastic overscroll bounce is not eye candy; it is the interface's proof-of-life [18]. Treat in-between moments (loading, processing, transitions) as designed surfaces with a job, not gaps [24].

### 8. Physics and familiarity beat instruction
Interactions that mirror real-world physics (weight, momentum, friction, bounce) require nothing to be learned — the gesture feels inevitable rather than taught. Drag-and-drop works for the same reason: grab, move, release is a sequence people already own (pioneered at Xerox PARC in 1973, mass-adopted via the Macintosh) [18]. To change behavior at scale, ship a **subtle persistent visual cue** and let it do the teaching — the iPhone home-indicator line retrained billions of users to swipe home over ~10 years with no tutorial, staged gradually across releases (physical button → software button → pure gesture) [18].

### 9. Consistency is a switching cost, not a paint job
"Design consistency isn't about making things look pretty. It's about creating switching costs" [17]. It's not pixel-parity across devices — it's making behaviors *automatic*: every playlist behaves identically, every recommendation feels familiar, every interaction follows the same logic, so leaving means relearning from zero [17]. Apple's version: a pattern learned once transfers across five devices, producing fluency that is itself lock-in; strict adherence to their own guidelines supplies predictability, and blur/translucency/parallax keep predictability from reading as boring [18]. Keep key actions in the same physical position across screens so users navigate by muscle memory, and break an established pattern only deliberately [18]. Small inconsistencies compound: misaligned radii, overused color shades, unintentional emphasis — they break the world-class feeling and make developers miserable fighting an inconsistent system [12].

### 10. Personality belongs in the core surface, not the edges
The trap is decorating the periphery — a friendly empty state, confetti on first save, a mascot on the loading spinner — while the **core surface** is still a chart, a table, a number row or a long list, identical to every competitor's [04]. Relocate personality into the delivery of the data itself: "sometimes your data is not the product, sometimes the very way you deliver the data is the product" [04]. Carrot Weather puts the character scene and the joke line in the top third and pushes the precipitation chart below the fold, and gives the mascot its own tab-bar destination [04]. Write success copy in character rather than neutrally — Duolingo's "Hide the evidence! You fixed 3 mistakes. Don't tell anyone." beats "Lesson complete" [26].

### 11. Reuse one motif to bind related regions
The same pulsing circle marks both the commit indicator and the current period in the graph, so users connect them instantly [30]. At brand scale: Curera's logotype **is** the live audio waveform on the recording screen, so every use of the product is also a brand impression — the memorable asset in a hyper-competitive AI-notes category can't be a feature [12].

### 12. Copy is a design criterion, and it fails longest
Copywriting is the criterion that keeps failing through junior level [30]. Name the action, not the object: the button said "Earn my tokens" when the action was claiming rewards — label it "Claim" [30]. Ambiguous labels compound ("Commit time" reads as committing *time*) [30]. Sell the outcome, not the spec: "close tickets 3x faster without switching tabs" beats "real-time notifications with Slack & Jira integrations"; Jobs said "1,000 songs in your pocket," not "1 GB" [27]. Zach Yadegari's consumer rules (shown on screen, never narrated): demonstrate value in **3 seconds or less**, write for a **3rd grader**, make buttons **so obvious you can't get lost** [02]. Copy volume is Goldilocks, not minimal — too little leaves objections unanswered, too much causes the same paralysis as too many buttons [27].

### 13. Typography for numbers is its own discipline
Set large numeric values in a **monospace cut** so digits don't jitter as they change, and render the decimal fraction at a smaller step (reuse an existing heading size) so a growing number doesn't collide with neighbors — big monospace "1,412" plus a smaller gray ".51" [30]. Space deliberately *inside* elements as well as between them [30].

### 14. Design the peak and the end; the middle is noise
Memory compresses an experience into its most intense moment and its last moment (Kahneman's peak–end rule) [19]. So friction in the middle is survivable; a flat peak or a flat ending is not. **Peak first, end second** — the peak belongs at the point of highest user investment, the ending is for closure, not the wow [19]. Disney accepts 90-minute queues and $10 fries and over-invests in the high points and the exit (fireworks, timed music) — ~70% of visitors return [19]. Negative moments are equally memorable, so an un-audited error state or dead-air loading screen can become the peak users actually remember [19].

### 15. Deliver rewards as gifts, not receipts
Dopamine is an anticipation chemical, so the same result gains perceived value from a three-stage ceremony: **anticipation → weighted reveal → afterglow** [10]. Most apps ship stage two only, and often poorly. Delivering N results simultaneously produces one dopamine event; revealing them one at a time produces N [10]. Apple engineers box lids to descend over **2–4 seconds** on vacuum resistance — three senses recruited before the product is visible [10]. Evidence this is behavior, not polish: Robinhood shipped trade confetti in 2016, removed it in March 2021, and paid a **$7.5M Massachusetts "gamification" settlement in Jan 2024** with a consent order prohibiting celebratory imagery tied to trading frequency [10].

### 16. Friction has a sweet spot, not a floor
"Remove all friction" is directionally right but a simplification — too much friction and users give up; too little and they're never guided to the value, so they also give up [15]. Onboarding is just the first place it bites; the principle applies across the whole app. Concrete resolution: put the *value* in the first 60 seconds [22] but keep the disclosure that earns it — a story-style carousel with the auth block pinned below delivers the full value prop **without adding a step**, and gets the user to the core setup action within the first ~5 screens [15]. For data-dense screens, tuck secondary data behind expandable tooltips rather than deleting it or dumping it all [15].

### 17. First impressions are visual, fast, and expensive to get wrong
Impressions form in ~50ms and trust decisions land in under 3 seconds, mostly on visual grounds; a bad first impression is claimed to cost 20–30% of new users immediately [15] (also framed as a "50ms trust test" [14] — the underlying figure is unsourced in both). The failure pattern is always the same five things, so the fix is the same five levers: **clean hierarchy, generous spacing, professional imagery that supports the headline, balanced typography, outcome-focused copy** [15]. Apply them to App Store screenshots too — treat screenshots as part of the app design, not a marketing afterthought [15].

### 18. When the interface is only a means to an end, delete it
Ask per flow, not per product: **is the interface the experience itself, or just a means to an end?** [20] Plot each flow on utility-vs-experience × repetitive-vs-nuanced. Utility + repetitive is the "AI danger zone" — a rebuild-from-scratch candidate, not a polish candidate (Premiere Pro's trim/sync/silence-removal labour). Experience + nuanced (games) is low-risk, and there designing for delight matters *more* [20]. Exceptions where invisible UI backfires: privacy/social context (a bank balance read aloud in a co-working space) and information density (investment dashboards needing side-by-side scanning) — keep the UI visible and layer outcome automation on top [20]. The reverse move also exists: **Trojan Horse** — wrap your most sophisticated tech in an interface users already know. Discover Weekly is just an ordinary playlist; the recommendation stack never surfaces as UI [17].

### 19. The last 20% is judgment, and it is where traction lives
AI gets any design task ~80% of the way in minutes; the remaining 20% "actually builds traction" and doesn't come from a prompt — which is why AI-assembled products "feel a little off and don't go anywhere" [25]. A generic dataset produces a generic solution, and your users are specific people. The triage differs per bucket, not per company [25]:

| Task | AI tools | Human still needed for |
|---|---|---|
| Marketing (social, ads) | ChatGPT, Midjourney, Figma | "Barely needed, just some finetuning" |
| Websites (landing pages) | Relume, Figma Sites, Lovable | Orchestrating copy + assets; micro-interactions; animations |
| UI flows & product | Google Stitch, Lovable | Mapping to real pain points; the "why" at every step; systems thinking |

The friction signals AI can't see: **misclicks, hesitation where confidence should be, delight showing up where you didn't expect it** [25].

### 20. Niche depth means changing the interface shape, not the theme
A productivity app for ADHD users shouldn't be "Notion with a different font" — it should be colored illustrated blocks on a vertical timeline, **sized by task duration**, with icons replacing text strings [02]. Size UI objects by the underlying variable so the layout carries information without reading [02]. Replace text identifiers with pictures when your users' scarce resource is attention [02]. Incumbents are structurally unable to follow: a mass-market leader can't ship ADHD-specific illustrated time blocks without breaking its broad audience [02].

---

## Playbooks

### A. The five-criterion screen audit (grade any screen in ~10 minutes) [30]
Run in this fixed order, scoring each fail / half-pass / full-pass:
1. **Copywriting** — is every label short and does it name the actual *action*? Delete any word a nearby heading already established.
2. **Visuals** — do graphics communicate or just decorate? When unsure between flashy and simple, ship simple.
3. **Colors** — desaturate the screen mentally: is attention distributed, or is everything shouting? Check against 60/30/10.
4. **Fonts** — count distinct sizes and distinct weights. Target 4 / 2.
5. **Spacing & structure** — measure the gaps. Every value divisible by 8 or 4.
*Technique worth stealing:* to audit a single variable, kill color — desaturate the whole screen to gray and highlight each distinct type size in a swatch so you can literally count them [30].

### B. The subtraction pass (turn a mid-level screen into a senior one) [30], [12], [18]
1. Delete every word already implied by a heading above it.
2. Cut font sizes by ≥2 and weights by ≥2 → 4 sizes, 2 weights.
3. Snap all numeric values to the 8pt grid; fix internal padding, not just gaps.
4. Fix nested radii: outer = inner + padding.
5. Flatten decorative gradients to flat fills; keep gradient only where it means something.
6. Reserve the brand color for 2–4 elements that must be *found*; recolor the primary button neutral if brand = red/error-adjacent.
7. Set big numbers in monospace; drop decimals a size step.
8. Pick one repeating motif to link related regions.
9. Hide secondary actions; reveal complexity progressively.
10. Audit top tasks against the ~3-tap heuristic (camera = 1 swipe; silence a call = 1 press; pay = double-click + glance) [18].

### C. The six-stage project pipeline [12]
`onboarding → discovery → UX → UI → emotional integration → delivery`. Each stage exists to kill a class of risk before it becomes expensive rework.
1. **Onboarding** — day-one kit: named client Slack channel, file access, Drive folders, a Notion client portal (credit: John D. Saunders), welcome checklist, discovery + strategy doc. One source of truth from day one.
2. **Discovery** — avoid both extremes of the "agency fork" (straight to pixels / months of research). Balanced middle: build a **references board** of full-page competitor and adjacent captures grouped by type (not Pinterest fragments); **download and actually use** direct and indirect competitors' apps; run focused research to de-risk *key flows only*. Send a pre-kickoff questionnaire that states "estimated time to complete is 45–90 minutes" and explicitly says rough notes are fine.
3. **UX** — map core journeys and wire-flows for the *entire* app but weight depth by flow importance (onboarding ≫ settings). Lo-fi for buy-in, hi-fi wireframes for priority flows only. **Pin emotional moments onto specific screens at the wireframe stage**, with an orange legend on the flow board, so they're budgeted rather than bolted on. Prototype only interactions that need validating.
4. **UI** — go broad (moodboards, multiple concept directions) then deep (hi-fi + reusable patterns). Enforce an airtight QA protocol: **every visual checkbox on every screen must pass before you move to the next screen**; run QA as a live multi-person in-file activity (Figma comments/cursors); stress-test microcopy through to precise opacities; systemize component by component until the library is complete.
5. **Emotional integration** — return to the pinned moments, **select only the ones that matter most for the business goal**, build them as lightweight and often interactive animation. Governing question: *what feeling, at what moment of the journey, to incentivize return?*
6. **Delivery** — clear remaining edge cases, states and accessibility gaps; second full-project QA pass; package the source file with specs and tidied components.

### D. Peak & end design (5 steps) [19]
1. **Map the whole journey** on a board (FigJam or physical stickies) — every step from sign-up to "done." Annotate where users slow down, where stress peaks, where the quiet gaps are. Keep it a living document.
2. **Pick exactly ONE peak** — not several. Best candidates: right after a core task completes, at a milestone, or at a point of heavy user investment. The intervention can be small: a badge, a sparkle, an animation, or surprising copy that beats expectation.
3. **Design an ending** — most apps just stop. Use a check mark, a summary card, a progress-affirming line ("you showed up today — that's huge"). It needs intent, not budget.
4. **Vacuum the negative moments** — audit wait screens, error states and long forms with one question: *where might someone feel stuck or uncertain?* Repair with uplifting microcopy, proactive help, or a delay repurposed as a useful moment.
5. **Run variations on the peak** — test timing, emoji vs. icon, animated vs. static. Watch for drop-off, and treat **users lingering longer than the task requires** as the signal a moment is working.

### E. Emotional-moment targeting on a small budget [14], [12]
You don't need Duolingo's multi-million-dollar motion budget. Instead of spraying emotion everywhere: (1) pinpoint the flow moments where emotion moves a business metric, (2) design strategic moments only there. Three placements the notes validate: the app's **single most-used surface** (frequency compounds the brand effect) [14]; the **first-run experience** when the audience is trust-sensitive (web3, fintech, crypto — front-load reward/generosity/competence before asking for anything) [14], [12]; and the **rare/high-emotion outcome** (rarity communicated by ambient color and light, not a badge) [10], [07].

### F. Micro-friction sweep [16]
1. Map the journey from sign-up to **first success moment**.
2. Mark every point where a user could pause, get confused, or feel friction.
3. Use usage data to find frictions users are already routing around by hand — Netflix's tell was **15% of viewers manually fast-forwarding intros**.
4. Find your "Skip Intro" equivalent: autofill with smart defaults, one-click actions for common tasks, prepopulated dashboards so nobody lands on an empty state.
5. Fix the **top 1–3 only**, not all of them.

### G. First-impression rebuild (site + App Store screenshots) [15], [27]
Run the five levers (hierarchy / spacing / imagery / typography / outcome copy) [15], then build each page section to the 5-part stack: **outcome-or-pain headline → subhead adding a *new* angle → contextual product visual → proof points → one CTA** [27]. Put proof directly adjacent to the CTA, where hesitation happens [27]. Run the fast-scroll test on every section: will a scanner catch *what it is, why it helps, what to do next*? If not, the fix is delivery, not volume [27]. Build hierarchy *inside* a single sentence — benefit clause bright, supporting clause dimmed [15].

### H. The "why" review protocol [25]
Zero-tooling design review learned from a senior designer at Spotify: look at the prototype in silence, then ask "why" — repeatedly, per screen and per element. A decision you can't defend with a reason is a decision AI could have made, and probably did. Scales directly to reviewing AI-generated work.

### I. Microcopy repair with a screenshot [30]
Screenshot the UI, paste into ChatGPT, add project context, and explicitly instruct it to return copy that is **clear but short**. An outside reader catches labels that only made sense to the designer.

### J. Visual research before pixels (Mobin workflow) [29]
1. Filter by specific app, user flow, or UI element instead of creating dummy accounts and screenshotting by hand.
2. Text-search *inside* screens when you need an exact label or string.
3. Save to named collections **and use comments to record why** you saved it — an unannotated screenshot is a weak asset.
4. One-click copy into Figma if you want a single workspace.
Library: 1,000+ apps. Stated boundary: it's for websites and apps, not general research.

### K. Category-assumption audit (when you need a structurally different interface) [02]
1. Write down the one structural assumption every app in your category shares — the *shape of the primary object* (row, card, feed, timer, search field).
2. Ask whether that assumption is actually true.
3. Design the version that assumes the opposite, and build for who the user actually is.
Diagnostic: count the steps in your competitor's primary action, then design for one. MyFitnessPal: add food → search → scroll → select → confirm (4–5 steps). Cal AI: point and shoot. Test of success: **correction is the exception, not the entry path** — if the user still confirms every field, you shipped a feature, not a new primitive.

---

## Case bank

**UMA voting/rewards screen (agency client) — the four-level teardown** [30]. One screen, four redesigns, IA held constant so every difference is attributable to craft. Beginner: pink page, red everywhere, 6 font sizes / 4 weights, 25px & 11px gaps, button labeled "Earn my tokens." Senior: flat red bars on gray inactives, label cut to "UMA Rewards," number split into big monospace "1,412" + small gray ".51", CTA a compact **black** "Claim" pill, "Commit 14h 41m 21s," card label just "Uncommitted." 4 sizes / 2 weights.

**Phantom** [26], [30]. Mid-2023 brand refresh well past the logo: animated ghost mascot, playful wallet-creation animation. Create Username screen — 3-segment progress bar, reassurance subcopy ("Usernames can be changed later on"), input **pre-filled with a valid generated handle** (BriskTree5900), inline green "Username available," one purple Continue. No jargon anywhere. Result: **#2 in US App Store Utilities, above WhatsApp and Instagram**. CEO Brandon Millman: "polish matters. We're a design-led company that takes time to craft polished products." Also cited as an exemplar of designing the *movie* — the onboarding completion screen ("You're all done!") with color splashing out from behind the CTA mid-animation [30].

**Duolingo** [26], [12], [14]. Shipped a full character animation system in **2022** — facial reactions, lip-sync to audio, idle animations so characters stay alive when the user does nothing. Built in **Rive** [12]. Lesson-complete hierarchy: emotion first (characters + spark bursts) → personality second ("Hide the evidence! You fixed 3 mistakes. Don't tell anyone.") → metrics third (COMBO 07 / GOOD 85% / SPEEDY 1:20) → action last (CLAIM XP); XP sparks physically travel into the counter, so the reward is *watched*, not read. **DAU 14.2M → 34M+ within two years; paid subscribers more than doubled** — Tim flags the confound himself (new languages, curriculum, marketing ran concurrently). Streak counter rendered as a bare flame + "126" with nothing competing [14].

**Revolut** [26]. Design investment tracked deliberately alongside the move upmarket into premium tiers. Mechanics: rich transitional first-run instead of plain signup; charts you scrub with a finger where the graph answers with a glowing touch node and min/max labeled at the edge instead of a gridded axis; card views rendered as a 3D object that flips, rotates and catches light. "You don't just look at your spending data, you feel it." Marketing footer: "JOIN THE 50+ MILLION USING REVOLUT" — confident type, one CTA, compliance fine print below. No outcome metric offered — this case is qualitative.

**Apple — the four levers** [18]. (1) *Gesture physics*: rubber-band overscroll makes the brain classify content as an object with mass. (2) *Subconscious cues*: the home-indicator line retrained **billions of users over ~10 years with zero tutorials**, staged across releases. (3) *Micro-feedback*: camera shutter, passcode tap, Taptic click on a trackpad that doesn't physically depress. (4) *Math*: squircles (continuous curves, now a Figma corner-smoothing setting) as one of the invisible gaps between a "$1,000 masterpiece and a $200 knockoff." HIG framing: Microsoft's guide sells **features**, Apple's sells **human nature**. Adoption stat used as the payoff: **iOS 17 at 77% within 6 months vs Android 14 at 13% after a year** (causation asserted, not shown — OEM update pipelines explain much of the gap).

**Apple packaging** [10]. A room built specifically for opening boxes; lid tuned to descend over **2–4 seconds** on vacuum resistance, recruiting weight → sound → sight in sequence. Diagnostic: "when packaging itself becomes collectible, the gift framework is working."

**Carrot Weather** [04]. Solo dev Brian Mueller, **2013**, a *paid* weather app beating free pre-installed Apple Weather on effectively the same forecast data. The sarcastic character's reaction *is* the forecast — "The sun is leaving because he doesn't love you anymore" occupies the hierarchy slot normally given to a summary label; the precipitation chart is pushed below the fold; the mascot gets its own tab-bar destination. Palette themes per weather condition. **2021 Apple Design Award for Interaction**; run solo for 10+ years.

**Forest** [04]. Session screen contains only a tree, a timer and a tag — and **the tree is the only thing animating**, breathing slowly as minutes pass; the timer is deliberately secondary and "Give up" is a small low-contrast *link*, not a button. Leave the app and the tree dies. **2M+ real trees planted**; 2,500 virtual coins → one real tree via Trees for the Future.

**Day One** [04]. Paid journaling against two free pre-installed Apple apps. Conceded the data layer (text), competed on the envelope: auto-captured weather and location, photos inline and text-wrapped magazine-style, and **four navigation modes over identical content** — List / Calendar (a month grid where dates are replaced by photo thumbnails) / Media (mosaic with All/Photo/Video/Audio/PDF chips) / Map (entries pinned along travelled routes). **2014 Apple Design Award** (same year as Monument Valley); **4.8★ from 116k+ ratings**; still shipping monthly 12 years on. The Moleskine test: an IKEA pad and a Moleskine hold the same text — name your elastic band, ribbon, back pocket and paper weight.

**Tiimo** [02]. Refused the "task = text row" primitive: colored illustrated blocks on a vertical timeline, **sized by task duration**, thousands of custom icons so users pick pictures instead of reading strings, and time-of-day grouping (ANYTIME / MORNING / DAY / EVENING) instead of due-date sorting. The "Choose visuals" sheet — emoji preview, color-wheel/emoji/camera segmented control, 5-column pastel swatch grid — *is* the differentiator: task creation is picture-and-color selection. Apple 2025 iPhone App of the Year (narration says won; the on-screen Apple text lists it among finalists with BandLab and Ladder — verify before repeating).

**Cal AI** [02]. **The camera is the home page**: full-black screen, viewfinder brackets, one white shutter, four mode pills, zero fields. AI writes the log entry; correction is the exception. Founder Zach Yadegari **sold Cal AI at $40M ARR at age 18**; his next company hit **$300K MRR**. Prior art for the same pattern: **PictureThis (2017)** — camera fills the screen, "Plants found 1 / Identifying 57%" as an overlay chip, result docked at the bottom.

**MacroFactor** [02]. What "no shame" looks like as a design decision: a thin blue arc (564 Remaining / 656 Consumed / 1220 Target), three hairline macro bars, two sparkline cards — **no streak counter, no red alert state, no exclamation marks anywhere. The absence is the design.** The algorithm assumes users miss targets and back-calculates real metabolism from ~3-week trend-smoothed weight. Bootstrapped; $72/year; 500,000 users; 4.8 rating.

**Ladder** [02]. The whole synchronized-ritual pattern lives in one component on the primary screen: a **"TEAMMATES WORKING OUT ●"** row of neon-yellow initial avatars with "Double tap or hold avatar to send cheers!" — presence is ambient and always-on, and the social action is one tap away, rather than a leaderboard you navigate to. The reward for the first workout is *access to the group* (Team Chat unlock), not points. Ladder Wall: 4,944 completions. **500% growth in 2023**; 2025 iPhone App of the Year finalist.

**Raycast** [28]. **<40 people, $100M+ valuation.** One oversized search bar as the single entry point, physically front and center because every session begins there. Interaction model deliberately rigid: **open, type, act** — no layout customization, keyboard primary, mouse use pushed back. Near-zero default UI with progressive disclosure. Shipped with **no formal onboarding at all** early on; the current command bar shows a walkthrough row at "18% completed." Feature test: *does this unlock something else already in the product, or does it just sit there?* Single-principle filter: if it didn't increase speed, reduce cognitive load, or fit keyboard-driven workflows, it didn't ship. Beat Alfred not by out-featuring it but on **clarity — fewer options, better defaults.**

**Granola** [05]. Two-screen onboarding. Screen 1: one card, one headline, three sign-in rows with the recently-used one flagged, no email/password form. Screen 2: "Allow Granola to transcribe your meetings," body copy that pre-empts the objection ("**No creepy bots join your meeting**"), and **exactly one active button** (Enable Microphone) with the secondary and Continue deliberately disabled — so there is precisely one thing to do. After that you're in the product.

**Airbnb** [19]. Baseline craft everywhere (animated tab-bar icon set, friendly openings), but the deliberate **peak is at finding the right listing** — micro-animations plus listing-specific value tags so the choice feels confident at the moment of maximum decision anxiety. The **end** is the reservation confirmation, closed with a 3D purchase animation. Home-feed hierarchy: image → "Guest favourite" trust chip → price + rating, with a floating "Prices include all fees" tooltip. Named alongside Phantom and Duolingo as apps that went the extra mile on experience design [30].

**Ahead (Apple Design Award)** [19]. Rejected the wellness-category default of moral pressure and habit dashboards. Quiet splash sets tone instantly; questionnaire paced deliberately; the **peak is the personalized brief visibly constructing itself in front of you** rather than just appearing — engineered "this was made for me" at the moment of maximum invested effort. The **end** is a gentle nudge to return tomorrow. Even the ATT permission prompt is pre-framed with a mascot and benefit copy ("so we can help you stay focused") — care, not compliance.

**Uber** [19]. No skeuomorphic flourishes, but the best ending in the set: phone vibrates post-ride, then a tight closing flow with a **double reward** — rate the driver and tip. Personalized ("You already tipped $4.61 for Hector"), acknowledges prior generosity, tipping stacked *above* rating, and entirely optional. The rider's real peak already happened offline (arriving), so the app supplies **completion**, not a manufactured peak.

**Apple Fitness+** [24]. First open does not show 30 workouts. One photographic hero card ("Meditation with Jonelle · 5min · Sound") and one full-width lime "Let's Begin" pill — the only saturated color on screen; everything else clipped below the fold. The reduction continues *after* activation: the session player has three controls (−10s, pause, +10s).

**Waze** [24]. Fitts's Law made literal: the report sheet is a 3-across grid of oversized circular illustrated tiles with one-word labels (Traffic, Police, Accident, Hazard, Closure, Blocked lane) — huge targets, zero reading load. Confirmation screen puts both pills in the thumb zone with primary/secondary carried by color (cyan Send vs gray Later). Design brief: "design for distraction / convey priority with size / proximity beats perfection."

**Headspace** [24]. Emotional anchoring set at onboarding: amber top half with a smiling sun character over dark navy, one blue Continue pill — the emotional payload (color, character, curve) occupies more pixels than the copy. The brand's emotional system extends into content browsing (loud, distinct per-show artwork). "Invested millions" (unsourced).

**Discord** [24]. Show, don't tell: green presence dots plus online/member counters are the **smallest type on each card but the most repeated element** — proof is ambient, not announced. On-screen: Marvel Rivals ~928K online / 4.56M members; Midjourney ~860K / 21.2M; Genshin Impact ~468K / 2.25M.

**Perplexity** [24]. Near-empty black canvas with one small glyph — a loader animation and reactive voice dots carry the entire interaction. Motion, not layout, does the reassurance work; the wait itself becomes a positive experience.

**Stompers** [24]. A 7-day M–S circle row where today's slot is ringed green and marked **"?"** — a visibly unresolved loop (Zeigarnik). Almost the entire screen is progress state; nothing on it is a settings or content surface.

**Netflix** [16]. **Skip Intro**: usage data showed 15% of viewers manually fast-forwarding; they built AI intro-detection across the global catalog and shipped one button — **136 million presses per day (2022), 195 years of cumulative user time saved per day**. Sessions lengthened without changing content at all. **Micro-genres**: 1,300+ of them, and the row explainer exposes the *reasoning* ("Your taste preferences created this row") — which is what converts an algorithm into intimacy. 80% of what people watch comes from recommendations. **"97% Match"** instead of a star rating, because a percentage is personal to *you* and a star rating is a crowd average.

**Spotify** [17]. **Discover Weekly** (July 2015) delivers extreme algorithmic complexity through an ordinary playlist — same play buttons, same interactions; the inputs are deliberately never shown as a dashboard. 100B+ tracks streamed since launch; copied afterward by Apple, YouTube and Amazon Music. **Wrapped** converts private behavior into public identity performance: ~60M stories shared in 2021, 156M users engaged the following year, +461% tweet volume. The rule it generalizes to: replace count-based milestones ("You completed 25 tasks") with **character-based** ones ("You're a hardworking night owl who does their best work after 9pm").

**Typeform** [22]. Long templates show a hairline progress bar and **no "3 of 14" counter** — revealing a high step count before value has landed makes the brain price the effort and bail. One question per screen, wide blue OK.

**Speechify** [22]. "Select your age": back chevron, plain left-aligned title, seven full-width rounded rows in one column, the selected row given a faint blue fill and border. No illustration, no progress bar, no explanatory subcopy, no CTA — **hierarchy is entirely in the selection state.** Shows how cheap a personalization step can be visually while still buying ownership.

**SolCard** [12], [15]. Near-black fold with **exactly one bright element** (the white "Get the card" CTA) and a photoreal card over its mirrored reflection. Marketing section: three equal cards, one mono icon each, two-tone sentence hierarchy (benefit bright / supporting clause dimmed), each card carrying rendered real UI rather than stock art. Onboarding is an **Instagram-story-style carousel** — segmented progress bars top, illustration + one benefit headline in the upper two-thirds, and an identical fixed auth block (Continue with Google / Apple / Other options) on every slide, so value is communicated without costing a step; card setup lands within the first 5 screens.

**Curera / "Nila Health"** [12]. The logotype **is** the core interaction: four orange rounded pills of varying heights sit dead center of an otherwise white recording screen, simultaneously the brand mark and a live audio waveform, above pause/stop and a `+00:00:37` timer. In a hyper-competitive AI-notes niche, every use of the product is a brand impression.

**Freecash** [12], [14]. The clearest loss-aversion stack in the set, five elements top to bottom above the fold: red threat headline ("Don't lose your 10-day streak!") → 3D faceted diamond with the streak number embossed → the dollar amount at risk (up to $1,000 this week) → **one lime-green CTA naming the exact game to play** → a live countdown (9h 52m 32s). Red carries the threat, green carries the only exit. The reward-case modal hides the payout amount behind a CS:GO-style spinner with a bright green "Open Case" as the loudest element on screen [10]. #2 on the App Store at time of filming; $100M+ paid out (App Store listing).

**Volcano** [12]. Concentrated the entire emotional budget on the single moment with the most eyeballs (a launch campaign): the whole fold is one sustained metaphor — "Perps ignited on SEI network" over a photoreal erupting volcano whose lava washes orange to both page edges. The brand name *is* the artwork *is* the emotional beat, not a decorated product screenshot.

**Kraftful** [27]. The 5-part section anatomy in one hero: outcome headline → subhead adding a new angle plus an objection-handler ("analyzed in minutes, **no hallucinations**") → product visual → proof adjacent to the CTA (Netflix/Dropbox/Meta/Google logos, five stars, "50,000+ product teams"). The email field + saturated blue "Start free plan" is the only colored element; "Continue with Google" is a deliberately quieter alternate path — tiered CTAs rendered in **contrast**, not in count.

**Unbounce landing-page study** [27]. 18,000+ pages: **1 CTA → 13.5%, 2 CTAs → 11.9%, 3 CTAs → 10.5%.** The empirical backing for one-CTA-per-page. Paired with the Iyengar & Lepper jam study (3% purchase at 24 options vs 30% at 6).

**Robinhood** [10]. Trade-completion confetti shipped 2016, removed March 2021 — not because users complained, but because Massachusetts regulators concluded it trivialized investing and nudged trading frequency. **$7.5M settlement, January 2024**, with a consent order prohibiting celebratory imagery tied to trading frequency. "A design element powerful enough to require a specific law against is not decorative."

**Tinder** [21]. Converts a flat "You have a new match" notification into a full-screen celebration — confetti, animation, exploding hearts, a modal that seizes the whole screen. Second-order effect: these became the most screenshotted app screens of the 2010s, so users did free viral marketing. The Super Like paywall shows textbook decoy weighting: the middle tier (25 for $1.20 ea, "SAVE 25%") is enlarged and highlighted blue while 5 and 60 are visually smaller and grayed; the decline is a low-contrast gray "NO THANKS" link.

**Game Blazers** [10]. Card-pack opening built as an explicit three-stage sequence, with cards revealed **one at a time** (each reveal resets the anticipation cycle) and **rarity communicated by ambient color and light, not a badge** — the whole background floods magenta on a rare pull instead of purple.

**Ramp vs Brex** [13]. The limiting case for design-as-moat: both had great design and strong engagement; only Ramp layered accumulating per-user intelligence on top. Brex was acquired by Capital One in **January 2026 for less than half its peak valuation.** "Great design got users in the door for both, but only Ramp made the exit door heavier."

**The Browser Company / Arc → Dia; Intercom → Fin** [20]. Rather than stapling AI onto a beloved but structurally old interface, The Browser Company publicly killed Arc and rebuilt around answers; Dia's nav uses **outcome verbs as navigation** (Write · Learn · Plan · Shop · Privacy) and its headline sells a cognitive outcome, not a browser feature. Intercom paused its roadmap within a week of ChatGPT's launch (per CPO Paul Adams) and built Fin; the widget's hierarchy puts the resolution and its cited source at the top and demotes human escalation to a small composer at the bottom. Fin is priced **per resolved ticket** and is Intercom's fastest-growing product ever.

**Tooling worth naming** [12], [29], [25], [19], [30]. **Rive** — lightweight, interactive, production-grade animation; one rigged character driven through multiple states, "the same tool Duolingo uses"; also a rapidly-rising paid skill (Contra flags "Rive Expert" credentials). **Mobin** — 1,000+ app screen library, filter by app/flow/element, text search inside screens, annotated collections, one-click copy to Figma. **Figma** — corner smoothing for squircles; multiplayer comments as the QA surface. **FigJam** — journey mapping as a left-to-right sticky sequence with a question column. **ChatGPT** — microcopy repair from a UI screenshot. **Lovable / Google Stitch / Relume / Figma Sites** — the ~80% generation layer.

---

## Anti-patterns

**Craft-level**
- **Flashy gradients, blurs and glows you can't control.** Beginners reach for the technique before the skill; if in doubt, simplify [30].
- **Over-saturating with the brand color.** Everything screams, so nothing gets attention — including the elements you wanted highlighted [30].
- **Six font sizes and four weights.** Explicitly called impossible to make a great UI with [30].
- **Arbitrary spacing values (25px, 11px, 53px, 17px).** Random numbers signal no system and read as amateur even when nothing is visibly broken [30].
- **Setting outer radius = inner radius.** Produces non-concentric nested corners [12].
- **Default rounded corners instead of continuous/squircle curves.** Cheap-feeling geometry is one of the invisible signals separating premium from knockoff [18].
- **A primary button in the same red used for error/alert semantics** — it reads as an error state [30].
- **Over-correcting into colorlessness.** The junior trap: so cautious with color the UI turns dull. Restraint is a balance, not an absence [30].
- **Skeuomorphic shadow stacks ("45 layers of shadows")** — treating a trend as mandatory [30].
- **Over-working the visuals.** The mid-level regression to beginner add-and-add behavior, disguised by better execution [30].
- **Repeating words a nearby heading already established.** Pure clutter and cognitive load at zero information gain [30].
- **Ambiguous labels.** "Commit time" reads as committing *time* [30].
- **Copying trendy designs without understanding them.** In the "AI slop" era everything looks the same; borrowed aesthetics don't transfer the reasoning behind them [14].

**Process-level**
- **Jumping straight to visuals.** You get attractive UI that misses real pain points, and you pay in rework and churn [12], [14].
- **Months of open-ended research.** You burn runway and still learn it doesn't work in practice [12]. (Skipping research entirely is the third and worst variant.)
- **Tolerating small visual inconsistencies.** They compound, break the world-class feeling, and make developers fight the design system [12].
- **Skipping the final cleanup pass.** "Small cracks turn into bigger problems after handoff" [12].
- **Shipping the AI-generated 80% and expecting traction.** It's why products "feel a little off and don't go anywhere" [25].
- **One-shot prompting a product flow.** A generic dataset returns a generic solution; your users' problems are not generic [25].
- **Treating "it looks kind of nice but isn't converting" as a visual-polish problem** — that's the signature of the missing last 20%, i.e. judgment [25].

**Interaction-level**
- **Telling instead of showing.** Tutorials and coach marks to explain a gesture; the home indicator proves a well-placed visual cue does it silently [18]. Slack's old first-run — a green coach-mark tour over an empty canvas — is the canonical bad example [05].
- **Big-bang UX overhauls.** Changing everything at once outruns user readiness; Apple could have killed the home button in iOS 1 and deliberately didn't [18].
- **Accidental pattern breaks.** Inconsistency destroys the muscle memory and mental map you spent releases building [18].
- **Treating micro-interactions as eye candy.** Without them, taps feel unacknowledged [18]. In high-stakes categories (finance, crypto, health) that's exactly where trust is won or lost [26].
- **Static, unacknowledged waits.** If the app doesn't visibly react, the loop never closes and the wait reads as dead time [24].
- **Piling on visible options / dumping the full catalog on first open.** More options, slower decisions, dead activation moment [18], [24].
- **Over-gamifying: "don't show 20 loops on one screen."** Stacking progress mechanics reintroduces the Hick's Law problem onboarding was supposed to solve [24]. He gives no heuristic for how many are safe.
- **Effects that shout.** Delight should be felt in aggregate, not noticed individually [26].
- **Removing all friction on principle.** Over-stripped onboarding confuses users and they quit exactly like over-long onboarding does [15].
- **Showing every data point to "reduce friction."** Overwhelm *is* friction [15].
- **Revealing a high step count before value has landed** — "12 steps" makes the brain price the effort and bail [22].
- **Blanket-applying invisible/voice UI.** Reading a bank balance aloud in a co-working space, or collapsing an investment dashboard into one answer, destroys value [20].
- **Building a net-new interface for your AI.** A separate AI inbox or AI search page adds learning cost and kills the invisibility [17]. Padding AI features onto a legacy interface is "the wrong approach entirely" — a facelift inside a dying paradigm [20].
- **Making the technology the hero.** The better your tech, the stronger the urge to show it off; if users notice the algorithm, you built the wrong wrapper [17].
- **Forcing users to train your model.** Pandora-style deliberate thumbs-up/down turned discovery into homework [17].

**Strategy-level**
- **Stopping at static screens.** The senior ceiling; in an AI-saturated market, static competence no longer differentiates [30].
- **Stopping at usability.** Every competitor does that, and it no longer differentiates [12], [26].
- **Stopping at functional.** A product that solves the problem but creates no attachment loses the user to any competitor's Black Friday sale [15].
- **Bolting personality onto the edges.** Cute empty states, confetti on first save, mascots on loading spinners — the core surface is unchanged, so you paid for personality and received no differentiation [04].
- **Niche-washing a mass-market interface.** New font and color on the category-leader UI. The niche's whole advantage is that the leader *can't* restructure; you waste it by copying their structure [02].
- **Shipping the numbers as the headline** when the numbers are identical to what a free incumbent gives away [04].
- **Out-featuring an incumbent.** Nobody raves about the app with the most settings; compete on clarity and defaults [28]. In crowded markets people switch on feelings, not feature lists [17].
- **Treating consistency as a nice-to-have visual concern.** It's the moat, not the paint [17].
- **Fearing that sharp opinions cost you users.** They do cost you some — that's the mechanism that produces believers [28].
- **Copying the mechanism instead of the principle.** Cargo-culting Peloton's celebrity instructors misses that the asset is the emotional hit of recognition, not the instructor [03].
- **Fancy animation for its own sake.** Emotional moments must be chosen by business goal or they don't touch the bottom line [12].
- **Designing around the screen you already have** (asking how to make the timeline easier instead of whether the timeline should exist) [20].

---

## Decision guide

**Craft triage**
- **IF a screen "looks off" but nothing is visibly broken** → count font sizes and weights, then measure two gaps. Random numbers and >4 sizes / >2 weights are almost always the cause [30].
- **IF everything on screen feels equally important** → you have a color-budget problem, not a layout problem. Re-allocate to 60/30/10 and reserve brand color for 2–4 must-find elements [30].
- **IF your brand color is red, orange, or otherwise error-adjacent** → make the primary button neutral (black/white) and let the brand color mark meaning instead [30].
- **IF a number on screen will grow or change frequently** → set it in a monospace cut and drop the decimals a size step so the layout doesn't break [30].
- **IF you have nested rounded containers** → outer radius = inner radius + padding, never outer = inner [12].
- **IF you're choosing between a flashy and a simple treatment and unsure** → ship simple; a clear graph beats a fancy graph the user must decode [30].
- **IF you have a design system already** → break an established pattern only deliberately; users now expect it everywhere [18].

**Where to spend effort**
- **IF you can only fix one thing in the whole journey** → fix the peak, then the ending. The middle is what memory discards [19].
- **IF you have found several candidate "magical moments"** → pick exactly ONE peak, and place it at the point of highest user investment, not at the exit [19].
- **IF the user's real peak happens outside your product** (Uber arriving, a workout finishing) → don't manufacture a fake peak; supply *completion* instead — haptic + one optional, skippable two-part action [19].
- **IF you have a fixed emotional-design budget** → spend it on the app's single most-used surface (frequency compounds) [14], or on the first-run experience if the audience is trust-sensitive [12], [26].
- **IF the audience is trust-sensitive (crypto, fintech, health, insurance)** → budget motion and transitions as *product scope*, not post-launch polish; every micro-interaction is a trust signal [26]. Front-load reward/generosity/competence in the first three screens before asking for anything [12].
- **IF you can't afford a motion studio** → that's not a reason to skip the emotional layer; it's a reason to target 1–2 moments instead of spraying [14].
- **IF you're mapping UX for the whole app** → cover every flow at low fidelity but weight depth by importance; onboarding gets deep work, settings doesn't [12].

**Friction and onboarding**
- **IF users bounce in the first session** → check whether you're asking for work before giving value. Put the core benefit inside the first 60 seconds [22]; the SolCard/Granola shape is value above the fold, one active control below [15], [05].
- **IF onboarding has many steps** → show a plain progress bar *without* the total count (Typeform) [22].
- **IF your product depends on heavy personalization** → a long questionnaire is justified; it earns the personalized first run and manufactures the invested effort that makes the payoff land (Ahead's brief building itself; Cal AI's calibration questions) [19], [02].
- **IF you already stripped onboarding to nothing and users are still confused** → you've overshot the friction sweet spot; add guided disclosure back, not steps [15].
- **IF a screen is data-dense and you're tempted to delete data** → tier it behind expandable tooltips instead [15].
- **IF the core flow is simple** → replace the tutorial with the real thing plus guided hints (first Sudoku puzzle, not the rulebook) [22].
- **IF you need users to adopt a new gesture** → ship a persistent, subtle visual cue and stage the change across releases; never a tutorial [18].

**Strategic direction**
- **IF the flow is utility + repetitive/rule-based** → treat it as a rebuild-from-scratch candidate, not a polish candidate [20].
- **IF the flow is experience + judgement-heavy (games, emotional products)** → the interface *is* the value; invest harder in delight, not automation [20].
- **IF the flow is privacy-sensitive or information-dense** → keep the UI visible and layer outcome automation on top (anomaly flags, trend summaries, recommended actions) [20].
- **IF you have a genuinely sophisticated capability** → wrap it in the most familiar container users already know rather than a new screen; target "this just works," not "wow, complex tech" [17].
- **IF a free, pre-installed first-party app stores the same content you do** → concede the data layer and compete on the envelope: auto-captured context, multiple navigation modes over the same content, search quality, animation timing [04].
- **IF you're building for a niche the incumbent can't serve** → change the *shape* of the primary object, not the theme [02].
- **IF a proposed feature doesn't unlock something else already in the product** → you're building standalone utility (fine) rather than compounding value; know which one you chose [28].
- **IF you're deciding whether AI or a human does a design task** → sort by bucket: marketing (AI alone), websites (AI 80%, human for copy/asset orchestration, micro-interactions, animation), product UI (human-led — real pain points, the "why" at every step, systems thinking) [25].
- **IF you can't state the reason a screen element exists** → it's a decision AI could have made, and probably did. Cut it or justify it [25].

---

## Contradictions and tensions in the source set

1. **"What's left after AI commoditizes design" has three different answers.** [30] says static craft is table stakes and the differentiator moves to *motion and experience between screens*; [12] and [26] say usability is table stakes and the differentiator is *emotional integration*; [25] says the differentiator is the *judgment layer* — the last 20%, asking "why." These are compatible in spirit but they are three different investment recommendations, and the note that promotes emotional integration is also the one selling emotional-integration services.

2. **Design as moat vs. design as insufficient.** [26], [12], [04] and [14] argue feel/emotion is *the* remaining edge. But [24] opens by asserting features, UI and aesthetics are **not** why sticky products stick (psychology is), [28] credits Raycast's win to opinionated constraints and loops rather than polish, and [13] states flatly that Ramp and Brex both had great design and strong engagement — only the accumulating-intelligence layer made Ramp defensible. [26] itself concedes business model, timing and community are still required. Treat "emotional design is the last moat" as a strong hypothesis with no measured evidence anywhere in the set.

3. **Confetti is both an anti-pattern and a case study.** [04] lists "confetti animation on first save" among the decorations that change nothing because the core surface is untouched. [21], [16], [10] and [07] all teach full-screen celebration, confetti and glow as the mechanic. The reconciliation the notes imply but never state: celebration is worthless as a *substitute* for core-surface personality, and valuable as an *amplifier* of a genuine high-emotion moment. [10] also supplies the ceiling — Robinhood's confetti was potent enough to be legislated against.

4. **Onboarding length.** [22] (77% lost in 3 days; three light steps beat twelve heavy ones; value in 60 seconds) and [05]'s two-screen Granola sit directly against [05]'s own Cal AI (~20 screens) and Noom (up to 113 screens, 10–15 minutes). [15] resolves it explicitly as a "friction sweet spot," not a floor — but offers no threshold for where the sweet spot sits.

5. **60/30/10 is stated as a rule and immediately hedged.** [30] notes a reversed ratio *can* work in some contexts, just not that one. Treat it as a default allocation, not a law.

6. **The 4-level career mapping is unevidenced.** Years-of-experience bands (<1 / 1–3 / 3–6 / 7+) and the rate table ($100–$500 junior gigs, $8–10K/mo mid, $20K–$100K+ senior deals) come from one agency owner's anecdote with no geography, discipline scoping, or market data [30]. The beginner version is also a deliberate strawman Tim produced himself.

7. **Motion has unexamined costs.** No note in the set discusses animation's cost to performance or bundle size, `prefers-reduced-motion` and accessibility, or the point at which delight becomes friction on repeat exposure [26]. Accessibility appears exactly once, as a checklist item in the delivery stage [12].

8. **Almost none of the design claims are measured.** The Duolingo DAU jump has acknowledged confounds [26]; Revolut has no outcome metric at all [26]; Airbnb's peak is explicitly "safe to assume" tested, not shown [19]; the 50ms/3s/20–30% and 77%/3-day figures are unsourced [14], [15], [22]; iOS-vs-Android adoption is used as evidence for design consistency when update pipelines explain most of it [18]. The set's genuinely hard numbers are Netflix's Skip Intro presses [16], Unbounce's CTA curve [27], and Robinhood's fine [10].

---

## Sources

- `[02] The Weird Design Playbook of 6 App Outliers — https://www.youtube.com/watch?v=HA4yB_sd62Q`
- `[03] Why Leaderboards Kill App Retention (How To Fix It) — https://www.youtube.com/watch?v=BxhsCu9hNpY`
- `[04] How Top 1% Indie Apps Beats Giants — https://www.youtube.com/watch?v=MAvKHToGiVY`
- `[05] How To Solve The App Onboarding Paradox — https://www.youtube.com/watch?v=Aa89MC8jX2c`
- `[07] I Studied 500+ Gamified Apps (Here's What Actually Works) — https://www.youtube.com/watch?v=LXX_qOA5D8E`
- `[10] The 3-Stage Trick Behind Every Addictive App — https://www.youtube.com/watch?v=uoLpH_20qKw`
- `[12] Our World Class App Design Formula — https://www.youtube.com/watch?v=wmTkiF23GRQ`
- `[13] The New Way Apps Dominate in 2026 — https://www.youtube.com/watch?v=yYs7iv81Ppk`
- `[14] How Addictive Apps Are Made — https://www.youtube.com/watch?v=AnL49w4yIOw`
- `[15] Give Me 13 Minutes & I'll Grow Your App — https://www.youtube.com/watch?v=v1f9iYZ2GhQ`
- `[16] How Netflix Made Us All Binge (Design Breakdown) — https://www.youtube.com/watch?v=hIm3d3JAsPw`
- `[17] Viral Design Tricks from Spotify (Founder Playbook) — https://www.youtube.com/watch?v=Tpg0pxKHrCA`
- `[18] What Founders Can Learn From Apple's Design Domination — https://www.youtube.com/watch?v=doiaMtD80p8`
- `[19] The Tiny Design Rule Behind Top 1% Apps — https://www.youtube.com/watch?v=11h4H3TAGkM`
- `[20] The Future of App Design is Invisible — https://www.youtube.com/watch?v=zRUoPIwCxfw`
- `[21] How Tinder's Design Hacked Society — https://www.youtube.com/watch?v=4yKtlOWClhA`
- `[22] The Hidden App Growth Killer (How To Avoid It) — https://www.youtube.com/watch?v=55hDj88zKa8`
- `[24] How Top 1% Apps Keep You Hooked — https://www.youtube.com/watch?v=D9SXaj6qQIQ`
- `[25] Do Companies Really Need Designers Anymore? — https://www.youtube.com/watch?v=bOm9GDv96Tk`
- `[26] The Secret Behind Weirdly Addictive Apps — https://www.youtube.com/watch?v=Du2lkZ_cux8`
- `[27] Give Me 10 Minutes & I'll Boost Your Website Conversions — https://www.youtube.com/watch?v=TIfiy1fodDs`
- `[28] How Raycast Reached a $100M+ Valuation (As a Small Startup) — https://www.youtube.com/watch?v=eWGNjTLK84c`
- `[29] 5 Tools I Wish I Found Sooner (For Designers) — https://www.youtube.com/watch?v=qmJVN2158Mk`
- `[30] 4 levels of UI/UX design (and BIG mistakes to avoid) — https://www.youtube.com/watch?v=86PGRyQjdzQ`
