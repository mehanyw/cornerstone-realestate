/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cornerstone-primary-black':'#222',
        'cornerstone-secondary-gold': '#B4955A',
        'cornerstone-accent-blue': '#1C85E8',
        'cornerstone-accent-blue-hover': '#1978D1',
      },
      fontSize: {
        '3.5xl': ['2rem', '2.5rem'],
        '4.5xl': ['2.625rem', '3.125rem'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        'none': '0',
        'sm': '0.25rem',
        'md': '0.25rem',
        'lg': '0.25rem',
        'full': '9999px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}