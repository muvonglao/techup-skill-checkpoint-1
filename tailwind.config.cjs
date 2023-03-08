/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        pt: ["PT Sans Narrow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
