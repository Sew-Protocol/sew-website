import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function UseCases() {
  const useCases = [
    {
      title: 'Peer-to-Peer Goods',
      icon: '📦',
      description: 'Buying or selling physical items directly',
      whyProtected:
        'Buyer protection against non-delivery; seller assurance of payment before shipping',
      pattern:
        'Buyer creates escrow → Seller ships → Buyer confirms → Auto/timed release',
    },
    {
      title: 'Event Tickets',
      icon: '🎫',
      description: 'Reselling tickets for concerts, sports, flights',
      whyProtected: 'Prevents fraud; ensures ticket transfer upon payment',
      pattern: 'Payment escrow → Ticket transfer → Confirmation → Release',
    },
    {
      title: 'Freelance Services',
      icon: '💼',
      description: 'Contracting developers, designers, writers',
      whyProtected:
        'Milestone-based protection; payment held until work delivered',
      pattern:
        'Milestone escrow created → Work submitted → Review → Release or dispute',
    },
    {
      title: 'Rental Deposits',
      icon: '🏠',
      description: 'Security deposits for rentals, equipment',
      whyProtected:
        'Funds held safely; released after inspection or damage assessment',
      pattern:
        'Deposit escrow → Rental period → Inspection → Release to host or tenant',
    },
    {
      title: 'Marketplace Escrow',
      icon: '🛒',
      description: 'Multi-vendor marketplaces with buyer protection',
      whyProtected:
        'Centralized protection without custody; dispute resolution built-in',
      pattern:
        'Buyer pays escrow → Vendor fulfills → Buyer approves → Release to vendor',
    },
    {
      title: 'Onchain Agreements',
      icon: '📝',
      description: 'Smart contract-based agreements and DAOs',
      whyProtected:
        'Conditional settlement based on onchain or offchain outcomes',
      pattern:
        'Agreement terms encoded → Conditions met → Auto release per rules',
    },
    {
      title: 'DAO Payments',
      icon: '🏛',
      description: 'Streaming or milestone-based contractor payments',
      whyProtected:
        'Funds held until work verified; prevents front-running or default',
      pattern:
        'Payment streaming escrow → Milestone completion → Progressive release',
    },
    {
      title: 'Cross-Chain Settlement',
      icon: '🌉',
      description: 'Settling assets after bridge or swap completion',
      whyProtected:
        'Holds funds until destination confirmed; prevents bridge failures',
      pattern:
        'Source bridge initiated → Destination confirmed → Release from escrow',
    },
  ]

  return (
    <>
      <Header titlePre="Use Cases" />
      <div className={`${sharedStyles.layout} hero-texture`}>
        <section className="header-section">
          <h1>Use Cases</h1>
          <h2 className="tagline">Protected transfers in action</h2>
          <p className="intro">
            Sew Protocol enables safe transactions across everyday scenarios.
            Below are common patterns where escrow protection adds value.
          </p>
        </section>

        <section className="use-cases-grid">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="use-case-card fabric-panel">
              <div className="use-case-header">
                <span className="use-case-icon">{useCase.icon}</span>
                <h3>{useCase.title}</h3>
              </div>
              <p className="use-case-description">{useCase.description}</p>
              <div className="use-case-details">
                <div className="detail-block">
                  <span className="detail-label">
                    Why protected transfer helps
                  </span>
                  <span className="detail-value">{useCase.whyProtected}</span>
                </div>
                <div className="detail-block">
                  <span className="detail-label">Typical release pattern</span>
                  <span className="detail-value">{useCase.pattern}</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="cta-section fabric-texture fabric-texture-light">
          <h3>Ready to build?</h3>
          <p>Integrate protected transfers into your application</p>
          <div className="cta-buttons">
            <Link href="/developer" className="cta-button primary">Developer Guide</Link>
            <Link href="/contracts" className="cta-button">Contract Addresses</Link>
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
          margin-bottom: 1.5rem;
        }
        .intro {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--accents-2);
        }
        .use-cases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
          padding: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        .use-case-card {
          padding: 1.5rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .use-case-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }
        .use-case-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }
        .use-case-icon {
          font-size: 1.5rem;
        }
        .use-case-header h3 {
          font-size: 1.1rem;
          margin: 0;
        }
        .use-case-description {
          color: var(--accents-3);
          font-size: 0.9rem;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--accents-6);
        }
        .use-case-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .detail-block {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .detail-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accents-3);
        }
        .detail-value {
          font-size: 0.85rem;
          line-height: 1.4;
          color: var(--fg);
        }
        .cta-section {
          max-width: 600px;
          margin: 4rem auto;
          padding: 3rem 2rem;
          text-align: center;
          border-radius: 12px;
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
          display: inline-block;
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
        }
        .page-meta p {
          margin: 0.5rem 0;
        }
        .page-meta a {
          color: #0070f3;
        }
        @media (max-width: 600px) {
          .use-cases-grid {
            padding: 1rem;
          }
          .cta-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  )
}
