import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { siteConfig } from './site.config.mjs'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  base: siteConfig.basePath,
  publicDir: 'media',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(projectRoot, 'index.html'),
        laserCutting: resolve(projectRoot, 'lazernaya-rezka-metalla/index.html'),
        bending: resolve(projectRoot, 'gibka-listovogo-metalla/index.html'),
        locksmith: resolve(projectRoot, 'slesarnye-raboty/index.html'),
      },
    },
  },
})
