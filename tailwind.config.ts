import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          deep: "#0A2A3B",
          DEFAULT: "#123B52",
          light: "#2C6B8A",
        },
        sunset: {
          DEFAULT: "#E2723A",
          gold: "#E8A94F",
        },
        sand: {
          light: "#FBF6EC",
          DEFAULT: "#EFE3CC",
          dark: "#DCC9A3",
        },
        charcoal: {
          DEFAULT: "#211D18",
          soft: "#4A4238",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        wideish: "0.06em",
      },
      maxWidth: {
        prose: "68ch",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
