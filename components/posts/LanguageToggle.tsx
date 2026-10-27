import Link from '@/components/common/Link'

type Lang = 'en' | 'sr'

const LABELS: Record<Lang, string> = { en: 'English', sr: 'Srpski' }

interface LanguageToggleProps {
  /** Language of the current page */
  current: Lang
  /** URL of the same post in the other language */
  href: string
}

export default function LanguageToggle({ current, href }: LanguageToggleProps) {
  const languages: Lang[] = ['en', 'sr']

  return (
    <nav
      aria-label={current === 'sr' ? 'Jezik' : 'Language'}
      className="mt-5 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 text-sm font-medium shadow-sm dark:border-slate-700 dark:bg-slate-800"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ml-2 mr-1 h-4 w-4 text-slate-400 dark:text-slate-500"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      {languages.map((lang) =>
        lang === current ? (
          <span
            key={lang}
            aria-current="true"
            className="rounded-full bg-primary-600 px-3 py-1 text-white shadow-sm"
          >
            {LABELS[lang]}
          </span>
        ) : (
          <Link
            key={lang}
            href={href}
            hrefLang={lang}
            lang={lang}
            className="rounded-full px-3 py-1 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white"
          >
            {LABELS[lang]}
          </Link>
        )
      )}
    </nav>
  )
}
