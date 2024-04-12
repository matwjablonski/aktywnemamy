import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
      'main-light': '#fabebe',
      main: '#f89f9f',
      'main-dark': '#f88d8f',
      secondary: '#81dfd4',
      gray: '#a2a0a0',
      'gray-dark': '#222222',
      'gray-light': '#7b7b7b'
    },
  },
  plugins: [],
}
export default config
