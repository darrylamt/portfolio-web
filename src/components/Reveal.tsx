'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Reveals children on scroll without ever hiding them from a client that
 * cannot run the observer: content starts visible, and is only hidden once
 * JS has confirmed the element is below the fold.
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const offscreen = element.getBoundingClientRect().top > window.innerHeight * 0.92
    if (reduced || !offscreen) return

    setHidden(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHidden(false)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
        hidden ? 'translate-y-3 opacity-0' : 'translate-y-0 opacity-100'
      } ${className}`}
      style={{ transitionDelay: hidden ? '0ms' : `${delay * 1000}ms` }}
    >
      {children}
    </div>
  )
}
