# Onboarding & Activation

First-run experience, time-to-value, onboarding length, permissions, aha moments, personalization quizzes, activation. Distilled from 25 Tim Gabe notes. Source markers `[NN]` map to the Sources list.

---

## Core principles

### 1. The variable is time-to-tangible-value, not screen count

Screen count is a proxy, and a bad one. The canonical statement, typed on screen verbatim: *"by default keep your onboarding as short as possible / or better yet surface tangible value as fast as possible"* — and the second clause supersedes the first, because few screens that deliver nothing is still a failure `[05]`. The paradox that forces this reframe: Granola ships value in **2 screens** and raised **$125M at a $1.5B valuation** (March 2026, up from $250M — 6x in 12 months), while Cal AI runs a **20+ step quiz** and did **$35M revenue in year one**, and Noom runs **up to 113 screens / 10–15 minutes** and raised **$540M at $3.7B** `[05]`. If "short wins" were a law, the second and third could not exist.

The headline stat he opens both onboarding videos with: the average app loses **77% of users within 3 days** (his narration; his own on-screen card says 70% — the figure is inconsistent inside his own video and is uncited) `[05][22]`.

### 2. A long onboarding is only justified if it buys one of exactly two things

His two-item test, drawn on screen as a single vertical spine with two branches — one decision, two possible justifications `[05]`:

1. **It earns a personalized first experience.** The data collected must be load-bearing. Cal AI asks 20+ questions because without them the post-onboarding home screen is indistinguishable from every other calorie tracker. Valid *only if the personalization is visible on the first screen after onboarding* — otherwise the user paid the toll and got the generic product anyway.
2. **It filters for buyers.** People who bounce on a 20-step quiz were unlikely to convert. Completion is a costly signal of deep pain plus willingness to pay. "Long onboarding kind of self-selects in that way."

The attached qualifier: this exception applies to **deep-pain niches where personalization genuinely changes the product** (his example: calorie tracking). Importing the Cal AI pattern into a low-pain or low-personalization category is pure drop-off `[05]`.

He gives **no threshold** for how long is too long, how deep "deep pain" must be, or how to tell if personalization is genuinely load-bearing. Treat the framework as directional, not operationalized `[05]`.

### 3. Every screen must do work FOR the user, not for you

His single named failure mode: onboarding screens that exist to serve the company — feature tours, goal wizards, "tell us about your team" collection with no downstream use, upsell interstitials `[05]`. The test to run per screen: *whose job is this screen doing?*

Cal AI's own 28-screen teardown shows the violation embedded inside a flow he otherwise praises: **two of the six early questions are market research for the company, not personalization for the user** — "where did you hear about us" (attribution data for their paid-acquisition team) and "have you tried other apps" (switcher-vs-new segmentation), both disguised as onboarding `[06]`.

### 4. You get one session — trust, not brevity, is the binding constraint on conversion

**82% (RevenueCat) / 89.4% (Adapty) of all trial starts happen on install day**, and trial→paid conversion drops sharply after day 7 and never recovers `[06]`. This is the strongest argument that the first session is the whole monetization game. His explicit reframe: the apps winning the one-session game are *not* the ones with the shortest onboarding or shortest paywall — **which is why a 28-screen flow can outperform a 3-screen one** `[06]`.

Top-decile apps' edge is disproportionately at the **trial-start** step, not the trial→paid step: p90 apps run a **20.3% trial start rate vs a 6.2% median (>3x)** but are only ~2x more efficient at converting trials to paid `[06]`. Operationally: get more people into the trial rather than optimizing the charge.

### 5. Effort can be the amplifier on the payoff, not just a cost

The counter-position to "minimize friction," grounded in **effort justification** (Aronson & Mills, 1959): the more effort someone expends to obtain something, the more they value it, *even when the output is objectively mediocre* `[01]`. Stacked with the **Barnum effect** (Forer, 1948 — a generic description engineered to feel personally specific), the same generic output reads as "huh, kind of accurate" on its own and "holy dang, this is me" after a long extraction ritual.

The operational instructions that follow `[01]`:
- **Deliberately lengthen the input phase before the payoff.**
- **Ask for more, not less** — and ask for things that *feel* precise (exact birth time, birth city, not just birthday). Precision of input sells precision of output.
- **Put a theatrical loader between input and reveal**, narrating what it is supposedly doing ("reading your chart," "building your result"), so assembly reads as discovery.
- **Place the paywall at peak sunk cost, immediately before the reveal.**

Caveat he does not supply: long quiz onboarding has a well-documented drop-off cost that goes unmentioned, and he gives no guidance on where the effort ramp stops paying and starts killing activation `[01]`.

### 6. Too little friction is also a failure mode

"Shorten onboarding to the bare bones" is directionally right but a simplification. UX is about the *right* level of friction, and two failure modes bracket the sweet spot: too much friction → users give up; **too little friction → users are never guided to the value, so they also give up** `[15]`. Because most apps err toward doing too much, "strip it down" became the default advice — but some apps over-strip and end up confusing people. The framework applies to the whole app, not only onboarding; onboarding is just where it bites first.

### 7. Land the first value inside a behavior the user was already going to perform

Granola's onboarding ends the instant the permissions its core loop needs are granted; the next thing the user does is open it during a meeting they had already scheduled `[05]`. No new habit to install, no personalization data required, so collecting any would be pure tax. Generalize: find a behavior already on the user's calendar and put the payoff inside it.

Adjacent version of the same idea: **embed into the tools users already have open**. Raycast shipped launch-day integrations with GitHub, Jira and Slack doing real jobs (open your assigned issues, update a ticket) — "distribution is often just a design problem in disguise," and adoption is effortless because no habit had to change `[28]`.

