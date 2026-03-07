import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Security() {
  return (
    <>
      <Header titlePre="Security" />
      <div className={`${sharedStyles.layout} hero-texture`}>
        <section className="header-section">
          <h1>Security Model</h1>
          <h2 className="tagline">
            Primary reference for auditors and security teams
          </h2>
          <p className="intro">
            Sew Protocol is designed as a containment layer for protected
            transfers on Ethereum. Rather than attempting to eliminate all risk,
            the protocol focuses on narrowing scope, isolating failures, and
            ensuring that funds always follow deterministic paths.
          </p>
        </section>

        {/* ── In-page navigation ───────────────────────────────────────────── */}
        <nav className="page-nav">
          <span className="page-nav-label">Jump to:</span>
          <a href="#threat-model">Threat Model</a>
          <span className="page-nav-sep">·</span>
          <a href="#dispute-economics">Dispute Economics</a>
          <span className="page-nav-sep">·</span>
          <a href="#upgrade-semantics">Upgrade Semantics</a>
          <span className="page-nav-sep">·</span>
          <a href="#emergency-recovery">Emergency Recovery</a>
          <span className="page-nav-sep">·</span>
          <a href="#isolation">Isolation Model</a>
        </nav>

        <section className="content-block">
          <h3>Security philosophy</h3>
          <p>
            Ethereum transactions are irreversible. Smart contracts introduce
            new capabilities, but also new forms of risk. Sew approaches
            security through three principles:
          </p>
          <ul>
            <li>
              <strong>Containment over prevention:</strong> Failures may occur.
              The protocol is designed to limit their impact.
            </li>
            <li>
              <strong>Determinism over discretion:</strong> Funds move according
              to predefined rules, not human judgment.
            </li>
            <li>
              <strong>Isolation over shared risk:</strong> Each escrow is
              treated as an independent agreement.
            </li>
          </ul>
        </section>

        <section className="content-block">
          <h3>🔐 Core security properties</h3>
          <div className="property-grid">
            <div className="property fabric-panel seam-accent">
              <h4>🤝 Non-custodial by design</h4>
              <p>
                Funds are held by smart contracts, not by an operator or
                intermediary.
              </p>
            </div>
            <div className="property fabric-panel seam-accent">
              <h4>⚙️ Deterministic release paths</h4>
              <p>
                Every escrow defines its release and resolution rules at
                creation. Settlement follows predefined state transitions.
              </p>
            </div>
            <div className="property fabric-panel seam-accent">
              <h4>📦 Per-escrow isolation</h4>
              <p>
                Each protected transfer is independent. If one fails, others are
                unaffected.
              </p>
            </div>
            <div className="property fabric-panel seam-accent">
              <h4>⏩ Forward-only evolution</h4>
              <p>
                Protocol upgrades do not alter existing agreements. Historical
                agreements remain stable.
              </p>
            </div>
          </div>
        </section>

        <section id="threat-model" className="content-block">
          <h3>🎯 Threat model</h3>
          <p>
            Sew is designed to operate in an adversarial environment. Each
            threat category below includes the attack surface and the protocol's
            structural mitigation.
          </p>
          <div className="threat-grid">
            <div className="threat-card fabric-panel stitched">
              <div className="threat-header">
                <span className="threat-tag">T1</span>
                <h4>👤 User error</h4>
              </div>
              <p className="threat-desc">
                Sending to the wrong address, premature release, or
                misunderstanding escrow state.
              </p>
              <div className="threat-mitigation">
                <span className="mitigation-label">📍 Mitigation</span>
                <p>
                  Sender can cancel at any time while PENDING. Dispute pathway
                  available if counterparty is uncooperative.
                </p>
              </div>
            </div>
            <div className="threat-card fabric-panel stitched">
              <div className="threat-header">
                <span className="threat-tag">T2</span>
                <h4>🎭 Counterparty risk</h4>
              </div>
              <p className="threat-desc">
                Fraudulent participants, failure to deliver goods or services,
                or bad-faith dispute initiation.
              </p>
              <div className="threat-mitigation">
                <span className="mitigation-label">📍 Mitigation</span>
                <p>
                  Funds held in escrow until conditions are met. Dispute pathway
                  available with neutral resolver.
                </p>
              </div>
            </div>
            <div className="threat-card fabric-panel stitched">
              <div className="threat-header">
                <span className="threat-tag">T3</span>
                <h4>🐛 Smart contract risk</h4>
              </div>
              <p className="threat-desc">
                Bugs in integration modules, yield strategies, or third-party
                contracts.
              </p>
              <div className="threat-mitigation">
                <span className="mitigation-label">📍 Mitigation</span>
                <p>
                  Per-escrow isolation limits blast radius. Module boundaries
                  prevent cross-module propagation.
                </p>
              </div>
            </div>
            <div className="threat-card fabric-panel stitched">
              <div className="threat-header">
                <span className="threat-tag">T4</span>
                <h4>🏛️ Governance capture</h4>
              </div>
              <p className="threat-desc">
                Malicious proposals, compromised admin keys, or timelock bypass
                attempts.
              </p>
              <div className="threat-mitigation">
                <span className="mitigation-label">📍 Mitigation</span>
                <p>
                  Governance cannot touch active escrows. Changes are
                  forward-only. Timelocks enforce delay.
                </p>
              </div>
            </div>
            <div className="threat-card fabric-panel stitched">
              <div className="threat-header">
                <span className="threat-tag">T5</span>
                <h4>⚖️ Resolver misconduct</h4>
              </div>
              <p className="threat-desc">
                Biased resolver decisions, resolver unavailability, or collusion
                between resolver and one party.
              </p>
              <div className="threat-mitigation">
                <span className="mitigation-label">📍 Mitigation</span>
                <p>
                  Resolver outcome is bounded to RELEASE | REFUND. Resolvers
                  cannot touch funds. Appeal escalation available.
                </p>
              </div>
            </div>
            <div className="threat-card fabric-panel stitched">
              <div className="threat-header">
                <span className="threat-tag">T6</span>
                <h4>🏦 Yield integration risk</h4>
              </div>
              <p className="threat-desc">
                External yield protocol failure (e.g., Aave insolvency or
                exploit) while funds are deployed.
              </p>
              <div className="threat-mitigation">
                <span className="mitigation-label">📍 Mitigation</span>
                <p>
                  Yield is opt-in. Principal accounting is separated. Exposure
                  caps and unwind mechanisms limit maximum loss.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="disclaimer-block">
          <p>
            <strong>Yield + integrations:</strong> Yield is optional. Principal
            remains governed by escrow logic. External protocol risk exists.
            Exposure caps and unwind mechanisms limit potential losses.
          </p>
        </section>

        <section id="isolation" className="content-block">
          <h3>Isolation model</h3>
          <p>
            Isolation is the primary containment mechanism. It operates at three
            levels simultaneously.
          </p>
          <ul>
            <li>
              <strong>Between escrows:</strong> Each agreement is independent.
              No shared funds, shared yield pool, or shared dispute state. A
              failure in one escrow cannot propagate to another.
            </li>
            <li>
              <strong>Between modules:</strong> Release logic, resolution logic,
              and yield generation are isolated components. A bug in a yield
              module cannot affect dispute resolution.
            </li>
            <li>
              <strong>Between governance and settlement:</strong> Governance
              cannot modify active escrows. Settlement logic is immutable once
              an escrow is created.
            </li>
          </ul>
          <p>
            See <Link href="/architecture">Architecture</Link> for the full
            isolation model with invariant notation.
          </p>
        </section>

        <section id="emergency-recovery" className="content-block">
          <h3>Emergency response posture</h3>
          <p>
            In the event of a vulnerability, the protocol is designed for rapid
            containment. A guardian role can pause the system for up to 7 days
            (maximum 3 cycles total). While paused, dispute initiation and
            escalation are blocked to prevent further risk exposure. Normal
            settlement operations (release, cancellation, new escrow creation)
            remain available. Pause is an emergency circuit-breaker for
            high-risk operations and automatically expires after the time limit.
          </p>
        </section>

        <section id="upgrade-semantics" className="content-block">
          <h3>Governance constraints</h3>
          <p>
            Governance can approve new modules and update global parameters for
            future escrows. However, governance <strong>cannot</strong> rewrite
            existing agreements. Each escrow is locked to the modules and
            configuration selected at creation time.
          </p>
          <p>
            This ensures that protocol evolution does not introduce retroactive
            changes to active transfers. Users have permanent visibility into
            the rules governing their funds.
          </p>
          <p>
            See <Link href="/protocol-limits">Protocol Limits</Link> for
            detailed constraints on guardian and governance powers.
          </p>
          <p>
            See <Link href="/emergency">Emergency Recovery</Link> for detailed
            emergency response procedures.
          </p>
          <p>
            See <Link href="/modules">Modules</Link> for information about
            release strategies, resolution modules, and yield modules.
          </p>
        </section>

        <section className="content-block">
          <h3>Neutrality in dispute resolution</h3>
          <p>
            If parties disagree, a neutral resolver decides the outcome. The
            protocol ensures resolvers cannot be biased or capture value.
          </p>
          <div className="concept-subsection">
            <h4>Resolver design constraints</h4>
            <ul>
              <li>
                <strong>No custody:</strong> Resolvers never touch or control
                funds. They only vote on outcomes.
              </li>
              <li>
                <strong>No discretion:</strong> A resolver can only decide:
                Release or Refund. No other actions.
              </li>
              <li>
                <strong>No forced transfers:</strong> A resolver decision must
                be enforced by code. No manual overrides.
              </li>
              <li>
                <strong>Per-escrow scope:</strong> A bad resolver decision
                affects only that one dispute. Others remain protected.
              </li>
            </ul>
          </div>
          <div className="concept-subsection">
            <h4>Resolver selection</h4>
            <p>
              At launch (v1), resolvers are governance-appointed or chosen by
              users on a per-escrow basis. Future versions (v2+) support
              decentralized selection with staking and appeals.
            </p>
            <p>
              A user can optionally specify a <code>customResolver</code>{' '}
              address per escrow, allowing arbitrary dispute frameworks without
              modifying protocol code.
            </p>
          </div>
        </section>

        <section id="dispute-economics" className="content-block">
          <h3>Economic incentives in dispute resolution</h3>
          <p>
            Resolvers are incentivized to behave honestly through economic
            mechanisms: bonds, appeals, and slashing.
          </p>
          <div className="concept-subsection">
            <h4>Resolver bonds</h4>
            <p>
              Resolvers post collateral (a bond) when deciding a dispute. If
              their decision is appealed and overturned, they lose the bond.
            </p>
            <ul>
              <li>v1: No bond required (single trusted resolver)</li>
              <li>
                v2: Resolvers post bonds ($250 standard, $25k senior). Bad
                decisions are slashed.
              </li>
              <li>v3: Bonds are capital-weighted; resolvers earn fees.</li>
            </ul>
          </div>
          <div className="concept-subsection">
            <h4>Appeal and escalation</h4>
            <p>
              If a party disagrees with a resolver decision, they can appeal.
              Appeals escalate to higher-tier resolvers with larger bonds.
            </p>
            <ul>
              <li>
                <strong>Discourages frivolous appeals:</strong> Appellants also
                post bonds. They lose if the appeal fails.
              </li>
              <li>
                <strong>Improves accuracy:</strong> Senior resolvers review only
                contested decisions, not routine cases.
              </li>
              <li>
                <strong>Bounds complexity:</strong> Escalation stops at a final
                authority. The dispute is always settled.
              </li>
            </ul>
          </div>
          <div className="concept-subsection">
            <h4>Slashing and accountability</h4>
            <p>
              Resolvers who vote in the minority are slashed (lose a portion of
              their bond). This aligns incentives: resolvers want to agree with
              peers and avoid being outliers.
            </p>
            <ul>
              <li>
                Typical slashing: 2-5% per bad decision (conservative scaling)
              </li>
              <li>
                Resolvers with consistent track records earn fee tier upgrades
              </li>
              <li>High slashing rates eliminate bad resolvers over time</li>
            </ul>
          </div>
        </section>

        <section className="content-block">
          <h3>Isolation model and risk containment</h3>
          <p>Sew is built to limit the blast radius of any single failure.</p>
          <div className="concept-subsection">
            <h4>Per-escrow isolation</h4>
            <p>
              Each escrow is an independent smart contract instance (or
              deterministic state within the protocol contract). If one escrow
              is compromised:
            </p>
            <ul>
              <li>Only that escrow's funds are at risk</li>
              <li>
                Other escrows continue operating normally (no shared state)
              </li>
              <li>
                The issue does not propagate to resolvers, modules, or other
                participants
              </li>
            </ul>
          </div>
          <div className="concept-subsection">
            <h4>No pooled liabilities</h4>
            <p>
              Unlike custody pools or shared collateral systems, Sew does not
              combine funds or risks across escrows.
            </p>
            <ul>
              <li>
                Each escrow defines its own release rules at creation time
              </li>
              <li>Resolution outcomes for one escrow cannot affect others</li>
              <li>
                Disputes are settled independently, without shared exposure
              </li>
            </ul>
          </div>
          <div className="concept-subsection">
            <h4>Module modularity</h4>
            <p>
              Release strategies, resolution modules, and yield strategies are
              isolated components. A bug in one module does not break others.
            </p>
            <ul>
              <li>
                Modular architecture allows upgrading or replacing components
              </li>
              <li>Failures are scoped to the affected module only</li>
              <li>
                Users can choose modules independently, without cascading risk
              </li>
            </ul>
          </div>
        </section>

        <section className="page-meta">
          <p>Last updated: February 2026</p>
          <p>
            <Link href="/docs/security">View full documentation →</Link>
          </p>
        </section>
      </div>

      <style jsx>{`
        h1 {
          margin-bottom: 0.5rem;
        }
        .tagline {
          color: var(--accents-3);
          margin-bottom: 2rem;
        }
        .intro {
          font-size: 1.2rem;
          line-height: 1.6;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        .header-section {
          margin-bottom: 4rem;
          text-align: center;
        }
        .content-block {
          margin: 4rem auto;
          max-width: 800px;
          padding: 0 2rem;
        }
        .property-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 2rem;
        }
        .property h4 {
          margin-bottom: 0.5rem;
        }
        @media (max-width: 600px) {
          .property-grid {
            grid-template-columns: 1fr;
          }
          .content-block {
            padding: 0 1rem;
          }
        }
        .page-meta {
          text-align: center;
          padding: 3rem 2rem;
          color: var(--accents-3);
          font-size: 0.85rem;
        }
        .page-meta p {
          margin: 0.5rem 0;
        }
        .page-meta a {
          color: #7adddc;
        }
        .disclaimer-block {
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.4);
          border-radius: 8px;
          padding: 1rem 1.5rem;
          margin: 0 auto 3rem;
          max-width: 800px;
          font-size: 0.9rem;
        }
        .disclaimer-block p {
          margin: 0;
          color: #ffd166;
        }

        /* ── In-page nav ────────────────────────────────────────────────────── */
        .page-nav {
          max-width: 800px;
          margin: 0 auto 1rem;
          padding: 0.75rem 2rem;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          border-bottom: 1px solid #2a3a3e;
          font-size: 0.82rem;
        }
        .page-nav-label {
          font-weight: 700;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accents-3);
          margin-right: 0.25rem;
        }
        .page-nav a {
          color: var(--accents-2);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.15s;
        }
        .page-nav a:hover {
          color: #7adddc;
        }
        .page-nav-sep {
          color: var(--accents-2);
          opacity: 0.4;
        }

        /* ── Threat model cards ─────────────────────────────────────────────── */
        .threat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-top: 1.75rem;
        }
        .threat-card {
          padding: 1.25rem;
          border: 1px solid #2a3a3e;
          border-radius: var(--radius);
          background: var(--bg);
        }
        .threat-header {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 0.5rem;
        }
        .threat-tag {
          font-size: 0.65rem;
          font-weight: 800;
          font-family: var(--font-mono);
          background: #1b2a2e;
          color: var(--accents-3);
          padding: 0.15rem 0.45rem;
          border-radius: 3px;
          letter-spacing: 0.04em;
        }
        .threat-header h4 {
          margin: 0;
          font-size: 0.95rem;
        }
        .threat-desc {
          font-size: 0.85rem;
          color: var(--accents-2);
          line-height: 1.55;
          margin: 0 0 0.75rem;
        }
        .threat-mitigation {
          background: rgba(122, 221, 220, 0.08);
          border-left: 2.5px solid #7adddc;
          padding: 0.6rem 0.85rem;
          border-radius: 0 4px 4px 0;
        }
        .mitigation-label {
          display: block;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #7adddc;
          margin-bottom: 0.3rem;
        }
        .threat-mitigation p {
          margin: 0;
          font-size: 0.82rem;
          color: var(--accents-2);
          line-height: 1.55;
        }
        .threat-mitigation code {
          font-size: 0.75rem;
          background: rgba(122, 221, 220, 0.08);
          padding: 0.1rem 0.3rem;
          border-radius: 3px;
          font-family: var(--font-mono);
          color: #7adddc;
        }
        @media (max-width: 700px) {
          .threat-grid {
            grid-template-columns: 1fr;
          }
          .page-nav {
            padding: 0.75rem 1rem;
          }
        }
      `}</style>
    </>
  )
}
