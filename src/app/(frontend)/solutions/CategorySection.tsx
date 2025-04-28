// components/CategorySection.tsx

import { Bracket } from '@thirdbracket/bracketui'
import SolutionCard from './SolutionCards'
import { SolutionCategory } from './types'

export default function CategorySection({ title, description, solutions }: SolutionCategory) {
  return (
    <section className="py-10  sm:py-12 lg:py-14 xl:py-16">
      <Bracket fluid centered padding="medium">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-950 dark:text-primary-50 mb-6 px-4">
            {title}
          </h2>
          <p className="text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] font-light text-primary-950/80 dark:text-primary-50/60">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </Bracket>
    </section>
  )
}
