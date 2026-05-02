import { locales, supportedLangs, type Lang, type LocaleContent } from '$lib/content'

type DirectusFile = {
  id: string
}

type SiteSettingsResponse = {
  data: {
    site_name?: string
    contact_email?: string
    contact_phone?: string
    facebook_url?: string
    instagram_url?: string
    office_address?: string
    default_og_image?: string | DirectusFile | null
    logo?: string | DirectusFile | null
  }
}

type HomePageTranslation = {
  languages_code: Lang
  hero_title?: string
  hero_kicker?: string
  hero_label?: string
  hero_url?: string
  aboutus_title?: string
  aboutus_text?: string
  aboutus_label?: string
}

type HomePageResponse = {
  data: {
    hero_image?: string | DirectusFile | null
    translations?: HomePageTranslation[]
  }
}

function getAssetUrl(baseUrl: string, file?: string | DirectusFile | null) {
  if (!file) return undefined

  const id = typeof file === 'string' ? file : file.id

  return `${baseUrl}/assets/${id}`
}

function splitOfficeLines(address?: string) {
  return address
    ?.split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
}

async function directusFetch<T>(path: string): Promise<T> {
  if (!process.env.DIRECTUS_URL || !process.env.DIRECTUS_TOKEN) {
    throw new Error('Directus env vars are not configured')
  }

  const baseUrl = process.env.DIRECTUS_URL.replace(/\/$/, '')
  const response = await fetch(`${baseUrl}${path}`, {
    headers: {
      Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`,
    },
  })

  if (!response.ok) {
    throw new Error(`Directus request failed: ${response.status} ${response.statusText}`)
  }

  return response.json() as Promise<T>
}

function cloneFallbackLocales() {
  return structuredClone(locales) as Record<Lang, LocaleContent>
}

let localesPromise: Promise<Record<Lang, LocaleContent>> | undefined

async function loadDirectusLocales() {
  const resolvedLocales = cloneFallbackLocales()

  if (!process.env.DIRECTUS_URL || !process.env.DIRECTUS_TOKEN) {
    return resolvedLocales
  }

  const baseUrl = process.env.DIRECTUS_URL.replace(/\/$/, '')

  try {
    const [siteSettings, homePage] = await Promise.all([
      directusFetch<SiteSettingsResponse>(
        '/items/nietaatelier_site_settings?fields=site_name,contact_email,contact_phone,facebook_url,instagram_url,office_address,default_og_image,logo',
      ),
      directusFetch<HomePageResponse>(
        '/items/nietaatelier_home_page?fields=hero_image,translations.languages_code,translations.hero_title,translations.hero_kicker,translations.hero_label,translations.hero_url,translations.aboutus_title,translations.aboutus_text,translations.aboutus_label',
      ),
    ])

    const logoUrl = getAssetUrl(baseUrl, siteSettings.data.logo)
    const ogImageUrl = getAssetUrl(baseUrl, siteSettings.data.default_og_image)
    const heroUrl = getAssetUrl(baseUrl, homePage.data.hero_image)
    const officeLines = splitOfficeLines(siteSettings.data.office_address)

    for (const lang of supportedLangs) {
      const locale = resolvedLocales[lang]
      const translation = homePage.data.translations?.find((item) => item.languages_code === lang)

      locale.siteName = siteSettings.data.site_name || locale.siteName
      locale.logo = logoUrl || locale.logo
      locale.ogImage = ogImageUrl || locale.ogImage
      locale.hero = heroUrl || locale.hero
      locale.contactEmail = siteSettings.data.contact_email || locale.contactEmail
      locale.contactPhone = siteSettings.data.contact_phone || locale.contactPhone

      if (officeLines?.length) {
        locale.office.lines = officeLines
      }

      locale.social = [
        {
          label: 'Facebook',
          href: siteSettings.data.facebook_url || locale.social[0]?.href || '',
        },
        {
          label: 'Instagram',
          href: siteSettings.data.instagram_url || locale.social[1]?.href || '',
        },
      ].filter((item) => item.href)

      if (translation) {
        locale.home.title = translation.hero_kicker || locale.home.title
        locale.home.kicker = translation.hero_title || locale.home.kicker
        locale.home.ctaLabel = translation.hero_label || locale.home.ctaLabel
        locale.home.ctaHref = translation.hero_url || locale.home.ctaHref
        locale.home.previewTitle = translation.aboutus_title || locale.home.previewTitle
        locale.home.previewText = translation.aboutus_text || locale.home.previewText
        locale.home.previewCta = translation.aboutus_label || locale.home.previewCta
      }
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown Directus error'
    console.warn(`Using fallback content: ${message}`)
  }

  return resolvedLocales
}

export function getDirectusLocales() {
  localesPromise ??= loadDirectusLocales()

  return localesPromise
}
