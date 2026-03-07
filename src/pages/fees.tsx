import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Fees() {
  return (
    <>
      <Header titlePre="Fees" />
      <div className={sharedStyles.layout}>
        <section className="header-section">
          <h1>Fees</h1>
          <h2 className="tagline">
            Bounded, transparent, and locked at escrow creation
          </h2>
          <p className="intro">
            Sew Protocol fees are bounded and transparent. This page explains
            what fees apply and when.
          </p>
        </section>

        <section className="content-block">
          <h3>Fee principles</h3>
          <ul>
            <li>Fees are capped at protocol level</li>
            <li>Fees are known at escrow creation</li>
            <li>Escrow fees are deducted upfront</li>
            <li>Yield and appeal fees are taken from generated amounts</li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Escrow creation fee</h3>
          <p>
            <strong>Default at launch: 1% | Maximum: 2%</strong>
          </p>
          <p>
            A small fee is charged when creating an escrow. This fee is deducted
            from the transaction amount at creation time. The fee percentage is
            set by governance but cannot exceed 2%.
          </p>
        </section>

        <section className="content-block">
          <h3>Yield protocol fee</h3>
          <p>
            <strong>Default at launch: 30% | Maximum: 30%</strong>
          </p>
          <p>
            When escrowed funds generate yield through integrations (e.g., Aave
            V3), the protocol takes a share of the generated yield. This fee is
            set by governance but is capped at 30%.
          </p>
          <p>The yield protocol fee does not affect the principal amount.</p>
          <p>
            Fee is snapshotted at escrow creation and cannot change during the
            escrow's lifetime.
          </p>
        </section>

        <section className="content-block">
          <h3>Appeal bond fee</h3>
          <p>
            <strong>Default at launch: 0% | Maximum: 30%</strong>
          </p>
          <p>
            When a dispute resolution is appealed, the appellant posts a bond. A
            portion of this bond may be taken as a protocol fee. This
            discourages frivolous appeals while funding protocol development.
          </p>
          <p>
            Currently inactive at launch. Can be enabled by governance in the
            future.
          </p>
        </section>

        <section className="content-block">
          <h3>Fee summary</h3>
          <table className="fee-table">
            <thead>
              <tr>
                <th>Fee Type</th>
                <th>Default at Launch</th>
                <th>Max</th>
                <th>Applied When</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Escrow creation</td>
                <td>1%</td>
                <td>2%</td>
                <td>At escrow creation</td>
              </tr>
              <tr>
                <td>Yield protocol share</td>
                <td>30%</td>
                <td>30%</td>
                <td>On generated yield</td>
              </tr>
              <tr>
                <td>Appeal bond</td>
                <td>0% (inactive)</td>
                <td>30%</td>
                <td>On appeal bonds</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="content-block fabric-panel">
          <h3>Example: 100 USDC escrow</h3>
          <p>With 1% escrow fee and 30% yield protocol fee (active):</p>
          <ul>
            <li>
              <strong>Sender pays:</strong> 100 USDC
            </li>
            <li>
              <strong>Escrow locked:</strong> 99 USDC (1 USDC fee to protocol)
            </li>
            <li>
              <strong>If yield earned:</strong> Protocol takes 30% of yield; 70%
              to configured recipient
            </li>
            <li>
              <strong>On release:</strong> Recipient receives 99 USDC + their
              share of yield
            </li>
          </ul>
          <p>
            Fees are deducted from the amount specified—no surprises at
            settlement.
          </p>
        </section>

        <section className="content-block">
          <h3>Fee recipient</h3>
          <p>
            All fees go to a designated fee address controlled by governance.
            This address funds protocol development, security audits, and
            ecosystem growth.
          </p>
        </section>

        <section className="content-block">
          <h3>Related Pages</h3>
          <ul>
            <li>
              <Link href="/protocol-limits">Protocol Limits</Link>: Detailed
              bounds on all protocol parameters
            </li>
            <li>
              <Link href="/governance">Governance</Link>: How protocol
              parameters are set and updated
            </li>
            <li>
              <Link href="/how-it-works">How It Works</Link>: Understand escrow
              lifecycle and fees in context
            </li>
          </ul>
        </section>

        <section className="page-meta">
          <p>Last updated: February 2026</p>
          <p>
            <Link href="/docs/fees">View full documentation →</Link>
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
        .fee-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1.5rem;
        }
        .fee-table th,
        .fee-table td {
          text-align: left;
          padding: 1rem;
          border-bottom: 1px solid #2a3a3e;
        }
        .fee-table th {
          font-weight: 600;
          background: #1b2a2e;
        }
        @media (max-width: 600px) {
          .content-block {
            padding: 0 1rem;
          }
          .fee-table {
            font-size: 0.9rem;
          }
          .fee-table th,
          .fee-table td {
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
