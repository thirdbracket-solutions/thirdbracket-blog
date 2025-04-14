import { Card } from '@thirdbracket/bracketui'
import Link from 'next/link'

import { MdOutlineAutoGraph } from 'react-icons/md'
import {
  RiMedal2Line,
  RiRunLine,
  RiStackLine,
  RiTimeLine,
  RiTimer2Line,
  RiTimerFill,
  RiUserCommunityLine,
} from 'react-icons/ri'
import {
  IoGitNetworkOutline,
  IoGitNetworkSharp,
  IoLayersOutline,
  IoLockOpen,
  IoLockOpenOutline,
  IoMedalOutline,
  IoTimerOutline,
} from 'react-icons/io5'

import { VscUnlock } from 'react-icons/vsc'

export function FeatureTwo() {
  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="mx-auto max-w-screen-xl  ">
        <div className=" mb-8 md:mb-12 lg:mb-16 ">
          <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl  font-bold text-primary-950 dark:text-primary-50   text-center ">
            Why Choose Us for Web Development?
          </h2>
          <p className="text-primary-600  text-base md:text-lg lg:text-xl  text-center   font-light  ">
            Our approach combines technical excellence with real-world flexibility—designed to meet
            the needs of growing businesses that care about speed, SEO, and design clarity.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3 ">
          <Card
            size="lg"
            isIcon
            className="rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100 "
            cover={
              <IoMedalOutline className="h-12 w-12     text-secondary-900 dark:text-secondary-200 " />
            }
            header="Expertise & Flexibility"
          >
            <span className="text-primary-950/60 dark:text-primary-200/60 font-light">
              Get senior-level skills with startup agility. Experience agency expertise with
              freelancer flexibility. Access a unified team of top-rated professionals, not just
              scattered freelancers.
            </span>
          </Card>
          <Card
            size="lg"
            className="rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100 "
            isIcon
            cover={
              <IoLayersOutline className="h-12 w-12     text-secondary-900 dark:text-secondary-200" />
            }
            header="Modern Stack"
          >
            <span className="text-primary-950/60 dark:text-primary-200/60 font-light">
              Next.js, TailwindCSS & Typescript. We build with the technologies powering today’s
              best-performing websites—ensuring fast loads, clean code, and easy scaling.
            </span>
          </Card>
          <Card
            size="lg"
            isIcon
            className="rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100 "
            cover={
              <MdOutlineAutoGraph className="h-12 w-12     text-secondary-900 dark:text-secondary-200" />
            }
            header="Built for Growth"
          >
            <span className="text-primary-950/60 dark:text-primary-200/60 font-light">
              Future-ready websites that evolve with you. Every site is architected to support SEO,
              performance, and feature expansion—perfect for startups aiming to scale or agencies
              needing long-term solutions.
            </span>
          </Card>
          <Card
            size="lg"
            isIcon
            className="rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100 "
            cover={
              <IoGitNetworkOutline className="h-12 w-12     text-secondary-900 dark:text-secondary-200" />
            }
            header="Seamless Collaboration"
          >
            <span className="font-light">
              We work like part of your team. Slack, Notion, GitHub—whatever you use, we integrate
              smoothly. Communication is clear, responsive, and always aligned with your timelines.
            </span>
          </Card>
          <Card
            size="lg"
            isIcon
            className="rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100 "
            cover={
              <IoLockOpenOutline className="h-12 w-12     text-secondary-900 dark:text-secondary-200" />
            }
            header="No Lock-in, No Bloat"
          >
            <span className="text-primary-950/60 dark:text-primary-200/60 font-light">
              You pay for what you need—no unnecessary subscriptions, yearly lock-ins, or bloated
              retainers. Just clean code, full ownership, and total freedom to move forward on your
              terms.
            </span>
          </Card>
          <Card
            className="rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100 "
            size="lg"
            as={Link}
            isIcon
            href="/contact"
            cover={
              <IoTimerOutline className="h-12 w-12     text-secondary-900 dark:text-secondary-200 " />
            }
            header="Timely Deliveries"
          >
            <span className=" font-light">
              Fast doesn’t mean rushed. We always deliver on time, without compromising quality. Our
              process is built around clear milestones and predictable outputs.
            </span>
          </Card>
        </div>
      </div>
    </section>
  )
}
