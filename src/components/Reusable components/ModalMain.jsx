import React from 'react'
import { useState } from 'react'
import ModalSub from './ModalSub'
import {IoChevronBackSharp} from 'react-icons/io5'
import { Link } from 'react-router-dom'

const ModalMain = ({closeModal}) => {
    const [ModalMain, setModalMain] = useState(false)

    
  return (
   <div className='fixed bg-opacity-50 bg-[#C8C8C8] flex justify-center pt-32 h-full w-full'>
        {ModalMain && <ModalSub closeSubModal={closeModal}/>}
        {/* receive props called closeModal from cropprofile component
            create new state called ModalMain that will display ModalSub component
            pass closeModal props as closeSubModal from cropprofile into ModalSub */}

            
    {/* card container */}
    <div className={ModalMain && `hidden`}>
        {/* To hide ModalMain card when displaying SubModal; 
            when ModalMain state is true, you'll set classname of card component to hidden */}
        <div className='w-[500px] h-[500px] bg-white rounded-xl pb-12 p-6'>
        {/* back to crop profile button */}
        <button onClick={()=> closeModal(false)}>
            {/* back button was implemented by setting closeModal prop to false
                closeModal is responsible for creating the ModalMain component */}
            <div className='flex'>
                    <div className='mr-1'>
                        <IoChevronBackSharp size={15}/> 
                    </div>
                    <p className='text-[#5A5A5A] text-xs'>Back to Database</p>
                </div>
        </button>
         {/* form cotainer */}
        <div className='m-2 flex flex-col space-y-3 mt-2'>
            {/* analyze crop yield */}
            <div className='text-left w-full space-y-2 border-b'>
                <p className='text-[#313131] text-md font-semibold'>Analyze crop yield</p>
                <p className='pb-6 text-[#5A5A5A] text-sm'>Input your crop information in the fields provided below to calculate a
                    possible yield
                </p>
            </div>
            {/* input button container */}
            <div className='space-y-6'>
                {/* Crop Name container */}
                <div>
                    <p className='text-[#313131] text-sm'>Crop Name</p>
                    <input className='border w-full text-[#5A5A5A] py-3 text-xs pl-4 rounded-md' placeholder='Maize' type='text'/>
                </div>
                {/* soil texture container */}
                <div>
                    <p className='text-[#313131] text-sm'>Soil Texture</p>
                    <input className='border w-full text-[#5A5A5A] py-3 text-xs pl-4 rounded-md' placeholder='Sandy Soil' type='text'/>
                </div>
                {/* Rainfall container */}
                <div>
                    <p className='text-[#313131] text-sm'>Rainfall</p>
                    <input className='border w-full text-[#5A5A5A] py-3 text-xs pl-4 rounded-md' placeholder='300 mm/annum' type='text'/>
                </div>

                    {/* button container */}
                <div className=''>
                    <button onClick={()=> setModalMain(true)} className='bg-[#17233C] w-full flex justify-center text-center text-white py-3 px-4 rounded-sm'>Analyze Crop Yield</button>
                </div>
            </div>
            

        </div>

        
        
        
    </div></div>
    
    
    
   
   </div>
        
  )
}

export default ModalMain