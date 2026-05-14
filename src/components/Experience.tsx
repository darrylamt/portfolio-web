'use client'

import { experience } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-violet-600/8 rounded-full blur-[100px]" />

      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="section-label">My Journey</div>
          <h2 className="section-title">
            Experience &amp; <span className="text-gradient">Education</span>
          </h2>

          {/* Timeline */}
          <div className="relative mt-12">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 via-violet-500/20 to-transparent" />

            <div className="flex flex-col gap-0">
              {experience.map((item, i) => (
                <div key={item.id} className="relative pl-16 pb-12 last:pb-0 group">
                  {/* Dot */}
                  <div
                    className={`absolute left-[18px] top-1 w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-125 ${
                      item.current
                        ? 'bg-violet-500 border-violet-400 shadow-[0_0_12px_rgba(124,58,237,0.8)]'
                        : 'bg-[#07070f] border-violet-500/50 group-hover:border-violet-400'
                    }`}
                  />
                  {/* Current pulse ring */}
                  {item.current && (
                    <div className="absolute left-[14px] top-[-2px] w-6 h-6 rounded-full border border-violet-400/40 animate-ping" />
                  )}

                  {/* Card */}
                  <div className="card-glass rounded-2xl p-6 group-hover:border-violet-500/20 transition-all duration-300 hover:bg-white/[0.05]">
                    {/* Period */}
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                      <span className="font-mono text-xs text-violet-400 tracking-wider uppercase">
                        {item.period}
                      </span>
                      {item.current && (
                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>

                    {/* Role + Company */}
                    <h3 className="font-display font-bold text-xl text-white mb-1">{item.role}</h3>
                    <p className="text-violet-300/80 text-sm font-medium mb-3">{item.company}</p>

                    {/* Description */}
                    <p className="text-[#8888aa] text-sm leading-relaxed mb-4">{item.description}</p>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-[11px] font-mono text-[#8888aa]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ALX / Education note */}
          <div className="mt-12 card-glass rounded-2xl p-6">
            <div className="section-label mb-2">Continuous Learning</div>
            <p className="text-[#8888aa] text-sm leading-relaxed">
              I believe in learning by building. Beyond ALX, I&apos;m constantly exploring the latest in the Next.js ecosystem, TypeScript patterns, database design, and system architecture — one project at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
