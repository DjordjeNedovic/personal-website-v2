import type { MDXComponents } from 'mdx/types'
import Image from '../common/Image'
import CustomLink from '../common/Link'

export const components: MDXComponents = {
  Image,
  a: CustomLink,
}
