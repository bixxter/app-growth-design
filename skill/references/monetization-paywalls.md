# Monetization, Paywalls & Pricing

Distilled from 17 Tim Gabe notes. Source markers `[NN]` map to the Sources list at the bottom.

**Scope warning before using any of this.** The paywall data that anchors this file comes from the top decile of subscription apps. The same source slide states plainly that **57.7% of new apps never cross $1,000 in revenue** and that "the tactics that work at the 95th percentile don't apply at the 40th" — for most apps below that line "this isn't a monetization problem," it's distribution or product `[06]`. Diagnose which problem you have before touching the paywall.

---

## Core principles

### 1. The paywall is a trust screen, not a checkout screen
Two diagnostic questions to run against any paywall `[06]`:
- Does it appear **after the user has felt something** (a value moment), not before?
- Does it tell the user **exactly when they will be charged**?

If either answer is no, "you're asking for trust before you earned it." Corollary: transparency is not a softness tax, it is the conversion mechanism. Blinkist added one explicit "how your free trial works" block and got **+23% conversion, −55% complaints, zero change in churn** `[06]`. Ambiguity about *when* you charge, *what* they get, or *how* to cancel costs you conversions and creates cancellations at the same time.

### 2. Commitment size beats total cost
What blocks a subscription is not the total money but the size of the single commitment demanded on first contact from a user who has no evidence of long-term value yet. Weekly plans convert **1.7–7.4x better than annual across every price tier** — despite $7/week (~$364/yr) being a far worse deal than the same app's $38/yr annual plan `[06]`. The annual revenue isn't lost, just deferred: by ~month four the user is invested enough that the year commitment is easy. Market has already re-based: weekly went from **43.3% → 55.5%** of subscription revenue in 24 months while monthly halved (**21.1% → 11.7%**) and annual fell (**29.2% → 22.5%**) `[06]`.

### 3. Structure out-tests price, always
Ranked LTV uplift by test type (Adapty, $3B revenue across 16,000+ apps) `[06]`:

| Rank | Test type | LTV uplift |
|---|---|---|
| 1 | Locale (translation + local currency) | 62.3% |
| 2 | Trial structure (add/change) | 59.6% |
| 3 | Plan duration | 58.7% |
| 4 | Plan count (how many plans shown) | 57.1% |
| 5 | Price changes | 45.5% (lowest CR uplift: 28.3%) |
| 6 | Visual and text changes | 34.6% |

The single biggest structural lever: **adding a free trial to a weekly plan takes 12-month LTV from $7.40 to $54.50 — +636%** `[06]`. No price test produces that. (Note the internal contradiction in the source — see Anti-patterns.)

