import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={`${sharedStyles.layout} hero-texture`}>
        <section className="hero">
          <h1>Sew Protocol</h1>
          <h2 className="tagline">
            Payment protection at the transaction layer
          </h2>
          <p className="description">
            <strong>Protected transfer:</strong> An ERC-20 transfer routed
            through escrow, with predefined release and dispute resolution
            paths.
          </p>
          <p className="description">
            By "transaction layer" we mean the moment of transfer and settlement
            logic—the default pattern used when value moves—not L1 consensus or
            sequencer infrastructure.
          </p>
          <p className="micro-line">
            Sew is infrastructure: contracts and modules. Interfaces (wallets,
            marketplaces) are built on top.
          </p>
          <div className="btns">
            <Link href="/start-here" className="button primary">
              Get Started
            </Link>
            <Link href="/developer" className="button">
              Build on Sew
            </Link>
          </div>
        </section>

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
            transaction layer itself—the default pattern used when value moves.
          </p>
        </section>

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

        <footer className="page-footer">
          <div className="footer-links">
            <Link href="/how-it-works">How it works</Link>
            <Link href="/architecture">Architecture</Link>
            <Link href="/security">Security model</Link>
            <Link href="/governance">Governance</Link>
            <Link href="/developer">Build on Sew</Link>
            <Link href="/docs">Docs</Link>
            <ExtLink href="https://everyday.wallet">Everyday Wallet</ExtLink>
          </div>
          <p className="disclaimer">
            Non-custodial protocol software. Interfaces may vary. Users remain
            responsible for their own keys and transactions.
          </p>
        </footer>
      </div>

      <style jsx>{`
        .hero {
          padding: 4rem 0;
          text-align: center;
        }
        .tagline {
          color: var(--accents-3);
          margin-bottom: 2rem;
        }
        .description {
          max-width: 600px;
          margin: 0 auto 2rem;
          font-size: 1.2rem;
        }
        .btns {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        .button {
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius);
          font-weight: 600;
          border: 1px solid var(--accents-2);
          transition: all 0.2s;
        }
        .button.primary {
          background: var(--fg);
          color: var(--bg);
          border-color: var(--fg);
        }
        .button:hover {
          opacity: 0.8;
        }
        .content-section {
          margin: 4rem 0;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
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
        .principles-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 2rem;
        }
        .principle h4 {
          margin-bottom: 0.5rem;
        }
        .page-footer {
          margin-top: 6rem;
          padding: 4rem 0;
          border-top: 1px solid var(--accents-2);
          text-align: center;
        }
        .footer-links {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        .disclaimer {
          font-size: 0.8rem;
          color: var(--accents-3);
          max-width: 500px;
          margin: 0 auto;
        }
        @media (max-width: 600px) {
          .principles-grid {
            grid-template-columns: 1fr;
          }
        }
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
      `}</style>
    </>
  )
}
