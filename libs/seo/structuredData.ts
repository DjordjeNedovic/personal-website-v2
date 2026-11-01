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
  const url = `${siteMetadata.siteUrl}${path}`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        datePublished: new Date(post.date).toISOString(),
        dateModified: new Date(post.lastmod || post.date).toISOString(),
        description: post.summary,
        image: absoluteImage,
        url,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        inLanguage: lang,
        author: personRef,
        publisher: personRef,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteMetadata.siteUrl },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Posts',
            item: `${siteMetadata.siteUrl}/posts`,
          },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  }
}
