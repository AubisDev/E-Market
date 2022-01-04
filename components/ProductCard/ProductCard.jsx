import { useRouter } from 'next/router';
import React from 'react'



const ProductCard = ({item}) => {
    
    const router = useRouter();
    const { image, permalink, name, price } = item;
    
    return (
        <button 
            className='w-full h-72 flex flex-col justify-center items-center '
            onClick={ () => router.push(`/products/${permalink}`) }
        >
           <div className='w-4/5 h-full bg-white hover:shadow-lg hover:scale-105 ease-in-out duration-300 rounded-sm'> 
                <div className='h-3/4 '> <img src={ image.url } alt={ name } className='w-full h-full p-4'/></div>
                <div className='w-full bg-gray-400/50 h-0.5 mt-2 m-auto'></div>
                <div className=''>
                    <p className='font-semibold text-black/70 tracking-wide'>{name}</p>
                    <p className=' font-semibold text-xl text-blue-900'>{price.formatted_with_symbol}</p>
                </div>
           </div>
        </button>
    )
}

export default ProductCard
