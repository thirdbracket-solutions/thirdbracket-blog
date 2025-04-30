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
          <h2 className="text-3xl lg:text-4xl font-extrabold bg-gradient-primary dark:bg-gradient-primary-dark  text-transparent bg-clip-text text-left sm:text-center mb-12">
            Trusted by Early-stage Startups
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <Card
                isIcon
                theme={{
                  background: 'bg-gradient-secondary-dark dark:bg-gradient-secondary',
                  border: 'border-secondary-500/30',
                  hoverBorder: 'hover:border-secondary-500/70',

                  text: 'text-primary-800  dark:text-primary-200',
                }}
                key={i}
                size="lg"
                cover={
                  item.logo && (
                    <div className=" w-full  bg-white dark:bg-black   bg-[linear-gradient(to_right,#8697c40a_1px,transparent_1px),linear-gradient(to_bottom,#8697c40a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#636e9f1f_1px,transparent_1px),linear-gradient(to_bottom,#636e9f1f_1px,transparent_1px)] bg-[size:14px_24px]   relative">
                      {' '}
                      <Image
                        src={item.logo}
                        alt={`${item.client} logo`}
                        height={30}
                        width={90}
                        className="object-cover  grayscale dark:invert  opacity-70 sm:pt-2 sm:pl-2 mb-16"
                      />
                      <blockquote className="text-primary-800 dark:text-primary-100 backdrop-blur-md   text-base   ">
                        “{item.quote}”
                      </blockquote>
                    </div>
                  )
                }
                className="  !rounded-3xl   "
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
