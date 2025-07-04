import './globals.css'
import { ThemeScript } from '@thirdbracket/bracketui'
import Header from '../../components/Header'
import SiteFooter from '../../components/Footer'
import { Settings } from '../../utilities/meta'
import { Metadata } from 'next'

import GTM from '@/components/GTM'
import { Roboto } from 'next/font/google'
//import { SpeedInsights } from '@vercel/speed-insights/next'
import StructuredData from '@/components/StructuredData'

const roboto = Roboto({
  subsets: ['latin'],
  // weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  preload: true,
  variable: '--font-roboto',
})

// Structured data is now handled by the StructuredData component

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
  // Optional: dynamically append other JSON-LD

  return (
    <html
      lang="en"
      className={`${roboto.variable} antialiased scroll-smooth`}
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
        <StructuredData />
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
     
      </body>
    </html>
  )
}
