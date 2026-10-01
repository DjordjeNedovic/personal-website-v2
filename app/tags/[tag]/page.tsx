import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { slug } from 'github-slugger'
import { filteredTagPosts, generateTagData, getTagName } from '@/libs/query/posts'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>
}): Promise<Metadata> {
  const { tag } = await params
  const name = getTagName(decodeURI(tag)) ?? tag
  return genPageMetadata({
    title: `Posts tagged ${name}`,
    description: `Articles by ${siteMetadata.author} about ${name}: practical notes on software engineering, .NET and Azure.`,
    alternates: { canonical: './' },
    // Tag archives are thin and overlap with the posts themselves: keep them out of the
    // index but let crawlers follow the links to the posts.
    robots: { index: false, follow: true },
  })
}

// Only tags that are actually used exist; anything else is a real 404.
export const dynamicParams = false

export const generateStaticParams = async () => {
  return Object.keys(generateTagData()).map((t) => ({ tag: slug(t) }))
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: tagParams } = await params
  const tag = decodeURI(tagParams)
  const name = getTagName(tag)
  const filteredPosts = filteredTagPosts(tag)
  if (!name || !filteredPosts.length) notFound()

  return <ListLayout posts={filteredPosts} title={name} />
}
