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
          <h2 className="tagline">Sew Protocol</h2>
          <p className="intro">
            Reference materials for developers, auditors, and integrators.
          </p>
        </section>

        <section className="content-block">
          <h3>Smart Contracts</h3>
          <p>
            The Sew Protocol smart contracts are the source of truth. All
            protocol behavior is enforced on-chain.
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
          <p>View the complete implementation on GitHub.</p>
        </section>

        <section className="content-block">
          <h3>Documentation</h3>
          <ul>
            <li>
              <strong>Architecture</strong>: System design, contract
              relationships, and data flows
            </li>
            <li>
              <strong>Security model</strong>: Threat analysis, containment
              strategies, and invariant guarantees
            </li>
            <li>
              <strong>Guides</strong>: Integration tutorials, module
              development, and deployment procedures
            </li>
            <li>
              <strong>Whitepaper</strong>: Protocol theory, economic model, and
              long-term vision
            </li>
          </ul>
        </section>

        <section className="content-block">
          <h3>External Resources</h3>
          <ul>
            <li>
              <strong>GitHub Repository</strong>: Source code, issue tracking,
              and contribution guidelines
            </li>
            <li>
              <strong>Block Explorer</strong>: Verify deployed contracts and
              track transactions
            </li>
            <li>
              <strong>Audits</strong>: Independent security reviews (when
              available)
            </li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Integration Resources</h3>
          <ul>
            <li>
              <strong>Contract addresses</strong>: Mainnet and testnet
              deployments
            </li>
            <li>
              <strong>ABI files</strong>: Interface definitions for contract
              interaction
            </li>
            <li>
              <strong>SDK references</strong>: Client libraries and utilities
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
