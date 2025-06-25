import { Graph } from 'schema-dts'
import { Settings } from './meta'

const baseUrl = Settings.metadataBase

// Base structured data that appears on all pages
export const baseJsonLd: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}#website`,
      name: 'Third Bracket',
      alternateName: 'Third Bracket Solutions',
      url: baseUrl,
      description:
        'Third Bracket is a modern Next.js web development agency in the UK. We build fast, affordable, SEO-optimized websites with clean and minimal design.',
      publisher: { '@id': `${baseUrl}#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `${baseUrl}#organization`,
      name: 'Third Bracket Solutions',
      legalName: 'Third Bracket Solution',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}logo.svg`,
      },
      sameAs: [
        'https://www.facebook.com/thirdbracket.co.uk',
        'https://www.linkedin.com/company/106720973',
        'https://www.github.com/thirdbracket-solutions',
        'https://g.co/kgs/X44FuDP',
      ],
    },
  ],
}

// Home page structured data
export const homeJsonLd: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    ...baseJsonLd['@graph'],
    {
      '@type': 'WebPage',
      '@id': `${baseUrl}#webpage`,
      name: 'Third Bracket',
      url: baseUrl,
      description:
        'Third Bracket is a modern Next.js web development agency in the UK. We build fast, affordable, SEO-optimized websites with clean and minimal design.',
      isPartOf: { '@id': `${baseUrl}#website` },
      publisher: { '@id': `${baseUrl}#organization` },
      about: { '@id': `${baseUrl}#organization` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${baseUrl}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does your full stack web development agency offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer full stack web development for startups and small businesses in the UK — including custom Next.js websites, WordPress/Elementor builds, SEO optimization, and post-launch support.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you build websites using WordPress and Elementor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. For clients who prefer easy content editing, we build fast and modern websites using WordPress and Elementor — fully responsive and SEO-optimized.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why choose a Next.js web development agency like Third Bracket?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Next.js is perfect for businesses that need speed, scalability, and SEO. As a UK-based agency, we specialize in building modern websites that perform well and rank high.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you ensure websites are SEO-optimized and fast?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "We build every site — whether in Next.js or WordPress — with Core Web Vitals, semantic HTML, metadata, and performance in mind to meet Google's SEO standards.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer affordable web development services for UK startups?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. We're a lean team focused on delivering affordable, high-quality websites without the overhead of traditional agencies — perfect for startups and solo founders.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can you redesign my current website to improve speed and SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. We audit and rebuild websites for performance, accessibility, and SEO — whether your current site is built with WordPress, Squarespace, or something else.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does a typical project take from start to launch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "We can launch small sites in 2–3 weeks. Larger builds with custom features usually take 4–6 weeks. We'll give you a clear timeline based on scope.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide ongoing support after launch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We offer flexible maintenance and support packages — including content updates, plugin care (for WordPress), and performance monitoring for custom sites.',
          },
        },
      ],
    },
  ],
}

// Services page structured data
export const servicesJsonLd: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    ...baseJsonLd['@graph'],
    {
      '@type': 'WebPage',
      '@id': `${baseUrl}services/#webpage`,
      name: 'Web Development Services | Third Bracket',
      url: `${baseUrl}services/`,
      description:
        'Professional web development services including Next.js development, WordPress development, and SEO optimization.',
      isPartOf: { '@id': `${baseUrl}#website` },
      publisher: { '@id': `${baseUrl}#organization` },
    },
    {
      '@type': 'Service',
      '@id': `${baseUrl}services/#service`,
      name: 'Web Development Services',
      serviceType: 'Web Development',
      provider: { '@id': `${baseUrl}#organization` },
      description:
        'Professional web development services including Next.js development, WordPress development, and SEO optimization.',
      areaServed: 'United Kingdom',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Next.js Development',
              description:
                'Custom Next.js website development with modern design and optimal performance.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'WordPress Development',
              description:
                'WordPress website development with Elementor for easy content management.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'SEO Optimization',
              description: 'Website optimization for search engines and improved Core Web Vitals.',
            },
          },
        ],
      },
    },
  ],
}

// Solutions page structured data
export const solutionsJsonLd: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    ...baseJsonLd['@graph'],
    {
      '@type': 'WebPage',
      '@id': `${baseUrl}solutions/#webpage`,
      name: 'Web Development Solutions | Third Bracket',
      url: `${baseUrl}solutions/`,
      description: 'Comprehensive web development solutions for businesses of all sizes.',
      isPartOf: { '@id': `${baseUrl}#website` },
      publisher: { '@id': `${baseUrl}#organization` },
    },
    {
      '@type': 'Product',
      '@id': `${baseUrl}solutions/#product`,
      name: 'Web Development Solutions',
      description: 'Comprehensive web development solutions tailored for businesses of all sizes.',
      brand: { '@id': `${baseUrl}#organization` },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GBP',
        lowPrice: '1000',
        highPrice: '10000',
        offerCount: '3',
      },
      category: 'Web Development',
    },
  ],
}

