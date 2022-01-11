import React, { useEffect, useState } from 'react'
import commerce from "../lib/commerce";
import Navbar from '../components/Navbar';
import SlideShow from '../components/SlideShow';
import Discover from '../components/Discover/Discover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer/Footer';


export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();


  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}

export default function IndexPage({ merchant, categories, products }) {
  const [isLoading, setIsLoading] = useState(false);
  // console.log(categories);
  // console.log(products)
  // console.log(merchant)

  useEffect(() => {

    setIsLoading( true )
    setTimeout(() => {
      setIsLoading( false )
    }, 5000);
  }, [])

  return (
    <div className='w-screen h-screen overflow-x-hidden '>

      <section className='w-full  flex justify-center mt-10 animate__animated animate__fadeIn animate__slower'>
        <SlideShow/>
      </section>
      <div className='bg-divider-bg bg-center h-40 w-screen mt-20 shadow-md '> 
      
          <p className='relative top-1/2 transform -translate-y-1/2 w-2/3 m-auto text-3xl '
            >Check out last update in our stuck 
            <FontAwesomeIcon icon={faArrowCircleDown} className='text-gray-600 ml-2 animate-bounce duration-200  '/>
          </p>
          
      </div>
      <section className='grid grid-cols-2  gap-4 w-90vw m-auto mt-20 overflow-x-hidden '>
      {categories.map( category => <Discover key={category.id} category={category} /> )}

      </section>
      <footer className='w-full h-25vh bg-gray-800 ' id='footer'>
         <Footer/>
      </footer>
    </div>
  );
}
