import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        red: "#b92b5d",
        lightRed: "#ff3b72",
      },
      transitionProperty: {
        background: "background-color, background-image",
      },
      transitionTimingFunction: {
        default: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      },
      transitionDuration: {
        default: "0.4s",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
