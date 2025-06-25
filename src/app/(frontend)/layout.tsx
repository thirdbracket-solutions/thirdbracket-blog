import './globals.css'
import { ThemeScript } from '@thirdbracket/bracketui'
import Header from '../../components/Header'
import SiteFooter from '../../components/Footer'
import { Settings } from '../../utilities/meta'
import { Metadata } from 'next'
import { Graph } from 'schema-dts'

import GTM from '@/components/GTM'
import { Roboto } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'

const roboto = Roboto({
  subsets: ['latin'],
  // weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const jsonLd: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.thirdbracket.co.uk/#website',
      name: 'Third Bracket',
  "alternateName": "Third Bracket Solutions",
      url: 'https://www.thirdbracket.co.uk/',
      description:
        'Third Bracket is a modern Next.js web development agency in the UK. We build fast, affordable, SEO-optimized websites with clean and minimal design.',
      publisher: { '@id': 'https://www.thirdbracket.co.uk/#organization' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.thirdbracket.co.uk/#organization',
      name: 'Third Bracket Solutions',
      legalName: 'Third Bracket Solution',
      url: 'https://www.thirdbracket.co.uk/',
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.thirdbracket.co.uk/logo.svg"
  },
      sameAs: [
        'https://www.facebook.com/thirdbracket.co.uk',
        'https://www.linkedin.com/company/106720973',
        'https://www.github.com/thirdbracket-solutions',
        'https://g.co/kgs/X44FuDP',
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.thirdbracket.co.uk/#webpage',
      name: 'Third Bracket',
      url: 'https://www.thirdbracket.co.uk/',
      description:
        'Third Bracket is a modern Next.js web development agency in the UK. We build fast, affordable, SEO-optimized websites with clean and minimal design.',
      isPartOf: { '@id': 'https://www.thirdbracket.co.uk/#website' },
      publisher: { '@id': 'https://www.thirdbracket.co.uk/#organization' },
      about: { '@id': 'https://www.thirdbracket.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.thirdbracket.co.uk/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does your full stack web development agency offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'We offer full stack web development for startups and small businesses in the UK — including custom Next.js websites, WordPress/Elementor builds, SEO optimization, and post-launch support.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you build websites using WordPress and Elementor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes. For clients who prefer easy content editing, we build fast and modern websites using WordPress and Elementor — fully responsive and SEO-optimized.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why choose a Next.js web development agency like Third Bracket?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Next.js is perfect for businesses that need speed, scalability, and SEO. As a UK-based agency, we specialize in building modern websites that perform well and rank high.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you ensure websites are SEO-optimized and fast?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'We build every site — whether in Next.js or WordPress — with Core Web Vitals, semantic HTML, metadata, and performance in mind to meet Google’s SEO standards.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer affordable web development services for UK startups?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes. We’re a lean team focused on delivering affordable, high-quality websites without the overhead of traditional agencies — perfect for startups and solo founders.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you redesign my current website to improve speed and SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Absolutely. We audit and rebuild websites for performance, accessibility, and SEO — whether your current site is built with WordPress, Squarespace, or something else.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does a typical project take from start to launch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'We can launch small sites in 2–3 weeks. Larger builds with custom features usually take 4–6 weeks. We’ll give you a clear timeline based on scope.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide ongoing support after launch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes. We offer flexible maintenance and support packages — including content updates, plugin care (for WordPress), and performance monitoring for custom sites.',
          },
        },
      ],
    },
  ],
}

const baseUrl = Settings.metadataBase

export const metadata: Metadata = {
  title: {
    template: `%s | ${Settings.title}`,
    default: `Full Stack Web Development Agency UK |  ${Settings.title}`,
  },

  metadataBase: new URL(baseUrl),
  description: Settings.description,
  keywords: Settings.keywords,
  openGraph: {
    type: Settings.openGraph.type,
    url: baseUrl,
    title: Settings.openGraph.title,
    description: Settings.openGraph.description,
    siteName: Settings.openGraph.siteName,
    images: Settings.openGraph.images.map((image) => ({
      ...image,
      url: `${baseUrl}${image.url}`,
    })),
  },
  twitter: {
    card: Settings.twitter.card,
    title: Settings.twitter.title,
    description: Settings.twitter.description,
    site: Settings.twitter.site,
    images: Settings.twitter.images.map((image) => ({
      ...image,
      url: `${baseUrl}${image.url}`,
    })),
  },

  alternates: {
    canonical: baseUrl,
    languages: {
      'en-GB': baseUrl,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${roboto.className} antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Tag Manager - Head */}
        {/* <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5LLRMTFW');
            `,
          }}
        /> */}

        <meta name="gtm-id" content="GTM-5LLRMTFW" />

        <meta name="msvalidate.01" content="46803F5EEF01F535EF3999B5E1F48682" />
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="facebook-domain-verification" content="jvzc8wivgbd7yp2malwzexmw1rj7rh" />
      </head>
      <body suppressHydrationWarning>
        {/* <MegaHeader /> */}
        {/* Google Tag Manager - Body */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5LLRMTFW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript> */}
        <Header />
        <main className="bg-gradient-primary-dark dark:bg-gradient-primary py-[6rem] sm:py-[6.5rem]  lg:py-[8rem]  ">
          {children}
        </main>
        <SiteFooter />
        <GTM />
        <SpeedInsights />
      </body>
    </html>
  )
}
