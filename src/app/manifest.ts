import type { MetadataRoute } from 'next'
import { profile } from '@/lib/data'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — ${profile.title}`,
    short_name: 'Darryl A.',
    description: profile.intro,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#FCFBF9',
    theme_color: '#FCFBF9',
    categories: ['portfolio', 'productivity'],
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icons/maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
    shortcuts: [
      { name: 'Work', short_name: 'Work', url: '/work' },
      { name: 'Contact', short_name: 'Contact', url: '/#contact' },
    ],
  }
}
