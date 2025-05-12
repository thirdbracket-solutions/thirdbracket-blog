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
    <section className="py-10 sm:py-12  lg:py-14 xl:py-16 ">
      <Bracket fluid centered padding="medium">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-3xl lg:text-4xl  font-extrabold bg-gradient-primary dark:bg-gradient-primary-dark text-transparent bg-clip-text text-left sm:text-center mb-12">
            Trusted by Early-stage Startups
          </h2>

          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <Card
                isIcon
                theme={{
                  background: 'bg-gradient-secondary-dark dark:bg-gradient-secondary',
                  border:
                    'border-opacity-20 dark:border-opacity-30 border-secondary-800 dark:border-secondary-200 shadow-sm shadow-secondary-200/30 dark:shadow-secondary-800/50',
                  hover:
                    '[@media(hover:hover)]:hover:border-opacity-30 [@media(hover:hover)]hover:dark:border-opacity-40       focus-within:border-opacity-100 active:border-opacity-100  ',
                  text: 'dark:text-primary-400 text-primary-600  font-light',
                }}
                key={i}
                size="lg"
                header={
                  <blockquote className="bg-gradient-primary dark:bg-gradient-secondary-dark text-transparent bg-clip-text mb-4 font-light text-lg  ">
                    “{item.quote}”
                  </blockquote>
                }
                cover={
                  item.logo && (
                    <div className="w-32 h-10 mb-4 flex items-center  justify-center border-[0.5px] border-secondary-200 dark:border-secondary-800 shadow-sm shadow-secondary-200/30 dark:shadow-secondary-800/50        rounded-full bg-gradient-secondary-dark dark:bg-gradient-secondary">
                      <Image
                        src={item.logo}
                        alt={`${item.client} logo`}
                        height={30}
                        width={90}
                        className="object-cover  grayscale dark:invert  opacity-60 text-primary-900 dark:text-primary-100"
                      />
                    </div>
                  )
                }
                className="  rounded-none md:!border-y  border-y-[0.5px]   "
              >
                <p className="text-sm font-medium text-primary-800 dark:text-primary-300">
                  {item.client}
                </p>
                <p className="text-sm text-primary-500">{item.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </Bracket>
    </section>
  )
}
