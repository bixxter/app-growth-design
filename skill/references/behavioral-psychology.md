# Behavioral Psychology & Addictive Design

The "why humans do this" layer beneath app design, growth and monetization. Distilled from 25 Tim Gabe teardowns. Source markers `[NN]` map to the Sources list at the bottom.

Two framing notes before you use any of this:

- **Almost every mechanic here is asserted from survivorship-selected case studies, not measured.** The corpus contains essentially no before/after retention deltas attributable to a mechanic. Treat these as hypotheses to test, and prefer the entries in the Case Bank that carry real numbers.
- **Several mechanics below are under active regulatory attack.** The EU Digital Fairness Act draft explicitly names "reward loops and 'daily streaks' that penalise taking a break," infinite scroll/autoplay, and loot-box mechanics, with a legislative proposal targeted for late 2026 `[07]`. Robinhood paid $7.5M in Jan 2024 over gamification `[10]`. Nevada's AG sued Snapchat over streaks in 2024 `[07]`. Potency and legality are different axes.

---

## Core principles

### 1. Effort is the amplifier on the payoff, not friction to be minimized

Effort justification (Aronson & Mills, 1959): the more a user invests before a payoff, the more they value that payoff — *even when the output is objectively mediocre* `[01]`. Stacked on the Barnum effect (Forer, 1948 — a vague, flattering output engineered to feel personally specific), a generic result becomes "holy dang, this is me" instead of "huh, kind of accurate" `[01]`.

- Starcrossed (astrology, **one founder**) extracts birthday, **exact birth time**, birth city, then runs a theatrical loader ("reading your chart"), then paywalls the reveal at peak sunk cost. Its own FAQ admits each planet has **two** pre-selected zodiac options — the output is assembled, not discovered `[01]`.
- Cal AI: **20+ step quiz** before the product, **$35M revenue in year one** `[05]`. Its shipped paywall flow runs **28 screens** before showing a price `[06]`.
- Noom: **113 screens, 10–15 minutes**, and the paywall lands *only after* the time and emotional investment. $540M raised at $3.7B `[05]`.
- Precision of input sells precision of output — ask for things that *feel* precise (exact birth time, not just birthday) `[01]`.

**Corollary — theatrical loaders.** Narrate what the system is supposedly doing so assembly reads as discovery `[01]`. Ahead (Apple Design Award) shows the personalized brief *constructing itself* on screen rather than just appearing `[19]`.

### 2. Dopamine fires on anticipation, not on receipt — so the ceremony is the product

Berridge's finding, rendered in the on-screen chart: dopamine peaks between *Signal* and *Work*, falls to zero *before Reward*, and the **50%-certainty curve peaks higher than the 100%-certainty curve** `[10]`. Removing uncertainty and handing the user the result bypasses the dopamine system entirely.

The audit binary is **Gift vs Receipt** `[10]`. A receipt is a "Congratulations" modal — same information, delivered like a bank statement. A gift wraps it in three stages:

1. **Anticipation** — outcome uncertain, a beat to lean forward.
2. **Reveal** — visual, haptic, audio weight. A landing, not a fade-in.
3. **Celebration / afterglow** — confetti, glow, share prompt, a moment to sit with it.

"Most apps deliver stage two only, and often poorly" `[10]`. Stage 3 is the one Tim says most apps skip entirely and where long-term retention lives `[10]`.

**Sequential > simultaneous.** N results delivered at once = one dopamine event. The same N delivered one at a time = N events, because each reveal resets the anticipation cycle `[10]`, `[07]`. Game Blazers renders this as an explicit "EPIC 3/5" counter — the counter *is* the mechanic, because it promises more unknowns `[07]`, `[10]`.

**Rare outcomes get a different environment, not a badge.** Game Blazers signals rarity by flooding the whole screen magenta with bloom, so the tier is felt before it's read `[10]`.

### 3. Variable-ratio reward produces craving; craving is not pleasure

Rooted in Skinner's operant-conditioning boxes: unpredictable reinforcement schedules produce the most compulsive behavior of any pattern, and the brain stays in a chase state rather than a satisfied one `[09]`. Same pathway as slot machines.

Design constraint that keeps it usable: **keep most of the system predictable and transparent, then inject controlled surprise** — an unexpected bonus, a milestone that arrives early. Do not randomize everything, or users lose the ability to track progress `[09]`.

- Finch nests two unpredictables: a daily discovery drop (15–20 unique discoveries per location) *and* a six-trait pet personality that evolves without the user choosing it. The chase state never resolves `[09]`.
- League of Legends' hidden MMR holds players near a **50% win rate**; the oscillation *is* the craving `[09]`.
- Freecash's "Streak Reward" is a CS:GO-style case spinner: certainty that *a* reward comes, uncertainty about which, plus a disclosed "Case contents — 6 items" prize pool that raises anticipation by making the upside range legible while keeping the outcome unknown `[09]`, `[10]`.

### 4. Identity is the only retention nobody churns out of

"Your product stops being a thing they use and becomes a thing they are" `[01]`. Once someone accepts a label they defend it and return to whatever reinforces it — leaving means surrendering a piece of self-concept. Tim's economic claim: get this right and you've done something "no ad budget can buy" `[01]`.

**The Label recipe** `[01]`:
- **Format:** a *type* (INFJ / "The Advocate"), a *status* (top X% of listeners), or a *role* (Top Creator).
- **Constraints:** specific enough to feel earned; flattering enough that they want it. **No unflattering buckets** — 16 Personalities' Diplomats page has no losing type, and every type gets a character illustration, not just a code.
- **Placement:** somewhere they can show it off — and *auto-place it* so the user never does the work. Gumroad stamps the Top Creator badge onto the profile and every product page automatically, frames it as retroactive praise ("No action needed. You've already done the hard part"), and justifies it around *buyer* benefit so displaying it doesn't read as bragging.

**Celebrate who they are, not what they did** `[17]`. "You completed 10 tasks" is hollow — it could describe anyone and reveals nothing except that they used an app. Replace with a character read derived from a real pattern: "You're a hardworking night owl who does their best work after 9pm"; "You're the type of person who never misses a Monday workout, even when it's raining" `[17]`.

**The identity metric.** One number, computed from data the user can't get elsewhere, refreshed on a fixed cadence so a check-in ritual forms `[11]`. Whoop Age: 9 metrics → a physiological age (29.9 vs chronological 34.6, "4.7 years younger"), with **Pace of Aging** refreshed weekly on a **-1 to 3** scale from the trailing 30 days. Every raw biometric is translated into the identity currency: "VO2 max 58 → **-5.3 years**," not "58 ml/kg/min" `[11]`. Give the scale a clearly bad end so the user feels anticipatory dread and self-corrects, and make it comparable between two people who know each other — peer comparison is what converts a metric into an obsession `[11]`.

**The strategic version.** As agents absorb the functional layer, "the more of the functional layer agents absorb, the more the emotional layer becomes the actual product" `[11]`. Segment your users by *reason for being here*: utility users (GPS tracking) churn to a better agent; identity users (their club is here, their PRs are public records) cannot be poached by a smarter algorithm `[11]`.

### 5. Social comparison is the engine; the leaderboard is only the surface

"A leaderboard is the surface. Social comparison is the psychological engine underneath" `[03]`. Ship the surface without the engine and you have "a glorified list," and lists don't move retention.

The diagnostic: **does a user leave your leaderboard believing a specific named other person is beating them?** If not, more rows, nicer rank badges and a faster refresh won't fix it `[03]`.

**Three moves** (his on-screen wording) `[03]`:
1. put the comparison at completion
2. localise the cohort so winning feels possible
3. acknowledge people's progress

**Winnability is the strongest predictor of competitive motivation** `[07]`. A global-only board tells 99.99% of users they lost, so most stop trying `[03]`, `[07]`. Strava replaced one global ranking with thousands of hyper-local micro-competitions — segments scoped to a *named quarter-mile of pavement*, sorted by age and gender cohort. The competition surface literally *is a map of your neighborhood* `[07]`, `[03]`.

**Working cohort size: roughly 5–12 visible rivals** — the only anchors in the corpus are "that dozen riders who happened to ride the same exact hill in your city" and a five-row Leagues board with the user placed third with two beatable people above `[03]`. He never states this as a rule; treat it as a bracket, not a law.

**Cohort size wins the entry; being seen wins the tenure** `[03]`. "The leaderboard creates the race. The callout is the boost that makes people push." Peloton's mechanism is instructors calling out names live in front of thousands — but the takeaway is explicitly *not* "you need instructors," it's the emotional hit of recognition, which most apps must deliver asynchronously (Strava's kudos + comment thread on the completion card) `[03]`.

**Visibility is what makes the other mechanics irreversible.** A user can quit a craving loop and break a streak with nobody watching; visible status can't be abandoned quietly, because quitting becomes a public admission `[09]`. The strongest evidence in the corpus for the raw force of status: Strava removed **3.9M "anomalous" activities** after users faked workouts with vehicles — for leaderboard position with **zero extrinsic reward**, no prize money, nothing but bragging rights `[09]`.

**Show activity, don't claim it.** Discord's discovery page repeats a green presence dot plus online count plus member count on every card — "proof is ambient, not announced" `[24]`. Peloton's challenge card gives the participant count and the "2 days left" deadline as much visual weight as the goal itself `[09]`.

### 6. Put the stake on screen, not the metric

For any behavior you want to persist: don't track the behavior — make its *absence* cost something the user can see `[04]`. On-screen rule: "when you need a behaviour to last, maybe don't track it. maybe instead make the absence of it cost something."

**Menu of stake formats** `[04]`: a stake that's visible (Forest's tree), a streak that breaks, a status that drops, a story that pauses, a relationship that fades. The format is free; the felt loss is mandatory.

