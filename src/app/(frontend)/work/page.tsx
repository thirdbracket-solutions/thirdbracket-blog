import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { Bracket } from '@thirdbracket/bracketui'
import PageHeader from '@/components/PageHeader'

export const dynamic = 'force-static'
export const revalidate = false

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const works = await payload.find({
    collection: 'work',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    sort: '-completedAt',
    page: 1,
    select: {
      title: true,
      slug: true,
      categories: true,
      technologies: true,
      meta: true,
      heroImage: true,
      populatedAgency: true,
      github: true,
      behance: true,
      liveWebsite: true,
    },
  })

  return (
    <Bracket fluid centered padding="small">
      <div className="md:max-w-screen-xl mx-auto">
        <PageClient />
        <PageHeader title="Our Work" description="Showcasing our latest projects and achievements" />
        <div className="py-8 sm:py-12 md:py-16">
          <div className="container mb-8">
            <PageRange
              collection="work"
              currentPage={works.page}
              limit={12}
              totalDocs={works.totalDocs}
            />
          </div>

          <CollectionArchive posts={works.docs} relationTo="work" />

          <div className="container">
            {works.totalPages > 1 && works.page && (
              <Pagination page={works.page} totalPages={works.totalPages} />
            )}
          </div>
        </div>
      </div>
    </Bracket>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Our Work - Web Development & Digital Marketing Projects`,
  }
}