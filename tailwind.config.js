/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b2727",
        ocean: {
          50: "#eef8ff",
          100: "#d9efff",
          400: "#5bb3ff",
          500: "#41a4ff",
          600: "#2c86e0",
          700: "#1f66ad",
        },
        spice: {
          50: "#fdf6ea",
          100: "#f8e6c2",
          400: "#e3a94b",
          500: "#d3922e",
          600: "#b47623",
        },
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(11, 39, 39, 0.15)",
      },
    },
  },
  plugins: [],
};
