import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default function Architecture() {
  return (
    <>
      <Header titlePre="Architecture" />
      <div className={sharedStyles.layout}>
        <section className="header-section">
          <h1>Architecture</h1>
          <h2 className="tagline">Sew Protocol</h2>
          <p className="intro">
            Sew Protocol introduces a structured pattern for protected transfers on Ethereum.
            At its core, it defines how a payment can be held, released, and resolved without custody, while preserving composability and forward evolution.
          </p>
        </section>

        <section className="content-block">
          <h3>System model</h3>
          <p>
            A protected transfer in Sew is an escrow-backed payment with predefined release and resolution paths.
            Instead of sending tokens directly to a recipient:
          </p>
          <ul>
            <li>Funds are routed into an escrow contract</li>
            <li>Release conditions are defined at creation</li>
            <li>Funds are released when conditions are satisfied</li>
          </ul>
          <p>Each escrow represents an isolated agreement between participants.</p>
        </section>

        <section className="content-block">
          <h3>Core components</h3>
          
          <div className="component">
            <h4>Escrow layer</h4>
            <p>The escrow layer holds funds under rule-bound conditions.</p>
            <p>Responsibilities:</p>
            <ul>
              <li>Receive tokens into escrow</li>
              <li>Track escrow state</li>
              <li>Enforce release and cancellation paths</li>
              <li>Interface with resolution modules when disputes occur</li>
            </ul>
            <p>Each escrow is self-contained. State transitions are deterministic and governed by protocol rules.</p>
          </div>

          <div className="component">
            <h4>Release strategies</h4>
            <p>Release strategies define how and when a payment finalizes.</p>
            <p>Examples of release patterns:</p>
            <ul>
              <li>Sender-initiated release</li>
              <li>Timed auto-release</li>
              <li>Conditional release paths</li>
            </ul>
            <p>Release logic is separated from escrow storage to allow evolution without rewriting core contracts.</p>
          </div>

          <div className="component">
            <h4>Resolution modules</h4>
            <p>Resolution modules handle disagreements between parties.</p>
            <p>They define:</p>
            <ul>
              <li>How disputes are escalated</li>
              <li>Who can resolve them</li>
              <li>How final outcomes are enforced</li>
            </ul>
          </div>
        </section>

        <section className="content-block">
          <h3>Asset custody model</h3>
          <p>Funds are always held by smart contracts.</p>
          <p>Key properties:</p>
          <ul>
            <li>No centralized custody</li>
            <li>No discretionary redirection of funds</li>
            <li>Release flows must follow encoded rules</li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Isolation as a first principle</h3>
          <p>Sew is designed to minimize blast radius. Isolation happens at multiple levels:</p>
          <ul>
            <li><strong>Per-escrow isolation:</strong> Each agreement is independent. Failures do not propagate.</li>
            <li><strong>Module boundaries:</strong> Release logic, resolution logic, and extensions are separated.</li>
            <li><strong>Forward-only upgrades:</strong> Changes affect new escrows only.</li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Governance surface</h3>
          <p>Protocol evolution is coordinated through defined roles. At a high level:</p>
          <ul>
            <li>Governance can approve new modules</li>
            <li>Safety roles can pause components during incidents</li>
            <li>Emergency actions are constrained and scope-limited</li>
          </ul>
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
        .component {
          margin-top: 2rem;
          padding: 1.5rem;
          background: #fafafa;
          border-radius: var(--radius);
          border: 1px solid #eaeaea;
        }
        .component h4 {
          margin-top: 0;
        }
      `}</style>
    </>
  )
}
