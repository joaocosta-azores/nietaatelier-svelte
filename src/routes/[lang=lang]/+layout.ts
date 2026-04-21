import { getLocale, type Lang } from '$lib/content'
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
  if (pathname === `/${lang}/aboutus`) return locale.about.title
  if (pathname === `/${lang}/work`) return locale.work.title
  if (pathname === `/${lang}/walkingby`) return locale.walkingby.title

  const slug = pathname.split('/').pop()
  const cmsPage = slug ? locale.cms[slug] : undefined

  return cmsPage?.title
}

function getSeo(lang: Lang, pathname: string) {
  const locale = getLocale(lang)
  const seo = seoByLang[lang]

  if (pathname === locale.homePath) {
    return {
      title: seo.defaultTitle,
      description: seo.defaultDescription,
      type: 'website',
    }
  }

  if (pathname === `/${lang}/aboutus`) {
    return {
      title: `${locale.about.title} | ${seo.siteName}`,
      description: seo.aboutDescription,
      type: 'article',
    }
  }

  if (pathname === `/${lang}/work`) {
    return {
      title: `${locale.work.title} | ${seo.siteName}`,
      description: seo.workDescription,
      type: 'website',
    }
  }

  if (pathname === `/${lang}/walkingby`) {
    return {
      title: `${locale.walkingby.title} | ${seo.siteName}`,
      description: seo.walkingByDescription,
      type: 'website',
    }
  }

  const slug = pathname.split('/').pop()
  const cmsPage = slug ? locale.cms[slug] : undefined

  if (cmsPage) {
    return {
      title: `${cmsPage.title} | ${seo.siteName}`,
      description: `${cmsPage.title} - ${seo.siteName}.`,
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
  const seo = getSeo(lang, pathname)
  const locale = getLocale(lang)
  const canonicalUrl = `${url.origin}${pathname}`
  const alternateUrl = `${url.origin}${pathname.replace(`/${lang}/`, `/${alternateLang}/`)}`
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
            item: `${url.origin}${locale.homePath}`,
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
    seo: {
      ...seo,
      siteName: seoByLang[lang].siteName,
      locale: seoByLang[lang].locale,
      canonicalUrl,
      alternateUrl,
      defaultUrl: `${url.origin}/en/`,
      ogImage: `${url.origin}/og-image.png`,
    },
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Nieta Atelier',
        url: url.origin,
        logo: `${url.origin}/logo.png`,
        image: `${url.origin}/og-image.png`,
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
        url: url.origin,
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
          url: url.origin,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${url.origin}/og-image.png`,
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
