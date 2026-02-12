# Sew Protocol: Static Website vs Smart Contract Comparison

**Generated:** 2026-02-12
**Purpose:** Identify discrepancies between static website content and actual smart contract implementation

---

## Summary

This document compares the static website content (in `/docs/input-*.md`) with the actual smart contract implementation in `/references/sew-protocol-contracts/` to identify:

- Misleading or inaccurate information that needs updating
- Important details missing from the website
- General recommendations for alignment

---

## A) Misleading or Inaccurate Information on Static Website

### 1. Escrow Fee - No Specific Percentage Defined ✅ ADDRESSED

Added fees page with:

- Escrow creation fee capped at 2%
- Yield protocol fee up to 30%
- Appeal bond fee up to 30%

---

### 2. Protocol Fees - Not Disclosed ✅ ADDRESSED

Added fees page with full breakdown and links from main pages.

---

### 3. Yield Generation - Aave Mentioned Without Detail ✅ ADDRESSED

Updated how-it-works.tsx:

- "Funds may generate yield through integrations (e.g., Aave V3)"
- "Yield can go to sender, recipient, or be split"
- "Yield settings are fixed at escrow creation"

---

### 4. Dispute Resolution - Incomplete Description ✅ ADDRESSED

Updated how-it-works.tsx dispute section:

- Two resolution modes: Single trusted resolver, Escalating resolution
- Final arbitration possible
- Bonds and incentives mentioned

---

### 5. Guardian Role Scope - Missing Constraints ✅ ADDRESSED

Updated governance.tsx with guardian constraints:

- Pause max duration: 7 days
- Limited pauses per time window
- Cannot re-pause while paused
- Unpause requires governance

---

```solidity
bool private _paused;
uint256 public constant MAX_PAUSE_DURATION = 7 days;
uint256 public constant MAX_PAUSE_CYCLES = 3;      // 3 pauses per PAUSE_WINDOW
uint256 public constant PAUSE_WINDOW = 90 days;    // Rolling 90-day window
```

**Issue:** Website doesn't mention:

- Maximum pause duration (7 days)
- Maximum 3 pauses per 90-day rolling window
- Guardian cannot re-pause while already paused
- Unpause requires Timelock (governance), not guardian

---

### 6. Governance Process - Missing Lane System ✅ ADDRESSED

Updated governance.tsx with governance lanes section:

- Fast lane: small, safe parameter changes
- Slow lane: major changes with extended review
- Emergency lane: risk reduction only

---

### 7. Chain Deployment - Not Disclosed ✅ ADDRESSED

Updated how-it-works.tsx intro:

- "Sew Protocol is a security layer for payments on Base (Ethereum L2)"

---

## New Pages Added

### Fees Page (`/fees`)

Created a dedicated fees page with:

- Escrow creation fee: max 2%
- Yield protocol fee: 0-30%
- Appeal bond fee: 0-30%
- Fee principles and summary table

### Protocol Limits Page (`/protocol-limits`)

Created a dedicated limits page with:

- Fee limits table
- Time limits table
- Guardian constraints table
- Governance constraints
- Per-escrow immutability summary

---

## B) Important Details Missing from Static Website

### 1. Fee Structure Complete Breakdown

| Fee Type                 | Max Rate        | Purpose                              |
| ------------------------ | --------------- | ------------------------------------ |
| Escrow Fee               | 2% (200 bps)    | Per-escrow creation fee              |
| Yield Protocol Fee       | 30% (3000 bps)  | Protocol share of generated yield    |
| Appeal Bond Protocol Fee | 30% (3000 bps)  | Protocol share of appeal bonds       |
| Auto-release delay       | Configurable    | Time until auto-release (per-escrow) |
| Auto-cancel delay        | Configurable    | Time until auto-cancel (per-escrow)  |
| Max dispute duration     | 90 days default | Upper bound on dispute window        |
| Appeal window            | 2 days default  | Time to appeal resolution            |

---

### 2. Escrow States and Transitions ✅ ADDRESSED

Added to input-how-it-works.md:

- Defined 5 states: Pending, Disputed, Released, Refunded, Resolved
- Clarified states are final once reached

---

### 3. Module Types ✅ ADDRESSED

Added to input-how-it-works.md:

- Release strategy module
- Resolution module
- Yield module
- Explained modules are selected at creation and immutable

---

### 4. Per-Escrow Configuration Snapshot ✅ ADDRESSED

Added snapshot concept to:

- how-it-works.tsx: "Each escrow captures its configuration at creation and cannot be changed"
- developer.tsx: "Each escrow captures its configuration at creation and cannot be changed"
- governance.tsx: Already had "Once an escrow is created, its rules are fixed"

---

### 5. Governance Token

**Contracts:**

- `GovGovernor.sol` - OpenZeppelin Governor implementation
- Token standard not visible in current exploration

**Missing:** SEW token existence, voting power mechanics, proposal lifecycle.

---

### 6. Emergency Recovery

**Contracts:**

- `EmergencyRecoveryProposal.sol` - Emergency recovery procedures
- `GuardianOps.sol` - Guardian operational functions
- `BondCollector.sol` - Bond management for disputes

**Missing:** Recovery procedures, bond requirements, emergency scenarios.

---

### 7. Recipient Confirmation Requirement

**Contracts (BaseEscrow.sol:62):**

```solidity
if (escrowTransfers[workflowId].from != _msgSender())
    revert NotSender(workflowId, _msgSender(), escrowTransfers[workflowId].from);
```

**Missing:** Sender can release; recipient must explicitly accept (or release after conditions met). Website implies recipient cannot withdraw but doesn't clarify release mechanics.

---

### 8. Account Abstraction Compatibility

**Contracts:**

