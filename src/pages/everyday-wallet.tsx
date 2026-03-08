export default function EverydayWallet() {
  return (
    <>
      <Header titlePre="Everyday Wallet" />
      <div>
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
              <span className="hero-eyebrow">
                Ecosystem / Reference Implementation
              </span>
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

        {/* ── 2. THE PROBLEM ────────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Safe transfers for the real world</h3>
            <p>
              Most Ethereum transfers are irreversible. This works for trusted
              counterparties, but creates significant risk when buying goods,
              services, or digital assets from strangers.
            </p>
            <div className="guarantees-grid">
              <div className="guarantee-card fabric-panel">
                <h4>Consumer Safety</h4>
                <p>
                  Never send funds "into the void." Funds are locked until you
                  confirm delivery or a resolver mediates.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Seller Assurance</h4>
                <p>
                  Sellers see the funds are committed and secured by code before
                  they ship or perform work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. USER EXPERIENCE ────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>The Experience</h3>
          <div className="principles-grid">
            <div className="principle seam-accent">
              <div className="step-marker">01</div>
              <h4>Secure</h4>
              <p>
                You send funds to a protected escrow. The recipient can see the
                funds are locked but cannot touch them yet.
              </p>
            </div>
            <div className="principle seam-accent">
              <div className="step-marker">02</div>
              <h4>Fulfill</h4>
              <p>
                The exchange happens—goods are shipped, code is pushed, or the
                service is completed.
              </p>
            </div>
            <div className="principle seam-accent">
              <div className="step-marker">03</div>
              <h4>Settle</h4>
              <p>
                You release the funds. If something goes wrong, you open a
                dispute to trigger a neutral review.
              </p>
            </div>
          </div>
        </section>

        {/* ── 4. HONEST TRADE-OFFS ─────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Honest trade-offs</h3>
            <p>
              Protection is a choice. Everyday Wallet is designed for specific
              scenarios where security is more important than speed.
            </p>
            <div className="comparison-grid">
              <div className="comparison-item fabric-panel seam-accent">
                <h4>Direct Transfer</h4>
                <p className="desc">Best for: Exchanges with high trust</p>
                <ul className="pros">
                  <li>✓ Instant finality</li>
                  <li>✓ Lowest gas cost</li>
                </ul>
                <ul className="cons">
                  <li>✗ Zero recourse for errors</li>
                  <li>✗ No delivery protection</li>
                </ul>
              </div>
              <div className="comparison-item fabric-panel highlight stitched">
                <h4>Everyday Wallet</h4>
                <p className="desc">Best for: Buying from strangers</p>
                <ul className="pros">
                  <li>✓ Funds held until delivery</li>
                  <li>✓ Standardized dispute path</li>
                </ul>
                <ul className="cons">
                  <li>✗ Slower than direct transfer</li>
                  <li>✗ Higher gas (escrow creation)</li>
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
