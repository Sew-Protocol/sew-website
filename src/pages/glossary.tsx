import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Glossary() {
  const terms = [
    {
      term: 'Protected Transfer',
      definition:
        'A token transfer held in escrow under predefined rules until release conditions are met. The transfer is protected because funds cannot be unilaterally seized or redirected.',
    },
    {
      term: 'Escrow',
      definition:
        'A smart contract that holds funds until predefined conditions are met. Once created, the escrow rules are fixed and cannot be changed.',
    },
    {
      term: 'Escrow State',
      definition:
        'The current status of an escrow: Pending (active, awaiting action), Disputed (under resolution), Released (funds sent to recipient), Refunded (cancelled, funds returned), or Resolved (resolver determined outcome).',
    },
    {
      term: 'Module',
      definition:
        'A pluggable contract that defines specific behavior for an escrow. Modules are selected at escrow creation and cannot be changed later.',
    },
    {
      term: 'Release Strategy',
      definition:
        'A module that controls who can release funds and under what conditions. Examples: sender-only release, time-based release, or condition-based release.',
    },
    {
      term: 'Resolution Module',
      definition:
        'A module that handles dispute resolution for an escrow. Determines how disputes are opened, escalated, and decided.',
    },
    {
      term: 'Yield Module',
      definition:
        'An optional module that generates yield on escrowed funds (e.g., via Aave integration). Can be enabled or disabled per escrow.',
    },
    {
      term: 'Guardian',
      definition:
        'An emergency role with limited powers: pause the protocol (max 7 days), disable integrations, or lower exposure caps. Cannot seize funds or modify escrows.',
    },
    {
      term: 'Timelock',
      definition:
        'A time-delayed execution mechanism for governance changes. Changes are queued and must wait before executing, allowing community review.',
    },
    {
      term: 'Forward-Only Upgrades',
      definition:
        'A design principle where protocol improvements affect only new escrows. Existing escrows continue operating under their original rules.',
    },
    {
      term: 'Per-Escrow Snapshot',
      definition:
        'The complete configuration of an escrow (modules, fees, timeouts) is recorded at creation and cannot be changed. This is a core security guarantee.',
    },
    {
      term: 'Exposure Caps',
      definition:
        'Limits on how much value can be exposed to external integrations (e.g., Aave). Caps contain failures and reduce systemic risk.',
    },
    {
      term: 'Appeal Bond',
      definition:
        'A deposit required to appeal a dispute resolution. If the appeal fails, the bond may be forfeited. Discourages frivolous appeals.',
    },
    {
      term: 'Dispute Resolution',
      definition:
        'The process of handling disagreements between parties. Can be single-resolver (trusted party) or escalating (multi-level with final arbitration).',
    },
    {
      term: 'Non-Custodial',
      definition:
        'Funds are held by smart contracts, not intermediaries. No party can arbitrarily redirect or seize funds—settlement follows predefined rules only.',
    },
    {
      term: 'Composable',
      definition:
        'The protocol can be integrated into other applications (wallets, marketplaces) and extended with custom modules. Protection becomes a standard primitive.',
    },
  ]

  return (
    <>
      <Header titlePre="Glossary" />
      <div className={`${sharedStyles.layout} hero-texture`}>
        <section className="header-section">
          <h1>Glossary</h1>
          <h2 className="tagline">Key terms and definitions</h2>
          <p className="intro">
            Terms used throughout the documentation. This glossary helps prevent
            confusion and ensures consistent understanding.
          </p>
        </section>

        <section className="glossary-grid">
          {terms.map((item) => (
            <div key={item.term} className="glossary-card fabric-panel">
              <h3>{item.term}</h3>
              <p>{item.definition}</p>
            </div>
          ))}
        </section>

        <section className="related-section fabric-texture fabric-texture-light">
          <h3>Related pages</h3>
          <div className="related-links">
            <Link href="/how-it-works">
              <a>How It Works</a>
            </Link>
            <Link href="/architecture">
              <a>Architecture</a>
            </Link>
            <Link href="/security">
              <a>Security Model</a>
            </Link>
            <Link href="/governance">
              <a>Governance</a>
            </Link>
          </div>
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
        .glossary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .glossary-card {
          padding: 1.5rem;
        }
        .glossary-card h3 {
          font-size: 1rem;
          margin: 0 0 0.75rem 0;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--accents-6);
        }
        .glossary-card p {
          font-size: 0.9rem;
          color: var(--accents-2);
          line-height: 1.6;
          margin: 0;
        }
        .related-section {
          max-width: 600px;
          margin: 4rem auto;
          padding: 3rem 2rem;
          border-radius: 12px;
          text-align: center;
        }
        .related-section h3 {
          margin-bottom: 1.5rem;
        }
        .related-links {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .related-links a {
          padding: 0.5rem 1rem;
          background: var(--bg);
          border: 1px solid var(--accents-2);
          border-radius: 6px;
          color: var(--fg);
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.2s;
        }
        .related-links a:hover {
          background: var(--accents-6);
        }
        @media (max-width: 600px) {
          .glossary-grid {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  )
}
