import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default function Investor() {
  return (
    <>
      <Header titlePre="For Investors" />
      <div className={`${sharedStyles.layout} hero-texture`}>
        <section className="header-section">
          <h1>For Investors</h1>
          <h2 className="tagline">Sew Protocol</h2>
          <p className="intro">
            Sew Protocol introduces protected transfers as a new settlement
            pattern on Ethereum. It is designed to reduce fraud, contain
            irreversible user error, and support safer coordination between
            parties who do not already trust each other.
          </p>
          <p className="micro-line">
            Sew is infrastructure: contracts and modules. Interfaces (wallets,
            marketplaces) are built on top.
          </p>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>The opportunity</h3>
          <p>Ethereum enables global, permissionless payments.</p>
          <p>
            But most transfers today are immediate, irreversible, and
            unprotected.
          </p>
          <p>
            This creates friction in everyday use cases where trust is limited:
          </p>
          <ul>
            <li>Peer-to-peer purchases</li>
            <li>Services and freelance work</li>
            <li>Marketplaces</li>
            <li>Event ticketing</li>
            <li>Informal commerce</li>
          </ul>
          <p>
            In these situations, participants need coordination before
            settlement.
          </p>
          <p>
            Sew introduces a way to structure payments so that funds can be held
            under predefined rules and released when conditions are met.
          </p>
        </section>

        <section className="content-block">
          <h3>What Sew is</h3>
          <p>
            Sew Protocol is a non-custodial escrow architecture for ERC20
            transfers.
          </p>
          <p>It acts as a settlement layer that allows payments to be:</p>
          <ul>
            <li>Held</li>
            <li>Coordinated</li>
            <li>Released</li>
            <li>Resolved</li>
          </ul>
          <p>Without introducing intermediaries that take custody.</p>
          <p>It is:</p>
          <ul>
            <li>
              <strong>Permissionless</strong>
            </li>
            <li>
              <strong>Composable</strong>
            </li>
            <li>
              <strong>Interface-agnostic</strong>
            </li>
          </ul>
          <p>Any wallet or application can build on top of it.</p>
        </section>

        <section className="content-block">
          <h3>Category positioning</h3>
          <p>
            Sew is not a wallet. It is not a marketplace. It is not a payment
            processor.
          </p>
          <p>
            <strong>It is infrastructure.</strong>
          </p>
          <p>
            Specifically, it introduces protected transfers as a primitive at
            the transaction layer—the default pattern used when value moves, not
            L1 consensus or sequencer infrastructure.
          </p>
          <p>This creates a new category between:</p>
          <ul>
            <li>
              <strong>Direct transfers</strong> — fast but unprotected
            </li>
            <li>
              <strong>Custodial platforms</strong> — protected but centralized
            </li>
          </ul>
          <p>Sew enables protection without custody.</p>
        </section>

        <section className="content-block">
          <h3>Why this matters</h3>
          <p>
            Irreversible settlement is a strength of Ethereum, but also a
            barrier to broader everyday use.
          </p>
          <p>
            Many real-world transactions require coordination, confirmation,
            delivery, and trust-building.
          </p>
          <p>
            Escrow has historically filled this role, but existing approaches
            are:
          </p>
          <ul>
            <li>Centralized</li>
            <li>Application-specific</li>
            <li>Difficult to standardize</li>
          </ul>
          <p>
            Sew makes escrow composable and programmable at the protocol level.
          </p>
        </section>

        <section className="content-block">
          <h3>Adoption path</h3>
          <p>
            The protocol is designed to grow through interfaces and
            integrations.
          </p>
          <p>Early adoption vectors include:</p>
          <ul>
            <li>Wallet-native protected send flows</li>
            <li>Marketplace integrations</li>
            <li>Peer-to-peer commerce tools</li>
            <li>Vertical-specific coordination platforms</li>
          </ul>
          <p>
            Everyday Wallet serves as a reference interface demonstrating how
            protected payments can work in practice.
          </p>
          <p>
            Over time, multiple interfaces can coexist over the same protocol
            layer.
          </p>
        </section>

        <section className="content-block">
          <h3>Long-term role in the ecosystem</h3>
          <p>
            If protected transfers become a common pattern, Sew can function as
            a base layer for:
          </p>
          <ul>
            <li>Safer peer-to-peer commerce</li>
            <li>Structured payment agreements</li>
            <li>Coordination between strangers</li>
            <li>Risk-aware settlement flows</li>
          </ul>
          <p>
            This positions the protocol as part of Ethereum's transaction
            infrastructure rather than a single application.
          </p>
        </section>

        <section className="content-block">
          <h3>Defensibility</h3>
          <p>Sew's defensibility comes from:</p>

          <div className="defensibility-item">
            <h4>Architecture</h4>
            <p>
              A modular escrow system designed for forward evolution without
              breaking existing agreements.
            </p>
          </div>

          <div className="defensibility-item">
            <h4>Network effects</h4>
            <p>
              As more applications adopt a shared settlement layer, integrations
              become easier and more standardized.
            </p>
          </div>

          <div className="defensibility-item">
            <h4>Safety positioning</h4>
            <p>
              Focus on containment, determinism, and non-custodial guarantees
              aligns with long-term ecosystem priorities.
            </p>
          </div>

          <div className="defensibility-item">
            <h4>Integration depth</h4>
            <p>
              Wallets, marketplaces, and tools built on Sew reinforce the
              protocol's role as a coordination primitive.
            </p>
          </div>
        </section>

        <section className="content-block">
          <h3>Token and sustainability</h3>
          <p>
            The protocol is designed to support long-term sustainability through
            aligned incentives.
          </p>
          <p>Potential areas include:</p>
          <ul>
            <li>Supporting dispute resolution ecosystems</li>
            <li>Supporting infrastructure development</li>
            <li>Supporting coordination between participants</li>
          </ul>
          <p>
            The goal is to align economic incentives with network growth while
            preserving neutrality at the protocol layer.
          </p>
          <p>
            Detailed token and distribution information is provided separately.
          </p>
        </section>

        <section className="content-block">
          <h3>Governance trajectory</h3>
          <p>Governance is expected to evolve over time.</p>
          <p>Early stages may involve:</p>
          <ul>
            <li>Core team stewardship</li>
            <li>Careful module rollout</li>
            <li>Conservative exposure management</li>
          </ul>
          <p>
            Over time, governance can broaden to include community participants,
            builders, and ecosystem stakeholders.
          </p>
          <p>
            The system is designed so that governance cannot retroactively
            change active agreements.
          </p>
        </section>

        <section className="content-block">
          <h3>Risk awareness</h3>
          <p>
            Sew is infrastructure and carries typical risks associated with
            early-stage protocols:
          </p>
          <ul>
            <li>Smart contract risk</li>
            <li>Integration risk</li>
            <li>Adoption risk</li>
            <li>Regulatory uncertainty</li>
          </ul>
          <p>The protocol addresses these through:</p>
          <ul>
            <li>Modular design</li>
            <li>Forward-only evolution</li>
            <li>Containment-focused security model</li>
            <li>Gradual rollout of optional integrations</li>
          </ul>
        </section>

        <section className="content-block">
          <h3>Why now</h3>
          <p>Several conditions are aligning:</p>
          <ul>
            <li>Increasing everyday use of stablecoins and tokens</li>
            <li>Growing demand for non-custodial coordination tools</li>
            <li>Expansion of wallet UX capabilities</li>
            <li>
              Maturing infrastructure for dispute resolution and modular smart
              accounts
            </li>
          </ul>
          <p>
            This creates an environment where protected transfers can emerge as
            a standard pattern.
          </p>
        </section>

        <section className="content-block">
          <h3>Relationship to Everyday Wallet</h3>
          <p>Everyday Wallet is a product built on Sew.</p>
          <p>It demonstrates:</p>
          <ul>
            <li>Protected payment flows</li>
            <li>Real-world coordination use cases</li>
            <li>UX patterns for safe transfers</li>
          </ul>
          <p>The protocol itself remains neutral and open to all interfaces.</p>
        </section>

        <section className="content-block">
          <h3>Vision</h3>
          <p>Ethereum introduced programmable money.</p>
          <p>Sew explores programmable settlement.</p>
          <p>
            By making protection a default option at the moment of transfer, the
            protocol aims to support safer coordination between participants
            globally.
          </p>
          <p>
            The long-term ambition is to make protected transfers a standard
            part of how value moves on Ethereum.
          </p>
        </section>

        <section className="content-block">
          <h3>Summary</h3>
          <p>
            Sew Protocol introduces a new primitive: a payment that can be held
            and settled under rules without custody.
          </p>
          <p>
            If adopted broadly, this pattern could support a new layer of safer,
            trust-minimized commerce on Ethereum.
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
        .defensibility-item {
          margin-top: 2rem;
          padding: 1.5rem;
          background: #fafafa;
          border-radius: var(--radius);
          border: 1px solid #eaeaea;
        }
        .defensibility-item h4 {
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
