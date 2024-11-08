/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(2%)", opacity: "1" },
          "50%": { transform: "translateX(1%)", opacity: "1" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        transformUp: {
          "0%": { transform: "rotate(0deg)", opacity: "1" },
          "100%": { transform: "rotate(180deg)", opacity: "1" },
        },
        transformDown: {
          "0%": { transform: "rotate(-100deg)", opacity: "1" },
          "100%": { transform: "rotate(0deg)", opacity: "1" },
        }
      },
      animation: {
        slideIn: "slideIn 0.5s ease-in-out forwards",
        transformUp: "transformUp 0.5s ease-in-out forwards",
        transformDown: "transformDown 0.5s ease-in-out forwards"
      },
      backgroundImage: {
        'login-background': "url('/src/assets/images/background.jpg')",
      }
    },
  },
  plugins: [],
}

