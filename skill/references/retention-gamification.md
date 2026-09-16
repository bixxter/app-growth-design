# Retention & Gamification

Distilled from 20 Tim Gabe videos. Every non-obvious claim carries a `[NN]` source marker; see **Sources** at the bottom. Numbers are preserved as stated in the notes, with the note's own caveats attached where the source and narration disagreed.

---

## Core principles

### 1. Points, badges and leaderboards are the scoreboard, not the game
PBL is the default first move and the most documented failure in product history. Three platforms actively removed it: **LinkedIn** retired Community Top Voice badges in 2024, **Foursquare** scrapped mayorships and badges in 2014, **Google News** killed a system that offered **500+ badge types** `[07]`. Yu-kai Chou's line, quoted: PBL is "the scoreboard of a game, not the game itself." Nobody walks into a stadium, looks at the scoreboard, and feels like playing baseball `[07]`.

The corollary that generalises: **a mechanic will successfully inflate whatever it measures.** Foursquare's own data showed gamification drove *check-ins* but not the *discovery* behavior the business needed `[07]`. LinkedIn's own statement blamed **automatic** awarding — badge-motivated users optimised for the badge (commenting on AI-generated posts) rather than for expertise `[07]`.

### 2. A leaderboard is a surface; social comparison is the engine
Shipping the ranked list does nothing. The retention pressure comes from the *inferred social position*, not from the UI element — Tim's term is the **invisible scoreboard**: "your product makes another user's progress feel like you're in a race with it" `[03]`. Without the psychology, you have "a glorified list, and lists don't tend to move retention" `[03]`.

**Audit question:** does a user leave your leaderboard believing a *specific named other person* is beating them? If not, more rows, nicer rank badges and a faster refresh won't fix it `[03]`.

### 3. Engineer the size of the competition — winnability is the predictor
Leaderboards aren't broken; **global** leaderboards are. A global board silently churns the 99% who can't place `[03][07]`. Strava replaced one global ranking with thousands of hyper-local micro-competitions (segments), sliced further by age and gender cohort — the field shrinks to a size where placing is realistic `[07]`. Tim attributes the "winnability predicts competitive motivation" claim to a 2022 ScienceDirect study (uncited, and the weakest-sourced claim carrying the most load in that video) `[07]`.

Stated rule, typed on screen: **"shrink the cohort until winning feels possible"** `[03]`. The only quantitative anchors he gives are "that dozen riders who happened to ride the same exact hill in your city" and an on-screen Leagues board showing 5 visible rivals — bracketing a working range of roughly **5–12 visible rivals**, small enough that you can name the person above you `[03]`.

### 4. Cohort size wins the entry; being *seen* wins the tenure
Two separate retention jobs, not one. "Localizing the cohort gets users into the race. But staying in the race for years takes something else — feeling seen while you're competing" `[03]`. "The leaderboard creates the race. The callout is the boost that makes people push" `[03]`.

Peloton's delivery mechanism is a live instructor shouting your name to thousands of concurrent riders; the takeaway is **not** "you need instructors" — it's the emotional hit of recognition, which most apps must build as an asynchronous substitute (kudos, comments, named acknowledgements) `[03]`. Strava's kudos is that substitute and it measurably increases repeat frequency — **14 billion kudos given in 2025** `[07]`.

**Diagnostic:** good day-one leaderboard engagement with no long-tail retention means the missing half is recognition, not ranking `[03]`.

### 5. Prefer completion drive over loss aversion
Apple Watch Activity Rings run on the **Gestalt principle of closure** — the brain reads an incomplete pattern as demanding completion, so a 90%-filled circle is an open loop the user wants to shut. No points, no badge required to create the pull `[07]`. The same engine is the Zeigarnik effect: people remember unfinished tasks and return to resolve them `[24][22]`.

The framing contrast, stated directly: **streaks run on fear of losing what you built; variable rewards and closable loops run on the pull toward what's next. Same surface behavior, opposite emotional engine — one burns out, the other recharges itself** `[07]`.

And tie the closable loop to a **real-world** outcome so closing it produces genuine value rather than engagement theater `[07]`.

