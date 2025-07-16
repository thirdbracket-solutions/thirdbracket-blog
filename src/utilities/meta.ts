import {
  companylink,
  companyname,
  description,
  imagealt,
  keywords,
  sitename,
  socialLinks,
  twitterhandle,
  url,
  urlimage,
} from '../../settings'

import { OpenGraph, TwitterCard } from './metadata'

export const Company = {
  name: companyname,
  link: companylink,
  socialLinks: socialLinks,
}

export const Settings = {
  title: sitename,
  metadataBase: url,
  description: description,
  // siteicon: siteicon,
  keywords: keywords,
  openGraph: {
    type: 'website',
    title: 'Affordable Web Design Agency for UK Businesses | Third Bracket',
    description: description,
    siteName: sitename,
    images: [
      {
        url: urlimage,
        width: 1200,
        height: 630,
        alt: imagealt,
      },
    ],
  } as OpenGraph,
  twitter: {
    card: 'summary_large_image',
    title: 'Affordable Web Design Agency for UK Businesses | Third Bracket',
    description: description,
    site: twitterhandle,
    images: [
      {
        url: urlimage,
        alt: imagealt,
      },
    ],
  } as TwitterCard,
  canonical: url,
}
