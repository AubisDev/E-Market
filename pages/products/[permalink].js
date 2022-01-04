import React, { useEffect, useState } from "react";
import { useCartDispatch } from "../../context/cart";
import commerce from "../../lib/commerce";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import { stripHtml } from "string-strip-html";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ClothesColors from "../../components/ProductCard/ClothesColors/ClothesColors";

export async function getStaticProps({ params }) {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink, {
    type: 'permalink',
  });

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}

export default function ProductPage({ product }) {

  const { setCart } = useCartDispatch()  //Action to add items to cart  
  const { name, price, description, image, categories, variant_groups} = product; 
  const category = categories[0]; // from the first items of the array of categories from this items belongs 
  const variants = variant_groups[0];
  const { result } = stripHtml(description);  
  const [bgCategory, setBgCategory] = useState('');
  const [quantity, setQuantity] = useState(1)
  const addToCart = () => {
    commerce.cart.add( id, quantity ).then( ({cart}) => setCart( cart ) )
    .catch( error => console.log(error))
  }
  const [ openAddToCartModal, setOpenAddToCartModal] = useState(false);

  

  useEffect(() => {
    if( category.slug === 'electronics' ){
      setBgCategory('bg-gradient-to-r from-cyan-500 to-blue-500')
    }
    else if( category.slug === 'kids' ){
      setBgCategory('bg-gradient-to-r from-fuchsia-500 to-purple-800')
    }
    else if( category.slug === 'women' ){
      setBgCategory('bg-gradient-to-r from-purple-500 to-pink-500')
    }
    else if( category.slug === 'men' ){
      setBgCategory('bg-gradient-to-r from-green-400 to-blue-600')
    } 
  }, [category.slug])

  const bgContainer = `w-full h-5/6 rounded-lg ${bgCategory}  flex flex-row relative shadow-xl top-1/2 transform -translate-y-1/2`



  return (
    <React.Fragment>
      <div style={{ height: '10vh' }}>
        <Navbar/>
      </div>
      
      <div className="w-4/5 m-auto"  style={{ height: '90vh' }}>
        <div className={bgContainer}>
        <div className="w-1/3 bg-white  rounded-l-lg h-full ">
          <img src={image.url}  alt={name} className="object-cover h-3/4 relative top-1/2 transform -translate-y-1/2 " />
        </div>

          <div className="w-2/3 h-full font-text-1 text-white flex flex-col justify-between  items-center ">
            <div className="w-4/5 mt-5">
                <div className="h-full">
                  <p className="text-4xl flex justify-center    font-semibold ">{name}</p>
                  <p className=" mt-3 text-justify font-text-1 text-base   items  leading-relaxed">{ result }</p>
                </div>

                { categories[1].name === 'Clothes' &&   <ClothesColors colors = {variants.options}/> }

                <div className="w-full ">
                  <p className="w-full flex justify-center text-3xl text-white mt-5 font-bold ">PRICE: {price.formatted_with_symbol}</p>
                  <button
                    className="flex m-auto text-white text-xl mt-4  duration-100 ease-in group"
                    onClick={ () => setOpenAddToCartModal( true )}
                  > 
                    Add to cart
                    <span className="text-xl ml-2 group-hover:translate-x-10 group-hover:scale-125 duration-1000 ease-in-out "><FontAwesomeIcon icon={faShoppingCart }/></span>
                  
                  </button>
                </div>
            </div>
            
          </div>
        
        </div>
        
      </div>
    </React.Fragment>
  );
}