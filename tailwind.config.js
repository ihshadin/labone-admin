/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        DMSans: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#0a8848",
        secondary: "#f70920",
        accent: "#333333",
      },
    },
  },
  plugins: [],
};
