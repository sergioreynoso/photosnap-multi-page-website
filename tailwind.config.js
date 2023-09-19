/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-dmSans)", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: ["12px", { lineHeight: "16px", letterSpacing: "2px" }],
      sm: ["15px", { lineHeight: "25px", letterSpacing: "0px" }],
      lg: ["18px", { lineHeight: "25px", letterSpacing: "0px" }],
      xl: ["24px", { lineHeight: "25px", letterSpacing: "0px" }],
      "2xl": ["32px", { lineHeight: "40px", letterSpacing: "3.33px" }],
      "3xl": ["40px", { lineHeight: "48px", letterSpacing: "4.17px" }],
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    screens: {
      tablet: "768px",
      desktop: "1440px",
    },
    extend: {
      height: {
        17: "72px",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      padding: {
        18: "72px",
      },
      colors: {
        brand: {
          black: "#000000",
          white: "#FFFFFF",
          grey: "#DFDFDF",
        },
      },
      backgroundImage: {
        "brand-accent":
          "linear-gradient(26deg, #FFC593 0.42%, #BC7198 43.46%, #5A77FF 83.33%);",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
