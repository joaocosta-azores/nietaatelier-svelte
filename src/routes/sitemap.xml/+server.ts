import { locales } from '$lib/content'

const siteUrl = 'https://www.nietaatelier.com'

const staticPages = ['', '/aboutus', '/work', '/walkingby']

function getLocalizedPaths() {
  return Object.entries(locales).flatMap(([lang, locale]) => {
    const basePaths = staticPages.map((page) => `/${lang}${page === '' ? '/' : page}`)
    const cmsPaths = Object.keys(locale.cms).map((slug) => `/${lang}/content/${slug}`)

    return [...basePaths, ...cmsPaths]
  })
}

function getAlternateLinks(path: string) {
  const [, lang, ...segments] = path.split('/')
  const rest = segments.join('/')

  return Object.keys(locales)
    .map((localeCode) => {
      const href = rest ? `${siteUrl}/${localeCode}/${rest}` : `${siteUrl}/${localeCode}/`

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
