/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        body: ["MiloADAC, sans-serif"],
      },
      fontSize: {
        headline: [
          "18px",
          {
            lineHeight: "24px",
            fontWeight: 700,
          },
        ],
        quote: [
          "24px",
          {
            lineHeight: "40px",
            fontWeight: 400,
          },
        ],
      },
      screens: {
        tablet: "600px",
        desktop: "840px",
      },
    },
  },
  plugins: [],
  prefix: "tw-",
};
