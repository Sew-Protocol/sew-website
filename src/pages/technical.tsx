import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Technical() {
  return (
    <>
      <Header titlePre="Technical Resources" />
      <div className={sharedStyles.layout}>
        <section className="header-section">
          <h1>Technical Resources</h1>
          <h2 className="tagline">
            References, contracts, and integration starting points
          </h2>
          <p className="intro">
            Reference materials for developers, auditors, and integrators.
          </p>
        </section>

        <section className="content-block">
          <h3>Smart Contracts</h3>
          <p>
            The Sew Protocol smart contracts are the source of truth. All
            protocol behavior is enforced onchain.
          </p>
          <ul>
            <li>
              <strong>Core contracts</strong>: Escrow vault, module registry,
              resolution modules
            </li>
            <li>
              <strong>Module contracts</strong>: Release strategies, yield
              generation, dispute resolution
            </li>
            <li>
              <strong>Governance contracts</strong>: Timelock, governor,
              guardian
            </li>
          </ul>
          <p>
            View deployed addresses on the{' '}
            <Link href="/contracts">Contracts</Link> page, or browse the{' '}
            <a
              href="https://github.com/sew-protocol"
              target="_blank"
              rel="noopener noreferrer"
            >
              source code on GitHub
            </a>
            .
          </p>
        </section>

        <section className="content-block">
          <h3>Documentation</h3>
          <ul>
            <li>
              <Link href="/architecture">
                <strong>Architecture</strong>
              </Link>
              : System design, contract relationships, and data flows
            </li>
            <li>
              <Link href="/security">
                <strong>Security model</strong>
              </Link>
              : Threat analysis, containment strategies, and invariant
              guarantees
            </li>
            <li>
              <Link href="/developer">
                <strong>Developer guide</strong>
              </Link>
              : Integration tutorials, module development, and deployment
              procedures
            </li>
            <li>
              <strong>Whitepaper</strong>: Protocol theory, economic model, and
              long-term vision — published before mainnet launch
            </li>
          </ul>
        </section>

        <section className="content-block">
          <h3>External Resources</h3>
          <ul>
            <li>
              <a
                href="https://github.com/sew-protocol"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>GitHub Repository</strong>
              </a>
              : Source code, issue tracking, and contribution guidelines
            </li>
            <li>
              <strong>Block Explorer</strong>: Contract verification links will
              be published at mainnet launch
            </li>
            <li>
              <strong>Audits</strong>: Independent security reviews will be
              linked here before mainnet launch
            </li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Integration Resources</h3>
          <ul>
            <li>
              <Link href="/contracts">
                <strong>Contract addresses</strong>
              </Link>
              : Mainnet and testnet deployments
            </li>
            <li>
              <a
                href="https://github.com/sew-protocol"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>ABI files</strong>
              </a>
              : Interface definitions available in the GitHub repository
            </li>
            <li>
              <strong>SDK references</strong>: Client libraries and utilities —
              published before mainnet launch
            </li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Community</h3>
          <ul>
            <li>
              <strong>Discord</strong>: Developer discussions and support
            </li>
            <li>
              <strong>Twitter</strong>: Protocol updates and announcements
            </li>
            <li>
              <strong>Forum</strong>: Governance proposals and community
              discussion
            </li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Related Pages</h3>
          <ul>
            <li>
              <Link href="/how-it-works">How It Works</Link>: Protocol overview
              and concepts
            </li>
            <li>
              <Link href="/fees">Fees</Link>: Detailed fee breakdown
            </li>
            <li>
              <Link href="/protocol-limits">Protocol Limits</Link>: Maximum
              bounds and constraints
            </li>
            <li>
              <Link href="/developer">Build on Sew</Link>: Developer guide
            </li>
            <li>
              <Link href="/governance">Governance</Link>: Protocol governance
              structure
            </li>
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
        @media (max-width: 600px) {
          .content-block {
            padding: 0 1rem;
          }
        }
      `}</style>
    </>
  )
}
