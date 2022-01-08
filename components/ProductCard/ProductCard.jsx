import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

const ProductCard = ({item}) => {
    
    const router = useRouter();
    const { image, permalink, name, price } = item;
    
    return (
        <Link
            href={`/products/${permalink}`}
        >
            <a 
                className='w-full h-72 flex flex-col justify-center items-center '
                
            >
            <div className='w-4/5 h-full group animate__animated animate__fadeIn animate__slower'> 
                    <div className='h-3/4 '> <img src={ image.url } alt={ name } className='w-full h-full p-4 rounded-full bg-gray-300 group-hover:scale-105 ease-in-out duration-300 shadow-md hover:shadow-lg'/></div>
                    {/* <div className='w-full bg- h-0.5 mt-2 m-auto'></div> */}
                    <div className='mt-2 bg-white'>
                        <p className='font-semibold text-black/80 tracking-wide text-lg break-normal m-auto text-center w-32'>{name}</p>
                        {/* <p className=' font-semibold text-xl text-blue-900'>{price.formatted_with_symbol}</p> */}
                    </div>
            </div>
            </a>
        </Link>
    )
}

export default ProductCard
