import { Megamenu, MobileNav, Navbar, Navbrand, NavItem, Navlink } from '@thirdbracket/bracketui'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { MdSearch } from 'react-icons/md'
import { Logo } from './Logo/Logo'
import {
  NavlinkItem,
  MegamenuItem,
  mainNavItems,
  webDevelopmentItems,
  uiUxDesignItems,
  digitalMarketingItems,
  uiUxSolutionsItems,
  businessSolutionsItems,
  infrastructureSolutionsItems,
  getNavlinkTheme,
} from '../data/navigationData'

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
    isMobile: boolean = false,
  ) => {
    return items.map((item) => {
      if ('items' in item) {
        // This is a megamenu item
        return (
          <Megamenu
            key={item.label}
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
          background: 'bg-white dark:bg-black',
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
            <div className="grid w-full grid-flow-col gap-x-8 grid-cols-[repeat(4,minmax(0,220px))_250px]">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-primary-500">Explore Our Services</h3>
                </div>
                <div className="flex flex-col space-y-3">
                  <Navlink
                    theme={{
                      text: 'text-primary-900 dark:text-primary-50',
                      states:
                        'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
                    }}
                    href="/services"
                    as={Link}
                    cto
                  >
                    Web Development
                  </Navlink>
                  <Navlink
                    theme={{
                      text: 'text-primary-900 dark:text-primary-50',
                      states:
                        'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
                    }}
                    href="/services"
                    as={Link}
                    cto
                  >
                    UI/UX Design
                  </Navlink>
                  <Navlink
                    theme={{
                      text: 'text-primary-900 dark:text-primary-50',
                      states:
                        'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
                    }}
                    href="/services"
                    as={Link}
                    cto
                  >
                    Digital Marketing
                  </Navlink>
                </div>
                <div className="flex-grow"></div>
                <div className="mt-6">
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
                    Explore All
                    <span>
                      <BiChevronRight className="inline-flex items-center" size={20} />
                    </span>
                  </Navlink>
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-primary-500">Web Development</h3>
                </div>
                <div className="flex flex-col space-y-1.5">
                  {webDevelopmentItems.map((item) => renderNavlink(item))}
                </div>
                <div className="flex-grow"></div>
                <div className="mt-6">
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
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-primary-500">UI/UX Design</h3>
                </div>
                <div className="flex flex-col space-y-1.5">
                  {uiUxDesignItems.slice(0, 5).map((item) => renderNavlink(item))}
                </div>
                <div className="flex-grow"></div>
                <div className="mt-6">
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
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-primary-500">Digital Marketing</h3>
                </div>
                <div className="flex flex-col space-y-1.5">
                  {digitalMarketingItems.slice(0, 5).map((item) => renderNavlink(item))}
                </div>
                <div className="flex-grow"></div>
                <div className="mt-6">
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
                </div>
              </div>
              {/* Keep the image column as is */}
              <div className="w-full flex flex-col items-center justify-center h-full">
                <div className="p-2">
                  <Image
                    src="1.svg"
                    alt=""
                    width={280}
                    height={280}
                    className="w-full h-[280px] dark:opacity-90 bg-gradient-primary-dark  border border-dotted border-primary-500/30 dark:bg-gradient-primary   rounded-3xl"
                  ></Image>
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
            <div className="grid w-full grid-flow-col gap-x-8 grid-cols-[repeat(4,minmax(0,220px))_250px]">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-primary-500">Explore Our Solutions</h3>
                </div>
                <div className="flex flex-col space-y-3">
                  <Navlink
                    theme={{
                      text: 'text-primary-900 dark:text-primary-50',
                      states:
                        'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
                    }}
                    href="/solutions"
                    as={Link}
                    cto
                  >
                    UI/UX Solutions
                  </Navlink>
                  <Navlink
                    theme={{
                      text: 'text-primary-900 dark:text-primary-50',
                      states:
                        'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
                    }}
                    href="/solutions"
                    as={Link}
                    cto
                  >
                    Business Solutions
                  </Navlink>
                  <Navlink
                    theme={{
                      text: 'text-primary-900 dark:text-primary-50',
                      states:
                        'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
                    }}
                    href="/solutions"
                    as={Link}
                    cto
                  >
                    Infrastructure Solutions
                  </Navlink>
                </div>
                <div className="flex-grow"></div>
                <div className="mt-6">
                  <Navlink
                    theme={{
                      text: 'text-primary-900 dark:text-primary-50',
                      states:
                        'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
                    }}
                    as={Link}
                    href="/solutions"
                    className="block md:inline-flex md:items-center gap-1"
                    isDropdownItem
                  >
                    Explore All
                    <span>
                      <BiChevronRight className="inline-flex items-center" size={20} />
                    </span>
                  </Navlink>
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-primary-500">UI/UX Solutions</h3>
                </div>
                <div className="flex flex-col space-y-1.5">
                  {uiUxSolutionsItems.map((item) => renderNavlink(item))}
                </div>
                <div className="flex-grow"></div>
                <div className="mt-6">
                  <Navlink
                    theme={{
                      text: 'text-primary-900 dark:text-primary-50',
                      states:
                        'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
                    }}
                    as={Link}
                    href="/solutions"
                    className="block md:inline-flex md:items-center gap-1"
                    isDropdownItem
                  >
                    More
                    <span>
                      <BiChevronRight className="inline-flex items-center" size={20} />
                    </span>
                  </Navlink>
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-primary-500">Business Solutions</h3>
                </div>
                <div className="flex flex-col space-y-1.5">
                  {businessSolutionsItems.slice(0, 5).map((item) => renderNavlink(item))}
                </div>
                <div className="flex-grow"></div>
                <div className="mt-6">
                  <Navlink
                    theme={{
                      text: 'text-primary-900 dark:text-primary-50',
                      states:
                        'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
                    }}
                    as={Link}
                    href="/solutions"
                    className="block md:inline-flex md:items-center gap-1"
                    isDropdownItem
                  >
                    More
                    <span>
                      <BiChevronRight className="inline-flex items-center" size={20} />
                    </span>
                  </Navlink>
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-primary-500">
                    Infrastructure Solutions
                  </h3>
                </div>
                <div className="flex flex-col space-y-1.5">
                  {infrastructureSolutionsItems.map((item) => renderNavlink(item))}
                </div>
                <div className="flex-grow"></div>
                <div className="mt-6">
                  <Navlink
                    theme={{
                      text: 'text-primary-900 dark:text-primary-50',
                      states:
                        'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
                    }}
                    as={Link}
                    href="/solutions"
                    className="block md:inline-flex md:items-center gap-1"
                    isDropdownItem
                  >
                    More
                    <span>
                      <BiChevronRight className="inline-flex items-center" size={20} />
                    </span>
                  </Navlink>
                </div>
              </div>
              {/* Keep the image column as is */}
              <div className="w-full flex flex-col items-center justify-center h-full">
                <div className="p-2">
                  <Image
                    src="2.svg"
                    alt=""
                    width={280}
                    height={280}
                    className="w-full h-[280px] dark:opacity-90 bg-gradient-primary-dark  border border-dotted border-primary-500/30 dark:bg-gradient-primary   rounded-3xl"
                  ></Image>
                </div>
              </div>
            </div>
          </Megamenu>

          {/* Main navigation items */}
          {mainNavItems.map((item) => renderNavlink(item))}

          <Navlink
            theme={{
              text: 'text-primary-900 dark:text-primary-50',
              states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
            }}
            as={Link}
            href="/search"
          >
            <span className="sr-only">Search</span>
            <MdSearch className="w-5 text-primary" />
          </Navlink>
        </NavItem>

        <MobileNav>
          <div className="space-y-2 py-1.5">
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
                  label="Infrastructure Solutions"
                  theme={{
                    text: 'text-primary-900 dark:text-primary-50  text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-white dark:bg-black',
                  }}
                >
                  <div className="space-y-2 py-1.5">
                    {infrastructureSolutionsItems.map((item) => renderNavlink(item, true))}
                  </div>
                </Megamenu>
                <Megamenu
                  label="UI/UX Solutions"
                  theme={{
                    text: 'text-primary-900 dark:text-primary-50  text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-white dark:bg-black',
                  }}
                >
                  <div className="space-y-2 py-1.5">
                    {uiUxSolutionsItems.map((item) => renderNavlink(item, true))}
                  </div>
                </Megamenu>

                <Megamenu
                  label="Business Solutions"
                  theme={{
                    text: 'text-primary-900 dark:text-primary-50  text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-white dark:bg-black',
                  }}
                >
                  <div className="space-y-2 py-1.5">
                    {businessSolutionsItems.slice(0, 5).map((item) => renderNavlink(item, true))}
                  </div>
                </Megamenu>
              </div>
            </Megamenu>

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
                    {digitalMarketingItems.slice(0, 7).map((item) => renderNavlink(item, true))}
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
