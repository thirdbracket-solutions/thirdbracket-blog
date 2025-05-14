/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',

    './node_modules/@thirdbracket/bracketui/**/*.{js,ts,jsx,tsx}',
    './node_modules/@thirdbracket/bracketui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-primary-dark': 'conic-gradient(at bottom left, #f2f2f2, #dbdbdb, #c4c4c4 )',
        'gradient-primary': 'conic-gradient(at bottom left, #0d0d0d, #0d0d0d, #3b3b3b  )',
        'gradient-secondary-dark': 'conic-gradient(at bottom left, #fff, #f1f2f4, #dbdbdb )',
        'gradient-secondary': 'conic-gradient(at bottom left, #000, #0b0d0e, #3b3b3b )',

        'conic-cardDark': 'conic-gradient( at bottom left, #000,#0b0d0f , #3b3b3b)',
        'conic-card': 'conic-gradient(at bottom left, #fff, #f0f2f4, #c4c4c4 )',
        'overlay-radial': 'radial-gradient(#f1f2f4_1px,transparent_1px)',
        'overlay-radial-dark': 'radial-gradient(#0b0d0e_1px,transparent_1px)',

        'accent-radial': 'radial-gradient(circle at center,      #df9faf  , #eec4ce )',
        'accent-radial-dark': 'radial-gradient(circle at center,     #8a2841, #66192d )',
      },
      colors: {
        accent: {
          50: '#faebee',
          100: '#eec4ce',
          200: '#df9faf',
          300: '#d2798f',
          400: '#c65370',
          500: '#ac3956',
          600: '#8a2841',
          700: '#66192d',
          800: '#3d0f1b',
          900: '#2a0911',
          950: '#160408',
        },

        secondary: {
          50: '#f0f2f4',
          100: '#d6dae0',
          200: '#bdc3cc',
          300: '#a4abb7',
          400: '#8b95a2',
          500: '#737e8c',
          600: '#5d6774',
          700: '#48515b',
          800: '#333a42',
          900: '#1f2429',
          950: '#0b0d0f',
        },

        primary: {
          50: '#f2f2f2',
          100: '#dbdbdb',
          200: '#c4c4c4',
          300: '#adadad',
          400: '#969696',
          500: '#808080',
          600: '#696969',
          700: '#525252',
          800: '#3b3b3b',
          900: '#242424',
          950: '#0d0d0d',
        },
      },
    },
  },
  plugins: [],
}
export default config
