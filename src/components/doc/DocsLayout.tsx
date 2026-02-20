import Header from '../header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'
const docPages: { title: string; href: string }[] = [
  { title: 'Quickstart', href: '/docs/quickstart' },
  { title: 'Deployments', href: '/docs/deployments' },
  { title: 'Core Lifecycle', href: '/docs/lifecycle' },
  { title: 'Examples', href: '/docs/examples' },
  { title: 'Testing', href: '/docs/testing' },
  { title: 'Errors', href: '/docs/errors' },
]
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header titlePre="Documentation" />
      <div className={`${sharedStyles.layout} docs-layout`}>
        <aside className="docs-sidebar">
          <nav className="docs-nav">
            <h4>Documentation</h4>
            <ul>
              {docPages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href}>{page.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="docs-content">
          <article className="docs-article">{children}</article>
        </main>
      </div>
      <style jsx>{`
        .docs-layout {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 3rem;
          padding: 2rem 3rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        .docs-sidebar {
          position: sticky;
          top: 2rem;
        }
        .docs-nav h4 {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accents-3);
          margin-bottom: 1rem;
        }
        .docs-nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .docs-nav li {
          margin-bottom: 0.5rem;
        }
        .docs-nav a {
          color: var(--accents-2);
          text-decoration: none;
          font-size: 0.9rem;
        }
        .docs-content {
          min-width: 0;
        }
        .docs-article {
          max-width: 800px;
        }
      `}</style>
    </>
  )
}
