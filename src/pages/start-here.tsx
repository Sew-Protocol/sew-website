import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function StartHere() {
  return (
    <>
      <Header titlePre="Start Here" />
      <div className={`${sharedStyles.layout} hero-texture`}>
        <section className="start-header">
          <h1>Start Here</h1>
          <p className="tagline">Find your path through Sew Protocol</p>
        </section>

        <section className="pathways">
          <div className="pathway-card fabric-panel">
            <div className="pathway-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M16 24c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="24" cy="24" r="3" fill="currentColor" />
              </svg>
            </div>
            <h2>Users</h2>
            <p className="pathway-desc">
              Make protected transfers using simple interfaces.
            </p>
            <div className="pathway-actions">
              <Link href="/everyday-wallet">
                <a className="pathway-link">Everyday Wallet</a>
              </Link>
            </div>
            <div className="pathway-tags">
              <span>Checkout safety</span>
              <span>Buyer protection</span>
            </div>
          </div>

          <div className="pathway-card fabric-panel">
            <div className="pathway-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8"
                  y="8"
                  width="32"
                  height="32"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M16 20h16M16 28h10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="34"
                  cy="34"
                  r="6"
                  fill="var(--bg)"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <h2>Builders</h2>
            <p className="pathway-desc">
              Integrate protected transfers into your application.
            </p>
            <div className="pathway-actions">
              <Link href="/developer">
                <a className="pathway-link">Developer Docs</a>
              </Link>
            </div>
            <div className="pathway-tags">
              <span>SDK (Planned)</span>
              <span>API reference</span>
            </div>
          </div>

          <div className="pathway-card fabric-panel">
            <div className="pathway-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 8l12 4v8c0 8-6 16-12 18-6-2-12-10-12-18v-8l12-4z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="24"
                  cy="22"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <h2>Researchers</h2>
            <p className="pathway-desc">
              Deep dive into security and protocol architecture.
            </p>
            <div className="pathway-actions">
              <Link href="/security">
                <a className="pathway-link">Security Model</a>
              </Link>
              <Link href="/architecture">
                <a className="pathway-link secondary">Architecture</a>
              </Link>
            </div>
            <div className="pathway-tags">
              <span>Threat model</span>
              <span>Invariants</span>
            </div>
          </div>

          <div className="pathway-card fabric-panel">
            <div className="pathway-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="24"
                  cy="16"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 40c0-7.5 6-12 14-12s14 4.5 14 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h2>Governance</h2>
            <p className="pathway-desc">
              Understand roles, tokenomics, and the roadmap.
            </p>
            <div className="pathway-actions">
              <Link href="/governance">
                <a className="pathway-link">Governance Model</a>
              </Link>
              <Link href="/token">
                <a className="pathway-link secondary">SEW Token</a>
              </Link>
            </div>
            <div className="pathway-tags">
              <span>Roadmap</span>
              <span>DAO</span>
            </div>
          </div>
        </section>

        <section className="quick-links fabric-texture fabric-texture-light">
          <h3>Quick Reference</h3>
          <div className="quick-links-grid">
            <Link href="/how-it-works">
              <a className="quick-link needle-accent">
                <span className="quick-link-title">How It Works</span>
                <span className="quick-link-desc">
                  Understand the escrow lifecycle
                </span>
              </a>
            </Link>
            <Link href="/fees">
              <a className="quick-link needle-accent">
                <span className="quick-link-title">Fees</span>
                <span className="quick-link-desc">Complete fee breakdown</span>
              </a>
            </Link>
            <Link href="/governance">
              <a className="quick-link needle-accent">
                <span className="quick-link-title">Governance</span>
                <span className="quick-link-desc">
                  Protocol evolution and roles
                </span>
              </a>
            </Link>
            <Link href="/dispute-resolution">
              <a className="quick-link needle-accent">
                <span className="quick-link-title">Dispute Resolution</span>
                <span className="quick-link-desc">Escalation modes</span>
              </a>
            </Link>
            <Link href="/release-plan">
              <a className="quick-link needle-accent">
                <span className="quick-link-title">Release Plan</span>
                <span className="quick-link-desc">Phased rollout</span>
              </a>
            </Link>
            <Link href="/emergency">
              <a className="quick-link needle-accent">
                <span className="quick-link-title">Emergency</span>
                <span className="quick-link-desc">Recovery procedures</span>
              </a>
            </Link>
          </div>
        </section>
      </div>

      <style jsx>{`
        .start-header {
          text-align: center;
          padding: 4rem 2rem;
        }
        .start-header h1 {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }
        .tagline {
          color: var(--accents-3);
          font-size: 1.2rem;
        }
        .pathways {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          padding: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        .pathway-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }
        .pathway-icon {
          width: 48px;
          height: 48px;
          color: var(--accents-3);
          margin-bottom: 1rem;
        }
        .pathway-card h2 {
          font-size: 1.25rem;
          margin: 0 0 0.5rem 0;
        }
        .pathway-desc {
          color: var(--accents-3);
          font-size: 0.95rem;
          margin: 0 0 1.5rem 0;
          line-height: 1.5;
        }
        .pathway-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .pathway-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1rem;
          background: var(--fg);
          color: var(--bg);
          border-radius: 6px;
          font-weight: 500;
          font-size: 0.9rem;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .pathway-link:hover {
          opacity: 0.9;
        }
        .pathway-link.secondary {
          background: transparent;
          color: var(--fg);
          border: 1px solid var(--accents-2);
        }
        .pathway-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }
        .pathway-tags span {
          font-size: 0.8rem;
          padding: 0.25rem 0.5rem;
          background: var(--accents-6);
          color: var(--accents-2);
          border-radius: 4px;
        }
        .pathway-disclaimer {
          font-size: 0.75rem;
          color: var(--accents-3);
          font-style: italic;
          margin: 1rem 0 0 0;
        }
        .quick-links {
          max-width: 800px;
          margin: 3rem auto;
          padding: 3rem 2rem;
          border-radius: 12px;
        }
        .quick-links h3 {
          text-align: center;
          margin-bottom: 2rem;
        }
        .quick-links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
        }
        .quick-link {
          display: block;
          padding: 1rem 1.25rem;
          background: var(--bg);
          border-radius: 8px;
          text-decoration: none;
          border: 1px solid var(--accents-2);
        }
        .quick-link:hover {
          background: var(--accents-6);
        }
        .quick-link-title {
          display: block;
          font-weight: 600;
          color: var(--fg);
          margin-bottom: 0.25rem;
        }
        .quick-link-desc {
          display: block;
          font-size: 0.85rem;
          color: var(--accents-3);
        }
        @media (max-width: 600px) {
          .start-header h1 {
            font-size: 2rem;
          }
          .pathways {
            padding: 1rem;
          }
          .pathway-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}
