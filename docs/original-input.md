Sew Protocol — Homepage Draft (Ethereum-native tone)
Hero

Sew Protocol
Payment protection at the transaction layer

A non-custodial escrow architecture for ERC20 transfers on Ethereum.
Designed to reduce fraud, contain irreversible user error, and limit systemic smart contract risk.

[How it works] [Read the architecture]

What it is

Sew Protocol introduces protected transfers as a native pattern on Ethereum.

Instead of sending tokens directly from one address to another, a transfer can be routed through a deterministic escrow that holds funds until release conditions are met.

The protocol is:

Non-custodial

Permissionless

Composable

Interface-agnostic

Any wallet, marketplace, or application can build on it.

Why it exists

Ethereum transactions are irreversible by design.
This property enables trustless settlement, but it also creates persistent risks:

Funds sent to the wrong address cannot be recovered

Buyers and sellers must rely on trust or external platforms

Disputes are difficult to resolve without custody

Smart contract risk can propagate across shared systems

Protection today is usually added off-chain, through custodians, or as application-specific logic.

Sew moves protection to the transaction layer itself.

How it helps

Sew allows a transfer to be structured as an escrowed payment with clear release paths.

This enables:

Funds held until conditions are met

Buyer-initiated release flows

Timed releases

Dispute resolution pathways

Isolation of risk to individual transactions

The goal is not to replace direct transfers, but to establish a safer default pattern where protection is needed.

Design principles

Sew Protocol is built around a small set of constraints:

Non-custodial by construction
Funds remain under smart contract control. No party can arbitrarily redirect assets.

Deterministic execution
Release and resolution follow predefined rules encoded at escrow creation.

Isolation of risk
Each escrow is self-contained. Failures do not propagate across the system.

Changes affect only new escrows
Upgrades and module swaps apply forward, preserving the integrity of existing agreements.

Composable infrastructure
The protocol exposes a base primitive that other systems can extend.

A primitive for protected transfers

Sew defines a simple idea:

A payment can be protected before it is finalized.

This makes it possible to coordinate exchanges, deliveries, and agreements without introducing custody.

The same primitive can support:

Peer-to-peer commerce

Marketplaces

Onchain agreements

Service payments

Interface-level safety features

Architecture overview

At its core, Sew consists of:

Escrow contracts that hold funds under defined rules

Release strategies that determine how payments finalize

Resolution modules that handle disputes

Governance mechanisms that manage protocol evolution

Modules can be improved over time.
Existing escrows remain unchanged.

This allows the system to evolve without rewriting in-flight agreements.

[Read the architecture]

Security posture

Sew is designed to act as a containment layer.

Rather than maximizing complexity at the application level, it aims to:

Reduce the impact of irreversible mistakes

Limit blast radius from integration failures

Provide predictable release semantics

Support clear escalation paths for disputes

The protocol does not eliminate risk.
It narrows and localizes it.

[Security model]

Permissionless by default

Sew is open infrastructure.

Anyone can integrate it

Anyone can build an interface

Anyone can extend it through new modules

The protocol does not depend on a single frontend or company.

One reference interface is Everyday Wallet, designed for protected everyday payments.

[Explore Everyday Wallet]

Choose your path

User
Understand protected payments and when to use them

Developer
Integrate escrow-secured transfers into your application

Builder
Create marketplaces, wallets, and coordination tools on Sew

Researcher
Review architecture, governance, and security assumptions

Investor
Explore the long-term role of protected transfers in Ethereum commerce

Vision

Ethereum made programmable money possible.
Sew explores what happens when payments themselves become programmable agreements.

By introducing protection at the moment of transfer, the protocol aims to support safer coordination between parties who do not already trust each other.

This is a long-term infrastructure effort focused on:

Safer everyday transactions

Clearer settlement patterns

Reduced reliance on custodial intermediaries

Protection is not an add-on.
It becomes a default option.

Footer

How it works

Architecture

Security model

Governance

Build on Sew

Docs

Everyday Wallet

Non-custodial protocol software. Interfaces may vary. Users remain responsible for their own keys and transactions.

Assumptions

Primary audience is Ethereum-native (developers, protocol designers, security researchers)

The homepage should feel closer to an architecture overview than a product pitch

Everyday Wallet is positioned as a reference interface, not the core narrative

Next steps

Write the “Architecture” page next (this is the most credibility-building follow-up)

Create the Developer path landing page with integration-focused framing

Draft the Security Model page to reinforce the containment narrative

What I need from you

Do you want the lead identity to lean more toward “payment protection primitive” or “escrow architecture”?

Should the IEO/token be absent from the homepage entirely at this stage?

Suggested next step

Ask for: “Draft the Architecture page” — this will anchor technical credibility immediately after the homepage.

Architecture

Approach

Present the architecture as a clear mental model first, then introduce components and their relationships

Emphasize invariants, isolation, and upgrade philosophy to reinforce credibility with Ethereum-native readers

