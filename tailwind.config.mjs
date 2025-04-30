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
        'gradient-primary-dark': 'conic-gradient(at bottom left, #fff, #f6f6f6, #6d6d6d )',
        'gradient-primary': 'conic-gradient(at bottom left, #000, #141414, #6d6d6d  )',
        'gradient-secondary-dark': 'conic-gradient(at bottom left, #fff, #f6fafb, #8e96a3 )',
        'gradient-secondary': 'conic-gradient(at bottom left, #000, #101014, #8e96a3 )',

        'accent-radial': 'radial-gradient(circle at center,  #eab7b9, #f4d7d9   )',
        'accent-radial-dark': 'radial-gradient(circle at center,  #9a3647  ,#822f40 )',
      },
      colors: {
        accent: {
          50: '#fcf4f4',
          100: '#f9eaea',
          200: '#f4d7d9',
          300: '#eab7b9',
          400: '#de8e93',
          500: '#d47780',
          600: '#b84657',
          700: '#9a3647',
          800: '#822f40',
          900: '#702b3b',
          950: '#3d141c',
        },

        secondary: {
          50: '#f6fafb',
          100: '#e8ecef',
          200: '#dee1e6',
          300: '#cfd3dc',
          400: '#aeb5bd',
          500: '#8e96a3',
          600: '#7d8493',
          700: '#707685',
          800: '#353942',
          900: '#212429',
          950: '#101014',
        },

        primary: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#141414',
        },
      },
    },
  },
  plugins: [],
}
export default config
