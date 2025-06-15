// // components/GTM.tsx
// 'use client'

// import { useEffect } from 'react'

// export default function GTM() {
//   useEffect(() => {
//     const loadGTM = () => {
//       const gtmId = document.querySelector('meta[name="gtm-id"]')?.getAttribute('content')
//       if (!gtmId) return

//       if (document.getElementById('gtm-script')) return // prevent duplicate loading

//       const script = document.createElement('script')
//       script.id = 'gtm-script'
//       script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
//       script.async = true
//       document.head.appendChild(script)

//       window.removeEventListener('scroll', loadGTM)
//       window.removeEventListener('click', loadGTM)
//     }

//     // Load GTM after first interaction
//     window.addEventListener('scroll', loadGTM, { once: true })
//     window.addEventListener('click', loadGTM, { once: true })

//     return () => {
//       window.removeEventListener('scroll', loadGTM)
//       window.removeEventListener('click', loadGTM)
//     }
//   }, [])

//   return null
// }

'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export default function GTM() {
  useEffect(() => {
    const loadGTM = () => {
      const gtmId = document.querySelector('meta[name="gtm-id"]')?.getAttribute('content')
      if (!gtmId || document.getElementById('gtm-script')) return

      // 1. Set up the dataLayer
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'gtm.js',
        'gtm.start': new Date().getTime(),
      })

      // 2. Load GTM script
      const script = document.createElement('script')
      script.id = 'gtm-script'
      script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
      script.async = true
      document.head.appendChild(script)

      // Remove event listeners after GTM is loaded
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
