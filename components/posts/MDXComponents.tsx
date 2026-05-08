import type { MDXComponents } from 'mdx/types'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm.js'
import Pre from 'pliny/ui/Pre.js'
import TOCInline from 'pliny/ui/TOCInline.js'
import Image from '../common/Image'
import CustomLink from '../common/Link'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm,
}
