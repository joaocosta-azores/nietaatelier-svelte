import { getAlternatePath, getLocale, getStaticPageKey, siteUrl, type Lang } from '$lib/content'
import type { LayoutLoad } from './$types'

const seoByLang = {
  en: {
    siteName: 'Nieta Atelier',
    defaultTitle: 'Nieta Atelier',
    defaultDescription:
      'Sustainable textile design, atelier collections, and circular design work by Nieta Atelier.',
    aboutDescription:
      'Learn about Nieta da Ponte Rocha, the atelier story, and the sustainability-driven design approach behind Nieta Atelier.',
    workDescription: 'Capsule collections and studio work from Nieta Atelier.',
    walkingByDescription: 'Walking By by Nieta Atelier.',
    locale: 'en_US',
  },
  pt: {
    siteName: 'Nieta Atelier',
    defaultTitle: 'Nieta Atelier',
    defaultDescription:
      'Design textil sustentavel, colecoes de atelier e trabalho em economia circular da Nieta Atelier.',
    aboutDescription:
      'Conheca a historia de Nieta da Ponte Rocha e a abordagem de design sustentavel da Nieta Atelier.',
    workDescription: 'Colecoes capsula e trabalho de estudio da Nieta Atelier.',
    walkingByDescription: 'Walking By da Nieta Atelier.',
    locale: 'pt_PT',
  },
} as const

function getPageName(lang: Lang, pathname: string) {
  const locale = getLocale(lang)

  if (pathname === locale.homePath) return 'Home'

  const slug = pathname.split('/').filter(Boolean)[1]
  const staticPageKey = slug ? getStaticPageKey(lang, slug) : undefined

  if (staticPageKey === 'about') return locale.about.title
  if (staticPageKey === 'work') return locale.work.title
  if (staticPageKey === 'walkingby') return locale.walkingby.title
  if (staticPageKey === 'termsandconditions') return locale.termsandconditions.title
  if (staticPageKey === 'privacypolicy') return locale.privacypolicy.title

  return undefined
}

function getSeo(lang: Lang, pathname: string) {
  const locale = getLocale(lang)
  const seo = seoByLang[lang]
  const slug = pathname.split('/').filter(Boolean)[1]
  const staticPageKey = slug ? getStaticPageKey(lang, slug) : undefined

  if (pathname === locale.homePath) {
    return {
      title: seo.defaultTitle,
      description: seo.defaultDescription,
      type: 'website',
    }
  }

  if (staticPageKey === 'about') {
    return {
      title: `${locale.about.title} | ${seo.siteName}`,
      description: seo.aboutDescription,
      type: 'article',
    }
  }

  if (staticPageKey === 'work') {
    return {
      title: `${locale.work.title} | ${seo.siteName}`,
      description: seo.workDescription,
      type: 'website',
    }
  }

  if (staticPageKey === 'walkingby') {
    return {
      title: `${locale.walkingby.title} | ${seo.siteName}`,
      description: seo.walkingByDescription,
      type: 'website',
    }
  }

  if (staticPageKey === 'termsandconditions') {
    return {
      title: `${locale.termsandconditions.title} | ${seo.siteName}`,
      description: `${locale.termsandconditions.title} - ${seo.siteName}.`,
      type: 'article',
    }
  }

  if (staticPageKey === 'privacypolicy') {
    return {
      title: `${locale.privacypolicy.title} | ${seo.siteName}`,
      description: `${locale.privacypolicy.title} - ${seo.siteName}.`,
      type: 'article',
    }
  }

  return {
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    type: 'website',
  }
}

export const load: LayoutLoad = ({ params, url }) => {
  const lang = params.lang as Lang
  const pathname = url.pathname
  const alternateLang = lang === 'en' ? 'pt' : 'en'
  const alternatePath = getAlternatePath(pathname, alternateLang)
  const seo = getSeo(lang, pathname)
  const locale = getLocale(lang)
  const canonicalUrl = `${siteUrl}${pathname}`
  const alternateUrl = `${siteUrl}${alternatePath}`
  const pageName = getPageName(lang, pathname)
  const homeName = lang === 'en' ? 'Home' : 'Inicio'
  const breadcrumbItems =
    pathname === locale.homePath
      ? [
          {
            '@type': 'ListItem',
            position: 1,
            name: homeName,
            item: canonicalUrl,
          },
        ]
      : [
          {
            '@type': 'ListItem',
            position: 1,
            name: homeName,
            item: `${siteUrl}${locale.homePath}`,
          },
          ...(pageName
            ? [
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: pageName,
                  item: canonicalUrl,
                },
              ]
            : []),
        ]

  return {
    lang,
    locale,
    pathname,
    alternateLang,
    alternatePath,
    seo: {
      ...seo,
      siteName: seoByLang[lang].siteName,
      locale: seoByLang[lang].locale,
      canonicalUrl,
      alternateUrl,
      defaultUrl: `${siteUrl}/en/`,
      ogImage: `${siteUrl}/og-image.png`,
    },
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Nieta Atelier',
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        image: `${siteUrl}/og-image.png`,
        email: 'nieta@nietaatelier.com',
        telephone: '+351295249400',
        sameAs: [
          'https://www.facebook.com/nietaatelier',
          'https://www.instagram.com/nietaatelier',
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Nieta Atelier',
        url: siteUrl,
        inLanguage: lang,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: seo.title,
        description: seo.description,
        url: canonicalUrl,
        inLanguage: lang,
        isPartOf: {
          '@type': 'WebSite',
          name: 'Nieta Atelier',
          url: siteUrl,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${siteUrl}/og-image.png`,
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems,
      },
    ].map((item) => JSON.stringify(item)),
  }
}
