'use client'
import { useState } from 'react'
import { Bracket, Button, Form, FormInput, FormLabel } from '@thirdbracket/bracketui'

interface NewsletterState {
  email: string
  error: string | null
  isSubmitting: boolean
  isSuccess: boolean
}

const Subscription = () => {
  const [state, setState] = useState<NewsletterState>({
    email: '',
    error: null,
    isSubmitting: false,
    isSuccess: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState((prev) => ({ ...prev, isSubmitting: true, error: null }))
    try {
      if (!state.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
        throw new Error('Please enter a valid email address')
      }
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setState((prev) => ({
        ...prev,
        isSubmitting: false,
        isSuccess: true,
        email: '',
      }))
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isSubmitting: false,
        error: error instanceof Error ? error.message : 'Something went wrong',
      }))
    }
  }

  return (
    <section className="     pb-[2rem] sm:pb-[2.5rem] lg:pb-[3rem]  bg-white dark:bg-black">
      <Bracket fluid centered>
        <div className="max-w-screen-xl  bg-accent-radial dark:bg-accent-radial-dark  rounded-xl p-8 lg:p-12 border border-primary-500/20 ">
          {state.isSuccess ? (
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12">
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-3xl font-extrabold  bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text   mb-2 lg:mb-6">
                Thank you for subscribing!
              </h2>
              <p className="dark:text-primary-300 text-primary-700 text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem]  max-w-md font-light">
                We will keep you updated with the latest news and updates.
              </p>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12 ">
              <div>
                <h2 className="text-3xl lg:text-4xl font-extrabold  bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text  mb-2 lg:mb-6">
                  Stay Updated
                </h2>
                <p className="dark:text-primary-300 text-primary-700 font-light text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem]   max-w-md ">
                  Subscribe to our newsletter for updates and exclusive content delivered straight
                  to your inbox.
                </p>
              </div>

              <div className="flex-1 max-w-xl w-full">
                <Form onSubmit={handleSubmit}>
                  <div className="relative">
                    <FormLabel className="sr-only">Email address</FormLabel>

                    <FormInput
                      type="email"
                      placeholder="Enter your email"
                      value={state.email}
                      onChange={(e) =>
                        setState((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className="w-full pl-4 pr-32 h-14 text-base rounded-md border  border-primary-500/20   !bg-white  focus:!ring-primary-400 text-primary-700   dark:!bg-black  dark:focus:!ring-primary-400 dark:!text-primary-400 placeholder:text-primary-500/70"
                    ></FormInput>
                    <div className="absolute right-1 top-1/2 -translate-y-1/2">
                      <Button
                        type="submit"
                        disabled={state.isSubmitting}
                        isLoading={state.isSubmitting}
                        size="md"
                        theme={{
                          background: 'bg-gradient-text dark:bg-gradient-text-dark',
                          hoverBackground: '[@media(hover:hover)]:hover:opacity-85',
                          focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
                        }}
                        className="!font-medium !text-primary-50 dark:!text-primary-950"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="text-sm text-primary-700 dark:text-primary-300   font-light">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                    {state.error && <p className="text-sm text-red-500 mt-1">{state.error}</p>}
                  </div>
                </Form>
              </div>
            </div>
          )}
        </div>
      </Bracket>
    </section>
  )
}

export default Subscription
