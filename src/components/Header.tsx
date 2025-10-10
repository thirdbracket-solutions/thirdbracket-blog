import {
  Bracket,
  Megamenu,
  MobileNav,
  Navbar,
  Navbrand,
  NavItem,
  Navlink,
} from '@thirdbracket/bracketui'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { BiArrowToRight, BiChevronRight, BiRightArrow } from 'react-icons/bi'
// import { MdSearch } from 'react-icons/md'
import { Logo } from './Logo/Logo'
import {
  NavlinkItem,
  MegamenuItem,
  mainNavItems,
  webDevelopmentItems,
  uiUxDesignItems,
  digitalMarketingItems,
  nextjsSolutionsItems,
  wordpressSolutionsItems,
  openSourceSolutionsItems,
  getNavlinkTheme,
} from '../data/navigationData'

import { MegamenuProps } from '@thirdbracket/bracketui'
import { FaArrowRight } from 'react-icons/fa'
import { RiArrowRightLine } from 'react-icons/ri'

interface MyMegamenuProp extends Omit<MegamenuProps, 'label'> {
  label: React.ReactNode
}

const Header: FC = () => {
  // Helper function to render a navlink
  const renderNavlink = (item: NavlinkItem, isMobile: boolean = false) => {
    const theme = getNavlinkTheme(isMobile, item.isDropdownItem)

    return (
      <Navlink
        key={`${item.label}-${item.href}`}
        theme={theme}
        as={Link}
        href={item.href}
        isDropdownItem={item.isDropdownItem}
        cto={item.cto}
        className={item.icon ? 'block md:inline-flex md:items-center gap-1 ' : undefined}
      >
        {item.label}
        {item.icon && <span>{item.icon}</span>}
      </Navlink>
    )
  }

  // Note: This function is currently not used but kept for future reference
  // If you need to use it later, remove the underscore prefix
  const _renderMegamenuItems = (
    items: (NavlinkItem | MegamenuItem)[],
    isMobile: boolean = true,
    // props: MyMegamenuProp
  ) => {
    return items.map((item) => {
      if ('items' in item) {
        // This is a megamenu item
        return (
          <Megamenu
            key={item.label}
            //  {...(props as MegamenuProps & {label:any})}
            label={item.label}
            theme={
              item.theme ||
              (isMobile
                ? {
                    text: 'text-primary-900 dark:text-primary-200 text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-white dark:bg-black',
                  }
                : {
                    text: 'text-primary-900 dark:text-primary-200 text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-white dark:bg-black',
                  })
            }
          >
            <div className="space-y-2 py-1.5">{_renderMegamenuItems(item.items, isMobile)}</div>
          </Megamenu>
        )
      } else {
        // This is a navlink item
        return renderNavlink(item, isMobile)
      }
    })
  }

  return (
    <header>
      <Navbar
        theme={{
          background: 'bg-white dark:bg-black ',
          border: 'border-b border-primary-500/30',
          mobileMenu: 'bg-white dark:bg-black',
        }}
      >
        <Navbrand logo={<Logo />} href="/"></Navbrand>

        <NavItem>
          {/* Services Megamenu */}
          <Megamenu
            label="Services"
            theme={{
              text: 'text-primary-900 dark:text-primary-50  text-base md:text-sm',
              states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
              menu: 'bg-white dark:bg-black',
            }}
          >
            <div className="grid w-full grid-flow-col gap-x-8 lg:grid-cols-[300px_repeat(3,1fr)_280px] grid-cols-[300px_repeat(3,1fr)] py-1.5">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xs font-medium text-primary-500 dark:text-primary-500 mb-3">Our Services</h3>
                </div>
                <div className="flex flex-col space-y-2">
                  <Navlink
                    theme={{
                      text: 'text-primary-900 dark:text-primary-50',
                      states: 'focus-within:opacity-100 active:opacity-100 [@media(hover:hover)]:hover:opacity-100',
                    }}
                    href="/services"
                    as={Link}
                    isDropdownItem
                  >
                    <div className="p-3 bg-secondary-50/50 dark:bg-secondary-900/50 border border-primary-500/20 rounded-lg">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium">Development</span>
                        <BiChevronRight size={16} />
                      </div>
                      <div className="text-xs mt-1 text-primary-600 dark:text-primary-400">
                        Next.js, WordPress, Custom Solutions
                      </div>
                    </div>
                  </Navlink>
                  <Navlink
                    theme={{
                      text: 'text-primary-900 dark:text-primary-50',
                      states: 'focus-within:opacity-100 active:opacity-100 [@media(hover:hover)]:hover:opacity-100',
                    }}
                    href="/services"
                    as={Link}
                    isDropdownItem
                  >
                    <div className="p-3 bg-secondary-50/50 dark:bg-secondary-900/50 border border-primary-500/20 rounded-lg">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium">Design</span>
                        <BiChevronRight size={16} />
                      </div>
                      <div className="text-xs mt-1 text-primary-600 dark:text-primary-400">
                        UI/UX, Branding, Web Design
                      </div>
                    </div>
                  </Navlink>
                  <Navlink
                    theme={{
                      text: 'text-primary-900 dark:text-primary-50',
                      states: 'focus-within:opacity-100 active:opacity-100 [@media(hover:hover)]:hover:opacity-100',
                    }}
                    href="/services"
                    as={Link}
                    isDropdownItem
                  >
                    <div className="p-3 bg-secondary-50/50 dark:bg-secondary-900/50 border border-primary-500/20 rounded-lg">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium">Marketing</span>
                        <BiChevronRight size={16} />
                      </div>
                      <div className="text-xs mt-1 text-primary-600 dark:text-primary-400">
                        SEO, Content, Digital Campaigns
                      </div>
                    </div>
                  </Navlink>
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xs font-medium text-primary-500 dark:text-primary-500 mb-3">Web Development</h3>
                </div>
                <div className="flex flex-col space-y-1">
                  {webDevelopmentItems.map((item) => renderNavlink(item))}
                </div>

                {/* <div className="mt-6">
                  <Navlink
                    theme={{
                      text: 'text-primary-900 dark:text-primary-50',
                      states:
                        'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
                    }}
                    as={Link}
                    href="/services"
                    className="block md:inline-flex md:items-center gap-1"
                    isDropdownItem
                  >
                    More
                    <span>
                      <BiChevronRight className="inline-flex items-center" size={20} />
                    </span>
                  </Navlink>
                </div> */}
              </div>
              <div className="flex flex-col h-full">
                {/* <div className="mb-6">
                  <h3 className="text-xs leading-none text-primary-500">UI/UX Design</h3>
                </div> */}
                <div className="mb-4">
                  <h3 className="text-xs font-medium text-primary-500 dark:text-primary-500 mb-3">UI/UX Design</h3>
                </div>
                <div className="flex flex-col space-y-1">
                  {uiUxDesignItems.map((item) => renderNavlink(item))}
                </div>

                {/* <div className="mt-6">
                  <Navlink
                    theme={{
                      text: 'text-primary-900 dark:text-primary-50',
                      states:
                        'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
                    }}
                    as={Link}
                    href="/services"
                    className="block md:inline-flex md:items-center gap-1"
                    isDropdownItem
                  >
                    More
                    <span>
                      <BiChevronRight className="inline-flex items-center" size={20} />
                    </span>
                  </Navlink>
                </div> */}
              </div>
              <div className="flex flex-col h-full">
                {/* <div className="mb-6">
                  <h3 className="text-xs leading-none text-primary-500">Digital Marketing</h3>
                </div> */}
                <div className="mb-4">
                  <h3 className="text-xs font-medium text-primary-500 dark:text-primary-500 mb-3">Marketing</h3>
                </div>

                <div className="flex flex-col space-y-1">
                  {digitalMarketingItems.map((item) => renderNavlink(item))}
                </div>

                {/* <div className="mt-6">
                  <Navlink
                    theme={{
                      text: 'text-primary-900 dark:text-primary-50',
                      states:
                        'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
                    }}
                    as={Link}
                    href="/services"
                    className="block md:inline-flex md:items-center gap-1"
                    isDropdownItem
                  >
                    More
                    <span>
                      <BiChevronRight className="inline-flex items-center" size={20} />
                    </span>
                  </Navlink>
                </div> */}
              </div>
              {/* Compact banner column */}
              <div className="hidden lg:flex flex-col justify-center h-full">
                <div className="p-6 bg-gradient-primary-dark dark:bg-gradient-primary border border-primary-500/30 rounded-2xl">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white dark:bg-black rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-8 h-8 text-primary-600 dark:text-primary-400"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-50 mb-2">
                      Ready to Start?
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400 mb-4">
                      Get your project started with our expert team
                    </p>
                    <Navlink
                      theme={{
                        text: 'text-primary-50 dark:text-primary-950 bg-gradient-text dark:bg-gradient-text-dark px-4 py-2 rounded-lg text-sm font-medium',
                        states: '[@media(hover:hover)]:hover:opacity-90 transition-opacity',
                      }}
                      as={Link}
                      href="/contact"
                    >
                      Get Quote
                    </Navlink>
                  </div>
                </div>
              </div>
            </div>
          </Megamenu>

          {/* Solutions Megamenu */}
          <Megamenu
            label="Solutions"
            theme={{
              text: 'text-primary-900 dark:text-primary-50  text-base md:text-sm',
              states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
              menu: 'bg-white dark:bg-black',
            }}
          >
            <div className="grid w-full grid-flow-col gap-x-8 lg:grid-cols-[300px_repeat(3,1fr)_280px] grid-cols-[300px_repeat(3,1fr)] py-1.5">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xs font-medium text-primary-500 dark:text-primary-500 mb-3">Our Solutions</h3>
                </div>
                <div className="flex flex-col space-y-2">
                  <Navlink
                    theme={{
                      text: 'text-primary-900 dark:text-primary-50',
                      states: 'focus-within:opacity-100 active:opacity-100 [@media(hover:hover)]:hover:opacity-100',
                    }}
                    href="/solutions"
                    as={Link}
                    isDropdownItem
                  >
                    <div className="p-3 bg-secondary-50/50 dark:bg-secondary-900/50 border border-primary-500/20 rounded-lg">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium">Next.js Solutions</span>
                        <BiChevronRight size={16} />
                      </div>
                      <div className="text-xs mt-1 text-primary-600 dark:text-primary-400">
                        Next.js, Payload CMS, Coolify, Hetzner, Postgres, Resend, Cloudflare, Vercel Multi-Tenant
                      </div>
                    </div>
                  </Navlink>
                  <Navlink
                    theme={{
                      text: 'text-primary-900 dark:text-primary-50',
                      states: 'focus-within:opacity-100 active:opacity-100 [@media(hover:hover)]:hover:opacity-100',
                    }}
                    href="/solutions"
                    as={Link}
                    isDropdownItem
                  >
                    <div className="p-3 bg-secondary-50/50 dark:bg-secondary-900/50 border border-primary-500/20 rounded-lg">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium">WordPress Solutions</span>
                        <BiChevronRight size={16} />
                      </div>
                      <div className="text-xs mt-1 text-primary-600 dark:text-primary-400">
                        Ubuntu VPS, OpenLiteSpeed/Nginx, Redis, Cloudflare, S3, Elementor, ACF, WooCommerce
                      </div>
                    </div>
                  </Navlink>
                  <Navlink
                    theme={{
                      text: 'text-primary-900 dark:text-primary-50',
                      states: 'focus-within:opacity-100 active:opacity-100 [@media(hover:hover)]:hover:opacity-100',
                    }}
                    href="/solutions"
                    as={Link}
                    isDropdownItem
                  >
                    <div className="p-3 bg-secondary-50/50 dark:bg-secondary-900/50 border border-primary-500/20 rounded-lg">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium">Open Source Solutions</span>
                        <BiChevronRight size={16} />
                      </div>
                      <div className="text-xs mt-1 text-primary-600 dark:text-primary-400">
                        BracketUI, TailwindCSS, Next.js, Payload, WordPress Headless Integrations
                      </div>
                    </div>
                  </Navlink>
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xs font-medium text-primary-500 dark:text-primary-500 mb-3">Next.js Solutions</h3>
                </div>
                <div className="flex flex-col space-y-1">
                  {nextjsSolutionsItems.map((item) => renderNavlink(item))}
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xs font-medium text-primary-500 dark:text-primary-500 mb-3">WordPress Solutions</h3>
                </div>
                <div className="flex flex-col space-y-1">
                  {wordpressSolutionsItems.map((item) => renderNavlink(item))}
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xs font-medium text-primary-500 dark:text-primary-500 mb-3">Open Source Solutions</h3>
                </div>
                <div className="flex flex-col space-y-1">
                  {openSourceSolutionsItems.map((item) => renderNavlink(item))}
                </div>
              </div>
              <div className="hidden lg:flex flex-col justify-center h-full">
                <div className="p-6 bg-gradient-primary-dark dark:bg-gradient-primary border border-primary-500/30 rounded-2xl">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white dark:bg-black rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-8 h-8 text-primary-600 dark:text-primary-400"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-50 mb-2">
                      Need Custom Solution?
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400 mb-4">
                      Let's build something tailored for your business
                    </p>
                    <Navlink
                      theme={{
                        text: 'text-primary-50 dark:text-primary-950 bg-gradient-text dark:bg-gradient-text-dark px-4 py-2 rounded-lg text-sm font-medium',
                        states: '[@media(hover:hover)]:hover:opacity-90 transition-opacity',
                      }}
                      as={Link}
                      href="/solutions"
                    >
                      View Solutions
                    </Navlink>
                  </div>
                </div>
              </div>
            </div>
          </Megamenu>

          {/* Main navigation items */}
          {mainNavItems.map((item) => renderNavlink(item))}

          {/* <Navlink
            theme={{
              text: 'text-primary-900 dark:text-primary-50',
              states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
            }}
            as={Link}
            href="/search"
          >
            <span className="sr-only">Search</span>
            <MdSearch className="w-5 text-primary" />
          </Navlink> */}
        </NavItem>

        <MobileNav>
          <div className="space-y-2 py-1.5">
            <Megamenu
              label="Services"
              theme={{
                text: 'text-primary-900 dark:text-primary-50  text-base md:text-sm',
                states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                menu: 'bg-white dark:bg-black',
              }}
            >
              <div className="space-y-2 py-1.5">
                <Megamenu
                  label="Web Development"
                  theme={{
                    text: 'text-primary-900 dark:text-primary-50  text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-white dark:bg-black',
                  }}
                >
                  <div className="space-y-2 py-1.5">
                    {webDevelopmentItems.map((item) => renderNavlink(item, true))}
                  </div>
                </Megamenu>

                <Megamenu
                  label="UI/UX Design"
                  theme={{
                    text: 'text-primary-900 dark:text-primary-50  text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-white dark:bg-black',
                  }}
                >
                  <div className="space-y-2 py-1.5">
                    {uiUxDesignItems.map((item) => renderNavlink(item, true))}
                  </div>
                </Megamenu>

                <Megamenu
                  label="Digital Marketing"
                  theme={{
                    text: 'text-primary-900 dark:text-primary-50  text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-white dark:bg-black',
                  }}
                >
                  <div className="space-y-2 py-1.5">
                    {digitalMarketingItems.map((item) => renderNavlink(item, true))}
                  </div>
                </Megamenu>
              </div>
            </Megamenu>

            <Megamenu
              label="Solutions"
              theme={{
                text: 'text-primary-900 dark:text-primary-50  text-base md:text-sm',
                states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                menu: 'bg-white dark:bg-black',
              }}
            >
              <div className="space-y-2 py-1.5">
                <Megamenu
                  label="Next.js Solutions"
                  theme={{
                    text: 'text-primary-900 dark:text-primary-50  text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-white dark:bg-black',
                  }}
                >
                  <div className="space-y-2 py-1.5">
                    {nextjsSolutionsItems.map((item) => renderNavlink(item, true))}
                  </div>
                </Megamenu>

                <Megamenu
                  label="WordPress Solutions"
                  theme={{
                    text: 'text-primary-900 dark:text-primary-50  text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-white dark:bg-black',
                  }}
                >
                  <div className="space-y-2 py-1.5">
                    {wordpressSolutionsItems.map((item) => renderNavlink(item, true))}
                  </div>
                </Megamenu>

                <Megamenu
                  label="Open Source Solutions"
                  theme={{
                    text: 'text-primary-900 dark:text-primary-50  text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-white dark:bg-black',
                  }}
                >
                  <div className="space-y-2 py-1.5">
                    {openSourceSolutionsItems.map((item) => renderNavlink(item, true))}
                  </div>
                </Megamenu>
              </div>
            </Megamenu>

            {/* Main navigation items for mobile */}
            {mainNavItems.map((item) => renderNavlink(item, true))}
          </div>
        </MobileNav>
      </Navbar>
    </header>
  )
}

export default Header
