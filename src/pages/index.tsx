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
                Non-custodial infrastructure for protected transfers on Ethereum
              </p>
              <p className="description">
                Route ERC-20 transfers through escrow with predefined release
                and dispute resolution paths, without requiring custody or
                centralized trust.
              </p>
              <div className="btns">
                <Link href="/how-it-works" className="button primary">
                  See How It Works
                </Link>
                <Link href="/security" className="button secondary">
                  Security Model
                </Link>
              </div>
              <div className="pill-grid">
                <span className="pill">Non-custodial</span>
                <span className="pill">Forward-only</span>
                <span className="pill">Isolated</span>
                <span className="pill">Composable</span>
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
                <p>Obligations met</p>
              </div>
              <div className="flow-connector">→</div>
              <div className="flow-step">
                <span className="step-num">3</span>
                <strong>Settle</strong>
                <p>Released to recipient</p>
              </div>
              <div className="flow-connector">OR</div>
              <div className="flow-step">
                <span className="step-num">⚖️</span>
                <strong>Resolve</strong>
                <p>Dispute resolution</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. THE PROBLEM (WHY IT EXISTS) ────────────────────────────────── */}
        <section id="why-exists" className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Why direct transfers are insufficient</h3>
            <p>
              Ethereum transactions are irreversible by design. That is a
              strength for settlement finality, but it creates persistent risk
              when value must move before goods, services, or offchain
              obligations are fully delivered.
            </p>

            <div
              className="comparison-table-wrapper"
              style={{ marginTop: '2rem' }}
            >
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>Direct Transfer</th>
                    <th>Custodial Escrow</th>
                    <th>Sew Protocol</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="dimension-label">Who holds funds</td>
                    <td className="status-neutral">Recipient</td>
                    <td className="status-warning">Platform</td>
                    <td className="status-positive">Smart Contract</td>
                  </tr>
                  <tr>
                    <td className="dimension-label">Dispute Resolution</td>
                    <td className="status-warning">None</td>
                    <td className="status-warning">Platform operator</td>
                    <td className="status-positive">Resolver pathway</td>
                  </tr>
                  <tr>
                    <td className="dimension-label">Risk Model</td>
                    <td className="status-neutral">Final immediately</td>
                    <td className="status-warning">Custody risk</td>
                    <td className="status-positive">Non-custodial</td>
                  </tr>
                  <tr>
                    <td className="dimension-label">Reusable Across Apps</td>
                    <td className="status-positive">Yes</td>
                    <td className="status-warning">No</td>
                    <td className="status-positive">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p style={{ marginTop: '2rem' }}>
              Sew introduces a reusable alternative: a protected transfer
              primitive that adds structure before finality, without introducing
              custody.
            </p>
          </div>
        </section>

        {/* ── 3. MECHANICS (WHAT SEW DOES) ─────────────────────────────────── */}
        <section id="what-is-it" className="content-section">
          <h3>What Sew does</h3>
          <p>
            Instead of sending funds directly to a recipient, Sew routes the
            transfer through escrow. The agreement is defined at creation:
          </p>
          <ul className="check-list" style={{ marginBottom: '2rem' }}>
            <li>Defined release and dispute authorization</li>
            <li>Yield presets and timeout parameters</li>
            <li>Snapshot of module addresses</li>
          </ul>
          <p>
            Once created, those terms are fixed. Settlement then follows a
            bounded path: Release, Refund, or Resolve. No party can redirect
            funds outside those predefined outcomes.
          </p>
          <div className="section-link">
            {process.env.NEXT_PUBLIC_SHOW_DOCUMENTATION === 'true' ? (
              <Link href="/docs/quickstart">See technical mechanics →</Link>
            ) : (
              <Link href="/how-it-works">See technical mechanics →</Link>
            )}
          </div>
        </section>

        {/* ── 4. CORE GUARANTEES (SECURITY BREAKOUT) ───────────────────────── */}
        <section
          id="guarantees"
          className="section-breakout guarantees-breakout"
        >
          <div className="breakout-inner">
            <h3>Core security properties</h3>
            <p className="section-subtitle">
              Sew is designed as a containment layer. We focus on limiting
              scope, bounding outcomes, and preserving per-agreement integrity.
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
                <h4>⚖️ Bounded outcomes</h4>
                <p>
                  Resolvers evaluate evidence, but can only select from
                  protocol-defined outcomes.
                </p>
                <code className="property-notation">
                  {'Outcome ∈ {RELEASE, REFUND}'}
                </code>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>📦 Per-escrow immutability</h4>
                <p>
                  Agreements remain locked to the rules and module addresses
                  captured at creation.
                </p>
                <code className="property-notation">
                  {'failure(escrow_n) ⊄ escrow_m'}
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
                <h4>🛡️ Failure isolation</h4>
                <p>
                  A failure in one escrow or module path should not affect
                  unrelated escrows.
                </p>
                <code className="property-notation">{'state_n ⟂ state_m'}</code>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>🛑 Time-bounded powers</h4>
                <p>
                  Guardian actions are constrained, temporary, and cannot seize
                  or redirect user funds.
                </p>
                <code className="property-notation">
                  {'pause_max = 7d × 3 cycles'}
                </code>
              </div>
            </div>
            <p className="section-link">
              <Link href="/security">Read Security Model →</Link>
            </p>
          </div>
        </section>

        {/* ── 5. ROADMAP ──────────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Launch state and roadmap</h3>
            <p>
              Sew is being rolled out in phases. The protocol is designed so
              that governance can evolve future behavior without retroactively
              changing active agreements.
            </p>
            <div className="readiness-grid">
              <div className="readiness-col">
                <h4>Current phase</h4>
                <ul className="check-list">
                  <li>Core escrow architecture</li>
                  <li>Single trusted resolver</li>
                  <li>Base Sepolia deployment</li>
                </ul>
              </div>
              <div className="readiness-col">
                <h4>Next phases</h4>
                <ul className="check-list">
                  <li>Multi-tier resolution</li>
                  <li>Staking-based accountability</li>
                  <li>Decentralized arbitration</li>
                </ul>
              </div>
            </div>
            <div className="section-link">
              <Link href="/release-plan">View full roadmap →</Link>
            </div>
          </div>
        </section>

        {/* ── 6. MISSION & APPROACH ────────────────────────────────────────── */}
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

        {/* ── 7. PATHWAYS ─────────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>Find your path through Sew Protocol</h3>
          <div className="guarantees-grid">
            <div className="guarantee-card fabric-panel">
              <h4>Builders</h4>
              <p>
                Integrate protected transfers into your application.{' '}
                <Link href="/developer" style={{ fontWeight: 600 }}>
                  Developer Docs →
                </Link>
              </p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>Researchers</h4>
              <p>
                Deep dive into security and protocol architecture.{' '}
                <Link href="/security" style={{ fontWeight: 600 }}>
                  Security Model →
                </Link>
              </p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>Governance</h4>
              <p>
                Understand roles, tokenomics, and the roadmap.{' '}
                <Link href="/governance" style={{ fontWeight: 600 }}>
                  Governance →
                </Link>
              </p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>Ecosystem</h4>
              <p>
                Explore verified contracts and integrations.{' '}
                <Link href="/contracts" style={{ fontWeight: 600 }}>
                  Deployment →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ── 8. PROTOCOL BOUNDARIES ───────────────────────────────────────── */}

        <section id="what-it-is-not" className="content-section">
          <div className="thread-divider" />
          <h3>Protocol boundaries</h3>
          <p>Sew is infrastructure, not an application layer destination.</p>
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

        {/* ── 8. FINAL CTA ─────────────────────────────────────────── */}
        <section className="section-breakout cta-breakout">
          <div className="breakout-inner cta-inner">
            <h3>Protected transfers, without custody</h3>
            <p>
              Explore the protocol mechanics, security model, and integration
              surface.
            </p>
            <div className="cta-btns">
              <Link href="/developer" className="cta-btn primary">
                Developer Docs
              </Link>
              <Link href="/security" className="cta-btn">
                Security Model
              </Link>
              <Link href="/contracts" className="cta-btn">
                Contracts
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

        .comparison-table-wrapper {
          overflow-x: auto;
        }
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }
        .comparison-table th,
        .comparison-table td {
          padding: 0.75rem;
          text-align: center;
          border-bottom: 1px solid var(--accents-6);
        }
        .comparison-table th {
          background: var(--accents-6);
          font-weight: 600;
        }
        .comparison-table th:first-child,
        .comparison-table td:first-child {
          text-align: left;
        }
        .dimension-label {
          font-weight: 500;
        }
        .status-positive {
          color: #059669;
        }
        .status-neutral {
          color: var(--accents-3);
        }
        .status-warning {
          color: #dc2626;
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
