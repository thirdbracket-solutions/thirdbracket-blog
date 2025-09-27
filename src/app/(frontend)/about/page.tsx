// src/app/(frontend)/about/page.tsx
import { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Company from './Company'
import Team from './Team'
// Structured data now in layout.tsx
import Roadmap from './Roadmap'
import OpenSource from './OpenSource'
import WorkCulture from './WorkCulture'
import CTASection from '@/components/CTASection'
import { Bracket } from '@thirdbracket/bracketui'

export const metadata: Metadata = {
  title: 'About Third Bracket',
  description:
    'We’re a UK-based web design studio focused on clean design, scalable architecture, and performance-first websites.',
  openGraph: {
    title: 'Meet the Team Behind Third Bracket',
    description:
      'Get to know our mission, values, and the team building high-performance websites for businesses.',
  },
}

export default function AboutPage() {
  return (
    <section>
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          {/* Structured data now in layout.tsx */}
          <PageHeader
            title="About Us"
            description="Get to know the team behind Third Bracket and our approach to web development"
          />
          <Company />
          <Team />
          <Roadmap />
          <OpenSource />
          <WorkCulture />
          <CTASection
            title="Ready to Work With Us?"
            description="Let's discuss how we can help bring your digital vision to life"
            primary={{
              label: 'Contact Us',
              href: '/contact',
            }}
            secondary={{
              label: 'View Services',
              href: '/services',
            }}
          />
        </div>
      </Bracket>
    </section>
  )
}
