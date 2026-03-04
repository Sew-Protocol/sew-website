# Sew Protocol — Website Development Plan

**Target audience:** Ethereum Foundation security team (grant review, ~$250k)
**Constraint:** Visual changes last. Content and structure first.

---

## Status key

- [x] Done
- [ ] To do
- [~] In progress / partial

---

## Phase 1 — Foundation: Anchors & Navigation

*Unblocks all deep-linking across the site. No visible changes to users.*

### 1.1 Navigation rename (complete)
- [x] `Developers > Dispute Resolution` → `Dispute Architecture`
- [x] `Security > Dispute Incentives` → `Dispute Economics`
- [x] Security submenu reordered: Threat Model → Dispute Economics → Upgrade Semantics → Emergency Recovery
- [x] About submenu confirmed correct: Governance → SEW Token → Investors → Contact

### 1.2 Anchor IDs on Security page (complete)
- [x] `id="threat-model"` on Threat Model section
- [x] `id="dispute-economics"` on Economic Incentives section
- [x] `id="upgrade-semantics"` on Governance Constraints section
- [x] `id="emergency-recovery"` on Emergency Response section

### 1.3 Anchor IDs on Developer page (complete)
- [x] `id="dispute-architecture"` on Dispute Architecture section
- [x] `id="contracts"` on Contract Addresses section
- [x] `id="escrow-states"` on Escrow States section (useful for internal links)
- [x] `id="safety-guarantees"` on Safety Guarantees section

### 1.4 Footer update (complete)
- [x] Renamed "Technical" column → "Developers"
- [x] Added "About" column: Governance, SEW Token, Contact
- [x] Merged Source Code and Community into one column
- [x] Removed `var(--accents-6)` (undefined variable) from legal border

---

## Phase 2 — Homepage: Content (no visual redesign)

*The homepage is the primary landing page for EF reviewers. These are content additions
only — existing sections are preserved in place.*

### 2.1 Hero (complete)
- [x] Tagline updated: "Protected payments. Dispute resolution built in."
- [x] Description condensed to single clear sentence
- [x] Primary CTA: "Get Started" → "Read Security Model" → `/security`
- [x] Secondary CTA: "Build on Sew" → "View Architecture" → `/architecture`
- [x] Proof chips added below CTAs: "Non-custodial", "Isolated per escrow", "On-chain enforceable outcomes"

### 2.2 Core Guarantees section (complete)
*New section inserted after "What it is". This is the highest-signal addition for a
security reviewer — invariants stated formally, not as marketing copy.*

- [x] 6 cards in a 2-column grid
- [x] Each card: bold title + 1-line explanation + monospace property notation
- [x] Properties covered:
  - `Custody ∉ {operator, resolver}`
  - `Outcome ∈ {RELEASE, REFUND, SPLIT}`
  - `failure(escrow_n) ⊄ escrow_m`
  - `state ∈ {PENDING → RELEASED | REFUNDED | RESOLVED}`
  - `upgrade(t) → escrow.created < t only`
  - `pause_max = 7d × 3 cycles`
- [x] Link to full security model

### 2.3 Evidence & Readiness section (complete)
*New section after Built-in Dispute Resolution. Most important section for the grant
application. Two-column checklist: what exists vs what the grant funds.*

- [x] Left column "What is implemented" (7 items with ✓)
- [x] Right column "What the grant funds" (6 items with →) styled in blue
- [x] Deep links: Threat Model, Contracts, Release Plan, GitHub

### 2.4 Final CTA strip (complete)
*Replaces the scattered footer-link list at the bottom of the page. Bold bordered
band that closes the page with a clear call to action for reviewers.*

- [x] Headline: "Review the security model."
- [x] Subtext describing the security page contents
- [x] Primary: Security Model → `/security`
- [x] Secondary: Developer Docs → `/developer`

