import PageHeader from '@/components/PageHeader'
import Category from '../Catagory'
import { webDevelopmentItems } from '@/data/navigationData'
import { SiNextdotjs, SiWordpress } from 'react-icons/si'
import {
  FaCode,
  FaExchangeAlt,
  FaServer,
  FaTachometerAlt,
  FaDatabase,
  FaShoppingCart,
  FaCog,
  FaChartLine,
  FaBlog,
} from 'react-icons/fa'
import CTASection from '@/components/CTASection'
import { Bracket } from '@thirdbracket/bracketui'
import TechStack from '../TechStack'

const webDevelopmentCategory = {
  title: 'Web Development',
  description:
    'We build modern, high-performance web solutions using cutting-edge technologies with a focus on scalability and maintainability.',
  illustration: {
    src: '/services/web.svg',
    alt: 'Web Development Illustration',
  },
  stackIcons: TechStack(['SiNextdotjs', 'SiReact', 'SiTypescript', 'SiNodedotjs', 'SiVercel']),
  services: webDevelopmentItems.map((item) => ({
    title: item.label,
    description: getServiceDescription(item.label),
    features: getServiceFeatures(item.label),
    badge: getServiceBadge(item.label),
    icon: getServiceIcon(item.label),
  })),
}

function getServiceDescription(title: string): string {
  const descriptions: Record<string, string> = {
    'Next.js Development': 'Build modern web applications with React and server components for optimal performance.',
    'WordPress Development': 'Custom WordPress solutions with modern development practices and optimizations.',
    'E-commerce Development': 'Build powerful online stores with modern e-commerce platforms and payment integrations.',
    'Custom Admin Panel': 'Create tailored admin dashboards for content and data management.',
    'CRM Integration': 'Integrate customer relationship management systems with your web applications.',
    'Analytics & Tracking Integration': 'Implement comprehensive analytics and tracking solutions for data-driven insights.',
    'VPS Setup': 'Configure and optimize virtual private servers for your web applications.',
    'Performance Optimization': 'Optimize web applications for speed, SEO, and user experience.',
    'Migration & Modernization': 'Upgrade legacy systems to modern technology stacks with minimal disruption.',
    'Blog Development': 'Create engaging blog platforms with modern CMS and publishing workflows.',
  }
  return descriptions[title] || 'Professional web development service tailored to your needs.'
}

function getServiceFeatures(title: string): string[] {
  const features: Record<string, string[]> = {
    'Next.js Development': ['App Router', 'Server Components', 'Edge Runtime'],
    'WordPress Development': ['Custom Themes', 'Plugin Development', 'Performance Tuning'],
    'E-commerce Development': ['Payment Integration', 'Inventory Management', 'Order Processing'],
    'Custom Admin Panel': ['User Management', 'Content Management', 'Analytics Dashboard'],
    'CRM Integration': ['Lead Management', 'Customer Tracking', 'Sales Pipeline'],
    'Analytics & Tracking Integration': ['Google Analytics', 'Conversion Tracking', 'Performance Metrics'],
    'VPS Setup': ['Server Configuration', 'Security Setup', 'Performance Optimization'],
    'Performance Optimization': ['Core Web Vitals', 'Caching Strategy', 'Asset Optimization'],
    'Migration & Modernization': ['Code Refactoring', 'Platform Migration', 'Tech Stack Updates'],
    'Blog Development': ['Content Management', 'SEO Optimization', 'Social Integration'],
  }
  return features[title] || ['Custom Development', 'Best Practices', 'Quality Assurance']
}

function getServiceBadge(title: string): string {
  const badges: Record<string, string> = {
    'Next.js Development': 'Frontend',
    'WordPress Development': 'CMS',
    'E-commerce Development': 'E-commerce',
    'Custom Admin Panel': 'Backend',
    'CRM Integration': 'Integration',
    'Analytics & Tracking Integration': 'Analytics',
    'VPS Setup': 'Infrastructure',
    'Performance Optimization': 'Performance',
    'Migration & Modernization': 'Migration',
    'Blog Development': 'Content',
  }
  return badges[title] || 'Development'
}

function getServiceIcon(title: string) {
  const icons: Record<string, any> = {
    'Next.js Development': SiNextdotjs,
    'WordPress Development': SiWordpress,
    'E-commerce Development': FaShoppingCart,
    'Custom Admin Panel': FaDatabase,
    'CRM Integration': FaCog,
    'Analytics & Tracking Integration': FaChartLine,
    'VPS Setup': FaServer,
    'Performance Optimization': FaTachometerAlt,
    'Migration & Modernization': FaExchangeAlt,
    'Blog Development': FaBlog,
  }
  return icons[title] || FaCode
}

export default function WebDevelopmentPage() {
  return (
    <section>
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          <PageHeader
            title="Web Development Services"
            description="Modern web development solutions using cutting-edge technologies for scalable and maintainable applications."
          />
          
          <Category {...webDevelopmentCategory} index={0} />

          <CTASection
            title="Ready to Build Your Web Application?"
            description="Let's create a modern, high-performance web solution tailored to your business needs."
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