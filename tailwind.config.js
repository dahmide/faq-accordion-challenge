/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
            whi: {
                100: "#FFFFFF"
            },
            pin: {
                970: "#F9F0FF",
                150: "#A840D8"
            },
            pur: {
                490: "#8C6991",
                140: "#2F1533"
            }
        },
        fontFamily: {
            body: ["Work sans", "sans-serif"]
        },
        backgroundImage: {
            small: "url('./assets/images/background-pattern-mobile.svg')",
            large: "url('./assets/images/background-pattern-desktop.svg')",
        }
    },
  },
  plugins: [],
}