### 4. You have one session
**82% (RevenueCat) / 89.4% (Adapty) of trial starts happen on install day**; 55% of 3-day trial cancellations happen on day zero; trial→paid conversion after day 7 drops sharply and never recovers `[06]`. Design the entire funnel to convert in session zero. Which means the felt benefit has to land before the ask — most apps open with account creation, settings and walkthroughs, i.e. work before reward; invert the order so the reward comes first, ideally inside the first 60 seconds (Breathwork's onboarding *is* a guided breathing session) `[22]`. The top decile's edge is disproportionately at the **trial-start** step, not trial→paid: p90 apps run a **20.3% trial-start rate vs a 6.2% median (>3x)** but are only **~2x** better at converting trials to paid `[06]`. Get more people into the trial rather than optimizing the charge.

### 5. Session zero does not mean a short flow
The binding constraint is trust, not brevity — which is why a 28-screen flow can outperform a 3-screen one `[06]`. Length is only justified when it buys one of exactly two things `[05]`:
1. **A personalized first experience** that is impossible without the collected data — and the personalization must be *visible* on the first post-onboarding screen, or the user paid the toll and got the generic product.
2. **A buyer filter.** People who bounce on a 20-step quiz were unlikely to convert anyway; completion is a costly signal of deep pain plus willingness to pay.

Effort is not friction, it's the amplifier on the payoff (effort justification, Aronson & Mills 1959) `[01]`. If length buys neither of the two, it is work you are extracting and it will show up in D3 retention.

### 6. Price the ask at the emotional peak, not the session boundary
- Starcrossed puts the full soulmate reveal behind payment at exactly the moment sunk cost peaks — after birth time, birth city and a theatrical "reading your chart" loader `[01]`.
- Noom's paywall appears **only after** 113 screens / 10–15 minutes of time and emotional investment `[05]`.
- ReelShort fires its coin paywall at the cliffhanger, not between episodes — "emotional peak pricing," where paying reads as *relief* `[08]`.
- The general rule (peak-end rule): map every flow's biggest win moments, amplify them, then attach the upgrade / rate / share ask immediately after `[15]`.

### 7. Free→paid should be a staircase, not a cliff
Charge **attention, then effort, then money** `[08]`. ReelShort: episodes 1–5 free with no account at all → episodes 6–8 unlocked by a 30-second ad → episode 9+ costs coins. The middle rung is a deliberately *bad* trade (30s of ad for ~60s of content); its job is not ad revenue, it is teaching the user that paying is an **upgrade**, not a new barrier. Each step normalises the next. The archetype being argued against is the standard three-tier "Choose Your Plan" sheet where one screen carries the entire free→paid decision.

### 8. Higher prices convert downloads better — through self-selection
Median download→paid conversion by price tier (RevenueCat 2026): **high-priced 2.8%** (top quartile 6.1%), **mid 2.0%** (4.4%), **low 1.4%** (3.7%) `[06]`. Conversion falls monotonically as price falls. Benchmark against the top of your category, not the cheapest competitor. Explicit disclaimer from the source: this is **not** "raise your price tomorrow" — the mechanism is that a higher price self-selects high-intent users, not that any user pays more if you charge more. "Racing to the bottom on price to save conversion — the bottom is exactly where conversion goes to die."

### 9. Repackage before you rebuild
Every lift in the SaaS-tricks note came from copy, packaging or visibility — no offer changes, no price changes, no new features `[23]`. Blinkist changed nothing about the trial itself (+23% signups). Mobbin shipped **zero** new paywalled features and just stamped "PRO" labels on already-locked content across the product (**+35% free-to-paid**). Rewriting the offer is the expensive path to the same lift.

### 10. Lock at the second unit of usage, never at the beginner
Busuu lets free users learn exactly one language; the second requires upgrading — **+83% conversion among engaged users** `[23]`. The lock is invisible to casual users and devastating to power users, so it converts the engaged cohort without taxing beginners. Place the upgrade prompt *inside* the workflow (a PREMIUM card floating in the lesson list) rather than on a separate paywall screen. Strava does the same shape: the full segment leaderboard — the emotional core of the product — sits behind an orange Subscribe CTA right where competitive intent peaks `[07]`.

### 11. Sell paid features as enhancements of a loop the user already enjoys
Tinder waited until users were hooked, then surfaced each paid feature at the moment its matching desire appeared: Boost once matches were flowing, Gold when curiosity about likers peaked, Super Likes when a specific person mattered `[21]`. The upsell never interrupts the core experience, it enhances it. Quantify the benefit in the headline ("You're 3x more likely to get a match!"), not the feature.

### 12. Testing velocity is the variable most correlated with revenue
Apps running **50+ paywall experiments/year have median revenue of $914,734 vs $48,848 for apps running one — an 18.7x gap** `[06]`. Top performers average ~15 paywall experiments/year; most founders run 0 or 1. Treat the paywall as a permanently live surface, not a screen you build once. (Caveat: this is a median-revenue correlation, not a controlled uplift — bigger apps have more traffic and staff, which is *what lets them* run 50+ tests.)

### 13. How the product feels sets the price the user will accept
Revolut's investment in tactile animation — scrubbable charts that glow at the touch point, cards rendered as 3D objects — tracked deliberately alongside its move upmarket into premium tiers. As price goes up, the product must *feel* more expensive; in fintech, polish is a trust proxy and trust decides how much users move through the product `[26]`. Dropping a premium-positioned product into a plain signup flow sets the wrong price perception at first contact. (No conversion or ARPU number is given for Revolut — this case is qualitative.)

### 14. Defensible subscriptions are charged on something the user cannot re-create elsewhere
Oura charges **$5.99/month for access to data your own body generates** and holds **high-80s 12-month retention vs low-30s for other wearables** — because the export gives you the CSV but not the model trained on 1,095 nights of your physiology `[13]`. Peloton sustains ~**92–93% 12-month subscription retention** on a social/ritual layer, not on the $1,700 bike `[09]`. The 2026 framing: as AI agents absorb the functional layer, the subscription has to be paid for identity, ritual and community, not task completion `[11]`.

### 15. Tie the price to the outcome when the outcome is the product
Intercom prices Fin **per resolved ticket** — per successful outcome, not per seat and not per conversation `[20]`. Fin is now Intercom's fastest-growing product ever.

---

## Playbooks

### A. Audit an existing paywall (run in this order)
1. **Placement.** Does it fire after a felt value moment or an emotional peak? If it fires at a random session boundary, at frustration, or before any value, move it first — nothing else matters `[06] [15]`.
2. **Billing clarity.** Is there a three-step timeline (Today / reminder day / charge day) with a **real calendar date**, not "in 7 days"? `[06] [23]`
3. **Cancellation.** Is there a plain-language, tap-by-tap cancellation explainer on the paywall, and does the CTA sub-label say how easy cancelling is (Blinkist: "2 taps to start, super easy to cancel")? `[06]`
4. **Plan structure.** Is a weekly plan offered? Is a trial attached to it? Is one plan pre-selected and badged? `[06]`
5. **Unit price.** Is the per-month equivalent shown next to the headline price ($89.99 → $7.50/month; $79.99 → 6.67/month)? `[06]`
6. **Outcome above price.** Is there a visual outcome promise — projected results chart, personalized goal line — above the plan grid? Neither Yazio variant leads with price `[06]`.
7. **Proof.** Quantified social proof adjacent to the CTA ("Premium users report on average losing 3X the weight"; star-rated testimonials with names and ages) `[06] [27]`.
8. **Certainty.** Any ranges, "from $X", or hedged estimates? Replace with a single specific number — Uber swapping a fare range for one estimated price produced a double-digit lift in rides per user `[23]`.

### B. Build the honest trial paywall (reference implementation: Blinkist)
1. Card headed "How your free trial works."
2. Vertical gradient timeline, three nodes:
   - **Today** — "Get instant access…"
   - **Day 5** — "We'll remind you with an email or notification that your trial is ending."
   - **Day 7** — "You'll be charged on December 29, cancel anytime before." (absolute date)
3. Price in one plain sentence with the monthly equivalent: "Unlimited free access for 7 days, then $89.99 per year ($7.50/month)."
4. A "View all plans" secondary link — not a competing button.
5. An FAQ box below: "How can I cancel?" with literal tap steps.
6. CTA "Start my free trial now" + sub-label "2 taps to start, super easy to cancel."
   Keep the reminder step ~2 days before the charge and bold "cancel anytime" inline in the final step `[23]`. Result: +23% CR, −55% complaints, no churn change `[06]`.

### C. Add a dedicated trial-explanation moment *inside* onboarding (reference: Cal AI, Lose It!)
Before the paywall, insert 1–3 screens that do only this `[06]`:
- Bell icon + "We'll send you a reminder before your free trial ends."
- A "✓ No Payment Due Now" reassurance line placed **directly above** the button, repeated on every screen.
- CTA copy carrying the word free: "Continue for FREE", "Start My 3-Day Free Trial", "Try for $0.00".
- Fine print that spells out the mechanic in full: "3 days free, then $29.99 per year. Billed yearly. Plan auto-renews unless you cancel. Cancel in the App Store."
- A plan selector with the preferred option **pre-selected and badged** ("3 DAYS FREE", "BEST MATCH", "50% OFF"), the alternative left as an empty radio.
By the time the paywall arrives the decision is already made — the paywall is a confirmation, not a decision.

### D. Decide whether to run a long quiz before the paywall
1. Is your category **deep-pain** (calorie tracking, weight loss, dating, astrology)? If no → stop, keep onboarding short `[05]`.
2. Would the first post-onboarding screen be **generic** without the collected data? If no → stop `[05]`.
3. If both yes, build the Cal AI template: **one question per screen**, a big headline, a one-line reason-why under it ("This will be used to calibrate your custom plan"), one input element, a persistent progress bar, one full-width Continue `[05] [06]`.
4. Ask for inputs that *feel* precise (exact birth time and city, not just birthday) — precision of input sells precision of output `[01]`.
5. Slot in a theatrical loader between the last question and the reveal, narrating what it's supposedly doing, so assembly reads as discovery `[01]`.
6. Place the paywall immediately after peak investment, before the reveal `[01] [05]`.
7. Sanity check: measure **revenue-per-install** across quiz lengths, not completion rate — the "bouncers wouldn't have converted anyway" defence is asserted, never evidenced `[05]`.

### E. Design a graduated gate for a non-subscription product (reference: ReelShort)
1. **Stage 1 — free, zero account.** Content plays within seconds of opening. No signup, no email `[08]`.
2. **Stage 2 — pay with attention.** Gate the next slice behind a short ad or a bit of effort, and make the trade slightly bad on purpose so paying reads as an upgrade `[08]`.
3. **Stage 3 — pay with money,** fired at the emotional peak.
4. If you use credits/coins/tokens, treat **exchange rate design and spending visibility as first-class product decisions** — currency abstraction itself is legitimate (OpenAI tokens, Vercel compute units, AWS instance hours) because brains process abstract numbers differently. The ethical build is the same abstraction **plus** a running-total spend view `[08]`.

### F. Structure plans to make one option obviously right
- **Give the preferred plan something no other plan has** rather than adding another tier. Moonly removed the trial from monthly so the trial existed **only on annual**: **+39% conversion, +47% revenue per 100 installs**, with no price change `[23]`.
- **Make the CTA label change with plan selection** — "Start 3 days free trial" when annual is selected, plain "Subscribe" on monthly — so the perk is unmissable `[23]`.
- **Differentiate with a soft perk, not price.** Headspace: 7-day trial on monthly, 14-day on annual → "insane double-digit" conversion lift. The extra week costs nothing and anchors the annual plan as the better bundle `[23]`.
- **Use a visually dominant middle tier** for consumable packs: Tinder's Super Like sheet shows 5 / 25 / 60 packs with the 25 pack scaled up, coloured and badged "SAVE 25%", the 60 pack ($1.00/ea, "SAVE 37%") deliberately small and grey, and a low-contrast "NO THANKS" exit `[21]`.
- **Test plan count itself** — how many plans you show out-tests any price change `[06]`.

### G. Convert existing free users without shipping anything new
1. Stamp a **PRO badge on every locked feature, in context, across the whole product** before building any new paid feature — Mobbin, +35% free-to-paid `[23]`.
2. Move the upgrade prompt **into the workflow** (a premium card inside the lesson list) instead of a separate paywall screen — Busuu `[23]`.
3. Set the lock at the second unit of usage — second language, second project — where intent is already proven `[23]`.
4. Attach the upgrade ask to a mapped peak win moment, amplified with motion/feedback so the peak registers `[15]`.

### H. Experimentation cadence
Target **50+ paywall experiments/year**; even hitting the top-performer average of ~15/year separates you from the 0-or-1 majority `[06]`. Queue: locale (translation + local currency) → trial structure → plan duration → plan count → price → visuals/copy `[06]`.

---

## Case bank

| Product | Mechanic | Why it works | Numbers |
|---|---|---|---|
| **Cal AI** | 28-screen onboarding before any price, containing a dedicated 3-screen trial explanation ("No payment due now", exact charge date, promised reminder) | By the paywall the user has invested 28 screens of personal data and the trial screens have removed fear of a surprise charge — the paywall is a confirmation, not a decision | **$35M revenue year one**; 28 screens; 3 trial screens; $29.99/yr ($2.49/mo) vs $9.99/mo shown; 3-day trial `[06] [05]` |
| **Blinkist** | Added one explicit element: a front-and-center "How your free trial works" timeline (Today → Day 5 reminder → Day 7 charged on an absolute date) plus tap-by-tap cancel instructions | Trust economics — surprised users cancel and review poorly; transparency captures skeptics who didn't believe the offer was real | **+23% conversion, −55% complaints, 0 change in churn**; $89.99/yr ($7.50/mo), 7-day trial. Same pattern reported as **+23% trial signups** `[06] [23]` |
| **Lose It!** | Entire paywall section devoted to how the trial works, including cancellation; trial pill is the second-most emphasized element after the headline; quantified proof bullet | Removes ambiguity at the exact moment of decision, converting skeptics | **$3.3M monthly revenue at 350k monthly installs**; $39.99/yr after 7-day trial; "Premium users report on average losing 3X the weight" `[06]` |
| **Yazio** | Built the paywall structure-first (plan grid, trial framing, default selection, streaks) and tuned price last; both variants put a visual outcome promise above the price grid | Plan grid, default selection and framing do the conversion work; price is a trailing variable | **~$3M monthly revenue at 700,000 installs**; 3mo $39.99 / 12mo $79.99 (6.67/mo, "BEST MATCH"); alt variant 6mo $34.99 / 12mo $54.99 (default) / Lifetime $149.99 was $299.99 "50% OFF" `[06]` |
| **Moonly** | Removed the free trial from the monthly plan so the trial existed only on annual; CTA label swaps with plan selection | Decoy / asymmetric dominance — annual stops being "the expensive one" and becomes the obviously smarter buy. No price change, no new plan | **+39% conversion rate, +47% revenue per 100 installs** `[23]` |
| **Headspace (naming)** | Deleted the word "trial" — same 30 days, relabelled a **"30-day guest pass"** | Framing effect: "trial" is transactional and carries obligation; "guest pass" reads as an invitation | **+7% new signups from a single word** `[23]` |
| **Headspace (trial length)** | 7-day trial on monthly, 14-day trial on annual — the perk, not the price, differentiates | Anchoring: users compare the whole bundle; the extra week has no cash cost but reads as a better deal | "Insane double-digit increase" in conversions (no figure given) `[23]` |
| **Slopes** | Replaced a multi-step paywall flow with a single-tap free-trial start | Cognitive load — friction at the activation moment is fatal | **+25% trial start rate** `[23]` |
| **Mobbin** | Shipped zero new paywalled features; stamped "PRO" labels on already-locked content across the whole product | Loss aversion — seeing what you can't touch, repeatedly and in context, generates the upgrade impulse | **+35% free-to-paid conversions** `[23]` |
| **Busuu** | Free users get exactly one language; the second requires upgrading. Lock rendered as a PREMIUM card inside the lesson list, not a separate screen | Scarcity applied where utility increases — invisible to casual users, devastating to power users | **+83% conversion rate among engaged users** (segment figure, not whole-population) `[23]` |
| **Uber** | Replaced the per-ride price *range* with a single estimated price, visually dominant (yellow chip, "$10.99") | Certainty effect — riders pick the guaranteed outcome; uncertainty kills the purchase decision | "Double-digit" increase in rides per user (no figure); enormous at Uber's scale `[23]` |
| **Tinder** | Value-first monetization: Boost when matches are flowing, Gold when curiosity about likers peaks, Super Likes for a specific person. Paywall headline quantifies the benefit; middle price tier visually dominant; exit de-emphasized | Upsell arrives when perceived value is highest, so it reads as help rather than extraction; enhancements never gate the core loop | **9.6M paying subscribers, $2B+ annual revenue, 75M MAU**; Boost pitched as 10x more matches; Super Like "3x more likely to get a match"; packs 5 @ $1.60/ea, 25 @ $1.20/ea (SAVE 25%, enlarged), 60 @ $1.00/ea (SAVE 37%, greyed) `[21]` |
| **ReelShort** | Graduated gate (free eps 1–5 → 30-sec ad eps 6–8 → coins from ep 9, fired at the cliffhanger) wrapped in an "anti-calculator": variable per-episode price, awkward coin ratios, no spend dashboard, escalating price with sunk cost, microtransaction atomisation | Mobile F2P economy applied to serialised emotional content; coins abstract price, cliffhangers create peak willingness to pay | **35.7 min/day per US user** vs Netflix 24.8 / Prime 26.9 / Disney+ 23; **~$40 to finish one series** over ~80 paid episodes (≈3x a monthly Netflix sub for one show); 42–66 coins/episode; bundles 500/$4.99 (no bonus), 1,100/$9.99 (+10%) … 20,000/$99.99 (+100%); Weekly VIP $19.99, Yearly VIP $199.99 `[08]` |
| **Netflix (counter-example)** | Binary free→paid: 30-day trial then a hard wall — but with an honest horizontal timeline showing "FIRST BILL 10/4", a 3-day reminder email and "cancel anytime before 10/4" | The transparency is exactly right; the *staircase* is what's missing — users bounce at the wall even when they like the product | 24.8 min/day per US user; ~12M US MAU `[08]` |
| **Noom** | Web-to-app funnel of up to 113 screens / 10–15 minutes; sensitive questions framed with context first; expectations set and repeated; **paywall appears only after significant time and emotional investment** | Progressive commitment-building — sunk cost manufactured on purpose, then monetized | 113 screens; 10–15 min; **$540M raised at a $3.7B valuation** `[05]` |
| **Granola (the other pole)** | Two-screen onboarding — work-account sign-in, then microphone permission with objection-handling copy ("No creepy bots join your meeting"). No tour, no wizard, no quiz | The product needs no personalization data to be useful, so collecting any is pure tax; value lands inside a meeting the user already had scheduled | **$125M Series C at a $1.5B valuation (Mar 2026), up from $250M — 6x in 12 months**; 2 screens `[05]` |
| **Starcrossed** | Heavy extraction (birthday, exact birth time, birth city) → theatrical "reading your chart" loader → paywall placed immediately before the reveal. Reward fragmented into many small locks ("LOCKED · Keep crossing to unlock") rather than one wall | Effort justification amplifies a Barnum output; the paywall lands at peak sunk cost | Built by **1 founder**, distributed off her own TikTok. Per the app's FAQ each planet has only **two** possible sign options — the output space is a small combinatorial menu `[01]` |
| **Airbuds** | Non-monetary paywall: the fuller weekly recap unlocks by **inviting at least 1 friend**, gate screen shows past recaps blurred behind "UNLOCK YOUR WEEKLY RECAP FOREVER" | Fuses the vanity share with the invite; the reward is *previewed* before you act; one dominant CTA, muted "Maybe later" | Weekly cadence (Sundays); invite threshold **1 friend**; investor Alexis Ohanian `[01]` |
| **MacroFactor** | Premium-only by design, stated as a manifesto card *inside onboarding*: "We will never serve ads, or use ad networks to track you… Your subscription will support ongoing development" | The business model is the product argument — no ads means no engagement-maximizing pressure loop, which is what produces the clean logging data that is the actual moat | **$72/year, 500,000 users, 4.8 rating**; bootstrapped, no outside funding `[02]` |
| **Peloton** | Retention mechanic (the live in-class leaderboard) is gated behind the most expensive, hardware-locked tier | Sells the social layer, not the equipment or the content — the $0/$12.99/$24 app tiers get content without the race | Five tiers: App Free $0 / App One $12.99 ($129/yr) / App+ $24 ($240/yr) / Guide $24 / **All-Access $44/mo** (requires Bike, Bike+, Tread, Row or Guide). **~92–93% 12-month subscription retention**; $1,700 bike explicitly *not* the reason `[03] [09]` |
| **Strava** | Full segment leaderboard sits behind an orange Subscribe CTA, placed where competitive intent peaks | Locks the emotional core (your rank on your own neighborhood's climbs), not a beginner feature | Leaderboard filter chips visible above the gate; no conversion figure cited `[07]` |
| **Oura** | $5.99/month subscription charged on data the user's own body generates; surfaces "your body has been tracked for 1,095 nights" so users watch their investment grow | Data portability law returns the CSV but not the model trained on three years of your physiology — "the regulation freed the container, but it couldn't free the intelligence" | **$5.99/mo**; retention **high 80s at 12 months vs low 30s for other wearables**; millions of rings, on track for $1B revenue; $97M US DoD contract `[13]` |
| **Intercom Fin** | Priced **per resolved ticket** — per successful outcome, not per seat or per conversation | Business model aligned with the outcome the product actually delivers | Intercom's fastest-growing product ever and the company's main focus `[20]` |
| **Revolut** | Years of tactile animation investment (scrub-responsive charts that glow, 3D card views, animated security flows) tracking deliberately alongside the move upmarket into premium tiers | As price goes up the product must *feel* more expensive; in fintech trust decides how much users move through the product | No conversion/ARPU figure given — qualitative case. Site claims 50M+ users `[26]` |
| **Duolingo** | Delight/animation investment as a monetization input | Emotional attachment in a category full of dry functional apps | DAU **14.2M → 34M+** within two years of the animation rollout; **paid subscribers also more than doubled** in the same window — Tim flags the confound (new languages, curriculum, marketing ran concurrently) `[26]` |
| **Kraftful (landing page)** | One saturated primary CTA ("Start free plan") with a visually quiet alternate (Continue with Google); proof row sits immediately under the button | Proof placed exactly where hesitation happens | Unbounce: 1 CTA **13.5%** / 2 CTAs **11.9%** / 3 CTAs **10.5%** across 18,000+ pages; Kraftful shows "50,000+ product teams" `[27]` |

---

## Anti-patterns

- **Defaulting to monthly-first plan structure.** You're operating on a model the market already left — monthly's revenue share fell from 21.1% to 11.7% in 24 months `[06]`.
- **A/B testing price as your first or only experiment.** Founders test $9.99 vs $12.99 for three weeks while never testing how many plans they show. Price tests deliver the lowest measured LTV and conversion uplift of any test type `[06]`.
- **Hiding cost to reduce friction.** The "fewer clicks, less information, faster commitment" instinct. Concealment loses the skeptics who need proof the offer is real `[06]`.
- **Racing to the bottom on price to save conversion.** Lower price does not rescue conversion; it strips out high-intent users `[06]`.
- **Reading "higher prices convert better" as "raise your price tomorrow."** Explicitly disclaimed — the mechanism is self-selection, not willingness to pay more `[06]`.
- **Treating the paywall as a screen you build once.** The single behavior most correlated with the 18.7x revenue gap `[06]`.
- **Showing the paywall before the user has felt any value** — asking for trust you haven't earned `[06]`.
- **Random-timed asks.** Paywalls, tutorials and forced flows shown when the user is frustrated or confused instead of at peak satisfaction — Tim says he sees this repeatedly on strategy calls `[15]`.
- **Interruptive or early premium pushes.** Popups and paywalls shoved in immediately make users feel tricked; they pay once and churn permanently `[21]`.
- **Adding more plans to fix conversion.** Plan proliferation without asymmetry doesn't guide a decision; one dominant option does `[23]`.
- **Defaulting to the word "trial."** It's loaded with obligation and primes the user to think about what they're on the hook for `[23]`.
- **Multi-step flows before the trial even starts.** Friction at the activation moment loses users permanently — audit the entry point first when signups are low `[23]`.
- **Locking features that hit beginners.** Locks aimed at casual/new users read as punishment and don't convert `[23]`.
- **Only advertising what users gain.** Gain-framing underperforms contrast; users need to see what they currently *can't* have `[23]`.
- **Showing price ranges or hedged estimates.** Uncertainty at the decision point kills the purchase `[23]`.
- **Binary free→paid.** A trial ending in a single hard wall loses users at the wall even when they like the product `[08]`.
- **Awkward exchange-rate ratios chosen to defeat mental math** (500 coins/$4.99, 1,100/$9.99, bundles displayed out of price order, headline coin counts split into "immediate + free"). Named a dark pattern by the source `[08]`.
- **Shipping a virtual currency with no spend history.** The absence of a "you spent $X this month" view is what makes it a dark pattern rather than a simplification `[08]`.
- **Actively preventing users from computing their spend.** Called "the aggressive path" — "you don't have to do that" `[08]`.
- **Copying Cal AI's 20–28 screen quiz without the preconditions.** Length only pays in a deep-pain niche where personalization is load-bearing; elsewhere it is pure drop-off. Tim concedes "keeping onboarding short is a very good rule of thumb" and treats Cal AI as the exception — **do not read 28 screens as a target** `[05] [06]`.
- **Copying a blanket trial-vs-direct strategy without checking category fit.** The underlying Adapty report says the trial question is category-specific and blanket copying may mean "actively acquiring your worst subscribers" — a caveat the video itself skips `[06]`.
- **Bolting a referral program onto a product with no flex.** "A referral program bolted onto something nobody wants to show off does zero. Nada." `[01]`
- **Overhauling the offer when the packaging is the problem** — the expensive path to the same lift `[23]`.
- **Dropping a premium-positioned product into a boring signup flow** — first impression sets price perception `[26]`.

### Contradictions in the source material (flag these when advising)

1. **Weekly-plus-trial vs trial-exclusive-to-annual.** `[06]` says attach the trial to the *weekly* plan (LTV $7.40 → $54.50, +636%) because commitment size is the blocker. `[23]` says Moonly removed the trial from monthly so it lived only on *annual*, gaining +39% CR / +47% revenue per 100 installs. These push in opposite directions — one uses the trial to lower the commitment, the other uses trial exclusivity to raise it. Both are single-source. Treat as a genuine A/B to run, not a settled rule.
2. **Transparency converts vs obfuscation prints money.** `[06]` and `[23]` argue trust is the conversion mechanism (Blinkist, Uber). `[08]` shows ReelShort building deliberate un-calculability and out-earning honest incumbents. The source itself calls the second a dark pattern, presents it as diagnostic knowledge rather than a recommendation, and draws the line at intent: *do you help users stay informed, or actively prevent them from figuring it out?* Note also that the two live at different layers — trust governs recurring subscription commitments; the anti-calculator governs impulse microtransactions at an emotional peak.
3. **Convert in session zero vs delay monetization until engaged.** `[06]` insists on session-zero conversion (82–89.4% of trial starts on install day). `[21]` says Tinder deliberately waited until users were hooked before surfacing any paid feature. Reconciliation: subscription-first consumer apps monetize the install; free-core network/IAP products monetize the habit. Pick the model first, then the timing.
4. **Internal contradiction inside the paywall data itself** `[06]`: the narration claims plan-count changes "drive 63% more conversion uplift than any price test," but the on-screen slide ranks plan count 4th at 57.1%, *below* plan duration. The narration also says price tests come in "dramatically lower than all of the above" while the slide puts visual/text changes (34.6%) below price (45.5%). Trust the slide; treat "63%" as unsourced.
5. **Short onboarding vs long onboarding.** `[05]` resolves this explicitly — the axis is time-to-tangible-value, not screen count — but `[01]` goes further and argues you should *deliberately lengthen* the input phase because effort is the amplifier on the payoff. `[05]`'s two-test rule (personalization or buyer filter) is the safer operating version.

### Sourcing caveats worth carrying
- The 18.7x experiment-velocity gap is a comparison of **median revenues**, not a controlled uplift; big apps have the traffic and staff that *let* them run 50+ tests `[06]`.
- Cal AI, Lose It!, Yazio and Blinkist revenue/install figures are unsourced third-party estimates. Blinkist's +23% / −55% / no-churn triple is the only redesign result attributed to a documented test `[06]`.
- Cal AI's $35M comes from a blog post tagged "Uncategorized" with no named publication `[05]`.
- All `[23]` screenshots come from `abtest.design`, a third-party gallery — no sample sizes, durations, baselines or significance. Two results ("double-digit") are directional only. Busuu's +83% is a segment-level figure `[23]`.
- Cal AI's $35M is confounded by a 28-screen onboarding, an AI photo-scanning hook and heavy paid acquisition — it is not attributable to the trial screens alone `[06]`.
- Nearly all `[08]` statistics come from one news article (Omdia analysis of Sensor Tower data) and the ~$40/~80-episode figure is unsourced arithmetic. ReelShort wins on minutes-per-user, not audience: ~1.2M US MAU vs Netflix's ~12M `[08]`.
- Duolingo's paid-subscriber doubling ran concurrently with new languages, curriculum work and marketing — the source flags its own confound `[26]`.

---

## Decision guide

**IF your app is under ~$1,000 lifetime revenue THEN stop optimizing the paywall** — 57.7% of new apps never cross that line and for most it is a distribution or product problem, not a monetization one `[06]`.

**IF you are launching a consumer subscription today THEN lead with a weekly plan carrying a free trial**, not monthly, not annual-first — weekly converts 1.7–7.4x better than annual at every price tier and trial-on-weekly is the single largest structural LTV lever measured (+636%) `[06]`.

**IF you have never run a paywall experiment THEN test in this order:** locale → trial structure → plan duration → plan count → price → visuals. Price last `[06]`.

**IF your conversion is falling and your instinct is to cut price THEN raise or hold instead** — conversion falls monotonically with price tier (2.8% / 2.0% / 1.4%) because price self-selects intent `[06]`.

**IF users complain about surprise charges, or your reviews mention feeling tricked, THEN add the trial timeline and the cancellation explainer** — that combination cut complaints 55% while raising conversion 23%, with no churn cost `[06]`.

**IF your product depends on heavy personalization in a deep-pain niche THEN a long onboarding is justified** — it earns the personalized first run AND filters for high-intent buyers. Make the personalization visible on the first post-onboarding screen or you've collected a toll for nothing `[05]`.

**IF your product delivers value without any user data (a Granola-shaped tool) THEN the fix for bad retention is *less* onboarding, not more** — collecting data you don't use is pure tax `[05]`.

**IF you have an engaged free cohort and no budget to build features THEN raise the visibility of what's already locked** (PRO badges in context, everywhere) before building anything new — Mobbin got +35% free-to-paid with zero new features `[23]`.

**IF you need to push users toward annual THEN give annual something monthly doesn't have** (trial exclusivity, or a longer trial) rather than discounting it or adding another tier `[23]`.

**IF your free tier is converting badly THEN check where the lock sits** — if it hits beginners it reads as punishment; move it to the second unit of usage where intent is proven `[23]`.

**IF your product has a genuine emotional peak (a cliffhanger, a match, a reveal, a personal record) THEN put the ask there** and nowhere else; asks placed at frustration or at arbitrary session boundaries are the most common timing mistake `[15] [08] [01]`.

**IF your free→paid transition is a single hard wall THEN insert an intermediate rung that costs attention or effort rather than money** — attention, then effort, then money `[08]`.

**IF you are shipping credits, coins or tokens THEN also ship a running-total spend view.** The abstraction is legitimate and defensible; the missing dashboard is what makes it a dark pattern `[08]`.

**IF you can estimate a number THEN show one number, not a range** — certainty beats a possibly-better unknown at the decision point `[23]`.

**IF your pricing page or paywall has more than one equal-weight CTA THEN collapse to one primary plus a visually quieter secondary** — 1 CTA 13.5% vs 2 CTAs 11.9% vs 3 CTAs 10.5% across 18,000+ pages `[27]`.

**IF your product's value is a resolved outcome rather than an interaction THEN price per outcome** (Fin: per resolved ticket) rather than per seat `[20]`.

**IF you are moving upmarket or raising price THEN budget motion and interaction polish as product scope, not post-launch garnish** — the product has to feel as expensive as it costs `[26]`.

**IF an AI agent could do everything your app does through a single text message THEN your subscription is not defensible on utility** — relocate what the user is paying for toward identity, ritual, community, or an accumulated intelligence they cannot export (Oura's 1,095 nights, Peloton's leaderboard, Strava's segments) `[11] [13] [09] [03]`.

**IF you are tempted to copy Cal AI's 28 screens, Noom's 113 screens, or ReelShort's coin economy THEN check the preconditions first** — deep pain + load-bearing personalization for the first two, emotional serialized content + microtransaction format for the third. Neither transfers by default `[05] [08]`.

---

## Sources

- `[01] The Twisted Psychology Behind Top 1% Apps — https://www.youtube.com/watch?v=nQKWYmrixCU`
- `[02] The Weird Design Playbook of 6 App Outliers — https://www.youtube.com/watch?v=HA4yB_sd62Q`
- `[03] Why Leaderboards Kill App Retention (How To Fix It) — https://www.youtube.com/watch?v=BxhsCu9hNpY`
- `[05] How To Solve The App Onboarding Paradox — https://www.youtube.com/watch?v=Aa89MC8jX2c`
- `[06] I Studied 10,000 Paywall Screens (THIS Makes People Pay) — https://www.youtube.com/watch?v=sYRhXB_ZcLI`
- `[07] I Studied 500+ Gamified Apps (Here's What Actually Works) — https://www.youtube.com/watch?v=LXX_qOA5D8E`
- `[08] How a Chinese Unicorn App Out-Addicts Netflix — https://www.youtube.com/watch?v=7dCZrtH15zc`
- `[09] How To Scientifically Design Addictive Apps — https://www.youtube.com/watch?v=yBpv5rZoBjA`
- `[11] Why Most SaaS Companies Will Die in 2026 — https://www.youtube.com/watch?v=ZXWUg1e1PAs`
- `[13] The New Way Apps Dominate in 2026 — https://www.youtube.com/watch?v=yYs7iv81Ppk`
- `[15] Give Me 13 Minutes & I'll Grow Your App — https://www.youtube.com/watch?v=v1f9iYZ2GhQ`
- `[20] The Future of App Design is Invisible — https://www.youtube.com/watch?v=zRUoPIwCxfw`
- `[21] How Tinder's Design Hacked Society — https://www.youtube.com/watch?v=4yKtlOWClhA`
- `[22] The Hidden App Growth Killer (How To Avoid It) — https://www.youtube.com/watch?v=55hDj88zKa8`
- `[23] Copy These SaaS Growth Tricks (It'll Blow Up Your Business) — https://www.youtube.com/watch?v=puldme__Ckk`
- `[26] The Secret Behind Weirdly Addictive Apps — https://www.youtube.com/watch?v=Du2lkZ_cux8`
- `[27] Give Me 10 Minutes & I'll Boost Your Website Conversions — https://www.youtube.com/watch?v=TIfiy1fodDs`
