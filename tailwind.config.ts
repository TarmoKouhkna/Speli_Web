import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      colors: {
        sage: {
          50: '#f4f6f4',
          100: '#e4e9e3',
          200: '#cbd4c9',
          300: '#a8b6a4',
          400: '#7f937a',
          500: '#5f755a',
          600: '#4a5d46',
          700: '#3c4b39',
          800: '#333d31',
          900: '#2b3329',
        },
        primary: {
          DEFAULT: '#1794AF',
          500: '#1794AF',
          600: '#127a8f',
        },
        cream: '#faf9f6',
        warm: '#f5f2eb',
      },
    },
  },
  plugins: [],
}
export default config
