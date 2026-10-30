import siteMetadata from '@/data/siteMetadata'

const MAX_TITLE_LENGTH = 60

/**
 * Post title for <title>. Keeps the " | Djordje Nedovic" suffix from the root layout template
 * only when the whole title still fits in search results; long titles are used as-is.
 */
export function postTitle(title: string) {
  const withSuffix = `${title} | ${siteMetadata.author}`
  return withSuffix.length <= MAX_TITLE_LENGTH ? title : { absolute: title }
}
