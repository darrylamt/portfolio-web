import type { ProjectStatus } from '@/lib/data'

const map: Record<ProjectStatus, { label: string; className: string }> = {
  live: { label: 'Live', className: 'bg-positive' },
  'private-beta': { label: 'Private beta', className: 'bg-accent' },
  'code-only': { label: 'Code only', className: 'bg-faint' },
}

export default function StatusDot({
  status,
  className = '',
}: {
  status: ProjectStatus
  className?: string
}) {
  const item = map[status]
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[12px] font-medium text-muted ${className}`}
    >
      <span className={`size-1.5 rounded-full ${item.className}`} />
      {item.label}
    </span>
  )
}
