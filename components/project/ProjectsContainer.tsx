'use client'

import projectsData from '@/data/projectsData'
import { ExternalLink, Github, Calendar, Code2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

// Enhanced Project Card Component
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EnhancedProjectCard = ({ project }: { project: any }) => {
  return (
    <article className="group h-full bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col h-full">
        {/* Image Section - Fixed Height */}
        <div className="relative h-48 overflow-hidden rounded-t-xl">
          {project.imgSrc ? (
            <Image
              src={project.imgSrc}
              alt={project.title}
              width={300}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Code2 className="w-16 h-16 text-white opacity-80" />
            </div>
          )}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
        </div>

        {/* Content Section - Flexible Height */}
        <div className="flex flex-col flex-1 p-6">
          {/* Title - Fixed Height */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 line-clamp-2 min-h-[3.5rem] leading-tight">
            {project.title}
          </h3>

          {/* Description - Flexible Height */}
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-4 flex-1">
            {project.description}
          </p>

          {/* Technologies */}
          {project.technologies && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 4).map((tech: string) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Footer - Fixed Height */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700 mt-auto">
            <div className="flex items-center gap-3">
              {project.status && (
                <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                  <Calendar className="w-3 h-3" />
                  <span>{project.status}</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-blue-500 transition-colors"
                  aria-label={`Visit ${project.title}`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

const ProjectsContainer = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="space-y-4 mb-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100">
              Projects
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A showcase of my software development projects, from coding challenges to full-stack
              applications, demonstrating expertise in .NET, React, and cloud technologies.
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {projectsData.length}+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">5+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">2+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Years Active</div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {!projectsData.length && (
            <div className="col-span-full text-center py-12">
              <div className="text-slate-400 dark:text-slate-500 text-lg">No projects found.</div>
            </div>
          )}

          {projectsData.map((project) => (
            <div key={project.title} className="h-full">
              <EnhancedProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Interested in Collaboration?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your vision.
          </p>
          <a
            href="mailto:nedovic.djordje@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <ExternalLink className="w-4 h-4" />
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectsContainer
