import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Header titlePre="About" />
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
              <span className="hero-eyebrow">The Fabric of the Protocol</span>
              <h1>About Sew Protocol</h1>
              <h2 className="tagline">
                Infrastructure for protected transfers
              </h2>
              <p className="description">
                Sew Protocol makes coordination possible on Ethereum without
                requiring custody or centralized trust. We believe every
                transfer should be optionally protected.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. MISSION ──────────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Mission</h3>
            <p>
              We believe every transfer should be optionally protected. Buyers
              and sellers should be able to transact with confidence.
              Applications should reuse infrastructure rather than reinvent
              escrow.
            </p>
            <div className="guarantees-grid">
              <div className="guarantee-card fabric-panel">
                <h4>Confidence</h4>
                <p>
                  Ensuring both parties fulfill obligations before finality.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Neutrality</h4>
                <p>
                  Enforcing rules defined at creation, not by intermediaries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. BUILDING ─────────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>What we're building</h3>
          <p>
            Sew is composable infrastructure: a set of smart contracts and
            modules that applications, wallets, and protocols can build on.
          </p>
          <div className="property-grid">
            <div className="property fabric-panel seam-accent">
              <h4>Core escrow</h4>
              <p>
                Non-custodial transfer protection with defined release and
                resolution rules.
              </p>
            </div>
            <div className="property fabric-panel seam-accent">
              <h4>Modular architecture</h4>
              <p>
                Pluggable release strategies, dispute resolvers, and yield
                generators.
              </p>
            </div>
            <div className="property fabric-panel seam-accent">
              <h4>Dispute resolution</h4>
              <p>
                Structured, incentivized mechanisms for fair conflict
                resolution.
              </p>
            </div>
            <div className="property fabric-panel seam-accent">
              <h4>Governance</h4>
              <p>Community-controlled evolution through the SEW token.</p>
            </div>
          </div>
        </section>

        {/* ── 4. ROADMAP ──────────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Roadmap</h3>
            <p>
              Sew is under active development. Our path to decentralization:
            </p>
            <div className="principles-grid">
              <div className="principle">
                <h4>v1 (Launch)</h4>
                <p>Core escrow with single-tier dispute resolution.</p>
              </div>
              <div className="principle">
                <h4>v2 (Post-launch)</h4>
                <p>
                  Multi-tier escalating resolution with staking and appeals.
                </p>
              </div>
              <div className="principle">
                <h4>v3 (Future)</h4>
                <p>Fully decentralized resolver selection with delegation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. GET INVOLVED ──────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>Get involved</h3>
          <div className="guarantees-grid">
            <div className="guarantee-card fabric-panel">
              <h4>Developers</h4>
              <p>
                Integrate escrow into your app.{' '}
                <Link href="/developer">Build on Sew →</Link>
              </p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>Operators</h4>
              <p>
                Earn fees as a resolver.{' '}
                <Link href="/docs/dispute-resolution/resolver-guide">
                  Resolver Guide →
                </Link>
              </p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>Researchers</h4>
              <p>
                Analyze protocol mechanics.{' '}
                <Link href="/researcher">Resources →</Link>
              </p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>Investors</h4>
              <p>
                Learn about the token.{' '}
                <Link href="/investor">Token Info →</Link>
              </p>
            </div>
          </div>
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
            <h3>Ready to secure the fabric of Ethereum?</h3>
            <p>
              Explore our documentation or reach out to the team to get started.
            </p>
            <div className="cta-btns">
              <Link href="/developer" className="cta-btn primary">
                Developer Guide
              </Link>
              <Link href="/contact" className="cta-btn">
                Contact Us
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
          .property-grid,
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
