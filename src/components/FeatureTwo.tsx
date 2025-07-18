'use client'

import {
  RiAdminLine,
  RiArticleLine,
  RiBox1Line,
  RiLayout2Line,
  RiNextjsLine,
  RiSeoLine,
  RiShoppingCart2Line,
  RiStackLine,
  RiTailwindCssFill,
  RiTailwindCssLine,
  RiUbuntuLine,
  RiWordpressLine,
} from 'react-icons/ri'

import { Bracket, Card } from '@thirdbracket/bracketui'
import Link from 'next/link'
import { SiElementor } from 'react-icons/si'

const features = [
  {
    icon: RiNextjsLine,
    header: 'Custom Next.js',
    href: '/services',
    description:
      'Scalable web apps with full-stack flexibility, built with TypeScript, API routes, and Next.js best practices.',
  },
  {
    icon: RiWordpressLine,
    header: 'Optimized WordPress',
    href: '/solutions',
    description:
      'Speed-optimized, secure, and easily manageable WordPress websites — perfect for content-heavy brands.',
  },
  {
    icon: RiBox1Line,
    header: 'Bracket UI',
    href: '/solutions',
    description:
      'Our in-house UI kit based on Tailwind CSS gives you a consistent, scalable design system from day one.',
  },
  {
    icon: RiTailwindCssLine,
    header: 'Tailwind CSS',
    href: '/solutions',
    description:
      'Clean, responsive interfaces tailored to your brand — built with utility-first code and modern patterns.',
  },

  {
    icon: RiUbuntuLine,
    header: 'Custom Infrastructure & DevOps',
    href: '/services',
    description:
      'From deployment pipelines to domain setup and server configs — we take care of everything behind the scenes.',
  },
  {
    icon: SiElementor,
    header: 'Elementor Template',
    href: '/services',
    description:
      'Pixel-perfect templates for Elementor built with design principles in mind and performance at heart.',
  },
  {
    icon: RiAdminLine,
    header: 'Custom Custom Admin',
    href: '/services',
    description:
      'Need control? We build intuitive, secure admin dashboards that give you full ownership over your website.',
  },
  {
    icon: RiSeoLine,
    header: 'Digital Marketing',
    href: '/services',
    description:
      'Integrated solutions for analytics, SEO, and performance tracking to grow traffic and boost conversions.',
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
              From modern websites to tailored systems, we help UK businesses thrive with reliable,
              high-performance web development.
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
