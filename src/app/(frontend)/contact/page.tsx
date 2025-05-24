import React from 'react'

import { Bracket } from '@thirdbracket/bracketui'
import PageHeader from '@/components/PageHeader'
import { FormBlock } from '@/blocks/Form/Component'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get In Touch',
}

async function getFormData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/forms/1`, {
    cache: 'force-cache',
    next: { revalidate: 3600 },
    // Ensures fresh data on each request
  })

  if (!res.ok) return null
  return res.json()
}

export default async function ContactPage() {
  const form = await getFormData()

  if (!form) return <p>Form not found</p>

  return (
    <section>
      <Bracket fluid centered>
        <PageHeader title="Contact Us" description="Get in touch with our team" />
        <div className="max-w-7xl mx-auto ">
          <FormBlock form={form} enableIntro={false} />
        </div>
      </Bracket>
    </section>
  )
}
