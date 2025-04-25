// 'use client'

// import useClickableCard from '@/utilities/useClickableCard'
// import Link from 'next/link'
// import React, { Fragment } from 'react'

// import type { Post } from '@/payload-types'
// import { Card as MainCard } from '@thirdbracket/bracketui'

// import { Media } from '@/components/Media'

// export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>

// export const Card: React.FC<{
//   alignItems?: 'center'
//   className?: string
//   doc?: CardPostData
//   relationTo?: 'posts'
//   showCategories?: boolean
//   title?: string
// }> = (props) => {
//   const { link } = useClickableCard({})
//   const { doc, relationTo, showCategories, title: titleFromProps } = props

//   const { slug, categories, meta, title } = doc || {}
//   const { description, image: metaImage } = meta || {}

//   const hasCategories = categories && Array.isArray(categories) && categories.length > 0
//   const titleToUse = titleFromProps || title
//   const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
//   const href = `/${relationTo}/${slug}`

//   return (
//     <MainCard
//       // className={cn(
//       //   'border border-border rounded-lg overflow-hidden bg-card hover:cursor-pointer',
//       //   className,
//       // )}

//       // ref={card.ref}
//       href={href}
//       ref={link.ref}
//       className="rounded-lg border border-primary-500  border-opacity-40 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-70"
//     >
//       <div className="relative w-full ">
//         {!metaImage && <div className="">No image</div>}
//         {metaImage && typeof metaImage !== 'string' && <Media resource={metaImage} size="33vw" />}
//       </div>
//       <div className="mt-4">
//         {showCategories && hasCategories && (
//           <div className=" mb-2">
//             {showCategories && hasCategories && (
//               <div>
//                 {categories?.map((category, index) => {
//                   if (typeof category === 'object') {
//                     const { title: titleFromCategory } = category

//                     const categoryTitle = titleFromCategory || 'Untitled category'

//                     const isLast = index === categories.length - 1

//                     return (
//                       <Fragment key={index}>
//                         <span className="px-1.5 py-0.5 text-xs text-secondary-600 dark:text-secondary-600  border-secondary-500/20   rounded-md border">
//                           {categoryTitle}
//                         </span>
//                         {!isLast && <Fragment>, &nbsp;</Fragment>}
//                       </Fragment>
//                     )
//                   }

//                   return null
//                 })}
//               </div>
//             )}
//           </div>
//         )}
//         {titleToUse && (
//           <div className="prose mb-2">
//             <Link
//               href={href}
//               ref={link.ref}
//               className="text-xl font-bold text-primary-800 dark:text-primary-200 line-clamp-2 leading-tight"
//             >
//               <h3 className="not-prose">{titleToUse}</h3>
//             </Link>
//           </div>
//         )}
//         {description && (
//           <div>{description && <p className="line-clamp-2">{sanitizedDescription}</p>}</div>
//         )}
//       </div>
//     </MainCard>
//   )
// }

'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, categories, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`

  return (
    <Link href={href}>
      <article
        className={cn(
          'border border-primary-500 border-opacity-30 rounded-lg overflow-hidden bg-gradient-secondary-dark dark:bg-gradient-secondary hover:cursor-pointer transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100',
          className,
        )}
        ref={card.ref}
      >
        <div className="relative w-full ">
          {!metaImage && <div className="">No image</div>}
          {metaImage && typeof metaImage !== 'string' && <Media resource={metaImage} size="33vw" />}
        </div>
        <div className="p-4">
          {showCategories && hasCategories && (
            <div className="uppercase px-1  border border-primary-600/30 text-primary-700 dark:text-primary-300 w-fit text-xs rounded mb-2 bg-accent-radial dark:bg-accent-radial-dark">
              {showCategories && hasCategories && (
                <div>
                  {categories?.map((category, index) => {
                    if (typeof category === 'object') {
                      const { title: titleFromCategory } = category

                      const categoryTitle = titleFromCategory || 'Untitled category'

                      const isLast = index === categories.length - 1

                      return (
                        <Fragment key={index}>
                          {categoryTitle}
                          {!isLast && <Fragment>, &nbsp;</Fragment>}
                        </Fragment>
                      )
                    }

                    return null
                  })}
                </div>
              )}
            </div>
          )}
          {titleToUse && (
            <div>
              <h3 className=" font-bold text-primary-900 dark:text-primary-50 mb-2 text-lg line-clamp-2">
                {titleToUse}
              </h3>
            </div>
          )}
          {description && (
            <div className="mt-2">
              {description && (
                <p className="text-gray-600 text-sm line-clamp-2">{sanitizedDescription}</p>
              )}
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}
