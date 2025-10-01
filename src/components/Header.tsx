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
  uiUxSolutionsItems,
  businessSolutionsItems,
  infrastructureSolutionsItems,
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
            <div className="grid w-full grid-flow-col gap-x-8 lg:grid-cols-[1.5fr_repeat(3,1fr)_auto] grid-cols-[1.5fr_repeat(3,1fr) py-1.5">
              <div className="flex  flex-col h-full">
                {/* <div className="mb-6">
                  <h3 className="text-xs leading-none text-primary-500">Explore Our Services</h3>
                </div> */}
                <div className="flex flex-col space-y-1">
                  {/* <Navlink
                    theme={{
                      text: 'text-primary-900 dark:text-primary-50  ',
                      states:
                        'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
                    }}
                    href="/services"
                    as={Link}
                    cto
                  >
                    <div className="backdrop-blur-3xl       px-4 py-3   bg-gradient-primary-dark dark:bg-gradient-primary  border border-dotted  border-primary-500/50   rounded-lg">
                      <div className="flex items-center justify-between size-8 gap-2 dark:text-white text-black">
                        Development
                        <span>
                          <BiChevronRight />
                        </span>
                      </div>
                      <div className="text-xs mt-1   leading-4 font-light  text-primary-600 dark:text-primary-400">
                        Next.js/Wordpress,Vercel, payload admin, Next.js metadata, google essential
                        integration, HubSpot, Mailchimp, Brevo, Klaviyo, Edge, CDN, Core Web Vitals
                      </div>
                    </div>
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
                    <div className="backdrop-blur-3xl       px-4 py-3   bg-gradient-primary-dark dark:bg-gradient-primary  border border-dotted  border-primary-500/50   rounded-lg">
                      <div className="flex items-center justify-between size-8 gap-2">
                        Design
                        <span>
                          <BiChevronRight />
                        </span>
                      </div>
                      <div className="text-xs mt-1   leading-4 font-light  text-primary-600 dark:text-primary-400"></div>
                    </div>
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
                    <div className="backdrop-blur-3xl       px-4 py-3   bg-gradient-primary-dark dark:bg-gradient-primary  border border-dotted  border-primary-500/50   rounded-lg">
                      <div className="flex items-center justify-between size-8 gap-2">
                        Marketing
                        <span>
                          <BiChevronRight />
                        </span>
                      </div>
                      <div className="text-xs mt-1   leading-4 font-light  text-primary-600 dark:text-primary-400">
                        SEO articles, landing page copy, blogs, social media campaigns, google
                        campaigns, e-commerce website, woocmmerce
                      </div>
                    </div>
                  </Navlink> */}

                  <div className="backdrop-blur-3xl       px-4 py-3   bg-gradient-primary-dark dark:bg-gradient-primary  border border-dotted  border-primary-500/50   rounded-lg">
                    <div className="flex items-center justify-between size-8 gap-2 dark:text-white text-black">
                      Development
                      <span>
                        <BiChevronRight />
                      </span>
                    </div>
                    <div className="text-xs mt-1   leading-4 font-light  text-primary-600 dark:text-primary-400">
                      Next.js/Wordpress,Vercel, payload admin, Next.js metadata, google essential
                      integration, HubSpot, Mailchimp, Brevo, Klaviyo, Edge, CDN, Core Web Vitals
                    </div>
                  </div>
                  <div className="backdrop-blur-3xl       px-4 py-3   bg-gradient-primary-dark dark:bg-gradient-primary  border border-dotted  border-primary-500/50   rounded-lg">
                    <div className="flex items-center justify-between size-8 gap-2 dark:text-white text-black">
                      Development
                      <span>
                        <BiChevronRight />
                      </span>
                    </div>
                    <div className="text-xs mt-1   leading-4 font-light  text-primary-600 dark:text-primary-400">
                      Next.js/Wordpress,Vercel, payload admin, Next.js metadata, google essential
                      integration, HubSpot, Mailchimp, Brevo, Klaviyo, Edge, CDN, Core Web Vitals
                    </div>
                  </div>
                  <div className="backdrop-blur-3xl       px-4 py-3   bg-gradient-primary-dark dark:bg-gradient-primary  border border-dotted  border-primary-500/50   rounded-lg">
                    <div className="flex items-center justify-between size-8 gap-2 dark:text-white text-black">
                      Development
                      <span>
                        <BiChevronRight />
                      </span>
                    </div>
                    <div className="text-xs mt-1   leading-4 font-light  text-primary-600 dark:text-primary-400">
                      Next.js/Wordpress,Vercel, payload admin, Next.js metadata, google essential
                      integration, HubSpot, Mailchimp, Brevo, Klaviyo, Edge, CDN, Core Web Vitals
                    </div>
                  </div>
                </div>
                {/* <div className="flex-grow"></div> */}
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
                    Explore All
                    <span>
                      <BiChevronRight className="inline-flex items-center" size={20} />
                    </span>
                  </Navlink>
                </div> */}
              </div>
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex items-center gap-2 p-4  bg-secondary-200/10 dark:bg-secondary-700/25 backdrop-blur-3xl rounded-tl-sm rounded-br-2xl   text-xs  leading-none text-primary-600 dark:text-primary-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    viewBox="0 0 399.997 399.997"
                    className="size-3.5 flex-shrink-0 fill-secondary-700 dark:fill-secondary-300"
                  >
                    <path d="M281.547 143.478a4.75 4.75 0 0 0-5.501-3.851l-17.05 3.005a63.953 63.953 0 0 0-7.764-13.418l11.139-13.272a4.763 4.763 0 0 0 1.094-3.466 4.758 4.758 0 0 0-1.68-3.225l-14.913-12.514a4.753 4.753 0 0 0-6.692.585l-11.13 13.265a63.663 63.663 0 0 0-14.57-5.306V87.969a4.749 4.749 0 0 0-4.748-4.751h-19.466a4.75 4.75 0 0 0-4.748 4.751v17.312a63.631 63.631 0 0 0-14.572 5.306l-11.128-13.265a4.749 4.749 0 0 0-6.69-.584l-14.913 12.513a4.758 4.758 0 0 0-1.68 3.225 4.759 4.759 0 0 0 1.094 3.466l11.138 13.272a64 64 0 0 0-7.763 13.418l-17.05-3.005a4.753 4.753 0 0 0-5.501 3.851l-3.381 19.173a4.746 4.746 0 0 0 3.852 5.5l17.063 3.011a63.83 63.83 0 0 0 2.68 15.268l-14.994 8.657a4.748 4.748 0 0 0-1.738 6.486l9.733 16.86a4.743 4.743 0 0 0 2.885 2.212 4.73 4.73 0 0 0 3.602-.475l15.009-8.664a64.687 64.687 0 0 0 11.868 9.967l-5.926 16.277a4.749 4.749 0 0 0 2.838 6.086l18.294 6.658a4.753 4.753 0 0 0 3.63-.158 4.746 4.746 0 0 0 2.456-2.681l5.925-16.278c2.54.307 5.127.469 7.75.469s5.21-.162 7.75-.469l5.926 16.278a4.757 4.757 0 0 0 2.455 2.681 4.759 4.759 0 0 0 3.63.158l18.295-6.658a4.743 4.743 0 0 0 2.838-6.086l-5.927-16.277a64.502 64.502 0 0 0 11.868-9.967l15.009 8.664a4.731 4.731 0 0 0 3.602.475 4.744 4.744 0 0 0 2.884-2.212l9.732-16.86a4.747 4.747 0 0 0 .477-3.604 4.75 4.75 0 0 0-2.213-2.882l-14.994-8.657a64.02 64.02 0 0 0 2.68-15.268l17.063-3.011a4.73 4.73 0 0 0 3.062-1.951 4.738 4.738 0 0 0 .788-3.549l-3.377-19.173zM200 193.117c-14.424 0-26.117-11.692-26.117-26.116s11.693-26.116 26.117-26.116 26.117 11.692 26.117 26.116-11.693 26.116-26.117 26.116z" />
                    <path d="M366.684 24.971H33.316C14.945 24.971 0 39.917 0 58.288V275.56c0 18.371 14.945 33.317 33.316 33.317h107.412l-20.387 44.955a15 15 0 0 0 13.66 21.194H266.017c8.285 0 15-6.715 15-15 0-2.493-.605-4.848-1.686-6.916l-20.062-44.233h107.412c18.371 0 33.316-14.946 33.316-33.317V58.288c.003-18.371-14.942-33.317-33.313-33.317zM370 275.561a3.32 3.32 0 0 1-3.316 3.316H33.316A3.32 3.32 0 0 1 30 275.561V58.288a3.32 3.32 0 0 1 3.316-3.317h333.367a3.32 3.32 0 0 1 3.316 3.317L370 275.561z" />
                  </svg>
                  <h3 className="">Web Development</h3>
                </div>
                <div className="flex flex-col space-y-1.5">
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
                <div className="mb-4 inline-flex items-center gap-2 p-4  bg-secondary-200/10 dark:bg-secondary-700/25 backdrop-blur-3xl rounded-tl-sm rounded-br-2xl   text-xs  leading-none text-primary-600 dark:text-primary-500 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    viewBox="0 0 399.997 399.997"
                    className="size-3.5 flex-shrink-0 fill-secondary-700 dark:fill-secondary-300 "
                  >
                    <path d="M366.684 24.971H33.316C14.945 24.971 0 39.917 0 58.288V275.56c0 18.371 14.945 33.317 33.316 33.317h107.412l-20.387 44.955a15 15 0 0 0 13.66 21.194H266.017c8.285 0 15-6.715 15-15 0-2.493-.605-4.848-1.686-6.916l-20.062-44.233h107.412c18.371 0 33.316-14.946 33.316-33.317V58.288c.003-18.371-14.942-33.317-33.313-33.317zM370 275.561a3.32 3.32 0 0 1-3.316 3.316H33.316A3.32 3.32 0 0 1 30 275.561V58.288a3.32 3.32 0 0 1 3.316-3.317h333.367a3.32 3.32 0 0 1 3.316 3.317L370 275.561z" />
                    <path d="M246.198 96.434c-1.057-1.056-2.921-.9-4.166.344l-16.273 16.271c-1.247 1.247-1.4 3.116-.348 4.171l23.103 23.103c.525.526 1.261.751 2.013.688.756-.063 1.53-.413 2.157-1.038l16.271-16.272c1.244-1.245 1.4-3.111.343-4.166l-23.1-23.101zM146.336 197.582c-.684-.684-1.748-.882-2.791-.523a3.702 3.702 0 0 0-2.257 2.271l-11.118 32.934c-.353 1.037-.148 2.089.532 2.768.512.517 1.24.759 2.011.693.248-.021.503-.073.756-.16l32.934-11.12a3.699 3.699 0 0 0 2.27-2.256c.362-1.041.162-2.107-.521-2.792l-21.816-21.815zM229.504 182.228a5.1 5.1 0 0 0 1.788-7.924 365.709 365.709 0 0 0-5.997-6.941l18.078-18.077c.596-.597.972-1.375 1.033-2.157.065-.779-.185-1.505-.689-2.01l-23.104-23.101c-1.056-1.058-2.92-.903-4.166.344l-17.63 17.633c-11.824-11.209-23.699-21.209-34.165-28.732-7.369-5.296-20.85-14.199-28.355-14.313a5.084 5.084 0 0 0-3.668 1.479 5.087 5.087 0 0 0-1.508 3.657c.039 5.114 4.528 14.341 12.639 25.977 7.72 11.075 18.326 23.802 30.426 36.563l-23 23.002c-1.248 1.247-1.403 3.111-.346 4.166l23.103 23.101c.525.531 1.254.755 2.011.691.752-.063 1.533-.414 2.155-1.035l23.446-23.447a380.496 380.496 0 0 0 6.079 5.268 5.095 5.095 0 0 0 7.65-1.239c1.368-2.248 3.15-4.479 5.301-6.626 2.696-2.701 5.699-4.814 8.919-6.279zM242.292 186.495c-5.938 0-11.606 2.531-16.396 7.32-5.748 5.748-8.257 11.777-7.257 17.438.993 5.604 5.446 10.627 12.22 13.771 5.827 2.707 11.138 3.546 15.821 4.287 4.932.778 9.585 1.516 13.726 4.325a5.08 5.08 0 0 0 4.943.438 5.104 5.104 0 0 0 2.977-3.977c1.775-13.241-.765-25.133-7.152-33.476-4.929-6.435-11.811-10.126-18.882-10.126z" />
                  </svg>
                  <h3 className="">UI/UX Design</h3>
                </div>
                <div className="flex flex-col space-y-1.5">
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
                <div className="mb-4 inline-flex items-center gap-2 p-4  bg-secondary-200/10 dark:bg-secondary-700/25 backdrop-blur-3xl   rounded-tl-sm rounded-br-2xl  text-xs  leading-none text-primary-600 dark:text-primary-500 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    viewBox="0 0 399.997 399.997"
                    className="size-3.5 flex-shrink-0 fill-secondary-700 dark:fill-secondary-300"
                  >
                    <path d="M392.998 28.339H20c-11.046 0-20 8.954-20 20v234c0 11.046 8.954 20 20 20h139.499v45.32h-54.283c-10.201 0-18.5 8.299-18.5 18.5s8.299 18.5 18.5 18.5h202.566c10.201 0 18.5-8.299 18.5-18.5s-8.299-18.5-18.5-18.5h-54.283v-45.32h139.499c11.046 0 20-8.954 20-20v-234c0-11.046-8.954-20-20-20zm-10 244H30v-214h352.998v214z" />
                    <path d="M134.589 235.304c7.563 0 13.701-6.136 13.701-13.699v-65.156c0-7.564-6.139-13.697-13.701-13.697-7.564 0-13.695 6.133-13.695 13.697v65.155c0 7.564 6.13 13.7 13.695 13.7zM182.53 235.304c7.564 0 13.695-6.136 13.695-13.699V108.506c0-7.564-6.131-13.695-13.695-13.695-7.566 0-13.699 6.131-13.699 13.695v113.099c0 7.563 6.133 13.699 13.699 13.699zM230.468 235.304c7.566 0 13.699-6.136 13.699-13.699v-84.333c0-7.564-6.133-13.695-13.699-13.695-7.562 0-13.693 6.131-13.693 13.695v84.333c-.004 7.563 6.127 13.699 13.693 13.699zM278.411 235.304c7.562 0 13.692-6.136 13.692-13.699v-98.714c0-7.564-6.132-13.697-13.692-13.697-7.564 0-13.701 6.133-13.701 13.697v98.714c0 7.563 6.137 13.699 13.701 13.699z" />
                  </svg>
                  <h3 className="">Marketing</h3>
                </div>

                <div className="flex flex-col space-y-1 ">
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
              {/* Keep the image column as is */}
              <div className="hidden lg:flex w-full  flex-col items-center  h-full">
                <div className="">
                  <Image
                    src="1.svg"
                    alt=""
                    width={250}
                    height={250}
                    className=" h-full dark:opacity-90 bg-gradient-primary-dark dark:bg-gradient-primary  border border-dotted border-primary-500/30    rounded-3xl"
                  ></Image>
                </div>
              </div>
            </div>
          </Megamenu>

          {/* Solutions Megamenu */}

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
          <div className="space-y-2 py-1.5 ">
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
                  <div className="space-y-3 py-1.5">
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

            {/* Main navigation items for mobile */}
            {mainNavItems.map((item) => renderNavlink(item, true))}

            {/* <div className="flex flex-col space-y-1 "> */}
            {/* <Navlink
              theme={{
                text: 'text-primary-900 dark:text-primary-50  ',
                states:
                  'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
              }}
              href="/services"
              as={Link}
              cto
            >
              <div className="backdrop-blur-3xl          bg-gradient-primary-dark p-7 dark:bg-gradient-primary  border border-dotted  border-primary-500/50 w-full   rounded-lg">
                <div className="flex items-center justify-between   ">
                  <h3>Development</h3>

                  <RiArrowRightLine size={20} />
                </div>
                <div className="text-xs mt-2   leading-4 font-light  text-primary-600 dark:text-primary-400">
                  Next.js/Wordpress,Vercel, payload admin, Next.js metadata, google essential
                  integration, HubSpot, Mailchimp, Brevo, Klaviyo, Edge, CDN, Core Web Vitals
                </div>
              </div>
            </Navlink>
            <Navlink
              theme={{
                text: 'text-primary-900 dark:text-primary-50  ',
                states:
                  'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
              }}
              href="/services"
              as={Link}
              cto
            >
              <div className="backdrop-blur-3xl       p-7   bg-gradient-primary-dark dark:bg-gradient-primary  border border-dotted  border-primary-500/50   rounded-lg">
                <div className="flex items-center justify-between  gap-2 ">
                  <h3>Design</h3>
                  <span className="size-6">
                    <RiArrowRightLine />
                  </span>
                </div>
                <div className="text-xs mt-1   leading-4 font-light  text-primary-600 dark:text-primary-400">
                  Web & app interfaces, wireframes, prototypes, modern layouts, responsive design,
                  ads, posts, banners, brochures, presentations, business cards
                </div>
              </div>
            </Navlink><Navlink
              theme={{
                text: 'text-primary-900 dark:text-primary-50  ',
                states:
                  'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
              }}
              href="/services"
              as={Link}
              cto
            >
              <div className="backdrop-blur-3xl          bg-gradient-primary-dark p-7 dark:bg-gradient-primary  border border-dotted  border-primary-500/50 w-full   rounded-lg">
                <div className="flex items-center justify-between   ">
                  <h3>Development</h3>

                  <RiArrowRightLine size={20} />
                </div>
                <div className="text-xs mt-2   leading-4 font-light  text-primary-600 dark:text-primary-400">
                  Next.js/Wordpress,Vercel, payload admin, Next.js metadata, google essential
                  integration, HubSpot, Mailchimp, Brevo, Klaviyo, Edge, CDN, Core Web Vitals
                </div>
              </div>
            </Navlink>
            <Navlink
              theme={{
                text: 'text-primary-900 dark:text-primary-50  ',
                states:
                  'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
              }}
              href="/services"
              as={Link}
              cto
            >
              <div className="backdrop-blur-3xl       p-7   bg-gradient-primary-dark dark:bg-gradient-primary  border border-dotted  border-primary-500/50   rounded-lg">
                <div className="flex items-center justify-between  gap-2 ">
                  <h3>Design</h3>
                  <span className="size-6">
                    <RiArrowRightLine />
                  </span>
                </div>
                <div className="text-xs mt-1   leading-4 font-light  text-primary-600 dark:text-primary-400">
                  Web & app interfaces, wireframes, prototypes, modern layouts, responsive design,
                  ads, posts, banners, brochures, presentations, business cards
                </div>
              </div>
            </Navlink>
            <Navlink
              theme={{
                text: 'text-primary-900 dark:text-primary-50  ',
                states:
                  'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
              }}
              href="/services"
              as={Link}
              cto
            >
              <div className="backdrop-blur-3xl       p-7   bg-gradient-primary-dark dark:bg-gradient-primary  border border-dotted  border-primary-500/50   rounded-lg">
                <div className="flex items-center justify-between  gap-2 ">
                  <h3>Marketing</h3>
                  <span className="size-6">
                    <RiArrowRightLine />
                  </span>
                </div>
                <div className="text-xs mt-1   leading-4 font-light  text-primary-600 dark:text-primary-400">
                  SEO articles, landing page copy, blogs, social media campaigns, google campaigns,
                  e-commerce website, woocmmerce
                </div>
              </div>
            </Navlink>
            <Navlink
              theme={{
                text: 'text-primary-900 dark:text-primary-50  ',
                states:
                  'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
              }}
              href="/services"
              as={Link}
              cto
            >
              <div className="backdrop-blur-3xl       p-7   bg-gradient-primary-dark dark:bg-gradient-primary  border border-dotted  border-primary-500/50   rounded-lg">
                <div className="flex items-center justify-between  gap-2 ">
                  <h3>Marketing</h3>
                  <span className="size-6">
                    <RiArrowRightLine />
                  </span>
                </div>
                <div className="text-xs mt-1   leading-4 font-light  text-primary-600 dark:text-primary-400">
                  SEO articles, landing page copy, blogs, social media campaigns, google campaigns,
                  e-commerce website, woocmmerce
                </div>
              </div>
            </Navlink> */}
          </div>
          {/* </div> */}
        </MobileNav>
      </Navbar>
    </header>
  )
}

export default Header
