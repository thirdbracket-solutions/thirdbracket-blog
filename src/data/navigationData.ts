import { ReactNode } from 'react'

// Define types for our navigation structure
export interface NavlinkItem {
  label: string
  href: string
  isDropdownItem?: boolean
  cto?: boolean
  icon?: ReactNode
}

export interface MegamenuItem {
  label: string
  items: (NavlinkItem | MegamenuItem)[]
  theme?: {
    text?: string
    states?: string
    menu?: string
  }
}

export interface NavigationSection {
  label: string
  items: (NavlinkItem | MegamenuItem)[]
  theme?: {
    text?: string
    states?: string
    menu?: string
  }
}

// Common theme styles
const defaultNavlinkTheme = {
  text: 'text-black  dark:text-white',
  states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
}

const desktopNavlinkTheme = {
  text: 'text-primary-900 dark:text-primary-50',
  states:
    'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
}

// Unused but kept for reference - prefix with underscore to satisfy ESLint
const _megamenuTheme = {
  text: 'text-primary-900 dark:text-primary-50 text-base md:text-sm',
  states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
  menu: 'bg-white dark:bg-black',
}

const mobileMegamenuTheme = {
  text: 'text-black dark:white text-base md:text-sm',
  states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
  menu: 'bg-gradient-primary-dark dark:bg-gradient-primary',
}

