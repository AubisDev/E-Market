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
                    autoplay: true,
                    interval: 3000,
                    pauseOnHover:true,
                    speed: 1000

                } }
            >
                <SplideSlide>
                    <div className='bg-white h-full '>
                        <div className='absolute bg-black/40 h-full w-full'>
                            <div className='text-white w-72 flex flex-col relative top-1/2 -translate-y-1/2 ml-24 '>
                                <p className='text-4xl font-bold text-center'>The best in toys and clothes for your kids</p>
                                <button
                                    className='bg-green-600 hover:bg-green-700 transition duration-200 rounded-lg mt-4 m-auto py-2 font-semibold text-xl w-3/4'
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
                            <div className='text-white w-full flex flex-col relative top-1/2 -translate-y-1/2 ml-60'>
                                <p className='text-4xl  w-1/2 font-bold   text-center m-auto mt-20 '>Dresses, purses, pants and blouses. The best quality for our favorite women</p>
                                <button
                                    className='bg-pink-500 hover:bg-pink-600 transition duration-200 rounded-lg mt-4 m-auto py-2 font-semibold text-xl w-72 '
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
                            <div className='text-white w-72 flex flex-col relative top-1/2 -translate-y-1/2 ml-24 '>
                                <p className='text-4xl font-bold text-center'>Clothes and accesories for men</p>
                                <button
                                    className='bg-blue-700 hover:bg-blue-800 transition duration-200 rounded-lg mt-4 m-auto py-2 font-semibold text-xl w-3/4'
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
                            <div className='text-white h-full w-full flex flex-row relative top-1/2 -translate-y-1/2 ml-32 mt-14'>
                                <p className='text-4xl  w-1/4 font-bold   text-center mt-36   '>Electronics for your home and your favorites brand</p>
                                <button
                                    className='bg-purple-700 hover:bg-purple-800 transition duration-200 rounded-lg mt-4 h-1/6  py-1 font-semibold text-xl w-60  relative top-1/2 -translate-y-1/2'
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
