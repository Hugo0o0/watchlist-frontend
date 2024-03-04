/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--clr-primary) / <alpha-value>)",
        secondary: "hsl(var(--clr-secondary) / <alpha-value>)",
        "kashmir-blue": "hsl(var(--clr-kashmir-blue) / <alpha-value>)",
        mirage: "hsl(var(--clr-mirage) / <alpha-value>)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      fontSize: {
        "heading-l": "3.2rem",
        "heading-m": "2.4rem",
        "heading-xs": "1.8rem",
        "body-m": "1.5rem",
        "body-s": "1.3rem",
      },
    },
  },
  plugins: [],
};
