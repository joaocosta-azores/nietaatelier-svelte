import { getAlternatePath, getStaticPagePath, siteUrl, supportedLangs, type StaticPageKey } from '$lib/content'

const staticPageKeys: StaticPageKey[] = [
  'about',
  'work',
  'walkingby',
  'termsandconditions',
  'privacypolicy',
]

function getLocalizedPaths() {
  return [
    ...supportedLangs.map((lang) => `/${lang}/`),
    ...supportedLangs.flatMap((lang) =>
      staticPageKeys.map((pageKey) => `${getStaticPagePath(lang, pageKey)}/`),
    ),
  ]
}

function getAlternateLinks(path: string) {
  const localizedLinks = supportedLangs.map((localeCode) => {
    const alternatePath = getAlternatePath(path, localeCode)
    const href = `${siteUrl}${alternatePath.endsWith('/') ? alternatePath : `${alternatePath}/`}`

    return `<xhtml:link rel="alternate" hreflang="${localeCode}" href="${href}" />`
  })

  const defaultPath = getAlternatePath(path, 'en')
  const defaultHref = `${siteUrl}${defaultPath.endsWith('/') ? defaultPath : `${defaultPath}/`}`

  return [
    ...localizedLinks,
    `<xhtml:link rel="alternate" hreflang="x-default" href="${defaultHref}" />`,
  ].join('')
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
