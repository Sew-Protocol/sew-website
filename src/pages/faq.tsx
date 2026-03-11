import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function FAQ() {
  const faqs = [
    {
      question: 'Can governance seize my funds?',
      answer:
        'No. Governance can only change parameters for future escrows. Once funds are in an escrow, the rules governing that escrow are fixed. Governance cannot modify, redirect, or seize funds from any active or completed escrow.',
    },
    {
      question: 'What happens if I send funds to the wrong address?',
      answer:
        'Ethereum transactions are irreversible. If you send funds to an incorrect address, those funds cannot be recovered by the protocol, governance, or any third party. Always verify addresses before confirming transactions.',
    },
    {
      question: 'What happens during a protocol pause?',
      answer:
        'When paused, new escrow creation and dispute escalation are blocked. However: existing escrows can still be released, cancelled, or resolved; funds in active escrows remain safe; and the pause automatically expires after 7 days maximum.',
    },
    {
      question: 'Is dispute resolution decentralized at launch?',
      answer:
        'No. At launch, the protocol uses a single trusted resolver model. Decentralized dispute resolution (multi-resolver escalation with appeal bonds and staking) will be activated through governance after testing and validation—estimated Q4 2026.',
    },
    {
      question: 'What chains are supported?',
      answer:
        'Sew Protocol is deployed on Base (Ethereum L2). Multi-L2 support is designed into the architecture and may be added in future updates.',
    },
    {
      question: 'Is Sew a wallet or marketplace?',
      answer:
        'No. Sew is infrastructure—a security layer for transfers. Wallets, marketplaces, and applications build on top of Sew to provide protected transfers.',
    },
    {
      question: 'Are my funds at risk if an integration (like Aave) fails?',
      answer:
        'Yield generation is optional and protected by exposure caps. If an external protocol fails, exposure is limited to the capped amount. Core escrow funds remain separate.',
    },
    {
      question: 'Can escrow rules be changed after creation?',
      answer:
        'No. Each escrow captures its complete configuration at creation—release strategy, resolution module, yield settings, and timeouts. These are snapshotted and cannot be changed.',
    },
  ]

  const glossaryTerms = [
    {
      term: 'Appeal Bond',
      definition:
        'A deposit required to escalate or appeal a dispute outcome. May be forfeited if the appeal fails.',
    },
    {
      term: 'Deterministic',
      definition:
        'Outcomes are determined strictly by predefined rules in smart contracts, not by discretionary decisions.',
    },
    {
      term: 'Escrow',
      definition:
        'A smart contract that holds tokens under predefined conditions until release, refund, or resolution.',
    },
    {
      term: 'Forward-Only',
      definition:
        'A design principle where upgrades affect only new escrows. Existing agreements remain bound to their snapshotted modules.',
    },
    {
      term: 'Guardian',
      definition:
        'A limited emergency role that can pause high-risk operations temporarily.',
    },
    {
      term: 'Invariant',
      definition:
        'A formal property enforced at the contract level that holds true for every escrow (e.g., non-custodial).',
    },
    {
      term: 'Module',
      definition:
        'A pluggable, immutable smart contract that defines a specific logic behavior (Release, Resolution, or Yield).',
    },
    {
      term: 'Non-Custodial',
      definition:
        'A model where funds are held by smart contracts rather than intermediaries.',
    },
    {
      term: 'Protected Transfer',
      definition:
        'An ERC-20 transfer routed through a deterministic escrow with predefined release and dispute paths.',
    },
    {
      term: 'Resolver',
      definition:
        'An entity that determines the outcome of a dispute, bounded to protocol-defined outcomes.',
    },
  ]

  return (
    <>
      <Header titlePre="FAQ & Glossary" />
      <div className={sharedStyles['hero-texture']}>
        <section className="header-section">
          <h1>FAQ & Glossary</h1>
          <p className="intro">
            Common questions and key terms used throughout the Sew Protocol
            ecosystem.
          </p>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <section className="content-section">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <div key={faq.question} className="faq-card fabric-panel">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Glossary ───────────────────────────────────────────────────── */}
        <section className="content-section">
          <h2 className="section-heading">Key Terms</h2>
          <div className="glossary-grid">
            {glossaryTerms.map((item) => (
              <div key={item.term} className="glossary-card fabric-panel">
                <h4>{item.term}</h4>
                <p>{item.definition}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="page-meta">
          <p>Last updated: February 2026</p>
          {process.env.NEXT_PUBLIC_SHOW_DOCUMENTATION === 'true' && (
            <p>
              <Link href="/docs">View full documentation →</Link>
            </p>
          )}
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
        .intro {
          font-size: 1.1rem;
          color: var(--accents-3);
        }
        .content-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }
        .section-heading {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          text-align: center;
          color: var(--accents-2);
        }
        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1.5rem;
          margin-bottom: 4rem;
        }
        .faq-card {
          padding: 1.5rem;
        }
        .faq-card h3 {
          font-size: 1rem;
          margin-bottom: 0.75rem;
          color: var(--primary);
        }
        .faq-card p {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--accents-3);
          margin: 0;
        }
        .glossary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
        }
        .glossary-card {
          padding: 1.25rem;
        }
        .glossary-card h4 {
          margin: 0 0 0.5rem 0;
          font-size: 0.95rem;
          color: var(--accents-2);
        }
        .glossary-card p {
          font-size: 0.85rem;
          color: var(--accents-3);
          line-height: 1.5;
          margin: 0;
        }
        .page-meta {
          text-align: center;
          padding: 4rem 2rem;
          color: var(--accents-3);
          font-size: 0.85rem;
        }
        @media (max-width: 700px) {
          .faq-grid,
          .glossary-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
