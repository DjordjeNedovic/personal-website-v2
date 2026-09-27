import { Authors, Post } from '@/libs/velite'
import AboutMainComponent from '@/components/about/AboutMainComponent'
import LatestPostContainer from '../templates/LatestPostContainer'

export default function MainPage({ posts, author }: { posts: Post[]; author: Authors }) {
  return (
    <>
      <AboutMainComponent />
      <LatestPostContainer posts={posts} author={author} />
    </>
  )
}
