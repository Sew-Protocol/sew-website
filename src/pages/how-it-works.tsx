import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function HowItWorks() {
  return (
    <>
      <Header titlePre="How It Works" />
      <div className={sharedStyles.layout}>
        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section
          className="hero"
          style={{
            backgroundImage: "url('/images/abstract-texture.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="hero-inner">
            <div className="hero-text">
              <span className="hero-eyebrow">Protocol Mechanics</span>
              <h1>How It Works</h1>
              <h2 className="tagline">
                Escrow lifecycle, state transitions, and dispute mechanics
              </h2>
              <p className="description">
                Sew Protocol is a security layer for transfers on Base (Ethereum
                L2). Instead of transferring funds directly, transfers can be
                held in escrow until conditions are met.
              </p>
              <p className="glossary-note">
                <small>
                  <strong>Glossary:</strong> A protected transfer is an ERC-20
                  transfer routed through escrow. "Transfer" refers to the
                  onchain token movement; "payment" refers to the user intent.
                </small>
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. WHAT IT IS NOT ───────────────────────────────────────────── */}
        <section className="content-section">
          <h3>What Sew Is Not</h3>
          <p>Sew is not a marketplace, a wallet, or a court.</p>
          <p>
            Sew is a <strong>security layer for transfers</strong>. It provides
            the infrastructure for protected transfers while leaving user
            experience, dispute evaluation, and interface design to the
            applications built on top.
          </p>
        </section>

        {/* ── 3. CORE IDEA ────────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>The core idea</h3>
            <p>
              A standard token transfer is immediate and final. A protected
              transfer is different:
            </p>
            <div className="guarantees-grid guarantees-grid--wide">
              <div className="guarantee-card fabric-panel">
                <h4>Held in escrow</h4>
                <p>
                  Funds are placed into a smart contract, not sent directly.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Rules upfront</h4>
                <p>
                  Release conditions are defined at creation and cannot change.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Deterministic</h4>
                <p>Settlement happens when rules are met, enforced by code.</p>
              </div>
            </div>
            <p className="key-concept" style={{ marginTop: '2rem' }}>
              Each escrow captures its configuration at creation and cannot be
              changed. Governance changes only affect future escrows, never
              existing ones.
            </p>
          </div>
        </section>

        {/* ── 4. LIFECYCLE ────────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>Lifecycle of a protected transfer</h3>

          <div className="lifecycle-grid">
            <div className="lifecycle-step fabric-panel seam-accent">
              <h4>1) Creation</h4>
              <p>
                A user initiates a transfer through an interface. Terms (token,
                amount, sender, recipient, release strategy, resolution path)
                are defined and locked.
              </p>
            </div>

            <div className="lifecycle-step fabric-panel seam-accent">
              <h4>2) Active escrow state</h4>
              <p>
                Funds remain locked. Neither party can access them unilaterally.
                This creates a neutral coordination phase.
              </p>
            </div>

            <div className="lifecycle-step fabric-panel seam-accent">
              <h4>3) Release</h4>
              <p>
                Settlement occurs via release (sender confirms), time-based
                trigger, or predefined conditions being met.
              </p>
            </div>

            <div className="lifecycle-step fabric-panel seam-accent">
              <h4>4) Dispute (if needed)</h4>
              <p>
                If parties disagree, either can open a dispute. A neutral
                resolver decides: Release or Refund.
              </p>
            </div>
          </div>

          <p
            className="learn-more"
            style={{ marginTop: '2rem', textAlign: 'center' }}
          >
            <Link href="/docs/lifecycle">See full lifecycle details →</Link>
          </p>
        </section>

        {/* ── 5. YIELD ────────────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Optional yield generation</h3>
            <p>
              If enabled at creation, funds may generate yield through external
              protocols (e.g., Aave V3).
            </p>
            <ul>
              <li>The yield module is locked for the escrow's lifetime.</li>
              <li>Yield can go to sender or be disabled.</li>
              <li>
                Funds remain under escrow control; the module is just an
                integration.
              </li>
            </ul>
            <div className="disclaimer-block">
              <p>
                <strong>Yield disclaimer:</strong> External protocol risk
                exists. Governance can set exposure caps, and escrow can unwind
                positions back to custody in emergencies.
              </p>
            </div>
          </div>
        </section>

        {/* ── 6. DISAGREEMENT ─────────────────────────────────────────────── */}
        <section className="content-section">
          <h3 id="what-if-disagreement">Dispute Resolution</h3>
          <p>
            Ethereum transfers are final. Sew adds structured resolution without
            custody: neutral outcomes enforced by smart contracts.
          </p>

          <div className="principles-grid">
            <div className="principle seam-accent">
              <h4>The neutral resolver</h4>
              <p>
                Assigned when a dispute is opened. Reviews evidence. Can only
                decide: Release or Refund. No custody of funds.
              </p>
            </div>
            <div className="principle seam-accent">
              <h4>Isolation of risk</h4>
              <p>
                Impact is limited to that single dispute. Other escrows are
                unaffected. No systemic resolver risk.
              </p>
            </div>
          </div>

          <div
            className="lifecycle-step fabric-panel stitched"
            style={{ marginTop: '2rem' }}
          >
            <h4>Resolution modes</h4>
            <p>
              <strong>v1 (Launch):</strong> Single trusted resolver. Fast,
              simple. <br />
              <strong>v2+:</strong> Multiple resolvers with staking, appeal
              bonds, and decentralized arbitration.
            </p>
          </div>
        </section>

        {/* ── 7. MODULE ARCHITECTURE ──────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Module architecture</h3>
            <p>
              Sew uses pluggable modules selected at creation to define
              behavior:
            </p>
            <div className="guarantees-grid">
              <div className="guarantee-card fabric-panel">
                <h4>Release Strategy</h4>
                <p>Controls who can release and when.</p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Resolution Module</h4>
                <p>Handles disputes and outcomes.</p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Yield Module</h4>
                <p>Manages optional yield generation.</p>
              </div>
            </div>
            <p className="learn-more" style={{ marginTop: '2rem' }}>
              <Link href="/modules">Learn more about modules →</Link>
            </p>
          </div>
        </section>

        {/* ── 8. ROLES ────────────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>Who can do what?</h3>
          <div className="guarantees-grid">
            <div className="guarantee-card fabric-panel">
              <h4>Sender</h4>
              <p>Creates and funds escrow. Can release anytime or dispute.</p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>Recipient</h4>
              <p>Can release (if allowed) or dispute. Cannot cancel.</p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>Resolver</h4>
              <p>Decides disputes. Outcomes are bounded. No custody.</p>
            </div>
            <div className="guarantee-card fabric-panel">
              <h4>Guardian</h4>
              <p>Can pause (7-day max) or disable risky modules.</p>
            </div>
          </div>
        </section>

        {/* ── 9. FINAL CTA breakout ───────────────────────────────────────── */}
        <section
          className="section-breakout cta-breakout"
          style={{
            backgroundImage: "url('/images/needle-closeup.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="breakout-inner cta-inner">
            <h3>Understand the security model.</h3>
            <p>
              Explore the invariants, threat model, and recovery procedures that
              protect Sew Protocol.
            </p>
            <div className="cta-btns">
              <Link href="/security" className="cta-btn primary">
                Security Model
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
        .glossary-note {
          color: var(--accents-3);
          font-size: 0.8rem;
          line-height: 1.6;
          max-width: 480px;
        }
        .content-section {
          margin: 0 auto;
          max-width: 800px;
          padding: 4rem 2rem;
        }
        .key-concept {
          font-style: italic;
          color: var(--accents-2);
          font-size: 0.9rem;
        }
        .lifecycle-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-top: 2rem;
        }
        .lifecycle-step {
          padding: 1.5rem;
        }
        .lifecycle-step h4 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          color: var(--primary);
        }
        .learn-more a {
          color: var(--primary);
          font-weight: 500;
        }
        .disclaimer-block {
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.4);
          border-radius: 8px;
          padding: 1rem 1.5rem;
          margin: 1.5rem 0;
          font-size: 0.85rem;
        }
        .disclaimer-block p {
          margin: 0;
          color: #ffd166;
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
        .principles-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 2rem;
        }
        .principle {
          padding: 1.5rem;
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
          .lifecycle-grid,
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
