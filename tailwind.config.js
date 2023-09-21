/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    // desktop itu 2xl = 1536 untuk deafautlnya, tapi ini kita ubah
    container: {
      center: true,
      padding: "8px",
    },
    extend: {
      colors: {
        darkText: "#8587f7",
        dark3: "#4d5979",
        dark: "#0f0d2a",
        dark2: "#19163f",
        primaryMuda: "#6366f1",
        primary: "#4f46e5",
        primaryTua: "#1e1b4b",
        secondary: "#64748b",
        secondaryMuda: "#94a3b8",
      },
      // desktop itu 2xl = 1536 untuk deafautlnya, tapi ini kita ubah
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
