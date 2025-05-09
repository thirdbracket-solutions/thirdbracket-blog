// page.tsx
import { Bracket } from '@thirdbracket/bracketui'
import PageHeader from '@/components/PageHeader'
import { Metadata } from 'next'
import { solutionCategories } from './Solutions'
import CategorySection from './CategorySection'
import CTABlock from './CTABlock'
import CTASection from '@/components/CTASection'
import Steps from './Steps'

export const metadata: Metadata = {
  title: 'Web Development & Business Solutions',
}

export default function Solutions() {
  return (
    <section>
      <PageHeader
        title="Solutions"
        description="Comprehensive digital solutions for modern businesses"
      />

      <div className="mx-auto max-w-screen-xl py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        {solutionCategories.map((category, index) => (
          <CategorySection key={index} {...category} />
        ))}
        <Steps />

        <CTASection
          title="Ready to Transform Your Digital Presence?"
          description="Let us discuss how our solutions can help you achieve your goals"
          primary={{
            label: 'Consult Us',
            href: '/contact',
          }}
          secondary={{
            label: 'About Us',
            href: '/projects',
          }}
        />
      </div>
    </section>
  )
}
