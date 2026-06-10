import { allPosts, Post } from '@/libs/velite'
import PostSimple from '@/layouts/PostSimple'
import { components } from '@/components/posts/MDXComponents'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getStructuredData } from '@/libs/seo/structuredData'
import { getReadingTime } from '@/libs/utils/utils'
import { sortedPosts } from '@/libs/query/posts'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata> {
  const slug = params.slug.join('/')
  const post = allPosts.find((p) => p.slug === slug)

  if (!post) return { title: 'Post Not Found' }

  const imageList = post.images?.length ? post.images : [siteMetadata.socialBanner]

  return {
    title: post.title,
    description: post.summary,
    authors: [{ name: 'Djordje Nedovic' }],
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      url: `${siteMetadata.siteUrl}/posts/${slug}`,
      images: imageList,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
    alternates: {
      canonical: post.canonicalUrl ?? `${siteMetadata.siteUrl}/posts/${slug}`,
    },
  }
}

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({
    slug: post.slug.split('/'),
  }))
}

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
