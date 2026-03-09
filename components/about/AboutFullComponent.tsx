'use client'

import type React from 'react'
import {
  Code2,
  Globe,
  Server,
  Cloud,
  Shield,
  Award,
  Calendar,
  Building,
  GraduationCap,
  Zap,
  Users,
  TrendingUp,
} from 'lucide-react'

// Custom Card Components with Dark Theme Support
const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`rounded-lg border bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-sm border-slate-200 dark:border-slate-700 ${className}`}
  >
    {children}
  </div>
)

const CardHeader = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>

const CardTitle = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => (
  <h3
    className={`text-2xl font-semibold leading-none tracking-tight text-slate-900 dark:text-slate-100 ${className}`}
  >
    {children}
  </h3>
)

const CardContent = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => <div className={`p-6 pt-0 ${className}`}>{children}</div>

const Badge = ({
  children,
  variant = 'default',
  className = '',
}: {
  children: React.ReactNode
  variant?: 'default' | 'secondary' | 'outline'
  className?: string
}) => {
  const baseClasses =
    'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors'
  const variantClasses = {
    default:
      'bg-slate-900 dark:bg-slate-100 text-slate-50 dark:text-slate-900 hover:bg-slate-900/80 dark:hover:bg-slate-100/80',
    secondary:
      'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 hover:bg-slate-100/80 dark:hover:bg-slate-700/80',
    outline:
      'border border-slate-200 dark:border-slate-600 bg-transparent text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800',
  }

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>{children}</span>
  )
}

