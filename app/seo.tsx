import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export function genPageMetadata({
  title,
  description,
  image,
  openGraph,
  twitter,
  ...rest
}: PageSEOProps): Metadata {
  const pageDescription = description || siteMetadata.description
  const images = image ? [image] : [siteMetadata.socialBanner]
  return {
    title,
    description: pageDescription,
    ...rest,
    // Merge page overrides into the defaults so a partial openGraph/twitter object
    // does not drop the image, site name or description.
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: pageDescription,
      url: './',
      siteName: siteMetadata.title,
      images,
      locale: 'en_US',
      type: 'website',
      ...openGraph,
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      description: pageDescription,
      card: 'summary_large_image',
      images,
      ...twitter,
    },
  }
}
