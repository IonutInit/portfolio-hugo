/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html",
    "./styles/main.css"
  ],
  theme: {
    extend: {
      fontSize: {
        "10xl": "10rem",
        "5xl": "4rem",
        "6xl": "6rem",
      },
      colors: {
        bkg: "rgb(var(--color-bkg) / 1)",
        content: "rgb(var(--color-content) / 1)",
      },
      spacing: {
        7: "4rem",
        4: "2rem",
        pic: "2rem",
      },
      padding: {
        7: "4rem",
      },
      margin: {
        40: "10rem",
        pic: "0.5rem",
      },
    },
  },
  plugins: [],
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html",
    "./styles/main.css", //doesn't seem to work at the moment
  ],
};
