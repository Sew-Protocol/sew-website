Governance
Sew Protocol

Sew Protocol is designed to evolve over time while preserving the integrity of existing agreements.

Governance is structured around a simple principle:

Protocol coordination should never become custody.

This page explains how changes are introduced, what powers exist, and where authority is intentionally constrained.

Governance philosophy

Sew separates two responsibilities:

Protocol evolution — introducing new modules and improving safety over time

Operational safety — responding to emergencies or integration risks

Governance is designed to:

Allow defensive action when needed

Prevent discretionary interference in active escrows

Ensure upgrades affect only future agreements

The goal is long-term stability, not constant change.

Core design constraint

Once an escrow is created, its rules are fixed.

This means:

The release strategy is locked

The resolution path is locked

The yield module (if selected) is locked

The settlement logic cannot be rewritten

Governance cannot retroactively alter how an existing escrow resolves.

This is a foundational property of the system.

Roles and responsibilities

Sew uses role-based governance with clearly bounded authority.

Timelock governance

The timelock is responsible for protocol evolution.

Typical responsibilities:

Registering new modules

Updating system configuration

Setting exposure caps

Managing supported integrations

Changes are delayed through a timelock mechanism to allow visibility and review before activation.

This provides:

Transparency

Predictability

Time to react to risky changes

Guardian role

The guardian exists for emergency response.

Scope is intentionally limited.

Typical actions:

Disable integrations (e.g., yield module)

Lower risk parameters (such as caps)

Pause certain system components

The guardian cannot:

Withdraw user funds

Redirect assets

Rewrite settlement outcomes

Change the rules of existing escrows

The role is defensive, not managerial.

Escrow contracts

Escrow contracts are registered as authorized participants in modules.

They:

Initiate yield deposits

Trigger withdrawals

Interact with protocol modules on behalf of users

This allows governance and operational controls to be scoped at the integration boundary.

For example:

Exposure caps can be applied per escrow contract

Integrations can be managed without affecting unrelated components

This supports compartmentalization across versions and products.

Module-based evolution

Sew evolves through modules rather than core contract rewrites.

Modules define:

Release logic

Dispute resolution

Optional yield integrations

Future coordination features

Governance can:

Register new modules

Deprecate modules for future escrows

Disable modules during incidents

But:

Existing escrows continue using the modules they were created with

Past agreements are not modified

This forward-only model preserves predictability.

Change boundaries

There are clear limits on what governance can and cannot do.

Governance can:

Approve new modules

Set exposure limits

Enable or disable integrations

Adjust system parameters for future activity

Governance cannot:

Seize funds

Redirect assets

Force settlement outcomes

Change the rules of an active escrow

These constraints are enforced by contract design, not policy.

Exposure management

Governance manages system-level risk through exposure controls.

This includes:

Setting caps per token

Setting caps per escrow contract

Reducing exposure during incidents

These controls are applied at deposit time.

They are designed to:

Limit systemic risk

Prevent over-concentration

Maintain stability across integrations

They do not affect the ability to withdraw or unwind existing positions.

Emergency containment

In the event of an integration failure or security concern:

The guardian can disable the affected module

Deposits can be halted

Existing positions can be unwound back to escrow custody

Emergency actions are designed to restore safe conditions, not to introduce new control paths.

Governance per integration boundary

Sew recognizes that different escrow contracts may represent:

Different versions

Different products

Different partners or verticals

Governance can scope certain parameters at the escrow contract level.

This allows:

Fairness controls between integrations

Independent exposure management

Controlled rollout of features

This supports compartmentalization across the system.

Trust assumptions

Users rely on governance to act within defined constraints.

Key assumptions:

Timelock delays provide transparency into upcoming changes

Guardians act to reduce risk, not increase it

Governance powers remain narrowly scoped

The protocol is designed so that even in worst-case governance failures:

Funds remain under contract control

Settlement paths remain deterministic

Long-term direction

Governance is expected to decentralize over time.

Early phases may involve:

Core team stewardship

Carefully managed module rollouts

Conservative exposure policies

As the system matures:

Governance participation can broaden

Module development can expand

Decision-making can become more distributed

The underlying constraint remains:

Existing escrows must remain predictable and protected.

Summary

Sew governance is structured around coordination, not control.

It exists to:

Evolve the protocol safely

Respond to emergencies

Manage systemic exposure

While preserving the most important invariant:

Agreements created today must remain valid under the rules they were created with.
