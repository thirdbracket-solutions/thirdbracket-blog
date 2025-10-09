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
    <section className="py-[3rem] sm:py-[3.75rem]  lg:py-[4rem]  ">
      <Bracket fluid centered padding="small">
        <div className="mx-auto md:max-w-screen-xl">
          <h2 className="text-3xl lg:text-4xl  font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text  text-center mb-14 ">
            Trusted by Early-stage Startups
          </h2>

          <div className="  grid gap-0 sm:grid-cols-2 lg:grid-cols-3 ">
            {testimonials.map((item, i) => (
              <Card
                theme={{
                  background:
                    'dark:bg-secondary-900 bg-secondary-800 bg-overlayDot-testimonial  dark:bg-overlayDot-testimonial-dark  [background-size:32px_32px]   lg:first:rounded-tl-lg lg:first:rounded-bl-lg lg:last:rounded-tr-lg lg:last:rounded-br-lg sm:first:rounded-tr-none   sm:last:rounded-bl-none first:rounded-tl-lg  first:rounded-tr-lg last:rounded-br-lg last:rounded-bl-lg rounded-none border ',
                  border:
                    'shadow-[0_0_2px_rgba(72,81,91,0.20)]  dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]  border-secondary-700 dark:border-secondary-800/60',

                  text: 'dark:text-primary-600 text-primary-600  font-light leading-[1.45]',
                  hover:
                    '[@media(hover:hover)]:hover:border-opacity-100    [@media(hover:hover)]:hover:bg-opacity-100',
                }}
                key={i}
                className="rounded  flex   items-stretch !p-2"
              >
                <div className="flex-1  flex flex-col h-full  p-4">
                  <div className="mb-auto">
                    <blockquote className="dark:bg-gradient-text-dark bg-gradient-text-dark text-transparent bg-clip-text  font-medium text-lg  mb-8">
                      “{item.quote}”
                    </blockquote>
                  </div>
                  <div className="flex items-center justify-between gap-6 mt-auto">
                    <div>
                      <p className="text-sm font-medium dark:text-primary-300 text-primary-300 ">
                        {item.client}
                      </p>
                      <p className="text-sm dark:text-primary-300 text-primary-300 font-light ">
                        {item.role}
                      </p>
                    </div>
                    {item.logo && (
                      <div className="w-[100px] h-[35px] flex items-center  justify-center   shadow-[0_0_2px_rgba(246,247,248,0.10)]  dark:shadow-[0_0_2px_rgba(224,227,230,0.10)]     border  border-secondary-700 dark:border-secondary-800 rounded-full   bg-secondary-600/10 dark:bg-secondary-700/10 backdrop-blur-3xl ">
                        <Image
                          src={item.logo}
                          alt={`${item.client} logo`}
                          height={20}
                          width={50}
                          className="object-cover invert dark:invert grayscale   opacity-60 text-white dark:text-white"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Bracket>
    </section>
  )
}
