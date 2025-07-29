import SEO from '@/components/SEO'
import { Authors, Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'
import IntroduceContainer from '../templates/IntroduceContainer'
import LatestPostContainer from '../templates/LatestPostContainer'

export default function MainPage({
  posts,
  author,
}: {
  posts: CoreContent<Blog>[]
  author: Authors
}) {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-white dark:bg-slate-900">
        <IntroduceContainer />
        <div className="max-w-6xl mx-auto px-4">
          <LatestPostContainer posts={posts} author={author} />
        </div>
      </div>
    </>
  )
}
