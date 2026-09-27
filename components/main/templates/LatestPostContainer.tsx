import NavigationButton from '@/components/common/NavigationButton'
import Badge from '@/components/ui/Badge'
import { Card, CardMedia } from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import type { Authors, Post } from '@/libs/velite'
import { Calendar, ArrowRight, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const MAX_DISPLAY = 6

const PostCard = ({ post, author }: { post: Post; author: Authors }) => {
  return (
    <Card as="article" interactive className="flex flex-col">
      <CardMedia
        src={post.images?.[0]}
        alt={post.title}
        fallback={<span className="text-4xl font-bold">{post.title.charAt(0).toUpperCase()}</span>}
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex min-h-[2rem] flex-wrap gap-2">
          {post.tags?.slice(0, 3).map((tag) => (
            <Badge key={tag}>
              <Tag className="h-3 w-3" aria-hidden="true" />
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="mb-3 line-clamp-2 min-h-[3.5rem] text-xl font-semibold leading-tight text-slate-900 dark:text-slate-100">
          {post.title}
        </h3>
        <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {post.summary || 'No summary available...'}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <Image
              src={author.avatar || '/placeholder.svg'}
              alt={author.name}
              width={32}
              height={32}
              className="h-8 w-8 rounded-full border-2 border-white shadow-sm dark:border-slate-600"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                {author.name}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                <Calendar className="h-3 w-3" aria-hidden="true" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
          </div>
          <ArrowRight
            className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary-500"
            aria-hidden="true"
          />
        </div>
      </div>
    </Card>
  )
}

const LatestPostContainer = ({ posts, author }: { posts: Post[]; author: Authors }) => {
  const hasMore = posts.length > MAX_DISPLAY

  return (
    <Section
      title="Latest posts"
      description="Insights on software development, performance optimization, and cloud architecture"
      action={
        hasMore && (
          <NavigationButton
            title="View All"
            href="/posts"
            color="primary"
            isArrow={true}
            buttonClassName="hidden md:inline-flex"
          />
        )
      }
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {!posts.length && (
          <p className="col-span-full py-12 text-center text-lg text-slate-500">No posts found.</p>
        )}
        {posts.slice(0, MAX_DISPLAY).map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`} className="block h-full">
            <PostCard post={post} author={author} />
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center md:hidden">
          <NavigationButton title="View All Posts" href="/posts" color="primary" isArrow={true} />
        </div>
      )}
    </Section>
  )
}

export default LatestPostContainer
