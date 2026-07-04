import ListLayout from '@/layouts/ListLayoutWithTags'
import { allAuthors, type Authors } from '@/libs/velite'
import { genPageMetadata } from 'app/seo'
import { sortedPosts } from '@/libs/query/posts'
import siteMetadata from '@/data/siteMetadata'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({
  title: 'All Posts',
  description:
    'Browse all blog posts about software development, performance optimization, Azure, and .NET by Djordje Nedovic',
  keywords: [
    'blog',
    'software development',
    '.NET',
    'Azure',
    'performance optimization',
    'cloud architecture',
  ],
  openGraph: {
    title: 'All Posts',
    description: 'Technical blog posts about software engineering and cloud architecture',
    type: 'website',
    url: 'https://djordjenedovic.tech/posts',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Posts',
    description: 'Technical blog posts about software engineering and cloud architecture',
  },
})

export default function BlogPage() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const posts = sortedPosts
  const pageNumber = 1
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  const blogListingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Djordje Nedovic Dev Blog',
    description: 'Technical blog about software development and performance optimization',
    url: 'https://djordjenedovic.tech/posts',
    author: {
      '@type': 'Person',
      name: 'Djordje Nedovic',
      url: 'https://djordjenedovic.tech',
    },
    blogPost: posts.slice(0, 10).map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: 'Djordje Nedovic',
      },
      url: `https://djordjenedovic.tech/posts/${post.slug}`,
      description: post.summary,
      dateModified: post.lastmod || post.date,
      image: post.images?.[0]
        ? post.images[0].startsWith('http')
          ? post.images[0]
          : `${siteMetadata.siteUrl}${post.images[0]}`
        : `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListingSchema) }}
      />
      <ListLayout
        author={author}
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </>
  )
}
