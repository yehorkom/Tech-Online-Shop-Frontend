/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'main-blue': '#11137E'
      },
      fontFamily:{
        sans: ['Unbounded', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
