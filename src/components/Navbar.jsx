import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between w-full p-14 px-20'>
        <ul className='flex gap-14 font-poppins'>
            <li>MAN</li>
            <li>WOMEN</li>
            <li>CREATE OUTFIT</li>
        </ul>

        <h2 className='absolute left-1/2 font-work-sans font-bold text-2xl text-main-green'>SPACE<span style={{textShadow:" 1px 1px 4px black"}} className='text-white'> SHIRT</span></h2>

        <div className='rounded-full w-14 h-14 flex items-center justify-center bg-yellow-400'>
          <FontAwesomeIcon icon={faShoppingCart}/>
        </div>
      
    </div>
  )
}
