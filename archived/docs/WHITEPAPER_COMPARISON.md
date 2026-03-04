# Whitepaper vs Website Comparison

**Whitepaper:** `/references/sew-protocol-contracts/docs/WHITEPAPER.md`
**Website:** Static site in `/src/pages/`
**Date:** 2026-02-12

---

## Completed Actions

### Website Updates Completed

1. ✅ **Default fees added to fees page**

   - Escrow creation: 1% default, 2% max
   - Yield protocol: 30% default, 30% max
   - Appeal bond: 0% (inactive), 30% max

2. ✅ **DR phased rollout explained in how-it-works**

   - Single trusted resolver: "available at launch"
   - Escalating resolution: "staged rollout" / "coming in future phases"
   - Added governance activation mention

3. ✅ **SEW token page created**
   - New `/token.tsx` page
   - Sections: Token utility, Governance rights, Staking (future), Distribution
   - Added to Resources dropdown

---

## Design Recommendations: Fabric Textures & Thread Motifs

Added to `src/styles/shared.module.css`:

### CSS Classes Available

| Class                   | Use                                   | Opacity |
| ----------------------- | ------------------------------------- | ------- |
| `.fabric-texture`       | Base fabric texture overlay           | 3%      |
| `.fabric-texture-light` | Light warm background                 | 4%      |
| `.fabric-texture-warm`  | Warm grey background                  | 4%      |
| `.fabric-texture-dark`  | Dark background accent                | 5%      |
| `.thread-divider`       | Section divider with thread line      | N/A     |
| `.fabric-panel`         | Card with fabric gradient             | N/A     |
| `.seam-accent`          | Left border seam pattern              | 40%     |
| `.needle-accent`        | Subtle needle point accent            | 15%     |
| `.hero-texture`         | Hero section with curved thread paths | 2-3%    |
| `.grid-texture`         | Subtle grid overlay                   | 2%      |
| `.fabric-grain`         | Fine grain texture                    | 1.5%    |

### Applied To Pages

- **Homepage**: Hero texture, fabric textures on sections, thread dividers
- **How It Works**: Hero texture, fabric textures on content blocks
- **Investor**: Hero texture, fabric texture
- **Researcher**: Hero texture, fabric texture
- **Token**: Hero texture, fabric texture

### Concept Mappings

| Texture Element | Protocol Concept             |
| --------------- | ---------------------------- |
| Thread          | Coordination between parties |
| Stitch          | Protection                   |
| Seam            | Connection                   |
| Fabric          | Infrastructure layer         |

### Color Palette Applied

- Off-white backgrounds (`#faf9f7`, `#f5f3f0`)
- Warm grey accents
- Muted, restrained design

### Remaining Design Tasks

1. Add `.cross-stitch-accent` to specific section headers
2. Apply `.fabric-panel` to card components in developer/security pages
3. Add animated SVG thread path to homepage hero (optional)
4. Apply `.seam-accent` to governance section dividers

---

## Summary

The whitepaper is comprehensive (915 lines) with detailed technical specifications. The website provides a high-level overview targeting general users and developers. There are significant gaps where the whitepaper contains details that should be surfaced on the website, and vice versa.

---

## A) Missing from Website (In Whitepaper)

### 1. Fee Structure Details

**Whitepaper (Section 10.1):**

- Escrow fee: 1% default, 2% max
- Yield protocol fee: 30% default, 30% max (bounded)
- Appeal bond fee: 0% default, 30% max

**Website (fees.tsx):**

- Escrow fee: "capped at 2%"
- Yield protocol fee: "0% - 30%"
- Appeal bond fee: "0% - 30%"

**Gap:** Default percentages not stated on website. Users don't know what to expect at launch.

---

### 2. Dispute Resolution Phases (DR v1 → v2 → v3)

**Whitepaper (Section 3.2, 4.2):**

- DR v1: Multi-resolver escalation (Decentralize Decisions)
- DR v2: Appeal bonds (Decentralize Incentives)
- DR v3: Staking/slashing (Decentralize Capital)

**Website:** Mentions "two resolution modes" but no phase rollout.

**Gap:** Users don't understand that decentralized resolution is staged, not available at launch.

