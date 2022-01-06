module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
  ],
  safelist: ['shadow-blue-600', 'shadow-pink-600', 'shadow-purple-600', 'text-blue-500','text-red-500', 'text-green-500', 'text-orange-500','text-yellow-500','text-gray-500'  ],
  theme: {
    extend: {
        height: {
        '10hp': '10%',
        '90vh' : '90%',
        '10vh' : '10vh'
        },
        width: {
          '90vw': '90vw',
        },
        backgroundImage: {
          'divider-bg': "url('https://st4.depositphotos.com/4278641/21700/i/1600/depositphotos_217006254-stock-photo-small-paper-shopping-bags-shopping.jpg')",
        },
        fontFamily:{
          'text-1' : ['Dosis', 'sans-serif']
        },
        transitionDuration: {
          '3000': '3000ms',
        }
    },
  },
  plugins: [],
}
