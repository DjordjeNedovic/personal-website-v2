'use client'

import type React from 'react'
import { MapPin, Mail, Phone, Linkedin, Github, Users } from 'lucide-react'
import Image from 'next/image'

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

export default function AboutMainComponent() {
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

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 pb-8 px-4 transition-colors duration-300">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header Section */}
          <header className="space-y-6">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <Image
                  src="/static/images/profile.jpg"
                  alt="Djordje Nedovic - Senior Software Engineer"
                  width={140}
                  height={140}
                  className="w-40 h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-lg"
                />
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center lg:text-left space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100">
                    Djordje Nedovic
                  </h1>
                  <h2 className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300">
                    Senior Software Engineer & Performance Optimization Expert
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <MapPin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                    <span>Novi Sad, Serbia</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                    <a
                      href="mailto:nedovic.djordje@gmail.com"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate"
                    >
                      nedovic.djordje@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                    <a
                      href="tel:+381611885802"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      (+381)61 188 58 02
                    </a>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Linkedin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                    <a
                      href="https://linkedin.com/in/djordjenedovic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 sm:col-span-2 lg:col-span-1 xl:col-span-2">
                    <Github className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                    <a
                      href="https://github.com/DjordjeNedovic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* About Me Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6" aria-hidden="true" />
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                I'm a passionate Senior Software Engineer with over 7 years of experience
                specializing in
                <strong> performance optimization</strong>, <strong>cloud architecture</strong>, and{' '}
                <strong>full-stack development</strong>. My expertise lies in designing and
                implementing scalable solutions that deliver measurable business value. I have a
                proven track record of reducing operational costs, improving system performance, and
                leading cross-functional teams to deliver high-quality software solutions. As a
                certified Azure professional and security champion, I bring deep technical knowledge
                combined with strong leadership skills to drive innovation and excellence in every
                project.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