Keep it implementation-aware but not code-specific, so it remains stable as the system evolves

Architecture
Sew Protocol

Sew Protocol introduces a structured pattern for protected transfers on Ethereum.
At its core, it defines how a payment can be held, released, and resolved without custody, while preserving composability and forward evolution.

This page outlines the system at a conceptual level.

System model

A protected transfer in Sew is an escrow-backed payment with predefined release and resolution paths.

Instead of sending tokens directly to a recipient:

Funds are routed into an escrow contract

Release conditions are defined at creation

Funds are released when conditions are satisfied

Each escrow represents an isolated agreement between participants.

Core components
Escrow layer

The escrow layer holds funds under rule-bound conditions.

Responsibilities:

Receive tokens into escrow

Track escrow state

Enforce release and cancellation paths

Interface with resolution modules when disputes occur

Each escrow is self-contained.
State transitions are deterministic and governed by protocol rules.

Release strategies

Release strategies define how and when a payment finalizes.

Examples of release patterns:

Sender-initiated release

Timed auto-release

Conditional release paths

Release logic is separated from escrow storage to allow evolution without rewriting core contracts.

At creation, each escrow is bound to a release strategy.
This relationship remains fixed for the life of that escrow.

Resolution modules

Resolution modules handle disagreements between parties.

They define:

How disputes are escalated

Who can resolve them

How final outcomes are enforced

Different resolution mechanisms can coexist:

Centralized arbitration

Decentralized juror systems

Future resolution models

Each escrow references a resolution module selected at creation.
This ensures outcomes follow the expected rules.

Asset custody model

Funds are always held by smart contracts.

Key properties:

No centralized custody

No discretionary redirection of funds

Release flows must follow encoded rules

Guardians and governance actors cannot extract user funds.

Their role is limited to system safety and module-level coordination.

Isolation as a first principle

Sew is designed to minimize blast radius.

Isolation happens at multiple levels:

Per-escrow isolation
Each agreement is independent. Failures do not propagate across escrows.

Module boundaries
Release logic, resolution logic, and extensions are separated.

Forward-only upgrades
Changes affect new escrows only.

This reduces systemic risk across the protocol.

Module-based evolution

Sew uses a modular architecture so that components can improve over time.

Modules can be introduced or replaced to support:

New release semantics

Improved resolution systems

Additional coordination patterns

However:

Existing escrows keep their original rules

New escrows adopt new modules

Historical agreements remain intact

This preserves predictability and fairness.

Governance surface

Protocol evolution is coordinated through defined roles.

At a high level:

Governance can approve new modules

Safety roles can pause components during incidents

Emergency actions are constrained and scope-limited

The design goal is to allow evolution without introducing custody or arbitrary intervention.

Deterministic state transitions

Each escrow follows a clear lifecycle.

Typical flow:

Creation

Active state

Release or dispute

Resolution

Final settlement

State transitions are explicit and verifiable onchain.

This predictability is essential for integrations and automation.

Composability

Sew is interface-agnostic.

Applications can build on top of the primitive to create:

Wallet-based protected transfers

Marketplace settlement flows

Onchain service agreements

Coordination tools

The protocol does not prescribe UX.
It provides the safety layer beneath it.

Security model (high-level)

Sew focuses on containment rather than elimination of risk.

Key ideas:

Limit impact of individual failures

Avoid shared mutable global state where possible

Constrain privileged actions

Ensure funds always have a defined path

More detail is available on the Security page.

Reference interface

Everyday Wallet serves as an early interface demonstrating:

Protected payments as a default option

Simple release flows

Real-world usage patterns

It is one implementation among many possible.

Long-term direction

Sew aims to establish protected transfers as a standard pattern for situations where trust is limited.

Over time, this architecture can support:

More expressive agreement structures

New dispute resolution systems

Expanded coordination models

While preserving:

Non-custodial guarantees

Isolation of agreements

Predictable execution

Assumptions

Readers are technically literate and familiar with Ethereum architecture patterns

This page should remain stable even as contracts evolve

Detailed contract-level specifics will live in docs rather than the main site

Next steps

Draft the Security Model page next to reinforce the containment narrative

Write the Governance page to explain upgrade and guardian boundaries

Create a simplified diagram to visually anchor the architecture

What I need from you

Do you want explicit component names (BaseEscrow, EscrowVault, modules) mentioned here, or kept conceptual?

Should yield-generation modules be introduced on this page, or saved for deeper technical docs?

Suggested next step

Ask for: “Draft the Security Model page” — this is the most important credibility page after Architecture.

Draft the Security Model page

Approach

Frame security as containment, determinism, and constrained authority rather than absolute safety claims

Clearly describe threat assumptions, trust boundaries, and failure modes in language that resonates with Ethereum-native readers

Emphasize invariants, isolation, and operational response design without exposing low-level implementation details

Security Model
Sew Protocol

