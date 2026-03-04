Researcher
Sew Protocol

Sew Protocol introduces a structured settlement pattern for ERC20 transfers on Ethereum.

It allows a transfer to be held under predefined rules until it is released, cancelled, or resolved. The protocol is designed as a non-custodial coordination layer with a focus on containment, determinism, and forward-compatible evolution.

This page outlines the system from a research perspective: assumptions, properties, and areas of ongoing inquiry.

Framing

Sew can be understood as an attempt to formalize protected transfers as a protocol primitive.

At a high level, it explores:

Escrow as a composable building block

Structured settlement under deterministic rules

Coordination between parties without custody

Modular dispute and release semantics

Rather than being application-specific, it is intended as general infrastructure that can support multiple interaction patterns.

Research domains

Several overlapping areas are relevant to understanding the protocol.

Smart contract security

Key topics:

State isolation vs shared integration domains

Deterministic state transitions

Constrained authority models

Forward-only upgrade strategies

The protocol aims to reduce systemic risk by limiting how failures propagate across agreements.

Mechanism design

Protected transfers introduce new coordination dynamics:

Incentives around release timing

Dispute escalation behavior

Resolver selection and trust assumptions

Fairness across participants

These dynamics are shaped by module design rather than the core protocol.

Governance systems

Sew explores a constrained governance model:

Modules can evolve over time

Existing agreements remain bound to their original rules

Emergency powers are scope-limited

This creates a hybrid system balancing adaptability with predictability.

Human coordination

Many real-world exchanges require:

Delivery verification

Agreement on outcomes

Trust formation between strangers

Protected transfers introduce a structured phase between payment and settlement, which can influence coordination behavior.

System properties
Agreement immutability

Once an escrow is created:

Its release strategy is fixed

Its resolution path is fixed

Its optional integrations are fixed

Governance cannot rewrite these rules.

This property supports predictability in settlement.

Deterministic enforcement

Outcomes are enforced by contract logic.

The protocol does not evaluate intent or fairness.
It enforces the result defined by the selected modules.

Non-custodial settlement

Funds are held by contracts, not intermediaries.

No role in the system can arbitrarily redirect assets.
Settlement must follow encoded paths.

Forward-only evolution

Modules can be introduced or replaced for future escrows.

Existing escrows continue operating under their original configuration.

This creates a layered system where multiple generations of rules may coexist.

Integration domains

Optional modules introduce external dependencies.

Examples include:

Dispute resolution systems

Yield generation integrations

Future coordination extensions

These domains can introduce shared risk surfaces for participating escrows.

The protocol treats them as opt-in features and provides containment mechanisms where possible.

Security boundaries

From a research perspective, the protocol defines several boundaries:

Between escrow agreements

Between modules

Between governance and settlement

Between integration domains and core logic

The effectiveness of these boundaries is central to the protocol’s design goals.

Economic considerations

Protected transfers introduce new economic dynamics:

Yield attribution across pooled positions

Incentives for dispute resolution

Costs associated with coordination delays

Fee structures that may support infrastructure sustainability

These elements can evolve through modules and policy decisions.

Comparison to related systems

Sew intersects with several established patterns:

Traditional escrow services

Smart contract vaults and pools

Arbitration protocols

Payment coordination systems

Its contribution is combining these into a composable, non-custodial settlement layer.

Areas of ongoing inquiry

Several questions remain open for research and experimentation:

What release patterns minimize disputes?

How do users behave when protection is available by default?

What resolution mechanisms produce consistent outcomes?

How should risk exposure to external integrations be bounded?

How do governance constraints influence trust in settlement systems?

These questions will likely be answered over time through real-world use.

Measurement and observation

Researchers may be interested in studying:

Escrow lifecycle metrics

Dispute rates and outcomes

Yield participation patterns

Integration adoption across applications

Coordination behaviors across different use cases

Such data can inform improvements to both modules and interfaces.

Relationship to standards

The protocol aligns with broader efforts in the Ethereum ecosystem around:

Modular smart contract architecture

Account abstraction

Composable coordination primitives

Open interface definitions

Over time, elements of the design may inform formal standards discussions.

Reference implementation

Everyday Wallet demonstrates one application of protected transfers in a consumer-facing context.

It is not required for research into the protocol itself, but can serve as a practical example of how the primitive behaves in real usage.

Summary

Sew Protocol is an exploration of protected transfers as a coordination primitive.

It attempts to balance:

Non-custodial guarantees

Deterministic settlement

Modular evolution

Constrained governance

Researchers can engage with it from multiple perspectives, including security, economics, mechanism design, and human coordination.
