// src/app/services/page.tsx
import { Bracket, Button, Card } from '@thirdbracket/bracketui'
import PageHeader from '../../../components/PageHeader'
import { IconType } from 'react-icons'
import { FaWordpress, FaServer, FaSearch, FaPencilAlt, FaRocket } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { MdSpeed, MdDesignServices, MdBrandingWatermark } from 'react-icons/md'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web & Digital Marketing Services',
}

interface ServiceCategory {
  title: string
  description: string
  services: Service[]
}

interface Service {
  title: string
  description: string
  icon: IconType
  features: string[]
}

function ServiceCard({ title, description, icon: Icon, features }: Service) {
  return (
    <Card
      isIcon
      size="lg"
      header={title}
      className="rounded-lg border border-primary-500  border-opacity-40 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100  dark:bg-[linear-gradient(to_right,#3838381a_1px,transparent_1px),linear-gradient(to_bottom,#3838381a_1px,transparent_1px)] bg-[linear-gradient(to_right,#dee1e612_1px,transparent_1px),linear-gradient(to_bottom,#dee1e612_1px,transparent_1px)]  bg-[size:14px_24px] dark:bg-secondary-950 bg-secondary-50 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-70"
      cover={
        <div className="w-12 h-12 mb-4 flex items-center  justify-center   border border-primary-500/40  dark:bg-secondary-950 bg-secondary-50  rounded-lg">
          <Icon className="w-6 h-6 text-primary-900 dark:text-primary-100" />
        </div>
      }
      // className="p-6 border border-primary-200 dark:border-primary-800 rounded-lg hover:shadow-lg transition-all"
    >
      {/* <h3 className="text-xl  font-semibold mb-3">{title}</h3>
      <p className="text-primary-600 dark:text-primary-400 mb-4">
        {description}
      </p> */}

      <p className="text-primary-600 dark:text-primary-400 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center text-sm text-primary-600 dark:text-primary-400"
          >
            <span className="w-1.5 h-1.5 bg-primary-900 dark:bg-primary-100 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  )
}

function CategorySection({ title, description, services }: ServiceCategory) {
  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl text-primary-800 dark:text-primary-200 font-bold mb-4">{title}</h2>
        <p className="text-primary-600 dark:text-primary-400 max-w-3xl mx-auto">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  )
}

function ContactCTA() {
  return (
    <div
      className="rounded-lg p-8 lg:p-12 text-center bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))]
from-[#f8ebf1] via-[#f3d7e5] to-[#eab7cf] dark:bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))]
dark:from-[#6f2c42] dark:via-[#84304b] dark:to-[#ac3b61]  border border-secondary-500  border-opacity-30 "
    >
      <h3 className="text-2xl lg:text-4xl font-extrabold  text-primary-950 dark:text-white mb-4">
        Ready to Transform Your Digital Presence?
      </h3>
      <p className="text-primary-800/70 dark:text-primary-200/60 text-base md:text-lg lg:text-xl   font-light mb-6">
        Let us discuss how we can help you achieve your goals
      </p>

      <Button
        size="md"
        className="bg-gradient-primary dark:bg-gradient-primary-dark !text-white dark:!text-primary-950 [@media(hover:hover)]:hover:opacity-90 active:opacity-85 "
      >
        {' '}
        Contact Us
      </Button>
    </div>
  )
}

export default function Services() {
  const serviceCategories: ServiceCategory[] = [
    {
      title: 'Web Development',
      description: 'Modern web solutions built with cutting-edge technologies',
      services: [
        {
          title: 'Next.js Development',
          description: 'High-performance React applications with server-side rendering',
          icon: SiNextdotjs,
          features: [
            'Server-side rendering',
            'Static site generation',
            'API routes and serverless functions',
            'Performance optimization',
            'SEO-friendly architecture',
          ],
        },
        {
          title: 'WordPress Development',
          description: 'Custom WordPress solutions for content-driven websites',
          icon: FaWordpress,
          features: [
            'Custom theme development',
            'Plugin development',
            'WooCommerce integration',
            'Performance optimization',
            'Security hardening',
          ],
        },
        {
          title: 'Headless & Serverless',
          description: 'Modern architectures for scalable applications',
          icon: FaServer,
          features: [
            'Headless CMS integration',
            'JAMstack architecture',
            'Serverless functions',
            'API development',
            'Cloud deployment',
          ],
        },
      ],
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic digital marketing solutions to grow your business',
      services: [
        {
          title: 'SEO & Web Visibility',
          description: 'Improve your search engine rankings and online presence',
          icon: FaSearch,
          features: [
            'Technical SEO optimization',
            'Content strategy',
            'Keyword research',
            'Link building',
            'Performance tracking',
          ],
        },
        {
          title: 'Branding & Design',
          description: 'Create a strong brand identity that resonates',
          icon: MdBrandingWatermark,
          features: [
            'Brand strategy',
            'Visual identity design',
            'Brand guidelines',
            'Marketing materials',
            'Brand messaging',
          ],
        },
        {
          title: 'Content & Copywriting',
          description: 'Engaging content that converts visitors into customers',
          icon: FaPencilAlt,
          features: [
            'Website copywriting',
            'Blog content',
            'Email campaigns',
            'Social media content',
            'SEO copywriting',
          ],
        },
      ],
    },
    {
      title: 'Other Services',
      description: 'Specialized solutions to enhance your digital products',
      services: [
        {
          title: 'UI/UX Design',
          description: 'User-centered design solutions for digital products',
          icon: MdDesignServices,
          features: [
            'User interface design',
            'User experience design',
            'Wireframing',
            'Prototyping',
            'Usability testing',
          ],
        },
        {
          title: 'Performance Optimization',
          description: 'Optimize your applications for speed and efficiency',
          icon: MdSpeed,
          features: [
            'Load time optimization',
            'Code optimization',
            'Database optimization',
            'Caching strategies',
            'Performance monitoring',
          ],
        },
        {
          title: 'Prototyping',
          description: 'Rapid prototyping for concept validation',
          icon: FaRocket,
          features: [
            'Interactive prototypes',
            'MVP development',
            'Concept validation',
            'User testing',
            'Iterative development',
          ],
        },
      ],
    },
  ]

  return (
    <Bracket>
      <PageHeader
        title="Our Services"
        description="Comprehensive digital solutions tailored to your needs"
      />

      <div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16">
        {serviceCategories.map((category, index) => (
          <CategorySection key={index} {...category} />
        ))}

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-800 dark:text-primary-200">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Discovery',
                description: 'Understanding your needs',
              },
              {
                step: '2',
                title: 'Planning',
                description: 'Creating the roadmap',
              },
              {
                step: '3',
                title: 'Execution',
                description: 'Building your solution',
              },
              {
                step: '4',
                title: 'Support',
                description: 'Ongoing maintenance',
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary-900 dark:bg-primary-50  text-white dark:text-primary-950 flex items-center justify-center mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-primary-600 dark:text-primary-400">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <ContactCTA />
      </div>
    </Bracket>
  )
}
