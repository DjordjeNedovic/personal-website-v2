import { ctm, cva, type VariantProps } from 'app/utils/style'
import Image from 'next/image'
import type { ReactNode } from 'react'

const cardVariants = cva('rounded-xl', {
  variants: {
    variant: {
      default:
        'border border-slate-200 bg-white text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100',
      muted: 'bg-slate-50 text-slate-900 dark:bg-slate-800 dark:text-slate-100',
      featured: 'bg-primary-600 text-white',
    },
    interactive: {
      true: 'group h-full shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    interactive: false,
  },
})

interface CardProps extends VariantProps<typeof cardVariants> {
  children: ReactNode
  className?: string
  as?: 'div' | 'article'
  id?: string
}

export function Card({ children, className, variant, interactive, as = 'div', id }: CardProps) {
  const Tag = as
  return (
    <Tag id={id} className={ctm(cardVariants({ variant, interactive }), className)}>
      {children}
    </Tag>
  )
}

export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={ctm('p-6 pb-4', className)}>{children}</div>
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={ctm(
        'flex items-center gap-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100',
        className
      )}
    >
      {children}
    </h2>
  )
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={ctm('p-6 pt-0', className)}>{children}</div>
}

/** Image header for interactive grid cards, with a placeholder when there is no image. */
export function CardMedia({
  src,
  alt,
  fallback,
}: {
  src?: string
  alt: string
  fallback: ReactNode
}) {
  return (
    <div className="relative h-48 overflow-hidden rounded-t-xl bg-gradient-to-br from-primary-500 to-primary-700">
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-white/80">
          {fallback}
        </div>
      )}
    </div>
  )
}
