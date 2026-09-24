import Link from 'next/link'
import { Apple, ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/data'
import ProjectCover from './ProjectCover'
import StatusDot from './StatusDot'

export default function ProjectCard({
  project,
  size = 'default',
}: {
  project: Project
  size?: 'default' | 'large'
}) {
  return (
    <article className="group relative">
      <Link href={`/work/${project.slug}`} className="block focus-visible:outline-none">
        <ProjectCover
          project={project}
          className={`w-full transition-transform duration-500 ease-out group-hover:scale-[1.012] ${
            size === 'large' ? 'aspect-[16/10]' : 'aspect-[4/3]'
          }`}
          markClassName={size === 'large' ? 'text-[88px]' : 'text-[56px]'}
        />

        <div className="mt-4 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3
              className={`h-display leading-tight ${
                size === 'large' ? 'text-[22px]' : 'text-[18px]'
              }`}
            >
              {project.name}
            </h3>
            <p className="mt-1 truncate text-[14px] text-muted">{project.tagline}</p>
          </div>
          <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-pill border border-line text-muted transition-all duration-200 group-hover:border-ink group-hover:bg-ink group-hover:text-canvas">
            <ArrowUpRight size={15} />
          </span>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
          <StatusDot status={project.status} />
          {project.contributed && (
            <span className="rounded-pill border border-line px-2 py-0.5 text-[11px] font-medium text-muted">
              Contributed
            </span>
          )}
          {project.testflight && (
            <span className="inline-flex items-center gap-1 rounded-pill border border-line px-2 py-0.5 text-[11px] font-medium text-muted">
              <Apple size={10} /> iOS
            </span>
          )}
          <span className="text-faint">·</span>
          {project.stack.slice(0, 3).map((tech) => (
            <span key={tech} className="text-[12px] text-muted">
              {tech}
            </span>
          ))}
        </div>
      </Link>

      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 font-mono text-[12px] text-muted underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          {project.liveLabel}
        </a>
      )}
    </article>
  )
}
