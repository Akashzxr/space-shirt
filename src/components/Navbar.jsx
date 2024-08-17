import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between p-5 w-full sm:p-14 sm:px-20'>

        <ul className='sm:flex sm:gap-14 font-poppins hidden'>
            <li>MAN</li>
            <li>WOMEN</li>
            <li>CREATE OUTFIT</li>
        </ul>
        <FontAwesomeIcon icon={faBars} className=' sm:hidden'/>
        <h2 className='font-work-sans font-bold text-main-green sm:text-2xl sm:absolute sm:left-1/2'>SPACE<span style={{textShadow:" 1px 1px 4px black"}} className='text-white'> SHIRT</span></h2>

        <div className='rounded-full w-10 h-10 flex items-center justify-center bg-yellow-600 sm:w-14 sm:h-14'>
          <FontAwesomeIcon icon={faShoppingCart}/>
        </div>
      
    </div>
  )
}
