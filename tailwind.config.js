module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem"
      }
    },
    colors: {
      // bg
      "nav-black": "#101010",
      "main-black": "#292929",
      "card-black": "#171717",
      "button-black": "#000000",
      "filter-black": "#131313",
      "select-black": "#232323",

      // text
      "tab-text": "#d0cbcb",
      "gray-6": "#f2f2f2",
      "card-info-text": "#cfcfcf",
      "filter-text": "#a5a5a5",

      "light-grayish-blue": "#f3f4f6",
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
