import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/component/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          light: '#525252',
          dark: '#3F3F3F',
        },
        primary: {
          light: '#745EFF',
        },
      },
    },
  },
  plugins: [],
}
export default config
