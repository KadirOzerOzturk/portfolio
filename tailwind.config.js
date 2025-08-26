/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },
      colors: {
        'custom-purple': '#7843E9',
        "custom-lightPurple": '#B7A3FF',
        "custom-gray": '#2D2E32',
        "custom-black":"#202022",
        'custom-green': '#4CAF50',
        'custom-gray': '#2A2A2A',
        'custom-light-gray': '#B0B0B0',
      },
    },
  },
  plugins: [],
};