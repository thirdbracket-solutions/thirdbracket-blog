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
          <h2 className="text-3xl lg:text-4xl  font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text  text-center mb-14">
            Trusted by Early-stage Startups
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <Card
                isIcon
                theme={{
                  background:
                    'bg-white/85 dark:bg-black/70 bg-overlayDot-light dark:bg-overlayDot-dark  [background-size:32px_32px]  ',
                  border:
                    'border-opacity-30  border-primary-500  dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]  shadow-[0_0_2px_rgba(11,13,15,0.10)]',

                  text: 'dark:text-primary-400 text-primary-600  font-light leading-[1.45]',
                  hover:
                    '[@media(hover:hover)]:hover:border-opacity-100    [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)] [@media(hover:hover)]:dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]         focus-within:border-opacity-100 active:border-opacity-100',
                }}
                key={i}
                size="lg"
                header={
                  <blockquote className="text-primary-950 dark:text-primary-50 mb-6 font-medium text-lg  ">
                    “{item.quote}”
                  </blockquote>
                }
                cover={
                  item.logo && (
                    <div className="w-[100px] h-[45px] flex items-center  justify-center border border-primary-500/20  dark:shadow-[0_0_2px_rgba(214,218,224,0.10)]  shadow-[0_0_2px_rgba(11,13,15,0.10)]        rounded-full bg-gradient-secondary-dark dark:bg-gradient-secondary">
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
