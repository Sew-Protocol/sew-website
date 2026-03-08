export default function EverydayWallet() {
  return (
    <>
      <Header titlePre="Everyday Wallet" />
      <div className={sharedStyles.layout}>
        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section
          className="hero"
          style={{
            backgroundImage: "url('/images/needle-threads.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
          }}
        >
          <div className="hero-inner">
            <div className="hero-text">
              <span className="hero-eyebrow">User Interface</span>
              <h1>Everyday Wallet</h1>
              <h2 className="tagline">
                Safe transfers for real-world exchanges
              </h2>
              <p className="description">
                A simple interface for sending protected transfers on Ethereum.
                Hold funds safely until both sides are satisfied, without
                introducing intermediaries.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. WHAT IT IS ────────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>The interface layer</h3>
            <p>
              Everyday Wallet is an interface built on Sew Protocol. It turns
              standard transfers into protected ones:
            </p>
            <div className="guarantees-grid">
              <div className="guarantee-card fabric-panel">
                <h4>Protected by Escrow</h4>
                <p>
                  Funds are held by smart contracts, not sent directly to
                  recipients.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Locked Terms</h4>
                <p>
                  Release conditions and resolution paths are fixed at the
                  moment of send.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. WHY IT EXISTS ─────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>Why it exists</h3>
          <p>
            Most crypto transfers are instant and irreversible. This works when
            trust exists, but creates risk for buying from strangers or paying
            for services.
          </p>
          <div className="principles-grid">
            <div className="principle seam-accent">
              <h4>P2P Commerce</h4>
              <p>Buy second-hand items with delivery assurance.</p>
            </div>
            <div className="principle seam-accent">
              <h4>Service Payments</h4>
              <p>Pay for freelance work with milestone-based release.</p>
            </div>
            <div className="principle seam-accent">
              <h4>Remote Deals</h4>
              <p>Coordinate exchanges when parties are not in person.</p>
            </div>
          </div>
        </section>

        {/* ── 4. SAFER BY DEFAULT ─────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Safer by default</h3>
            <div className="comparison-grid">
              <div className="comparison-item fabric-panel seam-accent">
                <h4>Traditional Send</h4>
                <ul className="cons">
                  <li>✗ Irreversible error risk</li>
                  <li>✗ Zero delivery protection</li>
                  <li>✗ Instant finality</li>
                </ul>
              </div>
              <div className="comparison-item fabric-panel highlight stitched">
                <h4>Everyday Wallet</h4>
                <ul className="pros">
                  <li>✓ Funds held until released</li>
                  <li>✓ Built-in dispute handling</li>
                  <li>✓ Non-custodial safety</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. VISION ───────────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>Vision</h3>
          <p>
            Sending money on Ethereum is powerful, but risky. Everyday Wallet
            explores a simple idea:{' '}
            <strong>
              Safer transfers should be available where protection is needed.
            </strong>
          </p>
          <p>
            By making protection part of the send flow, we support safer
            everyday exchanges between people.
          </p>
        </section>

        {/* ── 6. FINAL CTA ────────────────────────────────────────────────── */}
        <section
          className="section-breakout cta-breakout"
          style={{
            backgroundImage: "url('/images/stitch-texture.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          }}
        >
          <div className="breakout-inner cta-inner">
            <h3>Experience protected transfers.</h3>
            <p>
              Explore how Sew Protocol provides the foundation for Everyday
              Wallet and other coordination tools.
            </p>
            <div className="cta-btns">
              <Link href="/how-it-works" className="cta-btn primary">
                How It Works
              </Link>
              <Link href="/use-cases" className="cta-btn">
                Use Cases
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
        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .comparison-item {
          padding: 1.5rem;
        }
        .comparison-item ul {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 0.9rem;
        }
        .comparison-item li {
          margin-bottom: 0.5rem;
        }
        .pros {
          color: #6ce5b1;
        }
        .cons {
          color: #ff6f61;
        }
        .comparison-item.highlight {
          border: 4px solid var(--primary);
          background: rgba(122, 221, 220, 0.05);
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
          .principles-grid,
          .comparison-grid {
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
