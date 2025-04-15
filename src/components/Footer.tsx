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
import Image from 'next/image'
import Link from 'next/link'

import { RiFacebookLine, RiLinkedinLine, RiMailLine, RiPhoneLine } from 'react-icons/ri'

const SiteFooter = () => {
  return (
    <Footer className="dark:!bg-black ">
      <FooterSection className="col-span-2">
        {/* <FooterBrand logo="/logo.svg">
          Making the web a better place with Third Bracket Solutions.
        </FooterBrand> */}
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/icon32.svg"
            width={32}
            height={32}
            alt="Logo"
            className=" shadow-sm shadow-primary-500/70 rounded"
          />
          <h3 className="ml-2 bg-gradient-primary dark:bg-gradient-primary-dark  text-transparent bg-clip-text text-3xl font-medium tracking-tight">
            Third Bracket Studio
          </h3>
        </Link>
        <p className="text-base  text-primary-700 dark:text-primary-600">
          Making the web a better place with Third Bracket Solutions.
        </p>
        <div className="flex  gap-x-4 justify-start items-center">
          <FooterSocial
            href="https://facebook.com/yourpage"
            icon={<RiFacebookLine size={16} />}
            label="Facebook"
          />
          <FooterSocial
            href="https://linkedin.com/in/yourprofile"
            icon={<RiLinkedinLine size={18} />}
            label="LinkedIn"
          />
          <FooterSocial
            href="mailto:your@email.com"
            icon={<RiMailLine size={20} />}
            label="Email"
          />
          <FooterSocial href="tel:+1234567890" icon={<RiPhoneLine size={18} />} label="Phone" />
        </div>
      </FooterSection>

      <FooterSection title="About">
        <FooterLink href="#">Components</FooterLink>
        <FooterLink href="#">Templates</FooterLink>
        <FooterLink href="#">Pricing</FooterLink>
      </FooterSection>

      <FooterSection title="Resources">
        <FooterLink href="#">Documentation</FooterLink>
        <FooterLink href="#">Guides</FooterLink>
        <FooterLink href="#">Support</FooterLink>
      </FooterSection>

      <FooterSection title="Legal">
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Terms of Service</FooterLink>
      </FooterSection>
      <FooterSection title="More">
        <FooterLink href="#">Components</FooterLink>
        <FooterLink href="#">Templates</FooterLink>
        <FooterLink href="#">Pricing</FooterLink>
      </FooterSection>
      <FooterBottom>
        <FooterText>© 2024 Third Bracket Solution.</FooterText>
        <div>
          <ThemeToggle />
        </div>
      </FooterBottom>
    </Footer>
  )
}
export default SiteFooter
