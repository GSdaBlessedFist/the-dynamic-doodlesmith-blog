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
        primaryMuted: "#626792",
        primary: "#24368F",
        primaryDark:"#152055",
        secondary:"#EB8E00",
        gray:"#CCCCCC",
        grayDark:"#111122"
      },
    },
  },
  plugins: [],
};
//
//#24368F
//#626792
//#CCCCCC
//#E58D00
//#FFFFFF