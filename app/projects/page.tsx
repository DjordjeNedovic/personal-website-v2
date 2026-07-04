import ProjectsContainer from '@/components/project/ProjectsContainer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Projects',
  description:
    'Explore my software development projects including Advent of Code solutions, personal blog, and other technical implementations showcasing .NET, React, and cloud technologies.',
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
    title: 'Projects',
    description: 'Software development projects and technical implementations',
    type: 'website',
    url: 'https://djordjenedovic.tech/projects',
  },
})
import siteMetadata from '@/data/siteMetadata'

export default function Projects() {
  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Projects — Djordje Nedovic',
    description: 'Software development projects and technical implementations',
    url: `${siteMetadata.siteUrl}/projects`,
    author: {
      '@type': 'Person',
      name: 'Djordje Nedovic',
      url: siteMetadata.siteUrl,
    },
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
