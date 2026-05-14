import type { Metadata } from 'next'
import { Inter, Syne, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Darryl Amoatey — Full Stack Developer',
  description:
    'Full Stack Developer & Acting Head of IT at Small Arms Commission, Ghana. Building web experiences with Next.js, React, and TypeScript.',
  keywords: ['Full Stack Developer', 'Next.js', 'React', 'TypeScript', 'Ghana', 'Darryl Amoatey'],
  authors: [{ name: 'Darryl Amoatey' }],
  openGraph: {
    title: 'Darryl Amoatey — Full Stack Developer',
    description: 'Full Stack Developer based in Accra, Ghana.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
