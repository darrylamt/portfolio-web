import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import Reveal from '@/components/Reveal'
import {
  Colophon,
  ContactSection,
  ExperienceSection,
  SectionHead,
  StackSection,
} from '@/components/Sections'
import { featuredProjects, projects } from '@/lib/data'

export default function HomePage() {
  const rest = projects.filter((project) => !project.featured).slice(0, 4)

  return (
    <>
      <Hero />

      <section id="work" className="shell scroll-mt-24 py-20 sm:py-24">
        <SectionHead
          eyebrow="Selected work"
          title="Products in production"
          intro="Every project below is deployed and reachable. No concept pieces."
          action={{ href: '/work', label: 'All work' }}
        />

        <div className="grid gap-x-6 gap-y-14 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 0.06}
              className={index === 0 ? 'lg:col-span-2' : ''}
            >
              <ProjectCard project={project} size={index === 0 ? 'large' : 'default'} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <p className="eyebrow mb-6">Also shipped</p>
          <ul className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
            {rest.map((project) => (
              <li key={project.slug} className="bg-surface">
                <Link
                  href={`/work/${project.slug}`}
                  className="group flex items-center justify-between gap-4 p-5 transition-colors hover:bg-raised"
                >
                  <span className="min-w-0">
                    <span className="block text-[15px] font-semibold">{project.name}</span>
                    <span className="mt-0.5 block truncate text-[13px] text-muted">
                      {project.tagline}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-faint transition-colors group-hover:text-ink"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <StackSection />
      <ExperienceSection />
      <Colophon />
      <ContactSection />
    </>
  )
}
