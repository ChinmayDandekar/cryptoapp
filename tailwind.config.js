/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        light: '#ffffff',
        blue: '#c0cbe9',
        textcol: '#280D5F',
        red: '#ED4B9E',
        purple: '#7645d9',
        cyan: '#32d0aa'
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }
  
        "xl": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
  
        "lg": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
  
        "md": { max: "767px" },
        // => @media (max-width: 767px) { ... }
  
        "sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }
  
        "xs": { max: "479px" },
        // => @media (max-width: 479px) { ... }
      },
    },
  },
  plugins: [],
}
