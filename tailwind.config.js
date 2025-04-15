/** @type {import('tailwindcss').Config} */
const themeSwapper = require('tailwindcss-theme-swapper')
const themes = require('./src/app/shared/styles/colors.ts').themes
const colors = require('./src/app/shared/styles/colors.ts').colors


module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  plugins: [
    themeSwapper({
      themes: themes
    }),
  ],
  theme: {
    extend: {
      fontFamily: {
        'base': "'Chalkduster', sans-serif"
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  safelist: colors.map(color => color.name)
}

