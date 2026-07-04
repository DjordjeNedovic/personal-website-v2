'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import DarkThemeIcon from './DarkThemeIcon'
import LightThemeIcon from './LightThemeIcon'

const ThemeSwitchWrapper = () => {
  // const [mounted, setMounted] = useState(false)
  const [_, setIsDarkMode] = useState<boolean>(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  useEffect(() => {
    setIsDarkMode(theme === 'dark' || resolvedTheme === 'dark')
  }, [theme, resolvedTheme])

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="flex items-center justify-center min-w-[48px] min-h-[48px]"
    >
      <DarkThemeIcon />
      <LightThemeIcon />
    </button>
  )
}

export default ThemeSwitchWrapper
