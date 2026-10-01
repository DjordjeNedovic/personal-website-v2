import siteMetadata from '@/data/siteMetadata'
import { personRef } from './person'

interface PostLike {
  title: string
  date: string
  lastmod?: string
  summary?: string
  images?: string[]
  slug: string
}

export function getStructuredData(post: PostLike, lang: 'en' | 'sr' = 'en') {
  const image = post.images?.[0] || siteMetadata.socialBanner
  const absoluteImage = image.startsWith('http') ? image : `${siteMetadata.siteUrl}${image}`
  const path = lang === 'sr' ? `/posts/rs/${post.slug}` : `/posts/${post.slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.lastmod || post.date).toISOString(),
    description: post.summary,
    image: absoluteImage,
    url: `${siteMetadata.siteUrl}${path}`,
    inLanguage: lang,
    author: personRef,
    publisher: personRef,
  }
}
