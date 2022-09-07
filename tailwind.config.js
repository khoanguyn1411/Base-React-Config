/** @type {import('tailwindcss').Config} */

const toPx = (n) => `${n}px`;
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        width: "width",
        margin: "margin",
      },
      animation: {
        'skeleton': 'fade 2s linear infinite',
      },
      keyframes: {
        fade: {
          '0%, 100%': { opacity: "1" },
          '50%': { opacity: "0.5" },
        }
      },
    },
  },
  plugins: [],
}
