'use client'

import { Bracket, Button } from '@thirdbracket/bracketui'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Modal from './Modal'

import { TbArrowRight, TbCaretUp, TbCaretUpDown, TbStackPop } from 'react-icons/tb'
// import SubscriptionForm from '@/blocks/Form/SubscriptionFormBlock' // Not used in this component
// import CallbackForm from '@/blocks/Form/CallBackForm' // Commented out - using FormBlockCompact instead
// import FormContact from '@/blocks/Form/FormContact' // Commented out - using FormBlockCompact instead
// import { FormBlock } from '@/blocks/Form/Component' // Using compact version for modal
import { FormBlockCompact } from '@/blocks/Form/FormBlockCompact'
import type { Form as FormType } from '@payloadcms/plugin-form-builder/types'
import { FormBlockMultiStep } from '@/blocks/Form/FormBlockMultiStep'
import {
  PiArrowArcRight,
  PiCaretDoubleUp,
  PiChatCenteredDotsLight,
  PiStackSimple,
} from 'react-icons/pi'

const featuredLogos = [
  { src: '/elementoricon.svg', alt: 'Elementor', width: 150, height: 24 },

  { src: '/bracketuii.svg', alt: 'Bracketui', width: 150, height: 24 },
]

type HeroProps = {
  contactForm: FormType
}

