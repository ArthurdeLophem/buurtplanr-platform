/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "blue": "#306BD6",
        "black": "#191919",
        "white": "#DBDBDB",
      },
      fontFamily: {
        "main": "Roboto",
      },
      fontSize: {
        "h1": "4rem",
        "h2": "2rem",
        "h3": "1.5rem",
        "body": "1rem",
      },
      height: {
        "itemsDashboard": "256px"
      }
    },
  },
  plugins: [],
}
