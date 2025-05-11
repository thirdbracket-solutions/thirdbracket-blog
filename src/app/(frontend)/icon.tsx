import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 16,
  height: 16,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          //   fontSize: 24,
          //   background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          //   color: 'white',
        }}
      >
        <svg
          width="16"
          height="16"
          fill="none"
          version="1.1"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <defs>
            <linearGradient
              id="linearGradient6"
              x1=".066145"
              x2="3.7217"
              y1="2.3812"
              y2="2.3812"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#111" offset="0" />
              <stop stop-color="#1a1a1a" offset=".5" />
              <stop stop-color="#1a1a1a" stop-opacity=".90196" offset="1" />
            </linearGradient>
            <linearGradient
              id="linearGradient9"
              x1="2.5383"
              x2="4.6964"
              y1="2.3885"
              y2="2.3885"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1a1a1a" stop-opacity=".90196" offset="0" />
              <stop stop-color="#1a1a1a" offset=".5" />
              <stop stop-color="#111" offset="1" />
            </linearGradient>
          </defs> */}

          <defs>
            <linearGradient
              id="linearGradient20"
              x1="-1.8048"
              x2=".85498"
              y1="11.531"
              y2="11.503"
              gradientTransform="matrix(.88889 0 0 .88889 3.24 -8.2348)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3b3b3b" offset="0" />
              <stop stop-color="#0d0d0d" offset=".64124" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="linearGradient18"
              x1="-3.645"
              x2="-.19775"
              y1="11.514"
              y2="11.514"
              gradientTransform="matrix(.88889 0 0 .88889 3.24 -8.2348)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" />
              <stop stop-color="#0d0d0d" offset=".18503" />
              <stop stop-color="#3b3b3b" offset="1" />
            </linearGradient>
          </defs>
          <g stroke-width="0">
            <path
              d="m3.4961 0.67318-1.3859 0.46875-0.017795 1.7075 1.4206 0.45833a2 2 0 0 0 0.48698-1.3077 2 2 0 0 0-0.50391-1.3268z"
              fill="url(#linearGradient20)"
            />
            <path
              d="m3.0642 0.30773-1.546 0.523 0.00868 2.4119 1.5091 0.46484a2 2 0 0 0 0.477-0.39974l-1.4206-0.45833 0.017795-1.7075 1.3859-0.46875a2 2 0 0 0-0.43186-0.36545z"
              fill="#fff"
            />
            <path
              d="m2-5.2473e-8a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 1.036-0.29253l-1.5091-0.46484-0.0086845-2.4119 1.546-0.523a2 2 0 0 0-1.0642-0.30773z"
              fill="url(#linearGradient18)"
            />
          </g>
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    },
  )
}

// import { ImageResponse } from 'next/og'

// // Image metadata
// export const size = {
//   width: 16,
//   height: 16,
// }
// export const contentType = 'image/png'

// // Image generation
// export default function Icon() {
//   return new ImageResponse(
//     (
//       // ImageResponse JSX element
//       <div
//         style={{
//           //   fontSize: 24,
//           //   background: 'black',
//           width: '100%',
//           height: '100%',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           //   color: 'white',
//         }}
//       >
//         <svg
//           width="16"
//           height="16"
//           version="1.1"
//           viewBox="0 0 16 16"
//           xmlSpace="preserve"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             <linearGradient
//               id="linearGradient6"
//               x1="0.22"
//               x2="12.5"
//               y1="8"
//               y2="8"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop stop-color="#000" offset="0" />
//               <stop stop-color="#0d0d0d" offset=".5" />
//               <stop stop-color="#3b3b3b" stop-opacity=".90196" offset="1" />
//             </linearGradient>
//             <linearGradient
//               id="linearGradient9"
//               x1="8.5"
//               x2="15.8"
//               y1="8"
//               y2="8"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop stop-color="#3b3b3b" stop-opacity=".90196" offset="0" />
//               <stop stop-color="#0d0d0d" offset=".5" />
//               <stop stop-color="#000" offset="1" />
//             </linearGradient>
//           </defs>
//           <path
//             d="M14 3.06L8.6 4.9L8.53 11.25L14 12.95C14.6 12.05 15 10.9 15 9.65C15 7.7 14.7 4.8 14 3.06z"
//             fill="url(#linearGradient9)"
//           />
//           <path
//             d="M12.5 1.66L6.4 3.73L6.43 12.7L12.3 14.5C12.8 14 13.2 13.4 13.5 12.95L8.53 11.25L8.6 4.9L14 3.06C13.6 2.5 13.1 2 12.5 1.66z"
//             fill="#fff"
//           />
//           <path
//             d="M8 0.22C3.9 0.22 0.6 3.52 0.6 7.62C0.6 11.72 3.9 15.02 8 15.02C9.4 15.02 10.7 14.6 11.8 13.9L6.43 12.7L6.4 3.73L12.5 1.66C11.3 0.75 9.7 0.22 8 0.22z"
//             fill="url(#linearGradient6)"
//           />
//         </svg>
//       </div>
//     ),
//     // ImageResponse options
//     {
//       // For convenience, we can re-use the exported icons size metadata
//       // config to also set the ImageResponse's width and height.
//       ...size,
//     },
//   )
// }
