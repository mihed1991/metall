export const siteConfig = {
  origin: 'https://mihed1991.github.io',
  basePath: '/metall/',
}

export const siteUrl = new URL(siteConfig.basePath, siteConfig.origin).href
