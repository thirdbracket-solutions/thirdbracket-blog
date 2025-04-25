import { Bracket } from '@thirdbracket/bracketui'
import ServiceCard from './ServiceCards'
import { IconType } from 'react-icons'

interface CategoryProps {
  title: string
  description: string
  stackIcons: React.ReactNode[]
  illustration: {
    src: string
    alt: string
  }
  index: number
  services: {
    title: string
    description: string
    features: string[]
    badge?: string
    icon: IconType
  }[]
}

export default function Category({
  title,
  description,
  stackIcons,
  illustration,

  services,
}: CategoryProps) {
  return (
    <section className="py-10 sm:py-12  lg:py-14 xl:py-16">
      <Bracket fluid centered padding="medium">
        <div className="flex flex-col-reverse lg:flex-row-reverse  gap-y-8 sm:gap-x-0 items-center my-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-950 dark:text-primary-50 mb-4">
              {title}
            </h2>
            <p className="text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] font-light text-primary-950/80 dark:text-primary-50/60 mb-6">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {stackIcons.map((Icon, index) => (
                <span key={index}>{Icon}</span>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 hidden sm:flex sm:mb-6">
            <img
              src={illustration.src}
              alt={illustration.alt}
              className="w-full h-auto max-w-xs mx-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Bracket>
    </section>
  )
}
