import { Blog } from 'contentlayer/generated'
import { Authors } from '@/libs/velite'
import { CoreContent } from 'pliny/utils/contentlayer.js'
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
      <div className="bg-white dark:bg-slate-900">
        <IntroduceContainer />
        <div className="flex p-0 md:p-4 w-auto items-center justify-between h-auto">
          <LatestPostContainer posts={posts} author={author} />
        </div>
      </div>
    </>
  )
}
