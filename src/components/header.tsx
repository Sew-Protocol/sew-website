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
  { label: 'Start Here', page: '/start-here' },
  { label: 'Use Cases', page: '/use-cases' },
  { label: 'FAQ', page: '/faq' },
  { label: 'Comparisons', page: '/comparisons' },
  { label: 'Glossary', page: '/glossary' },
  { label: 'How It Works', page: '/how-it-works' },
  { label: 'Build on Sew', page: '/developer' },
  { label: 'Architecture', page: '/architecture' },
  { label: 'Security', page: '/security' },
  {
    label: 'Resources',
    page: '/resources',
    submenu: [
      { label: 'Use Cases', page: '/use-cases' },
      { label: 'FAQ', page: '/faq' },
      { label: 'Comparisons', page: '/comparisons' },
      { label: 'Glossary', page: '/glossary' },
      { label: 'Integrations', page: '/integrations' },
      { label: 'Fees', page: '/fees' },
      { label: 'SEW Token', page: '/token' },
      { label: 'Protocol Limits', page: '/protocol-limits' },
      { label: 'Emergency Recovery', page: '/emergency' },
      { label: 'Dispute Resolution', page: '/dispute-resolution' },
      { label: 'Release Plan', page: '/release-plan' },
      { label: 'Contracts', page: '/contracts' },
      { label: 'Technical Resources', page: '/technical' },
      { label: 'For Researchers', page: '/researcher' },
      { label: 'Investors', page: '/investor' },
    ],
  },
  // { label: 'Blog', page: '/blog' },
  // { label: 'Contact', page: '/contact' },
  {
    label: 'Source Code',
    link: 'https://github.com/Sew-Protocol/sew-protocol',
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
          content="Payment protection at the transaction layer"
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
            href="/everyday-wallet"
            className={pathname === '/everyday-wallet' ? 'active' : undefined}
          >
            Everyday Wallet
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
