import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default function Fees() {
  return (
    <>
      <Header titlePre="Fees" />
      <div className={sharedStyles.layout}>
        <section className="header-section">
          <h1>Fees</h1>
          <h2 className="tagline">Sew Protocol</h2>
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
            <strong>Maximum: 2%</strong>
          </p>
          <p>
            A small fee is charged when creating an escrow. This fee is deducted
            from the transaction amount at creation time. The exact fee
            percentage is set at protocol deployment and applies to all escrows.
          </p>
        </section>

        <section className="content-block">
          <h3>Yield protocol fee</h3>
          <p>
            <strong>Range: 0% - 30%</strong>
          </p>
          <p>
            When escrowed funds generate yield through integrations (e.g., Aave
            V3), the protocol may take a share of the generated yield. This fee
            is set by governance and applies to all future escrows. Existing
            escrows retain the fee percentage at the time of their creation.
          </p>
          <p>The yield protocol fee does not affect the principal amount.</p>
        </section>

        <section className="content-block">
          <h3>Appeal bond fee</h3>
          <p>
            <strong>Range: 0% - 30%</strong>
          </p>
          <p>
            When a dispute resolution is appealed, the appellant posts a bond. A
            portion of this bond may be taken as a protocol fee. This
            discourages frivolous appeals while funding protocol development.
          </p>
        </section>

        <section className="content-block">
          <h3>Fee summary</h3>
          <table className="fee-table">
            <thead>
              <tr>
                <th>Fee Type</th>
                <th>Max Rate</th>
                <th>Applied When</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Escrow creation</td>
                <td>2%</td>
                <td>At escrow creation</td>
              </tr>
              <tr>
                <td>Yield protocol share</td>
                <td>30%</td>
                <td>On generated yield</td>
              </tr>
              <tr>
                <td>Appeal bond</td>
                <td>30%</td>
                <td>On appeal bonds</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="content-block">
          <h3>Fee recipient</h3>
          <p>
            All fees go to a designated fee address controlled by governance.
            This address funds protocol development, security audits, and
            ecosystem growth.
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
          border-bottom: 1px solid #eaeaea;
        }
        .fee-table th {
          font-weight: 600;
          background: #fafafa;
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
      `}</style>
    </>
  )
}
