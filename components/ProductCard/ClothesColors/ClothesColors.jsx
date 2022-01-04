import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const ClothesColors = ({colors}) => {
    console.log(colors)


    return (
        <div className='flex flex-row'>
            {colors.map( color => (
                    <div key={color.id} className='w-20 h-8 bg-white text-black mr-2 text-xl flex flex-row rounded-lg'>
                        <span className={`text-${color.name}-300`}><FontAwesomeIcon icon={faCircle} /></span>
                        <p className='capitalize'> {color.name}</p>
                    </div>
                )
             )}
        </div>
    )
}

export default ClothesColors