export default function AboutFullComponent() {
  const skills = {
    'Programming Languages': {
      icon: <Code2 className="h-5 w-5" aria-hidden="true" />,
      items: ['C#', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'YAML'],
    },
    'Frameworks & Technologies': {
      icon: <Globe className="h-5 w-5" aria-hidden="true" />,
      items: ['.NET Core', 'React', 'Next.js', 'Vue.js', 'xUnit', 'Terraform'],
    },
    'Cloud & DevOps': {
      icon: <Cloud className="h-5 w-5" aria-hidden="true" />,
      items: [
        'Azure',
        'Azure DevOps',
        'Azure Pipelines',
        'Azure Service Bus',
        'Azure Functions',
        'Azure App Services',
        'Docker',
        'Kubernetes',
      ],
    },
    'Tools & Others': {
      icon: <Server className="h-5 w-5" aria-hidden="true" />,
      items: [
        'Linux',
        'PowerShell',
        'REST API',
        'Git',
        'Microservices',
        'Event-driven Architecture',
        'System Design',
      ],
    },
  }

  const experience = [
    {
      title: 'Senior Software Engineer',
      company: 'Combined Ratio Solutions',
      location: 'Novi Sad, Serbia · Remote',
      period: 'April 2025 – Present',
      highlights: [
        'Architecting and building a greenfield cloud-native platform on .NET and Azure from scratch, owning core backend services, API design, and data modelling.',
        'Delivering features end-to-end in a small team — React UI, CI/CD pipelines in Azure DevOps, and production deployments.',
        'Improving performance and reliability through refactoring, code reviews, and solid unit test coverage.',
      ],
    },
    {
      title: 'Senior Software Engineer',
      company: 'Endava',
      location: 'Novi Sad, Serbia · Hybrid',
      period: 'Nov 2021 – April 2025',
      highlights: [
        'Worked as a backend-focused full-stack engineer on a fintech banking portal, delivering features across .NET, SQL, Vue.js, and React in a large cross-functional team.',
        'Designed and built a distributed REST API for foreign-currency transaction processing, improving system throughput and stability — enabling ~€50k in annual operational savings.',
        'Migrated legacy microservices from Azure Service Fabric to AKS, including a .NET Framework to .NET Core upgrade, improving scalability and reducing operational overhead.',
        'Built and maintained CI/CD pipelines in Azure DevOps, automating build, test, and deployment workflows across multiple environments.',
        "Upgraded Terraform infrastructure across multiple major versions (0.10 → 1.9), debugging and documenting an undocumented AzureRM provider bug that wasn't solvable through official docs or community resources.",
        "Acted as the team's security champion — running code reviews, identifying vulnerable dependencies, and driving remediation across the codebase.",
        'Developed event-driven microservices using Azure Service Bus, Functions, and App Services.',
        'Delivered a user-permissions compliance report for an external banking audit that passed independent regulatory review.',
      ],
    },
    {
      title: 'Software Engineer / Tridion Consultant',
      company: 'EXLRT',
      location: 'Novi Sad, Serbia',
      period: 'Jun 2017 – Nov 2021',
      highlights: [
        'Maintained and improved backend systems for a mission-critical airline platform, working across C#, .NET, Java, SQL, and CMS, with shared responsibility for 24/7 on-call support and high-availability operations (99.9% uptime).',
        'Reduced memory consumption by over 70% through targeted performance optimization on payment-processing workflows and backend APIs.',
        'Contributed to a migration from a monolithic architecture to a distributed REST-based system, implementing and deploying microservices to Linux servers.',
        'Managed server-level operations across Windows and Linux environments, including troubleshooting, monitoring, and automated maintenance using PowerShell and Shell scripting.',
        'Mentored junior developers through code reviews and knowledge sharing.',
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'EXLRT',
      location: 'Novi Sad, Serbia',
      period: 'May 2017 – Jun 2017',
      highlights: [
        'Built a vacation-management web application using C#, .NET, Entity Framework, JavaScript, and MS SQL Server.',
        'Collaborated with the team on database design, backend logic, and UI implementation using Git for version control.',
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'Vega IT Sourcing',
      location: 'Novi Sad, Serbia',
      period: 'Oct 2016 – Nov 2016',
      highlights: [
        'Developed a time-sheet tracking application using C#, .NET, MVC, JavaScript, and MS SQL Server to support internal reporting workflows.',
        'Implemented time-entry flows, automated hour calculations, and real-time project reporting features.',
      ],
    },
  ]

  const certifications = [
    {
      name: 'AZ-900: Microsoft Certified: Azure Fundamentals',
      date: 'Dec. 2021',
      icon: <Cloud className="h-4 w-4" aria-hidden="true" />,
    },
    {
      name: 'AZ-204: Microsoft Certified: Azure Developer Associate',
      date: 'Jan. 2022',
      icon: <Code2 className="h-4 w-4" aria-hidden="true" />,
    },
    {
      name: 'AZ-500: Microsoft Certified: Azure Security Engineer Associate',
      date: 'Feb. 2022',
      icon: <Shield className="h-4 w-4" aria-hidden="true" />,
    },
  ]

  const optimizationAchievements = [
    {
      icon: (
        <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" aria-hidden="true" />
      ),
      title: 'Cost Optimization',
      description:
        '~€50k in annual operational savings through distributed system architecture improvements in a banking environment.',
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
      title: 'Performance',
      description:
        'Reduced application memory consumption by over 70% (from 3GB to 800MB) on mission-critical airline systems.',
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" aria-hidden="true" />,
      title: 'Reliability',
      description:
        'Maintained 99.9% uptime on airline operations with shared 24/7 on-call responsibility.',
    },
  ]

  return (
    <>
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 pb-8 px-4 transition-colors duration-300">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Optimization Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6" aria-hidden="true" />
                Key Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {optimizationAchievements.map((achievement, index) => (
                  <div key={index} className="text-center space-y-3">
                    <div className="flex justify-center">{achievement.icon}</div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="h-6 w-6" aria-hidden="true" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, { icon, items }]) => (
                  <div key={category} className="space-y-3">
                    <h3 className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
                      {icon}
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-6 w-6" aria-hidden="true" />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {experience.map((job, index) => (
                <article
                  key={index}
                  className="border-l-4 border-blue-500 dark:border-blue-400 pl-6 space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      <time>{job.period}</time>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 font-medium">
                    {job.company} • {job.location}
                  </p>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                    {job.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span
                          className="text-blue-500 dark:text-blue-400 mt-1.5"
                          aria-hidden="true"
                        >
                          •
                        </span>
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </CardContent>
          </Card>

          {/* Certifications Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6" aria-hidden="true" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded-lg">{cert.icon}</div>
                      <div className="space-y-1">
                        <h4 className="font-medium text-slate-900 dark:text-slate-100 text-sm leading-tight">
                          {cert.name}
                        </h4>
                        <time className="text-xs text-slate-600 dark:text-slate-400">
                          {cert.date}
                        </time>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6" aria-hidden="true" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  University of Novi Sad
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Bachelor of Science in Electrical and Computer Engineering
                </p>
                <p className="text-slate-600 dark:text-slate-400">GPA: 9.3/10</p>
                <div className="mt-3">
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-2">
                    Relevant Coursework:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Computer Architecture',
                      'Comparison of Learning Algorithms',
                      'Computational Theory',
                    ].map((course) => (
                      <Badge key={course} variant="outline" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
