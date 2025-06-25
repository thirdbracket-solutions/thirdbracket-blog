// src/app/(frontend)/about/page.tsx
import { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Company from './Company'
import Team from './Team'
import PageData from './page-data'
import Roadmap from './Roadmap'
import OpenSource from './OpenSource'
import WorkCulture from './WorkCulture'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Third Bracket, our team, values, and journey in web development.',
}

export default function AboutPage() {
  return (
    <section>
      <PageData />
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
    </section>
  )
}
