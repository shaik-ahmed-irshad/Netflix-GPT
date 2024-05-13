/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./utils/**/*.{html,js,jsx}",
  ],
  theme: {
    variants: {
      extend: {
        // ...
        backgroundOpacity: ["active"],
      },
    },
  },
  plugins: [],
};