---

### 3. SEW Token Utility

**Whitepaper (Section 10.2):**

- Mixed-bond requirement: ≥80% USDC / ≤20% SEW post-haircut
- EffectiveBondUSD = stablecoinBond + (sewBond × 0.5)
- Deflationary sink on misconduct (burned)
- Staking rewards: "not assumed by default"

**Website:** No mention of SEW token at all.

**Gap:** Token economics completely absent from website.

---

### 4. Governance Lane Timings

**Whitepaper (Section 5.2):**

- Emergency Lane: 0h delay (Guardian only)
- Standard Lane: 48h delay (Timelock)
- Slow Lane: ~9 days (48h + 7d + 48h)

**Website (governance.tsx):**

- Fast lane, Slow lane, Emergency lane mentioned
- No specific timings provided

**Gap:** Exact delays missing from website.

---

### 5. Chain Information

**Whitepaper (Section 8.1):**

- Base Mainnet: Chain ID 8453
- Base Sepolia: Chain ID 84532

**Website:** Only mentions "Base (Ethereum L2)"

**Gap:** No chain IDs, no testnet information.

---

### 6. Technical Specifications

**Whitepaper (Section 8.2):**

- Solidity Version: 0.8.33
- OpenZeppelin Contracts: v5.4.0

**Website:** No technical stack information.

---

### 7. Guardian Multisig

**Whitepaper (Section 5.1):**

- "Guardian Multisig: Emergency controls (down-only)"

**Website:** Guardian role mentioned but multisig nature not stated.

---

### 8. Aave Yield Module Details

**Whitepaper (Section 3.3):**

- Exposure caps enforced
- Can be disabled via governance
- Pause mechanisms

**Website:** Mentions Aave V3 but not caps/pause controls.

---

### 9. EscrowableERC20

**Whitepaper (Section 2.2):**

- ERC20 token with built-in escrow functionality
- Factory pattern for easy token creation

**Website:** No mention of EscrowableERC20.

---

### 10. Glossary

**Whitepaper (Appendix A):**

- Escrow, Snapshot Semantics, Resolution Module, Governance Lane, Timelock, Guardian definitions

**Website:** No glossary.

---

### 11. Testnet Information

**Whitepaper (Section 8.1):**

- Base Sepolia (Chain ID 84532)

**Website:** No testnet information.

---

### 12. Contract Deployment Status

**Whitepaper (Section 2.1):**

- Status: Pre-Mainnet
- All contracts: "Planned for mainnet"

**Website:** Deployment status not mentioned.

---

### 13. Appendix B: Contract Addresses

**Whitepaper:** Placeholder table for mainnet addresses

**Website:** No addresses page.

---

## B) On Website, Not (or Different) in Whitepaper

### 1. "What Sew Is Not" Section

**Website:** Clear distinction that Sew is not a marketplace, wallet, or court.

**Whitepaper:** No equivalent "What Sew Is Not" section.

---

### 2. Safety Layer Concept

**Website:** "Sew is a security layer for transfers"

**Whitepaper:** Focuses on escrow/protection but not explicit "security layer" branding.

---

### 3. Originality Section

**Website:** "What Makes Sew Different" section highlighting:

- Per-escrow configuration snapshot
- Forward-only evolution
- Yield on escrowed payments
- Resolver incentives

**Whitepaper:** These concepts exist but not highlighted as "originality" or differentiators.

---

### 4. Escrow States (Detailed)

**Website:**

- Pending
- Disputed
- Released
- Refunded
- Resolved

**Whitepaper:** Uses "Pending → Funded → Disputed → Resolved/Cancelled" but "Funded" is confusing terminology.

---

### 5. Aave V3 Explicit Mention

**Website:** "Aave V3"

**Whitepaper:** Just "Aave" without version.

---

### 6. Kleros Mentioned

**Website:** "e.g., Kleros"

**Whitepaper:** No Kleros reference.

---

### 7. Release Mechanics Clarification

**Website:** "Sender releases at any time"

**Whitepaper:** No explicit statement that sender can release anytime.

---

### 8. Appeal Window (2 days)

**Website:** "Appeal window: 2 days default"

