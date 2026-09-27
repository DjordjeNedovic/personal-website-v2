import { genPageMetadata } from 'app/seo'
import AboutMainComponent from '@/components/about/AboutMainComponent'
import AboutFullComponent from '@/components/about/AboutFullComponent'

export const metadata = genPageMetadata({
  title: 'About',
  description:
    'Djordje Nedovic is a Senior Software Engineer specializing in .NET, Azure cloud architecture, and distributed systems. Based in Novi Sad, Serbia.',
  image: '/images/logo/social_banner.png',
  openGraph: {
    title: 'About',
    description:
      'Senior Software Engineer specializing in .NET, Azure cloud architecture, and performance optimization.',
    url: 'https://djordjenedovic.tech/about',
    type: 'profile',
  },
})

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: 'https://djordjenedovic.tech/about',
    mainEntity: {
      '@type': 'Person',
      name: 'Djordje Nedovic',
      jobTitle: 'Senior Software Engineer',
      description:
        'Senior Software Engineer specializing in performance optimization, Azure cloud solutions, and full-stack development',
      url: 'https://djordjenedovic.tech',
      sameAs: ['https://www.linkedin.com/in/djordjenedovic', 'https://github.com/DjordjeNedovic'],
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
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutMainComponent />
      <AboutFullComponent />
    </>
  )
}
