import { allPosts } from '@/libs/velite'
import { slug } from 'github-slugger'

export const sortedPosts = allPosts
  .filter((p) => !p.draft && !p.slug?.includes('rs/'))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export function filteredTagPosts(tag) {
  return sortedPosts.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag))
}

export function generateTagData() {
  const tagCounts: Record<string, number> = {}

  allPosts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
  })

  return tagCounts
}
