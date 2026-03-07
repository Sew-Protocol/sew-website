import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Glossary() {
  const terms = [
    {
      term: 'Appeal Bond',
      definition:
        'A deposit required to escalate or appeal a dispute outcome. The bond may be forfeited if the appeal fails, discouraging low-quality challenges.',
    },
    {
      term: 'Composable',
      definition:
        'A system design where applications can integrate the protocol and extend it with new modules without modifying the core escrow logic.',
    },
    {
      term: 'customResolver',
      definition:
        'A per-escrow field that overrides the protocol default resolver with a specific address. Allows arbitrary dispute frameworks to be used without modifying protocol code. Set at escrow creation and fixed for the lifetime of that escrow.',
    },
    {
      term: 'Deterministic Execution',
      definition:
        'Outcomes are determined strictly by predefined rules in smart contracts, not by discretionary decisions.',
    },
    {
      term: 'Dispute Architecture',
      definition:
        'The structural and mechanical layer of dispute handling: state machines, resolver interfaces, escalation paths, and how outcomes are enforced onchain. Distinguished from Dispute Economics, which covers the incentive layer.',
    },
    {
      term: 'Dispute Economics',
      definition:
        'The incentive and economic layer of dispute handling: bond sizing, slashing rates, appeal costs, and resolver accountability mechanisms. Distinguished from Dispute Architecture, which covers the mechanical layer.',
    },
    {
      term: 'Dispute Resolution',
      definition:
        'The process used when parties disagree on whether funds should be released or refunded. Resolution may involve a resolver or multi-level escalation.',
    },
    {
      term: 'ERC-20',
      definition:
        'A standard for fungible tokens on Ethereum that enables consistent transfer and integration across applications.',
    },
    {
      term: 'Escrow',
      definition:
        'A smart contract that holds tokens under predefined conditions until release, refund, or resolution. Once created, its rules and configuration are fixed.',
    },
    {
      term: 'Escrow State',
      definition:
        'The current lifecycle stage of an escrow. States: NONE (uninitialized), PENDING (active, awaiting action), DISPUTED (under resolution), RELEASED (funds sent to recipient), REFUNDED (funds returned to sender), RESOLVED (resolver determined outcome). RELEASED, REFUNDED, and RESOLVED are terminal — they cannot be reversed.',
    },
    {
      term: 'Exposure Caps',
      definition:
        'Limits on how much value can be routed into external integrations (such as yield protocols). Designed to contain risk and reduce systemic exposure.',
    },
    {
      term: 'Forward-Only Upgrades',
      definition:
        'A design principle where protocol upgrades affect only new escrows. Existing escrows continue operating under their original rules.',
    },
    {
      term: 'Guardian',
      definition:
        'A limited emergency role that can pause the protocol temporarily. Cannot withdraw funds or alter existing escrows. Pause is time-bounded: maximum 7 days per cycle, 3 cycles total.',
    },
    {
      term: 'Invariant',
      definition:
        'A property that holds for every escrow under every configuration and governance state. Invariants are encoded at the contract level, not enforced as policy. Examples: non-custodial, outcome-bounded, per-escrow isolation.',
    },
    {
      term: 'Liquidity Pool',
      definition:
        'A shared pool of assets used by external protocols (e.g., lending systems). Users receive proportional claims on deposited assets.',
    },
    {
      term: 'Module',
      definition:
        'A pluggable smart contract that defines a specific behaviour within an escrow. Modules are selected at creation and remain fixed for that escrow.',
    },
    {
      term: 'Non-Custodial',
      definition:
        'Funds are held by smart contracts and controlled by predefined rules. No intermediary can arbitrarily redirect, seize, or access funds.',
    },
    {
      term: 'Peer-to-Peer Transfer',
      definition:
        'A direct transfer of tokens between users without a centralized intermediary.',
    },
    {
      term: 'Per-Escrow Snapshot',
      definition:
        'The full configuration of an escrow recorded at creation (modules, parameters, fees, timeouts). This configuration cannot be changed afterward.',
    },
    {
      term: 'Protected transfer',
      definition:
        'A user-friendly term for a protected transfer. Refers to sending value where funds are held in escrow until conditions are met.',
    },
    {
      term: 'Protected Transfer',
      definition:
        'An ERC-20 token transfer routed through escrow with predefined release and resolution rules. Funds are held under deterministic conditions until settlement.',
    },
    {
      term: 'Protected transfer',
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
      term: 'Resolver',
      definition:
        'A smart contract or EOA that determines the outcome of a dispute. A resolver can only choose from two outcomes: Release (funds sent to recipient) or Refund (funds returned to sender). Resolvers cannot touch or redirect funds — they only vote on outcomes, which are then enforced by the contract.',
    },
    {
      term: 'Settlement',
      definition:
        'The final outcome of an escrow where funds are either released to the recipient or returned to the sender.',
    },

    {
      term: 'Smart Contract',
      definition:
        'Code deployed on Ethereum that automatically executes predefined logic when triggered by transactions.',
    },
    {
      term: 'Smart Contract Architecture',
      definition:
        'The structured system formed by multiple interacting contracts that define how escrows are created, executed, and resolved.',
    },
    {
      term: 'State Machine',
      definition:
        'The set of defined states and valid transitions an escrow can move through. Terminal states (RELEASED, REFUNDED, RESOLVED) are irreversible. No path exists outside the defined transitions.',
    },
    {
      term: 'Timelock',
      definition:
        'A delay mechanism for governance changes. Actions are queued and executed only after a defined waiting period, allowing review.',
    },
    {
      term: 'Transaction',
      definition:
        'A signed instruction submitted to Ethereum that changes blockchain state (e.g., creating an escrow or releasing funds).',
    },
    {
      term: 'Transfer (ERC-20 Transfer)',
      definition:
        'The movement of tokens from one address to another on Ethereum.',
    },
    {
      term: 'Wallet',
      definition:
        'Software that allows users to hold keys, sign transactions, and interact with smart contracts.',
    },
    {
      term: 'workflowId',
      definition:
        'A unique uint256 identifier assigned to each escrow at creation. Used to reference, query, and interact with a specific escrow across all protocol functions.',
    },
    {
      term: 'Yield',
      definition:
        'Additional tokens earned by temporarily deploying assets into lending or liquidity protocols.',
    },
    {
      term: 'Yield Module',
      definition:
        'An optional module that can deploy escrowed funds into external protocols to generate yield while funds remain locked.',
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

        {/* ── Formal notation ──────────────────────────────────────────────── */}
        <section className="notation-section">
          <h2 className="notation-heading">Formal notation</h2>
          <p className="notation-intro">
            Several pages use set-theory notation to express protocol invariants
            precisely. These symbols are defined here for reference.
          </p>
          <div className="notation-grid">
            <div className="notation-item">
              <code className="notation-symbol">∈</code>
              <div className="notation-text">
                <strong>element of</strong>
                <p>
                  A value belongs to a set.{' '}
                  <code>{'Outcome ∈ {RELEASE, REFUND}'}</code> means the outcome
                  must be one of those two values.
                </p>
              </div>
            </div>
            <div className="notation-item">
              <code className="notation-symbol">∉</code>
              <div className="notation-text">
                <strong>not an element of</strong>
                <p>
                  A value does not belong to a set.{' '}
                  <code>{'Custody ∉ {operator, resolver}'}</code> means custody
                  is never held by an operator or resolver.
                </p>
              </div>
            </div>
            <div className="notation-item">
              <code className="notation-symbol">⊄</code>
              <div className="notation-text">
                <strong>not a subset of</strong>
                <p>
                  One set does not include another.{' '}
                  <code>{'failure(escrow_n) ⊄ escrow_m'}</code> means a failure
                  in escrow n does not propagate into escrow m.
                </p>
              </div>
            </div>
            <div className="notation-item">
              <code className="notation-symbol">∀</code>
              <div className="notation-text">
                <strong>for all</strong>
                <p>
                  A property holds universally. <code>{'∀ m ≠ n'}</code> means
                  "for all m that are not equal to n" — i.e., every other
                  escrow.
                </p>
              </div>
            </div>
          </div>
          <p className="notation-ref">
            Invariants using this notation appear on the{' '}
            <Link href="/#guarantees">Homepage</Link>,{' '}
            <Link href="/architecture">Architecture</Link>, and{' '}
            <Link href="/researcher#invariants">For Researchers</Link> pages.
          </p>
        </section>

        {/* ── Terms grid ───────────────────────────────────────────────────── */}
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
            <Link href="/dispute-resolution">Dispute Architecture</Link>
            <Link href="/researcher">For Researchers</Link>
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
          border-bottom: 1px solid #2a3a3e;
        }
        .glossary-card p {
          font-size: 0.9rem;
          color: var(--accents-2);
          line-height: 1.6;
          margin: 0;
        }
        /* ── Formal notation section ────────────────────────────────────────── */
        .notation-section {
          max-width: 800px;
          margin: 0 auto 1rem;
          padding: 2rem 2rem 1.75rem;
          background: #1b2a2e;
          border: 1.5px solid var(--accents-2);
          border-radius: var(--radius);
        }
        .notation-heading {
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0 0 0.5rem;
          text-align: left;
        }
        .notation-intro {
          font-size: 0.875rem;
          color: var(--accents-3);
          margin: 0 0 1.5rem;
          line-height: 1.6;
        }
        .notation-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }
        .notation-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 0.85rem 1rem;
          background: var(--bg);
          border: 1px solid #2a3a3e;
          border-radius: var(--radius);
        }
        .notation-symbol {
          font-family: var(--font-mono);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--fg);
          background: #1b2a2e;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          flex-shrink: 0;
          line-height: 1;
        }
        .notation-text {
          flex: 1;
        }
        .notation-text strong {
          display: block;
          font-size: 0.82rem;
          margin-bottom: 0.2rem;
        }
        .notation-text p {
          margin: 0;
          font-size: 0.78rem;
          color: var(--accents-3);
          line-height: 1.55;
        }
        .notation-text code {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          background: #1b2a2e;
          padding: 0.1rem 0.3rem;
          border-radius: 3px;
          white-space: nowrap;
        }
        .notation-ref {
          font-size: 0.8rem;
          color: var(--accents-3);
          margin: 0;
        }
        .notation-ref a {
          color: #7adddc;
          font-weight: 500;
          text-decoration: none;
        }
        .notation-ref a:hover {
          text-decoration: underline;
        }
        @media (max-width: 700px) {
          .notation-grid {
            grid-template-columns: 1fr;
          }
          .notation-section {
            padding: 1.25rem 1rem;
          }
        }

        /* ── Related section ────────────────────────────────────────────────── */
        .related-section {
          max-width: 700px;
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
          color: #7adddc;
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
