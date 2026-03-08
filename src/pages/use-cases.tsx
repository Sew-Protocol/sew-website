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
        'Buyer protection against non-delivery; seller assurance of transfer before shipping',
      pattern:
        'Buyer creates escrow → Seller ships → Buyer confirms → Auto/timed release',
    },
    {
      title: 'Event Tickets',
      icon: '🎫',
      description: 'Reselling tickets for concerts, sports, flights',
      whyProtected: 'Prevents fraud; ensures ticket transfer upon transfer',
      pattern: 'transfer escrow → Ticket transfer → Confirmation → Release',
    },
    {
      title: 'Freelance Services',
      icon: '💼',
      description: 'Contracting developers, designers, writers',
      whyProtected:
        'Milestone-based protection; transfer held until work delivered',
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
      title: 'DAO transfers',
      icon: '🏛',
      description: 'Streaming or milestone-based contractor transfers',
      whyProtected:
        'Funds held until work verified; prevents front-running or default',
      pattern:
        'transfer streaming escrow → Milestone completion → Progressive release',
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
      <div className={sharedStyles.layout}>
        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section
          className="hero"
          style={{
            backgroundImage: "url('/images/needle-threads.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
          }}
        >
          <div className="hero-inner">
            <div className="hero-text">
              <span className="hero-eyebrow">Real-world applications</span>
              <h1>Use Cases</h1>
              <h2 className="tagline">The Patterns of Protection</h2>
              <p className="description">
                Sew Protocol enables safe transactions across everyday
                scenarios. Below are the "stitch patterns" where escrow
                protection adds value.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. GRID ─────────────────────────────────────────────────────── */}
        <section className="use-cases-grid">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="use-case-card fabric-panel stitched"
            >
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
                  <span className="detail-label">
                    📍 Typical release pattern
                  </span>
                  <span className="detail-value">{useCase.pattern}</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ── 3. CTA ──────────────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner cta-band-inner">
            <h3>Ready to build?</h3>
            <p className="description" style={{ margin: '0 auto 2rem' }}>
              Integrate protected transfers into your application using Sew
              Protocol infrastructure.
            </p>
            <div className="cta-btns">
              <Link href="/developer" className="cta-btn primary">
                Developer Guide
              </Link>
              <Link href="/contracts" className="cta-btn">
                Contract Addresses
              </Link>
            </div>
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
        .tagline {
          font-size: 1.15rem;
          font-weight: 400;
          color: var(--accents-2);
          margin: 0 0 1.25rem;
          line-height: 1.5;
        }
        .description {
          font-size: 0.92rem;
          color: var(--accents-3);
          margin: 0 0 1.5rem;
          line-height: 1.75;
          max-width: 480px;
        }
        .use-cases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
          padding: 4rem 2rem;
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
          border-bottom: 1px solid rgba(122, 221, 220, 0.1);
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
        .cta-band-inner {
          text-align: center;
        }
        .cta-btns {
          display: flex;
          gap: 1rem;
          justify-content: center;
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
          color: var(--primary);
        }
        @media (max-width: 600px) {
          .use-cases-grid {
            padding: 2rem 1rem;
          }
          .cta-btns {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </>
  )
}
