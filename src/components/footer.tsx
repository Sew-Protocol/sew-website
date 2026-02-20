import Link from 'next/link'
import ExtLink from './ext-link'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-bottom">
          <div className="footer-section">
            <p className="footer-label">Reference Interface</p>
            <Link href="/everyday-wallet">Everyday Wallet</Link>
          </div>
          <div className="footer-section">
            <p className="footer-label">Source Code</p>
            <ExtLink href="https://github.com/Sew-Protocol/sew-protocol">
              GitHub Repository
            </ExtLink>
          </div>
          <div className="footer-section">
            <p className="footer-label">Community</p>
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
        }
        .footer-label {
          margin: 0 0 0.75rem 0;
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
          color: #0070f3;
        }
        .footer-legal {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--accents-6);
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
