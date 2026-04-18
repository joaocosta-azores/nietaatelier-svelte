import { getLocale, type Lang } from '$lib/content'
import type { LayoutLoad } from './$types'

export const load: LayoutLoad = ({ params, url }) => {
  const lang = params.lang as Lang

  return {
    lang,
    locale: getLocale(lang),
    pathname: url.pathname,
    alternateLang: lang === 'en' ? 'pt' : 'en',
  }
}
