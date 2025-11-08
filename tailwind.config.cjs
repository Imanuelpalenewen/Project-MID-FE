/** @type {import('tailwindcss').Config} */
module.exports = {
  // Ini adalah bagian PENTING.
  // Ini memberi tahu Tailwind untuk memindai semua file JSX dan HTML
  // untuk mencari class yang Anda gunakan.
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "sans-serif"], // Font modern yang bersih
      },
      colors: {
        sky: {
          700: "#0369a1", // Biru utama
          800: "#075985",
          900: "#0c4a6e", // Biru tua
          300: "#7dd3fc", // Teks highlight
          400: "#38bdf8", // Hover highlight
        },
      },
      backgroundImage: {
        "hero-banner": "url('/banner.jpg')", // Menggunakan gambar dari public
      },
    },
  },
  // Ini adalah bagian untuk plugin
  plugins: [
    require("tailwind-scrollbar"), // Plugin untuk styling scrollbar
  ],
};
