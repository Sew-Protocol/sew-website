import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default function HowItWorks() {
  return (
    <>
      <Header titlePre="How It Works" />
      <div className={sharedStyles.layout}>
        <section className="header-section">
          <h1>How It Works</h1>
          <h2 className="tagline">Sew Protocol</h2>
          <p className="intro">
            Sew Protocol introduces a structured way to send protected payments on Ethereum.
            Instead of transferring funds directly to another address, a payment can be held in escrow until it is released, cancelled, or resolved.
          </p>
        </section>

        <section className="content-block">
          <h3>The core idea</h3>
          <p>A standard token transfer is immediate and final.</p>
          <p>A protected transfer is different:</p>
          <ul>
            <li>Funds are placed into a smart contract</li>
            <li>Release conditions are defined up front</li>
            <li>Settlement happens when those conditions are met</li>
          </ul>
          <p>The protocol does not decide outcomes. It enforces the rules defined at creation.</p>
        </section>

        <section className="content-block">
          <h3>Lifecycle of a protected transfer</h3>
          
          <div className="lifecycle-step">
            <h4>1) Creation</h4>
            <p>A user initiates a payment through an interface (such as a wallet or marketplace).</p>
            <p>At creation time, the following are defined:</p>
            <ul>
              <li>Token and amount</li>
              <li>Sender and recipient</li>
              <li>Release strategy</li>
              <li>Dispute resolution path (if enabled)</li>
              <li>Optional yield generation (if enabled)</li>
            </ul>
            <p>Funds are transferred into an escrow contract and held under these rules. Once created, these rules do not change.</p>
          </div>

          <div className="lifecycle-step">
            <h4>2) Active escrow state</h4>
            <p>While active, the funds remain locked in escrow.</p>
            <p>During this period:</p>
            <ul>
              <li>The recipient cannot withdraw funds</li>
              <li>The sender cannot reclaim funds unilaterally</li>
              <li>Settlement depends on the selected release path</li>
            </ul>
            <p>This creates a neutral holding phase where both parties can coordinate.</p>
          </div>

          <div className="lifecycle-step">
            <h4>3) Optional yield generation</h4>
            <p>If enabled at creation:</p>
            <ul>
              <li>Funds may be deployed into an external protocol (such as Aave) to generate yield</li>
              <li>The escrow remains the owner of the position</li>
              <li>Yield accrues during the escrow period</li>
            </ul>
            <p>This feature is optional and currently scoped to Aave integration. Yield handling requires active unwinding at settlement. If unwound early, funds return to escrow custody.</p>
          </div>

          <div className="lifecycle-step">
            <h4>4) Release</h4>
            <p>Settlement typically occurs through a release action.</p>
            <p>Examples include:</p>
            <ul>
              <li>Sender releases funds after receiving goods</li>
              <li>A timed release triggers automatically</li>
              <li>A predefined condition is met</li>
            </ul>
            <p>When released: funds leave escrow, the recipient receives the payment, and any generated yield is included in settlement.</p>
          </div>

          <div className="lifecycle-step">
            <h4>5) Dispute (if needed)</h4>
            <p>If parties disagree:</p>
            <ul>
              <li>A dispute can be opened according to the selected resolution module</li>
              <li>The designated resolver evaluates the situation</li>
              <li>If the outcome is contested, the resolver's decision can be appealed</li>
              <li>A final outcome is enforced by the protocol</li>
            </ul>
            <p>The protocol enforces the result deterministically. It does not judge disputes—the resolution module defines the process.</p>
          </div>

          <div className="lifecycle-step">
            <h4>6) Final settlement</h4>
            <p>Once released, cancelled, or resolved:</p>
            <ul>
              <li>The escrow closes</li>
              <li>Funds are transferred to the correct destination</li>
              <li>No further changes are possible</li>
            </ul>
            <p>The agreement is complete.</p>
          </div>
        </section>

        <section className="content-block">
          <h3>What makes this different from a normal transfer</h3>
          <p><strong>Standard transfer:</strong></p>
          <ul>
            <li>Immediate</li>
            <li>Irreversible</li>
            <li>No coordination phase</li>
          </ul>
          <p><strong>Protected transfer:</strong></p>
          <ul>
            <li>Held under defined rules</li>
            <li>Released intentionally</li>
            <li>Supports structured settlement paths</li>
          </ul>
          <p>This creates space for coordination without introducing custody.</p>
        </section>

        <section className="content-block">
          <h3>Optional modules</h3>
          <p>Sew is modular by design.</p>
          <p>At creation time, an escrow may opt into:</p>
          <ul>
            <li>A release strategy</li>
            <li>A resolution mechanism</li>
            <li>A yield generation module</li>
          </ul>
          <p>Each module defines behavior for that escrow only. Modules can evolve over time, but existing escrows remain bound to the modules they selected.</p>
        </section>

        <section className="content-block">
          <h3>Isolation of agreements</h3>
          <p>Each escrow is an independent agreement.</p>
          <p>This means:</p>
          <ul>
            <li>State transitions are specific to that escrow</li>
            <li>Settlement paths are defined up front</li>
            <li>Changes to the protocol affect only new escrows</li>
          </ul>
          <p>Optional integrations may pool activity for efficiency, but the agreement itself remains self-contained.</p>
        </section>

        <section className="content-block">
          <h3>Safety mechanisms</h3>
          <p>To support system stability:</p>
          <ul>
            <li>Governance can limit exposure to external integrations</li>
            <li>Guardians can disable risky integrations</li>
            <li>Positions can be unwound back to escrow custody in emergencies</li>
          </ul>
          <p>These mechanisms are designed to contain risk, not to control funds.</p>
        </section>

        <section className="content-block">
          <h3>Interface-agnostic design</h3>
          <p>Sew does not depend on a single frontend.</p>
          <p>Protected transfers can be initiated through:</p>
          <ul>
            <li>Wallets</li>
            <li>Marketplaces</li>
            <li>Custom applications</li>
            <li>Automated workflows</li>
          </ul>
          <p>Everyday Wallet is one reference interface designed to make protected payments simple to use.</p>
        </section>

        <section className="content-block">
          <h3>A simple mental model</h3>
          <p>You can think of Sew as adding a coordination phase to a payment:</p>
          <ul>
            <li>Lock funds under agreed rules</li>
            <li>Coordinate outcome</li>
            <li>Settle deterministically</li>
          </ul>
          <p>The protocol enforces the rules. Participants control the decisions.</p>
        </section>

        <section className="content-block">
          <h3>Where this fits</h3>
          <p>Protected transfers are useful when:</p>
          <ul>
            <li>Parties do not already trust each other</li>
            <li>Delivery happens after payment</li>
            <li>Outcomes depend on real-world coordination</li>
          </ul>
          <p><strong>Examples include:</strong></p>
          <ul>
            <li>Peer-to-peer purchases</li>
            <li>Services and freelance work</li>
            <li>Event tickets</li>
            <li>Marketplace transactions</li>
          </ul>
          <p>The protocol provides the settlement layer beneath these interactions.</p>
        </section>

        <section className="content-block">
          <h3>Summary</h3>
          <p>Sew Protocol adds structure to token transfers without introducing custody.</p>
          <p>It allows a payment to be:</p>
          <ul>
            <li>Held</li>
            <li>Coordinated</li>
            <li>Settled</li>
          </ul>
          <p>Under predefined, enforceable rules.</p>
          <p>This makes it possible to support safer exchanges between parties who do not already trust each other.</p>
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
        .lifecycle-step {
          margin-top: 2rem;
          padding: 1.5rem;
          background: #fafafa;
          border-radius: var(--radius);
          border: 1px solid #eaeaea;
        }
        .lifecycle-step h4 {
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
