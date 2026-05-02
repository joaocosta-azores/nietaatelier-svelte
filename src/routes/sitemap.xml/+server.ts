import { getAlternatePath, locales, siteUrl, supportedLangs } from '$lib/content'

const staticPages = ['', '/aboutus', '/work', '/walkingby']

function getLocalizedPaths() {
  return Object.entries(locales).flatMap(([lang, locale]) => {
    const basePaths = staticPages.map((page) => `/${lang}${page === '' ? '/' : page}`)
    const cmsPaths = Object.keys(locale.cms).map((slug) => `/${lang}/content/${slug}`)

    return [...basePaths, ...cmsPaths]
  })
}

function getAlternateLinks(path: string) {
  return supportedLangs
    .map((localeCode) => {
      const href = `${siteUrl}${getAlternatePath(path, localeCode)}`

      return `<xhtml:link rel="alternate" hreflang="${localeCode}" href="${href}" />`
    })
    .join('')
}

export const prerender = true

export function GET() {
  const pages = getLocalizedPaths()

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map((path) => {
    return `  <url>
    <loc>${siteUrl}${path}</loc>
    ${getAlternateLinks(path)}
  </url>`
  })
  .join('\n')}
</urlset>`

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600',
    },
  })
}
