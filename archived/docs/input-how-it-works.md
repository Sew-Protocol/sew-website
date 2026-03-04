How It Works
Sew Protocol

Sew Protocol introduces a structured way to send protected payments on Ethereum.

Instead of transferring funds directly to another address, a payment can be held in escrow until it is released, cancelled, or resolved.

This page explains the flow from start to finish.

The core idea

A standard token transfer is immediate and final.

A protected transfer is different:

Funds are placed into a smart contract

Release conditions are defined up front

Settlement happens when those conditions are met

The protocol does not decide outcomes.
It enforces the rules defined at creation.

Lifecycle of a protected transfer

1. Creation

A user initiates a payment through an interface (such as a wallet or marketplace).

At creation time, the following are defined:

Token and amount

Sender and recipient

Release strategy

Dispute resolution path (if enabled)

Optional yield generation (if enabled)

Funds are transferred into an escrow contract and held under these rules.

Once created, these rules do not change.

2. Active escrow state

While active, the funds remain locked in escrow.

During this period:

The recipient cannot withdraw funds

The sender cannot reclaim funds unilaterally

Settlement depends on the selected release path

This creates a neutral holding phase where both parties can coordinate.

3. Optional yield generation

If enabled at creation:

Funds may be deployed into an external protocol (such as Aave) to generate yield

The escrow remains the owner of the position

Yield accrues to the escrowed amount

This feature is optional and scoped to specific integrations.

If disabled or unwound, funds return to escrow custody.

4. Release

Settlement typically occurs through a release action.

Examples include:

Sender releases funds after receiving goods

A timed release triggers automatically

A predefined condition is met

When released:

Funds leave escrow

The recipient receives the payment

Any generated yield is included in settlement

5. Dispute (if needed)

If parties disagree:

A dispute can be opened according to the selected resolution module

The designated resolver evaluates the situation

A final outcome is enforced by the protocol

The protocol enforces the result.
It does not judge the dispute itself.

6. Final settlement

Once released, cancelled, or resolved:

The escrow closes

Funds are transferred to the correct destination

No further changes are possible

The agreement is complete.

What makes this different from a normal transfer

Standard transfer:

Immediate

Irreversible

No coordination phase

Protected transfer:

Held under defined rules

Released intentionally

Supports structured settlement paths

This creates space for coordination without introducing custody.

Optional modules

Sew is modular by design.

At creation time, an escrow may opt into:

A release strategy

A resolution mechanism

A yield generation module

Each module defines behavior for that escrow only.

Modules can evolve over time, but existing escrows remain bound to the modules they selected.

Isolation of agreements

Each escrow is an independent agreement.

This means:

State transitions are specific to that escrow

Settlement paths are defined up front

Changes to the protocol affect only new escrows

Optional integrations may pool activity for efficiency, but the agreement itself remains self-contained.

Safety mechanisms

To support system stability:

Governance can limit exposure to external integrations

Guardians can disable risky integrations

Positions can be unwound back to escrow custody in emergencies

These mechanisms are designed to contain risk, not to control funds.

Interface-agnostic design

Sew does not depend on a single frontend.

Protected transfers can be initiated through:

Wallets

Marketplaces

Custom applications

Automated workflows

Everyday Wallet is one reference interface designed to make protected payments simple to use.

A simple mental model

You can think of Sew as adding a coordination phase to a payment:

Lock funds under agreed rules

Coordinate outcome

Settle deterministically

The protocol enforces the rules.
Participants control the decisions.

Where this fits

Protected transfers are useful when:

Parties do not already trust each other

Delivery happens after payment

Outcomes depend on real-world coordination

Examples include:

Peer-to-peer purchases

Services and freelance work

Event tickets

Marketplace transactions

The protocol provides the settlement layer beneath these interactions.

Summary

Sew Protocol adds structure to token transfers without introducing custody.

It allows a payment to be:

Held

Coordinated

Settled

Under predefined, enforceable rules.

This makes it possible to support safer exchanges between parties who do not already trust each other.

Escrow states

An escrow moves through defined states during its lifecycle:

- **Pending**: Created and funded. Funds are locked until conditions are met.
- **Disputed**: A participant opened a dispute. Resolution is in progress.
- **Released**: Conditions were met. Recipient received the funds.
- **Refunded**: The escrow was cancelled. Funds returned to sender.
- **Resolved**: A resolver determined the outcome. Funds distributed accordingly.

Once an escrow reaches Released, Refunded, or Resolved, it is complete. These states are final.

Module architecture

Sew uses pluggable modules to define escrow behavior:

- **Release strategy**: Controls who can release funds and under what conditions.
- **Resolution module**: Handles disputes and determines outcomes.
- **Yield module**: Manages optional yield generation on escrowed funds.

Modules are selected when an escrow is created and cannot be changed afterward. This ensures existing agreements remain predictable regardless of future protocol upgrades.

See the technical documentation for complete module specifications.
