import FormBlockSubscription from '@/blocks/Form/SubscriptionFormBlock'

import { ClientTestimonials } from '@/components/ClientTestomonial'
import { DynamicHero } from '@/components/DynamicHeroSection'
import { FAQ } from '@/components/Faq'
import CardGrid from '@/components/Feature'
import { WhyChooseUsSection } from '@/components/FeatureTwo'
import { Hero } from '@/components/HeroSection'

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
      <FormBlockSubscription form={form} />
    </section>
  )
}
