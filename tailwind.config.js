/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#cb5930",
        secondary: "#212025",
        accent: "#e9e0d3",
        error: "#ff0000"
      },
    },
  },
  plugins: [],
};
