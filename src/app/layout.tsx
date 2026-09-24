import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import { profile, site } from '@/lib/data'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/Footer'
import CommandPalette from '@/components/CommandPalette'
import ServiceWorker from '@/components/ServiceWorker'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s — ${profile.name}`,
  },
  description: site.shortBio,
  keywords: [
    'Darryl Amoatey',
    'full-stack developer',
    'Next.js developer Ghana',
    'React developer Accra',
    'TypeScript',
    'Supabase',
  ],
  authors: [{ name: profile.name, url: site.url }],
  creator: profile.name,
  alternates: { canonical: '/' },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: profile.name,
    title: `${profile.name} — ${profile.title}`,
    description: site.shortBio,
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    creator: profile.xHandle,
    title: `${profile.name} — ${profile.title}`,
    description: site.shortBio,
  },
  appleWebApp: {
    capable: true,
    title: profile.name,
    statusBarStyle: 'default',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FCFBF9' },
    { media: '(prefers-color-scheme: dark)', color: '#0C0C0D' },
  ],
  width: 'device-width',
  initialScale: 1,
}

const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var system = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (stored !== 'light' && system)) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`

const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: site.url,
  image: profile.avatar,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Accra', addressCountry: 'GH' },
  sameAs: [profile.github, profile.x],
  knowsAbout: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Supabase', 'Tailwind CSS'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </head>
      <body className={`${inter.variable} ${display.variable} ${mono.variable} font-sans`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-canvas"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <Footer />
        <CommandPalette />
        <ServiceWorker />
      </body>
    </html>
  )
}
