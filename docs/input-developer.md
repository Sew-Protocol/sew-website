Developer
Build on Sew Protocol

Sew Protocol introduces protected transfers as a composable primitive for Ethereum applications.

Developers can integrate escrow-backed payments directly into wallets, marketplaces, and coordination tools without introducing custody.

This page explains how to think about Sew from a builder’s perspective and where to start.

What Sew gives you

At its core, Sew provides a new settlement pattern:

A token transfer that is held under rules until it is released, cancelled, or resolved.

Instead of building escrow logic from scratch, you can rely on a shared protocol layer that handles:

Escrow custody under defined conditions

Deterministic release flows

Dispute resolution pathways

Optional yield generation

Forward-compatible module evolution

This allows applications to focus on UX and coordination while Sew handles settlement enforcement.

Mental model for integration

Think of Sew as a coordination layer between sender and recipient.

A typical flow:

Your app initiates a protected transfer

Funds move into an escrow contract

Your interface guides participants through the release or dispute process

The protocol enforces the final outcome

Your application never holds custody.

Where Sew fits in your stack

Sew sits between:

Your frontend/application logic

Token transfers on Ethereum

It becomes the settlement layer for any situation where payment and delivery are separated.

Typical integration points:

Wallet send flows

Marketplace checkout flows

Service payment agreements

Automated coordination systems

Core integration surfaces

From a contract perspective, Sew exposes a small number of core concepts:

Escrow creation

Your application triggers escrow creation by defining:

Token and amount

Sender and recipient

Release strategy

Resolution module (optional)

Yield module (optional)

This creates a protected transfer with fixed rules.

Release interactions

Your interface can allow participants to:

Release funds

Request cancellation

Escalate disputes

The protocol enforces the state transitions.

Resolution integration

If your use case involves disputes:

You can integrate with existing resolution modules

Or introduce new resolution models as extensions

The protocol ensures outcomes are enforced deterministically.

Yield integration (optional)

If enabled:

Escrowed funds can generate yield through external integrations

Ownership remains with the escrow

Positions can be unwound if needed

Yield is a feature layer, not a requirement.

Interface-agnostic design

Sew does not prescribe UX.

You can build:

Wallet-native protected send flows

Marketplace settlement systems

Specialized coordination tools

Vertical-specific payment experiences

Multiple interfaces can coexist over the same protocol.

Module architecture

Sew is designed to evolve through modules rather than core contract rewrites.

Modules define behavior for:

Release semantics

Dispute resolution

Optional integrations (such as yield)

When an escrow is created, it selects its modules.
Those choices remain fixed for the life of that escrow.

New modules affect only future escrows.

Safety and invariants

When building on Sew, you can rely on a few key properties:

Funds are never held by your application

Settlement follows predefined rules

Governance cannot rewrite active agreements

Privileged roles cannot redirect user funds

Your integration should preserve these guarantees at the UX level.

What to design for

Sew works best when:

Payment and delivery are separated in time

Coordination is needed before settlement

Users want structured release paths

Good fits include:

P2P marketplaces

Services and freelance payments

Ticketing systems

Event coordination

Local commerce platforms

Versioning and forward compatibility

The protocol is designed to evolve without breaking existing integrations.

Key properties:

New modules can be introduced over time

Existing escrows continue using their original configuration

Interface-level upgrades can be rolled out independently

This supports long-lived integrations.

Governance awareness

As a builder, you should understand:

Exposure caps may affect new deposits into optional modules

Integrations can be disabled for safety reasons

Existing escrows remain valid under their original rules

This helps you design resilient flows.

Reference implementation

Everyday Wallet is one example of an interface built on Sew.

It demonstrates:

Protected send flows

Release UX patterns

Real-world usage scenarios

It is not required for integration.

Getting started

To begin integrating:

Review the core contracts and interfaces

Understand the escrow lifecycle

Choose default modules for your use case

Build release and dispute flows into your UI

Detailed technical documentation is available in the protocol docs.

Integration philosophy

Sew is designed to be:

Minimal at the core

Flexible at the edges

Safe by default

You can adopt only the parts you need.

Summary

For developers, Sew provides a reusable primitive:

A payment that can be held, coordinated, and settled under rules.

It removes the need to build escrow logic, custody systems, and settlement enforcement from scratch.

This allows applications to focus on coordination, not enforcement.
