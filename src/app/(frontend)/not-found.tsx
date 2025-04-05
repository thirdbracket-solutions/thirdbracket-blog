import Link from 'next/link'
import React from 'react'

import { Bracket, Button } from '@thirdbracket/bracketui'

export default function NotFound() {
  return (
    <Bracket>
      <div className="pb-8 sm:pb-12 md:pb-16 pt-20  lg:pt-24  px-6 text-center min-h-screen">
        <div className="prose max-w-none mx-auto ">
          <h1 className="text-5xl font-extrabold md:text-6xl lg:text-7xl bg-gradient-to-r from-primary-800 via-primary-900 to-primary-800 dark:from-primary-200 dark:via-primary-100 dark:to-primary-200 text-transparent bg-clip-text  text-center mb-2">
            404
          </h1>
          <p className="mb-4">This page could not be found.</p>

          <Button href="/" as={Link} variant="default">
            Go home
          </Button>
        </div>
      </div>
    </Bracket>
  )
}
