import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'


const ClothesColors = ({colors}) => {
    const [selectedColor, setSelectedColor] = useState('');
    
    const btnStyles = 'flex flex-row  items-center p-1  w-full border-2 border-gray-400 rounded-lg  duration-200 shadow-md z-50'
  return (
    <div className='bg-white grid grid-cols-2 gap-2 mt-8 p-3 w-3/5 rounded-lg m-auto'>
        {colors.map( color => {
            const actColor = color.name;
            return (
                <button 
                    key={color.id} 
                    className={`!text-${color.name}-500 ${btnStyles} ${selectedColor === color.name && 'border-blue-500'}`}
                    name={color.name}
                    onClick={() => setSelectedColor(color.name)}
                >
                    <FontAwesomeIcon icon={faCircle}  size='2x' className={`${actColor === 'black' && 'text-black'} ml-3 `} />
                    <p className='capitalize px-2 text-black' >{color.name}</p> 
                </button>
            )
        } )}
    </div>
  );
}

export default ClothesColors
