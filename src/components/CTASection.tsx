'use client'

import { Bracket, Button } from '@thirdbracket/bracketui'

interface CTALink {
  label: string
  href: string
}

interface CTASectionProps {
  title: string
  description: string
  primary?: CTALink
  secondary?: CTALink
  className?: string
}

const CTASection = ({
  title,
  description,
  primary,
  secondary,
  className = '',
}: CTASectionProps) => {
  return (
    <section className={` py-[3rem] sm:py-[3.75rem]  lg:py-[4rem]   ${className}`}>
      <div className="md:max-w-screen-xl mx-auto bg-accent-radial dark:bg-accent-radial-dark rounded-xl p-8 lg:p-12 border border-primary-200 dark:border-primary-800  ">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4 lg:mb-6">
              {title}
            </h2>
            <p className="text-primary-700 dark:text-primary-300 text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] max-w-md font-light">
              {description}
            </p>
          </div>

          <div className="flex flex-row gap-4">
            {primary && (
              <Button
                href={primary.href}
                size="md"
                theme={{
                  background: 'bg-gradient-text dark:bg-gradient-text-dark',
                  hoverBackground: '[@media(hover:hover)]:hover:opacity-85',
                  focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
                }}
                className="!font-medium !text-primary-50 dark:!text-primary-950"
              >
                {primary.label}
              </Button>
            )}
            {secondary && (
              <Button
                href={secondary.href}
                outline
                size="md"
                theme={{
                  border: 'border-black/40 dark:border-white/40 ',
                  hoverBackground: 'hover:bg-white/10 dark:hover:bg-black/10 ',
                  focusRing: 'focus:ring-white/30 dark:focus:ring-black/30',
                  text: 'text-black dark:text-white ',
                }}
              >
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
