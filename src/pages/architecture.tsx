import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Architecture() {
  return (
    <>
      <Header titlePre="Architecture" />
      <div className={sharedStyles.layout}>
        {/* ── Header ───────────────────────────────────────────────────────── */}
        <section className="header-section">
          <h1>Architecture</h1>
          <h2 className="tagline">System design and structural invariants</h2>
          <p className="intro">
            A protected transfer is an ERC-20 transfer routed through a
            deterministic escrow with predefined release and dispute resolution
            paths. This page describes how the system is structured and why.
          </p>
        </section>

        {/* ── Reviewer callout ─────────────────────────────────────────────── */}
        <div className="reviewer-callout">
          <p>
            <strong>For auditors and security reviewers:</strong> This page
            covers system structure. For threat analysis and economic security,
            see the <Link href="/security">Security Model</Link>. For dispute
            mechanics, see{' '}
            <Link href="/dispute-resolution">Dispute Architecture</Link> and{' '}
            <Link href="/security#dispute-economics">Dispute Economics</Link>.
          </p>
        </div>

        {/* ── System flow ──────────────────────────────────────────────────── */}
        <section className="content-block">
          <h3>System flow</h3>
          <p>
            A transfer moves through well-defined states. Once a terminal state
            is reached it is irreversible. No role can bypass the state machine.
          </p>

          <div className="flow-diagram">
            <div className="flow-top-row">
              <div className="flow-node sender">
                <span className="node-label">Sender</span>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-node escrow active-node">
                <span className="node-label">Escrow</span>
                <code className="node-state">PENDING</code>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-node terminal">
                <span className="node-label">Recipient</span>
                <code className="node-state">RELEASED</code>
              </div>
            </div>
            <div className="flow-mid-row">
              <div className="flow-spacer-wide" />
              <div className="flow-down-arrow">↓ dispute raised</div>
              <div className="flow-spacer-wide" />
            </div>
            <div className="flow-bottom-row">
              <div className="flow-node escrow">
                <span className="node-label">Escrow</span>
                <code className="node-state">DISPUTED</code>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-node">
                <span className="node-label">Resolver</span>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-node terminal outcome-node">
                <span className="node-label">Outcome</span>
                <code className="node-state">RESOLVED</code>
              </div>
            </div>
            <div className="flow-outcome-row">
              <code className="outcome-label">Release · Refund</code>
            </div>
            <div className="flow-refund-row">
              <div className="flow-spacer-wide" />
              <div className="refund-branch">
                <span className="refund-label">or: cancel → </span>
                <div className="flow-node terminal small-node">
                  <code className="node-state">REFUNDED</code>
                </div>
              </div>
            </div>
          </div>

          <div className="state-table">
            <div className="state-row state-header">
              <span>State</span>
              <span>Meaning</span>
              <span>Terminal</span>
            </div>
            <div className="state-row">
              <code>NONE</code>
              <span>Uninitialized</span>
              <span className="badge no">—</span>
            </div>
            <div className="state-row">
              <code>PENDING</code>
              <span>Created and funded, awaiting action</span>
              <span className="badge no">No</span>
            </div>
            <div className="state-row">
              <code>RELEASED</code>
              <span>Funds sent to recipient</span>
              <span className="badge yes">Yes</span>
            </div>
            <div className="state-row">
              <code>REFUNDED</code>
              <span>Funds returned to sender</span>
              <span className="badge yes">Yes</span>
            </div>
            <div className="state-row">
              <code>DISPUTED</code>
              <span>Dispute raised, awaiting resolver</span>
              <span className="badge no">No</span>
            </div>
            <div className="state-row">
              <code>RESOLVED</code>
              <span>Resolver outcome enforced on-chain</span>
              <span className="badge yes">Yes</span>
            </div>
          </div>
        </section>

        {/* ── Core components ──────────────────────────────────────────────── */}
        <section className="content-block">
          <h3>Core components</h3>

          <div className="component">
            <div className="component-header">
              <span className="component-tag">Core</span>
              <h4>Escrow layer</h4>
            </div>
            <p>
              Holds funds under rule-bound conditions. Tracks state. Enforces
              transitions. Self-contained per agreement — no shared state
              between escrows.
            </p>
            <ul>
              <li>Accepts ERC-20 tokens into escrow on creation</li>
              <li>Enforces all state transitions deterministically</li>
              <li>
                Delegates release authorization to the selected release strategy
              </li>
              <li>
                Delegates dispute resolution to the selected resolution module
              </li>
              <li>
                Captures module configuration at creation — locked for that
                escrow's lifetime
              </li>
            </ul>
          </div>

          <div className="component">
            <div className="component-header">
              <span className="component-tag">Module</span>
              <h4>Release strategies</h4>
            </div>
            <p>
              Pluggable modules that determine how and when funds can be
              released. Selected at escrow creation and fixed for that escrow.
            </p>
            <ul>
              <li>
                <strong>Default:</strong> Sender-initiated release at any time
              </li>
              <li>
                <strong>Timed auto-release:</strong> Funds release automatically
                after a unix timestamp
              </li>
              <li>
                <strong>Timed auto-cancel:</strong> Escrow cancels and refunds
                sender after a unix timestamp
              </li>
              <li>
                <strong>Custom:</strong> Arbitrary release logic via
                IReleaseStrategy interface
              </li>
            </ul>
            <p>
              Release logic is separated from escrow storage to allow evolution
              without rewriting core contracts.
            </p>
          </div>

          <div className="component">
            <div className="component-header">
              <span className="component-tag">Module</span>
              <h4>Resolution modules</h4>
            </div>
            <p>
              Handle disagreements between parties. Define who can resolve, how
              decisions escalate, and how outcomes are enforced on-chain.
              Resolvers cannot touch funds — they only determine outcomes.
            </p>
            <ul>
              <li>
                <strong>v1 — DefaultResolutionModule:</strong> Single trusted
                resolver, governance-appointed. No bonds required.
              </li>
              <li>
                <strong>v2 — DecentralizedResolutionModule:</strong> Multi-level
                escalation (Standard → Senior → External). Appeal bonds.
              </li>
              <li>
                <strong>Custom:</strong> Per-escrow resolver address override
                via <code>customResolver</code> field
              </li>
            </ul>
            <p>
              Outcome set is fixed: <code>{'Release | Refund'}</code>. No other
              actions are available to any resolver.
            </p>
          </div>

          <div className="component">
            <div className="component-header">
              <span className="component-tag">Module · Optional</span>
              <h4>Yield modules</h4>
            </div>
            <p>
              Generate yield on escrowed funds while locked. Opt-in at creation.
              Principal remains governed by escrow logic — yield modules control
              only yield routing, not release.
            </p>
            <ul>
              <li>
                <strong>AaveYieldModule:</strong> Deposits idle funds into Aave
                lending pool
              </li>
              <li>Yield routed to sender, recipient, or protocol per preset</li>
              <li>
                External protocol risk is scoped to participating escrows only
              </li>
            </ul>
          </div>
        </section>

        {/* ── Architectural invariants ─────────────────────────────────────── */}
        <section className="content-block">
          <h3>Architectural invariants</h3>
          <p>
            These properties hold for every escrow, regardless of token,
            configuration, module selection, or governance state.
          </p>
          <div className="invariant-list">
            <div className="invariant">
              <div className="invariant-title">Non-custodial</div>
              <div className="invariant-desc">
                Funds are held by the contract. No operator, resolver, or module
                can redirect assets outside predefined state transitions.
              </div>
              <code className="invariant-notation">
                {'Custody ∉ {operator, resolver, module}'}
              </code>
            </div>
            <div className="invariant">
              <div className="invariant-title">Configuration-locked</div>
              <div className="invariant-desc">
                Release strategy, resolution module, and yield module are
                captured at escrow creation and cannot change for that escrow.
              </div>
              <code className="invariant-notation">
                {'escrow.config fixed at creation, ∀ t > created'}
              </code>
            </div>
            <div className="invariant">
              <div className="invariant-title">Per-escrow isolation</div>
              <div className="invariant-desc">
                Each escrow is independent. A failure, exploit, or dispute in
                one escrow cannot propagate to another. No pooled funds or
                shared risk across agreements.
              </div>
              <code className="invariant-notation">
                {'failure(escrow_n) ⊄ escrow_m  ∀ m ≠ n'}
              </code>
            </div>
            <div className="invariant">
              <div className="invariant-title">Forward-only upgrades</div>
              <div className="invariant-desc">
                Governance and module changes apply only to newly created
                escrows. Active agreements remain bound to their original
                configuration permanently.
              </div>
              <code className="invariant-notation">
                {'upgrade(t) → escrow.created < t only'}
              </code>
            </div>
            <div className="invariant">
              <div className="invariant-title">Bounded resolver outcomes</div>
              <div className="invariant-desc">
                A resolver has exactly one power: choosing among a fixed set of
                outcomes. No role can instruct the contract to take any other
                action.
              </div>
              <code className="invariant-notation">
                {'Outcome ∈ {RELEASE, REFUND}'}
              </code>
            </div>
            <div className="invariant">
              <div className="invariant-title">Bounded emergency controls</div>
              <div className="invariant-desc">
                The guardian role can pause high-risk operations for a maximum
                of 7 days per cycle, up to 3 cycles total. Pause auto-expires
                and cannot be extended indefinitely.
              </div>
              <code className="invariant-notation">
                {'pause_max = 7d, cycles_max = 3'}
              </code>
            </div>
          </div>
        </section>

        {/* ── Isolation principle ──────────────────────────────────────────── */}
        <section className="content-block">
          <h3>Isolation as a first principle</h3>
          <p>
            Sew is designed to minimize blast radius. Isolation is enforced at
            multiple levels simultaneously:
          </p>
          <div className="isolation-levels">
            <div className="isolation-level">
              <div className="level-marker">01</div>
              <div className="level-content">
                <strong>Between escrows</strong>
                <p>
                  Each agreement is an independent, self-contained unit. Funds
                  in escrow A are never at risk from activity in escrow B. There
                  is no shared collateral, shared yield pool, or shared dispute
                  state.
                </p>
              </div>
            </div>
            <div className="isolation-level">
              <div className="level-marker">02</div>
              <div className="level-content">
                <strong>Between modules</strong>
                <p>
                  Release logic, resolution logic, and yield generation are
                  separated into distinct modules. A bug in a yield module
                  cannot affect dispute resolution. A bug in a release strategy
                  cannot affect core escrow state.
                </p>
              </div>
            </div>
            <div className="isolation-level">
              <div className="level-marker">03</div>
              <div className="level-content">
                <strong>Between governance and settlement</strong>
                <p>
                  Governance can approve new modules for future escrows, but
                  cannot modify, cancel, or redirect active escrows. Settlement
                  logic for any active escrow is immutable once created.
                </p>
              </div>
            </div>
            <div className="isolation-level">
              <div className="level-marker">04</div>
              <div className="level-content">
                <strong>Between protocol versions</strong>
                <p>
                  Multiple generations of modules can coexist. v1 escrows and v2
                  escrows operate under their own original rules. There is no
                  migration, no forced upgrade, no shared execution path.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Module registry ──────────────────────────────────────────────── */}
        <section className="content-block">
          <h3>Module registry and defaults</h3>
          <p>
            The module registry maintains governance-approved defaults. When an
            escrow is created without specifying a module, it uses the current
            default — which is captured and frozen at creation time.
          </p>
          <div className="registry-table">
            <div className="registry-row registry-header">
              <span>Module type</span>
              <span>Interface</span>
              <span>Scope</span>
            </div>
            <div className="registry-row">
              <strong>Release Strategy</strong>
              <code>IReleaseStrategy</code>
              <span>Controls release authorization</span>
            </div>
            <div className="registry-row">
              <strong>Resolution Module</strong>
              <code>IResolutionModule</code>
              <span>Handles disputes and outcomes</span>
            </div>
            <div className="registry-row">
              <strong>Yield Module</strong>
              <code>IYieldModule</code>
              <span>Generates yield on idle funds</span>
            </div>
          </div>
          <p>
            Governance can add or replace defaults via the registry. This
            affects only escrows created after the change. Existing escrows
            continue to use their original module snapshot.
          </p>
        </section>

        {/* ── Governance surface ───────────────────────────────────────────── */}
        <section className="content-block">
          <h3>Governance surface</h3>
          <p>
            Governance power is explicitly scoped. Understanding what governance
            can and cannot do is central to assessing the trust model.
          </p>
          <div className="gov-cols">
            <div className="gov-col can">
              <h4>Governance can</h4>
              <ul>
                <li>Approve new modules for the registry</li>
                <li>Update default module selections for new escrows</li>
                <li>Adjust global protocol parameters (fees, limits)</li>
                <li>Appoint or replace the guardian role</li>
                <li>Appoint resolvers for the default resolution module</li>
                <li>
                  Queue and execute changes subject to timelock delay (48h
                  fast-lane, 7-day slow-lane)
                </li>
              </ul>
            </div>
            <div className="gov-col cannot">
              <h4>Governance cannot</h4>
              <ul>
                <li>Modify, cancel, or redirect any active escrow</li>
                <li>Change the module configuration of an existing escrow</li>
                <li>Override a resolver's outcome</li>
                <li>Pause the system indefinitely</li>
                <li>Move funds outside predefined release paths</li>
                <li>Retroactively change fee rates on existing escrows</li>
              </ul>
            </div>
          </div>
          <p>
            See <Link href="/protocol-limits">Protocol Limits</Link> for the
            full constraint specification, and{' '}
            <Link href="/emergency">Emergency Recovery</Link> for the guardian
            pause procedure.
          </p>
        </section>

        {/* ── Bottom navigation ────────────────────────────────────────────── */}
        <section className="nav-section">
          <div className="nav-links">
            <div className="nav-link-group">
              <span className="nav-group-label">Security</span>
              <Link href="/security">Security Model</Link>
              <Link href="/security#threat-model">Threat Model</Link>
              <Link href="/security#dispute-economics">Dispute Economics</Link>
              <Link href="/emergency">Emergency Recovery</Link>
            </div>
            <div className="nav-link-group">
              <span className="nav-group-label">Technical</span>
              <Link href="/modules">Modules</Link>
              <Link href="/dispute-resolution">Dispute Architecture</Link>
              <Link href="/protocol-limits">Protocol Limits</Link>
              <Link href="/contracts">Contracts</Link>
            </div>
            <div className="nav-link-group">
              <span className="nav-group-label">Context</span>
              <Link href="/how-it-works">How It Works</Link>
              <Link href="/developer">Build on Sew</Link>
              <Link href="/release-plan">Release Plan</Link>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        /* ── Header ─────────────────────────────────────────────────────────── */
        h1 {
          margin-bottom: 0.5rem;
        }
        .tagline {
          color: var(--accents-3);
          margin-bottom: 2rem;
        }
        .intro {
          font-size: 1.1rem;
          line-height: 1.7;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }
        .header-section {
          margin-bottom: 2rem;
          text-align: center;
          padding: 3rem 2rem 0;
        }

        /* ── Reviewer callout ───────────────────────────────────────────────── */
        .reviewer-callout {
          max-width: 800px;
          margin: 0 auto 1rem;
          padding: 1rem 1.5rem;
          background: #f8f9ff;
          border-left: 3px solid #2563eb;
          border-radius: 0 var(--radius) var(--radius) 0;
          font-size: 0.88rem;
          line-height: 1.6;
        }
        .reviewer-callout p {
          margin: 0;
          color: var(--accents-2);
        }
        .reviewer-callout a {
          color: #2563eb;
          font-weight: 500;
        }

        /* ── Shared block ───────────────────────────────────────────────────── */
        .content-block {
          margin: 4rem auto;
          max-width: 800px;
          padding: 0 2rem;
        }
        .content-block h3 {
          margin-bottom: 1rem;
        }
        .content-block > p {
          color: var(--accents-2);
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        /* ── System flow diagram ────────────────────────────────────────────── */
        .flow-diagram {
          margin: 2rem 0 1.5rem;
          padding: 2rem 1.5rem;
          border: 1.5px solid var(--accents-2);
          border-radius: var(--radius);
          background: #fafafa;
          font-size: 0.85rem;
        }
        .flow-top-row,
        .flow-bottom-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .flow-bottom-row {
          margin-top: 0;
        }
        .flow-mid-row {
          display: flex;
          align-items: center;
          padding: 0.35rem 0;
          gap: 0.75rem;
        }
        .flow-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.6rem 1rem;
          border: 1.5px solid var(--accents-2);
          border-radius: var(--radius);
          background: var(--bg);
          min-width: 90px;
          text-align: center;
        }
        .active-node {
          border-color: #2563eb;
        }
        .terminal {
          border-color: #059669;
        }
        .outcome-node {
          border-color: #059669;
        }
        .small-node {
          min-width: 70px;
          padding: 0.4rem 0.6rem;
        }
        .node-label {
          font-weight: 600;
          font-size: 0.82rem;
          color: var(--fg);
        }
        .node-state {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--accents-3);
          margin-top: 0.2rem;
        }
        .flow-arrow {
          color: var(--accents-3);
          font-size: 1.1rem;
          flex-shrink: 0;
        }
        .flow-spacer-wide {
          width: 90px;
          flex-shrink: 0;
        }
        .flow-down-arrow {
          font-size: 0.78rem;
          color: var(--accents-3);
          white-space: nowrap;
          padding-left: 0.5rem;
        }
        .flow-outcome-row {
          display: flex;
          justify-content: flex-end;
          margin-top: 0.5rem;
          padding-right: 0;
        }
        .outcome-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: #059669;
          background: #ecfdf5;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
        }
        .flow-refund-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 0.75rem;
          padding-top: 0.75rem;
          border-top: 1px dashed #e0e0e0;
        }
        .refund-branch {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          color: var(--accents-3);
        }
        .refund-label {
          white-space: nowrap;
        }

        /* ── State table ────────────────────────────────────────────────────── */
        .state-table {
          border: 1px solid #eaeaea;
          border-radius: var(--radius);
          overflow: hidden;
          margin-top: 1.5rem;
          font-size: 0.875rem;
        }
        .state-row {
          display: grid;
          grid-template-columns: 140px 1fr 80px;
          gap: 0;
          padding: 0.7rem 1rem;
          border-bottom: 1px solid #f0f0f0;
          align-items: center;
        }
        .state-row:last-child {
          border-bottom: none;
        }
        .state-header {
          background: #fafafa;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--accents-3);
        }
        .state-row code {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          background: #f4f4f4;
          padding: 0.15rem 0.4rem;
          border-radius: 3px;
          display: inline-block;
        }
        .badge {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          display: inline-block;
          text-align: center;
        }
        .badge.yes {
          background: #ecfdf5;
          color: #059669;
        }
        .badge.no {
          background: #f4f4f4;
          color: var(--accents-3);
        }

        /* ── Components ─────────────────────────────────────────────────────── */
        .component {
          margin-top: 1.5rem;
          padding: 1.5rem;
          background: #fafafa;
          border-radius: var(--radius);
          border: 1px solid #eaeaea;
        }
        .component-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }
        .component-header h4 {
          margin: 0;
          font-size: 1rem;
        }
        .component-tag {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background: #f0f0f0;
          color: var(--accents-3);
          padding: 0.2rem 0.5rem;
          border-radius: 3px;
          white-space: nowrap;
        }
        .component > p {
          color: var(--accents-2);
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0 0 0.75rem;
        }
        .component ul {
          margin: 0 0 0.75rem;
          padding-left: 1.25rem;
          font-size: 0.875rem;
          color: var(--accents-2);
        }
        .component li {
          margin-bottom: 0.3rem;
        }
        .component > p:last-child {
          margin-bottom: 0;
        }

        /* ── Architectural invariants ────────────────────────────────────────── */
        .invariant-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .invariant {
          padding: 1.25rem;
          border: 1.5px solid var(--accents-2);
          border-radius: var(--radius);
          background: var(--bg);
        }
        .invariant-title {
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 0.4rem;
        }
        .invariant-desc {
          font-size: 0.83rem;
          color: var(--accents-2);
          line-height: 1.55;
          margin-bottom: 0.75rem;
        }
        .invariant-notation {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--accents-3);
          background: #f4f4f4;
          padding: 0.25rem 0.5rem;
          border-radius: 3px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* ── Isolation levels ───────────────────────────────────────────────── */
        .isolation-levels {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }
        .isolation-level {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          padding: 1.25rem;
          background: #fafafa;
          border-radius: var(--radius);
          border: 1px solid #eaeaea;
        }
        .level-marker {
          font-size: 0.7rem;
          font-weight: 800;
          font-family: var(--font-mono);
          color: var(--accents-3);
          background: #f0f0f0;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .level-content {
          flex: 1;
        }
        .level-content strong {
          display: block;
          font-size: 0.9rem;
          margin-bottom: 0.35rem;
        }
        .level-content p {
          margin: 0;
          font-size: 0.855rem;
          color: var(--accents-2);
          line-height: 1.6;
        }

        /* ── Registry table ─────────────────────────────────────────────────── */
        .registry-table {
          border: 1px solid #eaeaea;
          border-radius: var(--radius);
          overflow: hidden;
          margin: 1.5rem 0;
          font-size: 0.875rem;
        }
        .registry-row {
          display: grid;
          grid-template-columns: 180px 200px 1fr;
          padding: 0.7rem 1rem;
          border-bottom: 1px solid #f0f0f0;
          align-items: center;
          gap: 1rem;
        }
        .registry-row:last-child {
          border-bottom: none;
        }
        .registry-header {
          background: #fafafa;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--accents-3);
        }
        .registry-row code {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          background: #f4f4f4;
          padding: 0.15rem 0.4rem;
          border-radius: 3px;
        }
        .registry-row span {
          color: var(--accents-2);
          font-size: 0.855rem;
        }

        /* ── Governance cols ────────────────────────────────────────────────── */
        .gov-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin: 1.5rem 0;
        }
        .gov-col {
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius);
          border: 1.5px solid #eaeaea;
        }
        .gov-col.can {
          border-color: #059669;
          background: #f0fdf4;
        }
        .gov-col.cannot {
          border-color: #dc2626;
          background: #fef2f2;
        }
        .gov-col h4 {
          margin: 0 0 0.85rem;
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          font-weight: 700;
        }
        .gov-col.can h4 {
          color: #059669;
        }
        .gov-col.cannot h4 {
          color: #dc2626;
        }
        .gov-col ul {
          margin: 0;
          padding-left: 1.15rem;
          font-size: 0.855rem;
          color: var(--accents-2);
          line-height: 1.6;
        }
        .gov-col li {
          margin-bottom: 0.35rem;
        }
        .content-block > p:last-child {
          font-size: 0.88rem;
          color: var(--accents-3);
        }
        .content-block > p:last-child a {
          color: #0070f3;
          font-weight: 500;
        }

        /* ── Bottom nav ─────────────────────────────────────────────────────── */
        .nav-section {
          max-width: 800px;
          margin: 4rem auto;
          padding: 2rem 2rem;
          border-top: 1.5px solid var(--accents-2);
        }
        .nav-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .nav-link-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .nav-group-label {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accents-3);
          margin-bottom: 0.35rem;
        }
        .nav-link-group a {
          font-size: 0.875rem;
          color: var(--fg);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.15s;
        }
        .nav-link-group a:hover {
          color: #0070f3;
        }

        /* ── Responsive ─────────────────────────────────────────────────────── */
        @media (max-width: 700px) {
          .invariant-list,
          .gov-cols {
            grid-template-columns: 1fr;
          }
          .registry-row {
            grid-template-columns: 1fr 1fr;
          }
          .registry-row span {
            display: none;
          }
          .nav-links {
            grid-template-columns: 1fr 1fr;
          }
          .flow-top-row,
          .flow-bottom-row {
            flex-wrap: wrap;
          }
          .content-block {
            padding: 0 1rem;
          }
          .state-row {
            grid-template-columns: 120px 1fr 60px;
          }
        }
      `}</style>
    </>
  )
}
