/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#16154D',
        'text': '#38F8FF'

      },
    },
  },
  plugins: [require("daisyui")],
}
