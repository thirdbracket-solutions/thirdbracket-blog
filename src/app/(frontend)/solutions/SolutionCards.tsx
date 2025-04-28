// components/SolutionCard.tsx
import { Card } from '@thirdbracket/bracketui'
import Image from 'next/image'
import { BsArrowUpRight } from 'react-icons/bs'
import { Solution } from './types'

export default function SolutionCard({ title, description, technologies, image }: Solution) {
  return (
    <Card
      size="xl"
      className="rounded-lg border border-primary-500 border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 bg-gradient-primary-dark dark:bg-gradient-primary active:border-opacity-100 md:hover:border-opacity-100"
      cover={
        image && (
          <div className="bg-slate-50 dark:bg-zinc-950 h-60 w-full lg:h-80 bg-[linear-gradient(to_right,#8697c40a_1px,transparent_1px),linear-gradient(to_bottom,#8697c40a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#464d691f_1px,transparent_1px),linear-gradient(to_bottom,#464d691f_1px,transparent_1px)] bg-[size:14px_24px] relative">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        )
      }
      header={
        <div className="flex items-center mb-2">
          <h3 className="!font-semibold max-w-md">{title}</h3>
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
                  className="px-2 py-1 text-sm text-primary-800 bg-gradient-secondary-dark dark:bg-gradient-secondary dark:text-primary-200 border-primary-100/80 dark:border-primary-900/70 rounded-lg border flex flex-col space-y-1 font-semibold"
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
