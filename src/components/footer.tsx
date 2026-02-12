import Link from 'next/link'
import ExtLink from './ext-link'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-top">
          <span>Deploy your own!</span>
          <ExtLink href="https://vercel.com/new/git/external?repository-url=https://github.com/Sew-Protocol/sew-protocol/tree/main&project-name=sew-protocol&repository-name=sew-protocol">
            <img
              src="https://vercel.com/button"
              height={46}
              width={132}
              alt="deploy to Vercel button"
            />
          </ExtLink>
          <span>
            or{' '}
            <ExtLink href="https://github.com/Sew-Protocol/sew-protocol">
              view source
            </ExtLink>
          </span>
        </div>
        <div className="footer-bottom">
          <div className="footer-section">
            <p className="footer-label">Reference Interface</p>
            <Link href="/everyday-wallet">
              <a>Everyday Wallet</a>
            </Link>
          </div>
        </div>
      </footer>
      <style jsx>{`
        footer {
          border-top: 1px solid var(--accents-2);
          padding: 2rem;
          text-align: center;
          color: var(--accents-3);
          font-size: 0.9rem;
        }
        .footer-top {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--accents-2);
          display: flex;
          justify-content: center;
          gap: 3rem;
        }
        .footer-section {
          text-align: center;
        }
        .footer-label {
          margin: 0 0 0.5rem 0;
          font-size: 0.85rem;
          color: var(--accents-2);
          text-transform: uppercase;
          letter-spacing: 0.05em;
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
      `}</style>
    </>
  )
}
