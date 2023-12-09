/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "primary-cyan": "hsl(158, 36%, 37%)",
        "primary-cream": "hsl(30, 38%, 92%)",
        "neutral-dark-blue": "hsl(212, 21%, 14%)",
        "neutral-grayish-blue": "hsl(212, 21%, 14%)",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
