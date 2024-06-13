/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backGroundFooterColor: "#4b4444",
      },

      backgroundImage: {
        "login-bg": "url('images/login.png')",
      },
    },
    screens: {
      sm: '350px',    // Smartphones
      md: '768px',    // Tablets (iPads)
      lg: '1024px',   // Small desktops / large tablets
      xl: '1280px',   // Large desktops
    },
  },
  plugins: [],
}

