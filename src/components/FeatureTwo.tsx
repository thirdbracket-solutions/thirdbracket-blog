'use client'

import {
  RiArticleLine,
  RiLayout2Line,
  RiShoppingCart2Line,
  RiStackLine,
  RiTailwindCssFill,
  RiUbuntuLine,
} from 'react-icons/ri'

import { Bracket, Card } from '@thirdbracket/bracketui'
import Link from 'next/link'

const features = [
  {
    icon: RiStackLine,
    header: 'Custom Full Stack Development',
    href: '/services',
    description:
      'Full stack web development for UK businesses — combining robust backends with fast, modern Next.js frontends.',
  },
  {
    icon: RiArticleLine,
    header: 'Modern Blog Platforms',
    href: '/solutions',
    description:
      'Affordable blog solutions using Notion as the CMS and Next.js for the frontend — perfect for growing content-driven brands.',
  },
  {
    icon: RiShoppingCart2Line,
    header: 'Scalable Ecommerce Solutions',
    href: '/solutions',
    description:
      'Built with Payload CMS and Next.js, our ecommerce platforms include a powerful admin panel and lightning-fast storefront.',
  },
  {
    icon: RiLayout2Line,
    header: 'Minimal BracketUI Component Library',
    href: '/solutions',
    description:
      'Our open-source TailwindCSS component library — inspired by Vercel and Apple, optimized for speed and elegance.',
  },
  {
    icon: RiTailwindCssFill,
    header: 'Tailored UI/UX Design',
    href: '/services',
    description:
      'Custom interface design using TailwindCSS — responsive, minimal, and crafted to fit your brand perfectly.',
  },
  {
    icon: RiUbuntuLine,
    header: 'Custom Infrastructure & DevOps',
    href: '/services',
    description:
      'Reliable VPS setups, cloud integration, and DevOps workflows — built for scalability and long-term performance.',
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-[3rem] sm:py-[3.75rem]  lg:py-[4rem] ">
      <Bracket fluid centered padding="medium">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-8 md:mb-10 lg:mb-16">
            <h2 className="mb-6 text-3xl lg:text-4xl  font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-left md:text-center sm:mx-auto max-w-lg md:max-w-2xl lg:max-w-5xl">
              What We Build & Deliver
            </h2>
            <p className="dark:text-primary-400 text-primary-600 font-light text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] text-left sm:mx-auto md:text-center  max-w-lg md:max-w-2xl lg:max-w-5xl">
              From modern blogs to full-stack platforms, we create fast, scalable web solutions for
              UK businesses.
            </p>
          </div>

          <div className="space-y-8 sm:grid sm:grid-cols-2 sm:gap-8 sm:space-y-0 lg:grid-cols-3">
            {features.map(({ icon: Icon, header, description, href }, index) => (
              <Card
                key={index}
                size="lg"
                as={Link}
                href={href}
                isIcon
                theme={{
                  background: 'bg-gradient-secondary-dark dark:bg-gradient-secondary',
                  border:
                    'border-opacity-30  border-primary-500  dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]  shadow-[0_0_2px_rgba(11,13,15,0.10)]',

                  text: 'dark:text-primary-400 text-primary-600 leading-[1.45] font-light',
                  hover:
                    '[@media(hover:hover)]:hover:border-opacity-100    [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)] [@media(hover:hover)]:dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]         focus-within:border-opacity-100 active:border-opacity-100',
                }}
                cover={
                  <div className="w-16 h-16 mb-4 flex items-center  justify-center   border  border-primary-400/25     rounded-xl bg-white dark:bg-black">
                    <Icon size={36} className="text-secondary-900 dark:text-secondary-100" />
                  </div>
                }
                header={
                  <span className="font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-2 ">
                    {header}
                  </span>
                }
              >
                {description}
              </Card>
            ))}
          </div>
        </div>
      </Bracket>
    </section>
  )
}
