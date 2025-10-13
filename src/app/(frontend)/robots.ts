import { Settings } from '@/utilities/meta'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/admin',
      },
    ],
    sitemap: `${Settings.metadataBase}/sitemap.xml`,
    host: Settings.metadataBase,
  }
}