**Whitepaper:** No specific default appeal window stated.

---

### 9. Dispute Duration (90 days)

**Website:** "Max dispute duration: 90 days default"

**Whitepaper:** No specific maximum stated.

---

### 10. Module Architecture Description

**Website:** Clear description of release strategy, resolution module, yield module.

**Whitepaper:** More detailed but scattered across sections.

---

## C) Recommendations

### High Priority

| Recommendation         | Location                  | Action                                   |
| ---------------------- | ------------------------- | ---------------------------------------- |
| Add default fees       | fees.tsx                  | Add 1% escrow default, 30% yield default |
| Add DR phases          | how-it-works.tsx          | Explain DR v1→v2→v3 staged rollout       |
| Add SEW token section  | developer.tsx or new page | Basic token utility overview             |
| Add governance timings | governance.tsx            | Add 48h / ~9 days specifics              |
| Add testnet info       | technical.tsx             | Base Sepolia Chain ID 84532              |
| Add chain IDs          | how-it-works.tsx          | Base: 8453, Base Sepolia: 84532          |

### Medium Priority

| Recommendation             | Location         | Action                                    |
| -------------------------- | ---------------- | ----------------------------------------- |
| Add Guardian multisig note | governance.tsx   | "Guardian multisig with down-only powers" |
| Add Aave caps mention      | how-it-works.tsx | "Protected by exposure caps"              |
| Add glossary link          | resources.tsx    | Link to whitepaper glossary               |
| Add EscrowableERC20        | developer.tsx    | Brief mention of token with escrow        |
| Add contract status        | technical.tsx    | "Pre-mainnet, planned for Q1 2026"        |

### Low Priority

| Recommendation            | Location      | Action                       |
| ------------------------- | ------------- | ---------------------------- |
| Add Solidity version      | developer.tsx | "Built with Solidity 0.8.33" |
| Add OZ version            | developer.tsx | "Uses OpenZeppelin v5.4.0"   |
| Add placeholder addresses | technical.tsx | TBD table like whitepaper    |
| Add "What Sew Is Not"     | whitepaper    | Consider adding section      |

---

## D) Terminology Differences

| Concept          | Whitepaper                   | Website                                             |
| ---------------- | ---------------------------- | --------------------------------------------------- |
| Escrow state     | "Funded"                     | "Pending"                                           |
| Dispute levels   | Standard → Senior → External | "Single trusted resolver" / "Escalating resolution" |
| Fee presentation | Default + Max                | Just Max range                                      |
| Governance lanes | Fast/Standard/Slow/Emergency | Fast/Slow/Emergency                                 |
| Aave version     | "Aave"                       | "Aave V3"                                           |

**Recommendation:** Align terminology. "Funded" should be "Pending" on both.

---

## E) Website Sections That Could Reference Whitepaper

Add to relevant pages:

1. **developer.tsx:** "See the whitepaper for full technical specifications including Solidity 0.8.33 implementation details."

2. **governance.tsx:** "See the whitepaper for complete governance surface map and function-level permissions."

3. **technical.tsx:** "Contract addresses will be listed here after mainnet deployment. See whitepaper Appendix B for placeholder addresses."

4. **fees.tsx:** "Default fees as of launch: escrow 1%, yield protocol 30%. See whitepaper Section 10.1 for detailed fee breakdown."

---

## F) Missing from Both

- **IPFS integration details** (whitepaper mentions but no specifics)
- **Commit-reveal patterns** (mentioned in risks but no details)
- **Formal verification status** (mentioned as "considered")
- **Bug bounty program details** (mentioned but no amounts/links)
- **Audit firm names** (placeholder for "audit reports")
- **Operational runbooks** (mentioned but not linked)

---

## Conclusion

The whitepaper is authoritative and comprehensive. The website should:

1. **Surface key details** from whitepaper (fees, DR phases, SEW token, governance timings)
2. **Add references** to whitepaper for deep dives
3. **Align terminology** (Funded → Pending)
4. **Add testnet information** for developers
5. **Keep high-level accessible** - don't replicate all 915 lines

The website serves a different audience (general users, developers) vs whitepaper (technical, auditors, investors). Cross-linking between them would benefit all readers.
