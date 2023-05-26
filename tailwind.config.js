/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#025efe",
        secondary: "#1e2a53",
        textLight: "#8e96a3",
        textDark: "#2b355b",
        "border-frame": "#c4c4c4",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "main-bg": "url('/bg.jpg')",
        gradient: "linear-gradient(180deg, #FFFFFF99, #FFFFFF)",
      },
      boxShadow: {
        custom: "0px 4px 14px 2px #E0E0E099",
      },
    },
  },
  plugins: [],
};
