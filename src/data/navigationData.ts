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
  text: 'text-primary-900 dark:text-primary-50',
  states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
}

const desktopNavlinkTheme = {
  text: 'text-primary-900 dark:text-primary-50',
  states:
    'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
}

const megamenuTheme = {
  text: 'text-primary-900 dark:text-primary-50 text-base md:text-sm',
  states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
  menu: 'bg-white dark:bg-black',
}

const mobileMegamenuTheme = {
  text: 'text-primary-900 dark:text-primary-50 text-base md:text-sm',
  states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
  menu: 'bg-gradient-primary-dark dark:bg-gradient-primary',
}

// Define navigation data
export const mainNavItems: NavlinkItem[] = [
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/posts' },
  { label: 'Contact', href: '/contact' },
]

// Services section
export const webDevelopmentItems: NavlinkItem[] = [
  { label: 'Next.js Development', href: '/services', isDropdownItem: true },
  { label: 'WordPress Development', href: '/services', isDropdownItem: true },
  { label: 'Headless Integration', href: '/services', isDropdownItem: true },
  { label: 'Performance Optimization', href: '/services', isDropdownItem: true },
  { label: 'Migration & Modernization', href: '/services', isDropdownItem: true },
  { label: 'Feature Development & API Integrations', href: '/services', isDropdownItem: true },
]

export const uiUxDesignItems: NavlinkItem[] = [
  { label: 'Landing Page Design', href: '/services', isDropdownItem: true },
  { label: 'Website Interface Design', href: '/services', isDropdownItem: true },
  { label: 'Vector Design', href: '/services', isDropdownItem: true },
  { label: 'Component-Based UI Setup', href: '/services', isDropdownItem: true },
  { label: 'Website Redesign', href: '/services', isDropdownItem: true },
  { label: 'Design System Development', href: '/services', isDropdownItem: true },
  { label: 'UX Strategy & Wireframing', href: '/services', isDropdownItem: true },
  { label: 'Social Media Design', href: '/services', isDropdownItem: true },
]

export const digitalMarketingItems: NavlinkItem[] = [
  { label: 'Technical SEO Optimization', href: '/services', isDropdownItem: true },
  { label: 'Website Performance Optimization', href: '/services', isDropdownItem: true },
  { label: 'SEO-Ready Website Builds', href: '/services', isDropdownItem: true },
  { label: 'Conversion Optimization', href: '/services', isDropdownItem: true },
  { label: 'Content Writing', href: '/services', isDropdownItem: true },
  { label: 'Social Media Management', href: '/services', isDropdownItem: true },
  { label: 'Google Services Integration', href: '/services', isDropdownItem: true },
  { label: 'SEO & Web Visibility', href: '/services', isDropdownItem: true },
  { label: 'Branding & Design', href: '/services', isDropdownItem: true },
  { label: 'Social Media Marketing', href: '/services', isDropdownItem: true },
  { label: 'PPC & Social Ad', href: '/services', isDropdownItem: true },
  { label: 'Content strategy & Copywriting', href: '/services', isDropdownItem: true },
  { label: 'Other Digital Marketing Services', href: '/services', isDropdownItem: true },
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
export const getNavlinkTheme = (isMobile: boolean = false, isDropdown: boolean = false) => {
  return isMobile ? defaultNavlinkTheme : desktopNavlinkTheme
}
