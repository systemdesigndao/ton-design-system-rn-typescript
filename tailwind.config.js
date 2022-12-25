/** @type {import('tailwindcss').Config} */
const tdsTheme = require('@designervoid/ton-design-system/tdsTheme');

module.exports = {
  content: ["./App.tsx"],
  theme: {
    extend: tdsTheme,
  },
  plugins: [],
};
