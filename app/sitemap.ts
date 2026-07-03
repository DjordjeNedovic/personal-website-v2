import siteMetadata from '@/data/siteMetadata'
import { allPosts, allPostsRs } from '@/libs/velite'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  const blogRoutes = allPosts.map((post) => ({
    url: `${siteUrl}/posts/${post.slug}`,
    lastModified: post.lastmod || post.date,
  }))

  const blogRoutesRs = allPostsRs.map((post) => ({
    url: `${siteUrl}/posts/rs/${post.slug}`,
    lastModified: post.lastmod || post.date,
  }))

  const routes = ['', 'posts', 'projects', 'tags'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogRoutes]
}