### 2.5 Dispute resolution links updated (complete)
- [x] "Built-in dispute resolution" section now links to both `/dispute-resolution`
  (Dispute Architecture) and `/security#dispute-economics` (Dispute Economics)
- [x] Page footer link updated: "Dispute Resolution" → "Dispute Architecture"

---

## Phase 3 — Inner Pages: Content Gaps (complete)

*Pages that are linked to from the homepage but are thin or incomplete.*

### 3.1 Security page (complete)
- [x] Tagline updated: "Primary reference for auditors and grant reviewers"
- [x] In-page quick-nav added: Threat Model · Dispute Economics · Upgrade Semantics · Emergency Recovery · Isolation Model
- [x] Threat model restructured into 6 threat/mitigation cards (T1–T6) with
  attack surface and structural mitigation per threat
- [x] Isolation model extracted into its own anchored section (`id="isolation"`)
- [x] Threat categories added: User Error, Counterparty Risk, Smart Contract Risk,
  Governance Capture, Resolver Misconduct, Yield Integration Risk

### 3.2 Dispute Resolution page (`/dispute-resolution`) (complete)
- [x] Page title and `titlePre` updated to "Dispute Architecture"
- [x] H1 updated: "Dispute Architecture"
- [x] Tagline clarified: "Mechanism design — how resolution works structurally"
- [x] Intro updated to describe the architectural scope and link to economics layer
- [x] Cross-link added below intro: "For the economic layer — see Dispute Economics →"
- [x] Economics summary note added at top of "Economic security" section with
  link to `/security#dispute-economics`
- [x] Related pages updated to include Dispute Economics and Threat Model links

### 3.3 Developer page (`/developer`) (complete)
- [x] Anchor IDs added (see Phase 1.3 above)
- [x] Safety callout box added near top with all 5 builder guarantees
- [x] In-page nav added in same callout: Escrow States, Dispute Architecture,
  Safety Guarantees, Contracts

### 3.4 Architecture page (`/architecture`) (complete — full overwrite)
- [x] Tagline updated: "System design and structural invariants"
- [x] Intro updated to be precise and reviewer-appropriate
- [x] Reviewer callout added with links to Security Model, Dispute Architecture,
  Dispute Economics
- [x] System flow diagram added (styled HTML/CSS): Sender → Escrow → Recipient /
  Escrow → Resolver → Outcome (RESOLVED) / cancel → REFUNDED
- [x] State table added: all 5 states with terminal/non-terminal classification
- [x] Core components section expanded: Escrow layer, Release strategies,
  Resolution modules, Yield modules — each with component tag and detail
- [x] Architectural invariants section added: 6 invariants with monospace notation
  (mirrors homepage guarantees grid)
- [x] Isolation levels section added: 4 numbered levels (escrows, modules,
  governance, protocol versions)
- [x] Module registry table added: interface names and scope per module type
- [x] Governance surface: replaced bullet list with "Can / Cannot" two-column grid
- [x] Bottom navigation added: 3 columns (Security, Technical, Context)

### 3.5 Release Plan page (`/release-plan`) (complete)
- [x] Fixed `var(--accents-6)` undefined CSS variable → `#eaeaea`
- [x] "Dispute Resolution" link text updated → "Dispute Architecture"
- [x] Content confirmed: real timelines (Q1 2026, Q2–Q3, Q3–Q4, 2027) and
  versioned milestones (Phase 1–4) consistent with security and developer pages

### 3.6 Contracts page (`/contracts`) (complete)
- [x] Deployment status banner added showing two explicit items:
  - Base Sepolia (Chain ID: 84532) — green dot, "deployed and active"
  - Mainnet — grey dot, "not yet deployed — pending audit and governance approval"
- [x] Tagline updated: "Deployment status and addresses"
- [x] Intro updated to lead with testnet status and audit dependency
- [x] Status note added: "Testnet contracts are functionally equivalent to planned
  mainnet contracts. Addresses will differ on mainnet deployment."

---

