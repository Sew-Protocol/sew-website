import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function ReleasePlan() {
  return (
    <>
      <Header titlePre="Release Plan" />
      <div className={`${sharedStyles.layout} hero-texture`}>
        <section className="header-section">
          <h1>Release Plan</h1>
          <h2 className="tagline">Phased rollout strategy</h2>
          <p className="intro">
            Sew Protocol evolves through phases, each adding capabilities while
            maintaining security. This page documents the planned progression
            from launch to full decentralization.
          </p>
        </section>

        <section className="timeline">
          <div className="timeline-phase phase-active">
            <div className="phase-header">
              <span className="phase-status active">Active</span>
              <h3>Phase 1: IEO (Initial Escrow Offering)</h3>
            </div>
            <p className="phase-subtitle">Core escrow with single resolver</p>
            <div className="phase-content">
              <div className="phase-block">
                <h4>What is included</h4>
                <ul>
                  <li>Core escrow contracts (immutable)</li>
                  <li>DefaultResolutionModule (single trusted resolver)</li>
                  <li>Basic governance infrastructure</li>
                  <li>Guardian emergency controls</li>
                  <li>Optional Aave yield integration</li>
                </ul>
              </div>
              <div className="phase-block">
                <h4>What is not included</h4>
                <ul className="not-included">
                  <li>Multi-resolver escalation</li>
                  <li>Appeal bonds</li>
                  <li>Resolver staking/slashing</li>
                  <li>External arbitration (Kleros)</li>
                </ul>
              </div>
            </div>
            <div className="phase-footer">
              <span className="timeline-indicator">Timeline: Q1 2026</span>
            </div>
          </div>

          <div className="timeline-arrow">v</div>

          <div className="timeline-phase phase-next">
            <div className="phase-header">
              <span className="phase-status upcoming">Upcoming</span>
              <h3>Phase 2: DR v1 (Decentralize Decisions)</h3>
            </div>
            <p className="phase-subtitle">
              Multi-resolver escalation without staking
            </p>
            <div className="phase-content">
              <div className="phase-block">
                <h4>What is added</h4>
                <ul>
                  <li>DecentralizedResolutionModule v1</li>
                  <li>Multiple resolver registry</li>
                  <li>Fair resolver selection (round-robin)</li>
                  <li>Three-level escalation: Standard / Senior / External</li>
                  <li>Category-based dispute routing</li>
                </ul>
              </div>
              <div className="phase-block">
                <h4>What is not added yet</h4>
                <ul className="not-included">
                  <li>Appeal bonds (still v0)</li>
                  <li>Resolver staking/slashing</li>
                </ul>
              </div>
            </div>
            <div className="phase-footer">
              <span className="timeline-indicator">Timeline: Q2-Q3 2026</span>
            </div>
          </div>

          <div className="timeline-arrow">v</div>

          <div className="timeline-phase phase-next">
            <div className="phase-header">
              <span className="phase-status upcoming">Upcoming</span>
              <h3>Phase 3: DR v2 (Decentralize Incentives)</h3>
            </div>
            <p className="phase-subtitle">Appeal bonds for escalation</p>
            <div className="phase-content">
              <div className="phase-block">
                <h4>What is added</h4>
                <ul>
                  <li>Appeal bonds for escalation</li>
                  <li>
                    Bond outcomes: refunded on success, forfeited on failure
                  </li>
                  <li>Quadratic cost curves for escalation</li>
                  <li>Bond collection and distribution</li>
                </ul>
              </div>
              <div className="phase-block">
                <h4>What is not added yet</h4>
                <ul className="not-included">
                  <li>Resolver staking/slashing</li>
                </ul>
              </div>
            </div>
            <div className="phase-footer">
              <span className="timeline-indicator">Timeline: Q3-Q4 2026</span>
            </div>
          </div>

          <div className="timeline-arrow">v</div>

          <div className="timeline-phase phase-next">
            <div className="phase-header">
              <span className="phase-status upcoming">Upcoming</span>
              <h3>Phase 4: DR v3 (Decentralize Capital)</h3>
            </div>
            <p className="phase-subtitle">Resolver staking and slashing</p>
            <div className="phase-content">
              <div className="phase-block">
                <h4>What is added</h4>
                <ul>
                  <li>Resolver staking requirements</li>
                  <li>Mixed-bond design (80% stablecoin / 20% SEW)</li>
                  <li>Objective slashing for misconduct</li>
                  <li>Fraud slashing path</li>
                  <li>Coverage/underwriting mechanics</li>
                </ul>
              </div>
              <div className="phase-block">
                <h4>Key properties</h4>
                <ul>
                  <li>Capital at risk aligns incentives</li>
                  <li>Stablecoin anchoring reduces volatility risk</li>
                  <li>Slashed SEW is burned</li>
                </ul>
              </div>
            </div>
            <div className="phase-footer">
              <span className="timeline-indicator">Timeline: 2027</span>
            </div>
          </div>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Design principle</h3>
          <p className="principle-quote">
            Decentralise decisions first, decentralise incentives second,
            decentralise capital last.
          </p>
          <p>
            This staged approach minimizes risk by introducing adversarial
            pressure gradually, only after each phase proves stable.
          </p>
        </section>

        <section className="content-block">
          <h3>Governance activation</h3>
          <p>Each phase requires governance approval:</p>
          <div className="governance-steps">
            <div className="gov-step">
              <strong>Deploy</strong> - New module deployed and tested
            </div>
            <div className="gov-step">
              <strong>Queue</strong> - Governance proposal (48h timelock)
            </div>
            <div className="gov-step">
              <strong>Wait</strong> - 7-day slow lane delay
            </div>
            <div className="gov-step">
              <strong>Activate</strong> - Second proposal (48h timelock)
            </div>
          </div>
          <p>Total time: approximately 9 days from proposal to activation.</p>
        </section>

        <section className="related-section fabric-texture fabric-texture-light">
          <h3>Related pages</h3>
          <div className="related-links">
            <Link href="/dispute-resolution">Dispute Architecture</Link>
            <Link href="/governance">Governance</Link>
            <Link href="/security">Security Model</Link>
            <Link href="/protocol-limits">Protocol Limits</Link>
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
        h1 {
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
          line-height: 1.6;
          color: var(--accents-2);
        }
        .timeline {
          max-width: 700px;
          margin: 0 auto;
          padding: 2rem;
        }
        .timeline-phase {
          background: var(--bg);
          border-radius: 12px;
          padding: 2rem;
        }
        .phase-active {
          border: 2px solid #059669;
        }
        .phase-next {
          border: 1px solid var(--accents-2);
        }
        .phase-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }
        .phase-header h3 {
          margin: 0;
          font-size: 1.2rem;
        }
        .phase-status {
          font-size: 0.7rem;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .phase-status.active {
          background: rgba(108, 229, 177, 0.08);
          color: #059669;
        }
        .phase-status.upcoming {
          background: rgba(122, 221, 220, 0.08);
          color: #7adddc;
        }
        .phase-subtitle {
          color: var(--accents-3);
          margin: 0 0 1.5rem 0;
          font-size: 0.95rem;
        }
        .phase-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .phase-block h4 {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accents-3);
          margin: 0 0 0.75rem 0;
        }
        .phase-block ul {
          margin: 0;
          padding-left: 1.25rem;
          font-size: 0.9rem;
        }
        .phase-block li {
          margin-bottom: 0.25rem;
        }
        .not-included {
          opacity: 0.7;
        }
        .phase-footer {
          padding-top: 1rem;
          border-top: 1px solid #2a3a3e;
        }
        .timeline-indicator {
          font-size: 0.85rem;
          color: var(--accents-3);
        }
        .timeline-arrow {
          text-align: center;
          font-size: 1.5rem;
          color: var(--accents-3);
          padding: 0.5rem 0;
        }
        .content-block {
          max-width: 700px;
          margin: 4rem auto;
          padding: 0 2rem;
        }
        .content-block h3 {
          margin-bottom: 1rem;
        }
        .principle-quote {
          font-size: 1.25rem;
          font-style: italic;
          border-left: 3px solid var(--accents-3);
          padding-left: 1.5rem;
          margin: 1.5rem 0;
        }
        .governance-steps {
          display: grid;
          gap: 0.75rem;
          margin: 1.5rem 0;
        }
        .gov-step {
          padding: 1rem;
          background: var(--bg);
          border-radius: 8px;
        }
        .related-section {
          max-width: 700px;
          margin: 4rem auto;
          padding: 3rem 2rem;
          border-radius: 12px;
        }
        .related-section h3 {
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .related-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
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
        }
        .related-links a:hover {
          background: var(--accents-6);
        }
        @media (max-width: 600px) {
          .phase-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
