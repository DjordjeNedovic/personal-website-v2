import { ctm } from '../../app/utils/style'
import Link from 'next/link'
import ArrowIcon from './ArrowIcon'

interface NavigationButtonProps {
  href: string
  title?: string
  color: 'primary' | 'slate'
  isArrow?: boolean
  children?: React.ReactNode
  buttonClassName?: string
  spanClassName?: string
}

// Full class names so Tailwind can detect them at build time.
const linkColors = {
  primary:
    'inline-block text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300',
  slate:
    'inline-block text-slate-900 hover:text-primary-600 dark:text-slate-100 dark:hover:text-primary-400',
}

const NavigationButton = ({
  href,
  title,
  color,
  isArrow,
  children,
  buttonClassName,
  spanClassName,
}: NavigationButtonProps) => {
  return (
    <span
      className={ctm(
        'group inline-flex items-center justify-start bg-transparent font-medium tracking-widest',
        buttonClassName
      )}
    >
      <span
        className={ctm(
          `relative pb-1 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100 leading-6`,
          isArrow ? 'pr-2' : 'pr-0',
          color === 'primary' ? `after:bg-primary-500` : `after:bg-slate-500`,
          spanClassName
        )}
      >
        <Link href={href} className={linkColors[color]}>
          {children ? children : title}
        </Link>
      </span>
      {isArrow && <ArrowIcon color={color} />}
    </span>
  )
}

export default NavigationButton
