import { NextResponse } from 'next/server'
import { profile } from '@/lib/data'

export const revalidate = 3600

type GithubEvent = {
  id: string
  type: string
  created_at: string
  repo: { name: string }
  payload: { size?: number; commits?: unknown[]; ref_type?: string; action?: string }
}

export type ActivityItem = {
  id: string
  repo: string
  verb: string
  detail: string
  at: string
}

const verbs: Record<string, string> = {
  PushEvent: 'pushed to',
  CreateEvent: 'created',
  PullRequestEvent: 'opened a pull request in',
  IssuesEvent: 'filed an issue in',
  ReleaseEvent: 'released',
  WatchEvent: 'starred',
  ForkEvent: 'forked',
  DeleteEvent: 'cleaned up a branch in',
}

export async function GET() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${profile.githubUser}/events/public?per_page=30`,
      {
        headers: { Accept: 'application/vnd.github+json' },
        next: { revalidate },
      },
    )

    if (!response.ok) {
      return NextResponse.json({ items: [] as ActivityItem[] }, { status: 200 })
    }

    const events = (await response.json()) as GithubEvent[]

    const items: ActivityItem[] = events
      .filter((event) => verbs[event.type])
      .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
      .slice(0, 8)
      .map((event) => {
        const commits = event.payload?.size ?? event.payload?.commits?.length ?? 0
        return {
          id: event.id,
          repo: event.repo.name.replace(`${profile.githubUser}/`, ''),
          verb: verbs[event.type],
          detail:
            event.type === 'PushEvent'
              ? commits > 0
                ? `${commits} commit${commits === 1 ? '' : 's'}`
                : ''
              : event.payload?.ref_type ?? event.payload?.action ?? '',
          at: event.created_at,
        }
      })

    return NextResponse.json({ items })
  } catch {
    return NextResponse.json({ items: [] as ActivityItem[] }, { status: 200 })
  }
}
