import { readFile, rm, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const projectRoot = resolve(import.meta.dirname, '..')
const outputPath = resolve(projectRoot, 'dist/index.html')
const serverEntryPath = resolve(projectRoot, '.ssr/entry-server.js')

const [{ render }, template] = await Promise.all([
  import(pathToFileURL(serverEntryPath).href),
  readFile(outputPath, 'utf8'),
])

const appHtml = render().replace(/((?:src|href)=")\/assets\//g, '$1./assets/')
const prerendered = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

if (prerendered === template) {
  throw new Error('Не найден корневой элемент для статической генерации.')
}

await writeFile(outputPath, prerendered)
await rm(resolve(projectRoot, '.ssr'), { recursive: true, force: true })

console.log('Статический HTML создан: dist/index.html')
