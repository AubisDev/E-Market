import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { useCartState } from '../context/cart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {

    border: `2px solid ${theme.palette.background.paper}`,
  },
}));


const Navbar = () => {

  const { line_items } = useCartState();


  const router = useRouter();
  const container = 'w-full h-full bg-white shadow-md text-blue-800 flex justify-between items-center flex-row ';
  const btnStyles = ' hover:border-b-2 hover:border-blue-800 duration-100 ease-in'
  const loginBtn = 'mr-8 border border-blue-800 py-2 px-4 duration-300 ease-in-out rounded-md hover:bg-blue-800 hover:text-white ';
  const cartBtn = ' duration-100 ease-in'
  return (
    <div className={container}>
        <Link
          href={'/'}
        >
          <a  className='text-4xl font-semibold ml-4'>E-Store</a>
        </Link>
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
           
        </div>
        <div>
        <button 
                className={cartBtn}
                onClick={ () => router.push('/cart')}
              >
                <IconButton aria-label="cart" sx={{mr: 2}}>
                  <StyledBadge badgeContent={line_items.length} color='secondary'>
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </button>
          <button 
            className={loginBtn}
            onClick={ () => router.push('/login')}
          >
            Login 
          </button>
        </div>
    </div>
  )
};
export default Navbar;