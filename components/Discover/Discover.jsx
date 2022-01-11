import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
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
        <div className='w-4/5 h-auto m-0 rounded-lg flex flex-col mb-10 animate__animated animate__fadeIn'>
            <div 
                className='p-3 w-full text-2xl text-white font-bold border-b-2 border-blue-600/60 m-0'>
                    <button 
                        className='w-full m-auto font-semibold text-blue-600'
                        onClick={ () => router.push(`/categories/${slug}`)}
                        name={`categorie-${slug}`}
                    >
                    - {name} - 
                    </button>
                </div>
            <div className='w-full h-full  mt-3 flex flex-row m-3'>
                {items.map( (item, index ) => {
                    const lastItems = items.length - 3;
                    if( index > lastItems ){
                        return (
                            <ProductCard key={item.id} item={item}  />
                        )
                    }
                } )}
            </div>            
           
        </div>
    )
}

export default Discover
