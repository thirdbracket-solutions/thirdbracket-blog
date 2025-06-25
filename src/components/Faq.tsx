'use client'

import { Bracket } from '@thirdbracket/bracketui'
import { useState } from 'react'

type FAQItem = {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
 {
  question: 'What services does your full stack web development agency offer?',
  answer:
    'We offer full stack web development for startups and small businesses in the UK — including custom Next.js websites, WordPress/Elementor builds, SEO optimization, and post-launch support.',
},
{
  question: 'Do you build websites using WordPress and Elementor?',
  answer:
    'Yes. For clients who prefer easy content editing, we build fast and modern websites using WordPress and Elementor — fully responsive and SEO-optimized.',
},
{
  question: 'Why choose a Next.js web development agency like Third Bracket?',
  answer:
    'Next.js is perfect for businesses that need speed, scalability, and SEO. As a UK-based agency, we specialize in building modern websites that perform well and rank high.',
},
{
  question: 'How do you ensure websites are SEO-optimized and fast?',
  answer:
    'We build every site — whether in Next.js or WordPress — with Core Web Vitals, semantic HTML, metadata, and performance in mind to meet Google’s SEO standards.',
},
{
  question: 'Do you offer affordable web development services for UK startups?',
  answer:
    'Yes. We’re a lean team focused on delivering affordable, high-quality websites without the overhead of traditional agencies — perfect for startups and solo founders.',
},
{
  question: 'Can you redesign my current website to improve speed and SEO?',
  answer:
    'Absolutely. We audit and rebuild websites for performance, accessibility, and SEO — whether your current site is built with WordPress, Squarespace, or something else.',
},
{
  question: 'How long does a typical project take from start to launch?',
  answer:
    'We can launch small sites in 2–3 weeks. Larger builds with custom features usually take 4–6 weeks. We’ll give you a clear timeline based on scope.',
},
{
  question: 'Do you provide ongoing support after launch?',
  answer:
    'Yes. We offer flexible maintenance and support packages — including content updates, plugin care (for WordPress), and performance monitoring for custom sites.',
},
  
]

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-[3rem] sm:py-[3.75rem]  lg:py-[4rem] ">
      <Bracket fluid centered>
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-3xl lg:text-4xl font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-center mb-14 ">
            FAQs
          </h2>

          <div className="space-y-6">
            {faqData.map((item, i) => (
              <div
                key={i}
                className="border border-primary-500/20 rounded-lg  bg-gradient-secondary-dark dark:bg-gradient-secondary"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center px-6 py-4 font-medium text-left text-primary-900 dark:text-primary-100  focus:outline-none"
                >
                  <span>{item.question}</span>
                  <span className="ml-4 bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
                    {openIndex === i ? '-' : '+'}
                  </span>
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-4 text-primary-800 dark:text-primary-200 text-sm leading-relaxed">
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
