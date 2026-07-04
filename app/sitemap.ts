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
  const routes = [
    { route: '', file: 'app/page.tsx' },
    { route: 'posts', file: 'app/posts/page.tsx' },
    { route: 'posts/rs', file: 'app/posts/rs/page.tsx' },
    { route: 'projects', file: 'app/projects/page.tsx' },
    { route: 'tags', file: 'app/tags/page.tsx' },
    { route: 'about', file: 'app/about/page.tsx' },
  ].map(({ route, file }) => ({
    url: `${siteUrl}/${route}`,
    lastModified: getLastModified(file),
  }))

  return [...routes, ...blogRoutes]
}

import { execSync } from 'child_process'

function getLastModified(filePath: string): string {
  try {
    const date = execSync(`git log -1 --format="%ai" -- ${filePath}`).toString().trim()
    return date
      ? new Date(date).toISOString().split('T')[0]
      : new Date().toISOString().split('T')[0]
  } catch {
    return new Date().toISOString().split('T')[0]
  }
}
