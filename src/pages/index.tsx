import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles['hero-texture']}>
        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-text">
              <span className="hero-eyebrow">🪡 Ethereum Infrastructure</span>
              <h1>Sew Protocol</h1>
              <p className="tagline">
                Non-custodial infrastructure for protected transfers.
              </p>
              <p className="description">
                A <strong>protected transfer</strong> is an ERC-20 transfer
                routed through escrow with predefined release and dispute
                resolution paths—enabling coordination without custody.
              </p>
              <div className="btns">
                <Link href="/how-it-works" className="button primary">
                  See How It Works
                </Link>
                <Link href="/security" className="button secondary">
                  Read Security Model
                </Link>
              </div>
              <div className="pill-grid">
                <span className="pill">Non-custodial</span>
                <span className="pill">Isolated</span>
                <span className="pill">Composable</span>
                <span className="pill">Interface-agnostic</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 1.5 FLOW VISUAL ─────────────────────────────────────────────── */}
        <section className="abstract-band" style={{ padding: '2rem 0' }}>
          <div className="abstract-band-inner" style={{ padding: '1rem 2rem' }}>
            <div className="simple-flow">
              <div className="flow-step">
                <span className="step-num">1</span>
                <strong>Create</strong>
                <p>Sender funds escrow</p>
              </div>
              <div className="flow-connector">→</div>
              <div className="flow-step">
                <span className="step-num">2</span>
                <strong>Fulfill</strong>
                <p>Agreement obligations met</p>
              </div>
              <div className="flow-connector">→</div>
              <div className="flow-step">
                <span className="step-num">3</span>
                <strong>Settle</strong>
                <p>Funds released to recipient</p>
              </div>
              <div className="flow-connector">OR</div>
              <div className="flow-step">
                <span className="step-num">⚖️</span>
                <strong>Resolve</strong>
                <p>Dispute resolution path</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. THE PROBLEM (WHY IT EXISTS) ────────────────────────────────── */}
        <section id="why-exists" className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Why direct transfers are insufficient</h3>
            <p>
              Ethereum transactions are irreversible by design. This is
              excellent for settlement finality, but creates persistent delivery
              and fraud risks for commerce and high-value coordination.
            </p>

            <div className="comparison-grid">
              <div className="comparison-item fabric-panel seam-accent">
                <h4>Direct Transfer</h4>
                <p className="desc">Standard ERC-20 transfer</p>
                <ul className="pros">
                  <li>✓ Instant</li>
                  <li>✓ Simple</li>
                </ul>
                <ul className="cons">
                  <li>✗ No protection</li>
                  <li>✗ No recourse</li>
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
                  <li>✗ Platform trust</li>
                </ul>
              </div>

              <div className="comparison-item fabric-panel highlight stitched">
                <h4>Sew Protocol</h4>
                <p className="desc">Protected escrow layer</p>
                <ul className="pros">
                  <li>✓ Non-custodial</li>
                  <li>✓ Rules upfront</li>
                  <li>✓ Built-in recourse</li>
                  <li>✓ Composable</li>
                </ul>
              </div>
            </div>

            <p style={{ marginTop: '2rem' }}>
              By moving protection to the <strong>transaction layer</strong>,
              Sew provides a neutral ground for coordination where outcomes are
              enforced by code, not intermediaries. Any wallet, marketplace, or
              coordination tool can build on it.
            </p>
          </div>
        </section>

        {/* ── 3. CORE GUARANTEES (SECURITY BREAKOUT) ───────────────────────── */}
        <section
          id="guarantees"
          className="section-breakout guarantees-breakout"
        >
          <div className="breakout-inner">
            <h3>Security invariants</h3>
            <p className="section-subtitle">
              Formal properties the protocol enforces at the contract level for
              every agreement.
            </p>
            <div className="guarantees-grid guarantees-grid--wide">
              <div className="guarantee-card fabric-panel">
                <h4>🤝 Non-custodial</h4>
                <p>
                  Funds are held by smart contracts, never by an operator or
                  resolver.
                </p>
                <code className="property-notation">
                  {'Custody ∉ {operator, resolver}'}
                </code>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>⚖️ Outcome-bounded</h4>
                <p>
                  A resolver can only choose from a fixed set of outcomes. No
                  discretion beyond that.
                </p>
                <code className="property-notation">
                  {'Outcome ∈ {RELEASE, REFUND}'}
                </code>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>📦 Per-escrow isolation</h4>
                <p>
                  A failure in one escrow cannot affect any other. No shared
                  state between transfers.
                </p>
                <code className="property-notation">
                  {'failure(escrow_n) ⊄ escrow_m'}
                </code>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>⚙️ Deterministic</h4>
                <p>
                  Settlement follows predefined transitions only. Path is locked
                  at escrow creation.
                </p>
                <code className="property-notation">
                  {'state ∈ {PENDING → RELEASED | REFUNDED | RESOLVED}'}
                </code>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>⏩ Forward-only</h4>
                <p>
                  Governance cannot modify active escrows. Changes apply only to
                  future transfers.
                </p>
                <code className="property-notation">
                  {'upgrade(t) → escrow.created < t only'}
                </code>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>🛑 Bounded emergency</h4>
                <p>
                  Emergency pause is time-limited and auto-expires. Cannot be
                  used indefinitely.
                </p>
                <code className="property-notation">
                  {'pause_max = 7d × 3 cycles'}
                </code>
              </div>
            </div>
            <p className="section-link">
              <Link href="/security">Full security model →</Link>
            </p>
          </div>
        </section>

        {/* ── 5. HOW IT HELPS ─────────────────────────────────────────────── */}
        <section id="how-it-helps" className="content-section">
          <h3>Impact</h3>
          <p>
            Sew transforms final-by-default transfers into rule-bound
            agreements. This enables safer coordination across the ecosystem:
          </p>
          <div className="guarantees-grid">
            <div className="guarantee-card fabric-panel">
              <h4>⏳ Trustless Settlement</h4>
              <p>
                Ensures both parties fulfill their obligations before
                transaction finality.
              </p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>✅ Programmable Release</h4>
              <p>
                Gives buyers and applications precise control over when and how
                funds are distributed.
              </p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>⏰ Automated Finality</h4>
              <p>
                Settlement can be triggered by time-based constraints, reducing
                manual intervention.
              </p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>⚖️ Built-in Recourse</h4>
              <p>
                Provides a standard pathway for resolving disagreements without
                introducing custody risk.
              </p>
            </div>
          </div>
        </section>

        {/* ── 6. WHAT IT IS NOT ───────────────────────────────────────────── */}
        <section id="what-it-is-not" className="content-section">
          <div className="thread-divider" />
          <h3>Protocol boundaries</h3>
          <ul className="not-list">
            <li>
              <strong>Not a wallet</strong> — Sew is infrastructure; interfaces
              like Everyday Wallet are built on top.
            </li>
            <li>
              <strong>Not a marketplace</strong> — Sew provides escrow logic,
              not trade execution or order books.
            </li>
            <li>
              <strong>Not a processor</strong> — Funds flow directly between
              parties via smart contracts.
            </li>
            <li>
              <strong>Not custodial</strong> — No party controls user funds;
              rules are strictly enforced by code.
            </li>
          </ul>
        </section>

        {/* ── 7. FINAL CTA ─────────────────────────────────────────── */}
        <section className="section-breakout cta-breakout">
          <div className="breakout-inner cta-inner">
            <h3>Review the security model.</h3>
            <p>
              Threat model, invariants, dispute economics, and upgrade
              semantics.
            </p>
            <div className="cta-btns">
              <Link href="/security" className="cta-btn primary">
                Security Model
              </Link>
              <Link href="/developer" className="cta-btn">
                Developer Docs
              </Link>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        /* ── Hero overrides ── */
        .hero {
          background-image: url('/images/abstract-texture.jpeg');
          background-size: cover;
          background-position: center 40%;
        }
        .hero::before {
          background: linear-gradient(
            108deg,
            rgba(14, 26, 29, 0.98) 0%,
            rgba(14, 26, 29, 0.95) 38%,
            rgba(14, 26, 29, 0.85) 58%,
            rgba(14, 26, 29, 0.75) 100%
          );
        }

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
        .btns {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 1.75rem;
        }
        .button {
          padding: 0.7rem 1.4rem;
          border-radius: var(--radius);
          font-size: 0.875rem;
          font-weight: 600;
          border: 1px solid transparent;
          transition: all 0.18s ease;
          text-decoration: none;
          white-space: nowrap;
        }
        .button.primary {
          background: var(--primary);
          color: var(--bg);
          border-color: var(--primary);
        }
        .button.primary:hover {
          background: var(--accent);
          border-color: var(--accent);
        }
        .button.secondary {
          background: rgba(122, 221, 220, 0.08);
          color: var(--primary);
          border-color: rgba(122, 221, 220, 0.35);
        }
        .button.secondary:hover {
          background: rgba(122, 221, 220, 0.15);
        }
        .proof-chips {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
        }
        .chip {
          padding: 0.25rem 0.75rem;
          border: 1px solid rgba(122, 221, 220, 0.2);
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: var(--accents-3);
          background: rgba(122, 221, 220, 0.04);
        }
        /* ── Mobile ── */
        @media (max-width: 860px) {
          .hero-inner {
            padding: 3rem 1.75rem;
            min-height: auto;
          }
          .hero-text h1 {
            font-size: 2.4rem;
          }
        }
        @media (max-width: 500px) {
          .hero-text h1 {
            font-size: 2rem;
          }
        }

        /* ── Shared section overrides ── */
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
        .section-link {
          margin-top: 2rem;
        }
        .section-link a {
          font-weight: 500;
        }

        /* ── Breakout Specifics ── */
        /* Security properties — needle + threads photo */
        .guarantees-breakout {
          background-image: url('/images/needle-threads.jpg');
          background-size: cover;
          background-position: center 35%;
          margin: 4rem 0;
        }
        .guarantees-breakout::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(14, 26, 29, 0.96) 0%,
            rgba(14, 26, 29, 0.92) 40%,
            rgba(14, 26, 29, 0.96) 100%
          );
          z-index: 0;
        }
        /* Cards on the breakout need slightly elevated glass look */
        .guarantees-breakout .guarantee-card {
          background: rgba(14, 26, 29, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-color: rgba(122, 221, 220, 0.25);
        }
        /* Final CTA — vintage needle close-up */
        .cta-breakout {
          background-image: url('/images/needle-closeup.jpg');
          background-size: cover;
          background-position: center 60%;
          margin: 4rem 0 0;
        }
        .cta-breakout::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            108deg,
            rgba(14, 26, 29, 0.98) 0%,
            rgba(14, 26, 29, 0.94) 50%,
            rgba(14, 26, 29, 0.9) 100%
          );
          z-index: 0;
        }

        /* ── Core Guarantees grid ─────────────────────────────────────────── */
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
          margin: 0 0 0.75rem 0;
          font-size: 0.85rem;
          color: var(--accents-3);
          line-height: 1.5;
        }

        /* ── Breakout inner spacing ───────────────────────────────────────── */

        .pill-grid {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin: 1rem 0;
        }
        .pill {
          background: #22343a;
          color: var(--accents-2);
          padding: 0.25rem 0.75rem;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        /* ── Simple flow ──────────────────────────────────────────────────── */
        .simple-flow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          text-align: center;
        }
        .flow-step {
          flex: 1;
        }
        .flow-step strong {
          display: block;
          font-size: 0.9rem;
          color: var(--primary);
          margin-bottom: 0.25rem;
        }
        .flow-step p {
          margin: 0;
          font-size: 0.75rem;
          color: var(--accents-3);
        }
        .step-num {
          display: inline-block;
          width: 24px;
          height: 24px;
          line-height: 22px;
          border: 1px solid var(--primary);
          border-radius: 50%;
          font-size: 0.7rem;
          color: var(--primary);
          margin-bottom: 0.5rem;
          font-weight: 800;
        }
        .flow-connector {
          color: var(--accents-5);
          font-weight: 800;
          font-size: 0.8rem;
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
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
          list-style: none;
        }
        .comparison-item .pros li::before {
          content: '✓ ';
          color: #6ce5b1;
          font-weight: bold;
          margin-left: -1.2rem;
        }
        .comparison-item .cons li::before {
          content: '✗ ';
          color: #ff6f61;
          font-weight: bold;
          margin-left: -1.2rem;
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
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
          list-style: none;
        }
        .comparison-item .pros li::before {
          content: '✓ ';
          color: #6ce5b1;
          font-weight: bold;
          margin-left: -1.2rem;
        }
        .comparison-item .cons li::before {
          content: '✗ ';
          color: #ff6f61;
          font-weight: bold;
          margin-left: -1.2rem;
        }

        /* ── Design principles ────────────────────────────────────────────── */
        .principles-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 2rem;
        }
        .principle h4 {
          margin-bottom: 0.5rem;
        }

        /* ── What it is NOT ───────────────────────────────────────────────── */
        .not-list {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .not-list li {
          padding: 1rem;
          background: rgba(122, 221, 220, 0.04);
          border: 1px solid rgba(245, 158, 11, 0.3);
          border-left: 4px solid #f59e0b;
          border-radius: 4px;
          font-size: 0.95rem;
        }
        .not-list strong {
          color: #f59e0b;
        }

        /* ── Evidence & Readiness ─────────────────────────────────────────── */
        .readiness-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 1.75rem;
        }
        .readiness-col h4 {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accents-3);
          margin: 0 0 1rem 0;
        }
        .readiness-col.funded h4 {
          color: #7adddc;
        }
        .check-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .check-list li {
          position: relative;
          padding: 0.45rem 0 0.45rem 1.5rem;
          font-size: 0.88rem;
          color: var(--accents-2);
          border-bottom: 1px solid #22343a;
          line-height: 1.5;
        }
        .check-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #059669;
          font-weight: 700;
          font-size: 0.8rem;
        }
        .readiness-col.funded .check-list li::before {
          content: '→';
          color: #7adddc;
        }
        .readiness-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }
        .readiness-link {
          padding: 0.45rem 1rem;
          border: 1px solid var(--accents-2);
          border-radius: var(--radius);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--fg);
          text-decoration: none;
          transition: all 0.15s;
        }
        .readiness-link:hover {
          background: var(--fg);
          color: var(--bg);
          border-color: var(--fg);
        }

        /* ── Responsive ───────────────────────────────────────────────────── */
        @media (max-width: 900px) {
          .guarantees-grid--wide {
            grid-template-columns: 1fr 1fr;
          }
          .breakout-inner {
            padding: 4rem 2rem;
          }
        }
        @media (max-width: 700px) {
          .guarantees-grid,
          .guarantees-grid--wide,
          .readiness-grid,
          .principles-grid {
            grid-template-columns: 1fr;
          }
          .cta-inner h3 {
            font-size: 1.65rem;
          }
          .cta-btns {
            flex-direction: column;
            align-items: center;
          }
          .breakout-inner {
            padding: 3rem 1.5rem;
          }
        }
      `}</style>
    </>
  )
}
