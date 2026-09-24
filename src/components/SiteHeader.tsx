'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import InstallButton from './InstallButton'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/#stack', label: 'Stack' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#contact', label: 'Contact' },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-line bg-canvas/85 backdrop-blur-xl'
          : 'border-transparent bg-canvas'
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5"
          aria-label="Darryl Amoatey, home"
        >
          <span className="grid size-8 place-items-center rounded-xl bg-ink font-display text-[13px] font-extrabold text-canvas transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
            da
          </span>
          <span className="hidden font-display text-[15px] font-bold tracking-tight sm:block">
            Darryl Amoatey
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link rounded-pill px-3.5 py-2 text-[14px] font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event('open-command-palette'))}
            className="hidden items-center gap-2 rounded-pill border border-line bg-surface py-2 pl-3 pr-2 text-[13px] text-muted transition-colors hover:text-ink sm:flex"
            aria-label="Open command palette"
          >
            <Search size={14} />
            <span className="hidden lg:inline">Search</span>
            <kbd className="rounded-md border border-line px-1.5 py-0.5 font-mono text-[10px]">
              ⌘K
            </kbd>
          </button>

          <InstallButton />
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="grid size-9 place-items-center rounded-pill border border-line bg-surface text-muted md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile"
          className="animate-fade-up border-t border-line bg-canvas px-5 py-3 md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-xl px-3 py-3 text-[15px] font-medium text-ink hover:bg-raised"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false)
              window.dispatchEvent(new Event('open-command-palette'))
            }}
            className="mt-1 flex w-full items-center gap-2 rounded-xl px-3 py-3 text-left text-[15px] font-medium text-muted hover:bg-raised"
          >
            <Search size={15} /> Search everything
          </button>
        </nav>
      )}
    </header>
  )
}
