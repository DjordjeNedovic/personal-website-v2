import { allBlogRs } from 'contentlayer/generated'
import type { Metadata } from 'next'
import { MDXLayoutRenderer } from 'pliny/mdx-components.js'
import type { BlogRs } from 'contentlayer/generated'
import PostSimple from '@/layouts/PostSimple'
import { allCoreContent, coreContent, sortPosts } from 'pliny/utils/contentlayer.js'
import siteMetadata from '@/data/siteMetadata'
import { components } from '@/components/posts/MDXComponents'

export const generateStaticParams = async () => {
  return allBlogRs.map((post) => ({
    slug: post.slug.split('/'),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata> {
  const slug = decodeURI(params.slug.join('/'))
  const post = allBlogRs.find((p) => p.slug === slug)

  if (!post) return { title: 'Post Not Found' }

  const imageList = post.images?.length ? post.images : [siteMetadata.socialBanner]

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'sr_RS',
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      url: `${siteMetadata.siteUrl}/posts/rs/${slug}`,
      images: imageList,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
    alternates: {
      canonical: post.canonicalUrl ?? `${siteMetadata.siteUrl}/posts/rs/${slug}`,
    },
  }
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { slug: slugs } = await params
  const slug = decodeURI(slugs.join('/'))

  console.log('allBlogRs slugs:', allBlogRs.map(p => p.slug))
  console.log('looking for slug:', slug)

  const sortedCoreContents = allCoreContent(sortPosts(allBlogRs))
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
  const post = allBlogRs.find((p) => p.slug === slug) as BlogRs
  const mainContent = coreContent(post)

  return (
    <PostSimple content={mainContent} next={next} prev={prev}>
      <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
    </PostSimple>
  )
}