Losses are felt roughly **twice as intensely** as equivalent gains, which is why a 47-day streak hurts to break even though the number is objectively meaningless `[09]`. Two upgrades that make loss aversion bite harder:

- **Make the streak unlock accumulating assets rather than incrementing a counter.** Duolingo's is "one counter, one number" — break it and you just lose the count. Freecash's diamond streak unlocks diamonds at milestones (first at day 7, next at day 42) with enough tiers to keep collecting "for years," so lapsing forfeits owned property `[09]`, `[14]`.
- **Make the loss state visually painful.** Freecash's screen stack, top to bottom: red threat headline ("10-Day Streak in Danger" / "Don't lose your 10-day streak!") → 3D diamond with the streak number embossed → the dollar amount at risk ("up to $10 today, and up to $1,000 in 4 days") → one lime-green CTA naming the exact game to play → a live countdown (9h 52m 32s) `[14]`, `[12]`, `[06]`. Red carries the threat, green carries the only exit.

**Audit for done-states.** If a user can complete your app, that completion is a hard ceiling on retention `[09]`. Peloton's lifetime metrics never cap — a user at 500 classes sees 600, 700, 1,000 as reachable. League resets rank seasonally while preserving honor levels and cosmetics, so there is no winning state, "only more" `[09]`. Peloton's badge wall always renders the next few *unearned* rungs (900 / Millennium / 1500 / 2000 greyed out) so the ceiling is visible but the next step is close `[07]`.

### 7. Memory compresses an experience to its peak and its end

Kahneman's peak–end rule: everything between is noise `[19]`. Friction in the middle is survivable; a flat peak or a flat ending is not. Disney accepts 90-minute queues and $10 fries and over-invests in the high points and the final moment (fireworks, exit music) — ~70% of visitors return `[19]`.

