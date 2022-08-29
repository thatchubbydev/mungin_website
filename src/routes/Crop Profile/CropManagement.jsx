import React from 'react'
import mungin from '../../assets/logo-white-bg.png'
import crop_p from '../../assets/vector/crop_p.png'
import cultivar from '../../assets/vector/cultivar.png'
import variety from '../../assets/vector/variety.png'
import description from '../../assets/vector/description.png'
import crop_v from '../../assets/vector/crop_v.png'
import production_f from '../../assets/vector/production_f.png'
import plant_a from '../../assets/vector/plant_a.png'
import morphology from '../../assets/vector/morphology.png'
import post_h from '../../assets/vector/post_h.png'
import climatic_r from '../../assets/vector/climatic_r.png'
import soil_r from '../../assets/vector/soil_r.png'
import nutrient_r from '../../assets/vector/nutrient_r.png'
import crop_m from '../../assets/green_vector/crop_m.png'
import plant_o from '../../assets/vector/plant_o.png'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Reusable components/Navbar'
import circle from '../../assets/tick-circle.png'
import mildew from '../../assets/crop_mgt/mildew.png'
import blight from '../../assets/crop_mgt/blight.png'
import rust from '../../assets/crop_mgt/rust.png'

const CropManagement = () => {
  return (
    // parent container
    <div className='flex'>
        {/* left container */}
        <div className='pt-6 w-1/4 shadow-3xl'>
            {/* image container */}
            <div className='mb-2'>
                <img src={mungin} className='pl-6' width={200} alt='mungin'/>
            </div>
            {/* crop-profile */}
            <Link to={'/crop_p'}>
                <div className='flex pl-6 py-6 space-x-4 mt-6 '>
                    <img src={crop_p} alt='crop profile'/>
                    <p className=' text-[#565656] font-bold'>Crop Profile</p>
                </div>
            </Link>
            
            {/* cultivar */}
            <Link to={'/cultivar'}>
                <div className='flex pl-6 py-4 space-x-4 mt-6'>
                    <img src={cultivar} alt='crop profile'/>
                    <p className='text-[#565656] font-bold'>Cultivar</p>
                </div>
            </Link>
            {/* variety */}
            <Link to={'/variety'}>
                <div className='flex pl-6 py-4 space-x-4 mt-6 '>
                    <img src={variety} alt='crop profile'/>
                    <p className=' text-[#565656]  font-bold'>Variety</p>
                </div>
            </Link>
            
            {/* description */}
            <Link to={'/description'}>
                <div className='flex pl-6 py-4 space-x-4 mt-6 '>
                    <img src={description} alt='crop profile'/>
                    <p className=' text-[#565656] font-bold'>Description</p>
                </div>
            </Link>
            
            {/* crop_v */}
            <Link to={'/crop_v'}>
                <div className='flex pl-6 py-4 space-x-4 mt-6 '>
                    <img src={crop_v} alt='crop profile'/>
                    <p className='text-[#565656] font-bold'>Crop Value</p>
                </div>
            </Link>
            
            {/* production_f */}
            <Link to={'/production_f'}>
                <div className='flex pl-6 py-4 space-x-4 mt-6 '>
                    <img src={production_f} alt='crop profile'/>
                    <p className='text-[#565656] font-bold'>Production Facts</p>
                </div>
            </Link>
            
            {/* plant_a */}
            <Link to={'/plant_a'}>
                <div className='flex pl-6 py-4 space-x-4 mt-6 '>
                    <img src={plant_a} alt='crop profile'/>
                    <p className=' text-[#565656] font-bold'>Plant Anatomy</p>
                </div>
            </Link>
            
            {/* morphology */}
            <Link to={'/morphology'}>
                <div className='flex pl-6 py-4 space-x-4 mt-6 '>
                    <img src={morphology} alt='crop profile'/>
                    <p className=' text-[#565656] font-bold'>Morphology</p>
                </div>
            </Link>
            
            {/* post_h */}
            <Link to={'/post_h'}>
                <div className='flex pl-6 py-4 space-x-4 mt-6 '>
                    <img src={post_h} alt='crop profile'/>
                    <p className='text-[#565656] font-bold'>Post-Harvest Operations</p>
                </div>
            </Link>
            
            {/* climatic_r */}
            <Link to={'/climatic_r'}>
                <div className='flex pl-6 py-4 space-x-4 mt-6 '>
                    <img src={climatic_r} alt='crop profile'/>
                    <p className='text-[#565656] font-bold'>Climatic Requirements</p>
                </div>
            </Link>
            
            {/* soil_r */}
            <Link to={'/soil_r'}>
                <div className='flex pl-6 py-4 space-x-4 mt-6  '>
                    <img src={soil_r} alt='crop profile'/>
                    <p className='text-[#565656] font-bold'>Soil Requirements</p>
                </div>
            </Link>
            
            {/* nutrient_r */}
            <Link to={'/nutrient_r'}>
                <div className='flex pl-6 py-4 space-x-4 mt-6 '>
                    <img src={nutrient_r} alt='crop profile'/>
                    <p className='text-[#565656]  font-bold'>Nutrient Requirements</p>
                </div>
            </Link>
            
            {/* crop_m */}
            <Link to={'/crop_m'}>
                <div className='flex pl-6 py-4 space-x-4 mt-6 bg-[#F4F4F4]'>
                    <img src={crop_m} alt='crop profile'/>
                    <p className='text-[#778761] font-bold'>Crop Management</p>
                </div>
            </Link>
            
            {/* plant_o */}
            <Link to={'/plant_o'}>
                <div className='flex pl-6 py-4 space-x-4 mt-6'>
                    <img src={plant_o} alt='crop profile'/>
                    <p className='text-[#565656] font-bold'>Plant Operations</p>
                </div>
            </Link>
            
            
            
        </div>
        {/* right container */}
        <div className='mt-10 flex w-full flex-col'>
            {/* Navbar container */}
            <Navbar/>
            {/* button and header */}
            <div className='flex mx-10 justify-between border-b pb-8'>
                <h2 className='text-4xl font-semibold'>Crop Management</h2>
                {/* button container */}
                {/* <div className='bg-[#17233C] text-white py-3 px-4 rounded-md '>
                    <p>Analyze Crop Yield</p>
                </div> */}

            </div>
            {/* Parent container */}
            <div className='flex flex-col space-y-12 m-10 w-3/5'>
                {/* header container */}
                <div>
                    <h1 className='mb-4 text-[#313131] text-3xl font-semibold'>Pest And Disease Management</h1>
                    <p className='text-[#565656]'>Below are some of the diseases and pests that can affect maize and how to control them:
                    </p>
                </div>
                {/* image 1 container */}
                <div className='my-10 mx-2'>    
                    {/* tick container */}
                    <div className='space-x-6 flex pb-4'>
                        <img src={circle} alt='circle' width={30}/>
                        <p className='text-[#313131] font-bold text-2xl'>Downy Mildew</p>
                    </div>
                    <img src={mildew} alt='flint'/>
                    <div>
                        <p className='text-[#565656] pt-6'>Downy mildew can affect maize crop in Nigeria. This is an oomycetes infection that changes the color of the leaves of the maize plant
                         to yellow and brown. It negatively impacts the photosynthetic process in the plant and ultimately leads to low yield. To prevent this disease, maize seeds should be coated with Metalaxyl.
                         Foliar fungicides like Mancozeb and copper oxide can be used.
                        </p>
                    </div>

                </div>
                {/* image 2 container */}
                <div className='my-10 mx-2'>    
                    {/* tick container */}
                    <div className='space-x-6 flex pb-4'>
                        <img src={circle} alt='circle' width={30}/>
                        <p className='text-[#313131] font-bold text-2xl'>Leaf Blight</p>
                    </div>
                    <img src={blight} alt='flint'/>
                    <div>
                        <p className='text-[#565656] pt-6'>This is a fungal disease that can affect maize plants in Nigeria. Fungicides like mancozeb or any copper fungicides can be used as preventive or curative methods for the disease.
                        </p>
                    </div>

                </div>
                {/* image 3 container */}
                <div className='my-10 mx-2'>    
                    {/* tick container */}
                    <div className='space-x-6 flex pb-4'>
                        <img src={circle} alt='circle' width={30}/>
                        <p className='text-[#313131] font-bold text-2xl'>Maize Rust Disease</p>
                    </div>
                    <img src={rust} alt='flint'/>
                    <div>
                        <p className='text-[#565656] pt-6'>Rust is also a fungal disease that can affect maize crop in Nigeria. The foliar application of Diathane or any good fungicides can prevent or cure this disease.
                        </p>
                    </div>

                </div>
                
                 
            </div>
        </div>
    </div>
  )
}

export default CropManagement