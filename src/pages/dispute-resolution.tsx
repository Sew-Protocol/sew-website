import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function DisputeResolution() {
  return (
    <>
      <Header titlePre="Dispute Architecture" />
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
              <span className="hero-eyebrow">Mechanism Design</span>
              <h1>Dispute Architecture</h1>
              <h2 className="tagline">How resolution works structurally</h2>
              <p className="description">
                Sew Protocol provides structured dispute resolution pathways,
                evolving from single trusted resolvers to fully decentralised
                arbitration.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. MODES ────────────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Resolution modes</h3>
            <div className="guarantees-grid">
              <div className="guarantee-card fabric-panel">
                <span className="mode-badge active">Active at Launch</span>
                <h4>Single Trusted Resolver</h4>
                <p>
                  A designated resolver evaluates evidence and makes final
                  decisions. Simple, fast, and governance-controlled.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <span className="mode-badge planned">Planned</span>
                <h4>Escalating Resolution</h4>
                <p>
                  Multi-level resolution with appeal bonds and final arbitration
                  through third-party networks like Kleros.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. PATH ─────────────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>Escalating resolution path</h3>
          <div className="escalation-grid">
            <div className="principle fabric-panel seam-accent">
              <div className="step-marker">01</div>
              <h4>Standard Resolver</h4>
              <p>
                Initial dispute handling. First-level review of evidence and
                circumstances by assigned resolver.
              </p>
            </div>
            <div className="principle fabric-panel seam-accent">
              <div className="step-marker">02</div>
              <h4>Senior Resolver</h4>
              <p>
                Escalation path for disputed decisions. Senior reviewer with
                larger bond evaluates the case.
              </p>
            </div>
            <div className="principle fabric-panel seam-accent">
              <div className="step-marker">03</div>
              <h4>External Arbitration</h4>
              <p>
                Final arbitration through third-party protocols (e.g., Kleros).
                Binding, final onchain outcome.
              </p>
            </div>
          </div>
        </section>

        {/* ── 4. ECONOMICS ────────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Economic security</h3>
            <p className="description" style={{ maxWidth: 'none' }}>
              Resolvers are incentivized to behave honestly through economic
              mechanisms: bonds, appeals, and slashing.
            </p>
            <div className="guarantees-grid guarantees-grid--wide">
              <div className="guarantee-card fabric-panel">
                <h4>Appeal Bonds</h4>
                <p>
                  Appellants post bonds to escalate. Failed appeals forfeit
                  bonds, discouraging griefing.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Resolver Staking</h4>
                <p>
                  Resolvers stake tokens as collateral. Misconduct results in
                  slashing of their bond.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Performance</h4>
                <p>
                  Decisions are recorded onchain. Metrics align resolver status
                  with fair outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. PROPERTIES ───────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>Key properties</h3>
          <div className="property-grid">
            <div className="property fabric-panel seam-accent">
              <h4>Deterministic</h4>
              <p>
                Resolution follows predefined rules encoded at creation, not
                human discretion.
              </p>
            </div>
            <div className="property fabric-panel seam-accent">
              <h4>Isolated</h4>
              <p>
                Impact is limited to that single dispute. Other escrows remain
                unaffected.
              </p>
            </div>
            <div className="property fabric-panel seam-accent">
              <h4>Bounded</h4>
              <p>
                Maximum dispute duration is strictly enforced (90 days maximum).
              </p>
            </div>
            <div className="property fabric-panel seam-accent">
              <h4>Transparent</h4>
              <p>
                All evidence hashes and resolver decisions are recorded
                permanently onchain.
              </p>
            </div>
          </div>
        </section>

        {/* ── 6. FINAL CTA ────────────────────────────────────────────────── */}
        <section
          className="section-breakout cta-breakout"
          style={{
            backgroundImage: "url('/images/ancient-sewing-machine.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="breakout-inner cta-inner">
            <h3>Build custom resolution.</h3>
            <p>
              Learn how to implement your own resolution modules or integrate
              existing arbitration protocols.
            </p>
            <div className="cta-btns">
              <Link href="/developer" className="cta-btn primary">
                Developer Guide
              </Link>
              <Link href="/security#dispute-economics" className="cta-btn">
                Dispute Economics
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
        .mode-badge {
          display: inline-block;
          font-size: 0.65rem;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          margin-bottom: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .mode-badge.active {
          background: rgba(5, 150, 105, 0.1);
          color: #059669;
        }
        .mode-badge.planned {
          background: rgba(122, 221, 220, 0.1);
          color: var(--primary);
        }

        .escalation-grid {
          display: grid;
          gap: 1.25rem;
          margin-top: 2rem;
        }
        .step-marker {
          font-size: 0.75rem;
          font-weight: 800;
          font-family: var(--font-mono);
          color: var(--primary);
          margin-bottom: 0.5rem;
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

        @media (max-width: 700px) {
          .guarantees-grid,
          .guarantees-grid--wide,
          .property-grid {
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
