/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // Default
  // content: ["./src/**/*.{html,js}"],
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: ['prettier-plugin-tailwindcss'],
}

