// import { Bracket, Card } from '@thirdbracket/bracketui'
// import Link from 'next/link'

// import { MdOutlineAutoGraph } from 'react-icons/md'
// import {
//   RiMedal2Line,
//   RiRunLine,
//   RiStackLine,
//   RiTimeLine,
//   RiTimer2Line,
//   RiTimerFill,
//   RiUserCommunityLine,
// } from 'react-icons/ri'
// import {
//   IoGitNetworkOutline,
//   IoGitNetworkSharp,
//   IoLayersOutline,
//   IoLockOpen,
//   IoLockOpenOutline,
//   IoMedal,
//   IoMedalOutline,
//   IoTimerOutline,
// } from 'react-icons/io5'

// import { IoMdMedal } from 'react-icons/io'

// import { VscUnlock } from 'react-icons/vsc'

// export function FeatureTwo() {
//   return (
//     <section className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
//       <Bracket fluid centered padding="medium">
//         <div className="mx-auto max-w-screen-xl  ">
//           <div className=" mb-8 md:mb-12 lg:mb-16 ">
//             <h2 className="mb-4 md:mb-6 text-3xl  lg:text-4xl  font-extrabold bg-gradient-secondary dark:bg-gradient-secondary-dark  text-transparent bg-clip-text text-left   sm:text-center ">
//               Why Choose Us for Web Development?
//             </h2>
//             <p className="text-primary-950/80 dark:text-primary-50/60  text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem]  text-left sm:text-center   font-light  max-w-4xl mx-auto">
//               Our approach combines technical excellence with real-world flexibility—designed to
//               meet the needs of growing businesses that care about speed, SEO, and design clarity.
//             </p>
//           </div>
//           <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3 ">
//             <Card
//               size="lg"
//               isIcon
//               className="rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100 "
//               cover={
//                 <RiMedal2Line className="h-10 w-10     text-primary-800 dark:text-primary-200 " />
//               }
//               header="Expertise & Flexibility"
//             >
//               <span className="text-primary-950/80 dark:text-primary-50/60 font-light">
//                 Get senior-level skills with startup agility. Experience agency expertise with
//                 freelancer flexibility. Access a unified team of top-rated professionals, not just
//                 scattered freelancers.
//               </span>
//             </Card>
//             <Card
//               size="lg"
//               className="rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 bg-gradient-primary-dark dark:bg-gradient-primary active:border-opacity-100 md:hover:border-opacity-100 "
//               isIcon
//               cover={
//                 <IoLayersOutline className="h-10 w-10     text-primary-800 dark:text-primary-200" />
//               }
//               header="Modern Stack"
//             >
//               <span className="text-primary-950/80 dark:text-primary-50/60 font-light">
//                 Next.js, TailwindCSS & Typescript. We build with the technologies powering today’s
//                 best-performing websites—ensuring fast loads, clean code, and easy scaling.
//               </span>
//             </Card>
//             <Card
//               size="lg"
//               isIcon
//               className="rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 bg-gradient-primary-dark dark:bg-gradient-primary md:hover:border-opacity-100 "
//               cover={
//                 <MdOutlineAutoGraph className="h-10 w-10     text-primary-800 dark:text-primary-200" />
//               }
//               header="Built for Growth"
//             >
//               <span className="text-primary-950/80 dark:text-primary-50/60 font-light">
//                 Future-ready websites that evolve with you. Every site is architected to support
//                 SEO, performance, and feature expansion—perfect for startups aiming to scale or
//                 agencies needing long-term solutions.
//               </span>
//             </Card>
//             <Card
//               size="lg"
//               isIcon
//               className="rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100 bg-gradient-primary-dark dark:bg-gradient-primary"
//               cover={
//                 <IoGitNetworkOutline className="h-10 w-10     text-primary-800 dark:text-primary-200" />
//               }
//               header="Seamless Collaboration"
//             >
//               <span className="text-primary-950/80 dark:text-primary-50/60 font-light">
//                 We work like part of your team. Slack, Notion, GitHub—whatever you use, we integrate
//                 smoothly. Communication is clear, responsive, and always aligned with your
//                 timelines.
//               </span>
//             </Card>
//             <Card
//               size="lg"
//               isIcon
//               className="rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100 bg-gradient-primary-dark dark:bg-gradient-primary"
//               cover={
//                 <IoLockOpenOutline className="h-10 w-10     text-primary-800 dark:text-primary-200" />
//               }
//               header="No Lock-in, No Bloat"
//             >
//               <span className="text-primary-950/80 dark:text-primary-50/60 font-light">
//                 You pay for what you need—no unnecessary subscriptions, yearly lock-ins, or bloated
//                 retainers. Just clean code, full ownership, and total freedom to move forward on
//                 your terms.
//               </span>
//             </Card>
//             <Card
//               className="rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100 bg-gradient-primary-dark dark:bg-gradient-primary"
//               size="lg"
//               isIcon
//               cover={
//                 <IoTimerOutline className="h-10 w-10     text-primary-800 dark:text-primary-200 " />
//               }
//               header="Timely Deliveries"
//             >
//               <span className="text-primary-950/80 dark:text-primary-50/60 font-light">
//                 Fast doesn’t mean rushed. We always deliver on time, without compromising quality.
//                 Our process is built around clear milestones and predictable outputs.
//               </span>
//             </Card>
//           </div>
//         </div>
//       </Bracket>
//     </section>
//   )
// }

