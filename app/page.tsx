import MainPage from '@/components/main/pages/MainPage'
import { allAuthors, type Authors } from '@/libs/velite'
import { sortedPosts } from '@/libs/query/posts'
import siteMetadata from '@/data/siteMetadata'

export default async function Page() {
  const posts = sortedPosts
  const author = allAuthors.find((p) => p.slug === 'default') as Authors

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Djordje Nedovic',
    url: siteMetadata.siteUrl,
  }

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Djordje Nedovic',
    url: siteMetadata.siteUrl,
    jobTitle: 'Senior Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Combined Ratio Solutions',
    },
    sameAs: [siteMetadata.linkedin, siteMetadata.github, siteMetadata.twitter],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <MainPage posts={posts} author={author} />
    </>
  )
}
