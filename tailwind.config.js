/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBg: "#ffffff",
        lightText: "#000000",
        darkBg: "#121212",
        darkText: "#e0e0e0",
        neonBg: "#0ff",
        neonText: "#ff00ff",
      },
    },
  },
  plugins: [],
};