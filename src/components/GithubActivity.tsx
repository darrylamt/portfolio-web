'use client'

import { useEffect, useState } from 'react'
import { Github } from 'lucide-react'
import { profile } from '@/lib/data'
import type { ActivityItem } from '@/app/api/github/route'

function relative(iso: string) {
  const diff = Date.now() - new Date(iso).getTime()
  const minutes = Math.round(diff / 60000)
  if (minutes < 60) return `${Math.max(minutes, 1)}m ago`
  const hours = Math.round(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.round(hours / 24)
  if (days < 30) return `${days}d ago`
  return `${Math.round(days / 30)}mo ago`
}

export default function GithubActivity() {
  const [items, setItems] = useState<ActivityItem[] | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let alive = true
    fetch('/api/github')
      .then((response) => response.json())
      .then((data) => {
        if (alive) setItems(data.items ?? [])
      })
      .catch(() => alive && setFailed(true))
    return () => {
      alive = false
    }
  }, [])

  const empty = failed || (items !== null && items.length === 0)

  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <p className="inline-flex items-center gap-2 text-[14px] font-semibold">
          <Github size={15} /> Recent activity
        </p>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] text-muted transition-colors hover:text-ink"
        >
          @{profile.githubUser}
        </a>
      </div>

      {empty && (
        <p className="px-5 py-6 text-[13px] leading-relaxed text-muted">
          The live feed is rate limited right now. Everything I push is on{' '}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            GitHub
          </a>
          .
        </p>
      )}

      <ul className="divide-y divide-line">
        {!items && !empty &&
          Array.from({ length: 4 }).map((_, index) => (
            <li key={index} className="px-5 py-3.5">
              <div className="skeleton h-4 w-3/5 rounded" />
            </li>
          ))}

        {items?.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between gap-4 px-5 py-3.5 text-[13px]"
          >
            <span className="min-w-0 truncate text-muted">
              {item.verb}{' '}
              <a
                href={`https://github.com/${profile.githubUser}/${item.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-ink underline decoration-line underline-offset-4 hover:decoration-accent"
              >
                {item.repo}
              </a>
              {item.detail && <span className="text-faint"> · {item.detail}</span>}
            </span>
            <time dateTime={item.at} className="shrink-0 font-mono text-[11px] text-faint">
              {relative(item.at)}
            </time>
          </li>
        ))}
      </ul>

      <p className="border-t border-line px-5 py-3 text-[11px] text-faint">
        Served from a Next.js route handler, revalidated hourly at the edge.
      </p>
    </div>
  )
}
