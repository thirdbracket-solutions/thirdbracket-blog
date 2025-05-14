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
                    'border-opacity-20 dark:border-opacity-20 border-primary-900 dark:border-primary-100  dark:shadow-[0_0_2px_rgba(214,218,224,0.10)]  shadow-[0_0_2px_rgba(11,13,15,0.10)]',

                  text: 'dark:text-primary-400 text-primary-600  font-light',
                }}
                key={i}
                size="lg"
                header={
                  <blockquote className="bg-gradient-primary dark:bg-gradient-secondary-dark text-transparent bg-clip-text mb-4 font-normal text-base  ">
                    “{item.quote}”
                  </blockquote>
                }
                cover={
                  item.logo && (
                    <div className="w-[75px] h-[30px] mb-4 flex items-center  justify-center border-[0.5px] border-primary-200 dark:border-primary-800 dark:shadow-[0_0_2px_rgba(214,218,224,0.10)]  shadow-[0_0_2px_rgba(11,13,15,0.10)]        rounded-full bg-gradient-secondary-dark dark:bg-gradient-secondary">
                      <Image
                        src={item.logo}
                        alt={`${item.client} logo`}
                        height={20}
                        width={60}
                        className="object-cover  grayscale dark:invert  opacity-60 text-primary-900 dark:text-primary-100"
                      />
                    </div>
                  )
                }
                className="  rounded-none md:!border-y  border-y-[0.5px]   "
              >
                <p className="text-sm font-normal text-primary-600 dark:text-primary-400">
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
