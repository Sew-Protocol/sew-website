import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Architecture() {
  return (
    <>
      <Header titlePre="Architecture" />
      <div className={sharedStyles['grid-texture']}>
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
                System structure and formal security invariants
              </h2>
              <p className="description">
                The Sew Protocol architecture is centered on a non-custodial
                Vault and a registry of swappable, immutable logic modules.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. REVIEWER CALLOUT ─────────────────────────────────────────── */}
        <section className="content-section">
          <div className="reviewer-callout">
            <p>
              <strong>Technical focus:</strong> This page covers components and
              invariants. For the transactional lifecycle, see{' '}
              <Link href="/how-it-works">How It Works</Link>.
            </p>
          </div>
        </section>

        {/* ── 3. CORE PRINCIPLES ────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Architectural Job</h3>
            <p>
              The primary role of the Sew architecture is{' '}
              <strong>containment</strong>. By strictly isolating agreement
              state and snapshotted logic, the protocol ensures that failures
              remain localized and governance cannot retroactively alter
              finalized terms.
            </p>
          </div>
        </section>

        {/* ── 4. COMPONENTS ───────────────────────────────────────────────── */}
        <section id="the-module-system" className="content-section">
          <h3>The module system</h3>
          <p>
            The protocol <strong>snapshots</strong> active module addresses at
            creation, ensuring that historical agreements are never
            retroactively affected by governance updates.
          </p>
          <div className="guarantees-grid guarantees-grid--wide">
            <div className="guarantee-card fabric-panel">
              <h4>Core Vault</h4>
              <p>
                Holds funds and manages the global state machine. Enforces
                transitions between Pending, Disputed, and Settled.
              </p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>Module Registry</h4>
              <p>
                The canonical set of approved logic implementations. Swappable
                by governance, but snapshotted by escrows.
              </p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>Pluggable Logic</h4>
              <p>
                Namespaced implementations for Release, Resolution, and Yield.
                Logic is immutable and isolated per escrow.
              </p>
            </div>
          </div>
        </section>

        {/* ── 5. SECURITY INVARIANTS ────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Security invariants</h3>
            <p>
              Formal properties enforced at the contract layer to ensure
              predictable coordination.
            </p>
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
                  Each escrow is independent. State is namespaced by
                  <code>(vault, workflowId)</code> to prevent failure
                  propagation.
                </p>
                <code className="invariant-notation">
                  failure(escrow_n) ⊄ escrow_m ∀ m ≠ n
                </code>
              </div>
              <div className="principle seam-accent">
                <h4>Forward-only</h4>
                <p>
                  Upgrades apply only to new escrows. Active agreements remain
                  locked to their snapshotted modules.
                </p>
                <code className="invariant-notation">
                  upgrade(t) → escrow.created &lt; t only
                </code>
              </div>
              <div className="principle seam-accent">
                <h4>Balance Integrity</h4>
                <p>
                  Modules must return all funds or revert. Partial returns are
                  forbidden to ensure correct accounting.
                </p>
                <code className="invariant-notation">
                  balance_after ≥ balance_before
                </code>
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

        /* ── Shared section ─────────────────────────────────────────────────── */
        .content-section {
          margin: 0 auto;
          max-width: 1000px;
          padding: 4rem 2rem;
        }
        .content-section h3 {
          margin-bottom: 1rem;
        }
        .content-section > p {
          color: var(--accents-2);
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        .content-section > p:last-child {
          margin-bottom: 0;
        }
        .content-section > p:last-child a {
          color: #7adddc;
          text-decoration: underline;
        }

        /* ── Property grid ──────────────────────────────────────────────────── */
        .guarantees-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 1.75rem;
        }
        .guarantees-grid--wide {
          grid-template-columns: repeat(3, 1fr);
        }
        .guarantee-card {
          padding: 1.5rem;
        }
        .guarantee-card h4 {
          margin: 0 0 0.5rem 0;
          font-size: 1rem;
          font-weight: 700;
        }
        .guarantee-card p {
          margin: 0;
          font-size: 0.85rem;
          color: var(--accents-3);
          line-height: 1.5;
        }
        .property-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .property {
          padding: 1.5rem;
        }
        .property h4 {
          margin-top: 0;
          margin-bottom: 0.5rem;
        }
        .property p {
          margin: 0;
          font-size: 0.9rem;
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

        @media (max-width: 900px) {
          .guarantees-grid--wide {
            grid-template-columns: 1fr 1fr;
          }
        }
        /* ── Responsive ─────────────────────────────────────────────────────── */
        @media (max-width: 700px) {
          .guarantees-grid,
          .guarantees-grid--wide,
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
