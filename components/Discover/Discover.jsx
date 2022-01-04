import { Router, useRouter } from 'next/router'
import React, { useState } from 'react'
import { useEffect } from 'react'
import commerce from '../../lib/commerce'
import ProductCard from '../ProductCard/ProductCard'

const Discover = ({category}) => {

    const router = useRouter();
    const { name, slug } = category;
    const [items, setItems] = useState([])

    useEffect(() => {

                commerce.products.list({
                category_slug: slug,})
                .then(response =>  setItems( response.data ) );
    }, [slug])


    return (
        <div className='w-4/5 h-auto  rounded-lg flex flex-col mb-10'>
           <div 
                className='p-3 w-full text-2xl text-white font-bold border-b-2 border-white'>
                    <button 
                        className='w-full m-auto font-semibold'
                        onClick={ () => router.push(`/categories/${slug}`)}
                    >
                        {name}
                    </button>
                </div>
           <div className='w-full h-full  mt-3 flex flex-row m-3'>
            {items.map( (item, index ) => index <= 1  &&  <ProductCard key={item.id} item={item} /> )}
           </div>
        </div>
    )
}

export default Discover
