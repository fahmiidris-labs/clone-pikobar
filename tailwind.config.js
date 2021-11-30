const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")  

module.exports = {
  purge: ["./**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { 
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        red: colors.rose,
        blue: colors.sky,
        gray: colors.coolGray,
        teal: colors.teal,
        orange: colors.orange,
        violet: colors.violet,
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        amber: colors.amber,
      }
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
