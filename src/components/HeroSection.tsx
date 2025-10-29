'use client'

import { Bracket, Button } from '@thirdbracket/bracketui'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Modal from './Modal'

// import SubscriptionForm from '@/blocks/Form/SubscriptionFormBlock' // Not used in this component
// import CallbackForm from '@/blocks/Form/CallBackForm' // Commented out - using FormBlockCompact instead
// import FormContact from '@/blocks/Form/FormContact' // Commented out - using FormBlockCompact instead
// import { FormBlock } from '@/blocks/Form/Component' // Using compact version for modal

import type { Form as FormType } from '@payloadcms/plugin-form-builder/types'
import { FormBlockMultiStep } from '@/blocks/Form/FormBlockMultiStep'

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
              Next.js Development for the Web
            </h1>
            <p className=" text-primary-500  text-base/7  lg:text-[1.15rem]/8 text-left sm:text-center   backdrop-blur-sm lg:px-16 md:px-6">
              <span className="text-primary-900 dark:text-primary-100">Third Bracket </span>is the
              first company offering full-stack design, development, infrastructure and digital
              marketing services in the Next.js ecosystem.
            </p>

            <div className="flex flex-wrap sm:justify-center gap-4 md:gap-6 backdrop-blur-[2px]">
              <Button
                size="md"
                onClick={() => setIsFormOpen(true)}
                theme={{
                  background: 'bg-gradient-text dark:bg-gradient-text-dark',
                  hoverBackground: '[@media(hover:hover)]:hover:opacity-95',
                  focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
                  text: 'text-primary-50 dark:text-primary-950 ',
                }}
              >
                <Image
                  className="invert dark:invert-0 me-2.5"
                  src="/popup-form-icon.svg"
                  alt="tb-popup-icon"
                  width={14}
                  height={14}
                />
                Start Free Website Audit
              </Button>
              <Button
                outline
                as={Link}
                href="/about"
                // className="flex-1 "
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
