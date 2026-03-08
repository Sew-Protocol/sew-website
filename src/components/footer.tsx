import Link from 'next/link'
import ExtLink from './ext-link'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-bottom">
          <div className="footer-section">
            <p className="footer-label">Reference</p>
            <Link href="/faq">FAQ</Link>
            <Link href="/glossary">Glossary</Link>
            <Link href="/comparisons">Comparisons</Link>
          </div>
          <div className="footer-section">
            <p className="footer-label">Developers</p>
            <Link href="/protocol-limits">Protocol Limits</Link>
            <Link href="/fees">Fees</Link>
            <Link href="/integrations">Integrations</Link>
            <Link href="/release-plan">Release Plan</Link>
          </div>
          <div className="footer-section">
            <p className="footer-label">About</p>
            <Link href="/governance">Governance</Link>
            <Link href="/token">SEW Token</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-section">
            <p className="footer-label">Source Code</p>
            <ExtLink href="https://github.com/sew-protocol/sew-protocol">
              GitHub Repository
            </ExtLink>
            <ExtLink href="https://discord.gg/sew">Discord</ExtLink>
          </div>
        </div>
        <div className="footer-legal">
          <p>
            Sew Protocol is non-custodial software. Users remain responsible for
            their own keys and transactions.
          </p>
        </div>
      </footer>
      <style jsx>{`
        footer {
          border-top: 1px solid var(--accents-2);
          padding: 3rem 2rem 2rem;
          text-align: center;
          color: var(--accents-3);
          font-size: 0.9rem;
        }
        .footer-bottom {
          display: flex;
          justify-content: center;
          gap: 4rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        .footer-section {
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .footer-label {
          margin: 0 0 0.5rem 0;
          font-size: 0.75rem;
          color: var(--accents-2);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .footer-section a {
          color: var(--fg);
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-section a:hover {
          color: #7adddc;
        }
        .footer-legal {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid #22343a;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .footer-legal p {
          margin: 0;
          font-size: 0.8rem;
          color: var(--accents-2);
        }
        @media (max-width: 600px) {
          .footer-bottom {
            flex-direction: column;
            gap: 2rem;
          }
        }
      `}</style>
    </>
  )
}
