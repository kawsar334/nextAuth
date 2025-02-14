/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: '#9538E2',     
        bgcolor: '#161b1d',
        main: "#161c2d",
        textcolor: "#d35400",
        teal: "#5bd9b3"
      },
    },
  },
  plugins: [],
};
