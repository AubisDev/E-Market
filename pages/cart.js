import { useReducer, useEffect } from 'react'
import Navbar from "../components/Navbar";
import { useCartDispatch, useCartState } from "../context/cart";
import commerce from '../lib/commerce'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes } from '@fortawesome/free-solid-svg-icons'
import { faCube } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer/Footer';

function CartItems({ name, quantity, line_total, id, image, price, selected_options }) {

    const { setCart } = useCartDispatch();

    const handleUpdateCart = ({ cart }) => { 
        setCart( cart )
    }

    const removeItem = ()  =>{
        commerce.cart.remove(id).then( handleUpdateCart)
    };

    const decrementQuantity = () => {
        quantity > 1 ? commerce.cart.update(id, {quantity: quantity - 1}).then( handleUpdateCart) : 
        removeItem()
    }
    
    const incrementQuantity = () =>{
        commerce.cart.update( id, {quantity: quantity + 1}).then( handleUpdateCart)
    }

    const handleRemoveItemFromCart = () =>{
        commerce.cart.remove( id ).then( handleUpdateCart )
    }


    return(
        <div className="grid grid-cols-5  w-full items-center mb-10 mt-3  border-gray-500/40">
            <div className="flex flex-row col-span-2 h-full ">
                <div className="w-1/2 h-full px-2">
                    <img src={image.url} alt={name} className="object-cover"/>
                </div>
                <div className="w-1/2 h-full flex flex-col justify-center items-center text-center break-words">
                    <p className=''>{name}</p>
                    <div className='flex flex-row items-center mt-2'>
                        <p>Color:</p>
                        <FontAwesomeIcon icon={faCircle} className={`${ selected_options[0].option_name === 'black' ? 'text-black' : `text-${selected_options[0].option_name}-500`} ml-2`} />
                    </div>
                    <div className='flex flex-row mt-2'>
                        <p>Size:</p>
                        <p className='ml-2'>{selected_options[1].option_name}</p>
                    </div>
                </div>
            </div>
            <p className="ml-5">{quantity}</p>
            <p>{price.formatted_with_symbol}</p>
            <div className="flex flex-row ">
                <p>{line_total.formatted_with_symbol}</p>
                <button className="ml-10" onClick={() => handleRemoveItemFromCart(id)}>
                    <FontAwesomeIcon icon={faTimesCircle}  size='lg'/>
                </button>
            </div>
            {/* <div>
                <button onClick={decrementQuantity}>-</button>
                <button onClick={incrementQuantity}>+</button>
            </div>
            <button onClick={removeItem} > &times;</button> */}
        </div>
    )
}

export default function CartPage() {
    const { line_items, subtotal, total_unique_items, total_items, } = useCartState();
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
        
    useEffect(() => {
        forceUpdate();
    }, [line_items])
    

    const isEmpty = line_items.length === 0;

    if (isEmpty) return <p>Your cart is empty</p>

    return(
       (
           <div className="w-screen h-auto overflow-x-hidden mt-5">
                <div className="w-full sm:w-90pw md:w-4/5 xl:w-4/6 h-90vh m-auto ">
                    
                    <div className="w-full  lg:h-90vh relative top-1/2 -translate-y-1/2  flex flex-col lg:flex-row">

                        <div className="mt-60 lg:mt-0 w-full sm:w-90pw m-auto lg:w-3/4 h-full overflow-scroll scroll-smooth shadow-xl border-2 bg-white text-gray-700 border-gray-500">
                            
                            <div className="10ph w-full grid grid-cols-5 p-2 border-b-2 b font-text-1 font-semibold">
                                <p className="col-span-2 ml-3">Product Details</p>
                                <p>Quantity</p>
                                <p>Price</p>
                                <p>Total</p>
                            </div>
                            <div>
                            <div>
                            {line_items.map( item => (
                                <CartItems  key={item.id} {...item}/>
                            ))}
                            </div>

                            </div>
                           
                        </div>

                        <div className="w-2/5 lg:w-1/4 h-1/2 xl:h-3/4 relative top-1/2 -translate-y-1/2 shadow-lg shadow-gray-500  border-2 border-gray-500 bg-white ml-3 font-text-1 ">
                           <div className="h-full w-full flex flex-col justify-between  ">
                            <p className="text-2xl font-semibold py-3 border-b-2 mt-2 text-center ">Order summary</p>

                                <div className="flex flex-col w-full items-center -mt-3">
                                    <p className="text-xl">Total items:</p>
                                    <p className="font-semibold text-lg">{total_items} <FontAwesomeIcon icon={faCubes} className="" /> </p>
                                </div>

                                <div className="flex flex-col w-full items-center -mt-3">
                                    <p className="text-xl">Total unique items:</p>
                                    <p className="font-semibold text-lg tracking-widest">{total_unique_items}<FontAwesomeIcon icon={faCube}   /> </p>
                                </div>

                                <div className="flex flex-col w-full items-center -mt-3">
                                    <p className="text-xl">Total amount:</p>
                                    <p className="font-semibold text-lg">{subtotal.formatted_with_symbol }</p>
                                </div>
                                
                                <button className="py-3 bg-gray-600 text-white" name='checkout'>
                                    Checkout
                                </button>

                           </div>
                            
                        </div>
                    </div>

                </div>
            <footer className='w-full h-25vh bg-gray-800 mt-10' id='footer'>
                <Footer/>
            </footer>
              
           </div>
       )
    )
}