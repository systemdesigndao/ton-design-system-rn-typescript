/** @type {import('tailwindcss').Config} */
const tdsTheme = require('@designervoid/ton-design-system/tdsTheme');
const nativewind = require("nativewind/tailwind")

module.exports = {
  content: ["./App.tsx"],
  theme: {
    extend: tdsTheme,
  },
  plugins: [],
  presets: [nativewind],
};
