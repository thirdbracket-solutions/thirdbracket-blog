import FormBlockSubscription from '@/blocks/Form/SubscriptionFormBlock'

import { ClientTestimonials } from '@/components/ClientTestomonial'
import { DynamicHero } from '@/components/DynamicHeroSection'
import { FAQ } from '@/components/Faq'
import CardGrid from '@/components/Feature'
import { WhyChooseUsSection } from '@/components/FeatureTwo'
import { Hero as _Hero } from '@/components/HeroSection'
// Structured data now in layout.tsx

async function getFormData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/forms/2`, {
    cache: 'force-cache',
    next: { revalidate: 3600 },
    // Ensures fresh data on each request
  })

  if (!res.ok) return null
  return res.json()
}

export default async function Home() {
  const form = await getFormData()
  return (
    <section>
      {/* Structured data now in layout.tsx */}
      {/* <HeroSection /> */}
      {/* <Hero /> */}
      <DynamicHero />
      {/* <FeatureOne /> */}
      <CardGrid />
      {/* <FeatureShowcaseSection /> */}
      <WhyChooseUsSection />
      {/* <FeatureTwo /> */}
      <ClientTestimonials />
      <FAQ />
      {/* <Subscription /> */}
      <section id="subscription" className="scroll-mt-24">
        <FormBlockSubscription form={form} />
      </section>
    </section>
  )
}
