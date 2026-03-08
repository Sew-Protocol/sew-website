import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function WhySew() {
  return (
    <>
      <Header titlePre="Why Sew" />
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
              <span className="hero-eyebrow">The Value Proposition</span>
              <h1>Why Sew Protocol?</h1>

              <h2 className="tagline">
                The case for non-custodial, structured protection on Ethereum
              </h2>
              <p className="description">
                Ethereum transactions are final. But coordination requires
                optionality. Sew Protocol adds structured protection to
                transfers without introducing custody.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. THE PROBLEM ──────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>The problem</h3>

          <p>
            Today, onchain value transfer has a stark choice: send or don't
            send.
          </p>
          <div className="guarantees-grid">
            <div className="guarantee-card fabric-panel">
              <h4>Direct transfer</h4>
              <p>
                Immediate, irreversible, no protection. Great for trust-heavy
                exchanges, risky for strangers.
              </p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>Custodial escrow</h4>
              <p>
                Protection exists, but you must trust a third party with your
                funds. Introducing counterparty risk with the intermediary.
              </p>
            </div>
          </div>
          <p style={{ marginTop: '2rem' }}>
            This creates friction for any exchange, delivery, or agreement
            requiring coordination between parties. Trust risk limits who can
            participate and on what terms.
          </p>
        </section>

        {/* ── 3. THE SOLUTION ─────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>The solution: Protected transfers</h3>

            <p>
              Sew Protocol introduces protected transfers as a native pattern on
              Ethereum.
            </p>
            <p>
              A protected transfer is an ERC-20 transfer routed through escrow,
              with predefined release and dispute resolution paths. Neither
              party loses custody. Both know the rules upfront. Settlement is
              enforced onchain.
            </p>
            <div className="pill-grid">
              <span className="pill">Non-custodial</span>
              <span className="pill">Composable</span>
              <span className="pill">Deterministic</span>
              <span className="pill">Dispute-enabled</span>
            </div>
          </div>
        </section>

        {/* ── 4. COMPARISON ───────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>How it compares</h3>

          <p className="section-subtitle">
            Different transfer patterns serve different needs. Here's how Sew
            fits in.
          </p>
          <div className="comparison-grid">
            <div className="comparison-item fabric-panel seam-accent">
              <h4>Direct Transfer</h4>
              <p className="desc">Standard ERC20 transfer</p>
              <ul className="pros">
                <li>✓ Instant</li>
                <li>✓ Simple</li>
              </ul>
              <ul className="cons">
                <li>✗ No protection</li>
                <li>✗ No conditions</li>
              </ul>
            </div>

            <div className="comparison-item fabric-panel seam-accent">
              <h4>Custodial Escrow</h4>
              <p className="desc">Marketplace, processor</p>
              <ul className="pros">
                <li>✓ Protection</li>
                <li>✓ Dispute handling</li>
              </ul>
              <ul className="cons">
                <li>✗ Custody required</li>
                <li>✗ Trust cost</li>
              </ul>
            </div>

            <div className="comparison-item fabric-panel highlight stitched">
              <h4>Sew Protocol</h4>
              <p className="desc">Protected escrow layer</p>
              <ul className="pros">
                <li>✓ Non-custodial</li>
                <li>✓ Structured protection</li>
                <li>✓ Dispute resolution</li>
                <li>✓ Composable</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 5. ENABLES ──────────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>What Sew enables</h3>

            <p>
              By separating the protection layer from any single application,
              Sew becomes infrastructure that any use case can build on.
            </p>
            <div className="guarantees-grid guarantees-grid--wide">
              <div className="guarantee-card fabric-panel">
                <h4>P2P Commerce</h4>
                <p>Direct trades without intermediaries.</p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Marketplaces</h4>
                <p>Reusable escrow logic across platforms.</p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Onchain agreements</h4>
                <p>Conditional settlement with neutrality.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. PRINCIPLES ───────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>Core principles</h3>

          <div className="principles-grid">
            <div className="principle seam-accent">
              <h4>Non-custodial</h4>
              <p>
                Funds are held by smart contracts, never by operators or
                intermediaries.
              </p>
            </div>
            <div className="principle seam-accent">
              <h4>Deterministic</h4>
              <p>
                Release and resolution rules are defined at escrow creation.
              </p>
            </div>
            <div className="principle seam-accent">
              <h4>Composable</h4>
              <p>
                Built as a reusable primitive for any wallet, app, or protocol.
              </p>
            </div>
          </div>
        </section>

        {/* ── 7. FINAL CTA breakout ───────────────────────────────────────── */}
        <section
          className="section-breakout cta-breakout"
          style={{
            backgroundImage: "url('/images/ancient-sewing-machine.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="breakout-inner cta-inner">
            <h3>Ready to secure your transfers?</h3>
            <p>
              Explore how Sew Protocol can protect your everyday exchanges on
              Ethereum.
            </p>
            <div className="cta-btns">
              <Link href="/how-it-works" className="cta-btn primary">
                How It Works
              </Link>
              <Link href="/developer" className="cta-btn">
                Developer Docs
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
          margin: 0 0 2rem;
          line-height: 1.75;
          max-width: 480px;
        }
        .content-section {
          margin: 0 auto;
          max-width: 800px;
          padding: 4rem 2rem;
        }
        .section-subtitle {
          color: var(--accents-3);
          font-size: 0.95rem;
          margin-top: -0.5rem;
          margin-bottom: 2rem;
        }
        .pill-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin: 2rem 0;
        }
        .pill {
          background: rgba(122, 221, 220, 0.08);
          color: var(--primary);
          border: 1px solid rgba(122, 221, 220, 0.35);
          padding: 0.4rem 1.2rem;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .comparison-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }
        .comparison-item {
          padding: 1.5rem;
        }
        .comparison-item.highlight {
          border: 4px solid var(--primary);
          background: rgba(122, 221, 220, 0.05);
        }
        .comparison-item h4 {
          margin-top: 0;
          margin-bottom: 0.5rem;
        }
        .comparison-item .desc {
          font-size: 0.9rem;
          color: var(--accents-3);
          margin: 0.5rem 0 1rem;
        }
        .comparison-item ul {
          margin: 0.5rem 0;
          padding-left: 1.5rem;
          font-size: 0.9rem;
        }
        .comparison-item .pros {
          color: #6ce5b1;
        }
        .comparison-item .cons {
          color: #ff6f61;
        }
        .principle-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }
        .principle {
          padding: 1.5rem;
        }
        .page-meta {
          margin: 4rem auto;
          max-width: 800px;
          padding: 0 2rem;
          font-size: 0.85rem;
          color: var(--accents-3);
          text-align: center;
        }

        /* ── Grids from Index ── */
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

        /* ── Breakout CTA Specifics ── */
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
          .comparison-grid,
          .principle-grid {
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
