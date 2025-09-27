import { Bracket } from '@thirdbracket/bracketui'
import PageHeader from '../../../components/PageHeader'
import { Metadata } from 'next'
import Link from 'next/link'
import { PiArrowUpRight } from 'react-icons/pi'
import { SiGithub } from 'react-icons/si'
import { RiDribbbleLine, RiGithubLine } from 'react-icons/ri'
import { FaGlobe } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Portfolio',
}

function PortfolioCard({ title, behanceId }: { title: string; behanceId: string }) {
  return (
    <div className="border border-primary-200 dark:border-primary-800 rounded-lg overflow-hidden p-6">
      {/* Behance Embed */}
      <div className="text-primary-900 dark:text-primary-50 text-xl mb-4">
        <Link
          className="flex items-center justify-between"
          href={`https://www.behance.net/embed/project/${behanceId}?ilo0=1`}
        >
          <h3 className="  font-semibold">{title}</h3>
          <PiArrowUpRight size={32} />
        </Link>
      </div>
      <div className="relative w-full h-[300px] max-w-screen-md  mx-auto">
        <iframe
          src={`https://www.behance.net/embed/project/${behanceId}?ilo0=1`}
          loading="lazy"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          className="block w-full h-full border-none overflow-hidden"
          scrolling="no"
        ></iframe>

        {/* The Overlay Div */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-black opacity-15" />
      </div>
      <div className="flex items-center justify-center gap-4 mt-4 text-primary-800 dark:text-primary-200">
        <Link href="#">
          <RiGithubLine size={24} />
        </Link>
        <Link href="#">
          <RiDribbbleLine size={24} />
        </Link>
        <Link href="#">
          <FaGlobe size={24} />
        </Link>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const projects = [
    {
      title: 'HealSpace - Wellness Marketplace Platform',
      behanceId: '235448997',
    },
    {
      title: 'Automatus - Elementor Template Kit',
      behanceId: '231924415',
    },

    // Add more projects
  ]

  return (
    <Bracket fluid centered padding="small">
      <div className="md:max-w-screen-xl mx-auto">
        <PageHeader title="Portfolio" description="Curated projects from Behance" />
        <div className=" py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <PortfolioCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </Bracket>
  )
}
