import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Governance() {
  return (
    <>
      <Header titlePre="Governance" />
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
              <span className="hero-eyebrow">System Evolution</span>
              <h1>Governance</h1>
              <h2 className="tagline">
                Protocol evolution bounded by per-escrow immutability
              </h2>
              <p className="description">
                Sew Protocol is designed to evolve while preserving the
                integrity of existing agreements. Governance follows one simple
                principle: Coordination should never become custody.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h3>Governance philosophy</h3>
          <div className="principles-grid">
            <div className="principle seam-accent">
              <h4>Containment</h4>
              <p>
                Allow defensive action to reduce risk without affecting active
                settlement.
              </p>
            </div>
            <div className="principle seam-accent">
              <h4>Stability</h4>
              <p>
                Upgrades only affect future escrows. Rules for active escrows
                are immutable.
              </p>
            </div>
            <div className="principle seam-accent">
              <h4>Minimalism</h4>
              <p>
                Narrowly scoped authority focused on module approval and
                parameter bounds.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h3>Roles and responsibilities</h3>
          <div className="guarantees-grid">
            <div className="guarantee-card fabric-panel">
              <h4>Timelock governance</h4>
              <p>
                Responsible for protocol evolution: registering modules,
                updating configuration, and adjusting parameters. All changes
                subject to delays.
              </p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>Guardian role</h4>
              <p>
                Defensive role for emergency response: can pause high-risk
                actions or lower exposure caps. Cannot touch funds or change
                terms.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="stitched">
            <h3>Governance lanes</h3>
            <table className="lanes-table">
              <thead>
                <tr>
                  <th>Lane</th>
                  <th>Typical Use Cases</th>
                  <th>Delay</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Fast lane</strong>
                  </td>
                  <td>Small parameter adjustments, minor config changes</td>
                  <td>48 hours</td>
                </tr>
                <tr>
                  <td>
                    <strong>Slow lane</strong>
                  </td>
                  <td>Module upgrades, new integrations, major changes</td>
                  <td>~9 days</td>
                </tr>
                <tr>
                  <td>
                    <strong>Emergency lane</strong>
                  </td>
                  <td>Risk reduction: pauses, disabling modules</td>
                  <td>Immediate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-section">
          <h3>Change boundaries</h3>
          <p>Enforced by smart contract design, not policy.</p>
          <div className="principles-grid">
            <div className="principle seam-accent">
              <h4>Can:</h4>
              <p>
                Approve modules, set exposure limits, and adjust future
                parameters.
              </p>
            </div>
            <div className="principle seam-accent">
              <h4>Cannot:</h4>
              <p>Seize funds, redirect assets, or force settlement outcomes.</p>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────── */}
        <section
          className="section-breakout cta-breakout"
          style={{
            backgroundImage: "url('/images/needle-threads.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
          }}
        >
          <div className="breakout-inner cta-inner">
            <h3>Review protocol constraints.</h3>
            <p>
              Explore the hard limits and safety bounds that ensure Sew Protocol
              remains predictable and secure.
            </p>
            <div className="cta-btns">
              <Link href="/protocol-limits" className="cta-btn primary">
                Protocol Limits
              </Link>
              <Link href="/security" className="cta-btn">
                Security Model
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
        .lanes-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1.5rem;
        }
        .lanes-table th,
        .lanes-table td {
          text-align: left;
          padding: 1rem;
          border-bottom: 1px solid rgba(122, 221, 220, 0.1);
        }
        .lanes-table th {
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
          margin-top: 1.75rem;
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
