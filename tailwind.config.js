/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
      container: {
          center: true,
          padding: "2rem",
          screens: {
              "2xl": "1400px",
          },
      },
      extend: {
          backgroundImage: {
              "blue-gradient":
                  "linear-gradient(90deg, #001A75 0%, #2D5EE8 62%)",
              sidebar: "linear-gradient(90deg, #10172B 0%, #0A1D52 100%)",
              "dark-gradient":
                  "linear-gradient(270deg, #151823 0%, #0A1D52 77.73%, #0A1D52 100%)",
              "orange-gradient":
                  "linear-gradient(22.87deg, #E54A64 8.07%, #FC9153 90.91%)",
              "custom-gradient":
                  "linear-gradient(90deg, #E54A64 0.31%, #FA8B55 182.47%)",
              "gradient-line":
                  "linear-gradient(102.38deg, #7900B3 13.41%, #4D53A1 44.45%, #338496 63%, #00C8F3 94.83%)",
          },
          colors: {
              blueBrilhant: "#2D5EE8",
              colorGrey: "#9498A6",
              redError: "#EF4444",
              hoverError: "#BD1212",
              greenSuccess: "#26BA65",
              hoverSucces: "#00923D",
              brightBlue: "#3167FF",
              nightSky: "#0C1222",
              avocado: "#CAD845",
              salmon: "#FF735C",
              verynightSky: "#000217",
              silk: "#F7F7F7",
              backgroundLight: "#F9F9F9",
              border: "hsl(var(--border))",
              input: "hsl(var(--input))",
              ring: "hsl(var(--ring))",
              background: "hsl(var(--background))",
              foreground: "hsl(var(--foreground))",
              primary: {
                  DEFAULT: "hsl(var(--primary))",
                  foreground: "hsl(var(--primary-foreground))",
              },
              secondary: {
                  DEFAULT: "hsl(var(--secondary))",
                  foreground: "hsl(var(--secondary-foreground))",
              },
              destructive: {
                  DEFAULT: "hsl(var(--destructive))",
                  foreground: "hsl(var(--destructive-foreground))",
              },
              muted: {
                  DEFAULT: "hsl(var(--muted))",
                  foreground: "hsl(var(--muted-foreground))",
              },
              accent: {
                  DEFAULT: "hsl(var(--accent))",
                  foreground: "hsl(var(--accent-foreground))",
              },
              popover: {
                  DEFAULT: "hsl(var(--popover))",
                  foreground: "hsl(var(--popover-foreground))",
              },
              card: {
                  DEFAULT: "hsl(var(--card))",
                  foreground: "hsl(var(--card-foreground))",
              },
          },
          height: {
              heightFullMobile: "calc(100vh - 80px)",
              heightFullDesktop: "calc(100vh - 100px)",
          },
          fontFamily: {
              alexandria: ["Alexandria", "serif"],
          },
          borderRadius: {
              lg: "var(--radius)",
              md: "calc(var(--radius) - 2px)",
              sm: "calc(var(--radius) - 4px)",
          },
          keyframes: {
              "accordion-down": {
                  from: { height: "0" },
                  to: { height: "var(--radix-accordion-content-height)" },
              },
              "accordion-up": {
                  from: { height: "var(--radix-accordion-content-height)" },
                  to: { height: "0" },
              },
          },
          animation: {
              "accordion-down": "accordion-down 0.2s ease-out",
              "accordion-up": "accordion-up 0.2s ease-out",
          },
      },
  },
  plugins: [require("tailwindcss-animate")],
}
