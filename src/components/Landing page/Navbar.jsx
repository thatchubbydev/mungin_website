import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo-white-bg.png'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setnav] = useState(false)
  // reverse polarity of nav
  const handleNav = () =>{
    setnav(!nav)
  }
  return (
    <div className=' flex flex-row justify-between mt-6 py-4'>
      {/* image container */}
      <div>
        <img src={logo} alt='MUNGIN' width={150} height={40} className='ml-2'/>
      </div>
      {/* desktop display */}
      <div className='w-3/5  justify-between md:flex hidden lg:flex '>  
      {/* link container */}
        <div className='flex items-center justify-around space-x-2 w-full flex-row '>
          <p>Process</p>
          <p>Our Mission</p>
          <p>News</p>
          <Link to={'/register'}><button className='text-[#375A1A]'>Join Waiting List</button></Link>
          <Link to={'/database'}><button className=' bg-[#17233C] p-3 text-white px-4 rounded-md'>Check Our Database</button></Link>
        </div>
    </div>
      {/* hamburger menu */}
      <div className='sm:block absolute right-10 md:hidden ' onClick={handleNav}>
        {nav? <AiOutlineClose size={30}/>:
        <AiOutlineMenu size={30}/>}
      </div>
      {/* mobile-menu */}
      <div className={nav?'bg-white top-[90px] flex items-center justify-center flex-col space-y-6 absolute right-0 left-0':'hidden'}>
      <button>Process</button>
        <button>Our Mission</button>
        <button>News</button>
        <button className='text-[#375A1A]'>Join Waiting List</button>
        <button className='bg-[#17233C] p-3 text-white px-4 rounded-md'>Check Our Database</button>

      </div>
      
      
      
    </div>
  )
}

export default Navbar