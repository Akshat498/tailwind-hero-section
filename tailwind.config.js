/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      backgroundImage : {
        'img': "url('../src/images/bg-img.png')",
      },
    },
  },
  plugins: [],
}