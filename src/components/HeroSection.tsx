// import { Bracket, Button } from '@thirdbracket/bracketui'
// import React from 'react'
// import { Nextjs, Tailwind, Vercel } from './icons'
// import Link from 'next/link'
// import Image from 'next/image'

// const HeroSection: React.FC = () => {
//   return (
//     <section className="pb-10 sm:pb-12  lg:pb-14 xl:pb-16 pt-20 sm:pt-24  lg:pt-28 xl:pt-32   bg-[radial-gradient(#f0f0f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e2026_1px,transparent_1px)]  [background-size:16px_16px]     ">
//       <Bracket fluid centered padding="medium">
//         <div className="sm:mx-auto   max-w-screen-xl">
//           <div className="flex flex-col  items-start sm:items-center    space-y-10 md:space-y-12 lg:space-y-14 ">
//             {/* <a
//             href="#"
//             className="flex items-center justify-between rounded-full
//     pr-3 py-0.5 pl-0.5  text-[10px] lg:text-[13px]
//      bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-secondary-100 via-secondary-50 to-white dark:bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] dark:from-primary-900 dark:via-secondary-950 dark:to-primary-950 backdrop-blur-md
//     text-primary-700 dark:text-primary-300
//     transition-opacity duration-200 ease-in-out text-nowrap
//     motion-reduce:transition-none motion-reduce:hover:transform-none
//     hover:opacity-90 max-w-full tracking-wide"
//           >
//             <span
//               className="mr-2 lg:mr-3 rounded-full

//     px-2 py-0.5  text-white dark:text-primary-950
//      bg-primary-800 dark:bg-primary-200"
//             >
//               New
//             </span>
//             <span className=" whitespace-nowrap truncate">
//               Bracket UI version 4 is out! <u>See What’s New!</u>
//             </span>
//             <svg
//               className="ml-2 lg:ml-3
//       size-3.5 lg:size-4"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </a> */}

//             {/* Heading */}

//             <h1 className="text-[2.55rem]/[2.65rem]  font-extrabold md:text-5xl/[1.1]  lg:text-6xl/[1.1]   text-left bg-gradient-primary dark:bg-gradient-primary-dark  text-transparent bg-clip-text sm:text-center lg:max-w-screen-md xl:max-w-screen-lg sm:max-w-lg md:max-w-screen-sm max-w-md  capitalize ">
//               Next.js Web Development for UK Agencies & Startups
//             </h1>

//             {/* 800-#1f2937,900- #111827, 200-#e5e7eb, 100-#f3f4f6  #030712 #f9fafb*/}
//             {/* Paragraph */}
//             <p className="text-primary-950/70 dark:text-primary-50/60  font-light text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem]  lg:max-w-screen-md sm:max-w-lg md:max-w-screen-sm backdrop-blur-sm  text-left sm:text-center xl:max-w-[900px]">
//               We build fast, SEO-optimized websites using Next.js and TailwindCSS. Our custom React
//               component library delivers minimal, professional design that’s hard to outsource
//               without an in-house team.
//             </p>

//             {/* Button Group */}
//             <div className="flex justify-center gap-4 md:gap-6 backdrop-blur-sm">
//               <Button
//                 size="md"
//                 as={Link}
//                 href="/about"
//                 className="  !bg-gradient-primary dark:!bg-gradient-primary-dark !font-medium  !text-white dark:!text-black [@media(hover:hover)]:hover:opacity-90 active:opacity-85"
//               >
//                 About Us
//                 <svg
//                   className="size-4 ml-2"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </Button>
//               <Button
//                 outline
//                 as={Link}
//                 href="/contact"
//                 size="md"
//                 className=" !border-primary-100 dark:!border-primary-900   !text-black dark:!text-white  [@media(hover:hover)]:hover:!bg-gradient-secondary-dark [@media(hover:hover)]:dark:hover:!bg-gradient-secondary active:!bg-secondary-100 dark:active:!bg-primary-900 !font-medium"
//               >
//                 <svg
//                   className="size-4 mr-2"
//                   fill="currentColor"
//                   viewBox="0 0 1000 1000"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M860 265h-61q-8 0-13.5 5.5T780 284v246q0 39-28 67t-68 28H279q-8 0-13.5 5.5T260 644v61q0 17 11.5 28.5T300 745h415q25 0 43 18l110 110q4 4 9.5 5t11-1 8.5-7 3-11V305q0-17-11.5-28.5T860 265zM700 505V145q0-17-11.5-28.5T660 105H140q-17 0-28.5 11.5T100 145v514q0 6 3 11t8.5 7 11 1 9.5-5l110-110q18-18 43-18h375q17 0 28.5-12t11.5-28z"></path>
//                 </svg>
//                 Contact Us
//               </Button>
//             </div>
//             {/* Featured section*/}
//             <div className="px-0 sm:px-4 py-4 text-left sm:text-center   lg:px-36">
//               <span className=" uppercase text-primary-800/60 dark:text-primary-200/60 backdrop-blur-sm">
//                 FEATURED IN
//               </span>
//               <div className="mt-6 sm:mt-8 flex flex-wrap items-start gap-8 lg:gap-12 sm:items-center  text-primary-500 justify-start sm:justify-between ">
//                 <a
//                   href="#"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className=" backdrop-blur-lg  grayscale  hover:grayscale-0     transition  duration-300"
//                 >
//                   <Image
//                     src="/accenture.svg"
//                     alt="Logo 1"
//                     width={163}
//                     height={43}
//                     priority
//                     loading="eager"
//                     className="w-auto h-5 md:h-6 object-contain "
//                   />
//                 </a>

