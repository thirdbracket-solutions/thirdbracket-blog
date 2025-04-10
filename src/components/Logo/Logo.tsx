// import clsx from 'clsx'
// import React from 'react'

import clsx from 'clsx'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

// export const Logo = (props: Props) => {
//   const { loading: loadingFromProps, priority: priorityFromProps, className } = props

//   const loading = loadingFromProps || 'lazy'
//   const priority = priorityFromProps || 'low'

//   return (
//     /* eslint-disable @next/next/no-img-element */
//     <img
//       alt="Payload Logo"
//       width={193}
//       height={34}
//       loading={loading}
//       fetchPriority={priority}
//       decoding="async"
//       className={clsx('max-w-[9.375rem] w-full h-[34px]', className)}
//       src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-logo-light.svg"
//     />
//   )
// }

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, className } = props

  const loading = loadingFromProps || 'lazy'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 757 83"
      // className="h-[18px] md:h-6  w-auto  "
      loading={loading}
      className={clsx('max-w-[9.375rem] w-full h-[34px]', className)}
      {...props}
    >
      <defs className="dark:hidden">
        <linearGradient
          id="a"
          x1={23}
          x2={165.6}
          y1={-197.2}
          y2={-197.2}
          gradientTransform="translate(1.5 1319.3) scale(4.5604)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#111" />
          <stop offset={0.5} stopColor="#1a1a1a" />
          <stop offset={1} stopColor="#111" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={459.53}
          x2={549.76}
          y1={149.45}
          y2={147.91}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#1a1a1a" />
          <stop offset={1} stopColor="#111" />
        </linearGradient>
        <linearGradient
          id="c"
          x1={414.9}
          x2={514.77}
          y1={147.88}
          y2={147.84}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#111" />
          <stop offset={1} stopColor="#1a1a1a" />
        </linearGradient>
      </defs>

      <defs className="hidden dark:block">
        <linearGradient
          id="d"
          x1={23}
          x2={165.6}
          y1={-197.2}
          y2={-197.2}
          gradientTransform="translate(1.5 1319.3) scale(4.5604)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f7f7f7" />
          <stop offset={0.5} stopColor="#e6e6e6" />
          <stop offset={1} stopColor="#f7f7f7" />
        </linearGradient>
        <linearGradient
          id="e"
          x1={459.53}
          x2={549.76}
          y1={149.45}
          y2={147.91}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#e6e6e6" />
          <stop offset={1} stopColor="#f7f7f7" />
        </linearGradient>
        <linearGradient
          id="f"
          x1={414.9}
          x2={514.77}
          y1={147.88}
          y2={147.84}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f7f7f7" />
          <stop offset={1} stopColor="#e6e6e6" />
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        className="dark:hidden"
        d="M401.4 423h-14.7l-.1-8.5H400q3 0 5.2-1.3 2.3-1.3 3.6-3.7 1.2-2.5 1.2-6 0-3.7-1-6-1.1-2.5-3.4-3.5-2.2-1.2-5.7-1.2h-10.5v63.4h-10.6v-72.4h21.1q4.9 0 8.7 1.2 3.9 1.1 6.5 3.5 2.7 2.4 4.1 6 1.4 3.7 1.4 8.7 0 4.5-2 8.2-1.9 3.6-5.5 6-3.6 2.2-8.7 2.8zm-.4 33.2h-18.2l5.4-9H401q3.4 0 5.7-1.5 2.3-1.4 3.5-4.1 1.1-2.8 1.1-6.4 0-3.8-1-6.5-1-2.8-3.1-4.3-2.2-1.5-5.8-1.5h-12l.1-8.4h15.7l2.5 3.1q4.8.3 8 2.8t4.7 6.4q1.5 3.8 1.5 8.4 0 6.8-2.5 11.5t-7.3 7.1q-4.6 2.4-11 2.4zm33.8-72.4h21q7.2 0 12 2.5 5 2.5 7.5 7.4 2.5 4.8 2.5 11.9 0 5.2-1.6 9.3t-4.7 7q-3 2.8-7.5 4.2l-3 1.5h-18.2l-.1-9h13q3.9 0 6.4-1.6 2.6-1.7 3.8-4.6 1.3-2.9 1.3-6.5 0-4-1.1-7-1.2-2.9-3.7-4.5-2.4-1.6-6.5-1.6h-10.5v63.4h-10.6zm34.3 72.4-14.2-32.7H466l14.4 32v.7zm44.5-64.2L495 456.2h-11l23.2-72.4h6.8zm15 64.2L510 392l-.5-8.2h7l23.1 72.4zm.2-26.9v9h-34.3v-9zm55 3.6h10.6q-.4 7.6-3 13.1-2.8 5.4-8 8.3t-12.8 2.9q-5.5 0-10-2.1t-7.7-6.1q-3.1-4-4.7-9.7-1.7-5.6-1.7-12.8v-13q0-7.2 1.7-12.8 1.7-5.7 4.9-9.7t7.8-6q4.6-2.2 10.4-2.2 7.3 0 12.3 2.9 5 2.8 7.7 8.3t3.1 13.4h-10.6q-.3-5.6-1.6-9-1.3-3.5-4-5-2.6-1.6-7-1.6-3.6 0-6.3 1.5-2.7 1.3-4.4 4.1t-2.5 6.8q-.9 4-.9 9.1v13.2q0 4.9.7 9 .7 3.9 2.3 6.8 1.6 2.8 4.2 4.4 2.5 1.5 6.3 1.5 4.6 0 7.4-1.5 2.8-1.4 4-4.8 1.4-3.4 1.8-9zm32.7-49v72.3h-10.7v-72.4zm36.2 0-24.5 34.3-14.5 17.6-2-11.4 10.4-14.4 17.9-26.2zm-11.2 72.3-19.8-34.8 6.8-8 25.6 42.8zm59.7-9v9h-31.5v-9zm-29-63.4v72.4h-10.7v-72.4zm24.8 30.6v8.9h-27.3v-8.9zm3.8-30.6v9h-31v-9zm37 0v72.4h-10.6v-72.4zm18.7 0v9h-47.9v-9zm-622.9 1v72.4h-7.3v-72.4zm19.8 0v6.6h-47v-6.6zm51.2 31.8v6.5h-33.8v-6.5zM172 384.8v72.4h-7.4v-72.4zm39 0v72.4h-7.4v-72.4zm24.6 0v72.4h-7.4v-72.4zm17 0h20q6.8 0 11.5 2.5t7.2 7.3q2.5 4.8 2.5 11.7 0 5-1.8 9.2-1.6 4.2-4.8 7t-7.5 4l-2.2 1h-19.4v-6.6h15q4.4 0 7.4-2t4.4-5.4q1.5-3.3 1.5-7.2 0-4.5-1.5-7.9t-4.5-5.2-7.7-1.8H260v65.8h-7.4zm36 72.4-15-32.6h7.7l15.2 32v.6zm35.5 0h-13l.1-6.6h12.9q6.5 0 10.8-2.6 4.4-2.6 6.6-7.7 2.1-5.1 2.1-12.6v-13.5q0-5.8-1.2-10-1.2-4.4-3.6-7.2t-6-4.2q-3.5-1.4-8.1-1.4h-13.8v-6.6h13.8q6 0 10.8 1.9t8.2 5.7q3.5 3.7 5.4 9.2 1.8 5.5 1.8 12.7v13.4q0 7.2-1.8 12.7-1.9 5.5-5.4 9.3-3.5 3.7-8.5 5.6-4.9 1.9-11.1 1.9zm-9-72.4v72.4h-7.5v-72.4z"
        style={{
          fontVariationSettings: '&quot',
        }}
        transform="translate(.3 -378.5)"
      />
      <path
        fill="url(#d)"
        className="hidden dark:block"
        d="M401.4 423h-14.7l-.1-8.5H400q3 0 5.2-1.3 2.3-1.3 3.6-3.7 1.2-2.5 1.2-6 0-3.7-1-6-1.1-2.5-3.4-3.5-2.2-1.2-5.7-1.2h-10.5v63.4h-10.6v-72.4h21.1q4.9 0 8.7 1.2 3.9 1.1 6.5 3.5 2.7 2.4 4.1 6 1.4 3.7 1.4 8.7 0 4.5-2 8.2-1.9 3.6-5.5 6-3.6 2.2-8.7 2.8zm-.4 33.2h-18.2l5.4-9H401q3.4 0 5.7-1.5 2.3-1.4 3.5-4.1 1.1-2.8 1.1-6.4 0-3.8-1-6.5-1-2.8-3.1-4.3-2.2-1.5-5.8-1.5h-12l.1-8.4h15.7l2.5 3.1q4.8.3 8 2.8t4.7 6.4q1.5 3.8 1.5 8.4 0 6.8-2.5 11.5t-7.3 7.1q-4.6 2.4-11 2.4zm33.8-72.4h21q7.2 0 12 2.5 5 2.5 7.5 7.4 2.5 4.8 2.5 11.9 0 5.2-1.6 9.3t-4.7 7q-3 2.8-7.5 4.2l-3 1.5h-18.2l-.1-9h13q3.9 0 6.4-1.6 2.6-1.7 3.8-4.6 1.3-2.9 1.3-6.5 0-4-1.1-7-1.2-2.9-3.7-4.5-2.4-1.6-6.5-1.6h-10.5v63.4h-10.6zm34.3 72.4-14.2-32.7H466l14.4 32v.7zm44.5-64.2L495 456.2h-11l23.2-72.4h6.8zm15 64.2L510 392l-.5-8.2h7l23.1 72.4zm.2-26.9v9h-34.3v-9zm55 3.6h10.6q-.4 7.6-3 13.1-2.8 5.4-8 8.3t-12.8 2.9q-5.5 0-10-2.1t-7.7-6.1q-3.1-4-4.7-9.7-1.7-5.6-1.7-12.8v-13q0-7.2 1.7-12.8 1.7-5.7 4.9-9.7t7.8-6q4.6-2.2 10.4-2.2 7.3 0 12.3 2.9 5 2.8 7.7 8.3t3.1 13.4h-10.6q-.3-5.6-1.6-9-1.3-3.5-4-5-2.6-1.6-7-1.6-3.6 0-6.3 1.5-2.7 1.3-4.4 4.1t-2.5 6.8q-.9 4-.9 9.1v13.2q0 4.9.7 9 .7 3.9 2.3 6.8 1.6 2.8 4.2 4.4 2.5 1.5 6.3 1.5 4.6 0 7.4-1.5 2.8-1.4 4-4.8 1.4-3.4 1.8-9zm32.7-49v72.3h-10.7v-72.4zm36.2 0-24.5 34.3-14.5 17.6-2-11.4 10.4-14.4 17.9-26.2zm-11.2 72.3-19.8-34.8 6.8-8 25.6 42.8zm59.7-9v9h-31.5v-9zm-29-63.4v72.4h-10.7v-72.4zm24.8 30.6v8.9h-27.3v-8.9zm3.8-30.6v9h-31v-9zm37 0v72.4h-10.6v-72.4zm18.7 0v9h-47.9v-9zm-622.9 1v72.4h-7.3v-72.4zm19.8 0v6.6h-47v-6.6zm51.2 31.8v6.5h-33.8v-6.5zM172 384.8v72.4h-7.4v-72.4zm39 0v72.4h-7.4v-72.4zm24.6 0v72.4h-7.4v-72.4zm17 0h20q6.8 0 11.5 2.5t7.2 7.3q2.5 4.8 2.5 11.7 0 5-1.8 9.2-1.6 4.2-4.8 7t-7.5 4l-2.2 1h-19.4v-6.6h15q4.4 0 7.4-2t4.4-5.4q1.5-3.3 1.5-7.2 0-4.5-1.5-7.9t-4.5-5.2-7.7-1.8H260v65.8h-7.4zm36 72.4-15-32.6h7.7l15.2 32v.6zm35.5 0h-13l.1-6.6h12.9q6.5 0 10.8-2.6 4.4-2.6 6.6-7.7 2.1-5.1 2.1-12.6v-13.5q0-5.8-1.2-10-1.2-4.4-3.6-7.2t-6-4.2q-3.5-1.4-8.1-1.4h-13.8v-6.6h13.8q6 0 10.8 1.9t8.2 5.7q3.5 3.7 5.4 9.2 1.8 5.5 1.8 12.7v13.4q0 7.2-1.8 12.7-1.9 5.5-5.4 9.3-3.5 3.7-8.5 5.6-4.9 1.9-11.1 1.9zm-9-72.4v72.4h-7.5v-72.4z"
        style={{
          fontVariationSettings: '&quot',
        }}
        transform="translate(.3 -378.5)"
      />
      <path
        fill="url(#b)"
        className="dark:hidden"
        d="m505.21 113.81-43.225 14.605-.35 33.604 43.342 13.984a11.511 11.511 0 0 0 .272-2.068v-59.268a11.522 11.522 0 0 0-.04-.858z"
        style={{
          fontVariationSettings: '&quot',
        }}
        transform="translate(-421.48 -102.27) scale(.99634)"
      />
      <path
        fill="url(#e)"
        className="hidden dark:block"
        d="m505.21 113.81-43.225 14.605-.35 33.604 43.342 13.984a11.511 11.511 0 0 0 .272-2.068v-59.268a11.522 11.522 0 0 0-.04-.858z"
        style={{
          fontVariationSettings: '&quot',
        }}
        transform="translate(-421.48 -102.27) scale(.99634)"
      />
      <path
        fill="url(#c)"
        className="dark:hidden"
        d="M434.54 103.15a11.511 11.511 0 0 0-11.51 11.51v59.268a11.522 11.522 0 0 0 11.521 11.523h59.188a11.511 11.511 0 0 0 4.445-1l-47.676-14.693-.174-47.465 50.127-16.959a11.522 11.522 0 0 0-6.734-2.184z"
        style={{
          fontVariationSettings: '&quot',
        }}
        transform="translate(-421.48 -102.27) scale(.99634)"
      />
      <path
        fill="url(#f)"
        className="hidden dark:block"
        d="M434.54 103.15a11.511 11.511 0 0 0-11.51 11.51v59.268a11.522 11.522 0 0 0 11.521 11.523h59.188a11.511 11.511 0 0 0 4.445-1l-47.676-14.693-.174-47.465 50.127-16.959a11.522 11.522 0 0 0-6.734-2.184z"
        style={{
          fontVariationSettings: '&quot',
        }}
        transform="translate(-421.48 -102.27) scale(.99634)"
      />
    </svg>
  )
}
