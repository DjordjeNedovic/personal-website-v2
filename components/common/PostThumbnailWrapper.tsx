import { ctm } from '../../app/utils/style'
import Link from 'next/link'
import Image from './Image'

interface PostThumbnailWrapper {
  slug: string
  title: string
  image: string
  className?: string
  imageObjectFit: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  /** Set for the first, above-the-fold thumbnail so it is not lazy-loaded (LCP). */
  priority?: boolean
}

const PostThumbnailWrapper = ({
  slug,
  title,
  image,
  className,
  imageObjectFit,
  priority = false,
}: PostThumbnailWrapper) => {
  return (
    <div className={ctm('relative overflow-hidden bg-clip-border ', className)}>
      <Link
        className="block relative overflow-hidden bg-clip-border w-auto rounded-xl h-72 bg-white"
        href={`/posts/${slug}`}
        aria-label={`Read "${title}"`}
      >
        <Image
          className="absolute inset-0 w-full h-full"
          sizes="100%"
          src={image}
          alt={title}
          fill
          priority={priority}
          style={{ objectFit: imageObjectFit }}
        />
      </Link>
    </div>
  )
}

export default PostThumbnailWrapper
