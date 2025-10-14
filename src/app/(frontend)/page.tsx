import FormBlockSubscription from '@/blocks/Form/SubscriptionFormBlock'
import { ClientTestimonials } from '@/components/ClientTestomonial'
import CTASection from '@/components/CTASection'
import { DynamicHero } from '@/components/DynamicHeroSection'
import { FAQ } from '@/components/Faq'
import CardGrid from '@/components/Feature'
import { WhyChooseUsSection } from '@/components/FeatureTwo'
import { Hero as _Hero } from '@/components/HeroSection'
import { Bracket } from '@thirdbracket/bracketui'
// Structured data now in layout.tsx

import Script from 'next/script'
import { faqData } from 'settings'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

async function getFormData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/forms/2`, {
    cache: 'force-cache',
    next: { revalidate: 3600 },
    // Ensures fresh data on each request
  })

  if (!res.ok) return null
  return res.json()
}

// Fetch contact form data for modal
async function getContactFormData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/forms/4`, {
      cache: 'no-store', // Temporarily disabled cache
      // next: { revalidate: 3600 },
    })

    if (!res.ok) return null
    return res.json()
  } catch (error) {
    console.error('Error fetching contact form data:', error)
    return null
  }
}

export default async function Home() {
  const form = await getFormData()
  const contactForm = await getContactFormData()

  // Provide fallback contact form structure if API call fails
  const fallbackContactForm = contactForm || {
    id: '4',
    fields: [],
    submitButtonLabel: 'Get Proposal',
    confirmationType: 'message',
    confirmationMessage:
      '<p>Thank you for your request. We will get back to you soon with your proposal.</p>',
  }

  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section>
        {/* Structured data now in layout.tsx */}
        {/* <HeroSection /> */}
        {/* <Hero /> */}
        <DynamicHero contactForm={fallbackContactForm} />
        {/* <FeatureOne /> */}
        <CardGrid />
        {/* <FeatureShowcaseSection /> */}
        <WhyChooseUsSection />
        {/* <FeatureTwo /> */}
        <ClientTestimonials />
        <FAQ />
        {/* <Subscription /> */}

        <Bracket fluid centered padding="small">
          <CTASection
            cover={{
              src: '/bracketuicover.svg',
              alt: 'Bracket UI Cover',
              width: 900,
              height: 600,
            }}
            title="Explore Bracket UI"
            description="Built with Tailwind CSS utilities and modern patterns, it balances flexibility with simplicity."
            primary={{
              label: 'Lets Build',
              href: 'https://www.npmjs.com/package/@thirdbracket/bracketui',
            }}
            secondary={{
              label: 'Source Code',
              href: 'https://github.com/sagarmusabbir/bracketui',
            }}
          />
        </Bracket>
      </section>
    </>
  )
}
