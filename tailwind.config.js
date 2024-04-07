/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Adding custom color
        primary: "#40b93c",
        danger: "#ff3811",
      },
    },
  },
  plugins: [],
};