// 'use client'

// import { Bracket, Card } from '@thirdbracket/bracketui'
// import { MdOutlineAutoGraph } from 'react-icons/md'
// import {
//   RiMedal2Line,
//   RiRunLine,
//   RiStackLine,
//   RiTimeLine,
//   RiTimer2Line,
//   RiTimerFill,
//   RiUserCommunityLine,
// } from 'react-icons/ri'
// import {
//   IoGitNetworkOutline,
//   IoGitNetworkSharp,
//   IoLayersOutline,
//   IoLockOpen,
//   IoLockOpenOutline,
//   IoMedal,
//   IoMedalOutline,
//   IoTimerOutline,
// } from 'react-icons/io5'

// export function WhyChooseUsSection() {
//   const title = 'Why Choose Us for Web Development?'
//   const description =
//     'Our approach combines technical excellence with real-world flexibility—designed to meet the needs of growing businesses that care about speed, SEO, and design clarity.'

//   const features = [
//     {
//       icon: <RiMedal2Line className="h-10 w-10 text-primary-800 dark:text-primary-200" />,
//       header: 'Expertise & Flexibility',
//       description:
//         'Get senior-level skills with startup agility. Experience agency expertise with freelancer flexibility. Access a unified team of top-rated professionals, not just scattered freelancers.',
//     },
//     {
//       icon: <IoLayersOutline className="h-10 w-10 text-primary-800 dark:text-primary-200" />,
//       header: 'Modern Stack',
//       description:
//         'Next.js, TailwindCSS & Typescript. We build with the technologies powering today’s best-performing websites—ensuring fast loads, clean code, and easy scaling.',
//     },
//     {
//       icon: <MdOutlineAutoGraph className="h-10 w-10 text-primary-800 dark:text-primary-200" />,
//       header: 'Built for Growth',
//       description:
//         'Future-ready websites that evolve with you. Every site is architected to support SEO, performance, and feature expansion—perfect for startups aiming to scale or agencies needing long-term solutions.',
//     },
//     {
//       icon: <IoGitNetworkOutline className="h-10 w-10 text-primary-800 dark:text-primary-200" />,
//       header: 'Seamless Collaboration',
//       description:
//         'We work like part of your team. Slack, Notion, GitHub—whatever you use, we integrate smoothly. Communication is clear, responsive, and always aligned with your timelines.',
//     },
//     {
//       icon: <IoLockOpenOutline className="h-10 w-10 text-primary-800 dark:text-primary-200" />,
//       header: 'No Lock-in, No Bloat',
//       description:
//         'You pay for what you need—no unnecessary subscriptions, yearly lock-ins, or bloated retainers. Just clean code, full ownership, and total freedom to move forward on your terms.',
//     },
//     {
//       icon: (
//         <IoTimerOutline className="h-10 w-10 text-secondary-800 fill-secondary-800 dark:text-primary-200" />
//       ),
//       header: 'Timely Deliveries',
//       description:
//         'Fast doesn’t mean rushed. We always deliver on time, without compromising quality. Our process is built around clear milestones and predictable outputs.',
//     },
//   ]

//   return (
//     <section className="py-10 sm:py-12  lg:py-14 xl:py-16">
//       <Bracket fluid centered padding="medium">
//         <div className="mx-auto max-w-screen-xl">
//           <div className="mb-8 md:mb-12 lg:mb-16">
//             <h2 className="mb-4 md:mb-6 text-[2rem]/[1.1] font-extrabold md:text-[2.45rem]/[1.1]  bg-gradient-secondary dark:bg-gradient-secondary-dark text-transparent bg-clip-text text-left sm:text-center">
//               {title}
//             </h2>
//             <p className="text-primary-950/80 dark:text-primary-50/60 text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] text-left sm:text-center font-light max-w-4xl mx-auto">
//               {description}
//             </p>
//           </div>

//           <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3">
//             {features.map((feature, index) => (
//               <Card
//                 key={index}
//                 size="lg"
//                 isIcon
//                 className="rounded-lg border border-primary-500 border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100 bg-gradient-primary-dark dark:bg-gradient-secondary"
//                 cover={feature.icon}
//                 header={feature.header}
//               >
//                 <span className="text-primary-950/80 dark:text-primary-50/60 font-light">
//                   {feature.description}
//                 </span>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </Bracket>
//     </section>
//   )
// }

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
  const iconClassName = 'h-10 w-10 text-primary-800 dark:text-primary-200'

  return (
    <section className="py-10 sm:py-12 lg:py-14 xl:py-16">
      <Bracket fluid centered padding="medium">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-8 md:mb-12 lg:mb-16">
            <h2 className="mb-4 md:mb-6 text-3xl lg:text-4xl font-extrabold bg-gradient-secondary dark:bg-gradient-secondary-dark text-transparent bg-clip-text text-left sm:text-center">
              Why Choose Us for Web Development?
            </h2>
            <p className="text-primary-950/80 dark:text-primary-50/60 text-base md:text-lg lg:text-xl text-left sm:text-center font-light max-w-4xl mx-auto">
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
                className="rounded-lg border border-primary-500 border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100 bg-gradient-primary-dark dark:bg-gradient-primary"
                cover={<Icon className={iconClassName} />}
                header={header}
              >
                <span className="text-primary-950/80 dark:text-primary-50/60 font-light">
                  {description}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </Bracket>
    </section>
  )
}
