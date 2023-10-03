/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
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
      },
      padding: {
        7: "4rem",
      },
      margin: {
        40: "10rem",
      },
    },
  },
  plugins: [],
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: [
      "./layouts/**/*.html",
      "./content/**/*.md",
      "./content/**/*.html",
    ],
  },
};
