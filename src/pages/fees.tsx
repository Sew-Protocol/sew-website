import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Fees() {
  return (
    <>
      <Header titlePre="Fees" />
      <div className={sharedStyles.layout}>
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
              <span className="hero-eyebrow">Protocol Economics</span>
              <h1>Fees</h1>
              <h2 className="tagline">
                Bounded, transparent, and locked at creation
              </h2>
              <p className="description">
                Sew Protocol fees are enforced by smart contracts. All fee
                parameters are bounded by hard limits and are snapshotted at the
                moment of escrow creation.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h3>Fee principles</h3>
          <div className="principles-grid">
            <div className="principle seam-accent">
              <h4>Hard-capped</h4>
              <p>
                Fees cannot exceed the maximums defined in the core protocol
                contracts.
              </p>
            </div>
            <div className="principle seam-accent">
              <h4>Immutable</h4>
              <p>Fees for an active escrow cannot be changed by governance.</p>
            </div>
            <div className="principle seam-accent">
              <h4>Transparent</h4>
              <p>
                All fees are disclosed upfront and deducted during predefined
                transitions.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="stitched">
            <h3>Fee schedule</h3>
            <table className="fee-table">
              <thead>
                <tr>
                  <th>Fee</th>
                  <th>Default</th>
                  <th>Max</th>
                  <th>Applied When</th>
                  <th>Paid By</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Escrow creation</strong>
                  </td>
                  <td>1%</td>
                  <td>2%</td>
                  <td>At creation</td>
                  <td>Sender</td>
                </tr>
                <tr>
                  <td>
                    <strong>Yield protocol share</strong>
                  </td>
                  <td>30%</td>
                  <td>30%</td>
                  <td>Yield settlement</td>
                  <td>Recipient</td>
                </tr>
                <tr>
                  <td>
                    <strong>Appeal bond fee</strong>
                  </td>
                  <td>0%</td>
                  <td>30%</td>
                  <td>Appeal escalation</td>
                  <td>Appellant</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-section">
          <div className="fabric-panel stitched">
            <h3>Example: 100 USDC escrow</h3>
            <p className="description" style={{ maxWidth: 'none' }}>
              With 1% escrow fee and 30% yield protocol fee (active):
            </p>
            <div className="guarantees-grid">
              <div className="guarantee-card">
                <h4>Upfront</h4>
                <p>
                  Sender pays 100 USDC. 1 USDC goes to protocol; 99 USDC enters
                  escrow.
                </p>
              </div>
              <div className="guarantee-card">
                <h4>Settlement</h4>
                <p>
                  Recipient receives 99 USDC + their share of any generated
                  yield.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h3>Fee recipient</h3>
          <p>
            All fees go to a designated fee address controlled by governance.
            This address funds protocol development, security audits, and
            ecosystem growth.
          </p>
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
            <h3>View protocol constraints.</h3>
            <p>
              Explore the hard limits and safety bounds that ensure Sew Protocol
              remains predictable and secure.
            </p>
            <div className="cta-btns">
              <Link href="/protocol-limits" className="cta-btn primary">
                Protocol Limits
              </Link>
              <Link href="/governance" className="cta-btn">
                Governance
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
        .fee-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1.5rem;
        }
        .fee-table th,
        .fee-table td {
          text-align: left;
          padding: 1rem;
          border-bottom: 1px solid rgba(122, 221, 220, 0.1);
        }
        .fee-table th {
          font-weight: 600;
          color: var(--accents-3);
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
        }
        .page-meta {
          text-align: center;
          padding: 3rem 2rem;
          color: var(--accents-3);
          font-size: 0.85rem;
        }

        /* ── Shared Grids ── */
        .guarantees-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-top: 1rem;
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
          .guarantees-grid,
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
