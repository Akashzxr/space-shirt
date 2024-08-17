import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-gray-800 h-64 w-full mt-40 flex items-center justify-around flex-col sm:flex-row'>
      <div><h2 className='font-work-sans font-bold text-xl text-main-green'>SPACE<span style={{textShadow:" 1px 1px 4px black"}} className='text-white'> SHIRT</span></h2></div>
     
      <div className='flex text-white font-Cannon font-extralight gap-2 text-center text-sm flex-col sm:flex-row sm:text-lg sm:gap-20'>
        <div>HOME</div>
        <div>PRODUCT</div>
        <div>CONTACT</div>
        <div>HELP</div>
      </div>

      <div className='flex gap-11 items-center'> 
        <h3 className='font-Cannon text-white hidden sm:block'>FOLLOW US</h3>
        <div className='flex gap-24 sm:gap-5'>
            <div className='w-8 h-8 rounded-full bg-white flex items-center justify-center'><FontAwesomeIcon icon={faFacebook}/></div>
            <div className='w-8 h-8 rounded-full bg-white flex items-center justify-center'><FontAwesomeIcon icon={faInstagram}/></div>
            <div className='w-8 h-8 rounded-full bg-white flex items-center justify-center'><FontAwesomeIcon icon={faTwitter}/></div>
        </div>
      </div>
    </div>
  )
}
