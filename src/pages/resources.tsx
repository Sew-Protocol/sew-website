import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Resources() {
  return (
    <>
      <Header titlePre="Resources" />
      <div className={`${sharedStyles.layout} hero-texture`}>
        <section className="header-section">
          <h1>Resources</h1>
          <h2 className="tagline">Sew Protocol</h2>
          <p className="intro">
            Reference materials for users, developers, and researchers.
          </p>
        </section>

        <section className="content-block">
          <h3>Fees & Economics</h3>
          <ul>
            <li>
              <Link href="/fees">Fees</Link>— Escrow creation fees, yield
              protocol fees, appeal bond fees
            </li>
            <li>
              <Link href="/protocol-limits">Protocol Limits</Link>— Maximum
              bounds on fees, timeouts, and guardian powers
            </li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Security & Safety</h3>
          <ul>
            <li>
              <Link href="/security">Security Model</Link>— Security philosophy,
              properties, and threat model
            </li>
            <li>
              <Link href="/emergency">Emergency Recovery</Link>— Guardian pause,
              module disabling, position unwinding
            </li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Technical</h3>
          <ul>
            <li>
              <Link href="/developer">Developer Guide</Link>— Integration guide
              with code examples
            </li>
            <li>
              <Link href="/docs/reference">Technical Reference</Link>— Smart
              contracts, documentation, and external resources
            </li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Research & Investment</h3>
          <ul>
            <li>
              <Link href="/researcher">For Researchers</Link>— Research domains,
              system properties, and ongoing inquiries
            </li>
            <li>
              <Link href="/investor">Investors</Link>— Protocol economics and
              investment considerations
            </li>
          </ul>
        </section>

        <section className="content-block">
          <h3>External Links</h3>
          <ul>
            <li>
              <strong>GitHub</strong> — Source code and documentation
            </li>
            <li>
              <strong>Block Explorer</strong> — View contracts and transactions
            </li>
            <li>
              <strong>Audits</strong> — Security review reports (when available)
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
          margin: 3rem auto;
          max-width: 600px;
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
