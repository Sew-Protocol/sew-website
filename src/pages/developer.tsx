import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Developer() {
  return (
    <>
      <Header titlePre="Build on Sew" />
      <div className={sharedStyles.layout}>
        <section className="header-section">
          <h1>Build on Sew Protocol</h1>
          <h2 className="tagline">Developer Guide</h2>
          <p className="intro">
            Sew Protocol introduces protected transfers as a composable
            primitive for Ethereum applications. Developers can integrate
            escrow-backed payments directly into wallets, marketplaces, and
            coordination tools without introducing custody.
          </p>
        </section>

        <section className="content-block">
          <h3>What Sew gives you</h3>
          <p>
            At its core, Sew provides a new settlement pattern: a token transfer
            that is held under rules until it is released, cancelled, or
            resolved.
          </p>
          <p>
            Instead of building escrow logic from scratch, you can rely on a
            shared protocol layer that handles:
          </p>
          <ul>
            <li>Escrow custody under defined conditions</li>
            <li>Deterministic release flows</li>
            <li>Dispute resolution pathways</li>
            <li>Optional yield generation</li>
            <li>Forward-compatible module evolution</li>
          </ul>
          <p>
            This allows applications to focus on UX and coordination while Sew
            handles settlement enforcement.
          </p>
          <p className="key-concept">
            Each escrow captures its configuration at creation and cannot be
            changed. Governance changes only affect future escrows, never
            existing ones.
          </p>
        </section>

        <section className="content-block">
          <h3>Mental model for integration</h3>
          <p>
            Think of Sew as a coordination layer between sender and recipient.
          </p>
          <p>A typical flow:</p>
          <ul>
            <li>Your app initiates a protected transfer</li>
            <li>Funds move into an escrow contract</li>
            <li>
              Your interface guides participants through the release or dispute
              process
            </li>
            <li>The protocol enforces the final outcome</li>
          </ul>
          <p>Your application never holds custody.</p>
        </section>

        <section className="content-block">
          <h3>Where Sew fits in your stack</h3>
          <p>
            Sew sits between your frontend/application logic and token transfers
            on Ethereum.
          </p>
          <p>
            It becomes the settlement layer for any situation where payment and
            delivery are separated.
          </p>
          <p>
            <strong>Typical integration points:</strong>
          </p>
          <ul>
            <li>Wallet send flows</li>
            <li>Marketplace checkout flows</li>
            <li>Service payment agreements</li>
            <li>Automated coordination systems</li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Core integration surfaces</h3>
          <p>
            From a contract perspective, Sew exposes a small number of core
            concepts:
          </p>

          <div className="integration-surface">
            <h4>Escrow creation</h4>
            <p>Your application triggers escrow creation by defining:</p>
            <ul>
              <li>Token and amount</li>
              <li>Sender and recipient</li>
              <li>
                Release authorization (who can release: sender only, designated
                address, or timed auto-release)
              </li>
              <li>Resolution module (optional)</li>
              <li>Yield module (optional)</li>
            </ul>
            <p>
              This creates a protected transfer with fixed rules locked to this
              escrow.
            </p>
          </div>

          <div className="integration-surface">
            <h4>Release interactions</h4>
            <p>Your interface can allow participants to:</p>
            <ul>
              <li>Release funds</li>
              <li>Request cancellation</li>
              <li>Escalate disputes</li>
            </ul>
            <p>The protocol enforces the state transitions.</p>
          </div>

          <div className="integration-surface">
            <h4>Resolution integration</h4>
            <p>If your use case involves disputes:</p>
            <ul>
              <li>You can integrate with existing resolution modules</li>
              <li>Or introduce new resolution models as extensions</li>
            </ul>
            <p>The protocol ensures outcomes are enforced deterministically.</p>
          </div>

          <div className="integration-surface">
            <h4>Yield integration (optional)</h4>
            <p>If enabled:</p>
            <ul>
              <li>
                Escrowed funds can generate yield through external integrations
              </li>
              <li>Ownership remains with the escrow</li>
              <li>Positions can be unwound if needed</li>
            </ul>
            <p>Yield is a feature layer, not a requirement.</p>
          </div>
        </section>

        <section className="content-block">
          <h3>Interface-agnostic design</h3>
          <p>Sew does not prescribe UX. You can build:</p>
          <ul>
            <li>Wallet-native protected send flows</li>
            <li>Marketplace settlement systems</li>
            <li>Specialized coordination tools</li>
            <li>Vertical-specific payment experiences</li>
          </ul>
          <p>Multiple interfaces can coexist over the same protocol.</p>
        </section>

        <section className="content-block">
          <h3>Module architecture</h3>
          <p>
            Sew is designed to evolve through modules rather than core contract
            rewrites.
          </p>
          <p>Modules define behavior for:</p>
          <ul>
            <li>Release semantics</li>
            <li>Dispute resolution</li>
            <li>Optional integrations (such as yield)</li>
          </ul>
          <p>
            When an escrow is created, it selects its modules. Those choices
            remain fixed for the life of that escrow.
          </p>
          <p>New modules affect only future escrows.</p>
        </section>

        <section className="content-block">
          <h3>Safety and invariants</h3>
          <p>When building on Sew, you can rely on a few key properties:</p>
          <ul>
            <li>Funds are never held by your application</li>
            <li>Settlement follows predefined rules</li>
            <li>Governance cannot rewrite active agreements</li>
            <li>Privileged roles cannot redirect user funds</li>
          </ul>
          <p>
            Your integration should preserve these guarantees at the UX level.
          </p>
        </section>

        <section className="content-block">
          <h3>What to design for</h3>
          <p>Sew works best when:</p>
          <ul>
            <li>Payment and delivery are separated in time</li>
            <li>Coordination is needed before settlement</li>
            <li>Users want structured release paths</li>
          </ul>
          <p>
            <strong>Good fits include:</strong>
          </p>
          <ul>
            <li>P2P marketplaces</li>
            <li>Services and freelance payments</li>
            <li>Ticketing systems</li>
            <li>Event coordination</li>
            <li>Local commerce platforms</li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Versioning and forward compatibility</h3>
          <p>
            The protocol is designed to evolve without breaking existing
            integrations.
          </p>
          <p>Key properties:</p>
          <ul>
            <li>New modules can be introduced over time</li>
            <li>
              Existing escrows continue using their original configuration
            </li>
            <li>Interface-level upgrades can be rolled out independently</li>
          </ul>
          <p>This supports long-lived integrations.</p>
        </section>

        <section className="content-block">
          <h3>Governance awareness</h3>
          <p>As a builder, you should understand:</p>
          <ul>
            <li>Exposure caps may affect new deposits into optional modules</li>
            <li>Integrations can be disabled for safety reasons</li>
            <li>Existing escrows remain valid under their original rules</li>
          </ul>
          <p>This helps you design resilient flows.</p>
        </section>

        <section className="content-block">
          <h3>Reference implementation</h3>
          <p>Everyday Wallet is one example of an interface built on Sew.</p>
          <p>It demonstrates:</p>
          <ul>
            <li>Protected send flows</li>
            <li>Release UX patterns</li>
            <li>Real-world usage scenarios</li>
          </ul>
          <p>It is not required for integration.</p>
        </section>

        <section className="content-block">
          <h3>Getting started</h3>
          <p>To begin integrating:</p>
          <ul>
            <li>Review the core contracts and interfaces</li>
            <li>Understand the escrow lifecycle</li>
            <li>Choose default modules for your use case</li>
            <li>Build release and dispute flows into your UI</li>
          </ul>
          <p>
            Detailed technical documentation is available in the protocol docs.
          </p>
        </section>

        <section className="content-block">
          <h3>Integration philosophy</h3>
          <p>Sew is designed to be:</p>
          <ul>
            <li>
              <strong>Minimal at the core</strong> — only essential settlement
              logic
            </li>
            <li>
              <strong>Flexible at the edges</strong> — extensible through
              modules
            </li>
            <li>
              <strong>Safe by default</strong> — invariants enforced by contract
            </li>
          </ul>
          <p>You can adopt only the parts you need.</p>
        </section>

        <section className="content-block">
          <h3>Summary</h3>
          <p>
            For developers, Sew provides a reusable primitive: a payment that
            can be held, coordinated, and settled under rules.
          </p>
          <p>
            It removes the need to build escrow logic, custody systems, and
            settlement enforcement from scratch.
          </p>
          <p>
            This allows applications to focus on coordination, not enforcement.
          </p>
          <p>
            See{' '}
            <Link href="/fees">
              <a>Fees</a>
            </Link>{' '}
            and{' '}
            <Link href="/protocol-limits">
              <a>Protocol Limits</a>
            </Link>{' '}
            for complete parameter details.
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
        .integration-surface {
          margin-top: 2rem;
          padding: 1.5rem;
          background: #fafafa;
          border-radius: var(--radius);
          border: 1px solid #eaeaea;
        }
        .integration-surface h4 {
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
