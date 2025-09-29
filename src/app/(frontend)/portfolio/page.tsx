import { Bracket } from '@thirdbracket/bracketui'
import PageHeader from '../../../components/PageHeader'
import { Metadata } from 'next'
import Link from 'next/link'
import { PiArrowUpRight } from 'react-icons/pi'
import { SiGithub } from 'react-icons/si'
import { RiDribbbleLine, RiGithubLine } from 'react-icons/ri'
import { FaGlobe } from 'react-icons/fa'
import { LuGlobe } from 'react-icons/lu'

export const metadata: Metadata = {
  title: 'Portfolio',
}

function PortfolioCard({
  title,
  behanceId,
  github,
  dribble,
  website,
}: {
  title: string
  behanceId: string
  github: string
  dribble: string
  website: string
}) {
  return (
    <div className="border border-primary-200 dark:border-primary-800 rounded-lg overflow-hidden p-4 md:p-6">
      {/* Behance Embed */}
      <div className="text-primary-900 dark:text-primary-50 text-lg sm:text-xl md:text-2xl mb-3 md:mb-4">
        <Link
          className="flex items-center justify-between"
          href={`https://www.behance.net/embed/project/${behanceId}?ilo0=1`}
        >
          <h3 className="font-semibold leading-tight ">{title}</h3>
        </Link>
      </div>
      <div className="relative w-full h-[300px] max-w-screen-md  mx-auto ">
        <iframe
          src={`https://www.behance.net/embed/project/${behanceId}?ilo0=1`}
          loading="lazy"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          className="block w-full h-full border-none overflow-hidden "
          scrolling="no"
        ></iframe>

        {/* The Overlay Div */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-primary-950/40 via-primary-950/20 to-primary-950/0 rounded-b-lg" />
      </div>
      <div className="flex items-center justify-between mt-4 text-primary-800 dark:text-primary-200">
        <div className="flex items-center justify-center gap-4  text-lg">
          <Link href={`${github}`}>
            <RiGithubLine />
          </Link>
          <Link href={`${dribble}`}>
            <RiDribbbleLine />
          </Link>
          <Link href={`${website}`}>
            <LuGlobe />
          </Link>
        </div>
        <PiArrowUpRight size={24} />
      </div>
    </div>
  )
}

export default function Portfolio() {
  const projects = [
    {
      title: 'HealSpace - Wellness Marketplace Platform',
      behanceId: '235448997',
      github: '#',
      dribble: '#',
      website: '#',
    },
    {
      title: 'Digital Agency - Third Bracket',
      behanceId: '235532307',
      github: '#',
      dribble: '#',
      website: '#',
    },

    // Add more projects
  ]

  return (
    <Bracket fluid centered padding="small">
      <div className="md:max-w-screen-xl mx-auto">
        <PageHeader title="Portfolio" description="Curated projects from Behance" />
        <div className=" py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <PortfolioCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </Bracket>
  )
}
