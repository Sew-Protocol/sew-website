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
        'A per-escrow field that overrides the protocol default resolver with a specific address. Allows arbitrary dispute frameworks to be used without modifying protocol code.',
    },
    {
      term: 'Deterministic Execution',
      definition:
        'Outcomes are determined strictly by predefined rules in smart contracts, not by discretionary decisions.',
    },
    {
      term: 'Dispute Architecture',
      definition:
        'The structural layer of dispute handling: state machines, resolver interfaces, escalation paths, and onchain enforcement.',
    },
    {
      term: 'Dispute Economics',
      definition:
        'The incentive layer of dispute handling: bond sizing, slashing rates, and resolver accountability.',
    },
    {
      term: 'Dispute Resolution',
      definition:
        'The process used when parties disagree on whether funds should be released or refunded. May involve a single resolver or multi-level escalation.',
    },
    {
      term: 'ERC-20',
      definition:
        'The standard for fungible tokens on Ethereum, used by Sew for all protected transfers.',
    },
    {
      term: 'Escrow',
      definition:
        'A smart contract that holds tokens under predefined conditions until release, refund, or resolution.',
    },
    {
      term: 'Escrow State',
      definition:
        'The current lifecycle stage of an escrow: PENDING (active), DISPUTED (under resolution), RELEASED (finalized to recipient), REFUNDED (returned to sender), or RESOLVED (determined by resolver).',
    },
    {
      term: 'Exposure Caps',
      definition:
        'Governance-enforced limits on how much value can be routed into specific external modules or protocols.',
    },
    {
      term: 'Forward-Only Upgrades',
      definition:
        'A design principle where protocol upgrades affect only new escrows. Existing agreements remain bound to their snapshotted modules.',
    },
    {
      term: 'Guardian',
      definition:
        'A limited emergency role that can pause high-risk operations temporarily. Cannot redirect funds or alter existing agreements.',
    },
    {
      term: 'Invariant',
      definition:
        'A formal property enforced at the contract level that holds true for every escrow, such as non-custodial or per-escrow isolation.',
    },
    {
      term: 'Module',
      definition:
        'A pluggable, immutable smart contract that defines a specific logic behavior (Release, Resolution, or Yield) within an escrow.',
    },
    {
      term: 'Non-Custodial',
      definition:
        'A model where funds are held by smart contracts rather than intermediaries. No operator can arbitrarily redirect assets.',
    },
    {
      term: 'Per-Escrow Snapshot',
      definition:
        'The permanent recording of active module addresses at the moment of escrow creation, ensuring immunity from retroactive changes.',
    },
    {
      term: 'Protected Transfer',
      definition:
        'An ERC-20 transfer routed through a deterministic escrow with predefined release and dispute resolution paths.',
    },
    {
      term: 'Release Strategy',
      definition:
        'A module defining when and how funds can be settled, such as sender-initiated, time-based, or conditional release.',
    },
    {
      term: 'Resolution Module',
      definition:
        'A module defining how disputes are opened, escalated, and decided by resolvers.',
    },
    {
      term: 'Resolver',
      definition:
        'A smart contract or entity that determines the outcome of a dispute. Resolvers are bounded to protocol-defined outcomes (Release or Refund).',
    },
    {
      term: 'Settlement',
      definition:
        'The final distribution of escrowed funds to either the recipient (Release) or the sender (Refund).',
    },
    {
      term: 'State Machine',
      definition:
        'The set of valid states and irreversible transitions an escrow moves through from creation to settlement.',
    },
    {
      term: 'Timelock',
      definition:
        'A governance delay mechanism that ensures all protocol changes are queued for review before execution.',
    },
    {
      term: 'workflowId',
      definition:
        'A unique identifier assigned to each protected transfer, used for querying state and interacting with modules.',
    },
    {
      term: 'Yield Module',
      definition:
        'An optional module that manages principal deployment into external protocols (like Aave V3) to generate yield while funds are locked.',
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
                <p>A value belongs to a set.</p>
                <code className="property-notation">
                  {'Outcome ∈ {RELEASE, REFUND}'}
                </code>
              </div>
            </div>
            <div className="notation-item">
              <code className="notation-symbol">∉</code>
              <div className="notation-text">
                <strong>not an element of</strong>
                <p>A value does not belong to a set.</p>
                <code className="property-notation">
                  {'Custody ∉ {operator, resolver}'}
                </code>
              </div>
            </div>
            <div className="notation-item">
              <code className="notation-symbol">⊄</code>
              <div className="notation-text">
                <strong>not a subset of</strong>
                <p>One set does not include another.</p>
                <code className="property-notation">
                  {'failure(escrow_n) ⊄ escrow_m'}
                </code>
              </div>
            </div>
            <div className="notation-item">
              <code className="notation-symbol">∀</code>
              <div className="notation-text">
                <strong>for all</strong>
                <p>A property holds universally.</p>
                <code className="property-notation">{'∀ m ≠ n'}</code>
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
