import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {IoChevronBackSharp} from 'react-icons/io5'
import logo from '../../assets/logo-white-bg.png'
import profile from '../../assets/profile.png'
import { Link } from 'react-router-dom'
const Database = () => {
  return (
    // parent container
    <div className=' flex'>
        {/*left container*/}
        <div className='mr-24 ml-12'>
            <img src={logo} alt='mungin logo' width={200} className='mt-12'/>
        </div>
        {/* right container */}
        <div className='  w-full pl-8 pr-8 '>
            {/* nav container */}
            <div className='pt-[60px] flex justify-between mb-8'>
                {/* home container */}
                <Link to={'/'}>
                    <div className='flex'>
                        <IoChevronBackSharp size={25}/>
                        <p className=''>Back to home</p>
                    </div>
                </Link>    
                {/* profile */}
                <div className='flex '>
                    <img src={profile} alt='profile'/>
                    <RiArrowDropDownLine size={25}/>
                </div>   
            </div>
            {/* search container */}
            <div className='flex justify-between mb-10'>
                {/* number container */}
                <div className='flex text-[#313131] bg-white '>
                    <p className='border p-2'>Show</p>
                    {/* show 10 container */}
                    <div className='flex border p-2'>
                        <p className=''>10</p>
                        <RiArrowDropDownLine size={25}/>
                    </div>
                </div>
                {/* searchbar container */}
                <div className='flex border px-4'>
                    <input type='text' className='pr-8' placeholder='Search Crop, State...'/>
                    <div className='pt-3'>
                        <BiSearch size={25}/>
                    </div>
                    
                </div>
            </div>
            {/* 10 search results */}
            <div className='flex border-b-2'>
                <p className='mr-2'><span className='font-bold'>10 </span>Search results</p>
                <RiArrowDropDownLine size={25}/>
            </div>

            
            
        </div>
    </div>
  )
}

export default Database