'use client'

import { Bracket, Card } from '@thirdbracket/bracketui'
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
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-primary-dark dark:bg-gradient-primary">
      <Bracket fluid centered padding="medium">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-3xl  lg:text-4xl  font-extrabold bg-gradient-secondary dark:bg-gradient-secondary-dark  text-transparent bg-clip-text text-left sm:text-center mb-12">
            Trusted by early-stage teams
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <Card
                key={i}
                className="bg-gradient-secondary-dark dark:bg-gradient-secondary p-6 !rounded-3xl shadow-sm border border-primary-500/30 flex flex-col justify-between"
              >
                {item.logo && (
                  <div className="mb-6 h-10 relative w-auto text-primary-900 dark:text-primary-100">
                    <Image
                      src={item.logo}
                      alt={`${item.client} logo`}
                      height={40}
                      width={120}
                      className="object-contain dark:invert grayscale"
                    />
                  </div>
                )}

                <p className="bg-gradient-secondary dark:bg-gradient-secondary-dark  text-transparent bg-clip-text text-lg mb-6  tracking-wider  ">
                  “{item.quote}”
                </p>

                <div className="mt-auto">
                  <p className="text-sm font-medium text-primary-900 dark:text-primary-100">
                    {item.client}
                  </p>
                  <p className="text-sm text-primary-500">{item.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Bracket>
    </section>
  )
}
