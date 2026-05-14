'use client'

import Image from 'next/image'
import { profile, skills } from '@/lib/data'

const categoryColors: Record<string, string> = {
  framework: 'border-violet-500/40 text-violet-300 bg-violet-500/10',
  language: 'border-blue-500/40 text-blue-300 bg-blue-500/10',
  styling: 'border-cyan-500/40 text-cyan-300 bg-cyan-500/10',
  backend: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10',
  database: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
  tool: 'border-pink-500/40 text-pink-300 bg-pink-500/10',
}

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/8 rounded-full blur-[100px]" />

      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Avatar + quick stats */}
          <div className="flex flex-col items-center md:items-start gap-8">
            {/* Avatar */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-2xl blur opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
              {[
                { value: '11+', label: 'Projects' },
                { value: '3+', label: 'Years Coding' },
                { value: '∞', label: 'Passion' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="card-glass rounded-xl p-4 text-center"
                >
                  <div className="font-display text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-[#8888aa] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Currently building */}
            <div className="card-glass rounded-xl p-4 w-full max-w-sm">
              <div className="text-xs font-mono text-violet-400 mb-2 uppercase tracking-widest">Currently</div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="text-sm text-white/80">Acting Head of IT · Small Arms Commission, GH</span>
              </div>
            </div>
          </div>

          {/* Right: Bio + Skills */}
          <div>
            <div className="section-label">About Me</div>
            <h2 className="section-title leading-tight">
              Turning ideas into<br />
              <span className="text-gradient">real products</span>
            </h2>

            <p className="text-[#8888aa] leading-relaxed mb-4">
              {profile.bio}
            </p>
            <p className="text-[#8888aa] leading-relaxed mb-10">
              When I&apos;m not shipping features, I&apos;m exploring new tools, contributing to open source, and figuring out how to build the next great thing. Based in <span className="text-white">Accra, Ghana</span> — working with the world.
            </p>

            {/* Skills */}
            <div>
              <h3 className="text-sm font-mono text-[#8888aa] uppercase tracking-widest mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 hover:scale-105 cursor-default ${categoryColors[skill.category]}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Resume download */}
            <div className="mt-8">
              <a
                href={`mailto:${profile.email}?subject=Resume Request`}
                className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 border border-violet-500/30 hover:border-violet-400/50 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-violet-500/5"
              >
                Request Resume →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
