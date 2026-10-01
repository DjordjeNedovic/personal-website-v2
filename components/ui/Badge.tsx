import { ctm, cva, type VariantProps } from 'app/utils/style'
import type { ReactNode } from 'react'

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium',
  {
    variants: {
      variant: {
        primary: 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300',
        neutral: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300',
        outline: 'border border-slate-200 text-slate-700 dark:border-slate-600 dark:text-slate-300',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: ReactNode
  className?: string
}

export default function Badge({ children, variant, className }: BadgeProps) {
  return <span className={ctm(badgeVariants({ variant }), className)}>{children}</span>
}
