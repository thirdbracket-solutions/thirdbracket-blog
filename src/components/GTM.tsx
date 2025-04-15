// components/GTM.tsx
'use client'

import { useEffect } from 'react'

export default function GTM() {
  useEffect(() => {
    const loadGTM = () => {
      const gtmId = document.querySelector('meta[name="gtm-id"]')?.getAttribute('content')
      if (!gtmId) return

      if (document.getElementById('gtm-script')) return // prevent duplicate loading

      const script = document.createElement('script')
      script.id = 'gtm-script'
      script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
      script.async = true
      document.head.appendChild(script)

      window.removeEventListener('scroll', loadGTM)
      window.removeEventListener('click', loadGTM)
    }

    // Load GTM after first interaction
    window.addEventListener('scroll', loadGTM, { once: true })
    window.addEventListener('click', loadGTM, { once: true })

    return () => {
      window.removeEventListener('scroll', loadGTM)
      window.removeEventListener('click', loadGTM)
    }
  }, [])

  return null
}
