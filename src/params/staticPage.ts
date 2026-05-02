import { isStaticPageSlug } from '$lib/content'
import type { ParamMatcher } from '@sveltejs/kit'

export const match: ParamMatcher = (param) => {
  return isStaticPageSlug(param)
}
