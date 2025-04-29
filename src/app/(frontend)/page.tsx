// import PageTemplate, { generateMetadata } from './[slug]/page'

// export default PageTemplate

// export { generateMetadata }

// import { Button, Card } from "@thirdbracket/core";

import { FeatureShowcaseSection } from '../../components/FeatureOne'

import Subscription from '../../components/Subscription'
import { ClientTestimonials } from '@/components/ClientTestomonial'
import { FAQ } from '@/components/Faq'
import CardGrid from '@/components/Feature'
import { WhyChooseUsSection } from '@/components/FeatureTwo'
import { Hero } from '@/components/HeroSection'

export default function Home() {
  return (
    <section>
      {/* <HeroSection /> */}
      <Hero />
      {/* <FeatureOne /> */}
      <CardGrid />
      {/* <FeatureShowcaseSection /> */}
      <WhyChooseUsSection />
      {/* <FeatureTwo /> */}
      <ClientTestimonials />
      <FAQ />
      <Subscription />
    </section>
  )
}
