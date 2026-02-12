import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default function Security() {
  return (
    <>
      <Header titlePre="Security" />
      <div className={sharedStyles.layout}>
        <section className="header-section">
          <h1>Security Model</h1>
          <h2 className="tagline">Sew Protocol</h2>
          <p className="intro">
            Sew Protocol is designed as a containment layer for protected transfers on Ethereum.
            Rather than attempting to eliminate all risk, the protocol focuses on narrowing scope, isolating failures, and ensuring that funds always follow deterministic paths.
          </p>
        </section>

        <section className="content-block">
          <h3>Security philosophy</h3>
          <p>
            Ethereum transactions are irreversible. Smart contracts introduce new capabilities, but also new forms of risk.
            Sew approaches security through three principles:
          </p>
          <ul>
            <li><strong>Containment over prevention:</strong> Failures may occur. The protocol is designed to limit their impact.</li>
            <li><strong>Determinism over discretion:</strong> Funds move according to predefined rules, not human judgment.</li>
            <li><strong>Isolation over shared risk:</strong> Each escrow is treated as an independent agreement.</li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Core security properties</h3>
          <div className="property-grid">
            <div className="property">
              <h4>Non-custodial by design</h4>
              <p>Funds are held by smart contracts, not by an operator or intermediary.</p>
            </div>
            <div className="property">
              <h4>Deterministic release paths</h4>
              <p>Every escrow defines its release and resolution rules at creation. Settlement follows predefined state transitions.</p>
            </div>
            <div className="property">
              <h4>Per-escrow isolation</h4>
              <p>Each protected transfer is independent. If one fails, others are unaffected.</p>
            </div>
            <div className="property">
              <h4>Forward-only evolution</h4>
              <p>Protocol upgrades do not alter existing agreements. Historical agreements remain stable.</p>
            </div>
          </div>
        </section>

        <section className="content-block">
          <h3>Threat model</h3>
          <p>Sew is designed to operate in an adversarial environment, addressing risks like:</p>
          <ul>
            <li><strong>User error:</strong> Sending funds to the wrong address or premature release.</li>
            <li><strong>Counterparty risk:</strong> Fraudulent participants or failure to deliver.</li>
            <li><strong>Smart contract risk:</strong> Bugs in integrations or extension modules.</li>
            <li><strong>Governance risk:</strong> Malicious or compromised privileged roles.</li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Emergency response posture</h3>
          <p>
            In the event of a vulnerability, the protocol is designed for rapid containment.
            A guardian role can pause the system for up to 7 days (maximum 3 cycles total).
            While paused, dispute initiation and escalation are blocked to prevent further risk exposure.
            Normal settlement operations (release, cancellation, new escrow creation) remain available.
            Pause is an emergency circuit-breaker for high-risk operations and automatically expires after the time limit.
          </p>
        </section>

        <section className="content-block">
          <h3>Governance constraints</h3>
          <p>
            Governance can approve new modules and update global parameters for future escrows.
            However, governance <strong>cannot</strong> rewrite existing agreements.
            Each escrow is locked to the modules and configuration selected at creation time.
          </p>
          <p>
            This ensures that protocol evolution does not introduce retroactive changes to active transfers.
            Users have permanent visibility into the rules governing their funds.
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
      `}</style>
    </>
  )
}
