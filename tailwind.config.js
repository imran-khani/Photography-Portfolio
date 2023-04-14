/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FC4308",
      },
      fontSize: {
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "1xl":'60px',
        "2xl": "48px",
        "3xl": "100px",
      },
    },
  },
  plugins: [],
};
