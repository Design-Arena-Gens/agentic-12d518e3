import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'deep-cyan': '#0891b2',
        'sapphire': '#1e40af',
        'mint': '#6ee7b7',
        'dark-bg': '#0a0e27',
        'dark-card': '#131834',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-gradient': 'linear-gradient(135deg, #0891b2 0%, #1e40af 50%, #6ee7b7 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
