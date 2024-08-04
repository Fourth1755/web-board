import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'green-100': '#D8E9E4',
      'green-300': '#2B5F44',
      'green-500': '#243831',
      'success':'#49A569',
      'grey-100':'#BBC2C0',
      'grey-300':'#939494',
      'text':'#191919',
      'black':'#000000',
      'white':'#FFF',
      'surface':'#F3F3F3'
    },
    fontFamily:{
      'castoro':['Castoro']
    }
  },
  plugins: [],
};
export default config;
