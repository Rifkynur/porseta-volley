/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2b2e4d",
        secondary: "#f98d4d",
      },
      fontFamily: {
        roboto: ["Roboto Slab", "serif"],
        fjalla: ["Fjalla One", "sans-serif"],
      },
      boxShadow: {
        "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)", // Custom text shadow
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-md": {
          textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-lg": {
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
        },
      });
    },
  ],
};
