const fs = require('fs')
const path = require('path')
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const {
  NOTION_TOKEN,
  BLOG_INDEX_ID,
} = require('./src/lib/notion/server-constants')

try {
  fs.unlinkSync(path.resolve('.blog_index_data'))
} catch (_) {}
try {
  fs.unlinkSync(path.resolve('.blog_index_data_previews'))
} catch (_) {}

if (!NOTION_TOKEN) {
  console.warn(
    '\nNOTION_TOKEN is missing from env, Notion features will be disabled\n'
  )
}

if (!BLOG_INDEX_ID) {
  console.warn(
    '\nBLOG_INDEX_ID is missing from env, Notion features will be disabled\n'
  )
}

module.exports = withNextra({
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
})
