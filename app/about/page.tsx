import { genPageMetadata } from 'app/seo'
import AboutMainComponent from '@/components/about/AboutMainComponent'
import AboutFullComponent from '@/components/about/AboutFullComponent'
export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <AboutMainComponent />
      <AboutFullComponent />
    </>
  )
}
