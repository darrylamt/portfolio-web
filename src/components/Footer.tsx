import Link from 'next/link'
import { Github, Mail } from 'lucide-react'
import { profile } from '@/lib/data'
import XIcon from './XIcon'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-raised/40">
      <div className="shell flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="h-display text-[18px]">{profile.name}</p>
          <p className="mt-1.5 max-w-xs text-[14px] text-muted">
            {profile.title} in {profile.location}. Building for the web, shipping to production.
          </p>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
            © {new Date().getFullYear()} · Built with Next.js and Tailwind
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:gap-14">
          <nav aria-label="Footer" className="flex flex-col gap-2.5 text-[14px]">
            <Link href="/work" className="text-muted transition-colors hover:text-ink">
              Work
            </Link>
            <Link href="/#stack" className="text-muted transition-colors hover:text-ink">
              Stack
            </Link>
            <Link href="/#experience" className="text-muted transition-colors hover:text-ink">
              Experience
            </Link>
            <Link href="/#colophon" className="text-muted transition-colors hover:text-ink">
              How this site works
            </Link>
          </nav>

          <div className="flex gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid size-9 place-items-center rounded-pill border border-line bg-surface text-muted transition-all duration-200 hover:-translate-y-0.5 hover:text-ink hover:shadow-card"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${profile.xHandle} on X`}
              className="grid size-9 place-items-center rounded-pill border border-line bg-surface text-muted transition-all duration-200 hover:-translate-y-0.5 hover:text-ink hover:shadow-card"
            >
              <XIcon size={14} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="grid size-9 place-items-center rounded-pill border border-line bg-surface text-muted transition-all duration-200 hover:-translate-y-0.5 hover:text-ink hover:shadow-card"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
