import { Megamenu, MobileNav, Navbar, Navbrand, NavItem, Navlink } from '@thirdbracket/bracketui'
import Image from 'next/image'

import Link from 'next/link'
import { FC } from 'react'
import { BiChevronRight } from 'react-icons/bi'

import { MdSearch } from 'react-icons/md'
import { Logo } from './Logo/Logo'

// import { RiArrowRightUpLine, RiRecycleLine } from "react-icons/ri";

const Header: FC = () => {
  return (
    <header>
      <Navbar
        theme={{
          background: 'bg-white dark:bg-black',
          border: 'border-b border-primary-500/30 dark:border-primary-500/40',
          mobileMenu: 'bg-white dark:bg-black',
        }}
      >
        <Navbrand
          logo={
            <Logo className="w-auto h-[18px] md:h-[22px] dark:invert" priority loading="eager" />
          }
          href="/"
        ></Navbrand>

        <NavItem>
          <Megamenu
            label="Services"
            theme={{
              text: 'text-primary-900 dark:text-primary-100  text-base md:text-sm',
              states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
              menu: 'bg-gradient-primary-dark dark:bg-gradient-primary',
            }}
          >
            <div className="grid w-full grid-flow-col gap-x-8 grid-cols-[repeat(4,minmax(0,220px))_250px]">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-primary-500">Explore Our Services</h3>
                </div>
                <div className="flex flex-col space-y-3">
                  <Navlink href="/services" as={Link} cto>
                    Web Development
                  </Navlink>
                  <Navlink href="/services" as={Link} cto>
                    UI/UX Design
                  </Navlink>
                  <Navlink href="/services" as={Link} cto>
                    Digital Marketing
                  </Navlink>
                </div>
                <div className="flex-grow"></div>
                <div className="mt-6">
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
                    Headless Integration
                  </Navlink>
                  <Navlink as={Link} href="/services" isDropdownItem>
                    Performance Optimization
                  </Navlink>
                  <Navlink as={Link} href="/services" isDropdownItem>
                    Migration & Modernization
                  </Navlink>
                  {/* <Navlink as={Link} href="/services" isDropdownItem>
                    Feature Development
                  </Navlink> */}
                </div>
                <div className="flex-grow"></div>
                <div className="mt-6">
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
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-primary-500">UI/UX Design</h3>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Navlink as={Link} href="/services" isDropdownItem>
                    Landing Page Design
                  </Navlink>
                  <Navlink as={Link} href="/services" isDropdownItem>
                    Website Interface Design
                  </Navlink>
                  <Navlink as={Link} href="/services" isDropdownItem>
                    Vector Design
                  </Navlink>
                  <Navlink as={Link} href="/services" isDropdownItem>
                    Component-Based UI Setup
                  </Navlink>
                  <Navlink as={Link} href="/services" isDropdownItem>
                    Website Redesign
                  </Navlink>
                </div>
                <div className="flex-grow"></div>
                <div className="mt-6">
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
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-primary-500">Digital Marketing</h3>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Navlink as={Link} href="/services" isDropdownItem>
                    Technical SEO Optimization
                  </Navlink>
                  <Navlink as={Link} href="/services" isDropdownItem>
                    Performance Optimization
                  </Navlink>
                  <Navlink as={Link} href="/services" isDropdownItem>
                    SEO-Ready Website Builds
                  </Navlink>
                  <Navlink as={Link} href="/services" isDropdownItem>
                    Conversion Optimization
                  </Navlink>
                  <Navlink as={Link} href="/services" isDropdownItem>
                    Content Writing
                  </Navlink>
                </div>
                <div className="flex-grow"></div>
                <div className="mt-6">
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
              {/* Keep the image column as is */}
              <div className="w-full flex flex-col items-center justify-center h-full">
                <div className="p-2">
                  <Image
                    src="1.svg"
                    alt=""
                    width={280}
                    height={280}
                    className="w-full h-[280px] dark:opacity-90 bg-gradient-secondary-dark  border border-dotted border-primary-500/30 dark:bg-gradient-secondary   rounded-3xl"
                  ></Image>
                </div>
              </div>
            </div>
          </Megamenu>

          <Megamenu
            label="Solutions"
            theme={{
              text: 'text-primary-900 dark:text-primary-100  text-base md:text-sm',
              states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
              menu: 'bg-gradient-primary-dark dark:bg-gradient-primary',
            }}
          >
            <div className="grid w-full grid-flow-col gap-x-8 grid-cols-[repeat(4,minmax(0,220px))_250px]">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-primary-500">Explore Our Solutions</h3>
                </div>
                <div className="flex flex-col space-y-3">
                  <Navlink href="/solutions" as={Link} cto>
                    UI/UX Solutions
                  </Navlink>
                  <Navlink href="/solutions" as={Link} cto>
                    Business Solutions
                  </Navlink>
                  <Navlink href="/solutions" as={Link} cto>
                    Infrastructure Solutions
                  </Navlink>
                </div>
                <div className="flex-grow"></div>
                <div className="mt-6">
                  <Navlink
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
                  <Navlink as={Link} href="/solutions" isDropdownItem>
                    Elementor Templates
                  </Navlink>
                  <Navlink as={Link} href="/solutions" isDropdownItem>
                    WordPress Themes
                  </Navlink>
                  <Navlink as={Link} href="/solutions" isDropdownItem>
                    Bracketui Component Library
                  </Navlink>
                  <Navlink as={Link} href="/solutions" isDropdownItem>
                    Landing Page Kits
                  </Navlink>
                  <Navlink as={Link} href="/solutions" isDropdownItem>
                    Nextjs Starters
                  </Navlink>
                </div>
                <div className="flex-grow"></div>
                <div className="mt-6">
                  <Navlink
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
                  <Navlink as={Link} href="/solutions" isDropdownItem>
                    Startup 360
                  </Navlink>
                  <Navlink as={Link} href="/solutions" isDropdownItem>
                    Ecommerce 360
                  </Navlink>
                  <Navlink as={Link} href="/solutions" isDropdownItem>
                    Blog 360
                  </Navlink>
                  <Navlink as={Link} href="/solutions" isDropdownItem>
                    Business Strategy
                  </Navlink>
                  <Navlink as={Link} href="/solutions" isDropdownItem>
                    Enterprise 360
                  </Navlink>
                </div>
                <div className="flex-grow"></div>
                <div className="mt-6">
                  <Navlink
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
                  <Navlink as={Link} href="/solutions" isDropdownItem>
                    WordPress 360
                  </Navlink>
                  <Navlink as={Link} href="/solutions" isDropdownItem>
                    Next.js 360
                  </Navlink>
                  <Navlink as={Link} href="/solutions" isDropdownItem>
                    VPS Setup
                  </Navlink>
                  <Navlink as={Link} href="/solutions" isDropdownItem>
                    Cloud Setup
                  </Navlink>
                </div>
                <div className="flex-grow"></div>
                <div className="mt-6">
                  <Navlink
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
                    className="w-full h-[280px] dark:opacity-90 bg-gradient-secondary-dark  border border-dotted border-primary-500/30 dark:bg-gradient-secondary   rounded-3xl"
                  ></Image>
                </div>
              </div>
            </div>
          </Megamenu>

          <Navlink
            theme={{
              text: 'text-primary-900 dark:text-primary-100',
              states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
            }}
            as={Link}
            href="/case-studies"
          >
            Case Studies
          </Navlink>

          <Navlink
            theme={{
              text: 'text-primary-900 dark:text-primary-100',
              states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
            }}
            as={Link}
            href="/about"
          >
            About
          </Navlink>
          <Navlink
            theme={{
              text: 'text-primary-900 dark:text-primary-100',
              states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
            }}
            as={Link}
            href="/posts"
          >
            Blog
          </Navlink>
          <Navlink
            theme={{
              text: 'text-primary-900 dark:text-primary-100',
              states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
            }}
            as={Link}
            href="/contact"
          >
            Contact
          </Navlink>
          <Navlink
            theme={{
              text: 'text-primary-900 dark:text-primary-100',
              states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
            }}
            as={Link}
            href="/search"
          >
            <span className="sr-only">Search</span>
            <MdSearch className="w-5 text-primary" />
          </Navlink>
        </NavItem>

        {/* <MobileNav>
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
           
          </div>
        </MobileNav> */}

        <MobileNav>
          <div className="space-y-2 py-1.5">
            <Megamenu
              label="Services"
              theme={{
                text: 'text-primary-900 dark:text-primary-100  text-base md:text-sm',
                states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                menu: 'bg-gradient-secondary-dark dark:bg-gradient-secondary',
              }}
            >
              <div className="space-y-2 py-1.5">
                <Megamenu
                  label="Web Development"
                  theme={{
                    text: 'text-primary-900 dark:text-primary-100  text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-gradient-secondary-dark dark:bg-gradient-secondary',
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
                      Headless Integration
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Performance Optimization
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Migration & Modernization
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Feature Development & API Integrations
                    </Navlink>
                  </div>
                </Megamenu>

                <Megamenu
                  label="UI/UX Design"
                  theme={{
                    text: 'text-primary-900 dark:text-primary-100  text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-gradient-secondary-dark dark:bg-gradient-secondary',
                  }}
                >
                  <div className="space-y-2 py-1.5">
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Landing Page Design
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Website Interface Design
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Vector Design
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Component-Based UI Setup
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Website Redesign
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Design System Development
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      UX Strategy & Wireframing
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Social Media Design
                    </Navlink>
                  </div>
                </Megamenu>

                <Megamenu
                  label="Digital Marketing"
                  theme={{
                    text: 'text-primary-900 dark:text-primary-100  text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-gradient-secondary-dark dark:bg-gradient-secondary',
                  }}
                >
                  <div className="space-y-2 py-1.5">
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Technical SEO Optimization
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Website Performance Optimization
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      SEO-Ready Website Builds
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Conversion Optimization
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Content Writing
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Social Media Management
                    </Navlink>
                    <Navlink as={Link} href="/services" isDropdownItem>
                      Google Services Integration
                    </Navlink>
                  </div>
                </Megamenu>
              </div>
            </Megamenu>

            <Megamenu
              label="Solutions"
              theme={{
                text: 'text-primary-900 dark:text-primary-100  text-base md:text-sm',
                states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                menu: 'bg-gradient-secondary-dark dark:bg-gradient-secondary',
              }}
            >
              <div className="space-y-2 py-1.5">
                <Megamenu
                  label="UI/UX Solutions"
                  theme={{
                    text: 'text-primary-900 dark:text-primary-100  text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-gradient-secondary-dark dark:bg-gradient-secondary',
                  }}
                >
                  <div className="space-y-2 py-1.5">
                    <Navlink as={Link} href="/solutions" isDropdownItem>
                      Elementor Templates
                    </Navlink>
                    <Navlink as={Link} href="/solutions" isDropdownItem>
                      WordPress Themes
                    </Navlink>
                    <Navlink as={Link} href="/solutions" isDropdownItem>
                      Bracketui Component Library
                    </Navlink>
                    <Navlink as={Link} href="/solutions" isDropdownItem>
                      Landing Page Kits
                    </Navlink>
                    <Navlink as={Link} href="/solutions" isDropdownItem>
                      Nextjs Starters
                    </Navlink>
                  </div>
                </Megamenu>

                <Megamenu
                  label="Business Solutions"
                  theme={{
                    text: 'text-primary-900 dark:text-primary-100  text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-gradient-secondary-dark dark:bg-gradient-secondary',
                  }}
                >
                  <div className="space-y-2 py-1.5">
                    <Navlink as={Link} href="/solutions" isDropdownItem>
                      Startup 360
                    </Navlink>
                    <Navlink as={Link} href="/solutions" isDropdownItem>
                      Ecommerce 360
                    </Navlink>
                    <Navlink as={Link} href="/solutions" isDropdownItem>
                      Blog 360
                    </Navlink>
                    <Navlink as={Link} href="/solutions" isDropdownItem>
                      Business Strategy Setup
                    </Navlink>
                    <Navlink as={Link} href="/solutions" isDropdownItem>
                      Enterprise 360
                    </Navlink>
                  </div>
                </Megamenu>

                <Megamenu
                  label="Infrastructure Solutions"
                  theme={{
                    text: 'text-primary-900 dark:text-primary-100  text-base md:text-sm',
                    states: 'focus-within:opacity-100 active:opacity-100 md:hover:opacity-100',
                    menu: 'bg-gradient-secondary-dark dark:bg-gradient-secondary',
                  }}
                >
                  <div className="space-y-2 py-1.5">
                    <Navlink as={Link} href="/solutions" isDropdownItem>
                      WordPress 360
                    </Navlink>
                    <Navlink as={Link} href="/solutions" isDropdownItem>
                      Next.js 360
                    </Navlink>
                    <Navlink as={Link} href="/solutions" isDropdownItem>
                      VPS Setup
                    </Navlink>
                    <Navlink as={Link} href="/solutions" isDropdownItem>
                      Cloud Setup
                    </Navlink>
                  </div>
                </Megamenu>
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
          </div>
        </MobileNav>
      </Navbar>
    </header>
  )
}
export default Header
