'use client'

import { Bracket, Button } from '@thirdbracket/bracketui'
import Link from 'next/link'

interface ContactCTAProps {
  title: string
  description: string
}

export default function ContactCTA({ title, description }: ContactCTAProps) {
  return (
    <section className="py-10 sm:py-12  lg:py-14 xl:py-16">
      <Bracket fluid centered padding="medium">
        <div className="bg-accent-radial dark:bg-accent-radial-dark rounded-xl py-10 px-6 md:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-950 dark:text-primary-50 mb-4">
            {title}
          </h2>
          <p className="text-primary-700 dark:text-primary-300 mb-6">{description}</p>
          <Button
            as={Link}
            href="/contact"
            size="lg"
            outline
            // className="bg-gradient-secondary dark:bg-gradient-secondary-dark !text-primary-50 dark:!text-primary-950 [@media(hover:hover)]:hover:opacity-90 active:opacity-85"
          >
            Contact Us
          </Button>
        </div>
      </Bracket>
    </section>
  )
}
