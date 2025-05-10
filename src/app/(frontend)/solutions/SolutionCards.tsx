// components/SolutionCard.tsx
import { Card } from '@thirdbracket/bracketui'
import Image from 'next/image'
import { BsArrowUpRight } from 'react-icons/bs'
import { Solution } from './types'

export default function SolutionCard({ title, description, technologies, image }: Solution) {
  return (
    <Card
      size="xl"
      theme={{
        background: 'bg-gradient-secondary-dark dark:bg-gradient-secondary',
        border: 'border-primary-200 dark:border-primary-800',
        hover: 'md:hover:border-primary-400 md:hover:dark:border-primary-600',

        text: 'dark:text-primary-400 text-primary-600 leading-[1.45] font-light',
      }}
      cover={
        image && (
          <div className=" h-60 w-full backdrop-blur-lg lg:h-80 bg-[linear-gradient(to_right,#f1f2f466_1px,transparent_1px),linear-gradient(to_bottom,#f1f2f466_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f242866_1px,transparent_1px),linear-gradient(to_bottom,#1f242866_1px,transparent_1px)] bg-[size:14px_24px] relative">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        )
      }
      header={<div className="flex items-center mb-2">{title}</div>}
    >
      <div>
        {technologies && (
          <div className="pb-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-sm text-primary-800 bg-gradient-primary-dark dark:bg-gradient-primary dark:text-primary-200 border-primary-100/80 dark:border-primary-900/70 rounded-lg border flex flex-col space-y-1 font-semibold"
                >
                  {tech.cto}
                  <span className="text-xs font-normal text-primary-500">{tech.title}</span>
                </span>
              ))}
            </div>
          </div>
        )}
        {description && (
          <a
            href="#"
            className="text-primary-800 tracking-wide dark:text-primary-200 mb-2 text-sm underline"
          >
            {description}
            <span className="inline-flex ml-2 items-center">
              <BsArrowUpRight />
            </span>
          </a>
        )}
      </div>
    </Card>
  )
}
