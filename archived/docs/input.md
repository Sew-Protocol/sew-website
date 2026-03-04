# Sew Protocol: Website Architecture & Content Outline
**Project:** high-quality, public-facing Next.js website
**Target Deployment:** Vercel

---

## 1. Information Architecture (Sitemap)

- **Home (`/`)**: High-level value prop, "How it works" summary, and CTAs.
- **Architecture (`/architecture`)**: Technical deep-dive into the deterministic escrow model.
- **Security (`/security`)**: Security model, containment logic, and risk localized strategies.
- **Governance (`/governance`)**: Protocol evolution and module upgrade paths.
- **Docs (`/docs`)**: Integration guides for developers and builders (links to Notion-powered blog/docs).
- **Ecosystem (`/ecosystem`)**: Showcase of Everyday Wallet and other integrations.

---

## 2. Page-by-Page Content Strategy

### 2.1 Homepage (`/`)
*Goal: Establish trust and clarity within the first 5 seconds.*

#### Hero Section
- **Heading**: Sew Protocol
- **Sub-heading**: Payment protection at the transaction layer.
- **Copy**: A non-custodial escrow architecture for ERC20 transfers on Ethereum. Designed to reduce fraud, contain irreversible user error, and limit systemic smart contract risk.
- **CTAs**: `[How it works]` (Secondary) `[Read the Architecture]` (Primary)

#### Value Proposition Grid (The "What")
- **Protected Transfers**: Moves protection from the application layer to the transaction layer.
- **Non-Custodial**: Funds remain under smart contract control; no intermediary access.
- **Composable**: Interface-agnostic base primitive for wallets and marketplaces.
- **Deterministic**: Execution follows predefined rules encoded at creation.

#### The "Why" (Risk Mitigation)
- **Problem**: Ethereum transactions are irreversible. Errors lead to permanent loss.
- **Solution**: Sew introduces a "Protected" state between initiation and finalization.

#### Reference Interface
- **Section**: "One reference interface is Everyday Wallet, designed for protected everyday payments."
- **CTA**: `[Explore Everyday Wallet]`

---

### 2.2 Architecture (`/architecture`)
*Goal: Technical validation for developers and researchers.*

#### Core Primitives
- **Escrow Contracts**: Self-contained units of value and logic.
- **Release Strategies**: Predefined conditions for fund finalization (e.g., multi-sig, timed-release).
- **Resolution Modules**: Pluggable logic for handling disputes.

#### Design Principles
- **Isolation of Risk**: Each escrow is independent. No cross-contract contagion.
- **Forward-Only Upgrades**: Changes only affect new escrows; existing agreements are immutable.

---

### 2.3 Security (`/security`)
*Goal: Transparent assessment of the protocol's safety boundaries.*

- **Containment Layer**: Logic designed to narrow and localize risk rather than eliminate it.
- **Audit Status**: (Placeholder for audit links/reports).
- **Security Posture**: Focus on reducing the "blast radius" of integration failures.

---

## 3. Component Library (Next.js / React)

### UI Components
- **`Layout`**: Global wrapper with `Header` and `Footer`.
- **`Hero`**: Full-width impact section with gradient typography.
- **`FeatureGrid`**: Responsive 3-column layout for value props.
- **`CodeBlock`**: PrismJS-powered syntax highlighting for Solidity examples.
- **`CallToAction`**: High-contrast buttons for primary conversions.
- **`BentoGrid` (Optional)**: For a modern, high-quality visual feel in the "How it helps" section.

### Navigation (`Header`)
- Links: `Architecture`, `Security`, `Governance`, `Docs`.
- Action: `Launch App` or `Github` link.

---

## 4. Technical Configuration (Vercel Ready)

### SEO & Metadata (`next-env.d.ts` / `_app.tsx`)
- **Title**: Sew Protocol | Protected Ethereum Transfers
- **Description**: Non-custodial escrow architecture for ERC20 transfers on Ethereum. Reduce fraud and contain user error.
- **OpenGraph**: Custom OG images per page (can be handled via `/api/asset` in current codebase).

### Deployment
- **Platform**: Vercel
- **Environment Variables**:
  - `NOTION_TOKEN`: For pulling documentation from Notion.
  - `BLOG_INDEX_ID`: For the documentation/blog root.
- **Build Command**: `next build && node .next/server/build-rss.js`

---

## 5. Visual Identity (Design Tokens)

- **Tone**: Ethereum-native, minimalist, high-reliability.
- **Palette**: Dark mode primary, deep indigos/slates with neon teal or violet accents for "protection" status.
- **Typography**: Inter or San Francisco for readability; Mono for technical specs.

---

## 6. Content Draft (Refined)

### Vision Statement
"Ethereum made programmable money possible. Sew explores what happens when payments themselves become programmable agreements."

### The Goal
Establishing a safer default pattern where protection is needed, without replacing the efficiency of direct transfers.