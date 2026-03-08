import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function HowItWorks() {
  return (
    <>
      <Header titlePre="How It Works" />
      <div>
        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section
          className="hero"
          style={{
            backgroundImage: "url('/images/abstract-texture.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="hero-inner">
            <div className="hero-text">
              <span className="hero-eyebrow">Protocol Mechanics</span>
              <h1>How It Works</h1>
              <h2 className="tagline">
                Escrow lifecycle, state transitions, and dispute mechanics
              </h2>
              <p className="description">
                Sew Protocol is a security layer for transfers on Base (Ethereum
                L2). Instead of transferring funds directly, transfers can be
                held in escrow until conditions are met.
              </p>
              <p className="glossary-note">
                <small>
                  <strong>Glossary:</strong> A protected transfer is an ERC-20
                  transfer routed through escrow. "Transfer" refers to the
                  onchain token movement; "payment" refers to the user intent.
                </small>
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. ESCROW MECHANICS ─────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Protocol mechanics</h3>
            <p>
              A standard token transfer is immediate and final. A protected
              transfer introduces a deterministic delay and rule-bound
              settlement conditions.
            </p>
            <div className="guarantees-grid guarantees-grid--wide">
              <div className="guarantee-card fabric-panel">
                <h4>Held in escrow</h4>
                <p>
                  Funds are held by the core Vault contract, not sent directly
                  to the recipient.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Rules upfront</h4>
                <p>
                  Release conditions and resolution paths are defined at
                  creation and cannot change.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Snapshot integrity</h4>
                <p>
                  Each agreement is permanently bound to the module
                  implementations active at creation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. STATE MACHINE ────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>The State Machine</h3>
          <p>
            Each protected transfer moves through a strictly defined lifecycle.
            Terminal states are irreversible.
          </p>

          <div className="state-table stitched">
            <div className="state-row state-header">
              <span>State</span>
              <span>Meaning</span>
              <span>Terminal</span>
            </div>
            <div className="state-row">
              <code>PENDING</code>
              <span>Active agreement, awaiting action</span>
              <span className="badge no">No</span>
            </div>
            <div className="state-row">
              <code>DISPUTED</code>
              <span>Dispute raised, awaiting resolution</span>
              <span className="badge no">No</span>
            </div>
            <div className="state-row">
              <code>RELEASED</code>
              <span>Funds sent to recipient (Success)</span>
              <span className="badge yes">Yes</span>
            </div>
            <div className="state-row">
              <code>REFUNDED</code>
              <span>Funds returned to sender (Reversion)</span>
              <span className="badge yes">Yes</span>
            </div>
            <div className="state-row">
              <code>RESOLVED</code>
              <span>Outcome enforced via resolution module</span>
              <span className="badge yes">Yes</span>
            </div>
          </div>
        </section>

        {/* ── 4. LIFECYCLE ────────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>Lifecycle sequence</h3>

          <div className="sequence-diagram fabric-panel">
            <div className="sequence-step">
              <div className="step-node sender">Sender</div>
              <div className="step-arrow">Create Escrow (Token + Amount)</div>
              <div className="step-node vault">Sew Vault</div>
            </div>
            <div className="sequence-step active">
              <div className="step-node vault highlight">Held in Escrow</div>
              <div className="step-label">
                Locked: Waiting for Release or Dispute
              </div>
            </div>
            <div className="sequence-step">
              <div className="step-node vault">Sew Vault</div>
              <div className="step-arrow">Settlement (Finality)</div>
              <div className="step-node recipient">Recipient</div>
            </div>
          </div>

          <div className="lifecycle-grid">
            <div className="lifecycle-step fabric-panel seam-accent">
              <h4>1) Creation</h4>
              <p>
                A user initiates a transfer. Parameters (amount, recipient,
                timeout, resolver) are snapshotted into the vault state.
              </p>
            </div>

            <div className="lifecycle-step fabric-panel seam-accent">
              <h4>2) Coordination</h4>
              <p>
                Funds remain locked in the Vault. The agreement provides a
                neutral phase for fulfillment of obligations.
              </p>
            </div>

            <div className="lifecycle-step fabric-panel seam-accent">
              <h4>3) Settlement</h4>
              <p>
                Settlement occurs via manual release, automated triggers, or a
                bilateral cancellation.
              </p>
            </div>

            <div className="lifecycle-step fabric-panel seam-accent">
              <h4>4) Recourse</h4>
              <p>
                If parties disagree, a dispute triggers the resolution module to
                determine the final outcome.
              </p>
            </div>
          </div>
        </section>

        {/* ── 5. ROLES ────────────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Roles & permissions</h3>
            <div className="guarantees-grid">
              <div className="guarantee-card fabric-panel">
                <h4>Sender</h4>
                <p>
                  Creates agreement and funds escrow. Can release or dispute.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Recipient</h4>
                <p>
                  Provides goods/services. Can release (if configured) or
                  dispute.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Resolver</h4>
                <p>
                  Fact-finding entity. Outcomes are bounded to Release or
                  Refund.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Guardian</h4>
                <p>
                  Safety role. Can pause operations during technical
                  emergencies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. FINAL CTA breakout ───────────────────────────────────────── */}
        <section
          className="section-breakout cta-breakout"
          style={{
            backgroundImage: "url('/images/needle-closeup.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="breakout-inner cta-inner">
            <h3>Understand the security model.</h3>
            <p>
              Explore the invariants, threat model, and recovery procedures that
              protect Sew Protocol.
            </p>
            <div className="cta-btns">
              <Link href="/security" className="cta-btn primary">
                Security Model
              </Link>
              <Link href="/use-cases" className="cta-btn">
                Use Cases
              </Link>
            </div>
          </div>
        </section>

        <section className="page-meta">
          <p>Last updated: February 2026</p>
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
        .glossary-note {
          color: var(--accents-3);
          font-size: 0.8rem;
          line-height: 1.6;
          max-width: 480px;
        }
        .sequence-diagram {
          margin: 2rem 0 4rem;
          padding: 2.5rem;
          background: rgba(122, 221, 220, 0.02);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .sequence-step {
          display: grid;
          grid-template-columns: 100px 1fr 100px;
          align-items: center;
          gap: 1rem;
        }
        .step-node {
          padding: 0.5rem;
          border-radius: 4px;
          border: 1px solid var(--accents-2);
          text-align: center;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .step-node.vault {
          border-color: var(--primary);
          color: var(--primary);
        }
        .step-node.highlight {
          background: var(--primary);
          color: #000;
        }
        .step-arrow {
          height: 2px;
          background: var(--accents-2);
          position: relative;
          font-size: 0.75rem;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 0.25rem;
          color: var(--accents-3);
        }
        .step-arrow::after {
          content: '→';
          position: absolute;
          right: -5px;
          top: -9px;
          font-size: 1.2rem;
          color: var(--accents-2);
        }
        .sequence-step.active {
          grid-template-columns: 1fr;
          justify-items: center;
          gap: 0.5rem;
        }
        .step-label {
          font-size: 0.75rem;
          color: var(--accents-3);
          font-style: italic;
        }
        .content-section {
          margin: 0 auto;
          max-width: 800px;
          padding: 4rem 2rem;
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

        .key-concept {
          font-style: italic;
          color: var(--accents-2);
          font-size: 0.9rem;
        }
        .lifecycle-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-top: 2rem;
        }
        .lifecycle-step {
          padding: 1.5rem;
        }
        .lifecycle-step h4 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          color: var(--primary);
        }
        .learn-more a {
          color: var(--primary);
          font-weight: 500;
        }
        .disclaimer-block {
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.4);
          border-radius: 8px;
          padding: 1rem 1.5rem;
          margin: 1.5rem 0;
          font-size: 0.85rem;
        }
        .disclaimer-block p {
          margin: 0;
          color: #ffd166;
        }
        .page-meta {
          margin: 4rem auto;
          max-width: 800px;
          padding: 0 2rem;
          font-size: 0.85rem;
          color: var(--accents-3);
          text-align: center;
        }

        /* ── Grids from Index ── */
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

        /* ── Breakout CTA Specifics ── */
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
          .lifecycle-grid,
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
