import React from 'react'

function Hero() {
  return (
   <>
     <div className='px-20'>
        <div className='first-container'>
            <div className='flex gap-7 items-center'>
              <p className='text-gray-500 font-poppins text-xl'>EST 2002</p>
              <div className='w-44 h-0.5 bg-gray-500'></div>
            </div>
            <div className='hero-text font-Roboto-txt font-extrabold'>
                <h1 className='text-main-green text-9xl'>SPACE</h1>
                <h1 className='text-9xl'>SHIRT</h1>
            </div>
            <p className='mt-4 font-poppins text-gray-500'>COMFORTABLE PRODUCTS CREATED BY HIGHLY SKILLED <br/>CRAFTMANSHIP IN EACH OF OUR PRODUCTS</p>
            <div className='flex gap-6 mt-6 '>
                <button className='w-40 bg-yellow-400 h-12 rounded-3xl font-Roboto-txt text-sm font-bold'>BEST SELLERS</button>
                <button className='rounded-3xl w-24 font-bold font-Roboto-txt text-sm border-solid border-black border '>SALE</button>
            </div>
        </div>
     </div>
   </>
  )
}

export default Hero
