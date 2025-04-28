// components/CTABlock.tsx
import { Button } from '@thirdbracket/bracketui'

export default function CTABlock() {
  return (
    <div className="rounded-lg p-8 lg:p-12 text-center bg-accent-radial dark:bg-accent-radial-dark border border-secondary-500/40">
      <h3 className="text-3xl font-semibold text-primary-950 dark:text-primary-50 mb-4">
        Ready to Transform Your Digital Presence?
      </h3>
      <p className="text-primary-950/70 dark:text-primary-50/60 text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] font-light mb-6">
        Let us discuss how our solutions can help you achieve your goals
      </p>
      <Button
        size="md"
        className="bg-gradient-primary dark:bg-gradient-primary-dark !text-white dark:!text-primary-950 [@media(hover:hover)]:hover:opacity-90 active:opacity-85"
      >
        Schedule a Consultation
      </Button>
    </div>
  )
}
