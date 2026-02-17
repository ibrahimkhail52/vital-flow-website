/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    screens: {
      vs:'375px', 
      md:'768px',
      mmd:'820px',
    },
  },
   
  plugins: [],
};
