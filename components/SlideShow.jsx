import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { useRouter } from 'next/router';


const section1 = 'https://www.semana.com/resizer/M0tpNKf-gFipy9KVuOD8slu7eyk=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/NBDBTR5G6ZEINAELZWI3XG2T6Y.jpg';
const section2 = 'https://previews.123rf.com/images/leszekczerwonka/leszekczerwonka1705/leszekczerwonka170500153/78661271-women-s-summer-clothes-on-wooden-table-fashion-background.jpg';
const section3 = 'https://metrosource.com/wp-content/uploads/2019/07/ash_erie-copy-1200x722.jpg';
const section4 = 'https://assets.architecturaldigest.in/photos/60084fc951daf9662c149bb9/16:9/w_2560%2Cc_limit/how-to-clean-gadgets-1366x768.jpg';

const SlideShow = () => {
    
    const router = useRouter();
    
    return (
            <Splide
                options={ {
                    rewind: true,
                    width : 1200,
                    gap   : '1rem',
                    height: 400,
                    autoplay: false,
                    interval: 3000,
                    pauseOnHover:true,
                    speed: 1000

                } }
            >
                <SplideSlide>
                    <div className='bg-white h-full '>
                        <div className='absolute bg-black/60 md:bg-black/40 h-full w-full'>
                            <div className='text-white w-52 md:w-72 flex flex-col relative top-1/2 -translate-y-1/2  ml-10 sm:ml-24 '>
                                <p className='text-3xl w-full md:w-auto md:text-4xl font-bold text-center'>The best in toys and clothes for your kids</p>
                                <button
                                    className='bg-green-600 hover:bg-green-700 transition duration-200 rounded-lg mt-4 m-auto py-2 px-2  font-semibold text-xl w-3/4'
                                    onClick={ () => router.push('/categories/kids')}
                                >
                                    Go to section
                                </button>
                            </div>
                        </div>
                        <img src={section1} alt="kid-section store " className='object-cover h-full w-full'/>
                    </div>
                   
                </SplideSlide>
               
                <SplideSlide>
                    <div className='bg-white h-full '>
                        <div className='absolute bg-black/50 h-full w-full'>
                            <div className='text-white w-80 lg:w-2/5 h-full flex flex-col m-auto sm:m-0 relative top-1/2 left-1/5 sm:left-1/2 '>               
                                <p className='text-3xl lg:text-4xl  font-bold w-full text-center '>Dresses, blouses, pants, and more for our favorite women</p>
                                <button
                                    className='bg-pink-500 hover:bg-pink-600 font-semibold transition duration-200 rounded-lg w-1/2 py-2 px-4 mt-2 m-auto'
                                    onClick={ () => router.push('/categories/men')}
                                >
                                    Check it out! 
                                </button>
                            </div>
                        </div>
                        <img src={section2} alt="kid-section store " className='object-cover object-center h-full w-full '/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='bg-white h-full '>
                        <div className='absolute bg-black/40 h-full w-full'>
                            <div className='text-white w-72 sm:w-96 flex flex-col relative top-1/2 -translate-y-1/2 justify-center items-center '>
                                <p className='text-3xl w-3/4  md:text-4xl font-bold text-center'>Clothes and accesories for men</p>
                                <button
                                    className='bg-blue-700 hover:bg-blue-800 transition duration-200 rounded-lg mt-4 w-3/4 sm:m-auto py-2 px-4 font-semibold text-xl'
                                    onClick={ () => router.push('/categories/women')}
                                >
                                    Go to section
                                </button>
                            </div>
                        </div>
                        <img src={section3} alt="kid-section store " className='object-cover object-top h-full w-full '/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className=' h-full '>
                        <div className='absolute bg-black/50 h-full w-full'>
                            <div className='text-white flex flex-col w-3/5  sm:w-2/5 relative top-1/2 left-1/4  sm:-ml-12 justify-center items-center -mt-12  sm:mt-0'>
                                <p className='text-2xl  md:text-3xl w-full sm:w-4/5 md:w-3/5 text-center font-bold '>Electronics for your home and your favorites brands</p>
                                <button
                                    className='bg-purple-700 hover:bg-purple-800 transition duration-200 font-semibold rounded-md mt-2 py-2 px-4 w-full sm:w-3/4 md:w-2/4 '
                                    onClick={ () => router.push('/categories/electronics')}
                                >
                                    Check it out! 
                                </button>
                            </div>
                        </div>
                        <img src={section4} alt="kid-section store " className='object-cover object-center h-full w-full '/>
                    </div>
                </SplideSlide>
            </Splide>
    )
}

export default SlideShow
