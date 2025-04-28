// import { Bracket, Button, Card } from '@thirdbracket/bracketui'
// import PageHeader from '../../../components/PageHeader'
// import Image from 'next/image'
// import { IconType } from 'react-icons'
// import { FaWpforms, FaWordpress } from 'react-icons/fa'
// import { SiNextdotjs, SiGithubactions, SiNotion } from 'react-icons/si'
// import { MdAutorenew, MdBusiness } from 'react-icons/md'
// import { TbBrandReact } from 'react-icons/tb'

// import { BsArrowUpRight } from 'react-icons/bs'
// import { Metadata } from 'next'
// import CTASection from '@/components/CTASection'

// export const metadata: Metadata = {
//   title: 'Web Development & Business Solutions',
// }

// interface SolutionCategory {
//   title: string
//   description: string
//   solutions: Solution[]
// }

// interface Technologies {
//   title: string
//   cto: string
// }

// interface Solution {
//   title: string
//   description?: string
//   icon?: IconType
//   features: string[]
//   technologies?: Technologies[]

//   image?: string
// }

// function SolutionCard({
//   title,
//   description,
//   // icon: Icon,

//   technologies,
//   image,
// }: Solution) {
//   return (
//     <Card
//       size="xl"
//       className="rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 bg-gradient-primary-dark dark:bg-gradient-primary active:border-opacity-100 md:hover:border-opacity-100  "
//       // style={{
//       //   backgroundImage:
//       //     "linear-gradient(to top, rgb(243, 215, 229) 0%, transparent)",
//       // }}
//       cover={
//         image && (
//           <div className="bg-slate-50 dark:bg-zinc-950   h-60 w-full lg:h-80  bg-[linear-gradient(to_right,#8697c40a_1px,transparent_1px),linear-gradient(to_bottom,#8697c40a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#464d691f_1px,transparent_1px),linear-gradient(to_bottom,#464d691f_1px,transparent_1px)] bg-[size:14px_24px]   relative">
//             <Image src={image} alt={title} fill className="object-cover " />
//           </div>
//         )
//       }
//       header={
//         <div className="flex items-center mb-2 ">
//           <h3 className="!font-semibold  max-w-md">{title}</h3>
//         </div>
//       }
//     >
//       <div className="">
//         {technologies && (
//           <div className="    pb-4 ">
//             {/* <h4 className="font-semibold mb-2">Technologies:</h4> */}
//             <div className="flex flex-wrap gap-2">
//               {technologies.map((tech, index) => (
//                 <span
//                   key={index}
//                   className="px-2 py-1 text-sm text-primary-800 bg-gradient-secondary-dark dark:bg-gradient-secondary  dark:text-primary-200 border-primary-100/80 dark:border-primary-900/70   rounded-lg border flex flex-col space-y-1 font-semibold"
//                 >
//                   {tech.cto}
//                   <span className="text-xs font-normal text-primary-500">{tech.title}</span>
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}
//         {description && (
//           <a
//             href="#"
//             className="text-primary-800 tracking-wide dark:text-primary-200 mb-2  text-sm underline"
//           >
//             {description}
//             <span className="inline-flex ml-2 items-center">
//               <BsArrowUpRight />
//             </span>
//           </a>
//         )}
//       </div>
//     </Card>
//   )
// }

// {
//   /* <div
// className="absolute bottom-0 left-0 right-0 top-24 opacity-100 "
// style={{
//   backgroundImage:
//     "linear-gradient(to top, rgb(243, 215, 229) 0%, transparent)",
// }}
// > */
// }

// function CategorySection({ title, description, solutions }: SolutionCategory) {
//   return (
//     <div className="mb-20 md:mb-24 lg:mb-28 ">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl lg:text-4xl  font-bold text-primary-950 dark:text-primary-50 mb-6  px-4">
//           {title}
//         </h2>
//         <p className="text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] font-light text-primary-950/80 dark:text-primary-50/60">
//           {description}
//         </p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {solutions.map((solution, index) => (
//           <SolutionCard key={index} {...solution} />
//         ))}
//       </div>
//     </div>
//   )
// }

