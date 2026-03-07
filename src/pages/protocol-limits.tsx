import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function ProtocolLimits() {
  return (
    <>
      <Header titlePre="Protocol Limits" />
      <div className={`${sharedStyles.layout} hero-texture`}>
        <section className="header-section">
          <h1>Protocol Limits</h1>
          <h2 className="tagline">
            Hard bounds enforced by contract, not policy
          </h2>
          <p className="intro">
            These are the maximum bounds enforced by the protocol. They exist to
            limit risk and ensure predictability.
          </p>
        </section>

        <section className="content-block">
          <h3>Fee limits</h3>
          <table className="limits-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Maximum</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Escrow creation fee</td>
                <td>2%</td>
                <td>Prevent excessive fees on transactions</td>
              </tr>
              <tr>
                <td>Yield protocol fee</td>
                <td>30%</td>
                <td>Limit protocol share of generated yield</td>
              </tr>
              <tr>
                <td>Appeal bond protocol fee</td>
                <td>30%</td>
                <td>Limit fees on dispute appeals</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="content-block">
          <h3>Time limits</h3>
          <table className="limits-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Maximum</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Guardian pause duration</td>
                <td>7 days</td>
                <td>Prevent indefinite pauses</td>
              </tr>
              <tr>
                <td>Dispute duration</td>
                <td>90 days</td>
                <td>Ensure disputes are resolved within bounded time</td>
              </tr>
              <tr>
                <td>Appeal window</td>
                <td>2 days</td>
                <td>Allow time to appeal resolutions</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="content-block">
          <h3>Guardian constraints</h3>
          <table className="limits-table">
            <thead>
              <tr>
                <th>Constraint</th>
                <th>Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maximum pause duration</td>
                <td>7 days</td>
              </tr>
              <tr>
                <td>Pause cycles per 90-day window</td>
                <td>3 pauses</td>
              </tr>
              <tr>
                <td>Can re-pause while paused</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Can unpause</td>
                <td>No (requires governance)</td>
              </tr>
              <tr>
                <td>Can extract funds</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Can modify existing escrows</td>
                <td>No</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="content-block">
          <h3>Governance constraints</h3>
          <ul>
            <li>Cannot seize funds from escrows</li>
            <li>Cannot redirect assets</li>
            <li>Cannot force settlement outcomes</li>
            <li>Cannot change rules of existing escrows</li>
            <li>All changes subject to timelock delays</li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Per-escrow immutability</h3>
          <p>Once an escrow is created, the following are permanently fixed:</p>
          <ul>
            <li>Release strategy</li>
            <li>Resolution module</li>
            <li>Yield generation module</li>
            <li>Fee percentage</li>
            <li>Timeout settings</li>
          </ul>
          <p>Governance changes only affect future escrows.</p>
        </section>

        <section className="content-block">
          <h3>Related Pages</h3>
          <ul>
            <li>
              <Link href="/fees">Fees</Link>: Complete breakdown of all protocol
              fees
            </li>
            <li>
              <Link href="/governance">Governance</Link>: How protocol
              constraints are enforced
            </li>
            <li>
              <Link href="/how-it-works">How It Works</Link>: Understand the
              escrow lifecycle
            </li>
            <li>
              <Link href="/technical">Technical Resources</Link>: Smart
              contracts and documentation
            </li>
          </ul>
        </section>

        <section className="page-meta">
          <p>Last updated: February 2026</p>
          <p>
            <Link href="/docs/protocol-limits">View full documentation →</Link>
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
        .limits-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1.5rem;
        }
        .limits-table th,
        .limits-table td {
          text-align: left;
          padding: 1rem;
          border-bottom: 1px solid #2a3a3e;
        }
        .limits-table th {
          font-weight: 600;
          background: #1b2a2e;
        }
        @media (max-width: 600px) {
          .content-block {
            padding: 0 1rem;
          }
          .limits-table {
            font-size: 0.9rem;
          }
          .limits-table th,
          .limits-table td {
            padding: 0.75rem 0.5rem;
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
          color: #7adddc;
        }
      `}</style>
    </>
  )
}
