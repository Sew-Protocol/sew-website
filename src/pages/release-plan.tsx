import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function ReleasePlan() {
  return (
    <>
      <Header titlePre="Release Plan" />
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
              <span className="hero-eyebrow">The Path to Decentralization</span>
              <h1>Release Plan</h1>
              <h2 className="tagline">Phased rollout strategy</h2>
              <p className="description">
                Sew Protocol evolves through phases, adding capabilities while
                maintaining strict security. Our roadmap progresses from launch
                to full capital-weighted decentralization.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. TIMELINE ─────────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Rollout timeline</h3>
            <div className="timeline-grid">
              <div className="timeline-phase active fabric-panel">
                <div className="phase-header">
                  <span className="phase-status active">Active</span>
                  <h4>Phase 1: IEO</h4>
                </div>
                <p className="phase-desc">
                  Initial Escrow Offering. Core immutable escrow with single
                  trusted resolver.
                </p>
                <ul className="phase-list">
                  <li>Core escrow contracts</li>
                  <li>DefaultResolutionModule</li>
                  <li>Aave yield integration</li>
                </ul>
              </div>

              <div className="timeline-phase fabric-panel">
                <div className="phase-header">
                  <span className="phase-status upcoming">Q2-Q3 2026</span>
                  <h4>Phase 2: Decisions</h4>
                </div>
                <p className="phase-desc">
                  Multi-resolver escalation. Focus on decentralizing the
                  governance process.
                </p>
                <ul className="phase-list">
                  <li>Multiple resolver registry</li>
                  <li>Round-robin selection</li>
                  <li>Standard / Senior escalation</li>
                </ul>
              </div>

              <div className="timeline-phase fabric-panel">
                <div className="phase-header">
                  <span className="phase-status upcoming">Q3-Q4 2026</span>
                  <h4>Phase 3: Incentives</h4>
                </div>
                <p className="phase-desc">
                  Decentralize incentives via appeal bonds. Economic gating for
                  escalation.
                </p>
                <ul className="phase-list">
                  <li>Appeal bonds active</li>
                  <li>Quadratic cost curves</li>
                  <li>Forfeit/Refund outcomes</li>
                </ul>
              </div>

              <div className="timeline-phase fabric-panel">
                <div className="phase-header">
                  <span className="phase-status upcoming">2027</span>
                  <h4>Phase 4: Capital</h4>
                </div>
                <p className="phase-desc">
                  Decentralize capital through resolver staking and slashing for
                  misconduct.
                </p>
                <ul className="phase-list">
                  <li>Resolver staking reqs</li>
                  <li>SEW/Stable mixed bonds</li>
                  <li>Objective slashing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. PRINCIPLES ────────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>Rollout principles</h3>
          <div className="principles-grid">
            <div className="principle seam-accent">
              <h4>Decentralize decisions first</h4>
              <p>
                Establishing correct settlement paths before introducing
                economic pressure.
              </p>
            </div>
            <div className="principle seam-accent">
              <h4>Decentralize incentives second</h4>
              <p>
                Aligning disputant behavior through bonds after the paths are
                stable.
              </p>
            </div>
            <div className="principle seam-accent">
              <h4>Decentralize capital last</h4>
              <p>
                Putting capital at risk only once the incentive mechanisms are
                proven.
              </p>
            </div>
          </div>
        </section>

        {/* ── 4. ACTIVATION ───────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Governance activation</h3>
            <p className="description" style={{ maxWidth: 'none' }}>
              Each phase requires a multi-stage governance process via the
              timelock:
            </p>
            <div className="guarantees-grid guarantees-grid--wide">
              <div className="guarantee-card">
                <h4>1. Deploy</h4>
                <p>
                  New module implementation deployed and tested on Base Sepolia.
                </p>
              </div>
              <div className="guarantee-card">
                <h4>2. Queue</h4>
                <p>
                  Governance proposal queued in the timelock (48h fast-lane).
                </p>
              </div>
              <div className="guarantee-card">
                <h4>3. Delay</h4>
                <p>
                  Mandatory slow-lane delay period (approx. 7 days) for review.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. FINAL CTA ────────────────────────────────────────────────── */}
        <section
          className="section-breakout cta-breakout"
          style={{
            backgroundImage: "url('/images/ancient-sewing-machine.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="breakout-inner cta-inner">
            <h3>Review the technical architecture.</h3>
            <p>
              Understand how the modular system supports this phased evolution
              without retroactive changes.
            </p>
            <div className="cta-btns">
              <Link href="/architecture" className="cta-btn primary">
                Architecture
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
        .timeline-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .timeline-phase {
          padding: 1.5rem;
        }
        .timeline-phase.active {
          border-color: #059669;
          box-shadow: 0 0 0 1px #059669;
        }
        .phase-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.75rem;
        }
        .phase-header h4 {
          margin: 0;
          font-size: 1.1rem;
        }
        .phase-status {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }
        .phase-status.active {
          background: rgba(5, 150, 105, 0.1);
          color: #059669;
        }
        .phase-status.upcoming {
          background: rgba(122, 221, 220, 0.1);
          color: var(--accents-3);
        }
        .phase-desc {
          font-size: 0.88rem;
          color: var(--accents-2);
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        .phase-list {
          margin: 0;
          padding-left: 1.15rem;
          font-size: 0.82rem;
          color: var(--accents-3);
        }
        .phase-list li {
          margin-bottom: 0.25rem;
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
          .timeline-grid,
          .guarantees-grid,
          .guarantees-grid--wide,
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
