import { getContentEntries } from '$lib/content'
import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const entries = () => getContentEntries()

export const load: PageLoad = async ({ params, parent }) => {
  const { locale } = await parent()
  const page = locale.cms[params.slug]

  if (!page) {
    throw error(404, 'Page not found')
  }

  return { page }
}
