'use client'

import { useState } from 'react'
import { ExternalLink, Github, Star } from 'lucide-react'
import { projects } from '@/lib/data'

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)
  const visible = showAll ? projects : featured

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/8 rounded-full blur-[80px]" />

      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="section-label">What I&apos;ve Built</div>
            <h2 className="section-title mb-0">
              Selected <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <a
            href="https://github.com/darrylamt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#8888aa] hover:text-white transition-colors duration-200 group"
          >
            <Github size={16} />
            View all on GitHub
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {visible.slice(0, 3).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} featured />
          ))}
        </div>

        {/* Rest of projects */}
        {showAll && rest.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {rest.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}

        {/* Show more toggle */}
        {rest.length > 0 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2.5 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 text-sm font-medium transition-all duration-200 hover:bg-white/5"
            >
              {showAll ? 'Show Less' : `Show ${rest.length} More Projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: (typeof projects)[0]
  index: number
  featured?: boolean
}

function ProjectCard({ project, index, featured }: ProjectCardProps) {
  return (
    <div
      className="card-glass-hover rounded-2xl p-6 flex flex-col gap-4 group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          {featured && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono uppercase tracking-wider">
              <Star size={9} fill="currentColor" />
              Featured
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Live site"
            >
              <ExternalLink size={15} />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-label="GitHub repo"
          >
            <Github size={15} />
          </a>
        </div>
      </div>

      {/* Title */}
      <div>
        <h3 className="font-display font-bold text-lg text-white group-hover:text-gradient transition-all duration-300 mb-2">
          {project.name}
        </h3>
        <p className="text-sm text-[#8888aa] leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-[11px] font-mono text-[#8888aa]"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links row */}
      <div className="flex items-center gap-4 pt-2 border-t border-white/5">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-violet-400 hover:text-violet-300 flex items-center gap-1 transition-colors"
          >
            <ExternalLink size={11} />
            Live Demo
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#8888aa] hover:text-white flex items-center gap-1 transition-colors"
        >
          <Github size={11} />
          Source
        </a>
      </div>
    </div>
  )
}
