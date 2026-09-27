import projectsData from '@/data/projectsData'
import { ArrowUpRight, Code2, Mail } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { Card, CardMedia } from '@/components/ui/Card'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import siteMetadata from '@/data/siteMetadata'

type Project = (typeof projectsData)[number] & { technologies?: string[] }

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <a href={project.href} target="_blank" rel="noopener noreferrer" className="block h-full">
      <Card as="article" interactive className="flex flex-col">
        <CardMedia
          src={project.imgSrc}
          alt={project.title}
          fallback={<Code2 className="h-16 w-16" aria-hidden="true" />}
        />
        <div className="flex flex-1 flex-col p-6">
          <h2 className="mb-3 line-clamp-2 text-xl font-semibold leading-tight text-slate-900 dark:text-slate-100">
            {project.title}
          </h2>
          <p className="mb-4 line-clamp-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.description}
          </p>
          {project.technologies && (
            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          )}
          <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-4 text-sm font-medium text-slate-500 dark:border-slate-700 dark:text-slate-400">
            <span>View on GitHub</span>
            <ArrowUpRight
              className="h-5 w-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-500"
              aria-hidden="true"
            />
          </div>
        </div>
      </Card>
    </a>
  )
}

const ProjectsContainer = () => {
  return (
    <>
      <PageHeader
        title="Projects"
        description="A showcase of my software development projects, from coding challenges to full-stack applications, demonstrating expertise in .NET, React, and cloud technologies."
      />

      <Section>
        {!projectsData.length ? (
          <p className="py-12 text-center text-lg text-slate-500">No projects found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}
      </Section>

      <Card variant="muted" className="mb-12 p-8 text-center sm:p-12">
        <h2 className="text-2xl font-semibold tracking-tight">Interested in collaboration?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of
          your vision.
        </p>
        <Button href={`mailto:${siteMetadata.email}`} size="lg" className="mt-6">
          <Mail className="h-4 w-4" aria-hidden="true" />
          Get in touch
        </Button>
      </Card>
    </>
  )
}

export default ProjectsContainer
