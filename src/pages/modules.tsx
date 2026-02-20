import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default function Modules() {
  return (
    <>
      <Header titlePre="Modules" />
      <div className={`${sharedStyles.layout} hero-texture`}>
        <section className="header-section">
          <h1>Module System</h1>
          <h2 className="tagline">Sew Protocol</h2>
          <p className="intro">
            Sew Protocol uses pluggable modules to define escrow behavior. Each
            module is selected at escrow creation and remains immutable for that
            escrow's lifetime.
          </p>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Three Independent Module Types</h3>
          <p>
            Each escrow uses three independent pluggable modules that work
            together:
          </p>

          <div className="module-type">
            <h4>Release Strategy</h4>
            <p>
              Controls when and how funds can be released from escrow. Examples
              include:
            </p>
            <ul>
              <li>
                <strong>Immediate:</strong> Sender can release funds at any time
              </li>
              <li>
                <strong>Time-based:</strong> Funds are automatically released
                after a set period
              </li>
              <li>
                <strong>Conditional:</strong> Release depends on external
                conditions being met
              </li>
            </ul>
            <p>Disputes pause release regardless of the strategy selected.</p>
          </div>

          <div className="module-type">
            <h4>Resolution Module</h4>
            <p>
              Handles dispute escalation and determines outcomes when parties
              disagree. Options include:
            </p>
            <ul>
              <li>
                <strong>Single Resolver:</strong> A trusted third party
                evaluates disputes
              </li>
              <li>
                <strong>Escalating Resolution:</strong> Multiple resolution
                levels with appeal paths
              </li>
              <li>
                <strong>Decentralized:</strong> Governance or community-based
                resolution
              </li>
            </ul>
            <p>
              The resolver has no ability to modify escrow state; they only
              determine principal distribution outcomes.
            </p>
          </div>

          <div className="module-type">
            <h4>Yield Module</h4>
            <p>
              Manages optional yield generation on escrowed funds through
              external protocols. Key characteristics:
            </p>
            <ul>
              <li>
                <strong>Optional:</strong> Yield generation is not required;
                escrows can operate without yield
              </li>
              <li>
                <strong>Protocol-specific:</strong> Each external protocol has
                its own module (Aave, Morpho, Curve, etc.)
              </li>
              <li>
                <strong>Configurable distribution:</strong> Yield can go to
                sender or be disabled (split coming in future releases)
              </li>
              <li>
                <strong>Escapable:</strong> If the external protocol becomes
                unavailable, escrow can unwind positions back to custody
              </li>
            </ul>
            <p>
              The yield module handles all protocol-specific mechanics (deposit,
              track, withdraw). The core escrow handles all distribution policy
              decisions.
            </p>
          </div>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Module Characteristics</h3>

          <div className="characteristic">
            <h4>Selected at Creation</h4>
            <p>
              When an escrow is created, the sender specifies which modules to
              use. All three module types must be selected (or explicitly set to
              "default").
            </p>
          </div>

          <div className="characteristic">
            <h4>Immutable for the Escrow</h4>
            <p>
              Once an escrow is created, its modules cannot be changed. This
              ensures that:
            </p>
            <ul>
              <li>
                Participants know exactly which rules govern their agreement
                from creation
              </li>
              <li>
                Future protocol governance changes don't affect existing escrows
              </li>
              <li>Module upgrades only apply to newly created escrows</li>
            </ul>
          </div>

          <div className="characteristic">
            <h4>Isolated by Escrow</h4>
            <p>
              Module state is completely isolated per escrow. For yield modules
              specifically:
            </p>
            <ul>
              <li>
                Position tracking is namespaced by (escrow address, escrow ID)
              </li>
              <li>
                Two different escrows cannot collide on the same yield module
              </li>
              <li>Only the escrow that created the position can manage it</li>
            </ul>
          </div>

          <div className="characteristic">
            <h4>Snapshotted Configuration</h4>
            <p>
              All module configuration, fees, and behavioral parameters are
              captured at escrow creation and stored immutably. This includes:
            </p>
            <ul>
              <li>Module implementation addresses</li>
              <li>Fee percentages and recipients</li>
              <li>
                Yield distribution settings (sender vs recipient vs split)
              </li>
              <li>Time parameters (dispute windows, release delays, etc.)</li>
            </ul>
          </div>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Yield Module Architecture</h3>
          <p>
            Yield modules implement a common interface (
            <code>IYieldModule</code>) that allows them to work with the core
            escrow without requiring core changes.
          </p>

          <div className="yield-method">
            <h4>
              <code>initializeYield()</code>
            </h4>
            <p>
              Called during escrow creation to deposit principal into the
              external protocol.
            </p>
            <ul>
              <li>Module receives principal from escrow (push model)</li>
              <li>Module deposits into external protocol (e.g., Aave)</li>
              <li>
                Module returns the actual amount accepted (handles
                fee-on-transfer tokens)
              </li>
              <li>
                Escrow stores this "accepted" amount for future yield
                calculation
              </li>
            </ul>
          </div>

          <div className="yield-method">
            <h4>
              <code>unwindToEscrow()</code>
            </h4>
            <p>
              Called during escrow release/cancellation to withdraw funds from
              the external protocol.
            </p>
            <ul>
              <li>
                Module withdraws all funds (principal + accumulated yield) from
                protocol
              </li>
              <li>Module transfers funds back to escrow</li>
              <li>Module returns (principalOut, yieldOut) separately</li>
              <li>Escrow uses these amounts for final distribution</li>
            </ul>
          </div>

          <div className="yield-method">
            <h4>
              <code>emergencyUnwind()</code>
            </h4>
            <p>
              Called if normal withdrawal fails, to recover funds in
              emergencies.
            </p>
            <ul>
              <li>Module attempts to force-withdraw from external protocol</li>
              <li>
                Module must return recovered amount or revert (no ambiguous
                states)
              </li>
              <li>
                Escrow can then attempt recovery or revert with clear error
                message
              </li>
              <li>This ensures funds are never silently lost</li>
            </ul>
          </div>

          <div className="yield-method">
            <h4>
              <code>canHandle()</code>
            </h4>
            <p>
              Preflight check to verify if module supports a token/amount
              combination.
            </p>
            <ul>
              <li>Used by UI to warn users before creating escrow</li>
              <li>
                Not safety-critical; <code>initializeYield()</code> is
                authoritative
              </li>
              <li>Returns (supported, reasonCode) tuple</li>
            </ul>
          </div>

          <div className="yield-method">
            <h4>
              <code>getModuleInfo()</code>
            </h4>
            <p>Returns metadata about the module.</p>
            <ul>
              <li>Module name (e.g., "AaveYieldModule")</li>
              <li>Version (e.g., "2.5.0")</li>
              <li>Protocol ID (e.g., keccak256("aave-v3"))</li>
            </ul>
          </div>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Supported Protocols</h3>

          <div className="protocol">
            <h4>✅ Aave V3</h4>
            <p>
              Fully supported. AaveYieldModule handles all Aave V3 integration
              including deposit/withdraw with aToken conversion.
            </p>
          </div>

          <div className="protocol">
            <h4>⏳ Morpho</h4>
            <p>
              Planned. MorphoYieldModule will provide similar functionality to
              Aave, with slightly simpler mechanics. No core changes required to
              add this.
            </p>
          </div>

          <div className="protocol">
            <h4>⏳ Curve</h4>
            <p>
              Planned for pool-specific deployments. CurveYieldModule will
              manage LP positions with pool-specific configuration.
            </p>
          </div>

          <div className="protocol">
            <h4>❌ Lido (Future)</h4>
            <p>
              Not supported in current version. Lido requires asynchronous
              unstaking queues (1-2 day withdrawal delays), which need new state
              management in the core escrow. Support is planned for a future
              version with dedicated async module support.
            </p>
          </div>

          <div className="protocol">
            <h4>❌ Rocket Pool (Future)</h4>
            <p>
              Not supported in current version. Similar to Lido, requires async
              unbonding. Deferred to future version with async module support.
            </p>
          </div>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Safety Guarantees</h3>
          <p>The module system enforces six critical safety invariants:</p>

          <div className="safety-guarantee">
            <h4>1. No Silent Fund Loss</h4>
            <p>
              Module must return funds to escrow or transaction must revert. If
              withdrawal fails normally, emergencyUnwind is attempted. If both
              fail, transaction reverts and escrow remains locked (allowing
              recovery by other means).
            </p>
          </div>

          <div className="safety-guarantee">
            <h4>2. No Fund Redirect</h4>
            <p>
              Module only receives calls from approved escrow addresses. Module
              state is namespaced by (escrow address, escrow ID). Module only
              sends funds back to msg.sender (the escrow). Two escrows cannot
              collide on the same module.
            </p>
          </div>

          <div className="safety-guarantee">
            <h4>3. Distribution Policy Canonical</h4>
            <p>
              Module returns (principalOut, yieldOut) only. Core escrow decides
              who gets principal, who gets yield, and fee deductions. All
              protocols use identical distribution logic.
            </p>
          </div>

          <div className="safety-guarantee">
            <h4>4. Principal Accounting Correct</h4>
            <p>
              Module tracks actual accepted amount (not requested). This handles
              fee-on-transfer tokens correctly. Yield calculation: received -
              principalDeposited (guaranteed ≥ 0).
            </p>
          </div>

          <div className="safety-guarantee">
            <h4>5. Balance Verification</h4>
            <p>
              Escrow captures balance before unwind and after unwind. Delta
              check proves funds returned on this specific call. Not fooled by
              dust tokens or pre-existing balances.
            </p>
          </div>

          <div className="safety-guarantee">
            <h4>6. emergencyUnwind Strict Semantics</h4>
            <p>
              Module returns amount &gt; 0 or reverts. Never returns 0. Clear
              success/failure states with no ambiguity. Escrow knows exactly
              what was recovered or fails with revert.
            </p>
          </div>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Module Evolution</h3>

          <div className="evolution-phase">
            <h4>v2.5 (Current): Synchronous Protocols</h4>
            <p>
              Aave V3 is the primary launch protocol. Synchronous
              deposit/withdraw in a single transaction.
            </p>
          </div>

          <div className="evolution-phase">
            <h4>v2.5+ (Planned): More Synchronous Protocols</h4>
            <p>
              Morpho, Curve, Compound. All use synchronous withdrawal (funds
              available immediately after unwind call).
            </p>
          </div>

          <div className="evolution-phase">
            <h4>v3 (Future): Asynchronous Protocols</h4>
            <p>
              Lido unstaking, Rocket Pool unbonding, and other protocols with
              queue-based withdrawals. These require multi-transaction unwinding
              and new state tracking in the core escrow.
            </p>
          </div>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Module Immutability & Governance</h3>
          <p>
            Protocol governance can manage modules, but with strict constraints:
          </p>

          <div className="governance-rule">
            <h4>New Modules</h4>
            <p>
              Governance can deploy new module implementations and register
              them. New escrows can opt into new modules. Existing escrows are
              unaffected.
            </p>
          </div>

          <div className="governance-rule">
            <h4>Module Upgrades</h4>
            <p>
              If a critical bug is found in AaveYieldModule, governance can
              deploy a fixed version (AaveYieldModule v2). New escrows use the
              fixed version. Existing escrows continue using the original
              version they selected.
            </p>
          </div>

          <div className="governance-rule">
            <h4>Module Disabling</h4>
            <p>
              Governance can disable a module in emergencies (e.g., if external
              protocol is exploited). This prevents new escrows from using it,
              but doesn't affect existing escrows. Escrows with disabled modules
              can still unwind normally.
            </p>
          </div>

          <div className="governance-rule">
            <h4>Per-Escrow Immutability</h4>
            <p>
              Once an escrow is created, its modules cannot be changed,
              upgraded, or replaced. This is the most important constraint. It
              ensures maximum stability and predictability for all agreements.
            </p>
          </div>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Risk Considerations</h3>
          <p>
            While modules provide strong safety guarantees, yield generation
            inherently involves external protocol risk:
          </p>

          <ul>
            <li>
              <strong>Protocol Risk:</strong> External protocol could be
              exploited or fail
            </li>
            <li>
              <strong>Oracle Risk:</strong> Price feeds used by external
              protocol could be attacked or fail
            </li>
            <li>
              <strong>Governance Risk:</strong> External protocol governance
              could change functionality
            </li>
            <li>
              <strong>Liquidity Risk:</strong> Under extreme market conditions,
              withdrawal might be delayed
            </li>
          </ul>

          <p>Sew mitigates these risks by:</p>

          <ul>
            <li>Allowing governance to set per-protocol exposure caps</li>
            <li>
              Providing emergency unwind mechanisms for immediate fund recovery
            </li>
            <li>
              Keeping principal governance entirely within escrow (independent
              of module)
            </li>
            <li>Maintaining balance verification to prove fund safety</li>
          </ul>

          <p className="learn-more">
            See <Link href="/emergency">Emergency Recovery</Link> for how
            escrows can unwind positions and recover funds.
          </p>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Module Selection Example</h3>
          <p>When creating an escrow with yield:</p>

          <div className="code-example">
            <pre>
              {`Sender creates escrow with:
  - Token: USDC
  - Amount: 1,000 USDC
  - Release Strategy: Time-based (30 days)
  - Resolution Module: Single Resolver
  - Yield Module: Aave V3 (yield goes to sender)

At creation:
  ✓ 1,000 USDC transferred to escrow
  ✓ Escrow calls AaveYieldModule.initializeYield()
  ✓ AaveYieldModule deposits to Aave
  ✓ AaveYieldModule returns 998 USDC accepted (2 USDC fee-on-transfer)
  ✓ Escrow stores 998 as yieldPrincipal

While active (30 days):
  - Aave accrues yield on 998 USDC
  - aToken balance grows
  - No actions needed

On release:
  ✓ 30 days passed, sender can release
  ✓ Escrow calls AaveYieldModule.unwindToEscrow()
  ✓ AaveYieldModule withdraws from Aave (e.g., 1,002 USDC)
  ✓ Yield = 1,002 - 998 = 4 USDC
  ✓ Escrow receives 998 principal + 4 yield
  ✓ Distribution:
     - Principal (998): 100% to recipient
     - Yield (4): 100% to sender
  ✓ Final transfers complete, escrow closes`}
            </pre>
          </div>
        </section>

        <section className="content-block fabric-texture fabric-texture-light">
          <h3>Learn More</h3>
          <ul>
            <li>
              <Link href="/how-it-works">How It Works</Link>- Escrow lifecycle
              and core concepts
            </li>
            <li>
              <Link href="/protocol-limits">Protocol Limits</Link>- Module
              exposure caps and governance constraints
            </li>
            <li>
              <Link href="/emergency">Emergency Recovery</Link>- How escrows
              unwind positions and recover funds
            </li>
            <li>
              <Link href="/security">Security</Link>- Module safety invariants
              and guarantees
            </li>
            <li>
              <Link href="/governance">Governance</Link>- How protocol
              governance manages modules
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
