import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function HowItWorks() {
  return (
    <>
      <Header titlePre="How It Works" />
      <div className={sharedStyles.layout}>
        <section className="header-section">
          <h1>How It Works</h1>
          <h2 className="tagline">Sew Protocol</h2>
          <p className="intro">
            Sew Protocol is a security layer for payments on Base (Ethereum L2).
            Instead of transferring funds directly, payments can be held in
            escrow until conditions are met.
          </p>
        </section>

        <section className="content-block">
          <h3>What Sew Is Not</h3>
          <p>Sew is not a marketplace, a wallet, or a court.</p>
          <p>
            Sew is a <strong>security layer for transfers</strong>. It provides
            the infrastructure for protected payments while leaving user
            experience, dispute evaluation, and interface design to the
            applications built on top.
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
          <p>
            The protocol does not decide outcomes. It enforces the rules defined
            at creation.
          </p>
          <p className="key-concept">
            Each escrow captures its configuration at creation and cannot be
            changed. Governance changes only affect future escrows, never
            existing ones.
          </p>
        </section>

        <section className="content-block">
          <h3>Lifecycle of a protected transfer</h3>

          <div className="lifecycle-step">
            <h4>1) Creation</h4>
            <p>
              A user initiates a payment through an interface (such as a wallet
              or marketplace).
            </p>
            <p>At creation time, the following are defined:</p>
            <ul>
              <li>Token and amount</li>
              <li>Sender and recipient</li>
              <li>Release strategy</li>
              <li>Dispute resolution path (if enabled)</li>
              <li>Optional yield generation (if enabled)</li>
            </ul>
            <p>
              Funds are transferred into an escrow contract and held under these
              rules. Once created, these rules do not change.
            </p>
          </div>

          <div className="lifecycle-step">
            <h4>2) Active escrow state</h4>
            <p>While active, the funds remain locked in escrow.</p>
            <p>During this period:</p>
            <ul>
              <li>The recipient cannot withdraw funds unilaterally</li>
              <li>The sender cannot reclaim funds unilaterally</li>
              <li>Settlement depends on the selected release path</li>
            </ul>
            <p>
              This creates a neutral holding phase where both parties can
              coordinate.
            </p>
          </div>

          <div className="lifecycle-step">
            <h4>3) Optional yield generation</h4>
            <p>If enabled at creation:</p>
            <ul>
              <li>
                Funds may generate yield through integrations (e.g., Aave V3)
              </li>
              <li>Yield can go to sender, recipient, or be split</li>
              <li>Yield settings are fixed at escrow creation</li>
            </ul>
            <p>
              This feature is optional. Yield settings are locked at escrow
              creation and cannot be changed.
            </p>
          </div>

          <div className="lifecycle-step">
            <h4>4) Release</h4>
            <p>Settlement typically occurs through a release action.</p>
            <p>Examples include:</p>
            <ul>
              <li>Sender releases at any time after creating the escrow</li>
              <li>
                Time-based release triggers automatically after a set period
              </li>
              <li>A predefined condition is met</li>
            </ul>
            <p>
              When released: funds leave escrow, the recipient receives the
              payment, and any generated yield is included in settlement.
            </p>
            <p>If a dispute is opened, release is paused until resolution.</p>
          </div>

          <div className="lifecycle-step">
            <h4>5) Dispute (if needed)</h4>
            <p>If parties disagree, a dispute can be opened.</p>
            <p>Two resolution modes exist:</p>
            <ul>
              <li>
                <strong>Single trusted resolver:</strong> A designated resolver
                makes the final decision.
              </li>
              <li>
                <strong>Escalating resolution:</strong> Multi-level process with
                final arbitration possible.
              </li>
            </ul>
            <p>
              Both modes use bonds and incentives to secure behavior. The
              protocol enforces the resolution deterministically.
            </p>
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
          <h3>Escrow states</h3>
          <p>An escrow moves through defined states during its lifecycle:</p>
          <ul>
            <li>
              <strong>Pending</strong>: Created and funded. Funds are locked
              until conditions are met.
            </li>
            <li>
              <strong>Disputed</strong>: A participant opened a dispute.
              Resolution is in progress.
            </li>
            <li>
              <strong>Released</strong>: Conditions were met. Recipient received
              the funds.
            </li>
            <li>
              <strong>Refunded</strong>: The escrow was cancelled. Funds
              returned to sender.
            </li>
            <li>
              <strong>Resolved</strong>: A resolver determined the outcome.
              Funds distributed accordingly.
            </li>
          </ul>
          <p>
            Once an escrow reaches Released, Refunded, or Resolved, it is
            complete. These states are final.
          </p>
        </section>

        <section className="content-block">
          <h3>Module architecture</h3>
          <p>Sew uses pluggable modules to define escrow behavior:</p>
          <ul>
            <li>
              <strong>Release strategy</strong>: Controls who can release funds
              and under what conditions.
            </li>
            <li>
              <strong>Resolution module</strong>: Handles disputes and
              determines outcomes.
            </li>
            <li>
              <strong>Yield module</strong>: Manages optional yield generation
              on escrowed funds.
            </li>
          </ul>
          <p>
            Modules are selected when an escrow is created and cannot be changed
            afterward. This ensures existing agreements remain predictable
            regardless of future protocol upgrades.
          </p>
        </section>

        <section className="content-block">
          <h3>Safety mechanisms</h3>
          <p>To support system stability:</p>
          <ul>
            <li>Governance can limit exposure to external integrations</li>
            <li>Guardians can disable risky integrations</li>
            <li>
              Positions can be unwound back to escrow custody in emergencies
            </li>
          </ul>
          <p>
            These mechanisms are designed to contain risk, not to control funds.
          </p>
          <p>
            See{' '}
            <Link href="/protocol-limits">
              <a>Protocol Limits</a>
            </Link>{' '}
            for detailed bounds on all protocol parameters.
          </p>
        </section>

        <section className="content-block">
          <h3>Fees</h3>
          <p>
            Escrow creation fees are capped at 2%. The protocol may take a share
            of generated yield and appeal bonds. All fees are bounded and
            disclosed upfront.
          </p>
          <p>
            See{' '}
            <Link href="/fees">
              <a>Fees</a>
            </Link>{' '}
            for the complete breakdown.
          </p>
        </section>

        <section className="content-block">
          <h3>What Makes Sew Different</h3>
          <p>Sew introduces several original design concepts:</p>
          <ul>
            <li>
              <strong>Per-escrow configuration snapshot</strong>: Every escrow
              captures its complete configuration at creation. This includes
              release strategy, resolution module, yield settings, and timeout
              parameters. Once created, these settings cannot be changed by
              anyone—including governance.
            </li>
            <li>
              <strong>Forward-only evolution</strong>: Protocol upgrades and
              module changes only affect new escrows. Existing agreements remain
              governed by the rules that existed when they were created.
            </li>
            <li>
              <strong>Yield on escrowed payments</strong>: Funds held in escrow
              can generate yield through integrations like Aave V3. This yield
              accrues to the escrow and is included in final settlement.
            </li>
            <li>
              <strong>Resolver incentives</strong>: Dispute resolvers are
              incentivized through bonds and fees to act honestly. Escalation
              paths with final arbitration (e.g., Kleros) provide recourse for
              disputed outcomes.
            </li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Summary</h3>
          <p>
            Sew Protocol adds structure to token transfers without introducing
            custody.
          </p>
          <p>It allows a payment to be:</p>
          <ul>
            <li>Held</li>
            <li>Coordinated</li>
            <li>Settled</li>
          </ul>
          <p>Under predefined, enforceable rules.</p>
          <p>
            This makes it possible to support safer exchanges between parties
            who do not already trust each other.
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
