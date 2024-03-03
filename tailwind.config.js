/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--clr-primary) / <alpha-value>)",
        secondary: "hsl(var(--clr-secondary) / <alpha-value>)",
        "kashmir-blue": "hsl(var(--clr-kashmir-blue) / <<alpha-value>)",
        mirage: "hsl(var(--clr-mirage) / <<alpha-value>)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
