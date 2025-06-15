import clsx from 'clsx'
import React from 'react'
import RichText from '@/components/RichText'

import type { Post } from '@/payload-types'

import { PostCard } from '../../components/Card'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

export type RelatedPostsProps = {
  className?: string
  docs?: Post[]
  introContent?: SerializedEditorState
}

export const RelatedPosts: React.FC<RelatedPostsProps> = (props) => {
  const { className, docs, introContent } = props

  return (
    <div className={clsx('container', className)}>
      {introContent && <RichText data={introContent} enableGutter={false} />}

      <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3 ">
        {docs?.map((doc, index) => {
          if (typeof doc === 'string') return null

          return (
            <div key={index}>
              <PostCard className="h-full" doc={doc} relationTo="posts" showCategories />
            </div>
          )
        })}
      </div>
    </div>
  )
}
