import { genPageMetadata } from 'app/seo'
import AboutMainComponent from '@/components/about/AboutMainComponent'
import AboutFullComponent from '@/components/about/AboutFullComponent'
import { PERSON_ID } from '@/libs/seo/person'
import siteMetadata from '@/data/siteMetadata'

const title = 'About – Senior .NET & Azure Engineer'
const description =
  'Djordje Nedovic is a Senior Software Engineer specializing in .NET, Azure, and distributed systems, with 8+ years in fintech, aviation, and insurance.'

export const metadata = genPageMetadata({
  title,
  description,
  image: '/images/logo/social_banner.png',
  openGraph: {
    url: 'https://djordjenedovic.tech/about',
    type: 'profile',
  },
})

const microsoft = { '@type': 'Organization', name: 'Microsoft', url: 'https://www.microsoft.com' }

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: 'https://djordjenedovic.tech/about',
    mainEntity: {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Djordje Nedovic',
      jobTitle: 'Senior Software Engineer',
      description,
      url: 'https://djordjenedovic.tech',
      image: `${siteMetadata.siteUrl}/images/profile.jpg`,
      sameAs: [siteMetadata.linkedin, siteMetadata.github],
      worksFor: {
        '@type': 'Organization',
        name: 'Combined Ratio Solutions',
      },
      knowsAbout: [
        '.NET',
        'Microsoft Azure',
        'Distributed systems',
        'Terraform',
        'Azure DevOps',
        'Performance optimization',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Novi Sad',
        addressCountry: 'RS',
      },
      email: 'nedovic.djordje@gmail.com',
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'University of Novi Sad',
      },
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'AZ-900: Microsoft Certified: Azure Fundamentals',
          credentialCategory: 'certification',
          recognizedBy: microsoft,
          dateCreated: '2021-12',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'AZ-204: Microsoft Certified: Azure Developer Associate',
          credentialCategory: 'certification',
          recognizedBy: microsoft,
          dateCreated: '2022-01',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'AZ-500: Microsoft Certified: Azure Security Engineer Associate',
          credentialCategory: 'certification',
          recognizedBy: microsoft,
          dateCreated: '2022-02',
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
