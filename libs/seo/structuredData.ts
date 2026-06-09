import siteMetadata from '@/data/siteMetadata'
import { Post } from '../../.velite'

export function getStructuredData(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.lastmod || post.date).toISOString(),
    description: post.summary,
    image: post.images?.[0] || siteMetadata.socialBanner,
    url: `${siteMetadata.siteUrl}/posts/${post.slug}`,
  }
}