**Peak first, end second.** Don't save the magic for the finish; the peak belongs at the moment of highest user investment, and the ending is for closure `[19]`. Airbnb's peak is *finding the right listing* (micro-animations plus tags calling out what's uniquely good about your pick, exactly where decision anxiety is highest); the end is the reservation confirmation animation `[19]`.

**Negative peaks are as memorable as positive ones.** Audit wait screens, error states and long forms with one question: "where might someone feel stuck or uncertain?" `[19]`

**Attach your asks to the peaks.** Users riding a win are more receptive to upgrade, rating, share and referral asks — and more likely to brag, which is the viral loop `[15]`. The failure mode Tim says he sees repeatedly: paywalls, tutorials and forced flows shown when users are frustrated or confused `[15]`. Uber's post-ride sheet is the reference ending: haptic buzz, driver's name and face, acknowledgment of what you already gave ("You already tipped $4.61 for Hector"), tip stacked above rating, everything optional `[19]`.

### 8. Open loops pull harder than closed ones — but only a few at a time

**Completion drive (Gestalt closure).** A 90%-filled circle is a visually unresolved pattern the brain treats as demanding completion. Apple's three Activity Rings need no points or badges to create the pull, and closing them maps to a real-world health outcome rather than engagement theater `[07]`. Tim frames this as the alternative lever to streaks: **anticipation toward closure rather than fear of loss** `[07]`.

**Zeigarnik effect.** People remember unfinished tasks better than finished ones. Keep thresholds close, make the next level feel achievable, treat completion itself as the reward, represent progress visually `[24]`, `[22]`. Stompers' screen is almost entirely progress state, with today's slot ringed green and marked "?" — an explicitly unresolved loop `[24]`.

**The ceiling.** "Don't show 20 loops on one screen" — piling on progress mechanics reintroduces the Hick's Law problem that activation design was supposed to solve `[24]`. This is the video's own sharpest self-limiting rule, and no heuristic is given for how many is safe.

### 9. Every unnecessary decision is an exit ramp

"The fewer exit ramps you build, the more momentum your product carries" `[08]`. Count exit ramps, not screens.

- ReelShort's player has **no chrome at all**: no episode list, no progress bar, no scrubbing, no "Are you still watching?", no rotation. Swipe-up is the only navigation. Netflix's mobile flow has "at least six decision points" between app-open and playback — browse → scroll rows → pick a title → maybe watch a trailer → hit play → rotate → dismiss controls `[08]`. Result: **35.7 min/day per US user** vs Netflix's 24.8, Prime Video's 26.9, Disney+'s 23 `[08]`.
- **Hick's Law:** more choices, slower decisions. Apple Fitness+ opens on one photographic hero card and one lime "Let's Begin" pill — the only saturated color on screen. Everything else is pushed below the fold, and the reduction continues *after* activation (the session player has three controls) `[24]`.
- **Fitts's Law:** size conveys priority, proximity to the thumb reduces the cost of acting. Waze's report sheet is oversized circular tiles with one-word labels and zero reading load `[24]`.
- **Micro-friction compounds into "user experience debt."** Netflix saw **15% of viewers manually fast-forwarding** intros, built AI intro-detection, shipped one button — **136M presses/day (2022), 195 years of cumulative user time saved per day** `[16]`.
- **Ethical line:** *removing* unnecessary UI is clean; *hiding* controls four levels deep is not `[08]`. Cut any confirmation prompt that doesn't protect against a real mistake.

**Counter-pressure.** Zero friction is not the target — there is a **friction sweet spot** `[15]`. Too much friction and users give up; too little and they're never guided to value, so they also give up. Most apps err on the "too much" side, which is why "strip it down" is the common advice — but over-stripped onboarding confuses people. For data-dense screens, tier the data behind expandable tooltips rather than deleting it or dumping it all `[15]`.

### 10. Remove the emotional risk and people act more

Tinder's double-blind matching made rejection *invisible*: both parties must swipe right before either learns of the other's interest, so nobody ever sees who passed on them `[21]`. Competitors made rejection visible and personal (profile views without replies, unanswered messages). The rule as he states it: **"If you don't know you're being rejected, it doesn't hurt. If it doesn't hurt, you keep playing."** Emotional safety is a buildable design property that increases risk-taking and activity. Result: 11-minute average sessions vs ~3 minutes for competitors `[21]`.

The same instinct shows up as trust-building in intimidating categories: Phantom pre-fills the username field with a valid generated handle, confirms availability inline in green, and states reversibility in the subcopy ("Usernames can be changed later on") `[26]`. Granola pre-empts the objection *inside* the permission screen: "No creepy bots join your meeting" `[05]`.

### 11. Reward magnitude beats reward existence, and framing beats both

Framed as being **given** rather than **accessed**, perceived value goes up (Kahneman/Tversky endowment framing, cited loosely) — "unwrapping versus viewing is not cosmetic" `[10]`. Once framed as a gift, the output becomes something the user feels they own and can lose.

- **Gate data you already have.** Spotify holds a year of listening history and releases it once — the annual gate is the longest stage-1 anticipation window in consumer software. **200M users in the first 24 hours (2025), a 19% increase on the prior year, which took 62 hours** to hit the same milestone `[10]`. Companies copying Wrapped build data summaries and miss that "Wrapped is a ceremony, not a report" — one idea per slide, brutal type-scale contrast, an editorial voice with attitude, not a chart `[10]`.
- **A personal number outranks a crowd average.** Netflix's "97% Match" is specific to *you* and reads as a trophy; a star rating is a crowd average `[16]`.
- **Name categories in human language.** "Because you watched…" and "quirky TV shows" read like conversation, not system output — and when users adopt your interface's vocabulary the product spreads for free `[16]`.

### 12. The share artifact matters more than the share button

**Find the flex:** the one true thing your product already knows about the user that they'd be proud to broadcast, packaged as a clean flattering card `[01]`. Unlike Mirror and Label mechanics, this one **must not be faked** — a fabricated status is not something a user can safely broadcast `[01]`.

**Fuse share and invite into one mechanic.** Airbuds gates the fuller weekly recap behind inviting friends, so the selfish act of showing off *is* the invite. The gate screen shows the user's *own withheld archive* dimmed behind the modal (loss aversion, not curiosity), states the price as a floor ("at least **1 friend**"), and frames the reward as permanent and recurring ("UNLOCK YOUR WEEKLY RECAP **FOREVER** … every Sunday") `[01]`.

Design rules that fall out:
- **Set the invite threshold low** — 1 friend, not 3 or 5 `[01]`.
- **Give the flex a recurring cadence.** Weekly (Airbuds, Sundays) compounds faster than annual (Wrapped) `[01]`.
- **Pre-render the artifact for the destination.** Duolingo ships a square orange share card ("I'm on a **150** day learning streak!") into a native share tray — not a screenshot `[10]`.
- **Make it travel outside your app.** Wordle's grid is plain characters that paste into any message thread, spoiler-free `[01]`.
- **Sequence matters:** virality only fires on users already attached. "You can't engineer viral sharing if users don't stick around long enough to develop that emotional connection" `[17]`.

### 13. Emotional feedback closes the loop that drives repetition

A green checkmark is information; a character cheering is feedback you feel (Don Norman lineage) `[26]`. Four moves: instant emotional feedback, celebrate small wins, use character expressions, add progress animations `[26]`.

Duolingo's lesson-complete screen ranks emotion first (characters + spark bursts), personality second (headline "Hide the evidence! You fixed 3 mistakes. Don't tell anyone."), metrics third (COMBO 07 / GOOD 85% / SPEEDY 1:20), action last (CLAIM XP) — and the XP sparks physically travel into the counter, so the reward is *watched*, not read `[26]`. Animate idle states, not just event states, so the product feels alive when nothing is happening `[26]`.

In intimidating categories (finance, crypto, health, insurance), polish is a **trust signal**, not fluff `[26]`. Phantom's mid-2023 refresh; Revolut's scrubbable charts with a glowing touch node and 3D card renders that catch light, tracking deliberately alongside its move upmarket — as price goes up, the product must *feel* more expensive `[26]`.

### 14. Escalate commitment: attention, then effort, then money

Don't go free → paid in one step; design graduated friction `[08]`. ReelShort's staircase:

| Stage | Episodes | Currency | Intent |
|---|---|---|---|
| 1 | 1–5 | nothing | prove worth. No account, no signup, no email |
| 2 | 6–8 | **attention** (30s ad per ~60s episode) | a deliberately bad trade — you learn that paying to skip is an *upgrade* |
| 3 | 9+ | **money** (coins) | fires at the cliffhanger; paying "feels like relief" |

Each step normalises the next `[08]`. **Emotional peak pricing:** the ask lands the instant the twist lands, when willingness to pay is highest.

The subscription analogue is **commitment size beats total cost** `[06]`. Weekly plans convert **1.7–7.4x better than annual across every price tier**, despite $7/week (~$364/yr) being a far worse deal than the same app's $38/yr annual. What blocks a subscription is the size of the single commitment demanded on first contact, not total money. The annual revenue is deferred, not lost — by ~month four the user is invested enough for the year commitment. Weekly's revenue share went **43.3% → 55.5% in 24 months**; monthly's halved, 21.1% → 11.7% `[06]`.

### 15. Transparency is a conversion mechanism, not a cost

Ambiguity about *when* you'll be charged costs conversions and creates cancellations at the same time `[06]`. "Trust converts better than tricks."

- Blinkist added an explicit "How your free trial works" timeline — Today: instant access → Day 5: reminder → **Day 7: charged on December 29** (an absolute date) — plus literal tap-by-tap cancellation instructions and a CTA sub-label reading "2 taps to start, super easy to cancel." Result: **+23% conversion, −55% complaints, no change in churn** `[06]`.
- Uber replaced a fare *range* with a single estimated price (certainty effect) — double-digit increase in rides per user `[23]`.
- The corpus's own dark-pattern counterexample: ReelShort's **anti-calculator** — variable per-episode prices (42–66 coins) so no running total is possible, awkward exchange rates (500/$4.99, 1,100/$9.99) that defeat mental math, no spend dashboard, escalating prices timed to ride the sunk-cost curve, and atomised microtransactions (~80 unlocks ≈ $40 for one show). Tim flags it as a dark pattern and names the ethical fork: currency abstraction itself is neutral (OpenAI tokens, Vercel compute units, AWS instance hours), the variable is **whether you help users stay informed or actively prevent them from figuring it out**. The ethical build is the same abstraction *plus* a running-total spend view `[08]`.

### 16. Investment compounds into something the user can't export

Nir Eyal's stored value (*Hooked*, 2014), updated: deposits no longer just store data, they train an intelligence that lives on your servers and cannot be transferred or rebuilt overnight `[13]`. The IKEA effect gives it emotional weight — people assign **+63% more value** to things they helped create (Norton, Mochon & Ariely) `[13]`.

The diagnostic: **if a user left today for a competitor, what would they have to rebuild from scratch?** If the answer is "nothing much," there is no investment layer `[13]`. Corollary test: is measured outcome quality actually better for a 6-month user than a 10-day user? No gap means the trap isn't tightening `[13]`.

- Midjourney's personalization profile is a trained sub-model of your visual taste (not a settings page); on by default in v7, **70%+ adoption within 3 months** `[13]`.
- Oura: three years of wear = 1,095 nights. The EU Data Act frees the *container* (CSV export) but not the *model* — "the regulation freed the container, but it couldn't free the intelligence." Retention **high 80s at 12 months vs low 30s for other wearables**, behind a $5.99/mo subscription on data your own body generates `[13]`.
- **Make the investment visible** — surfacing "your body has been tracked for 1,095 nights" reframes retention as partnership rather than capture `[13]`. (Tim's own open question: that's a perception fix, not a power-asymmetry fix.)
- **Automate the deposit.** If investment requires deliberate effort, most users won't make it `[13]`.

### 17. Consistency is a switching cost

"Design consistency isn't about making things look pretty. It's about creating switching costs" `[17]`. Not pixel-parity — making *behaviors automatic*. Every playlist behaves identically, every recommendation feels familiar, so switching means breaking ingrained habits and relearning from zero. In crowded markets users switch on feelings, not features `[17]`.

Apple's habit-training model, for context: ship a subtle persistent visual hint (the home indicator line), shift the hardware/UI slowly across releases (physical button → software button → pure gesture), and **never ship a tutorial** — behavior is shaped by cue plus repetition. Claimed result: billions retrained over roughly a decade without noticing `[18]`.

### 18. Shame is a retention mechanic that poisons your data

Every macro tracker was built on "shame motivates compliance" — red over-target numbers, breakable streaks, "you missed your goal" notifications. MacroFactor inverted it: the algorithm **assumes users will miss targets**, combines logging with a ~3-week smoothed trend weight to back-calculate real metabolism, and ships no streak counter and no red-alert state anywhere `[02]`.

The mechanism is a data argument, not a kindness argument: shame backfires twice — users feel bad and stop logging, and the ones who keep logging start gaming their own entries. MyFitnessPal's user-submitted database carries green-verified entries like "Zero Sugar Cola, serving size 1 slice, 240 Cal." Clean data is the moat `[02]`. Bootstrapped, $72/year, 500,000 users, 4.8 rating.

Ahead won an Apple Design Award by explicitly rejecting the wellness-category default of moral pressure and habit-streak dashboards for a kind, guided flow ending in a gentle nudge to return tomorrow `[19]`.

### 19. Gamification depth is non-monotonic — past a peak, more mechanics reverse engagement

A 2025 *Frontiers in Psychology* paper models gamification feature richness against adherence intention as **S-shaped**: an **engagement zone** (low → moderate richness raises intention) and an **overload zone** (excessive feature sets weaken it) `[07]`. Practical test: if you're running streaks + points + badges + challenges + leaderboards simultaneously, you are past the peak, and the fix is cutting, not adding. The paper's own prescription (never spoken aloud in the video): provide **adaptive controls that let users streamline secondary mechanics** `[07]`.

Habitica is the overload proof — daily tasks become quests, habits become character stats, missing a task damages HP, plus pets, equipment, gold and avatars. A peer-reviewed study found **100% of participants experienced counterproductive effects**; users managed the game layer instead of doing the behavior. Its onboarding checklist is entirely about the game (Hatch a Pet, Feed a Pet, Purchase Equipment), not about your tasks `[07]`. *(No sample size shown; a 100% result almost certainly implies a small qualitative study.)*

### 20. Recognition ≠ mastery, and PBL is the scoreboard, not the game

Yu-kai Chou, quoted: points/badges/leaderboards are "the scoreboard of a game, not the game itself." Nobody walks into a stadium, looks at the scoreboard, and feels motivated to play `[07]`.

A 2024 Springer Nature meta-analysis (35 interventions, ~2,500 participants, 2011–2022) found gamification reliably raises perceived **autonomy** (g = 0.638) and **relatedness** (g = 1.776) but has **minimal impact on competence** (g = 0.277) — and competence is the need most tied to long-term intrinsic motivation `[07]`. So most apps engineer *recognition* and forget to engineer *mastery*.

Ship at least one number that moves because the user's actual capability changed: Peloton's real-time watts output and auto-flagged personal records (a 100-ride badge means something *because it represents 100 actual rides*), Chess.com's ELO, Garmin's Training Readiness / Body Battery — every surface a measurement of *you* with an interpretation attached, the opposite of an award wall `[07]`.

**Three platform retreats as evidence:** LinkedIn retired Community Top Voice badges in 2024 (awarded *automatically*, so badge-motivated users produced quantity over quality — gaming it by commenting on AI-generated posts); Foursquare scrapped mayorships and badges in 2014 because the data showed gamification drove **check-ins but not discovery**, the behavior the business needed; Google News killed a system offering **500+ badge types** `[07]`.

---

## Playbooks

### P1 — Build the identity stack: Mirror → Label → Flex `[01]`

Three escalating moves, ordered by what they buy. Mirror and Label act on one user at a time; only Flex compounds.

1. **Mirror (onboarding → conversion).** Lengthen the input phase deliberately. Ask for more, not less, and ask for things that *feel* precise. Insert a narrated loader between input and reveal. Place the paywall immediately after peak sunk cost, before the reveal. Write the result to the Barnum spec: vague enough to fit anyone, flattering enough that they want it true, specific enough to feel tailored (model register: "You have a rich inner world and hold yourself to high standards, but you can be hard on yourself when you fall short").
2. **Label (retention → churn resistance).** Give every user a type, status or role they'd claim. No unflattering buckets. Give it a name *and* a face. Auto-place it on their profile and everywhere their output appears, framed as retroactive praise and justified by benefit to their audience.
3. **Flex (acquisition → free growth).** Find the one *true* thing you know about them that they'd brag about. Package it as a clean card. Gate the fuller version behind inviting **1** friend. Show their withheld archive dimmed behind the gate. Ship it on a weekly cadence. Make the artifact travel (plain text, pre-rendered square image, native share sheet).

*Failure mode: a referral program bolted onto a product with no flex "does zero. Nada." Build the brag first `[01]`.*

### P2 — The gift audit `[10]`

1. List every moment your product delivers a result: report, score, streak, match, payout, confirmation, milestone.
2. Label each one **gift** or **receipt**. Most teams ship receipts and never knew there was a choice.
3. For the highest-value receipt, add stage 1: an anticipation window where the outcome is genuinely uncertain.
4. Add weight to stage 2: visual, haptic, audio — a landing, not an opacity transition. If there are N results, reveal them one at a time with an explicit "n of N" counter.
5. Give rare/high-value outcomes an ambient treatment (screen-wide color shift, glow) so tier is felt before it's read.
6. Add stage 3: let the result breathe. A share prompt, a milestone badge, or a stat sized for screenshotting — pre-rendered for the destination.
7. Ask what you could **gate**. Data you already have, released on a schedule, is free anticipation.

### P3 — Make a leaderboard that actually retains `[03]`, `[07]`

1. Define what "completion" means in your product (end of workout, transaction, listen, session).
2. Attach the comparison signal to that moment — and make it imply a race with a *specific named person*, not just report a score.
3. Shrink the cohort until winning feels possible. Ship friends / neighborhood / local as first-class alternatives to global, not a buried filter. Target ~5–12 visible rivals.
4. Scope competition to something absurdly specific — Strava's unit is a single named stretch of road, not "cycling."
5. Add a recognition moment on top of the ranking that reads social and emotional, not mechanical. If you can't do live human callouts, ship an asynchronous substitute that names the person and their effort (kudos + comment thread).
6. Sequence the completion screen so it doesn't read as punishment: achievements first, kudos second, rank elsewhere (Strava's card is the shown template).
7. Ship a lightweight peer-acknowledgement primitive regardless — Strava gave **14 billion kudos in 2025** and it measurably increases repeat frequency.

