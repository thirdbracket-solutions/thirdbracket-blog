// components/SolutionCard.tsx
import { Card } from '@thirdbracket/bracketui'
import Image from 'next/image'

import { Solution } from './types'
import Link from 'next/link'

import { IoIosArrowForward } from 'react-icons/io'

export default function SolutionCard({
  title,
  description,
  technologies,
  image,
  features,
}: Solution) {
  return (
    <Card
      size="xl"
      // isIcon
      theme={{
        background: 'bg-conic-card dark:bg-conic-cardDark',
        border:
          'border-opacity-30 dark:border-opacity-40 border-primary-600 dark:border-primary-400  dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]  shadow-[0_0_2px_rgba(11,13,15,0.10)]',
        hover:
          '[@media(hover:hover)]:hover:border-opacity-60 [@media(hover:hover)]:hover:dark:border-opacity-70   [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)] [@media(hover:hover)]:dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]         focus-within:border-opacity-100 active:border-opacity-100',

        text: 'dark:text-primary-400 text-primary-700  font-light leading-[1.45]',
      }}
      cover={
        image && (
          <div className=" h-[300px] w-full    bg-[linear-gradient(to_right,#f1f2f466_1px,transparent_1px),linear-gradient(to_bottom,#f1f2f466_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f242866_1px,transparent_1px),linear-gradient(to_bottom,#1f242866_1px,transparent_1px)] bg-[size:14px_24px] relative">
            <Image src={image} alt={title} fill className="object-cover opacity-85" />
          </div>
        )
      }
      header={
        // <div className="font-bold  bg-gradient-primary dark:bg-gradient-primary-dark text-transparent bg-clip-text my-2">
        title
      }

      // </div>
    >
      <div>
        {technologies && (
          <div className="py-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5   text-xs text-secondary-800 bg-white dark:bg-black dark:text-secondary-200  rounded-lg flex flex-col  font-medium border-[0.5px] border-primary-600/30 dark:border-primary-400/40"
                >
                  <div>{tech.cto}</div>
                  <div className="text-xs font-normal text-primary-400  dark:text-primary-600">
                    {tech.title}
                  </div>
                </span>
              ))}
            </div>
          </div>
        )}

        <ul className="list-disc list-inside   space-y-1 text-sm pb-4">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        {description && (
          <Link
            href="#"
            className="  inline-flex gap-2 items-center group leading-none text-primary-600 dark:text-primary-400 font-normal  mb-2"
          >
            {description}
            <span className="group-hover:underline group-hover:translate-x-1 transition-all ease-in-out duration-200 ">
              <IoIosArrowForward />
            </span>
          </Link>
        )}
      </div>
    </Card>
  )
}
