import React from 'react'
import minicard from '../../assets/working process.png'
import unlockdata from '../../assets/unlock_data.png'
import analysis from '../../assets/activate_analysis.png'
import accelerate from '../../assets/accelerate_value.png'


const MiniCard = () => {
  return (
    // <div className='rounded-lg flex justify-center mt-24'><img src={minicard} alt='minicard'/></div>
    // parent container
    <div className='flex flex-col items-center space-y-12 mt-12'>
      {/* header container */}
      <div className='font-Nuecha text-center space-y-1'>
        <p className='text-[#ababab]'>How it works</p>
        <p className='text-3xl text-[#313131] font-sans font-bold'>Working Process</p>
      </div>
      {/* Minicards container */}
      <div className='grid md:grid-cols-3 gap-6 sm:grid-cols-1'>
        {/* minicard 1 container */}
        {/* <div className='relative bg-yellow-500 flex flex-col-reverse flex-1 space-x-8'> 
          <img src={unlockdata} width={150} alt="unlock data" className=' block h-auto' />
          <div className='pt-16'>
            <p>Unlock Data</p>
          </div>
          <div className='absolute mr-14 bg-red-500 top-0 bottom-0 h-full w-full text-center opacity-0 ease-linear duration-500 hover:opacity-100 '>
            <p className='text-lg mr-12 rounded-lg top-0 bottom-0 left-0 px-10 py-8 w-full text-white'>Combining an uncompromising engineering mindset with an unwavering focus on data sourcing and 
              aggregation making ready data that meets the highest level of integrity and reliability available
               for analysis.
            </p>
          </div>
        </div> */}
        {/* card 1 */}
        <div className=' p-6 rounded-lg space-y-4 shadow-4xl hover:animate-pulse cursor-pointer'>
          {/* header div */}
          <div className='flex space-x-6 border-b pb-2 w-1/2  '>
            <img src={unlockdata} width={45} alt="" />
            <p className='pt-2 font-semibold text-xl'>Unlock Data</p>
          </div>
          {/* body container */}
          <div className='text-[#5B5B5B]'>
            <p>Combining an uncompromising engineering mindset with an unwavering focus on data sourcing and 
              aggregation making ready data that meets the highest level of integrity and reliability available
            </p>
          </div>
        </div>


        {/* card 2 */}
        <div className=' p-6 rounded-lg space-y-4 hover:animate-pulse cursor-pointer shadow-4xl '>
          {/* header div */}
          <div className='flex space-x-6 border-b pb-2 w-1/2  '>
            <img src={analysis} width={45} alt="" />
            <p className='pt-2 font-semibold text-xl'>Activate Analysis</p>
          </div>
          {/* body container */}
          <div className='text-[#5B5B5B]'>
            <p>Leveraging  advanced analytics we sift through chaotic data and information
              to combine all crucial data into one comprehensive and flexible structure, creating
              personalized real-time dashboards that make managing agricultural business insights easier.
            </p>
          </div>
        </div>


        {/* card 3 */}
        <div className=' p-6 rounded-lg space-y-4 hover:animate-pulse cursor-pointer shadow-4xl '>
          {/* header div */}
          <div className='flex space-x-6 border-b pb-2 w-1/2  '>
            <img src={accelerate} width={45} alt="" />
            <p className='pt-2 font-semibold text-xl'>Accelerate Value</p>
          </div>
          {/* body container */}
          <div className='text-[#5B5B5B]'>
            <p>By providing insights-as-a-service: Actionable agricultural and business insights out of data.
              With good data and the right technology, people and institutions in Nigeria today will be able 
              to solve the hard problems and change the country for the better.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiniCard