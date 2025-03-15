/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./node_modules/flowbite-react/lib/**/*.{js,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
}

