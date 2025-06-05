'use client'
import { Bracket, Card } from '@thirdbracket/bracketui'

const cards = [
  {
    name: 'speed',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          Next.js Expertise
        </span>
      ),
      cover: '/website.svg',

      children:
        'We build high-performance apps using Next.js — the core of our fast, modern development stack.',
    },
  },

  {
    name: 'scalability',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          Modern Design
        </span>
      ),

      children:
        'Minimal, responsive interfaces inspired by Apple and Vercel — clean, user-focused, and sleek.',
    },
  },
  {
    name: 'white-label',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          SEO Optimization
        </span>
      ),

      children:
        'Our sites are fast, structured, and optimized for search engines and Core Web Vitals.',
    },
  },
  {
    name: 'api',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          Affordable Solutions
        </span>
      ),

      children:
        'Enterprise-grade quality at accessible pricing — ideal for startups and growing UK brands.',
    },
  },
  {
    name: 'design',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          Minimal Aesthetics
        </span>
      ),
      cover: '/ui.svg',

      children:
        'Slick, clutter-free designs that prioritize clarity and conversion across all devices.',
    },
  },

  {
    name: 'webaps',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          PWA Ready
        </span>
      ),
      cover: '/webdev.svg',

      children:
        'We build Progressive Web Apps that feel like native apps — fast, installable, and offline-ready.',
    },
  },

  {
    name: 'ecommerce',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          White-Label Friendly
        </span>
      ),

      children: 'Perfect for agencies — deliver premium web solutions under your own brand.',
    },
  },

  {
    name: 'custom',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          DevOps-Ready
        </span>
      ),

      children:
        'From CI/CD to scalable infrastructure, we build with performance and deployment in mind.',
    },
  },
  {
    name: 'performance',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          In-House UI Library
        </span>
      ),
      cover: '/performance.svg',

      children:
        'Our custom Tailwind-based component system speeds up delivery without sacrificing quality.',
    },
  },
]

export default function CardGrid() {
  return (
    <section className="py-[3rem] sm:py-[3.75rem]  lg:py-[4rem]  ">
      <Bracket fluid centered padding="medium">
        <div className="mx-auto max-w-screen-xl">
          {/* Header */}

          <div className=" mb-8 md:mb-10 lg:mb-16 grid gap-6  lg:grid-cols-2 lg:items-center lg:max-w-5xl lg:mx-auto">
            <h2 className="  text-3xl lg:text-4xl font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-left sm:text-center lg:text-right ">
              Looking for Fast & Affordable Web Development in the UK?
            </h2>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] font-light dark:text-primary-400 text-primary-600 text-left sm:text-center lg:text-left">
              We build modern, high-performance websites with clean UI, lightning-fast speed, and
              SEO built in — all powered by Next.js. Here’s how we bring that promise to life:
            </p>
          </div>

          {/* Cards */}
          <div className="space-y-8">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-8   [column-fill:_balance]">
              {cards.map(({ name, props }, index) => (
                <div
                  key={index}
                  className="mb-6 break-inside-avoid"
                  data-card-name={name} // You can use this for debugging or testing
                >
                  <Card
                    size="lg"
                    theme={{
                      background: 'bg-white dark:bg-black',
                      border:
                        'border-opacity-30  border-primary-500 dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]  shadow-[0_0_2px_rgba(11,13,15,0.10)]   ',

                      //shadow-secondary-100 dark:shadow-secondary-900/50
                      hover:
                        '[@media(hover:hover)]:hover:border-opacity-100    [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)] [@media(hover:hover)]:dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]         focus-within:border-opacity-100 active:border-opacity-100 ',

                      text: 'dark:text-primary-400 text-primary-600  font-light leading-[1.45]',
                    }}
                    className="!delay-50   motion-reduce:!transition-none motion-reduce:hover:!transform-none "
                    {...props}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Bracket>
    </section>
  )
}
