import { Github, Twitter, Mail } from 'lucide-react'
import { profile } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-white">DA</span>
          <span className="text-gradient font-bold">.</span>
          <span className="text-[#8888aa] text-sm ml-2">
            © {year} Darryl Amoatey. Built with Next.js &amp; Tailwind.
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8888aa] hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            href={profile.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8888aa] hover:text-sky-400 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={17} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-[#8888aa] hover:text-amber-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  )
}
