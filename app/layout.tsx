import 'css/tailwind.css'
import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import SectionContainer from '@/components/common/SectionContainer'
import Footer from '@/components/common/Footer'
import Header from '@/components/header/Header'
import siteMetadata from '@/data/siteMetadata'
import { Metadata } from 'next'
import { ThemeProviders } from './theme-providers'
import { GoogleAnalytics } from '@next/third-parties/google'
import 'prismjs/themes/prism-tomorrow.css'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${space_grotesk.variable} scroll-smooth`} suppressHydrationWarning>
      <meta name="google-site-verification" content="NexAAqcA4HTnd0HO2t4ZhWdqzXahMveX0dS6uaT74zo" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#f1f1f1" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <body className="bg-white text-black antialiased dark:bg-gray-800 dark:text-white">
        <ThemeProviders>
          <SectionContainer>
            <div className="flex h-screen flex-col justify-between font-sans">
              <Header />
              <main className="mb-auto">{children}</main>
              <Footer />
            </div>
          </SectionContainer>
        </ThemeProviders>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ID!} />
      </body>
    </html>
  )
}
