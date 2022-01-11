import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import InventoryCard from '../components/InventoryCard/InventoryCard';
import commerce from '../lib/commerce';
import CircularProgress from '@mui/material/CircularProgress';


export async function getStaticProps() {
    const { data: products } = await commerce.products.list();
    const { data: categories } = await commerce.categories.list();

    return {
      props: {
        products,
        categories
      },
    };
  }

const Inventory = ( {products, categories} ) => {

    const [searchValue, setSearchValue] = useState('')
    const [filteredProducts, setFilteredProducts] = useState(products)
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        if( isLoading ){
            setTimeout(() => {
                setFilteredProducts(products.filter( product => product.name.toLowerCase().includes(searchValue.toLowerCase())));        
                setIsLoading(false)
            }, 500);
        }
            

    }, [setFilteredProducts,searchValue])

    // console.log(categories)

    const handleCheckbox = ( e ) => {
        console.log( e.target.name, e.target.checked)
    }

    console.log(searchValue)

    
    return (
        <div className='h-auto w-screen flex flex-row animate__animated animate__fadeInTop'>
            <aside className='w-1/5  h-full bg-gray-200'>
                <div className='flex flex-col justify-center items-center py-3'>
                    <label className='font-semibold text-lg'>Find Articles</label>
                    <input 
                        name='finder'
                        value={searchValue}
                        onChange={ (e ) =>  setSearchValue( e.target.value )}
                        placeholder='Brand or product name'
                        className='py-4 px-2 border-2 border-slate-400 rounded-md mt-2'
                    />
                </div>
                {/* <div className='h-2 w-4/5 bg-gray-400 '></div> */}
                <p className='ml-3 text-lg font-semibold py-2'>Filter by: </p>
                <div className='w-4/5 m-auto'>
                    <div className='flex flex-col'>
                    {categories.map( category => (
                        <sdiv className='flex flex-col  ml-3' key={category.id}>
                            <div className='flex flex-row'>
                                <input 
                                    type='checkbox'
                                    name={category.name}
                                    onChange={(e) => handleCheckbox(e)}
                                    
                                />
                            
                                <label className='pl-2'>{category.name}</label>
                            </div>
                            
                             <div className='flex flex-col ml-6 pb-5'>
                                {category.children.map( child => (
                                    <div key={child.id} className='flex flex-row items-center'>
                                        <input 
                                            type='checkbox'
                                            name={child.name}
                                            
                                        />
                                        <label className='pl-2'>{child.name}</label>              
                                    </div>
                                ) )}
                             </div>
                        </sdiv>

                        ) )}
                    </div>
                </div>
            </aside>
            <div className='h-screen w-4/5'>
                <div className={`h-full w-4/5  m-auto ${!isLoading ? 'grid grid-cols-4 gap-4' : ''} mt-2 bg-white `}>
                   {isLoading ? (
                       <div className='w-full h-full flex justify-center items-center '>
                           <CircularProgress size='4rem' />
                       </div>
                    ):
                        filteredProducts.map( product => <InventoryCard key={product.id} product={product} isLoading={isLoading} setIsLoading={setIsLoading} /> )
                   } 
                </div>

            </div>
            
           
        </div>
    )
}

export default Inventory
