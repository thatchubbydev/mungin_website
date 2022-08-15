import React from 'react'
import { Link } from 'react-router-dom'
import {RiArrowDropDownLine} from 'react-icons/ri'
import profile from '../../assets/profile.png'
import {IoChevronBackSharp} from 'react-icons/io5'
const Navbar = () => {
  return (
    
    <div className='mx-10 flex justify-between mb-10'>
    {/* back to home */}
    <Link to={'/'}>
        <div className='flex'>
            <IoChevronBackSharp size={25}/>
            <p className='text-[#5A5A5A] text-md'>Back to home</p>
        </div>
    </Link>
    
    
    {/* icon container */}
    <div className='flex'>
        <img src={profile} alt='Icon'/>
        <RiArrowDropDownLine size={25}/>
    </div>
</div>
  )
}

export default Navbar