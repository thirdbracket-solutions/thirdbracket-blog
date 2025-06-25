'use client'

// No need to import StructuredData as it's not used
import { aboutJsonLd } from '@/utilities/structuredData'

export default function AboutPageData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
    />
  )
}