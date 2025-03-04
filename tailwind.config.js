/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },
      colors: {
        'purple': '#7843E9',
        "lightPurple": '#B7A3FF',
        "custom-gray": '#2D2E32',
        "custom-black":"#202022"
      },
    },
  },
  plugins: [],
};