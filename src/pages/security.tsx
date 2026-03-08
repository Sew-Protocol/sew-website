import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Security() {
  return (
    <>
      <Header titlePre="Security" />
      <div>
        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section
          className="hero"
          style={{
            backgroundImage: "url('/images/needle-closeup.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 60%',
          }}
        >
          <div className="hero-inner">
            <div className="hero-text">
              <span className="hero-eyebrow">Security First</span>
              <h1>Security Model</h1>
              <h2 className="tagline">
                Primary reference for auditors and security teams
              </h2>
              <p className="description">
                Sew Protocol is designed as a containment layer for protected
                transfers on Ethereum. We focus on narrowing scope, isolating
                failures, and ensuring funds always follow deterministic paths.
              </p>
            </div>
          </div>
        </section>

        {/* ── In-page navigation ───────────────────────────────────────────── */}
        <nav className="page-nav">
          <span className="page-nav-label">Jump to:</span>
          <a href="#threat-model">Threat Model</a>
          <span className="page-nav-sep">·</span>
          <a href="#dispute-economics">Dispute Economics</a>
          <span className="page-nav-sep">·</span>
          <a href="#upgrade-semantics">Upgrade Semantics</a>
          <span className="page-nav-sep">·</span>
          <a href="#emergency-recovery">Emergency Recovery</a>
          <span className="page-nav-sep">·</span>
          <a href="#isolation">Isolation Model</a>
        </nav>

        {/* ── 2. PHILOSOPHY ───────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Security philosophy</h3>
            <p>
              Ethereum transactions are irreversible. Sew approaches security
              through three core principles:
            </p>
            <div className="guarantees-grid guarantees-grid--wide">
              <div className="guarantee-card fabric-panel">
                <h4>Containment</h4>
                <p>
                  Failures may occur. The protocol is designed to limit their
                  impact to the affected escrow.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Determinism</h4>
                <p>
                  Funds move according to predefined rules, not discretionary
                  human judgment.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Isolation</h4>
                <p>
                  Each escrow is treated as an independent agreement with no
                  shared state risk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. PROPERTIES ───────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>Core security properties</h3>
          <div className="property-grid">
            <div className="property fabric-panel seam-accent">
              <h4>🤝 Non-custodial</h4>
              <p>
                Funds are held by smart contracts, not by an operator or
                intermediary.
              </p>
              <code className="property-notation">
                Custody ∉ {'{operator, resolver, module}'}
              </code>
            </div>
            <div className="property fabric-panel seam-accent">
              <h4>⚙️ Deterministic</h4>
              <p>
                Every escrow defines its rules at creation. Settlement follows
                predefined state transitions.
              </p>
              <code className="property-notation">
                state ∈ {'{PENDING → RELEASED | REFUNDED | RESOLVED}'}
              </code>
            </div>
            <div className="property fabric-panel seam-accent">
              <h4>📦 Isolated</h4>
              <p>
                Each protected transfer is independent. If one fails, others are
                unaffected.
              </p>
              <code className="property-notation">
                failure(escrow_n) ⊄ escrow_m ∀ m ≠ n
              </code>
            </div>
            <div className="property fabric-panel seam-accent">
              <h4>⏩ Forward-only</h4>
              <p>
                Upgrades do not alter existing agreements. Historical agreements
                remain stable.
              </p>
              <code className="property-notation">
                upgrade(t) → escrow.created &lt; t only
              </code>
            </div>
          </div>
        </section>

        {/* ── 4. THREAT MODEL ─────────────────────────────────────────────── */}
        <section id="threat-model" className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Threat model</h3>
            <p className="description" style={{ maxWidth: 'none' }}>
              Sew is designed to operate in an adversarial environment. Each
              threat category includes the attack surface and structural
              mitigation.
            </p>
            <div className="threat-grid">
              <div className="threat-card fabric-panel stitched">
                <div className="threat-header">
                  <span className="threat-tag">T1</span>
                  <h4>👤 User error</h4>
                </div>
                <p className="threat-desc">
                  Sending to the wrong address, premature release, or
                  misunderstanding escrow state.
                </p>
                <div className="threat-mitigation">
                  <span className="mitigation-label">📍 Mitigation</span>
                  <p>
                    Sender can cancel while PENDING. Dispute pathway available
                    if uncooperative.
                  </p>
                </div>
              </div>
              <div className="threat-card fabric-panel stitched">
                <div className="threat-header">
                  <span className="threat-tag">T2</span>
                  <h4>🎭 Counterparty risk</h4>
                </div>
                <p className="threat-desc">
                  Fraudulent participants or failure to deliver goods/services.
                </p>
                <div className="threat-mitigation">
                  <span className="mitigation-label">📍 Mitigation</span>
                  <p>
                    Funds held in escrow until conditions are met. Neutral
                    resolver decides outcome.
                  </p>
                </div>
              </div>
              <div className="threat-card fabric-panel stitched">
                <div className="threat-header">
                  <span className="threat-tag">T3</span>
                  <h4>🐛 Smart contract risk</h4>
                </div>
                <p className="threat-desc">
                  Bugs in integration modules, yield strategies, or third-party
                  contracts.
                </p>
                <div className="threat-mitigation">
                  <span className="mitigation-label">📍 Mitigation</span>
                  <p>
                    Per-escrow isolation limits blast radius. Module boundaries
                    prevent propagation.
                  </p>
                </div>
              </div>
              <div className="threat-card fabric-panel stitched">
                <div className="threat-header">
                  <span className="threat-tag">T4</span>
                  <h4>🏛️ Governance capture</h4>
                </div>
                <p className="threat-desc">
                  Malicious proposals or compromised admin keys.
                </p>
                <div className="threat-mitigation">
                  <span className="mitigation-label">📍 Mitigation</span>
                  <p>
                    Governance cannot touch active escrows. Changes are
                    forward-only with timelocks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. ISOLATION ────────────────────────────────────────────────── */}
        <section id="isolation" className="content-section">
          <h3>Isolation model</h3>
          <p>
            Isolation is the primary containment mechanism, operating at three
            levels simultaneously.
          </p>
          <div className="principles-grid">
            <div className="principle seam-accent">
              <h4>Between escrows</h4>
              <p>
                Independent agreements. No shared funds or shared dispute state.
                Failure in one cannot propagate.
              </p>
            </div>
            <div className="principle seam-accent">
              <h4>Between modules</h4>
              <p>
                Release, resolution, and yield logic are isolated. A bug in
                yield cannot affect resolution.
              </p>
            </div>
          </div>
        </section>

        {/* ── 6. DISPUTE ECONOMICS ────────────────────────────────────────── */}
        <section id="dispute-economics" className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Economic incentives</h3>
            <p>
              Resolvers are incentivized to behave honestly through economic
              mechanisms: bonds, appeals, and slashing.
            </p>
            <div className="guarantees-grid">
              <div className="guarantee-card fabric-panel">
                <h4>Resolver bonds</h4>
                <p>
                  Resolvers post collateral when deciding. If overturned on
                  appeal, they lose the bond.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Appeal escalation</h4>
                <p>
                  Disputed decisions escalate to higher-tier resolvers with
                  larger bonds and senior review.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. GOVERNANCE ───────────────────────────────────────────────── */}
        <section id="upgrade-semantics" className="content-section">
          <h3>Governance and upgrades</h3>
          <p>
            Governance can approve new modules, but <strong>cannot</strong>{' '}
            rewrite existing agreements. Each escrow is locked to its
            configuration at creation.
          </p>
          <div
            className="lifecycle-step fabric-panel stitched"
            style={{ marginTop: '2rem' }}
          >
            <h4>Emergency response</h4>
            <p>
              A guardian role can pause high-risk operations (dispute
              initiation) for up to 7 days. Settlement operations remain
              available. Pause automatically expires.
            </p>
          </div>
        </section>

        {/* ── 8. FINAL CTA ────────────────────────────────────────────────── */}
        <section
          className="section-breakout cta-breakout"
          style={{
            backgroundImage: "url('/images/needle-threads.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
          }}
        >
          <div className="breakout-inner cta-inner">
            <h3>Review the technical architecture.</h3>
            <p>
              Deep dive into the contract structure, state machines, and modular
              integration patterns.
            </p>
            <div className="cta-btns">
              <Link href="/architecture" className="cta-btn primary">
                Architecture
              </Link>
              <Link href="/developer" className="cta-btn">
                Developer Guide
              </Link>
            </div>
          </div>
        </section>

        <section className="page-meta">
          <p>Last updated: February 2026</p>
          <p>
            <Link href="/docs/security">
              View full security documentation →
            </Link>
          </p>
        </section>
      </div>

      <style jsx>{`
        .tagline {
          font-size: 1.15rem;
          font-weight: 400;
          color: var(--accents-2);
          margin: 0 0 1.25rem;
          line-height: 1.5;
        }
        .description {
          font-size: 0.92rem;
          color: var(--accents-3);
          margin: 0 0 1.5rem;
          line-height: 1.75;
          max-width: 480px;
        }
        .content-section {
          margin: 0 auto;
          max-width: 800px;
          padding: 4rem 2rem;
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
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }
        .page-meta {
          text-align: center;
          padding: 3rem 2rem;
          color: var(--accents-3);
          font-size: 0.85rem;
        }
        .page-meta p {
          margin: 0.5rem 0;
        }
        .page-meta a {
          color: var(--primary);
        }

        /* ── In-page nav ── */
        .page-nav {
          max-width: 800px;
          margin: 0 auto 1rem;
          padding: 0.75rem 2rem;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          border-bottom: 1px solid rgba(122, 221, 220, 0.1);
          font-size: 0.82rem;
        }
        .page-nav-label {
          font-weight: 700;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accents-3);
          margin-right: 0.25rem;
        }
        .page-nav a {
          color: var(--accents-2);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.15s;
        }
        .page-nav a:hover {
          color: var(--primary);
        }
        .page-nav-sep {
          color: var(--accents-2);
          opacity: 0.4;
        }

        /* ── Threat model cards ── */
        .threat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-top: 1.75rem;
        }
        .threat-header {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 0.5rem;
        }
        .threat-tag {
          font-size: 0.65rem;
          font-weight: 800;
          font-family: var(--font-mono);
          background: rgba(122, 221, 220, 0.1);
          color: var(--primary);
          padding: 0.15rem 0.45rem;
          border-radius: 3px;
        }
        .threat-header h4 {
          margin: 0;
          font-size: 0.95rem;
        }
        .threat-desc {
          font-size: 0.85rem;
          color: var(--accents-2);
          line-height: 1.55;
          margin: 0 0 0.75rem;
        }
        .threat-mitigation {
          background: rgba(122, 221, 220, 0.05);
          border-left: 2.5px solid var(--primary);
          padding: 0.6rem 0.85rem;
          border-radius: 0 4px 4px 0;
        }
        .mitigation-label {
          display: block;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--primary);
          margin-bottom: 0.3rem;
        }
        .threat-mitigation p {
          margin: 0;
          font-size: 0.82rem;
          line-height: 1.55;
        }

        /* ── Shared Grids ── */
        .guarantees-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-top: 1.75rem;
        }
        .guarantees-grid--wide {
          grid-template-columns: repeat(3, 1fr);
        }
        .guarantee-card {
          padding: 1.25rem 1.5rem;
        }
        .guarantee-card h4 {
          margin: 0 0 0.4rem 0;
          font-size: 0.95rem;
          font-weight: 700;
        }
        .guarantee-card p {
          margin: 0;
          font-size: 0.85rem;
          color: var(--accents-3);
          line-height: 1.5;
        }
        .principles-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 2rem;
        }
        .principle {
          padding: 1.5rem;
        }
        .cta-inner {
          text-align: center;
        }
        .cta-inner h3 {
          font-size: 2.2rem;
          font-weight: 900;
          margin: 0 0 0.75rem 0;
          letter-spacing: -0.04em;
          color: #fff;
        }
        .cta-inner p {
          font-size: 1rem;
          color: var(--accents-2);
          max-width: 500px;
          margin: 0 auto 2.5rem;
          line-height: 1.65;
        }

        @media (max-width: 900px) {
          .guarantees-grid--wide {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 700px) {
          .guarantees-grid,
          .guarantees-grid--wide,
          .property-grid,
          .threat-grid,
          .principles-grid {
            grid-template-columns: 1fr;
          }
          .cta-inner h3 {
            font-size: 1.65rem;
          }
        }
      `}</style>
    </>
  )
}
