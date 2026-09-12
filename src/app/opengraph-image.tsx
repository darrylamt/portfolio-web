import { ImageResponse } from 'next/og'
import { profile, projects } from '@/lib/data'

export const alt = `${profile.name} — ${profile.title}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  const live = projects.filter((project) => project.status === 'live').length

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#FCFBF9',
          padding: 72,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: '#141413',
              color: '#FCFBF9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            D
          </div>
          <div style={{ fontSize: 26, color: '#6A6864' }}>{profile.name}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: '#141413',
              letterSpacing: -3,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            {profile.tagline}
          </div>
          <div style={{ marginTop: 24, fontSize: 30, color: '#6A6864' }}>
            {`${profile.title} · ${profile.location}`}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            fontSize: 24,
            color: '#6A6864',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: '#FFFFFF',
              border: '1px solid #E8E5E0',
              borderRadius: 999,
              padding: '10px 20px',
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 999, background: '#16805C' }} />
            {live} products live
          </div>
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid #E8E5E0',
              borderRadius: 999,
              padding: '10px 20px',
            }}
          >
            Next.js · TypeScript · Postgres
          </div>
        </div>
      </div>
    ),
    size,
  )
}
