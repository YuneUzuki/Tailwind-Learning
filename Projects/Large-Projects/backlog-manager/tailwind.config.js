/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],  
  theme: {
    extend: {
      visibility: {
        none: 'none',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}