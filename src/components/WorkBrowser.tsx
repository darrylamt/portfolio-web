'use client'

import { useEffect, useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { projectCategories, projects } from '@/lib/data'
import ProjectCard from './ProjectCard'

const filters = ['All', 'Live', 'Contributed', ...projectCategories]

export default function WorkBrowser() {
  const [filter, setFilter] = useState('All')
  const [query, setQuery] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const f = params.get('filter')
    const q = params.get('q')
    if (f && filters.includes(f)) setFilter(f)
    if (q) setQuery(q)
  }, [])

  useEffect(() => {
    const params = new URLSearchParams()
    if (filter !== 'All') params.set('filter', filter)
    if (query.trim()) params.set('q', query.trim())
    const next = params.toString()
    window.history.replaceState(null, '', next ? `?${next}` : window.location.pathname)
  }, [filter, query])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((project) => {
      const matchesFilter =
        filter === 'All' ||
        (filter === 'Live' && project.status === 'live') ||
        (filter === 'Contributed' && project.contributed) ||
        project.category === filter
      const matchesQuery =
        !q ||
        `${project.name} ${project.tagline} ${project.summary} ${project.stack.join(' ')} ${project.category}`
          .toLowerCase()
          .includes(q)
      return matchesFilter && matchesQuery
    })
  }, [filter, query])

  return (
    <>
      <div className="flex flex-col gap-4 border-b border-line pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={`chip shrink-0 ${filter === item ? 'chip-active' : ''}`}
            >
              {item}
              {item === 'Live' && filter !== 'Live' && (
                <span className="size-1.5 rounded-full bg-positive" />
              )}
            </button>
          ))}
        </div>

        <label className="relative flex items-center lg:w-72">
          <Search size={15} className="pointer-events-none absolute left-3.5 text-faint" />
          <span className="sr-only">Search projects</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name or stack"
            className="w-full rounded-pill border border-line bg-surface py-2.5 pl-9 pr-9 text-[14px] text-ink outline-none transition-colors placeholder:text-faint focus:border-ink/30 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-3 text-faint transition-colors hover:text-ink"
            >
              <X size={14} />
            </button>
          )}
        </label>
      </div>

      <p aria-live="polite" className="mt-6 text-[13px] text-muted">
        {results.length} {results.length === 1 ? 'project' : 'projects'}
        {filter !== 'All' && ` in ${filter}`}
        {query && ` matching “${query}”`}
      </p>

      {results.length === 0 ? (
        <div className="card mt-6 grid place-items-center px-6 py-20 text-center">
          <p className="text-[15px] font-semibold">Nothing here</p>
          <p className="mt-1.5 max-w-sm text-[13px] text-muted">
            Try a different filter, or search for a stack like “Supabase” or “Postgres”.
          </p>
          <button
            type="button"
            onClick={() => {
              setFilter('All')
              setQuery('')
            }}
            className="btn-ghost mt-6"
          >
            Reset
          </button>
        </div>
      ) : (
        <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </>
  )
}
