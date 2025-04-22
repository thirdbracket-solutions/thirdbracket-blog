import { Bracket, Card } from '@thirdbracket/bracketui'
import Image from 'next/image'
import Link from 'next/link'

export function FeatureOne() {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <Bracket fluid centered padding="medium">
        {/* Header Container */}
        <div className="mx-auto max-w-screen-xl">
          {/* Title group with flex layout on large screens */}
          <div className=" mb-8 md:mb-12 lg:mb-16  lg:flex lg:items-center lg:justify-center lg:gap-6">
            <h2 className="mb-4 md:mb-6 text-3xl lg:text-4xl  font-bold text-primary-950 dark:text-primary-50     lg:mb-0 text-left sm:text-center lg:text-right  ">
              Looking for Fast & Beautiful Websites for Your Business?
            </h2>
            <p className="text-primary-950/80 dark:text-primary-50/60  font-light text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] text-left  sm:text-center lg:text-left ">
              Wheather you are a startup or an agency, we help you build scalable, seo-optimized
              websites with a clean, minimal design that aligns with your brand.
            </p>
          </div>

          {/* Cards Container */}
          <div className="space-y-8">
            {/* Top row - Two cards with images */}
            <div className="grid gap-8 md:grid-cols-2">
              <Card
                size="lg"
                as={Link}
                href="/solutions"
                className="w-full  h-full rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out bg-gradient-primary-dark dark:bg-gradient-primary   focus-within:border-opacity-100 active:border-opacity-100  md:hover:border-opacity-100" // Added full width and height
                cover={
                  <div className="h-60 w-full lg:h-80 bg-white dark:bg-black   bg-[linear-gradient(to_right,#8697c40a_1px,transparent_1px),linear-gradient(to_bottom,#8697c40a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#636e9f1f_1px,transparent_1px),linear-gradient(to_bottom,#636e9f1f_1px,transparent_1px)] bg-[size:14px_24px]   relative">
                    <Image
                      src="/website.svg"
                      alt="Enterprise Solutions"
                      fill
                      className="object-cover  "
                    />
                  </div>
                }
                header="Fast Websites that Rank"
              >
                <span className="font-light text-primary-950/80 dark:text-primary-50/60 ">
                  We focus on building high-performing websites that load quickly and are fully
                  SEO-optimized, ensuring your site performs well on search engines and delivers a
                  smooth experience for users.
                </span>
              </Card>

              <Card
                size="lg"
                href="/services"
                as={Link}
                className="w-full h-full  rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out bg-gradient-primary-dark dark:bg-gradient-primary focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100 " // Added full width and height
                cover={
                  <div className="h-60 w-full lg:h-80 bg-white dark:bg-black bg-[linear-gradient(to_right,#8697c40a_1px,transparent_1px),linear-gradient(to_bottom,#8697c40a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#636e9f1f_1px,transparent_1px),linear-gradient(to_bottom,#636e9f1f_1px,transparent_1px)] bg-[size:14px_24px]   relative">
                    <Image src="/ui.svg" alt="Professional Teams" fill className="object-cover " />
                  </div>
                }
                header="Designs That Reflect Your Brand"
              >
                <span className="font-light text-primary-950/80 dark:text-primary-50/60">
                  We create clean, minimalist designs that not only look beautiful but also focus on
                  functionality. Our approach ensures your website is easy to navigate, visually
                  stunning, and in line with your brand’s vision.
                </span>
              </Card>
            </div>

            {/* Bottom row - Three cards without images */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card
                size="lg"
                as={Link}
                className="w-full h-full bg-gradient-primary-dark dark:bg-gradient-primary rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100 " // Added full width and height
                header="Enterprise-Level Websites"
                href="/solutions"
              >
                <span className="font-light text-primary-950/80 dark:text-primary-50/60">
                  Our Next.js solutions are built to scale, perfect for businesses that require
                  robust, enterprise-level websites that need fast load times, seamless user
                  experiences, and easy maintainability.
                </span>
              </Card>

              <Card
                size="lg"
                as={Link}
                className="w-full h-full bg-gradient-primary-dark dark:bg-gradient-primary rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100 " // Added full width and height
                header="White-Label Web Development"
                href="/solutions"
              >
                <span className="font-light text-primary-950/80 dark:text-primary-50/60">
                  Looking for web development without expanding your team? Our white-label services
                  let you offer top-tier websites to your clients while we handle everything behind
                  the scenes.
                </span>
              </Card>

              <Card
                size="lg"
                as={Link}
                className="w-full h-full bg-gradient-primary-dark dark:bg-gradient-primary rounded-lg border  border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100  md:hover:border-opacity-100 "
                header="Custom Web Development"
                href="/solutions"
              >
                <span className="font-light text-primary-950/80 dark:text-primary-50/60">
                  Every business is unique. Our custom web development services are designed to meet
                  your specific needs, ensuring your site supports your goals and offers a unique
                  user experience.
                </span>
              </Card>
            </div>
          </div>
        </div>
      </Bracket>
    </section>
  )
}
