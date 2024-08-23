/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        mainColor: "#324001",
        redColor: "#FF3838",
        // redColor: "#E20030",
        blueColor: "#214097",
        greenColor: "#008A65",
        skyColor: "#27A7DE",
        skyColor2: "#DEF2F1",
        whiteColor: "#FCFCFC",
        darkColor: "#1D1D1D",
        grayColor: "#AEAEAE",
        grayColor2: "#949494",
        grayColor3: "#ebece6",
        grayColor4: "#ccc",
        yellowColor: "#f3dc0a",
        violetColor: "#7E1BFF",
        goldColor: "#D4BA97",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Cairo: ["Cairo", "sans-serif"],
      },
      boxShadow: {
        box: "0px 3px 20px #8666A340;",
      },
      backgroundImage: {
        login: "url('/assets/login.webp')",
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
