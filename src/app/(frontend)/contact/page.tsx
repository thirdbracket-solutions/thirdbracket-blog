import React from 'react'

// Bracket is not used
// import { Bracket } from '@thirdbracket/bracketui'
import PageHeader from '@/components/PageHeader'
import { FormBlock } from '@/blocks/Form/Component'
// Structured data now in layout.tsx
import { Metadata } from 'next'
import { Bracket } from '@thirdbracket/bracketui'

export const metadata: Metadata = {
  title: 'Get In Touch',
  description:
    'Get in touch for web design consultations, project quotes, or partnership opportunities. We’d love to hear from you.',
  openGraph: {
    title: 'Contact Third Bracket',
    description:
      'Have a project or question? Reach out to our web design and development team today.',
  },
}

async function getFormData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/forms/1`, {
      cache: 'force-cache',
      next: { revalidate: 3600 },
    })

    if (!res.ok) return null
    return res.json()
  } catch (error) {
    console.error('Error fetching form data:', error)
    return null
  }
}

export const dynamic = 'force-dynamic'

export default async function ContactPage() {
  const form = await getFormData()

  // Provide a fallback form structure if the API call fails
  const fallbackForm = form || {
    id: '1',
    fields: [],
    submitButtonLabel: 'Send Message',
    confirmationType: 'message',
    confirmationMessage: '<p>Thank you for your message. We will get back to you soon.</p>',
  }

  return (
    <section>
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          {/* Structured data now in layout.tsx */}
          <PageHeader title="Contact Us" description="Get in touch with our team" />
          <div className="">
            <FormBlock form={fallbackForm} enableIntro={false} />
          </div>
        </div>
      </Bracket>
    </section>
  )
}
