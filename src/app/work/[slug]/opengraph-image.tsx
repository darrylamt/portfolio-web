import { ImageResponse } from 'next/og'
import { getProject, projects } from '@/lib/data'

export const alt = 'Project'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default function ProjectOpenGraphImage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)

  if (!project) {
    return new ImageResponse(<div style={{ display: 'flex' }} />, size)
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: `linear-gradient(135deg, ${project.cover.from} 0%, ${project.cover.to} 100%)`,
          fontFamily: 'sans-serif',
          color: '#FFFFFF',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontSize: 22,
            letterSpacing: 2,
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          {project.category} · {project.year}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 84, fontWeight: 800, letterSpacing: -3 }}>{project.name}</div>
          <div
            style={{
              marginTop: 16,
              fontSize: 34,
              color: 'rgba(255,255,255,0.78)',
              maxWidth: 900,
            }}
          >
            {project.tagline}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 24,
            color: 'rgba(255,255,255,0.72)',
          }}
        >
          <div style={{ display: 'flex', gap: 12 }}>
            {project.stack.slice(0, 3).map((tech) => (
              <div
                key={tech}
                style={{
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: 999,
                  padding: '8px 18px',
                }}
              >
                {tech}
              </div>
            ))}
          </div>
          <div>{project.liveLabel ?? 'darrylamt.vercel.app'}</div>
        </div>
      </div>
    ),
    size,
  )
}