//                 <a
//                   href="#"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="backdrop-blur-lg  grayscale  hover:grayscale-0     transition  duration-300"
//                 >
//                   <Image
//                     src="/clutch.svg"
//                     alt="Logo 2"
//                     width={141}
//                     height={40}
//                     priority
//                     loading="eager"
//                     className="w-auto h-5 md:h-6 object-contain "
//                   />
//                 </a>

//                 <a
//                   href="#"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="backdrop-blur-lg  grayscale  hover:grayscale-0     transition  duration-300 "
//                 >
//                   <Image
//                     src="/designrush.svg"
//                     alt="Logo 3"
//                     width={179}
//                     height={40}
//                     priority
//                     loading="eager"
//                     className="w-auto h-5 md:h-6 object-contain "
//                   />
//                 </a>

//                 {/* <a
//                 href="https://tailwindcss.com/"
//                 target="_blank"
//                 className=" hover:text-primary-700 dark:hover:text-primary-400 "
//               >
//                 <Tailwind />
//               </a>
//               <a
//                 href="https://nextjs.org/"
//                 target="_blank"
//                 className=" hover:text-primary-700 dark:hover:text-primary-400 "
//               >
//                 <Nextjs />
//               </a>
//               <a
//                 href="https://vercel.com"
//                 target="_blank"
//                 className="  hover:text-primary-700 dark:hover:text-primary-400 "
//               >
//                 <Vercel />
//               </a> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </Bracket>
//     </section>
//   )
// }

// export default HeroSection

'use client'

import { Bracket, Button } from '@thirdbracket/bracketui'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const featuredLogos = [
  { src: '/accenture.svg', alt: 'Accenture', width: 163, height: 43 },
  { src: '/clutch.svg', alt: 'Clutch', width: 141, height: 40 },
  { src: '/designrush.svg', alt: 'DesignRush', width: 179, height: 40 },
]

export const Hero: React.FC = () => {
  return (
    <section className="pb-10 sm:pb-12 lg:pb-14 xl:pb-16 pt-20 sm:pt-24 lg:pt-28 xl:pt-32 bg-[radial-gradient(#f0f0f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e2026_1px,transparent_1px)] [background-size:16px_16px]">
      <Bracket fluid centered padding="medium">
        <div className="sm:mx-auto max-w-screen-xl">
          <div className="flex flex-col items-start sm:items-center space-y-10 md:space-y-12 lg:space-y-14">
            <h1 className="text-[2.55rem]/[1.1] font-extrabold md:text-5xl/[1.1] lg:text-6xl/[1.1] text-left bg-gradient-primary dark:bg-gradient-primary-dark text-transparent bg-clip-text sm:text-center lg:max-w-screen-md xl:max-w-screen-lg sm:max-w-lg md:max-w-screen-sm max-w-md capitalize">
              Next.js Web Development for UK Agencies & Startups
            </h1>

            <p className="text-primary-950/70 dark:text-primary-50/60 font-light text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] lg:max-w-screen-md sm:max-w-lg md:max-w-screen-sm text-left sm:text-center xl:max-w-[900px] backdrop-blur-sm">
              We build fast, SEO-optimized websites using Next.js and TailwindCSS. Our custom React
              component library delivers minimal, professional design that’s hard to outsource
              without an in-house team.
            </p>

            <div className="flex justify-center gap-4 md:gap-6 backdrop-blur-sm">
              <Button
                size="md"
                as={Link}
                href="/about"
                className="!bg-gradient-primary dark:!bg-gradient-primary-dark !font-medium !text-white dark:!text-black hover:opacity-90 active:opacity-85"
              >
                About Us
                <svg className="size-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>

              <Button
                outline
                as={Link}
                href="/contact"
                size="md"
                className="!border-primary-100 dark:!border-primary-900 !text-black dark:!text-white hover:!bg-gradient-secondary-dark dark:hover:!bg-gradient-secondary active:!bg-secondary-100 dark:active:!bg-primary-900 !font-medium"
              >
                <svg className="size-4 mr-2" fill="currentColor" viewBox="0 0 1000 1000">
                  <path d="M860 265h-61q-8 0-13.5 5.5T780 284v246q0 39-28 67t-68 28H279q-8 0-13.5 5.5T260 644v61q0 17 11.5 28.5T300 745h415q25 0 43 18l110 110q4 4 9.5 5t11-1 8.5-7 3-11V305q0-17-11.5-28.5T860 265zM700 505V145q0-17-11.5-28.5T660 105H140q-17 0-28.5 11.5T100 145v514q0 6 3 11t8.5 7 11 1 9.5-5l110-110q18-18 43-18h375q17 0 28.5-12t11.5-28z" />
                </svg>
                Contact Us
              </Button>
            </div>

            <div className="px-0 sm:px-4 py-4 text-left sm:text-center lg:px-36">
              <span className="uppercase text-primary-800/60 dark:text-primary-200/60 backdrop-blur-sm">
                FEATURED IN
              </span>
              <div className="mt-6 sm:mt-8 flex flex-wrap items-start gap-8 lg:gap-12 sm:items-center text-primary-500 justify-start sm:justify-between">
                {featuredLogos.map((logo, idx) => (
                  <a
                    key={idx}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="backdrop-blur-lg grayscale hover:grayscale-0 transition duration-300"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      priority
                      loading="eager"
                      className="w-auto h-5 md:h-6 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Bracket>
    </section>
  )
}
