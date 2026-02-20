import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Token() {
  return (
    <>
      <Header titlePre="SEW Token" />
      <div className={`${sharedStyles.layout} hero-texture`}>
        <section className="header-section">
          <h1>SEW Token</h1>
          <h2 className="tagline">Sew Protocol</h2>
          <p className="intro">
            SEW is the governance token for Sew Protocol. It enables holders to
            participate in protocol decision-making.
          </p>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Token utility</h3>
          <p>SEW serves two primary purposes:</p>
          <ul>
            <li>
              <strong>Governance:</strong> Vote on proposals for protocol
              upgrades, parameter changes, fee adjustments, and module
              activations.
            </li>
            <li>
              <strong>Staking (future):</strong> In later phases, SEW can be
              staked as part of the dispute resolution system, subject to
              governance activation.
            </li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Governance rights</h3>
          <p>SEW holders can vote on:</p>
          <ul>
            <li>Module swaps and upgrades</li>
            <li>Protocol fee adjustments</li>
            <li>Risk parameter changes</li>
            <li>Guardian role appointments</li>
            <li>Emergency response coordination</li>
          </ul>
          <p>
            All governance changes are subject to timelock delays, ensuring
            transparency and community review before execution.
          </p>
        </section>

        <section className="content-block">
          <h3>Staking in dispute resolution (future)</h3>
          <p>
            In later phases of decentralized dispute resolution (DR v3), SEW
            will be used alongside stablecoins in a mixed-bond staking model:
          </p>
          <ul>
            <li>Resolvers stake a mix of USDC and SEW</li>
            <li>Composition: ≥80% stablecoin / ≤20% SEW post-haircut</li>
            <li>Slashed SEW is burned, reducing supply</li>
          </ul>
          <p>
            This aligns resolver incentives with long-term protocol health while
            limiting exposure to SEW price volatility.
          </p>
        </section>

        <section className="content-block">
          <h3>Distribution</h3>
          <p>
            Token distribution details will be published before mainnet launch.
          </p>
          <p>
            The protocol is designed so that governance cannot modify in-flight
            escrows. Your token holdings and voting power cannot be affected by
            governance decisions.
          </p>
        </section>

        <section className="content-block">
          <h3>Related pages</h3>
          <ul>
            <li>
              <Link href="/governance">Governance</Link>: How protocol decisions
              are made
            </li>
            <li>
              <Link href="/how-it-works">How It Works</Link>: Understanding
              dispute resolution phases
            </li>
            <li>
              <Link href="/fees">Fees</Link>: Fee structure and revenue use
            </li>
          </ul>
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
        @media (max-width: 600px) {
          .content-block {
            padding: 0 1rem;
          }
        }
      `}</style>
    </>
  )
}