export const Hero: React.FC<HeroProps> = ({ contactForm }) => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  return (
    <section className=" py-[3rem] sm:py-[3.75rem]  lg:py-[4rem] bg-overlayDot-light dark:bg-overlayDot-dark  [background-size:36px_36px]">
      <Bracket fluid centered padding="small">
        <div className="mx-auto">
          <div className="flex flex-col items-start sm:items-center  space-y-10 lg:space-y-16 sm:mx-auto max-w-lg md:max-w-2xl lg:max-w-[970px] xl:max-w-[1200px] px-2 sm:px-0">
            <h1 className="text-[2.85rem]/[1.2]    md:text-5xl/[1.2] lg:text-[3.25rem]/[1.1] xl:text-6xl/[1.1]  text-left sm:text-center bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-extrabold tracking-tight">
              Affordable Next.js Agency for the Web
            </h1>
            <p className=" text-primary-500  text-base/7  lg:text-[1.15rem]/8 text-left sm:text-center   backdrop-blur-sm lg:px-16 md:px-6">
              <span className="text-primary-900 dark:text-primary-100">Third Bracket </span>helps UK
              startups and small businesses launch high-quality, conversion-ready websites. From
              design to development, we make your online presence work for you.
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 backdrop-blur-[2px]">
              <Button
                outline
                as={Link}
                href="/about"
                className="flex-1 "
                size="md"
                theme={{
                  border: 'border-primary-100/70 dark:border-primary-900/80',

                  hoverBackground: 'hover:bg-primary-50 dark:hover:bg-secondary-900 ',
                  focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
                  text: 'text-primary-900 dark:text-primary-100',
                }}
              >
                Learn About Us
              </Button>

              <Button
                size="md"
                onClick={() => setIsFormOpen(true)}
                className="flex-1 "
                theme={{
                  background: 'bg-gradient-text dark:bg-gradient-text-dark',
                  hoverBackground: '[@media(hover:hover)]:hover:opacity-95',
                  focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
                  text: 'text-primary-50 dark:text-primary-950 ',
                }}
              >
                Request Free Audit
                <svg
                  className="w-4 h-4 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m5.9 0.48v18h18v-18zm8.8 7.3a1.5 1.5 0 0 1 0.14 0 1.5 1.5 0 0 1 0.14 0.013 1.5 1.5 0 0 1 0.14 0.027 1.5 1.5 0 0 1 0.13 0.04 1.5 1.5 0 0 1 0.13 0.052 1.5 1.5 0 0 1 0.12 0.065 1.5 1.5 0 0 1 0.12 0.075 1.5 1.5 0 0 1 0.11 0.086 1.5 1.5 0 0 1 0.1 0.098 1.5 1.5 0 0 1 0.092 0.11 1.5 1.5 0 0 1 0.08 0.11 1.5 1.5 0 0 1 0.069 0.12 1.5 1.5 0 0 1 0.059 0.13 1.5 1.5 0 0 1 0.046 0.13 1.5 1.5 0 0 1 0.033 0.14 1.5 1.5 0 0 1 0.019 0.14 1.5 1.5 0 0 1 0.0077 0.14 1.5 1.5 0 0 1-0.038 0.33 1.5 1.5 0 0 1-0.11 0.31 1.5 1.5 0 0 1-0.18 0.28 1.5 1.5 0 0 1-0.23 0.23 1.5 1.5 0 0 1-0.28 0.17 1.5 1.5 0 0 1-0.31 0.11 1.5 1.5 0 0 1-0.33 0.036l0.0019 0.0019a1.5 1.5 0 0 1-0.37-0.044 1.5 1.5 0 0 1-0.34-0.13 1.5 1.5 0 0 1-0.3-0.21 1.5 1.5 0 0 1-0.24-0.28 1.5 1.5 0 0 1-0.16-0.33 1.5 1.5 0 0 1-0.073-0.36 1.5 1.5 0 0 1 0.021-0.37 1.5 1.5 0 0 1 0.11-0.35 1.5 1.5 0 0 1 0.19-0.31 1.5 1.5 0 0 1 0.27-0.25 1.5 1.5 0 0 1 0.32-0.18 1.5 1.5 0 0 1 0.36-0.096 1.5 1.5 0 0 1 0.14-0.013zm-4.4 0.0019a1.5 1.5 0 0 1 0.34 0.021 1.5 1.5 0 0 1 0.32 0.1 1.5 1.5 0 0 1 0.29 0.17 1.5 1.5 0 0 1 0.24 0.23 1.5 1.5 0 0 1 0.19 0.28 1.5 1.5 0 0 1 0.12 0.32 1.5 1.5 0 0 1 0.038 0.34 1.5 1.5 0 0 1-0.036 0.33 1.5 1.5 0 0 1-0.11 0.31 1.5 1.5 0 0 1-0.17 0.28 1.5 1.5 0 0 1-0.23 0.23 1.5 1.5 0 0 1-0.28 0.17 1.5 1.5 0 0 1-0.31 0.11 1.5 1.5 0 0 1-0.33 0.038 1.5 1.5 0 0 1-0.35-0.04 1.5 1.5 0 0 1-0.33-0.12 1.5 1.5 0 0 1-0.29-0.2 1.5 1.5 0 0 1-0.24-0.26 1.5 1.5 0 0 1-0.17-0.31 1.5 1.5 0 0 1-0.09-0.34 1.5 1.5 0 0 1-0.0096-0.35 1.5 1.5 0 0 1 0.075-0.34 1.5 1.5 0 0 1 0.15-0.32 1.5 1.5 0 0 1 0.22-0.27 1.5 1.5 0 0 1 0.28-0.21 1.5 1.5 0 0 1 0.32-0.14 1.5 1.5 0 0 1 0.34-0.057zm8.8 0a1.5 1.5 0 0 1 0.34 0.021 1.5 1.5 0 0 1 0.33 0.1 1.5 1.5 0 0 1 0.29 0.17 1.5 1.5 0 0 1 0.24 0.23 1.5 1.5 0 0 1 0.19 0.28 1.5 1.5 0 0 1 0.11 0.32 1.5 1.5 0 0 1 0.04 0.34 1.5 1.5 0 0 1-0.036 0.33 1.5 1.5 0 0 1-0.11 0.31 1.5 1.5 0 0 1-0.18 0.28 1.5 1.5 0 0 1-0.23 0.23 1.5 1.5 0 0 1-0.28 0.17 1.5 1.5 0 0 1-0.31 0.11 1.5 1.5 0 0 1-0.33 0.038 1.5 1.5 0 0 1-0.35-0.042 1.5 1.5 0 0 1-0.33-0.12 1.5 1.5 0 0 1-0.29-0.2 1.5 1.5 0 0 1-0.23-0.26 1.5 1.5 0 0 1-0.17-0.31 1.5 1.5 0 0 1-0.09-0.34 1.5 1.5 0 0 1-0.0096-0.35 1.5 1.5 0 0 1 0.075-0.34 1.5 1.5 0 0 1 0.15-0.31 1.5 1.5 0 0 1 0.22-0.27 1.5 1.5 0 0 1 0.28-0.21 1.5 1.5 0 0 1 0.32-0.14 1.5 1.5 0 0 1 0.34-0.057zm-19 2v14h14v-3.1h-11v-11z"
                    stroke="currentColor"
                    strokeWidth=".97"
                    fill="currentColor"
                  />
                </svg>
              </Button>
            </div>

            <div className="px-0 sm:px-4 py-4 text-left sm:text-center lg:px-36">
              <span className="uppercase bg-gradient-secondary opacity-50 dark:opacity-45 dark:bg-gradient-secondary-dark text-transparent bg-clip-text font-medium backdrop-blur-sm">
                OUR PARTNERS
              </span>
              <div className="mt-6 sm:mt-8 flex flex-wrap items-start gap-8 lg:gap-12 sm:items-center dark:text-primary-500/40 text-primary-600/50 justify-start sm:justify-between ">
                {featuredLogos.map((logo, idx) => (
                  <a
                    key={idx}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="backdrop-blur-lg  transition duration-300"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      fetchPriority="high"
                      priority
                      loading="eager"
                      className="w-auto h-5 md:h-6 object-contain dark:invert  opacity-40 hover:opacity-100"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Bracket>
      <Modal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}>
        {/* <SubscriptionForm /> */}
        {/* <CallbackForm /> */} {/* Commented out - using FormBlockCompact instead */}
        {/* <FormContact form={contactForm} /> */}{' '}
        {/* Commented out - using FormBlockCompact instead */}
        {/* <FormBlock form={contactForm} enableIntro={false} /> */}{' '}
        {/* Using compact version for modal */}
        {/* <FormBlockCompact form={contactForm} enableIntro={false} /> */}
        <FormBlockMultiStep form={contactForm} enableIntro={false} />
      </Modal>
    </section>
  )
}
