import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='w-3/4 h-full m-auto text-white flex flex-row '>

            <div className='flex flex-row items-center border-r-2 pr-1 w-3/5 h-full justify-center '>
                <p className=' p-4 text-semibold text-xl'>Contact us</p>
               <div className='flex flex-col'>
                <div className='flex flex-row py-3 items-center'>
                    <FontAwesomeIcon icon={faPhone} />
                    <p className='mx-2'>Phone:</p>
                    <p>+99 12345678</p>
                </div>
                <div className='flex flex-row py-3 items-center'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p className='mx-2'>Email</p>
                    <p>E-Store@gmail.com</p>
                </div>
                <div className='flex flex-row py-3 items-center'>
                    <FontAwesomeIcon icon={faBuilding} />
                    <p className='mx-2'> Our Office:</p>
                    <p>New York Building floor 32, office 3. Los Angeles</p>
                    </div>
               </div>
            </div>
            <div className='w-2/5 h-full flex flex-col justify-center items-center' >
                <p className='flex justify-center items-center'>Follow us in our social media</p>
                <div className='flex flex-row  mt-4 justify-center items-center'>
                    <button name='facebook' ><FontAwesomeIcon icon={faFacebook} size='3x' className='rounded-full hover:shadow-md hover:shadow-white hover:scale-110 duration-200'/></button>
                    <button name='twitter'> <FontAwesomeIcon icon={faTwitter} size='3x' className='mx-5 rounded-full hover:shadow-md hover:shadow-white hover:scale-110 duration-200' /></button>
                    <button name='instagram' ><FontAwesomeIcon icon={faInstagram} size='3x' className='rounded-full hover:shadow-md hover:shadow-white hover:scale-110 duration-200' /></button>
                </div>
                
            </div>
            
        </div>
        </div>
    )
}

export default Footer
