'use client'

import { Bracket, Button } from '@thirdbracket/bracketui'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const featuredLogos = [
  { src: '/accenture.svg', alt: 'Accenture', width: 163, height: 43 },
  { src: '/clutch.svg', alt: 'Clutch', width: 141, height: 40 },
  { src: '/designrush.svg', alt: 'DesignRush', width: 179, height: 40 },
]

export const Hero: React.FC = () => {
  return (
    <section className="pb-10 sm:pb-12 lg:pb-14 xl:pb-16 pt-20 sm:pt-24 lg:pt-28 xl:pt-32 bg-overlay-radial dark:bg-overlay-radial-dark [background-size:12px_12px]">
      <Bracket fluid centered padding="medium">
        <div className="sm:mx-auto max-w-screen-xl">
          <div className="flex flex-col items-start sm:items-center space-y-10 md:space-y-12 lg:space-y-14">
            <h1 className="text-[2.55rem]/[1] font-extrabold md:text-5xl/[1.1] lg:text-6xl/[1.1] text-left bg-gradient-primary dark:bg-gradient-secondary-dark text-transparent bg-clip-text sm:text-center lg:max-w-screen-md xl:max-w-screen-lg sm:max-w-lg md:max-w-screen-sm max-w-md capitalize">
              Next.js Web Development for UK Agencies & Startups
            </h1>

            <p className="dark:text-secondary-200/80 text-primary-800/80 font-light text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] lg:max-w-screen-md sm:max-w-lg md:max-w-screen-sm text-left sm:text-center xl:max-w-[900px] backdrop-blur-sm">
              We build fast, SEO-optimized websites using Next.js and TailwindCSS. Our custom React
              component library delivers minimal, professional design that’s hard to outsource
              without an in-house team.
            </p>

            <div className="flex justify-center gap-4 md:gap-6 backdrop-blur-sm">
              <Button
                size="md"
                as={Link}
                theme={{
                  background: 'bg-gradient-primary dark:bg-gradient-secondary-dark',

                  hoverBackground: '[@media(hover:hover)]:hover:opacity-90',
                  focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
                }}
                className="!font-medium !text-secondary-50 dark:!text-primary-900"
                href="/about"
              >
                About Us
                <svg className="size-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>

              <Button
                outline
                as={Link}
                href="/contact"
                size="md"
                theme={{
                  border: 'border-primary-200/70 dark:border-secondary-950/70',

                  hoverBackground:
                    '[@media(hover:hover)]:hover:bg-primary-200/30 [@media(hover:hover)]:dark:hover:bg-secondary-950/30',
                  focusRing: 'focus:ring-primary-500',
                }}
                className="!font-medium !text-primary-950 dark:!text-secondary-50"
              >
                <svg className="size-4 mr-2" fill="currentColor" viewBox="0 0 1000 1000">
                  <path d="M860 265h-61q-8 0-13.5 5.5T780 284v246q0 39-28 67t-68 28H279q-8 0-13.5 5.5T260 644v61q0 17 11.5 28.5T300 745h415q25 0 43 18l110 110q4 4 9.5 5t11-1 8.5-7 3-11V305q0-17-11.5-28.5T860 265zM700 505V145q0-17-11.5-28.5T660 105H140q-17 0-28.5 11.5T100 145v514q0 6 3 11t8.5 7 11 1 9.5-5l110-110q18-18 43-18h375q17 0 28.5-12t11.5-28z" />
                </svg>
                Contact Us
              </Button>
            </div>

            <div className="px-0 sm:px-4 py-4 text-left sm:text-center lg:px-36">
              <span className="uppercase dark:text-secondary-200/50 text-primary-800/60 font-medium  backdrop-blur-sm">
                FEATURED IN
              </span>
              <div className="mt-6 sm:mt-8 flex flex-wrap items-start gap-8 lg:gap-12 sm:items-center dark:text-secondary-200/70 text-primary-800/80 justify-start sm:justify-between">
                {featuredLogos.map((logo, idx) => (
                  <a
                    key={idx}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="backdrop-blur-lg grayscale hover:grayscale-0 transition duration-300"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      priority
                      loading="eager"
                      className="w-auto h-5 md:h-6 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Bracket>
    </section>
  )
}
