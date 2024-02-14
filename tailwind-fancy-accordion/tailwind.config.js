/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        basis: "transition-property: flex-basis;"
      },
      screens: {
        "max-tablet": {"max": "44.9999rem"},
        "tablet": "45rem"
      }
    },
  },
  plugins: [],
}

