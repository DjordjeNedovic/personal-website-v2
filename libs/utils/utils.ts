import readingTime from 'reading-time'

export function getReadingTime(content: string) {
  return readingTime(content)
}

export function formatDate(date: string, locale = 'en-US') {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
