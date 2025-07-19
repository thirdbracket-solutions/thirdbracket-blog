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
    <section className=" py-[3rem] sm:py-[3.75rem]  lg:py-[4rem] bg-overlayDot-light dark:bg-overlayDot-dark  [background-size:36px_36px]">
      <Bracket fluid centered>
        <div className="mx-auto max-w-screen-xl ">
          <div className="flex flex-col items-start sm:items-center  space-y-10 lg:space-y-16 sm:mx-auto max-w-lg md:max-w-[700px] lg:max-w-[980px]">
            <h1 className="text-[2.65rem] leading-tight    md:text-5xl lg:text-6xl  text-left sm:text-center bg-gradient-text font-black dark:bg-gradient-text-dark text-transparent bg-clip-text   ">
              Affordable Web Design & Development for UK Startups
              {/* <span className=" font-semibold italic text-lg md:text-xl lg:text-2xl block mt-2 tracking-tight">
                Powered by Next.js
              </span> */}
            </h1>

            <p className="dark:text-primary-400 text-primary-700 font-[350px] text-base/[1.8rem]  lg:text-xl/[1.95rem] text-left sm:text-center   backdrop-blur-sm">
              <strong>Third Bracket </strong>helps UK startups and small businesses launch
              high-quality, conversion-ready websites. From design to development — we make your
              online presence work for you.
            </p>

            <div className="flex justify-center gap-4 md:gap-6 backdrop-blur-[2px]">
              <Button
                size="md"
                as={Link}
                theme={{
                  background: 'bg-gradient-text dark:bg-gradient-text-dark',
                  hoverBackground: '[@media(hover:hover)]:hover:opacity-90',
                  focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
                  text: 'text-primary-50 dark:text-primary-950',
                }}
                href="/about"
              >
                Learn About Us
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
                href="#subscription"
                size="md"
                theme={{
                  border: 'border-primary-100/70 dark:border-primary-900/80',

                  hoverBackground: 'hover:bg-primary-50 dark:hover:bg-primary-900 ',
                  focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
                  text: 'text-primary-900 dark:text-primary-100 ',
                }}
              >
                <svg className="size-4 mr-2" fill="currentColor" viewBox="0 0 1000 1000">
                  <path d="M860 265h-61q-8 0-13.5 5.5T780 284v246q0 39-28 67t-68 28H279q-8 0-13.5 5.5T260 644v61q0 17 11.5 28.5T300 745h415q25 0 43 18l110 110q4 4 9.5 5t11-1 8.5-7 3-11V305q0-17-11.5-28.5T860 265zM700 505V145q0-17-11.5-28.5T660 105H140q-17 0-28.5 11.5T100 145v514q0 6 3 11t8.5 7 11 1 9.5-5l110-110q18-18 43-18h375q17 0 28.5-12t11.5-28z" />
                </svg>
                Start a Partnership
              </Button>
            </div>

            <div className="px-0 sm:px-4 py-4 text-left sm:text-center lg:px-36">
              <span className="uppercase bg-gradient-secondary opacity-75 dark:bg-gradient-secondary-dark text-transparent bg-clip-text font-medium backdrop-blur-sm">
                OUR PARTNERS
              </span>
              <div className="mt-6 sm:mt-8 flex flex-wrap items-start gap-8 lg:gap-12 sm:items-center dark:text-primary-500/40 text-primary-600/50 justify-start sm:justify-between">
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
                      fetchPriority="high"
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
