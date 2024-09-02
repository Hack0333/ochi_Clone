/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'ochibg': "url('../assets/ochibg.jpg')",
      },
    },
  },
  plugins: [],
};
