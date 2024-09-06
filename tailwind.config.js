/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        typing: "typing 3.5s steps(40, end)",
        blinkCaret: "blink-caret .75s step-end infinite",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blinkCaret: {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "black" },
        },
      },
    },
  },
  plugins: [],
};
