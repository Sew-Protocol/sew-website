import Header from '../../components/header'
import sharedStyles from '../../styles/shared.module.css'
import Link from 'next/link'
export default function DocsIndex() {
  return (
    <>
      <Header titlePre="Documentation" />
      <div className={`${sharedStyles.layout} hero-texture`}>
        <section className="header-section">
          <h1>Documentation</h1>
          <p className="intro">Implementation guides for developers.</p>
        </section>
        <section className="docs-grid">
          <div className="doc-card fabric-panel">
            <h3>
              <Link href="/docs/quickstart">Quickstart</Link>
            </h3>
            <p>Get started in 5 minutes.</p>
          </div>
          <div className="doc-card fabric-panel">
            <h3>
              <Link href="/docs/deployments">Deployments</Link>
            </h3>
            <p>Contract addresses.</p>
          </div>
          <div className="doc-card fabric-panel">
            <h3>
              <Link href="/docs/lifecycle">Core Lifecycle</Link>
            </h3>
            <p>Escrow states and events.</p>
          </div>
          <div className="doc-card fabric-panel">
            <h3>
              <Link href="/docs/examples">Examples</Link>
            </h3>
            <p>Integration patterns.</p>
          </div>
          <div className="doc-card fabric-panel">
            <h3>
              <Link href="/docs/testing">Testing</Link>
            </h3>
            <p>Test strategies.</p>
          </div>
          <div className="doc-card fabric-panel">
            <h3>
              <Link href="/docs/errors">Errors</Link>
            </h3>
            <p>Error codes.</p>
          </div>
        </section>
      </div>
      <style jsx>{`
        .header-section {
          text-align: center;
          padding: 4rem 2rem;
        }
        .docs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .doc-card h3 {
          font-size: 1.1rem;
        }
        .doc-card p {
          color: var(--accents-2);
          font-size: 0.9rem;
        }
      `}</style>
    </>
  )
}
