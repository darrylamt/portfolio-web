import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Apple, ArrowLeft, ArrowRight, ArrowUpRight, Github } from 'lucide-react'
import ProjectCover from '@/components/ProjectCover'
import StatusDot from '@/components/StatusDot'
import { getProject, projects, site } from '@/lib/data'

type Params = { params: { slug: string } }

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }: Params): Metadata {
  const project = getProject(params.slug)
  if (!project) return {}

  return {
    title: `${project.name} — ${project.tagline}`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} — ${project.tagline}`,
      description: project.summary,
      url: `${site.url}/work/${project.slug}`,
      type: 'article',
    },
  }
}

export default function ProjectPage({ params }: Params) {
  const project = getProject(params.slug)
  if (!project) notFound()

  const index = projects.findIndex((item) => item.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  const facts = [
    { label: 'Role', value: project.role },
    {
      label: 'Involvement',
      value: project.contributed ? 'Contributed to an existing build' : 'Built end to end',
    },
    { label: 'Year', value: project.year },
    { label: 'Type', value: project.category },
    { label: 'Status', value: project.status === 'live' ? 'Live in production' : 'Code only' },
  ]

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.summary,
    url: `${site.url}/work/${project.slug}`,
    author: { '@type': 'Person', name: 'Darryl Amoatey' },
    keywords: project.stack.join(', '),
  }

  return (
    <article className="shell py-10 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />

      <Link
        href="/work"
        className="inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft size={14} /> All work
      </Link>

      <header className="mt-8 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3">
          <StatusDot status={project.status} />
          <span className="text-faint">·</span>
          <span className="text-[13px] text-muted">{project.category}</span>
          {project.contributed && (
            <>
              <span className="text-faint">·</span>
              <span className="text-[13px] text-muted">Contributed</span>
            </>
          )}
        </div>

        <h1 className="h-display mt-4 text-[40px] leading-[1.03] sm:text-[52px]">{project.name}</h1>
        <p className="mt-3 text-[19px] leading-snug text-muted">{project.tagline}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit {project.liveLabel} <ArrowUpRight size={15} />
            </a>
          )}
          {project.testflight && (
            <a
              href={project.testflight}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Apple size={15} /> Get the iOS beta
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Github size={15} /> Source{project.githubPrivate ? ' (private repo)' : ''}
            </a>
          )}
        </div>
      </header>

      <ProjectCover
        project={project}
        className="mt-12 aspect-[16/9] w-full sm:aspect-[21/9]"
        markClassName="text-[92px] sm:text-[124px]"
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
        <div>
          <p className="text-[18px] leading-relaxed text-ink">{project.summary}</p>

          {project.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mt-5 text-[15px] leading-[1.75] text-muted">
              {paragraph}
            </p>
          ))}

          <h2 className="h-display mt-12 text-[22px]">What it does well</h2>
          <ul className="mt-5 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li key={highlight.label} className="bg-surface p-5">
                <p className="text-[14px] font-semibold">{highlight.label}</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{highlight.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="card p-5">
            <dl className="space-y-4">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-[14px] text-ink">{fact.value}</dd>
                </div>
              ))}
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                  Stack
                </dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>

      <nav
        aria-label="Project navigation"
        className="mt-20 flex items-center justify-between gap-4 border-t border-line pt-8"
      >
        <span className="text-[13px] text-faint">Next project</span>
        <Link
          href={`/work/${next.slug}`}
          className="group inline-flex items-center gap-2 text-[16px] font-semibold"
        >
          {next.name}
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </nav>
    </article>
  )
}
