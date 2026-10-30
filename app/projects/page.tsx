import ProjectsContainer from '@/components/project/ProjectsContainer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Projects',
  description:
    'Software projects by Djordje Nedovic, from Advent of Code solutions to this blog, built with .NET, React, and cloud technologies.',
  keywords: [
    'software projects',
    'portfolio',
    'Advent of Code',
    'blog development',
    '.NET projects',
    'React applications',
    'open source',
  ],
  openGraph: {
    type: 'website',
    url: 'https://djordjenedovic.tech/projects',
  },
})
import siteMetadata from '@/data/siteMetadata'
import { personRef } from '@/libs/seo/person'

export default function Projects() {
  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Projects — Djordje Nedovic',
    description: metadata.description,
    url: `${siteMetadata.siteUrl}/projects`,
    author: personRef,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <ProjectsContainer />
    </>
  )
}
