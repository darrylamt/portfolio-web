'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  ArrowUpRight,
  Command as CommandIcon,
  Copy,
  Github,
  Home,
  Layers,
  Mail,
  Moon,
  Search,
  Smartphone,
  Sun,
} from 'lucide-react'
import { profile, projects } from '@/lib/data'
import { useTheme } from './ThemeToggle'

type Item = {
  id: string
  label: string
  hint?: string
  group: 'Pages' | 'Work' | 'Live sites' | 'Actions'
  keywords?: string
  icon: React.ReactNode
  run: () => void
}

export default function CommandPalette() {
  const router = useRouter()
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const [copied, setCopied] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const close = useCallback(() => {
    setOpen(false)
    setQuery('')
    setActive(0)
  }, [])

  const items = useMemo<Item[]>(() => {
    const go = (href: string) => () => {
      close()
      router.push(href)
    }
    const openExternal = (href: string) => () => {
      close()
      window.open(href, '_blank', 'noopener,noreferrer')
    }

    return [
      { id: 'home', label: 'Home', group: 'Pages', icon: <Home size={15} />, run: go('/') },
      { id: 'work', label: 'All work', group: 'Pages', icon: <Layers size={15} />, run: go('/work') },
      ...projects.map<Item>((p) => ({
        id: `p-${p.slug}`,
        label: p.name,
        hint: p.tagline,
        group: 'Work',
        keywords: `${p.category} ${p.stack.join(' ')} ${p.tagline}`,
        icon: <span className="font-mono text-[10px] font-medium text-faint">{p.cover.mark}</span>,
        run: go(`/work/${p.slug}`),
      })),
      ...projects
        .filter((p) => p.testflight)
        .map<Item>((p) => ({
          id: `t-${p.slug}`,
          label: `Get ${p.name} on TestFlight`,
          hint: 'iOS beta',
          group: 'Live sites',
          keywords: `ios app iphone testflight ${p.name}`,
          icon: <Smartphone size={15} />,
          run: openExternal(p.testflight as string),
        })),
      ...projects
        .filter((p) => p.live)
        .map<Item>((p) => ({
          id: `l-${p.slug}`,
          label: `Open ${p.name} live`,
          hint: p.liveLabel ?? undefined,
          group: 'Live sites',
          keywords: `visit ${p.name} production`,
          icon: <ArrowUpRight size={15} />,
          run: openExternal(p.live as string),
        })),
      {
        id: 'theme',
        label: `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`,
        group: 'Actions',
        keywords: 'dark light mode appearance',
        icon: theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />,
        run: () => {
          toggle()
          close()
        },
      },
      {
        id: 'copy',
        label: 'Copy email address',
        hint: profile.email,
        group: 'Actions',
        keywords: 'contact hire mail',
        icon: <Copy size={15} />,
        run: () => {
          navigator.clipboard?.writeText(profile.email)
          setCopied(true)
          setTimeout(() => setCopied(false), 1600)
          close()
        },
      },
      {
        id: 'mail',
        label: 'Send an email',
        group: 'Actions',
        keywords: 'contact hire work together',
        icon: <Mail size={15} />,
        run: openExternal(`mailto:${profile.email}`),
      },
      {
        id: 'github',
        label: 'Open GitHub profile',
        group: 'Actions',
        keywords: 'code repositories source',
        icon: <Github size={15} />,
        run: openExternal(profile.github),
      },
    ]
  }, [close, router, theme, toggle])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter((item) =>
      `${item.label} ${item.hint ?? ''} ${item.keywords ?? ''} ${item.group}`
        .toLowerCase()
        .includes(q),
    )
  }, [items, query])

  const grouped = useMemo(() => {
    const map = new Map<Item['group'], Item[]>()
    results.forEach((item) => {
      map.set(item.group, [...(map.get(item.group) ?? []), item])
    })
    return Array.from(map.entries())
  }, [results])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setOpen((value) => !value)
        return
      }
      if (event.key === 'Escape') close()
    }
    const onOpen = () => setOpen(true)
    window.addEventListener('keydown', onKey)
    window.addEventListener('open-command-palette', onOpen)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('open-command-palette', onOpen)
    }
  }, [close])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      requestAnimationFrame(() => inputRef.current?.focus())
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => setActive(0), [query])

  useEffect(() => {
    listRef.current?.querySelector('[data-active="true"]')?.scrollIntoView({ block: 'nearest' })
  }, [active])

  const onListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActive((index) => (index + 1) % Math.max(results.length, 1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((index) => (index - 1 + results.length) % Math.max(results.length, 1))
    } else if (event.key === 'Enter') {
      event.preventDefault()
      results[active]?.run()
    }
  }

  return (
    <>
      {copied && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-[90] -translate-x-1/2 animate-scale-in rounded-pill bg-ink px-4 py-2 text-[13px] font-medium text-canvas shadow-pop"
        >
          Email copied
        </div>
      )}

      {open && (
        <div
          className="fixed inset-0 z-[95] flex items-start justify-center bg-ink/25 px-4 pt-[12vh] backdrop-blur-sm"
          onMouseDown={close}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            onMouseDown={(event) => event.stopPropagation()}
            onKeyDown={onListKeyDown}
            className="w-full max-w-xl animate-scale-in overflow-hidden rounded-card border border-line bg-surface shadow-pop"
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <Search size={16} className="shrink-0 text-faint" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search projects, pages and actions"
                aria-label="Search"
                className="w-full bg-transparent py-4 text-[15px] text-ink outline-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-faint"
              />
              <kbd className="hidden shrink-0 rounded-md border border-line px-1.5 py-0.5 font-mono text-[10px] text-faint sm:block">
                ESC
              </kbd>
            </div>

            <div ref={listRef} className="max-h-[54vh] overflow-y-auto p-2">
              {results.length === 0 && (
                <p className="px-3 py-8 text-center text-[13px] text-muted">
                  Nothing matches “{query}”.
                </p>
              )}

              {grouped.map(([group, groupItems]) => (
                <div key={group} className="mb-1">
                  <p className="px-3 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-faint">
                    {group}
                  </p>
                  {groupItems.map((item) => {
                    const index = results.indexOf(item)
                    const isActive = index === active
                    return (
                      <button
                        key={item.id}
                        type="button"
                        data-active={isActive}
                        onMouseEnter={() => setActive(index)}
                        onClick={item.run}
                        className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                          isActive ? 'bg-raised text-ink' : 'text-muted'
                        }`}
                      >
                        <span className="grid size-7 shrink-0 place-items-center rounded-lg border border-line bg-canvas text-muted">
                          {item.icon}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-[14px] font-medium text-ink">
                            {item.label}
                          </span>
                          {item.hint && (
                            <span className="block truncate text-[12px] text-faint">{item.hint}</span>
                          )}
                        </span>
                        {isActive && <span className="font-mono text-[10px] text-faint">↵</span>}
                      </button>
                    )
                  })}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-line px-4 py-2.5 text-[11px] text-faint">
              <span className="inline-flex items-center gap-1.5">
                <CommandIcon size={12} /> Command palette
              </span>
              <span className="font-mono">↑ ↓ to navigate · ↵ to select</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
