import siteMetadata from '@/data/siteMetadata'
import { PostRs } from '../../.velite'

export function getStructuredDataRs(post: PostRs) {
  const image = post.images?.[0] || siteMetadata.socialBanner
  const absoluteImage = image.startsWith('http') ? image : `${siteMetadata.siteUrl}${image}`

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.lastmod || post.date).toISOString(),
    description: post.summary,
    image: absoluteImage,
    url: `${siteMetadata.siteUrl}/posts/rs/${post.slug}`,
    inLanguage: 'sr',
    author: {
      '@type': 'Person',
      name: 'Djordje Nedovic',
      url: siteMetadata.siteUrl,
    },
    publisher: {
      '@type': 'Person',
      name: 'Djordje Nedovic',
      url: siteMetadata.siteUrl,
    },
  }
}
