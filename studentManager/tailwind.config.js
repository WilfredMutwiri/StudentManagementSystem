/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./**/*{.js,.html}",
    flowbite.content(),
],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}