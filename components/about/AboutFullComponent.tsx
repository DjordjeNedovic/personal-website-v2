import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
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
import Badge from '@/components/ui/Badge'

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
        <TrendingUp className="h-6 w-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />
      ),
      title: 'Cost Optimization',
      description:
        '~€50k in annual operational savings through distributed system architecture improvements in a banking environment.',
    },
    {
      icon: <Zap className="h-6 w-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />,
      title: 'Performance',
      description:
        'Reduced application memory consumption by over 70% (from 3GB to 800MB) on mission-critical airline systems.',
    },
    {
      icon: <Users className="h-6 w-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />,
      title: 'Reliability',
      description:
        'Maintained 99.9% uptime on airline operations with shared 24/7 on-call responsibility.',
    },
  ]

  return (
    <>
      <section className="pb-12">
        <div className="space-y-8">
          {/* Optimization Achievements */}
          <Card>
            <CardHeader>
              <CardTitle>
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
              <CardTitle>
                <Code2 className="h-6 w-6" aria-hidden="true" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, { icon, items }]) => (
                  <div key={category} className="space-y-3">
                    <h3 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
                      {icon}
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge key={skill} variant="neutral">
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
              <CardTitle>
                <Building className="h-6 w-6" aria-hidden="true" />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="divide-y divide-slate-200 dark:divide-slate-700">
              {experience.map((job, index) => (
                <article key={index} className="space-y-3 py-6 first:pt-0 last:pb-0">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                        {job.title} · {job.company}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{job.location}</p>
                    </div>
                    <div className="flex flex-shrink-0 items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      <time>{job.period}</time>
                    </div>
                  </div>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                    {job.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-baseline gap-2">
                        <span
                          className="flex-shrink-0 text-primary-500 dark:text-primary-400"
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
              <CardTitle>
                <Award className="h-6 w-6" aria-hidden="true" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900/40"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-primary-100 p-2 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
                        {cert.icon}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium text-slate-900 dark:text-slate-100 text-sm leading-tight">
                          {cert.name}
                        </h3>
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
              <CardTitle>
                <GraduationCap className="h-6 w-6" aria-hidden="true" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                  University of Novi Sad
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Bachelor of Science in Electrical and Computer Engineering
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">GPA: 9.3/10</p>
                <div className="pt-2">
                  <p className="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
                    Relevant Coursework:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Computer Architecture',
                      'Comparison of Learning Algorithms',
                      'Computational Theory',
                    ].map((course) => (
                      <Badge key={course} variant="outline">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
