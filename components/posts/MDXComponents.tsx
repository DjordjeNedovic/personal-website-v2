import type { MDXComponents } from 'mdx/types'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm.js'
import Pre from 'pliny/ui/Pre.js'
import TOCInline from 'pliny/ui/TOCInline.js'
import Image from '../common/Image'
import CustomLink from '../common/Link'

const LanguageSwitch = ({ slug, lang }: { slug: string; lang: 'en' | 'rs' }) => {
  if (lang === 'rs') {
    return (
      <a href={`/posts/rs/${slug}`} className="text-blue-500 hover:underline">
        You can read this in Serbian as well →
      </a>
    )
  }
  return (
    <a href={`/posts/${slug}`} className="text-blue-500 hover:underline">
      Ovaj tekst je dostupan i na engleskom →
    </a>
  )
}

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm,
  LanguageSwitch,
}
