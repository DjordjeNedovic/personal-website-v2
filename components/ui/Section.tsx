import { ctm } from 'app/utils/style'
import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  title?: ReactNode
  description?: ReactNode
  action?: ReactNode
  id?: string
  className?: string
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
      {children}
    </h2>
  )
}

export default function Section({
  children,
  title,
  description,
  action,
  id,
  className,
}: SectionProps) {
  return (
    <section id={id} className={ctm('scroll-mt-20 pb-12', className)}>
      {(title || action) && (
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            {title && <SectionHeading>{title}</SectionHeading>}
            {description && (
              <p className="mt-2 text-base text-slate-600 dark:text-slate-400">{description}</p>
            )}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  )
}
