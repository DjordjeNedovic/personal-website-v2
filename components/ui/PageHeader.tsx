import PageTitle from '@/components/common/PageTitle'
import { ctm } from 'app/utils/style'
import type { ReactNode } from 'react'

interface PageHeaderProps {
  title: ReactNode
  eyebrow?: string
  description?: ReactNode
  align?: 'left' | 'center'
  children?: ReactNode
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={ctm(
        'text-xs font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400',
        className
      )}
    >
      {children}
    </p>
  )
}

export default function PageHeader({
  title,
  eyebrow,
  description,
  align = 'left',
  children,
}: PageHeaderProps) {
  const centered = align === 'center'
  return (
    <header className={ctm('pb-10 pt-4 sm:pt-6', centered && 'text-center')}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <PageTitle>{title}</PageTitle>
      {description && (
        <p
          className={ctm(
            'mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400',
            centered && 'mx-auto'
          )}
        >
          {description}
        </p>
      )}
      {children && (
        <div
          className={ctm('mt-8 flex flex-wrap items-center gap-4', centered && 'justify-center')}
        >
          {children}
        </div>
      )}
    </header>
  )
}
