'use client'
import { Bracket, Card } from '@thirdbracket/bracketui'

const cards = [
  {
    name: 'speed',
    props: {
      header: 'Fast Websites that Rank',
      cover: '/website.svg',
      href: '/services',

      children: (
        <span className="!font-light">
          We build high-performing websites that are SEO-optimized, delivering fast load times and
          great user experiences.
        </span>
      ),
    },
  },

  {
    name: 'scalability',
    props: {
      header: 'Enterprise-Level Websites',

      href: '/services',

      children: (
        <span className="!font-light">
          Built to scale with fast load times and excellent user experience.
        </span>
      ),
    },
  },
  {
    name: 'white-label',
    props: {
      header: 'White-Label Web Development',

      href: '/services',

      children: (
        <span className="!font-light">
          Offer premium web dev under your brand while we handle the build.
        </span>
      ),
    },
  },
  {
    name: 'api',
    props: {
      header: 'API Integration & Development',

      href: '/services',

      children: (
        <span className="!font-light">
          Robust API development and third-party integrations to extend your applications
          functionality
        </span>
      ),
    },
  },
  {
    name: 'design',
    props: {
      header: 'Designs That Reflect Your Brand',
      cover: '/ui.svg',
      href: '/services',

      children: (
        <span className="!font-light">
          Minimalist, clean design that focuses on usability while staying true to your brand’s
          vision.
        </span>
      ),
    },
  },

  {
    name: 'webaps',
    props: {
      header: 'Progressive Web Apps',
      cover: '/webdev.svg',
      href: '/services',

      children: (
        <span className="!font-light">
          Transform your website into a lightning-fast, offline-capable progressive web application
          that provides native app-like experiences across all devices and platforms.
        </span>
      ),
    },
  },

  {
    name: 'ecommerce',
    props: {
      header: 'E-commerce Solutions',

      href: '/services',

      children: (
        <span className="!font-light">
          Complete e-commerce implementations with secure payment gateways, inventory management,
          and seamless shopping experiences.
        </span>
      ),
    },
  },

  {
    name: 'custom',
    props: {
      header: 'Custom Web Development',

      href: '/services',

      children: (
        <span className="!font-light">
          Tailored sites built to meet your unique business requirements.
        </span>
      ),
    },
  },
  {
    name: 'performance',
    props: {
      header: 'Performance Optimization',
      cover: '/performance.svg',
      href: '/services',

      children: (
        <span className="!font-light">
          Comprehensive website optimization including code splitting, lazy loading, and advanced
          caching strategies to achieve maximum speed and efficiency.
        </span>
      ),
    },
  },
]

export default function CardGrid() {
  return (
    <section className="py-10 sm:py-12  lg:py-14 xl:py-16">
      <Bracket fluid centered padding="medium">
        <div className="mx-auto max-w-screen-xl">
          {/* Header */}
          <div className="mb-8 md:mb-12 lg:mb-16 lg:flex lg:items-center lg:justify-center lg:gap-6">
            <h2 className="mb-4 md:mb-6 text-3xl lg:text-4xl  font-extrabold bg-gradient-secondary dark:bg-gradient-secondary-dark text-transparent bg-clip-text lg:mb-0 text-left sm:text-center lg:text-right">
              Looking for Fast & Beautiful Websites for Your Business?
            </h2>
            <p className="text-primary-950/80 dark:text-primary-200/70 font-light text-base md:text-lg lg:text-xl text-left sm:text-center lg:text-left">
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
                      background: 'bg-gradient-primary-dark dark:bg-gradient-primary',
                      border: 'border-primary-500/30',
                      hoverBorder: 'hover:border-primary-500/70',

                      text: 'text-primary-800  dark:text-primary-200',
                    }}
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
