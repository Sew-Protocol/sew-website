import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Contracts() {
  return (
    <>
      <Header titlePre="Contract Addresses" />
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
              <h1>Contract Addresses</h1>
              <h2 className="tagline">
                Verified addresses and deployment status
              </h2>
              <p className="description">
                Sew Protocol is currently live on Base Sepolia testnet. Mainnet
                addresses will be published here following the completion of
                security audits.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. STATUS ───────────────────────────────────────────────────── */}
        <section className="content-section">
          <div className="deployment-status stitched">
            <div className="status-row">
              <div className="status-item">
                <span className="status-dot active" />
                <div className="status-text">
                  <strong>Base Sepolia (84532)</strong>
                  <span>Testnet — Deployed and active</span>
                </div>
              </div>
              <div className="status-item">
                <span className="status-dot pending" />
                <div className="status-text">
                  <strong>Base Mainnet</strong>
                  <span>Pending security audit</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. CORE ─────────────────────────────────────────────────────── */}
        <section className="content-section">
          <div className="stitched">
            <h3>Core Protocol</h3>
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
                    <code>0x13b8b7572c72b46879662BFEA53851cBeD3bC47a</code>
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

        {/* ── 4. OPS ──────────────────────────────────────────────────────── */}
        <section className="content-section">
          <div className="stitched">
            <h3>Operations Orchestrators</h3>
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
                    <strong>CreateOps</strong>
                  </td>
                  <td>
                    <code>0xBC60481020457CAC819B6938396a1002B0518f34</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>SettlementOps</strong>
                  </td>
                  <td>
                    <code>0x2cB13cefF8E5326647454aa2d50db15f5282c3A4</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>DisputeOps</strong>
                  </td>
                  <td>
                    <code>0xd62A061bcC7b934558bd4c5dDa4E1FbeDC06D394</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>YieldOps</strong>
                  </td>
                  <td>
                    <code>0xEc421d01E88754dAe5AAdE24C7616F8161f9f0F3</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 5. GOVERNANCE ───────────────────────────────────────────────── */}
        <section className="content-section">
          <div className="stitched">
            <h3>Governance Infrastructure</h3>
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
                    <strong>SEW Token</strong>
                  </td>
                  <td>
                    <code>0x79913fCa36Ea4e747F4742a4c1C7bC93a1522a14</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Timelock</strong>
                  </td>
                  <td>
                    <code>0xF61053a82F5dBd0a2eCDebb9748e457119305F6a</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Safe Multisig</strong>
                  </td>
                  <td>
                    <code>0x5F13B5089a0B23c74AD9A22a2db59F5F48ab09bC</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────── */}
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
              Use these addresses to integrate protected transfers into your
              application on Base Sepolia.
            </p>
            <div className="cta-btns">
              <Link href="/developer" className="cta-btn primary">
                Developer Guide
              </Link>
              <Link
                href="https://github.com/sew-protocol/sew-protocol"
                className="cta-btn"
              >
                Source Code
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
        .deployment-status {
          padding: 1.5rem 2rem;
          border-radius: var(--radius);
          background: rgba(122, 221, 220, 0.03);
        }
        .status-row {
          display: flex;
          gap: 3rem;
          flex-wrap: wrap;
        }
        .status-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }
        .status-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-top: 0.35rem;
          flex-shrink: 0;
        }
        .status-dot.active {
          background: #059669;
        }
        .status-dot.pending {
          background: var(--accents-5);
        }
        .status-text {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .status-text strong {
          font-size: 0.9rem;
        }
        .status-text span {
          font-size: 0.8rem;
          color: var(--accents-3);
        }

        .page-meta {
          text-align: center;
          padding: 3rem 2rem;
          color: var(--accents-3);
          font-size: 0.85rem;
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
          .status-row {
            flex-direction: column;
            gap: 1.5rem;
          }
          .cta-inner h3 {
            font-size: 1.65rem;
          }
        }
      `}</style>
    </>
  )
}
