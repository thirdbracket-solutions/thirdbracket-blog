// data/solutions.ts
import { FaWpforms, FaWordpress, FaShopify, FaStripe } from 'react-icons/fa'
import {
  SiNextdotjs,
  SiGithubactions,
  SiNotion,
  SiVercel,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiSupabase,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
} from 'react-icons/si'
import { MdAutorenew, MdBusiness, MdAnalytics, MdShoppingCart } from 'react-icons/md'
import { TbBrandReact } from 'react-icons/tb'
import { SolutionCategory } from './types'

export const solutionCategories: SolutionCategory[] = [
  {
    title: 'Automation & Integration',
    description: 'Streamline your workflows and connect your digital ecosystem',
    solutions: [
      {
        title: 'Form Integration',
        description: 'Seamless form handling and data processing solutions',
        icon: FaWpforms,
        features: [
          'Custom form builders',
          'Data validation',
          'API integration',
          'Automated responses',
          'Analytics tracking',
        ],
        technologies: [
          { title: 'React Hook Form', cto: 'v7' },
          { title: 'Zod', cto: 'Latest' },
          { title: 'REST API', cto: 'v2' },
          { title: 'Webhook', cto: 'Auto' },
        ],
        image: '/solutions/form.svg',
      },
      {
        title: 'Marketing Automation',
        description: 'Automate your marketing workflows and campaigns',
        icon: MdAutorenew,
        features: [
          'Email automation',
          'Social media scheduling',
          'Lead scoring',
          'Campaign tracking',
          'Analytics integration',
        ],
        technologies: [
          { title: 'Resend', cto: 'Latest' },
          { title: 'Mailchimp', cto: 'API v3' },
          { title: 'Zapier', cto: 'Flow' },
          { title: 'Analytics', cto: 'GA4' },
        ],
        image: '/solutions/marketing.svg',
      },
      {
        title: 'CI/CD & Release Automation',
        description: 'Streamline your development and deployment process',
        icon: SiGithubactions,
        features: [
          'Automated testing',
          'Continuous integration',
          'Continuous deployment',
          'Version control',
          'Environment management',
        ],
        technologies: [
          { title: 'GitHub Actions', cto: 'v4' },
          { title: 'Docker', cto: 'Latest' },
          { title: 'Vercel', cto: 'Edge' },
          { title: 'Jest', cto: 'v29' },
        ],
        image: '/solutions/cicd.svg',
      },
    ],
  },
  {
    title: 'UI/UX Solutions',
    description: 'Beautiful and functional user interfaces for modern web applications',
    solutions: [
      {
        title: 'Bracket UI',
        description: 'Our flagship UI component library for React applications',
        icon: TbBrandReact,
        features: [
          'Customizable components',
          'Dark mode support',
          'Responsive design',
          'Accessibility features',
          'Performance optimized',
        ],
        technologies: [
          { title: 'React', cto: '18' },
          { title: 'TypeScript', cto: '5.0' },
          { title: 'Tailwind', cto: '3.0' },
          { title: 'Radix UI', cto: 'v1' },
        ],
        image: '/solutions/bracket.svg',
      },
      {
        title: 'Next.js Themes',
        description: 'Professional themes for Next.js applications',
        icon: SiNextdotjs,
        features: [
          'SEO optimized',
          'Performance first',
          'Modern design',
          'Easy customization',
          'Built-in components',
        ],
        technologies: [
          { title: 'Next.js', cto: '14' },
          { title: 'App Router', cto: 'RSC' },
          { title: 'Server Actions', cto: 'Beta' },
          { title: 'Edge Runtime', cto: 'v2' },
        ],
        image: '/solutions/nextjs.svg',
      },
      {
        title: 'WordPress Solutions',
        description: 'Custom WordPress themes and templates',
        icon: FaWordpress,
        features: [
          'Custom themes',
          'Elementor templates',
          'WooCommerce ready',
          'Performance optimized',
          'SEO friendly',
        ],
        technologies: [
          { title: 'WordPress', cto: '6.4' },
          { title: 'PHP', cto: '8.2' },
          { title: 'Elementor', cto: 'Pro' },
          { title: 'WooCommerce', cto: '8.3' },
        ],
        image: '/solutions/wordpress.svg',
      },
    ],
  },
  {
    title: 'Complete Solutions',
    description: 'End-to-end solutions for your business needs',
    solutions: [
      {
        title: 'E-commerce Platform',
        description: 'Complete e-commerce solution with modern stack',
        icon: MdShoppingCart,
        features: [
          'Product management',
          'Payment integration',
          'Inventory tracking',
          'Order management',
          'Analytics dashboard',
        ],
        technologies: [
          { title: 'Next.js', cto: '14' },
          { title: 'Stripe', cto: 'v2023' },
          { title: 'Prisma', cto: 'ORM' },
          { title: 'PostgreSQL', cto: '15' },
        ],
        image: '/solutions/ecommerce.svg',
      },
      {
        title: 'SaaS Starter',
        description: 'Production-ready SaaS foundation',
        icon: MdBusiness,
        features: [
          'Authentication',
          'Subscription billing',
          'Team management',
          'API integration',
          'Analytics setup',
        ],
        technologies: [
          { title: 'Next Auth', cto: 'v5' },
          { title: 'Stripe', cto: 'Billing' },
          { title: 'tRPC', cto: 'v11' },
          { title: 'Supabase', cto: 'Edge' },
        ],
        image: '/solutions/saas.svg',
      },
      {
        title: 'Headless CMS',
        description: 'Modern content management system',
        icon: SiNotion,
        features: [
          'Content modeling',
          'API-first',
          'Multi-language',
          'Media management',
          'Workflow automation',
        ],
        technologies: [
          { title: 'Payload CMS', cto: 'v2' },
          { title: 'MongoDB', cto: 'Atlas' },
          { title: 'GraphQL', cto: 'API' },
          { title: 'S3', cto: 'Storage' },
        ],
        image: '/solutions/cms.svg',
      },
    ],
  },
]