// // function CaseStudyHighlight() {
// //   return (
// //     <div className="bg-primary-50 dark:bg-primary-900 rounded-lg p-8">
// //       <div className="max-w-3xl mx-auto text-center">
// //         <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
// //         <p className="text-primary-600 dark:text-primary-400 mb-8">
// //           See how our solutions have helped businesses achieve their goals
// //         </p>
// //         <div className="grid md:grid-cols-3 gap-6">
// //           {[
// //             { metric: "50%", label: "Faster Development" },
// //             { metric: "80%", label: "Automation Rate" },
// //             { metric: "3x", label: "ROI Increase" },
// //           ].map((stat, index) => (
// //             <div key={index} className="text-center">
// //               <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">
// //                 {stat.metric}
// //               </div>
// //               <div className="text-primary-600 dark:text-primary-400">
// //                 {stat.label}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// export default function Solutions() {
//   const solutionCategories: SolutionCategory[] = [
//     {
//       title: 'Automation & Integration',
//       description: 'Streamline your workflows and connect your digital ecosystem',
//       solutions: [
//         {
//           title: 'Form Integration',
//           description: 'Seamless form handling and data processing solutions',
//           icon: FaWpforms,
//           features: [
//             'Custom form builders',
//             'Data validation',
//             'API integration',
//             'Automated responses',
//             'Analytics tracking',
//           ],
//           // technologies: ["React", "Node.js", "Firebase", "Zapier"],
//           // ],
//           technologies: [
//             { title: 'React', cto: 'Latest' },
//             { title: 'Node.js', cto: '100%' },
//           ],

//           image: '/solutions/form.svg',
//         },
//         {
//           title: 'Marketing Automation',
//           description: 'Automate your marketing workflows and campaigns',
//           icon: MdAutorenew,
//           features: [
//             'Email automation',
//             'Social media scheduling',
//             'Lead scoring',
//             'Campaign tracking',
//             'Analytics integration',
//           ],
//           // technologies: ["Mailchimp", "HubSpot", "Zapier", "Google Analytics"],
//           technologies: [
//             { title: 'Mailchimp', cto: 'Latest' },
//             { title: 'HubSpot', cto: '100%' },
//             { title: 'Zapier', cto: 'Automation' },
//             { title: 'Google Analytics', cto: 'Analytics' },
//           ],
//           image: '/solutions/marketing.svg',
//         },
//         {
//           title: 'CI/CD & Release Automation',
//           description: 'Streamline your development and deployment process',
//           icon: SiGithubactions,
//           features: [
//             'Automated testing',
//             'Continuous integration',
//             'Continuous deployment',
//             'Version control',
//             'Environment management',
//           ],
//           // technologies: ["GitHub Actions", "Jenkins", "Docker", "AWS"],
//           technologies: [
//             { title: 'GitHub Actions', cto: 'Latest' },
//             { title: 'Jenkins', cto: '100%' },
//             { title: 'Docker', cto: 'Automation' },
//             { title: 'AWS', cto: 'Release' },
//           ],
//           image: '/solutions/cicd.svg',
//         },
//       ],
//     },
//     {
//       title: 'UI/UX Solutions',
//       description: 'Beautiful and functional user interfaces for modern web applications',
//       solutions: [
//         {
//           title: 'Bracket UI',
//           description: 'Our flagship UI component library for React applications',
//           icon: TbBrandReact,
//           features: [
//             'Customizable components',
//             'Dark mode support',
//             'Responsive design',
//             'Accessibility features',
//             'Performance optimized',
//           ],
//           // technologies: ["React", "TypeScript", "Tailwind CSS"],
//           technologies: [
//             { title: 'GitHub Actions', cto: 'Latest' },
//             { title: 'Jenkins', cto: '100%' },
//             { title: 'Docker', cto: 'Automation' },
//             { title: 'AWS', cto: 'Release' },
//           ],
//           image: '/solutions/bracket.svg',
//         },
//         {
//           title: 'Next.js Themes',
//           description: 'Professional themes for Next.js applications',
//           icon: SiNextdotjs,
//           features: [
//             'SEO optimized',
//             'Performance first',
//             'Modern design',
//             'Easy customization',
//             'Built-in components',
//           ],
//           // technologies: ["Next.js", "React", "Tailwind CSS"],
//           technologies: [
//             { title: 'Mailchimp', cto: 'Latest' },
//             { title: 'HubSpot', cto: '100%' },
//             { title: 'Zapier', cto: 'Automation' },
//             { title: 'Google Analytics', cto: 'Analytics' },
//           ],
//           image: '/solutions/cicd.svg',
//         },
//         {
//           title: 'WordPress Solutions',
//           description: 'Custom WordPress themes and templates',
//           icon: FaWordpress,
//           features: [
//             'Custom themes',
//             'Elementor templates',
//             'WooCommerce ready',
//             'Performance optimized',
//             'SEO friendly',
//           ],
//           // technologies: ["WordPress", "PHP", "Elementor", "WooCommerce"],
//           technologies: [
//             { title: 'Mailchimp', cto: 'Latest' },
//             { title: 'HubSpot', cto: '100%' },
//             { title: 'Zapier', cto: 'Automation' },
//             { title: 'Google Analytics', cto: 'Analytics' },
//           ],
//           image: '/solutions/marketing.svg',
//         },
//       ],
//     },
//     {
//       title: 'Complete Solutions',
//       description: 'End-to-end solutions for your business needs',
//       solutions: [
//         {
//           title: 'WordPress 360',
//           description: 'Complete WordPress solution for your business',
//           icon: FaWordpress,
//           features: [
//             'Custom theme development',
//             'Plugin integration',
//             'Security setup',
//             'Performance optimization',
//             'Maintenance & support',
//           ],
//           // technologies: ["WordPress", "PHP", "MySQL", "Redis"],
//           technologies: [
//             { title: 'Mailchimp', cto: 'Latest' },
//             { title: 'HubSpot', cto: '100%' },
//             { title: 'Zapier', cto: 'Automation' },
//             { title: 'Google Analytics', cto: 'Analytics' },
//           ],
//           image: '/solutions/cicd.svg',
//         },
//         {
//           title: 'Notion Blog',
//           description: 'Turn your Notion workspace into a beautiful blog',
//           icon: SiNotion,
//           features: [
//             'Notion integration',
//             'Custom design',
//             'SEO optimization',
//             'Analytics integration',
//             'Automated publishing',
//           ],
//           // technologies: ["Next.js", "Notion API", "React", "Vercel"],
//           technologies: [
//             { title: 'Mailchimp', cto: 'Latest' },
//             { title: 'HubSpot', cto: '100%' },
//             { title: 'Zapier', cto: 'Automation' },
//             { title: 'Google Analytics', cto: 'Analytics' },
//           ],
//           image: '/solutions/bracket.svg',
//         },
//         {
//           title: 'Business 360',
//           description: 'Complete digital transformation for your business',
//           icon: MdBusiness,
//           features: [
//             'Website development',
//             'Digital marketing',
//             'Business automation',
//             'Analytics setup',
//             'Maintenance & support',
//           ],
//           // technologies: ["Next.js", "WordPress", "Google Analytics", "AWS"],
//           technologies: [
//             { title: 'Mailchimp', cto: 'Latest' },
//             { title: 'HubSpot', cto: '100%' },
//             { title: 'Zapier', cto: 'Automation' },
//             { title: 'Google Analytics', cto: 'Analytics' },
//           ],
//           image: '/solutions/cicd.svg',
//         },
//       ],
//     },
//   ]

