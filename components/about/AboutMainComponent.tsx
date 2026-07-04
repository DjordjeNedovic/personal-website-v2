'use client'

import type React from 'react'
import { MapPin, Mail, Users } from 'lucide-react'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'

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
  return (
    <>
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 pb-8 px-4 transition-colors duration-300">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header Section */}
          <header className="space-y-6">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/profile.jpg"
                  alt="Djordje Nedovic - Senior Software Engineer"
                  width={140}
                  height={140}
                  priority
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
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
                    <a
                      href={siteMetadata.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <a
                      href={siteMetadata.github}
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
                I'm a Senior Software Engineer based in Novi Sad, Serbia. I work primarily in .NET
                and Azure, building distributed systems for fintech and enterprise - backend mostly,
                though I end up touching everything from infrastructure to frontend when needed.
                I've spent the last 8 years working on systems where things actually have to work -
                banking platforms, airline operations, cloud-native products built from scratch. I
                tend to be the person who digs into the hard problems, figures out what's going on,
                and documents it so the next person doesn't have to suffer through the same thing.
                Outside of work I write occasionally about things I run into - undocumented bugs,
                .NET patterns, DevOps workflows. Not on a schedule, just when something seems worth
                sharing.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
