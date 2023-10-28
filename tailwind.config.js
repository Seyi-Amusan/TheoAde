/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/**/*.{html,js}",
  './public/home.html'
],
  theme: {
    screens : {
      'blg': '930px',
    },

    extend: {
      colors: {
        'text': '#130e01',
        'background': '#fffaeb',
        'primary': {
          50: '#fff3e5',
          100: '#ffe6cc',
          200: '#ffce99',
          300: '#ffb566',
          400: '#ff9c33',
          500: '#ff8400',
          600: '#cc6900',
          700: '#994f00',
          800: '#663500',
          900: '#331a00',
          950: '#1a0d00',
        },
        'secondary': '#fff5d6',
        'accent': '#cf4307',
      },
       
       
      fontFamily: {
        'body': ['Nunito']
      },
    },
  },
  plugins: [],
}

