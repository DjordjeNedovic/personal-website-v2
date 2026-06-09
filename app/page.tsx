import MainPage from '@/components/main/pages/MainPage'
import { allAuthors, type Authors } from '@/libs/velite'
import { sortedPosts } from '@/libs/query/posts'

export default async function Page() {
  const posts = sortedPosts
  const author = allAuthors.find((p) => p.slug === 'default') as Authors

  return <MainPage posts={posts} author={author} />
}
