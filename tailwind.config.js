/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './_includes/**/*.{html,js,md}',
      './_layouts/**/*.{html,js,md}',
      './_*/*.{html,js,md}',
      './*.{html,js,md}'
    ],
    theme: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Oranienbaum', 'serif'],
      },
      colors: {
        'copper': '#C97324',
        'light': '#FBF2E9',
        'white': '#FFFFFF',
        'black': '#000000',
        'blue': '#0000FF',
        'purple': '#A020F0',
        'teal': '#008080'
      },
      extend: {
        spacing: {
          '5p': '5%',
          '10p': '10%',
          '15p': '15%',
        },
        aspectRatio: {
          'landscape': '2 / 1 ',
          'portrait': '3 / 4',
          'portrait-tall': '3 / 5',
        },
        minHeight:{
          '100': '100vh',
          '90': '90vh',
          '80': '80vh',
          '70': '70vh',
          '60': '60vh',
          '50': '50vh',
        },
        screens: {
            '3xl': '2000px',
            // => @media (min-width: 992px) { ... }
          },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }