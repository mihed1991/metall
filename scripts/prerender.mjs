import { readFile, rm, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { siteUrl } from '../site.config.mjs'

const projectRoot = resolve(import.meta.dirname, '..')
const serverEntryPath = resolve(projectRoot, '.ssr/entry-server.js')

const { render } = await import(pathToFileURL(serverEntryPath).href)
const pages = [
  { key: 'home', output: 'dist/index.html', pathname: '' },
  { key: 'laser-cutting', output: 'dist/lazernaya-rezka-metalla/index.html', pathname: 'lazernaya-rezka-metalla/' },
]

for (const page of pages) {
  const outputPath = resolve(projectRoot, page.output)
  const template = await readFile(outputPath, 'utf8')
  const canonicalUrl = new URL(page.pathname, siteUrl).href
  const appHtml = render(page.key)
  const prerendered = template
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replaceAll('__SITE_URL__', siteUrl)
    .replaceAll('__CANONICAL_URL__', canonicalUrl)

  if (prerendered === template) {
    throw new Error(`Не найден корневой элемент для статической генерации: ${page.output}`)
  }

  await writeFile(outputPath, prerendered)
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url>
    <loc>${new URL(page.pathname, siteUrl).href}</loc>
    <changefreq>monthly</changefreq>
    <priority>${page.key === 'home' ? '1.0' : '0.9'}</priority>
  </url>`).join('\n')}
</urlset>
`

await Promise.all([
  writeFile(resolve(projectRoot, 'dist/sitemap.xml'), sitemap),
  writeFile(resolve(projectRoot, 'dist/robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap.xml', siteUrl).href}\n`),
])

await rm(resolve(projectRoot, '.ssr'), { recursive: true, force: true })

console.log(`Статические страницы созданы: ${pages.map((page) => page.output).join(', ')}`)
