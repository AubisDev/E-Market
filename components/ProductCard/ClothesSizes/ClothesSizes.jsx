import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const ClothesSizes = ({sizes, setSizeSelected}) => {

    const [selectedSize, setSelectedSize] = React.useState('');

    const handleSizeSelection = (size, id) => { 
        setSelectedSize(size)
        setSizeSelected( id )
    }
    return (
        <div className='grid grid-cols-2 mt-8 m-auto gap-2'>
            {sizes.map( size => (
                <div key={size.id} className={`text-black bg-white p-3 rounded-md`}>
                    <input 
                        type="radio" 
                        checked={ selectedSize === size.name }
                        onChange={() => handleSizeSelection(size.name, size.id)}
                        className='w-6' />
                    <label className='capitalize'>{size.name} {selectedSize === size.name ? <FontAwesomeIcon icon={faCheckCircle} className=' text-green-500'/> : <FontAwesomeIcon icon={faCheckCircle} className=' text-gray-300'/>}</label>
                    
                </div>
            ))}
        </div>
    )
}

export default ClothesSizes
