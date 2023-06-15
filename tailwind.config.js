/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "ps-pure-black": "#000000",
      "ps-pure-white": "#FFFFFF",
      "ps-light-grey": "#DFDFDF",
    },
    extend: {
      backgroundImage: {
        "ps-accent":
          "linear-gradient(26.57deg, #FFC593 0.42%, #BC7198 43.46%, #5A77FF 83.33%);",
      },
    },
  },
  plugins: [],
};
