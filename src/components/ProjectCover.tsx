import type { Project } from '@/lib/data'

export default function ProjectCover({
  project,
  className = '',
  markClassName = 'text-[64px]',
}: {
  project: Project
  className?: string
  markClassName?: string
}) {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-card ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${project.cover.from} 0%, ${project.cover.to} 100%)`,
      }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div
        className="absolute -right-16 -top-20 size-64 rounded-full opacity-25 blur-3xl"
        style={{ background: 'rgba(255,255,255,0.55)' }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`font-display font-extrabold tracking-tightest text-white/90 ${markClassName}`}
        >
          {project.cover.mark}
        </span>
      </div>
      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-[900ms] ease-out group-hover:translate-x-full" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
      <p className="absolute bottom-3.5 left-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/80">
        {project.category} · {project.year}
      </p>
    </div>
  )
}
