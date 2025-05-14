import {
  Footer,
  FooterBottom,
  FooterBrand,
  FooterLink,
  FooterSection,
  FooterSocial,
  FooterText,
  ThemeToggle,
} from '@thirdbracket/bracketui'

import { RiFacebookLine, RiGithubLine, RiLinkedinLine } from 'react-icons/ri'

const SiteFooter = () => {
  return (
    <Footer
      theme={{
        background: 'bg-white dark:bg-black',
        border: 'border-primary-200 dark:border-primary-800',
      }}
    >
      <FooterSection className="col-span-2 ">
        <FooterBrand logo="/logo.svg">
          <p className="text-primary-600 dark:text-primary-500 text-sm">
            Making the web a better place with Third Bracket Solutions.
          </p>
        </FooterBrand>

        <div className="flex  gap-x-4 justify-start items-center">
          <FooterSocial
            href="https://www.facebook.com/thirdbracket.co.uk"
            icon={<RiFacebookLine size={20} />}
            label="Facebook"
          />
          <FooterSocial
            href="https://www.linkedin.com/company/thirdbracket"
            icon={<RiLinkedinLine size={20} />}
            label="LinkedIn"
          />
          <FooterSocial
            href="https://github.com/thirdbracket-solutions"
            icon={<RiGithubLine size={20} />}
            label="Facebook"
          />
        </div>
      </FooterSection>

      <FooterSection title="About">
        <FooterLink
          theme={{
            text: 'text-primary-800   dark:text-primary-100',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="#"
        >
          About Third Bracket
        </FooterLink>
        <FooterLink
          theme={{
            text: 'text-primary-800   dark:text-primary-100',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="#"
        >
          Our Team
        </FooterLink>
      </FooterSection>

      <FooterSection title="Partners">
        <FooterLink
          theme={{
            text: 'text-primary-800   dark:text-primary-100',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="#"
        >
          Verify Properties
        </FooterLink>
        <FooterLink
          theme={{
            text: 'text-primary-800   dark:text-primary-100',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="#"
        >
          Products of Bangladesh
        </FooterLink>
        <FooterLink
          theme={{
            text: 'text-primary-800   dark:text-primary-100',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="#"
        >
          Habiganj Properties
        </FooterLink>
      </FooterSection>

      <FooterSection title="Legal">
        <FooterLink
          theme={{
            text: 'text-primary-800   dark:text-primary-100',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="#"
        >
          Privacy Policy
        </FooterLink>
        <FooterLink
          theme={{
            text: 'text-primary-800   dark:text-primary-100',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="#"
        >
          Terms of Service
        </FooterLink>
      </FooterSection>
      <FooterSection title="Bracket UI">
        <FooterLink
          theme={{
            text: 'text-primary-800   dark:text-primary-100',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="#"
        >
          Components
        </FooterLink>
        <FooterLink
          theme={{
            text: 'text-primary-800  dark:text-primary-100',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="#"
        >
          Blocks
        </FooterLink>
        <FooterLink
          theme={{
            text: 'text-primary-800   dark:text-primary-100',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
          href="#"
        >
          Pages
        </FooterLink>
      </FooterSection>
      <FooterSection title="Useful Links">
        <FooterLink
          href="https://www.business-directory-uk.co.uk/web-design.htm"
          target="_blank"
          rel="noopener noreferrer"
          theme={{
            text: 'text-primary-800   dark:text-primary-100',
            states:
              'focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100',
          }}
        >
          UK Web Designers - Directory of Web Design Companies in the UK
        </FooterLink>
      </FooterSection>

      <FooterBottom>
        <FooterText>© 2025 Third Bracket Solution.</FooterText>

        <ThemeToggle />
        {/* <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center">
    <a
      href="https://www.business-directory-uk.co.uk/web-design.htm"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-primary-700 dark:text-primary-500 underline hover:text-primary-800 dark:hover:text-primary-300"
    >
      UK Web Designers - Directory of Web Design Companies in the UK
    </a>
    <ThemeToggle />
  </div> */}
      </FooterBottom>
    </Footer>
  )
}
export default SiteFooter
