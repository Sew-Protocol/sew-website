import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Researcher() {
  return (
    <>
      <Header titlePre="For Researchers" />
      <div className={`${sharedStyles.layout} hero-texture`}>
        <section className="header-section">
          <h1>For Researchers</h1>
          <h2 className="tagline">Sew Protocol</h2>
          <p className="intro">
            Sew Protocol introduces a structured settlement pattern for ERC20
            transfers on Ethereum. It allows a transfer to be held under
            predefined rules until it is released, cancelled, or resolved. The
            protocol is designed as a non-custodial coordination layer with a
            focus on containment, determinism, and forward-compatible evolution.
          </p>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Framing</h3>
          <p>
            Sew can be understood as an attempt to formalize protected transfers
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

        <section className="content-block">
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
              <li>Dispute escalation behavior</li>
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
              and settlement, which can influence coordination behavior.
            </p>
          </div>
        </section>

        <section className="content-block">
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

        <section className="content-block">
          <h3>Security boundaries</h3>
          <p>
            From a research perspective, the protocol defines several
            boundaries:
          </p>
          <ul>
            <li>Between escrow agreements</li>
            <li>Between modules</li>
            <li>Between governance and settlement</li>
            <li>Between integration domains and core logic</li>
          </ul>
          <p>
            The effectiveness of these boundaries is central to the protocol's
            design goals.
          </p>
        </section>

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
          <p>These elements can evolve through modules and policy decisions.</p>
        </section>

        <section className="content-block">
          <h3>Comparison to related systems</h3>
          <p>Sew intersects with several established patterns:</p>
          <ul>
            <li>Traditional escrow services</li>
            <li>Smart contract vaults and pools</li>
            <li>Arbitration protocols</li>
            <li>Payment coordination systems</li>
          </ul>
          <p>
            Its contribution is combining these into a composable, non-custodial
            settlement layer.
          </p>
        </section>

        <section className="content-block">
          <h3>Areas of ongoing inquiry</h3>
          <p>Several questions remain open for research and experimentation:</p>
          <ul>
            <li>What release patterns minimize disputes?</li>
            <li>
              How do users behave when protection is available by default?
            </li>
            <li>What resolution mechanisms produce consistent outcomes?</li>
            <li>
              How should risk exposure to external integrations be bounded?
            </li>
            <li>
              How do governance constraints influence trust in settlement
              systems?
            </li>
          </ul>
          <p>
            These questions will likely be answered over time through real-world
            use.
          </p>
        </section>

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
          <p>
            See{' '}
            <Link href="/security">
              <a>Security</a>
            </Link>{' '}
            for detailed security model,{' '}
            <Link href="/protocol-limits">
              <a>Protocol Limits</a>
            </Link>{' '}
            for constraint definitions, and{' '}
            <Link href="/technical">
              <a>Technical Resources</a>
            </Link>{' '}
            for contract references.
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
        .research-domain {
          margin-top: 2rem;
          padding: 1.5rem;
          background: #fafafa;
          border-radius: var(--radius);
          border: 1px solid #eaeaea;
        }
        .research-domain h4 {
          margin-top: 0;
        }
        .system-property {
          margin-top: 2rem;
          padding: 1.5rem;
          background: #fafafa;
          border-radius: var(--radius);
          border: 1px solid #eaeaea;
        }
        .system-property h4 {
          margin-top: 0;
        }
        @media (max-width: 600px) {
          .content-block {
            padding: 0 1rem;
          }
        }
      `}</style>
    </>
  )
}
