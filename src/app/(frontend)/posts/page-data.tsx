'use client'

// No need to import StructuredData as it's not used
import { blogJsonLd } from '@/utilities/structuredData'

export default function BlogPageData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
    />
  )
}