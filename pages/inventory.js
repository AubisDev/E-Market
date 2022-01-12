import { faArrowCircleRight, faArrowCircleLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import InventoryCard from '../components/InventoryCard/InventoryCard';
import commerce from '../lib/commerce';
import CircularProgress from '@mui/material/CircularProgress';


export async function getStaticProps() {
    const { data: products } = await commerce.products.list({ limit: 40});
    const { data: categories } = await commerce.categories.list();

    return {
      props: {
        products,
        categories
      },
    };
  }

const Inventory = ( {products, categories} ) => {

    const initialMin = 0;
    const initialMax = 11;
    const [searchValue, setSearchValue] = useState('')
    const [filteredProducts, setFilteredProducts] = useState(products)
    const [isLoading, setIsLoading] = useState(false);
    const [resetCheckboxes, setResetCheckboxes] = useState(false)
    const [page, setPage] = useState(1);
    const [minIndex, setMinIndex] = useState(initialMin);
    const [maxIndex, setMaxIndex] = useState(initialMax);
    const [maxPage, setMaxPage] = useState();
    

    console.log(Math.ceil(filteredProducts.length / 12), page, maxPage,)

    useEffect(() => {
        // setIsLoading(true)
        // if( isLoading ){
        //     setTimeout(() => {
                setFilteredProducts(products.filter( product => product.name.toLowerCase().includes(searchValue.toLowerCase())));        
                // setIsLoading(false)
          //  }, 500);
        //}
        setMaxPage( Math.ceil(filteredProducts.length / 12))
    }, [setFilteredProducts,searchValue, ])


    const handleCategory = async( e ) => {
        const {data: newProducts} = await commerce.products.list({ category_slug: e.target.name.toLowerCase() })
        
        if( e.target.checked ){
            const fid = filteredProducts.map( fp => fp.id );
            newProducts.map( newProduct =>  !fid.includes(newProduct.id) && setFilteredProducts( prevState => [ ...prevState, newProduct ] )  )
            setMaxPage( Math.ceil(filteredProducts.length / 12))
            return
        }
        const npid = newProducts.map( np => np.id );
        setFilteredProducts( filteredProducts.filter( fp => !npid.includes(fp.id) )  )
        setMaxPage( Math.ceil(filteredProducts.length / 12))

    }


    const handleSubcategory = async( e, slug, variant ) => {
        
        const {data: newSubProducts} = await commerce.products.list({ category_slug: slug })
        const addProducts = newSubProducts.filter( np => np.categories[1].name === variant );
        if( e.target.checked ){
             const fid = filteredProducts.map( fp => fp.id );
             addProducts.map( ap =>  !fid.includes(ap.id) && setFilteredProducts( prevState => [ ...prevState, ap ] )  ) 
             setMaxPage( Math.ceil(filteredProducts.length / 12))
             return
        }
         const npid = addProducts.map( np => np.id );
         setFilteredProducts( filteredProducts.filter( fp => !npid.includes(fp.id) )  )
         setMaxPage( Math.ceil(filteredProducts.length / 12))

    }

    const handleSearchInput = (e) => {
        setPage(1);
        setMaxPage( Math.ceil(filteredProducts.length / 12))
        setMinIndex(initialMin)
        setMaxIndex(initialMax)
        setResetCheckboxes(true);
        setSearchValue(e.target.value)
        setResetCheckboxes(false)
        
    }

    const handleNextPage = () => {
        setMinIndex( minIndex + 12 )
        setMaxIndex( maxIndex + 12 )
        setPage( page + 1 )
    }

    const handlePrevPage = () => {
        setMinIndex( minIndex - 12 )
        setMaxIndex( maxIndex - 12 )
        setPage( page - 1 )
    }

    
    return (
        <div className='h-auto w-screen flex flex-row animate__animated animate__fadeInTop'>
            <aside className='w-1/5  h-full bg-gray-300/80 font-text-1 text-blue-800 text-lg'>
                <div className='flex flex-col justify-center items-center py-3'>
                    <label className='font-semibold text-lg'>Find Articles</label>
                    <input 
                        name='finder'
                        value={searchValue}
                        autoComplete='off'
                        onChange={ (e ) =>  handleSearchInput( e )}
                        placeholder='Brand or product name'
                        className='py-4 px-2 border-2 border-slate-400 rounded-md mt-2 focus:ring-violet-300'
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
                                    onChange={(e) => handleCategory(e)}
                                
                                    
                                />
                            
                                <label className='pl-2'>{category.name}</label>
                            </div>
                            
                             <div className='flex flex-col ml-6 pb-5'>
                                {category.children.map( child => (
                                    <div key={child.id} className='flex flex-row items-center'>
                                        <input 
                                            type='checkbox'
                                            name={child.name}
                                            onChange={(e) => handleSubcategory(e, category.name, child.name)}
                                            
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
            <div className='h-screen w-4/5 flex flex-col'>
                <div className={`h-full w-4/5  m-auto ${!isLoading ? 'grid grid-cols-4 gap-4' : ''} mt-2 bg-white `}>
                   {/* {isLoading ? (
                       <div className='w-full h-full flex justify-center items-center '>
                           <CircularProgress size='4rem' />
                       </div>
                    ): */}
                        {filteredProducts.map( (product,index )=> (index >= minIndex && index<= maxIndex ) && <InventoryCard key={product.id} product={product} isLoading={isLoading} setIsLoading={setIsLoading} /> )}
                   {/* }  */}
                <div className='w-full h-12 k col-span-full '>
                    <div className='w-full flex justify-center items-center '>
                        {page !== 1 && (
                            <button 
                                className='h-full'
                                onClick={handlePrevPage}
                            >
                                <span className='flex flex-row items-center mr-2 font-semibold text-gray-700'><FontAwesomeIcon icon={faArrowCircleLeft} size='2x' className='text-blue-600 mr-1' /> Prev Page</span>
                            </button>
                        ) }
                        { page !== maxPage  && (
                            <button 
                                className='h-full'
                                onClick={handleNextPage}
                                >
                                <span className='flex flex-row items-center ml-2 font-semibold text-gray-700'>Next Page<FontAwesomeIcon icon={faArrowCircleRight}  size='2x' className='text-blue-600 ml-1' /></span>
                            </button>
                        )  }
                    </div>
                </div>
                
                </div>
               
            </div>
         
            
            
           
        </div>
    )
}

export default Inventory
