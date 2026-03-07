import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function HowItWorks() {
  return (
    <>
      <Header titlePre="How It Works" />
      <div className={`${sharedStyles.layout} hero-texture`}>
        <section className="header-section">
          <h1>How It Works</h1>
          <h2 className="tagline">
            Escrow lifecycle, state transitions, and dispute mechanics
          </h2>
          <p className="intro">
            Sew Protocol is a security layer for transfers on Base (Ethereum
            L2). Instead of transferring funds directly, transfers can be held
            in escrow until conditions are met.
          </p>
          <p className="glossary-note">
            <small>
              <strong>Glossary:</strong> A protected transfer is an ERC-20
              transfer routed through escrow. "Transfer" refers to the onchain
              token movement; "transfer" refers to the user intent.
            </small>
          </p>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>What Sew Is Not</h3>
          <p>Sew is not a marketplace, a wallet, or a court.</p>
          <p>
            Sew is a <strong>security layer for transfers</strong>. It provides
            the infrastructure for protected transfers while leaving user
            experience, dispute evaluation, and interface design to the
            applications built on top.
          </p>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
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

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Lifecycle of a protected transfer</h3>

          <div className="lifecycle-step">
            <h4>1) Creation</h4>
            <p>
              A user initiates a transfer through an interface (such as a wallet
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
                Funds may generate yield through external protocols (e.g., Aave
                V3)
              </li>
              <li>
                The <strong>yield module</strong> is selected at creation and
                locked for the escrow's lifetime
              </li>
              <li>
                Yield can go to sender or be disabled (additional presets coming
                in future releases)
              </li>
              <li>
                Funds remain under escrow control; the module acts as an
                integration layer only
              </li>
              <li>
                If the external protocol becomes unavailable, escrow can unwind
                back to custody
              </li>
            </ul>
            <p>
              This feature is optional. Yield settings, including the yield
              module, are locked at escrow creation and cannot be changed.
            </p>
          </div>

          <div className="disclaimer-block">
            <p>
              <strong>Yield disclaimer:</strong> Yield is optional. If enabled,
              funds are deployed to an external protocol (e.g., Aave V3).
              Principal remains under escrow control. External protocol risk
              exists (smart contract exploits, oracle failures, protocol
              changes). Governance can set exposure caps, and escrow can unwind
              positions back to custody in emergencies. See{' '}
              <Link href="/emergency">Emergency Recovery</Link>
              for details.
            </p>
          </div>

          <div className="disclaimer-block">
            <p>
              <strong>Relayer/gas abstraction:</strong> Users authorize actions;
              relayers may submit transactions. Relayers cannot control funds or
              override escrow rules.
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
              transfer, and any generated yield is included in settlement.
            </p>
            <p>If a dispute is opened, release is paused until resolution.</p>
            <p className="learn-more">
              <Link href="/docs/lifecycle">See full lifecycle details →</Link>
            </p>
          </div>

          <div className="lifecycle-step">
            <h4>5) Dispute (if needed)</h4>
            <p>
              If parties disagree about whether to release or refund, either
              party can open a dispute. Funds remain secure in escrow.
            </p>
            <p>
              <strong>What happens:</strong>
            </p>
            <ul>
              <li>Normal release is paused; funds stay locked</li>
              <li>A neutral resolver is assigned to review evidence</li>
              <li>The resolver decides: Release or Refund</li>
              <li>The outcome is enforced onchain; no discretion</li>
            </ul>
            <p>
              See{' '}
              <Link href="#what-if-disagreement">
                What Happens If There Is Disagreement?
              </Link>{' '}
              below for the full flow.
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

        <section className="content-block fabric-texture fabric-texture-light">
          <h3 id="what-if-disagreement">
            What Happens If There Is Disagreement?
          </h3>
          <p>
            Ethereum transfers are final. Sew adds structured resolution without
            custody: neutral outcomes enforced by smart contracts.
          </p>

          <div className="concept-block">
            <h4>When disputes arise</h4>
            <p>
              A dispute occurs when either party disagrees about whether funds
              should be released or refunded. For example:
            </p>
            <ul>
              <li>Recipient claims delivery is complete; sender disagrees</li>
              <li>Sender changed their mind and wants a refund</li>
              <li>Evidence is contradictory or ambiguous</li>
            </ul>
            <p>
              Without structured resolution, the funds would be stuck forever.
              Sew provides a mechanism to break the deadlock fairly.
            </p>
          </div>

          <div className="concept-block">
            <h4>The neutral resolver</h4>
            <p>
              When a dispute is opened, a <strong>neutral resolver</strong> is
              assigned. The resolver:
            </p>
            <ul>
              <li>Reviews evidence from both parties</li>
              <li>Cannot take custody of the funds</li>
              <li>Can only decide: Release or Refund</li>
              <li>Makes a binding decision onchain</li>
            </ul>
            <p>
              The resolver has no discretion to act outside these bounds. The
              outcome is enforced by code, not trusted intermediaries.
            </p>
          </div>

          <div className="concept-block">
            <h4>Isolation of risk</h4>
            <p>
              If a resolver makes a bad decision, the impact is limited to that
              single dispute. Other escrows are unaffected.
            </p>
            <p>
              This is different from centralized escrow, where one compromised
              resolver could drain multiple accounts.
            </p>
          </div>

          <div className="concept-block">
            <h4>Resolution modes</h4>
            <p>
              Sew supports multiple resolution approaches, activated as the
              protocol matures:
            </p>
            <ul>
              <li>
                <strong>v1 (Launch):</strong> Single governance-appointed or
                custom resolver. Fast, simple.
              </li>
              <li>
                <strong>v2 (Built, deferred):</strong> Multiple resolvers with
                staking and appeal bonds. Escalating review for disagreements.
              </li>
              <li>
                <strong>v3 (Future):</strong> Fully decentralized resolver
                selection with capital-weighted delegation.
              </li>
            </ul>
            <p>
              See{' '}
              <Link href="/docs/dispute-resolution">
                Dispute Resolution documentation
              </Link>{' '}
              for deep dives on mechanics, economics, and resolver incentives.
            </p>
          </div>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
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
          <p className="learn-more">
            <Link href="/docs/lifecycle">See escrow lifecycle in docs →</Link>
          </p>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
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
          <p className="learn-more">
            <Link href="/docs/architecture">Learn more in the docs →</Link>
          </p>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Module independence</h3>
          <p>
            Each escrow uses three independent pluggable modules that work
            together:
          </p>
          <ul>
            <li>
              <strong>Release Strategy:</strong> Determines when
              sender/recipient can release funds (immediate, time-based,
              conditional)
            </li>
            <li>
              <strong>Resolution Module:</strong> Handles dispute escalation and
              determines outcomes if parties disagree
            </li>
            <li>
              <strong>Yield Module:</strong> Manages optional yield generation
              through external protocols (e.g., Aave V3)
            </li>
          </ul>
          <p>
            These modules are selected at escrow creation and cannot be changed.
            Each module is immutable for that escrow's lifetime, ensuring
            agreements remain predictable even as protocol governance evolves.
          </p>
          <p>
            Future governance can add new module implementations (e.g., Morpho
            for yield generation, or new resolution protocols), but existing
            escrows continue using the modules selected at creation. This
            forward-only evolution protects agreement stability.
          </p>
          <p className="learn-more">
            <Link href="/modules">Learn more about modules →</Link>
          </p>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
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
            See <Link href="/protocol-limits">Protocol Limits</Link> for
            detailed bounds on all protocol parameters.
          </p>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Fees</h3>
          <p>
            Escrow creation fees are capped at 2%. The protocol may take a share
            of generated yield and appeal bonds. All fees are bounded and
            disclosed upfront.
          </p>
          <p>
            See <Link href="/fees">Fees</Link> for the complete breakdown.
          </p>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
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
              <strong>Yield on escrowed transfers</strong>: Funds held in escrow
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

        <section className="content-block fabric-texture fabric-texture-warm">
          <h3>Who can do what?</h3>
          <p>Each role in the protocol has specific, bounded powers:</p>
          <ul>
            <li>
              <strong>Sender</strong>: Creates escrow, funds it, can release
              anytime, can dispute
            </li>
            <li>
              <strong>Recipient</strong>: Can release funds (if allowed), can
              dispute, cannot cancel
            </li>
            <li>
              <strong>Resolver</strong>: Decides disputes within their module,
              gets bonded incentives
            </li>
            <li>
              <strong>Guardian</strong>: Can pause (7-day max), disable
              integrations, lower caps
            </li>
            <li>
              <strong>Governance</strong>: Can upgrade modules, change
              parameters, appoint guardians
            </li>
          </ul>
          <p>No role can seize funds or modify rules of existing escrows.</p>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Summary</h3>
          <p>
            Sew Protocol adds structure to token transfers without introducing
            custody.
          </p>
          <p>It allows a transfer to be:</p>
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
        .glossary-note {
          max-width: 800px;
          margin: 1rem auto 0;
          padding: 0 2rem;
          color: var(--accents-3);
          font-size: 0.85rem;
          line-height: 1.6;
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
          background: #1b2a2e;
          border-radius: var(--radius);
          border: 1px solid #2a3a3e;
        }
        .lifecycle-step h4 {
          margin-top: 0;
        }
        .learn-more {
          margin-top: 1rem;
        }
        .learn-more a {
          color: #7adddc;
          font-weight: 500;
        }
        .learn-more a:hover {
          text-decoration: underline;
        }
        .disclaimer-block {
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.4);
          border-radius: 8px;
          padding: 1rem 1.5rem;
          margin: 1.5rem 0;
          font-size: 0.9rem;
        }
        .disclaimer-block p {
          margin: 0;
          color: #ffd166;
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
