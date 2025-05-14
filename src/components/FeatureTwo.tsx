'use client'

import { MdOutlineAutoGraph } from 'react-icons/md'
import { RiMedal2Line } from 'react-icons/ri'
import {
  IoGitNetworkOutline,
  IoLayersOutline,
  IoLockOpenOutline,
  IoTimerOutline,
} from 'react-icons/io5'
import { Bracket, Card } from '@thirdbracket/bracketui'

const features = [
  {
    icon: RiMedal2Line,
    header: 'Expertise & Flexibility',
    description:
      'Get senior-level skills with startup agility. Experience agency expertise with freelancer flexibility. Access a unified team of top-rated professionals, not just scattered freelancers.',
  },
  {
    icon: IoLayersOutline,
    header: 'Modern Stack',
    description:
      'Next.js, TailwindCSS & Typescript. We build with the technologies powering today’s best-performing websites—ensuring fast loads, clean code, and easy scaling.',
  },
  {
    icon: MdOutlineAutoGraph,
    header: 'Built for Growth',
    description:
      'Future-ready websites that evolve with you. Every site is architected to support SEO, performance, and feature expansion—perfect for startups aiming to scale or agencies needing long-term solutions.',
  },
  {
    icon: IoGitNetworkOutline,
    header: 'Seamless Collaboration',
    description:
      'We work like part of your team. Slack, Notion, GitHub—whatever you use, we integrate smoothly. Communication is clear, responsive, and always aligned with your timelines.',
  },
  {
    icon: IoLockOpenOutline,
    header: 'No Lock-in, No Bloat',
    description:
      'You pay for what you need—no unnecessary subscriptions, yearly lock-ins, or bloated retainers. Just clean code, full ownership, and total freedom to move forward on your terms.',
  },
  {
    icon: IoTimerOutline,
    header: 'Timely Deliveries',
    description:
      'Fast doesn’t mean rushed. We always deliver on time, without compromising quality. Our process is built around clear milestones and predictable outputs.',
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 xl:py-16">
      <Bracket fluid centered padding="medium">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="mb-6 text-3xl lg:text-4xl  font-extrabold bg-gradient-primary dark:bg-gradient-primary-dark text-transparent bg-clip-text text-left md:text-center sm:mx-auto max-w-lg md:max-w-2xl lg:max-w-5xl">
              Why Choose Us for Proffessional Web Development Service?
            </h2>
            <p className="dark:text-primary-400 text-primary-600 font-light text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] text-left sm:mx-auto md:text-center  max-w-lg md:max-w-2xl lg:max-w-5xl">
              Our approach combines technical excellence with real-world flexibility—designed to
              meet the needs of growing businesses that care about speed, SEO, and design clarity.
            </p>
          </div>

          <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3">
            {features.map(({ icon: Icon, header, description }, index) => (
              <Card
                key={index}
                size="lg"
                isIcon
                theme={{
                  background: 'bg-conic-card dark:bg-conic-cardDark',
                  border:
                    '  border-opacity-30 dark:border-opacity-40 border-primary-600 dark:border-primary-400  dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]  shadow-[0_0_2px_rgba(11,13,15,0.10)]',

                  text: 'dark:text-primary-400 text-primary-600 leading-[1.45] font-light',
                  hover:
                    '[@media(hover:hover)]:hover:border-opacity-60 [@media(hover:hover)]:hover:dark:border-opacity-70   [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)] [@media(hover:hover)]:dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]         focus-within:border-opacity-100 active:border-opacity-100',
                }}
                cover={
                  <div className="w-16 h-16 mb-4 flex items-center  justify-center   border-[0.5px]  border-primary-600/30 dark:border-primary-400/40    rounded-xl bg-white dark:bg-black">
                    <Icon size={36} className="text-secondary-900 dark:text-secondary-100" />
                  </div>
                }
                header={
                  <span className="font-bold bg-gradient-primary dark:bg-gradient-primary-dark text-transparent bg-clip-text mb-2 ">
                    {header}
                  </span>
                }
              >
                {description}
              </Card>
            ))}
          </div>
        </div>
      </Bracket>
    </section>
  )
}
