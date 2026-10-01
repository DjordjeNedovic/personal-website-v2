import type { MDXComponents } from 'mdx/types'
import Image from '../common/Image'
import CustomLink from '../common/Link'

const LanguageSwitch = ({ slug, lang }: { slug: string; lang: 'en' | 'rs' }) => {
  if (lang === 'rs') {
    return (
      <a
        href={`/posts/rs/${slug}`}
        className="inline-flex items-center gap-2 rounded-lg border border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/20 px-4 py-2 text-sm text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors no-underline my-4"
      >
        You can read this in Serbian as well →
      </a>
    )
  }
  return (
    <a
      href={`/posts/${slug}`}
      className="inline-flex items-center gap-2 rounded-lg border border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/20 px-4 py-2 text-sm text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors no-underline my-4"
    >
      Ovaj tekst je dostupan i na engleskom →
    </a>
  )
}

export const components: MDXComponents = {
  Image,
  a: CustomLink,
  LanguageSwitch,
}
