import ProjectsContainer from '@/components/project/ProjectsContainer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Projects - Djordje Nedovic',
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
    title: 'Projects - Djordje Nedovic',
    description: 'Software development projects and technical implementations',
    type: 'website',
    url: 'https://djordjenedovic.netlify.app/projects',
  },
})

export default function Projects() {
  return <ProjectsContainer />
}
