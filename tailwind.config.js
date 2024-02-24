/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // grey: {
        //   50: "#f9fafb",
        //   100: "#f3f4f6",
        //   200: "#e5e7eb",
        //   300: "#d1d5db",
        //   400: "#9ca3af",
        //   500: "#6b7280",
        //   600: "#4b5563",
        //   700: "#374151",
        //   800: "#1f2937",
        //   900: "#111827",
        //   950: "#030712",
        // },

        primary: {
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
      },
    },
    screens: {
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1920px",
      xxl: "2560px",
    },
  },
  plugins: [],
};
