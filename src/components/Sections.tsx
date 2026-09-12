import Link from 'next/link'
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import { experience, profile, stack } from '@/lib/data'
import Reveal from './Reveal'
import GithubActivity from './GithubActivity'

export function SectionHead({
  eyebrow,
  title,
  intro,
  action,
}: {
  eyebrow: string
  title: string
  intro?: string
  action?: { href: string; label: string }
}) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
      <div className="max-w-xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h-display mt-3 text-[30px] leading-tight sm:text-[36px]">{title}</h2>
        {intro && <p className="mt-3 text-[15px] leading-relaxed text-muted">{intro}</p>}
      </div>
      {action && (
        <Link
          href={action.href}
          className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink underline decoration-line underline-offset-[6px] transition-colors hover:decoration-accent"
        >
          {action.label} <ArrowUpRight size={15} />
        </Link>
      )}
    </div>
  )
}

export function StackSection() {
  return (
    <section id="stack" className="shell scroll-mt-24 py-20 sm:py-24">
      <SectionHead
        eyebrow="Stack"
        title="What I reach for"
        intro="Chosen for what ships and stays maintainable, not for what is loudest this month."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stack.map((group, index) => (
          <Reveal key={group.group} delay={index * 0.05}>
            <div className="card h-full p-5">
              <p className="text-[14px] font-semibold">{group.group}</p>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] text-muted">
                    <Check size={13} className="mt-1 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="border-y border-line bg-raised/40 py-20 scroll-mt-24 sm:py-24">
      <div className="shell">
        <SectionHead eyebrow="Experience" title="Where I have worked" />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-14">
          <ol className="relative border-l border-line pl-6">
            {experience.map((role, index) => (
              <Reveal key={role.id} delay={index * 0.06}>
                <li className="relative pb-9 last:pb-0">
                  <span
                    className={`absolute -left-[29px] top-1.5 size-2.5 rounded-full border-2 border-canvas ${
                      role.current ? 'bg-positive' : 'bg-faint'
                    }`}
                  />
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                    {role.period}
                  </p>
                  <h3 className="mt-2 text-[17px] font-semibold">{role.role}</h3>
                  <p className="text-[14px] text-muted">{role.company}</p>
                  <p className="mt-2.5 max-w-lg text-[14px] leading-relaxed text-muted">
                    {role.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {role.tech.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.1}>
            <GithubActivity />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Colophon() {
  const notes = [
    {
      title: 'Command palette',
      body: 'Press ⌘K anywhere. Fuzzy search across projects, pages and actions, fully keyboard driven.',
    },
    {
      title: 'Installable and offline',
      body: 'A web app manifest and a service worker cache the shell, so the site opens from the home screen and survives a dropped connection.',
    },
    {
      title: 'Rendered on the server',
      body: 'Project pages are statically generated with generateStaticParams; GitHub activity comes from a route handler revalidated hourly.',
    },
    {
      title: 'Generated social cards',
      body: 'Every project has its own OpenGraph image rendered at request time with the Next.js image response API.',
    },
    {
      title: 'Themed properly',
      body: 'Light and dark are token driven, set before first paint so there is no flash, and they respect the system setting.',
    },
    {
      title: 'Accessible by default',
      body: 'Skip link, visible focus rings, semantic landmarks, and every animation drops out under prefers-reduced-motion.',
    },
  ]

  return (
    <section id="colophon" className="shell scroll-mt-24 py-20 sm:py-24">
      <SectionHead
        eyebrow="Colophon"
        title="How this site is put together"
        intro="The portfolio is a demo in itself. Everything below is running on this page right now."
      />

      <div className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <div key={note.title} className="bg-surface p-6">
            <p className="text-[14px] font-semibold">{note.title}</p>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">{note.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-line py-20 scroll-mt-24 sm:py-28">
      <div className="shell">
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-30 [mask-image:radial-gradient(ellipse_at_bottom_right,black,transparent_65%)]" />

          <div className="relative max-w-xl">
            <p className="eyebrow">Contact</p>
            <h2 className="h-display mt-3 text-[32px] leading-tight sm:text-[42px]">
              Have something worth building?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              Product work, a platform for an organisation, or a site that has to earn its keep in
              search. Tell me what you are trying to ship and I will tell you how I would build it.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                <Mail size={15} /> {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                GitHub <ArrowUpRight size={15} />
              </a>
            </div>

            <p className="mt-6 inline-flex items-center gap-1.5 text-[13px] text-faint">
              <Copy size={13} /> Tip: press ⌘K then “copy” to grab the address.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
