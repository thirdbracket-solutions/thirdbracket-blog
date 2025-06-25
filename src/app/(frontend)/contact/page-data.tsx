'use client'

// No need to import StructuredData as it's not used
import { contactJsonLd } from '@/utilities/structuredData'

export default function ContactPageData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
    />
  )
}