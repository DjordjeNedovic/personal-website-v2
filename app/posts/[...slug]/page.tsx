import { allPosts } from '@/libs/velite'
import PostSimple from '@/layouts/PostSimple'
import { components } from '@/components/posts/MDXComponents'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getStructuredData } from '@/libs/seo/structuredData'
import { getReadingTime } from '@/libs/utils/utils'

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/')

  const post = allPosts.find((p) => p.slug === slug)

  if (!post) return <div>Not found</div>

  const sorted = [...allPosts]
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const index = sorted.findIndex((p) => p.slug === slug)

  const prev = sorted[index + 1] ?? null
  const next = sorted[index - 1] ?? null

  const mainContent = {
    title: post.title,
    date: post.date,
    summary: post.summary,
    tags: post.tags,
    slug: post.slug,
  }
  const structuredData = getStructuredData(post)

  const readingTime = getReadingTime(post.content)
  return (
    <PostSimple
      content={mainContent}
      next={next}
      prev={prev}
      readingTime={readingTime}
      structuredData={structuredData}
    >
      <MDXRemote source={post.content} components={components} />
    </PostSimple>
  )
}
