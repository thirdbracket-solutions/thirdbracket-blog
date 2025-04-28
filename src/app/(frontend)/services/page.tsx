// // src/app/services/page.tsx
// import { Bracket, Button, Card } from '@thirdbracket/bracketui'
// import PageHeader from '../../../components/PageHeader'
// import { IconType } from 'react-icons'
// import { FaWordpress, FaServer, FaSearch, FaPencilAlt, FaRocket } from 'react-icons/fa'
// import { SiNextdotjs } from 'react-icons/si'
// import { MdSpeed, MdDesignServices, MdBrandingWatermark } from 'react-icons/md'
// import { Metadata } from 'next'

import PageHeader from '@/components/PageHeader'
import Category from './Catagory'
import ContactCTA from './ContactCTA'
import Stats from './Stats'
import TechStack from './TechStack'
import { Metadata } from 'next'
import { IoTimerOutline } from 'react-icons/io5'
import { SiNextdotjs, SiWordpress } from 'react-icons/si'
import {
  FaCode,
  FaCubes,
  FaDesktop,
  FaExchangeAlt,
  FaFileCode,
  FaGoogle,
  FaHashtag,
  FaLightbulb,
  FaPaintBrush,
  FaPencilAlt,
  FaRocket,
  FaSearch,
  FaServer,
  FaSyncAlt,
  FaTachometerAlt,
  FaVectorSquare,
} from 'react-icons/fa'
import CTASection from '@/components/CTASection'

// export const metadata: Metadata = {
//   title: 'Web & Digital Marketing Services',
// }

// interface ServiceCategory {
//   title: string
//   description: string
//   services: Service[]
// }

// interface Service {
//   title: string
//   description: string
//   icon: IconType
//   features: string[]
// }

// function ServiceCard({ title, description, icon: Icon, features }: Service) {
//   return (
//     <Card
//       isIcon
//       size="lg"
//       header={title}
//       className="rounded-lg border border-primary-500  border-opacity-40 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100   bg-gradient-primary-dark dark:bg-gradient-primary"
//       cover={
//         <div className="w-12 h-12 mb-4 flex items-center  justify-center   border border-primary-500/40  bg-gradient-secondary-dark dark:bg-gradient-secondary  rounded-lg">
//           <Icon className="w-6 h-6 text-primary-900 dark:text-primary-100" />
//         </div>
//       }
//       // className="p-6 border border-primary-200 dark:border-primary-800 rounded-lg hover:shadow-lg transition-all"
//     >
//       {/* <h3 className="text-xl  font-semibold mb-3">{title}</h3>
//       <p className="text-primary-600 dark:text-primary-400 mb-4">
//         {description}
//       </p> */}

//       <p className="text-primary-600 dark:text-primary-400 mb-4">{description}</p>
//       <ul className="space-y-2">
//         {features.map((feature, index) => (
//           <li
//             key={index}
//             className="flex items-center text-sm text-primary-600 dark:text-primary-400"
//           >
//             <span className="w-1.5 h-1.5 bg-primary-900 dark:bg-primary-100 rounded-full mr-2"></span>
//             {feature}
//           </li>
//         ))}
//       </ul>
//     </Card>
//   )
// }

// function CategorySection({ title, description, services }: ServiceCategory) {
//   return (
//     <div className="mb-20 md:mb-24 lg:mb-28">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl lg:text-4xl  font-bold text-primary-950 dark:text-primary-50 mb-4 md:mb-6  px-4">
//           {title}
//         </h2>
//         <p className="text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] font-light text-primary-950/80 dark:text-primary-50/60">
//           {description}
//         </p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {services.map((service, index) => (
//           <ServiceCard key={index} {...service} />
//         ))}
//       </div>
//     </div>
//   )
// }

