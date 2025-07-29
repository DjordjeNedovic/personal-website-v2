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
        'Docker',
        'Kubernetes',
      ],
    },
    'Tools & Others': {
      icon: <Server className="h-5 w-5" aria-hidden="true" />,
      items: ['Linux', 'PowerShell', 'REST API', 'Git', 'Microservices'],
    },
  }

  const experience = [
    {
      title: 'Senior Software Engineer',
      company: 'Endava',
      location: 'Novi Sad, Serbia',
      period: 'Nov 2021 – Present',
      highlights: [
        'Successfully completed multiple software projects in intralogistics, retail, and fintech using C#, .NET Core, React, TypeScript, and Azure technologies in cross-functional Agile teams',
        'End-to-end involvement in software development lifecycle, including design, development, and testing using xUnit and Moq, improving scalability and enhancing CI/CD pipeline automation',
        'Designed and implemented RESTful API microservices-based system for foreign currency transaction processing, achieving 0.75 FTE cost savings through optimization',
        'Developed and maintained microservices architecture on Azure, leveraging event-driven development with Azure Service Bus, App Services, and Azure Functions',
        "Recognized as team's internal security champion, driving cybersecurity best practices across all projects",
        'Developed user permissions report that passed external auditing, ensuring regulatory compliance for a startup bank',
        'Contributed to legacy system modernization by migrating from Azure Service Fabric to Azure Kubernetes Services, improving deployment speed and system resilience',
      ],
    },
    {
      title: 'Software Engineer / Tridion Consultant',
      company: 'EXLRT',
      location: 'Novi Sad, Serbia',
      period: 'Jun 2017 – Nov 2021',
      highlights: [
        'Developed and maintained mission-critical applications for airline company, ensuring 99.9% uptime through reliable troubleshooting and testing strategies',
        'Implemented secure and efficient payment processing system for airline operations',
        'Maintained high system availability through timely Windows and Linux server maintenance using Shell and PowerShell scripting',
        'Provided 24/7 on-call support, resolving critical issues within average of 2 hours',
        'Participated in migration from legacy monolithic system to RESTful API microservices architecture',
        'Reduced application memory consumption by over 70% (from 3GB to 800MB), enhancing scalability and lowering operational costs',
        'Mentored junior developers, fostering collaborative environment that increased team productivity',
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'EXLRT',
      location: 'Novi Sad, Serbia',
      period: 'May 2017 – Jun 2017',
      highlights: [
        'Developed vacation management web application using C# .NET Framework, Entity Framework, MVC, and MS SQL Server',
        'Collaborated with team to ensure smooth integration with internal HR tools',
        'Strengthened full-stack development skills in database design and UI implementation',
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'Vega IT Sourcing',
      location: 'Novi Sad, Serbia',
      period: 'Oct 2016 – Nov 2016',
      highlights: [
        'Developed time-sheet web application using C# .NET, ADO.NET, MVC 4, and MS SQL Server',
        'Implemented automated hour calculations and real-time reporting features',
        'Gained practical experience in enterprise-level software development',
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
        'Achieved 0.75 FTE cost savings through system optimization and process improvements',
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
      title: 'Performance Enhancement',
      description: 'Reduced application memory consumption by 70% (from 3GB to 800MB)',
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" aria-hidden="true" />,
      title: 'System Reliability',
      description: 'Maintained 99.9% uptime for mission-critical airline applications',
    },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Djordje Nedovic',
    jobTitle: 'Senior Software Engineer',
    description:
      'Senior Software Engineer specializing in performance optimization, Azure cloud solutions, and full-stack development',
    url: 'https://djordjenedovic.netlify.app',
    sameAs: ['https://linkedin.com/in/djordjenedovic', 'https://github.com/DjordjeNedovic'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Novi Sad',
      addressCountry: 'Serbia',
    },
    email: 'nedovic.djordje@gmail.com',
    telephone: '+381611885802',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of Novi Sad',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'AZ-204: Microsoft Certified: Azure Developer Associate',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'AZ-500: Microsoft Certified: Azure Security Engineer Associate',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-4 transition-colors duration-300">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Optimization Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6" aria-hidden="true" />
                Key Optimization Achievements
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
                Professional Experience
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
                Professional Certifications
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
