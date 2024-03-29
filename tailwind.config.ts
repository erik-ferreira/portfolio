import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-nunito)"],
        orbi: ["var(--font-orbitron)"],
        marker: ["var(--font-marker)"],
      },

      fontSize: {
        "3.5xl": "2rem",
        "4.5xl": "2.5rem",
        "4.75xl": "2.625rem",
        "5.5xl": "3.5rem",
        "5.75xl": "2.75rem",
        "6.5xl": "4rem",
        "7.5xl": "5.25rem",
      },

      colors: {
        page: "#090B0E",
        section: "#0F172A",

        "green-whatsapp": "#128C7E",
        "red-mail": "#DB4437",

        dark: {
          50: "#e6e6e6",
          100: "#dadada",
          200: "#b2b2b2",
          300: "#050505",
          400: "#040404",
          500: "#040404",
          600: "#020202",
        },

        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },

        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },

        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },

        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },

        "blue-dark": {
          50: "#e6f0fa",
          100: "#d9e8f7",
          200: "#b1d0ee",
          300: "#0466c8",
          400: "#045cb4",
          500: "#0352a0",
          600: "#034d96",
          700: "#023d78",
          800: "#022e5a",
          900: "#012446",
        },

        yellow: {
          50: "#fffbe6",
          100: "#fff9d9",
          200: "#fff3b0",
          300: "#ffd700",
          400: "#e6c200",
          500: "#ccac00",
          600: "#bfa100",
          700: "#998100",
          800: "#736100",
          900: "#594b00",
        },

        red: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },

        violet: {
          50: "#f4ecff",
          100: "#efe3ff",
          200: "#dec5ff",
          300: "#9343fe",
          400: "#843ce5",
          500: "#7636cb",
          600: "#6e32bf",
          700: "#582898",
          800: "#421e72",
          900: "#331759",
        },
      },

      screens: {
        xs: "425px",
      },

      maxWidth: {
        content: "1600px",
      },

      width: {
        content: "90%",
        "4.5": "1.125rem",
        "67.5": "16.875rem",
        100: "25rem",
      },

      height: {
        "4.5": "1.125rem",
        "67.5": "16.875rem",
        100: "25rem",
      },

      lineHeight: {
        base: "160%",
      },

      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-76%)" },
        },

        "scroll-md": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-65%)" },
        },

        showDialog: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        hideDialog: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },

      animation: {
        slider: "scroll 30s linear infinite",
        "slider-md": "scroll-md 30s linear infinite",
        "show-dialog": "showDialog 0.5s",
        "hide-dialog": "hideDialog 0.5s",
      },

      gap: {
        42: "10.5rem",
      },

      boxShadow: {
        blue: "0px 0px 24px 0px #2563EB",
      },

      transitionDuration: {
        400: "400ms",
      },

      padding: {
        "10.5": "2.625rem",
      },
    },
  },
  plugins: [],
}
export default config
