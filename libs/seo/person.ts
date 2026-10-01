import siteMetadata from '@/data/siteMetadata'

// One Person entity shared by every page's JSON-LD, so search engines merge them.
export const PERSON_ID = `${siteMetadata.siteUrl}/#person`

export const personRef = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Djordje Nedovic',
  url: siteMetadata.siteUrl,
}