### 8. Permission screens: pre-empt the objection in the copy, and leave exactly one enabled control

Granola's second (and final) screen: eyebrow "PERMISSIONS," headline "Allow Granola to transcribe your meetings," body copy that pre-empts the objection *before* the ask — **"No creepy bots join your meeting"** — then two labelled rows where only one button is active (black "Enable Microphone"; the secondary "Enable System Audio" is greyed, and Continue is disabled) `[05]`. One obvious thing to do.

Two more permission patterns worth stealing:
- **Prime before the OS prompt, framed as care.** Ahead runs a pre-permission screen with a friendly mascot: "Can we gather anonymous data to better include self-growth into your day?" / "Allow app tracking on the next pop-up, so we can help you stay focused" / one full-width "Got it!" `[19]`.
- **Ask for nothing at all until value has landed.** ReelShort's episodes 1–5 need **no account, no signup, no email** — open the app and content plays within seconds. Payment is staged as free → attention (30-sec ad per episode, 6–8) → money (coins, episode 9+): *"attention, effort and then money"*, each step normalizing the next `[08]`.

### 9. If you ask questions, make each one earn its place and show the payoff immediately

The Cal AI quiz template, which is the most copyable artifact in the corpus `[05][06]`:
- **One question per screen**, one input element, one full-width primary CTA.
- **A persistent progress bar** under the back arrow on every screen.
- **A one-line rationale under each question** explaining what it will be used for — "This will be used to calibrate your custom plan", "This helps us generate a plan for your calorie intake." This converts extraction into service.
- A **reassurance screen** partway through that reads back the user's own goal ("Losing 10 kg is a realistic target. It's not hard at all!") and a chart contrasting their projected curve against a traditional diet — i.e. the personalization is *shown* before it is delivered.

