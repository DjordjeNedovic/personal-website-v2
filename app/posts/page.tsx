import ListLayout from '@/layouts/ListLayoutWithTags'
import { type Authors, allAuthors } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

const POSTS_PER_PAGE = 5

// DIFF: Poboljšan SEO metadata
export const metadata = genPageMetadata({
  title: 'All Posts - Djordje Nedovic Dev Blog',
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
    title: 'All Posts - Djordje Nedovic',
    description: 'Technical blog posts about software engineering and cloud architecture',
    type: 'website',
    url: 'https://djordjenedovic.netlify.app/posts',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Posts - Djordje Nedovic',
    description: 'Technical blog posts about software engineering and cloud architecture',
  },
})

export default function BlogPage() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const posts = allCoreContent(sortPosts(allBlogs))
  const pageNumber = 1
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  // DIFF: Dodao structured data za SEO
  const blogListingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Djordje Nedovic Dev Blog',
    description: 'Technical blog about software development and performance optimization',
    url: 'https://djordjenedovic.netlify.app/posts',
    author: {
      '@type': 'Person',
      name: 'Djordje Nedovic',
      url: 'https://djordjenedovic.netlify.app',
    },
    blogPost: posts.slice(0, 10).map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: 'Djordje Nedovic',
      },
      url: `https://djordjenedovic.netlify.app/posts/${post.slug}`,
      description: post.summary,
    })),
  }

  return (
    <>
      {/* DIFF: Dodao structured data script */}
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
