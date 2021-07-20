const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: 'jit',
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        longest: '.50em'
      }
    }
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
