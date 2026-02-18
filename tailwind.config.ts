import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      colors: {
        border: "hsl(215 25% 25%)",
        input: "hsl(215 25% 25%)",
        ring: "hsl(193 100% 50%)",
        background: "hsl(222 47% 11%)",
        foreground: "hsl(210 40% 98%)",
        primary: {
          DEFAULT: "hsl(193 100% 50%)",
          foreground: "hsl(222 47% 11%)"
        },
        secondary: {
          DEFAULT: "hsl(217 33% 17%)",
          foreground: "hsl(210 40% 98%)"
        },
        muted: {
          DEFAULT: "hsl(215 28% 18%)",
          foreground: "hsl(215 20% 70%)"
        },
        card: {
          DEFAULT: "hsl(217 33% 17%)",
          foreground: "hsl(210 40% 98%)"
        }
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
