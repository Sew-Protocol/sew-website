import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Comparisons() {
  const patterns = [
    {
      title: 'Direct Transfer',
      icon: '→',
      description: 'Standard ERC20 transfer from one address to another',
      characteristics: [
        'Immediate and irreversible',
        'No protection against fraud or errors',
        'No dispute resolution',
        'No conditions or holds',
      ],
      tradeoffs: 'Fastest and simplest, but no safety net',
    },
    {
      title: 'Custodial Escrow',
      icon: '🔐',
      description:
        'Funds held by a trusted third party (marketplace, payment processor)',
      characteristics: [
        'Centralized party controls funds',
        'Requires trust in custodian',
        'User surveillance possible',
        'Funds can be frozen or seized',
        'Withdrawal delays and fees',
      ],
      tradeoffs: 'Protection exists, but at the cost of custody and trust',
    },
    {
      title: 'App-Specific Escrow',
      icon: '🏗',
      description: 'Custom escrow logic built into a single application',
      characteristics: [
        'Non-standard across apps',
        'Vendor lock-in risk',
        'Upgrades break existing agreements',
        'Limited composability',
        'Security burden on each app',
      ],
      tradeoffs: 'Customized, but fragmented and non-portable',
    },
    {
      title: 'Sew Protocol',
      icon: '🧵',
      description: 'Composable, non-custodial escrow infrastructure',
      characteristics: [
        'Non-custodial: funds in smart contracts',
        'Per-escrow snapshot: rules locked at creation',
        'Forward-only upgrades: existing escrows unchanged',
        'Modular: pluggable resolution and yield',
        'Standard interface across all apps',
      ],
      tradeoffs: 'More structure than direct transfer, but no trust required',
    },
  ]

  const comparisonPoints = [
    {
      dimension: 'Custody',
      patterns: [
        { name: 'Direct Transfer', value: 'None', status: 'neutral' },
        { name: 'Custodial Escrow', value: 'Third party', status: 'warning' },
        {
          name: 'App-Specific Escrow',
          value: 'App operator',
          status: 'warning',
        },
        { name: 'Sew Protocol', value: 'Smart contract', status: 'positive' },
      ],
    },
    {
      dimension: 'Dispute Resolution',
      patterns: [
        { name: 'Direct Transfer', value: 'None', status: 'warning' },
        {
          name: 'Custodial Escrow',
          value: 'Custodian decides',
          status: 'neutral',
        },
        {
          name: 'App-Specific Escrow',
          value: 'App-specific',
          status: 'neutral',
        },
        {
          name: 'Sew Protocol',
          value: 'Modular (selectable)',
          status: 'positive',
        },
      ],
    },
    {
      dimension: 'Upgrades Affect',
      patterns: [
        { name: 'Direct Transfer', value: 'N/A', status: 'neutral' },
        { name: 'Custodial Escrow', value: 'All funds', status: 'warning' },
        {
          name: 'App-Specific Escrow',
          value: 'All escrows',
          status: 'warning',
        },
        { name: 'Sew Protocol', value: 'New escrows only', status: 'positive' },
      ],
    },
    {
      dimension: 'Composability',
      patterns: [
        { name: 'Direct Transfer', value: 'Native', status: 'positive' },
        { name: 'Custodial Escrow', value: 'None', status: 'warning' },
        { name: 'App-Specific Escrow', value: 'None', status: 'warning' },
        { name: 'Sew Protocol', value: 'Built-in', status: 'positive' },
      ],
    },
    {
      dimension: 'Protocol Risk',
      patterns: [
        { name: 'Direct Transfer', value: 'None', status: 'positive' },
        {
          name: 'Custodial Escrow',
          value: 'Custodian failure',
          status: 'warning',
        },
        {
          name: 'App-Specific Escrow',
          value: 'App security',
          status: 'warning',
        },
        {
          name: 'Sew Protocol',
          value: 'Isolated per escrow',
          status: 'positive',
        },
      ],
    },
  ]

  return (
    <>
      <Header titlePre="Comparisons" />
      <div className={`${sharedStyles.layout} hero-texture`}>
        <section className="header-section">
          <h1>Comparing Protection Patterns</h1>
          <h2 className="tagline">Different approaches to safe transactions</h2>
          <p className="intro">
            There are several ways to add protection to token transfers. Each
            approach has tradeoffs. This page compares the patterns.
          </p>
        </section>

        <section className="patterns-grid">
          {patterns.map((pattern) => (
            <div key={pattern.title} className="pattern-card fabric-panel">
              <div className="pattern-header">
                <span className="pattern-icon">{pattern.icon}</span>
                <h3>{pattern.title}</h3>
              </div>
              <p className="pattern-description">{pattern.description}</p>
              <ul className="pattern-characteristics">
                {pattern.characteristics.map((char) => (
                  <li key={char}>{char}</li>
                ))}
              </ul>
              <p className="pattern-tradeoffs">
                <strong>Tradeoff:</strong> {pattern.tradeoffs}
              </p>
            </div>
          ))}
        </section>

        <section className="comparison-section">
          <h2>Quick Comparison</h2>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th>Direct Transfer</th>
                  <th>Custodial Escrow</th>
                  <th>App-Specific Escrow</th>
                  <th>Sew Protocol</th>
                </tr>
              </thead>
              <tbody>
                {comparisonPoints.map((point) => (
                  <tr key={point.dimension}>
                    <td className="dimension-label">{point.dimension}</td>
                    {point.patterns.map((p) => (
                      <td key={p.name} className={`status-${p.status}`}>
                        {p.value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="differentiators fabric-texture fabric-texture-light">
          <h2>What Makes Sew Different</h2>
          <div className="diff-grid">
            <div className="diff-card">
              <h4>Per-Escrow Snapshot</h4>
              <p>
                Each escrow locks its complete configuration at creation. Rules
                cannot change during the escrow's lifetime—not even by
                governance.
              </p>
            </div>
            <div className="diff-card">
              <h4>Forward-Only Upgrades</h4>
              <p>
                Protocol improvements affect only new escrows. Existing
                agreements remain governed by the rules that existed when they
                were created.
              </p>
            </div>
            <div className="diff-card">
              <h4>Non-Custodial</h4>
              <p>
                Funds are held by smart contracts, not intermediaries. No party
                can arbitrarily redirect or seize funds.
              </p>
            </div>
            <div className="diff-card">
              <h4>Composable Infrastructure</h4>
              <p>
                Any wallet, marketplace, or application can build on Sew.
                Protection becomes a standard primitive, not a custom
                implementation.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h3>Ready to integrate?</h3>
          <p>Build protected transfers into your application</p>
          <div className="cta-buttons">
            <Link href="/developer" className="cta-button primary">Developer Guide</Link>
            <Link href="/use-cases" className="cta-button">See Use Cases</Link>
          </div>
        </section>

        <section className="page-meta">
          <p>Last updated: February 2026</p>
          <p>
            <Link href="/docs">View full documentation →</Link>
          </p>
        </section>
      </div>

      <style jsx>{`
        .header-section {
          text-align: center;
          padding: 4rem 2rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .header-section h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }
        .tagline {
          color: var(--accents-3);
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }
        .intro {
          font-size: 1.1rem;
          color: var(--accents-2);
        }
        .patterns-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          padding: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        .pattern-card {
          padding: 1.5rem;
        }
        .pattern-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .pattern-icon {
          font-size: 1.5rem;
        }
        .pattern-header h3 {
          font-size: 1.1rem;
          margin: 0;
        }
        .pattern-description {
          color: var(--accents-3);
          font-size: 0.9rem;
          margin-bottom: 1rem;
          line-height: 1.5;
        }
        .pattern-characteristics {
          list-style: none;
          padding: 0;
          margin: 0 0 1rem 0;
        }
        .pattern-characteristics li {
          font-size: 0.85rem;
          padding: 0.25rem 0;
          padding-left: 1rem;
          position: relative;
        }
        .pattern-characteristics li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--accents-3);
        }
        .pattern-tradeoffs {
          font-size: 0.85rem;
          color: var(--accents-2);
          padding-top: 1rem;
          border-top: 1px solid var(--accents-6);
          margin: 0;
        }
        .comparison-section {
          max-width: 1200px;
          margin: 4rem auto;
          padding: 0 2rem;
        }
        .comparison-section h2 {
          text-align: center;
          margin-bottom: 2rem;
        }
        .comparison-table-wrapper {
          overflow-x: auto;
        }
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }
        .comparison-table th,
        .comparison-table td {
          padding: 0.75rem;
          text-align: center;
          border-bottom: 1px solid var(--accents-6);
        }
        .comparison-table th {
          background: var(--accents-6);
          font-weight: 600;
        }
        .comparison-table th:first-child,
        .comparison-table td:first-child {
          text-align: left;
        }
        .dimension-label {
          font-weight: 500;
        }
        .status-positive {
          color: #059669;
        }
        .status-neutral {
          color: var(--accents-3);
        }
        .status-warning {
          color: #dc2626;
        }
        .differentiators {
          max-width: 1000px;
          margin: 4rem auto;
          padding: 3rem 2rem;
          border-radius: 12px;
        }
        .differentiators h2 {
          text-align: center;
          margin-bottom: 2rem;
        }
        .diff-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }
        .diff-card {
          padding: 1.5rem;
          background: var(--bg);
          border-radius: 8px;
        }
        .diff-card h4 {
          font-size: 1rem;
          margin: 0 0 0.5rem 0;
          color: var(--fg);
        }
        .diff-card p {
          font-size: 0.9rem;
          color: var(--accents-2);
          margin: 0;
          line-height: 1.5;
        }
        .cta-section {
          text-align: center;
          padding: 4rem 2rem;
        }
        .cta-section h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .cta-section p {
          color: var(--accents-3);
          margin-bottom: 1.5rem;
        }
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        .cta-button {
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s;
        }
        .cta-button.primary {
          background: var(--fg);
          color: var(--bg);
        }
        .cta-button.primary:hover {
          opacity: 0.9;
        }
        .cta-button:not(.primary) {
          background: transparent;
          color: var(--fg);
          border: 1px solid var(--accents-2);
        }
        .cta-button:not(.primary):hover {
          background: var(--accents-6);
        }
        .page-meta {
          text-align: center;
          padding: 3rem 2rem;
          color: var(--accents-3);
          font-size: 0.85rem;
          border-top: 1px solid var(--accents-6);
          margin-top: 2rem;
        }
        .page-meta p {
          margin: 0.5rem 0;
        }
        .page-meta a {
          color: #0070f3;
        }
        @media (max-width: 600px) {
          .patterns-grid {
            padding: 1rem;
          }
          .comparison-section {
            padding: 0 1rem;
          }
          .cta-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  )
}
