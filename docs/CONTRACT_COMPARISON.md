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

### 1. Escrow Fee - No Specific Percentage Defined

**Website (input-developer.md):**

> "Escrow creation fee" listed as a parameter but no specific percentage mentioned.

**Contracts (BaseEscrow.sol:127):**

```solidity
uint256 public constant MAX_ESCROW_FEE_BPS = 200; // 2% maximum escrow fee
```

**Issue:** The website implies an escrow fee exists but doesn't specify it cannot exceed 2%. Users may incorrectly assume a higher fee is possible.

---

### 2. Protocol Fees - Not Disclosed

**Website:** No mention of protocol fees on yield or appeal bonds.

**Contracts (BaseEscrow.sol:135-136):**

```solidity
uint256 public yieldProtocolFeeBps; // Protocol fee on yield (0-3000 bps = 0-30%)
uint256 public appealBondProtocolFeeBps; // Protocol fee on appeal bonds (0-3000 bps = 0-30%)
```

**Issue:** Users have no visibility that up to 30% of yield and appeal bonds can be taken as protocol fees.

---

### 3. Yield Generation - Aave Mentioned Without Detail

**Website (input-how-it-works.md):**

> "Funds may be deployed into an external protocol (such as Aave) to generate yield"

**Contracts:**

- `AaveYieldGenerationModule.sol` - Full Aave V3 integration
- `DefaultYieldGenerationModule.sol` - Non-Aave option
- `YieldPresets.sol` - Multiple yield distribution options (TO_SENDER, TO_RECIPIENT, SPLIT)

**Issue:** Website oversimplifies yield generation. Missing:

- Specific integration is Aave V3
- Multiple yield presets exist
- Yield distribution can be split between sender/recipient

---

### 4. Dispute Resolution - Incomplete Description

**Website (input-governance.md, input-how-it-works.md):**

> Mentions "resolution module" and "resolver" without specifics.

**Contracts:**

- `DefaultResolutionModule.sol` - Single trusted resolver per escrow
- `DecentralizedResolutionModule.sol` - Multi-level escalation (Standard → Senior → External/Kleros)
- Resolver staking and incentive systems

**Issue:** Missing critical details:

- Two distinct resolution module implementations
- Three-level escalation path
- Kleros integration for external resolution
- Resolver staking requirements

---

### 5. Guardian Role Scope - Missing Constraints

**Website (input-governance.md):**

> "Guardian can disable integrations, lower risk parameters, pause certain system components"

**Contracts (BaseEscrow.sol:115-122):**

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

### 6. Governance Process - Missing Lane System

**Website (input-governance.md):**

> "Timelock is responsible for protocol evolution" with unspecified delays.

**Contracts:**

- `SlowLaneQueueActivate.sol` - ~9 day process (48h queue + 7 days + 48h activate)
- Standard Lane: 48 hours for bounded parameter updates
- Emergency Lane: 0 hours, down-only (guardian controlled)

**Issue:** Missing specific governance lane system and timing requirements.

---

### 7. Chain Deployment - Not Disclosed

**Website:** No mention of which chain the protocol is deployed on.

**Contracts:**

- `RPCEndpointManager.sol` - Multi-chain RPC management
- `MultiL2EscrowAggregator.sol` - L2 support
- `L2AddressRegistry.sol` - L2 address tracking
- `BaseEscrow.sol:56-57` - Default timeouts reference Base L2 context

**Issue:** Protocol is built for Base (Ethereum L2) with multi-L2 support. Website doesn't clarify deployment target.

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

### 2. Escrow States and Transitions

**States (EscrowTypes.sol:64-71):**

- `NONE` - Uninitialized
- `PENDING` - Created, awaiting release/cancel/dispute
- `DISPUTED` - Under dispute resolution
- `RELEASED` - Funds sent to recipient
- `REFUNDED` - Funds returned to sender
- `RESOLVED` - Outcome determined by resolver

**Missing from website:** Full state machine diagram and valid transitions.

---

### 3. Module Types

| Module Type           | Purpose               | Examples                                                |
| --------------------- | --------------------- | ------------------------------------------------------- |
| Resolution Module     | Dispute handling      | DefaultResolutionModule, DecentralizedResolutionModule  |
| Release Strategy      | Release authorization | DefaultReleaseStrategy                                  |
| Cancellation Strategy | Cancel rules          | DefaultCancellationStrategy                             |
| Yield Generation      | Yield accrual         | AaveYieldGenerationModule, DefaultYieldGenerationModule |
| Yield Distribution    | Yield allocation      | DefaultYieldDistributionModule                          |
| Incentive Module      | Resolver incentives   | ResolverIncentiveModuleV1/V2                            |

---

### 4. Per-Escrow Configuration Snapshot

**Contracts (BaseEscrow.sol:157-171):**
Every escrow captures a frozen snapshot at creation:

```solidity
struct ModuleSnapshot {
    address resolutionModule;
    address releaseStrategy;
    address yieldGenerationModule;
    address yieldDistributionModule;
    address incentiveModule;
    address cancellationStrategy;
    uint256 yieldProtocolFeeBps;
    uint256 appealBondProtocolFeeBps;
    uint256 escrowFeeBps;
    uint256 defaultAutoReleaseDelay;
    uint256 defaultAutoCancelDelay;
    uint256 maxDisputeDuration;
    uint256 appealWindowDuration;
}
```

**Missing from website:** Explicit statement that all settings are snapshotted and immutable per-escrow.

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

1. Add escrow state machine diagram
2. Document DecentralizedResolutionModule escalation
3. Add protocol limits table
4. Clarify release strategies
5. Document SEW token existence

### Low Priority

1. Add ERC-2771/meta-transaction support
2. Document emergency recovery procedures
3. Add resolver staking details
4. Include Aave risk considerations
5. Document multi-L2 architecture

---

## Conclusion

The static website provides a good high-level overview but lacks critical technical details that developers and users need to make informed decisions. The contracts implement a sophisticated system with:

- Clear fee structures
- Constrained governance powers
- Per-escrow immutability guarantees
- Multi-level dispute resolution
- Yield generation with Aave

These details should be surfaced on the website to ensure transparency and trust.
