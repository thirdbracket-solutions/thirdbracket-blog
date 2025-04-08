// import { Bracket, Button,  Form,  FormInput, FormLabel, FormTextarea } from '@thirdbracket/bracketui'
// import PageHeader from '../../../components/PageHeader'
// import { FormBlock } from '@/blocks/Form/Component'

// function ContactForm() {
//   return (
//     <Form className="max-w-xl mx-auto">

//       <div className="mb-6">
//         <FormLabel>Name</FormLabel>
//         <FormInput
//           type="text"
//           className="border border-primary-400 dark:border-primary-700 bg-primary-50 dark:bg-primary-950 focus:ring-primary-400 dark:focus:ring-primary-500"
//         ></FormInput>
//       </div>
//       <div className="mb-6">
//         <FormLabel>Email</FormLabel>

//         <FormInput
//           type="email"
//           className="border border-primary-400 dark:border-primary-700 bg-primary-50 dark:bg-primary-950 focus:ring-primary-500 dark:focus:ring-primary-400"
//         ></FormInput>
//       </div>
//       <div className="mb-6">
//         <FormLabel>Message</FormLabel>

//         <FormTextarea
//           rows={6}
//           className="border border-primary-400 dark:border-primary-700 bg-primary-50 dark:bg-primary-950 focus:ring-primary-500 dark:focus:ring-primary-400"
//         ></FormTextarea>
//       </div>
//       <Button
//         size="md"
//         type="submit"
//         className="w-full !bg-gradient-primary dark:!bg-gradient-primary-dark !text-white dark:!text-primary-950  [@media(hover:hover)]:hover:opacity-90 active:opacity-80"
//       >
//         Send Message
//       </Button>
//     </Form>
//   )
// }

// export default function Contact() {

//   return (
//     <Bracket>
//       <PageHeader title="Contact Us" description="Get in touch with our team" />
//       <div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16">
//         <ContactForm />

//       </div>
//     </Bracket>

//   )
// }

// import { headers as getHeaders } from 'next/headers.js'

// import { getPayload } from 'payload'
import React from 'react'

// import config from '@/payload.config'

import { Bracket } from '@thirdbracket/bracketui'
import PageHeader from '@/components/PageHeader'
import { FormBlock } from '@/blocks/Form/Component'

// export default async function Contact() {
//   // const headers = await getHeaders()
//   // const payloadConfig = await config
//   // const payload = await getPayload({ config: payloadConfig })
//   // const { user } = await payload.auth({ headers })

//   return (
//     <Bracket>
//       <PageHeader title="Contact Us" description="Get in touch with our team" />
//       <div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16">
//         <MyFormComponent formId="1" />
//       </div>
//     </Bracket>
//   )
// }

async function getFormData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/forms/1`, {
    cache: 'no-store', // Ensures fresh data on each request
  })

  if (!res.ok) return null
  return res.json()
}

export default async function ContactPage() {
  const form = await getFormData()

  if (!form) return <p>Form not found</p>

  return (
    <Bracket className="container mx-auto p-8">
      <PageHeader title="Contact Us" description="Get in touch with our team" />
      <div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16">
        <FormBlock form={form} enableIntro={false} />
      </div>
    </Bracket>
  )
}
