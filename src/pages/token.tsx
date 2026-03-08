import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Token() {
  return (
    <>
      <Header titlePre="SEW Token" />
      <div className={sharedStyles.layout}>
        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section
          className="hero"
          style={{
            backgroundImage: "url('/images/stitch-texture.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          }}
        >
          <div className="hero-inner">
            <div className="hero-text">
              <span className="hero-eyebrow">Governance Assets</span>
              <h1>SEW Token</h1>
              <h2 className="tagline">Governance rights and future staking</h2>
              <p className="description">
                SEW is the utility and governance token for Sew Protocol. It
                enables the community to coordinate protocol evolution and
                secure the dispute resolution system.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. UTILITY ──────────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Token utility</h3>
            <p>SEW serves two primary purposes within the ecosystem:</p>
            <div className="guarantees-grid">
              <div className="guarantee-card fabric-panel">
                <h4>Governance</h4>
                <p>
                  Vote on upgrades, parameter changes, fee adjustments, and
                  module activations.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Staking (future)</h4>
                <p>
                  Participate in the decentralized dispute resolution system via
                  mixed-bond staking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. RIGHTS ───────────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>Governance rights</h3>
          <p>SEW holders can participate in the governance process for:</p>
          <div className="principles-grid">
            <div className="principle seam-accent">
              <h4>Module Registry</h4>
              <p>Approving and upgrading the library of available modules.</p>
            </div>
            <div className="principle seam-accent">
              <h4>Economics</h4>
              <p>Adjusting fee parameters and revenue allocation policies.</p>
            </div>
            <div className="principle seam-accent">
              <h4>Safety</h4>
              <p>
                Appointing guardian roles and coordinating emergency response.
              </p>
            </div>
          </div>
        </section>

        {/* ── 4. STAKING ──────────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Staking in dispute resolution</h3>
            <p className="description" style={{ maxWidth: 'none' }}>
              In later phases (DR v3), SEW will be used alongside stablecoins in
              a mixed-bond model:
            </p>
            <div className="guarantees-grid">
              <div className="guarantee-card fabric-panel">
                <h4>Stable Anchor</h4>
                <p>
                  Bonds are ≥80% stablecoins to reduce volatility risk for
                  resolvers.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Incentive Alignment</h4>
                <p>
                  Up to 20% of bonds in SEW. Slashed SEW is burned, reducing
                  total supply.
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
            <h3>Shape the protocol's future.</h3>
            <p>
              Learn how SEW holders participate in the governance process and
              technical timelocks.
            </p>
            <div className="cta-btns">
              <Link href="/governance" className="cta-btn primary">
                Governance
              </Link>
              <Link href="/release-plan" className="cta-btn">
                Release Plan
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