//   return (
//     <Bracket>
//       <PageHeader
//         title="Solutions"
//         description="Comprehensive digital solutions for modern businesses"
//       />

//       <div className="mx-auto max-w-screen-xl  py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
//         {/* Solutions Categories */}
//         {solutionCategories.map((category, index) => (
//           <CategorySection key={index} {...category} />
//         ))}

//         <div className=" rounded-lg p-8 lg:p-12 text-center bg-accent-radial dark:bg-accent-radial-dark  border border-secondary-500/40">
//           <h3 className="text-3xl  font-semibold  text-primary-950 dark:text-primary-50 mb-4">
//             Ready to Transform Your Digital Presence?
//           </h3>
//           <p className="text-primary-950/70 dark:text-primary-50/60 text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem]   font-light mb-6">
//             Let us discuss how our solutions can help you achieve your goals
//           </p>

//           <Button
//             size="md"
//             className="bg-gradient-primary dark:bg-gradient-primary-dark !text-white dark:!text-primary-950 [@media(hover:hover)]:hover:opacity-90 active:opacity-85 "
//           >
//             {' '}
//             Schedule a Consultation
//           </Button>
//         </div>
//       </div>
//     </Bracket>
//   )
// }

// page.tsx
import { Bracket } from '@thirdbracket/bracketui'
import PageHeader from '@/components/PageHeader'
import { Metadata } from 'next'
import { solutionCategories } from './Solutions'
import CategorySection from './CategorySection'
import CTABlock from './CTABlock'
import CTASection from '@/components/CTASection'
import Steps from './Steps'

export const metadata: Metadata = {
  title: 'Web Development & Business Solutions',
}

export default function Solutions() {
  return (
    <section>
      <PageHeader
        title="Solutions"
        description="Comprehensive digital solutions for modern businesses"
      />

      <div className="mx-auto max-w-screen-xl py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        {solutionCategories.map((category, index) => (
          <CategorySection key={index} {...category} />
        ))}
        <Steps />

        <CTASection
          title="Ready to Transform Your Digital Presence?"
          description="Let us discuss how our solutions can help you achieve your goals"
          primary={{
            label: 'Consult Us',
            href: '/contact',
          }}
          secondary={{
            label: 'About Us',
            href: '/projects',
          }}
        />
      </div>
    </section>
  )
}
