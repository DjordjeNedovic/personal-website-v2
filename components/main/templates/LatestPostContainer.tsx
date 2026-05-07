'use client'

import NavigationButton from '@/components/common/NavigationButton'
import type { Authors, Blog } from 'contentlayer/generated'
import type { CoreContent } from 'pliny/utils/contentlayer.js'
import React, { Fragment } from 'react'
import { Calendar, ArrowRight, Tag } from 'lucide-react'
import Image from 'next/image'

const MAX_DISPLAY = 6

// Enhanced Post Card Component with consistent height
const EnhancedPostCard = ({ post, author }: { post: CoreContent<Blog>; author: Authors }) => {
  return (
    <article className="group h-full bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col h-full">
        {/* Image Section - Fixed Height */}
        <div className="relative h-48 overflow-hidden rounded-t-xl bg-gradient-to-br from-blue-500 to-purple-600">
          {post.images && post.images[0] ? (
            <Image
              src={post.images[0]}
              alt={post.title}
              width={300}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-white text-4xl font-bold opacity-80">
                {post.title.charAt(0).toUpperCase()}
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
        </div>

        {/* Content Section - Flexible Height */}
        <div className="flex flex-col flex-1 p-6">
          {/* Tags - Fixed Height */}
          <div className="flex flex-wrap gap-2 mb-3 min-h-[2rem]">
            {post.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Title - Fixed Height with Line Clamp */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 line-clamp-2 min-h-[3.5rem] leading-tight">
            {post.title}
          </h3>

          {/* Summary - Flexible Height with Line Clamp */}
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
            {post.summary || 'No summary available...'}
          </p>

          {/* Footer - Fixed Height */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700 mt-auto">
            <div className="flex items-center gap-3">
              <Image
                src={author.avatar || '/placeholder.svg'}
                alt={author.name}
                width={140}
                height={140}
                className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-600 shadow-sm"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                  {author.name}
                </span>
                <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </div>
      </div>
    </article>
  )
}

const LatestPostContainer = ({
  posts,
  author,
}: {
  posts: CoreContent<Blog>[]
  author: Authors
}) => {
  return (
    <div
      className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 px-4 transition-colors duration-300"
      style={{
        paddingTop: '48px',
        paddingBottom: '16px',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <Fragment>
          {/* Header Section */}
          <div className="space-y-4" style={{ paddingBottom: '32px' }}>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  Latest Posts
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Insights on software development, performance optimization, and cloud architecture
                </p>
              </div>
              {posts.length > MAX_DISPLAY && (
                <NavigationButton
                  title="View All"
                  href="/posts"
                  color="primary"
                  isArrow={true}
                  buttonClassName="hidden md:flex"
                />
              )}
            </div>
          </div>

          {/* Posts Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{ marginBottom: '16px' }}
          >
            {!posts.length && (
              <div className="col-span-full text-center py-12">
                <div className="text-slate-400 dark:text-slate-500 text-lg">No posts found.</div>
              </div>
            )}

            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug } = post
              return (
                <a
                  key={slug}
                  href={`/posts/${slug}`}
                  className="block h-full transform transition-transform duration-200 hover:scale-[1.02]"
                >
                  <EnhancedPostCard post={post} author={author} />
                </a>
              )
            })}
          </div>

          {/* Mobile View All Button */}
          {posts.length > MAX_DISPLAY && (
            <div className="flex justify-center md:hidden">
              <NavigationButton
                title="View All Posts"
                href="/posts"
                color="primary"
                isArrow={true}
                buttonClassName="w-full sm:w-auto"
              />
            </div>
          )}
        </Fragment>
      </div>
    </div>
  )
}

export default LatestPostContainer
