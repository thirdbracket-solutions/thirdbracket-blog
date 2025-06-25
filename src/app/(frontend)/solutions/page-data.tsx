'use client'

// No need to import StructuredData as it's not used
import { solutionsJsonLd } from '@/utilities/structuredData'

export default function SolutionsPageData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsJsonLd) }}
    />
  )
}