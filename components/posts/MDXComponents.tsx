import type { MDXComponents } from 'mdx/types'
import Image from '../common/Image'
import CustomLink from '../common/Link'

const LanguageSwitch = ({ slug, lang }: { slug: string; lang: 'en' | 'rs' }) => {
  if (lang === 'rs') {
    return (
      <a
        href={`/posts/rs/${slug}`}
        className="inline-flex items-center gap-2 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 text-sm text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors no-underline my-4"
      >
        You can read this in Serbian as well →
      </a>
    )
  }
  return (
    <a
      href={`/posts/${slug}`}
      className="inline-flex items-center gap-2 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 text-sm text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors no-underline my-4"
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
