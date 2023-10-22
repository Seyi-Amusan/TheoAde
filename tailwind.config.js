/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/**/*.{html,js}",
  './public/home.html'
],
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}

