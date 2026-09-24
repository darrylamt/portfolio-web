import type { Metadata } from 'next'
import WorkBrowser from '@/components/WorkBrowser'
import { projects } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Auction marketplaces, federation platforms, agency back offices and client sites, all deployed and reachable.',
  alternates: { canonical: '/work' },
}

export default function WorkPage() {
  const live = projects.filter((project) => project.status === 'live').length

  return (
    <div className="shell py-14 sm:py-20">
      <header className="mb-10 max-w-2xl">
        <p className="eyebrow">Work</p>
        <h1 className="h-display mt-3 text-[38px] leading-[1.05] sm:text-[48px]">
          Everything I have shipped
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-muted">
          {live} products currently live: an auction marketplace, the platform and public site of a
          national sports federation, a government site, an evening planner on the web and in
          TestFlight, and a property developer. Filter by type or search the stack.
        </p>
      </header>

      <WorkBrowser />
    </div>
  )
}
