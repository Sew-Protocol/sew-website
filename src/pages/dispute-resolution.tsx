import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function DisputeResolution() {
  return (
    <>
      <Header titlePre="Dispute Architecture" />
      <div className={`${sharedStyles.layout} hero-texture`}>
        <section className="header-section">
          <h1>Dispute Architecture</h1>
          <h2 className="tagline">
            Mechanism design — how resolution works structurally
          </h2>
          <p className="intro">
            Sew Protocol provides multiple dispute resolution pathways, evolving
            from a single trusted resolver at launch to fully decentralised
            resolution over time. This page covers the architectural layer:
            state machines, resolver interfaces, and escalation paths.
          </p>
          <p className="intro-crosslink">
            For the economic layer — bonds, slashing, and incentive alignment —
            see <a href="/security#dispute-economics">Dispute Economics →</a>
          </p>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Resolution modes</h3>
          <div className="mode-cards">
            <div className="mode-card">
              <div className="mode-header">
                <span className="mode-badge active">Active at Launch</span>
                <h4>Single Trusted Resolver</h4>
              </div>
              <p>A designated resolver makes final decisions for disputes.</p>
              <ul>
                <li>Simple and fast</li>
                <li>Governance-controlled resolver</li>
                <li>Suitable for straightforward disputes</li>
              </ul>
            </div>
            <div className="mode-card">
              <div className="mode-header">
                <span className="mode-badge planned">Planned</span>
                <h4>Escalating Resolution</h4>
              </div>
              <p>Multi-level resolution with final arbitration.</p>
              <ul>
                <li>Three escalation levels</li>
                <li>Appeal bonds prevent griefing</li>
                <li>External arbitration (e.g., Kleros)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-block">
          <h3>Escalating resolution path</h3>
          <div className="escalation-flow">
            <div className="flow-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Standard Resolver</h4>
                <p>
                  Initial dispute handling. First-level review of evidence and
                  circumstances.
                </p>
              </div>
            </div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Senior Resolver</h4>
                <p>
                  Escalation path for disputed decisions. Senior reviewer
                  evaluates the case.
                </p>
              </div>
            </div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>External Arbitration</h4>
                <p>
                  Final arbitration through third-party networks (e.g., Kleros).
                  Binding outcome.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Economic security</h3>
          <p className="economics-note">
            The following is a summary. For full bond parameters, slashing
            rates, and incentive analysis, see{' '}
            <a href="/security#dispute-economics">Dispute Economics</a> on the
            Security page.
          </p>
          <div className="principles-grid">
            <div className="principle-card">
              <h4>Appeal Bonds</h4>
              <p>
                Appellants post bonds to escalate decisions. Failed appeals
                forfeit bonds, discouraging frivolous escalation.
              </p>
            </div>
            <div className="principle-card">
              <h4>Resolver Staking</h4>
              <p>
                Resolvers stake tokens as collateral. Misconduct can result in
                slashing, aligning incentives with fair decisions.
              </p>
            </div>
            <div className="principle-card">
              <h4>Performance Tracking</h4>
              <p>
                Resolver decisions are recorded. Governance can adjust resolver
                status based on performance metrics.
              </p>
            </div>
          </div>
        </section>

        <section className="content-block">
          <h3>Key properties</h3>
          <ul className="properties-list">
            <li>
              <strong>Deterministic:</strong> Resolution follows predefined
              rules, not discretion
            </li>
            <li>
              <strong>Transparent:</strong> All decisions recorded onchain
            </li>
            <li>
              <strong>Bounded:</strong> Maximum dispute duration (90 days)
            </li>
            <li>
              <strong>Incentivized:</strong> Bonds and staking align resolver
              behavior
            </li>
            <li>
              <strong>Escalating:</strong> Multiple levels prevent single points
              of failure
            </li>
          </ul>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Related pages</h3>
          <div className="related-links">
            <Link href="/security#dispute-economics">Dispute Economics</Link>
            <Link href="/security#threat-model">Threat Model</Link>
            <Link href="/governance">Governance</Link>
            <Link href="/protocol-limits">Protocol Limits</Link>
            <Link href="/release-plan">Release Plan</Link>
            <Link href="/security">Security Model</Link>
          </div>
        </section>
      </div>

      <style jsx>{`
        h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }
        .tagline {
          color: var(--accents-3);
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }
        .intro {
          font-size: 1.05rem;
          max-width: 700px;
          margin: 0 auto 0.75rem;
          line-height: 1.65;
        }
        .intro-crosslink {
          font-size: 0.9rem;
          max-width: 700px;
          margin: 0 auto 1rem;
          color: var(--accents-3);
        }
        .intro-crosslink a {
          color: #2563eb;
          font-weight: 600;
          text-decoration: none;
        }
        .intro-crosslink a:hover {
          text-decoration: underline;
        }
        .economics-note {
          font-size: 0.875rem;
          color: var(--accents-3);
          margin-bottom: 1.25rem;
          padding: 0.65rem 1rem;
          background: #f8f9ff;
          border-left: 2.5px solid #2563eb;
          border-radius: 0 4px 4px 0;
        }
        .economics-note a {
          color: #2563eb;
          font-weight: 500;
        }
        .header-section {
          text-align: center;
          padding: 4rem 2rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .content-block {
          max-width: 900px;
          margin: 4rem auto;
          padding: 0 2rem;
        }
        .content-block h3 {
          margin-bottom: 1.5rem;
        }
        .mode-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .mode-card {
          padding: 1.5rem;
          background: var(--bg);
          border-radius: 8px;
        }
        .mode-header {
          margin-bottom: 1rem;
        }
        .mode-badge {
          display: inline-block;
          font-size: 0.7rem;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          margin-bottom: 0.5rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .mode-badge.active {
          background: #ecfdf5;
          color: #059669;
        }
        .mode-badge.planned {
          background: #eff6ff;
          color: #2563eb;
        }
        .mode-card h4 {
          margin: 0;
          font-size: 1.1rem;
        }
        .mode-card > p {
          color: var(--accents-2);
          font-size: 0.9rem;
          margin: 0 0 1rem 0;
        }
        .mode-card ul {
          margin: 0;
          padding-left: 1.25rem;
          font-size: 0.85rem;
          color: var(--accents-2);
        }
        .mode-card li {
          margin-bottom: 0.25rem;
        }
        .escalation-flow {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .flow-step {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          width: 100%;
          max-width: 500px;
        }
        .step-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--fg);
          color: var(--bg);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          flex-shrink: 0;
        }
        .step-content {
          flex: 1;
          padding: 1rem;
          background: var(--bg);
          border-radius: 8px;
        }
        .step-content h4 {
          margin: 0 0 0.5rem 0;
          font-size: 1rem;
        }
        .step-content p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--accents-2);
        }
        .flow-arrow {
          font-size: 1.5rem;
          color: var(--accents-3);
        }
        .principles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .principle-card {
          padding: 1.5rem;
          background: var(--bg);
          border-radius: 8px;
        }
        .principle-card h4 {
          margin: 0 0 0.5rem 0;
          font-size: 1rem;
        }
        .principle-card p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--accents-2);
          line-height: 1.5;
        }
        .properties-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .properties-list li {
          padding: 1rem;
          background: var(--bg);
          border-radius: 8px;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
        }
        .related-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .related-links a {
          padding: 0.5rem 1rem;
          background: var(--bg);
          border: 1px solid var(--accents-2);
          border-radius: 6px;
          color: var(--fg);
          text-decoration: none;
          font-size: 0.9rem;
        }
        .related-links a:hover {
          background: var(--accents-6);
        }
        @media (max-width: 600px) {
          .content-block {
            padding: 0 1rem;
          }
        }
      `}</style>
    </>
  )
}
