import React from 'react'
import {BsArrowRightShort} from 'react-icons/bs'
import logo from '../../assets/logo-footer.png'

const Footer = () => {
  return (
    // parent container
    <div className='bg-[#333333] w-full text-[#FFFFFF] '>
      {/* content container */}
      <div className='pt-10 space-y-8 flex md:flex-row sm:items-center sm:flex-col md:justify-between mx-auto container'>
        {/* quick access */}
      <div className=' w-1/3'>
        <img src={logo} className='mb-6' alt='mungin'/>
        <h2 className='mb-4 text-xl font-semibold'>Quick Access</h2>
        <p className='mb-4 font-light'>We are one of the leading companies that has made automation 
          of We are one of the leading companies</p>
        <p className='text-sm'>© 2021 Mungin. All rights reserved</p>
      </div>
      {/* about us */}
      <div className='w-1/3 flex sm:justify-start flex-col '>
        <p className='text-left md:text-center font-light text-2xl'>About us</p>
        <button className='sm:text-left pt:6 md:text-center my-2 font-light'>Our Mission</button>
        <button className='sm:text-left md:text-center my-2 font-light'>News & Articles</button>
        <button className='sm:text-left md:text-center my-2 font-light'>Working process</button>
      </div>
      {/* input form */}
      <div className='w-1/3 flex flex-col'>
        <h2 className='font-bold pb-3'>News Letter</h2>
        <div className='flex '>
          <input className='rounded-l-sm pl-2 pr-10 py-2' type='email' placeholder='Email Address'/>
          <button className='bg-[#83BF4F] rounded-r-sm outline-[#83BF4F] text-white'><BsArrowRightShort size={35}/></button>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Footer