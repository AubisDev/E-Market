import React, { useEffect, useState } from "react";
import { useCartDispatch } from "../../context/cart";
import commerce from "../../lib/commerce";
import Navbar from "../../components/Navbar";
import { stripHtml } from "string-strip-html";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ClothesColors from "../../components/ProductCard/ClothesColors/ClothesColors";
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import ClothesSizes from "../../components/ProductCard/ClothesSizes/ClothesSizes";
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import Footer from "../../components/Footer/Footer";

// export async function getStaticProps({ params }) {
//   const { permalink } = params;

//   const product = await commerce.products.retrieve(permalink, {
//     type: 'permalink',
//   });

//   return {
//     props: {
//       product,
//     },
//   };
// }



// export async function getStaticPaths() {
//   const { data: products } = await commerce.products.list();

//   return {
//     paths: products.map((product) => ({
//       params: {
//         permalink: product.permalink,
//       },
//     })),
//     fallback: true,
//   };
// }

export async function getServerSideProps({params}) {
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

export default function ProductPage({ product }) {

  const router = useRouter();
  const { setCart } = useCartDispatch()  //Action to add items to cart  
  const {id, name, price, image, categories, variant_groups} = product; 
  const category = categories[0]; // from the first items of the array of categories from this items belongs 
  const variants = variant_groups[0];
  const variantSizes = variant_groups[1];
  const [bgCategory, setBgCategory] = useState('');
  const [shadowColor, setShadowColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [sizeSelected, setSizeSelected] = useState('');
  const [colorSelected, setColorSelected] = useState('')
  const colorVariantId = variants.id;
  const sizeVariantId = variantSizes.id;


  const addToCart = (id, quantity, color, size) => {
    if( color === '' || size === '' ) {
      Swal.fire(
        'Error adding to cart',
        'Please select color and size before adding to cart',
        'error'
      )
      return
    }
    commerce.cart.add( id, quantity,{ 
      [`${String(colorVariantId)}`] : colorSelected,
      [`${String(sizeVariantId)}`] : sizeSelected
      })
      .then( ({cart}) => {
      setCart( cart )
      Swal.fire(
        'Sucefully',
        'Item has been added to cart, check cart page for checkout',
        'success'
      )
    } )
    .catch( error => console.log(error))
    

  }

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

  const bgContainer = `w-full h-5/6 rounded-lg  flex flex-row relative shadow-2xl shadow-${shadowColor}-600 top-1/2 transform -translate-y-1/2`

  const increaseQuantity = () => {
      if(quantity >= 3) return
      setQuantity( quantity + 1 )
  }

  const decreaseQuantity = () => {
    if(quantity <= 1) return
    setQuantity( quantity - 1 )
  }

  return (
    <React.Fragment>
      
      <div className="w-3/5 m-auto"  style={{ height: '90vh' }}>
        {/*  --- Back Button ---  */}
        <button
          onClick={() => router.back()} 
          className="absolute left-0 py-2 px-4 ml-5 mt-5 border-2 border-gray-600 hover:bg-gray-100 duration-200 rounded-sm"
          name="goback"  
        >
          <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />  Back 
        </button>
        {/*  --- Container ---  */}
        <div className={bgContainer}>
          

        {/*  --- Product Image ---  */}
        <div className="w-1/2 bg-white rounded-l-lg h-full animate__animated animate__fadeInLeft animate__slow">
          <img src={image.url}  alt={name} className="object-cover h-3/4 relative top-1/2 transform -translate-y-1/2 m-auto" />
        </div>

          {/*  --- Product Details ---  */}
          <div className={`w-1/2 h-full ${bgCategory}  font-text-1 text-white flex flex-col animate__animated animate__fadeInRight animate__slow`}>
            <div className="w-full">
                <div className="">
                  {/*  --- Product name ---  */}
                  <p className="text-3xl pl-4 pt-4 ">{name}</p>
                </div>
                {/*  --- Product price ---  */}
                <p className="w-full flex text-xl text-white mt-1 italic font-sans pl-8">{price.formatted_with_symbol}</p>

                 {/*  --- Color Selection---  */}
                <div className="w-full flex m-auto ">
               { categories[1].name === 'Clothes' &&  <ClothesColors colors={variants.options} setColorSelected={setColorSelected} colorSelected={colorSelected}/> }
               </div>

                {/*  --- Size Selection---  */}
                <div className="w-full flex m-auto ">

               { categories[1].name === 'Clothes' &&  <ClothesSizes sizes={variantSizes.options} setSizeSelected={setSizeSelected} /> }
               </div>

                {/*  --- Quantity Selection---  */}
                <div className="flex flex-row m-auto justify-center mt-8">
                  <button
                      className="shadow-md active:translate-y-1"
                      onClick={increaseQuantity}
                      name="increase"
                  >
                    <FontAwesomeIcon icon={faPlusSquare} size='2x' className="" />
                  </button>
                  <p className="mx-3 bg-white w-8 text-black flex items-center justify-center font-semibold font-sans  rounded-full shadow-md ">{quantity}</p>
                  <button
                    className="shadow-md active:translate-y-1"
                    onClick={decreaseQuantity}
                    name="decrease"
                  >
                    <FontAwesomeIcon icon={faMinusSquare} size='2x' />
                  </button>
                </div>
                <p className="flex justify-center mt-2 text-gray-300 text-xs italic uppercase" >3 items max</p>
                
                {/*  --- Add to cart Section---  */}
                <div className="w-full ">

                  
                  {/*  --- Button for adding items to cart ---  */}
                  <button
                    className="flex m-auto text-white text-xl mt-6  duration-100 ease-in hover:border-b-2 border-white"
                    onClick={ () => addToCart( id, quantity, sizeSelected, colorSelected)}
                    name="addToCart"
                  > 
                    Add to cart
                    <span className="text-xl ml-2   "><FontAwesomeIcon icon={faShoppingCart } className="animate-bounce"/></span>

                  </button>
                </div>
            </div>
            
          </div>
        
        </div>
        
      </div>
      <footer className='w-full h-25vh bg-gray-800' id='footer'>
          <Footer/>
      </footer>
    </React.Fragment>
  );
}