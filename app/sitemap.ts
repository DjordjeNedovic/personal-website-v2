import siteMetadata from '@/data/siteMetadata'
import { allPosts, allPostsRs } from '@/libs/velite'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  // hreflang alternates for posts that exist in both languages
  const enSlugs = new Set(allPosts.map((post) => post.slug))
  const rsSlugs = new Set(allPostsRs.map((post) => post.slug))
  const languageAlternates = (slug: string) =>
    enSlugs.has(slug) && rsSlugs.has(slug)
      ? {
          alternates: {
            languages: {
              en: `${siteUrl}/posts/${slug}`,
              sr: `${siteUrl}/posts/rs/${slug}`,
              'x-default': `${siteUrl}/posts/${slug}`,
            },
          },
        }
      : {}

  const blogRoutes = allPosts.map((post) => ({
    url: `${siteUrl}/posts/${post.slug}`,
    lastModified: post.lastmod || post.date,
    ...languageAlternates(post.slug),
  }))

  const blogRoutesRs = allPostsRs.map((post) => ({
    url: `${siteUrl}/posts/rs/${post.slug}`,
    lastModified: post.lastmod || post.date,
    ...languageAlternates(post.slug),
  }))
  // The post list changes whenever a post does, not only when its page.tsx changes
  const newestPost = [...allPosts, ...allPostsRs]
    .map((post) => post.lastmod || post.date)
    .sort()
    .at(-1)

  // /tags is noindex like the tag pages, so it stays out of the sitemap
  const routes = [
    { route: '', file: 'app/page.tsx' },
    { route: 'posts', file: 'app/posts/page.tsx', lastModified: newestPost },
    { route: 'services', file: 'app/services/page.tsx' },
    { route: 'projects', file: 'app/projects/page.tsx' },
    { route: 'about', file: 'app/about/page.tsx' },
  ].map(({ route, file, lastModified }) => ({
    // No trailing slash on the home page, same as its canonical
    url: route ? `${siteUrl}/${route}` : siteUrl,
    lastModified: lastModified ?? getLastModified(file),
  }))

  return [...routes, ...blogRoutes, ...blogRoutesRs]
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
