import { getDirectusLocales } from '$lib/server/directus-content'
import { getAlternatePath, getStaticPageKey, siteUrl, type Lang, type LocaleContent } from '$lib/content'
import type { LayoutServerLoad } from './$types'

const seoByLang = {
  en: {
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

function absoluteUrl(pathOrUrl: string) {
  return pathOrUrl.startsWith('http') ? pathOrUrl : `${siteUrl}${pathOrUrl}`
}

function getPageName(lang: Lang, pathname: string, locale: LocaleContent) {
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

function getSeo(lang: Lang, pathname: string, locale: LocaleContent) {
  const seo = seoByLang[lang]
  const slug = pathname.split('/').filter(Boolean)[1]
  const staticPageKey = slug ? getStaticPageKey(lang, slug) : undefined

  if (pathname === locale.homePath) {
    return {
      title: locale.siteName || seo.defaultTitle,
      description: seo.defaultDescription,
      type: 'website',
    }
  }

  if (staticPageKey === 'about') {
    return {
      title: `${locale.about.title} | ${locale.siteName}`,
      description: seo.aboutDescription,
      type: 'article',
    }
  }

  if (staticPageKey === 'work') {
    return {
      title: `${locale.work.title} | ${locale.siteName}`,
      description: seo.workDescription,
      type: 'website',
    }
  }

  if (staticPageKey === 'walkingby') {
    return {
      title: `${locale.walkingby.title} | ${locale.siteName}`,
      description: seo.walkingByDescription,
      type: 'website',
    }
  }

  if (staticPageKey === 'termsandconditions') {
    return {
      title: `${locale.termsandconditions.title} | ${locale.siteName}`,
      description: `${locale.termsandconditions.title} - ${locale.siteName}.`,
      type: 'article',
    }
  }

  if (staticPageKey === 'privacypolicy') {
    return {
      title: `${locale.privacypolicy.title} | ${locale.siteName}`,
      description: `${locale.privacypolicy.title} - ${locale.siteName}.`,
      type: 'article',
    }
  }

  return {
    title: locale.siteName || seo.defaultTitle,
    description: seo.defaultDescription,
    type: 'website',
  }
}

function getStructuredDataPageType(lang: Lang, pathname: string) {
  const slug = pathname.split('/').filter(Boolean)[1]
  const staticPageKey = slug ? getStaticPageKey(lang, slug) : undefined

  if (staticPageKey === 'about') return 'AboutPage'
  if (staticPageKey === 'work') return 'CollectionPage'
  if (staticPageKey === 'walkingby') return 'CollectionPage'
  if (staticPageKey === 'termsandconditions') return 'WebPage'
  if (staticPageKey === 'privacypolicy') return 'WebPage'

  return 'WebPage'
}

export const load: LayoutServerLoad = async ({ params, url }) => {
  const allLocales = await getDirectusLocales()
  const lang = params.lang as Lang
  const pathname = url.pathname
  const alternateLang = lang === 'en' ? 'pt' : 'en'
  const alternatePath = getAlternatePath(pathname, alternateLang)
  const defaultPath = getAlternatePath(pathname, 'en')
  const locale = allLocales[lang]
  const seo = getSeo(lang, pathname, locale)
  const structuredDataPageType = getStructuredDataPageType(lang, pathname)
  const canonicalUrl = `${siteUrl}${pathname}`
  const alternateUrl = `${siteUrl}${alternatePath}`
  const defaultUrl = `${siteUrl}${defaultPath}`
  const ogImage = absoluteUrl(locale.ogImage)
  const pageName = getPageName(lang, pathname, locale)
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
      siteName: locale.siteName,
      locale: seoByLang[lang].locale,
      canonicalUrl,
      alternateUrl,
      defaultUrl,
      ogImage,
    },
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: locale.siteName,
        url: siteUrl,
        logo: absoluteUrl(locale.logo),
        image: ogImage,
        email: locale.contactEmail,
        telephone: locale.contactPhone,
        sameAs: locale.social.map((item) => item.href),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: locale.siteName,
        url: siteUrl,
        inLanguage: lang,
      },
      {
        '@context': 'https://schema.org',
        '@type': structuredDataPageType,
        name: seo.title,
        description: seo.description,
        url: canonicalUrl,
        inLanguage: lang,
        isPartOf: {
          '@type': 'WebSite',
          name: locale.siteName,
          url: siteUrl,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: ogImage,
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
