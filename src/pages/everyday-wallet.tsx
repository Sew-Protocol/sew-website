import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default function EverydayWallet() {
  return (
    <>
      <Header titlePre="Everyday Wallet" />
      <div className={sharedStyles.layout}>
        <section className="header-section">
          <h1>Everyday Wallet</h1>
          <h2 className="tagline">Safe payments for real-world exchanges</h2>
          <p className="intro">
            Everyday Wallet is a simple way to send protected payments on Ethereum.
            Instead of sending money directly and hoping for the best, you can hold funds safely until both sides are satisfied.
          </p>
        </section>

        <section className="content-block">
          <h3>What it is</h3>
          <p>Everyday Wallet is an interface to Sew Protocol.</p>
          <p>It allows you to:</p>
          <ul>
            <li>Send payments that are held in escrow</li>
            <li>Release funds when a deal is complete</li>
            <li>Resolve disagreements if something goes wrong</li>
            <li>Use ETH and ERC20 tokens</li>
          </ul>
          <p>Protection is built into the payment itself.</p>
        </section>

        <section className="content-block">
          <h3>Why it exists</h3>
          <p>Most crypto payments are instant and irreversible.</p>
          <p>This works well when trust already exists. It creates risk when it doesn't.</p>
          <p>Everyday Wallet is designed for situations like:</p>
          <ul>
            <li>Buying something from a stranger</li>
            <li>Paying for a service</li>
            <li>Splitting payments for real-world items</li>
            <li>Sending money before delivery</li>
          </ul>
          <p>It adds a coordination phase before settlement.</p>
        </section>

        <section className="content-block">
          <h3>How it works</h3>
          <p>When you send a protected payment:</p>
          <ol>
            <li><strong>Funds are locked in escrow</strong> — neither party can access them unilaterally</li>
            <li><strong>The other person delivers</strong> — the item or service is provided</li>
            <li><strong>You release the payment</strong> — when satisfied with the outcome</li>
          </ol>
          <p>If there is a disagreement:</p>
          <ul>
            <li>A dispute can be opened</li>
            <li>A resolution process can determine the outcome</li>
          </ul>
          <p>The wallet does not hold custody. The escrow contract enforces the rules.</p>
        </section>

        <section className="content-block">
          <h3>Built for everyday exchanges</h3>
          <p>Everyday Wallet focuses on real situations where protection matters.</p>
          <p>Common use cases:</p>
          <ul>
            <li>Second-hand goods</li>
            <li>Event tickets</li>
            <li>Electronics and collectibles</li>
            <li>Freelance work</li>
            <li>Local marketplace transactions</li>
          </ul>
          <p>Anywhere payment and delivery happen at different times.</p>
        </section>

        <section className="content-block">
          <h3>Safer by default</h3>
          <p><strong>Traditional crypto transfers:</strong></p>
          <ul>
            <li>Immediate</li>
            <li>Final</li>
            <li>No recovery if something goes wrong</li>
          </ul>
          <p><strong>Protected transfers:</strong></p>
          <ul>
            <li>Held until released</li>
            <li>Structured release options</li>
            <li>Support for dispute resolution</li>
          </ul>
          <p>This reduces the risk of scams and irreversible mistakes.</p>
        </section>

        <section className="content-block">
          <h3>Flexible release options</h3>
          <p>Different situations require different settlement paths.</p>
          <p>Depending on the payment, releases can be:</p>
          <ul>
            <li><strong>Manual</strong> — the sender confirms delivery</li>
            <li><strong>Automatic</strong> — funds release after a set time</li>
            <li><strong>Conditional</strong> — based on predefined rules</li>
          </ul>
          <p>These options are defined when the payment is created.</p>
        </section>

        <section className="content-block">
          <h3>Optional yield</h3>
          <p>In some cases, escrowed funds can generate yield while waiting for settlement.</p>
          <p>This is:</p>
          <ul>
            <li>Optional</li>
            <li>Transparent</li>
            <li>Linked to the escrow</li>
          </ul>
          <p>Funds remain controlled by the escrow contract at all times.</p>
        </section>

        <section className="content-block">
          <h3>Designed for clarity</h3>
          <p>The wallet is built around clear, simple flows:</p>
          <ul>
            <li>Who you're paying</li>
            <li>How much is locked</li>
            <li>When it can be released</li>
            <li>What happens if there's a dispute</li>
          </ul>
          <p>The goal is to make protected payments feel natural and understandable.</p>
        </section>

        <section className="content-block">
          <h3>Non-custodial by design</h3>
          <p>Everyday Wallet does not hold your money.</p>
          <p>Funds are:</p>
          <ul>
            <li>Sent directly to escrow contracts</li>
            <li>Controlled by predefined rules</li>
            <li>Released only through settlement paths</li>
          </ul>
          <p>This preserves the self-custody model of Ethereum.</p>
        </section>

        <section className="content-block">
          <h3>Powered by Sew Protocol</h3>
          <p>Everyday Wallet is one interface built on Sew.</p>
          <p>The protocol provides:</p>
          <ul>
            <li>Escrow enforcement</li>
            <li>Settlement logic</li>
            <li>Dispute pathways</li>
            <li>Optional integrations</li>
          </ul>
          <p>Other wallets and applications can build on the same system.</p>
        </section>

        <section className="content-block">
          <h3>Who it's for</h3>
          <p>Everyday Wallet is designed for people who want safer payments when trust is limited.</p>
          <p>It's especially useful when:</p>
          <ul>
            <li>You don't know the other party</li>
            <li>Payment happens before delivery</li>
            <li>You want a clear, structured agreement</li>
          </ul>
          <p>It adds protection without adding intermediaries.</p>
        </section>

        <section className="content-block">
          <h3>Vision</h3>
          <p>Sending money on Ethereum is powerful, but risky in real-world transactions.</p>
          <p>Everyday Wallet explores a simple idea:</p>
          <p><strong>Payments should be safe by default.</strong></p>
          <p>By making protection part of the send flow, the wallet aims to support safer everyday exchanges between people.</p>
        </section>

        <section className="content-block">
          <h3>Summary</h3>
          <p>Everyday Wallet turns a simple transfer into a protected payment.</p>
          <ul>
            <li>Funds are held</li>
            <li>Both sides coordinate</li>
            <li>Settlement happens when conditions are met</li>
          </ul>
          <p>It's a practical way to bring escrow into everyday use.</p>
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
