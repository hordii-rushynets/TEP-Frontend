import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--mont)", ...fontFamily.sans],
      },
      colors: {
        black: "#1D1D1D",
        tep_blue: { 400: "#3B5B8C", 500: "#2F5C71" },
        tep_gray: { 200: "#F5F5F5", 500: "#A5A5A5", 700: "#999999" },
        tep_red: { 500: "#CC3A3A" },
      },
      boxShadow: {
        DEFAULT: "0 5px 10px 0 rgb(0 0 0 / 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
