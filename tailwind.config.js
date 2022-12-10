/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0F172A',
        'text': '#38F8FF'

      },
    },
  },
  plugins: [require("daisyui")],
}
