import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Developer() {
  return (
    <>
      <Header titlePre="Build on Sew" />
      <div>
        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section
          className="hero"
          style={{
            backgroundImage: "url('/images/abstract-texture.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="hero-inner">
            <div className="hero-text">
              <span className="hero-eyebrow">Builder Documentation</span>
              <h1>Build on Sew Protocol</h1>
              <h2 className="tagline">Developer Guide</h2>
              <p className="description">
                Sew Protocol introduces protected transfers as a composable
                primitive for Ethereum applications. Integrate escrow-backed
                transfers directly into wallets, marketplaces, and coordination
                tools.
              </p>
            </div>
          </div>
        </section>

        {/* ── Safety callout + in-page nav ─────────────────────────────────── */}
        <div className="safety-callout">
          <div className="safety-guarantees">
            <span className="safety-title">Builder guarantees</span>
            <ul>
              <li>Your application never holds custody of funds</li>
              <li>Settlement follows predefined rules only</li>
              <li>Governance cannot modify active escrows</li>
              <li>No role can arbitrarily redirect funds</li>
              <li>Module changes only affect future escrows</li>
            </ul>
          </div>
          <div className="safety-links">
            <span className="safety-nav-label">On this page:</span>
            <a href="#escrow-states">Escrow States</a>
            <a href="#dispute-architecture">Dispute Architecture</a>
            <a href="#module-types">Module Types</a>
            <a href="#contracts">Contracts</a>
          </div>
        </div>

        {/* ── 3. CREATION ─────────────────────────────────────────────────── */}
        <section className="content-section">
          <h3>Escrow creation</h3>
          <p>Creating an escrow requires defining the terms upfront:</p>

          <div className="code-block">
            <pre>{`interface EscrowSettings {
  customResolver: address   // Override default (address(0) = default)
  releaseAddress: address   // Authorized to release (address(0) = sender)
  yieldPreset: YieldPreset  // OFF or TO_SENDER
  autoReleaseTime: uint256  // Unix timestamp (0 = disabled)
  autoCancelTime: uint256   // Unix timestamp (0 = disabled)
}

function createEscrow(
  address token,
  address to,
  uint256 amount,
  EscrowSettings memory settings
) external returns (uint256 workflowId)`}</pre>
          </div>

          <table className="settings-table">
            <thead>
              <tr>
                <th>Setting</th>
                <th>What it does</th>
                <th>Default value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>customResolver</code>
                </td>
                <td>Override default resolver with a custom address</td>
                <td>address(0)</td>
              </tr>
              <tr>
                <td>
                  <code>releaseAddress</code>
                </td>
                <td>Which address can release funds (beyond sender)</td>
                <td>address(0)</td>
              </tr>
              <tr>
                <td>
                  <code>autoReleaseTime</code>
                </td>
                <td>Timestamp when funds auto-release to recipient</td>
                <td>0 (disabled)</td>
              </tr>
            </tbody>
          </table>

          {process.env.NEXT_PUBLIC_SHOW_DOCUMENTATION === 'true' && (
            <p className="learn-more">
              <Link href="/docs/quickstart">See full quickstart guide →</Link>
            </p>
          )}
        </section>

        {/* ── 4. STATES ───────────────────────────────────────────────────── */}
        <section id="escrow-states" className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Escrow states</h3>
            <p>Every escrow moves through a strict state machine:</p>
            <div className="guarantees-grid">
              <div className="guarantee-card fabric-panel">
                <h4>PENDING</h4>
                <p>Created and funded, awaiting release or dispute.</p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>DISPUTED</h4>
                <p>Normal release paused; awaiting resolver decision.</p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>RELEASED / REFUNDED</h4>
                <p>Final settlement complete. Tokens distributed.</p>
              </div>
              <div className="guarantee-card fabric-panel">
                <h4>RESOLVED</h4>
                <p>Resolver determined outcome. Final state.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. MODULES ──────────────────────────────────────────────────── */}
        <section id="module-types" className="content-section">
          <h3>Module types</h3>
          <p>Sew uses pluggable modules for extensibility:</p>

          <div className="principles-grid">
            <div className="principle fabric-panel seam-accent">
              <h4>Resolution Module</h4>
              <p>
                Handles disputes and determines outcomes. Standard or custom
                resolvers.
              </p>
            </div>
            <div className="principle fabric-panel seam-accent">
              <h4>Release Strategy</h4>
              <p>
                Controls release authorization (sender, time-based,
                conditional).
              </p>
            </div>
            <div className="principle fabric-panel seam-accent">
              <h4>Yield Module</h4>
              <p>
                Manages optional yield generation (e.g., Aave V3) on locked
                funds.
              </p>
            </div>
          </div>

          <p className="learn-more" style={{ marginTop: '2rem' }}>
            <Link href="/architecture#the-module-system">
              Learn more about modules →
            </Link>
          </p>
        </section>

        {/* ── 6. CHECKLIST ────────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Integration checklist</h3>
            <div className="principles-grid">
              <div className="principle">
                <h4>1. Import interfaces</h4>
                <p>Include Sew interface contracts for full type safety.</p>
              </div>
              <div className="principle">
                <h4>2. Handle approvals</h4>
                <p>Ensure users approve token spending for creation.</p>
              </div>
              <div className="principle">
                <h4>3. Monitor states</h4>
                <p>Listen for EscrowStateChanged events to update your UI.</p>
              </div>
              <div className="principle">
                <h4>4. Handle disputes</h4>
                <p>Provide interface for dispute initiation and resolution.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. CONTRACTS ────────────────────────────────────────────────── */}
        <section id="contracts" className="content-section">
          <h3>Contract addresses</h3>
          <p>Base Sepolia (Testnet):</p>
          <table className="settings-table">
            <thead>
              <tr>
                <th>Contract</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>EscrowVault</code>
                </td>
                <td>Core protocol engine and state management</td>
              </tr>
              <tr>
                <td>
                  <code>ModuleRegistry</code>
                </td>
                <td>Registry of approved pluggable modules</td>
              </tr>
            </tbody>
          </table>
          <p className="learn-more">
            <Link href="/contracts">See all contract addresses →</Link>
          </p>
        </section>

        {/* ── 8. RESOURCES ────────────────────────────────────────────────── */}
        <section id="resources" className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Reference materials</h3>
            <div className="principles-grid">
              {process.env.NEXT_PUBLIC_SHOW_DOCUMENTATION === 'true' && (
                <div className="principle">
                  <h4>Technical Docs</h4>
                  <p>
                    Detailed smart contract reference and implementation guides.
                  </p>
                  <Link
                    href="/docs/reference"
                    style={{ fontSize: '0.85rem', color: 'var(--primary)' }}
                  >
                    Technical Reference →
                  </Link>
                </div>
              )}
              <div className="principle">
                <h4>Security Model</h4>
                <p>
                  Deep dive into invariants, threat model, and isolation
                  properties.
                </p>
                <Link
                  href="/security"
                  style={{ fontSize: '0.85rem', color: 'var(--primary)' }}
                >
                  Security Model →
                </Link>
              </div>
              <div className="principle">
                <h4>GitHub</h4>
                <p>Source code, audit reports, and implementation examples.</p>
                <Link
                  href="https://github.com/sew-protocol"
                  style={{ fontSize: '0.85rem', color: 'var(--primary)' }}
                >
                  Sew GitHub →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. FINAL CTA ────────────────────────────────────────────────── */}
        <section
          className="section-breakout cta-breakout"
          style={{
            backgroundImage: "url('/images/stitch-texture.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          }}
        >
          <div className="breakout-inner cta-inner">
            <h3>Ready to secure your transfers?</h3>
            <p>
              Explore the contract interfaces, state machines, and integration
              patterns.
            </p>
            <div className="cta-btns">
              <Link href="/architecture" className="cta-btn primary">
                Architecture
              </Link>
              <Link href="/contracts" className="cta-btn">
                Contracts
              </Link>
            </div>
          </div>
        </section>

        <section className="page-meta">
          <p>Last updated: February 2026</p>
        </section>
      </div>

      <style jsx>{`
        .tagline {
          font-size: 1.15rem;
          font-weight: 400;
          color: var(--accents-2);
          margin: 0 0 1.25rem;
          line-height: 1.5;
        }
        .description {
          font-size: 0.92rem;
          color: var(--accents-3);
          margin: 0 0 1.5rem;
          line-height: 1.75;
          max-width: 480px;
        }
        .content-section {
          margin: 0 auto;
          max-width: 800px;
          padding: 4rem 2rem;
        }
        .code-block {
          background: #0e1a1d;
          color: #b0c8cc;
          padding: 1.5rem;
          border-radius: 8px;
          overflow-x: auto;
          margin: 1.5rem 0;
          border: 1px solid rgba(122, 221, 220, 0.1);
        }
        .code-block pre {
          margin: 0;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          line-height: 1.5;
        }
        .settings-table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          font-size: 0.9rem;
        }
        .settings-table th,
        .settings-table td {
          text-align: left;
          padding: 0.75rem 1rem;
          border-bottom: 1px solid rgba(122, 221, 220, 0.1);
        }
        .settings-table th {
          font-weight: 600;
          color: var(--accents-3);
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
        }
        .settings-table code {
          color: var(--primary);
        }
        .learn-more a {
          color: var(--primary);
          font-weight: 500;
        }
        .safety-callout {
          max-width: 800px;
          margin: 0 auto 1rem;
          padding: 1.5rem;
          border: 1px solid rgba(122, 221, 220, 0.2);
          border-radius: var(--radius);
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1.5rem;
          background: rgba(122, 221, 220, 0.03);
        }
        .safety-title {
          display: block;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          color: var(--accents-3);
          margin-bottom: 0.6rem;
        }
        .safety-guarantees ul {
          margin: 0;
          padding-left: 1.15rem;
          font-size: 0.84rem;
          color: var(--accents-2);
          line-height: 1.7;
        }
        .safety-links {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          min-width: 170px;
        }
        .safety-nav-label {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          color: var(--accents-3);
          margin-bottom: 0.25rem;
        }
        .safety-links a {
          font-size: 0.84rem;
          color: var(--accents-2);
          text-decoration: none;
          font-weight: 500;
        }
        .safety-links a:hover {
          color: var(--primary);
        }
        .page-meta {
          text-align: center;
          padding: 3rem 2rem;
          color: var(--accents-3);
          font-size: 0.85rem;
        }

        /* ── Shared Grids ── */
        .guarantees-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-top: 1.75rem;
        }
        .guarantees-grid--wide {
          grid-template-columns: repeat(3, 1fr);
        }
        .guarantee-card {
          padding: 1.25rem 1.5rem;
        }
        .guarantee-card h4 {
          margin: 0 0 0.4rem 0;
          font-size: 0.95rem;
          font-weight: 700;
        }
        .guarantee-card p {
          margin: 0;
          font-size: 0.85rem;
          color: var(--accents-3);
          line-height: 1.5;
        }
        .principles-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 2rem;
        }
        .principle {
          padding: 1.5rem;
        }
        .cta-inner {
          text-align: center;
        }
        .cta-inner h3 {
          font-size: 2.2rem;
          font-weight: 900;
          margin: 0 0 0.75rem 0;
          letter-spacing: -0.04em;
          color: #fff;
        }
        .cta-inner p {
          font-size: 1rem;
          color: var(--accents-2);
          max-width: 500px;
          margin: 0 auto 2.5rem;
          line-height: 1.65;
        }

        @media (max-width: 900px) {
          .guarantees-grid--wide {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 700px) {
          .guarantees-grid,
          .guarantees-grid--wide,
          .principles-grid,
          .safety-callout {
            grid-template-columns: 1fr;
          }
          .cta-inner h3 {
            font-size: 1.65rem;
          }
        }
      `}</style>
    </>
  )
}