### P4 — Ship a streak that doesn't burn out `[07]`, `[09]`, `[14]`

1. **Wrap it in agency.** Let the user pick the goal level and give them a pause/freeze. "A streak you can't pause, can't influence and can't escape" is the exact pattern researchers and the EU draft flag.
2. Make the freeze **earned**, not given, so it carries perceived value `[09]`.
3. Make the streak **unlock accumulating assets** rather than incrementing a number, so lapsing forfeits property (Freecash: day 7, day 42 diamond milestones).
4. Escalate rewards across the cycle so the final day carries a bigger ceremony.
5. Express pressure as a **closable partial-progress loop with a consent-shaped CTA** rather than a loss threat — Duolingo's "2 days left! Do 2 more lessons to finish this Weekend Quest" with a 2/4 bar and an "I CAN DO IT" button.
6. Prefer completion drive over loss aversion where you can choose: visible partial-progress loops the user wants to close (rings at 90%) beat counters they're afraid to break `[07]`.
7. Tie the closable loop to a real-world outcome so closing it produces genuine value, not engagement theater.

### P5 — Delete exit ramps `[08]`, `[16]`

1. Map every decision point in the core flow from app-open to the primary action. Netflix's is six.
2. Delete the ones that add no value. Cut any confirmation prompt that doesn't protect against a real mistake.
3. Use usage data to find friction users are already routing around manually (Netflix's tell: 15% hand-scrubbing past intros).
4. Look for your "skip intro": autofill with smart defaults, one-click actions for repeated tasks, prepopulated dashboards so nobody hits an empty state.
5. Fix the **top 1–3 only** — not all of them `[16]`.
6. Ask whether a *format* change would make the UI unnecessary in the first place. ReelShort deleted the progress bar, episode list and rotation because 60-second vertical episodes made them pointless `[08]`.
7. Check you haven't over-stripped: is the user still guided to the value? `[15]`

### P6 — Peak & end design process `[19]`

1. **Map the whole journey** on a board (FigJam or stickies), sign-up → task completion. Annotate where users slow down, where stress spikes, where the quiet gaps are. Keep it a living document.
2. **Pick exactly one peak** — not several. Best candidates: right after a core task completes, at a milestone, or at a point of heavy user effort. The intervention can be small: a badge, a sparkle, an animation, or surprising copy.
3. **Design an ending.** Most apps just stop. A check mark, a summary card, or a line like "you showed up today — that's huge." Peak before end, always.
4. **Vacuum the negatives.** Audit wait screens, error states and long forms for "where would someone feel stuck or uncertain?" and wrap them in uplifting microcopy, proactive help, or a delay repurposed as useful.
5. **Run variations on the peak** — timing, emoji vs icon, animation vs static. Watch drop-off, and watch where people **linger longer than the task requires**; lingering is the signal you found something worth tuning.

### P7 — Graduated free→paid `[08]`, `[06]`

1. Let first-run content play with **zero** account creation.
2. Insert an attention gate before the money gate — a deliberately mildly-uncomfortable trade whose job is to make paying read as an upgrade, not to monetise the ad.
3. Fire the money ask at the **emotional peak**, not at a session boundary.
4. Offer **weekly first**, at a coffee-threshold price, with a free trial attached. Let annual land around month four.
5. Put a dedicated trial-explanation moment inside onboarding, *before* the paywall: exact charge date, promised reminder, headline "No payment due now."
6. Put a three-step timeline on the paywall itself — Today / Reminder day / Charge day — using a real calendar date.
7. Include plain-language cancellation steps and label the CTA with how easy cancelling is.
8. Pre-select a default plan and mark it ("BEST MATCH", "3 DAYS FREE"), and show the unit price breakdown next to the headline price.
9. Test **structure before price**: locale → trial structure → plan duration → plan count → price last.

### P8 — Design an identity metric `[11]`

1. Pick one number that represents *who the user is*, computed from data they cannot get elsewhere.
2. Give it a fixed refresh cadence (weekly) over a trailing window (30 days) so a check-in ritual forms.
3. Give it a directional scale with a clearly bad end so the user feels anticipatory dread and self-corrects.
4. Translate every contributing raw metric into the identity currency (years, not ml/kg/min), and show which behavior is buying or costing them.
5. Give the number the entire screen — one hero number, one trend line, one comparison, everything else suppressed.
6. Make it comparable between two people who know each other.
7. Ignore the temptation to optimize your most-instrumented metric; it may not be the emotionally load-bearing one (Tim ignores his daily recovery score and checks Pace of Aging weekly).

### P9 — Win mapping (timing your asks) `[15]`

1. During early UX work, map every flow and mark where users hit their biggest wins.
2. Amplify those peaks with emotion (motion, feedback, human touches) so they register as special rather than routine.
3. Attach upgrade / rate / share / referral asks immediately after the amplified peak.
4. Never show a paywall, tutorial or forced flow at a moment of frustration or confusion.

### P10 — Category-assumption audit `[02]`

1. Name the unspoken structural assumption every app in your category shares — about the shape of the primary object ("a task is a text row", "logging food means searching a database") *or* about who the user is ("users need guilt to comply", "motivation is solitary").
2. Ask whether that assumption is actually true.
3. Build for who the user actually is. Change the interface *shape*, not the theme.
4. Check the incumbent structurally *can't* follow — a mass-market leader can't ship ADHD-specific illustrated timelines or delete its own shame mechanics without breaking its broad audience. That inability is the moat.
5. Convert at least one solo moment into a shared one without asking anyone to opt in (Ladder pins ~5,000 strangers to the same workout on the same day, so absence becomes socially visible).
6. Separate the mechanic that *acquires* from the mechanic that *retains*, and be explicit about which is which (Ladder: TikTok→quiz acquires; the cohort calendar retains).

---

## Case bank

**Starcrossed** — Solo-founder astrology app, distributed off the founder's TikTok. Heavy extraction (birthday, exact birth time, birth city) → theatrical loader → paywalled reveal at peak sunk cost. Its FAQ concedes each planet has **two** pre-selected zodiac options; the lock screen visually shows exactly two empty cells per planet. Reward fragmented into many small locks rather than one wall, which paces the effort ramp. Also runs a Flex loop ("Every time you Cross with a friend, a piece of your soulmate's identity is unlocked"). Barnum + effort justification in one product `[01]`.

**16 Personalities** — ~10-minute quiz → four-letter type + flattering archetype. **Over 1 billion tests taken.** No negative type exists on the Diplomats page; each type gets a 3D character, a group identity, and a heroic one-liner. Users put the code in dating bios and use it as self-explanation ("that's just because I'm an INFJ") — the label escapes the product `[01]`.

**Airbuds** — Music-taste widget. Weekly Sunday recap; the fuller version requires inviting **at least 1 friend**. Gate screen shows the user's own past recap cards dimmed behind "UNLOCK YOUR WEEKLY RECAP **FOREVER**", with "Maybe later" visually minimized. Real listening data — the leverage is packaging alone. Investor Alexis Ohanian: music "has never just been about access. It's identity" `[01]`.

**Gumroad "Top Creator" badge** — The Label recipe at production quality: a *role*, framed as already earned ("No action needed. You've already done the hard part"), auto-distributed to the profile and every product page, justified around buyer benefit so display isn't bragging, styled dark/gold to code scarcity `[01]`.

**Spotify Wrapped** — Data held all year and released once; the annual gate is the anticipation. **200M users in the first 24 hours (2025), +19% YoY; the prior year took 62 hours.** Format is one idea per slide, extreme type contrast, editorial voice — a ceremony, not a report. **~60M stories shared in 2021; 156M users engaged the following year; +461% tweet volume 2020→2021** `[10]`, `[17]`, `[01]`.

**Spotify Discover Weekly** — Launched July 2015. 30 unheard tracks every Monday, delivered as an ordinary playlist with the same play buttons. The recommendation stack never surfaces as UI. **100B+ tracks streamed, 56M+ new artist discoveries weekly.** Success test: "this just works," not "wow, this is complex." Copied by Apple Music, YouTube Music, Amazon Music `[17]`.

**Wordle** — Minimum viable flex: a green/yellow/black square grid, spoiler-free, plain characters that paste natively into any message thread. Shown deliberately *inside iMessage* rather than in-app — the artifact matters more than the surface `[01]`.

**Strava** — Segments as thousands of hyper-local micro-competitions, leaderboards sorted by age and gender cohort, plus kudos. **180M registered users across 185+ countries; 1 hour of real-world activity per 2 minutes in the app; clubs +59% in 2024; 14 billion kudos in 2025.** Segment records are all-time (dated 2013–2020), so there's no window in which you're safe from being passed. In 2025–early 2026 removed **3.9M "anomalous" activities** from users faking rides with vehicles — for status alone. Home feed is *other people's* activity, not your own dashboard. April 2024: hired a CPO from Epic Games (Matt Salazar; Fortnite, Rocket League, prior ~5 yrs at Nike/NRC) and a CTO from Zynga (Rob Terrell, ~12 yrs, FarmVille) — betting on social/competitive, not tracking accuracy. **~$500M ARR, $2.2B valuation (2025), >150M registered users, >50% new-user growth in 2024** `[03]`, `[07]`, `[09]`, `[11]`.

**Peloton** — Live watts leaderboard, monthly challenges, instructors calling out names live, uncapped lifetime metrics. **Members who engage socially work out 15% more frequently**; Connected Fitness **92–93% 12-month retention** (Tim narrates "90% annual"). $44/mo All-Access — note the live-leaderboard mechanic is gated behind the most expensive, hardware-locked tier. Badge wall always renders the next few *unearned* rungs. *Caveat: the 15% source credits community/social integration; Tim reattributes it to competence feedback* `[03]`, `[07]`, `[09]`.

**Apple Watch Activity Rings** — Move/Exercise/Stand, Gestalt closure, no points or badges needed to create the pull, and closure maps to a real health outcome. Apple Heart and Movement Study, **140,000+ participants**: consistent ring-closers were **48% less likely** to report poor sleep quality, **73% less likely** elevated resting HR, **57% less likely** elevated stress (PSS-4). *Associational, not causal; Tim's narration says "49.5% behavior change in 160,000 people," which matches neither the on-screen figure nor the metric* `[07]`.

**Duolingo** — 2022 character animation system (facial reactions, lip sync, idle animations). **DAU 14.2M → 34M+ within two years; paid subscribers more than doubled** — Tim flags the confound himself (new languages, curriculum, marketing all concurrent; only executive commentary as causal evidence). Streak wrapped in agency: user-chosen goal level plus a streak freeze. Pressure expressed as a closable quest ("2 days left! Do 2 more lessons", 2/4 bar, "I CAN DO IT"). Pre-rendered square share card for a 150-day streak into a native share tray. *Also used as the baseline-not-exemplar: XP is predictable rather than variable, and the streak is one counter that resets to zero* `[26]`, `[07]`, `[09]`, `[10]`.

**Finch** — Self-care app where you raise a bird by doing real tasks. Two nested unpredictables: daily discoveries (15–20 per location, 3 free / 9 paid locations) and a six-trait personality the user never chose ("your bird is creating their own personality"). Tasks are deliberately tiny and every row is priced in currency. **14M+ downloads, 675,000 ratings at 4.9, Apple Editor's Choice** `[09]`.

**Freecash** — Diamond streak that unlocks tiers over years (first diamond day 7, next day 42); freeze must be earned; loss state is deliberately demoralizing. Loss stack, top to bottom: red threat headline → 3D diamond with the streak number → dollar at risk ("up to $10 today, up to $1,000 in 4 days") → one lime CTA naming the game → live countdown. Reward delivery is a CS:GO-style case spinner with a disclosed 6-item prize pool and the payout hidden until you commit. **Paid out over €300M; #2 in US App Store Top Free at time of filming; $100M+ paid out per its store listing.** *Agency client — no independent outcome data* `[09]`, `[14]`, `[12]`, `[06]`, `[07]`.

**Game Blazers** — Card-pack opening as the whole product: anticipation (one glowing "EPIC" card back, no information) → reveal (hero card, one at a time) → sequencing ("EPIC 3/5" counter promising more unknowns) → celebration (screen floods magenta with bloom on a rare pull; rarity signalled by ambient light, not a badge). *Agency client, unlaunched at recording* `[07]`, `[10]`.

**Tinder** — Swipe collapses dating into one repeatable gesture whose payload is the *uncertainty after* it. Double-blind matching hides all rejection. Facebook login + auto-imported photos put first value under **60 seconds**. Match = full-screen celebration; these became the most screenshotted app screens of the 2010s. Monetization arrives contextually after addiction: Boost (10x matches), Gold (see who liked you), Super Likes — the Super Like paywall uses a benefit-first quantified headline ("You're 3x more likely to get a match!"), a scaled-up highlighted middle tier as decoy anchor, and a low-contrast "NO THANKS." **75M MAU, $2B+ annual revenue, 1.6B swipes/day, 26M matches/day, 9.6M paying subscribers, 11-min sessions vs ~3 min for competitors.** Beat Match.com's ~20-year head start `[21]`, `[10]`.

**Netflix** — Skip Intro: 15% of viewers were manually fast-forwarding; AI intro-detection shipped as one button; **136M presses/day (2022), 195 years of cumulative time saved per day.** Personalization engine (2015) across **1,300+ micro-genres** ("emotional crime documentaries") serving 230M users, **80% of viewing from recommendations** — and the *reasoning* is exposed inline ("Your taste preferences created this row"). "97% Match" as a personal trophy vs a crowd-average star rating. "Are you still watching?" and the *ta-dum* became memes; "Netflix and chill didn't happen by accident." ~$400B company. *Note the internal tension: "Are you still watching?" is deliberate friction filed under viral UX, contradicting the friction-eraser weapon* `[16]`, `[08]`.

**ReelShort (Crazy Maple Studio)** — "Candy Crush with a plot." Graduated gate (free 1–5 → ad-gated 6–8 → coin-paywalled 9+ at the cliffhanger), anti-calculator pricing, zero-decision chromeless player. Series shot in four days. Behind the scenes it also runs a 7-day check-in with a spiky reward curve (20/20/**100**/40/50/60/**250** coins), watch-time quests, and a capped ad-for-coins loop (12/day, 10 coins each). **35.7 min/day per US user vs Netflix 24.8, Prime Video 26.9, Disney+ 23. Global microdrama revenue $11B in 2025 → $14B projected 2026; 2.3B+ downloads in 2025 (>2x prior year) while traditional streaming downloads fell >4%.** *Caveat Tim doesn't surface: ~1.2M US MAU vs Netflix's ~12M — the win is minutes per user, not audience* `[08]`.

**Robinhood confetti** — Full-screen confetti on trade completion (2016), a scratch-card "Robin's Reward" reveal, removed March 2021. **$7.5M paid to settle the Massachusetts gamification case, January 2024**; the consent order prohibits celebratory imagery tied to trading frequency. Tim's read: "A design element powerful enough to require a specific law against is not decorative. It is behavior-based" `[10]`.

**Robinhood Social** — Announced at Hood Summit 2025, invite-only. Share **verified** live trades, follow traders, initiate a trade from someone else's post. Deliberately positioned as *informed community / learning*, not copy-trading. "Community is capital." Verification and invite scarcity are first-class page elements, not footnotes. *Unproven — zero adoption data* `[11]`.

**Whoop** — Whoop Age from 9 metrics (29.9 vs chronological 34.6, "4.7 years younger"); Pace of Aging weekly on a -1 to 3 scale from a trailing 30 days; every biometric translated into years (VO2 max 58 → **-5.3 years**). **$800M+ raised, ~$3.6B valuation, >50% of members still using it daily 18 months post-purchase.** Tim's n=1 evidence: he ignores his daily recovery score entirely but checks Pace of Aging weekly, is "scared that this number is not going to trend in the right direction," and competes with his wife's score `[11]`.

**Forest** — Session screen contains only a tree, a timer and a tag; the tree is the only thing moving. Leave the app and it dies. "Give up" is a small low-contrast link, not a button. **2M+ real trees planted** — 2,500 virtual coins converts to a real donation to Trees for the Future. Converts "I should focus" into "I don't want to be the one who killed this" `[04]`.

**Carrot Weather** — Solo dev, 2013, *paid* against Apple's free pre-installed Weather using the same forecast data. A sarcastic character reacting to the weather occupies the top third; charts go below the fold; the mascot gets its own tab. "The sun is leaving because he doesn't love you anymore." The emotional read arrives before any number is parsed. 2021 Apple Design Award for Interaction `[04]`.

**Day One** — Paid journaling against two free pre-installed Apple defaults. Concedes the text layer; competes on the envelope: auto-captured weather and location, photos inline and text-wrapped, and four navigation modes over the same content (List / Calendar-as-photo-grid / Media mosaic / Map with entry pins). **4.8 stars, 116,000+ reviews**, 2014 Apple Design Award, still shipping monthly 12 years on. The Moleskine test: name your elastic band, ribbon and back pocket `[04]`.

**MacroFactor** — Algorithm assumes users will miss targets, uses a ~3-week smoothed trend weight to back-calculate real expenditure, and ships **no streak counter and no red-alert state**. Co-founder Greg Nuckols: "What if nutrition apps didn't try to guilt people into losing weight?" Clean logging data is the moat. Bootstrapped, **$72/year, 500,000 users, 4.8 rating** `[02]`.

**Ladder** — Pins every team member to the same workout on the same day; ~5,000 strangers in the same hour. "TEAMMATES WORKING OUT ●" is a live avatar row on the workout page with "Double tap or hold avatar to send cheers!" — a live presence component on the primary action screen, not a leaderboard you navigate to. Absence becomes socially visible without an opt-in. **500% growth in 2023**; Ladder Wall shows 4,944 completions `[02]`.

**Cal AI** — 20+ step quiz (28 screens before a price), one question per screen with a reason-why line ("This will be used to calibrate your custom plan"), persistent progress bar, one navy Continue. Three dedicated trial screens repeat "No Payment Due Now" above a button that always says *free*/$0.00. Camera is the home page — correction is the exception, not the entry path. **$35M revenue in year one**; sold at $40M ARR, founder aged 18. *Two of six early questions are market research for the company disguised as onboarding* `[05]`, `[06]`, `[02]`.

**Granola** — The opposite pole: **2 screens** (work-account sign-in, microphone permission), no feature tour, no goals wizard, and value lands inside a meeting you already had scheduled. Objection pre-empted in the permission copy: "No creepy bots join your meeting." Exactly one enabled control on the permission screen. **$125M Series C at $1.5B, up from $250M — 6x in 12 months** `[05]`.

**Noom** — Up to **113 screens, 10–15 minutes**. Progressive commitment: sensitive questions framed with context first, expectations set and repeated, and the paywall placed only after significant time and emotional investment. **$540M raised at $3.7B** `[05]`.

**Blinkist** — Added an explicit "How your free trial works" timeline (Today → Day 5 reminder → **Day 7 charged on December 29**, an absolute date), plus literal tap-by-tap cancellation instructions and a CTA sub-label "2 taps to start, super easy to cancel." **+23% conversion, −55% complaints, no change in churn.** In a separate test, presenting the trial as a visual day-by-day itinerary drove **+23% trial signups** `[06]`, `[23]`.

**Headspace** — Renamed "free trial" to "**30-day guest pass**": **+7% new signups from a single word.** Separately, 7-day trial on monthly vs 14-day on annual (anchoring via a soft perk instead of price) drove a double-digit conversion lift. Onboarding engineers emotional state before content: amber-over-navy, a smiling sun character, one blue Continue — the emotional payload occupies more pixels than the copy `[23]`, `[24]`.

**Moonly** — Removed the trial from the monthly plan so it exists **only on annual**, and made the CTA label change with plan selection ("Start 3 days free trial" vs "Subscribe"). Decoy effect, no price change. **+39% conversion, +47% revenue per 100 installs** `[23]`.

**Mobbin** — Shipped **zero** new paywalled features; just stamped "PRO" labels on already-locked content across the product. Loss aversion via visible contrast. **+35% free-to-paid conversions** `[23]`.

**Busuu** — Free users get exactly one language; the second requires upgrading. Scarcity placed at the second unit of usage, where intent is proven — invisible to casual users, decisive for engaged ones. The upsell card sits *inside* the lesson list, not on a separate paywall screen. **+83% conversion among engaged users** (segment-level; overall lift not given) `[23]`.

**Uber** — Replaced a fare *range* with a single estimated price in a bright highlight chip (certainty effect): double-digit increase in rides per user `[23]`. Separately, the best *ending* in consumer software: haptic buzz, driver's name and face, "You already tipped $4.61 for Hector," tip stacked above rating, both optional. The rider's real peak happened offline (arriving), so the app only supplies completion `[19]`.

**Discord** — Ambient social proof done right. Every featured-server card repeats a green presence dot plus online count plus member count in the smallest type on the card — the most repeated element on the page. Marvel Rivals ~928K online / ~4.56M members; Midjourney ~860K / ~21.2M; Genshin ~468K / ~2.25M `[24]`.

**Midjourney** — Personalization profile as a trained sub-model of visual taste, not a settings page. On by default in v7, **70%+ of active users adopted within 3 months**. **$500M revenue in 2025, $0 VC, ~150 employees (>$3M revenue/employee)**, grown from a Discord bot by word of mouth against better-funded Adobe Firefly and DALL·E `[13]`.

**Oura** — Three years of wear = **1,095 nights**. EU Data Act frees the CSV but not the model. **Retention high 80s at 12 months vs low 30s for other wearables**, behind a **$5.99/mo** subscription on your own body's data. On track for $1B revenue; a **$97M US DoD contract**. Surfaces the accumulated investment as a visible counter `[13]`.

**Phantom** — Mid-2023 refresh: animated ghost mascot, playful wallet-creation animation, consumer-grade onboarding in a developer-built category. Username step: three-segment progress bar, pre-filled valid handle (BriskTree5900), inline green "Username available", reversibility stated in the subcopy. Reached **#2 in US App Store Utilities, above WhatsApp and Instagram**. CEO Brandon Millman: "polish matters. We're a design-led company" `[26]`.

**Revolut** — Design investment tracked deliberately with the move upmarket: scrubbable charts with a glowing touch node, 3D card renders that flip and catch light, animation inside security and onboarding flows. As price goes up, the product must feel more expensive. **50+ million users** (site's own claim). *No outcome metric offered — this case is qualitative* `[26]`.

**Tiimo** — Every task is a colored illustrated block on a vertical timeline, **sized by task duration**, with thousands of icons so users pick pictures instead of reading strings. Built for ADHD users, whose scarce resource is exactly the attention a text list consumes. Notion cannot follow. iPhone App of the Year 2025 `[02]`.

**Ahead** — Apple Design Award winner that rejects the wellness category's guilt dashboards. Quiet splash → deliberately paced self-profiling questionnaire → the personalized brief **visibly constructing itself** at the moment of maximum invested effort → a gentle nudge to return tomorrow `[19]`.

**Habitica** — The over-gamification failure case. Quests, character stats, HP damage, pets, equipment, gold, avatars. A study found **100% of participants experienced counterproductive effects**; its onboarding checklist is entirely about the game, not your tasks `[07]`.

**Snapchat streaks** — 24-hour reciprocal streaks; longest recorded over **4,000 days**. **477M DAU, 30+ opens per day.** Streak frequency correlates with FOMO, problematic smartphone use and reduced self-control in adolescents (N=2,483, M_age 13.46, Belgium) — *the abstract itself calls this "a weak relationship"; the narration drops the hedge*. Nevada AG litigation 2024; named in the EU Digital Fairness Act draft `[07]`, `[10]`.

**LinkedIn / Foursquare / Google News** — Three platform retreats from badges. LinkedIn retired Community Top Voice (2024) because automatic awarding made quality impossible to hold and badge-motivated users gamed it by commenting on AI-generated posts. Foursquare scrapped mayorships (2014) because gamification drove check-ins but not discovery — the behavior the business needed; note they'd already *tried* localizing competition ("instead of all 50,000,000 people") and killed it anyway. Google News offered **500+ badge types** and killed the system `[07]`.

---

## Anti-patterns

**Bolting a referral program onto a product with no flex.** "A referral program bolted onto something nobody wants to show off does zero. Nada." The referral mechanic is downstream of having something brag-worthy `[01]`.

**Faking the flex.** Mirror and Label mechanics can ship a manufactured output; the Flex cannot. A fabricated status is not something a user can safely broadcast `[01]`.

**Generic milestone bragging.** "You completed 10 tasks" / "You're a power user" is hollow — users sense when an achievement is algorithmic rather than authentic, and it reveals nothing except that they used an app `[17]`.

**Shipping stage 2 only.** The reveal with no anticipation before it and no afterglow after it. The "Congratulations" modal — same information as an event, delivered like a bank statement `[10]`.

**Copying Wrapped as a data summary.** Teams build annual stat dashboards and miss that Wrapped is a ceremony, not a report `[10]`.

**Delivering N results simultaneously.** Collapses N potential dopamine events into one `[10]`, `[07]`.

**Removing uncertainty entirely.** Handing the user the result with no gap bypasses the dopamine system `[10]`.

**Global-only leaderboards.** Unwinnable competition silently churns the 99% who can't place `[03]`, `[07]`.

**Shipping the leaderboard as a nice-to-have.** "Kills the entire thing before it even starts" — the surface exists, the engine doesn't, and it never gets a second chance `[03]`.

**Mechanical acknowledgement.** A badge or a number that feels automated does not do the job of a recognition moment `[03]`.

**Cargo-culting the mechanism instead of the principle.** "The takeaway isn't you need instructors" — the asset is the emotional hit of recognition, not celebrity instructors `[03]`.

**Automatic badge awarding at scale.** LinkedIn's own admission: non-curated automatic awarding made quality standards impossible to hold, and badge-motivated users produced quantity over quality `[07]`.

**Gamifying the wrong action.** Foursquare's mechanics inflated check-ins, not the discovery the business needed. A mechanic will succeed at inflating whatever it measures `[07]`.

**Badge inflation.** 500+ badge types did not create more value `[07]`.

**Stacking every mechanic you can think of.** Streaks + points + badges + challenges + leaderboards puts you in the overload zone; users manage the game layer instead of doing the behavior `[07]`. Corollary: "don't show 20 loops on one screen" `[24]`.

**Recognition without mastery.** Mechanics that only signal "you opened the app a lot" are badge theater; the meta-analysis shows gamification barely moves competence `[07]`.

**Inescapable streaks.** No goal choice, no freeze, no pause → obligation, FOMO, litigation and EU regulatory attention. The regulatory language is the design test: does your loop "penalise taking a break"? `[07]`

**Single-thread streaks that reset to zero.** Nothing accumulates, so there's less to lose `[09]`.

**Shipping a terminal achievement state.** An end screen is a churn trigger `[09]`.

**Purely private progression.** A user can quit the loop and break the streak with nobody watching `[09]`.

**Purely predictable reward schedules.** Flat XP per lesson is pleasant but generates no chase state `[09]`. But equally: **making everything random** destroys the user's ability to track progress `[09]`.

**Scattering 20 badges instead of one tracked metric** — dilutes obsession `[09]`.

**Shame as a retention mechanic.** Red over-target numbers, breakable streaks, guilt notifications. Backfires twice: users feel bad and stop logging, and the ones who keep logging game their own entries, poisoning the dataset `[02]`.

**Boring win notifications.** A plain "you have a new match" plus a list entry makes users numb to small wins → no emotional investment → no habit → deletion `[21]`.

**Making rejection visible.** Showing profile views without replies or unanswered messages makes every "no" personal, and people stop trying `[21]`.

**Interruptive or early premium pushes.** Popups and paywalls at the wrong moment make users feel tricked; they pay once and churn permanently `[21]`. Random-timed asks land when users are frustrated instead of at peak satisfaction `[15]`.

**Binary free→paid.** A trial that ends in a single hard wall loses users at the wall even when they like the product `[08]`.

**Hiding cost to reduce friction.** Concealment loses the skeptics who need proof the offer is real — Blinkist proved the opposite `[06]`.

**Shipping a virtual currency with no spend history.** The absence is what makes it a dark pattern rather than a simplification `[08]`.

**Awkward exchange-rate ratios chosen so the real cost isn't computable** `[08]`.

**Hiding controls vs removing them.** Removing unnecessary UI is clean; burying it four levels deep is not `[08]`.

**Assuming feeling "seen" requires real personalization infrastructure.** Hundreds of interviews, a recommendation engine, or a custom-trained model are what founders reach for; the fastest-growing products "barely do any of that" `[01]`.

**Optimizing onboarding for shortness by default.** Cutting steps can strip out the exact investment that makes the payoff feel earned `[01]`. But equally: **adding onboarding to fix retention on a product that isn't personalization-dependent** — the reflex is backwards, and more screens make D3 worse `[05]`.

**Tours of an empty product.** Coach marks explaining a UI that has no content in it yet `[05]`.

**Front-loading onboarding friction.** Sign-up, long profile, multiple photo uploads, email verification, personality questions — most dating apps lost 70%+ of users after session one `[21]`; the average app loses ~77% within 3 days `[22]`, `[05]`.

**Revealing a high step count before value has landed.** Seeing "12 steps" makes the brain price the effort and bail — show progress, hide the total on long flows (Typeform's default) `[22]`.

**Removing all friction on principle.** Over-stripped onboarding confuses users and they quit just like over-long onboarding does `[15]`.

**Personalization without emotional intelligence.** Reads as robotic or creepy; a "Recommended for you" shelf bolted onto a huge catalog makes choice paralysis *worse* `[16]`.

**Segmenting by demographics rather than emotional motivation.** You end up with the same experience in different wrappers `[16]`.

**Assuming virality is accidental,** so you never invest in making the experience shareable, memorable or culturally relevant `[16]`.

**Chasing virality before attachment.** Shareable moments don't work on users who haven't stuck around long enough to care `[17]`.

**Bolting personality onto the edges.** A friendly empty state, confetti on first save, a mascot on the loading spinner — while the core surface is still a chart. You pay for personality and receive none of the differentiation `[04]`.

**Being witty at the wrong moment.** Mid-effort in a focus/fitness/habit session, humor and charm are useless; the useful input is stakes `[04]`.

**Tracking a behavior instead of making its absence cost something.** Metrics-only habit design asks the user to supply the willpower `[04]`.

**Social-features-as-bolt-on / burying the social layer in navigation.** If the social layer sits *under* the utility layer in your architecture, it's decoration `[11]`.

**Waiting for churn before adding community.** By then you're building from scratch against products already embedded in identity `[11]`.

**Copy-trading / follow-the-leader as the community pitch.** Builds a leaderboard of luck and churns; learning-and-discussion framing builds identity `[11]`.

**Storing data without learning from it.** Data warehouses don't produce lock-in; regulation can force the container open `[13]`.

**Making users invest consciously.** If the deposit requires deliberate effort, most won't make it `[13]`.

**Treating a settings page as personalization.** Explicit preference toggles are portable in seconds; a trained sub-model is not `[13]`.

**Treating users like robots who only want efficiency.** Personality-free, feedback-free apps let users complete tasks but never form attachment — which raises churn `[14]`.

**Assuming emotional connection happens on its own.** In person it arrives free via tone and body language; in an app it exists only if you design it `[14]`.

**Delight that shouts.** It should be felt in aggregate, not noticed individually `[26]`.

---

## Decision guide

**IF your product depends on heavy personalization in a deep-pain niche (calorie tracking, weight loss, astrology, health coaching) THEN a long onboarding is justified — it earns the personalized first run AND filters for high-intent buyers.** Cal AI's 20+ steps and Noom's 113 screens both pay off on both axes `[05]`. Make the personalization *visible on the first post-onboarding screen*, or the user paid the toll and got the generic product anyway.

**IF a long onboarding buys neither personalization nor a buyer filter THEN cut it — it's work you're extracting from the user** `[05]`. Default to shortest-time-to-tangible-value, not fewest screens; few screens that deliver nothing is still a failure.

**IF your product doesn't need collected data to be useful THEN the fix for bad retention is *less* onboarding, not more** — Granola's two screens, then value inside a meeting the user already scheduled `[05]`.

**IF your funnel must convert in session zero (82–89.4% of trial starts happen on install day) THEN the binding constraint is trust, not brevity** — the apps winning session zero are *not* the ones with the shortest flows `[06]`.

**IF you're deciding between a streak and a completion loop THEN prefer completion drive.** Streaks run on fear of losing what you built; variable rewards and closure loops run on the pull toward what's next. Same surface behavior, opposite emotional engine — one burns out, the other recharges itself `[07]`.

**IF you ship a streak anyway THEN wrap it in agency (user-chosen goal level + an earned freeze) and make it unlock accumulating assets rather than incrementing a counter** `[07]`, `[09]`.

**IF your leaderboard has good day-one engagement but no long-tail retention THEN the missing half is recognition, not ranking** `[03]`.

**IF your leaderboard is flat THEN shrink the cohort before you touch the UI** — cohort size is a tunable lever; more rows, nicer badges and faster refresh don't fix a missing comparison `[03]`.

**IF you're about to add a fifth game mechanic THEN cut instead** — you're in the overload zone of the S-curve, not climbing it `[07]`.

**IF clean self-reported data is your moat THEN delete every guilt affordance** — red over-target numbers, breakable streaks, "you missed your goal" pushes. Shame-driven users either stop logging or start lying `[02]`.

**IF your users are mid-effort on something hard (focus, fitness, habit) THEN ship stakes, not charm.** Wit is the wrong tool at that instant `[04]`.

**IF your data layer is commoditized by a free pre-installed incumbent THEN concede it and compete on the envelope** — auto-captured context, multiple navigation modes over the same content, search quality, animation timing `[04]`.

**IF an AI agent could do everything your app does over one text message THEN your moat has to be identity, ritual or belonging** — relocate the center of gravity now, because rebuilding against products already embedded in a user's identity is far harder later `[11]`.

**IF you have session-1000 = session-10 parity THEN you have an engagement product with no lock-in** — build a layer where every session deposits something irreplaceable, automatically `[13]`.

**IF you need a viral loop THEN find the brag first, then fuse the share action and the invite action into one mechanic** — and set the threshold at 1 friend `[01]`.

**IF you're choosing where to spend a limited craft budget THEN put it on one peak and one ending, not evenly across every screen** — memory discards the middle `[19]`.

**IF the user's real peak happens outside your app (arriving at a destination, finishing a run) THEN don't manufacture a new peak — supply completion instead** (Uber's rate + tip) `[19]`.

**IF you're placing an upgrade / rating / share ask THEN put it immediately after an amplified win, never at a moment of frustration** `[15]`.

**IF your paywall is the first thing after a value moment THEN state the exact charge date, promise a reminder, and give literal cancellation steps** — transparency raised Blinkist's conversion 23% and cut complaints 55% `[06]`.

**IF you're about to A/B test price THEN test structure first** — locale (62.3% LTV uplift), trial structure (59.6%), plan duration (58.7%), plan count (57.1%) all beat price (45.5% LTV / 28.3% CR, the lowest conversion uplift of any test type) `[06]`.

**IF you have a weekly plan without a trial THEN attach one** — 12-month LTV goes from **$7.40 to $54.50 (636%)**, a decision no price test can produce `[06]`.

**IF conversion is low THEN check the entry point before anything else** — Slopes' one-tap trial start lifted trial starts 25% `[23]`.

**IF you want to differentiate plans without changing price THEN give your preferred plan one thing no other plan has** — trial exclusive to annual (Moonly: +39% CR, +47% revenue/100 installs) or a longer trial on annual (Headspace) `[23]`.

**IF you want more upgrades without building anything THEN label existing locked content in-context** — Mobbin shipped zero new paid features and got +35% free-to-paid `[23]`.

**IF you're placing a feature lock THEN put it at the second unit of usage** — the second language, the second project — where intent is proven and beginners aren't punished `[23]`.

**IF you're using credits, tokens or abstract units THEN treat the exchange rate and spending visibility as first-class product decisions.** Abstraction is neutral; actively preventing users from computing their spend is the dark pattern `[08]`.

**IF you're deciding whether to remove a UI element THEN removing unnecessary UI is clean; hiding a control the user needs is not** `[08]`.

**IF your users arrive at mixed readiness levels (newsletter, social, help docs) THEN one CTA under-serves** — add a visually subordinate secondary CTA and a low-friction escape valve, rather than a second equal-weight button `[27]`.

**IF your category is intimidating or high-stakes (finance, crypto, health, insurance) THEN budget motion and transition work as product scope, not post-launch polish** — every micro-interaction is a trust signal, and the barrier is skepticism, not motivation `[26]`.

**IF you have sophisticated technology THEN hide it inside an interface users already know** — Discover Weekly is just a playlist; the success test is "this just works," not "this is impressive" `[17]`.

**IF you're launching a viral moment THEN sequence it after retention** — attachment is the precondition, never the reverse `[17]`.

---

## Known contradictions in the corpus

Flagged explicitly so an agent doesn't cite both sides as settled doctrine.

1. **Onboarding length.** `[22]` opens with "77% lost in 3 days, front-load value in the first 60 seconds"; `[21]` says get to first value in under 60 seconds; `[01]` says "deliberately lengthen the input phase." `[05]` resolves it: the axis is time-to-tangible-value, and length is only justified when it buys personalization or a buyer filter. `[06]` adds a second resolution: the constraint in session zero is *trust*, which is why a 28-screen flow can outperform a 3-screen one.

2. **Streaks.** `[07]` is anti-streak — motivation decays into obligation, Snapchat harms, EU/Nevada exposure, "streaks burn out" — and prefers variable rewards and completion drive. `[09]`, `[12]`, `[14]` and `[06]` all recommend loss-aversion streak theatrics (Freecash's "Streak in Danger" screen) as retention wins with no ethical hedge. `[07]`'s own escape valve — streaks wrapped in agency (chosen goal level + freeze) — is the only reconciliation offered.

3. **Leaderboards.** `[07]` calls PBL "the three most documented failures in product history" and cites three platforms removing them. `[03]` builds a whole framework for making leaderboards work. Both agree on the mechanism (winnability, small cohorts), so the disagreement is about whether to ship the surface at all.

4. **Friction.** `[24]` (Hick's Law, one clear focus) and `[22]` (fewer, finishable steps) push toward subtraction; `[15]` argues there's a **friction sweet spot** and that over-stripped onboarding fails the same way over-long onboarding does.

5. **Netflix's own weapons collide.** `[16]` files "Are you still watching?" under viral UX while weapon 1 is deleting micro-friction; `[08]` names the same prompt as a self-inflicted stop in a momentum flow and praises ReelShort for not shipping it.

6. **Ethics of ceremony.** `[10]` presents Robinhood's $7.5M fine as *proof of potency* and moves on. `[07]` presents the EU Digital Fairness Act flagging the same class of mechanics as a design constraint. `[08]` and `[09]` both name their subject matter as morally complicated and then teach it straight. No video in the corpus defines the line.

7. **Evidence-quality flags to carry.** Apple's ring stat is narrated as "49.5% behavior change in 160,000 people" but the on-screen source says 48% less likely to report poor sleep quality among 140,000+, and the study is associational `[07]`. Peloton's 15% is credited by its source to *social* integration, not competence feedback — the reattribution is Tim's `[07]`. The Snapchat correlations are labelled "a weak relationship" in the abstract he shows `[07]`. Duolingo's DAU jump has three concurrent confounds Tim names himself `[26]`. The 18.7x paywall-experiment gap is a comparison of median revenues, not a causal uplift `[06]`.

---

## Sources

`[01]` The Twisted Psychology Behind Top 1% Apps — https://www.youtube.com/watch?v=nQKWYmrixCU
`[02]` The Weird Design Playbook of 6 App Outliers — https://www.youtube.com/watch?v=HA4yB_sd62Q
`[03]` Why Leaderboards Kill App Retention (How To Fix It) — https://www.youtube.com/watch?v=BxhsCu9hNpY
`[04]` How Top 1% Indie Apps Beats Giants — https://www.youtube.com/watch?v=MAvKHToGiVY
`[05]` How To Solve The App Onboarding Paradox — https://www.youtube.com/watch?v=Aa89MC8jX2c
`[06]` I Studied 10,000 Paywall Screens (THIS Makes People Pay) — https://www.youtube.com/watch?v=sYRhXB_ZcLI
`[07]` I Studied 500+ Gamified Apps (Here's What Actually Works) — https://www.youtube.com/watch?v=LXX_qOA5D8E
`[08]` How a Chinese Unicorn App Out-Addicts Netflix — https://www.youtube.com/watch?v=7dCZrtH15zc
`[09]` How To Scientifically Design Addictive Apps — https://www.youtube.com/watch?v=yBpv5rZoBjA
`[10]` The 3-Stage Trick Behind Every Addictive App — https://www.youtube.com/watch?v=uoLpH_20qKw
`[11]` Why Most SaaS Companies Will Die in 2026 — https://www.youtube.com/watch?v=ZXWUg1e1PAs
`[12]` Our World Class App Design Formula — https://www.youtube.com/watch?v=wmTkiF23GRQ
`[13]` The New Way Apps Dominate in 2026 — https://www.youtube.com/watch?v=yYs7iv81Ppk
`[14]` How Addictive Apps Are Made — https://www.youtube.com/watch?v=AnL49w4yIOw
`[15]` Give Me 13 Minutes & I'll Grow Your App — https://www.youtube.com/watch?v=v1f9iYZ2GhQ
`[16]` How Netflix Made Us All Binge (Design Breakdown) — https://www.youtube.com/watch?v=hIm3d3JAsPw
`[17]` Viral Design Tricks from Spotify (Founder Playbook) — https://www.youtube.com/watch?v=Tpg0pxKHrCA
`[18]` What Founders Can Learn From Apple's Design Domination — https://www.youtube.com/watch?v=doiaMtD80p8
`[19]` The Tiny Design Rule Behind Top 1% Apps — https://www.youtube.com/watch?v=11h4H3TAGkM
`[21]` How Tinder's Design Hacked Society — https://www.youtube.com/watch?v=4yKtlOWClhA
`[22]` The Hidden App Growth Killer (How To Avoid It) — https://www.youtube.com/watch?v=55hDj88zKa8
`[23]` Copy These SaaS Growth Tricks (It'll Blow Up Your Business) — https://www.youtube.com/watch?v=puldme__Ckk
`[24]` How Top 1% Apps Keep You Hooked — https://www.youtube.com/watch?v=D9SXaj6qQIQ
`[26]` The Secret Behind Weirdly Addictive Apps — https://www.youtube.com/watch?v=Du2lkZ_cux8
`[27]` Give Me 10 Minutes & I'll Boost Your Website Conversions — https://www.youtube.com/watch?v=TIfiy1fodDs
