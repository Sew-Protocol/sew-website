import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Header titlePre="About" />
      <div className={sharedStyles.layout}>
        <section className="header-section">
          <h1>About Sew Protocol</h1>
          <h2 className="tagline">Sew Protocol</h2>
          <p className="intro">
            Building infrastructure for protected transfers on Ethereum.
          </p>
        </section>

        <section className="content-block">
          <h3>Mission</h3>
          <p>
            Sew Protocol makes coordination possible on Ethereum without
            requiring custody or centralized trust.
          </p>
          <p>
            We believe every transfer should be optionally protected. Buyers and
            sellers should be able to transact with confidence. Applications
            should reuse infrastructure rather than reinvent escrow.
          </p>
        </section>

        <section className="content-block">
          <h3>What we're building</h3>
          <p>
            Sew is composable infrastructure: a set of smart contracts and
            modules that applications, wallets, and protocols can build on.
          </p>
          <ul>
            <li>
              <strong>Core escrow:</strong> Non-custodial transfer protection
              with defined release and resolution rules
            </li>
            <li>
              <strong>Modular architecture:</strong> Pluggable release
              strategies, dispute resolvers, and yield generators
            </li>
            <li>
              <strong>Dispute resolution:</strong> Structured, incentivized
              mechanisms for fair conflict resolution
            </li>
            <li>
              <strong>Governance:</strong> Community-controlled protocol
              evolution
            </li>
          </ul>
          <p>
            Rather than a platform with proprietary integrations, Sew is a
            primitive that works across ecosystems.
          </p>
        </section>

        <section className="content-block">
          <h3>Governance and token</h3>
          <p>
            Sew Protocol is governed by the community through the SEW token.
            Governance controls:
          </p>
          <ul>
            <li>Protocol parameters and fee allocation</li>
            <li>Module approvals and upgrades</li>
            <li>Resolver appointment and slashing</li>
            <li>Emergency response procedures</li>
          </ul>
          <p>
            <Link href="/token">Learn more about the SEW token →</Link>
          </p>
        </section>

        <section className="content-block">
          <h3>Security-first design</h3>
          <p>Security is not an afterthought. Sew is designed with:</p>
          <ul>
            <li>
              <strong>Non-custodial architecture:</strong> Funds never leave
              user control except to the recipient
            </li>
            <li>
              <strong>Deterministic rules:</strong> Code enforces settlement,
              not human judgment
            </li>
            <li>
              <strong>Per-escrow isolation:</strong> Failures are contained to
              individual transfers
            </li>
            <li>
              <strong>Emergency procedures:</strong> Escape hatches for extreme
              scenarios
            </li>
          </ul>
          <p>
            <Link href="/security">View our security model →</Link>
          </p>
        </section>

        <section className="content-block">
          <h3>Roadmap</h3>
          <p>Sew is under active development. Our roadmap includes:</p>
          <ul>
            <li>
              <strong>v1 (Launch):</strong> Core escrow with single-tier dispute
              resolution
            </li>
            <li>
              <strong>v2 (Post-launch):</strong> Multi-tier escalating
              resolution with staking and appeals
            </li>
            <li>
              <strong>v3 (Future):</strong> Fully decentralized resolver
              selection with capital-weighted delegation
            </li>
          </ul>
          <p>
            <Link href="/release-plan">View the full release plan →</Link>
          </p>
        </section>

        <section className="content-block">
          <h3>Get involved</h3>
          <p>Sew Protocol is open source and community-driven.</p>
          <ul>
            <li>
              <strong>Developers:</strong>{' '}
              <Link href="/developer">Build on Sew</Link> — Integrate escrow
              into your app
            </li>
            <li>
              <strong>Operators:</strong>{' '}
              <Link href="/docs/dispute-resolution/resolver-guide">
                Become a resolver
              </Link>{' '}
              — Earn fees by resolving disputes
            </li>
            <li>
              <strong>Researchers:</strong>{' '}
              <Link href="/researcher">Research resources</Link> — Analyze
              protocol mechanics
            </li>
            <li>
              <strong>Investors:</strong>{' '}
              <Link href="/investor">Investor information</Link> — Learn about
              the SEW token
            </li>
            <li>
              <strong>Source code:</strong>{' '}
              <a href="https://github.com/Sew-Protocol/sew-protocol">GitHub</a>{' '}
              — Audit and contribute
            </li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Contact</h3>
          <p>Questions? Reach out to the team.</p>
          <ul>
            <li>
              <strong>Email:</strong> info@sewprotocol.com
            </li>
            <li>
              <strong>Twitter:</strong>{' '}
              <a href="https://twitter.com/sewprotocol">@sewprotocol</a>
            </li>
            <li>
              <strong>Discord:</strong>{' '}
              <a href="https://discord.gg/sewprotocol">Community server</a>
            </li>
          </ul>
        </section>

        <section className="page-meta">
          <p>Last updated: February 2026</p>
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
        .page-meta {
          margin: 4rem auto;
          max-width: 800px;
          padding: 0 2rem;
          font-size: 0.9rem;
          color: var(--accents-5);
        }
        .page-meta a {
          color: #7adddc;
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
