import { useRouter } from 'next/router';
import * as React from 'react';


const Navbar = () => {

  const router = useRouter();
  const container = 'w-full h-full bg-white shadow-md text-blue-800 flex justify-between items-center flex-row ';
  const btnStyles = ' hover:border-b-2 hover:border-blue-800 duration-100 ease-in'
  const loginBtn = 'mr-8 border border-blue-800 py-2 px-4 duration-300 ease-in-out rounded-md hover:bg-blue-800 hover:text-white ';

  return (
    <div className={container}>
        <button 
          className='text-4xl font-semibold ml-4'
          onClick={ () => router.push('/')}
        >
          E-Market
        </button>
        <div className='flex flex-row  text-xl '>
            <button 
              className={btnStyles}
              onClick={ () => router.push('/categories')}
            >
              Categories
            </button>
            <button 
              className={`${btnStyles} mx-10`}
              onClick={ () => router.push('/contact')}
            >
                Contact
            </button>
            <button 
              className={btnStyles}
              onClick={ () => router.push('/cart')}
            >
              Cart
            </button>
        </div>
        <button 
          className={loginBtn}
          onClick={ () => router.push('/login')}
        >
          Login 
        </button>
    </div>
  )
};
export default Navbar;