import React from 'react'
import cocoa from '../../assets/cocoa.png'
import logo from '../../assets/logo-white-bg.png'
import google from '../../assets/google-s.png'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    // paret container
    <div className='flex '>
      {/* left container */}
      <div className='sm:hidden md:block'><img src={cocoa}  className='h-max bg-contain bg-red-500' alt='cocoa'/></div>
      {/* right container */}
      <div className='md:w-1/2 sm:w-full container mx-auto mt-10 ml-20'>
        <img src={logo} width={150} alt='Mungin'/>
        <h2 className='text-3xl font-semibold text-[#313131] mt-20 mb-6'>Register with us</h2>
        {/* google button */}
        <div className='flex justify-center w-1/2 border p-4 '>
          <img src={google} width={20} className='mr-2' alt='google'/>
          <button className='text-sm text-[#313131]'>Continue with Google</button>
        </div>
        <p className='text-[#888888] text-center w-1/2 py-4'>OR</p>
        {/* form container */}
        <div className='text-[#313131] space-y-6'>
            {/* name container */}
          <div>
            <p className='mb-2'>Full Name</p>
            <input type='text' placeholder='hotel jerry' className='py-3 pl-4 flex-1  border w-1/2'/>
          </div>
          {/* email */}
          <div>
            <p className='mb-2'>Email Address</p>
            <input type='email' placeholder='hoteljerry@gmail.com' className='py-3 pl-4 flex-1  border w-1/2'/>
          </div>
          {/* password */}
          <div>
            <p className='mb-2'>Password</p>
            <input type='password' placeholder='hotel jerry' className='py-3 pl-4 flex-1  border w-1/2'/>
          </div>
          {/* button container */}
          <div>
            <button className='py-3 pl-2 flex flex-1 justify-center border w-1/2 bg-[#17233C] text-white'>Register</button>
          </div>
          <p className='text-[#888888]'>Already have an account? <Link to={'/login'}><span className='text-[#333333]'>Login</span></Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register