---

## Phase 4 — Researcher & Auditor Experience (complete)

*Dedicated improvements for the specific audience of the grant.*

### 4.1 Researcher page (`/researcher`) (complete — full overwrite)
- [x] Tagline updated: "Security research, mechanism design, and formal analysis"
- [x] In-page quick-nav added: Framing · Research Domains · System Properties ·
  Protocol Invariants · Open Questions · Disclosure
- [x] Section `id` anchors added: `#framing`, `#research-domains`,
  `#system-properties`, `#invariants`, `#open-questions`, `#disclosure`
- [x] Protocol invariants section added (new): 6 invariants (I1–I6) each with
  description and monospace notation — consistent language with homepage and
  architecture pages
- [x] Responsible disclosure section added (new): 4-item grid covering Contact,
  Scope, Response timeline, and Current deployment status
- [x] Open questions expanded: 7 items including game-theoretic and empirical
  questions on resolver behaviour and dispute escalation cost
- [x] Comparison section updated: added Kleros/UMA and optimistic rollup dispute
  games as related systems
- [x] Summary replaced with a set of 7 linked pill buttons (Security Model,
  Threat Model, Dispute Economics, Architecture, Dispute Architecture,
  Protocol Limits, Contracts)
- [x] All internal links updated to use new page names and anchors
- [x] `var(--accents-6)` not present — no fix needed

### 4.2 Glossary page (`/glossary`) (complete)
- [x] Fixed `var(--accents-6)` → `#eaeaea` in `.glossary-card h3` border
- [x] 8 new terms added:
  - `customResolver` — per-escrow resolver override field
  - `Dispute Architecture` — structural/mechanical layer of dispute handling
  - `Dispute Economics` — incentive/economic layer (bonds, slashing)
  - `Invariant` — contract-level property holding for every escrow
  - `Resolver` — bounded role that determines dispute outcomes only
  - `SPLIT` — dispute outcome dividing funds between sender and recipient
  - `State Machine` — defined states and transitions an escrow moves through
  - `workflowId` — unique uint256 identifier per escrow
- [x] Existing duplicate entries removed and consolidated (ERC-20, Timelock,
  Guardian updated with bounded pause detail, Escrow State updated with NONE
  state and terminal state clarification)
- [x] Formal notation section added above glossary grid: 4 symbols defined
  (`∈`, `∉`, `⊄`, `∀`) each with a concrete example from the site
- [x] Terms array sorted alphabetically throughout
- [x] Related links updated: added Dispute Architecture and For Researchers
- [x] Related section widened: max-width 600px → 700px

### 4.3 FAQ page (`/faq`) (complete)
- [x] Fixed `var(--accents-6)` → `#eaeaea` in `.faq-card h3` border
- [x] "For reviewers & auditors" section added above general FAQ with distinct
  blue tag label and separate grid (full-width cards, not masonry)
- [x] 5 new reviewer questions added:
  - "Has the protocol been audited?" — honest answer: no, grant funds the audit
  - "What is the trust model at launch?" — v1 single resolver, roadmap to v2/v3
  - "What happens if the resolver is compromised?" — outcome bounded,
    per-escrow scope, appeal available in v2+
  - "Is there a formal threat model?" — yes, links to T1–T6 and architecture
  - "What does the Ethereum Foundation grant fund?" — 6-item list of funded
    work items matching Evidence & Readiness section on homepage
- [x] Each reviewer card includes contextual deep-links (blue pill buttons)
- [x] "General questions" heading added to separate the two sections
- [x] Related links updated: added Threat Model and Architecture links
- [x] Related section widened: max-width 600px → 700px

---

## Phase 5 — Visual Design

*Last. Only after content and structure are stable. These changes affect every page.*

### 5.1 Brand direction decision (prerequisite)

Before any visual work, one decision is required:

**Option A — Keep existing texture identity**
The site currently has fabric grain, seam accents, thread-path dividers. This is a
distinctive, warm brand. Adapt the new sections to match.

