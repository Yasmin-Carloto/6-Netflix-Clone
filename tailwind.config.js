/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-background': "url('/src/assets/images/background.jpg')"
      }
    },
  },
  plugins: [],
}

