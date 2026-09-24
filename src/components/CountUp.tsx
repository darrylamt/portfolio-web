'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Counts a numeric stat up when it scrolls into view. Non-numeric values
 * (and reduced-motion visitors) render as plain text, unchanged.
 */
export default function CountUp({ value, duration = 900 }: { value: string; duration?: number }) {
  const target = /^\d+$/.test(value) ? Number(value) : null
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const element = ref.current
    if (target === null || !element) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    let started = false

    const run = () => {
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplay(String(Math.round(target * eased)))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true
          setDisplay('0')
          run()
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(element)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [duration, target])

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  )
}
