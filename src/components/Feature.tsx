'use client'
import { Bracket, Card } from '@thirdbracket/bracketui'

const cards = [
  {
    name: 'nextjs',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          Next.js Expertise
        </span>
      ),
      cover: '/website.svg',

      children:
        'We use Next.js to build fast, scalable, and secure applications trusted by startups and enterprise teams alike.',
    },
  },

  {
    name: 'design',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          Modern Design
        </span>
      ),

      children:
        'We create sleek, user-friendly interfaces focused on usability, branding, and accessibility — no clutter, just clarity.',
    },
  },
  {
    name: 'seo',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          SEO Optimization
        </span>
      ),

      children:
        'Every website we build is SEO-ready with structured data, speed optimization, and best practices baked in.',
    },
  },
  {
    name: 'affordable',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          Affordable Solutions
        </span>
      ),

      children:
        'We offer honest, competitive rates with no surprises — perfect for small businesses and growing teams.',
    },
  },
  {
    name: 'minimal',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          Minimal Aesthetics
        </span>
      ),
      cover: '/ui.svg',

      children:
        'Our design philosophy emphasizes whitespace, clarity, and strong visual hierarchy that enhances brand perception.',
    },
  },

  {
    name: 'pwa',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          PWA Ready
        </span>
      ),
      cover: '/webdev.svg',

      children:
        'Want app-like performance? We deliver progressive web apps (PWAs) that load fast and work offline.',
    },
  },

  {
    name: 'whitelabel',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          White-Label Friendly
        </span>
      ),

      children:
        'We’re agency-ready. Our systems and components are reusable, documented, and easily integrated into your workflows.',
    },
  },

  {
    name: 'devops',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          DevOps-Ready
        </span>
      ),

      children:
        'We build for scale — CI/CD pipelines, staging environments, and performance monitoring come standard.',
    },
  },
  {
    name: 'bracketui',
    props: {
      header: (
        <span className=" bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text font-semibold">
          In-House UI Library
        </span>
      ),
      cover: '/performance.svg',

      children:
        'Our custom-built, reusable component library accelerates delivery and ensures consistent UI across your site.',
    },
  },
]

export default function CardGrid() {
  return (
    <section className="py-[3rem] sm:py-[3.75rem]  lg:py-[4rem]  ">
      <Bracket fluid centered padding="small">
        <div className="mx-auto md:max-w-screen-xl">
          {/* Header */}

          <div className=" mb-8 md:mb-10 lg:mb-16 grid gap-6  lg:grid-cols-2 lg:items-center lg:max-w-5xl lg:mx-auto">
            <h2 className="  text-3xl lg:text-4xl font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-left sm:text-center lg:text-right ">
              {/* Looking for Fast & Affordable Web Development in the UK? */}
              Why Choose Third Bracket?
            </h2>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] font-light dark:text-primary-300 text-primary-700 text-left sm:text-center lg:text-left">
              Modern websites built with the latest technology, clean design principles, and
              performance-first thinking — tailored for UK businesses.
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

                      text: 'text-primary-500 dark:text-primary-600 leading-[1.45] font-[350px]',
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
