import React from 'react'
import CategoryList from '../components/CategoryList';
import ProductList from "../components/ProductList";
import commerce from "../lib/commerce";
import Link from "next/link";
import Navbar from '../components/Navbar';
import { Typography } from '@mui/material';
import { CategoriesLink } from '../styles/MUIstyles';
import SlideShow from '../components/SlideShow';
import Discover from '../components/Discover/Discover';
import Head from 'next/head';

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();


  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}

export default function IndexPage({ merchant, categories, products }) {
 
  // console.log(categories);
  // console.log(products)
  // console.log(merchant)
  return (
    <div className='w-screen h-screen'>

      <header className='w-full h-10hp '>
        <Navbar />          
      </header>
      <section className='w-full  flex justify-center mt-10 '>
        <SlideShow/>
      </section>
      <div className='bg-divider-bg bg-center h-40 w-screen mt-20 shadow-md '> 
      
          <p className='relative top-1/2 transform -translate-y-1/2 w-1/2 m-auto text-3xl'>Check out last update in our stuck</p>
      </div>
      <section className='grid grid-cols-2  gap-4 w-90vw m-auto mt-20 '>
      {categories.map( category => <Discover key={category.id} category={category} /> )}

      </section>
      {/* <h1>{merchant.business_name}</h1>

      <Typography variant='h3'>
        <Link href="/categories">
          <a >Categories</a>
        </Link>
      </Typography>

      <CategoryList categories={categories} />

      <Typography variant='h3' sx={{ display: 'flex' }}>
        <Link href="/products">
          <a >Products</a>
        </Link>
      </Typography>

      <ProductList products={products} /> */}
    </div>
  );
}
