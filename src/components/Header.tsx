import { Megamenu, MobileNav, Navbar, Navbrand, NavItem, Navlink } from '@thirdbracket/bracketui'
import Image from 'next/image'

import Link from 'next/link'
import { FC } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Logo } from './icons'
import { MdSearch } from 'react-icons/md'

// import { RiArrowRightUpLine, RiRecycleLine } from "react-icons/ri";

const Header: FC = () => {
  return (
    <header>
      <Navbar
        theme={{
          background: 'bg-white dark:bg-black',
          border: 'border-b !border-primary-200/60 dark:!border-primary-800/60',
          mobileMenu: 'bg-white dark:bg-black',
        }}
      >
        <Navbrand logo={<Logo />} href="/"></Navbrand>

        <NavItem>
          <Megamenu
            label="Services"
            theme={{
              text: 'text-primary-900 dark:text-primary-50 text-base md:text-sm',
              states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
              menu: 'bg-white dark:bg-black',
            }}
          >
            <div className="grid w-full grid-flow-col gap-x-8 grid-cols-[repeat(4,minmax(0,220px))_250px]">
              <div className="flex flex-col h-full ">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-primary-500">Explore Our Services</h3>
                </div>
                <div className="flex flex-col space-y-3 ">
                  <Navlink href="/services" as={Link} cto>
                    Web Development
                  </Navlink>
                  <Navlink href="/services" as={Link} cto>
                    Digital Marketing
                  </Navlink>
                  <Navlink href="/services" as={Link} cto>
                    Ui/Ux
                  </Navlink>
                </div>
                <div className="flex-grow"></div>

                <div className=" mt-6 ">
                  <Navlink
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
                  <Navlink as={Link} href="/services" isDropdownItem>
                    Next.js Development
                  </Navlink>
                  <Navlink as={Link} href="/services" isDropdownItem>
                    WordPress Development
                  </Navlink>
                  <Navlink as={Link} href="/services" isDropdownItem>
                    Headless & Serverles
                  </Navlink>
                  <Navlink as={Link} href="/services" isDropdownItem>
                    Custom Backend
                  </Navlink>
                  <Navlink as={Link} href="/services" isDropdownItem>
                    API Development
                  </Navlink>
                  <Navlink as={Link} href="/services" isDropdownItem>
                    Other Dev Services
                  </Navlink>
                </div>
                <div className="flex-grow"></div>
                <div className=" mt-6 ">
                  <Navlink
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

              <div className="flex flex-col h-full ">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-primary-500">Digital Marketing</h3>{' '}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Navlink as={Link} href="/services" isDropdownItem>
                    SEO & Web Visibility
                  </Navlink>
                  <Navlink as={Link} href="/services" isDropdownItem>
                    Branding & Design
                  </Navlink>
                  <Navlink as={Link} href="/services" isDropdownItem>
                    Social Media Marketing
                  </Navlink>
                  <Navlink as={Link} href="/services" isDropdownItem>
                    PPC & Social Ad
                  </Navlink>
                  <Navlink as={Link} href="/services" isDropdownItem>
                    Content & Copywriting
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Other Marketing Services
                  </Navlink>
                </div>
                <div className="flex-grow"></div>
                <div className=" mt-6 ">
                  <Navlink
                    as={Link}
                    href="#"
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

              <div className="flex flex-col h-full ">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-primary-500">Other Services</h3>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Navlink as={Link} href="#" isDropdownItem>
                    UI/UX Design
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Performance Optimization
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Prototyping
                  </Navlink>
                </div>
                <div className="flex-grow"></div>
                <div className="mt-6 ">
                  <Navlink
                    isDropdownItem
                    as={Link}
                    href="#"
                    className="block md:inline-flex md:items-center gap-1"
                  >
                    More
                    <span>
                      <BiChevronRight className="inline-flex items-center" size={20} />
                    </span>
                  </Navlink>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center h-full">
                <div className="p-2">
                  <Image
                    src="Megamenu.svg"
                    alt=""
                    width={500}
                    height={600}
                    className="w-full h-[250pxpx] dark:opacity-90 bg-primary-50  dark:bg-primary-800/50   rounded-3xl"
                  ></Image>
                </div>
              </div>
            </div>
          </Megamenu>
          <Megamenu
            label="Solutions"
            theme={{
              text: 'text-primary-900 dark:text-primary-50 text-base md:text-sm',
              states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
              menu: 'bg-white dark:bg-black',
            }}
          >
            <div className="grid w-full grid-flow-col gap-x-8 grid-cols-[repeat(4,minmax(0,220px))_250px]">
              <div className="flex flex-col h-full ">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-primary-500">Explore Our Solutions</h3>
                </div>
                <div className="flex flex-col space-y-3 ">
                  <Navlink href="/solutions" as={Link} cto>
                    Automation & Integration
                  </Navlink>
                  <Navlink href="/solutions" as={Link} cto>
                    UI/UX
                  </Navlink>
                </div>
                <div className="flex-grow"></div>

                <div className=" mt-6 ">
                  <Navlink
                    as={Link}
                    href="#"
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
                  <h3 className="text-xs leading-none text-primary-500">
                    Automation & Integration
                  </h3>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Navlink as={Link} href="#" isDropdownItem>
                    Form Integration
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Marketing Automation
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Search Integration
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Interntionalization
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    CI/CD
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Release Automation
                  </Navlink>
                </div>
                <div className="flex-grow"></div>
                <div className=" mt-6 ">
                  <Navlink
                    as={Link}
                    href="#"
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

              <div className="flex flex-col h-full ">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-primary-500">UI/UX</h3>{' '}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Navlink as={Link} href="#" isDropdownItem>
                    Bracket UI
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Elementor Template
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Nextjs Themes
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Wordpress Theme
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Reusable Blocks
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Landing Pages
                  </Navlink>
                </div>
                <div className="flex-grow"></div>
                <div className=" mt-6 ">
                  <Navlink
                    as={Link}
                    href="#"
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

              <div className="flex flex-col h-full ">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-primary-500">Other Solutions</h3>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Navlink as={Link} href="#" isDropdownItem>
                    Wordpress 360
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Notion Blog
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Business 360
                  </Navlink>
                </div>
                <div className="flex-grow"></div>
                <div className="mt-6 ">
                  <Navlink
                    isDropdownItem
                    as={Link}
                    href="#"
                    className="block md:inline-flex md:items-center gap-1"
                  >
                    More
                    <span>
                      <BiChevronRight className="inline-flex items-center" size={20} />
                    </span>
                  </Navlink>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center h-full">
                <div className="p-2">
                  <Image
                    src="Megamenu.svg"
                    alt=""
                    width={168}
                    height={250}
                    className="w-full h-[250px] dark:opacity-90 bg-primary-50  dark:bg-primary-800/50   rounded-3xl"
                  ></Image>
                </div>
              </div>
            </div>
          </Megamenu>

          <Navlink as={Link} href="/case-studies">
            Case Studies
          </Navlink>

          <Navlink as={Link} href="/about">
            About
          </Navlink>
          <Navlink as={Link} href="/posts">
            Blog
          </Navlink>
          <Navlink as={Link} href="contact">
            Contact
          </Navlink>
          <Link href="/search">
            <span className="sr-only">Search</span>
            <MdSearch className="w-5 text-primary" />
          </Link>
        </NavItem>

        <MobileNav>
          <div className="space-y-2 py-1.5 ">
            <Megamenu
              label="Services"
              theme={{
                text: 'text-primary-900 dark:text-primary-50 text-base md:text-sm',
                states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                menu: 'bg-white dark:bg-black',
              }}
            >
              <div className="space-y-2 py-1.5">
                <Megamenu
                  label="Web Development"
                  theme={{
                    text: 'text-primary-900 dark:text-primary-50 text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-white dark:bg-black',
                  }}
                >
                  <div className="space-y-2 py-1.5">
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Next.js Development
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      WordPress Development
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Headless & Serverles
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Custom Backend & API Development
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Other Development Services
                    </Navlink>
                  </div>
                </Megamenu>
                <Megamenu
                  label="Digital Marketing"
                  theme={{
                    text: 'text-primary-900 dark:text-primary-50 text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-white dark:bg-black',
                  }}
                >
                  <div className="space-y-2 py-1.5">
                    <Navlink as={Link} href="/services" isDropdownItem>
                      SEO & Web Visibility
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Branding & Design
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Social Media Marketing
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      PPC & Social Ad
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Content strategy & Copywriting
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Other Digital Marketing Services
                    </Navlink>
                  </div>
                </Megamenu>
                <Navlink as={Link} href="/services" isDropdownItem>
                  UI/UX Design & Prototyping
                </Navlink>
                <Navlink as={Link} href="/services" isDropdownItem>
                  Performance Optimization
                </Navlink>
                <Navlink as={Link} href="/services" isDropdownItem>
                  Other Services
                </Navlink>
              </div>
            </Megamenu>

            <Megamenu
              label="Solutions"
              theme={{
                text: 'text-primary-900 dark:text-primary-50 text-base md:text-sm',
                states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                menu: 'bg-white dark:bg-black',
              }}
            >
              <div className="space-y-2 py-1.5">
                <Megamenu
                  label="Automation & Integration"
                  theme={{
                    text: 'text-primary-900 dark:text-primary-50 text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-white dark:bg-black',
                  }}
                >
                  <div className="space-y-2 py-1.5">
                    <Navlink as={Link} href="/solutions" isDropdownItem>
                      Form Integration
                    </Navlink>
                    <Navlink as={Link} href="/solutions" isDropdownItem>
                      Marketing Automation
                    </Navlink>
                    <Navlink as={Link} href="/solutions" isDropdownItem>
                      Search Integration
                    </Navlink>
                    <Navlink as={Link} href="/solutions" isDropdownItem>
                      Interntionalization
                    </Navlink>
                    <Navlink as={Link} href="/solutions" isDropdownItem>
                      CI/CD
                    </Navlink>
                    <Navlink as={Link} href="/solutions" isDropdownItem>
                      Release Automation
                    </Navlink>
                  </div>
                </Megamenu>
                <Megamenu
                  label="UI/UX"
                  theme={{
                    text: 'text-primary-900 dark:text-primary-50 text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-white dark:bg-black',
                  }}
                >
                  <div className="space-y-2 py-1.5">
                    <Navlink as={Link} href="/solutions" isDropdownItem>
                      Bracket UI
                    </Navlink>
                    <Megamenu
                      label="Templates"
                      theme={{
                        text: 'text-primary-800 dark:text-primary-100 text-base md:text-sm',
                        states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                        menu: 'bg-white dark:bg-primary-950',
                      }}
                    >
                      <div className="space-y-2 py-1.5">
                        <Navlink as={Link} href="/solutions" isDropdownItem>
                          Elementor Template
                        </Navlink>
                        <Navlink as={Link} href="/solutions" isDropdownItem>
                          Tailwind Template
                        </Navlink>
                        <Navlink as={Link} href="/solutions" isDropdownItem>
                          Html5 Template
                        </Navlink>
                      </div>
                    </Megamenu>
                    <Megamenu
                      label="Themes"
                      theme={{
                        text: 'text-primary-900 dark:text-primary-50 text-base md:text-sm',
                        states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                        menu: 'bg-white dark:bg-black',
                      }}
                    >
                      <div className="space-y-2 py-1.5">
                        <Navlink as={Link} href="/solutions" isDropdownItem>
                          Nextjs Themes
                        </Navlink>
                        <Navlink as={Link} href="/solutions" isDropdownItem>
                          Hugo Themes
                        </Navlink>
                        <Navlink as={Link} href="/solutions" isDropdownItem>
                          Wordpress Theme
                        </Navlink>
                      </div>
                    </Megamenu>
                    <Navlink as={Link} href="/solutions" isDropdownItem>
                      Reusable Blocks
                    </Navlink>
                    <Navlink as={Link} href="/solutions" isDropdownItem>
                      Landing Pages
                    </Navlink>
                  </div>
                </Megamenu>
                <Navlink as={Link} href="/solutions" isDropdownItem>
                  Wordpress 360
                </Navlink>
                <Navlink as={Link} href="/solutions" isDropdownItem>
                  Notion Blog
                </Navlink>
                <Navlink as={Link} href="/solutions" isDropdownItem>
                  Business 360
                </Navlink>
              </div>
            </Megamenu>

            <Navlink as={Link} href="/case-studies">
              Case Studies
            </Navlink>

            <Navlink as={Link} href="/about">
              About
            </Navlink>
            <Navlink as={Link} href="/posts">
              Blog
            </Navlink>
            <Navlink as={Link} href="/contact">
              Contact
            </Navlink>
            <Navlink as={Link} href="/search" cto>
              <span className="sr-only">Search</span>

              <MdSearch />
            </Navlink>
          </div>
        </MobileNav>
      </Navbar>
    </header>
  )
}
export default Header
