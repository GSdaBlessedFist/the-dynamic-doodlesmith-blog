/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        layout:{
          primaryMuted: "var(--color-layout-primary-muted)",
          primary:"var(--color-layout-primary)",
          primaryDark:"var(--color-layout-primaryDark)",
          secondary:"var(--color-layout-secondary)"
        },
        primaryMuted: "var(--color-primary-muted)",
        primary: 'var(--color-primary)',
        primaryDark:"var(--color-primary-dark)",
        secondary:"var(--color-secondary)",
        gray:"#CCCCCC",
        grayDark:"#111122"
      },
    },
  },
  plugins: [],
};