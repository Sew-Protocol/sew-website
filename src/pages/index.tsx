import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={`${sharedStyles.layout} hero-texture`}>
        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section className="hero">
          <h1>Sew Protocol</h1>
          <h2 className="tagline">
            Protected payments. Dispute resolution built in.
          </h2>
          <p className="description">
            An ERC-20 transfer routed through escrow, with predefined release
            and dispute resolution paths — enforced by smart contracts, not
            intermediaries.
          </p>
          <p className="micro-line">
            Sew is infrastructure: contracts and modules. Interfaces (wallets,
            marketplaces) are built on top.
          </p>
          <div className="btns">
            <Link href="/security" className="button primary">
              Read Security Model
            </Link>
            <Link href="/architecture" className="button">
              View Architecture
            </Link>
          </div>
          <div className="proof-chips">
            <span className="chip">Non-custodial</span>
            <span className="chip">Isolated per escrow</span>
            <span className="chip">On-chain enforceable outcomes</span>
          </div>
        </section>

        {/* ── 2. WHAT IT IS ───────────────────────────────────────────────── */}
        <section
          id="what-is-it"
          className="content-section fabric-texture fabric-texture-light"
        >
          <h3>What it is</h3>
          <p>
            Sew Protocol introduces protected transfers as a native pattern on
            Ethereum.
          </p>
          <p>
            A <strong>protected payment</strong> is an ERC-20 transfer routed
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

        {/* ── 3. CORE GUARANTEES ──────────────────────────────────────────── */}
        <section id="guarantees" className="content-section">
          <div className="thread-divider" />
          <h3>Security properties</h3>
          <p className="section-subtitle">
            Invariants the protocol enforces at the contract level, for every
            escrow.
          </p>
          <div className="guarantees-grid">
            <div className="guarantee-card">
              <h4>Non-custodial</h4>
              <p>
                Funds are held by smart contracts, never by an operator or
                resolver.
              </p>
              <code className="property-notation">
                {'Custody ∉ {operator, resolver}'}
              </code>
            </div>
            <div className="guarantee-card">
              <h4>Outcome-bounded</h4>
              <p>
                A resolver can only choose from a fixed set of outcomes. No
                discretion beyond that.
              </p>
              <code className="property-notation">
                {'Outcome ∈ {RELEASE, REFUND}'}
              </code>
            </div>
            <div className="guarantee-card">
              <h4>Per-escrow isolation</h4>
              <p>
                A failure in one escrow cannot affect any other. No shared state
                between transfers.
              </p>
              <code className="property-notation">
                {'failure(escrow_n) ⊄ escrow_m'}
              </code>
            </div>
            <div className="guarantee-card">
              <h4>Deterministic state machine</h4>
              <p>
                Settlement follows predefined transitions only. No discretionary
                paths.
              </p>
              <code className="property-notation">
                {'state ∈ {PENDING → RELEASED | REFUNDED | RESOLVED}'}
              </code>
            </div>
            <div className="guarantee-card">
              <h4>Forward-only upgrades</h4>
              <p>
                Governance cannot modify active escrows. Changes apply only to
                future transfers.
              </p>
              <code className="property-notation">
                {'upgrade(t) → escrow.created < t only'}
              </code>
            </div>
            <div className="guarantee-card">
              <h4>Bounded emergency controls</h4>
              <p>
                Emergency pause is time-limited and auto-expires. Cannot be used
                indefinitely.
              </p>
              <code className="property-notation">
                {'pause_max = 7d × 3 cycles'}
              </code>
            </div>
          </div>
          <p className="section-link">
            <Link href="/security">Full security model →</Link>
          </p>
        </section>

        {/* ── 4. WHAT IT IS NOT ───────────────────────────────────────────── */}
        <section id="what-it-is-not" className="content-section fabric-texture">
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
              <strong>Not a payment processor</strong> — Funds flow directly
              between parties via smart contracts
            </li>
            <li>
              <strong>Not custodial</strong> — No party controls user funds;
              rules are enforced by code
            </li>
          </ul>
        </section>

        {/* ── 5. WHY IT EXISTS ────────────────────────────────────────────── */}
        <section
          id="why-it-exists"
          className="content-section fabric-texture fabric-texture-warm"
        >
          <div className="thread-divider" />
          <h3>Why it exists</h3>
          <p>
            Ethereum transactions are irreversible by design. This property
            enables trustless settlement, but it also creates persistent risks:
          </p>
          <ul>
            <li>Funds sent to the wrong address cannot be recovered</li>
            <li>Buyers and sellers must rely on trust or external platforms</li>
            <li>Disputes are difficult to resolve without custody</li>
            <li>Smart contract risk can propagate across shared systems</li>
          </ul>
          <p>
            Protection today is usually added off-chain, through custodians, or
            as application-specific logic. Sew moves protection to the
            transaction layer itself — the default pattern used when value
            moves.
          </p>
        </section>

        {/* ── 6. HOW IT HELPS ─────────────────────────────────────────────── */}
        <section id="how-it-helps" className="content-section">
          <h3>How it helps</h3>
          <p>
            Sew allows a payment to be structured as an escrowed transfer with
            clear release paths. This enables:
          </p>
          <ul>
            <li>Funds held until conditions are met</li>
            <li>Buyer-initiated release flows</li>
            <li>Timed releases</li>
            <li>Dispute resolution pathways</li>
            <li>Isolation of risk to individual transactions</li>
          </ul>
          <p>
            The goal is not to replace direct transfers, but to establish a
            safer default pattern where protection is needed.
          </p>
        </section>

        {/* ── 7. DESIGN PRINCIPLES ────────────────────────────────────────── */}
        <section
          id="design-principles"
          className="content-section fabric-texture fabric-texture-light"
        >
          <div className="thread-divider" />
          <h3>Design principles</h3>
          <div className="principles-grid">
            <div className="principle">
              <h4>Non-custodial by construction</h4>
              <p>
                Funds remain under smart contract control. No party can
                arbitrarily redirect assets.
              </p>
            </div>
            <div className="principle">
              <h4>Deterministic execution</h4>
              <p>
                Release and resolution follow predefined rules encoded at escrow
                creation.
              </p>
            </div>
            <div className="principle">
              <h4>Isolation of risk</h4>
              <p>
                Each escrow is self-contained. Failures do not propagate across
                the system.
              </p>
            </div>
            <div className="principle">
              <h4>Changes affect only new escrows</h4>
              <p>
                Upgrades and module swaps apply forward, preserving the
                integrity of existing agreements.
              </p>
            </div>
            <div className="principle">
              <h4>Composable infrastructure</h4>
              <p>
                The protocol exposes a base primitive that other systems can
                extend.
              </p>
            </div>
          </div>
        </section>

        {/* ── 8. A PRIMITIVE ──────────────────────────────────────────────── */}
        <section className="content-section fabric-texture fabric-texture-warm">
          <div className="thread-divider" />
          <h3>A primitive for protected transfers</h3>
          <p>
            Sew defines a simple idea: A payment can be protected before it is
            finalized.
          </p>
          <p>
            This makes it possible to coordinate exchanges, deliveries, and
            agreements without introducing custody. The same primitive can
            support:
          </p>
          <ul>
            <li>Peer-to-peer commerce</li>
            <li>Marketplaces</li>
            <li>Onchain agreements</li>
            <li>Service payments</li>
            <li>Interface-level safety features</li>
          </ul>
        </section>

        {/* ── 9. BUILT-IN DISPUTE RESOLUTION ──────────────────────────────── */}
        <section className="content-section fabric-texture fabric-texture-light">
          <div className="thread-divider" />
          <h3>Built-in dispute resolution</h3>
          <p>
            Ethereum transfers are final. Sew adds structured resolution without
            custody — neutral outcomes enforced by smart contracts.
          </p>
          <p>
            If parties disagree, a resolver can be assigned. The resolver cannot
            seize funds or act outside predefined boundaries. The outcome
            (Release or Refund) is enforced on-chain.
          </p>
          <p>
            This transforms escrow from a protection mechanism into an{' '}
            <strong>enforceable coordination primitive</strong>.
          </p>
          <p>
            <Link href="/dispute-resolution">Dispute architecture →</Link>
            {'  '}
            <Link href="/security#dispute-economics">Dispute economics →</Link>
          </p>
        </section>

        {/* ── 10. EVIDENCE & READINESS ────────────────────────────────────── */}
        <section id="readiness" className="content-section">
          <div className="thread-divider" />
          <h3>Audit readiness</h3>
          <p className="section-subtitle">
            For grant reviewers and independent security auditors.
          </p>
          <div className="readiness-grid">
            <div className="readiness-col">
              <h4>What is implemented</h4>
              <ul className="check-list">
                <li>Core escrow state machine with 6 defined states</li>
                <li>
                  ERC-20 protected transfers with deterministic release paths
                </li>
                <li>
                  v1 dispute resolution — single trusted resolver, on-chain
                  enforcement
                </li>
                <li>
                  Modular architecture — resolution, release strategy, and yield
                  modules
                </li>
                <li>
                  Per-escrow isolation — no shared state between transfers
                </li>
                <li>
                  Time-bounded emergency pause (7-day max, 3 cycles total)
                </li>
                <li>
                  Governance constraints — no retroactive modification of active
                  escrows
                </li>
              </ul>
            </div>
            <div className="readiness-col funded">
              <h4>What the grant funds</h4>
              <ul className="check-list">
                <li>Formal invariant testing across all state transitions</li>
                <li>Adversarial simulation of dispute escalation paths</li>
                <li>Bond sizing and slashing rate economic validation</li>
                <li>Third-party security audit (Tier 1 auditor)</li>
                <li>Testnet deployment and integration test suite</li>
                <li>Threat model red-teaming and formal review</li>
              </ul>
            </div>
          </div>
          <div className="readiness-links">
            <Link href="/security#threat-model" className="readiness-link">
              Threat model →
            </Link>
            <Link href="/contracts" className="readiness-link">
              Contracts →
            </Link>
            <Link href="/release-plan" className="readiness-link">
              Release plan →
            </Link>
            <ExtLink
              href="https://github.com/Sew-Protocol/sew-protocol"
              className="readiness-link"
            >
              GitHub →
            </ExtLink>
          </div>
        </section>

        {/* ── 11. VISION ──────────────────────────────────────────────────── */}
        <section className="content-section fabric-texture fabric-texture-light">
          <div className="thread-divider" />
          <h3>Vision</h3>
          <p>
            Ethereum made programmable money possible. Sew explores what happens
            when payments themselves become programmable agreements.
          </p>
          <p>
            By introducing protection at the moment of transfer, the protocol
            aims to support safer coordination between parties who do not
            already trust each other.
          </p>
          <p>This is a long-term infrastructure effort focused on:</p>
          <ul>
            <li>Safer everyday transactions</li>
            <li>Clearer settlement patterns</li>
            <li>Reduced reliance on custodial intermediaries</li>
          </ul>
          <p>
            <strong>
              Protection is not an add-on. It becomes a default option.
            </strong>
          </p>
        </section>

        {/* ── 12. FINAL CTA STRIP ─────────────────────────────────────────── */}
        <section className="cta-strip">
          <h3>Review the security model.</h3>
          <p>
            Designed for auditors, researchers, and grant reviewers. Threat
            model, invariants, dispute economics, and upgrade semantics — all in
            one place.
          </p>
          <div className="cta-btns">
            <Link href="/security" className="cta-btn primary">
              Security Model
            </Link>
            <Link href="/developer" className="cta-btn">
              Developer Docs
            </Link>
          </div>
        </section>
      </div>

      <style jsx>{`
        /* ── Hero ─────────────────────────────────────────────────────────── */
        .hero {
          padding: 4rem 0;
          text-align: center;
        }
        .tagline {
          color: var(--accents-3);
          margin-bottom: 2rem;
        }
        .description {
          max-width: 620px;
          margin: 0 auto 2rem;
          font-size: 1.1rem;
        }
        .micro-line {
          font-size: 0.875rem;
          color: var(--accents-3);
          margin-bottom: 2rem;
        }
        .btns {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 2rem;
        }
        .button {
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius);
          font-weight: 600;
          border: 1px solid var(--accents-2);
          transition: all 0.2s;
          text-decoration: none;
          color: var(--fg);
        }
        .button.primary {
          background: var(--fg);
          color: var(--bg);
          border-color: var(--fg);
        }
        .button:hover {
          opacity: 0.8;
        }
        .proof-chips {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 1rem;
        }
        .chip {
          padding: 0.3rem 0.85rem;
          border: 1px solid var(--accents-2);
          border-radius: 100px;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: var(--accents-2);
        }

        /* ── Shared section ───────────────────────────────────────────────── */
        .content-section {
          margin: 4rem auto;
          max-width: 800px;
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

        /* ── Core Guarantees ──────────────────────────────────────────────── */
        .guarantees-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-top: 1.75rem;
        }
        .guarantee-card {
          padding: 1.25rem 1.5rem;
          border: 1px solid var(--accents-2);
          border-radius: var(--radius);
          background: var(--bg);
        }
        .guarantee-card h4 {
          margin: 0 0 0.4rem 0;
          font-size: 0.95rem;
          font-weight: 700;
        }
        .guarantee-card p {
          margin: 0 0 0.75rem 0;
          font-size: 0.85rem;
          color: var(--accents-2);
          line-height: 1.5;
        }
        .property-notation {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accents-3);
          background: #f4f4f4;
          padding: 0.3rem 0.6rem;
          border-radius: 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* ── Pill grid ────────────────────────────────────────────────────── */
        .pill-grid {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin: 1rem 0;
        }
        .pill {
          background: #f0f0f0;
          padding: 0.25rem 0.75rem;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 600;
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
          background: #fef2f2;
          border-left: 3px solid #dc2626;
          font-size: 0.95rem;
        }
        .not-list strong {
          color: #dc2626;
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
          color: #2563eb;
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
          border-bottom: 1px solid #f0f0f0;
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
          color: #2563eb;
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

        /* ── Final CTA strip ──────────────────────────────────────────────── */
        .cta-strip {
          margin: 5rem auto 2rem;
          max-width: 800px;
          border: 2px solid var(--fg);
          border-radius: var(--radius);
          padding: 3rem 3.5rem;
          text-align: center;
        }
        .cta-strip h3 {
          font-size: 1.75rem;
          font-weight: 800;
          margin: 0 0 0.75rem 0;
          letter-spacing: -0.03em;
        }
        .cta-strip p {
          font-size: 0.92rem;
          color: var(--accents-3);
          max-width: 480px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }
        .cta-btns {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        .cta-btn {
          padding: 0.75rem 1.75rem;
          border-radius: var(--radius);
          font-weight: 600;
          font-size: 0.95rem;
          border: 1.5px solid var(--accents-2);
          text-decoration: none;
          color: var(--fg);
          transition: all 0.2s;
        }
        .cta-btn.primary {
          background: var(--fg);
          color: var(--bg);
          border-color: var(--fg);
        }
        .cta-btn:hover {
          opacity: 0.8;
        }

        /* ── Responsive ───────────────────────────────────────────────────── */
        @media (max-width: 700px) {
          .guarantees-grid,
          .readiness-grid,
          .principles-grid {
            grid-template-columns: 1fr;
          }
          .cta-strip {
            padding: 2rem 1.5rem;
          }
          .cta-strip h3 {
            font-size: 1.35rem;
          }
          .cta-btns {
            flex-direction: column;
            align-items: center;
          }
          .property-notation {
            font-size: 0.65rem;
          }
        }
      `}</style>
    </>
  )
}
