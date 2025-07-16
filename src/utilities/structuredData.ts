import { Settings } from './meta'

const baseUrl = Settings.metadataBase

// Blog post structured data (template for individual posts)
export const createBlogPostJsonLd = (post: {
  title: string
  slug: string
  description: string
  datePublished: string
  dateModified?: string
  image?: string
  authorName?: string
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.description,
    'datePublished': post.datePublished,
    'dateModified': post.dateModified || post.datePublished,
    'image': post.image ? `${baseUrl}${post.image}` : undefined,
    'author': {
      '@type': 'Person',
      'name': post.authorName || 'Third Bracket Team'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Third Bracket',
      'logo': {
        '@type': 'ImageObject',
        'url': `${baseUrl}logo.svg`
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${baseUrl}posts/${post.slug}/`
    }
  }
}