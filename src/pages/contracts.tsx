import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Contracts() {
  return (
    <>
      <Header titlePre="Contract Addresses" />
      <div className={`${sharedStyles.layout} hero-texture`}>
        <section className="header-section">
          <h1>Contract Addresses</h1>
          <h2 className="tagline">Base Sepolia Testnet</h2>
          <p className="intro">
            These contracts are deployed on Base Sepolia (Chain ID: 84532) for
            testing. Mainnet addresses will be published after deployment.
          </p>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Core Escrow</h3>
          <table className="address-table">
            <thead>
              <tr>
                <th>Contract</th>
                <th>Description</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>EscrowVault</td>
                <td>Core escrow contract (multi-token)</td>
                <td>
                  <code>0xBcDefBdEEA5C00f128bE83534646427b7248c5F9</code>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Governance Infrastructure</h3>
          <table className="address-table">
            <thead>
              <tr>
                <th>Contract</th>
                <th>Description</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SewToken</td>
                <td>Governance token for voting</td>
                <td>
                  <code>0x7428c13e158ab6eB3E9e7780f05d58181172Ab5A</code>
                </td>
              </tr>
              <tr>
                <td>TimelockController</td>
                <td>Governance timelock (executes queued proposals)</td>
                <td>
                  <code>0xF0f2134CB24296781ABCa41A536c7C17600a7E47</code>
                </td>
              </tr>
              <tr>
                <td>GovGovernor</td>
                <td>On-chain Governor (absolute quorum)</td>
                <td>
                  <code>0xaFf6b4b8cF3bBDa62d4A40839c6c8244aacAC166</code>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Operations Contracts</h3>
          <table className="address-table">
            <thead>
              <tr>
                <th>Contract</th>
                <th>Description</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CreateOps</td>
                <td>Escrow creation orchestration</td>
                <td>
                  <code>0x7816EB2022B7AFB3A53a41eaa5ED5a2c3924De3b</code>
                </td>
              </tr>
              <tr>
                <td>SettlementOps</td>
                <td>Release/cancel/settlement orchestration</td>
                <td>
                  <code>0x1d0BE2d3b91A26537b5A8d75Ae721dE5Ea1a4054</code>
                </td>
              </tr>
              <tr>
                <td>DisputeOps</td>
                <td>Dispute flow orchestration</td>
                <td>
                  <code>0x5456edb1f266D6F3FaeAfFa4be33a7891eC9b3D2</code>
                </td>
              </tr>
              <tr>
                <td>YieldOps</td>
                <td>Yield deposit/withdraw orchestration</td>
                <td>
                  <code>0xFf1AaC122A1Ab02aA76E43Cf8641A4a33277C653</code>
                </td>
              </tr>
              <tr>
                <td>BondCollector</td>
                <td>Bond/fee collector helper</td>
                <td>
                  <code>0x0f0526297983260fa92e71149322f13d74B4Cdca</code>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Admin & Modules</h3>
          <table className="address-table">
            <thead>
              <tr>
                <th>Contract</th>
                <th>Description</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>EscrowAdminContract</td>
                <td>Slow-lane admin helper (minimal admin role)</td>
                <td>
                  <code>0x34fF47Ee2f95C35ec1e012DdD2D7394D7C644931</code>
                </td>
              </tr>
              <tr>
                <td>ModuleManagementContract</td>
                <td>Slow-lane module default management</td>
                <td>
                  <code>0xaa0Fa9C11af77E7f2BF14f86C17C8436370F0a86</code>
                </td>
              </tr>
              <tr>
                <td>DefaultReleaseStrategy</td>
                <td>Default release strategy module</td>
                <td>
                  <code>0x9738584Db6D171e6BE9d0F104aAbF4C1cAd0fb3b</code>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Testnet Safes</h3>
          <table className="address-table">
            <thead>
              <tr>
                <th>Contract</th>
                <th>Description</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Safe Multisig</td>
                <td>Safe multisig (testnet)</td>
                <td>
                  <code>0x5F13B5089a0B23c74AD9A22a2db59F5F48ab09bC</code>
                </td>
              </tr>
              <tr>
                <td>GuardianSafe</td>
                <td>Guardian multisig (testnet)</td>
                <td>
                  <code>0x5F13B5089a0B23c74AD9A22a2db59F5F48ab09bC</code>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="content-block">
          <h3>Explorer</h3>
          <p>
            View all contracts on{' '}
            <a
              href="https://sepolia.basescan.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Basescan
            </a>
            .
          </p>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Related Pages</h3>
          <ul>
            <li>
              <Link href="/developer">Developer Guide</Link>: Integration
              documentation
            </li>
            <li>
              <Link href="/technical">Technical Resources</Link>: Full technical
              documentation
            </li>
            <li>
              <Link href="/security">Security Model</Link>: Security properties
              and trust model
            </li>
          </ul>
        </section>

        <section className="page-meta">
          <p>Last updated: February 2026</p>
          <p>
            <Link href="/docs/reference">View full documentation →</Link>
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
          margin: 3rem auto;
          max-width: 900px;
          padding: 0 2rem;
        }
        .content-block h3 {
          margin-bottom: 1.5rem;
        }
        .address-table {
          width: 100%;
          border-collapse: collapse;
          margin: 1rem 0;
          font-size: 0.9rem;
        }
        .address-table th,
        .address-table td {
          text-align: left;
          padding: 1rem;
          border-bottom: 1px solid #eaeaea;
        }
        .address-table th {
          font-weight: 600;
          background: #fafafa;
          color: var(--accents-3);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .address-table code {
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: 0.85rem;
          background: #f5f5f5;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
        }
        .content-block a {
          color: var(--fg);
          text-decoration: underline;
        }
        @media (max-width: 600px) {
          .content-block {
            padding: 0 1rem;
          }
          .address-table {
            font-size: 0.8rem;
          }
          .address-table th,
          .address-table td {
            padding: 0.75rem 0.5rem;
          }
          .address-table code {
            font-size: 0.75rem;
            word-break: break-all;
          }
        }
        .page-meta {
          text-align: center;
          padding: 3rem 2rem;
          color: var(--accents-3);
          font-size: 0.85rem;
        }
        .page-meta p {
          margin: 0.5rem 0;
        }
        .page-meta a {
          color: #0070f3;
        }
      `}</style>
    </>
  )
}
