/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        slz: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fd',
          400: '#36a9fa',
          500: '#0c8de9',
          600: '#026fc7',
          700: '#0358a1',
          800: '#074b85',
          900: '#0c3f6e',
          950: '#082849',
        },
        maranhao: {
          gold: '#eab308',
          amber: '#d97706',
          terracotta: '#c2410c',
          palm: '#15803d',
        },
        edu: {
          bg: '#f8fafc',
          card: '#ffffff',
          darkbg: '#0f172a',
          darkcard: '#1e293b',
          border: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
