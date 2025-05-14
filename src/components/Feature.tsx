'use client'
import { Bracket, Card } from '@thirdbracket/bracketui'

const cards = [
  {
    name: 'speed',
    props: {
      header: (
        <span className=" bg-gradient-primary dark:bg-gradient-primary-dark text-transparent bg-clip-text font-semibold">
          Fast Website That Ranks
        </span>
      ),
      cover: '/website.svg',
      href: '/services',

      children:
        ' We build high-performing websites that are SEO-optimized, delivering fast load times and great user experiences.',
    },
  },

  {
    name: 'scalability',
    props: {
      header: (
        <span className=" bg-gradient-primary dark:bg-gradient-primary-dark text-transparent bg-clip-text font-semibold">
          Enterprise Level Website
        </span>
      ),

      href: '/services',

      children: 'Built to scale with fast load times and excellent user experience.',
    },
  },
  {
    name: 'white-label',
    props: {
      header: (
        <span className=" bg-gradient-primary dark:bg-gradient-primary-dark text-transparent bg-clip-text font-semibold">
          White Level Development
        </span>
      ),

      href: '/services',

      children: 'Offer premium web dev under your brand while we handle the build.',
    },
  },
  {
    name: 'api',
    props: {
      header: (
        <span className=" bg-gradient-primary dark:bg-gradient-primary-dark text-transparent bg-clip-text font-semibold">
          API Integration
        </span>
      ),

      href: '/services',

      children:
        'Robust API development and third-party integrations to extend your applications functionality',
    },
  },
  {
    name: 'design',
    props: {
      header: (
        <span className=" bg-gradient-primary dark:bg-gradient-primary-dark text-transparent bg-clip-text font-semibold">
          Design that Reflects Your Brand
        </span>
      ),
      cover: '/ui.svg',
      href: '/services',

      children:
        'Minimalist, clean design that focuses on usability while staying true to your brand’s vision.',
    },
  },

  {
    name: 'webaps',
    props: {
      header: (
        <span className=" bg-gradient-primary dark:bg-gradient-primary-dark text-transparent bg-clip-text font-semibold">
          PWA
        </span>
      ),
      cover: '/webdev.svg',
      href: '/services',

      children:
        'Transform your website into a lightning-fast, offline-capable progressive web application that provides native app-like experiences across all devices and platforms.',
    },
  },

  {
    name: 'ecommerce',
    props: {
      header: (
        <span className=" bg-gradient-primary dark:bg-gradient-primary-dark text-transparent bg-clip-text font-semibold">
          Ecommerce Solution
        </span>
      ),

      href: '/services',

      children:
        'Complete e-commerce implementations with secure payment gateways, inventory management,and seamless shopping experiences.',
    },
  },

  {
    name: 'custom',
    props: {
      header: (
        <span className=" bg-gradient-primary dark:bg-gradient-primary-dark text-transparent bg-clip-text font-semibold">
          Custom Web Development
        </span>
      ),

      href: '/services',

      children: 'Tailored sites built to meet your unique business requirements.',
    },
  },
  {
    name: 'performance',
    props: {
      header: (
        <span className=" bg-gradient-primary dark:bg-gradient-primary-dark text-transparent bg-clip-text font-semibold">
          Performance Optimization
        </span>
      ),
      cover: '/performance.svg',
      href: '/services',

      children:
        'Comprehensive website optimization including code splitting, lazy loading, and advanced caching strategies to achieve maximum speed and efficiency.',
    },
  },
]

export default function CardGrid() {
  return (
    <section className="py-12 sm:py-14  lg:py-16 ">
      <Bracket fluid centered padding="medium">
        <div className="mx-auto max-w-screen-xl">
          {/* Header */}

          <div className="mb-8 sm:mb-12 lg:mb-16 grid gap-6  lg:grid-cols-2 lg:items-center lg:max-w-5xl lg:mx-auto">
            <h2 className="  text-3xl lg:text-4xl font-extrabold bg-gradient-primary dark:bg-gradient-primary-dark text-transparent bg-clip-text text-left sm:text-center lg:text-right ">
              Looking for Fast & Beautiful Websites for Your Business?
            </h2>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] font-light dark:text-primary-400 text-primary-600 text-left sm:text-center lg:text-left">
              Whether you are a startup or an agency, we help you build scalable, SEO-optimized
              websites with a clean, minimal design that aligns with your brand.
            </p>
          </div>

          {/* Cards */}
          <div className="space-y-8">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6   [column-fill:_balance]">
              {cards.map(({ name, props }, index) => (
                <div
                  key={index}
                  className="mb-6 break-inside-avoid"
                  data-card-name={name} // You can use this for debugging or testing
                >
                  <Card
                    size="lg"
                    theme={{
                      background: 'bg-conic-card dark:bg-conic-cardDark ',
                      border:
                        'border-opacity-20 dark:border-opacity-20 border-primary-900 dark:border-primary-100  dark:shadow-[0_0_2px_rgba(214,218,224,0.10)]  shadow-[0_0_2px_rgba(11,13,15,0.10)]   ',

                      //shadow-secondary-100 dark:shadow-secondary-900/50
                      hover:
                        '[@media(hover:hover)]:hover:border-opacity-100 [@media(hover:hover)]hover:dark:border-opacity-50 [@media(hover:hover)]:hover:shadow-[0_0_4px_rgba(11,13,15,0.20)] [@media(hover:hover)]:dark:hover:shadow-[0_0_4px_rgba(240,242,244,0.20)] [@media(hover:hover)]:hover:dark:shadow-secondary-950        focus-within:border-opacity-100 active:border-opacity-100  ',

                      text: 'dark:text-primary-400 text-primary-600  font-light',
                    }}
                    className="!delay-50   motion-reduce:!transition-none motion-reduce:hover:!transform-none"
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
