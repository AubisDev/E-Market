import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { useCartState } from '../context/cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useCartDispatch } from '../context/cart';
import ResponsiveMenu from './ResponsiveMenu/ResponsiveMenu';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {

    border: `2px solid ${theme.palette.background.paper}`,
  },
}));


const Navbar = () => {


  const { line_items } = useCartState();


  const router = useRouter();
  const container = 'w-full h-10vh sticky top-0 z-20 bg-blue-600 shadow-md text-white flex justify-between items-center flex-row ';
  const btnStyles = ' hover:border-b-2 hover:border-white duration-100 ease-in'
  const loginBtn = 'mr-8 border border-white py-2 px-4 duration-300 text-white  ease-in-out rounded-md hover:bg-white hover:text-blue-800 ';
  const cartBtn = ' duration-100 ease-in'
  return (
    <div className={container}>
      
        <Link
          href={'/'}
        >
          <a  className='text-4xl font-semibold ml-4'>E-Store</a>
        </Link>

        {/* Reponsive Menu */}
        <div className=' md:hidden'>
        <ResponsiveMenu />
        </div>
       

        {/* Navbar for more than 768px width */}
        <div className='md:flex flex-row  text-xl hidden'>
            <button 
              className={btnStyles}
              onClick={ () => router.push('/categories')}
              name='categories'
            >
              Categories
            </button>
            <button 
              className={`${btnStyles} mx-10`}
              onClick={ () => document.querySelector('#footer').scrollIntoView({ behavior: 'smooth' })}
              name='contact'
            >
                Contact
            </button>
        </div>
        <div className='md:flex flex-row  hidden'>
          <button 
            className={cartBtn}
            onClick={ () => router.push('/cart')}
            name='cart'
          >
            <IconButton aria-label="cart" sx={{mr: 2}}>
              <StyledBadge badgeContent={line_items.length} color='secondary' sx={{ color: 'white'}}>
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </button>
          <button 
            className={loginBtn}
            onClick={ () => router.push('/login')}
            name='login'
          >
            Login 
          </button>
        </div>
    </div>
  )
};
export default Navbar;