import Link from '@/components/common/Link'

type Lang = 'en' | 'sr'

const LABELS: Record<Lang, { short: string; full: string }> = {
  en: { short: 'EN', full: 'English' },
  sr: { short: 'SR', full: 'Srpski' },
}

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
      className="inline-flex items-center rounded-full border border-slate-200 bg-white p-0.5 text-xs font-semibold dark:border-slate-700 dark:bg-slate-800"
    >
      {languages.map((lang) =>
        lang === current ? (
          <span
            key={lang}
            aria-current="true"
            title={LABELS[lang].full}
            className="rounded-full bg-primary-600 px-2 py-0.5 text-white"
          >
            {LABELS[lang].short}
          </span>
        ) : (
          <Link
            key={lang}
            href={href}
            hrefLang={lang}
            lang={lang}
            title={LABELS[lang].full}
            aria-label={LABELS[lang].full}
            className="rounded-full px-2 py-0.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"
          >
            {LABELS[lang].short}
          </Link>
        )
      )}
    </nav>
  )
}
