#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const PAGES_DIR = path.join(__dirname, '..', 'src', 'pages')
const OUTPUT_FILE = path.join(__dirname, '..', 'website-content.txt')

const EXCLUDED_FILES = ['_app.tsx', '_document.tsx', 'contact.tsx']

function extractReadableText(content) {
  let text = content

  // Remove imports
  text = text.replace(/^import\s+.*$/gm, '')

  // Remove export default function wrapper
  text = text.replace(
    /export\s+default\s+function\s+\w+\s*\([\s\S]*?\{[\s\S]*?return\s*\([\s\S]*?\)\s*\}[\s\S]*\}\s*$/g,
    ''
  )

  // Get everything inside the return(...) or return {...}
  const returnMatch = text.match(/return\s*\(\s*([\s\S]*)\s*\)\s*;?\s*$/)
  if (returnMatch) {
    text = returnMatch[1]
  }

  // Replace code blocks (backticks) with [CODE]
  text = text.replace(/`[\s\S]*?`/g, '\n\n[Code example]\n\n')

  // Replace JSX comments
  text = text.replace(/\{[\s\S]*?\}/g, (match) => {
    if (match.includes('//')) return ' '
    if (match.includes('Link') || match.includes('href')) return ' '
    return ' '
  })

  // Extract text content from JSX
  // Match text between > and < or between tags
  let extracted = ''
  const regex = />\s*([A-Za-z0-9\s.,;:!?()'"\-]+)\s*</g
  let match
  while ((match = regex.exec(text)) !== null) {
    const line = match[1].trim()
    if (line.length > 0 && !line.match(/^\d+$/)) {
      extracted += line + ' '
    }
  }

  // Clean up
  extracted = extracted.replace(/\s+/g, ' ')
  extracted = extracted.replace(/\s+([.,;:!?])/g, '$1')
  extracted = extracted.replace(
    /\[\s*Code\s*example\s*\]/gi,
    '\n\n[Code example]\n\n'
  )
  extracted = extracted.trim()

  return extracted
}

function getPageTitle(filename) {
  const name = path.basename(filename, '.tsx')
  return name
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

function main() {
  if (!fs.existsSync(PAGES_DIR)) {
    console.error('Pages directory not found:', PAGES_DIR)
    process.exit(1)
  }

  let files = fs
    .readdirSync(PAGES_DIR)
    .filter((f) => f.endsWith('.tsx'))
    .filter((f) => !f.startsWith('.'))
    .filter((f) => !EXCLUDED_FILES.includes(f))

  files.sort()

  let output = ''
  output +=
    '═══════════════════════════════════════════════════════════════════════════════\n'
  output += 'SEW PROTOCOL - WEBSITE CONTENT\n'
  output += 'Generated: ' + new Date().toISOString().split('T')[0] + '\n'
  output +=
    '═══════════════════════════════════════════════════════════════════════════════\n\n'

  for (const file of files) {
    const title = getPageTitle(file)
    const content = extractReadableText(
      fs.readFileSync(path.join(PAGES_DIR, file), 'utf-8')
    )

    output +=
      '───────────────────────────────────────────────────────────────────────────────\n'
    output += title + '\n'
    output +=
      '───────────────────────────────────────────────────────────────────────────────\n\n'

    if (content.length > 20) {
      output += content + '\n\n'
    } else {
      output += '[Content extraction failed]\n\n'
    }
  }

  fs.writeFileSync(OUTPUT_FILE, output)
  console.log(`Generated ${OUTPUT_FILE}`)
  console.log(`${files.length} pages processed`)
}

main()
