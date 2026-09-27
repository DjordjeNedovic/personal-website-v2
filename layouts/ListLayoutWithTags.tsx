/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import Link from '@/components/common/Link'
import PostContainer from '@/components/posts/PostContainer'
import PageHeader from '@/components/ui/PageHeader'
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
    <div className="border-t border-slate-200 pt-6 dark:border-slate-700">
      <nav className="flex justify-between text-sm font-medium">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
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
          <Link
            href={`/${basePath}/page/${currentPage + 1}`}
            rel="next"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
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
      <PageHeader title={title} description="Things I figured out so you don't have to." />
      <ul className="divide-y divide-slate-200 dark:divide-slate-700">
        {displayPosts.map((post, index) => (
          <li key={post.path} className="py-8 first:pt-0">
            <PostContainer post={post} author={author as Authors} priority={index === 0} />
          </li>
        ))}
      </ul>
      {pagination && pagination.totalPages > 1 && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
