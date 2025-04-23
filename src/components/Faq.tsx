'use client'

import { Bracket } from '@thirdbracket/bracketui'
import { useState } from 'react'

type FAQItem = {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'What services does Thirdbracket offer?',
    answer:
      'We specialize in fast, modern websites built with Next.js. Our services include web development, SEO optimization, performance audits, and technical consulting.',
  },
  {
    question: 'Do you work with agencies or only direct clients?',
    answer:
      'We work with both. Whether you’re a small business, a startup, or an agency looking to outsource high-quality dev work — we’ve got you.',
  },
  {
    question: 'What tech stack do you use?',
    answer:
      'We primarily use Next.js, TailwindCSS, and headless CMS setups like Payload. Our stack is performance-first and SEO-friendly.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'It depends on the scope, but small sites can go live in as little as 2–3 weeks. We focus on delivering quickly without sacrificing quality.',
  },
]

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-10 sm:py-12  lg:py-14 xl:py-16 ">
      <Bracket fluid centered padding="medium">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-3xl lg:text-4xl font-extrabold bg-gradient-secondary dark:bg-gradient-secondary-dark  text-transparent bg-clip-text text-left sm:text-center mb-12">
            FAQs
          </h2>

          <div className="space-y-6">
            {faqData.map((item, i) => (
              <div key={i} className="border border-primary-500/30 rounded-lg">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-primary-900 dark:text-primary-100 font-medium focus:outline-none"
                >
                  <span>{item.question}</span>
                  <span className="ml-4 text-primary-400 dark:text-primary-200">
                    {openIndex === i ? '-' : '+'}
                  </span>
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-4 text-primary-700 dark:text-primary-300 text-sm leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Bracket>
    </section>
  )
}
