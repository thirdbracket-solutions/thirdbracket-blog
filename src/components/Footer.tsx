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
import { Logo } from './Logo/Logo'

const SiteFooter = () => {
  return (
    <Footer className="dark:!bg-black ">
      <FooterSection className="col-span-2">
        {/* <FooterBrand logo="/logo.svg">
          Making the web a better place with Third Bracket Solutions.
        </FooterBrand> */}
        <Link href="/">
          <Logo className="w-auto h-6 md:h-7 dark:invert" loading="lazy" />
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
      <FooterSection title="Useful Links">
        <FooterLink href="https://www.business-directory-uk.co.uk/web-design.htm" target="_blank"
      rel="noopener noreferrer">UK Web Designers - Directory of Web Design Companies in the UK</FooterLink>
           <div className="w-full flex justify-center mt-6">
        <img 
          src="https://www.business-directory.org.uk/c.php?id=117346" 
          style={{ position: 'absolute', visibility: 'hidden' }} 
          alt="Business Directory Tracker" 
        />
        <a href="https://www.business-directory.org.uk/">
          <img 
            src="https://www.business-directory.org.uk/free-business-directory.png" 
            alt="Free Business Directory" 
            style={{ border: 0 }} 
          />
        </a>
      </div>
         </FooterSection>

 <FooterBottom>
  <FooterText>© 2025 Third Bracket Solution.</FooterText>
 >
   <ThemeToggle />
        {/* <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center">
    <a
      href="https://www.business-directory-uk.co.uk/web-design.htm"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-primary-700 dark:text-primary-500 underline hover:text-primary-900 dark:hover:text-primary-300"
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
