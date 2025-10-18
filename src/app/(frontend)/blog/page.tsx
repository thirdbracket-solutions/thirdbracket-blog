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

  const blogs = await payload.find({
    collection: 'blog',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    sort: '-publishedAt',
    page: 1,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return (
    <Bracket fluid centered padding="small">
      <div className="md:max-w-screen-xl mx-auto">
        <PageClient />
        <PageHeader title="Blog" description="Insights and updates from our team" />
        <div className="py-8 sm:py-12 md:py-16">
          <div className="container mb-8">
            <PageRange
              collection="blog"
              currentPage={blogs.page}
              limit={12}
              totalDocs={blogs.totalDocs}
            />
          </div>

          <CollectionArchive posts={blogs.docs} relationTo="blog" />

          <div className="container">
            {blogs.totalPages > 1 && blogs.page && (
              <Pagination page={blogs.page} totalPages={blogs.totalPages} />
            )}
          </div>
        </div>
      </div>
    </Bracket>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Blog - Web Development & Digital Marketing`,
  }
}