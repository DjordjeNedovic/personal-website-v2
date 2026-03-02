import { allBlogs } from 'contentlayer/generated'
import type { Metadata } from 'next'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import type { Blog } from 'contentlayer/generated'
import { components } from '@/components/posts/MDXComponents'
import PostSimple from '@/layouts/PostSimple'
import { allCoreContent, coreContent, sortPosts } from 'pliny/utils/contentlayer'

const POSTS_PER_PAGE = 5

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))
  return paths
}

// DIFF: Dodao generateMetadata funkciju za bolje SEO
export async function generateMetadata({
  params,
}: {
  params: { page: string }
}): Promise<Metadata> {
  const pageNumber = Number.parseInt(params.page)

  return {
    title: `All Posts - Page ${pageNumber} | Djordje Nedovic`,
    description: `Browse blog posts about software development and performance optimization - Page ${pageNumber}`,
    robots: 'index,follow',
    alternates: {
      canonical: `https://djordjenedovic.netlify.app/posts/page/${pageNumber}`,
    },
    openGraph: {
      title: `All Posts - Page ${pageNumber} | Djordje Nedovic`,
      description: `Technical blog posts - Page ${pageNumber}`,
      url: `https://djordjenedovic.netlify.app/posts/page/${pageNumber}`,
      type: 'website',
    },
  }
}

export default async function Page({ params }: { params: { slug: string[]; locale: string } }) {
  const slug = decodeURI(params.slug.join('/'))

  // Filter out drafts in production
  const sortedCoreContents = allCoreContent(sortPosts(allBlogs))
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug)
  if (postIndex === -1) {
    return (
      <div className="mt-24 text-center">
        <span role="img" aria-label="roadwork sign">
          🚧
        </span>
      </div>
    )
  }

  const prev = sortedCoreContents[postIndex + 1]
  const next = sortedCoreContents[postIndex - 1]
  const post = allBlogs.find((p) => p.slug === slug) as Blog
  const mainContent = coreContent(post)

  return (
    <>
      <PostSimple content={mainContent} next={next} prev={prev}>
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </PostSimple>
    </>
  )
}
