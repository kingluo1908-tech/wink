/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050816",
          900: "#070B1D",
          850: "#0A1024",
          800: "#0D1330"
        },
        wink: {
          green: "#B7FF00",
          green2: "#A8FF1A",
          green3: "#92FF00"
        },
        blink: {
          violet: "#5B5CFF",
          violet2: "#6D63FF",
          violet3: "#7D72FF"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(183,255,0,0.18)",
        violet: "0 0 42px rgba(109,99,255,0.22)"
      }
    }
  },
  plugins: []
};
