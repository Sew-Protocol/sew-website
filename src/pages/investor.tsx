import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Investor() {
  return (
    <>
      <Header titlePre="For Investors" />
      <div>
        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section
          className="hero"
          style={{
            backgroundImage: "url('/images/abstract-texture.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          }}
        >
          <div className="hero-inner">
            <div className="hero-text">
              <span className="hero-eyebrow">Strategic Vision</span>
              <h1>For Investors</h1>
              <h2 className="tagline">
                The case for structured programmable settlement
              </h2>
              <p className="description">
                Sew Protocol introduces protected transfers as a new primitive
                on Ethereum. We are building the infrastructure for safe,
                trust-minimized commerce.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. OPPORTUNITY ──────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>The opportunity</h3>
            <p>
              Ethereum enables global transfers, but most are immediate and
              irreversible. This creates massive friction for peer-to-peer
              commerce, services, and marketplaces.
            </p>
            <div className="guarantees-grid">
              <div className="guarantee-card fabric-panel">
                <h4>Missing Primitive</h4>
                <p>
                  A gap exists between risky direct transfers and centralized
                  custodial platforms.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Market Ready</h4>
                <p>
                  Increasing stablecoin use and demand for non-custodial
                  coordination tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. POSITIONING ──────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>Category positioning</h3>
          <p>Sew is not an app; it is infrastructure that apps build on.</p>
          <div className="principles-grid">
            <div className="principle seam-accent">
              <h4>Non-custodial</h4>
              <p>
                Protection without the regulatory and security burden of holding
                user funds.
              </p>
            </div>
            <div className="principle seam-accent">
              <h4>Composable</h4>
              <p>
                A reusable settlement pattern that works across wallets and
                marketplaces.
              </p>
            </div>
            <div className="principle seam-accent">
              <h4>Deterministic</h4>
              <p>
                Rules enforced by code, providing neutral ground for strangers
                to transact.
              </p>
            </div>
          </div>
        </section>

        {/* ── 4. DEFENSIBILITY ────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Defensibility</h3>
            <div className="guarantees-grid">
              <div className="guarantee-card fabric-panel">
                <h4>Network Effects</h4>
                <p>
                  As more apps adopt a shared settlement layer, integrations
                  become the standard.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Architecture</h4>
                <p>
                  Modular system designed for forward evolution without breaking
                  existing agreements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. VISION ───────────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>Vision</h3>
          <p>
            Ethereum introduced programmable money. Sew explores programmable
            settlement. The long-term ambition is to make protected transfers a
            standard option for how value moves onchain.
          </p>
        </section>

        {/* ── 6. FINAL CTA ────────────────────────────────────────────────── */}
        <section
          className="section-breakout cta-breakout"
          style={{
            backgroundImage: "url('/images/needle-threads.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
          }}
        >
          <div className="breakout-inner cta-inner">
            <h3>Coordinate the evolution.</h3>
            <p>
              Explore our technical roadmap, token economics, and governance
              trajectory.
            </p>
            <div className="cta-btns">
              <Link href="/release-plan" className="cta-btn primary">
                Release Plan
              </Link>
              <Link href="/token" className="cta-btn">
                SEW Token
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