- `EscrowableERC20.sol` - Token with built-in escrow
- `MulticallFallbackHandler.sol` - ERC-2771/AA support
- `BaseEscrow.sol:79` - Compatible with smart contract wallets and legacy EOAs

**Missing:** Protocol supports ERC-2771 (meta-transactions) and smart contract wallets.

---

## C) General Recommendations

### 1. Add Specific Fee Disclosures

Create a dedicated "Fees" section on both Developer and How It Works pages:

- Explicit maximum percentages
- When fees are charged (creation, yield, appeal)
- Fee recipient address configuration

### 2. Document Governance Lanes

| Lane      | Delay          | Use Cases                               |
| --------- | -------------- | --------------------------------------- |
| Standard  | 48h            | Token registration, caps, configuration |
| Slow      | ~9 days        | Module swaps, high-risk changes         |
| Emergency | 0h (down-only) | Pause, risk reduction                   |

### 3. Add Chain Information

Clearly state:

- Primary deployment: Base (Ethereum L2)
- Multi-L2 support architecture
- RPC endpoint management

### 4. Clarify Release Mechanics

Website should distinguish:

- **Buyer Release**: Sender can release at any time
- **Time-based Release**: Automatic after configurable delay
- **Conditional Release**: Based on external conditions

### 5. Document Dispute Escalation

For DecentralizedResolutionModule:

1. **Standard Resolver**: Initial dispute handler
2. **Senior Resolver**: Escalation path
3. **External Resolver**: Kleros or third-party final arbiter

### 6. Include Protocol Limits

| Limit                | Value           | Context                     |
| -------------------- | --------------- | --------------------------- |
| Max escrow fee       | 2%              | Per-escrow at creation      |
| Max protocol fee     | 30%             | Yield and appeal bonds      |
| Max pause duration   | 7 days          | Per pause cycle             |
| Max pause cycles     | 3               | Per 90-day window           |
| Max dispute duration | 90 days default | Can be configured           |
| Appeal window        | 2 days default  | After per-escrow resolution |

### 7. Update Security Documentation

Incorporate:

- Module snapshot architecture
- Pause constraints
- Guardian role limitations
- Per-escrow isolation guarantees

### 8. Add Technical References

Link to:

- Contract addresses (when deployed)
- Block explorer pages
- Source code on Etherscan
- Audit reports

---

## Priority Actions

### High Priority

1. Add specific fee percentages (2% max escrow, 30% max protocol)
2. Document governance lane system
3. Clarify Aave V3 integration and yield presets
4. Document Guardian pause constraints
5. State Base L2 deployment target

### Medium Priority

1. Add escrow state machine diagram ✅ ADDRESSED
2. Document DecentralizedResolutionModule escalation ✅ ADDRESSED
3. Add protocol limits table ✅ ADDRESSED
4. Clarify release strategies ✅ ADDRESSED
5. Document SEW token existence PENDING

### Low Priority

1. Add ERC-2771/meta-transaction support PENDING
2. Document emergency recovery procedures PENDING
3. Add resolver staking details PENDING
4. Include Aave risk considerations PENDING
5. Document multi-L2 architecture PENDING

---

## Summary of Changes Made

### Updated Pages

1. **how-it-works.tsx**

   - Added Base L2 deployment context
   - Added "What Sew Is Not" section (Safety layer)
   - Added snapshot concept (key primitive)
   - Fixed yield section (Aave V3, split options)
   - Fixed dispute section (two modes, escalation)
   - Fixed release section (sender can release anytime, disputes pause release)
   - Added Escrow states section
   - Added Module architecture section

2. **governance.tsx**

   - Added Guardian constraints (7-day max, limited cycles)
   - Added Governance lanes section

3. **developer.tsx**
   - Added snapshot concept

### New Pages Created

1. **fees.tsx** - Dedicated fees page with:

   - Escrow creation fee (max 2%)
   - Yield protocol fee (0-30%)
   - Appeal bond fee (0-30%)
   - Summary table

2. **protocol-limits.tsx** - Dedicated limits page with:
   - Fee limits table
   - Time limits table
   - Guardian constraints table
   - Governance constraints
   - Per-escrow immutability summary

---

## Next Steps

### Completed

1. ✅ Link new pages in navigation (updated header.tsx)
2. ✅ Add links to fees/protocol-limits from relevant pages (how-it-works, developer, governance)
3. ✅ Add Originality section ("What Makes Sew Different") to how-it-works.tsx
4. ✅ Add technical reference page (/technical)

### Originality Section Added

Added to how-it-works.tsx after Fees section:

- Per-escrow configuration snapshot
- Forward-only evolution
- Yield on escrowed payments
- Resolver incentives

### Technical Reference Page Created

Created `/technical.tsx` with sections for:

- Smart Contracts (core, modules, governance)
- Documentation (architecture, security, guides, whitepaper)
- External Resources (GitHub, explorer, audits)
- Integration Resources (addresses, ABI, SDK)
- Community (Discord, Twitter, Forum)

### Remaining Work

- Populate GitHub URL, block explorer, and audit report links when available
- Add Discord/forum links when established
- Add SDK references when published

---

## Conclusion

High-priority items from the review have been addressed:

- ✅ Fee transparency with dedicated fees page
- ✅ Snapshot concept added to key pages
- ✅ Guardian constraints documented
- ✅ Governance lanes explained
- ✅ Base L2 deployment context added
- ✅ Escrow states documented
- ✅ Module architecture explained
- ✅ Release and dispute mechanics clarified
- ✅ Safety layer concept added

Remaining work includes:

- Linking new pages in navigation
- Adding cross-references between pages
- Documenting governance token (when finalized)
- Adding emergency recovery details
