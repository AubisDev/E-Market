module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
  ],
  safelist: ['border-white','shadow-blue-600', 'shadow-pink-600', 'shadow-purple-600', 'text-blue-500','text-red-500', 'text-green-500', 'text-orange-500','text-yellow-500','text-gray-500', 'bg-gray-600', 'text-pink-500'  ],
  theme: {
    screens: {
      'xl': '1280px',
      'lg': '1024px',
      'mdlg' : '850px',
      'md': '768px',
      'sm': '640px',
      'xs' : '200px'
    },
    extend: {
        height: {
        '10hp': '10%',
        '90vh' : '90%',
        '10vh' : '10vh',
        '30vh' : '30vh',
        '35vh' : '35vh',
        '50vh' : '50vh',
        '20vh' : '20vh',
        '25vh' : '25vh',
        '90vh' : '90vh'
        },
        width: {
          '90vw': '90vw',
          '90pw': '90%',
          '95pw': '95%',
        },
        backgroundImage: {
          'divider-bg': "url('https://st4.depositphotos.com/4278641/21700/i/1600/depositphotos_217006254-stock-photo-small-paper-shopping-bags-shopping.jpg')",
        },
        fontFamily:{
          'text-1' : ['Dosis', 'sans-serif']
        },
        transitionDuration: {
          '3000': '3000ms',
        },
        rotate: {
          '360': '360deg',
        }
    },
  },
  plugins: [],
}
