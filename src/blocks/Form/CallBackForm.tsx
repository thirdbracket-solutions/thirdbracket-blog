'use client'

import React, { useState } from 'react'
import { Button, Form, FormInput, FormLabel, FormSelect } from '@thirdbracket/bracketui'

export default function CallbackForm() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const categories = ['Web Development', 'UI/UX Design', 'Digital Marketing'] // Example categories

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Basic validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email')
      setIsSubmitting(false)
      return
    }

    if (!phone) {
      setError('Please enter your phone number')
      setIsSubmitting(false)
      return
    }

    if (!category) {
      setError('Please select a category')
      setIsSubmitting(false)
      return
    }

    try {
      // Send data to proxy route
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          phone,
          category,
        }),
      })

      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Submission failed')

      setIsSuccess(true)
      setEmail('')
      setPhone('')
      setCategory('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className=" bg-accent-200 dark:bg-accent-700/70 p-8 rounded-lg border border-primary-300 dark:border-primary-800 max-w-md mx-auto">
      {isSuccess ? (
        <p className="text-2xl font-bold text-center">Thanks! We will reach out shortly 🎉</p>
      ) : (
        <Form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <FormLabel htmlFor="email" className="sr-only">
              Email address
            </FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="!bg-secondary-50 dark:!bg-secondary-950 !border-primary-100 dark:!border-primary-900 focus:!ring-primary-500 dark:focus:!ring-primary-400 w-full !p-2.5 !text-primary-400   !text-base"
            />
          </div>
          <div>
            <FormLabel htmlFor="phone" className="sr-only">
              Phone / WhatsApp
            </FormLabel>
            <FormInput
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="!bg-secondary-50 dark:!bg-secondary-950 !border-primary-100 dark:!border-primary-900 focus:!ring-primary-500 dark:focus:!ring-primary-400  !p-2.5 !text-primary-400   !text-base"
            />
          </div>
          <div>
            <FormLabel htmlFor="catagory" className="sr-only">
              Select a category
            </FormLabel>
            <FormSelect
              id="catagory"
              name="catagory"
              className="!bg-secondary-50 dark:!bg-secondary-950 !border-primary-100 dark:!border-primary-900 focus:!ring-primary-500 dark:focus:!ring-primary-400  !p-4 !text-primary-400   !text-base  "
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {/* {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))} */}

              <option className="" value="" disabled>
                Project Type
              </option>
              <option value="General Inquiry">Web Development</option>
              <option value="Project Proposal">Ui/UX Design</option>
              <option value="Support">Digital Marketing</option>
            </FormSelect>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <Button
            type="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
            size="md"
            className="w-full "
            theme={{
              background: 'bg-gradient-text dark:bg-gradient-text-dark',
              hoverBackground: '[@media(hover:hover)]:hover:opacity-90',
              focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
              text: 'text-primary-50 dark:text-primary-950',
            }}
          >
            Get Started
          </Button>
        </Form>
      )}
    </div>
  )
}
