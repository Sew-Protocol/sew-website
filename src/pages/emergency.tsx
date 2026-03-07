import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Emergency() {
  return (
    <>
      <Header titlePre="Emergency Recovery" />
      <div className={`${sharedStyles.layout} hero-texture`}>
        <section className="header-section">
          <h1>Emergency Recovery</h1>
          <h2 className="tagline">
            Containment-first response with bounded guardian powers
          </h2>
          <p className="intro">
            This page documents the protocol's emergency response capabilities
            and recovery procedures.
          </p>
        </section>

        <section className="content-block">
          <h3>Emergency Philosophy</h3>
          <p>
            Sew Protocol is designed with a containment-first approach to
            emergencies. The goal is to limit damage and preserve user funds,
            not to provide comprehensive recovery for all failure scenarios.
          </p>
          <p>
            Emergency mechanisms are intentionally constrained. They can reduce
            risk but cannot extract funds, modify existing escrows, or override
            settlement outcomes.
          </p>
        </section>

        <section className="content-block">
          <h3>Guardian Pause</h3>
          <p>
            The guardian role can pause the protocol in response to critical
            vulnerabilities. Pause is an emergency circuit-breaker designed to
            prevent mass exploitation while fixes are prepared.
          </p>
          <p>
            <strong>What pause affects:</strong>
          </p>
          <ul>
            <li>New escrow creation</li>
            <li>Dispute initiation</li>
            <li>Dispute escalation</li>
          </ul>
          <p>
            <strong>What remains available during pause:</strong>
          </p>
          <ul>
            <li>Fund release (for non-disputed escrows)</li>
            <li>Fund cancellation (for non-disputed escrows)</li>
            <li>Existing position unwinding (where supported)</li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Guardian Constraints</h3>
          <p>Guardian powers are bounded to prevent abuse:</p>
          <table className="constraints-table">
            <tbody>
              <tr>
                <td>Maximum pause duration</td>
                <td>7 days</td>
              </tr>
              <tr>
                <td>Maximum pause cycles (per 90-day window)</td>
                <td>3 pauses</td>
              </tr>
              <tr>
                <td>Can re-pause while paused</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Can unpause</td>
                <td>No (requires governance/timelock)</td>
              </tr>
              <tr>
                <td>Can extract funds</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Can modify existing escrows</td>
                <td>No</td>
              </tr>
            </tbody>
          </table>
          <p>
            After the maximum duration, the pause automatically expires.
            Governance must manually unpause the system after addressing the
            underlying issue.
          </p>
        </section>

        <section className="content-block">
          <h3>Module Disabling</h3>
          <p>
            The guardian can disable specific modules (such as yield generation
            integrations) without pausing the entire protocol.
          </p>
          <p>
            <strong>When used:</strong>
          </p>
          <ul>
            <li>A vulnerability is discovered in a specific integration</li>
            <li>An external protocol (e.g., Aave) experiences issues</li>
            <li>A resolution module shows problematic behavior</li>
          </ul>
          <p>
            <strong>Effects of module disable:</strong>
          </p>
          <ul>
            <li>New escrows cannot use the disabled module</li>
            <li>Existing escrows using the module may be restricted</li>
            <li>Other protocol functions continue normally</li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Position Unwinding</h3>
          <p>
            When an integration fails or poses risk, the protocol supports
            unwinding positions back to escrow custody. This allows users to
            exit risky positions while preserving their underlying funds.
          </p>
          <p>
            <strong>Unwinding process:</strong>
          </p>
          <ul>
            <li>Guardian identifies affected positions</li>
            <li>Unwind function is called for affected escrows</li>
            <li>Funds return to escrow custody</li>
            <li>Users can then release or cancel normally</li>
          </ul>
          <p>
            Unwinding preserves the principal. Yield may be forfeited depending
            on the timing and nature of the emergency.
          </p>
        </section>

        <section className="content-block">
          <h3>Emergency Response Timeline</h3>
          <table className="timeline-table">
            <thead>
              <tr>
                <th>Phase</th>
                <th>Action</th>
                <th>Responsible</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Detection</strong>
                </td>
                <td>
                  Issue identified (internal monitoring, external report, or
                  incident disclosure)
                </td>
                <td>Team, auditors, or community</td>
              </tr>
              <tr>
                <td>
                  <strong>Assessment</strong>
                </td>
                <td>Evaluate severity and scope of vulnerability</td>
                <td>Security team</td>
              </tr>
              <tr>
                <td>
                  <strong>Containment</strong>
                </td>
                <td>Guardian pauses protocol or disables affected module</td>
                <td>Guardian</td>
              </tr>
              <tr>
                <td>
                  <strong>Fix Preparation</strong>
                </td>
                <td>Develop and test remediation</td>
                <td>Development team</td>
              </tr>
              <tr>
                <td>
                  <strong>Governance Review</strong>
                </td>
                <td>Timelock queue for fix deployment (if applicable)</td>
                <td>Governance</td>
              </tr>
              <tr>
                <td>
                  <strong>Recovery</strong>
                </td>
                <td>Deploy fix, unwind positions if needed, unpause system</td>
                <td>Timelock / Governance</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="content-block">
          <h3>What Emergency Mechanisms Cannot Do</h3>
          <p>
            It is important to understand the boundaries of emergency response:
          </p>
          <ul>
            <li>
              <strong>Cannot recover funds sent to wrong addresses</strong>:
              Standard transaction errors are irreversible
            </li>
            <li>
              <strong>Cannot reverse settlement outcomes</strong>: Released,
              refunded, or resolved escrows are final
            </li>
            <li>
              <strong>Cannot modify escrow rules</strong>: Per-escrow
              immutability is absolute
            </li>
            <li>
              <strong>Cannot bypass release conditions</strong>: Settlement
              paths are deterministic
            </li>
            <li>
              <strong>Cannot compensate for external failures</strong>: Issues
              in connected protocols (e.g., oracle failures) may not be
              recoverable
            </li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Post-Incident Process</h3>
          <p>After an emergency is resolved:</p>
          <ul>
            <li>Incident report is published documenting what happened</li>
            <li>Root cause analysis is shared with the community</li>
            <li>Lessons learned are incorporated into protocol improvements</li>
            <li>Any emergency actions taken are documented and justified</li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Related Pages</h3>
          <ul>
            <li>
              <Link href="/protocol-limits">Protocol Limits</Link>: Detailed
              constraints on guardian and governance powers
            </li>
            <li>
              <Link href="/governance">Governance</Link>: How protocol changes
              are coordinated
            </li>
            <li>
              <Link href="/security">Security Model</Link>: Overall security
              philosophy and properties
            </li>
            <li>
              <Link href="/how-it-works">How It Works</Link>: Understanding
              escrow lifecycle
            </li>
          </ul>
        </section>

        <section className="page-meta">
          <p>Last updated: February 2026</p>
          <p>
            <Link href="/docs/emergency">View full documentation →</Link>
          </p>
        </section>
      </div>

      <style jsx>{`
        h1 {
          margin-bottom: 0.5rem;
        }
        .tagline {
          color: var(--accents-3);
          margin-bottom: 2rem;
        }
        .intro {
          font-size: 1.2rem;
          line-height: 1.6;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        .header-section {
          margin-bottom: 4rem;
          text-align: center;
        }
        .content-block {
          margin: 4rem auto;
          max-width: 800px;
          padding: 0 2rem;
        }
        .constraints-table,
        .timeline-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1.5rem;
        }
        .constraints-table th,
        .constraints-table td,
        .timeline-table th,
        .timeline-table td {
          text-align: left;
          padding: 1rem;
          border-bottom: 1px solid #2a3a3e;
        }
        .constraints-table th,
        .timeline-table th {
          font-weight: 600;
          background: #1b2a2e;
        }
        @media (max-width: 600px) {
          .content-block {
            padding: 0 1rem;
          }
          .constraints-table,
          .timeline-table {
            font-size: 0.9rem;
          }
          .constraints-table th,
          .constraints-table td,
          .timeline-table th,
          .timeline-table td {
            padding: 0.75rem 0.5rem;
          }
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
      `}</style>
    </>
  )
}
