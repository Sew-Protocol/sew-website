import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function HowItWorks() {
  const useCases = [
    {
      title: 'Peer-to-Peer Goods',
      icon: '📦',
      description: 'Buying or selling physical items directly',
      pattern:
        'Buyer creates escrow → Seller ships → Buyer confirms → Auto/timed release',
    },
    {
      title: 'Freelance Services',
      icon: '💼',
      description: 'Contracting developers, designers, writers',
      pattern:
        'Milestone escrow created → Work submitted → Review → Release or dispute',
    },
    {
      title: 'Rental Deposits',
      icon: '🏠',
      description: 'Security deposits for rentals, equipment',
      pattern:
        'Deposit escrow → Rental period → Inspection → Release to host or tenant',
    },
    {
      title: 'Marketplace Escrow',
      icon: '🛒',
      description: 'Multi-vendor marketplaces with buyer protection',
      pattern:
        'Buyer pays escrow → Vendor fulfills → Buyer approves → Release to vendor',
    },
  ]

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
                Escrow lifecycle, architecture, and resolution
              </h2>
              <p className="description">
                Sew Protocol is a security layer for transfers. Instead of
                transferring funds directly, transfers are routed through a
                non-custodial Vault governed by immutable logic modules.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. LIFECYCLE ────────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>The Escrow Lifecycle</h3>
          <p>
            Each protected transfer moves through a strictly defined lifecycle.
            Rules are locked at creation and enforced by the core Vault.
          </p>
          <div className="lifecycle-grid">
            <div className="lifecycle-step fabric-panel seam-accent">
              <h4>1) Creation</h4>
              <p>
                Sender initiates transfer. Parameters (amount, recipient,
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

        {/* ── 3. ARCHITECTURE ─────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>System Architecture</h3>
            <p>
              The Sew architecture centers on a non-custodial Vault and a
              registry of immutable logic modules.
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
                  Logic is isolated per escrow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. DISPUTE RESOLUTION ───────────────────────────────────────── */}
        <section className="content-section">
          <h3>Dispute Architecture</h3>
          <p>
            Sew provides structured resolution pathways, evolving from a single
            trusted resolver toward decentralized arbitration networks.
          </p>
          <div
            className="escalation-path fabric-panel stitched"
            style={{ marginTop: '2rem' }}
          >
            <div className="path-step">
              <strong>Level 1: Standard Resolver</strong>
              <p>
                Initial review of evidence and circumstances by assigned
                resolver.
              </p>
            </div>
            <div className="path-step">
              <strong>Level 2: Senior Resolver</strong>
              <p>
                Escalation path for disputed decisions with senior reviewer
                review.
              </p>
            </div>
            <div className="path-step">
              <strong>Level 3: External Arbitration</strong>
              <p>
                Final arbitration through third-party protocols (e.g. Kleros).
              </p>
            </div>
          </div>
        </section>

        {/* ── 5. USE CASES ────────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Common Use Cases</h3>
            <div className="use-cases-grid">
              {useCases.map((uc) => (
                <div key={uc.title} className="use-case-card fabric-panel">
                  <div className="uc-header">
                    <span>{uc.icon}</span>
                    <h4>{uc.title}</h4>
                  </div>
                  <p>{uc.description}</p>
                  <code style={{ fontSize: '0.75rem', opacity: 0.8 }}>
                    {uc.pattern}
                  </code>
                </div>
              ))}
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
        .content-section {
          margin: 0 auto;
          max-width: 800px;
          padding: 4rem 2rem;
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
          margin: 0 0 0.5rem 0;
          color: var(--primary);
        }
        .escalation-path {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .path-step strong {
          display: block;
          color: var(--primary);
          margin-bottom: 0.25rem;
        }
        .path-step p {
          margin: 0;
          font-size: 0.875rem;
          color: var(--accents-3);
        }
        .use-cases-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-top: 2rem;
        }
        .use-case-card {
          padding: 1.25rem;
        }
        .uc-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .uc-header h4 {
          margin: 0;
        }
        .use-case-card p {
          font-size: 0.875rem;
          color: var(--accents-3);
          margin-bottom: 0.75rem;
        }
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
        .page-meta {
          text-align: center;
          padding: 3rem 2rem;
          color: var(--accents-3);
          font-size: 0.85rem;
        }
        @media (max-width: 700px) {
          .lifecycle-grid,
          .use-cases-grid,
          .guarantees-grid--wide {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
