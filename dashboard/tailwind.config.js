/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primaryColor: '#ff9700',
      secondaryColor: '#8c8c8c',
    
    },
  },
  plugins: [],
}
