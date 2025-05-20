// page.tsx

import PageHeader from '@/components/PageHeader'
import { Metadata } from 'next'
import { solutionCategories } from './Solutions'
import CategorySection from './CategorySection'

import CTASection from '@/components/CTASection'
import Steps from './Steps'

export const metadata: Metadata = {
  title: 'Web Development & Business Solutions',
}

export default function Solutions() {
  return (
    <section className="bg-gradient-primary-dark dark:bg-gradient-primary">
      <PageHeader
        title="Solutions"
        description="Comprehensive digital solutions for modern businesses"
      />

      {solutionCategories.map((category, index) => (
        <CategorySection key={index} {...category} />
      ))}
      <Steps />

      <CTASection
        title="Ready to Transform Your Digital Presence?"
        description="Let us discuss how our solutions can help you achieve your goals"
        primary={{
          label: 'Contact Us',
          href: '/contact',
        }}
        secondary={{
          label: 'View Services',
          href: '/services',
        }}
      />
    </section>
  )
}
