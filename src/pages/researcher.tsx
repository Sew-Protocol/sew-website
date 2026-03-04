import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Researcher() {
  return (
    <>
      <Header titlePre="For Researchers" />
      <div className={`${sharedStyles.layout} hero-texture`}>
        {/* ── Header ───────────────────────────────────────────────────────── */}
        <section className="header-section">
          <h1>For Researchers</h1>
          <h2 className="tagline">
            Security research, mechanism design, and formal analysis
          </h2>
          <p className="intro">
            Sew Protocol introduces a structured settlement pattern for ERC-20
            transfers on Ethereum. A transfer can be held under predefined rules
            until it is released, cancelled, or resolved. The protocol is
            designed as a non-custodial coordination layer with a focus on
            containment, determinism, and forward-compatible evolution.
          </p>
        </section>

        {/* ── In-page nav ──────────────────────────────────────────────────── */}
        <nav className="page-nav">
          <span className="page-nav-label">On this page:</span>
          <a href="#framing">Framing</a>
          <span className="sep">·</span>
          <a href="#research-domains">Research Domains</a>
          <span className="sep">·</span>
          <a href="#system-properties">System Properties</a>
          <span className="sep">·</span>
          <a href="#invariants">Protocol Invariants</a>
          <span className="sep">·</span>
          <a href="#open-questions">Open Questions</a>
          <span className="sep">·</span>
          <a href="#disclosure">Disclosure</a>
        </nav>

        {/* ── Framing ──────────────────────────────────────────────────────── */}
        <section
          id="framing"
          className="content-block fabric-texture fabric-texture-light"
        >
          <h3>Framing</h3>
          <p>
            Sew can be understood as an attempt to formalise protected transfers
            as a protocol primitive.
          </p>
          <p>At a high level, it explores:</p>
          <ul>
            <li>Escrow as a composable building block</li>
            <li>Structured settlement under deterministic rules</li>
            <li>Coordination between parties without custody</li>
            <li>Modular dispute and release semantics</li>
          </ul>
          <p>
            Rather than being application-specific, it is intended as general
            infrastructure that can support multiple interaction patterns.
          </p>
        </section>

        {/* ── Research domains ─────────────────────────────────────────────── */}
        <section id="research-domains" className="content-block">
          <h3>Research domains</h3>
          <p>
            Several overlapping areas are relevant to understanding the
            protocol.
          </p>

          <div className="research-domain">
            <h4>Smart contract security</h4>
            <p>Key topics:</p>
            <ul>
              <li>State isolation vs shared integration domains</li>
              <li>Deterministic state transitions</li>
              <li>Constrained authority models</li>
              <li>Forward-only upgrade strategies</li>
            </ul>
            <p>
              The protocol aims to reduce systemic risk by limiting how failures
              propagate across agreements.
            </p>
          </div>

          <div className="research-domain">
            <h4>Mechanism design</h4>
            <p>Protected transfers introduce new coordination dynamics:</p>
            <ul>
              <li>Incentives around release timing</li>
              <li>Dispute escalation behaviour</li>
              <li>Resolver selection and trust assumptions</li>
              <li>Fairness across participants</li>
            </ul>
            <p>
              These dynamics are shaped by module design rather than the core
              protocol.
            </p>
          </div>

          <div className="research-domain">
            <h4>Governance systems</h4>
            <p>Sew explores a constrained governance model:</p>
            <ul>
              <li>Modules can evolve over time</li>
              <li>Existing agreements remain bound to their original rules</li>
              <li>Emergency powers are scope-limited</li>
            </ul>
            <p>
              This creates a hybrid system balancing adaptability with
              predictability.
            </p>
          </div>

          <div className="research-domain">
            <h4>Human coordination</h4>
            <p>
              Many real-world exchanges require delivery verification, agreement
              on outcomes, and trust formation between strangers.
            </p>
            <p>
              Protected transfers introduce a structured phase between payment
              and settlement, which can influence coordination behaviour.
            </p>
          </div>
        </section>

        {/* ── System properties ────────────────────────────────────────────── */}
        <section id="system-properties" className="content-block">
          <h3>System properties</h3>

          <div className="system-property">
            <h4>Agreement immutability</h4>
            <p>
              Once an escrow is created, its release strategy is fixed, its
              resolution path is fixed, and its optional integrations are fixed.
            </p>
            <p>
              Governance cannot rewrite these rules. This property supports
              predictability in settlement.
            </p>
          </div>

          <div className="system-property">
            <h4>Deterministic enforcement</h4>
            <p>
              Outcomes are enforced by contract logic. The protocol does not
              evaluate intent or fairness. It enforces the result defined by the
              selected modules.
            </p>
          </div>

          <div className="system-property">
            <h4>Non-custodial settlement</h4>
            <p>
              Funds are held by contracts, not intermediaries. No role in the
              system can arbitrarily redirect assets. Settlement must follow
              encoded paths.
            </p>
          </div>

          <div className="system-property">
            <h4>Forward-only evolution</h4>
            <p>
              Modules can be introduced or replaced for future escrows. Existing
              escrows continue operating under their original configuration.
              This creates a layered system where multiple generations of rules
              may coexist.
            </p>
          </div>

          <div className="system-property">
            <h4>Integration domains</h4>
            <p>
              Optional modules introduce external dependencies such as dispute
              resolution systems, yield generation integrations, and future
              coordination extensions.
            </p>
            <p>
              These domains can introduce shared risk surfaces for participating
              escrows. The protocol treats them as opt-in features and provides
              containment mechanisms where possible.
            </p>
          </div>
        </section>

        {/* ── Protocol invariants ──────────────────────────────────────────── */}
        <section id="invariants" className="content-block">
          <h3>Protocol invariants</h3>
          <p>
            The following properties hold for every escrow, for every token,
            under every module configuration and governance state. They are
            encoded at the contract level, not as policy.
          </p>
          <div className="invariant-list">
            <div className="invariant-row">
              <div className="invariant-meta">
                <span className="invariant-id">I1</span>
                <strong>Non-custodial</strong>
              </div>
              <p>
                Funds are held by smart contracts. No operator, resolver, or
                module can redirect assets outside predefined state transitions.
              </p>
              <code className="invariant-notation">
                {'Custody ∉ {operator, resolver, module}'}
              </code>
            </div>
            <div className="invariant-row">
              <div className="invariant-meta">
                <span className="invariant-id">I2</span>
                <strong>Outcome-bounded</strong>
              </div>
              <p>
                A resolver has exactly one power: choosing among a fixed set of
                outcomes. The contract enforces this and accepts no other
                instructions.
              </p>
              <code className="invariant-notation">
                {'Outcome ∈ {RELEASE, REFUND}'}
              </code>
            </div>
            <div className="invariant-row">
              <div className="invariant-meta">
                <span className="invariant-id">I3</span>
                <strong>Per-escrow isolation</strong>
              </div>
              <p>
                A failure, exploit, or dispute in one escrow cannot propagate to
                another. There is no shared collateral, no shared yield pool,
                and no shared dispute state across escrows.
              </p>
              <code className="invariant-notation">
                {'failure(escrow_n) ⊄ escrow_m  ∀ m ≠ n'}
              </code>
            </div>
            <div className="invariant-row">
              <div className="invariant-meta">
                <span className="invariant-id">I4</span>
                <strong>Deterministic state machine</strong>
              </div>
              <p>
                Settlement follows predefined state transitions only. Terminal
                states (RELEASED, REFUNDED, RESOLVED) are irreversible. No
                discretionary execution path exists.
              </p>
              <code className="invariant-notation">
                {'state ∈ {PENDING → RELEASED | REFUNDED | RESOLVED}'}
              </code>
            </div>
            <div className="invariant-row">
              <div className="invariant-meta">
                <span className="invariant-id">I5</span>
                <strong>Forward-only upgrades</strong>
              </div>
              <p>
                Governance changes and module upgrades apply only to escrows
                created after the change. Active escrows are permanently bound
                to their original configuration.
              </p>
              <code className="invariant-notation">
                {'upgrade(t) → escrow.created < t only'}
              </code>
            </div>
            <div className="invariant-row">
              <div className="invariant-meta">
                <span className="invariant-id">I6</span>
                <strong>Bounded emergency controls</strong>
              </div>
              <p>
                The guardian role can pause high-risk operations for a maximum
                of 7 days per cycle, up to 3 cycles total. Pause auto-expires
                and cannot be extended without a new governance cycle.
              </p>
              <code className="invariant-notation">
                {'pause_max = 7d, cycles_max = 3'}
              </code>
            </div>
          </div>
          <p className="invariant-ref">
            For the full architectural framing of these invariants, see{' '}
            <Link href="/architecture#invariants">
              Architecture → Architectural invariants
            </Link>
            . For threat analysis mapped against each invariant, see{' '}
            <Link href="/security#threat-model">Security → Threat model</Link>.
          </p>
        </section>

        {/* ── Security boundaries ──────────────────────────────────────────── */}
        <section className="content-block">
          <h3>Security boundaries</h3>
          <p>
            From a research perspective, the protocol defines several boundaries
            whose effectiveness is central to its design goals:
          </p>
          <ul>
            <li>Between escrow agreements</li>
            <li>Between modules</li>
            <li>Between governance and settlement</li>
            <li>Between integration domains and core logic</li>
          </ul>
          <p>
            See <Link href="/architecture">Architecture</Link> for the full
            isolation model, and <Link href="/security">Security Model</Link>{' '}
            for the threat taxonomy and mitigation analysis per boundary.
          </p>
        </section>

        {/* ── Economic considerations ──────────────────────────────────────── */}
        <section className="content-block">
          <h3>Economic considerations</h3>
          <p>Protected transfers introduce new economic dynamics:</p>
          <ul>
            <li>Yield attribution across pooled positions</li>
            <li>Incentives for dispute resolution</li>
            <li>Costs associated with coordination delays</li>
            <li>
              Fee structures that may support infrastructure sustainability
            </li>
          </ul>
          <p>
            These elements can evolve through modules and policy decisions. For
            the full bond sizing, slashing rates, and incentive model, see{' '}
            <Link href="/security#dispute-economics">Dispute Economics</Link>.
          </p>
        </section>

        {/* ── Comparison ───────────────────────────────────────────────────── */}
        <section className="content-block">
          <h3>Comparison to related systems</h3>
          <p>Sew intersects with several established patterns:</p>
          <ul>
            <li>Traditional escrow services</li>
            <li>Smart contract vaults and pools</li>
            <li>Arbitration protocols (e.g., Kleros, UMA)</li>
            <li>Payment coordination systems</li>
            <li>Optimistic rollup dispute games</li>
          </ul>
          <p>
            Its contribution is combining escrow, structured dispute resolution,
            and modular extensibility into a composable, non-custodial
            settlement primitive — with forward-only governance that preserves
            existing agreement integrity.
          </p>
        </section>

        {/* ── Open questions ───────────────────────────────────────────────── */}
        <section id="open-questions" className="content-block">
          <h3>Areas of ongoing inquiry</h3>
          <p>Several questions remain open for research and experimentation:</p>
          <ul>
            <li>What release patterns minimise dispute frequency?</li>
            <li>
              How do users behave when protection is available by default versus
              opt-in?
            </li>
            <li>
              What resolver selection mechanisms produce the most consistent
              outcomes under adversarial conditions?
            </li>
            <li>
              How should risk exposure to external yield integrations be bounded
              relative to escrow size?
            </li>
            <li>
              How do governance constraints influence user trust in settlement
              systems over time?
            </li>
            <li>
              What are the game-theoretic equilibria for resolver behaviour
              under bond-and-slash incentive structures?
            </li>
            <li>
              How does dispute escalation cost affect the distribution of
              dispute outcomes in practice?
            </li>
          </ul>
        </section>

        {/* ── Responsible disclosure ───────────────────────────────────────── */}
        <section id="disclosure" className="content-block disclosure-block">
          <h3>Responsible disclosure</h3>
          <p>
            Sew Protocol is open to security research. If you identify a
            vulnerability, potential invariant violation, or design issue in the
            protocol contracts, modules, or governance system, please disclose
            it responsibly before any public disclosure.
          </p>
          <div className="disclosure-grid">
            <div className="disclosure-item">
              <span className="disclosure-label">Contact</span>
              <p>
                Email{' '}
                <a href="mailto:info@sewprotocol.com">info@sewprotocol.com</a>{' '}
                with subject line <code>{'[Security]'}</code>. You may also
                reach the team via the <Link href="/contact">Contact page</Link>
                .
              </p>
            </div>
            <div className="disclosure-item">
              <span className="disclosure-label">Scope</span>
              <p>
                Core escrow contracts, resolution modules, release strategies,
                yield modules, governance contracts, and guardian logic.
                Interface applications (e.g., Everyday Wallet) are out of scope
                for protocol-level disclosure.
              </p>
            </div>
            <div className="disclosure-item">
              <span className="disclosure-label">Response</span>
              <p>
                We aim to acknowledge disclosures within 48 hours and provide a
                substantive response within 7 days. Critical findings affecting
                deployed testnet contracts will be prioritised.
              </p>
            </div>
            <div className="disclosure-item">
              <span className="disclosure-label">Current status</span>
              <p>
                Contracts are deployed on Base Sepolia testnet. No mainnet
                deployment has occurred. A third-party audit is planned as part
                of the current development phase.{' '}
                <Link href="/contracts">View deployment status →</Link>
              </p>
            </div>
          </div>
        </section>

        {/* ── Summary ──────────────────────────────────────────────────────── */}
        <section className="content-block">
          <h3>Summary</h3>
          <p>
            Sew Protocol is an exploration of protected transfers as a
            coordination primitive.
          </p>
          <p>It attempts to balance:</p>
          <ul>
            <li>Non-custodial guarantees</li>
            <li>Deterministic settlement</li>
            <li>Modular evolution</li>
            <li>Constrained governance</li>
          </ul>
          <p>
            Researchers can engage with it from multiple perspectives, including
            security, economics, mechanism design, and human coordination.
          </p>
          <div className="summary-links">
            <Link href="/security" className="summary-link">
              Security Model
            </Link>
            <Link href="/security#threat-model" className="summary-link">
              Threat Model
            </Link>
            <Link href="/security#dispute-economics" className="summary-link">
              Dispute Economics
            </Link>
            <Link href="/architecture" className="summary-link">
              Architecture
            </Link>
            <Link href="/dispute-resolution" className="summary-link">
              Dispute Architecture
            </Link>
            <Link href="/protocol-limits" className="summary-link">
              Protocol Limits
            </Link>
            <Link href="/contracts" className="summary-link">
              Contracts
            </Link>
          </div>
        </section>
      </div>

      <style jsx>{`
        /* ── Header ─────────────────────────────────────────────────────────── */
        h1 {
          margin-bottom: 0.5rem;
        }
        .tagline {
          color: var(--accents-3);
          margin-bottom: 1.25rem;
        }
        .intro {
          font-size: 1.1rem;
          line-height: 1.7;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        .header-section {
          margin-bottom: 1.5rem;
          text-align: center;
          padding: 3rem 2rem 0;
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
          border-bottom: 1px solid #eaeaea;
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
          color: #0070f3;
        }
        .sep {
          color: var(--accents-3);
          opacity: 0.5;
        }

        /* ── Shared block ───────────────────────────────────────────────────── */
        .content-block {
          margin: 4rem auto;
          max-width: 800px;
          padding: 0 2rem;
        }
        .content-block h3 {
          margin-bottom: 1rem;
        }
        .content-block > p {
          font-size: 0.95rem;
          color: var(--accents-2);
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        .content-block ul {
          padding-left: 1.25rem;
          font-size: 0.92rem;
          color: var(--accents-2);
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        /* ── Research domains ───────────────────────────────────────────────── */
        .research-domain {
          margin-top: 1.5rem;
          padding: 1.5rem;
          background: #fafafa;
          border-radius: var(--radius);
          border: 1px solid #eaeaea;
        }
        .research-domain h4 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }
        .research-domain p {
          font-size: 0.875rem;
          color: var(--accents-2);
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }
        .research-domain ul {
          margin: 0.25rem 0 0.5rem;
          padding-left: 1.15rem;
          font-size: 0.855rem;
          color: var(--accents-2);
          line-height: 1.75;
        }

        /* ── System properties ──────────────────────────────────────────────── */
        .system-property {
          margin-top: 1.5rem;
          padding: 1.5rem;
          background: #fafafa;
          border-radius: var(--radius);
          border: 1px solid #eaeaea;
        }
        .system-property h4 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }
        .system-property p {
          font-size: 0.875rem;
          color: var(--accents-2);
          line-height: 1.6;
          margin-bottom: 0.35rem;
        }
        .system-property p:last-child {
          margin-bottom: 0;
        }

        /* ── Protocol invariants ────────────────────────────────────────────── */
        .invariant-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1.75rem;
        }
        .invariant-row {
          padding: 1.25rem 1.5rem;
          border: 1.5px solid var(--accents-2);
          border-radius: var(--radius);
          background: var(--bg);
        }
        .invariant-meta {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 0.5rem;
        }
        .invariant-id {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 800;
          background: #f0f0f0;
          color: var(--accents-3);
          padding: 0.15rem 0.45rem;
          border-radius: 3px;
          letter-spacing: 0.04em;
        }
        .invariant-meta strong {
          font-size: 0.92rem;
        }
        .invariant-row > p {
          font-size: 0.855rem;
          color: var(--accents-2);
          line-height: 1.6;
          margin: 0 0 0.75rem;
        }
        .invariant-notation {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.73rem;
          color: var(--accents-3);
          background: #f4f4f4;
          padding: 0.3rem 0.65rem;
          border-radius: 4px;
          letter-spacing: 0.01em;
        }
        .invariant-ref {
          margin-top: 1.5rem;
          font-size: 0.85rem;
          color: var(--accents-3);
          line-height: 1.6;
        }
        .invariant-ref a {
          color: #0070f3;
          font-weight: 500;
          text-decoration: none;
        }
        .invariant-ref a:hover {
          text-decoration: underline;
        }

        /* ── Responsible disclosure ─────────────────────────────────────────── */
        .disclosure-block {
          background: #fafafa;
          border: 1.5px solid var(--accents-2);
          border-radius: var(--radius);
          padding: 2rem 2rem 1.75rem !important;
          max-width: 800px;
        }
        .disclosure-block h3 {
          margin-bottom: 0.75rem;
        }
        .disclosure-block > p {
          margin-bottom: 1.5rem;
        }
        .disclosure-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .disclosure-item {
          padding: 1rem 1.25rem;
          background: var(--bg);
          border-radius: var(--radius);
          border: 1px solid #eaeaea;
        }
        .disclosure-label {
          display: block;
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          color: var(--accents-3);
          margin-bottom: 0.5rem;
        }
        .disclosure-item p {
          margin: 0;
          font-size: 0.855rem;
          color: var(--accents-2);
          line-height: 1.65;
        }
        .disclosure-item a {
          color: #0070f3;
          font-weight: 500;
          text-decoration: none;
        }
        .disclosure-item a:hover {
          text-decoration: underline;
        }
        .disclosure-item code {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          background: #f0f0f0;
          padding: 0.1rem 0.3rem;
          border-radius: 3px;
          color: var(--accents-2);
        }

        /* ── Summary links ──────────────────────────────────────────────────── */
        .summary-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-top: 1.5rem;
        }
        .summary-link {
          padding: 0.4rem 0.9rem;
          border: 1px solid var(--accents-2);
          border-radius: var(--radius);
          font-size: 0.855rem;
          font-weight: 500;
          color: var(--fg);
          text-decoration: none;
          transition: all 0.15s;
        }
        .summary-link:hover {
          background: var(--fg);
          color: var(--bg);
          border-color: var(--fg);
        }

        /* ── Responsive ─────────────────────────────────────────────────────── */
        @media (max-width: 700px) {
          .disclosure-grid {
            grid-template-columns: 1fr;
          }
          .page-nav {
            padding: 0.75rem 1rem;
          }
          .content-block {
            padding: 0 1rem;
          }
          .disclosure-block {
            padding: 1.25rem 1rem 1.25rem !important;
          }
        }
      `}</style>
    </>
  )
}
