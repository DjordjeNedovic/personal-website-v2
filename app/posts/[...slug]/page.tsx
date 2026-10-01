import { allPosts, allPostsRs, Post } from '@/libs/velite'
import { notFound } from 'next/navigation'
import PostSimple from '@/layouts/PostSimple'
import { components } from '@/components/posts/MDXComponents'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getStructuredData } from '@/libs/seo/structuredData'
import { getReadingTime } from '@/libs/utils/utils'
import { sortedPosts } from '@/libs/query/posts'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import rehypePrismPlus from 'rehype-prism-plus'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata> {
  const { slug: slugParts } = await params
  const slug = slugParts.join('/')
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
      languages: allPostsRs.some((p) => p.slug === slug)
        ? {
            en: `${siteMetadata.siteUrl}/posts/${slug}`,
            sr: `${siteMetadata.siteUrl}/posts/rs/${slug}`,
            'x-default': `${siteMetadata.siteUrl}/posts/${slug}`,
          }
        : undefined,
    },
  }
}

// Only the generated posts exist; anything else is a real 404.
export const dynamicParams = false

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({
    slug: post.slug.split('/'),
  }))
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug: slugParts } = await params
  const slug = slugParts.join('/')

  const post = allPosts.find((p) => p.slug === slug)

  if (!post) notFound()

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
      translation={
        allPostsRs.some((p) => p.slug === slug)
          ? undefined //{ href: `/posts/rs/${slug}`, label: 'Pročitaj na srpskom', lang: 'sr' }
          : undefined
      }
    >
      <MDXRemote
        source={post.content}
        components={components}
        options={{
          mdxOptions: {
            rehypePlugins: [[rehypePrismPlus, { defaultLanguage: 'js', ignoreMissing: true }]],
          },
        }}
      />
    </PostSimple>
  )
}
