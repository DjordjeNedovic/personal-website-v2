import Button from '@/components/ui/Button'
import PageHeader from '@/components/ui/PageHeader'

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
