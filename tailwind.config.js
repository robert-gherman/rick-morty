/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      midnight: "#272b33",
      night: "#202329",
      nightDark: "#1b1a1a",
      lightBlue: "#16bdca",
      blueDark: "#184b52",
      greenDark: "#0f3439",
      grey: "rgb(60, 62, 68)",
      white: "rgb(255 255 255)",
      greyLight: "rgb(146, 146, 147)",
    },
    width: {
      600: "600px",
    },

    extend: {},
  },
  plugins: [],
};
