// components/Steps.tsx
import { Bracket } from '@thirdbracket/bracketui'
import { BsArrowRight } from 'react-icons/bs'
import { FaRegComments } from 'react-icons/fa'
import { MdOutlineDesignServices, MdRocketLaunch } from 'react-icons/md'
import { TbCodeDots } from 'react-icons/tb'

const steps = [
  {
    icon: FaRegComments,
    title: 'Initial Consultation',
    // description:
    //   'We start with a detailed discussion to understand your business needs, goals, and project requirements.',
    color: 'text-accent-500 dark:text-accent-700',
  },
  {
    icon: MdOutlineDesignServices,
    title: 'Planning & Design',
    // description:
    //   'Our team creates a comprehensive project plan and design mockups tailored to your specifications.',
    color: 'text-accent-500 dark:text-accent-700',
  },
  {
    icon: TbCodeDots,
    title: 'Development',
    // description:
    //   'We build your solution using modern technologies and best practices, with regular updates and feedback.',
    color: 'text-accent-500 dark:text-accent-700',
  },
  {
    icon: MdRocketLaunch,
    title: 'Launch & Support',
    // description:
    //   'After thorough testing, we deploy your solution and provide ongoing support and maintenance.',
    color: 'text-accent-500 dark:text-accent-700',
  },
]

export default function Steps() {
  return (
    <section className="py-10  sm:py-12 lg:py-14 xl:py-16">
      <Bracket fluid centered padding="medium">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-950 dark:text-primary-50 mb-4 ">
            How We Work
          </h2>
          <p className="text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] font-light text-primary-950/80 dark:text-primary-50/60 mb-6">
            Our streamlined process ensures efficient delivery of high-quality solutions tailored to
            your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative flex flex-col items-center text-center group">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] bg-gradient-to-r from-primary-200/40 to-primary-300/40 dark:from-primary-800/40 dark:to-primary-700/40">
                    <BsArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-primary-300 dark:text-primary-700" />
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-secondary-dark dark:bg-gradient-secondary border border-primary-400/20 dark:border-primary-500/20 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 ${step.color}`}
                >
                  <Icon size={28} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-primary-950 dark:text-primary-50 mb-3">
                  {step.title}
                </h3>
                {/* <p className="text-primary-950/70 dark:text-primary-50/60 text-sm leading-relaxed">
                  {step.description}
                </p> */}
              </div>
            )
          })}
        </div>
      </Bracket>
    </section>
  )
}
