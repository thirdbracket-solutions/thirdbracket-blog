'use client'

import { homeJsonLd } from '@/utilities/structuredData'

export default function HomePageData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
    />
  )
}