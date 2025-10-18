import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'

import type { Post, Blog } from '@/payload-types'
import { Media } from '@/components/Media'

import { formatAuthors } from '@/utilities/formatAuthors'

export const PostHero: React.FC<{
  post: Post | Blog
}> = ({ post }) => {
  const { categories, populatedAuthors, publishedAt, title, heroImage } = post

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  return (
    <section className="h-full w-full  bg-[radial-gradient(#f0f0f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1c1c1c_1px,transparent_1px)]  [background-size:16px_16px] pb-8 sm:pb-12 md:pb-16 pt-20  lg:pt-24 border-b border-dashed border-primary-200/50 dark:border-primary-800/60">
      {/* {heroImage && typeof heroImage !== 'string' && (
        <div className="absolute inset-0 -z-10">
          <Media
            fill
            priority
            imgClassName="object-cover blur-sm opacity-10 dark:opacity-5"
            resource={heroImage}
          />
          <div className="absolute inset-0 bg-white/80 dark:bg-black/80" />
        </div>
      )} */}
      <div className="uppercase text-sm mb-6 text-center">
        {categories?.map((category, index) => {
          if (typeof category === 'object' && category !== null) {
            const { title: categoryTitle } = category

            const titleToUse = categoryTitle || 'Untitled category'

            const isLast = index === categories.length - 1

            return (
              <React.Fragment key={index}>
                <span
                  className="mr-2 lg:mr-3 rounded-full 
    
    px-2 py-0.5 text-xs text-white dark:text-primary-950 
     bg-primary-800 dark:bg-primary-200"
                >
                  {titleToUse}
                </span>
                {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
              </React.Fragment>
            )
          }
          return null
        })}
      </div>
      <div>
        {' '}
        <h1 className="text-4xl font-extrabold md:text-5xl lg:text-6xl bg-gradient-to-r from-primary-800 via-primary-900 to-primary-800 dark:from-primary-200 dark:via-primary-100 dark:to-primary-200 text-transparent bg-clip-text  text-center mb-6">
          {title}
        </h1>
      </div>
      <div className="flex  flex-row gap-8 md:gap-16 mx-auto place-content-center mt-2 text-primary-800 dark:text-primary-200">
        {hasAuthors && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-xs md:text-sm">Author</p>

              <p>{formatAuthors(populatedAuthors)}</p>
            </div>
          </div>
        )}
        {publishedAt && (
          <div className="flex flex-col gap-1">
            <p className="text-xs md:text-sm">Date Published</p>

            <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
          </div>
        )}
      </div>
    </section>

    // <section className="relative -mt-[10.4rem] flex items-end     px-6">
    //   <div className="container z-10 relative lg:grid lg:grid-cols-[1fr_48rem_1fr] text-black dark:text-white pb-8">
    //     <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-2">
    //       <div className="uppercase text-sm mb-6">
    //         {categories?.map((category, index) => {
    //           if (typeof category === 'object' && category !== null) {
    //             const { title: categoryTitle } = category

    //             const titleToUse = categoryTitle || 'Untitled category'

    //             const isLast = index === categories.length - 1

    //             return (
    //               <React.Fragment key={index}>
    //                 {titleToUse}
    //                 {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
    //               </React.Fragment>
    //             )
    //           }
    //           return null
    //         })}
    //       </div>

    //       <div>
    //         <h1 className="mb-6 text-4xl font-extrabold md:text-5xl lg:text-6xl bg-gradient-to-r from-primary-800 via-primary-900 to-primary-800 dark:from-primary-200 dark:via-primary-100 dark:to-primary-200 text-transparent bg-clip-text ">
    //           {title}
    //         </h1>
    //       </div>

    //       <div className="flex flex-col md:flex-row gap-4 md:gap-16">
    //         {hasAuthors && (
    //           <div className="flex flex-col gap-4">
    //             <div className="flex flex-col gap-1">
    //               <p className="text-sm">Author</p>

    //               <p>{formatAuthors(populatedAuthors)}</p>
    //             </div>
    //           </div>
    //         )}
    //         {publishedAt && (
    //           <div className="flex flex-col gap-1">
    //             <p className="text-sm">Date Published</p>

    //             <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    //   <div className="min-h-[80vh] select-none">
    //     {heroImage && typeof heroImage !== 'string' && (
    //       <Media fill priority imgClassName="-z-10 object-cover" resource={heroImage} />
    //     )}
    //     <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-[radial-gradient(#f0f0f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1c1c1c_1px,transparent_1px)]  [background-size:16px_16px]" />
    //   </div>
    // </section>
  )
}
