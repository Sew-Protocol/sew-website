import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const protocolNavItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'How It Works', page: '/how-it-works' },
  { label: 'Fees', page: '/fees' },
  { label: 'Protocol Limits', page: '/protocol-limits' },
  { label: 'Architecture', page: '/architecture' },
  { label: 'Security', page: '/security' },
  { label: 'Emergency', page: '/emergency' },
  { label: 'Research', page: '/researcher' },
  { label: 'Build on Sew', page: '/developer' },
  { label: 'Investors', page: '/investor' },
  { label: 'Technical', page: '/technical' },
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
        {protocolNavItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
      <ul className={styles.secondaryNav}>
        <li>
          <Link href="/everyday-wallet">
            <a
              className={pathname === '/everyday-wallet' ? 'active' : undefined}
            >
              Everyday Wallet
            </a>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
