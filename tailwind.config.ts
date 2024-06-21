import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/archiwum/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textShadow: {
        'border-text': '2px 0 red, -2px 0 red, 0 2px red, 0 -2px red, 1px 1px red, -1px -1px red, 1px -1px red, -1px 1px red',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-to-br': 'linear-gradient(35deg, var(--tw-gradient-from) 65%, var(--tw-gradient-to) 65%)',
        'gradient-to-br-horizontal': 'linear-gradient(90deg, var(--tw-gradient-from) 65%, var(--tw-gradient-to) 65%)',
      },
    },
    backgroundSize: {
      16: '4rem',
    },
    backgroundImage: {
      snowflakes: 'url("/snowflakes.png")',
    },
    colors: {
      white: '#ffffff',
      black: '#000',
      main: '#f89f9f',
      'main-dark': '#f88d8f',
      secondary: '#81dfd4',
      gray: '#a2a0a0',
      'gray-dark': '#222222',
      'gray-light': '#7b7b7b',

      kgw: {
        main: '#e4a39d',
        secondary: {
          DEFAULT: '#3b5d5f',
          light: '#96aaac',
          dark: '#3b5d5f',
        },
      }
    },
  },
  plugins: [],
}
export default config
