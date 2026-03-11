import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import styles from '../styles/header.module.css'

const protocolNavItems: {
  label: string
  page?: string
  link?: string
  submenu?: { label: string; page?: string; link?: string }[]
}[] = [
  { label: 'Home', page: '/' },
  { label: 'How It Works', page: '/how-it-works' },
  { label: 'Deployment', page: '/contracts' },
  { label: 'Security', page: '/security' },
  { label: 'Governance', page: '/governance' },
  { label: 'Developer', page: '/developer' },
  { label: 'FAQ', page: '/faq' },
  { label: 'Contact', page: '/contact' },
]

const ogImageUrl = 'https://sewprotocol.io/og-image.png'

const isParentActive = (
  pathname: string,
  item: typeof protocolNavItems[0]
): boolean => {
  if (item.page && pathname === item.page) return true
  if (item.submenu) {
    return item.submenu.some(
      (sub) =>
        sub.page &&
        (pathname === sub.page || pathname.startsWith(sub.page + '/'))
    )
  }
  return false
}

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
    setOpenSubmenu(null)
  }, [pathname])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
        setOpenSubmenu(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu((prev) => (prev === label ? null : label))
  }

  return (
    <header className={styles.header} ref={headerRef}>
      <Head>
        <title>{titlePre ? `${titlePre} | ` : ''}Sew Protocol</title>
        <meta
          name="description"
          content="Sew Protocol — non-custodial escrow infrastructure for ERC-20 transfers on Ethereum. Protected transfers with built-in dispute resolution."
        />
        <meta name="og:title" content="Sew Protocol" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@sewprotocol" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>

      <button
        className={styles.hamburger}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span
          className={
            menuOpen ? styles.barTop + ' ' + styles.barTopOpen : styles.barTop
          }
        />
        <span
          className={
            menuOpen ? styles.barMid + ' ' + styles.barMidOpen : styles.barMid
          }
        />
        <span
          className={
            menuOpen ? styles.barBot + ' ' + styles.barBotOpen : styles.barBot
          }
        />
      </button>

      <nav className={menuOpen ? styles.navOpen : styles.nav}>
        <ul>
          {protocolNavItems.map(({ label, page, link, submenu }) => {
            const parentActive = isParentActive(pathname, {
              label,
              page,
              link,
              submenu,
            })
            const submenuIsOpen = openSubmenu === label
            return (
              <li
                key={label}
                className={[
                  submenu ? 'has-submenu' : '',
                  submenuIsOpen ? styles.submenuOpen : '',
                ].join(' ')}
              >
                {page ? (
                  <Link
                    href={page}
                    className={parentActive ? 'active' : undefined}
                    onClick={
                      submenu
                        ? (e) => {
                            e.preventDefault()
                            toggleSubmenu(label)
                          }
                        : undefined
                    }
                  >
                    {label}
                    {submenu && (
                      <span className={styles.chevron} aria-hidden>
                        {submenuIsOpen ? '▴' : '▾'}
                      </span>
                    )}
                  </Link>
                ) : (
                  <ExtLink href={link}>{label}</ExtLink>
                )}
                {submenu && (
                  <ul
                    className={[
                      'submenu',
                      submenuIsOpen ? styles.submenuVisible : '',
                    ].join(' ')}
                  >
                    {submenu.map(
                      ({ label: subLabel, page: subPage, link: subLink }) => (
                        <li key={subLabel}>
                          {subPage ? (
                            <Link
                              href={subPage}
                              className={
                                pathname === subPage ? 'active' : undefined
                              }
                            >
                              {subLabel}
                            </Link>
                          ) : (
                            <ExtLink href={subLink}>{subLabel}</ExtLink>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
        <ul className={styles.secondaryNav}>
          {process.env.NEXT_PUBLIC_SHOW_DOCUMENTATION === 'true' && (
            <li>
              <Link
                href="/docs"
                className={pathname.startsWith('/docs') ? 'active' : undefined}
              >
                Documentation
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
