import Link from 'next/link'
import { WifiOff } from 'lucide-react'

export const metadata = { title: 'Offline' }

export default function OfflinePage() {
  return (
    <div className="shell grid min-h-[70vh] place-items-center py-20 text-center">
      <div className="max-w-sm">
        <span className="mx-auto grid size-12 place-items-center rounded-card border border-line bg-surface text-muted">
          <WifiOff size={20} />
        </span>
        <h1 className="h-display mt-6 text-[28px]">You are offline</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          The pages you already visited are cached and still work. Everything else comes back when
          the connection does.
        </p>
        <Link href="/" className="btn-ghost mt-8">
          Back to the home page
        </Link>
      </div>
    </div>
  )
}
