import { PriceChange } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'


const InventoryCard = ({ product }) => {

    const { permalink } = product;
    return (
        <Link 
            href={`/products/${permalink}`}
        >
            <a className='bg-gray-300 border-2 rounded-md h-72  w-60 hover:shadow-md hover:brightness-110  duration-300 ease-in'>
                <div className='min-h-14 min-w-14 max-h-14 max-w-14 hover:brightness-100'>
                        <img src={ product.image.url } alt={ product.name } className='w-full h-full object-cover p-4  bg-gray-300 group-hover:scale-105 ease-in-out duration-300 shadow-md hover:shadow-lg'/> 
                </div>
                
            <div className=' h-1/5 w-full flex flex-col justify-center items-center'>
                <p className='font-semibold text-blue-700'>{product.name}</p>
                <p className='font-semibold text-gray-600'>{product.price.formatted_with_symbol}</p>
            </div>
            </a>
           
        </Link>
    )
}

export default InventoryCard
