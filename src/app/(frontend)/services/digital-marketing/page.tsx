import PageHeader from '@/components/PageHeader'
import Category from '../Catagory'
import { digitalMarketingItems } from '@/data/navigationData'
import {
  FaSearch,
  FaRocket,
  FaFileCode,
  FaPencilAlt,
  FaHashtag,
  FaGoogle,
  FaBullhorn,
  FaEnvelope,
  FaComments,
  FaDollarSign,
  FaChartLine,
  FaClipboardList,
} from 'react-icons/fa'
import CTASection from '@/components/CTASection'
import { Bracket } from '@thirdbracket/bracketui'
import TechStack from '../TechStack'

const digitalMarketingCategory = {
  title: 'Digital Marketing',
  description:
    'We implement data-driven digital marketing strategies to improve visibility, engagement, and conversion rates.',
  illustration: {
    src: '/services/digital.svg',
    alt: 'Digital Marketing Illustration',
  },
  stackIcons: TechStack(['SiGoogleanalytics', 'SiGooglesearchconsole', 'SiWordpress']),
  services: digitalMarketingItems.map((item) => ({
    title: item.label,
    description: getServiceDescription(item.label),
    features: getServiceFeatures(item.label),
    badge: getServiceBadge(item.label),
    icon: getServiceIcon(item.label),
  })),
}

function getServiceDescription(title: string): string {
  const descriptions: Record<string, string> = {
    'Search Engine Optimisation': 'Optimize website technical aspects for better search engine visibility and rankings.',
    'Search Engine Marketing': 'Drive targeted traffic through paid search campaigns and strategic keyword targeting.',
    'Content Marketing': 'Create and distribute valuable content to attract and engage your target audience.',
    ' Affiliate Marketing': 'Build strategic partnerships to expand reach and drive sales through affiliate networks.',
    'Email Marketing': 'Develop targeted email campaigns to nurture leads and maintain customer relationships.',
    'Social Media Marketing': 'Manage and grow your social media presence with strategic content and engagement.',
    'Conversational Marketing': 'Implement chatbots and messaging strategies to engage customers in real-time.',
    'PPC & Advertising': 'Create and manage pay-per-click campaigns across multiple advertising platforms.',
    'Marketing Analytics & Audit': 'Analyze marketing performance and provide actionable insights for optimization.',
    'Marketing Strategy & Planning': 'Develop comprehensive marketing strategies aligned with your business goals.',
  }
  return descriptions[title] || 'Professional digital marketing service to grow your online presence.'
}

function getServiceFeatures(title: string): string[] {
  const features: Record<string, string[]> = {
    'Search Engine Optimisation': ['Technical SEO', 'On-Page Optimization', 'Link Building'],
    'Search Engine Marketing': ['Keyword Research', 'Ad Campaign Management', 'Conversion Tracking'],
    'Content Marketing': ['Content Strategy', 'Blog Writing', 'Content Distribution'],
    ' Affiliate Marketing': ['Partner Recruitment', 'Commission Management', 'Performance Tracking'],
    'Email Marketing': ['Campaign Design', 'List Management', 'Automation Setup'],
    'Social Media Marketing': ['Content Calendar', 'Platform Strategy', 'Community Management'],
    'Conversational Marketing': ['Chatbot Setup', 'Live Chat Integration', 'Customer Support'],
    'PPC & Advertising': ['Campaign Setup', 'Bid Management', 'Performance Optimization'],
    'Marketing Analytics & Audit': ['Performance Analysis', 'Competitive Research', 'ROI Tracking'],
    'Marketing Strategy & Planning': ['Market Research', 'Goal Setting', 'Campaign Planning'],
  }
  return features[title] || ['Strategy Development', 'Performance Tracking', 'ROI Optimization']
}

function getServiceBadge(title: string): string {
  const badges: Record<string, string> = {
    'Search Engine Optimisation': 'SEO',
    'Search Engine Marketing': 'SEM',
    'Content Marketing': 'Content',
    ' Affiliate Marketing': 'Affiliate',
    'Email Marketing': 'Email',
    'Social Media Marketing': 'Social',
    'Conversational Marketing': 'Chat',
    'PPC & Advertising': 'PPC',
    'Marketing Analytics & Audit': 'Analytics',
    'Marketing Strategy & Planning': 'Strategy',
  }
  return badges[title] || 'Marketing'
}

function getServiceIcon(title: string) {
  const icons: Record<string, any> = {
    'Search Engine Optimisation': FaSearch,
    'Search Engine Marketing': FaBullhorn,
    'Content Marketing': FaPencilAlt,
    ' Affiliate Marketing': FaDollarSign,
    'Email Marketing': FaEnvelope,
    'Social Media Marketing': FaHashtag,
    'Conversational Marketing': FaComments,
    'PPC & Advertising': FaRocket,
    'Marketing Analytics & Audit': FaChartLine,
    'Marketing Strategy & Planning': FaClipboardList,
  }
  return icons[title] || FaGoogle
}

export default function DigitalMarketingPage() {
  return (
    <section>
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          <PageHeader
            title="Digital Marketing Services"
            description="Data-driven digital marketing strategies to improve visibility, engagement, and conversion rates."
          />
          
          <Category {...digitalMarketingCategory} index={0} />

          <CTASection
            title="Ready to Grow Your Online Presence?"
            description="Let's implement data-driven marketing strategies that drive real results for your business."
            primary={{
              label: 'Contact Us',
              href: '/contact',
            }}
            secondary={{
              label: 'View All Services',
              href: '/services',
            }}
          />
        </div>
      </Bracket>
    </section>
  )
}