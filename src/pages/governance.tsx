import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Governance() {
  return (
    <>
      <Header titlePre="Governance" />
      <div className={sharedStyles.layout}>
        <section className="header-section">
          <h1>Governance</h1>
          <h2 className="tagline">Sew Protocol</h2>
          <p className="intro">
            Sew Protocol is designed to evolve over time while preserving the
            integrity of existing agreements. Governance is structured around a
            simple principle: Protocol coordination should never become custody.
          </p>
        </section>

        <section className="content-block">
          <h3>Governance philosophy</h3>
          <p>Sew separates two responsibilities:</p>
          <ul>
            <li>
              <strong>Protocol evolution</strong> — introducing new modules and
              improving safety over time
            </li>
            <li>
              <strong>Operational safety</strong> — responding to emergencies or
              integration risks
            </li>
          </ul>
          <p>Governance is designed to:</p>
          <ul>
            <li>Allow defensive action when needed</li>
            <li>Prevent discretionary interference in active escrows</li>
            <li>Ensure upgrades affect only future agreements</li>
          </ul>
          <p>The goal is long-term stability, not constant change.</p>
        </section>

        <section className="content-block">
          <h3>Core design constraint</h3>
          <p>Once an escrow is created, its rules are fixed.</p>
          <p>This means:</p>
          <ul>
            <li>The release strategy is locked</li>
            <li>The resolution path is locked</li>
            <li>The yield module (if selected) is locked</li>
            <li>The settlement logic cannot be rewritten</li>
          </ul>
          <p>
            Governance cannot retroactively alter how an existing escrow
            resolves. This is a foundational property of the system.
          </p>
        </section>

        <section className="content-block">
          <h3>Roles and responsibilities</h3>
          <p>Sew uses role-based governance with clearly bounded authority.</p>

          <div className="role">
            <h4>Timelock governance</h4>
            <p>The timelock is responsible for protocol evolution.</p>
            <p>Typical responsibilities:</p>
            <ul>
              <li>Registering new modules</li>
              <li>Updating system configuration</li>
              <li>Setting exposure caps</li>
              <li>Managing supported integrations</li>
            </ul>
            <p>
              Changes are delayed through a timelock mechanism to allow
              visibility and review before activation. This provides
              transparency, predictability, and time to react to risky changes.
            </p>
          </div>

          <div className="role">
            <h4>Guardian role</h4>
            <p>
              The guardian exists for emergency response. Scope is intentionally
              limited.
            </p>
            <p>Typical actions:</p>
            <ul>
              <li>Disable integrations (e.g., yield module)</li>
              <li>Lower risk parameters (such as caps)</li>
              <li>Pause certain system components</li>
            </ul>
            <p>
              <strong>Guardian constraints:</strong>
            </p>
            <ul>
              <li>Pause maximum duration: 7 days</li>
              <li>Limited pauses per time window</li>
              <li>Cannot re-pause while already paused</li>
              <li>Unpause requires governance, not guardian</li>
            </ul>
            <p>
              The guardian cannot withdraw funds, redirect assets, rewrite
              settlement outcomes, or change the rules of existing escrows. The
              role is defensive, not managerial.
            </p>
          </div>

          <div className="role">
            <h4>Escrow contracts</h4>
            <p>
              Escrow contracts are registered as authorized participants in
              modules. They initiate yield deposits, trigger withdrawals, and
              interact with protocol modules on behalf of users.
            </p>
            <p>
              This allows governance and operational controls to be scoped at
              the integration boundary. Exposure caps can be applied per escrow
              contract, and integrations can be managed without affecting
              unrelated components.
            </p>
          </div>
        </section>

        <section className="content-block">
          <h3>Governance lanes</h3>
          <p>Different types of changes use different timelines:</p>
          <ul>
            <li>
              <strong>Fast lane</strong>: Small, safe parameter changes with
              minimal delay.
            </li>
            <li>
              <strong>Slow lane</strong>: Major changes like module upgrades
              require extended review periods.
            </li>
            <li>
              <strong>Emergency lane</strong>: Risk reduction only. Guardian can
              act immediately to reduce exposure, but cannot increase risk or
              reverse the pause.
            </li>
          </ul>
          <p>This layered approach balances agility with safety.</p>
        </section>

        <section className="content-block">
          <h3>Change boundaries</h3>
          <p>There are clear limits on what governance can and cannot do.</p>
          <p>
            <strong>Governance can:</strong>
          </p>
          <ul>
            <li>Approve new modules</li>
            <li>Set exposure limits</li>
            <li>Enable or disable integrations</li>
            <li>Adjust system parameters for future activity</li>
          </ul>
          <p>
            <strong>Governance cannot:</strong>
          </p>
          <ul>
            <li>Seize funds</li>
            <li>Redirect assets</li>
            <li>Force settlement outcomes</li>
            <li>Change the rules of an active escrow</li>
          </ul>
          <p>These constraints are enforced by contract design, not policy.</p>
        </section>

        <section className="content-block">
          <h3>Change boundaries</h3>
          <p>There are clear limits on what governance can and cannot do.</p>
          <p>
            <strong>Governance can:</strong>
          </p>
          <ul>
            <li>Approve new modules</li>
            <li>Set exposure limits</li>
            <li>Enable or disable integrations</li>
            <li>Adjust system parameters for future activity</li>
          </ul>
          <p>
            <strong>Governance cannot:</strong>
          </p>
          <ul>
            <li>Seize funds</li>
            <li>Redirect assets</li>
            <li>Force settlement outcomes</li>
            <li>Change the rules of an active escrow</li>
          </ul>
          <p>These constraints are enforced by contract design, not policy.</p>
        </section>

        <section className="content-block">
          <h3>Exposure management</h3>
          <p>
            Governance manages system-level risk through exposure controls,
            including setting caps per token, setting caps per escrow contract,
            and reducing exposure during incidents.
          </p>
          <p>
            These controls are applied at deposit time and designed to limit
            systemic risk, prevent over-concentration, and maintain stability
            across integrations. They do not affect the ability to withdraw or
            unwind existing positions.
          </p>
        </section>

        <section className="content-block">
          <h3>Emergency response</h3>
          <p>
            In the event of an integration failure or security concern, the
            guardian can disable the affected module, deposits can be halted,
            and existing positions can be unwound back to escrow custody.
          </p>
          <p>
            Emergency actions are designed to restore safe conditions, not to
            introduce new control paths.
          </p>
        </section>

        <section className="content-block">
          <h3>Trust assumptions</h3>
          <p>
            Users rely on governance to act within defined constraints. Key
            assumptions:
          </p>
          <ul>
            <li>Timelock delays provide transparency into upcoming changes</li>
            <li>Guardians act to reduce risk, not increase it</li>
            <li>Governance powers remain narrowly scoped</li>
          </ul>
          <p>
            The protocol is designed so that even in worst-case governance
            failures: funds remain under contract control, settlement paths
            remain deterministic, and existing agreements stay protected.
          </p>
        </section>

        <section className="content-block">
          <h3>Long-term direction</h3>
          <p>
            Governance is expected to decentralize over time. Early phases may
            involve core team stewardship, carefully managed module rollouts,
            and conservative exposure policies.
          </p>
          <p>
            As the system matures, governance participation can broaden, module
            development can expand, and decision-making can become more
            distributed. The underlying constraint remains: existing escrows
            must remain predictable and protected.
          </p>
          <p>
            See{' '}
            <Link href="/protocol-limits">
              <a>Protocol Limits</a>
            </Link>{' '}
            for detailed constraints on governance and guardian powers.
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
        .role {
          margin-top: 2rem;
          padding: 1.5rem;
          background: #fafafa;
          border-radius: var(--radius);
          border: 1px solid #eaeaea;
        }
        .role h4 {
          margin-top: 0;
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
