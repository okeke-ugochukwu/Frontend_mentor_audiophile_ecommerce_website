/** @type {import('tailwindcss').Config} */

module.exports = {
   content: [
      './src/assets/**/*.{css, scss}',
      './src/components/*.{vue,js}',
      './src/components/**/*.{vue,js}',
      './src/views/**/*.{vue,js}',
      './*.{vue,js,ts}',
  ],

//    purge: [
//       './src/assets/**/*.{css, scss}',
//       './src/components/*.{vue,js}',
//       './src/components/**/*.{vue,js}',
//       './*.{vue,js,ts}',
//    ],

  theme: {
    extend: {
      colors: {
         'ad-brown': 'hsl(22, 65%, 57%)',
         'ad-black': 'hsl(0, 0%, 6%)',
         'ad-light-grey': 'hsl(0, 0%, 95%)',
         'ad-off-white' : '0, 0%, 98%',
         'ad-off-white-text': '#ffffff80',
         'ad-peach-brown': 'hsl(21, 94%, 75%)'
      },

      screens: {
         'sml': '480px',
         // => @media (min-width: 480px) { ... }

         'sm': '640px',
         // => @media (min-width: 640px) { ... }

         'md': '768px',
         // => @media (min-width: 768px) { ... }

         'lg': '1024px',
         // => @media (min-width: 1024px) { ... }

         'pxl': '1200px',
         // => @media (min-width: 1200px) { ... }

         'xl': '1280px',
         // => @media (min-width: 1280px) { ... }

         'p2xl': '1500px',
         // => @media (min-width: 1500px) { ... }

         '2xl': '1536px',
         // => @media (min-width: 1536px) { ... }

         '3xl': '1600px',
         // => @media (min-width: 1600px) { ... }

         'p4xl': '1600px',
         // => @media (min-width: 1600px) { ... }
      }
    },
  },
  plugins: [],
}