### 6. Ship competence feedback, not badge theater
A 2024 Springer Nature meta-analysis of gamified learning (35 interventions, ~2,500 participants, studies 2011–2022, overall Hedges' g = 0.257) found gamification reliably raises perceived **autonomy** (g = 0.638) and **relatedness** (g = 1.776) but has **minimal impact on competence** (g = 0.277) — and competence is the need most tied to long-term intrinsic motivation `[07]`. So most apps engineer *recognition* and forget to engineer *mastery*.

Build at least one number that proves the user got better at the actual activity: Peloton's real-time watt output and auto-flagged PRs, Chess.com ELO, Garmin's Training Readiness and Body Battery `[07]`. Every Garmin surface is a *measurement* of you with an interpretation attached — the opposite of an award wall `[07]`.

Same principle in copy: replace count-based milestones with character-based ones. "You completed 25 tasks" is hollow because it could describe anyone; "You're a hardworking night owl who does their best work after 9pm" is an identity claim derived from a real pattern `[17]`.

*(Caveat the note itself raises: the meta-analysis is education-context, and Peloton's own cited source credits social/community features for its 15% figure — the "competence feedback" reading is Tim's reinterpretation `[07]`.)*

### 7. Gamification depth is non-monotonic — there is an overload zone
A 2025 peer-reviewed *Frontiers in Psychology* study found the relation between gamification feature richness and adherence intention is **S-shaped**, with an **engagement zone** (low → moderate richness helps) and an **overload zone** (excessive feature sets weaken it) `[07]`. The paper's own prescription, visible on screen but never spoken: avoid feature bloat, and **provide adaptive controls that let users streamline secondary mechanics** `[07]`.

Practical test: if you're running streaks + points + badges + challenges + leaderboards simultaneously, you are past the peak, not climbing it — cut, don't add `[07]`. Habitica is the proof case: a peer-reviewed study found **100% of participants experienced counterproductive effects**, users absorbed in managing the game layer instead of doing the work — "cognitive overload disguised as engagement" `[07]`. *(No sample size shown; a 100% result almost certainly implies a small qualitative study `[07]`.)*

The same ceiling restated from the Hick's Law side: **"don't show 20 loops on one screen"** — piling on progress mechanics reintroduces the choice overload that a good activation screen was supposed to solve `[24]`.

### 8. Streaks decay from motivation into obligation — wrap them in agency
Research from The Decision Lab: the longer a streak runs, the more the user's internal sentence shifts from "I want to do this" to "I can't miss today" `[07]`. Evidence and exposure:
- Snapchat streak study, N = 2,483 early adolescents (M_age 13.46, Dutch-speaking Belgium): streak frequency correlates with FOMO, problematic smartphone use and reduced self-control — **the abstract explicitly calls it "a weak relationship"**, a hedge the narration drops `[07]`.
- **Nevada Attorney General litigation against Snapchat, 2024** `[07]`.
- **EU Digital Fairness Act**, legislative proposal targeted late 2026, section "Addictive design and attention-maximising features," naming **"Reward loops and 'daily streaks' that penalise taking a break"** `[07]`.

The dangerous pattern researchers flag is a streak you **can't pause, can't influence, and can't escape** `[07]`. Duolingo's shipped version — after "hundreds and hundreds" of experiments — wraps the mechanic in agency: users **choose their goal level** and can **buy a streak freeze** `[07]`. Its Weekend Quest screen expresses time pressure as a closable partial-progress loop ("2 days left! Do 2 more lessons," magenta bar at **2/4**) with a consent-shaped CTA reading **"I CAN DO IT"** — pressure framed as an achievable loop rather than a loss threat `[07]`.

### 9. If you run a streak, make it compound into something ownable
A single-thread counter that resets to zero has almost nothing to lose. Duolingo's day-streak is treated as the **entry-level** version — one counter, one number `[09]`. The upgraded form makes streaks *unlock accumulating assets*, so breaking forfeits something tangible: Freecash's **diamond streak** issues a first diamond at day 7 and another at day 42, and the **streak freeze must be earned, not given**, so it carries perceived value `[09]`. The tier depth is deliberately long enough that a power user can keep collecting "for years" `[14]`.

Loss aversion is the engine: losses hurt roughly **2x** as much as equivalent gains, which is why a 47-day streak hurts to break even though the number is objectively meaningless `[09]`.

### 10. Variable reward magnitude is the recharging engine
Rooted in B.F. Skinner's variable-ratio schedules: unpredictable reinforcement produces the most compulsive behavior of any pattern, and it produces **craving, not pleasure** — the brain stays in chase state rather than a satisfied one `[09]`.

The engagement signal is the gap between *knowing a reward is coming* and *not knowing how big it is* `[07]`. Three-stage loop, demonstrated with card-pack opening: **anticipation** (tap with no idea what's inside) → **reveal** (cards flip one at a time, each flip resetting the cycle — "one dopamine event becomes five") → **celebration** (rare hit triggers screen reaction, glow, haptics, which is what sells the *next* tap) `[07]`.

**Guardrail:** keep most of the system predictable and transparent, then inject *controlled* surprise. Do not randomize everything — users lose the ability to track progress `[09]`.

### 11. The delivery ceremony is worth more than the reward
Dopamine is an **anticipation** chemical (Berridge, cited as 1989), so removing uncertainty and handing the user the result directly bypasses the dopamine system entirely `[10]`. The on-screen curve is the whole thesis in one shape: dopamine peaks between *signal* and *work*, falls to zero *before* the reward — and **the 50%-certainty curve peaks higher than the 100%-certainty curve** `[10]`.

**Gift vs. Receipt** is the audit binary: same information, delivered as an event vs. delivered like a bank statement `[10]`. Three stages: **anticipation → reveal → celebration/afterglow**. "Most apps deliver stage two only, and often poorly" `[10]`.

**Stage 3 is where long-term retention lives** — it converts a moment into self-concept: your Wrapped becomes part of how you see yourself, your streak becomes something you protect, your collection becomes stored value you'd have to say goodbye to `[10]`. Framing results as **given** rather than **accessed** raises perceived value (Kahneman/Tversky, cited loosely) `[10]`.

Sub-mechanic: **N results delivered at once = one dopamine event; the same N delivered one at a time = N events** `[10]`.

### 12. Three stacked mechanisms — and the third locks the first two
`[09]`'s architecture, ordered:
1. **Craving machine** — variable-ratio reward gets users pressing the lever.
2. **Infinite game** — loss aversion plus the refusal to ever let users "finish" keeps them running.
3. **Invisible scoreboard** — social comparison turns progression into public identity, which makes the first two irreversible.

The order matters because **private progress can be abandoned quietly; visible status can't — quitting becomes a public admission** `[09]`. "It's not what these apps reward, it's how they structure the reward" `[09]`.

Strava is the strongest available evidence for the raw force of social comparison: leaderboard position with **zero extrinsic reward** — no prize money, no sponsorship, nothing but bragging rights — still drove mass cheating. Strava removed **3.9M "anomalous" activities** (2025–early 2026) after users uploaded vehicle- and e-bike-recorded rides `[09]`.

### 13. Audit for terminal achievement states
If a user can *complete* your app, that completion is a hard ceiling on retention; an end screen is a churn trigger `[09]`. Peloton's lifetime metrics never cap — a user at 500 classes sees 600, 700, 1,000 as reachable, so there is no natural quit point `[09]`. Peloton's milestone badge wall always renders the next few **unearned, greyed-out** rungs (900 / Millennium / 1500 / 2000), so the ceiling is visible but the next step is close `[07]`.

The advanced version is a **seasonal reset that preserves earned status**: League of Legends resets rank each season but keeps honor levels and cosmetics, guaranteeing there is no winning state, "only more" `[09]`.

### 14. Identity is the churn-proof layer
"People don't churn out of their own identity" `[01]`. Once a user accepts a label they see the world through it, defend it, and return to anything that reinforces it — 16 Personalities users put a four-letter code from a ten-minute quiz into their dating bio `[01]`. Get it right and "you've done something no ad budget can buy" `[01]`.

Label recipe: pick a **type** (INFJ / "The Advocate"), a **status** (top X% of listeners), or a **role** (top creator); make it specific enough to feel earned and flattering enough that they want it; then **auto-place it where it's visible** so the user never has to do the work of displaying it `[01]`.

The metric version: build **one single number that represents who the user is**, computed from data they can't get elsewhere, refreshed on a fixed cadence so a check-in ritual forms `[11]`. Whoop Age is the reference implementation — 9 metrics, one hero number, a weekly **Pace of Aging** score on a **-1 to 3** scale computed over a trailing **30 days**, with a clearly "bad" end that produces anticipatory dread and self-correction `[11]`. Every raw biometric is translated into the identity currency (VO2 max 58 → **-5.3 years**), not clinical units `[11]`. And it becomes an obsession when it's comparable between two people who know each other `[11]`.

### 15. Community is architecture, not a feature you bolt on
Strava's home feed is **not your own data** — it's what the people you follow have been doing. "Strava is not a fitness tracker with social features bolted on"; the tracking exists to make the social layer function `[11]`. Runkeeper and a dozen other trackers had competitive or superior GPS and lost anyway `[11]`.

**Navigation test (30 seconds):** where does the social layer sit in your product's navigation? Buried in a tab, or absent, means you are exposed `[11]`. Ship a **live presence component on the primary action screen** — avatars of people currently doing the same thing plus a one-tap cheer — rather than a leaderboard you have to navigate to `[02]`.

Ladder's move is the sharpest version: pin **every member of a team to the same workout on the same day**, so absence stops being a private failure and becomes a visible social one — "social pressure baked into the workflow itself," no opt-in required `[02]`.

And build it **before** you need it: waiting for churn means rebuilding from scratch against products that already carved their way into the user's identity `[11]`.

### 16. Separate the mechanic that acquires from the mechanic that retains
Be explicit about which is which. Ladder: the TikTok → quiz funnel acquires; the cohort calendar retains `[02]`. `[01]`'s three-chapter model does the same split: **the Mirror** (long quiz onboarding) converts, **the Label** resists churn, **the Flex** (a share artifact fused to the invite) acquires — and only the third compounds `[01]`.

### 17. Engagement is a treadmill; accumulated intelligence is the lock-in
Layer 1 (habit loops, micro-interactions, animation) is portable — users can jump to a different treadmill and every competitor can copy your animations `[13]`. Layer 2 is Nir Eyal's stored value (*Hooked*, 2014) updated: deposits don't just store data, they **train an intelligence** that lives on your servers and can't be exported `[13]`.

**The test: if session 1,000 is functionally identical to session 10, you have an engagement product with no lock-in** `[13]`. **The exit question:** if a user left today for a competitor, what would they have to rebuild from scratch? `[13]`

Make the deposit automatic (a byproduct of normal use, no conscious effort), and make the accumulation **visible** — Oura surfaces "your body has been tracked for 1,095 nights," which reframes retention as partnership rather than capture `[13]`. The IKEA effect underwrites it: people assign **63% more value** to things they helped create (Norton, Mochon & Ariely) `[13]`.

### 18. Emotional feedback closes the loop that drives repetition
A green checkmark is information; a character cheering is feedback you *feel* `[26]`. Don Norman's *Emotional Design* lineage: quick affective reactions after an action raise the odds of repeating the action `[26]`. Four moves: instant emotional feedback, celebrate small wins, use character expressions, add progress animations — plus **animate idle states**, not just event states, so the product feels alive when nothing is happening `[26]`.

Write success copy **in character**: Duolingo's "Hide the evidence! You fixed 3 mistakes. Don't tell anyone." over a generic "Lesson complete" `[26]`. Hierarchy on that screen is emotion first (characters + sparks), personality second (headline), metrics third, action last `[26]`.

Without designed emotion, users complete tasks but form no attachment — which is what raises churn `[14]`. In person, emotional connection arrives free via tone and body language; in an app it exists only if you design it `[14]`.

**Cost realism:** you don't need Duolingo's multi-million-dollar budget or a motion studio. Pinpoint the specific flow moments where emotional integration moves a business outcome and design there only — focused effort captures most of the value at a fraction of the cost `[14]`. *(The note flags that no test or heuristic is given for identifying those moments `[14]`.)*

### 19. Every unnecessary tap is an exit ramp
"The fewer exit ramps you build, the more momentum your product carries" `[08]`. ReelShort's zero-decision player deliberately ships **no** episode list on the player, **no** progress bar or scrubbing, **no** "Are you still watching?" interrupt, **no** device rotation — swipe-up is the only navigation `[08]`. Netflix's phone flow is counted at **at least six decision points** before content plays `[08]`. Result: **35.7 min/day per ReelShort user vs 24.8 min/day per US Netflix user** `[08]`.

Tim marks this one as **ethically clean** — nothing is hidden or buried, unnecessary UI is simply removed (same principle as YouTube autoplay, Spotify continuous play, TikTok swipe-to-next) `[08]`. Note the dependency: the 60-second vertical format is what *removes the need* for the UI that would create the decision points — the pattern is downstream of a content decision `[08]`.

### 20. Micro-friction compounds into user experience debt
Small frictions don't stay small; they accumulate until users start asking whether the product is worth the hassle, and they bleed users silently without ever showing up as one obvious failure `[16]`. Netflix's tell was that **15% of viewers were manually fast-forwarding intros** — so they built AI intro detection and shipped one button. **136 million presses per day (2022)**, **195 years of cumulative user time saved per day**, and skippers binge longer `[16]`. *(Causality is asserted: heavier bingers plausibly just press skip more `[16]`.)*

**Find the friction users are already routing around manually** — that's the highest-value candidate `[16]`.

### 21. Peak–end: engineer one peak and one ending, in that order
Memory compresses an experience to its most intense moment and its last moment; everything between is noise `[19]`. Implication: friction in the middle is survivable, a flat peak or a flat ending is not. **Peak first, end second** — don't save the magic for the finish; the peak belongs at the moment of highest user investment, the ending is for closure `[19]`.

Most apps simply fall off with no closure. Uber's end-of-ride flow (haptic buzz → rate + tip, polite and optional) supplies *completion*, not a manufactured peak — the real peak already happened offline when the rider arrived `[19]`. Ahead closes the session with a gentle "come back tomorrow" nudge instead of guilt mechanics `[19]`.

### 22. Notification and threat framing: the loss-aversion retention screen
The observed anatomy of a streak-rescue surface, top to bottom `[14][12][06]`:
threat headline in red (**"10-Day Streak in Danger"**) → the 3D collectible with the streak number embossed → the reward math (**"win up to $10 today, and up to $1,000 in 4 days"**) → a segmented 7-dot progress track with earned dots checked green → a live countdown (**"1h 52m 32s"**) with a **2X Bonus** tag → a red urgency strip → **one** full-width bright-green CTA naming the exact action ("Retain Streak Now / Play Dice Drake"). Red carries the threat, green carries the only exit `[14]`.

Freecash's home-screen widget rebuilt on this pattern moved **day-7 retention up "several percentage points"** — the only retention delta attributed to a specific mechanic anywhere in this corpus, and it is agency self-reported with no baseline `[06]`.

Also: make losing progress **visually painful** — the ugliness of the loss state is the deterrent `[14]`.

### 23. Explicit contradiction — the shame stack vs. no-shame design
This corpus argues both sides, and the tension is worth surfacing rather than resolving.

- **Pro-loss-aversion:** compounding streaks, guilt notifications, demoralising loss states and countdown threats are taught as core retention architecture `[09][12][14][06]`.
- **Anti-shame:** `[02]` presents the *identical stack* — an Apple Fitness push ("you didn't close your Move ring yesterday"), a "Don't Lose Your Record!" streak modal, red over-target numbers — as the category assumption **MacroFactor deliberately deleted**. Their algorithm *assumes users will miss targets*, combines logging with a ~3-week trend weight to back-calculate real metabolism, and ships **no streak counter and no red alert state**. Co-founder Greg Nuckols: "What if nutrition apps didn't try to guilt people into losing weight?" The argument is that shame mechanics make users stop logging *or* start gaming their own entries, poisoning the dataset — and **clean data is the moat** `[02]`.
- `[07]` sides with the second camp on mechanism (streak trap, prefer completion drive), and `[03]` opens by listing "more features, more notifications, streaks" as *the wrong lever founders reach for first*.
- `[03]` also never engages with the documented downside of comparison pressure — anxiety, quitting, gaming — which its own case study (Strava's 3.9M deleted activities in `[09]`) demonstrates.

**Practical resolution the corpus supports:** loss framing works and is measurable, but its cost is paid in data quality, regulatory exposure and user trust. Use it where the logged behavior is verifiable and the stakes are low (earn/reward apps); avoid it where honest self-report *is* the product (nutrition, mood, health).

---

## Playbooks

### A. Build an invisible scoreboard (three moves) `[03]`
1. **Put the comparison at completion.** Define what "completion" means in your app (end of workout, end of transaction, end of listen), then attach the ranking signal to it.
2. **Make the signal say "you are falling behind,"** not just "here is your score" — it has to imply a race with a specific other person.
3. **Localise the cohort so winning feels possible.** Ship friends / neighborhood / local as first-class alternatives to global, not a buried filter. Target ~5–12 visible rivals. Scope competition to something absurdly specific — Strava's unit is a single named stretch of road, not "cycling."
4. **Add a recognition moment on top of the ranking** — social and emotional, not mechanical. If you can't do live human callouts, build the asynchronous substitute (kudos, comments, named acknowledgements) and make sure it names the person *and* their effort.

Reference template: Strava's completion card carries the achievement count (the comparison hook) *and* the "12 gave kudos" + comment thread (the recognition moment) on one screen `[03]`. Note the unresolved sequencing problem: move 1 says show them they're losing at their moment of accomplishment, move 3 says acknowledge their effort — Strava implicitly solves it by putting achievements first, kudos second, rank elsewhere `[03]`.

### B. Ship a streak without shipping the trap
1. Let the user **pick the goal level** `[07]`.
2. Give them a **pause/freeze** — and make it *earned* so it carries perceived value `[07][09]`.
3. Make the streak **unlock accumulating, tangible assets** rather than incrementing a counter; set milestones far apart enough to matter (Freecash: day 7, day 42) `[09]`.
4. Give power users **tier depth measured in years**, so there's always a next rung `[14]`.
5. **Escalate rewards across the cycle** so the final day carries a distinct, bigger ceremony `[10]`.
6. Express pressure as a **closable partial-progress loop with a consent-shaped CTA**, not a bare loss threat (Duolingo's "2/4 — I CAN DO IT") `[07]`.
7. Provide **adaptive controls** to turn off or streamline secondary mechanics `[07]`.
8. Regulatory smoke test: does your mechanic **"penalise taking a break"**? That's the EU Digital Fairness Act's literal wording `[07]`.

### C. Design a reward ceremony `[10]`
1. **Audit every result-delivery moment** — report, score, streak, match, payout, confirmation — and label each **gift or receipt**.
2. **Insert an anticipation window** where the outcome is genuinely uncertain before the reveal.
3. **Reveal one at a time.** N results at once = one dopamine event; N sequential reveals = N events. Show a counter ("EPIC 3/5") so the user knows more unknowns are coming.
4. **Make the reveal multi-sensory** — visual weight, haptics, audio. A landing, not a fade-in.
5. **Differentiate rare outcomes visually** — screen-wide color shift, bloom, different animation — so the tier is *felt* before it's read.
6. **Gate data you already have.** Spotify holds a year of listening history and releases it once; the gate *is* the anticipation.
7. **Let the result breathe** — a share prompt, milestone badge, or a stat they can screenshot.
8. **Design the share artifact itself**: pre-rendered, square, branded, destination-appropriate (Duolingo's 150-day streak card with a native share tray), not a user screenshot.

Bounded-uncertainty trick: showing a **"Case contents — 6 items"** preview *raises* anticipation by making the upside range legible while keeping the specific outcome unknown; the payout amount stays hidden until commit `[10][09]`.

### D. Right-size a leaderboard `[07][03]`
1. Slice by geography, then by cohort (age/gender), then by friend graph — expose the slicing as visible UI chips, not settings.
2. Make the competition surface something bounded by lived reality (Strava's is literally a map of your neighborhood).
3. Count visible rivals: 5–12. A 3-person league where you always place is presumably as dead as a global one where you never do — the note flags that Tim gives no guidance on the lower bound `[03]`.
4. Keep the board **standing rather than resetting** if you want permanent social records (Strava's segment leaderboard entries span 2013–2020, so there's no window in which you're safe from being passed) `[03]` — or **reset seasonally while preserving earned status** if you need re-engagement pressure `[09]`. Pick one deliberately.

### E. Turn a metric into an identity number `[11]`
1. Compute **one** number from data the user can't get elsewhere.
2. Refresh it on a **fixed cadence** so a check-in ritual forms (weekly, from a trailing 30 days).
3. Give it a **directional scale with a clearly bad end** so the user experiences anticipatory dread and self-corrects.
4. **Translate every input into the identity currency** (years of life, not ml/kg/min) so it reads personal, not clinical.
5. Give it the **entire screen** — one hero number, one trend line, one comparison, everything else suppressed.
6. Make it **comparable between two people who know each other**.
7. Watch out: your most-instrumented metric is probably not your emotionally load-bearing one. Tim ignores his daily Whoop recovery score entirely and checks Pace of Aging every week `[11]`.

### F. Gamification-count audit `[07][24]`
1. List every active mechanic on the primary surface.
2. If the list includes streaks + points + badges + challenges + leaderboards simultaneously, you're in the overload zone — **remove**, don't add.
3. Pick **one obsession metric** and make it visible (Finch's six-trait personality radar, League's LP). One total-progress measure beats 20 scattered badges `[09]`.
4. For every mechanic ask: does it signal *"you got better at the actual thing"* or *"you opened the app a lot"*? Kill the second kind `[07]`.
5. For every mechanic ask: does it inflate the **vanity action** or the **business action**? Foursquare's inflated check-ins and starved discovery `[07]`.
6. Cap the loop count on any single screen — don't reintroduce choice overload `[24]`.

### G. Build the accumulating-intelligence layer `[13]`
1. Audit every core action: does it make the product better **for this user specifically**, or just better in general? General-only = features, not stored value.
2. Find your equivalent of Midjourney's image-pair ranking — the single action that compounds personalization — and make it frictionless.
3. **Turn personalization on by default** rather than burying it in settings (Midjourney v7's default-on choice is what got 70%+ adoption in 3 months).
4. **Instrument the compounding**: compare measured outcome quality for a 6-month user vs a 10-day user. No measurable gap means the trap isn't tightening.
5. **Automate the deposit** — investment must happen as a byproduct of use; if it requires deliberate effort most users won't make it.
6. **Make the accumulation visible** with a concrete counter ("1,095 nights tracked").
7. **Count your integration routes** — every external system that depends on you is added switching cost.

### H. Peak–end pass on a core flow `[19]`
1. Map the whole journey on a board (he uses FigJam); annotate where users slow down, where stress spikes, where the quiet gaps are. Keep it a living document.
2. Pick **exactly one** peak — right after a core task completes, at a milestone, or at a point of heavy user investment. Small interventions work: a badge, a sparkle, an animation, surprising copy.
3. **Design an ending**: a check mark, a summary card, a line like "you showed up today — that's huge."
4. **Vacuum the negative moments** — wait screens, error states, long forms. Negative moments are just as memorable, so a bad peak can define the whole experience.
5. **Run variations on the peak** — timing, emoji vs icons, animation vs static. Watch where people *linger longer than the task requires*; lingering is the signal you found something worth tuning.

### I. Remove exit ramps `[08][16]`
1. Count the decision points between "open app" and "core value delivered." Each one is a place the user can decide *actually, never mind*.
2. Delete UI that exists only because the format demands it — episode lists, scrub bars, rotation, "are you sure?" confirmations.
3. Find where users are manually routing around friction and automate it (Netflix's 15% hand-scrubbers → Skip Intro).
4. Fix the **top 1–3** micro-frictions, not all of them.
5. Candidate one-click wins: autofill with smart defaults, one-click actions for repeated tasks, prepopulated dashboards so nobody hits an empty state.

### J. Convert a solo moment into a synchronized ritual `[02]`
1. Find the moment your category assumes is solitary.
2. Pin a cohort to the **same content, same day**.
3. Render presence ambiently on the primary action screen ("TEAMMATES WORKING OUT ●" with a horizontal row of live avatars and "double tap or hold avatar to send cheers").
4. Make the reward for a milestone be **access to the group** (Ladder unlocks Team Chat), not points.
5. Absence should be visible to the cohort without anyone opting in.

### K. Build the flex artifact that also acquires `[01][10][17]`
1. Find the **one true thing** your product already knows about the user that they'd be proud to broadcast. It must be real data — the Flex is the one move that fakes nothing.
2. Package it as a clean, flattering, self-contained card; give it a **character read, not a counter** ("you're the type of person who never misses a Monday workout") `[17]`.
3. **Fuse the share and the invite**: gate the fuller version behind inviting friends. Set the threshold low — Airbuds asks for "at least 1 friend."
4. Give it a **recurring cadence**; weekly (Airbuds, Sundays) compounds faster than annual (Wrapped).
5. Make the artifact travel outside your app — Wordle's grid is plain characters that paste into any thread.
6. Sequence it correctly: **attachment first, virality second.** "You can't engineer viral sharing if users don't stick around long enough to develop that emotional connection" `[17]`.

---

## Case bank

| Product | Mechanic | Why it works | Numbers |
|---|---|---|---|
| **Strava — segments** `[07][03][09][11]` | User-defined stretches of road, leaderboards sliced by age/gender cohort and geography; the segment map *is* the cohort picker | Shrinks the field until placing is realistic; ranking lands at ride completion | 180M registered users, 185+ countries; ~$500M ARR, $2.2B valuation; users average **1 hour of real-world activity per 2 minutes in-app**; segment records span 2013–2020 (standing, not resetting) |
| **Strava — kudos** `[07][03]` | Lightweight peer acknowledgement on a completed activity | Relatedness without inventing a fake currency; measurably raises repeat frequency | **14 billion kudos in 2025**; clubs +59% in 2024 |
| **Strava — the feed** `[11]` | Home screen is *other people's* activity, not your own dashboard | Social layer is primary architecture; the GPS-only cohort is agent-replaceable, the club/PR cohort is not | Hired a CPO from Epic Games (Matt Salazar; prior ~5 yrs Nike Run Club/Training Club) and a CTO from Zynga (Rob Terrell, ~12 yrs, FarmVille), April 2024 — gaming operators, not GPS engineers |
| **Strava — cheating** `[09]` | Status-only incentive, no prize money | Strongest evidence of the raw force of social comparison — and its failure mode | **3.9M "anomalous" activities removed** (2025–early 2026) |
| **Apple Watch Activity Rings** `[07]` | Three rings (Move/Exercise/Stand) you "close" daily | Gestalt closure — a 90%-filled circle is an unresolved pattern; closing maps to a real health outcome | Apple Heart & Movement Study, **140,000+ participants**: consistent closers **48% less likely** poor sleep, **73% less likely** elevated resting HR, **57% less likely** elevated stress. *(Narration says "49.5% behavior change in 160,000 people" — the on-screen source disagrees, and the study is associational)* |
| **Duolingo — safe streak** `[07]` | User-chosen goal level + purchasable streak freeze | Converts obligation back into a choice; the pattern researchers flag is a streak you can't pause, influence or escape | "Hundreds and hundreds" of streak experiments; Weekend Quest shown at **2/4** progress, "2 days left," CTA "I CAN DO IT" |
| **Duolingo — emotional layer** `[26][14]` | 2022 character animation system: facial reactions, lip sync, **idle animations**; in-character success copy ("Hide the evidence! You fixed 3 mistakes.") | Resolves emotion, not just state; XP sparks physically travel into the counter so the reward is watched, not read | DAU **14.2M → 34M+** within two years of rollout; paid subs more than doubled *(Tim flags the confound: new languages, curriculum and marketing ran concurrently)*; multi-million-dollar emotional-design budget |
| **Duolingo — share card** `[10]` | Pre-rendered orange square: "I'm on a **150** day learning streak!" + native share tray (WhatsApp/Messages/Instagram/X) | Textbook stage-3 afterglow artifact — designed for the destination, not a screenshot | 150-day streak shown |
| **Freecash — diamond streak** `[09][14][12][06]` | Streak unlocks accumulating diamonds; streak freeze must be *earned*; loss state made deliberately demoralising | Loss aversion attaches to owned assets, not a number; tier depth measured in years | First diamond day 7, next day 42; on-screen "10-Day Streak in Danger," **$10 today / $1,000 in 4 days**, 1h 52m countdown, 2X bonus; **€300M / $100M+ paid out**; **#2 in US App Store Top Free**; widget redesign → day-7 retention up "several percentage points" |
| **Freecash — reward case** `[10][09]` | Earnings delivered via CS:GO-style case spinner: "🎁 Streak Reward," 2x bonus chip, hidden amount, one green "Open Case" CTA, "Case contents — 6 items" preview | Certainty that *a* reward comes, uncertainty about which; disclosed prize pool keeps it feeling fair; amount hidden until commit | 6-item bounded prize pool |
| **Gameblazers — pack opening** `[07][10]` | Anticipation ("OPEN YOUR PACK," one glowing card back) → reveal one at a time → celebration (rare pull floods the whole screen magenta) | Sequential reveal turns one dopamine event into five; the **"EPIC 3/5"** counter is the mechanic rendered as UI — it promises more unknowns | Rarity signalled by ambient screen color, not a badge |
| **Peloton — live leaderboard + callouts** `[03][09][07]` | Real-time watts ranked against thousands of concurrent riders; instructors call out names live | The leaderboard creates the race; the named callout is the boost that makes people push | Socially-engaged members work out **15% more frequently**; Connected Fitness **92–93% 12-month retention** (Tim narrates "90% annual"); $44/mo All-Access — *note the live leaderboard is gated behind the hardware-locked top tier* |
| **Peloton — milestone wall** `[07][09]` | Circular ride-count badges 1→800, with **900 / 1000 / 1500 / 2000 rendered greyed-out and locked** | Badges represent literal completed work (100 rides = 100 rides); the ladder always shows the next unearned rung, so there's no done-state | User at 500 classes sees 600/700/1,000 as reachable; May Rep Goal Challenge shown with ~6,794 participants and "2 days left" |
| **Habitica** `[07]` | Maximal gamification: quests, HP damage, pets, equipment, gold, avatars; onboarding checklist is about the *game* (Hatch a Pet, Purchase Equipment) | The empirical proof of the S-curve's overload zone — users manage the game layer instead of doing the behavior | **100% of study participants experienced counterproductive effects** *(no sample size shown)* |
| **LinkedIn — Top Voice badges** `[07]` | Retired 2024 | Automatic, non-curated awarding made quality standards impossible; badge-motivated users produced quantity over quality (commenting on AI-generated posts) | LinkedIn's own quote pins the failure on **automatic** awarding |
| **Foursquare — mayorships** `[07]` | Scrapped 2014, after already trying "Mayors 2.0" (a crown per friend circle instead of all 50,000,000 users) | Drove check-ins, not the discovery behavior the business needed. **Localising the cohort doesn't save a mechanic pointed at the wrong behavior** | 50,000,000 users cited in their own blog |
| **Google News — badges** `[07]` | Killed; **500+ badge types** for reading articles | Badge inflation — more badge surface area created no value | 500+ |
| **Finch** `[09]` | Raise a bird by doing real self-care tasks; commit it to a location for weeks (3 free / 9 paid), 15–20 unique discoveries each, some days nothing; six evolving personality traits on a radar chart | Two nested unpredictables — the daily drop *and* the long-horizon identity of the pet — so the chase never resolves. Every task is tiny and priced ("5 ⚡") | 14M+ downloads; 675,000 ratings at 4.9; Apple Editor's Choice; 6 traits; 102 adventure days shown |
| **League of Legends** `[09]` | Hidden MMR holds you near a 50% win rate; seasonal rank resets preserve honor levels and cosmetics | The oscillation (climb 100, drop 200, climb 150) *is* the variable ratio; the reset guarantees no winning state, "only more" | 130M+ monthly players; ~50% engineered win rate *(Riot describes MMR as matchmaking quality, not engagement tuning)* |
| **Whoop Age** `[11]` | One physiological-age number from 9 metrics; weekly **Pace of Aging** on a **-1 to 3** scale over a trailing 30 days; every biometric translated into years | A weekly identity check-in with anticipatory dread attached; became competitive by accident (Tim vs his wife) | 29.9 vs chronological 34.6 ("4.7 years younger"); VO2 max 58 → **-5.3 years**; **>50% of members use it daily 18 months post-purchase**; >$800M raised, $3.6B valuation |
| **Oura Ring** `[13]` | Three years of wear = 1,095 nights feeding a model of *your* physiology; the accumulation is surfaced in-UI | EU Data Act frees the container (CSV export) but not the intelligence: "you get the numbers, you don't get the intelligence" | **12-month retention high 80s vs low 30s for other wearables** — a ~3x category gap — behind a **$5.99/mo** subscription on your own body's data; $97M US DoD contract |
| **Midjourney** `[13]` | Image-pair ranking trains a personalization profile — a sub-model of your visual taste, not a settings page | Switching to DALL·E means "starting with a stranger's eyes"; IKEA effect compounds it (+63% assigned value) | $500M revenue 2025 on **$0 VC**, ~150 employees (>$3M rev/employee); v7 personalization **default-on**, **70%+ adoption in 3 months** |
| **Ramp vs Brex** `[13]` | Years of automation rules, card policies, vendor categorizations + integrations into accounting/HR/Slack | "Great design got users in the door for both, but only Ramp made the exit door heavier" | Ramp: 50,000+ companies (Shopify, Figma, Notion); Brex acquired by Capital One **Jan 2026 for less than half peak valuation** *(other factors widely cited)* |
| **Ladder — cohort calendar** `[02]` | Every team member pinned to the same workout the same day; live "TEAMMATES WORKING OUT" avatar row with double-tap cheers; milestone reward is unlocking Team Chat | Skipping stops being a private failure and becomes a social one, with no opt-in | ~5,000 on the same workout; Ladder Wall shows **4,944 completions**; **500% growth in 2023**; 2025 iPhone App of the Year finalist. *(The "5,000 simultaneous" claim is inferred from a cumulative completions counter)* |
| **MacroFactor** `[02]` | Deliberately **no streak counter, no red alert state, no guilt push**; algorithm assumes you'll miss targets and uses a ~3-week trend weight to back-calculate real metabolism | Removing shame produces cleaner logging data than adherence-pressure competitors — and clean data is the moat MyFitnessPal can't copy | $72/year, **500,000 users**, 4.8 rating, bootstrapped, premium-only by design (no ads = no engagement-maximizing pressure loop) |
| **Forest** `[04]` | A tree grows during a focus session and **dies** if you leave the app; the tree is the only animated element; "Give up" is a small low-contrast link | Converts "I should focus" into "I don't want to be the one who killed this." The virtual stake is laundered into a real one | **2,000,000+ real trees planted**; **2,500 virtual coins → one real tree** via Trees for the Future |
| **Snapchat streaks** `[07][10]` | 24-hour reciprocal interaction counters | Loss aversion applied to a purely synthetic asset — the streak becomes property, and property can be lost | 477M DAU; **30+ opens/day**; longest recorded streak **4,000+ days**; adolescent study N=2,483 (correlations labelled "weak"); Nevada AG litigation 2024 |
| **Tinder — match celebration** `[21][10]` | A pure database event (mutual right-swipe) rendered as a full-screen explosion, with a non-functional beat before the chat prompt | Nothing is being accomplished in that window — that's the point. Also became the most-screenshotted screens of the 2010s = free viral marketing | 75M MAU; **1.6B swipes/day**; **26M matches/day** vs "thousands" for competitors; **11-min sessions vs 3 min**; 11 app opens/day; 9.6M paying subscribers |
| **Tinder — double-blind matching** `[21]` | Neither party learns of interest until both swipe right; no "who viewed you and didn't reply" | "If you don't know you're being rejected, it doesn't hurt. If it doesn't hurt, you keep playing." Emotional safety as a buildable design property | Competitors lost >70% of users after session one |
| **Robinhood confetti** `[10]` | Full-screen confetti on trade completion (2016), scratch-card "Robin's Reward" | Removed **March 2021** — not because users complained, but because Massachusetts regulators concluded it trivialized investing and nudged trading frequency. "A design element powerful enough to require a specific law against is not decorative" | **$7.5M fine paid January 2024**; consent order prohibits celebratory imagery tied to trading frequency |
| **Spotify Wrapped** `[10][17][01]` | Data that exists year-round is deliberately **gated** and released annually as sequential animated slides ending in a share prompt | The annual gate is the longest stage-1 anticipation window in consumer software. "Wrapped is a ceremony, not a report" — one idea per slide, brutal type contrast, editorial voice | **200M users in the first 24 hours (2025)**, +19% on the prior year which took **62 hours**; 60M stories shared in 2021, 156M engaged the next year, **+461% tweet volume** 2020→2021 |
| **Spotify Discover Weekly** `[17]` | 30 unheard tracks every **Monday**, delivered as an ordinary playlist — the algorithm never surfaces as UI | The recurring, predictable delivery moment *is* the habit; the user meets extreme complexity through a container they already mastered | Launched July 2015; **100B+ tracks streamed**; **56M+ new artist discoveries weekly**; copied by Apple/YouTube/Amazon Music |
| **Netflix — Skip Intro** `[16]` | AI intro detection across the global catalog, shipped as one button | Removes the friction that breaks binge flow; ~60s × 10 episodes hands back ~10 minutes that get spent watching more | **15%** were manually fast-forwarding; **136M presses/day (2022)**; **195 years/day** saved |
| **Netflix — micro-genres** `[16]` | 1,300+ micro-genres ("emotional crime documentaries"), with the *reasoning* exposed inline ("Your taste preferences created this row") | Personalizes the whole discovery experience, not a "Recommended for you" shelf — the catalog stops feeling infinite | 230M users; **80% of viewing** comes from recommendations |
| **Netflix — "97% Match"** `[16]` | A personal percentage instead of a crowd-average star rating | Specific to *you*, so it reads as a trophy; users treat match scores "kind of like dating trophies" | "Netflix and chill didn't happen by accident" |
| **ReelShort** `[08]` | Graduated gate (eps 1–5 free → 6–8 pay with **attention** via a 30s ad for ~60s of content → 9+ pay with **money** at the cliffhanger); zero-decision swipe player; 7-day check-in rewards (day 3 = 100 coins, day 7 = 250), watch-time quests (5/10/20/30/45 min), capped ad-for-coin loop (0/12, 10 coins each) | "Attention, effort, and then money" — each gate normalises the next, so by the hard paywall paying "feels like relief." Candy Crush economics wrapped around 1–2 min soaps | **35.7 min/day/user vs Netflix's 24.8**; ~$40 to finish a series; ~80 paid episodes at 42–66 coins each |
| **Stompers** `[24]` | 7-day M–S streak row where **today's circle is ringed green with a "?"** — an explicitly unresolved slot; cartoon progress world; almost the entire screen is progress state | Zeigarnik: open loops are more memorable than closed ones; users return when the next win looks near | Slide: "stack visible progress / keep thresholds close / completion = reward loop" |
| **Discord** `[24]` | Ambient social proof: presence dots, live reaction counters, online + member counts repeated on every server card in the smallest type | Show, don't tell — proof is ambient, not announced | Marvel Rivals ~928K online / 4.56M members; Midjourney ~860K / 21.2M; Genshin ~468K / 2.25M |
| **16 Personalities** `[01]` | ~10-minute questionnaire → a four-letter type plus a flattering archetype ("The Advocate"), each with its own character illustration and group identity. **No unflattering type exists** | Label absorption — it escapes the product into dating bios and workplace self-explanation. Churning would mean surrendering a piece of self-concept | **Over 1 billion tests taken** |
| **Gumroad — Top Creator badge** `[01]` | Role label, **auto-placed** on the profile and every product page; copy is retroactive praise ("No action needed. You've already done the hard part"); justified around *buyer* benefit so displaying it doesn't read as bragging | The Label recipe at production quality — zero user effort to display | — |
| **Airbuds** `[01]` | Weekly Sunday recap of your top artists ("a tiny Spotify Wrapped every week"); the fuller recap is gated behind **inviting at least 1 friend**, with your own withheld archive visible and dimmed behind the gate | The selfish share function *is* the invite; loss aversion (you can see what you're missing), a price stated as a floor, reward framed as permanent ("FOREVER") and recurring | Threshold: **1 friend**; investor Alexis Ohanian |
| **Wordle** `[01]` | Spoiler-free green/yellow square grid that pastes as plain text into any message thread | The cheapest possible flex loop — the artifact matters more than the surface, and it travels through channels the product doesn't own | Shown in iMessage, not in-app |
| **Uber — end of ride** `[19]` | Haptic buzz, then rate + tip; personalized with the driver's name and face, acknowledging what you already gave | Doesn't manufacture a peak (the peak was arriving); supplies *completion*. Tips retain drivers → better rides → riders return | Tipping stacked above rating in scroll order |
| **Ahead** `[19]` | Personalized brief that visibly **constructs itself in front of you** at the moment of maximum invested effort; session closes with a gentle "come back tomorrow" | Stickiness without guilt mechanics — explicitly rejects the category norm of moral pressure and habit-streak dashboards | Apple Design Award winner |
| **Blinkist paywall** `[06]` | Rebuilt paywall structure-first (plan options, trial framing, streak mechanics), tuned price last | Structure beats price | **+23% conversion, −55% complaints, zero change in churn** at $89.99/yr |

---

## Anti-patterns

**Mechanic-selection failures**
- **Shipping PBL as your default gamification layer.** You built the scoreboard and never built the game `[07]`.
- **Awarding badges automatically at scale.** Automation, not the badge concept alone, is what LinkedIn named as the cause `[07]`.
- **Badge inflation** — 500+ badge types created no value at Google News `[07]`.
- **Gamifying the vanity action.** If your mechanic inflates a metric the business doesn't need, it will succeed at inflating it and fail at the business `[07]`.
- **One global leaderboard.** Unwinnable competition kills competitive motivation and silently churns the 99% `[03][07]`.
- **Shipping a leaderboard as a "nice-to-have."** It "kills the entire thing before it even starts" — the surface exists, the engine doesn't, and it never gets a second chance `[03]`.
- **Mechanical acknowledgement.** A badge or number that feels automated does not do the job of recognition; it has to feel human `[03]`.
- **Cargo-culting the delivery mechanism instead of the principle.** "The takeaway isn't you need instructors" — the asset is the emotional hit of recognition `[03]`.
- **Stacking every mechanic you can think of.** Habitica: users end up managing the game layer instead of doing the behavior `[07]`. **Never 20 loops on one screen** `[24]`.
- **Recognition without mastery.** Mechanics that only signal "you opened the app a lot" are badge theater `[07]`.

**Streak and loss-framing failures**
- **Inescapable streaks** — no goal choice, no freeze, no pause. This is the exact design named in EU regulatory language and in the Nevada AG action `[07]`.
- **Single-thread streaks that just reset to zero.** Nothing accumulates, so there's less to lose `[09]`.
- **The shame stack** — red over-target numbers, breakable streaks, "you missed your goal" pushes. It backfires twice: users feel bad and stop logging, and the ones who keep logging start gaming their entries, poisoning your dataset `[02]`.
- **Assuming loss framing is free.** Its cost is data quality, regulatory exposure and trust `[02][07]`.

**Reward-design failures**
- **Purely predictable reward schedules.** Flat XP-per-lesson is nice but doesn't generate the chase state `[09]`.
- **Making everything random.** Surprise must sit inside an otherwise transparent system or users lose the ability to track progress `[09]`.
- **The "Congratulations" modal.** Same information as an event, delivered like a bank statement `[10]`.
- **Shipping stage 2 only** — the reveal with no anticipation before and no celebration after `[10]`.
- **Removing uncertainty entirely.** Handing the user the result with no gap bypasses the dopamine system `[10]`.
- **Batching N results into one screen.** Collapses N potential dopamine events into one `[10]`.
- **Copying Wrapped as a data summary.** Teams build annual stat dashboards and miss that it's a ceremony, not a report `[10]`.
- **Generic milestone bragging.** "You completed 10 tasks" reveals nothing about the person except that they used an app; users sense when an achievement is algorithmic `[17]`.

**Structural failures**
- **Terminal achievement states.** An end screen is a churn trigger `[09]`.
- **Purely private progression.** A user can quit the craving loop and break the streak with nobody watching `[09]`.
- **Social features as a bolt-on**, or buried in navigation, or absent `[11]`.
- **Waiting for churn before adding community.** You'll be rebuilding from scratch against products already embedded in identity `[11]`.
- **Copy-trading / follow-the-leader as the community pitch.** Robinhood deliberately positions around learning and discussion — the alternative builds a leaderboard of luck and churns `[11]`.
- **Optimizing engagement alone.** Engagement is a treadmill; every competitor can copy your animations, and users can jump to a different treadmill `[13]`.
- **Treating a settings page as personalization.** Explicit preference toggles are portable in seconds; a trained sub-model is not `[13]`.
- **Storing data without learning from it.** Regulation can force the container open; only a model trained on the individual stays behind `[13]`.
- **Bolting a referral program onto a product with no flex.** "A referral program bolted onto something nobody wants to show off does zero. Nada" `[01]`.
- **Chasing virality before attachment** `[17]`.
- **Boring win notifications.** A plain notification plus a list entry makes users numb to small wins → no emotional investment → no habit → deletion `[21]`.
- **Ignoring micro-frictions because each is individually trivial.** They compound into user experience debt and bleed users before anyone connects churn to a cause `[16]`.
- **Assuming motivation is solitary** in a category where the behavior is inherently shared. A leaderboard you have to opt into is not the same as visible cohort presence `[02]`.
- **Treating users like robots who only want efficiency.** Personality-free, feedback-free apps let users complete tasks but never form attachment — which raises churn `[14]`.
- **Ceremony attached to financially consequential actions.** Robinhood's confetti drew a $7.5M consent order. Tim presents this as proof of potency; the ethical caution is yours to add `[10]`.

---

## Decision guide

**IF you are about to add points, badges or leaderboards as your first retention feature THEN stop — build the underlying game first.** PBL is the readout, and three major platforms removed theirs after their own data showed it inflated the wrong action `[07]`.

**IF you already have a leaderboard and engagement is flat THEN shrink the cohort before you touch the UI.** Cohort size is a tunable lever; target ~5–12 visible rivals scoped by geography, cohort or friend graph. More rows and nicer badges won't fix a missing comparison `[03][07]`.

**IF your leaderboard has good day-one engagement but no long-tail retention THEN the missing half is recognition, not ranking** — add a named, human-feeling acknowledgement (kudos, comments, callouts) on top of the rank `[03]`.

**IF your product's core behavior is verifiable and the stakes are low (rewards, earning, games) THEN loss-framed streaks are a legitimate lever** — compound them into ownable assets, make the freeze earned, and put a countdown plus one green CTA on the rescue screen `[09][14][12][06]`.

**IF your product depends on honest self-report (nutrition, mood, health, finances) THEN delete the shame mechanics** — no breakable streaks, no red over-target numbers, no guilt pushes. Build the algorithm to expect non-compliance instead. Clean data becomes the moat `[02]`.

**IF you ship a streak at all THEN wrap it in agency** — user-chosen goal level, a pause/freeze, and adaptive controls to streamline secondary mechanics. Regulatory test: does it "penalise taking a break"? `[07]`

**IF your users are minors or the category is health/financial THEN treat streaks, loot mechanics and celebratory imagery as regulatory surface, not polish.** Snapchat drew a state AG action; Robinhood paid $7.5M; the EU Digital Fairness Act names streaks and reward loops explicitly `[07][10]`.

**IF you are running streaks + points + badges + challenges + leaderboards simultaneously THEN remove mechanics rather than adding them** — you are in the overload zone, and Habitica is the proof case `[07][24]`.

**IF the behavior you want is genuinely good for the user (fitness, focus, learning) THEN prefer completion drive over loss aversion** — a visible partial-progress loop tied to a real-world outcome (Activity Rings) rather than a counter they're afraid to break `[07]`.

**IF the user is mid-effort on something hard (focus, workout, habit) THEN wit and charm are useless — put the stake on screen, not the metric.** Pick one format: a visible object that dies, a streak that breaks, a status that drops, a story that pauses, a relationship that fades `[04]`.

**IF users can "finish" your product THEN you have a retention ceiling** — either uncap the lifetime metrics (Peloton) or add seasonal resets that preserve earned status (League) `[09]`.

**IF you have a result to deliver — report, score, payout, match — THEN ask whether you shipped a gift or a receipt.** If it's a receipt, add an anticipation window before it and a beat of afterglow after `[10]`.

**IF you have N results to show THEN reveal them one at a time with a visible counter ("3 of 5")** — same data, N dopamine events instead of one `[10]`.

**IF you already hold data the user would find flattering THEN gate it and release it on a schedule.** The gate *is* the anticipation; weekly cadence compounds faster than annual `[10][01]`.

**IF you want the share to also acquire THEN fuse the share action and the invite action into one mechanic** and set the invite threshold at 1 friend `[01]`.

**IF you have a referral program that isn't working THEN check whether you have a flex at all.** Build the brag-worthy artifact first; referral is downstream of it `[01]`.

**IF your product is fundamentally a utility THEN relocate the center of gravity to identity before agents commoditize the task layer.** Diagnostic: "if an AI could do everything my app does through a single text message, why would anyone open my app?" `[11]`

**IF session 1,000 is functionally identical to session 10 THEN you have an engagement product with no lock-in** — find the single action that compounds personalization, turn it on by default, and make the deposit automatic `[13]`.

**IF you're deciding where to spend a limited emotional-design budget THEN pick the single most-used daily surface and the one highest-emotion moment** — frequency multiplies the effect, and peak–end means the middle is noise `[14][19]`.

**IF you're designing a session's ending THEN put the peak *before* it.** The end is for closure — a check mark, a summary card, an invitation to return tomorrow — not for the wow `[19]`.

**IF your app's category assumes the behavior is solitary THEN converting one solo moment into a synchronized cohort ritual is likely your highest-leverage retention move** — and it works without asking anyone to opt in `[02]`.

**IF you're diagnosing early churn THEN look at onboarding before features.** 77% of users are lost in the first 3 days; the fix is delivering felt value inside the first 60 seconds, keeping steps finishable, and letting users *do* the core action rather than read about it `[22]`.

**IF your onboarding has many steps THEN show progress *without* the total count** — a bar with no "3 of 12," Typeform-style. Revealing a high step count before value has landed makes the brain price the effort and bail `[22]`.

**IF you want longer sessions THEN count the decision points between open and value and delete them** — every unnecessary tap, extra screen and unearned "Are you sure?" is an exit ramp `[08]`.

**IF users are manually working around something in your product THEN that's your Skip Intro** — the highest-value micro-friction to eliminate `[16]`.

---

## Caveats worth carrying

The notes flag these repeatedly and an agent citing this material should carry them:
- **Almost none of these mechanics come with before/after retention data.** Every scale metric quoted (Spotify, Tinder, Snapchat, Strava) belongs to an already-huge product; it is not a causal measurement of the mechanic `[10][03]`.
- The only retention delta attributed to a specific mechanic in the whole corpus is Freecash's "several percentage points" on day-7 — agency self-reported, no baseline `[06]`.
- **Case selection is survivorship-biased throughout**; there is no counter-example of a product that used these patterns and failed `[04][01]`.
- Peloton's 92–93% is *Connected Fitness subscription* retention — a self-selected, $2k-hardware cohort, not comparable to the "average app retains 7% at 30 days" benchmark it's contrasted with `[09]`.
- Several headline numbers disagree with their own on-screen sources (Apple's 48%/140k vs the narrated 49.5%/160k; Peloton 90% vs 92–93%) `[07][09]`.
- The corpus repeatedly raises the ethics of "trapping people in loops they didn't sign up for" and then drops it. No line between persuasion and coercion is defined anywhere `[09][24][21]`.

---

## Sources

- `[01] The Twisted Psychology Behind Top 1% Apps — https://www.youtube.com/watch?v=nQKWYmrixCU`
- `[02] The Weird Design Playbook of 6 App Outliers — https://www.youtube.com/watch?v=HA4yB_sd62Q`
- `[03] Why Leaderboards Kill App Retention (How To Fix It) — https://www.youtube.com/watch?v=BxhsCu9hNpY`
- `[04] How Top 1% Indie Apps Beats Giants — https://www.youtube.com/watch?v=MAvKHToGiVY`
- `[06] I Studied 10,000 Paywall Screens (THIS Makes People Pay) — https://www.youtube.com/watch?v=sYRhXB_ZcLI`
- `[07] I Studied 500+ Gamified Apps (Here's What Actually Works) — https://www.youtube.com/watch?v=LXX_qOA5D8E`
- `[08] How a Chinese Unicorn App Out-Addicts Netflix — https://www.youtube.com/watch?v=7dCZrtH15zc`
- `[09] How To Scientifically Design Addictive Apps — https://www.youtube.com/watch?v=yBpv5rZoBjA`
- `[10] The 3-Stage Trick Behind Every Addictive App — https://www.youtube.com/watch?v=uoLpH_20qKw`
- `[11] Why Most SaaS Companies Will Die in 2026 — https://www.youtube.com/watch?v=ZXWUg1e1PAs`
- `[12] Our World Class App Design Formula — https://www.youtube.com/watch?v=wmTkiF23GRQ`
- `[13] The New Way Apps Dominate in 2026 — https://www.youtube.com/watch?v=yYs7iv81Ppk`
- `[14] How Addictive Apps Are Made — https://www.youtube.com/watch?v=AnL49w4yIOw`
- `[16] How Netflix Made Us All Binge (Design Breakdown) — https://www.youtube.com/watch?v=hIm3d3JAsPw`
- `[17] Viral Design Tricks from Spotify (Founder Playbook) — https://www.youtube.com/watch?v=Tpg0pxKHrCA`
- `[19] The Tiny Design Rule Behind Top 1% Apps — https://www.youtube.com/watch?v=11h4H3TAGkM`
- `[21] How Tinder's Design Hacked Society — https://www.youtube.com/watch?v=4yKtlOWClhA`
- `[22] The Hidden App Growth Killer (How To Avoid It) — https://www.youtube.com/watch?v=55hDj88zKa8`
- `[24] How Top 1% Apps Keep You Hooked — https://www.youtube.com/watch?v=D9SXaj6qQIQ`
- `[26] The Secret Behind Weirdly Addictive Apps — https://www.youtube.com/watch?v=Du2lkZ_cux8`
