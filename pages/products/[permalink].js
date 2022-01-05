import React, { useEffect, useState } from "react";
import { useCartDispatch } from "../../context/cart";
import commerce from "../../lib/commerce";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import { stripHtml } from "string-strip-html";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ClothesColors from "../../components/ProductCard/ClothesColors/ClothesColors";
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import ClothesSizes from "../../components/ProductCard/ClothesSizes/ClothesSizes";

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
  const variantSizes = variant_groups[1];
  // const { result } = stripHtml(description);  
  const [bgCategory, setBgCategory] = useState('');
  const [shadowColor, setShadowColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  
  const addToCart = () => {
    commerce.cart.add( id, quantity ).then( ({cart}) => setCart( cart ) )
    .catch( error => console.log(error))
  }
  const [ openAddToCartModal, setOpenAddToCartModal] = useState(false);

  

  useEffect(() => {
    if( category.slug === 'electronics' ){
      setBgCategory('bg-gradient-to-r from-cyan-500 to-blue-500')
      setShadowColor('blue')
    }
    else if( category.slug === 'kids' ){
      setBgCategory('bg-gradient-to-r from-fuchsia-500 to-purple-800')
      setShadowColor('purple')
    }
    else if( category.slug === 'women' ){
      setBgCategory('bg-gradient-to-r from-purple-500 to-pink-500')
      setShadowColor('pink')
    }
    else if( category.slug === 'men' ){
      setBgCategory('bg-gradient-to-r from-green-400 to-blue-600')
      setShadowColor('blue')
    } 
  }, [category.slug])

  const bgContainer = `w-full h-5/6 rounded-lg ${bgCategory}  flex flex-row relative shadow-2xl shadow-${shadowColor}-600 top-1/2 transform -translate-y-1/2`


  return (
    <React.Fragment>
      <div style={{ height: '10vh' }}>
        <Navbar/>
      </div>
      
      <div className="w-3/5 m-auto"  style={{ height: '90vh' }}>

        {/*  --- Container ---  */}
        <div className={bgContainer}>
          

        {/*  --- Product Image ---  */}
        <div className="w-1/2 bg-white  rounded-l-lg h-full ">
          <img src={image.url}  alt={name} className="object-cover h-3/4 relative top-1/2 transform -translate-y-1/2 m-auto" />
        </div>

          {/*  --- Product Details ---  */}
          <div className="w-1/2 h-full font-text-1 text-white flex flex-col">
            <div className="w-full">
                <div className="">
                  {/*  --- Product name ---  */}
                  <p className="text-3xl pl-4 pt-4 ">{name}</p>
                </div>
                {/*  --- Product price ---  */}
                <p className="w-full flex text-xl text-white mt-1 italic font-sans pl-8">{price.formatted_with_symbol}</p>

                 {/*  --- Color Selection---  */}
                <div className="w-full flex m-auto ">
               { categories[1].name === 'Clothes' &&  <ClothesColors colors={variants.options} /> }
               </div>

                {/*  --- Size Selection---  */}
                <div className="w-full flex m-auto ">
               { categories[1].name === 'Clothes' &&  <ClothesSizes sizes={variantSizes.options} /> }
               </div>

                {/*  --- Quantity Selection---  */}
                <div className="flex flex-row m-auto justify-center mt-8">
                  <FontAwesomeIcon icon={faPlusSquare} size='2x' className="" />
                  <p className="mx-3 bg-white w-8 text-black flex items-center justify-center font-semibold font-sans">{quantity}</p>
                  <FontAwesomeIcon icon={faMinusSquare} size='2x' />
                </div>

                <div className="w-full ">
                  {/*  --- Button for adding items to cart ---  */}
                  <button
                    className="flex m-auto text-white text-xl mt-8  duration-100 ease-in group"
                    onClick={ () => setOpenAddToCartModal( true )}
                  > 
                    Add to cart
                    <span className="text-xl ml-2 group-hover:translate-x-10 group-hover:scale-125 duration-1000 ease-in-out "><FontAwesomeIcon icon={faShoppingCart } className="animate-bounce"/></span>
                  
                  </button>
                </div>
            </div>
            
          </div>
        
        </div>
        
      </div>
    </React.Fragment>
  );
}