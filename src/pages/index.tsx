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
                Protected transfers. Dispute resolution built in.
              </p>
              <p className="description">
                An ERC-20 transfer routed through escrow, with predefined
                release and dispute resolution paths — enforced by smart
                contracts, not intermediaries.
              </p>
              <div className="btns">
                <Link href="/security" className="button primary">
                  Read Security Model
                </Link>
                <Link href="/architecture" className="button secondary">
                  View Architecture
                </Link>
              </div>
              <div className="proof-chips">
                <span className="chip">Non-custodial</span>
                <span className="chip">Isolated per escrow</span>
                <span className="chip">Onchain enforceable outcomes</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. WHAT IT IS ───────────────────────────────────────────────── */}
        <section id="what-is-it" className="content-section">
          <h3>What it is</h3>
          <p>
            Sew Protocol introduces protected transfers as a native pattern on
            Ethereum.
          </p>
          <p>
            A <strong>protected transfer</strong> is an ERC-20 transfer routed
            through escrow, with predefined release and dispute resolution
            paths.
          </p>
          <p>
            Instead of sending tokens directly from one address to another, a
            transfer can be routed through a deterministic escrow that holds
            funds until release conditions are met.
          </p>
          <div className="pill-grid">
            <span className="pill">Non-custodial</span>
            <span className="pill">Permissionless</span>
            <span className="pill">Composable</span>
            <span className="pill">Interface-agnostic</span>
          </div>
          <p>Any wallet, marketplace, or application can build on it.</p>
        </section>

        {/* ── 3. CORE GUARANTEES — full-bleed breakout ────────────────────── */}
        <section
          id="guarantees"
          className="section-breakout guarantees-breakout"
        >
          <div className="breakout-inner">
            <h3>Security properties</h3>
            <p className="section-subtitle">
              Invariants the protocol enforces at the contract level, for every
              escrow.
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
                <h4>⚙️ Deterministic state machine</h4>
                <p>
                  Settlement follows predefined transitions only. No
                  discretionary paths.
                </p>
                <code className="property-notation">
                  {'state ∈ {PENDING → RELEASED | REFUNDED | RESOLVED}'}
                </code>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>⏩ Forward-only upgrades</h4>
                <p>
                  Governance cannot modify active escrows. Changes apply only to
                  future transfers.
                </p>
                <code className="property-notation">
                  {'upgrade(t) → escrow.created < t only'}
                </code>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>🛑 Bounded emergency controls</h4>
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

        {/* ── 4. WHAT IT IS NOT ───────────────────────────────────────────── */}
        <section id="what-it-is-not" className="content-section">
          <h3>What it is NOT</h3>
          <ul className="not-list">
            <li>
              <strong>Not a wallet</strong> — Sew is infrastructure; interfaces
              like Everyday Wallet are built on top
            </li>
            <li>
              <strong>Not a marketplace</strong> — Sew provides escrow logic,
              not trade execution
            </li>
            <li>
              <strong>Not a transfer processor</strong> — Funds flow directly
              between parties via smart contracts
            </li>
            <li>
              <strong>Not custodial</strong> — No party controls user funds;
              rules are enforced by code
            </li>
          </ul>
        </section>

        {/* ── 5. WHY IT EXISTS ────────────────────────────────────────────── */}
        <section id="why-exists" className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Why it exists</h3>
            <p>
              Ethereum transactions are irreversible by design. This property
              enables trustless settlement, but it also creates persistent risks
              for commerce and agreements.
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

            <p style={{ marginTop: '2rem' }}>
              Protection today is usually added off-chain, through custodians,
              or as application-specific logic. Sew moves protection to the
              transaction layer itself, enabling coordination without custody.
            </p>
          </div>
        </section>

        {/* ── 6. HOW IT HELPS ─────────────────────────────────────────────── */}
        <section id="how-it-helps" className="content-section">
          <h3>How it helps</h3>
          <p>
            Sew allows an erc20 transfer to be structured as an escrowed
            transfer with clear release and dispute resolution paths. This
            enables:
          </p>
          <div className="guarantees-grid">
            <div className="guarantee-card fabric-panel">
              <h4>⏳ Funds held until conditions are met</h4>
              <p>
                Ensures both parties fulfill their obligations before finality.
              </p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>✅ Buyer-initiated release flows</h4>
              <p>Gives buyers control over when funds are settled.</p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>⏰ Timed releases</h4>
              <p>Automated settlement based on time-based triggers.</p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>⚖️ Dispute resolution pathways</h4>
              <p>Structured arbitration without introducing custody risk.</p>
            </div>
          </div>
        </section>

        {/* ── 7. DESIGN PRINCIPLES ────────────────────────────────────────── */}
        <section id="design-principles" className="abstract-band">
          <div className="abstract-band-inner">
            <div className="thread-divider" />
            <h3>Design principles</h3>
            <div className="principles-grid">
              <div className="principle seam-accent">
                <h4>Non-custodial by construction</h4>
                <p>
                  Funds remain under smart contract control. No party can
                  arbitrarily redirect assets.
                </p>
              </div>
              <div className="principle seam-accent">
                <h4>Deterministic execution</h4>
                <p>
                  Release and resolution follow predefined rules encoded at
                  escrow creation.
                </p>
              </div>
              <div className="principle seam-accent">
                <h4>Isolation of risk</h4>
                <p>
                  Each escrow is self-contained. Failures do not propagate
                  across the system.
                </p>
              </div>
              <div className="principle seam-accent">
                <h4>Changes affect only new escrows</h4>
                <p>
                  Upgrades and module swaps apply forward, preserving the
                  integrity of existing agreements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. A PRIMITIVE ──────────────────────────────────────────────── */}
        <section className="content-section">
          <div className="thread-divider" />
          <h3>A primitive for protected transfers</h3>
          <p>
            Sew defines a simple idea: A transfer can be protected before it is
            finalized.
          </p>
          <p>
            This makes it possible to coordinate exchanges, deliveries, and
            agreements without introducing custody. The same primitive can
            support:
          </p>
          <ul className="not-list">
            <li>🛒 Peer-to-peer commerce</li>
            <li>🏪 Marketplaces</li>
            <li>📝 Onchain agreements</li>
            <li>💼 Service transfers</li>
            <li>🛡️ Interface-level safety</li>
          </ul>
        </section>

        {/* ── 9. BUILT-IN DISPUTE RESOLUTION ──────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <div className="thread-divider" />
            <h3>⚖️ Built-in dispute resolution</h3>
            <p>
              Ethereum transfers are final. Sew adds structured resolution
              without custody — neutral outcomes enforced by smart contracts.
            </p>
            <p>
              If parties disagree, a resolver can be assigned. The resolver
              cannot seize funds or act outside predefined boundaries. The
              outcome (Release or Refund) is enforced onchain.
            </p>
            <p>
              This transforms escrow from a protection mechanism into an{' '}
              <strong>enforceable coordination primitive</strong>.
            </p>
            <p>
              <Link href="/dispute-resolution">Dispute architecture →</Link>
              {'  '}
              <Link href="/security#dispute-economics">
                Dispute economics →
              </Link>
            </p>
          </div>
        </section>
        {/* ── 11. VISION ──────────────────────────────────────────────────── */}
        <section className="content-section">
          <div className="thread-divider" />
          <h3>Vision</h3>
          <p>
            Ethereum made programmable money possible. Sew explores what happens
            when transfers themselves become programmable agreements.
          </p>
          <p>
            By introducing protection at the moment of transfer, the protocol
            aims to support safer coordination between parties who do not
            already trust each other.
          </p>
          <p>This is a long-term infrastructure effort focused on:</p>
          <ul>
            <li>🛡️ Safer everyday transactions</li>
            <li>📏 Clearer settlement patterns</li>
            <li>🔒 Reduced reliance on intermediaries</li>
          </ul>
        </section>

        {/* ── 12. FINAL CTA — full-bleed breakout ─────────────────────────── */}
        <section className="section-breakout cta-breakout">
          <div className="breakout-inner cta-inner">
            <h3>Review the security model.</h3>
            <p>
              Threat model, invariants, dispute economics, and upgrade semantics
              — all in one place.
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
