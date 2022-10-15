/** @type {import('tailwindcss').Config} */
module.exports = {
  screens: {
    'sm': '480px',
    'md': '768px',
    'lg': '1440px',
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fitpassGreen': '#269FAE',
        'highlightGreen':'#4EA6AD'
      },
      fontFamily: {
        'montserrat': ['Montserrat']
      },
    },
  },
  plugins: [],
};