// About page structured data
export const aboutJsonLd: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    ...baseJsonLd['@graph'],
    {
      '@type': 'WebPage',
      '@id': `${baseUrl}about/#webpage`,
      name: 'About Third Bracket | Web Development Agency',
      url: `${baseUrl}about/`,
      description:
        'Learn about Third Bracket, a UK-based web development agency specializing in Next.js and WordPress development.',
      isPartOf: { '@id': `${baseUrl}#website` },
      publisher: { '@id': `${baseUrl}#organization` },
      about: { '@id': `${baseUrl}#organization` },
    },
    {
      '@type': 'AboutPage',
      '@id': `${baseUrl}about/#aboutpage`,
      mainEntity: { '@id': `${baseUrl}#organization` },
    },
  ],
}

// Contact page structured data
export const contactJsonLd: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    ...baseJsonLd['@graph'],
    {
      '@type': 'WebPage',
      '@id': `${baseUrl}contact/#webpage`,
      name: 'Contact Third Bracket | Web Development Agency',
      url: `${baseUrl}contact/`,
      description: 'Contact Third Bracket for your web development needs.',
      isPartOf: { '@id': `${baseUrl}#website` },
      publisher: { '@id': `${baseUrl}#organization` },
    },
    {
      '@type': 'ContactPage',
      '@id': `${baseUrl}contact/#contactpage`,
      provider: { '@id': `${baseUrl}#organization` },
    },
  ],
}

// Blog page structured data
export const blogJsonLd: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    ...baseJsonLd['@graph'],
    {
      '@type': 'WebPage',
      '@id': `${baseUrl}posts/#webpage`,
      name: 'Blog | Third Bracket',
      url: `${baseUrl}posts/`,
      description: 'Web development insights, tips, and news from Third Bracket.',
      isPartOf: { '@id': `${baseUrl}#website` },
      publisher: { '@id': `${baseUrl}#organization` },
    },
    {
      '@type': 'Blog',
      '@id': `${baseUrl}posts/#blog`,
      name: 'Third Bracket Blog',
      description: 'Web development insights, tips, and news from Third Bracket.',
      publisher: { '@id': `${baseUrl}#organization` },
    },
  ],
}

// Blog post structured data (template for individual posts)
export const createBlogPostJsonLd = (post: {
  title: string
  slug: string
  description: string
  datePublished: string
  dateModified?: string
  image?: string
  authorName?: string
}): Graph => {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ...baseJsonLd['@graph'],
      {
        '@type': 'WebPage',
        '@id': `${baseUrl}posts/${post.slug}/#webpage`,
        name: `${post.title} | Third Bracket`,
        url: `${baseUrl}posts/${post.slug}/`,
        description: post.description,
        isPartOf: { '@id': `${baseUrl}#website` },
        publisher: { '@id': `${baseUrl}#organization` },
      },
      {
        '@type': 'BlogPosting',
        '@id': `${baseUrl}posts/${post.slug}/#blogposting`,
        headline: post.title,
        description: post.description,
        datePublished: post.datePublished,
        dateModified: post.dateModified || post.datePublished,
        image: post.image ? `${baseUrl}${post.image}` : undefined,
        author: {
          '@type': 'Person',
          name: post.authorName || 'Third Bracket Team',
        },
        publisher: { '@id': `${baseUrl}#organization` },
        mainEntityOfPage: { '@id': `${baseUrl}posts/${post.slug}/#webpage` },
      },
    ],
  }
}

// Helper function to get the appropriate JSON-LD based on the pathname
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getStructuredData(pathname: string, postData?: any): Graph {
  if (pathname === '/') return homeJsonLd
  if (pathname === '/services') return servicesJsonLd
  if (pathname === '/solutions') return solutionsJsonLd
  if (pathname === '/about') return aboutJsonLd
  if (pathname === '/contact') return contactJsonLd
  if (pathname === '/posts') return blogJsonLd

  // Check if it's a blog post
  if (pathname.startsWith('/posts/') && postData) {
    return createBlogPostJsonLd(postData)
  }

  // Default to base JSON-LD for any other pages
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ...baseJsonLd['@graph'],
      {
        '@type': 'WebPage',
        '@id': `${baseUrl}${pathname}/#webpage`,
        name: 'Third Bracket',
        url: `${baseUrl}${pathname}/`,
        isPartOf: { '@id': `${baseUrl}#website` },
        publisher: { '@id': `${baseUrl}#organization` },
      },
    ],
  }
}
