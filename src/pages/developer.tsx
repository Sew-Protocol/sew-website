import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Developer() {
  return (
    <>
      <Header titlePre="Build on Sew" />
      <div className={`${sharedStyles.layout} hero-texture`}>
        <section className="header-section stitched">
          <h1>Build on Sew Protocol</h1>
          <h2 className="tagline">Developer Guide</h2>
          <p className="intro">
            Sew Protocol introduces protected transfers as a composable
            primitive for Ethereum applications. Developers can integrate
            escrow-backed transfers directly into wallets, marketplaces, and
            coordination tools.
          </p>
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
            <a href="#safety-guarantees">Safety Guarantees</a>
            <a href="#contracts">Contracts</a>
          </div>
        </div>

        <section className="content-block">
          <h3>📖 Core concepts</h3>
          <p>
            At its core, Sew provides a settlement pattern where tokens are held
            until conditions are met.
          </p>
          <p>The protocol handles:</p>
          <ul>
            <li>Escrow custody under defined conditions</li>
            <li>Deterministic release flows</li>
            <li>Dispute resolution pathways</li>
            <li>Optional yield generation</li>
            <li>Forward-compatible module evolution</li>
          </ul>
          <p className="key-concept">
            Each escrow captures its configuration at creation and cannot be
            changed. Governance changes only affect future escrows, never
            existing ones.
          </p>
        </section>

        <section className="content-block">
          <h3>🏗️ Escrow creation</h3>
          <p>Creating an escrow requires defining the terms upfront:</p>

          <div className="code-block">
            <pre>{`interface EscrowSettings {
  // Custom resolver override (address(0) = use default)
  customResolver: address
  // Address authorized to release (address(0) = sender only)
  releaseAddress: address
  // Yield configuration preset
  yieldPreset: YieldPreset
  // Unix timestamp for auto-release (0 = disabled)
  autoReleaseTime: uint256
  // Unix timestamp for auto-cancel (0 = disabled)
  autoCancelTime: uint256
}

enum YieldPreset {
  OFF,        // No yield generation (default)
  TO_SENDER   // Yield goes to sender
}

// Create an escrow with default settings
function createEscrow(
  address token,
  address to,
  uint256 amount,
  EscrowSettings memory settings
) external returns (uint256 workflowId)`}</pre>
          </div>

          <p>
            The function returns a workflowId that identifies this escrow
            uniquely.
          </p>

          <h4>Creating with default settings</h4>
          <p>Use default settings for the simplest integration:</p>

          <div className="code-block">
            <pre>{`// TypeScript SDK
const settings = EscrowSettingsFactory.default();
await escrow.createEscrow(to, amount, settings);

// Solidity integrators
EscrowSettings memory settings = SettingsValidationLibrary.getDefaultSettings();
escrow.createEscrow(to, amount, settings);`}</pre>
          </div>

          <h4>EscrowSettings explained</h4>
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
                <td>
                  Override the default dispute resolver with a custom address
                </td>
                <td>address(0) = use protocol default</td>
              </tr>
              <tr>
                <td>
                  <code>releaseAddress</code>
                </td>
                <td>Which address can release funds (beyond sender)</td>
                <td>address(0) = sender only</td>
              </tr>
              <tr>
                <td>
                  <code>yieldPreset</code>
                </td>
                <td>How generated yield is distributed</td>
                <td>OFF (no yield)</td>
              </tr>
              <tr>
                <td>
                  <code>autoReleaseTime</code>
                </td>
                <td>Unix timestamp when funds auto-release to recipient</td>
                <td>0 = disabled</td>
              </tr>
              <tr>
                <td>
                  <code>autoCancelTime</code>
                </td>
                <td>
                  Unix timestamp when escrow auto-cancels (sender gets refund)
                </td>
                <td>0 = disabled</td>
              </tr>
            </tbody>
          </table>

          <h4>Common configurations</h4>
          <div className="code-block">
            <pre>{`// Simple transfer - sender releases manually
settings = {
  customResolver: address(0),
  releaseAddress: address(0),
  yieldPreset: YieldPreset.OFF,
  autoReleaseTime: 0,
  autoCancelTime: 0
}

// Time-based release - auto-releases after 7 days
settings = {
  customResolver: address(0),
  releaseAddress: address(0),
  yieldPreset: YieldPreset.OFF,
  autoReleaseTime: block.timestamp + 7 days,
  autoCancelTime: 0
}

// Yield to sender - funds earn yield while locked
settings = {
  customResolver: address(0),
  releaseAddress: address(0),
  yieldPreset: YieldPreset.TO_SENDER,
  autoReleaseTime: 0,
  autoCancelTime: 0
}`}</pre>
          </div>

          <p className="learn-more">
            <Link href="/docs/quickstart">See full quickstart guide →</Link>
          </p>
        </section>

        <section id="escrow-states" className="content-block">
          <h3>🔄 Escrow states</h3>
          <p>Every escrow moves through defined states:</p>

          <div className="code-block">
            <pre>{`enum EscrowState {
  NONE,       // Uninitialized
  PENDING,    // Created, awaiting action
  RELEASED,   // Funds sent to recipient
  REFUNDED,   // Funds returned to sender
  DISPUTED,   // Under dispute resolution
  RESOLVED    // Resolver determined outcome
}

// Check escrow state
function getEscrowState(uint256 workflowId) external view returns (EscrowState)`}</pre>
          </div>

          <p>
            Once an escrow reaches RELEASED, REFUNDED, or RESOLVED, it is
            complete and irreversible.
          </p>
        </section>

        <section className="content-block">
          <h3>✅ Release interactions</h3>
          <p>Funds can be released in several ways:</p>

          <div className="code-block">
            <pre>{`// Sender releases at any time
function releaseEscrow(uint256 workflowId) external

// Release after conditions are met (automatic or triggered)
function automateTimedActions(uint256 workflowId) external returns (bool)

// Query if release is currently allowed
function canRelease(
  uint256 workflowId,
  address caller,
  bytes calldata escrowData
) external view returns (bool allowed, uint8 reasonCode)`}</pre>
          </div>

          <p>
            The release strategy determines authorization. Default strategy
            allows sender to release anytime.
          </p>
        </section>

        <section className="content-block">
          <h3>⚖️ Dispute handling</h3>
          <p>Disputes pause normal release and invoke resolution:</p>

          <div className="code-block">
            <pre>{`// Open a dispute
function raiseDispute(uint256 workflowId) external

// Escalate to next resolution level
function escalateDispute(uint256 workflowId) external

// Execute a pending resolution
function executePending(uint256 workflowId) external

// Query resolution status
function getResolutionStatus(uint256 workflowId) external view returns (
  address resolver,
  uint8 level,
  bool hasResolution,
  uint256 appealDeadline
)`}</pre>
          </div>

          <p>
            Two resolution modes are available: single trusted resolver and
            escalating decentralized resolution.
          </p>
        </section>

        <section className="content-block">
          <h3>🔍 Querying escrow details</h3>
          <p>Read interface for integration:</p>

          <div className="code-block">
            <pre>{`struct EscrowTransfer {
  address token;           // ERC20 token address
  address to;            // Recipient
  address from;          // Sender
  address disputeResolver;// Assigned resolver
  uint256 amountAfterFee; // Amount held in escrow
  uint64 autoReleaseTime; // Auto-release timestamp
  uint64 autoCancelTime; // Auto-cancel timestamp
  EscrowState escrowState;
  SenderStatus senderStatus;
  RecipientStatus recipientStatus;
}

// Get full escrow details
function getEscrowDetails(uint256 workflowId) external view returns (EscrowTransfer memory)

// Get module snapshot for this escrow
function getModuleSnapshot(uint256 workflowId) external view returns (
  address resolutionModule,
  address releaseStrategy,
  address yieldGenerationModule,
  address yieldDistributionModule,
  uint256[4] memory fees // [yieldProtocol, appealBond, escrow, unused]
)`}</pre>
          </div>
        </section>

        <section className="content-block">
          <h3>🧩 Module types</h3>
          <p>Sew uses pluggable modules for extensibility:</p>

          <table className="module-table">
            <thead>
              <tr>
                <th>Module Type</th>
                <th>Purpose</th>
                <th>Interface</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Resolution Module</strong>
                </td>
                <td>Handle disputes, determine outcomes</td>
                <td>IResolutionModule</td>
              </tr>
              <tr>
                <td>
                  <strong>Release Strategy</strong>
                </td>
                <td>Control release authorization</td>
                <td>IReleaseStrategy</td>
              </tr>
              <tr>
                <td>
                  <strong>Yield Module</strong>
                </td>
                <td>Generate yield on escrowed funds</td>
                <td>IYieldModule</td>
              </tr>
            </tbody>
          </table>

          <p>
            Modules are selected at escrow creation and remain fixed for that
            escrow's lifetime.
          </p>
          <p className="learn-more">
            <Link href="/modules">Learn more about modules →</Link>
          </p>
        </section>

        <section className="content-block">
          <h3>✔️ Integration checklist</h3>
          <ol>
            <li>
              <strong>Import interfaces</strong> — Include Sew interface
              contracts for type safety
            </li>
            <li>
              <strong>Handle approvals</strong> — Users must approve token
              spending for escrow creation
            </li>
            <li>
              <strong>Monitor states</strong> — Listen for escrow state change
              events
            </li>
            <li>
              <strong>Guide users</strong> — Show pending escrows and available
              actions
            </li>
            <li>
              <strong>Handle disputes</strong> — Provide UI for dispute
              initiation and resolution
            </li>
            <li>
              <strong>Support yield</strong> — Display yield accrued if enabled
            </li>
          </ol>
          <p className="learn-more">
            <Link href="/docs/guides">See integration guides →</Link>
          </p>
        </section>

        <section className="content-block">
          <h3>📡 Event references</h3>
          <p>Key events to watch:</p>

          <div className="code-block">
            <pre>{`// Escrow lifecycle events
event EscrowCreated(
  uint256 indexed workflowId,
  address indexed token,
  address indexed from,
  address to,
  uint256 amount,
  uint256 amountAfterFee,
  uint256 fee
);

event EscrowStateChanged(
  uint256 indexed workflowId,
  EscrowState fromState,
  EscrowState toState
);

event EscrowResolved(
  uint256 indexed workflowId,
  address indexed disputeResolver,
  bytes32 resolutionHash
);

// Fee events
event ProtocolFeeCollected(
  uint8 indexed kind,      // 0 = yield, 1 = appeal bond
  uint256 indexed workflowId,
  address indexed token,
  uint256 grossAmount,
  uint256 feeBps,
  uint256 feeAmount
);`}</pre>
          </div>
        </section>

        <section id="safety-guarantees" className="content-block">
          <h3>🛡️ Safety guarantees</h3>
          <p>When building on Sew, these invariants hold:</p>
          <ul>
            <li>Your application never holds custody of funds</li>
            <li>Settlement follows predefined rules only</li>
            <li>Governance cannot modify active escrows</li>
            <li>No role can arbitrarily redirect funds</li>
            <li>Module changes only affect future escrows</li>
          </ul>
        </section>

        <section id="contracts" className="content-block">
          <h3>Contract addresses</h3>
          <p>Mainnet addresses (Base):</p>
          <table className="address-table">
            <thead>
              <tr>
                <th>Contract</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>EscrowVault (default)</td>
                <td>
                  <Link href="/contracts">See contract addresses</Link>
                </td>
              </tr>
              <tr>
                <td>DefaultResolutionModule</td>
                <td>
                  <Link href="/contracts">See contract addresses</Link>
                </td>
              </tr>
              <tr>
                <td>DefaultReleaseStrategy</td>
                <td>
                  <Link href="/contracts">See contract addresses</Link>
                </td>
              </tr>
              <tr>
                <td>AaveYieldModule</td>
                <td>
                  <Link href="/contracts">See contract addresses</Link>
                </td>
              </tr>
              <tr>
                <td>ModuleRegistry</td>
                <td>
                  <Link href="/contracts">See contract addresses</Link>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            See <Link href="/contracts">Contract Addresses</Link> for deployed
            testnet contracts.
          </p>
        </section>

        <section className="content-block">
          <h3>Resources</h3>
          <ul>
            <li>
              <strong>GitHub</strong>: Full source code, tests, and deployment
              scripts
            </li>
            <li>
              <strong>ABIs</strong>: Contract interfaces for integration
            </li>
            <li>
              <strong>SDK</strong>: TypeScript/JavaScript utilities (coming
              soon)
            </li>
            <li>
              <strong>Examples</strong>: Reference implementations in the
              repository
            </li>
          </ul>
          <p>
            See <Link href="/technical">Technical Resources</Link> for
            documentation links.
          </p>
        </section>

        <section id="dispute-architecture" className="content-block">
          <h3>Dispute architecture</h3>
          <p>
            If parties disagree about an escrow outcome, the protocol provides
            structured, onchain resolution mechanisms. This section covers the
            technical foundations.
          </p>

          <h4 className="subsection-title">Resolver interfaces</h4>
          <p>
            A resolver is a smart contract or EOA that receives dispute evidence
            and returns a decision. Resolvers implement a standard interface:
          </p>
          <ul>
            <li>
              <code>resolve(escrowId, evidence) → outcome</code> where outcome
              is one of RELEASE or REFUND
            </li>
            <li>Decisions are onchain callable and immutable once recorded</li>
            <li>Resolvers can be custom per-escrow or protocol-appointed</li>
          </ul>

          <h4 className="subsection-title">State machine and appeals</h4>
          <p>
            Disputes follow a deterministic state machine with optional appeal
            escalation:
          </p>
          <ul>
            <li>
              <strong>Level 1 (Standard):</strong> Default or custom resolver
              decides
            </li>
            <li>
              <strong>Level 2 (Senior):</strong> Higher-tier resolver reviews
              appealed Level 1 decisions
            </li>
            <li>
              <strong>Level 3 (Final):</strong> External authority; no further
              appeal
            </li>
          </ul>
          <p>
            At each level, disputants can appeal by posting a bond. If their
            appeal succeeds, they recover the bond; if it fails, they lose it.
          </p>

          <h4 className="subsection-title">Bond mechanics</h4>
          <ul>
            <li>v1: No bonds required (single trusted resolver)</li>
            <li>
              v2: Standard resolvers post $250; senior resolvers post $25k
            </li>
            <li>v3: Bonds are capital-weighted with fee tiers and slashing</li>
          </ul>

          <h4 className="subsection-title">Deep technical reference</h4>
          <p>
            For contract interfaces, state enums, appeal bonding mechanics,
            slashing calculations, and module isolation details, see:
          </p>
          <ul>
            <li>
              <Link href="/docs/dispute-resolution/overview">Overview</Link> —
              Core concepts and workflows
            </li>
            <li>
              <Link href="/docs/dispute-resolution/resolution-modes">
                Resolution Modes
              </Link>{' '}
              — v1/v2/v3 comparison matrix
            </li>
            <li>
              <Link href="/docs/dispute-resolution/resolver-guide">
                Resolver Guide
              </Link>{' '}
              — Setup, bonding, and operations
            </li>
            <li>
              <Link href="/docs/dispute-resolution/economic-model">
                Economic Model
              </Link>{' '}
              — Parameters, bond calculations, slashing rates
            </li>
            <li>
              <Link href="/docs/dispute-resolution/escalation-details">
                Escalation Details
              </Link>{' '}
              — Multi-level flows and scenarios
            </li>
          </ul>
        </section>

        <section className="content-block">
          <h3>📋 Summary</h3>
          <p>
            Sew provides a reusable primitive: transactions that can be held,
            coordinated, and settled under rules.
          </p>
          <p>
            It removes the need to build escrow logic, custody systems, and
            settlement enforcement from scratch.
          </p>
          <p>
            See <Link href="/fees">Fees</Link> and{' '}
            <Link href="/protocol-limits">Protocol Limits</Link> for complete
            parameter details.
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
        .code-block {
          background: #0e1a1d;
          color: #b0c8cc;
          padding: 1.5rem;
          border-radius: 8px;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        .code-block pre {
          margin: 0;
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .module-table,
        .address-table,
        .settings-table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
        }
        .module-table th,
        .module-table td,
        .address-table th,
        .address-table td,
        .settings-table th,
        .settings-table td {
          text-align: left;
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #2a3a3e;
        }
        .module-table th,
        .address-table th,
        .settings-table th {
          font-weight: 600;
          background: #1b2a2e;
        }
        .settings-table code {
          background: #1b2a2e;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-size: 0.85rem;
        }
        .learn-more {
          margin-top: 1.5rem;
        }
        .learn-more a {
          color: #7adddc;
          font-weight: 500;
        }
        .learn-more a:hover {
          text-decoration: underline;
        }
        /* ── Safety callout ─────────────────────────────────────────────────── */
        .safety-callout {
          max-width: 800px;
          margin: 0 auto 1rem;
          padding: 1.25rem 1.5rem;
          border: 1.5px solid var(--accents-2);
          border-radius: var(--radius);
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1.5rem;
          align-items: start;
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
          transition: color 0.15s;
        }
        .safety-links a:hover {
          color: #7adddc;
        }
        @media (max-width: 700px) {
          .safety-callout {
            grid-template-columns: 1fr;
          }
        }
        .subsection-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }
        @media (max-width: 600px) {
          .content-block {
            padding: 0 1rem;
          }
          .code-block {
            padding: 1rem;
          }
          .code-block pre {
            font-size: 0.8rem;
          }
          .module-table,
          .address-table {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </>
  )
}
