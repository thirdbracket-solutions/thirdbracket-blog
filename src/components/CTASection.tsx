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
    <section className={`py-10 sm:py-12 lg:py-14 xl:py-16 ${className}`}>
      <Bracket fluid centered padding="medium">
        <div className="max-w-screen-xl bg-accent-radial dark:bg-accent-radial-dark rounded-xl p-8 lg:p-12 border border-primary-200 dark:border-primary-800  ">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold bg-gradient-secondary dark:bg-gradient-secondary-dark text-transparent bg-clip-text mb-4 lg:mb-6">
                {title}
              </h2>
              <p className="text-primary-800 dark:text-primary-200 text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] max-w-md font-light">
                {description}
              </p>
            </div>

            <div className="flex flex-row gap-4">
              {primary && (
                <Button
                  href={primary.href}
                  size="md"
                  theme={{
                    background: 'bg-gradient-secondary dark:bg-gradient-secondary-dark',
                    hoverBackground: '[@media(hover:hover)]:hover:opacity-85',
                    focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
                  }}
                  className="!font-medium !text-accent-50 dark:!text-accent-800"
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
                    border: 'border-primary-300/90 dark:border-primary-700/90 ',
                    hoverBackground: 'hover:bg-primary-300/50 dark:hover:bg-primary-700/70 ',
                    focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
                  }}
                  className="!font-medium !text-primary-950 dark:!text-accent-50"
                >
                  {secondary.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Bracket>
    </section>
  )
}

export default CTASection