Sew Protocol is designed as a containment layer for protected transfers on Ethereum.
Rather than attempting to eliminate all risk, the protocol focuses on narrowing scope, isolating failures, and ensuring that funds always follow deterministic paths.

This page outlines the core security assumptions, guarantees, and boundaries.

Security philosophy

Ethereum transactions are irreversible.
Smart contracts introduce new capabilities, but also new forms of risk.

Sew approaches security through three principles:

Containment over prevention
Failures may occur. The protocol is designed to limit their impact.

Determinism over discretion
Funds move according to predefined rules, not human judgment.

Isolation over shared risk
Each escrow is treated as an independent agreement.

The goal is to reduce fraud exposure, contain user error, and limit systemic contract risk at the transaction layer.

Threat model (high-level)

Sew is designed to operate in an adversarial environment.

Key risk categories considered:

User error

Sending funds to the wrong counterparty

Releasing funds prematurely

Misunderstanding agreement terms

Protected transfers reduce irreversible mistakes by introducing a controlled release phase.

Counterparty risk

Fraudulent sellers or buyers

Failure to deliver goods or services

Disputes over outcomes

Escrow-based settlement creates a neutral holding phase where resolution can occur.

Smart contract risk

Bugs in integrations

Failures in extension modules

Unexpected edge cases

The architecture is designed to limit blast radius to individual escrows wherever possible.

Governance risk

Malicious or compromised privileged roles

Unsafe module changes

Emergency interventions

Authority is intentionally constrained and scope-limited.

Core security properties
Non-custodial by design

Funds are held by smart contracts, not by an operator or intermediary.

No party can:

Arbitrarily seize funds

Redirect assets outside defined rules

Access private keys

Release outcomes must follow encoded logic.

Deterministic release paths

Every escrow defines its release and resolution rules at creation.

From that point:

Settlement follows predefined state transitions

Outcomes are enforced onchain

Participants know the possible end states in advance

This predictability is a primary defense against discretionary misuse.

Per-escrow isolation

Each protected transfer is independent.

If one escrow encounters a failure:

Other escrows are unaffected

State is not shared across agreements

Containment reduces systemic exposure

This design choice limits cascading failures.

Forward-only evolution

Protocol upgrades do not alter existing agreements.

When modules change:

New escrows adopt new logic

Existing escrows keep their original rules

Historical agreements remain stable

This protects participants from unexpected rule changes mid-agreement.

Constrained authority model

Sew includes limited privileged roles to support safety and evolution.

Their authority is intentionally narrow.

Typical responsibilities include:

Pausing components during suspected incidents

Disabling faulty integrations

Approving new modules for future escrows

Critically:

Privileged roles cannot withdraw user funds

They cannot redirect assets to arbitrary recipients

They cannot rewrite settlement outcomes

Their role is operational safety, not custody.

Emergency response posture

In the event of a vulnerability or integration failure, the protocol is designed to support rapid containment.

Possible safety actions may include:

Temporarily pausing new escrow creation

Disabling specific modules

Unwinding positions back to their originating escrow context

Emergency actions are structured to:

Preserve fund ownership

Restore accounting integrity

Prevent further exposure

They are not designed to introduce discretionary control.

Module-level risk boundaries

Sew separates responsibilities into distinct components.

This allows:

Fault isolation

Targeted intervention

Controlled evolution

If a module behaves unexpectedly:

Its scope of impact is limited

It can be disabled for future escrows

Existing agreements remain bound to their original configuration

This reduces systemic dependency on any single extension.

Integration assumptions

Applications that build on Sew inherit its protections, but also introduce their own risk surfaces.

Examples include:

Frontend errors

Incorrect parameterization

UX-level misunderstandings

The protocol enforces settlement rules.
Interfaces must ensure clarity and correctness at the user level.

Limits of protection

Sew does not guarantee:

Correct human judgment

Honest counterparties

Perfect dispute outcomes

Elimination of all user error

Instead, it provides structure:

Funds can be held safely

Outcomes follow defined paths

Disputes can be resolved within known rules

It is a coordination and containment layer, not a trust oracle.

Security as an evolving discipline

Security is not a one-time state.

Over time, the protocol expects to improve through:

Audits and formal review

Community scrutiny

Real-world usage feedback

Module-level innovation

The modular architecture allows defensive improvements without rewriting existing agreements.

Relationship to interfaces

Sew Protocol is interface-agnostic.

Wallets and applications built on top can:

Enhance safety

Improve clarity

Reduce user error

Everyday Wallet is a reference interface exploring protected payments as a default experience.

It does not change the underlying security guarantees of the protocol.

Summary

Sew is designed to introduce protection at the moment of transfer while preserving Ethereum’s core properties:

Non-custodial ownership

Deterministic execution

Composability

Permissionless participation

Security is approached as a system design problem:

Contain risk.
Isolate failures.
Constrain authority.
Preserve predictable outcomes.
