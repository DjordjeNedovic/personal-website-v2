import ListLayout from '@/layouts/ListLayoutWithTags'
import { allAuthors, Authors, allPosts } from '@/libs/velite'
import { sortedPosts } from '@/libs/query/posts'
const POSTS_PER_PAGE = 5

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))

  return paths
}

export default async function Page({ params }: { params: Promise<{ page: string }> }) {
  const { page: pageParams } = await params
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const posts = sortedPosts
  const pageNumber = parseInt(pageParams as string)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <ListLayout
      author={author}
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}
