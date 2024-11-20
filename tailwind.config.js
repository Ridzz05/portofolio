const {fontFamily} = require('tailwindcss/defaultTheme') 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        mont:['var(--font-monserrat)',...fontFamily.sans]
      },
      colors:{
        dark: "#1b1b1b", 
        light: "#f5f5f5",
        primary: "#863E96", // 240,86, 199 
        primaryDark: "#58E6D9", // 80,230,217
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'circularLight': 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)',
        'circularDark': 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 5px, #1b1b1b 100px)',
        'circularLightLg':"repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",
        'circularDarkLg':"repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 8px,#1b1b1b_80px)",
        'circularLightMd':"repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",
        'circularDarkMd':"repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px, #1b1b1b 60px)",
        'circularLightSm':"repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5_48px)",
        'circularDarkSm':"repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 4px, #1b1b1b 40px)",
      },
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}
