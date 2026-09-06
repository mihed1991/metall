const basePath = import.meta.env.BASE_URL

export const homeHref = (hash = '') => `${basePath}${hash}`
export const pageHref = (pathname: string) => `${basePath}${pathname.replace(/^\//, '')}`
