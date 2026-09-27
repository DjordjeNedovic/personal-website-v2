import Tag from '@/components/tags/Tag'
import type { Authors, Post } from '@/libs/velite'
import NavigationButton from '../common/NavigationButton'
import PostThumbnailWrapper from '../common/PostThumbnailWrapper'
import PostAuthorSection from '../common/PostAuthorSection'

export default function PostContainer({ post, author }: { post: Post; author: Authors }) {
  const { slug, date, title, summary, tags, images } = post

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
      <PostThumbnailWrapper
        title={title}
        slug={slug}
        image={Array.isArray(images) ? images[0] : '/static/images/banner.jpeg'}
        className="h-72 rounded-xl border border-slate-300/40 lg:w-1/3"
        imageObjectFit="cover"
      />

      <div className="flex flex-col justify-between lg:w-2/3">
        <div className="flex-1">
          <NavigationButton
            href={`/posts/${slug}`}
            isArrow={false}
            color="slate"
            title={title}
            spanClassName="block text-xl font-semibold text-slate-900 dark:text-white md:text-2xl"
            buttonClassName="tracking-normal"
          />

          <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">{summary ?? ''}</p>

          <div className="mt-3">
            <NavigationButton
              color="primary"
              href={`/posts/${slug}`}
              title={'Read more'}
              isArrow={true}
            />
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
        <PostAuthorSection author={author} date={date} />
      </div>
    </div>
  )
}