// function ContactCTA() {
//   return (
//     <div className="rounded-lg p-8 lg:p-12 text-center bg-accent-radial dark:bg-accent-radial-dark  border border-secondary-500/40 ">
//       <h3 className="text-3xl font-semibold  text-primary-950 dark:text-primary-50 mb-4">
//         Ready to Transform Your Digital Presence?
//       </h3>
//       <p className="text-primary-950/70 dark:text-primary-50/60 text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem]   font-light mb-6">
//         Let us discuss how we can help you achieve your goals
//       </p>

//       <Button
//         size="md"
//         className="bg-gradient-primary dark:bg-gradient-primary-dark !text-white dark:!text-primary-950 [@media(hover:hover)]:hover:opacity-90 active:opacity-85 "
//       >
//         {' '}
//         Contact Us
//       </Button>
//     </div>
//   )
// }

// export default function Services() {
//   const serviceCategories: ServiceCategory[] = [
//     {
//       title: 'Web Development',
//       description: 'Modern web solutions built with cutting-edge technologies',
//       services: [
//         {
//           title: 'Next.js Development',
//           description: 'High-performance React applications with server-side rendering',
//           icon: SiNextdotjs,
//           features: [
//             'Server-side rendering',
//             'Static site generation',
//             'API routes and serverless functions',
//             'Performance optimization',
//             'SEO-friendly architecture',
//           ],
//         },
//         {
//           title: 'WordPress Development',
//           description: 'Custom WordPress solutions for content-driven websites',
//           icon: FaWordpress,
//           features: [
//             'Custom theme development',
//             'Plugin development',
//             'WooCommerce integration',
//             'Performance optimization',
//             'Security hardening',
//           ],
//         },
//         {
//           title: 'Headless & Serverless',
//           description: 'Modern architectures for scalable applications',
//           icon: FaServer,
//           features: [
//             'Headless CMS integration',
//             'JAMstack architecture',
//             'Serverless functions',
//             'API development',
//             'Cloud deployment',
//           ],
//         },
//       ],
//     },
//     {
//       title: 'Digital Marketing',
//       description: 'Strategic digital marketing solutions to grow your business',
//       services: [
//         {
//           title: 'SEO & Web Visibility',
//           description: 'Improve your search engine rankings and online presence',
//           icon: FaSearch,
//           features: [
//             'Technical SEO optimization',
//             'Content strategy',
//             'Keyword research',
//             'Link building',
//             'Performance tracking',
//           ],
//         },
//         {
//           title: 'Branding & Design',
//           description: 'Create a strong brand identity that resonates',
//           icon: MdBrandingWatermark,
//           features: [
//             'Brand strategy',
//             'Visual identity design',
//             'Brand guidelines',
//             'Marketing materials',
//             'Brand messaging',
//           ],
//         },
//         {
//           title: 'Content & Copywriting',
//           description: 'Engaging content that converts visitors into customers',
//           icon: FaPencilAlt,
//           features: [
//             'Website copywriting',
//             'Blog content',
//             'Email campaigns',
//             'Social media content',
//             'SEO copywriting',
//           ],
//         },
//       ],
//     },
//     {
//       title: 'Other Services',
//       description: 'Specialized solutions to enhance your digital products',
//       services: [
//         {
//           title: 'UI/UX Design',
//           description: 'User-centered design solutions for digital products',
//           icon: MdDesignServices,
//           features: [
//             'User interface design',
//             'User experience design',
//             'Wireframing',
//             'Prototyping',
//             'Usability testing',
//           ],
//         },
//         {
//           title: 'Performance Optimization',
//           description: 'Optimize your applications for speed and efficiency',
//           icon: MdSpeed,
//           features: [
//             'Load time optimization',
//             'Code optimization',
//             'Database optimization',
//             'Caching strategies',
//             'Performance monitoring',
//           ],
//         },
//         {
//           title: 'Prototyping',
//           description: 'Rapid prototyping for concept validation',
//           icon: FaRocket,
//           features: [
//             'Interactive prototypes',
//             'MVP development',
//             'Concept validation',
//             'User testing',
//             'Iterative development',
//           ],
//         },
//       ],
//     },
//   ]

//   return (
//     <Bracket>
//       <PageHeader
//         title="Our Services"
//         description="Comprehensive digital solutions tailored to your needs"
//       />

//       <div className="mx-auto max-w-screen-xl  py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
//         {serviceCategories.map((category, index) => (
//           <CategorySection key={index} {...category} />
//         ))}

//         {/* Process Section */}
//         <div className="mb-20">
//           <h2 className="text-3xl lg:text-4xl   text-primary-950 dark:text-primary-50 font-bold text-center mb-12 ">
//             Our Process
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {[
//               {
//                 step: '1',
//                 title: 'Discovery',
//                 description: 'Understanding your needs',
//               },
//               {
//                 step: '2',
//                 title: 'Planning',
//                 description: 'Creating the roadmap',
//               },
//               {
//                 step: '3',
//                 title: 'Execution',
//                 description: 'Building your solution',
//               },
//               {
//                 step: '4',
//                 title: 'Support',
//                 description: 'Ongoing maintenance',
//               },
//             ].map((phase, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-12 h-12 rounded-full bg-primary-900 dark:bg-primary-50  text-white dark:text-primary-950 flex items-center justify-center mx-auto mb-4">
//                   {phase.step}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
//                 <p className="text-primary-600 dark:text-primary-400">{phase.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <ContactCTA />
//       </div>
//     </Bracket>
//   )
// }

// import { Metadata } from 'next'
// import { FaWordpress, FaSearch, FaRocket, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa'
// import { SiNextdotjs, SiVercel, SiTailwindcss, SiGoogleanalytics } from 'react-icons/si'
// import { MdSpeed, MdDesignServices, MdBrandingWatermark } from 'react-icons/md'
// import { IconType } from 'react-icons'
// import PageHeader from '@/components/PageHeader'
// import { Bracket, Button, Card } from '@thirdbracket/bracketui'

// interface Service {
//   title: string
//   description: string
//   icon: IconType
//   features: string[]
// }

// interface ServiceCategory {
//   title: string
//   description: string
//   services: Service[]
//   stackIcons: IconType[]
//   illustration: {
//     src: string
//     alt: string
//   }
// }

// function ServiceCard({ title, description, icon: Icon, features }: Service) {
//   return (
//     <Card
//       isIcon
//       size="lg"
//       header={title}
//       className="rounded-lg border border-primary-500  border-opacity-40 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100   bg-gradient-primary-dark dark:bg-gradient-primary"
//       cover={
//         <div className="w-12 h-12 mb-4 flex items-center  justify-center   border border-primary-500/40  bg-gradient-secondary-dark dark:bg-gradient-secondary  rounded-lg">
//           <Icon className="w-6 h-6 text-primary-900 dark:text-primary-100" />
//         </div>
//       }
//     >
//       <p className="text-primary-600 dark:text-primary-400 mb-4">{description}</p>
//       <ul className="space-y-2">
//         {features.map((feature, index) => (
//           <li
//             key={index}
//             className="flex items-center text-sm text-primary-600 dark:text-primary-400"
//           >
//             <span className="w-1.5 h-1.5 bg-primary-900 dark:bg-primary-100 rounded-full mr-2"></span>
//             {feature}
//           </li>
//         ))}
//       </ul>
//     </Card>
//   )
// }

// const serviceCategories: ServiceCategory[] = [
//   {
//     title: 'Web Development',
//     description: 'Modern web solutions built with cutting-edge technologies.',
//     stackIcons: [SiNextdotjs, FaWordpress, FaReact, FaNodeJs, SiVercel],
//     illustration: {
//       src: '/webdev555.svg',
//       alt: 'ff',
//     },
//     services: [
//       {
//         title: 'Next.js Development',
//         description: 'Blazing fast websites and web apps with the latest Next.js stack.',
//         icon: SiNextdotjs,
//         features: [
//           'Server-side rendering',
//           'Static site generation',
//           'API routes and serverless functions',
//           'Performance optimization',
//           'SEO-friendly architecture',
//         ],
//       },
//       {
//         title: 'WordPress Integration',
//         description: 'Custom WordPress sites and headless WordPress for dynamic content.',
//         icon: FaWordpress,
//         features: [
//           'Custom theme development',
//           'Plugin development',
//           'WooCommerce integration',
//           'Performance optimization',
//           'Security hardening',
//         ],
//       },
//       {
//         title: 'Frontend UI & Components',
//         description: 'Minimal and fast UI with our own BracketUI component library.',
//         icon: FaReact,
//         features: [
//           'Headless CMS integration',
//           'JAMstack architecture',
//           'Serverless functions',
//           'API development',
//           'Cloud deployment',
//         ],
//       },
//     ],
//   },
//   {
//     title: 'Digital Marketing',
//     description: 'Strategic digital marketing to grow traffic, rankings, and conversions.',
//     stackIcons: [FaSearch, SiGoogleanalytics, MdBrandingWatermark],
//     illustration: {
//       src: '/webdev555.svg',
//       alt: 'ff',
//     },
//     services: [
//       {
//         title: 'SEO Optimization',
//         description: 'Optimized for search engine visibility and top rankings.',
//         icon: FaSearch,
//         features: [
//           'Technical SEO optimization',
//           'Content strategy',
//           'Keyword research',
//           'Link building',
//           'Performance tracking',
//         ],
//       },
//       {
//         title: 'Performance & Analytics',
//         description: 'Monitor user journeys and performance with accurate insights.',
//         icon: SiGoogleanalytics,
//         features: [
//           'Brand strategy',
//           'Visual identity design',
//           'Brand guidelines',
//           'Marketing materials',
//           'Brand messaging',
//         ],
//       },
//       {
//         title: 'Brand Strategy',
//         description: 'Clear positioning with a modern brand and marketing funnel.',
//         icon: MdBrandingWatermark,
//         features: [
//           'Website copywriting',
//           'Blog content',
//           'Email campaigns',
//           'Social media content',
//           'SEO copywriting',
//         ],
//       },
//     ],
//   },
//   {
//     title: 'Other Services',
//     description: 'Extra services to level up your products and improve engagement.',
//     stackIcons: [MdDesignServices, MdSpeed, FaFigma, FaRocket, SiTailwindcss],
//     illustration: {
//       src: '/webdev555.svg',
//       alt: 'ff',
//     },
//     services: [
//       {
//         title: 'Web Design',
//         description: 'Beautiful UI/UX designs built to convert and impress.',
//         icon: MdDesignServices,
//         features: [
//           'User interface design',
//           'User experience design',
//           'Wireframing',
//           'Prototyping',
//           'Usability testing',
//         ],
//       },
//       {
//         title: 'Speed Optimization',
//         description: 'Score better on PageSpeed, DebugBear, and real-world metrics.',
//         icon: MdSpeed,
//         features: [
//           'Load time optimization',
//           'Code optimization',
//           'Database optimization',
//           'Caching strategies',
//           'Performance monitoring',
//         ],
//       },
//       {
//         title: 'Figma to Frontend',
//         description: 'Convert design files into perfect, fast code.',
//         icon: FaFigma,
//         features: [
//           'Interactive prototypes',
//           'MVP development',
//           'Concept validation',
//           'User testing',
//           'Iterative development',
//         ],
//       },
//     ],
//   },
// ]

// function TechStack({ icons }: { icons: IconType[] }) {
//   return (
//     <>
//       {icons.map((Icon, i) => (
//         <div
//           key={i}
//           className="w-14 h-14 flex items-center justify-center  border rounded-xl border-primary-500/20 bg-accent-radial dark:bg-accent-radial-dark dark:bg-primary-900"
//         >
//           <Icon className="text-xl  text-primary-800 dark:text-primary-200" />
//         </div>
//       ))}
//     </>
//   )
// }

// function CategorySection({ title, description, services, stackIcons }: ServiceCategory) {
//   const index = serviceCategories.findIndex((c) => c.title === title)
//   const isEven = index % 2 === 0

//   return (
//     <div className="py-10 sm:py-12  lg:py-14 xl:py-16">
//       <div
//         className={`flex flex-col sm:max-w-screen-md lg:max-w-4xl  md:flex-row  md:mx-auto ${isEven ? 'md:text-right ' : 'md:flex-row-reverse  '} items-center gap-8 md:gap-12 mb-12`}
//       >
//         {/* Left: Content */}
//         <div className="md:w-1/2">
//           <h2 className="text-3xl lg:text-4xl font-bold text-primary-950 dark:text-primary-50 mb-4 md:mb-6">
//             {title}
//           </h2>
//           <p className="text-base md:text-lg lg:text-xl font-light text-primary-950/80 dark:text-primary-50/60 mb-4">
//             {description}
//           </p>
//         </div>

//         {/* Right: Illustration */}

//         {/* <div className="w-full max-w-[300px] h-[200px] rounded-lg border border-primary-500/20 bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-400 text-sm"> */}
//         <div className="  border border-dashed rounded-3xl border-primary-500/20   p-6   text-primary-400  flex flex-wrap  gap-4   ">
//           <TechStack icons={stackIcons} />
//         </div>
//         {/* </div> */}
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {services.map((service, index) => (
//           <ServiceCard key={index} {...service} />
//         ))}
//       </div>
//     </div>
//   )
// }

// function StatsSection() {
//   const stats = [
//     { label: 'Projects Delivered', value: '150+' },
//     { label: 'Average Speed Boost', value: '3x' },
//     { label: 'Client Retention Rate', value: '98%' },
//     { label: 'Stack Specialties', value: '15+' },
//   ]

//   return (
//     <div className="py-10 sm:py-12  lg:py-14 xl:py-16">
//       <div className="py-10 sm:py-12  lg:py-14 xl:py-16 text-center border-y border-primary-500/20">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
//           {stats.map((stat, index) => (
//             <div key={index}>
//               <div className="text-3xl font-bold text-primary-900 dark:text-primary-100">
//                 {stat.value}
//               </div>
//               <div className="text-primary-600 dark:text-primary-400">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// function ContactCTA() {
//   return (
//     <div className="py-10 sm:py-12  lg:py-14 xl:py-16">
//       <div className="rounded-lg p-8 lg:p-12 text-center bg-accent-radial dark:bg-accent-radial-dark  border border-secondary-500/40 ">
//         <h3 className="text-3xl font-semibold  text-primary-950 dark:text-primary-50 mb-4">
//           Ready to Transform Your Digital Presence?
//         </h3>
//         <p className="text-primary-950/70 dark:text-primary-50/60 text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem]   font-light mb-6">
//           Let us discuss how we can help you achieve your goals
//         </p>

//         <Button
//           size="md"
//           className="bg-gradient-primary dark:bg-gradient-primary-dark !text-white dark:!text-primary-950 [@media(hover:hover)]:hover:opacity-90 active:opacity-85 "
//         >
//           Contact Us
//         </Button>
//       </div>
//     </div>
//   )
// }

// export const metadata: Metadata = {
//   title: 'Services | Third Bracket',
//   description:
//     'Explore our modern web development and digital marketing services crafted for UK agencies and small businesses. We deliver speed, SEO, and clean design.',
// }

// export default function Services() {
//   return (
//     <>
//       <PageHeader
//         title="Services"
//         description="Full-service modern web development & marketing for small businesses, agencies, and startups in the UK."
//       />

//       <Bracket fluid centered padding="medium">
//         <div className="mx-auto max-w-screen-xl ">
//           <div className="py-10 sm:py-12  lg:py-14 xl:py-16">
//             {serviceCategories.map((category, index) => (
//               <CategorySection key={index} {...category} />
//             ))}
//           </div>

//           <StatsSection />
//           <ContactCTA />
//         </div>
//       </Bracket>
//     </>
//   )
// }

// const categories = [
//   {
//     title: 'Modern Web Development',
//     description:
//       'We craft high-performance websites using modern frameworks that are scalable, SEO-friendly, and fast by default.',
//     illustration: {
//       src: '/5555.svg',
//       alt: 'Modern Web Development Illustration',
//     },
//     stackIcons: TechStack(['SiNextdotjs', 'SiPayloadcms', 'SiTailwindcss', 'SiVercel']),
//     services: [
//       {
//         title: 'Next.js Development',
//         description:
//           'Build blazing fast websites and applications using the power of React and server components.',
//         features: ['App Router', 'ISR & SSR', 'SEO Optimization'],
//         badge: 'Frontend',
//         icon: IoTimerOutline,
//       },
//       {
//         title: 'Headless CMS Integration',
//         description: 'Custom admin interfaces and content workflows with Payload CMS.',
//         features: ['Custom Collections', 'Access Control', 'Form Builder'],
//         badge: 'CMS',
//         icon: IoTimerOutline,
//       },
//       {
//         title: 'Performance Engineering',
//         description: 'Optimize Core Web Vitals for faster load times and better rankings.',
//         features: ['Lighthouse 90+', 'Image Optimization', 'Bundle Splitting'],
//         badge: 'Performance',
//         icon: IoTimerOutline,
//       },
//       {
//         title: 'API & Backend Logic',
//         description: 'Build scalable serverless APIs and backend logic for your web apps.',
//         features: ['Edge Functions', 'API Routes', 'Payload Hooks'],
//         badge: 'Backend',
//         icon: IoTimerOutline,
//       },
//     ],
//   },
//   {
//     title: 'Rapid Digital Marketing',
//     description:
//       'We help you grow online visibility with automated, data-driven marketing strategies tailored for speed and ROI.',
//     illustration: {
//       src: '/digital-marketing555.svg',
//       alt: 'Digital Marketing Illustration',
//     },
//     stackIcons: TechStack(['SiResend', 'SiNextdotjs', 'SiPayloadcms']),
//     services: [
//       {
//         title: 'Email Automation',
//         description: 'Setup high-converting transactional and drip campaigns using Resend.',
//         features: ['Form to Inbox', 'Custom Templates', 'Payload Email Plugin'],
//         badge: 'Automation',
//         icon: IoTimerOutline,
//       },
//       {
//         title: 'Technical SEO',
//         description:
//           'Built-in best practices for crawlability, structured data, and meta automation.',
//         features: ['Sitemaps', 'Meta Tags', 'Open Graph / Schema'],
//         badge: 'SEO',
//         icon: IoTimerOutline,
//       },
//       {
//         title: 'Analytics & Tracking',
//         description: 'Implement analytics to measure performance, conversions, and funnels.',
//         features: ['Vercel Analytics', 'Google Tag Manager', 'Custom Events'],
//         badge: 'Tracking',
//         icon: IoTimerOutline,
//       },
//     ],
//   },
//   {
//     title: 'Minimal UI/UX',
//     description:
//       'We design simple, intuitive, and beautiful user interfaces focused on clarity and usability.',
//     illustration: {
//       src: '/ui-ux555.svg',
//       alt: 'Minimal UI/UX Illustration',
//     },
//     stackIcons: TechStack(['SiNextdotjs', 'SiTailwindcss', 'SiVercel']),
//     services: [
//       {
//         title: 'Design System Setup',
//         description:
//           'Reusable components, tokens, and styling rules using Tailwind and Bracket UI.',
//         features: ['Dark Mode', 'Component Library', 'Responsiveness'],
//         badge: 'UI Kit',
//         icon: IoTimerOutline,
//       },
//       {
//         title: 'Clean UI Implementation',
//         description: 'Hand-coded layouts with pixel-perfect styling and accessibility built-in.',
//         features: ['Minimal Design', 'ARIA Labels', 'Interactive States'],
//         badge: 'UI',
//         icon: IoTimerOutline,
//       },
//       {
//         title: 'Landing Page Design',
//         description: 'High-converting, fast-loading landing pages for your campaigns and services.',
//         features: ['Above-the-fold Content', 'Scroll Effects', 'Call-to-Action Focused'],
//         badge: 'UX',
//         icon: IoTimerOutline,
//       },
//       {
//         title: 'Design-to-Code Workflow',
//         description: 'Convert your design mockups into production-grade code with consistency.',
//         features: ['Figma Handoff', 'Component Mapping', 'No Design Drift'],
//         badge: 'Workflow',
//         icon: IoTimerOutline,
//       },
//     ],
//   },
// ]

const categories = [
  {
    title: 'Web Development',
    description:
      'We build modern, high-performance web solutions using cutting-edge technologies with a focus on scalability and maintainability.',
    illustration: {
      src: '/5.svg',
      alt: 'Web Development Illustration',
    },
    stackIcons: TechStack(['SiNextdotjs', 'SiReact', 'SiTypescript', 'SiNodedotjs', 'SiVercel']),
    services: [
      {
        title: 'Next.js Development',
        description:
          'Build modern web applications with React and server components for optimal performance.',
        features: ['App Router', 'Server Components', 'Edge Runtime'],
        badge: 'Frontend',
        icon: SiNextdotjs,
      },
      {
        title: 'WordPress Development',
        description:
          'Custom WordPress solutions with modern development practices and optimizations.',
        features: ['Custom Themes', 'Plugin Development', 'Performance Tuning'],
        badge: 'CMS',
        icon: SiWordpress,
      },
      {
        title: 'Headless Integration',
        description:
          'Connect modern frontends with powerful backend systems for flexible content management.',
        features: ['API Development', 'CMS Integration', 'Content Modeling'],
        badge: 'Integration',
        icon: FaServer,
      },
      {
        title: 'Performance Optimization',
        description: 'Optimize web applications for speed, SEO, and user experience.',
        features: ['Core Web Vitals', 'Caching Strategy', 'Asset Optimization'],
        badge: 'Performance',
        icon: FaTachometerAlt,
      },
      {
        title: 'Migration & Modernization',
        description: 'Upgrade legacy systems to modern technology stacks with minimal disruption.',
        features: ['Code Refactoring', 'Platform Migration', 'Tech Stack Updates'],
        badge: 'Migration',
        icon: FaExchangeAlt,
      },
      {
        title: 'Feature Development',
        description:
          'Build custom features and integrate third-party APIs for enhanced functionality.',
        features: ['API Integration', 'Custom Features', 'Payment Systems'],
        badge: 'Development',
        icon: FaCode,
      },
    ],
  },
  {
    title: 'UI/UX Design',
    description:
      'We create intuitive and engaging user interfaces that balance aesthetic appeal with functional design principles.',
    illustration: {
      src: '/5.svg',
      alt: 'UI/UX Design Illustration',
    },
    stackIcons: TechStack(['SiTailwindcss', 'SiFigma', 'SiAdobeillustrator', 'SiFramer']),
    services: [
      {
        title: 'Landing Page Design',
        description: 'Create high-converting landing pages that drive user engagement and actions.',
        features: ['Conversion Optimization', 'Mobile-First Design', 'A/B Testing'],
        badge: 'Design',
        icon: FaPaintBrush,
      },
      {
        title: 'Website Layout Design',
        description:
          'Design intuitive website layouts that enhance user experience and navigation.',
        features: ['Information Architecture', 'Responsive Design', 'User Flow'],
        badge: 'UI',
        icon: FaDesktop,
      },
      {
        title: 'Vector Design',
        description: 'Create scalable logos, icons, and visual assets for brand consistency.',
        features: ['Logo Design', 'Icon Sets', 'Brand Assets'],
        badge: 'Graphics',
        icon: FaVectorSquare,
      },
      {
        title: 'Component-Based UI',
        description: 'Build scalable design systems with reusable components and patterns.',
        features: ['Design System', 'Component Library', 'Style Guide'],
        badge: 'System',
        icon: FaCubes,
      },
      {
        title: 'Website Redesign',
        description:
          'Modernize existing websites with contemporary design patterns and best practices.',
        features: ['UI Modernization', 'UX Enhancement', 'Visual Refresh'],
        badge: 'Redesign',
        icon: FaSyncAlt,
      },
      {
        title: 'UX Strategy',
        description:
          'Develop user-centered design strategies and wireframes for optimal experiences.',
        features: ['User Research', 'Wireframing', 'Prototyping'],
        badge: 'UX',
        icon: FaLightbulb,
      },
    ],
  },
  {
    title: 'Digital Marketing',
    description:
      'We implement data-driven digital marketing strategies to improve visibility, engagement, and conversion rates.',
    illustration: {
      src: '/5.svg',
      alt: 'Digital Marketing Illustration',
    },
    stackIcons: TechStack(['SiGoogleanalytics', 'SiGooglesearchconsole', 'SiWordpress']),
    services: [
      {
        title: 'Technical SEO',
        description:
          'Optimize website technical aspects for better search engine visibility and rankings.',
        features: ['Site Structure', 'Performance SEO', 'Technical Audit'],
        badge: 'SEO',
        icon: FaSearch,
      },
      {
        title: 'Performance Optimization',
        description: 'Enhance website performance metrics for better user experience and SEO.',
        features: ['Speed Optimization', 'Core Web Vitals', 'Mobile Performance'],
        badge: 'Performance',

        icon: FaRocket,
      },
      {
        title: 'SEO-Ready Development',
        description: 'Build websites with SEO best practices implemented from the ground up.',
        features: ['Schema Markup', 'SEO Architecture', 'Content Strategy'],
        badge: 'Development',
        icon: FaFileCode,
      },
      {
        title: 'Content Writing',
        description: 'Create engaging, SEO-optimized content that resonates with your audience.',
        features: ['Blog Writing', 'Website Copy', 'Content Strategy'],
        badge: 'Content',
        icon: FaPencilAlt,
      },
      {
        title: 'Social Media Management',
        description:
          'Manage and grow your social media presence with strategic content and engagement.',
        features: ['Content Calendar', 'Platform Strategy', 'Community Management'],
        badge: 'Social',
        icon: FaHashtag,
      },
      {
        title: 'Google Services',
        description: 'Implement and optimize Google services for better visibility and analytics.',
        features: ['Analytics Setup', 'Search Console', 'Tag Manager'],
        badge: 'Google',
        icon: FaGoogle,
      },
    ],
  },
]

export const metadata: Metadata = {
  title: 'Services | Third Bracket',
  description:
    'Explore our modern web development and digital marketing services crafted for UK agencies and small businesses. We deliver speed, SEO, and clean design.',
}

export default function ServicesPage() {
  return (
    <section>
      <PageHeader
        title="Services"
        description="Full-service modern web development & marketing for small businesses, agencies, and startups in the UK."
      />

      {categories.map((cat, index) => (
        <Category key={index} {...cat} index={index} />
      ))}

      <Stats />
      {/* <ContactCTA
        title={'Ready to Share Your Idea?'}
        // description={'Let us Discuss about how can help you'}
      /> */}

      <CTASection
        title="Ready to Build Your Next Project?"
        description="Let's create something amazing together. Our team is ready to help you bring your vision to life."
        primary={{
          label: 'Get Started',
          href: '/contact',
        }}
        secondary={{
          label: 'View Projects',
          href: '/projects',
        }}
      />
    </section>
  )
}
