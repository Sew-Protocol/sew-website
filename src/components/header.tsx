import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const protocolNavItems: {
  label: string
  page?: string
  link?: string
  submenu?: { label: string; page: string }[]
}[] = [
  { label: 'Home', page: '/' },
  { label: 'How It Works', page: '/how-it-works' },
  {
    label: 'Developers',
    page: '/developer',
    submenu: [
      { label: 'Concepts', page: '/architecture' },
      { label: 'Guides', page: '/docs/guides' },
      { label: 'Reference', page: '/docs/reference' },
      { label: 'Contracts', page: '/contracts' },
      { label: 'Protocol Limits', page: '/protocol-limits' },
      { label: 'Fees', page: '/fees' },
      { label: 'Release Plan', page: '/release-plan' },
    ],
  },
  {
    label: 'Build',
    page: '/use-cases',
    submenu: [
      { label: 'Use Cases', page: '/use-cases' },
      { label: 'Everyday Wallet (Ref)', page: '/everyday-wallet' },
      { label: 'Integrations', page: '/integrations' },
    ],
  },
  {
    label: 'Security',
    page: '/security',
    submenu: [
      { label: 'Security Model', page: '/security' },
      { label: 'Dispute Architecture', page: '/dispute-resolution' },
      { label: 'Emergency Recovery', page: '/emergency' },
      { label: 'For Researchers', page: '/researcher' },
    ],
  },
  {
    label: 'About',
    page: '/about',
    submenu: [
      { label: 'Governance', page: '/governance' },
      { label: 'SEW Token', page: '/token' },
      { label: 'Investors', page: '/investor' },
      { label: 'Contact', page: '/contact' },
    ],
  },
  {
    label: 'Source Code',
    link: 'https://github.com/sew-protocol/sew-protocol',
  },
]

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Sew Protocol</title>
        <meta
          name="description"
          content="transfer protection at the transaction layer"
        />
        <meta name="og:title" content="Sew Protocol" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@_ijjk" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <ul>
        {protocolNavItems.map(({ label, page, link, submenu }) => (
          <li key={label} className={submenu ? 'has-submenu' : ''}>
            {page ? (
              <Link
                href={page}
                className={pathname === page ? 'active' : undefined}
              >
                {label}
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
            {submenu && (
              <ul className="submenu">
                {submenu.map(({ label: subLabel, page: subPage }) => (
                  <li key={subLabel}>
                    <Link
                      href={subPage}
                      className={pathname === subPage ? 'active' : undefined}
                    >
                      {subLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <ul className={styles.secondaryNav}>
        <li>
          <Link
            href="/docs"
            className={pathname.startsWith('/docs') ? 'active' : undefined}
          >
            Documentation
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
