import React, { useState } from 'react'


const ClothesSizes = ({sizes}) => {

    const [selectedSize, setSelectedSize] = React.useState('S');

    return (
        <for className='grid grid-cols-2 mt-8 m-auto gap-2'>
            {sizes.map( size => (
                <div key={size.id} className='text-black bg-white p-3 rounded-md'>
                    <input 
                        type="radio" 
                        checked={ selectedSize === size.name }
                        onChange={() => setSelectedSize(size.name)}
                        className='w-6' />
                    <label>{size.name}</label>
                </div>
            ))}
        </for>
    )
}

export default ClothesSizes
