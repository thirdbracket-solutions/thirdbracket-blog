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
    <section className="py-[4.5rem] sm:py-[5rem]  lg:py-[6rem]  ">
      <Bracket fluid centered>
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-3xl lg:text-4xl  font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-left sm:text-center mb-12">
            Trusted by Early-stage Startups
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <Card
                isIcon
                theme={{
                  background:
                    'bg-white dark:bg-black bg-overlayDot-light dark:bg-overlayDot-dark  [background-size:16px_16px] dark:bg-[linear-gradient(to_right,#1f242866_1px,transparent_1px),linear-gradient(to_bottom,#1f242866_1px,transparent_1px)] bg-[size:14px_24px] ',
                  border:
                    'border-opacity-50  border-primary-500  dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]  shadow-[0_0_2px_rgba(11,13,15,0.10)]',

                  text: 'dark:text-primary-400 text-primary-600  font-light leading-[1.45]',
                  hover:
                    '[@media(hover:hover)]:hover:border-opacity-100    [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)] [@media(hover:hover)]:dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]         focus-within:border-opacity-100 active:border-opacity-100',
                }}
                key={i}
                size="lg"
                header={
                  <blockquote className="bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4 font-medium text-lg  backdrop-blur-[1px]">
                    “{item.quote}”
                  </blockquote>
                }
                cover={
                  item.logo && (
                    <div className="w-[100px] h-[45px] mb-4 flex items-center  justify-center border-[0.5px] border-primary-200 dark:border-primary-800 dark:shadow-[0_0_2px_rgba(214,218,224,0.10)]  shadow-[0_0_2px_rgba(11,13,15,0.10)]        rounded-full bg-gradient-secondary-dark dark:bg-gradient-secondary">
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
                className="  rounded    "
              >
                <p className="text-sm font-normal text-primary-600 dark:text-primary-400 backdrop-blur-[1px]">
                  {item.client}
                </p>
                <p className="text-sm text-primary-500 backdrop-blur-[1px]">{item.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </Bracket>
    </section>
  )
}
