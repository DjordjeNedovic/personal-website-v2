import { genPageMetadata } from 'app/seo'
import AboutMainComponent from '@/components/about/AboutMainComponent'
import AboutFullComponent from '@/components/about/AboutFullComponent'
import type React from 'react'

export const metadata = genPageMetadata({
  title: 'About Djordje Nedovic',
  description:
    'Senior Software Engineer with 7+ years of experience specializing in .NET, Azure, and performance optimization. AZ-204 and AZ-500 certified. Based in Novi Sad, Serbia.',
  openGraph: {
    title: 'About Djordje Nedovic | Senior Software Engineer',
    description:
      'Senior Software Engineer specializing in .NET, Azure cloud architecture, and performance optimization.',
    url: 'https://djordjenedovic.tech/about',
    type: 'profile',
  },
})

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Djordje Nedovic',
    jobTitle: 'Senior Software Engineer',
    description:
      'Senior Software Engineer specializing in performance optimization, Azure cloud solutions, and full-stack development',
    url: 'https://djordjenedovic.tech',
    sameAs: ['https://linkedin.com/in/djordjenedovic', 'https://github.com/DjordjeNedovic'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Novi Sad',
      addressCountry: 'Serbia',
    },
    email: 'nedovic.djordje@gmail.com',
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
      <div className="bg-white dark:bg-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="flex p-0 md:p-4 w-auto items-center justify-between h-auto">
          <div className="flex flex-col items-start justify-start h-auto flex-1">
            <AboutMainComponent />
            <AboutFullComponent />
          </div>
        </div>
      </div>
    </>
  )
}
