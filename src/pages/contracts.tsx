import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'
import ExtLink from '../components/ext-link'

export default function Deployment() {
  const integrations = [
    {
      name: 'Base',
      status: 'active',
      category: 'Blockchain',
      description:
        'Sew Protocol is deployed on Base, an Ethereum L2 built by Coinbase.',
    },
    {
      name: 'Aave V3',
      status: 'active',
      category: 'Yield Generation',
      description:
        'Leading DeFi lending protocol for generating yield on escrowed funds.',
    },
    {
      name: 'Kleros',
      status: 'planned',
      category: 'Dispute Resolution',
      description: 'Decentralized arbitration protocol for dispute resolution.',
    },
  ]

  return (
    <>
      <Header titlePre="Deployment" />
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
              <span className="hero-eyebrow">Deployment Registry</span>
              <h1>Deployment</h1>
              <h2 className="tagline">
                {' '}
                Verified addresses and ecosystem partners{' '}
              </h2>
              <p className="description">
                Sew Protocol is currently live on Base Sepolia testnet. Mainnet
                addresses will be published here following the completion of
                security audits.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. CONTRACTS ────────────────────────────────────────────────── */}
        <section className="content-section">
          <div className="stitched">
            <h3>Core Protocol (Base Sepolia)</h3>
            <table className="address-table">
              <thead>
                <tr>
                  <th>Contract</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>EscrowVault</strong>
                  </td>
                  <td>
                    <ExtLink href="https://sepolia.basescan.org/address/0x13b8b7572c72b46879662BFEA53851cBeD3bC47a">
                      <code>0x13b8b7572c72b46879662BFEA53851cBeD3bC47a</code>
                    </ExtLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>ModuleRegistry</strong>
                  </td>
                  <td>
                    <code>0xaa0Fa9C11af77E7f2BF14f86C17C8436370F0a86</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 3. INTEGRATIONS ─────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Ecosystem Integrations</h3>
            <div className="integrations-grid">
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="integration-card fabric-panel"
                >
                  <div className="int-header">
                    <h4>{integration.name}</h4>
                    <span className={`status-badge ${integration.status}`}>
                      {integration.status}
                    </span>
                  </div>
                  <p className="int-cat">{integration.category}</p>
                  <p className="int-desc">{integration.description}</p>
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
        .address-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1.5rem;
        }
        .address-table th,
        .address-table td {
          text-align: left;
          padding: 1rem;
          border-bottom: 1px solid rgba(122, 221, 220, 0.1);
        }
        .address-table th {
          font-weight: 600;
          color: var(--accents-3);
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
        }
        .address-table code {
          font-family: var(--font-mono);
          color: var(--primary);
          font-size: 0.85rem;
          word-break: break-all;
        }
        .integrations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.25rem;
          margin-top: 2rem;
        }
        .integration-card {
          padding: 1.25rem;
        }
        .int-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .int-header h4 {
          margin: 0;
        }
        .status-badge {
          font-size: 0.65rem;
          text-transform: uppercase;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
        }
        .status-badge.active {
          background: rgba(5, 150, 105, 0.1);
          color: #059669;
        }
        .status-badge.planned {
          background: rgba(122, 221, 220, 0.1);
          color: var(--primary);
        }
        .int-cat {
          font-size: 0.75rem;
          color: var(--accents-3);
          margin-bottom: 0.5rem;
        }
        .int-desc {
          font-size: 0.875rem;
          color: var(--accents-2);
          margin: 0;
        }
        .page-meta {
          text-align: center;
          padding: 3rem 2rem;
          color: var(--accents-3);
          font-size: 0.85rem;
        }
      `}</style>
    </>
  )
}
