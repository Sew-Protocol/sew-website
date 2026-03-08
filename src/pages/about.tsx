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
              <h1>About Sew Protocol</h1>
              <h2 className="tagline">
                Non-custodial infrastructure for protected transfers on
                Ethereum.
              </h2>
              <p className="description">
                Sew Protocol makes it possible to route ERC-20 transfers through
                escrow with predefined release and dispute resolution paths,
                without requiring custody or centralized trust.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. MISSION ──────────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Mission & Approach</h3>
            <p>
              We believe protection should be available at the moment of
              transfer, not added later through third-party custody or
              platform-specific workarounds. Sew provides the neutral ground
              needed for secure onchain coordination.
            </p>
            <div className="guarantees-grid">
              <div className="guarantee-card fabric-panel">
                <h4>Core Escrow</h4>
                <p>
                  Non-custodial transfer protection with defined release and
                  resolution rules enforced by code.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Modular Design</h4>
                <p>
                  Pluggable release strategies, dispute resolvers, and yield
                  modules selected at creation.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Neutrality</h4>
                <p>
                  Sew does not take custody. No party can redirect funds outside
                  predefined settlement paths.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Forward-Only</h4>
                <p>
                  Module snapshots ensure that upgrades never retroactively
                  alter active agreements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. ROADMAP ──────────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Evolution Roadmap</h3>
            <p>
              Sew is designed for progressive decentralization. Our current
              phases:
            </p>
            <div className="principles-grid">
              <div className="principle">
                <h4>Phase 1 (Launch)</h4>
                <p>Core escrow with single-tier trusted resolution.</p>
              </div>
              <div className="principle">
                <h4>Phase 2 (Planned)</h4>
                <p>Multi-tier resolution with staking and public appeals.</p>
              </div>
              <div className="principle">
                <h4>Phase 3 (Vision)</h4>
                <p>Fully decentralized resolver networks and delegation.</p>
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
              <h4>Ecosystem</h4>
              <p>
                Learn about the tokenomics and roadmap.{' '}
                <Link href="/investor">Protocol Vision →</Link>
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
