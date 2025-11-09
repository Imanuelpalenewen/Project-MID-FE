/** @type {import('tailwindcss').Config} */
module.exports = {
  // Memberi tahu Tailwind untuk memindai semua file JSX dan HTML
  // untuk mencari class yang digunakan.
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
      },
      colors: {
        sky: {
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          300: "#7dd3fc",
          400: "#38bdf8",
        },
      },
      backgroundImage: {
        "hero-banner": "url('/banner.jpg')", // Menggunakan gambar dari public
      },
    },
  },
  // Plugin
  plugins: [require("tailwind-scrollbar-hide")],
};
