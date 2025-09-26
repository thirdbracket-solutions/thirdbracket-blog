import { Bracket } from '@thirdbracket/bracketui'
import PageHeader from '../../../components/PageHeader'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio',
}

function PortfolioCard({ title, behanceId }: { title: string; behanceId: string }) {
  return (
    <div className="border border-primary-200 dark:border-primary-800 rounded-lg overflow-hidden">
      {/* Behance Embed */}
      <div className="aspect-video w-full overflow-hidden   p-4">
        <iframe
          src={`https://www.behance.net/embed/project/${behanceId}?ilo0=1`}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          allowFullScreen
        />
      </div>
      <div className="px-4 pb-4 ">
        <Link href={`https://www.behance.net/embed/project/${behanceId}?ilo0=1`}>
          {' '}
          <h3 className="text-xl font-semibold">{title}</h3>
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
    <Bracket>
      <PageHeader title="Portfolio" description="Curated projects from Behance" />
      <div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
      </div>
    </Bracket>
  )
}
