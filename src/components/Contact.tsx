'use client'

import { useState } from 'react'
import { Mail, Github, Twitter, MapPin, Send, CheckCircle } from 'lucide-react'
import { profile } from '@/lib/data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Hi Darryl,\n\n${form.message}\n\nBest,\n${form.name}\n${form.email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-violet-600/10 rounded-full blur-[100px]" />

      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="section-label">Get in Touch</div>
            <h2 className="section-title">
              Let&apos;s Build Something <span className="text-gradient">Together</span>
            </h2>
            <p className="text-[#8888aa] max-w-lg mx-auto">
              Have a project in mind? Want to collaborate? Or just want to say hi? My inbox is always open.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="flex flex-col gap-6">
              <div className="card-glass rounded-2xl p-6">
                <h3 className="font-display font-bold text-lg text-white mb-5">Connect With Me</h3>
                <div className="flex flex-col gap-4">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:border-amber-400/40 transition-colors">
                      <Mail size={17} />
                    </div>
                    <div>
                      <div className="text-xs text-[#8888aa] mb-0.5">Email</div>
                      <div className="text-sm text-white font-medium">{profile.email}</div>
                    </div>
                  </a>

                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:border-white/20 group-hover:text-white transition-all">
                      <Github size={17} />
                    </div>
                    <div>
                      <div className="text-xs text-[#8888aa] mb-0.5">GitHub</div>
                      <div className="text-sm text-white font-medium">@darrylamt</div>
                    </div>
                  </a>

                  <a
                    href={profile.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:border-sky-400/40 transition-colors">
                      <Twitter size={17} />
                    </div>
                    <div>
                      <div className="text-xs text-[#8888aa] mb-0.5">Twitter / X</div>
                      <div className="text-sm text-white font-medium">@darrylamt</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-3 rounded-xl">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <MapPin size={17} />
                    </div>
                    <div>
                      <div className="text-xs text-[#8888aa] mb-0.5">Location</div>
                      <div className="text-sm text-white font-medium">Accra, Ghana 🇬🇭</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="card-glass rounded-2xl p-5 border-l-2 border-emerald-500/60">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-medium text-white">Open to Opportunities</span>
                </div>
                <p className="text-xs text-[#8888aa] leading-relaxed">
                  Currently available for freelance projects, full-time roles, and interesting collaborations.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="card-glass rounded-2xl p-6">
              <h3 className="font-display font-bold text-lg text-white mb-5">Send a Message</h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 gap-3 text-center">
                  <CheckCircle size={40} className="text-emerald-400" />
                  <p className="text-white font-medium">Opening your email client...</p>
                  <p className="text-xs text-[#8888aa]">Thanks for reaching out, I&apos;ll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs text-[#8888aa] mb-1.5 block font-mono uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#8888aa] mb-1.5 block font-mono uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#8888aa] mb-1.5 block font-mono uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project or idea..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold hover:from-violet-500 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-violet-900/30 hover:shadow-violet-700/40 hover:scale-[1.02] active:scale-95"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
