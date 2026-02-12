import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Developer() {
  return (
    <>
      <Header titlePre="Build on Sew" />
      <div className={sharedStyles.layout}>
        <section className="header-section">
          <h1>Build on Sew Protocol</h1>
          <h2 className="tagline">Developer Guide</h2>
          <p className="intro">
            Sew Protocol introduces protected transfers as a composable
            primitive for Ethereum applications. Developers can integrate
            escrow-backed payments directly into wallets, marketplaces, and
            coordination tools.
          </p>
        </section>

        <section className="content-block">
          <h3>Core concepts</h3>
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
          <h3>Escrow creation</h3>
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
  OFF,        // No yield generation
  TO_SENDER,  // Yield goes to sender
  TO_RECIPIENT, // Yield goes to recipient
  SPLIT       // Split between parties
}

// Create an escrow
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
        </section>

        <section className="content-block">
          <h3>Escrow states</h3>
          <p>Every escrow moves through defined states:</p>

          <div className="code-block">
            <pre>{`enum EscrowState {
  NONE,       // Uninitialized
  PENDING,    // Created, awaiting action
  DISPUTED,   // Under dispute resolution
  RELEASED,   // Funds sent to recipient
  REFUNDED,   // Funds returned to sender
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
          <h3>Release interactions</h3>
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
          <h3>Dispute handling</h3>
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
          <h3>Querying escrow details</h3>
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
          <h3>Module types</h3>
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
                  <strong>Cancellation Strategy</strong>
                </td>
                <td>Define cancel rules</td>
                <td>ICancellationStrategy</td>
              </tr>
              <tr>
                <td>
                  <strong>Yield Generation</strong>
                </td>
                <td>Generate yield on escrowed funds</td>
                <td>IYieldGenerationModule</td>
              </tr>
              <tr>
                <td>
                  <strong>Yield Distribution</strong>
                </td>
                <td>Allocate generated yield</td>
                <td>IYieldDistributionModule</td>
              </tr>
            </tbody>
          </table>

          <p>
            Modules are selected at escrow creation and remain fixed for that
            escrow's lifetime.
          </p>
        </section>

        <section className="content-block">
          <h3>Integration checklist</h3>
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
        </section>

        <section className="content-block">
          <h3>Event references</h3>
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

        <section className="content-block">
          <h3>Safety guarantees</h3>
          <p>When building on Sew, these invariants hold:</p>
          <ul>
            <li>Your application never holds custody of funds</li>
            <li>Settlement follows predefined rules only</li>
            <li>Governance cannot modify active escrows</li>
            <li>No role can arbitrarily redirect funds</li>
            <li>Module changes only affect future escrows</li>
          </ul>
        </section>

        <section className="content-block">
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
                  <Link href="/contracts">
                    <a>See contract addresses</a>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>DefaultResolutionModule</td>
                <td>
                  <Link href="/contracts">
                    <a>See contract addresses</a>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>DefaultReleaseStrategy</td>
                <td>
                  <Link href="/contracts">
                    <a>See contract addresses</a>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>AaveYieldModule</td>
                <td>
                  <Link href="/contracts">
                    <a>See contract addresses</a>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>ModuleRegistry</td>
                <td>
                  <Link href="/contracts">
                    <a>See contract addresses</a>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            See{' '}
            <Link href="/contracts">
              <a>Contract Addresses</a>
            </Link>{' '}
            for deployed testnet contracts.
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
            See{' '}
            <Link href="/technical">
              <a>Technical Resources</a>
            </Link>{' '}
            for documentation links.
          </p>
        </section>

        <section className="content-block">
          <h3>Summary</h3>
          <p>
            Sew provides a reusable primitive: payments that can be held,
            coordinated, and settled under rules.
          </p>
          <p>
            It removes the need to build escrow logic, custody systems, and
            settlement enforcement from scratch.
          </p>
          <p>
            See{' '}
            <Link href="/fees">
              <a>Fees</a>
            </Link>{' '}
            and{' '}
            <Link href="/protocol-limits">
              <a>Protocol Limits</a>
            </Link>{' '}
            for complete parameter details.
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
          background: #1a1a1a;
          color: #e0e0e0;
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
        .address-table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
        }
        .module-table th,
        .module-table td,
        .address-table th,
        .address-table td {
          text-align: left;
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #eaeaea;
        }
        .module-table th,
        .address-table th {
          font-weight: 600;
          background: #fafafa;
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
