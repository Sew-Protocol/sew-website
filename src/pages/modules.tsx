import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Modules() {
  return (
    <>
      <Header titlePre="Modules" />
      <div className={sharedStyles.layout}>
        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section
          className="hero"
          style={{
            backgroundImage: "url('/images/thread-spools.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="hero-inner">
            <div className="hero-text">
              <span className="hero-eyebrow">Modular Architecture</span>
              <h1>Module System</h1>
              <h2 className="tagline">The components of custom escrow</h2>
              <p className="description">
                Sew Protocol uses pluggable modules to define escrow behavior.
                Each module is selected at escrow creation and remains immutable
                for that escrow's lifetime.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. INDEPENDENT TYPES ────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Three independent module types</h3>
            <p>
              Each escrow uses three independent pluggable modules that work
              together:
            </p>
            <div className="guarantees-grid guarantees-grid--wide">
              <div className="guarantee-card fabric-panel">
                <h4>Release Strategy</h4>
                <p>
                  Controls when and how funds can be released (Immediate,
                  Time-based, or Conditional).
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Resolution Module</h4>
                <p>
                  Handles dispute escalation and determines outcomes (Single
                  Resolver or Decentralized).
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Yield Module</h4>
                <p>
                  Manages optional yield generation through external protocols
                  (Aave, Morpho, etc).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. CHARACTERISTICS ──────────────────────────────────────────── */}
        <section className="content-section">
          <h3>Module characteristics</h3>
          <div className="property-grid">
            <div className="property fabric-panel seam-accent">
              <h4>Selected at Creation</h4>
              <p>
                Sender specifies which modules to use. All three types must be
                selected.
              </p>
            </div>
            <div className="property fabric-panel seam-accent">
              <h4>Immutable for lifetime</h4>
              <p>
                Once created, modules cannot be changed, regardless of future
                protocol upgrades.
              </p>
            </div>
            <div className="property fabric-panel seam-accent">
              <h4>Isolated by Escrow</h4>
              <p>
                Module state is namespaced. Two escrows cannot collide on the
                same position.
              </p>
            </div>
            <div className="property fabric-panel seam-accent">
              <h4>Snapshotted</h4>
              <p>
                All config and fee parameters are captured at creation and
                stored immutably.
              </p>
            </div>
          </div>
        </section>

        {/* ── 4. YIELD METHODS ────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Yield module architecture</h3>
            <p>
              Yield modules implement a common interface (
              <code>IYieldModule</code>) to work with core escrow:
            </p>
            <div className="principles-grid">
              <div className="principle">
                <h4>initializeYield()</h4>
                <p>
                  Called during creation to deposit principal into the external
                  protocol.
                </p>
              </div>
              <div className="principle">
                <h4>unwindToEscrow()</h4>
                <p>
                  Called during release to withdraw funds and accumulated yield.
                </p>
              </div>
              <div className="principle">
                <h4>emergencyUnwind()</h4>
                <p>
                  Force-recovery mechanism if normal withdrawal fails. Funds
                  returned or revert.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. PROTOCOLS ────────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>Supported protocols</h3>
          <div className="guarantees-grid">
            <div className="guarantee-card fabric-panel">
              <h4>✅ Aave V3</h4>
              <p>
                Fully supported. Handles deposit/withdraw with aToken
                conversion.
              </p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>⏳ Morpho</h4>
              <p>
                Planned. Similar functionality to Aave with simplified
                mechanics.
              </p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>⏳ Curve</h4>
              <p>Planned for pool-specific LP positions and configuration.</p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>❌ Async Protocols</h4>
              <p>
                Lido and Rocket Pool (unstaking queues) deferred to future async
                module support.
              </p>
            </div>
          </div>
        </section>

        {/* ── 6. SAFETY ───────────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Safety invariants</h3>
            <div className="principles-grid">
              <div className="principle seam-accent">
                <h4>No Silent Loss</h4>
                <p>
                  Module must return funds or revert. Escrow knows exactly what
                  was recovered.
                </p>
              </div>
              <div className="principle seam-accent">
                <h4>No Fund Redirect</h4>
                <p>
                  Module only sends funds back to the specific calling escrow
                  vault.
                </p>
              </div>
              <div className="principle seam-accent">
                <h4>Delta Verification</h4>
                <p>
                  Escrow proves balance changes via before/after snapshots. Not
                  fooled by dust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. FINAL CTA ────────────────────────────────────────────────── */}
        <section
          className="section-breakout cta-breakout"
          style={{
            backgroundImage: "url('/images/ancient-sewing-machine.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="breakout-inner cta-inner">
            <h3>Build your own module.</h3>
            <p>
              Learn how to implement custom release strategies or resolution
              logic for your use case.
            </p>
            <div className="cta-btns">
              <Link href="/developer" className="cta-btn primary">
                Developer Guide
              </Link>
              <Link href="/docs/architecture" className="cta-btn">
                Technical Docs
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
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
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

        @media (max-width: 900px) {
          .guarantees-grid--wide {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 700px) {
          .guarantees-grid,
          .guarantees-grid--wide,
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
