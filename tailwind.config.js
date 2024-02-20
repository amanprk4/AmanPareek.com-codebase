/** @type {import('tailwindcss').Config} */
const themeSwapper = require('tailwindcss-theme-swapper')
const themes = require('./src/app/shared/styles/colors.ts').themes
const colors = require('./src/app/shared/styles/colors.ts').colors


module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [
    themeSwapper({
      themes: themes
    }),
  ],
  theme: {
    extend: {
      fontFamily: {
        'base': "'Chalkduster', sans-serif"
      }
    },
  },
  safelist: colors.map(color => color.name)
}

