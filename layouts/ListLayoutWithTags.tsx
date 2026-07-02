/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import Link from '@/components/common/Link'
import PostContainer from '@/components/posts/PostContainer'
import { allAuthors, type Authors, type Post } from '@/libs/velite'
import { usePathname } from 'next/navigation'
import React from 'react'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: Post[]
  title: string
  initialDisplayPosts?: Post[]
  pagination?: PaginationProps
  author?: Authors
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages
  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <>
      <div className="bg-white dark:bg-slate-900">
        <div className="flex p-0 md:p-4 w-auto items-center justify-between h-auto">
          <div className="flex flex-col items-start justify-start h-auto flex-1">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 pb-8 px-4 transition-colors duration-300">
              <div className="max-w-6xl mx-auto space-y-8">
                {/* Header Section */}
                <header className="space-y-6">
                  <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100">
                      {title}
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                      Things I figured out so you don't have to.
                    </p>
                  </div>
                </header>
                <div>
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {displayPosts.map((post) => {
                      return (
                        <li key={post.path} className="py-6 xl:pr-8">
                          <PostContainer post={post} author={author as Authors} />
                        </li>
                      )
                    })}
                  </ul>
                  {pagination && pagination.totalPages > 1 && (
                    <Pagination
                      currentPage={pagination.currentPage}
                      totalPages={pagination.totalPages}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
