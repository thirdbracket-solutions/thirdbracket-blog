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
    <section className=" h-full w-full  bg-[radial-gradient(#f0f0f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1c1c1c_1px,transparent_1px)]  [background-size:16px_16px] pb-8 sm:pb-12 md:pb-16 pt-20  lg:pt-24  px-6 text-center ">
      <h1 className="text-5xl font-extrabold md:text-6xl lg:text-7xl bg-gradient-to-r from-primary-800 via-primary-900 to-primary-800 dark:from-primary-200 dark:via-primary-100 dark:to-primary-200 text-transparent bg-clip-text  text-center mb-6">
        {title}
      </h1>
      <p className="text-primary-950/60 text-base md:text-lg lg:text-xl dark:text-primary-200/60 font-light  mx-auto">
        {description}
      </p>
    </section>
  )
}
