import Tag from '@/components/tags/Tag'
import PageHeader from '@/components/ui/PageHeader'
import { genPageMetadata } from 'app/seo'
import { generateTagData } from '@/libs/query/posts'

export const metadata = genPageMetadata({
  title: 'Tags',
  description:
    'Browse posts by topic: .NET, Azure, Azure DevOps, Terraform, CI/CD and performance — practical notes from real production work.',
})

export default async function Page() {
  const tagCounts = generateTagData()
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  return (
    <>
      <PageHeader title="Tags" description="Things I blog about." />
      <div className="flex flex-wrap gap-x-5 gap-y-4 pb-12">
        {tagKeys.length === 0 && 'No tags found.'}
        {sortedTags.map((t) => (
          <Tag key={t} text={t} count={tagCounts[t]} />
        ))}
      </div>
    </>
  )
}
