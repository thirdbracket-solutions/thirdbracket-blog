'use client'

import { Bracket } from '@thirdbracket/bracketui'

export default function Stats() {
  return (
    <section className="py-[4.5rem] sm:py-[5rem]  lg:py-[6rem] bg-white dark:bg-black">
      <Bracket fluid centered padding="medium">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-4xl font-bold text-primary-900 dark:text-primary-50">100+</h3>
            <p className="text-primary-700 dark:text-primary-200">Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primary-900 dark:text-primary-50">50+</h3>
            <p className="text-primary-700 dark:text-primary-200">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primary-900 dark:text-primary-50">10+</h3>
            <p className="text-primary-700 dark:text-primary-200">Countries Served</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primary-900 dark:text-primary-50">5+</h3>
            <p className="text-primary-700 dark:text-primary-200">Years Experience</p>
          </div>
        </div>
      </Bracket>
    </section>
  )
}
