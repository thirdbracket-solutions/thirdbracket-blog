import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          //   fontSize: 24,
          //   background: 'black',
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          //   color: 'white',
        }}
      >
        <svg
          width="32"
          height="32"
          version="1.1"
          viewBox="0 0 4.7625 4.7625"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
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
          </defs>
          <path
            d="m4.1687 0.91054-1.6108 0.54415-0.019637 1.8903 1.6159 0.52142a2.3151 2.3151 0 0 0 0.54209-1.4852 2.3151 2.3151 0 0 0-0.52762-1.4707z"
            fill="url(#linearGradient9)"
          />
          <path
            d="m3.7217 0.49454-1.819 0.61547 0.0098186 2.6701 1.7379 0.53588a2.3151 2.3151 0 0 0 0.50385-0.44958l-1.6159-0.52142 0.019637-1.8903 1.6108-0.54415a2.3151 2.3151 0 0 0-0.447-0.416z"
            fill="#fff"
          />
          <path
            d="m2.3812 0.066146a2.3151 2.3151 0 0 0-2.3151 2.3151 2.3151 2.3151 0 0 0 2.3151 2.3151 2.3151 2.3151 0 0 0 1.2692-0.38034l-1.7379-0.53588-0.0098186-2.6701 1.819-0.61547a2.3151 2.3151 0 0 0-1.3405-0.4284z"
            fill="url(#linearGradient6)"
          />
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
