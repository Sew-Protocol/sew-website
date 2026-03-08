import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function ProtocolLimits() {
  return (
    <>
      <Header titlePre="Protocol Limits" />
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
              <span className="hero-eyebrow">Safety Bounds</span>
              <h1>Protocol Limits</h1>
              <h2 className="tagline">
                Hard bounds enforced by contract, not policy
              </h2>
              <p className="description">
                These are the maximum bounds enforced by Sew Protocol. They
                exist to limit systemic risk, prevent governance capture, and
                ensure long-term predictability.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="stitched">
            <h3>Fee limits</h3>
            <table className="limits-table">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Maximum</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Escrow creation fee</td>
                  <td>2%</td>
                  <td>Prevent excessive fees on transactions</td>
                </tr>
                <tr>
                  <td>Yield protocol fee</td>
                  <td>30%</td>
                  <td>Limit protocol share of generated yield</td>
                </tr>
                <tr>
                  <td>Appeal bond protocol fee</td>
                  <td>30%</td>
                  <td>Limit fees on dispute appeals</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-section">
          <div className="stitched">
            <h3>Time limits</h3>
            <table className="limits-table">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Maximum</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Guardian pause duration</td>
                  <td>7 days</td>
                  <td>Prevent indefinite pauses</td>
                </tr>
                <tr>
                  <td>Dispute duration</td>
                  <td>90 days</td>
                  <td>Ensure resolution within bounded time</td>
                </tr>
                <tr>
                  <td>Appeal window</td>
                  <td>2 days</td>
                  <td>Allow time to appeal Level 1/2 decisions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-section">
          <div className="stitched">
            <h3>Guardian constraints</h3>
            <table className="limits-table">
              <thead>
                <tr>
                  <th>Constraint</th>
                  <th>Limit / Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Maximum pause duration</td>
                  <td>7 days</td>
                </tr>
                <tr>
                  <td>Pause cycles per 90-day window</td>
                  <td>3 pauses</td>
                </tr>
                <tr>
                  <td>Can re-pause while paused</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Can unpause</td>
                  <td>No (requires governance)</td>
                </tr>
                <tr>
                  <td>Can extract funds</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Can modify existing escrows</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-section">
          <h3>Governance constraints</h3>
          <div className="principles-grid">
            <div className="principle seam-accent">
              <h4>Non-custodial</h4>
              <p>
                Governance cannot seize funds or redirect assets from any
                escrow.
              </p>
            </div>
            <div className="principle seam-accent">
              <h4>Forward-only</h4>
              <p>
                Changes only affect future escrows. Term overrides are
                impossible.
              </p>
            </div>
            <div className="principle seam-accent">
              <h4>Timelocked</h4>
              <p>
                All parameter changes are subject to mandatory delay periods.
              </p>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────── */}
        <section
          className="section-breakout cta-breakout"
          style={{
            backgroundImage: "url('/images/needle-closeup.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 60%',
          }}
        >
          <div className="breakout-inner cta-inner">
            <h3>Review the security properties.</h3>
            <p>
              Understand the core invariants and threat model that protect user
              funds in Sew Protocol.
            </p>
            <div className="cta-btns">
              <Link href="/security" className="cta-btn primary">
                Security Model
              </Link>
              <Link href="/fees" className="cta-btn">
                Fees
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
        .limits-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1.5rem;
        }
        .limits-table th,
        .limits-table td {
          text-align: left;
          padding: 1rem;
          border-bottom: 1px solid rgba(122, 221, 220, 0.1);
        }
        .limits-table th {
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
