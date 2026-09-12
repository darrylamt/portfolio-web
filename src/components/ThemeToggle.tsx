'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function useTheme() {
  const [theme, setThemeState] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    setThemeState(document.documentElement.classList.contains('dark') ? 'dark' : 'light')
  }, [])

  const setTheme = (next: 'light' | 'dark') => {
    document.documentElement.classList.toggle('dark', next === 'dark')
    try {
      localStorage.setItem('theme', next)
    } catch {}
    setThemeState(next)
  }

  return { theme, setTheme, toggle: () => setTheme(theme === 'dark' ? 'light' : 'dark') }
}

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggle } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      className={`grid size-9 place-items-center rounded-pill border border-line bg-surface text-muted transition-colors hover:text-ink ${className}`}
    >
      {mounted && theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
