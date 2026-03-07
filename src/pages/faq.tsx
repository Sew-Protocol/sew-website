import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'
import ExtLink from '../components/ext-link'

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
        'No. Sew is infrastructure—a security layer for transfers. Wallets, marketplaces, and applications build on top of Sew to provide protected transfers. Everyday Wallet is one example interface built on the protocol.',
    },
    {
      question: 'Are my funds at risk if an integration (like Aave) fails?',
      answer:
        'Yield generation is optional and protected by exposure caps. If an external protocol fails, exposure is limited to the capped amount. Core escrow funds remain separate and can be settled regardless of yield module status.',
    },
    {
      question: 'Can escrow rules be changed after creation?',
      answer:
        'No. Each escrow captures its complete configuration at creation—release strategy, resolution module, yield settings, and timeouts. These are snapshotted and cannot be changed by anyone, including governance.',
    },
    {
      question: 'What fees does Sew charge?',
      answer:
        'Escrow creation: 1% at launch (2% max). Yield protocol fee: 30% of generated yield. Appeal bond fee: 0% at launch (30% max, governance-activated later). See the Fees page for details.',
    },
    {
      question: 'How long does dispute resolution take?',
      answer:
        'Dispute duration is configurable per escrow with a maximum of 90 days. Simple disputes under single-resolver mode may resolve in hours. Complex disputes using escalating resolution may take longer depending on the escalation path.',
    },
  ]

  const reviewerFaqs = [
    {
      question: 'Has the protocol been audited?',
      answer:
        'Not yet. The protocol is currently deployed on Base Sepolia testnet. A third-party security audit by a Tier 1 auditor is planned as part of the current development phase. The Ethereum Foundation grant, if awarded, funds this audit along with formal invariant testing, adversarial simulation, and testnet validation. See the Release Plan for the full timeline.',
      links: [
        { label: 'Release Plan →', href: '/release-plan' },
        { label: 'Contracts →', href: '/contracts' },
      ],
    },
    {
      question: 'What is the trust model at launch?',
      answer:
        'At v1 launch, the protocol uses a single trusted resolver model. The resolver is governance-appointed and cannot seize funds — they can only choose Release or Refund. Funds always remain under smart contract control. Decentralised resolution with multi-resolver escalation, appeal bonds, and staking is roadmapped for v2 (Q2–Q3 2026) and v3.',
      links: [
        { label: 'Dispute Architecture →', href: '/dispute-resolution' },
        { label: 'Release Plan →', href: '/release-plan' },
      ],
    },
    {
      question: 'What happens if the resolver is compromised?',
      answer:
        "A resolver's power is strictly bounded by the protocol. They can only choose one of two outcomes: Release or Refund. They cannot seize funds, redirect transfers to arbitrary addresses, or take any action outside that set. A compromised resolver decision affects only the specific escrow under dispute — no other escrows are at risk. In v2+, decisions can be appealed and overturned.",
      links: [
        { label: 'Security Model →', href: '/security' },
        { label: 'Dispute Economics →', href: '/security#dispute-economics' },
      ],
    },
    {
      question: 'Is there a formal threat model?',
      answer:
        "Yes. The Security page documents six threat categories: User Error, Counterparty Risk, Smart Contract Risk, Governance Capture, Resolver Misconduct, and Yield Integration Risk. Each entry includes the attack surface and the protocol's structural mitigation. The Architecture page documents six formal invariants with set-theoretic notation.",
      links: [
        { label: 'Threat Model →', href: '/security#threat-model' },
        { label: 'Architecture →', href: '/architecture' },
      ],
    },
    {
      question: 'What does the Ethereum Foundation grant fund?',
      answer:
        'The grant funds the validation and audit phase of the protocol. Specifically: formal invariant testing across all state transitions, adversarial simulation of dispute escalation paths, bond sizing and slashing rate economic validation, a third-party security audit, testnet deployment and integration test suite, and threat model red-teaming and formal review.',
      links: [
        { label: 'Audit Readiness →', href: '/#readiness' },
        { label: 'Release Plan →', href: '/release-plan' },
      ],
    },
  ]

  return (
    <>
      <Header titlePre="FAQ" />
      <div className={`${sharedStyles.layout} hero-texture`}>
        <section className="header-section">
          <h1>FAQ</h1>
          <h2 className="tagline">Common questions about Sew Protocol</h2>
          <p className="intro">
            Answers to frequently asked questions. Can&apos;t find what
            you&apos;re looking for?{' '}
            <a href="https://discord.gg/sew">Ask in Discord</a>.
          </p>
        </section>

        {/* ── For reviewers and auditors ────────────────────────────────────── */}
        <section className="reviewer-section">
          <div className="reviewer-header">
            <span className="reviewer-tag">For reviewers &amp; auditors</span>
            <h2 className="reviewer-heading">
              Grant and security review questions
            </h2>
            <p className="reviewer-intro">
              Questions specifically relevant to the Ethereum Foundation
              security team and independent auditors evaluating the protocol.
            </p>
          </div>
          <div className="reviewer-grid">
            {reviewerFaqs.map((faq) => (
              <div key={faq.question} className="reviewer-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
                {faq.links && (
                  <div className="reviewer-links">
                    {faq.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="reviewer-link"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── General FAQ ──────────────────────────────────────────────────── */}
        <section className="general-heading-section">
          <h2 className="general-heading">General questions</h2>
        </section>

        <section className="faq-grid">
          {faqs.map((faq) => (
            <div key={faq.question} className="faq-card fabric-panel">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </section>

        <section className="related-section fabric-texture fabric-texture-light">
          <h3>Learn more</h3>
          <div className="related-links">
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/security">Security Model</Link>
            <Link href="/security#threat-model">Threat Model</Link>
            <Link href="/architecture">Architecture</Link>
            <Link href="/governance">Governance</Link>
            <Link href="/fees">Fees</Link>
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
          font-size: 1rem;
          color: var(--accents-2);
        }
        .intro a {
          color: var(--fg);
          text-decoration: underline;
        }
        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1.5rem;
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .faq-card {
          padding: 1.5rem;
        }
        .faq-card h3 {
          font-size: 1rem;
          margin-bottom: 0.75rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #2a3a3e;
        }
        .faq-card p {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--accents-2);
          margin: 0;
        }
        /* ── Reviewer section ───────────────────────────────────────────────── */
        .reviewer-section {
          max-width: 800px;
          margin: 0 auto 3rem;
          padding: 0 2rem;
        }
        .reviewer-header {
          margin-bottom: 2rem;
        }
        .reviewer-tag {
          display: inline-block;
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #7adddc;
          background: rgba(122, 221, 220, 0.08);
          padding: 0.25rem 0.65rem;
          border-radius: 4px;
          margin-bottom: 0.75rem;
        }
        .reviewer-heading {
          font-size: 1.35rem;
          font-weight: 800;
          margin: 0 0 0.5rem;
          letter-spacing: -0.02em;
        }
        .reviewer-intro {
          font-size: 0.875rem;
          color: var(--accents-3);
          margin: 0;
          line-height: 1.6;
        }
        .reviewer-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .reviewer-card {
          padding: 1.5rem;
          border: 1.5px solid var(--accents-2);
          border-radius: var(--radius);
          background: var(--bg);
        }
        .reviewer-card h3 {
          font-size: 1rem;
          font-weight: 700;
          margin: 0 0 0.65rem;
        }
        .reviewer-card > p {
          font-size: 0.875rem;
          color: var(--accents-2);
          line-height: 1.7;
          margin: 0 0 1rem;
        }
        .reviewer-links {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
        }
        .reviewer-link {
          font-size: 0.8rem;
          font-weight: 600;
          color: #7adddc;
          text-decoration: none;
          padding: 0.25rem 0.65rem;
          background: rgba(122, 221, 220, 0.08);
          border-radius: 4px;
          transition: background 0.15s;
        }
        .reviewer-link:hover {
          background: #22343a;
        }
        /* ── General heading ────────────────────────────────────────────────── */
        .general-heading-section {
          max-width: 800px;
          margin: 0 auto 0.5rem;
          padding: 0 2rem;
        }
        .general-heading {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--accents-3);
          margin: 0;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #2a3a3e;
        }
        /* ── Related section ────────────────────────────────────────────────── */
        .related-section {
          max-width: 700px;
          margin: 4rem auto;
          padding: 3rem 2rem;
          text-align: center;
          border-radius: 12px;
        }
        .related-section h3 {
          margin-bottom: 1.5rem;
        }
        .related-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
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
          .faq-grid {
            padding: 1rem;
          }
          .related-links {
            flex-direction: column;
          }
          .related-links a {
            display: block;
          }
        }
      `}</style>
    </>
  )
}