// Define navigation data
export const mainNavItems: NavlinkItem[] = [
  { label: 'Portfolios', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/posts' },
  { label: 'Contact', href: '/contact' },
]

// Services section
export const webDevelopmentItems: NavlinkItem[] = [
  { label: 'Next.js Development', href: '/services/web-development#nextjs-development', isDropdownItem: true },
  { label: 'WordPress Development', href: '/services/web-development#wordpress-development', isDropdownItem: true },
  { label: 'E-commerce Development', href: '/services/web-development#e-commerce-development', isDropdownItem: true },
  { label: 'Custom Admin Panel', href: '/services/web-development#custom-admin-panel', isDropdownItem: true },
  { label: 'CRM Integration', href: '/services/web-development#crm-integration', isDropdownItem: true },
  { label: 'Analytics & Tracking Integration', href: '/services/web-development#analytics-tracking-integration', isDropdownItem: true },
  { label: 'VPS Setup', href: '/services/web-development#vps-setup', isDropdownItem: true },

  { label: 'Performance Optimization', href: '/services/web-development#performance-optimization', isDropdownItem: true },
  { label: 'Migration & Modernization', href: '/services/web-development#migration-modernization', isDropdownItem: true },
  { label: 'Blog Development', href: '/services/web-development#blog-development', isDropdownItem: true },
]

export const uiUxDesignItems: NavlinkItem[] = [
  { label: 'UI/UX Design', href: '/services/ui-ux-design#ui-ux-design', isDropdownItem: true },
  { label: 'Website Design', href: '/services/ui-ux-design#website-design', isDropdownItem: true },
  { label: 'Website Redesign', href: '/services/ui-ux-design#website-redesign', isDropdownItem: true },
  { label: 'Social Media Design', href: '/services/ui-ux-design#social-media-design', isDropdownItem: true },
  { label: 'Branding', href: '/services/ui-ux-design#branding', isDropdownItem: true },
  { label: 'Design System Development', href: '/services/ui-ux-design#design-system-development', isDropdownItem: true },
  { label: 'Graphic Design', href: '/services/ui-ux-design#graphic-design', isDropdownItem: true },
  { label: 'Elementor Template Design', href: '/services/ui-ux-design#elementor-template-design', isDropdownItem: true },
  { label: 'Printable Design', href: '/services/ui-ux-design#printable-design', isDropdownItem: true },
  { label: 'Wireframe & Prototype', href: '/services/ui-ux-design#wireframe-prototype', isDropdownItem: true },
]

export const digitalMarketingItems: NavlinkItem[] = [
  { label: 'Search Engine Optimisation', href: '/services/digital-marketing#search-engine-optimisation', isDropdownItem: true },
  { label: 'Search Engine Marketing', href: '/services/digital-marketing#search-engine-marketing', isDropdownItem: true },
  { label: 'Content Marketing', href: '/services/digital-marketing#content-marketing', isDropdownItem: true },
  { label: ' Affiliate Marketing', href: '/services/digital-marketing#affiliate-marketing', isDropdownItem: true },
  { label: 'Email Marketing', href: '/services/digital-marketing#email-marketing', isDropdownItem: true },
  { label: 'Social Media Marketing', href: '/services/digital-marketing#social-media-marketing', isDropdownItem: true },
  { label: 'Conversational Marketing', href: '/services/digital-marketing#conversational-marketing', isDropdownItem: true },
  { label: 'PPC & Advertising', href: '/services/digital-marketing#ppc-advertising', isDropdownItem: true },
  { label: 'Marketing Analytics & Audit', href: '/services/digital-marketing#marketing-analytics-audit', isDropdownItem: true },
  { label: 'Marketing Strategy & Planning', href: '/services/digital-marketing#marketing-strategy-planning', isDropdownItem: true },
]

export const servicesItems: (NavlinkItem | MegamenuItem)[] = [
  { label: 'Web Development', href: '/services', cto: true },
  { label: 'UI/UX Design', href: '/services', cto: true },
  { label: 'Digital Marketing', href: '/services', cto: true },
  { label: 'UI/UX Design & Prototyping', href: '/services', isDropdownItem: true },
  { label: 'Performance Optimization', href: '/services', isDropdownItem: true },
  { label: 'Other Services', href: '/services', isDropdownItem: true },
]

// Solutions section
export const uiUxSolutionsItems: NavlinkItem[] = [
  { label: 'UI Blocks', href: '/solutions', isDropdownItem: true },
  { label: 'Component Library', href: '/solutions', isDropdownItem: true },
  { label: 'Design 360', href: '/solutions', isDropdownItem: true },
  { label: 'Landing Page', href: '/solutions', isDropdownItem: true },
  { label: 'Starter Templates', href: '/solutions', isDropdownItem: true },
]

export const businessSolutionsItems: NavlinkItem[] = [
  { label: 'Google 360', href: '/solutions', isDropdownItem: true },
  { label: 'Facebook 360', href: '/solutions', isDropdownItem: true },
  { label: 'Growth 360', href: '/solutions', isDropdownItem: true },
  // { label: 'Business Strategy', href: '/solutions', isDropdownItem: true },
  // { label: 'Business Strategy Setup', href: '/solutions', isDropdownItem: true },
  // { label: 'Enterprise 360', href: '/solutions', isDropdownItem: true },
]

export const infrastructureSolutionsItems: NavlinkItem[] = [
  { label: 'Next.js', href: '/solutions', isDropdownItem: true },
  { label: 'WordPress', href: '/solutions', isDropdownItem: true },
  { label: 'Blog 360', href: '/solutions', isDropdownItem: true },
  { label: 'Ecommerce 360', href: '/solutions', isDropdownItem: true },
]

// Solutions megamenu items
export const nextjsSolutionsItems: NavlinkItem[] = [
  { label: 'Multi-Tenant SaaS', href: '/solutions/nextjs-solutions#multi-tenant-saas', isDropdownItem: true },
  { label: 'Headless CMS', href: '/solutions/nextjs-solutions#headless-cms', isDropdownItem: true },
  { label: 'Headless E-Commerce', href: '/solutions/nextjs-solutions#headless-e-commerce', isDropdownItem: true },
  { label: 'Admin Panel/Dashboard', href: '/solutions/nextjs-solutions#admin-panel-dashboard', isDropdownItem: true },
  { label: 'LMS Solution', href: '/solutions/nextjs-solutions#lms-solution', isDropdownItem: true },
  { label: 'Blog/Publishing System', href: '/solutions/nextjs-solutions#blog-publishing-system', isDropdownItem: true },
  { label: 'Migration', href: '/solutions/nextjs-solutions#migration', isDropdownItem: true },
  { label: 'Notion Development', href: '/solutions/nextjs-solutions#notion-development', isDropdownItem: true },
  { label: 'Digital Asset Management', href: '/solutions/nextjs-solutions#digital-asset-management', isDropdownItem: true },
  { label: 'Project Management Tool', href: '/solutions/nextjs-solutions#project-management-tool', isDropdownItem: true },
]

export const wordpressSolutionsItems: NavlinkItem[] = [
  { label: 'Rapid Fast WordPress', href: '/solutions/wordpress-solutions#rapid-fast-wordpress', isDropdownItem: true },
  { label: 'Cloud Migration', href: '/solutions/wordpress-solutions#cloud-migration', isDropdownItem: true },
  { label: 'Headless WordPress', href: '/solutions/wordpress-solutions#headless-wordpress', isDropdownItem: true },
  { label: 'Performant WooCommerce', href: '/solutions/wordpress-solutions#performant-woocommerce', isDropdownItem: true },
  { label: 'ACM', href: '/solutions/wordpress-solutions#acm', isDropdownItem: true },
  { label: 'Elementor Templates', href: '/solutions/wordpress-solutions#elementor-templates', isDropdownItem: true },
  { label: 'Enterprise Wordpress', href: '/solutions/wordpress-solutions#enterprise-wordpress', isDropdownItem: true },
  { label: 'Wordpress Multisite', href: '/solutions/wordpress-solutions#wordpress-multisite', isDropdownItem: true },
  { label: 'LMS Solution', href: '/solutions/wordpress-solutions#lms-solution', isDropdownItem: true },
  { label: 'Listing Platform', href: '/solutions/wordpress-solutions#listing-platform', isDropdownItem: true },
  { label: 'Revamp Wordpress', href: '/solutions/wordpress-solutions#revamp-wordpress', isDropdownItem: true },
]

export const openSourceSolutionsItems: NavlinkItem[] = [
  { label: 'BracketUI', href: '/solutions/open-source-solutions#bracketui', isDropdownItem: true },
  { label: 'Tailwind Template', href: '/solutions/open-source-solutions#tailwind-template', isDropdownItem: true },
  { label: 'Blog Template', href: '/solutions/open-source-solutions#blog-template', isDropdownItem: true },
  { label: 'Jamstack Theme', href: '/solutions/open-source-solutions#jamstack-theme', isDropdownItem: true },
  { label: 'Hugo Theme', href: '/solutions/open-source-solutions#hugo-theme', isDropdownItem: true },
  { label: 'Next.js Theme', href: '/solutions/open-source-solutions#nextjs-theme', isDropdownItem: true },
  { label: 'Html Template', href: '/solutions/open-source-solutions#html-template', isDropdownItem: true },
  { label: 'Flowbite Starter', href: '/solutions/open-source-solutions#flowbite-starter', isDropdownItem: true },
  { label: 'Automation Script', href: '/solutions/open-source-solutions#automation-script', isDropdownItem: true },
]

export const automationIntegrationItems: NavlinkItem[] = [
  { label: 'Form Integration', href: '/solutions', isDropdownItem: true },
  { label: 'Marketing Automation', href: '/solutions', isDropdownItem: true },
  { label: 'Search Integration', href: '/solutions', isDropdownItem: true },
  { label: 'Interntionalization', href: '/solutions', isDropdownItem: true },
  { label: 'CI/CD', href: '/solutions', isDropdownItem: true },
  { label: 'Release Automation', href: '/solutions', isDropdownItem: true },
]

export const templateItems: NavlinkItem[] = [
  { label: 'Elementor Template', href: '/solutions', isDropdownItem: true },
  { label: 'Tailwind Template', href: '/solutions', isDropdownItem: true },
  { label: 'Html5 Template', href: '/solutions', isDropdownItem: true },
]

export const themeItems: NavlinkItem[] = [
  { label: 'Nextjs Themes', href: '/solutions', isDropdownItem: true },
  { label: 'Hugo Themes', href: '/solutions', isDropdownItem: true },
  { label: 'Wordpress Theme', href: '/solutions', isDropdownItem: true },
]

export const uiUxMegamenuItems: MegamenuItem[] = [
  {
    label: 'Bracket UI',
    items: [
      { label: 'Reusable Blocks', href: '/solutions', isDropdownItem: true },
      { label: 'Landing Pages', href: '/solutions', isDropdownItem: true },
    ],
  },
  {
    label: 'Templates',
    theme: {
      text: 'text-primary-900 dark:text-primary-50 text-base md:text-sm',
      states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
      menu: 'bg-white dark:bg-primary-950',
    },
    items: templateItems,
  },
  {
    label: 'Themes',
    items: themeItems,
  },
]

export const solutionsItems: (NavlinkItem | MegamenuItem)[] = [
  { label: 'UI/UX Solutions', href: '/solutions', cto: true },
  { label: 'Business Solutions', href: '/solutions', cto: true },
  { label: 'Infrastructure Solutions', href: '/solutions', cto: true },
  // { label: 'Wordpress 360', href: '/solutions', isDropdownItem: true },
  // { label: 'Notion Blog', href: '/solutions', isDropdownItem: true },
  // { label: 'Business 360', href: '/solutions', isDropdownItem: true },
]

// Navigation structure for desktop and mobile
export const desktopNavigation: NavigationSection[] = [
  {
    label: 'Solutions',
    theme: {
      text: 'text-primary-900 dark:text-primary-50 text-base md:text-sm',
      states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
      menu: 'bg-white dark:bg-black',
    },
    items: solutionsItems,
  },
  {
    label: 'Services',
    theme: {
      text: 'text-primary-900 dark:text-primary-50 text-base md:text-sm',
      states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
      menu: 'bg-white dark:bg-black',
    },
    items: servicesItems,
  },
]

export const mobileNavigation: NavigationSection[] = [
  {
    label: 'Solutions',
    theme: mobileMegamenuTheme,
    items: [
      {
        label: 'Web Infrastructures',
        theme: mobileMegamenuTheme,
        items: infrastructureSolutionsItems,
      },
      {
        label: 'UI/UX',
        theme: mobileMegamenuTheme,
        items: uiUxSolutionsItems,
      },
      {
        label: 'Digital Marketing',
        theme: mobileMegamenuTheme,
        items: businessSolutionsItems,
      },
    ],
  },
  {
    label: 'Services',
    theme: mobileMegamenuTheme,
    items: [
      {
        label: 'Web Development',
        theme: mobileMegamenuTheme,
        items: webDevelopmentItems,
      },
      {
        label: 'UI/UX Design',
        theme: mobileMegamenuTheme,
        items: uiUxDesignItems,
      },
      {
        label: 'Digital Marketing',
        theme: mobileMegamenuTheme,
        items: digitalMarketingItems,
      },
    ],
  },
]

// Helper function to render navlinks with consistent theme
export const getNavlinkTheme = (isMobile: boolean = false, _isDropdown: boolean = false) => {
  return isMobile ? defaultNavlinkTheme : desktopNavlinkTheme
}
