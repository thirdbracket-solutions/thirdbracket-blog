'use client'

import { usePathname } from 'next/navigation'
import { getStructuredData } from '@/utilities/structuredData'

interface StructuredDataProps {
  postData?: {
    title: string;
    slug: string;
    description: string;
    datePublished: string;
    dateModified?: string;
    image?: string;
    authorName?: string;
  }
}

export default function StructuredData({ postData }: StructuredDataProps) {
  const pathname = usePathname()
  const jsonLd = getStructuredData(pathname, postData)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}