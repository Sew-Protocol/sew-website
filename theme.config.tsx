'use client'

import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

const logo = (
  <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>SEW Protocol</span>
)

const config: DocsThemeConfig = {
  logo,
  project: {
    link: 'https://github.com/sew-protocol/sew-protocol',
  },
  chat: {
    link: 'https://discord.gg/sewprotocol',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
    forcedTheme: 'dark',
  },
  footer: {
    text: '© 2026 Sew Protocol. All rights reserved.',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        property="og:title"
        content="Sew Protocol - Technical Documentation"
      />
      <meta
        property="og:description"
        content="Technical documentation for Sew Protocol smart contracts"
      />
    </>
  ),
}

export default config