**Option B — Shift to EF-style editorial**
Clean, cold, high-contrast, typographic. Monochrome. Bold horizontal rules.
Closer to ethereum.org. More legible to a security team.

These two directions are not compatible. Pick one before proceeding.

### 5.2 Typography (applies to both options)
- [ ] Evaluate whether system font stack is sufficient or a web font is warranted
  (Inter or similar for Option B; a humanist sans for Option A)
- [ ] Tighten heading letter-spacing at display sizes
- [ ] Increase contrast of body text (`#555` currently — consider `#333` or `#222`)
- [ ] h1 sizing on inner pages is inconsistent with homepage hero — normalise

### 5.3 Homepage visual polish (after 5.1 decision)
- [ ] Hero: implement 2-column layout (text left, flow diagram right)
  - Requires SVG: `Sender → Escrow → Recipient` with dispute branch
  - Bold strokes, no gradients, boxed frame
- [ ] Core Guarantees cards: decide on border vs. filled background treatment
- [ ] Evidence & Readiness: add subtle left-border accent on "What the grant funds" col
- [ ] CTA strip: test bold 2px border vs. filled dark background variant

### 5.4 Lifecycle / state machine diagram
- [ ] Build as inline SVG: `Created → Pending → Released | Refunded | Disputed → Resolved`
- [ ] Use thick strokes, minimal labels, no gradients
- [ ] Place on: How It Works page (primary), homepage section 4 (secondary)
- [ ] This is the single highest-leverage visual asset for technical reviewers

### 5.5 Navigation visual
- [ ] Submenu hover states: currently functional, could be tighter
- [ ] Active state indicator: make the current page link clearly distinct
- [ ] Mobile: review hamburger / collapse behaviour on small screens
- [ ] Consider sticky nav background blur for readability over textured hero

### 5.6 Consistency pass (final)
- [ ] All inner pages: normalise header section padding, tagline colour, content-block
  max-width
- [ ] Code blocks on developer page: confirm dark theme renders correctly in both
  light/dark OS modes
- [ ] Link colour: currently `#0070f3` globally — confirm this is the intended accent
  or replace with a single design token

---

## Appendix: Route map

| URL | Nav label | Status |
|-----|-----------|--------|
| `/` | Home | Live — updated Phase 2 |
| `/security` | Security > Threat Model | Live — anchors added |
| `/security#threat-model` | — | Anchored |
| `/security#dispute-economics` | Security > Dispute Economics | Anchored |
| `/security#upgrade-semantics` | Security > Upgrade Semantics | Anchored |
| `/security#emergency-recovery` | Security > Emergency Recovery | Anchored |
| `/dispute-resolution` | Developers > Dispute Architecture | Live |
| `/architecture` | Developers > Architecture | Live — now hero CTA dest. |
| `/developer` | Developers | Live |
| `/contracts` | Developers > Contracts | Live — check content |
| `/release-plan` | Developers > Release Plan | Live — check content |
| `/researcher` | Developers > For Researchers | Live — needs review |
| `/governance` | About > Governance | Live |
| `/token` | About > SEW Token | Live |
| `/investor` | About > Investors | Live |
| `/contact` | About > Contact | Live |
| `/faq` | Reference | Live — needs EF section |
| `/glossary` | Reference | Live — needs notation section |

---

## Appendix: What was deliberately not implemented

| Item | Reason |
|------|--------|
| Wireframe Section 7 (Use cases tiles) | Low priority for EF audience |
| Wireframe Section 8 (Developer pseudo-code) | Risk of bad example being worse than none |
| 2-column hero diagram | Deferred to Phase 5 (requires SVG work) |
| Lifecycle state machine diagram | Deferred to Phase 5 |
| Hash route anchors on `/developer` page | Deferred to Phase 3 |
| Brand direction change | Requires explicit decision before implementation |