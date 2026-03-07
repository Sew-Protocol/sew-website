import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function WhySew() {
  return (
    <>
      <Header titlePre="Why Sew" />
      <div className={sharedStyles.layout}>
        <section className="header-section">
          <h1>Why Sew</h1>
          <h2 className="tagline">
            The case for non-custodial, structured protection on Ethereum
          </h2>
          <p className="intro">
            Ethereum transactions are final. But coordination requires
            optionality. Sew Protocol adds structured protection to transfers
            without introducing custody.
          </p>
        </section>

        <section className="content-block">
          <h3>The problem</h3>
          <p>
            Today, onchain value transfer has a stark choice: send or don't
            send.
          </p>
          <ul>
            <li>
              <strong>Direct transfer:</strong> Immediate, irreversible, no
              protection
            </li>
            <li>
              <strong>Custodial escrow:</strong> Protection exists, but you must
              trust a third party with your funds
            </li>
          </ul>
          <p>
            This creates friction for any exchange, delivery, or agreement
            requiring coordination between parties.
          </p>
          <p>
            For peer-to-peer trades, marketplaces, and services, someone has to
            go first and trust the other party. That trust risk limits who can
            participate and on what terms.
          </p>
        </section>

        <section className="content-block">
          <h3>The solution: Protected transfers</h3>
          <p>
            Sew Protocol introduces protected transfers as a native pattern on
            Ethereum.
          </p>
          <p>
            A protected transfer is an ERC-20 transfer routed through escrow,
            with predefined release and dispute resolution paths. Neither party
            loses custody. Both know the rules upfront. Settlement is enforced
            onchain.
          </p>
          <div className="pill-grid">
            <span className="pill">Non-custodial</span>
            <span className="pill">Composable</span>
            <span className="pill">Deterministic</span>
            <span className="pill">Dispute-enabled</span>
          </div>
        </section>

        <section className="content-block">
          <h3>How it compares</h3>
          <p>
            Different transfer patterns serve different needs. Here's how Sew
            fits in:
          </p>
          <div className="comparison-grid">
            <div className="comparison-item">
              <h4>Direct Transfer</h4>
              <p className="desc">Standard ERC20 transfer</p>
              <ul className="pros">
                <li>✓ Instant</li>
                <li>✓ Simple</li>
              </ul>
              <ul className="cons">
                <li>✗ No protection</li>
                <li>✗ No conditions</li>
              </ul>
            </div>

            <div className="comparison-item">
              <h4>Custodial Escrow</h4>
              <p className="desc">Marketplace, transfer processor</p>
              <ul className="pros">
                <li>✓ Protection</li>
                <li>✓ Dispute handling</li>
              </ul>
              <ul className="cons">
                <li>✗ Custody required</li>
                <li>✗ Trust cost</li>
              </ul>
            </div>

            <div className="comparison-item">
              <h4>Multisig</h4>
              <p className="desc">Shared control agreement</p>
              <ul className="pros">
                <li>✓ Non-custodial</li>
                <li>✓ Transparent</li>
              </ul>
              <ul className="cons">
                <li>✗ Requires coordination</li>
                <li>✗ No conditional logic</li>
              </ul>
            </div>

            <div className="comparison-item highlight">
              <h4>Sew Protocol</h4>
              <p className="desc">Protected escrow layer</p>
              <ul className="pros">
                <li>✓ Non-custodial</li>
                <li>✓ Structured protection</li>
                <li>✓ Dispute resolution</li>
                <li>✓ Composable</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-block">
          <h3>What Sew enables</h3>
          <p>
            By separating the protection layer from any single application, Sew
            becomes infrastructure that any use case can build on.
          </p>
          <ul>
            <li>
              <strong>Peer-to-peer commerce:</strong> Direct trades without
              intermediaries
            </li>
            <li>
              <strong>Marketplaces:</strong> Reusable escrow logic across
              platforms
            </li>
            <li>
              <strong>Onchain agreements:</strong> Conditional settlement with
              neutrality guarantees
            </li>
            <li>
              <strong>Service transfers:</strong> Work-for-hire with protection
            </li>
            <li>
              <strong>Wallet integrations:</strong> Safety features at the
              transfer layer
            </li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Core principles</h3>
          <p>
            Sew is built on three principles that shape every design decision:
          </p>
          <div className="principle-grid">
            <div className="principle">
              <h4>Non-custodial</h4>
              <p>
                Funds are held by smart contracts, never by operators or
                intermediaries.
              </p>
            </div>
            <div className="principle">
              <h4>Deterministic</h4>
              <p>
                Release and resolution rules are defined at escrow creation.
                Settlement follows code, not judgment calls.
              </p>
            </div>
            <div className="principle">
              <h4>Composable</h4>
              <p>
                Built as a reusable primitive. Wallets, apps, and protocols can
                build on top without reinventing escrow.
              </p>
            </div>
          </div>
        </section>

        <section className="content-block">
          <h3>Next steps</h3>
          <p>Ready to understand how it works?</p>
          <ul>
            <li>
              <Link href="/how-it-works">How It Works</Link> — See the lifecycle
              and dispute resolution
            </li>
            <li>
              <Link href="/use-cases">Use Cases</Link> — Real-world examples
            </li>
            <li>
              <Link href="/developer">Build on Sew</Link> — Get started
              integrating
            </li>
            <li>
              <Link href="/comparisons">Detailed Comparisons</Link> — Deep dive
              into alternatives
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
        .pill-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin: 2rem 0;
          justify-content: center;
        }
        .pill {
          background: #22343a;
          color: #7adddc;
          border: 1px solid rgba(122, 221, 220, 0.3);
          padding: 0.5rem 1.5rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .comparison-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }
        .comparison-item {
          border: 1px solid #2a3a3e;
          border-radius: 8px;
          padding: 1.5rem;
          background: #1b2a2e;
        }
        .comparison-item.highlight {
          border: 2px solid #7adddc;
          background: rgba(122, 221, 220, 0.05);
        }
        .comparison-item h4 {
          margin-top: 0;
          margin-bottom: 0.5rem;
        }
        .comparison-item .desc {
          font-size: 0.9rem;
          color: var(--accents-3);
          margin: 0.5rem 0 1rem;
        }
        .comparison-item ul {
          margin: 0.5rem 0;
          padding-left: 1.5rem;
          font-size: 0.9rem;
        }
        .comparison-item .pros {
          color: #6ce5b1;
        }
        .comparison-item .cons {
          color: #ff6f61;
        }
        .principle-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }
        .principle {
          padding: 1.5rem;
          border-left: 4px solid #7adddc;
          background: #1b2a2e;
        }
        .principle h4 {
          margin-top: 0;
          color: #7adddc;
        }
        .page-meta {
          margin: 4rem auto;
          max-width: 800px;
          padding: 0 2rem;
          font-size: 0.9rem;
          color: var(--accents-3);
        }
        .page-meta a {
          color: #7adddc;
        }
        @media (max-width: 600px) {
          .comparison-grid {
            grid-template-columns: 1fr;
          }
          .principle-grid {
            grid-template-columns: 1fr;
          }
          .pill-grid {
            justify-content: flex-start;
          }
        }
      `}</style>
    </>
  )
}
