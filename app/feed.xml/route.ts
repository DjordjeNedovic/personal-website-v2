import siteMetadata from '@/data/siteMetadata'
import { sortedPosts } from '@/libs/query/posts'

export const dynamic = 'force-static'

const escape = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

export function GET() {
  const items = sortedPosts
    .map((post) => {
      const url = `${siteMetadata.siteUrl}/posts/${post.slug}`
      const categories = (post.tags ?? [])
        .map((tag) => `      <category>${escape(tag)}</category>`)
        .join('\n')
      return `    <item>
      <title>${escape(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escape(post.summary ?? '')}</description>
      <author>${siteMetadata.email} (${escape(siteMetadata.author)})</author>
${categories}
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(siteMetadata.title)}</title>
    <link>${siteMetadata.siteUrl}</link>
    <description>${escape(siteMetadata.description)}</description>
    <language>en</language>
    <lastBuildDate>${new Date(sortedPosts[0]?.date ?? Date.now()).toUTCString()}</lastBuildDate>
    <atom:link href="${siteMetadata.siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  })
}
