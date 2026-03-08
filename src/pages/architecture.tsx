import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Architecture() {
  return (
    <>
      <Header titlePre="Architecture" />
      <div className={sharedStyles.layout}>
        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section
          className="hero"
          style={{
            backgroundImage: "url('/images/stitch-texture.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          }}
        >
          <div className="hero-inner">
            <div className="hero-text">
              <span className="hero-eyebrow">System Design</span>
              <h1>Architecture</h1>
              <h2 className="tagline">
                System structure and structural invariants
              </h2>
              <p className="description">
                A protected transfer is an ERC-20 transfer routed through a
                deterministic escrow with predefined release and dispute
                resolution paths.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. REVIEWER CALLOUT ─────────────────────────────────────────── */}
        <section className="content-section">
          <div className="reviewer-callout">
            <p>
              <strong>For auditors and security reviewers:</strong> This page
              covers system structure. For threat analysis, see the{' '}
              <Link href="/security">Security Model</Link>.
            </p>
          </div>
        </section>

        {/* ── 3. SYSTEM FLOW ──────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>System flow</h3>
            <p>
              A transfer moves through well-defined states. Terminal states are
              irreversible.
            </p>

            <div className="state-table stitched">
              <div className="state-row state-header">
                <span>State</span>
                <span>Meaning</span>
                <span>Terminal</span>
              </div>
              <div className="state-row">
                <code>PENDING</code>
                <span>Created and funded, awaiting action</span>
                <span className="badge no">No</span>
              </div>
              <div className="state-row">
                <code>DISPUTED</code>
                <span>Dispute raised, awaiting resolver</span>
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
                <code>RESOLVED</code>
                <span>Resolver outcome enforced onchain</span>
                <span className="badge yes">Yes</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. COMPONENTS ───────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>Core components</h3>
          <div className="guarantees-grid">
            <div className="guarantee-card fabric-panel">
              <h4>Escrow layer</h4>
              <p>
                Core vault holding funds under rule-bound conditions. Enforces
                all state transitions deterministically.
              </p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>Release strategies</h4>
              <p>
                Pluggable modules determining when funds leave escrow (Sender,
                Time-based, or Conditional).
              </p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>Resolution modules</h4>
              <p>
                Handle disagreements. Resolvers cannot touch funds—they only
                determine binary distribution outcomes.
              </p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>Yield modules</h4>
              <p>
                Optional integration for generating yield on locked principal
                (e.g. Aave V3). Opt-in at creation.
              </p>
            </div>
          </div>
        </section>

        {/* ── 5. INVARIANTS ───────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Architectural invariants</h3>
            <div className="principles-grid">
              <div className="principle seam-accent">
                <h4>Non-custodial</h4>
                <p>
                  Funds held by contract. No operator or module can redirect
                  assets outside defined transitions.
                </p>
                <code className="invariant-notation">
                  Custody ∉ {'{operator, resolver, module}'}
                </code>
              </div>
              <div className="principle seam-accent">
                <h4>Isolated</h4>
                <p>
                  Each escrow is independent. Failure in one cannot propagate to
                  another. No shared risk.
                </p>
                <code className="invariant-notation">
                  failure(escrow_n) ⊄ escrow_m ∀ m ≠ n
                </code>
              </div>
              <div className="principle seam-accent">
                <h4>Forward-only</h4>
                <p>
                  Upgrades apply only to new escrows. Active agreements remain
                  bound to original rules.
                </p>
                <code className="invariant-notation">
                  upgrade(t) → escrow.created &lt; t only
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. ISOLATION ────────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>Isolation as a first principle</h3>
          <div className="isolation-levels">
            <div className="isolation-level fabric-panel">
              <div className="level-marker">01</div>
              <div className="level-content">
                <strong>Between escrows</strong>
                <p>
                  Self-contained units. No shared collateral, shared yield pool,
                  or shared dispute state.
                </p>
              </div>
            </div>
            <div className="isolation-level fabric-panel">
              <div className="level-marker">02</div>
              <div className="level-content">
                <strong>Between modules</strong>
                <p>
                  Separated logic components. A bug in yield cannot affect
                  dispute resolution or core state.
                </p>
              </div>
            </div>
            <div className="isolation-level fabric-panel">
              <div className="level-marker">03</div>
              <div className="level-content">
                <strong>Between governance and settlement</strong>
                <p>
                  Governance cannot modify active escrows. Settlement logic is
                  immutable once created.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. FINAL CTA ────────────────────────────────────────────────── */}
        <section
          className="section-breakout cta-breakout"
          style={{
            backgroundImage: "url('/images/ancient-sewing-machine.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="breakout-inner cta-inner">
            <h3>Start building today.</h3>
            <p>
              Explore the contract interfaces, state machines, and integration
              patterns.
            </p>
            <div className="cta-btns">
              <Link href="/developer" className="cta-btn primary">
                Developer Guide
              </Link>
              <Link href="/contracts" className="cta-btn">
                Contracts
              </Link>
            </div>
          </div>
        </section>

        <section className="page-meta">
          <p>Last updated: February 2026</p>
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
          background: rgba(122, 221, 220, 0.08);
          border-left: 3px solid #7adddc;
          border-radius: 0 var(--radius) var(--radius) 0;
          font-size: 0.88rem;
          line-height: 1.6;
        }
        .reviewer-callout p {
          margin: 0;
          color: var(--accents-2);
        }
        .reviewer-callout a {
          color: #7adddc;
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
          background: #1b2a2e;
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
          border-color: #7adddc;
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
          background: rgba(108, 229, 177, 0.08);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
        }
        .flow-refund-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 0.75rem;
          padding-top: 0.75rem;
          border-top: 1px dashed #2a3a3e;
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
          border: 1px solid #2a3a3e;
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
          border-bottom: 1px solid #2a3a3e;
          align-items: center;
        }
        .state-row:last-child {
          border-bottom: none;
        }
        .state-header {
          background: #1b2a2e;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--accents-3);
        }
        .state-row code {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          background: #1b2a2e;
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
          background: rgba(108, 229, 177, 0.08);
          color: #059669;
        }
        .badge.no {
          background: #1b2a2e;
          color: var(--accents-3);
        }

        /* ── Components ─────────────────────────────────────────────────────── */
        .component {
          margin-top: 1.5rem;
          padding: 1.5rem;
          background: #1b2a2e;
          border-radius: var(--radius);
          border: 1px solid #2a3a3e;
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
          background: #1b2a2e;
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
          background: #1b2a2e;
          border-radius: var(--radius);
          border: 1px solid #2a3a3e;
        }
        .level-marker {
          font-size: 0.7rem;
          font-weight: 800;
          font-family: var(--font-mono);
          color: var(--accents-3);
          background: #1b2a2e;
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
          border: 1px solid #2a3a3e;
          border-radius: var(--radius);
          overflow: hidden;
          margin: 1.5rem 0;
          font-size: 0.875rem;
        }
        .registry-row {
          display: grid;
          grid-template-columns: 180px 200px 1fr;
          padding: 0.7rem 1rem;
          border-bottom: 1px solid #2a3a3e;
          align-items: center;
          gap: 1rem;
        }
        .registry-row:last-child {
          border-bottom: none;
        }
        .registry-header {
          background: #1b2a2e;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--accents-3);
        }
        .registry-row code {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          background: #1b2a2e;
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
          border: 1.5px solid #2a3a3e;
        }
        .gov-col.can {
          border-color: #059669;
          background: rgba(108, 229, 177, 0.08);
        }
        .gov-col.cannot {
          border-color: #dc2626;
          background: rgba(255, 111, 97, 0.08);
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
          color: #7adddc;
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
          color: #7adddc;
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
