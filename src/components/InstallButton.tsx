'use client'

import { useEffect, useState } from 'react'
import { Download } from 'lucide-react'

type InstallPrompt = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export default function InstallButton() {
  const [prompt, setPrompt] = useState<InstallPrompt | null>(null)

  useEffect(() => {
    const onPrompt = (event: Event) => {
      event.preventDefault()
      setPrompt(event as InstallPrompt)
    }
    const onInstalled = () => setPrompt(null)
    window.addEventListener('beforeinstallprompt', onPrompt)
    window.addEventListener('appinstalled', onInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  if (!prompt) return null

  return (
    <button
      type="button"
      onClick={async () => {
        await prompt.prompt()
        await prompt.userChoice
        setPrompt(null)
      }}
      className="hidden items-center gap-1.5 rounded-pill border border-line bg-surface px-3 py-2 text-[13px] font-medium text-muted transition-colors hover:text-ink sm:inline-flex"
    >
      <Download size={14} /> Install
    </button>
  )
}
