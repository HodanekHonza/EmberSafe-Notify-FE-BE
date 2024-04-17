import flowbite from "flowbite-react/tailwind"
/** @type {import('tailwindcss').Config} */
// tailwind.config.js
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

