/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#377CFD',
        secondary: '#FD4C5C',
        accent: '#000B33',
        accent2: 'rgba(55, 124, 253, .1)',
      },
      fontFamily: {
        'HK-Grotesk': ['HK Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
