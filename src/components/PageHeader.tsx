import { Bracket } from '@thirdbracket/bracketui'

interface PageHeaderProps {
  title: string
  description: string
  // backgroundColor?: string;
}

{
  /* <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div> */
}
export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className=" pb-10 sm:pb-12 lg:pb-14 xl:pb-16 pt-20 sm:pt-24 lg:pt-28 xl:pt-32  bg-[radial-gradient(#f0f0f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1c1c1c_1px,transparent_1px)]  [background-size:16px_16px] py-10 sm:py-12  lg:py-14 xl:py-16 text-center ">
      <Bracket fluid centered padding="medium">
        <h1 className="text-5xl font-extrabold md:text-6xl lg:text-7xl bg-gradient-primary dark:bg-gradient-primary-dark text-transparent bg-clip-text  text-center mb-6">
          {title}
        </h1>
        <p className="text-primary-800 dark:text-primary-300 text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem]  font-light  mx-auto">
          {description}
        </p>
      </Bracket>
    </section>
  )
}
