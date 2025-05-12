// components/SolutionCard.tsx
import { Card } from '@thirdbracket/bracketui'
import Image from 'next/image'
import { BsArrowUpRight } from 'react-icons/bs'
import { Solution } from './types'
import Link from 'next/link'
import { TbArrowRight } from 'react-icons/tb'
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
      size="lg"
      // isIcon
      theme={{
        background: 'bg-gradient-secondary-dark dark:bg-gradient-secondary',
        border: 'border-primary-200 dark:border-primary-800',
        hover: 'md:hover:border-primary-400 md:hover:dark:border-primary-600',

        text: 'dark:text-primary-400 text-primary-600 leading-[1.45] font-light',
      }}
      cover={
        image && (
          <div className=" h-[300px] w-full    bg-[linear-gradient(to_right,#f1f2f466_1px,transparent_1px),linear-gradient(to_bottom,#f1f2f466_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f242866_1px,transparent_1px),linear-gradient(to_bottom,#1f242866_1px,transparent_1px)] bg-[size:14px_24px] relative">
            <Image src={image} alt={title} fill className="object-cover opacity-85" />
          </div>
        )
      }
      header={
        <div className="font-bold  bg-gradient-primary dark:bg-gradient-primary-dark text-transparent bg-clip-text my-2">
          {title}
        </div>
      }
    >
      <div>
        {technologies && (
          <div className="pb-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5   text-xs text-secondary-700 bg-gradient-secondary-dark dark:bg-gradient-secondary dark:text-secondary-300 border-primary-100/40 dark:border-primary-800/40 rounded-lg border flex flex-col  font-medium"
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
