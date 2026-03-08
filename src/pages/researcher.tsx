import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Researcher() {
  return (
    <>
      <Header titlePre="For Researchers" />
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
              <span className="hero-eyebrow">Formal Analysis</span>
              <h1>For Researchers</h1>
              <h2 className="tagline">
                Security research, mechanism design, and formal analysis
              </h2>
              <p className="description">
                Sew Protocol formalises protected transfers as a protocol
                primitive. We focus on containment, determinism, and
                forward-compatible evolution.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. FRAMING ──────────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Framing</h3>
            <p>
              Sew can be understood as an attempt to formalise escrow as a
              composable building block for structured settlement.
            </p>
            <div className="guarantees-grid">
              <div className="guarantee-card fabric-panel">
                <h4>Infrastructure</h4>
                <p>
                  Composable building blocks for coordination between parties
                  without custody.
                </p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>Enforcement</h4>
                <p>
                  Deterministic rules enforced by code, replacing discretionary
                  resolution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. DOMAINS ──────────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>Research domains</h3>
          <div className="principles-grid">
            <div className="principle seam-accent">
              <h4>Mechanism Design</h4>
              <p>
                Incentives around release timing, dispute escalation, and
                resolver alignment.
              </p>
            </div>
            <div className="principle seam-accent">
              <h4>Security</h4>
              <p>
                State isolation, failed-state containment, and forward-only
                upgrade strategies.
              </p>
            </div>
            <div className="principle seam-accent">
              <h4>Coordination</h4>
              <p>
                Influencing human behavior through structured phases between
                transfer and finality.
              </p>
            </div>
          </div>
        </section>

        {/* ── 4. INVARIANTS ───────────────────────────────────────────────── */}
        <section id="invariants" className="content-section">
          <h3>Protocol invariants</h3>
          <div className="guarantees-grid">
            <div className="guarantee-card fabric-panel stitched">
              <h4>Non-custodial</h4>
              <code className="invariant-notation">
                Custody ∉ {'{operator, resolver, module}'}
              </code>
            </div>
            <div className="guarantee-card fabric-panel stitched">
              <h4>Isolated</h4>
              <code className="invariant-notation">
                failure(escrow_n) ⊄ escrow_m ∀ m ≠ n
              </code>
            </div>
            <div className="guarantee-card fabric-panel stitched">
              <h4>Forward-only</h4>
              <code className="invariant-notation">
                upgrade(t) → escrow.created &lt; t only
              </code>
            </div>
            <div className="guarantee-card fabric-panel stitched">
              <h4>Outcome-bounded</h4>
              <code className="invariant-notation">
                Outcome ∈ {'{RELEASE, REFUND}'}
              </code>
            </div>
          </div>
        </section>

        {/* ── 5. DISCLOSURE ───────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Responsible disclosure</h3>
            <p>
              If you identify a vulnerability or design issue, please disclose
              it responsibly. We aim to acknowledge within 48h.
            </p>
            <div className="disclosure-grid">
              <div className="disclosure-card fabric-panel">
                <span className="label">Contact</span>
                <p>
                  Email: <code>info@sewprotocol.com</code>
                  <br />
                  Subject: [Security]
                </p>
              </div>
              <div className="disclosure-card fabric-panel">
                <span className="label">Scope</span>
                <p>
                  Core contracts, modules, and governance. Apps/Wallets are out
                  of scope.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. FINAL CTA ────────────────────────────────────────────────── */}
        <section
          className="section-breakout cta-breakout"
          style={{
            backgroundImage: "url('/images/ancient-sewing-machine.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="breakout-inner cta-inner">
            <h3>Analyze the architecture.</h3>
            <p>
              Deep dive into the contract structure, state machines, and modular
              integration patterns.
            </p>
            <div className="cta-btns">
              <Link href="/architecture" className="cta-btn primary">
                Architecture
              </Link>
              <Link href="/security" className="cta-btn">
                Security Model
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
        .disclosure-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-top: 1.5rem;
        }
        .disclosure-card {
          padding: 1.25rem;
        }
        .disclosure-card .label {
          display: block;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accents-3);
          margin-bottom: 0.5rem;
        }
        .disclosure-card p {
          margin: 0;
          font-size: 0.88rem;
          color: var(--accents-2);
          line-height: 1.5;
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
          .principles-grid,
          .disclosure-grid {
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
