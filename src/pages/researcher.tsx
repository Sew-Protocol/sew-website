import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Researcher() {
  const reviewerFaqs = [
    {
      question: 'Has the protocol been audited?',
      answer:
        'Not yet. The protocol is currently deployed on Base Sepolia testnet. A third-party security audit by a Tier 1 auditor is planned as part of the current development phase. The Ethereum Foundation grant, if awarded, funds this audit along with formal invariant testing, adversarial simulation, and testnet validation. See the Release Plan for the full timeline.',
      links: [
        { label: 'Release Plan →', href: '/release-plan' },
        { label: 'Contracts →', href: '/contracts' },
      ],
    },
    {
      question: 'What is the trust model at launch?',
      answer:
        'At v1 launch, the protocol uses a single trusted resolver model. The resolver is governance-appointed and cannot seize funds — they can only choose Release or Refund. Funds always remain under smart contract control. Decentralised resolution with multi-resolver escalation, appeal bonds, and staking is roadmapped for v2 (Q2–Q3 2026) and v3.',
      links: [
        { label: 'Dispute Architecture →', href: '/dispute-resolution' },
        { label: 'Release Plan →', href: '/release-plan' },
      ],
    },
    {
      question: 'What happens if the resolver is compromised?',
      answer:
        "A resolver's power is strictly bounded by the protocol. They can only choose one of two outcomes: Release or Refund. They cannot seize funds, redirect transfers to arbitrary addresses, or take any action outside that set. A compromised resolver decision affects only the specific escrow under dispute — no other escrows are at risk. In v2+, decisions can be appealed and overturned.",
      links: [
        { label: 'Security Model →', href: '/security' },
        { label: 'Dispute Economics →', href: '/security#dispute-economics' },
      ],
    },
    {
      question: 'Is there a formal threat model?',
      answer:
        "Yes. The Security page documents six threat categories: User Error, Counterparty Risk, Smart Contract Risk, Governance Capture, Resolver Misconduct, and Yield Integration Risk. Each entry includes the attack surface and the protocol's structural mitigation. The Architecture page documents six formal invariants with set-theoretic notation.",
      links: [
        { label: 'Threat Model →', href: '/security#threat-model' },
        { label: 'Architecture →', href: '/architecture' },
      ],
    },
    {
      question: 'What does the Ethereum Foundation grant fund?',
      answer:
        'The grant funds the validation and audit phase of the protocol. Specifically: formal invariant testing across all state transitions, adversarial simulation of dispute escalation paths, bond sizing and slashing rate economic validation, a third-party security audit, testnet deployment and integration test suite, and threat model red-teaming and formal review.',
      links: [
        { label: 'Release Plan →', href: '/release-plan' },
        { label: 'Architecture →', href: '/architecture' },
      ],
    },
  ]

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

        {/* ── 5. AUDIT & REVIEW FAQ ────────────────────────────────────────── */}
        <section className="content-section">
          <h3>Audit &amp; review questions</h3>
          <p className="section-intro">
            Questions specifically relevant to security reviewers and
            independent auditors evaluating the protocol.
          </p>
          <div className="reviewer-faq-list">
            {reviewerFaqs.map((faq) => (
              <div
                key={faq.question}
                className="reviewer-faq-card fabric-panel"
              >
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
                {faq.links && (
                  <div className="reviewer-faq-links">
                    {faq.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="reviewer-faq-link"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. DISCLOSURE ───────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Responsible disclosure</h3>{' '}
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
        .section-intro {
          font-size: 0.9rem;
          color: var(--accents-3);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .reviewer-faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .reviewer-faq-card {
          padding: 1.5rem;
        }
        .reviewer-faq-card h4 {
          font-size: 1rem;
          font-weight: 700;
          margin: 0 0 0.65rem;
        }
        .reviewer-faq-card > p {
          font-size: 0.875rem;
          color: var(--accents-2);
          line-height: 1.7;
          margin: 0 0 1rem;
        }
        .reviewer-faq-links {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
        }
        .reviewer-faq-link {
          font-size: 0.8rem;
          font-weight: 600;
          color: #7adddc;
          text-decoration: none;
          padding: 0.25rem 0.65rem;
          background: rgba(122, 221, 220, 0.08);
          border-radius: 4px;
          transition: background 0.15s;
        }
        .reviewer-faq-link:hover {
          background: #22343a;
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
