'use client'

import { Bracket } from '@thirdbracket/bracketui'
import Image from 'next/image'

type Testimonial = {
  client: string
  role: string
  quote: string
  logo?: string // logo file path or URL
}

const testimonials: Testimonial[] = [
  {
    client: 'Nova Digital',
    role: 'Founder',
    quote: 'Thirdbracket delivered a blazing-fast site that exceeded expectations.',
    logo: '/pob.svg',
  },
  {
    client: 'InHouse Labs',
    role: 'Product Manager',
    quote: 'Incredible speed and professionalism. We loved the minimalist design approach.',
    logo: '/tb.svg',
  },
  {
    client: 'Thirdbracket',
    role: 'Our own site',
    quote: 'Built with the exact same stack we use for our clients — fast, clean, and SEO-focused.',
    logo: '/pob.svg',
  },
]

export const ClientTestimonials = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-secondary-dark dark:bg-gradient-secondary">
      <Bracket fluid centered padding="medium">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-3xl font-semibold text-center text-primary-900 dark:text-primary-100 mb-12">
            Trusted by early-stage teams
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="bg-gradient-primary-dark dark:bg-gradient-primary p-6 rounded-xl shadow-sm border border-primary-500/30 flex flex-col justify-between"
              >
                {item.logo && (
                  <div className="mb-4 h-10 relative w-auto text-primary-900 dark:text-primary-100">
                    <Image
                      src={item.logo}
                      alt={`${item.client} logo`}
                      height={40}
                      width={120}
                      className="object-contain"
                    />
                  </div>
                )}

                <p className="text-primary-700 dark:text-primary-300 italic mb-6">“{item.quote}”</p>

                <div className="mt-auto">
                  <p className="text-sm font-medium text-primary-900 dark:text-primary-100">
                    {item.client}
                  </p>
                  <p className="text-sm text-primary-500">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Bracket>
    </section>
  )
}