Two design details worth naming from adjacent products: **build the personalized result on screen rather than rendering it** (Ahead's brief visibly constructs itself in front of you, placed immediately after the user's maximum invested effort) `[19]`, and **turn personalization on by default rather than burying it in settings** (Midjourney's v7 default-on personalization profile hit **70%+ adoption within 3 months**) `[13]`.

### 10. Show progress — but hide the count when the count is discouraging

Progress cues exploit the **goal-gradient effect** ("we're wired to push harder when we know how close we are") `[22]`. Marathon uses a plain, deliberately unflashy progress bar pinned to the top; Cal AI keeps a bar visible across 20+ screens `[22][05]`. But revealing "12 steps" before any value has landed triggers an effort estimate and the user quits — which is why **Typeform's long-form templates show no step count by default**, only a hairline bar at the very top edge `[22]`. He gives no rule for the middle: 3 is fine, 12 is fatal, everything between is unaddressed.

### 11. Teach by doing; do not tour an empty product

**Trial-and-error learning** — active engagement encodes faster and deeper than passive reading `[22]`. A Sudoku app hands you your first puzzle with guided hints layered on rather than explaining the rules. Breathwork's onboarding *is* a guided breathing session — no account setup, no configuration, just a real moment of calm inside the first 60 seconds. The named opposite is the vintage Slack first-run: a green coach-mark ("These are your channels… Got it!") pointing at a sidebar over a near-empty canvas — a tour of nothing, which Tim captions "THEY ARE STUPID AND POINTLESS" `[05]`.

Two escalations of this principle:
- **Teach with a persistent visual cue instead of a tutorial.** Apple shipped the thin home-indicator line and let hardware shift across releases (physical button → software button → pure gesture), never shipping a tutorial — claimed result: billions of users retrained to swipe home over ~10 years `[18]`.
- **Fix the empty state rather than narrating it.** Netflix-derived rule: autofill forms with smart defaults, add one-click actions for common tasks, and **prepopulate dashboards with sample data so users never face an empty state** `[16]`.

### 12. Activation does not end at day one

Raycast shipped with **no formal onboarding at all** in the early days; the interaction model (open, type, act) was narrow enough to teach itself. The current product carries a lightweight walkthrough surfaced as a result row inside the command bar with a completion percentage ("Start supercharging your productivity — **18% completed**"), not a modal flow `[28]`. His framing: **onboarding never ends** — activation continues through surprise, the recurring "wait, I didn't know I could do that too" moment. Design question that follows: *does this feature unlock something else that already lives in the product, or does it just sit there?*

Related: make the accumulated investment visible so the user watches it grow — Oura's "your body has been tracked for **1,095 nights**" pattern reframes lock-in as partnership `[13]`.

### 13. Onboarding is an emotional and trust surface, not only a data funnel

Users form an impression in **~50 milliseconds** and make a trust decision in **under 3 seconds**, mostly on visual grounds; he claims a bad first impression scares off **20–30% of new users immediately** (uncited) `[15][14]`. In trust-sensitive categories the first screens must do trust work before asking for anything — a web3 client onboarding puts the value promise and a warm illustrated reward visual *above the fold* and the auth buttons (Continue with Google / Apple / Other options) below, with nothing else tappable `[12][14]`.

Headspace sets emotional tone before content is chosen: amber upper half, smiling sun character, dark navy lower half, "Let's create your meditation practice," one blue Continue `[24]`. Phantom's wallet-creation step applies consumer patterns to a crypto flow: three-segment progress bar so the user can see the flow ends, reassuring subcopy that states reversibility ("Usernames can be changed later on"), an input **pre-filled with a valid generated handle** so the user can proceed without thinking, and inline green "Username available" validation `[26]`.

### 14. Design the end of onboarding, not just the middle

Peak–end rule: memory compresses an experience to its most intense moment and its last moment `[19]`. Applied to first-run: put the **peak** right after the point of highest user investment (Ahead's brief lands immediately after the questionnaire), and give the flow a **designed ending** — a check mark, a summary card, an explicit invitation to return tomorrow. Most apps just stop `[19]`. Phantom's completion screen is the reference artifact: near-black canvas, ghost mark with sparkles, "You're all done! / You can now fully enjoy your wallet," and a purple Get Started button that animates colored shapes out from behind it `[30]`.

Ladder does the same at the far end of first-session: a congrats banner ("Boom! Congrats on completing your first Ladder workout, let's celebrate.") and an unlock bar — where **the reward is access to the group, not points** ("You unlocked Team Chat!") `[02]`.

### 15. Separate the mechanic that acquires from the mechanic that retains

Be explicit about which is which. Ladder: the **TikTok → quiz funnel converted users; the cohort calendar is what kept them** `[02]`. Corollary from a different video: don't launch a viral/sharing moment before attachment exists — "you can't engineer viral sharing if users don't stick around long enough to develop that emotional connection" `[17]`.

---

### Where the source material contradicts itself

Flag these when advising; the corpus does not resolve them.

- **"Short by default" `[05]` vs. "deliberately lengthen the input phase" `[01]` vs. "trust, not brevity, is the constraint" `[06]`.** Note 05 makes brevity the default and long onboarding the justified exception; note 01 treats length as an *asset* (effort justification) with no default toward shortness; note 06 says the one-session winners are explicitly not the shortest flows. Reconciliation available inside 05's own rule — optimize time-to-tangible-value and require length to buy personalization or a buyer filter — but 01's framing is materially more aggressive than 05's.
- **"Get to aha in under 60 seconds" `[21][22]` vs. the 20–113-screen quiz cases `[05][06]`.** The split is category, not preference: Tinder's value *is* the swipe loop, so nothing needs collecting first; Cal AI's and Noom's value is a personalized plan, which cannot exist before the data does.
- **"If you're not personalization-dependent, the fix for bad retention is *less* onboarding" `[05]` vs. "add a personalization step to create ownership" `[22]`.** Note 22's familiarity-principle argument (Speechify asking voice tone / highlight preference / listening speed) says even slight personalization makes the product feel owned; note 05 says adding onboarding to fix retention on a non-personalized product makes D3 worse. The practical split: a *configuration* question that changes the next screen is service; a *data-collection* question with no downstream use is tax.
- **Progress bar vs. step count `[22]` vs. `[05]`.** Cal AI runs a persistent progress bar across 20+ screens; Typeform deliberately suppresses the count on long flows. Both are "show progress"; they disagree on whether the denominator is safe to reveal, and no threshold is given.
- **"Onboarding is the growth killer" `[22]` vs. "onboarding is the easy part; retention decides the business" `[01][05]`.** Note 22 attributes the 77%/3-day loss to onboarding; notes 01 and 05 both say getting someone through the door is the easier half.
- **Raycast shipped with no onboarding at all and users still succeeded `[28]`** — which cuts against every five-hook prescription in `[22]`. His own hedge: this may be survivorship bias among a self-selected developer audience.

---

## Playbooks

### Playbook A — Audit an existing onboarding flow

1. **Map sign-up → first success moment.** Lay every step out on a board (FigJam or stickies) and annotate where users slow down, where stress spikes, and where the quiet gaps are. Treat the map as a living artifact `[16][19]`.
2. **Label every screen "for the user" or "for us."** Delete or defer everything in the second bucket — feature tours, goal wizards, data collection with no downstream use, upsell interstitials `[05]`.
3. **Time to first tangible value.** Stopwatch it from cold install. If the user has not felt the core benefit inside ~60 seconds, and you are not in the justified-long-onboarding case (see Playbook C), that is the finding `[22]`.
4. **Check the reveal.** If you collect personalization data, is the personalization *visible* on the first post-onboarding screen? If not, the toll bought nothing `[05]`.
5. **Vacuum the negative moments.** Audit wait screens, error states and long forms with one question — *"where might someone feel stuck or uncertain?"* Negative moments are as memorable as positive ones, so an un-audited loading screen can become the peak the user actually remembers `[19]`.
6. **Find the friction users are already routing around manually.** Netflix's tell was 15% of viewers hand-scrubbing past intros before Skip Intro existed `[16]`.
7. **Fix the top 1–3 only.** Not all of them `[16]`.
8. **Run the "yeah, I can do this" test.** If a first-timer would not say that after your intro screens, the flow is too heavy `[22]`.

### Playbook B — Ship a short, permission-only onboarding (the Granola shape)

Use when the product needs no personalization data to be useful.

1. **Screen 1 — auth only.** One centered card, one headline, SSO options (flag the recently-used one), no email/password form, nothing else on screen `[05]`.
2. **Screen 2 — the permissions the core loop structurally requires, and nothing more.** Pre-empt the objection in body copy before the ask. Leave exactly one enabled control; grey out the optional one `[05]`.
3. **Stop.** No tour, no goals wizard, no feature carousel.
4. **Point the first use at a behavior already on the user's calendar**, so no new habit has to be installed `[05]`.
5. If you need to communicate a value proposition, **compress it into a swipeable story-style carousel on the welcome screen with the sign-in CTA pinned below**, rather than splitting each value point into its own mandatory screen. Convinced users skip straight through; the value still lands without costing a step (agency's own client work, no independent outcome data) `[15][12]`.
6. **Put the reason the user downloaded the app — the core setup action — within the first ~5 screens** `[15]`.

### Playbook C — Ship a long personalization quiz (the Cal AI / Noom shape)

Preconditions, both required: a **deep-pain niche**, and **personalization that is genuinely load-bearing** `[05]`.

1. **One question per screen.** Big headline, one input element (wheel picker / 3 stacked option buttons / ruler slider), one full-width primary CTA pinned to the bottom `[05]`.
2. **A one-line reason-why under every question** ("This will be used to calibrate your custom plan") `[05]`.
3. **A persistent progress bar** under the back arrow `[05]`. Suppress the total count if the total is discouraging `[22]`.
4. **Front-load the low-friction questions** that build the "this app is made for me" feeling (gender, workouts per week) before the heavier ones (height, weight, birth date, target weight) `[06]`.
5. **Insert a projection/reassurance beat mid-flow** — a chart of the user's projected outcome vs. the status quo, and a line that reads their goal back to them as achievable `[06]`.
6. **Frame sensitive questions with context first, and set and repeat expectations deliberately** (Noom's stated mechanics) `[05]`.
7. **Build the result on screen rather than rendering it.** Let the personalized brief visibly assemble itself so the payoff feels earned at the moment of maximum invested effort `[19]`. The aggressive version of this is a narrated theatrical loader ("reading your chart," "building your result") `[01]`.
8. **Place the paywall after the time and emotional investment, never before** — Noom's paywall appears only once the user has invested significant time and energy `[05]`. Starcrossed puts the full result behind payment at exactly the moment investment peaks `[01]`.
9. **Precede the paywall with a dedicated trial-explanation moment** — see Playbook E.
10. **Make the first post-onboarding screen visibly reflect the data you collected.** This is the whole justification `[05]`.

### Playbook D — Design the aha moment for a loop-value product (the Tinder shape)

Use when the value *is* the core interaction, so nothing needs collecting first `[21]`.

1. **Reduce the core interaction to one gesture** repeatable hundreds of times per session.
2. **Deliver first real value in under 60 seconds.** Ship the core loop first; defer profile completion, verification and personalization.
3. **Borrow identity and content instead of asking users to create it** — social/OAuth login plus auto-import of photos or contacts removes the two heaviest onboarding steps.
4. **Engineer a beat of uncertainty immediately after the gesture**; the reward must not be guaranteed, and must arrive on a variable schedule.
5. **Remove the emotional risk that stops people acting at all.** Double-blind matching means nobody ever sees who passed on them: *"If you don't know you're being rejected, it doesn't hurt. If it doesn't hurt, you keep playing."*
6. **Replace flat "you have a new X" notifications with a full-screen celebration** for the primary win event, and design it to be screenshot-worthy.
7. **Delay monetization until the user is demonstrably engaged**, then trigger each paid feature at the moment its matching desire is live.

### Playbook E — The trial-explanation moment (converting session zero)

1. **Put a dedicated trial-explanation screen inside onboarding, before the paywall.** State the exact charge date, promise a reminder, and headline it **"No payment due now"** `[06]`.
2. **Put a three-step timeline on the paywall itself** — Today / Reminder day / Charge day — using a **real calendar date**, not "in 7 days." Blinkist's version: Today (instant access) → Day 5 (reminder email/notification) → Day 7 ("You'll be charged on December 29, cancel anytime before") `[06][23]`.
3. **Include a plain-language cancellation explainer** with literal tap-by-tap steps, and label the CTA with how easy cancelling is ("2 taps to start, super easy to cancel") `[06]`.
4. **Put the reminder step ~2 days before the charge date**, and bold "cancel anytime" inline in the final timeline step `[23]`.
5. **Collapse trial activation to one tap** `[23]`.
6. **Repeat the reassurance line above every CTA.** Cal AI's three trial screens all put "✓ No Payment Due Now" directly above a button whose label contains the word free ("Continue for FREE", "Try for $0.00") `[06]`.

### Playbook F — Pick the shape before you build

Run in order:

1. **Does the product need personal data to be useful at all?** No → Playbook B. Yes → continue.
2. **Is the pain deep enough that a 20-step quiz filters buyers rather than filtering everyone?** No → Playbook B with one or two configuration questions (Playbook G). Yes → continue.
3. **Will the personalization be visibly different on the first post-onboarding screen?** No → cut the questions; you are collecting for yourself. Yes → Playbook C.
4. **Is the value the interaction itself rather than a personalized output?** → Playbook D.
5. In every case, layer Playbook E if you monetize by trial.

### Playbook G — Cheap activation wins that do not require a shape change

Ordered roughly by cost, all drawn from the five-hook framework `[22]` plus adjacent notes:

- **Instant taste of value** — make the onboarding *be* the core experience (Breathwork's onboarding is a guided breathing session). Principle: the Eureka effect `[22]`.
- **Fewer, finishable steps** — if the essentials fit in three screens, ship three screens with **zero input fields**, shown after the user is already inside the app (Stomper). Principle: Zeigarnik `[22]`.
- **Learn by doing** — first puzzle with hints, not the rulebook. Build at least one meaningful micro-interaction into onboarding so the user acts rather than reads `[22]`.
- **Immediate personalization** — ask what works for them (voice tone, highlight preference, listening speed, age band) instead of parading features. Even slight personalization makes the product feel owned. Principle: familiarity `[22]`.
- **Visible progress** — plain top bar, numbered steps, or checklist. Keep it unflashy `[22]`.
- **One clear focus on first open** — Apple Fitness+ does not present 30 workouts; it presents one hero card and one lime "Let's Begin" button, with everything else below the fold. Principle: Hick's Law `[24]`.
- **Persona-specific paths instead of one flow with a toggle** — define three personas by *core emotional motivation*, not demographics, and split onboarding per persona (fitness beginner vs. step-count enthusiast; accessibility-driven vs. multitasking professional) `[16]`.
- **Set emotional tone with palette, motion and sound before content is chosen** `[24]`.
- **Pin the emotional moments onto specific screens during wireframing**, with a legend on the flow board, so they are budgeted rather than bolted on later `[12]`.

---

## Case bank

| Product | Mechanic | Why it works | Numbers |
|---|---|---|---|
| **Granola** | Two-screen onboarding: (1) sign in with work account (Google/Microsoft/SSO), (2) grant microphone. Then you close the app and open it during a meeting you already had scheduled. Permission screen pre-empts the objection — "No creepy bots join your meeting" — and leaves exactly one enabled button. | Needs no personalization data to be useful, so collecting any would be pure tax. Value lands inside a behavior the user had already scheduled — no new habit to install. | 2 screens. $125M Series C (Index, led by Danny Rimer) March 2026 at **$1.5B**, up from $250M — **6x in 12 months** `[05]`. *Caveat: the press clipping he shows actually attributes Granola's popularity to "no bots in meetings," a trust/positioning advantage, not to onboarding brevity.* |
| **Cal AI** | 20+ step quiz before you see the product (28 screens before you see a price). One question per screen, one reason-why line, persistent progress bar, single navy Continue. Ends with three dedicated trial-explanation screens ("No Payment Due Now" repeated above every CTA). | Both justifications fire at once: the data makes the home screen bespoke rather than generic, and finishing 20 screens is a costly signal of real pain plus willingness to pay. Calorie tracking is a deep-pain, high-personalization category — the two preconditions. | **$35M revenue in year one**. 20+ steps `[05]`; 28 screens before price, 3 trial screens, $29.99/yr ($2.49/mo) / $9.99/mo `[06]`. Founder Zach Yadegari sold Cal AI at **$40M ARR** at 18 `[02]`. |
| **Cal AI (the other half)** | Camera *is* the home page — full-black screen, viewfinder brackets, one shutter button, four mode pills. First action is take a photo, not type or search. "Correction is the exception, not the entry path." | The incumbent primitive was add food → search → scroll → select → confirm (MyFitnessPal: 4–5 steps per meal). Resetting the primitive rather than bolting a camera button onto a search-first flow. | MyFitnessPal add-food flow: 4–5 steps `[02]`. |
| **Noom** | Up to 113 onboarding screens. Progressive commitment-building: sensitive questions framed with context first, expectations set and repeated deliberately, and **the paywall appears only after the user has invested significant time and emotional energy**. | Sunk cost is manufactured on purpose, then monetized. | 113 screens, **10–15 minutes**, $540M raised at a **$3.7B** valuation `[05]`. |
| **Starcrossed** | Astrology app, single founder, distributed off her TikTok. Extracts a heavy payload up front — birthday, **exact birth time**, birth city and more — runs a theatrical loader ("reading your chart"), then gates the reveal behind a paywall at peak sunk cost. | Barnum + effort justification stacked. The long tedious quiz is the amplifier; the reading is the generic output. Per the app's own FAQ, **each planet in the soulmate chart has two potential zodiac sign options** — the output space is a small combinatorial menu, and the locked screen literally renders two empty cells per planet. | 1 founder. 2 options/planet. Reward fragmented into many small locks rather than one paywall, pacing the effort ramp `[01]`. |
| **16 Personalities** | ~10-minute questionnaire returning a four-letter type plus a flattering archetype name and a character illustration. No unflattering type exists on the page. | The quiz is the effort ramp; the label is absorbed into identity (dating bios, workplace, self-explanation), which makes churn feel like surrendering part of the self. | **Over 1 billion** tests taken; ~10 minutes; 4-letter output `[01]`. |
| **Tinder** | Facebook login + auto-imported photos + start swiping — first value in **under 60 seconds**. No email verification, no personality quiz, no multi-photo upload gate. | Every extra onboarding step costs a chunk of users; the first dopamine hit arrives before interest can decay. Borrowed identity and borrowed content remove the two heaviest steps. | Under 60s to first value; typical dating apps lost **>70% of users after session one**; Tinder sessions averaged **11 min vs 3 min** for competitors `[21]`. |
| **ReelShort** | Episodes 1–5 free with **no account, no signup, no email** — open the app and content plays within seconds. Then episodes 6–8 cost a 30-second ad each (a deliberately bad trade), then episode 9+ costs coins, fired at a cliffhanger. | The graduated gate: *"attention, effort and then money."* Each step normalizes the next, so the hard paywall never reads as a cliff. Prove worth before asking for anything. | Free 1–5, ad-gated 6–8, coins from 9. 30s ad for ~60s of content `[08]`. |
| **Ahead** (Apple Design Award) | Quiet splash sets tone instantly → self-profiling questionnaire at a deliberate cadence → the **peak**: a personalized brief that visibly *constructs itself in front of you* rather than just appearing → the **end**: a gentle nudge to come back tomorrow. Pre-permission screen with a mascot and benefit framing rather than a bare OS prompt. | The peak lands immediately after the user has spent effort, so the payoff feels earned; the closing nudge pre-commits the next visit without guilt mechanics. Explicitly rejects the wellness-category default of moral pressure and streak dashboards. | Apple Design Award winner. No conversion or retention figures given `[19]`. |
| **Raycast** | Shipped with **no formal onboarding at all** early on — the interaction model (open, type, act) was narrow enough to teach itself. Today a walkthrough appears as a result row inside the command bar with a completion percentage, not a modal flow. Activation continues indefinitely via "I didn't know I could do that." | An intuitive, narrow interaction model is cheaper than an explanatory layer. Balance friction against learnability instead of papering over confusion with a tour. | Walkthrough shown at **18% completed** in the command bar. Fewer than 40 people, valuation north of $100M (unsourced) `[28]`. |
| **Phantom** | Wallet-creation step: three-segment progress bar so the user can see the flow ends, reassuring subcopy stating reversibility ("Usernames can be changed later on"), an input **pre-filled with a valid generated handle** (BriskTree5900), inline green "Username available," one purple Continue. Onboarding ends on "You're all done! / You can now fully enjoy your wallet" with an animated Get Started button. | In a category where the barrier is skepticism rather than motivation, polish functions as a credibility proxy. Nothing on screen requires crypto knowledge — "build for people, not pros." | Mid-2023 brand refresh; recently #2 in the US App Store Utilities category, above WhatsApp and Instagram (undated, unsourced) `[26][30]`. |
| **Breathwork** | The onboarding *is* a guided breathing session. No account setup, no configuration, no walkthrough. | Eureka effect — the felt benefit inside the first 60 seconds produces the "oh, I get it" flash. | "First 60 seconds" as the window `[22]`. |
| **Stomper** | Exactly three visual steps, shown **after** the user is already inside the app, with **no input fields** — just the essentials explained. | Zeigarnik effect: people finish what they've started as long as the remaining steps look achievable. Success test: the user thinks "yeah, I can do this." | 3 steps, zero fields `[22]`. |
| **Typeform** | Long-form templates show no step count by default — one question per screen, only a hairline progress bar at the very top edge. | Revealing "12 steps" before any value has landed triggers an effort estimate and the user bails. Hide the total when the total is discouraging. | 12 steps used as the "they're gone" threshold `[22]`. |
| **Speechify** | Onboarding configures the reading environment immediately — voice tone, highlight preference, listening speed. Asks what the user wants rather than parading features. Single question per screen, one column, one tap, no CTA (tapping a row advances). | Familiarity principle — even slight personalization makes the product feel trusted and owned. | Three personalization dimensions `[22]`. |
| **Apple Fitness+** | A first-time open presents one hero card and one lime "Let's Begin" pill, not 30 workouts. The reduction continues into the session player: three controls only. | Hick's Law — reducing options reduces decision fatigue; simplicity becomes the strongest activation moment. | "30 workouts" used rhetorically as the anti-pattern `[24]`. |
| **Headspace** | Emotional anchoring at onboarding: amber upper half with a smiling sun character over dark navy, "Let's create your meditation practice," two illustrated benefit rows, one blue Continue. Emotion occupies more pixels than the copy. | The tone tells you how to feel about the product before any content is chosen — you're "entering a calm space," not opening an app. | "Millions invested" (his figure, unsourced) `[24]`. Separately: renaming the trial a **"30-day guest pass"** lifted new signups **+7%** `[23]`. |
| **Forest** | Onboarding screen sells the object, not the tool: mint gradient, thin progress bar, "Welcome To Forest! Ready to Focus? Plant a seedling!" and a single glowing sapling centered in whitespace. No feature list, no metrics. | The stake (the tree) is introduced before any mechanic is explained. | 2M+ real trees planted lifetime `[04]`. |
| **Ladder** | TikTok → quiz funnel for acquisition; the cohort calendar (everyone on the same workout the same day) for retention. First session ends on a congrats banner and an unlock bar where **the reward is access to the group** ("You unlocked Team Chat!"). | Explicitly separates the acquiring mechanic from the retaining one. Absence becomes visible to the cohort without anyone opting in. | **500% growth in 2023**; ~5,000 cohort members; 2025 iPhone App of the Year finalist `[02]`. *Ladder's own quoted source credits a combination of underserved niche, product iteration and TikTok marketing — not the cohort calendar alone.* |
| **Habitica** (failure case) | Onboarding is a "Beginner Objectives" checklist — Create a Task, Complete a Task, **Hatch a Pet, Feed a Pet, Purchase Equipment** — rewarding 6 achievements and 100 gold. | The productivity app's first-run experience contains almost zero productivity: it teaches the game layer, not the user's job. A peer-reviewed study found **100% of participants experienced counterproductive effects** (no sample size given; a 100% result implies a very small qualitative study). | 100% of study participants `[07]`. |
| **Slack (vintage first-run)** (failure case) | Green coach-mark tooltip — "These are your channels… Got it!" — pointing at a sidebar, over a near-empty canvas reading "👋 Welcome! Slack is a messaging app for teams." | A tour of nothing. The emptiness is the argument: nothing is being taught because nothing is there. Tim's on-screen verdict: "THEY ARE STUPID AND POINTLESS." | `[05]` |
| **Frase signup** (failure case) | Google SSO button, then four stacked fields (Work Email, Full Name, Password, Confirm Password) and a small Sign Up button. | Four fields before anything happens; entirely form, zero product surface. The "government form" onboarding archetype. | `[05]` |
| **Midjourney** | An image-pair ranking flow builds a "personalization profile" — a trained sub-model of the user's visual taste, not a settings page. In v7, **personalization is on by default**. | Default-on beats buried-in-settings. The asset is the user's creative fingerprint and it lives on Midjourney's servers. | **70%+ of active users adopted it within 3 months** (unsourced). $500M 2025 revenue, $0 VC, ~150 employees `[13]`. |
| **Oura** | Surfaces "your body has been tracked for **1,095 nights**" so users watch their own investment accumulate. | Reframes lock-in as partnership rather than entrapment; the counter is the visible proof that a 3-year user's product is not a 10-day user's product. | 1,095 nights = 3 years of wear; 12-month retention in the high 80s vs low 30s for other wearables (per on-screen article) `[13]`. |
| **MacroFactor** | An onboarding card with an illustrated penguin stating the business model up front: "**MacroFactor is a premium-only application by design**" — weekly dietary adjustments at a fraction of a coach's cost, "We will **never** serve ads," your subscription funds development. Button: "Next: Hooray! 🏁". | Uses an onboarding screen to pre-frame the paywall as a values statement rather than a gate, and ties the no-shame algorithm to the no-ads business model. | $72/year, 500,000 users, 4.8 rating, bootstrapped `[02]`. |
| **Moonly** | Removed the free trial from the monthly plan entirely so the trial exists **only on annual**. No price change, no new plan — the CTA label swaps to "Start 3 days free trial" when annual is selected. | Decoy effect: exclusive value on one plan makes it the obviously smarter purchase. | **+39% conversion rate, +47% revenue per 100 installs** (source: abtest.design; no sample size, duration or baseline given) `[23]`. |
| **Slopes** | Replaced a multi-step paywall flow with a single-tap free-trial start. | Cognitive load at the activation moment. "Friction at the wrong moment is fatal." Diagnostic: if signups are low, audit the *entry point* first. | **+25% trial start rate** `[23]`. |
| **Blinkist** | Added one element to the paywall: an explicit vertical timeline — Today (instant access) → Day 5 (reminder) → Day 7 ("You'll be charged on December 29") — plus a tap-by-tap cancellation explainer and the CTA sub-label "2 taps to start, super easy to cancel." | Trust economics. Transparency captures the skeptics who didn't believe the offer was real; surprised users cancel and review poorly, informed users commit harder. | **+23% conversion, −55% complaints, zero change in churn.** $89.99/yr `[06][23]`. |
| **Duolingo "Welcome to Leagues"** | A first-time Leagues screen: trophy illustration, "You just qualified for Hydrogen League! Keep earning XP to rise the ranks," a **6 days left** countdown, and a **5-row** board with the user placed third with two beatable people above. | Introduces a competitive mechanic at a size where placing feels achievable — five visible competitors, a time-boxed window, the user pre-placed mid-pack. | 5-person cohort, 6-day window, user at rank 3 (440 XP vs leader 700) `[03]`. |

---

## Anti-patterns

- **Onboarding like a government form.** Sign-up → permissions → walkthrough → feature tour → goals wizard stacked back to back. The user pays a click toll before seeing any reason to care `[05]`.
- **Screens that do work for you, not the user.** Data collection with no downstream use, feature showcases, upsell interstitials. His single named failure mode `[05]`. Watch for it inside otherwise-good flows — Cal AI hides two market-research questions among six "personalization" ones `[06]`.
- **Touring an empty product.** Coach marks explaining a UI that has no content in it yet. Fix the empty state (smart defaults, sample data) instead of narrating it `[05][16]`.
- **Adding onboarding to fix retention on a non-personalized product.** The reflex is backwards; more screens make D3 worse `[05]`.
- **Copying the 20-step quiz without the preconditions.** Length only pays in a deep-pain niche where personalization is load-bearing; elsewhere it is pure drop-off `[05]`. Do not read Cal AI's 28 screens as a target `[06]`.
- **Assuming short is always right.** The mirror-image error; if it were true, Cal AI and Noom could not exist `[05]`.
- **Removing all friction on principle.** Over-stripped onboarding confuses users and they quit just like over-long onboarding does `[15]`.
- **Splitting a value-prop carousel into individual mandatory screens** so users "see each slide." Buys comprehension at too high a step cost `[15]`.
- **Front-loading all the steps at once** — the IKEA-with-12-pages-visible problem. People quit before starting `[22]`.
- **Revealing a high step count before value has landed.** Seeing "12 steps" makes the brain price the effort and bail `[22]`.
- **No progress cue at all** — the government-form feeling of infinite fields with no visible end `[22]`.
- **Explaining instead of letting people act.** Passive consumption retains less and bounces more than active engagement `[22]`.
- **Feature-flashing during onboarding** instead of asking what the user wants; it never creates ownership `[22]`.
- **Onboarding that teaches your game layer instead of delivering the user's job** (Habitica's Hatch a Pet / Feed a Pet / Purchase Equipment checklist) `[07]`.
- **Dumping the full catalog on first open.** More options = slower decisions = decision fatigue, which kills the activation moment `[24]`.
- **Front-loading a long profile-creation and verification gate** in a product whose value is the core loop. Typical dating apps lost >70% of users after session one this way `[21]`.
- **Making rejection or failure visible early.** Showing who viewed and didn't reply makes every "no" personal, and people stop trying `[21]`.
- **Telling instead of showing when introducing a new gesture.** A well-placed persistent visual cue does it silently; onboarding copy and tutorials do not `[18]`.
- **Big-bang UX overhauls.** Ship interaction changes in stages across releases; Apple could have killed the home button in iOS 1 and deliberately did not `[18]`.
- **Just stopping.** No closure, no "you're done," no invitation to return. A flow that ends flat wastes the second of the two moments memory actually retains `[19]`.
- **Random-timed asks.** Paywalls, tutorials and rating prompts shown when the user is frustrated or confused instead of immediately after a win `[15]`.
- **Bolting a marketplace/browsability layer on before the underlying utility exists** `[28]`.
- **Treating onboarding as a one-and-done moment** `[28]`.
- **Treating onboarding as the win.** Getting someone through the door is the easier part; retention decides whether there is a business `[01][05]`.
- **Chasing virality before attachment.** Shareable moments don't work on users who haven't stuck around long enough to care `[17]`.

---

## Decision guide

- **IF your product delivers value without any personal data** (Granola, a meeting recorder; Raycast, a launcher) **THEN** cut onboarding to auth + the permissions the core loop structurally requires, and stop. Collecting anything more is a tax you are charging your own funnel `[05][28]`.

- **IF your product depends on heavy personalization THEN a long onboarding is justified** — it earns the personalized first run AND filters for high-intent buyers. Both mechanisms fire at once; that is what makes Cal AI's 20+ steps and Noom's 113 work `[05]`.

- **IF you go long BUT the first post-onboarding screen looks the same as it would without the data THEN cut the questions.** The user paid the toll and got the generic product; you have the drop-off cost with none of the benefit `[05]`.

- **IF your category is low-pain or low-personalization THEN do not import the long-quiz pattern**, no matter how well it works for calorie trackers. Length only self-selects buyers where the pain is deep enough to be worth 20 screens `[05]`.

- **IF retention is bad and your product is NOT personalization-dependent THEN the fix is less onboarding, not more.** The reflex to add screens is backwards `[05]`.

- **IF the value of your product IS the core interaction** (swipe, scroll, play) **THEN get to first value in under 60 seconds**: OAuth login, auto-import assets, defer profile completion and verification entirely `[21][22]`.

- **IF you monetize by trial THEN design the whole funnel to convert in session zero** — 82–89.4% of trial starts happen on install day and conversion never recovers after day 7 `[06]`.

- **IF trial starts are your bottleneck (not trial→paid) THEN work the entry point, not the charge.** The top-decile edge is 3x on trial-start rate but only ~2x on trial→paid `[06]`.

- **IF users hesitate at the paywall THEN the missing ingredient is trust, not brevity.** Add a three-step timeline with a real calendar date, a "No payment due now" line above every CTA, and a plain-language cancellation explainer — Blinkist got +23% conversion and −55% complaints from exactly this `[06][23]`.

- **IF you are placing a paywall inside a long onboarding THEN put it after the time and emotional investment, at peak sunk cost** — never before `[05][01]`.

- **IF onboarding has ≤3–5 steps THEN show a progress bar with the count.** IF it has many (≥12) **THEN show progress without the total** — Typeform's default `[22]`.

- **IF your onboarding has more than three genuinely crucial steps THEN make each one a single question with a single input and a reason-why line**, rather than compressing several onto one screen `[05][22]`.

- **IF the core flow is simple enough to demonstrate THEN replace the tutorial with the real thing plus guided hints** (first Sudoku puzzle, not the rulebook) `[22]`.

- **IF you are introducing a new gesture or interaction model THEN use a persistent subtle visual cue and staged releases, not a tutorial** `[18]`.

- **IF your first-run screen would be empty THEN prepopulate it with sample data or smart defaults** rather than shipping coach marks over a void `[16][05]`.

- **IF your audience is trust-sensitive (crypto, finance, health, anything with scam exposure) THEN front-load emotional and trust work into onboarding** — value promise and warm visual above the fold, auth below, nothing else tappable; pre-fill inputs with valid defaults; state reversibility in subcopy; validate inline `[12][14][26]`.

- **IF you are about to request an OS permission THEN pre-handle the objection in the screen before it** ("No creepy bots join your meeting"; Ahead's mascot-framed ATT primer) and leave exactly one enabled control `[05][19]`.

- **IF the user has just completed a high-effort step THEN put the peak there** — build the personalized result visibly on screen — and reserve the ending for closure and a return invitation `[19]`.

- **IF you want the "made for me" feeling without a real personalization engine THEN understand you are running the Barnum + effort-justification stack**: long extraction phase, precise-feeling inputs, theatrical loader, flattering output, no unflattering buckets. It works, and Tim says outright that most of it is fake `[01]`. Ethical exposure (App Store risk, refunds, backlash when users find the FAQ) is acknowledged but unresolved in the source.

- **IF you can hand the user any value before asking for an account THEN do it.** ReelShort's episodes 1–5 need no signup at all; the free→attention→money staircase converts better than a binary wall `[08]`.

- **IF your acquisition funnel is a quiz THEN do not assume it also retains.** Name the retention mechanic separately (Ladder: quiz acquires, cohort calendar retains) `[02]`.

- **IF activation looks fine but week-2 usage is flat THEN treat onboarding as unfinished** — keep engineering "I didn't know I could do that" discoveries after week one, and make investment visible ("1,095 nights tracked") `[28][13]`.

- **IF you have a personalization feature THEN default it on rather than burying it in settings** — Midjourney's default-on choice got 70%+ adoption in 3 months `[13]`.

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
`[28]` How Raycast Reached a $100M+ Valuation (As a Small Startup) — https://www.youtube.com/watch?v=eWGNjTLK84c
`[30]` 4 levels of UI/UX design (and BIG mistakes to avoid) — https://www.youtube.com/watch?v=86PGRyQjdzQ

### Evidence caveats carried from the source notes

- The **77% / 3-day** figure is uncited and inconsistent inside its own video (narration says 77%, the on-screen card says 70%) `[05][22]`.
- **Cal AI's $35M** comes from a blog post tagged "Uncategorized" with no named publication `[05]`.
- **Granola's 2-screen onboarding is presented as the cause of its growth**; the press clipping he shows attributes popularity to "no bots in meetings" instead `[05]`.
- **"Users who bounce on a 20-step quiz were unlikely to convert anyway"** is asserted with no data — the standard self-serving defence of any high-friction funnel. A real test measures revenue-per-install across quiz lengths, not completion rate `[05]`.
- **Every case is survivorship-selected.** No note in the corpus contains a controlled onboarding A/B result except the third-party abtest.design screenshots in `[23]`, which come with no sample size, duration or baseline.
- The Adapty source behind `[06]` carries two caveats he skips: trial-vs-direct is **category-specific**, and "the tactics that work at the 95th percentile don't apply at the 40th."
- Client work presented as case study in `[12]`, `[14]` and `[15]` (SolCard/Spark carousel onboarding, the web3 trust onboarding, the AI note-taking app) is his own agency's portfolio with no independent outcome data; use the mechanics, not the implied results.
