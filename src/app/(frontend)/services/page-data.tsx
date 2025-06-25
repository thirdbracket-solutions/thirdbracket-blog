'use client'

// No need to import StructuredData as it's not used
import { servicesJsonLd } from '@/utilities/structuredData'

export default function ServicesPageData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
    />
  )
}