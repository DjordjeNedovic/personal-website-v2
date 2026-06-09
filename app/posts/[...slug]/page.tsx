import { allPosts, Post } from '@/libs/velite'
import PostSimple from '@/layouts/PostSimple'
import { components } from '@/components/posts/MDXComponents'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getStructuredData } from '@/libs/seo/structuredData'
import { getReadingTime } from '@/libs/utils/utils'
import { sortedPosts } from '@/libs/query/posts'

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/')

  const post = allPosts.find((p) => p.slug === slug)

  if (!post) return <div>Not found</div>

  const sorted: Post[] = sortedPosts

  const index = sorted.findIndex((p) => p.slug === slug)
  const prev =
    index < sortedPosts.length - 1
      ? {
          path: `posts/${sortedPosts[index + 1].slug}`,
          title: sortedPosts[index + 1].title,
        }
      : undefined

  const next =
    index > 0
      ? {
          path: `posts/${sortedPosts[index - 1].slug}`,
          title: sortedPosts[index - 1].title,
        }
      : undefined

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
