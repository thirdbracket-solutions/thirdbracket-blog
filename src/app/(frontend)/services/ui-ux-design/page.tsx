import PageHeader from '@/components/PageHeader'
import Category from '../Catagory'
import { uiUxDesignItems } from '@/data/navigationData'
import {
  FaPaintBrush,
  FaDesktop,
  FaVectorSquare,
  FaCubes,
  FaSyncAlt,
  FaLightbulb,
  FaPalette,
  FaMobile,
  FaPrint,
  FaDrawPolygon,
} from 'react-icons/fa'
import CTASection from '@/components/CTASection'
import { Bracket } from '@thirdbracket/bracketui'
import TechStack from '../TechStack'

const uiUxDesignCategory = {
  title: 'UI/UX Design',
  description:
    'We create intuitive and engaging user interfaces that balance aesthetic appeal with functional design principles.',
  illustration: {
    src: '/services/ui.svg',
    alt: 'UI/UX Design Illustration',
  },
  stackIcons: TechStack(['SiTailwindcss', 'SiFigma', 'SiAdobeillustrator', 'SiFramer']),
  services: uiUxDesignItems.map((item) => ({
    title: item.label,
    description: getServiceDescription(item.label),
    features: getServiceFeatures(item.label),
    badge: getServiceBadge(item.label),
    icon: getServiceIcon(item.label),
  })),
}

function getServiceDescription(title: string): string {
  const descriptions: Record<string, string> = {
    'UI/UX Design': 'Create user-centered designs that enhance usability and drive engagement.',
    'Website Design': 'Design modern, responsive websites that reflect your brand identity.',
    'Website Redesign':
      'Modernize existing websites with contemporary design patterns and best practices.',
    'Social Media Design':
      'Create engaging visual content for social media platforms and campaigns.',
    Branding:
      'Develop comprehensive brand identities including logos, colors, and visual guidelines.',
    'Design System Development':
      'Build scalable design systems with reusable components and patterns.',
    'Graphic Design': 'Create compelling visual designs for print and digital media.',
    'Elementor Template Design': 'Design custom Elementor templates for WordPress websites.',
    'Printable Design':
      'Design materials for print including brochures, business cards, and marketing materials.',
    'Wireframe & Prototype':
      'Create detailed wireframes and interactive prototypes for user testing.',
  }
  return descriptions[title] || 'Professional design service tailored to your brand needs.'
}

function getServiceFeatures(title: string): string[] {
  const features: Record<string, string[]> = {
    'UI/UX Design': ['User Research', 'Interface Design', 'Usability Testing'],
    'Website Design': ['Responsive Design', 'Brand Integration', 'User Experience'],
    'Website Redesign': ['UI Modernization', 'UX Enhancement', 'Visual Refresh'],
    'Social Media Design': ['Platform Optimization', 'Brand Consistency', 'Engagement Focus'],
    Branding: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
    'Design System Development': ['Component Library', 'Style Guide', 'Design Tokens'],
    'Graphic Design': ['Visual Communication', 'Brand Alignment', 'Creative Solutions'],
    'Elementor Template Design': [
      'WordPress Integration',
      'Responsive Templates',
      'Custom Layouts',
    ],
    'Printable Design': ['Print Optimization', 'High Resolution', 'Brand Consistency'],
    'Wireframe & Prototype': ['User Flow', 'Interactive Prototypes', 'Design Validation'],
  }
  return features[title] || ['Creative Design', 'Brand Focus', 'User-Centered']
}

function getServiceBadge(title: string): string {
  const badges: Record<string, string> = {
    'UI/UX Design': 'UX',
    'Website Design': 'Web Design',
    'Website Redesign': 'Redesign',
    'Social Media Design': 'Social',
    Branding: 'Brand',
    'Design System Development': 'System',
    'Graphic Design': 'Graphics',
    'Elementor Template Design': 'Template',
    'Printable Design': 'Print',
    'Wireframe & Prototype': 'Prototype',
  }
  return badges[title] || 'Design'
}

function getServiceIcon(title: string) {
  const icons: Record<string, any> = {
    'UI/UX Design': FaLightbulb,
    'Website Design': FaDesktop,
    'Website Redesign': FaSyncAlt,
    'Social Media Design': FaPalette,
    Branding: FaPaintBrush,
    'Design System Development': FaCubes,
    'Graphic Design': FaVectorSquare,
    'Elementor Template Design': FaMobile,
    'Printable Design': FaPrint,
    'Wireframe & Prototype': FaDrawPolygon,
  }
  return icons[title] || FaPaintBrush
}

export default function UIUXDesignPage() {
  return (
    <section>
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          <PageHeader
            title="UI/UX Design Services"
            description="Create intuitive and engaging user interfaces that balance aesthetic appeal with functional design principles."
          />

          <Category {...uiUxDesignCategory} index={0} />

          <CTASection
            cover={{
              src: '/designcto.svg',
              alt: 'Bracket UI Cover',
              width: 500,
              height: 500,
            }}
            title="Ready to Transform Your Design?"
            description="Let's create beautiful, user-centered designs that enhance your brand and drive engagement."
            primary={{
              label: 'Contact Us',
              href: '/contact',
            }}
            secondary={{
              label: 'Other Services',
              href: '/services',
            }}
          />
        </div>
      </Bracket>
    </section>
  )
}
