import { error } from '@sveltejs/kit'
import { getStaticPageEntries, getStaticPageKey, type Lang } from '$lib/content'
import type { PageLoad } from './$types'

export const entries = () => getStaticPageEntries()

export const load: PageLoad = ({ params }) => {
  const lang = params.lang as Lang
  const pageKey = getStaticPageKey(lang, params.page)

  if (!pageKey) {
    throw error(404, 'Page not found')
  }

  return { pageKey }
}
