import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="shell grid min-h-[70vh] place-items-center py-20 text-center">
      <div className="max-w-md">
        <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-faint">404</p>
        <h1 className="h-display mt-4 text-[32px] leading-tight sm:text-[40px]">
          That page does not exist
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          It may have moved, or the link may be out of date. Press ⌘K to search everything.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Home
          </Link>
          <Link href="/work" className="btn-ghost">
            See the work
          </Link>
        </div>
      </div>
    </div>
  )
}
