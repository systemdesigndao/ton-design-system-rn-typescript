/** @type {import('tailwindcss').Config} */
const tdsTheme = require('@designervoid/ton-design-system/tdsTheme');

delete tdsTheme.fontSize; // temp, because rem supporting only with scaling (not implemented yet)

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      ...tdsTheme,
      fontFamily: {
        regular: ['Mulish-Regular'],
        bold: ['Mulish-Black'],
      },
    },
  },
  plugins: [],
};
