import Button from '@/components/ui/Button'
import PageHeader from '@/components/ui/PageHeader'
import { Metadata } from 'next'

// Overrides the root layout's canonical and index robots, which don't apply to a 404
export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
  alternates: { canonical: null },
}

export default function NotFound() {
  return (
    <PageHeader
      eyebrow="404"
      title="Sorry, we couldn't find this page."
      description="But don't worry, you can find plenty of other things on the homepage."
    >
      <Button href="/">Back to homepage</Button>
    </PageHeader>
  )
}
