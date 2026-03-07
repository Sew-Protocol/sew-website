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
      <div className={`${sharedStyles.layout} hero-texture`}>
        <section className="header-section">
          <h1>Integrations</h1>
          <h2 className="tagline">External protocols and services</h2>
          <p className="intro">
            Sew Protocol integrates with external services to provide yield
            generation, dispute resolution, and blockchain infrastructure.
          </p>
        </section>

        <section className="integrations-grid">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="integration-card fabric-panel"
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

        <section className="integration-principles fabric-texture fabric-texture-light">
          <h2>Integration Principles</h2>
          <div className="principles-grid">
            <div className="principle-card">
              <h4>Opt-In by Default</h4>
              <p>
                Integrations are not required. Users and applications choose
                which integrations to enable.
              </p>
            </div>
            <div className="principle-card">
              <h4>Exposure Caps</h4>
              <p>
                External protocol exposure is bounded per token. Failures are
                contained.
              </p>
            </div>
            <div className="principle-card">
              <h4>Pause Controls</h4>
              <p>
                Guardian can disable integrations immediately without pausing
                the entire protocol.
              </p>
            </div>
            <div className="principle-card">
              <h4>Per-Escrow Isolation</h4>
              <p>Integration failures in one escrow do not affect others.</p>
            </div>
          </div>
        </section>

        <section className="disclaimer-block">
          <p>
            <strong>Yield disclaimer:</strong> Yield is optional. Principal
            remains governed by escrow logic. External protocol risk exists.
            Exposure caps and unwind mechanisms limit potential losses.
          </p>
        </section>

        <section className="related-section">
          <h3>Learn more</h3>
          <div className="related-links">
            <Link href="/security">Security Model</Link>
            <Link href="/protocol-limits">Protocol Limits</Link>
            <Link href="/emergency">Emergency Recovery</Link>
          </div>
        </section>

        <section className="page-meta">
          <p>Last updated: February 2026</p>
          <p>
            <Link href="/docs">View full documentation →</Link>
          </p>
        </section>
      </div>

      <style jsx>{`
        .header-section {
          text-align: center;
          padding: 4rem 2rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .header-section h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }
        .tagline {
          color: var(--accents-3);
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }
        .intro {
          font-size: 1.1rem;
          color: var(--accents-2);
        }
        .integrations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1.5rem;
          padding: 2rem;
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
          border-top: 1px solid var(--accents-6);
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
        .integration-principles {
          max-width: 1000px;
          margin: 4rem auto;
          padding: 3rem 2rem;
          border-radius: 12px;
        }
        .integration-principles h2 {
          text-align: center;
          margin-bottom: 2rem;
        }
        .principles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }
        .principle-card {
          padding: 1.25rem;
          background: var(--bg);
          border-radius: 8px;
        }
        .principle-card h4 {
          font-size: 0.95rem;
          margin: 0 0 0.5rem 0;
        }
        .principle-card p {
          font-size: 0.85rem;
          color: var(--accents-2);
          margin: 0;
          line-height: 1.4;
        }
        .related-section {
          text-align: center;
          padding: 4rem 2rem;
          max-width: 600px;
          margin: 0 auto;
        }
        .related-section h3 {
          margin-bottom: 1.5rem;
        }
        .related-links {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .related-links a {
          padding: 0.5rem 1rem;
          background: var(--accents-6);
          border-radius: 6px;
          color: var(--fg);
          text-decoration: none;
          font-size: 0.9rem;
          transition: background 0.2s;
        }
        .related-links a:hover {
          background: var(--accents-5);
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
          color: #7adddc;
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
        @media (max-width: 600px) {
          .integrations-grid {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  )
}
