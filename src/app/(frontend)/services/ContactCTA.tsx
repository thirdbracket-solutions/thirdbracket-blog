'use client'

import { Bracket, Button } from '@thirdbracket/bracketui'
import Link from 'next/link'

interface ContactCTAProps {
  title: string
  description?: string
}

export default function ContactCTA({ title, description }: ContactCTAProps) {
  return (
    <section className="py-10 sm:py-12  lg:py-14 xl:py-16">
      <Bracket fluid centered padding="medium">
        <div className="bg-accent-radial dark:bg-accent-radial-dark rounded-xl border border-primary-400/20 dark:border-primary-600/20 p-8 lg:p-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold  bg-gradient-secondary dark:bg-gradient-secondary-dark text-transparent bg-clip-text  mb-2 lg:mb-4">
            {title}
          </h2>
          <p className="bg-gradient-primary dark:!bg-gradient-primary-dark bg-clip-text text-transparent mb-6">
            {description}
          </p>
          <Button
            as={Link}
            href="/contact"
            size="md"
            className="!bg-gradient-secondary dark:!bg-gradient-secondary-dark !font-medium !text-primary-50 dark:!text-primary-950 hover:opacity-90 active:opacity-85"
            // className="bg-gradient-secondary dark:bg-gradient-secondary-dark !text-primary-50 dark:!text-primary-950 [@media(hover:hover)]:hover:opacity-90 active:opacity-85"
          >
            Contact Us
          </Button>
        </div>
      </Bracket>
    </section>
  )
}
