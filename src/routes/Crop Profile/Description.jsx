import React from 'react'
import mungin from '../../assets/logo-white-bg.png'
import crop_p from '../../assets/vector/crop_p.png'
import cultivar from '../../assets/vector/cultivar.png'
import variety from '../../assets/vector/variety.png'
import description from '../../assets/green_vector/description.png'
import crop_v from '../../assets/vector/crop_v.png'
import production_f from '../../assets/vector/production_f.png'
import plant_a from '../../assets/vector/plant_a.png'
import morphology from '../../assets/vector/morphology.png'
import post_h from '../../assets/vector/post_h.png'
import climatic_r from '../../assets/vector/climatic_r.png'
import soil_r from '../../assets/vector/soil_r.png'
import nutrient_r from '../../assets/vector/nutrient_r.png'
import crop_m from '../../assets/vector/crop_m.png'
import plant_o from '../../assets/vector/plant_o.png'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Reusable components/Navbar'
import map from '../../assets/map.png'
const Description = () => {
  return (
    // parent container
    <div className='flex'>
        {/* left container */}
        <div className=' pt-6 w-1/4 shadow-3xl'>
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
                <div className='flex pl-6 py-4 space-x-4 mt-6 bg-[#F4F4F4]'>
                    <img src={description} alt='crop profile'/>
                    <p className='text-[#778761] text-[#565656] font-bold'>Description</p>
                </div>
            </Link>
            
            {/* crop_v */}
            <Link to={'/crop_v'}>
                <div className='flex pl-6 py-4 space-x-4 mt-6'>
                    <img src={crop_v} alt='crop profile'/>
                    <p className='text-[#565656] font-bold'>Crop Value</p>
                </div>
            </Link>
            
            {/* production_f */}
            <Link to={'/production_f'}>
                <div className='flex pl-6 py-4 space-x-4 mt-6'>
                    <img src={production_f} alt='crop profile'/>
                    <p className='text-[#565656] font-bold'>Production Facts</p>
                </div>
            </Link>
            
            {/* plant_a */}
            <Link to={'/plant_a'}>
                <div className='flex pl-6 py-4 space-x-4 mt-6'>
                    <img src={plant_a} alt='crop profile'/>
                    <p className='text-[#565656] font-bold'>Plant Anatomy</p>
                </div>
            </Link>
            
            {/* morphology */}
            <Link to={'/morphology'}>
                <div className='flex pl-6 py-4 space-x-4 mt-6'>
                    <img src={morphology} alt='crop profile'/>
                    <p className='text-[#565656] font-bold'>Morphology</p>
                </div>
            </Link>
            
            {/* post_h */}
            <Link to={'/post_h'}>
                <div className='flex pl-6 py-4 space-x-4 mt-6'>
                    <img src={post_h} alt='crop profile'/>
                    <p className='text-[#565656] font-bold'>Post-Harvest Operations</p>
                </div>
            </Link>
            
            {/* climatic_r */}
            <Link to={'/climatic_r'}>
                <div className='flex pl-6 py-4 space-x-4 mt-6'>
                    <img src={climatic_r} alt='crop profile'/>
                    <p className='text-[#565656] font-bold'>Climatic Requirements</p>
                </div>
            </Link>
            
            {/* soil_r */}
            <Link to={'/soil_r'}>
                <div className='flex pl-6 py-4 space-x-4 mt-6'>
                    <img src={soil_r} alt='crop profile'/>
                    <p className='text-[#565656] font-bold'>Soil Requirements</p>
                </div>
            </Link>
            
            {/* nutrient_r */}
            <Link to={'/nutrient_r'}>
                <div className='flex pl-6 py-4 space-x-4 mt-6'>
                    <img src={nutrient_r} alt='crop profile'/>
                    <p className='text-[#565656] font-bold'>Nutrient Requirements</p>
                </div>
            </Link>
            
            {/* crop_m */}
            <Link to={'/crop_m'}>
                <div className='flex pl-6 py-4 space-x-4 mt-6'>
                    <img src={crop_m} alt='crop profile'/>
                    <p className='text-[#565656] font-bold'>Crop Management</p>
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
                <h2 className='text-4xl font-semibold'>Description</h2>
                {/* button container */}
                <div className='bg-[#17233C] text-white py-3 px-4 rounded-md '>
                    <p>Analyze Crop Yield</p>
                </div>

            </div>
            {/* content */}
            {/* parent container */}
            <div className='flex flex-col space-y-8 m-10 w-3/5'>
                {/* image container */}
                <div>
                    <p className='text-[#313131] mb-4 text-3xl font-semibold'>Area Grown</p>
                    <img src={map} alt='map'/>
                </div>
                {/* history container */}
                <div>
                    <h1 className='mb-4 text-[#313131] text-3xl font-semibold'>History</h1>
                    <p className='text-[#565656]'>Maize was used merely as a test crop for soil fertility to determine the influence of green manners and various sequences of crops in the rotation. Maize has been in the diet of Nigerians for centuries. It started as a subsistence crop and has gradually become a more important crop. Maize has now risen to a commercial crop on which many 
                        agro-based industries depend on as raw materials.
                         Although maize is increasingly being utilized for livestock feed, it is still a very important staple food for millions of Nigerians. Maize in Nigeria is mainly produced by smallholder farmers, each cultivating an average of 0.65Ha (Sahel Reports, 2014). Cropping systems differ from North to South.
                         Northern farmers typically do not practice intercropping. While, in the South, maize is usually intercropped with yam, cassava, guinea corn, rice, cowpea, groundnut, and soybeans.</p>
                </div>
                 {/* Domestication container */}
                 <div>
                    <h1 className='mb-4 text-[#313131] text-3xl font-semibold'>Domestication</h1>
                    <p className='text-[#565656]'>Maize was domesticated in central Mexico around 1500BC, was introduced into Africa around 1500 AD, and spread to every corner of the continent within 
                        a relatively short period and is now Africa’s most important cereal crop.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Description