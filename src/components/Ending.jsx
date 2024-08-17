import React from 'react'

export default function Ending() {
  return (
    <div className='flex justify-between  flex-col sm:mt-52 sm:flex-row sm:h-big'>
      <div className='w-80 overflow-hidden'>
        <img className='h-80 relative right-40' src="/moon-background.png" alt="" />
      </div>

      <div className='flex flex-col items-center gap-8'>
        <div>
        <h2 className='font-work-sans font-bold text-xl text-main-green'>SPACE<span style={{textShadow:" 1px 1px 4px black"}} className='text-white'> SHIRT</span></h2>
        </div>
        <div className='font-Cannon text-center text-5xl font-extrabold text-gray-900 leading-tight'>GET YOUR <br/> FAVOURITE WEAR <br/> AND SHARE <br/> WITH US</div>
        <div className='text-center font-Cannon text-t-70 text-gray-600 sm:text-sm'>COMFORTABLE PRODUCTS CREATED BY HIGHLY SKILLED <br/>CRAFTMANSHIP IN EACH OF OUR PRODUCTS </div>
        <div>
          <button className='font-Cannon bg-yellow-600 w-56 rounded-3xl h-14 font-extrabold text-gray-900'>FOLLOW FOR MORE</button>
        </div>
      </div>

      <div className='w-64 overflow-hidden self-end'>
      <img className='h-64 relative left-28' src="/moon-background.png" alt="" />
      </div>
    </div>
  )
}
