import Tag from '@/components/tags/Tag'
import type { Blog } from 'contentlayer/generated'
import type { Authors } from '@/libs/velite'
import type { CoreContent } from 'pliny/utils/contentlayer.js'
import NavigationButton from '../common/NavigationButton'
import PostThumbnailWrapper from '../common/PostThumbnailWrapper'
import PostAuthorSection from '../common/PostAuthorSection'

export default function PostContainer({
  post,
  author,
}: {
  post: Blog | CoreContent<Blog>
  author: Authors
}) {
  const { slug, date, title, summary, tags, images } = post

  return (
    <div className="post-container">
      <div className="post-grid">
        <PostThumbnailWrapper
          title={title}
          slug={slug}
          image={Array.isArray(images) ? images[0] : '/static/images/banner.jpeg'}
          className="post-thumbnail-small"
          imageObjectFit="contain"
        />

        <div className="post-content-large">
          {' '}
          <div className="flex-1">
            <NavigationButton
              href={`/posts/${slug}`}
              isArrow={false}
              color="slate"
              title={title}
              spanClassName="post-title"
              buttonClassName="tracking-normal"
            />

            <p className="post-summary">{summary ?? ''}</p>

            <div className="mt-3">
              <NavigationButton
                color="primary"
                href={`/posts/${slug}`}
                title={'Read more'}
                isArrow={true}
              />
            </div>
          </div>
          <div className="post-tags">
            {tags.map((tag) => (
              <Tag className="post-tag" key={tag} text={tag} />
            ))}
          </div>
          <PostAuthorSection author={author} date={date} />
        </div>
      </div>
    </div>
  )
}
