'use client'

import { Bracket } from '@thirdbracket/bracketui'

export default function ContactCTA() {
  return (
    <section className="py-10 sm:py-12  lg:py-14 xl:py-16">
      <Bracket fluid centered padding="medium">
        <div className="bg-primary-50 dark:bg-primary-950 rounded-xl py-10 px-6 md:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 dark:text-primary-50 mb-4">
            Ready to work with us?
          </h2>
          <p className="text-primary-700 dark:text-primary-200 mb-6">
            Let’s discuss your project and bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-700 text-white px-6 py-3 rounded hover:bg-primary-800 transition"
          >
            Contact Us
          </a>
        </div>
      </Bracket>
    </section>
  )
}
