/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class",
  safelist: [
    "bg-purple-200",
    "bg-blue-200",
    "bg-black",
    "text-white",
      "flex-1",
  ]
}

