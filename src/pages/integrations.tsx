import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Integrations() {
  const integrations = [
    {
      name: 'Base',
      status: 'active',
      category: 'Blockchain',
      description:
        'Sew Protocol is deployed on Base, an Ethereum L2 built by Coinbase.',
      whatItDoes:
        'Provides the settlement layer, block production, and network security.',
      riskPosture:
        'Core infrastructure. Users trust Base liveness and finality.',
    },
    {
      name: 'Aave V3',
      status: 'active',
      category: 'Yield Generation',
      description:
        'Leading DeFi lending protocol for generating yield on escrowed funds.',
      whatItDoes:
        'Escrowed funds can be deposited to Aave to earn yield while locked.',
      riskPosture:
        'Opt-in per escrow. Protected by exposure caps and pause controls. Yield module can be disabled without affecting core escrow.',
    },
    {
      name: 'Kleros',
      status: 'planned',
      category: 'Dispute Resolution',
      description: 'Decentralized arbitration protocol for dispute resolution.',
      whatItDoes:
        'Provides final arbitration layer for escalated disputes beyond internal resolution.',
      riskPosture:
        'Opt-in via resolution module selection. Escalation is gated and bond-based.',
    },
  ]

  return (
    <>
      <Header titlePre="Integrations" />
      <div className={sharedStyles.layout}>
        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section
          className="hero"
          style={{
            backgroundImage: "url('/images/ancient-sewing-machine.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="hero-inner">
            <div className="hero-text">
              <span className="hero-eyebrow">Ecosystem Partners</span>
              <h1>Integrations</h1>
              <h2 className="tagline">External protocols and services</h2>
              <p className="description">
                Sew Protocol integrates with external services to provide yield
                generation, dispute resolution, and blockchain infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. GRID ─────────────────────────────────────────────────────── */}
        <section className="integrations-grid">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="integration-card fabric-panel stitched"
            >
              <div className="integration-header">
                <h3>{integration.name}</h3>
                <span className={`status-badge ${integration.status}`}>
                  {integration.status}
                </span>
              </div>
              <p className="integration-category">{integration.category}</p>
              <p className="integration-description">
                {integration.description}
              </p>
              <div className="integration-details">
                <div className="detail-block">
                  <span className="detail-label">What it does</span>
                  <span className="detail-value">{integration.whatItDoes}</span>
                </div>
                <div className="detail-block">
                  <span className="detail-label">Risk posture</span>
                  <span className="detail-value">
                    {integration.riskPosture}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ── 3. PRINCIPLES ────────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Integration principles</h3>
            <div className="principles-grid">
              <div className="principle seam-accent">
                <h4>Opt-In by Default</h4>
                <p>
                  Integrations are not required. Users and applications choose
                  which integrations to enable.
                </p>
              </div>
              <div className="principle seam-accent">
                <h4>Exposure Caps</h4>
                <p>
                  External protocol exposure is bounded per token. Failures are
                  contained.
                </p>
              </div>
              <div className="principle seam-accent">
                <h4>Pause Controls</h4>
                <p>
                  Guardian can disable integrations immediately without pausing
                  the entire protocol.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="disclaimer-block">
            <p>
              <strong>Yield disclaimer:</strong> Yield is optional. Principal
              remains governed by escrow logic. External protocol risk exists.
              Exposure caps and unwind mechanisms limit potential losses.
            </p>
          </div>
        </section>

        {/* ── 4. FINAL CTA ────────────────────────────────────────────────── */}
        <section
          className="section-breakout cta-breakout"
          style={{
            backgroundImage: "url('/images/needle-threads.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
          }}
        >
          <div className="breakout-inner cta-inner">
            <h3>Review the security model.</h3>
            <p>
              Explore the invariants, threat model, and recovery procedures that
              protect Sew Protocol.
            </p>
            <div className="cta-btns">
              <Link href="/security" className="cta-btn primary">
                Security Model
              </Link>
              <Link href="/architecture#the-module-system" className="cta-btn">
                Module System
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
        .integrations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1.5rem;
          padding: 4rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .integration-card {
          padding: 1.5rem;
        }
        .integration-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }
        .integration-header h3 {
          font-size: 1.25rem;
          margin: 0;
        }
        .status-badge {
          font-size: 0.7rem;
          text-transform: uppercase;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-weight: 500;
          letter-spacing: 0.05em;
        }
        .status-badge.active {
          background: rgba(108, 229, 177, 0.08);
          color: #059669;
        }
        .status-badge.planned {
          background: rgba(122, 221, 220, 0.08);
          color: #7adddc;
        }
        .integration-category {
          font-size: 0.85rem;
          color: var(--accents-3);
          margin: 0 0 1rem 0;
        }
        .integration-description {
          font-size: 0.9rem;
          color: var(--accents-2);
          margin: 0 0 1.25rem 0;
          line-height: 1.5;
        }
        .integration-details {
          padding-top: 1rem;
          border-top: 1px solid rgba(122, 221, 220, 0.1);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .detail-block {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .detail-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accents-3);
        }
        .detail-value {
          font-size: 0.85rem;
          color: var(--fg);
          line-height: 1.4;
        }
        .disclaimer-block {
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.4);
          border-radius: 8px;
          padding: 1rem 1.5rem;
          margin: 0 auto 3rem;
          max-width: 800px;
          font-size: 0.9rem;
        }
        .disclaimer-block p {
          margin: 0;
          color: #ffd166;
        }
        .page-meta {
          text-align: center;
          padding: 3rem 2rem;
          color: var(--accents-3);
          font-size: 0.85rem;
        }

        /* ── Shared Grids ── */
        .principles-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem;
          margin-top: 2rem;
        }
        .principle {
          padding: 1rem;
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

        @media (max-width: 700px) {
          .integrations-grid,
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
