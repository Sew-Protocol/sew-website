import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Glossary() {
  const terms = [
    {
      term: 'Protected Transfer',
      definition:
        'An ERC-20 token transfer routed through escrow with predefined release and resolution rules. Funds are held under deterministic conditions until settlement.',
    },
    {
      term: 'Protected Payment',
      definition:
        'A user-friendly term for a protected transfer. Refers to sending value where funds are held in escrow until conditions are met.',
    },
    {
      term: 'Escrow',
      definition:
        'A smart contract that holds tokens under predefined conditions until release, refund, or resolution. Once created, its rules and configuration are fixed.',
    },
    {
      term: 'Escrow State',
      definition:
        'The current lifecycle stage of an escrow: Pending (active, awaiting action), Disputed (under resolution), Released (funds sent to recipient), Refunded (funds returned to sender), or Resolved (resolver determined outcome).',
    },
    {
      term: 'Settlement',
      definition:
        'The final outcome of an escrow where funds are either released to the recipient or returned to the sender.',
    },
    {
      term: 'Deterministic Execution',
      definition:
        'Outcomes are determined strictly by predefined rules in smart contracts, not by discretionary decisions.',
    },
    {
      term: 'Per-Escrow Snapshot',
      definition:
        'The full configuration of an escrow recorded at creation (modules, parameters, fees, timeouts). This configuration cannot be changed afterward.',
    },
    {
      term: 'Forward-Only Upgrades',
      definition:
        'A design principle where protocol upgrades affect only new escrows. Existing escrows continue operating under their original rules.',
    },
    {
      term: 'Module',
      definition:
        'A pluggable smart contract that defines a specific behavior within an escrow. Modules are selected at creation and remain fixed for that escrow.',
    },
    {
      term: 'Release Strategy',
      definition:
        'A module that defines when and how funds can be released. Examples include sender-initiated release, time-based release, or rule-based conditions.',
    },
    {
      term: 'Resolution Module',
      definition:
        'A module that defines how disputes are opened, escalated, and decided.',
    },
    {
      term: 'Yield Module',
      definition:
        'An optional module that can deploy escrowed funds into external protocols to generate yield while funds remain locked.',
    },
    {
      term: 'Composable',
      definition:
        'A system design where applications can integrate the protocol and extend it with new modules without modifying the core escrow logic.',
    },
    {
      term: 'Non-Custodial',
      definition:
        'Funds are held by smart contracts and controlled by predefined rules. No intermediary can arbitrarily redirect, seize, or access funds.',
    },
    {
      term: 'Guardian',
      definition:
        'A limited emergency role that can pause the protocol temporarily, disable integrations, or reduce exposure caps. Cannot withdraw funds or alter existing escrows.',
    },
    {
      term: 'Timelock',
      definition:
        'A delay mechanism for governance changes. Actions are queued and executed only after a defined waiting period, allowing review.',
    },
    {
      term: 'Exposure Caps',
      definition:
        'Limits on how much value can be routed into external integrations (such as yield protocols). Designed to contain risk and reduce systemic exposure.',
    },
    {
      term: 'Dispute Resolution',
      definition:
        'The process used when parties disagree on whether funds should be released or refunded. Resolution may involve a resolver or multi-level escalation.',
    },
    {
      term: 'Appeal Bond',
      definition:
        'A deposit required to escalate or appeal a dispute outcome. The bond may be forfeited if the appeal fails, discouraging low-quality challenges.',
    },
    {
      term: 'ERC-20',
      definition:
        'A standard for fungible tokens on Ethereum that enables consistent transfer and integration across applications.',
    },
    {
      term: 'Transfer (ERC-20 Transfer)',
      definition:
        'The movement of tokens from one address to another on Ethereum.',
    },
    {
      term: 'Peer-to-Peer Transfer',
      definition:
        'A direct transfer of tokens between users without a centralized intermediary.',
    },
    {
      term: 'Yield',
      definition:
        'Additional tokens earned by temporarily deploying assets into lending or liquidity protocols.',
    },
    {
      term: 'Liquidity Pool',
      definition:
        'A shared pool of assets used by external protocols (e.g., lending systems). Users receive proportional claims on deposited assets.',
    },
    {
      term: 'Smart Contract',
      definition:
        'Code deployed on Ethereum that automatically executes predefined logic when triggered by transactions.',
    },
    {
      term: 'Protocol',
      definition:
        'A shared on-chain system of smart contracts and rules that anyone can interact with. It is infrastructure, not a service provider.',
    },
    {
      term: 'Smart Contract Architecture',
      definition:
        'The structured system formed by multiple interacting contracts that define how escrows are created, executed, and resolved.',
    },
    {
      term: 'Transaction',
      definition:
        'A signed instruction submitted to Ethereum that changes blockchain state (e.g., creating an escrow or releasing funds).',
    },
    {
      term: 'Wallet',
      definition:
        'Software that allows users to hold keys, sign transactions, and interact with smart contracts.',
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
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/architecture">Architecture</Link>
            <Link href="/security">Security Model</Link>
            <Link href="/governance">Governance</Link>
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
        @media (max-width: 600px) {
          .glossary-grid {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  )
}
