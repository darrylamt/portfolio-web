'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, Github, Twitter, Mail, MapPin } from 'lucide-react'
import { profile } from '@/lib/data'

const roles = [
  'Full Stack Developer',
  'Next.js Enthusiast',
  'IT Leader',
  'Problem Solver',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background mesh */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-60" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[140px]" />

      {/* Floating code snippets */}
      <div className="absolute top-20 right-8 md:right-20 font-mono text-[10px] text-violet-400/20 leading-relaxed hidden md:block select-none">
        <div>const dev = {'{'}</div>
        <div className="pl-4">name: &apos;Darryl&apos;,</div>
        <div className="pl-4">stack: &apos;Next.js&apos;,</div>
        <div className="pl-4">status: &apos;building&apos;</div>
        <div>{'}'}</div>
      </div>
      <div className="absolute bottom-32 left-8 md:left-20 font-mono text-[10px] text-cyan-400/15 leading-relaxed hidden md:block select-none">
        <div>{'<Portfolio'}</div>
        <div className="pl-4">{'passion="max"'}</div>
        <div className="pl-4">{'location="Accra"'}</div>
        <div>{'  />'}</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <MapPin size={13} />
          <span>Accra, Ghana</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1
          className={`font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-4 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Darryl
          <br />
          <span className="text-gradient">Amoatey</span>
        </h1>

        {/* Typing role */}
        <div
          className={`font-mono text-xl md:text-2xl text-[#8888aa] mb-6 h-8 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="text-violet-400">{'> '}</span>
          <span className="text-white">{displayed}</span>
          <span className="animate-pulse text-violet-400">|</span>
        </div>

        {/* Tagline */}
        <p
          className={`text-[#8888aa] text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {profile.tagline}
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 transition-all duration-700 delay-[400ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold hover:from-violet-500 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-violet-900/40 hover:shadow-violet-700/40 hover:scale-105 active:scale-95"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-white/15 text-white/80 font-semibold hover:bg-white/5 hover:border-white/30 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Social links */}
        <div
          className={`flex items-center justify-center gap-6 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-white/10 text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200 group"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-white/10 text-white/50 hover:text-sky-400 hover:border-sky-400/30 hover:bg-sky-400/5 transition-all duration-200"
            aria-label="Twitter"
          >
            <Twitter size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="p-2.5 rounded-xl border border-white/10 text-white/50 hover:text-amber-400 hover:border-amber-400/30 hover:bg-amber-400/5 transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <ArrowDown size={14} />
      </a>
    </section>
  )
}
